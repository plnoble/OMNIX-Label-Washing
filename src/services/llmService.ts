import type { ParsedWashLabel, LLMProvider } from '../types';

const GEMINI_NATIVE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

const RESPONSE_SCHEMA = {
  type: 'OBJECT',
  properties: {
    styleNo: { type: 'STRING', description: '款号，如款式编号、Style No 等' },
    size: { type: 'STRING', description: '尺码，如 175/96A、L 等' },
    safetyClass: { type: 'STRING', description: '国标安全技术规范类别，只能是 A类、B类、C类 中的一个，如无则为空' },
    origin: { type: 'STRING', description: '产地，如 中国制造、Made in China 等' },
    category: { type: 'STRING', description: '服装品名/类目，如 时尚牛仔裤、针织衫 等，如无则为空' },
    sku: { type: 'STRING', description: '物料编码/印刷数量，如 SKU:1__1000PCS 等，如无则为空' },
    materials: {
      type: 'ARRAY',
      description: '纤维面料成分列表，如区分面料/里料等，则作为多个组提取',
      items: {
        type: 'OBJECT',
        properties: {
          part: { type: 'STRING', description: '部位名称，如 面料、里料、罗纹、填充物，如未标注则为空' },
          fibers: {
            type: 'ARRAY',
            description: '该部位所包含的各种纤维纤维列表',
            items: {
              type: 'OBJECT',
              properties: {
                percentage: { type: 'NUMBER', description: '成分百分比数字，如 100, 65, 35 等，直接写数值' },
                name: { type: 'STRING', description: '纤维中文名称，必须是中文，如 聚酯纤维、棉、氨纶' }
              },
              required: ['percentage', 'name']
            }
          },
          rawText: { type: 'STRING', description: '原始完整的中文成分文本，如 面料: 100% 聚酯纤维 或 65% 棉 35% 聚酯纤维' }
        },
        required: ['fibers', 'rawText']
      }
    },
    washInstructions: {
      type: 'ARRAY',
      description: '提取出的所有中文洗涤护理说明短语或图标对应的规范用语列表，如 30℃常规水洗、不可漂白、平摊晾干',
      items: { type: 'STRING' }
    }
  },
  required: ['materials', 'washInstructions']
};

const SYSTEM_PROMPT = `You are a Garment Care Label Parser. Analyze the input care label (image or text) and return ONLY a JSON object matching this schema:
{
  "styleNo": "style number or empty string",
  "size": "size specification or empty string",
  "safetyClass": "must be one of: 'A类', 'B类', 'C类' or empty string",
  "origin": "e.g. '中国制造' or empty string",
  "category": "garment category/name or empty string",
  "sku": "e.g. 'SKU:1__1000PCS' or empty string",
  "materials": [
    {
      "part": "e.g. '面料' or '里料' or empty string",
      "fibers": [
        { "percentage": 100, "name": "fiber Chinese name, e.g. '聚酯纤维'" }
      ],
      "rawText": "original raw Chinese composition text"
    }
  ],
  "washInstructions": ["list", "of", "care", "instructions", "in", "Chinese", "e.g. '30℃常规水洗', '不可漂白'"]
}

CRITICAL RULES:
1. Fiber names and wash instructions MUST be extracted/translated into Standard Chinese (e.g. "聚酯纤维" instead of "Polyester").
2. Only return the raw JSON object. Do not wrap in markdown blocks, do not add any comments.
3. If information is not present, use empty string "" or empty array.`;

