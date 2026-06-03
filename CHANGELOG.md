# CHANGELOG (版本变更历史)

All notable changes to this project will be documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-06-03

### Added
- **自动化测试框架**：配置 `Vitest` 用于执行前端单元测试，编写并验证了词表 CRUD 管理的基础单元测试套件。
- **词表分页渲染优化**：在词库对照管理页内添加前端分页机制（默认每页 50 条），防止一次性向 DOM 注入 2300+ 行记录，彻底解决点击卡顿性能问题。
- **记住密钥安全开关**：提供“记住 API Key”的可选复选框，若关闭则将密钥转由 `sessionStorage` 仅会话保持，降低 LocalStorage 被扫描窃取的风险。
- **单语言预览交互能力**：在印唛排版实物预览中，为“单语言标签预览”模版添加独立的语言切换控制下拉框，解决用户在选中拼接目标语种后画面无法实时预览单个词条的问题。
- **文档说明与指南**：重写 `README.md` 以详尽阐释 OmniX 的业务特性、离线运行指南、开发调试和编译说明。

### Fixed
- **React 渲染 crash 问题**：修正 `MockupLabel.tsx` 双面排版中对未定义标签 `<SensorMarkJSX />` 和 `<CutLineJSX />` 的错误引用，改用定义好的 `<SensorMark />` 与 `<CutLine />`。
- **XSS 漏洞防范**：在 exported layout 页面拼接中注入 `escapeHtml` 转义过滤，解决用户源数据/翻译数据直接使用模板字符串内联可能导致的 DOM 级别 XSS 注入风险。
- **表单无障碍关联**：为词典编辑与 API Settings 的输入表单分配 `id` 属性，并将 label 的 `htmlFor` 与其互联，优化屏幕阅读器辅助体验。
- **API 超时挂起机制**：使用 `AbortController` 重构 fetch 接口，为 Gemini、OpenAI、Anthropic 请求设置 25 秒强制超时，防止网络异常导致页面无限等待。
- **编译/语法错误**：修正 state 级联 Effect 及函数提前调用的 hoisting 语法错误，使得 `npm run lint` 和 `npm run build` 可以 100% 成功。