/**
 * 健壮的 JSON 提取器：能够从大模型输出中剥离 Markdown 等非 JSON 格式
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractJson(text: string): any {
  const trimmed = text.trim();
  try {
    return JSON.parse(trimmed);
  } catch {
    // 尝试提取 ```json ... ``` 块
    const match = trimmed.match(/```json\s*([\s\S]*?)\s*```/);
    if (match && match[1]) {
      try {
        return JSON.parse(match[1].trim());
      } catch {
        // Fallback
      }
    }
    // 尝试提取首个 { 和最后一个 } 之间的内容
    const firstBrace = trimmed.indexOf('{');
    const lastBrace = trimmed.lastIndexOf('}');
    if (firstBrace !== -1 && lastBrace !== -1 && lastBrace > firstBrace) {
      try {
        return JSON.parse(trimmed.substring(firstBrace, lastBrace + 1));
      } catch {
        // Fallback
      }
    }
    throw new Error('LLM 响应数据解析为 JSON 失败，原始响应为:\n' + text);
  }
}

export class LLMService {
  /**
   * 带超时控制的 Fetch 请求封装
   */
  private static async fetchWithTimeout(url: string, options: RequestInit, timeoutMs = 25000): Promise<Response> {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeoutMs);
    try {
      return await fetch(url, {
        ...options,
        signal: controller.signal
      });
    } catch (err) {
      if (err instanceof Error && err.name === 'AbortError') {
        throw new Error(`网络请求超时（超过限制的 ${timeoutMs / 1000} 秒），请检查您的网络连接或 API Key 状态。`, { cause: err });
      }
      throw err;
    } finally {
      clearTimeout(id);
    }
  }

  /**
   * 通用文本提取与结构化洗标信息
   */
  static async extractLabelFromText(
    text: string,
    provider: LLMProvider,
    endpoint: string,
    model: string,
    apiKey: string
  ): Promise<ParsedWashLabel> {
    if (!apiKey) {
      throw new Error('请先在系统配置中填写对应的 API Key');
    }

    const promptText = `${SYSTEM_PROMPT}\n\n请解析以下中文洗标文本：\n\n${text}`;

    if (provider === 'gemini-native') {
      const url = `${GEMINI_NATIVE_URL}/${model}:generateContent?key=${apiKey}`;
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: promptText }] }],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: RESPONSE_SCHEMA
          }
        })
      });
      return this.handleGeminiResponse(response);
    }

    if (provider === 'openai') {
      const cleanEndpoint = endpoint.trim().replace(/\/$/, '');
      const url = cleanEndpoint.includes('/chat/completions') ? cleanEndpoint : `${cleanEndpoint}/chat/completions`;
      
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: `请解析以下中文洗标文本：\n\n${text}` }
          ],
          response_format: { type: 'json_object' }
        })
      });
      return this.handleOpenAIResponse(response);
    }

    if (provider === 'anthropic') {
      const cleanEndpoint = endpoint.trim().replace(/\/$/, '');
      const url = cleanEndpoint.includes('/messages') ? cleanEndpoint : `${cleanEndpoint}/messages`;
      
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'dangerouslyAllowBrowser': 'true'
        },
        body: JSON.stringify({
          model: model,
          max_tokens: 4000,
          system: SYSTEM_PROMPT + '\n\nCRITICAL: Return ONLY a raw JSON string. Do not wrap in markdown code blocks.',
          messages: [
            { role: 'user', content: `请解析以下中文洗标文本：\n\n${text}` }
          ]
        })
      });
      return this.handleAnthropicResponse(response);
    }

    throw new Error('未知的 API 协议类型');
  }

  /**
   * 通用多模态图片/PDF 提取结构化洗标信息
   */
  static async extractLabelFromImage(
    base64Data: string,
    mimeType: string,
    provider: LLMProvider,
    endpoint: string,
    model: string,
    apiKey: string
  ): Promise<ParsedWashLabel> {
    if (!apiKey) {
      throw new Error('请先在系统配置中填写对应的 API Key');
    }

    const cleanBase64 = base64Data.replace(/^data:image\/\w+;base64,/, '');

    if (provider === 'gemini-native') {
      const url = `${GEMINI_NATIVE_URL}/${model}:generateContent?key=${apiKey}`;
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                { text: SYSTEM_PROMPT },
                {
                  inlineData: {
                    mimeType: mimeType,
                    data: cleanBase64
                  }
                }
              ]
            }
          ],
          generationConfig: {
            responseMimeType: 'application/json',
            responseSchema: RESPONSE_SCHEMA
          }
        })
      });
      return this.handleGeminiResponse(response);
    }

    if (provider === 'openai') {
      const cleanEndpoint = endpoint.trim().replace(/\/$/, '');
      const url = cleanEndpoint.includes('/chat/completions') ? cleanEndpoint : `${cleanEndpoint}/chat/completions`;
      
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: model,
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            {
              role: 'user',
              content: [
                { type: 'text', text: 'Analyze this garment care label image and extract structures.' },
                {
                  type: 'image_url',
                  image_url: {
                    url: `data:${mimeType};base64,${cleanBase64}`
                  }
                }
              ]
            }
          ],
          response_format: { type: 'json_object' }
        })
      });
      return this.handleOpenAIResponse(response);
    }

    if (provider === 'anthropic') {
      const cleanEndpoint = endpoint.trim().replace(/\/$/, '');
      const url = cleanEndpoint.includes('/messages') ? cleanEndpoint : `${cleanEndpoint}/messages`;
      
      const response = await this.fetchWithTimeout(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': apiKey,
          'anthropic-version': '2023-06-01',
          'dangerouslyAllowBrowser': 'true'
        },
        body: JSON.stringify({
          model: model,
          max_tokens: 4000,
          system: SYSTEM_PROMPT + '\n\nCRITICAL: Return ONLY a raw JSON string. Do not wrap in markdown code blocks.',
          messages: [
            {
              role: 'user',
              content: [
                {
                  type: 'image',
                  source: {
                    type: 'base64',
                    media_type: mimeType,
                    data: cleanBase64
                  }
                },
                {
                  type: 'text',
                  text: 'Analyze this garment care label image and extract structures.'
                }
              ]
            }
          ]
        })
      });
      return this.handleAnthropicResponse(response);
    }

    throw new Error('未知的 API 协议类型');
  }

  // --- 响应解析助手方法 ---

  private static async handleGeminiResponse(response: Response): Promise<ParsedWashLabel> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error?.message || `Gemini API 响应失败，状态码: ${response.status}`);
    }
    const resJson = await response.json();
    const textResult = resJson.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!textResult) {
      throw new Error('Gemini API 返回内容为空，可能是触发了安全限制');
    }
    return extractJson(textResult);
  }

  private static async handleOpenAIResponse(response: Response): Promise<ParsedWashLabel> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error?.message || `OpenAI 兼容接口响应失败，状态码: ${response.status}`);
    }
    const resJson = await response.json();
    const textResult = resJson.choices?.[0]?.message?.content;
    if (!textResult) {
      throw new Error('OpenAI 兼容接口返回内容为空');
    }
    return extractJson(textResult);
  }

  private static async handleAnthropicResponse(response: Response): Promise<ParsedWashLabel> {
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData?.error?.message || `Anthropic API 接口响应失败，状态码: ${response.status}`);
    }
    const resJson = await response.json();
    const textResult = resJson.content?.[0]?.text;
    if (!textResult) {
      throw new Error('Anthropic API 接口返回内容为空');
    }
    return extractJson(textResult);
  }
}
