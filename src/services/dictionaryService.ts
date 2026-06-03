import type { TranslationRow } from '../types';

// 内置的行业标准洗标多语种对照库 (GB/T 8685 & ISO 3758 标准)
const DEFAULT_DICTIONARY: Record<string, TranslationRow> = {
  '0-3个月': {
    cn: '0-3个月', en: '0-3 Months', th: '0-3 เดือน', vn: '0-3 Tháng', es: '0-3 Meses',
    pt: '0-3 Meses', id_lang: '0-3 Bulan', ru: '0-3 мес.', fr: '0-3 Mois', ar: '0-3 شهور', ja: ''
  },
  '12-18个月': {
    cn: '12-18个月', en: '12-18 Months', th: '12-18 เดือน', vn: '12-18 Tháng', es: '12-18 Meses',
    pt: '12-18 Meses', id_lang: '12-18 Bulan', ru: '12-18 мес.', fr: '12-18 Mois', ar: '12-18 شهور', ja: ''
  },
  '12个月': {
    cn: '12个月', en: '12 Months', th: '12 เดือน', vn: '12 tháng', es: '12 meses',
    pt: '12 meses', id_lang: '12 bulan', ru: '12 месяцев', fr: '12 mois', ar: '12 شهرًا', ja: ''
  },
  '18-24个月': {
    cn: '18-24个月', en: '18-24 Months', th: '18-24 เดือน', vn: '18-24 Tháng', es: '18-24 Meses',
    pt: '18-24 Meses', id_lang: '18-24 Bulan', ru: '18-24 мес.', fr: '18-24 Mois', ar: '18-24 شهور', ja: ''
  },
  '18个月': {
    cn: '18个月', en: '18 Months', th: '18 เดือน', vn: '18 tháng', es: '18 meses',
    pt: '18 meses', id_lang: '18 bulan', ru: '18 месяцев', fr: '18 mois', ar: '18 شهرًا', ja: ''
  },
  '1、皮革长时间不使用时请放置干燥剂，并用软纸撑起防止变形。2、慎防高温、霉、酸、雨淋、碰刮、重压及超负荷盛物。3、定期用皮革保护剂抹皮面及金属配件，以保持皮革的光亮及耐用。4、皮革制品上的毛孔及皮纹属自然形成，不列入皮革保养范畴。': {
    cn: '1、皮革长时间不使用时请放置干燥剂，并用软纸撑起防止变形。2、慎防高温、霉、酸、雨淋、碰刮、重压及超负荷盛物。3、定期用皮革保护剂抹皮面及金属配件，以保持皮革的光亮及耐用。4、皮革制品上的毛孔及皮纹属自然形成，不列入皮革保养范畴。', en: '1. When leather is not used for a long time, please place desiccant and stuff it with soft paper to prevent deformation. 2. Beware of high temperatures, mildew, acids, rain, scratches, heavy pressure, and overloading. 3. Regularly apply leather protector to the leather surface and metal accessories to keep the leather shiny and durable. 4. The pores and leather patterns on leather products are naturally formed and are not included in the scope of leather maintenance.', th: '1. เมื่อไม่ได้ใช้งานเครื่องหนังเป็นเวลานาน โปรดใส่สารดูดความชื้นและใช้กระดาษนุ่มรองด้านในเพื่อป้องกันการเสียรูป 2. ระวังความร้อนสูง เชื้อรา กรด น้ำฝน การขีดข่วน การกดทับ และการบรรจุเกินพิกัด 3. ใช้ผลิตภัณฑ์ดูแลเครื่องหนังเช็ดทำความสะอาดพื้นผิวหนังและอุปกรณ์โลหะเป็นประจำ เพื่อรักษาความเงางามและความทนทานของเครื่องหนัง 4. รูขุมขนและลายหนังบนผลิตภัณฑ์เครื่องหนังเป็นลักษณะตามธรรมชาติ ไม่จัดอยู่ในขอบเขตการดูแลรักษาเครื่องหนัง', vn: '1. Khi để da không sử dụng trong thời gian dài, vui lòng đặt chất hút ẩm và dùng giấy mềm để giữ phom dáng, tránh biến dạng. 2. Cẩn thận tránh nhiệt độ cao, ẩm mốc, axit, mưa, va quệt, ép nặng và đựng quá tải. 3. Thường xuyên dùng sản phẩm bảo dưỡng da lau bề mặt da và phụ kiện kim loại để giữ cho da sáng bóng và bền. 4. Lỗ chân lông và vân da trên sản phẩm da là tự nhiên, không thuộc phạm vi bảo dưỡng da.', es: '1. Cuando el cuero no se use durante mucho tiempo, colóquelo con un desecante y sosténgalo con papel blando para evitar deformaciones. 2. Tenga cuidado con las altas temperaturas, el moho, los ácidos, la lluvia, los golpes, las presiones fuertes y las cargas excesivas. 3. Limpie periódicamente la superficie de cuero y los accesorios metálicos con un protector para cuero para mantener el brillo y la durabilidad del mismo. 4. Los poros y las texturas del cuero en los productos de cuero se forman de forma natural y no entran en el alcance del cuidado del cuero.',
    pt: '1. Quando o couro não for usado por muito tempo, coloque um dessecante e use papel macio para evitar deformações. 2. Tenha cuidado com altas temperaturas, mofo, ácidos, chuva, arranhões, pressão excessiva e excesso de carga. 3. Limpe regularmente a superfície do couro e os acessórios de metal com um protetor de couro para manter o brilho e a durabilidade. 4. Os poros e as linhas de couro em produtos de couro são formados naturalmente e não estão incluídos no escopo de cuidados com o couro.', id_lang: '1. Saat kulit tidak digunakan dalam waktu lama, harap masukkan pengering dan topang dengan kertas lembut untuk mencegah perubahan bentuk. 2. Hindari suhu tinggi, jamur, asam, hujan, goresan, tekanan berat, dan barang bawaan yang melebihi kapasitas. 3. Oleskan pelindung kulit secara berkala pada permukaan kulit dan aksesori logam untuk menjaga kilau dan daya tahan kulit. 4. Pori-pori dan tekstur kulit pada produk kulit terbentuk secara alami dan tidak termasuk dalam cakupan perawatan kulit.', ru: '1. Когда кожаное изделие долго не используется, поместите в него влагопоглотитель и набейте мягкой бумагой, чтобы предотвратить деформацию. 2. Избегайте высоких температур, плесени, кислот, дождя, ударов, сильного давления и перегрузки. 3. Регулярно протирайте поверхность кожи и металлические детали средством по уходу за кожей, чтобы сохранить ее блеск и долговечность. 4. Поры и текстура кожи являются естественными особенностями и не относятся к дефектам.', fr: '1. Lorsque le cuir n\'est pas utilisé pendant une longue période, veuillez placer un déshydratant et le soutenir avec du papier doux pour éviter toute déformation. 2. Évitez la chaleur élevée, la moisissure, les acides, la pluie, les éraflures, les pressions excessives et le remplissage en surcharge. 3. Appliquez régulièrement un protecteur pour cuir sur la surface du cuir et les accessoires métalliques pour maintenir la brillance et la durabilité du cuir. 4. Les pores et les textures du cuir sont naturels et ne relèvent pas de la catégorie de l\'entretien du cuir.', ar: '1. عند عدم استخدام المنتجات الجلدية لفترة طويلة، يرجى وضع مادة مجففة، ودعمها بورق ناعم لمنع التشوه. 2. احذر من درجات الحرارة العالية والعفن والأحماض وأمطار، والخدوش، والضغط الشديد، والحمل الزائد. 3. استخدم واقي الجلد بانتظام لمسح سطح الجلد والملحقات المعدنية للحفاظ على لمعان ومتانة الجلد. 4. المسام والجلد على المنتجات الجلدية تتشكل بشكل طبيعي ولا تدخل ضمن نطاق العناية بالجلد.', ja: ''
  },
  '2岁': {
    cn: '2岁', en: '2 Years', th: '2 ปี', vn: '2 tuổi', es: '2 años',
    pt: '2 anos', id_lang: '2 tahun', ru: '2 года', fr: '2 ans', ar: 'سنتان', ja: ''
  },
  '2岁(2T)': {
    cn: '2岁(2T)', en: '2 Years (2T)', th: '2 ปี (2T)', vn: '2 Tuổi (2T)', es: '2 Años (2T)',
    pt: '2 Anos (2T)', id_lang: '2 Tahun (2T)', ru: '2 года (2T)', fr: '2 Ans (2T)', ar: 'سنتان (2T)', ja: ''
  },
  '3-6个月': {
    cn: '3-6个月', en: '3-6 Months', th: '3-6 เดือน', vn: '3-6 Tháng', es: '3-6 Meses',
    pt: '3-6 Meses', id_lang: '3-6 Bulan', ru: '3-6 мес.', fr: '3-6 Mois', ar: '3-6 شهور', ja: ''
  },
  '30°C机洗': {
    cn: '30°C机洗', en: 'Machine Wash 30°C', th: 'ซักเครื่อง 30°C', vn: 'Giặt máy 30°C', es: 'Lavar a máquina 30°C',
    pt: 'Lavagem à máquina 30°C', id_lang: 'Cuci mesin 30°C', ru: 'Машинная стирка 30°C', fr: 'Lavage en machine 30°C', ar: 'غسيل آلي 30°م', ja: ''
  },
  '30℃常规水洗': {
    cn: '30℃常规水洗', en: 'Machine wash 30°C normal process', th: 'ซักเครื่อง 30°C รอบปกติ', vn: 'Giặt máy 30°C quy trình thường', es: 'Lavar a máquina 30°C proceso normal',
    pt: 'Lavar à máquina 30°C processo normal', id_lang: 'Cuci mesin 30°C proses normal', ru: 'Машинная стирка 30°C, обычный режим', fr: 'Lavage en machine à 30°C, programme normal', ar: 'غسيل آلي 30 درجة مئوية دورة عادية', ja: '洗濯機 30℃ 通常洗濯'
  },
  '30℃缓和水洗': {
    cn: '30℃缓和水洗', en: 'Maximum wash temperature 30 °C. Mild procedure', th: 'อุณหภูมิการซักสูงสุด 30 °C ขั้นตอนที่ไม่รุนแรง', vn: 'Nhiệt độ giặt tối đa 30°C. Quy trình nhẹ', es: 'Temperatura máxima de lavado: 30 °C. Procedimiento suave',
    pt: 'Temperatura máxima de lavagem 30 °C. Procedimento suave', id_lang: 'Suhu pencucian maksimum 30 °C. Prosedur ringan', ru: 'Максимальная температура стирки 30 °C. Деликатный режим', fr: 'Température maximale de lavage 30 °C. Procédure douce', ar: 'أقصى درجة حرارة للغسيل هي 30 مئوية. إجراء خفيف', ja: '洗濯機 30℃ 弱い洗濯'
  },
  '30度机洗': {
    cn: '30度机洗', en: 'Machine Wash 30°C', th: 'ซักเครื่อง 30 องศา', vn: 'Giặt máy 30 độ', es: 'Lavado a máquina 30°C',
    pt: 'Lavar à máquina 30°C', id_lang: 'Cuci Mesin 30°C', ru: 'Машинная стирка 30°C', fr: 'Lavage en machine 30°C', ar: 'غسيل آلي 30 درجة', ja: ''
  },
  '3个月': {
    cn: '3个月', en: '3 Months', th: '3 เดือน', vn: '3 tháng', es: '3 meses',
    pt: '3 meses', id_lang: '3 bulan', ru: '3 месяца', fr: '3 mois', ar: '3 أشهر', ja: ''
  },
  '3岁': {
    cn: '3岁', en: '3 Years', th: '3 ปี', vn: '3 tuổi', es: '3 años',
    pt: '3 anos', id_lang: '3 tahun', ru: '3 года', fr: '3 ans', ar: '3 سنوات', ja: ''
  },
  '3岁(3T)': {
    cn: '3岁(3T)', en: '3 Years (3T)', th: '3 ปี (3T)', vn: '3 Tuổi (3T)', es: '3 Años (3T)',
    pt: '3 Anos (3T)', id_lang: '3 Tahun (3T)', ru: '3 года (3T)', fr: '3 Ans (3T)', ar: '3 سنوات (3T)', ja: ''
  },
  '40°C机洗': {
    cn: '40°C机洗', en: 'Machine Wash 40°C', th: 'ซักเครื่อง 40°C', vn: 'Giặt máy 40°C', es: 'Lavar a máquina 40°C',
    pt: 'Lavagem à máquina 40°C', id_lang: 'Cuci mesin 40°C', ru: 'Машинная стирка 40°C', fr: 'Lavage en machine 40°C', ar: 'غسيل آلي 40°م', ja: ''
  },
  '40℃常规水洗': {
    cn: '40℃常规水洗', en: 'Machine wash 40°C normal process', th: 'ซักเครื่อง 40°C รอบปกติ', vn: 'Giặt máy 40°C quy trình thường', es: 'Lavar a máquina 40°C proceso normal',
    pt: 'Lavar à máquina 40°C processo normal', id_lang: 'Cuci mesin 40°C proses normal', ru: 'Машинная стирка 40°C, обычный режим', fr: 'Lavage en machine à 40°C, programme normal', ar: 'غسيل آلي 40 درجة مئوية دورة عادية', ja: '洗濯機 40℃ 通常洗濯'
  },
  '40度机洗': {
    cn: '40度机洗', en: 'Machine Wash 40°C', th: 'ซักเครื่อง 40 องศา', vn: 'Giặt máy 40 độ', es: 'Lavado a máquina 40°C',
    pt: 'Lavar à máquina 40°C', id_lang: 'Cuci Mesin 40°C', ru: 'Машинная стирка 40°C', fr: 'Lavage en machine 40°C', ar: 'غسيل آلي 40 درجة', ja: ''
  },
  '4岁': {
    cn: '4岁', en: '4 Years', th: '4 ปี', vn: '4 tuổi', es: '4 años',
    pt: '4 anos', id_lang: '4 tahun', ru: '4 года', fr: '4 ans', ar: '4 سنوات', ja: ''
  },
  '4岁(4T)': {
    cn: '4岁(4T)', en: '4 Years (4T)', th: '4 ปี (4T)', vn: '4 Tuổi (4T)', es: '4 Años (4T)',
    pt: '4 Anos (4T)', id_lang: '4 Tahun (4T)', ru: '4 года (4T)', fr: '4 Ans (4T)', ar: '4 سنوات (4T)', ja: ''
  },
  '5岁': {
    cn: '5岁', en: '5 Years', th: '5 ปี', vn: '5 tuổi', es: '5 años',
    pt: '5 anos', id_lang: '5 tahun', ru: '5 лет', fr: '5 ans', ar: '5 سنوات', ja: ''
  },
  '5岁(5T)': {
    cn: '5岁(5T)', en: '5 Years (5T)', th: '5 ปี (5T)', vn: '5 Tuổi (5T)', es: '5 Años (5T)',
    pt: '5 Anos (5T)', id_lang: '5 Tahun (5T)', ru: '5 лет (5T)', fr: '5 Ans (5T)', ar: '5 سنوات (5T)', ja: ''
  },
  '6-9个月': {
    cn: '6-9个月', en: '6-9 Months', th: '6-9 เดือน', vn: '6-9 Tháng', es: '6-9 Meses',
    pt: '6-9 Meses', id_lang: '6-9 Bulan', ru: '6-9 мес.', fr: '6-9 Mois', ar: '6-9 شهور', ja: ''
  },
  '6个月': {
    cn: '6个月', en: '6 Months', th: '6 เดือน', vn: '6 tháng', es: '6 meses',
    pt: '6 meses', id_lang: '6 bulan', ru: '6 месяцев', fr: '6 mois', ar: '6 أشهر', ja: ''
  },
  '9-12个月': {
    cn: '9-12个月', en: '9-12 Months', th: '9-12 เดือน', vn: '9-12 Tháng', es: '9-12 Meses',
    pt: '9-12 Meses', id_lang: '9-12 Bulan', ru: '9-12 мес.', fr: '9-12 Mois', ar: '9-12 شهور', ja: ''
  },
  '9个月': {
    cn: '9个月', en: '9 Months', th: '9 เดือน', vn: '9 tháng', es: '9 meses',
    pt: '9 meses', id_lang: '9 bulan', ru: '9 месяцев', fr: '9 mois', ar: '9 أشهر', ja: ''
  },
  'First-grade product': {
    cn: 'First-grade product', en: 'สินค้าชั้นหนึ่ง', th: 'Sản phẩm hạng nhất', vn: 'Producto de primera calidad', es: 'Produto de primeira qualidade',
    pt: 'Produk kelas satu', id_lang: 'Продукция первого сорта', ru: 'Produit de première qualité', fr: 'منتج من الدرجة الأولى', ar: '', ja: ''
  },
  'PU皮革': {
    cn: 'PU皮革', en: 'PU Leather', th: 'หนัง PU', vn: 'Da PU', es: 'Cuero PU',
    pt: 'Couro PU', id_lang: 'Kulit PU', ru: 'Кожа PU', fr: 'Cuir PU', ar: 'جلد PU', ja: ''
  },
  'PVC皮革': {
    cn: 'PVC皮革', en: 'PVC Leather', th: 'หนัง PVC', vn: 'Da PVC', es: 'Cuero PVC',
    pt: 'Couro PVC', id_lang: 'Kulit PVC', ru: 'Кожа PVC', fr: 'Cuir PVC', ar: 'جلد PVC', ja: ''
  },
  'Qualified product': {
    cn: 'Qualified product', en: 'สินค้าที่ได้มาตรฐาน', th: 'Sản phẩm đạt tiêu chuẩn', vn: 'Producto conforme', es: 'Produto conforme',
    pt: 'Produk yang memenuhi standar', id_lang: 'Соответствующая стандарту продукция', ru: 'Produit conforme', fr: 'منتج مطابق للمواصفات', ar: '', ja: ''
  },
  '七明治': {
    cn: '七明治', en: 'Seven Meiji', th: 'เจ็ดเมจิ', vn: 'Bảy đời Minh Trị', es: 'Siete Meiji',
    pt: 'Sete Meiji', id_lang: 'Tujuh Meiji', ru: 'Седьмой Мэйдзи', fr: 'Sept Meiji', ar: 'سبعة ميجي', ja: ''
  },
  '三加大': {
    cn: '三加大', en: 'XXXL', th: 'XXXL', vn: 'XXXL', es: 'XXXL',
    pt: 'XXXL', id_lang: 'XXXL', ru: 'XXXL', fr: 'XXXL', ar: 'XXXL', ja: ''
  },
  '三醋酯纤维': {
    cn: '三醋酯纤维', en: 'Triacetate fiber', th: 'เส้นใยไตรอะซิเตต', vn: 'Sợi triacetate', es: 'fibra de triacetato',
    pt: 'Fibra de triacetato', id_lang: 'Serat triasetat', ru: 'Триацетатное волокно', fr: 'Fibre de triacétate', ar: 'ألياف ثلاثي الأسيتات', ja: ''
  },
  '上': {
    cn: '上', en: 'superior', th: 'เหนือกว่า', vn: 'thượng đẳng', es: 'superior',
    pt: 'superior', id_lang: 'unggul', ru: 'начальство', fr: 'supérieur', ar: 'أرقى', ja: ''
  },
  '上下装咖色面料': {
    cn: '上下装咖色面料', en: 'Brown fabric for top and bottom', th: 'ผ้าสีน้ำตาลสำหรับท่อนบนและท่อนล่าง', vn: 'Áo và quần đều được làm từ vải màu nâu.', es: 'Tela marrón para la parte superior e inferior.',
    pt: 'Tecido marrom para a parte de cima e de baixo.', id_lang: 'Kain cokelat untuk bagian atas dan bawah', ru: 'Коричневая ткань для верха и низа', fr: 'Tissu marron pour le haut et le bas', ar: 'قماش بني للجزء العلوي والسفلي', ja: ''
  },
  '上下装大身面料': {
    cn: '上下装大身面料', en: 'Fabric of upper and lower body', th: 'เนื้อผ้าของร่างกายส่วนบนและส่วนล่าง', vn: 'Chất liệu của phần thân trên và thân dưới', es: 'Tejido de la parte superior e inferior del cuerpo',
    pt: 'Tecido da parte superior e inferior do corpo', id_lang: 'Jaringan tubuh bagian atas dan bawah', ru: 'Ткань верхней и нижней части тела', fr: 'Tissu du haut et du bas du corps', ar: 'نسيج الجزء العلوي والسفلي من الجسم', ja: ''
  },
  '上下装里料': {
    cn: '上下装里料', en: 'Top and bottom lining', th: 'ซับในด้านบนและด้านล่าง', vn: 'Lớp lót trên và dưới', es: 'Forro superior e inferior',
    pt: 'Forro superior e inferior', id_lang: 'Lapisan atas dan bawah', ru: 'Верхняя и нижняя подкладка', fr: 'doublure supérieure et inférieure', ar: 'بطانة علوية وسفلية', ja: ''
  },
  '上下装面料': {
    cn: '上下装面料', en: 'Fabrics for tops and bottoms', th: 'ผ้าสำหรับทำเสื้อและกางเกง', vn: 'Vải may áo và quần', es: 'Telas para blusas y pantalones',
    pt: 'Tecidos para blusas e calças', id_lang: 'Kain untuk atasan dan bawahan', ru: 'Ткани для верха и низа', fr: 'Tissus pour hauts et bas', ar: 'أقمشة للقمصان والسراويل', ja: ''
  },
  '上半身': {
    cn: '上半身', en: 'upper body', th: 'ส่วนบนของร่างกาย', vn: 'phần thân trên', es: 'parte superior del cuerpo',
    pt: 'parte superior do corpo', id_lang: 'tubuh bagian atas', ru: 'верхняя часть тела', fr: 'haut du corps', ar: 'الجزء العلوي من الجسم', ja: ''
  },
  '上半身里料': {
    cn: '上半身里料', en: 'Upper body lining', th: 'ซับในส่วนบนของร่างกาย', vn: 'lớp lót thân trên', es: 'Revestimiento de la parte superior del cuerpo',
    pt: 'Forro da parte superior do corpo', id_lang: 'lapisan tubuh bagian atas', ru: 'верхняя часть тела', fr: 'doublure supérieure du corps', ar: 'بطانة الجزء العلوي من الجسم', ja: ''
  },
  '上半身面料': {
    cn: '上半身面料', en: 'upper body fabric', th: 'ผ้าสำหรับช่วงบนของร่างกาย', vn: 'vải thân trên', es: 'tejido de la parte superior del cuerpo',
    pt: 'tecido da parte superior do corpo', id_lang: 'kain bagian atas tubuh', ru: 'ткань верхней части тела', fr: 'tissu pour le haut du corps', ar: 'قماش الجزء العلوي من الجسم', ja: ''
  },
  '上半部份面料': {
    cn: '上半部份面料', en: 'upper part of the fabric', th: 'ส่วนบนของผ้า', vn: 'phần trên của vải', es: 'parte superior de la tela',
    pt: 'parte superior do tecido', id_lang: 'bagian atas kain', ru: 'верхняя часть ткани', fr: 'partie supérieure du tissu', ar: 'الجزء العلوي من القماش', ja: ''
  },
  '上层领子': {
    cn: '上层领子', en: 'upper collar', th: 'ปกเสื้อด้านบน', vn: 'cổ áo trên', es: 'cuello superior',
    pt: 'colarinho superior', id_lang: 'kerah atas', ru: 'верхний воротник', fr: 'col supérieur', ar: 'الياقة العلوية', ja: ''
  },
  '上节面料': {
    cn: '上节面料', en: 'upper section fabric', th: 'ผ้าส่วนบน', vn: 'vải phần trên', es: 'Tejido de la sección superior',
    pt: 'tecido da seção superior', id_lang: 'kain bagian atas', ru: 'верхняя секция ткани', fr: 'partie supérieure en tissu', ar: 'قماش الجزء العلوي', ja: ''
  },
  '上衣底层': {
    cn: '上衣底层', en: 'bottom layer of top', th: 'ชั้นล่างสุดของชั้นบน', vn: 'lớp dưới cùng của lớp trên cùng', es: 'capa inferior de la parte superior',
    pt: 'camada inferior da camada superior', id_lang: 'lapisan bawah dari atas', ru: 'нижний слой верхнего', fr: 'couche inférieure du dessus', ar: 'الطبقة السفلية من الطبقة العلوية', ja: ''
  },
  '上衣配料': {
    cn: '上衣配料', en: 'Top accessories', th: 'อุปกรณ์เสริมยอดนิยม', vn: 'Phụ kiện hàng đầu', es: 'Accesorios de primera calidad',
    pt: 'Acessórios principais', id_lang: 'Aksesori terbaik', ru: 'Лучшие аксессуары', fr: 'Accessoires haut de gamme', ar: 'أفضل الإكسسوارات', ja: ''
  },
  '上衣里料': {
    cn: '上衣里料', en: 'Upper garment lining', th: 'ซับในของเสื้อผ้าชั้นนอก', vn: 'Lớp lót áo trên', es: 'Forro de la prenda superior',
    pt: 'Forro da peça superior', id_lang: 'Lapisan pakaian bagian atas', ru: 'Подкладка верхней части одежды', fr: 'doublure supérieure', ar: 'بطانة الملابس العلوية', ja: ''
  },
  '上衣面层面料': {
    cn: '上衣面层面料', en: 'Top outer fabric', th: 'ผ้าชั้นนอกสุด', vn: 'Lớp vải ngoài cùng', es: 'Tejido exterior superior',
    pt: 'Tecido externo superior', id_lang: 'Kain luar bagian atas', ru: 'Верхняя внешняя ткань', fr: 'Tissu extérieur supérieur', ar: 'الطبقة الخارجية العلوية', ja: ''
  },
  '上衣面料': {
    cn: '上衣面料', en: 'Top fabric', th: 'ผ้าชั้นนอก', vn: 'Vải mặt trên', es: 'Tejido superior',
    pt: 'Tecido superior', id_lang: 'Kain bagian atas', ru: 'Верхняя ткань', fr: 'Tissu supérieur', ar: 'قماش علوي', ja: ''
  },
  '上装': {
    cn: '上装', en: 'Top', th: 'สูงสุด', vn: 'Đứng đầu', es: 'Arriba',
    pt: 'Principal', id_lang: 'Atas', ru: 'Вершина', fr: 'Haut', ar: 'قمة', ja: ''
  },
  '上装内件': {
    cn: '上装内件', en: 'Upper body internals', th: 'อวัยวะภายในส่วนบนของร่างกาย', vn: 'các bộ phận bên trong phần thân trên', es: 'órganos internos de la parte superior del cuerpo',
    pt: 'Componentes internos da parte superior do corpo', id_lang: 'Otot-otot internal tubuh bagian atas', ru: 'Внутренние органы верхней части тела', fr: 'organes internes du haut du corps', ar: 'الأعضاء الداخلية للجزء العلوي من الجسم', ja: ''
  },
  '上装内件面料': {
    cn: '上装内件面料', en: 'Upper garment inner fabric', th: 'ผ้าชั้นในของเสื้อตัวนอก', vn: 'vải lót bên trong áo trên', es: 'Tejido interior de la prenda superior',
    pt: 'tecido interno da peça superior', id_lang: 'Kain bagian dalam pakaian bagian atas', ru: 'Внутренняя ткань верхней части одежды', fr: 'Tissu intérieur du vêtement supérieur', ar: 'القماش الداخلي للملابس العلوية', ja: ''
  },
  '上装内层': {
    cn: '上装内层', en: 'Upper inner layer', th: 'ชั้นในสุด', vn: 'Lớp trong trên cùng', es: 'capa interna superior',
    pt: 'Camada interna superior', id_lang: 'Lapisan dalam atas', ru: 'Верхний внутренний слой', fr: 'couche interne supérieure', ar: 'الطبقة الداخلية العليا', ja: ''
  },
  '上装复合面层面料': {
    cn: '上装复合面层面料', en: 'Composite fabric for upper garment', th: 'ผ้าผสมสำหรับเสื้อผ้าท่อนบน', vn: 'Vải tổng hợp dùng cho phần thân trên của áo.', es: 'Tejido compuesto para prendas superiores',
    pt: 'Tecido composto para vestuário superior', id_lang: 'Kain komposit untuk pakaian bagian atas', ru: 'Композитная ткань для верхней части одежды', fr: 'Tissu composite pour vêtement supérieur', ar: 'نسيج مركب للملابس العلوية', ja: ''
  },
  '上装外件': {
    cn: '上装外件', en: 'Upper body parts', th: 'ส่วนบนของร่างกาย', vn: 'các bộ phận thân trên', es: 'Partes superiores del cuerpo',
    pt: 'Partes superiores do corpo', id_lang: 'Bagian tubuh bagian atas', ru: 'Верхние части тела', fr: 'parties supérieures du corps', ar: 'أجزاء الجسم العلوية', ja: ''
  },
  '上装外件袖口': {
    cn: '上装外件袖口', en: 'Outer garment cuffs', th: 'ข้อมือเสื้อนอก', vn: 'Cổ tay áo ngoài', es: 'Puños de prendas exteriores',
    pt: 'punhos da roupa exterior', id_lang: 'Manset pakaian luar', ru: 'Манжеты верхней одежды', fr: 'Poignets des vêtements extérieurs', ar: 'أساور الملابس الخارجية', ja: ''
  },
  '上装外件面料': {
    cn: '上装外件面料', en: 'Outer garment fabric', th: 'ผ้าสำหรับเสื้อผ้าชั้นนอก', vn: 'Vải may mặc ngoài', es: 'Tejido para prendas exteriores',
    pt: 'Tecido para vestuário exterior', id_lang: 'Kain pakaian luar', ru: 'Ткань для верхней одежды', fr: 'Tissu du vêtement extérieur', ar: 'قماش الملابس الخارجية', ja: ''
  },
  '上装外层面料': {
    cn: '上装外层面料', en: 'Outer fabric of the upper garment', th: 'ผ้าชั้นนอกของเสื้อตัวบน', vn: 'Vải ngoài của áo trên', es: 'Tejido exterior de la prenda superior',
    pt: 'Tecido exterior da peça superior', id_lang: 'Kain terluar dari pakaian bagian atas', ru: 'Внешняя ткань верхней одежды', fr: 'Tissu extérieur du vêtement supérieur', ar: 'القماش الخارجي للملابس العلوية', ja: ''
  },
  '上装大身': {
    cn: '上装大身', en: 'upper body', th: 'ส่วนบนของร่างกาย', vn: 'phần thân trên', es: 'parte superior del cuerpo',
    pt: 'parte superior do corpo', id_lang: 'tubuh bagian atas', ru: 'верхняя часть тела', fr: 'haut du corps', ar: 'الجزء العلوي من الجسم', ja: ''
  },
  '上装白色拼料': {
    cn: '上装白色拼料', en: 'White patchwork top', th: 'เสื้อสีขาวลายปะติดปะต่อ', vn: 'Áo trắng chắp vá', es: 'Top blanco de retazos',
    pt: 'Blusa branca de retalhos', id_lang: 'Atasan tambal sulam putih', ru: 'Белый топ в стиле пэчворк', fr: 'haut patchwork blanc', ar: 'بلوزة بيضاء مرقعة', ja: ''
  },
  '上装白色面料': {
    cn: '上装白色面料', en: 'White fabric top', th: 'เสื้อผ้าสีขาว', vn: 'Áo vải trắng', es: 'Top de tela blanca',
    pt: 'Topo de tecido branco', id_lang: 'Atasan kain putih', ru: 'Белый тканевый топ', fr: 'haut en tissu blanc', ar: 'بلوزة من القماش الأبيض', ja: ''
  },
  '上装米白面料': {
    cn: '上装米白面料', en: 'Top in off-white fabric', th: 'เสื้อตัวบนผ้าสีขาวนวล', vn: 'Áo trên bằng vải màu trắng ngà.', es: 'Top de tela color blanco roto.',
    pt: 'Top em tecido branco-creme', id_lang: 'Atasan berbahan putih gading', ru: 'Топ из ткани кремового цвета', fr: 'Haut en tissu blanc cassé', ar: 'بلوزة من قماش أبيض كريمي', ja: ''
  },
  '上装网纱': {
    cn: '上装网纱', en: 'Top mesh', th: 'ตาข่ายด้านบน', vn: 'Lưới trên cùng', es: 'Malla superior',
    pt: 'Malha superior', id_lang: 'Jaring atas', ru: 'Верхняя сетка', fr: 'maille supérieure', ar: 'شبكة علوية', ja: ''
  },
  '上装罗口': {
    cn: '上装罗口', en: 'Upper fitting screw', th: 'สกรูยึดด้านบน', vn: 'Ốc vít lắp đặt phía trên', es: 'Tornillo de fijación superior',
    pt: 'Parafuso de encaixe superior', id_lang: 'Sekrup pemasangan atas', ru: 'Верхний крепежный винт', fr: 'vis de fixation supérieure', ar: 'برغي التثبيت العلوي', ja: ''
  },
  '上装袖子': {
    cn: '上装袖子', en: 'Top sleeves', th: 'แขนเสื้อ', vn: 'Tay áo trên', es: 'Mangas superiores',
    pt: 'Mangas curtas', id_lang: 'Lengan atas', ru: 'Верхние рукава', fr: 'Manches hautes', ar: 'أكمام علوية', ja: ''
  },
  '上装配料': {
    cn: '上装配料', en: 'Upper assembly material', th: 'วัสดุประกอบส่วนบน', vn: 'Vật liệu lắp ráp phần trên', es: 'Material de ensamblaje superior',
    pt: 'Material de montagem superior', id_lang: 'Bahan perakitan bagian atas', ru: 'Материал верхней сборки', fr: 'matériau d&#39;assemblage supérieur', ar: 'مادة التجميع العلوي', ja: ''
  },
  '上装里料': {
    cn: '上装里料', en: 'Upper lining', th: 'เยื่อบุชั้นบน', vn: 'Lớp lót trên', es: 'Revestimiento superior',
    pt: 'Forro superior', id_lang: 'Lapisan atas', ru: 'Верхняя подкладка', fr: 'Doublure supérieure', ar: 'البطانة العلوية', ja: ''
  },
  '上装面料': {
    cn: '上装面料', en: 'Top fabric', th: 'ผ้าชั้นนอก', vn: 'Vải mặt trên', es: 'Tejido superior',
    pt: 'Tecido superior', id_lang: 'Kain bagian atas', ru: 'Верхняя ткань', fr: 'Tissu supérieur', ar: 'قماش علوي', ja: ''
  },
  '上装领子': {
    cn: '上装领子', en: 'collar of top', th: 'ปกเสื้อ', vn: 'cổ áo', es: 'cuello de la parte superior',
    pt: 'gola do top', id_lang: 'kerah atasan', ru: 'воротник топа', fr: 'col du haut', ar: 'ياقة القميص', ja: ''
  },
  '上装黑色面料': {
    cn: '上装黑色面料', en: 'Black fabric top', th: 'เสื้อผ้าสีดำ', vn: 'Áo vải đen', es: 'Top de tela negra',
    pt: 'Top de tecido preto', id_lang: 'Atasan kain hitam', ru: 'Черный тканевый топ', fr: 'haut en tissu noir', ar: 'بلوزة من القماش الأسود', ja: ''
  },
  '上裙里': {
    cn: '上裙里', en: 'In the skirt', th: 'ในกระโปรง', vn: 'Trong chiếc váy', es: 'En la falda',
    pt: 'Na saia', id_lang: 'Di dalam rok', ru: 'В юбке', fr: 'En jupe', ar: 'في التنورة', ja: ''
  },
  '上身': {
    cn: '上身', en: 'upper body', th: 'ส่วนบนของร่างกาย', vn: 'phần thân trên', es: 'parte superior del cuerpo',
    pt: 'parte superior do corpo', id_lang: 'tubuh bagian atas', ru: 'верхняя часть тела', fr: 'haut du corps', ar: 'الجزء العلوي من الجسم', ja: ''
  },
  '上身前里': {
    cn: '上身前里', en: 'Upper body front', th: 'ด้านหน้าส่วนบนของร่างกาย', vn: 'Phần thân trên phía trước', es: 'Parte superior del cuerpo, parte frontal',
    pt: 'Parte superior do corpo frontal', id_lang: 'Bagian depan tubuh bagian atas', ru: 'Передняя часть верхней части тела', fr: 'partie supérieure du corps avant', ar: 'الجزء الأمامي من الجزء العلوي من الجسم', ja: ''
  },
  '上身里': {
    cn: '上身里', en: 'upper body', th: 'ส่วนบนของร่างกาย', vn: 'phần thân trên', es: 'parte superior del cuerpo',
    pt: 'parte superior do corpo', id_lang: 'tubuh bagian atas', ru: 'верхняя часть тела', fr: 'haut du corps', ar: 'الجزء العلوي من الجسم', ja: ''
  },
  '上身面料': {
    cn: '上身面料', en: 'upper body fabric', th: 'ผ้าสำหรับช่วงบนของร่างกาย', vn: 'vải thân trên', es: 'tejido de la parte superior del cuerpo',
    pt: 'tecido da parte superior do corpo', id_lang: 'kain bagian atas tubuh', ru: 'ткань верхней части тела', fr: 'tissu pour le haut du corps', ar: 'قماش الجزء العلوي من الجسم', ja: ''
  },
  '上里': {
    cn: '上里', en: 'Kamisato', th: 'คามิซาโตะ', vn: 'Kamisato', es: 'kamisato',
    pt: 'Kamisato', id_lang: 'Kamisato', ru: 'Камисато', fr: 'Kamisato', ar: 'كاميساتو', ja: ''
  },
  '下半裙': {
    cn: '下半裙', en: 'lower skirt', th: 'กระโปรงสั้น', vn: 'váy thấp hơn', es: 'falda inferior',
    pt: 'saia inferior', id_lang: 'rok bagian bawah', ru: 'нижняя юбка', fr: 'jupe basse', ar: 'تنورة سفلية', ja: ''
  },
  '下半裙二层': {
    cn: '下半裙二层', en: 'Two-tiered lower skirt', th: 'กระโปรงล่างสองชั้น', vn: 'Váy hai tầng phía dưới', es: 'Falda inferior de dos niveles',
    pt: 'Saia inferior de duas camadas', id_lang: 'Rok bagian bawah dua tingkat', ru: 'Двухъярусная нижняя юбка', fr: 'jupe basse à deux volants', ar: 'تنورة سفلية من طبقتين', ja: ''
  },
  '下半裙面料': {
    cn: '下半裙面料', en: 'lower skirt fabric', th: 'ผ้ากระโปรงส่วนล่าง', vn: 'vải váy dưới', es: 'tela de la falda inferior',
    pt: 'tecido da saia inferior', id_lang: 'kain rok bagian bawah', ru: 'нижняя часть юбки', fr: 'tissu de jupe inférieure', ar: 'قماش التنورة السفلي', ja: ''
  },
  '下半身': {
    cn: '下半身', en: 'lower body', th: 'ส่วนล่างของร่างกาย', vn: 'phần thân dưới', es: 'parte inferior del cuerpo',
    pt: 'parte inferior do corpo', id_lang: 'tubuh bagian bawah', ru: 'нижняя часть тела', fr: 'bas du corps', ar: 'الجزء السفلي من الجسم', ja: ''
  },
  '下半身面': {
    cn: '下半身面', en: 'lower body face', th: 'ใบหน้าส่วนล่างของร่างกาย', vn: 'phần thân dưới mặt', es: 'parte inferior del cuerpo cara',
    pt: 'parte inferior do corpo rosto', id_lang: 'wajah bagian bawah tubuh', ru: 'нижняя часть тела лицо', fr: 'bas du corps visage', ar: 'الجزء السفلي من الجسم والوجه', ja: ''
  },
  '下半部份面料': {
    cn: '下半部份面料', en: 'lower half fabric', th: 'ผ้าครึ่งล่าง', vn: 'nửa dưới của vải', es: 'mitad inferior de la tela',
    pt: 'tecido da metade inferior', id_lang: 'bagian bawah kain', ru: 'нижняя половина ткани', fr: 'partie inférieure en tissu', ar: 'قماش الجزء السفلي', ja: ''
  },
  '下拼面料': {
    cn: '下拼面料', en: 'lower panel fabric', th: 'ผ้าแผงด้านล่าง', vn: 'vải tấm dưới', es: 'tela del panel inferior',
    pt: 'tecido do painel inferior', id_lang: 'kain panel bawah', ru: 'ткань нижней панели', fr: 'tissu du panneau inférieur', ar: 'قماش اللوحة السفلية', ja: ''
  },
  '下摆': {
    cn: '下摆', en: 'hem', th: 'ชายกระโปรง', vn: 'viền', es: 'dobladillo',
    pt: 'bainha', id_lang: 'keliman', ru: 'подол', fr: 'ourlet', ar: 'هدب', ja: ''
  },
  '下摆拼': {
    cn: '下摆拼', en: 'hem splicing', th: 'การต่อชายผ้า', vn: 'nối viền', es: 'empalme de dobladillo',
    pt: 'emenda de bainha', id_lang: 'penyambungan hem', ru: 'сшивание краев', fr: 'épissure d&#39;ourlet', ar: 'وصل الحاشية', ja: ''
  },
  '下摆拼接': {
    cn: '下摆拼接', en: 'hem splicing', th: 'การต่อชายผ้า', vn: 'nối viền', es: 'empalme de dobladillo',
    pt: 'emenda de bainha', id_lang: 'penyambungan hem', ru: 'сшивание краев', fr: 'épissure d&#39;ourlet', ar: 'وصل الحاشية', ja: ''
  },
  '下摆拼料': {
    cn: '下摆拼料', en: 'hem patchwork', th: 'งานปะติดปะต่อชายผ้า', vn: 'viền chắp vá', es: 'retazos en el dobladillo',
    pt: 'patchwork na bainha', id_lang: 'kelim tambal sulam', ru: 'подол лоскутное шитье', fr: 'patchwork d&#39;ourlets', ar: 'قطعة قماش مرقعة', ja: ''
  },
  '下摆罗纹': {
    cn: '下摆罗纹', en: 'Ribbed hem', th: 'ขอบยางยืด', vn: 'Viền gân', es: 'Dobladillo acanalado',
    pt: 'Bainha canelada', id_lang: 'Tepi bergaris', ru: 'Ребристый край', fr: 'Ourlet côtelé', ar: 'حافة مضلعة', ja: ''
  },
  '下摆花边': {
    cn: '下摆花边', en: 'hem lace', th: 'ลูกไม้ชายผ้า', vn: 'ren viền', es: 'encaje del dobladillo',
    pt: 'renda na bainha', id_lang: 'renda tepi', ru: 'кружево по краю', fr: 'dentelle à ourlet', ar: 'دانتيل الحافة', ja: ''
  },
  '下摆袢': {
    cn: '下摆袢', en: 'hem loops', th: 'ห่วงชายผ้า', vn: 'vòng viền', es: 'presillas del dobladillo',
    pt: 'alças de bainha', id_lang: 'lubang kelim', ru: 'петли подгиба', fr: 'boucles d&#39;ourlet', ar: 'حلقات الحاشية', ja: ''
  },
  '下摆面料': {
    cn: '下摆面料', en: 'hem fabric', th: 'ผ้าชายคา', vn: 'vải viền', es: 'tela del dobladillo',
    pt: 'tecido da bainha', id_lang: 'kain kelim', ru: 'ткань подола', fr: 'tissu à ourlet', ar: 'قماش الحافة', ja: ''
  },
  '下节中间层面料': {
    cn: '下节中间层面料', en: 'Lower middle layer fabric', th: 'ผ้าชั้นกลางล่าง', vn: 'vải lớp giữa phía dưới', es: 'Tejido de la capa media inferior',
    pt: 'tecido da camada intermediária inferior', id_lang: 'Kain lapisan tengah bawah', ru: 'Нижний средний слой ткани', fr: 'Tissu de la couche intermédiaire inférieure', ar: 'قماش الطبقة الوسطى السفلية', ja: ''
  },
  '下节外层网纱': {
    cn: '下节外层网纱', en: 'Lower outer mesh', th: 'ตาข่ายด้านนอกส่วนล่าง', vn: 'Lưới ngoài phía dưới', es: 'Malla exterior inferior',
    pt: 'malha externa inferior', id_lang: 'Jaring luar bagian bawah', ru: 'Нижняя внешняя сетка', fr: 'maille extérieure inférieure', ar: 'الشبكة الخارجية السفلية', ja: ''
  },
  '下节里层网纱': {
    cn: '下节里层网纱', en: 'Lower section inner layer mesh', th: 'ตาข่ายชั้นในส่วนล่าง', vn: 'Lớp lưới bên trong phần dưới', es: 'Malla de la capa interior de la sección inferior',
    pt: 'Malha da camada interna da seção inferior', id_lang: 'Lapisan dalam bagian bawah jaring', ru: 'Сетка внутреннего слоя нижней секции', fr: 'maillage de la couche interne de la partie inférieure', ar: 'شبكة الطبقة الداخلية للقسم السفلي', ja: ''
  },
  '下节里料': {
    cn: '下节里料', en: 'Next section lining', th: 'ส่วนถัดไปบุด้วยวัสดุ', vn: 'Phần tiếp theo lót', es: 'Revestimiento de la siguiente sección',
    pt: 'Próxima seção de revestimento', id_lang: 'Lapisan bagian selanjutnya', ru: 'Следующий раздел облицовки', fr: 'La section suivante comprend une doublure', ar: 'القسم التالي: البطانة', ja: ''
  },
  '下节面料': {
    cn: '下节面料', en: 'Next section fabric', th: 'ส่วนถัดไปเป็นผ้า', vn: 'Phần vải tiếp theo', es: 'Siguiente sección de tela',
    pt: 'Próxima seção: tecido', id_lang: 'Bagian selanjutnya adalah kain.', ru: 'Следующий раздел ткани', fr: 'Section suivante : tissu', ar: 'القسم التالي: القماش', ja: ''
  },
  '下装': {
    cn: '下装', en: 'Bottoms', th: 'กางเกงชั้นใน', vn: 'Đáy', es: 'Fondos',
    pt: 'Partes de baixo', id_lang: 'Bagian bawah', ru: 'Дно', fr: 'Bas', ar: 'الجزء السفلي', ja: ''
  },
  '下装复合面层': {
    cn: '下装复合面层', en: 'Bottom composite surface layer', th: 'ชั้นผิวคอมโพสิตด้านล่าง', vn: 'lớp bề mặt composite đáy', es: 'Capa superficial compuesta inferior',
    pt: 'camada superficial composta inferior', id_lang: 'Lapisan permukaan komposit bawah', ru: 'Нижний композитный поверхностный слой', fr: 'couche de surface composite inférieure', ar: 'الطبقة السطحية المركبة السفلية', ja: ''
  },
  '下装大身': {
    cn: '下装大身', en: 'Large lower body', th: 'ส่วนล่างของร่างกายใหญ่', vn: 'Thân dưới to lớn', es: 'Parte inferior del cuerpo grande',
    pt: 'Corpo inferior grande', id_lang: 'Tubuh bagian bawah yang besar', ru: 'Крупная нижняя часть тела', fr: 'bas du corps volumineux', ar: 'جسم سفلي كبير', ja: ''
  },
  '下装大身面料': {
    cn: '下装大身面料', en: 'Bottoms fabric', th: 'ผ้าสำหรับกางเกง', vn: 'Vải quần', es: 'Tela para pantalones',
    pt: 'Tecido da parte de baixo', id_lang: 'Kain bagian bawah', ru: 'Ткань для низа', fr: 'Tissu du bas', ar: 'قماش الجزء السفلي', ja: ''
  },
  '下装网纱': {
    cn: '下装网纱', en: 'Mesh bottoms', th: 'กางเกงตาข่าย', vn: 'Quần lưới', es: 'parte inferior de malla',
    pt: 'fundos de malha', id_lang: 'Celana jala', ru: 'Сетчатое дно', fr: 'fonds en maille', ar: 'سروال شبكي', ja: ''
  },
  '下装里料': {
    cn: '下装里料', en: 'Bottom Lining', th: 'ซับในก้นกล่อง', vn: 'Lớp lót đáy', es: 'Revestimiento inferior',
    pt: 'Forro inferior', id_lang: 'Intinya', ru: 'Нижняя обшивка', fr: 'Conclusion', ar: 'الخلاصة', ja: ''
  },
  '下装面料': {
    cn: '下装面料', en: 'Bottoms fabric', th: 'ผ้าสำหรับกางเกง', vn: 'Vải quần', es: 'Tela para pantalones',
    pt: 'Tecido da parte de baixo', id_lang: 'Kain bagian bawah', ru: 'Ткань для низа', fr: 'Tissu du bas', ar: 'قماش الجزء السفلي', ja: ''
  },
  '下裙': {
    cn: '下裙', en: 'skirt', th: 'กระโปรง', vn: 'váy ngắn', es: 'falda',
    pt: 'saia', id_lang: 'rok', ru: 'юбка', fr: 'jupe', ar: 'جيبة', ja: ''
  },
  '下身': {
    cn: '下身', en: 'lower body', th: 'ส่วนล่างของร่างกาย', vn: 'phần thân dưới', es: 'parte inferior del cuerpo',
    pt: 'parte inferior do corpo', id_lang: 'tubuh bagian bawah', ru: 'нижняя часть тела', fr: 'bas du corps', ar: 'الجزء السفلي من الجسم', ja: ''
  },
  '下身里': {
    cn: '下身里', en: 'lower body', th: 'ส่วนล่างของร่างกาย', vn: 'phần thân dưới', es: 'parte inferior del cuerpo',
    pt: 'parte inferior do corpo', id_lang: 'tubuh bagian bawah', ru: 'нижняя часть тела', fr: 'bas du corps', ar: 'الجزء السفلي من الجسم', ja: ''
  },
  '下身里料': {
    cn: '下身里料', en: 'Lower body lining', th: 'เยื่อบุส่วนล่างของร่างกาย', vn: 'lớp lót thân dưới', es: 'Revestimiento de la parte inferior del cuerpo',
    pt: 'Revestimento da parte inferior do corpo', id_lang: 'lapisan tubuh bagian bawah', ru: 'Нижняя часть тела', fr: 'doublure du bas du corps', ar: 'بطانة الجزء السفلي من الجسم', ja: ''
  },
  '下身面料': {
    cn: '下身面料', en: 'lower body fabric', th: 'ผ้าส่วนล่างของร่างกาย', vn: 'vải thân dưới', es: 'tejido de la parte inferior del cuerpo',
    pt: 'tecido da parte inferior do corpo', id_lang: 'kain tubuh bagian bawah', ru: 'ткань нижней части тела', fr: 'tissu pour le bas du corps', ar: 'قماش الجزء السفلي من الجسم', ja: ''
  },
  '不可使用柔顺剂': {
    cn: '不可使用柔顺剂', en: 'Do not use fabric softener', th: 'ห้ามใช้น้ำยาปรับผ้านุ่ม', vn: 'Không dùng nước xả vải', es: 'No usar suavizante',
    pt: 'Não usar amaciante', id_lang: 'Jangan gunakan pelembut pakaian', ru: 'Не использовать кондиционер', fr: 'Ne pas utiliser d\'adoucissant', ar: 'لا تستخدم منعم الأقمشة', ja: ''
  },
  '不可刷洗': {
    cn: '不可刷洗', en: 'Do Not Brush', th: 'ห้ามใช้แปรงขัด', vn: 'Không chải cọ', es: 'No cepillar',
    pt: 'Não escovar', id_lang: 'Jangan disikat', ru: 'Не чистить щеткой', fr: 'Ne pas brosser', ar: 'لا تفرك بالفرشاة', ja: ''
  },
  '不可干洗': {
    cn: '不可干洗', en: 'Do not dry clean', th: 'ห้ามซักแห้ง', vn: 'Không giặt khô', es: 'No lavar en seco',
    pt: 'Não lavar a seco', id_lang: 'Jangan cuci kering', ru: 'Не подвергать химчистке', fr: 'Ne pas nettoyer à sec', ar: 'لا تنظف تنظيفاً جافاً', ja: ''
  },
  '不可拧干': {
    cn: '不可拧干', en: 'Do Not Wring', th: 'ห้ามบิด', vn: 'Không vắt', es: 'No retorcer',
    pt: 'Não torcer', id_lang: 'Jangan diperas', ru: 'Не выжимать', fr: 'Ne pas essorer', ar: 'لا تعصر', ja: ''
  },
  '不可拧干或绞拧': {
    cn: '不可拧干或绞拧', en: 'Do not wring or twist', th: 'ห้ามบิด', vn: 'Không vắt kiệt', es: 'No retorcer ni estrujar',
    pt: 'Não torcer', id_lang: 'Jangan diperas atau dipelintir', ru: 'Не выжимать и не выкручивать', fr: 'Ne pas tordre', ar: 'لا تعصر أو تلوي', ja: ''
  },
  '不可水洗': {
    cn: '不可水洗', en: 'Do not wash', th: 'ห้ามซักน้ำ', vn: 'Không được giặt', es: 'No lavar',
    pt: 'Não lavar', id_lang: 'Jangan dicuci', ru: 'Не стирать', fr: 'Ne pas laver', ar: 'لا تغسل بالماء', ja: ''
  },
  '不可浸泡': {
    cn: '不可浸泡', en: 'Do Not Soak', th: 'ห้ามแช่', vn: 'Không ngâm', es: 'No remojar',
    pt: 'Não deixar de molho', id_lang: 'Jangan direndam', ru: 'Не замачивать', fr: 'Ne pas tremper', ar: 'لا تنقع', ja: ''
  },
  '不可漂白': {
    cn: '不可漂白', en: 'Do not bleach', th: 'ห้ามใช้สารฟอกขาว', vn: 'Không dùng chất tẩy', es: 'No usar lejía / blanqueador',
    pt: 'Não usar alvejante', id_lang: 'Jangan gunakan pemutih', ru: 'Не отбеливать', fr: 'Ne pas blanchir', ar: 'لا تستخدم المبيض', ja: ''
  },
  '不可烘干': {
    cn: '不可烘干', en: 'Do not tumble dry', th: 'ห้ามอบแห้ง', vn: 'Không sấy khô', es: 'No secar en secadora',
    pt: 'Não secar na máquina', id_lang: 'Jangan keringkan dengan mesin', ru: 'Не сушить в стиральной машине', fr: 'Ne pas sécher en machine', ar: 'لا تجفف بالنشافة', ja: ''
  },
  '不可熨烫': {
    cn: '不可熨烫', en: 'Do not iron', th: 'ห้ามรีด', vn: 'Không được ủi', es: 'No planchar',
    pt: 'Não passar a ferro', id_lang: 'Jangan disetrika', ru: 'Не гладить', fr: 'Ne pas repasser', ar: 'لا تكوي', ja: ''
  },
  '不可翻转干燥': {
    cn: '不可翻转干燥', en: 'Do not tumble dry', th: 'ห้ามอบแห้ง', vn: 'Không sấy khô', es: 'No secar en secadora',
    pt: 'Não secar em tambor', id_lang: 'Jangan dikeringkan dengan mesin', ru: 'Не сушить в барабане', fr: 'Séchage en tambour interdit', ar: 'لا يجفف في آلة تجفيف', ja: 'タンブル乾燥禁止'
  },
  '不可长时间浸泡': {
    cn: '不可长时间浸泡', en: 'Do not soak', th: 'ห้ามแช่ผ้าทิ้งไว้', vn: 'Không ngâm lâu', es: 'No dejar en remojo',
    pt: 'Não deixar de molho', id_lang: 'Jangan direndam', ru: 'Не замачивать', fr: 'Ne pas faire tremper', ar: 'لا تنقعه في الماء', ja: ''
  },
  '不可长时间浸泡，请与其它衣物分开洗涤。干燥后轻轻拍打，洗涤前将毛领取下。本产品在洗涤过程中出现的轻微褪色属正常现象。': {
    cn: '不可长时间浸泡，请与其它衣物分开洗涤。干燥后轻轻拍打，洗涤前将毛领取下。本产品在洗涤过程中出现的轻微褪色属正常现象。', en: 'Do not soak for long periods; please wash separately from other garments. After drying, gently shake. Remove the fur before washing. Slight fading that occurs during washing is a normal phenomenon.', th: 'ไม่ควรแช่เป็นเวลานาน โปรดซักแยกจากเสื้อผ้าชนิดอื่น หลังจากทำให้แห้งแล้วให้ตบเบาๆ ก่อนการซักให้ถอดขนสุนัขออก ผลิตภัณฑ์นี้อาจเกิดการซีดสีเล็กน้อยในระหว่างการซัก ซึ่งถือว่าเป็นปรากฏการณ์ปกติ.', vn: 'Không nên ngâm lâu, hãy giặt riêng với các loại quần áo khác. Sau khi khô, hãy nhẹ nhàng vỗ vào, và tháo lông khi giặt. Sự phai màu nhẹ trong quá trình giặt là hiện tượng bình thường.', es: 'No se debe remojar durante mucho tiempo, lave por separado de otras prendas. Después de secar, sacuda suavemente y retire el pelo antes de lavar. La ligera decoloración que puede ocurrir durante el proceso de lavado es un fenómeno normal.',
    pt: 'Não deve ser imerso por muito tempo; lave separadamente de outras roupas. Após secar, bata levemente. Remova os pelos antes da lavagem. A leve descoloração que pode ocorrer durante o processo de lavagem é uma ocorrência normal.', id_lang: 'Jangan merendam terlalu lama, cuci terpisah dari pakaian lainnya. Setelah kering, tepuk-tepuk dengan lembut, lepaskan bulunya sebelum mencuci. Memudarnya warna secara ringan selama proses pencucian adalah fenomena yang normal.', ru: 'Не замачивать надолго, стирать отдельно от других вещей. После высыхания слегка отбейте, снимите воротник перед стиркой. Легкое выцветание данного изделия в процессе стирки является нормальным явлением.', fr: 'Ne pas faire tremper longtemps, laver séparément des autres vêtements. Tapoter légèrement après séchage, retirer le col avant le lavage. La légère décoloration lors du lavage est normale.', ar: 'لا ينقع لفترة طويلة، يغسل منفصلاً عن الملابس الأخرى. بعد التجفيف، قم بالتربيت بلطف، وأزل طوق الشعر قبل الغسيل. تلاشي اللون البسيط الذي يظهر أثناء الغسيل لهذا المنتج أمر طبيعي.', ja: ''
  },
  '不适用于3岁以下儿童': {
    cn: '不适用于3岁以下儿童', en: 'Not suitable for children under 3 years', th: 'ไม่เหมาะสำหรับเด็กอายุต่ำกว่า 3 ปี', vn: 'Không phù hợp cho trẻ dưới 3 tuổi', es: 'No apto para menores de 3 años',
    pt: 'Não adequado para crianças menores de 3 anos', id_lang: 'Tidak cocok untuk anak di bawah 3 tahun', ru: 'Не подходит для детей младше 3 лет', fr: 'Ne convient pas aux enfants de moins de 3 ans', ar: 'غير مناسب للأطفال دون 3 سنوات', ja: ''
  },
  '与同类色同洗': {
    cn: '与同类色同洗', en: 'Wash with like colors', th: 'ซักกับสีที่คล้ายกัน', vn: 'Giặt với màu tương tự', es: 'Lavar con colores similares',
    pt: 'Lavar com cores semelhantes', id_lang: 'Cuci dengan warna senada', ru: 'Стирать с похожими цветами', fr: 'Laver avec des couleurs similaires', ar: 'يُغسل مع ألوان مشابهة', ja: ''
  },
  '与同色同洗': {
    cn: '与同色同洗', en: 'Wash with like colors', th: 'ซักกับสีที่คล้ายกัน', vn: 'Giặt với đồ cùng màu', es: 'Lavar con colores similares',
    pt: 'Lavar com cores semelhantes', id_lang: 'Cuci dengan warna senada', ru: 'Стирать с похожими цветами', fr: 'Laver avec des couleurs similaires', ar: 'يُغسل مع ألوان مشابهة', ja: ''
  },
  '与同色衣物洗': {
    cn: '与同色衣物洗', en: 'Wash with Similar Colors', th: 'ซักกับสีใกล้เคียงกัน', vn: 'Giặt cùng màu', es: 'Lavar con colores similares',
    pt: 'Lavar com cores semelhantes', id_lang: 'Cuci dengan warna serupa', ru: 'Стирать с похожими цветами', fr: 'Laver avec des couleurs similaires', ar: 'يغسل مع ألوان مشابهة', ja: ''
  },
  '与同色衣物洗涤': {
    cn: '与同色衣物洗涤', en: 'Wash with Like Colors', th: 'ซักกับสีใกล้เคียง', vn: 'Giặt cùng màu', es: 'Lavar con colores similares',
    pt: 'Lavar com cores semelhantes', id_lang: 'Cuci dengan warna senada', ru: 'Стирать с похожими цветами', fr: 'Laver avec des couleurs similaires', ar: 'يُغسل مع ألوان مشابهة', ja: ''
  },
  '丝光': {
    cn: '丝光', en: 'Silk', th: 'ผ้าไหม', vn: 'Lụa', es: 'Seda',
    pt: 'Seda', id_lang: 'Sutra', ru: 'Шелк', fr: 'Soie', ar: 'حرير', ja: ''
  },
  '丝光罗马': {
    cn: '丝光罗马', en: 'Silk Roman', th: 'ผ้าไหมโรมัน', vn: 'Lụa La Mã', es: 'Seda romana',
    pt: 'Romana de seda', id_lang: 'Sutra Romawi', ru: 'Шелковый римский', fr: 'Soie romaine', ar: 'حرير روماني', ja: ''
  },
  '丝光罗马布': {
    cn: '丝光罗马布', en: 'Mercerized Roman cloth', th: 'ผ้าโรมันเมอร์เซอไรซ์', vn: 'Vải La Mã được xử lý bằng phương pháp mercer hóa', es: 'Tela romana mercerizada',
    pt: 'Tecido romano mercerizado', id_lang: 'Kain Romawi yang dimerserisasi', ru: 'Мерсеризованная римская ткань', fr: 'Tissu romain mercerisé', ar: 'قماش روماني معالج بالمرسرة', ja: ''
  },
  '丝光羊毛': {
    cn: '丝光羊毛', en: 'Mercerized wool', th: 'ขนแกะเมอร์เซอไรซ์', vn: 'Len mercer hóa', es: 'Lana mercerizada',
    pt: 'Lã mercerizada', id_lang: 'Wol merserisasi', ru: 'Мерсеризованная шерсть', fr: 'Laine mercerisée', ar: 'صوف معالج بالمرسرة', ja: ''
  },
  '丝巾': {
    cn: '丝巾', en: 'silk scarf', th: 'ผ้าพันคอไหม', vn: 'khăn lụa', es: 'bufanda de seda',
    pt: 'lenço de seda', id_lang: 'syal sutra', ru: 'шелковый шарф', fr: 'foulard en soie', ar: 'وشاح حريري', ja: ''
  },
  '丝巾成分': {
    cn: '丝巾成分', en: 'Silk scarf composition', th: 'ส่วนประกอบของผ้าพันคอไหม', vn: 'Thành phần của khăn lụa', es: 'Composición del pañuelo de seda',
    pt: 'Composição do lenço de seda', id_lang: 'Komposisi syal sutra', ru: 'шелковый шарф', fr: 'composition d&#39;un foulard en soie', ar: 'تركيبة وشاح حريري', ja: ''
  },
  '丝巾面料': {
    cn: '丝巾面料', en: 'Silk scarf fabric', th: 'ผ้าพันคอไหม', vn: 'Vải khăn lụa', es: 'Tela de pañuelo de seda',
    pt: 'Tecido de lenço de seda', id_lang: 'Kain syal sutra', ru: 'Ткань для шелкового шарфа', fr: 'tissu pour foulard en soie', ar: 'قماش وشاح حريري', ja: ''
  },
  '丝爽棉': {
    cn: '丝爽棉', en: 'Silky cotton', th: 'ผ้าฝ้ายเนื้อนุ่มลื่น', vn: 'Bông mềm mại', es: 'Algodón sedoso',
    pt: 'algodão sedoso', id_lang: 'Katun halus', ru: 'Шелковистый хлопок', fr: 'Coton soyeux', ar: 'قطن ناعم كالحرير', ja: ''
  },
  '丝绒磨毛': {
    cn: '丝绒磨毛', en: 'Velvet brushed', th: 'กำมะหยี่ขัดเงา', vn: 'Nhung chải', es: 'Terciopelo cepillado',
    pt: 'Veludo escovado', id_lang: 'Beludru disikat', ru: 'бархатистая поверхность', fr: 'Velours brossé', ar: 'مخملي مصقول', ja: ''
  },
  '丝芙平纹': {
    cn: '丝芙平纹', en: 'Sephora Plain', th: 'เซโฟร่า เพลน', vn: 'Sephora Plain', es: 'Sephora Plain',
    pt: 'Sephora Simples', id_lang: 'Sephora Biasa', ru: 'Сефора Плейн', fr: 'Sephora Plain', ar: 'سيفورا بلين', ja: ''
  },
  '两层': {
    cn: '两层', en: 'Two layers', th: 'สองชั้น', vn: 'Hai lớp', es: 'Dos capas',
    pt: 'Duas camadas', id_lang: 'Dua lapisan', ru: 'Два слоя', fr: 'Deux couches', ar: 'طبقتان', ja: ''
  },
  '中': {
    cn: '中', en: 'middle', th: 'กลาง', vn: 'ở giữa', es: 'medio',
    pt: 'meio', id_lang: 'tengah', ru: 'середина', fr: 'milieu', ar: 'وسط', ja: ''
  },
  '中号': {
    cn: '中号', en: 'Medium (M)', th: 'ไซส์กลาง', vn: 'Cỡ M (Trung)', es: 'Talla M (Mediana)',
    pt: 'Tamanho M', id_lang: 'Ukuran M (Sedang)', ru: 'Размер M', fr: 'Taille M', ar: 'مقاس وسط', ja: ''
  },
  '中号(M)': {
    cn: '中号(M)', en: 'Medium (M)', th: 'ไซส์กลาง (M)', vn: 'Cỡ M', es: 'Talla M (Mediana)',
    pt: 'Tamanho M (M)', id_lang: 'Ukuran M (Sedang)', ru: 'Размер M', fr: 'Taille M (Moyen)', ar: 'مقاس وسط (M)', ja: ''
  },
  '中咖': {
    cn: '中咖', en: 'Medium Coffee', th: 'สีกาแฟปานกลาง', vn: 'Màu cà phê trung bình', es: 'Marrón café medio',
    pt: 'Castanho café médio', id_lang: 'Warna kopi sedang', ru: 'Средне-коричневый', fr: 'Marron café moyen', ar: 'بني قهوة متوسط', ja: 'モカブラウン'
  },
  '中咖条纹': {
    cn: '中咖条纹', en: 'Medium brown stripes', th: 'ลายทางสีน้ำตาลปานกลาง', vn: 'Sọc nâu trung bình', es: 'rayas de color marrón medio',
    pt: 'Listras marrom-médio', id_lang: 'Garis-garis cokelat sedang', ru: 'Средне-коричневые полосы', fr: 'rayures brun moyen', ar: 'مخططات بنية متوسطة', ja: ''
  },
  '中咖格纹': {
    cn: '中咖格纹', en: 'Medium brown plaid', th: 'ลายตารางสีน้ำตาลปานกลาง', vn: 'kẻ sọc nâu trung bình', es: 'Cuadros de color marrón medio',
    pt: 'xadrez marrom médio', id_lang: 'Kotak-kotak cokelat sedang', ru: 'Клетка среднего коричневого цвета', fr: 'Carreaux marron moyen', ar: 'كاروهات بني متوسط', ja: ''
  },
  '中咖渐变': {
    cn: '中咖渐变', en: 'Medium coffee gradient', th: 'กาแฟระดับกลาง', vn: 'Màu cà phê trung bình', es: 'Gradiente de café medio',
    pt: 'Gradiente médio de café', id_lang: 'Gradien kopi sedang', ru: 'Средний кофейный градиент', fr: 'Dégradé de café moyen', ar: 'تدرج لون القهوة المتوسط', ja: ''
  },
  '中咖花纹': {
    cn: '中咖花纹', en: 'Medium coffee pattern', th: 'ลวดลายกาแฟขนาดกลาง', vn: 'Mẫu cà phê cỡ trung bình', es: 'Patrón de café mediano',
    pt: 'Padrão de café médio', id_lang: 'Pola kopi sedang', ru: 'Средний кофейный узор', fr: 'Motif café moyen', ar: 'نقش قهوة متوسط ​​الحجم', ja: ''
  },
  '中咖镶拼': {
    cn: '中咖镶拼', en: 'Medium Coffee Inlay', th: 'สีกาแฟปานกลางแต่งต่อ', vn: 'Phối màu cà phê trung bình', es: 'Incrustación de café medio',
    pt: 'Incrustação de café médio', id_lang: 'Hiasan kopi sedang', ru: 'Средне-коричневая вставка', fr: 'Incrustation de café moyen', ar: 'تطعيم لون قهوة متوسط', ja: 'モカブラウン切り替え'
  },
  '中国制造': {
    cn: '中国制造', en: 'Made in China', th: 'ผลิตในจีน', vn: 'Sản xuất tại Trung Quốc', es: 'Hecho en China',
    pt: 'Fabricado na China', id_lang: 'Buatan Tiongkok', ru: 'Сделано в Китае', fr: 'Fabriqué en Chine', ar: 'صنع في الصين', ja: ''
  },
  '中国码': {
    cn: '中国码', en: 'CN Size', th: 'ไซซ์จีน', vn: 'Cỡ Trung Quốc', es: 'Talla CN',
    pt: 'Tamanho CN', id_lang: 'Ukuran CN', ru: 'Размер CN', fr: 'Taille CN', ar: 'مقاس CN', ja: ''
  },
  '中层': {
    cn: '中层', en: 'Middle layer', th: 'ชั้นกลาง', vn: 'Lớp giữa', es: 'Capa media',
    pt: 'Camada intermediária', id_lang: 'Lapisan tengah', ru: 'Средний слой', fr: 'couche intermédiaire', ar: 'الطبقة الوسطى', ja: ''
  },
  '中层面料': {
    cn: '中层面料', en: 'Middle layer fabric', th: 'ผ้าชั้นกลาง', vn: 'Vải lớp giữa', es: 'Tejido de capa intermedia',
    pt: 'Tecido da camada intermediária', id_lang: 'Kain lapisan tengah', ru: 'Средний слой ткани', fr: 'Tissu de la couche intermédiaire', ar: 'قماش الطبقة الوسطى', ja: ''
  },
  '中温烘干': {
    cn: '中温烘干', en: 'Tumble dry medium', th: 'อบแห้งด้วยความร้อนปานกลาง', vn: 'Sấy khô nhiệt độ trung bình', es: 'Secar en secadora a temp media',
    pt: 'Secar na máquina a temp média', id_lang: 'Keringkan mesin suhu sedang', ru: 'Сушить в машине при средней темп', fr: 'Séchage en machine à temp moyenne', ar: 'تجفيف آلي بحرارة متوسطة', ja: ''
  },
  '中温熨烫': {
    cn: '中温熨烫', en: 'Iron medium heat', th: 'รีดด้วยความร้อนปานกลาง', vn: 'Ủi nhiệt độ trung bình', es: 'Planchar a temperatura media',
    pt: 'Passar a ferro em temperatura média', id_lang: 'Setrika suhu sedang', ru: 'Гладить при средней температуре', fr: 'Repasser à température moyenne', ar: 'كي بدرجة حرارة متوسطة', ja: ''
  },
  '中灰': {
    cn: '中灰', en: 'Medium gray', th: 'สีเทาปานกลาง', vn: 'Xám trung bình', es: 'Gris medio',
    pt: 'Cinza médio', id_lang: 'Abu-abu sedang', ru: 'Средне-серый', fr: 'Gris moyen', ar: 'رمادي متوسط', ja: ''
  },
  '中灰斜纹': {
    cn: '中灰斜纹', en: 'Medium gray twill', th: 'ผ้าทวิลสีเทาอ่อน', vn: 'Vải chéo màu xám trung bình', es: 'Sarga gris medio',
    pt: 'Sarja cinza médio', id_lang: 'Kain kepar abu-abu sedang', ru: 'Твил среднего серого цвета', fr: 'Sergé gris moyen', ar: 'قماش قطني رمادي متوسط', ja: ''
  },
  '中灰条纹': {
    cn: '中灰条纹', en: 'Medium gray stripes', th: 'ลายทางสีเทาอ่อน', vn: 'Sọc xám trung bình', es: 'rayas gris medio',
    pt: 'Listras cinza médio', id_lang: 'Garis-garis abu-abu sedang', ru: 'Средне-серые полосы', fr: 'rayures gris moyen', ar: 'مخطط رمادي متوسط', ja: ''
  },
  '中灰格纹': {
    cn: '中灰格纹', en: 'Medium gray plaid', th: 'ลายตารางสีเทาอ่อน', vn: 'kẻ sọc xám trung bình', es: 'Cuadros gris medio',
    pt: 'xadrez cinza médio', id_lang: 'Kotak-kotak abu-abu sedang', ru: 'Клетка среднего серого цвета', fr: 'Carreaux gris moyen', ar: 'كاروهات رمادية متوسطة', ja: ''
  },
  '中灰渐变': {
    cn: '中灰渐变', en: 'medium gray gradient', th: 'การไล่ระดับสีเทาปานกลาง', vn: 'độ xám trung bình', es: 'degradado gris medio',
    pt: 'gradiente cinza médio', id_lang: 'gradien abu-abu sedang', ru: 'средне-серый градиент', fr: 'dégradé de gris moyen', ar: 'تدرج رمادي متوسط', ja: ''
  },
  '中灰色': {
    cn: '中灰色', en: 'Medium gray', th: 'สีเทาปานกลาง', vn: 'Xám trung bình', es: 'Gris medio',
    pt: 'Cinza médio', id_lang: 'Abu-abu sedang', ru: 'Средне-серый', fr: 'Gris moyen', ar: 'رمادي متوسط', ja: ''
  },
  '中灰花纹': {
    cn: '中灰花纹', en: 'Medium gray pattern', th: 'ลวดลายสีเทาปานกลาง', vn: 'Họa tiết màu xám trung bình', es: 'Patrón gris medio',
    pt: 'Padrão cinza médio', id_lang: 'Pola abu-abu sedang', ru: 'Средне-серый узор', fr: 'motif gris moyen', ar: 'نمط رمادي متوسط', ja: ''
  },
  '中灰镶拼': {
    cn: '中灰镶拼', en: 'Medium gray inlaid', th: 'ฝังสีเทาปานกลาง', vn: 'Màu xám trung bình khảm', es: 'Incrustaciones de color gris medio',
    pt: 'Cinza médio embutido', id_lang: 'Abu-abu medium bertatahkan', ru: 'Вставка средне-серого цвета', fr: 'incrustation gris moyen', ar: 'رمادي متوسط ​​مطعم', ja: ''
  },
  '中码': {
    cn: '中码', en: 'M', th: 'M', vn: 'M', es: 'M',
    pt: 'M', id_lang: 'M', ru: 'M', fr: 'M', ar: 'M', ja: ''
  },
  '中绿': {
    cn: '中绿', en: 'China Green', th: 'ไชน่ากรีน', vn: 'Trung Quốc Xanh', es: 'China Verde',
    pt: 'Verde China', id_lang: 'Hijau Cina', ru: 'Китайский зеленый', fr: 'Chine Vert', ar: 'أخضر صيني', ja: ''
  },
  '中绿条纹': {
    cn: '中绿条纹', en: 'Medium green stripes', th: 'ลายทางสีเขียวอ่อน', vn: 'Sọc xanh lá cây trung bình', es: 'rayas verde medio',
    pt: 'Listras verde-médio', id_lang: 'Garis-garis hijau sedang', ru: 'Средне-зеленые полосы', fr: 'rayures vert moyen', ar: 'خطوط خضراء متوسطة', ja: ''
  },
  '中绿格纹': {
    cn: '中绿格纹', en: 'medium green plaid', th: 'ลายตารางสีเขียวขนาดกลาง', vn: 'kẻ sọc xanh lá cây trung bình', es: 'cuadros verde medio',
    pt: 'xadrez verde médio', id_lang: 'kotak-kotak hijau sedang', ru: 'средне-зеленая клетка', fr: 'carreaux vert moyen', ar: 'كاروهات أخضر متوسط ​​الحجم', ja: ''
  },
  '中绿渐变': {
    cn: '中绿渐变', en: 'medium green gradient', th: 'การไล่ระดับสีเขียวปานกลาง', vn: 'gradient màu xanh lá cây trung bình', es: 'degradado verde medio',
    pt: 'gradiente verde médio', id_lang: 'gradien hijau sedang', ru: 'средне-зеленый градиент', fr: 'dégradé de vert moyen', ar: 'تدرج اللون الأخضر المتوسط', ja: ''
  },
  '中绿花纹': {
    cn: '中绿花纹', en: 'Medium green pattern', th: 'ลวดลายสีเขียวปานกลาง', vn: 'Họa tiết màu xanh lá cây trung bình', es: 'Patrón verde medio',
    pt: 'Padrão verde médio', id_lang: 'Pola hijau sedang', ru: 'Средне-зеленый узор', fr: 'motif vert moyen', ar: 'نمط أخضر متوسط', ja: ''
  },
  '中绿镶拼': {
    cn: '中绿镶拼', en: 'Green inlay', th: 'ฝังสีเขียว', vn: 'Khảm màu xanh lá cây', es: 'Incrustaciones verdes',
    pt: 'Incrustação verde', id_lang: 'Inlay hijau', ru: 'Зеленая вставка', fr: 'Incrustations vertes', ar: 'تطعيم أخضر', ja: ''
  },
  '中蓝': {
    cn: '中蓝', en: 'Zhonglan', th: 'จงหลาน', vn: 'Trung Lan', es: 'Zhonglan',
    pt: 'Zhonglan', id_lang: 'Zhonglan', ru: 'Чжунлан', fr: 'Zhonglan', ar: 'تشونغلان', ja: ''
  },
  '中蓝条纹': {
    cn: '中蓝条纹', en: 'Medium blue stripes', th: 'ลายทางสีน้ำเงินกลาง', vn: 'Sọc xanh lam trung bình', es: 'rayas azul medio',
    pt: 'Listras azuis médias', id_lang: 'Garis-garis biru sedang', ru: 'Полосы среднего синего цвета', fr: 'rayures bleu moyen', ar: 'خطوط زرقاء متوسطة', ja: ''
  },
  '中蓝格纹': {
    cn: '中蓝格纹', en: 'Medium blue plaid', th: 'ลายตารางสีน้ำเงินกลาง', vn: 'kẻ caro màu xanh lam trung bình', es: 'Cuadros azul medio',
    pt: 'xadrez azul médio', id_lang: 'Kotak-kotak biru sedang', ru: 'Клетка среднего синего цвета', fr: 'Carreaux bleu moyen', ar: 'كاروهات زرقاء متوسطة', ja: ''
  },
  '中蓝渐变': {
    cn: '中蓝渐变', en: 'Blue gradient', th: 'ไล่ระดับสีฟ้า', vn: 'chuyển sắc xanh', es: 'Degradado azul',
    pt: 'Gradiente azul', id_lang: 'Gradien biru', ru: 'Синий градиент', fr: 'Dégradé bleu', ar: 'تدرج اللون الأزرق', ja: ''
  },
  '中蓝花纹': {
    cn: '中蓝花纹', en: 'Medium blue pattern', th: 'ลายสีน้ำเงินกลาง', vn: 'Họa tiết màu xanh lam trung bình', es: 'Patrón azul medio',
    pt: 'Padrão azul médio', id_lang: 'Pola biru sedang', ru: 'Средне-синий узор', fr: 'motif bleu moyen', ar: 'نمط أزرق متوسط', ja: ''
  },
  '中蓝镶拼': {
    cn: '中蓝镶拼', en: 'Blue inlay', th: 'ฝังสีน้ำเงิน', vn: 'Viền màu xanh lam', es: 'Incrustaciones azules',
    pt: 'Incrustação azul', id_lang: 'Inlay biru', ru: 'Синяя вставка', fr: 'Incrustation bleue', ar: 'تطعيم أزرق', ja: ''
  },
  '中间层': {
    cn: '中间层', en: 'Intermediate layer', th: 'ชั้นกลาง', vn: 'Lớp trung gian', es: 'Capa intermedia',
    pt: 'Camada intermediária', id_lang: 'Lapisan tengah', ru: 'Промежуточный слой', fr: 'couche intermédiaire', ar: 'الطبقة المتوسطة', ja: ''
  },
  '中间层下摆': {
    cn: '中间层下摆', en: 'Middle layer hem', th: 'ชายกระโปรงชั้นกลาง', vn: 'Viền lớp giữa', es: 'dobladillo de la capa intermedia',
    pt: 'bainha da camada intermediária', id_lang: 'Kelim lapisan tengah', ru: 'Средний слой подола', fr: 'ourlet de la couche intermédiaire', ar: 'حاشية الطبقة الوسطى', ja: ''
  },
  '中间层面料': {
    cn: '中间层面料', en: 'Intermediate layer fabric', th: 'ผ้าชั้นกลาง', vn: 'Vải lớp trung gian', es: 'Tejido de capa intermedia',
    pt: 'Tecido de camada intermediária', id_lang: 'Kain lapisan tengah', ru: 'Ткань промежуточного слоя', fr: 'Tissu de couche intermédiaire', ar: 'قماش الطبقة المتوسطة', ja: ''
  },
  '中黄': {
    cn: '中黄', en: 'Zhonghuang', th: 'จงหวง', vn: 'Trung Hoàng', es: 'Zhonghuang',
    pt: 'Zhonghuang', id_lang: 'Zhonghuang', ru: 'Чжунхуан', fr: 'Zhonghuang', ar: 'تشونغ هوانغ', ja: ''
  },
  '中黄条纹': {
    cn: '中黄条纹', en: 'Medium yellow stripes', th: 'ลายทางสีเหลืองขนาดกลาง', vn: 'Sọc vàng trung bình', es: 'rayas amarillas medianas',
    pt: 'Listras amarelas médias', id_lang: 'Garis-garis kuning sedang', ru: 'Средние желтые полосы', fr: 'rayures jaune moyen', ar: 'خطوط صفراء متوسطة', ja: ''
  },
  '中黄格纹': {
    cn: '中黄格纹', en: 'Medium yellow checkered pattern', th: 'ลายตารางหมากรุกสีเหลืองขนาดกลาง', vn: 'Họa tiết caro màu vàng nhạt', es: 'Patrón a cuadros amarillo medio',
    pt: 'Padrão xadrez amarelo médio', id_lang: 'Pola kotak-kotak kuning sedang', ru: 'Средний желтый клетчатый узор', fr: 'motif à carreaux jaune moyen', ar: 'نمط مربعات أصفر متوسط', ja: ''
  },
  '中黄花纹': {
    cn: '中黄花纹', en: 'Medium yellow pattern', th: 'ลวดลายสีเหลืองขนาดกลาง', vn: 'Họa tiết màu vàng trung bình', es: 'Patrón amarillo medio',
    pt: 'Padrão amarelo médio', id_lang: 'Pola kuning sedang', ru: 'Узор среднего желтого цвета', fr: 'motif jaune moyen', ar: 'نقش أصفر متوسط', ja: ''
  },
  '中黄镶拼': {
    cn: '中黄镶拼', en: 'Central Yellow Inlaid', th: 'ฝังลายสีเหลืองตรงกลาง', vn: 'Màu vàng trung tâm khảm', es: 'Amarillo central incrustado',
    pt: 'Central Amarelo Incrustado', id_lang: 'Bagian Tengah Bertatahkan Kuning', ru: 'Центральная желтая вставка', fr: 'Incrustations jaunes centrales', ar: 'مطعم باللون الأصفر المركزي', ja: ''
  },
  '主体部位': {
    cn: '主体部位', en: 'Main body', th: 'ลำตัวหลัก', vn: 'Thân chính', es: 'Cuerpo principal',
    pt: 'Corpo principal', id_lang: 'Badan utama', ru: 'Основной корпус', fr: 'Corps principal', ar: 'الجسم الرئيسي', ja: ''
  },
  '主料': {
    cn: '主料', en: 'Main ingredients', th: 'ส่วนประกอบหลัก', vn: 'Thành phần chính', es: 'Ingredientes principales',
    pt: 'Ingredientes principais', id_lang: 'Bahan-bahan utama', ru: 'Основные ингредиенты', fr: 'Ingrédients principaux', ar: 'المكونات الرئيسية', ja: ''
  },
  '主纱线': {
    cn: '主纱线', en: 'main yarn', th: 'เส้นด้ายหลัก', vn: 'sợi chính', es: 'hilo principal',
    pt: 'fio principal', id_lang: 'benang utama', ru: 'основная пряжа', fr: 'fil principal', ar: 'الخيط الرئيسي', ja: ''
  },
  '主面料': {
    cn: '主面料', en: 'Main fabric', th: 'ผ้าหลัก', vn: 'chất liệu chính', es: 'Tejido principal',
    pt: 'Tecido principal', id_lang: 'Kain utama', ru: 'Основная ткань', fr: 'Tissu principal', ar: 'القماش الرئيسي', ja: ''
  },
  '乙烯': {
    cn: '乙烯', en: 'ethylene', th: 'เอทิลีน', vn: 'etylen', es: 'etileno',
    pt: 'etileno', id_lang: 'etilena', ru: 'этилен', fr: 'éthylène', ar: 'الإيثيلين', ja: ''
  },
  '九分半': {
    cn: '九分半', en: 'Nine and a half minutes', th: 'เก้านาทีครึ่ง', vn: 'Chín phút rưỡi', es: 'Nueve minutos y medio',
    pt: 'Nove minutos e meio', id_lang: 'Sembilan setengah menit', ru: 'Девять с половиной минут', fr: 'Neuf minutes et demie', ar: 'تسع دقائق ونصف', ja: ''
  },
  '乳白': {
    cn: '乳白', en: 'cream', th: 'ครีม', vn: 'kem', es: 'crema',
    pt: 'creme', id_lang: 'krim', ru: 'крем', fr: 'crème', ar: 'كريم', ja: ''
  },
  '二烯类弹性纤维': {
    cn: '二烯类弹性纤维', en: 'Diene elastic fibers', th: 'เส้นใยยืดหยุ่นไดอีน', vn: 'Sợi đàn hồi diene', es: 'Fibras elásticas de dieno',
    pt: 'Fibras elásticas dieno', id_lang: 'Serat elastis Diene', ru: 'Диеновые эластичные волокна', fr: 'fibres élastiques diènes', ar: 'ألياف ديين المرنة', ja: ''
  },
  '云丝锦面料': {
    cn: '云丝锦面料', en: 'Cloud silk brocade fabric', th: 'ผ้าไหมทอลายเมฆ', vn: 'Vải gấm lụa mây', es: 'Tela de brocado de seda nube',
    pt: 'Tecido brocado de seda nuvem', id_lang: 'Kain brokat sutra awan', ru: 'Ткань «облачный шелк»', fr: 'tissu brocart de soie nuageuse', ar: 'قماش بروكار من حرير الغيوم', ja: ''
  },
  '云岫': {
    cn: '云岫', en: 'Yunxiu', th: 'หยุนซิ่ว', vn: 'Vân Tụ', es: 'Yunxiu',
    pt: 'Yunxiu', id_lang: 'Yun Xiu', ru: 'Юньсю', fr: 'Yunxiu', ar: 'يونكسيو', ja: ''
  },
  '云柔棉': {
    cn: '云柔棉', en: 'Cloud Soft Cotton', th: 'ผ้าฝ้ายเนื้อนุ่มดุจเมฆ', vn: 'Bông mềm mại như mây', es: 'Algodón suave como una nube',
    pt: 'Algodão macio como uma nuvem', id_lang: 'Katun Lembut Seperti Awan', ru: 'Мягкий хлопок «Облако»', fr: 'Coton doux nuageux', ar: 'قطن ناعم كالسحابة', ja: ''
  },
  '云柔珠': {
    cn: '云柔珠', en: 'Yun Rouzhu', th: 'หยุน โรจู', vn: 'Vân Nhu Trúc', es: 'Yun Rouzhu',
    pt: 'Yun Rouzhu', id_lang: 'Yun Rouzhu', ru: 'Юн Роучжу', fr: 'Yun Rouzhu', ar: 'يون روزو', ja: ''
  },
  '云水蓝': {
    cn: '云水蓝', en: 'Cloud and Water Blue', th: 'เมฆและน้ำสีฟ้า', vn: 'Mây và nước xanh', es: 'Nube y agua azul',
    pt: 'Azul Nuvem e Água', id_lang: 'Biru Awan dan Air', ru: 'Облака и вода, синие', fr: 'Bleu nuage et eau', ar: 'سحاب وأزرق مائي', ja: ''
  },
  '云糯棉': {
    cn: '云糯棉', en: 'Yunnuo Cotton', th: 'ฝ้ายหยุนนัว', vn: 'Bông Yunnuo', es: 'Algodón Yunnuo',
    pt: 'Algodão Yunnuo', id_lang: 'Kapas Yunnuo', ru: 'Юннуо Коттон', fr: 'Yunnuo Coton', ar: 'يونو قطن', ja: ''
  },
  '云褐': {
    cn: '云褐', en: 'Cloud Brown', th: 'เมฆสีน้ำตาล', vn: 'Mây nâu', es: 'Marrón nube',
    pt: 'Marrom Nuvem', id_lang: 'Cokelat Awan', ru: 'Клауд Браун', fr: 'Brun nuageux', ar: 'كلاود براون', ja: ''
  },
  '五明治': {
    cn: '五明治', en: 'Waffles', th: 'วาฟเฟิล', vn: 'Bánh quế', es: 'Gofres',
    pt: 'Waffles', id_lang: 'Wafel', ru: 'Вафли', fr: 'Gaufres', ar: 'الوافل', ja: ''
  },
  '五袋款': {
    cn: '五袋款', en: 'Five-bag version', th: 'รุ่นห้าถุง', vn: 'Phiên bản năm túi', es: 'Versión de cinco bolsas',
    pt: 'Versão com cinco bolsas', id_lang: 'Versi lima tas', ru: 'Версия из пяти пакетов', fr: 'Version à cinq sacs', ar: 'نسخة من خمس حقائب', ja: ''
  },
  '亚古力': {
    cn: '亚古力', en: 'Aguli', th: 'อากูลี', vn: 'Aguli', es: 'Aguli',
    pt: 'Aguili', id_lang: 'Aguli', ru: 'Агули', fr: 'Aguli', ar: 'أغولي', ja: ''
  },
  '亚麻': {
    cn: '亚麻', en: 'flax', th: 'แฟลกซ์', vn: 'cây gai', es: 'lino',
    pt: 'linho', id_lang: 'lenan', ru: 'лен', fr: 'lin', ar: 'الكتان', ja: ''
  },
  '产地': {
    cn: '产地', en: 'Country of Origin', th: 'ประเทศที่ผลิต', vn: 'Xuất xứ', es: 'País de origen',
    pt: 'País de origem', id_lang: 'Negara Asal', ru: 'Страна происхождения', fr: 'Pays d\'origine', ar: 'بلد المنشأ', ja: ''
  },
  '亮丝': {
    cn: '亮丝', en: 'Glossy silk', th: 'ผ้าไหมเงางาม', vn: 'Lụa bóng', es: 'Seda brillante',
    pt: 'Seda brilhante', id_lang: 'Sutra mengkilap', ru: 'Блестящий шелк', fr: 'Soie brillante', ar: 'حرير لامع', ja: ''
  },
  '亮丝为聚酯薄膜纤维': {
    cn: '亮丝为聚酯薄膜纤维', en: 'Bright yarn is polyester film fiber', th: 'เส้นด้ายสีสดใสเป็นเส้นใยฟิล์มโพลีเอสเตอร์', vn: 'Sợi sáng màu là sợi màng polyester.', es: 'El hilo brillante es una fibra de película de poliéster.',
    pt: 'O fio brilhante é uma fibra de filme de poliéster.', id_lang: 'Benang cerah adalah serat film poliester.', ru: 'Светлая пряжа — это полиэфирное пленочное волокно.', fr: 'Le fil brillant est une fibre de film polyester', ar: 'الخيوط اللامعة هي ألياف أغشية البوليستر', ja: ''
  },
  '亮片除外': {
    cn: '亮片除外', en: 'Except for sequins', th: 'ยกเว้นเลื่อม', vn: 'Ngoại trừ kim sa', es: 'Excepto por las lentejuelas',
    pt: 'Exceto lantejoulas', id_lang: 'Kecuali payet', ru: 'За исключением пайеток', fr: 'À l&#39;exception des paillettes', ar: 'باستثناء الترتر', ja: ''
  },
  '亮粉除外': {
    cn: '亮粉除外', en: 'Except for glitter', th: 'ยกเว้นกลิตเตอร์', vn: 'Ngoại trừ kim tuyến', es: 'Excepto por la purpurina',
    pt: 'Exceto pelo brilho.', id_lang: 'Kecuali glitter', ru: 'За исключением блесток', fr: 'À l&#39;exception des paillettes', ar: 'باستثناء البريق', ja: ''
  },
  '亮纱': {
    cn: '亮纱', en: 'bright yarn', th: 'เส้นด้ายสีสดใส', vn: 'sợi len sáng màu', es: 'hilo brillante',
    pt: 'fio brilhante', id_lang: 'benang cerah', ru: 'яркая пряжа', fr: 'fil brillant', ar: 'خيوط زاهية', ja: ''
  },
  '人棉': {
    cn: '人棉', en: 'Rayon', th: 'เรยอน', vn: 'Rayon', es: 'Seda artificial',
    pt: 'Rayon', id_lang: 'Rayon', ru: 'Район', fr: 'Rayonne', ar: 'رايون', ja: ''
  },
  '人造丝': {
    cn: '人造丝', en: 'Rayon', th: 'เรยอน', vn: 'Rayon', es: 'Rayón',
    pt: 'Rayon', id_lang: 'Rayon', ru: 'Искусственный шёлк', fr: 'Rayonne', ar: 'حرير صناعي', ja: ''
  },
  '人造毛皮': {
    cn: '人造毛皮', en: 'Faux Fur', th: 'ขนสัตว์เทียม', vn: 'Lông thú nhân tạo', es: 'Pelo sintético',
    pt: 'Pele sintética', id_lang: 'Bulu sintetis', ru: 'Искусственный мех', fr: 'Fausse fourrure', ar: 'فرو صناعي', ja: ''
  },
  '人造革': {
    cn: '人造革', en: 'artificial leather', th: 'หนังสังเคราะห์', vn: 'da nhân tạo', es: 'cuero sintético',
    pt: 'couro artificial', id_lang: 'kulit sintetis', ru: 'искусственная кожа', fr: 'cuir artificiel', ar: 'جلد صناعي', ja: ''
  },
  '仅限干洗': {
    cn: '仅限干洗', en: 'Dry clean only', th: 'ซักแห้งเท่านั้น', vn: 'Chỉ giặt khô', es: 'Limpieza en seco únicamente',
    pt: 'Lavar a seco apenas', id_lang: 'Hanya cuci kering', ru: 'Только химчистка', fr: 'Nettoyage à sec uniquement', ar: 'تنظيف جاف فقط', ja: ''
  },
  '仅限手洗': {
    cn: '仅限手洗', en: 'Hand wash only', th: 'ซักมือเท่านั้น', vn: 'Chỉ giặt tay', es: 'Lavar solo a mano',
    pt: 'Lavar apenas à mão', id_lang: 'Hanya cuci tangan', ru: 'Только ручная стирка', fr: 'Lavage à la main uniquement', ar: 'غسيل يدوي فقط', ja: ''
  },
  '仅限氧漂': {
    cn: '仅限氧漂', en: 'Only oxygen bleach allowed', th: 'ใช้สารฟอกขาวที่มีออกซิเจนเท่านั้น', vn: 'Chỉ sử dụng chất tẩy oxy', es: 'Solo se permite blanqueador con oxígeno',
    pt: 'Permitido apenas alvejante com oxigênio', id_lang: 'Hanya pemutih oksigen yang diperbolehkan', ru: 'Разрешено только кислородное отбеливание', fr: 'Agent de blanchiment oxygéné uniquement', ar: 'يسمح فقط بالمبيض المؤكسج', ja: '酸素系漂白剤のみ可'
  },
  '仅限非氯漂白': {
    cn: '仅限非氯漂白', en: 'Only non-chlorine bleach', th: 'ใช้สารฟอกขาวที่ไม่มีคลอรีน', vn: 'Chỉ dùng chất tẩy không clo', es: 'Solo blanqueador sin cloro',
    pt: 'Usar apenas alvejante sem cloro', id_lang: 'Hanya pemutih tanpa klorin', ru: 'Только нехлорный отбеливатель', fr: 'Agent de blanchiment non chloré', ar: 'مبيض خالٍ من الكلور فقط', ja: ''
  },
  '以检测为准': {
    cn: '以检测为准', en: 'Based on testing', th: 'จากการทดสอบ', vn: 'Dựa trên kết quả thử nghiệm', es: 'Según las pruebas',
    pt: 'Com base em testes', id_lang: 'Berdasarkan pengujian', ru: 'На основе тестирования', fr: 'D&#39;après les tests', ar: 'بناءً على الاختبار', ja: ''
  },
  '仿丝棉/聚酯填充': {
    cn: '仿丝棉/聚酯填充', en: 'Polyester Padding', th: 'ใยโพลีเอสเตอร์', vn: 'Bông polyester', es: 'Relleno de poliéster',
    pt: 'Enchimento de poliéster', id_lang: 'Padding poliester', ru: 'Полиэстеровый наполнитель', fr: 'Rembourrage polyester', ar: 'حشوة بوليستر', ja: ''
  },
  '仿皮/PU皮': {
    cn: '仿皮/PU皮', en: 'PU / Faux Leather', th: 'หนังเทียม / หนัง PU', vn: 'Da PU / Da giả', es: 'Cuero sintético / PU',
    pt: 'Couro sintético / PU', id_lang: 'Kulit sintetis / PU', ru: 'Искусственная кожа / ПУ', fr: 'Cuir synthétique / PU', ar: 'جلد صناعي / بولي يوريثان', ja: ''
  },
  '仿铜氨': {
    cn: '仿铜氨', en: 'imitation cupro', th: 'คิวโปรเลียนแบบ', vn: 'đồng giả', es: 'imitación de cupro',
    pt: 'imitação de cupro', id_lang: 'imitasi cupro', ru: 'имитация купро', fr: 'imitation cupro', ar: 'نحاس مقلد', ja: ''
  },
  '仿铜氨复合面料': {
    cn: '仿铜氨复合面料', en: 'Imitation cupro composite fabric', th: 'ผ้าคอมโพสิตคิวโปรเทียม', vn: 'Vải composite đồng giả', es: 'Tejido compuesto de imitación de cupro',
    pt: 'Tecido composto de imitação de cupro', id_lang: 'Kain komposit cupro imitasi', ru: 'Имитация композитной ткани из купро', fr: 'Tissu composite imitation cupro', ar: 'نسيج مركب من النحاس المقلد', ja: ''
  },
  '仿铜氨针织': {
    cn: '仿铜氨针织', en: 'Imitation cupro knitwear', th: 'เสื้อถักคิวโปรเทียม', vn: 'Áo len dệt kim giả cupro', es: 'Prendas de punto de imitación de cupro',
    pt: 'malha de cupro imitada', id_lang: 'Pakaian rajut cupro imitasi', ru: 'Имитация трикотажа из купро', fr: 'imitation tricot en cupro', ar: 'ملابس محبوكة من الكوبرو المقلد', ja: ''
  },
  '仿铜氨面料': {
    cn: '仿铜氨面料', en: 'cupro-like fabric', th: 'ผ้าคล้ายคิวโปร', vn: 'vải giống cupro', es: 'tejido similar al cupro',
    pt: 'tecido tipo cupro', id_lang: 'kain mirip cupro', ru: 'ткань, похожая на купро', fr: 'tissu de type cupro', ar: 'قماش يشبه الكوبرو', ja: ''
  },
  '休闲': {
    cn: '休闲', en: 'Casual', th: 'ลำลอง', vn: 'Thường ngày', es: 'Casual',
    pt: 'Casual', id_lang: 'Kasual', ru: 'Повседневный', fr: 'Décontracté', ar: 'كاجوال', ja: ''
  },
  '休闲30度机洗': {
    cn: '休闲30度机洗', en: 'Casual Machine Wash at 30°C', th: 'ลำลอง ซักเครื่อง 30°C', vn: 'Thường ngày Giặt máy 30°C', es: 'Casual Lavado a máquina a 30°C',
    pt: 'Casual Lavagem à máquina a 30°C', id_lang: 'Kasual Cuci Mesin 30°C', ru: 'Повседневная Машинная стирка при 30°C', fr: 'Décontracté Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة كاجوال', ja: ''
  },
  '休闲40度机洗': {
    cn: '休闲40度机洗', en: 'Casual Machine Wash at 40°C', th: 'ลำลอง ซักเครื่อง 40°C', vn: 'Thường ngày Giặt máy 40°C', es: 'Casual Lavado a máquina a 40°C',
    pt: 'Casual Lavagem à máquina a 40°C', id_lang: 'Kasual Cuci Mesin 40°C', ru: 'Повседневная Машинная стирка при 40°C', fr: 'Décontracté Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة كاجوال', ja: ''
  },
  '休闲上装': {
    cn: '休闲上装', en: 'Casual Top', th: 'เสื้อลำลอง', vn: 'Áo Thường Ngày', es: 'Top Casual',
    pt: 'Parte Superior Casual', id_lang: 'Atasan Kasual', ru: 'Повседневный Топ', fr: 'Haut Décontracté', ar: 'جزء علوي كاجوال', ja: 'カジュアルトップス'
  },
  '休闲不可干洗': {
    cn: '休闲不可干洗', en: 'Casual Do Not Dry Clean', th: 'ลำลอง ห้ามซักแห้ง', vn: 'Thường ngày Không giặt khô', es: 'Casual No lavar en seco',
    pt: 'Casual Não lavar a seco', id_lang: 'Kasual Jangan Dry Clean', ru: 'Повседневная Не подвергать химчистке', fr: 'Décontracté Ne pas nettoyer à sec', ar: 'لا تنظف جافاً كاجوال', ja: ''
  },
  '休闲不可漂白': {
    cn: '休闲不可漂白', en: 'Casual Do Not Bleach', th: 'ลำลอง ห้ามฟอกขาว', vn: 'Thường ngày Không tẩy trắng', es: 'Casual No blanquear',
    pt: 'Casual Não usar alvejante', id_lang: 'Kasual Jangan Diputihkan', ru: 'Повседневная Не отбеливать', fr: 'Décontracté Ne pas blanchir', ar: 'لا تبيض كاجوال', ja: ''
  },
  '休闲不可烘干': {
    cn: '休闲不可烘干', en: 'Casual Do Not Tumble Dry', th: 'ลำลอง ห้ามอบแห้ง', vn: 'Thường ngày Không sấy khô', es: 'Casual No secar en secadora',
    pt: 'Casual Não secar em secadora', id_lang: 'Kasual Jangan Dikeringkan', ru: 'Повседневная Не сушить в машине', fr: 'Décontracté Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف كاجوال', ja: ''
  },
  '休闲亚麻': {
    cn: '休闲亚麻', en: 'Casual Linen', th: 'ลำลอง ผ้าลินิน', vn: 'Thường ngày Vải lanh', es: 'Casual Lino',
    pt: 'Casual Linho', id_lang: 'Kasual Linen', ru: 'Повседневная Лен', fr: 'Décontracté Lin', ar: 'كتان كاجوال', ja: ''
  },
  '休闲低温熨烫': {
    cn: '休闲低温熨烫', en: 'Casual Low Temperature Ironing', th: 'ลำลอง รีดอุณหภูมิต่ำ', vn: 'Thường ngày Ủi nhiệt độ thấp', es: 'Casual Planchar a baja temperatura',
    pt: 'Casual Passar a baixa temperatura', id_lang: 'Kasual Setrika Suhu Rendah', ru: 'Повседневная Глажка при низкой температуре', fr: 'Décontracté Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة كاجوال', ja: ''
  },
  '休闲再生涤纶': {
    cn: '休闲再生涤纶', en: 'Casual Recycled Polyester', th: 'ลำลอง โพลีเอสเตอร์รีไซเคิล', vn: 'Thường ngày Polyester tái chế', es: 'Casual Poliéster reciclado',
    pt: 'Casual Poliéster reciclado', id_lang: 'Kasual Poliester Daur Ulang', ru: 'Повседневная Переработанный полиэстер', fr: 'Décontracté Polyester recyclé', ar: 'بوليستر معاد التدوير كاجوال', ja: ''
  },
  '休闲冷水洗': {
    cn: '休闲冷水洗', en: 'Casual Cold Water Wash', th: 'ลำลอง ซักน้ำเย็น', vn: 'Thường ngày Giặt nước lạnh', es: 'Casual Lavado en agua fría',
    pt: 'Casual Lavagem em água fria', id_lang: 'Kasual Cuci Air Dingin', ru: 'Повседневная Стирка в холодной воде', fr: 'Décontracté Lavage à l\'eau froide', ar: 'غسيل بالماء البارد كاجوال', ja: ''
  },
  '休闲天丝': {
    cn: '休闲天丝', en: 'Casual Tencel', th: 'ลำลอง เทนเซล', vn: 'Thường ngày Tencel', es: 'Casual Tencel',
    pt: 'Casual Tencel', id_lang: 'Kasual Tencel', ru: 'Повседневная Тенсел', fr: 'Décontracté Tencel', ar: 'تنسل كاجوال', ja: ''
  },
  '休闲尼龙': {
    cn: '休闲尼龙', en: 'Casual Nylon', th: 'ลำลอง ไนลอน', vn: 'Thường ngày Nylon', es: 'Casual Nailon',
    pt: 'Casual Nylon', id_lang: 'Kasual Nilon', ru: 'Повседневная Нейлон', fr: 'Décontracté Nylon', ar: 'نايلون كاجوال', ja: ''
  },
  '休闲平铺晾干': {
    cn: '休闲平铺晾干', en: 'Casual Lay Flat to Dry', th: 'ลำลอง ตากแห้งแบบแบน', vn: 'Thường ngày Phơi phẳng', es: 'Casual Secar en plano',
    pt: 'Casual Secar na horizontal', id_lang: 'Kasual Keringkan Datar', ru: 'Повседневная Сушить в расправленном виде', fr: 'Décontracté Sécher à plat', ar: 'تجفيف مسطح كاجوال', ja: ''
  },
  '休闲悬挂晾干': {
    cn: '休闲悬挂晾干', en: 'Casual Hang Dry', th: 'ลำลอง แขวนตากแห้ง', vn: 'Thường ngày Phơi treo', es: 'Casual Secar colgado',
    pt: 'Casual Secar pendurado', id_lang: 'Kasual Gantung Kering', ru: 'Повседневная Сушить в подвешенном состоянии', fr: 'Décontracté Sécher suspendu', ar: 'تجفيف بالتعليق كاجوال', ja: ''
  },
  '休闲手洗': {
    cn: '休闲手洗', en: 'Casual Hand Wash', th: 'ลำลอง ซักมือ', vn: 'Thường ngày Giặt tay', es: 'Casual Lavado a mano',
    pt: 'Casual Lavagem à mão', id_lang: 'Kasual Cuci Tangan', ru: 'Повседневная Ручная стирка', fr: 'Décontracté Lavage à la main', ar: 'غسيل يدوي كاجوال', ja: ''
  },
  '休闲有机棉': {
    cn: '休闲有机棉', en: 'Casual Organic Cotton', th: 'ลำลอง ผ้าฝ้ายออร์แกนิก', vn: 'Thường ngày Cotton hữu cơ', es: 'Casual Algodón orgánico',
    pt: 'Casual Algodão orgânico', id_lang: 'Kasual Katun Organik', ru: 'Повседневная Органический хлопок', fr: 'Décontracté Coton biologique', ar: 'قطن عضوي كاجوال', ja: ''
  },
  '休闲机洗': {
    cn: '休闲机洗', en: 'Casual Machine Wash', th: 'ลำลอง ซักเครื่อง', vn: 'Thường ngày Giặt máy', es: 'Casual Lavado a máquina',
    pt: 'Casual Lavagem à máquina', id_lang: 'Kasual Cuci Mesin', ru: 'Повседневная Машинная стирка', fr: 'Décontracté Lavage en machine', ar: 'غسيل آلي كاجوال', ja: ''
  },
  '休闲棉': {
    cn: '休闲棉', en: 'Casual Cotton', th: 'ลำลอง ผ้าฝ้าย', vn: 'Thường ngày Cotton', es: 'Casual Algodón',
    pt: 'Casual Algodão', id_lang: 'Kasual Katun', ru: 'Повседневная Хлопок', fr: 'Décontracté Coton', ar: 'قطن كاجوال', ja: ''
  },
  '休闲氨纶': {
    cn: '休闲氨纶', en: 'Casual Spandex', th: 'ลำลอง สแปนเด็กซ์', vn: 'Thường ngày Spandex', es: 'Casual Elastano',
    pt: 'Casual Elastano', id_lang: 'Kasual Spandex', ru: 'Повседневная Спандекс', fr: 'Décontracté Élasthanne', ar: 'سباندكس كاجوال', ja: ''
  },
  '休闲涤纶': {
    cn: '休闲涤纶', en: 'Casual Polyester', th: 'ลำลอง โพลีเอสเตอร์', vn: 'Thường ngày Polyester', es: 'Casual Poliéster',
    pt: 'Casual Poliéster', id_lang: 'Kasual Poliester', ru: 'Повседневная Полиэстер', fr: 'Décontracté Polyester', ar: 'بوليستر كاجوال', ja: ''
  },
  '休闲温水洗': {
    cn: '休闲温水洗', en: 'Casual Warm Water Wash', th: 'ลำลอง ซักน้ำอุ่น', vn: 'Thường ngày Giặt nước ấm', es: 'Casual Lavado en agua tibia',
    pt: 'Casual Lavagem em água morna', id_lang: 'Kasual Cuci Air Hangat', ru: 'Повседневная Стирка в теплой воде', fr: 'Décontracté Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ كاجوال', ja: ''
  },
  '休闲真丝': {
    cn: '休闲真丝', en: 'Casual Pure Silk', th: 'ลำลอง ผ้าไหมแท้', vn: 'Thường ngày Lụa thật', es: 'Casual Seda pura',
    pt: 'Casual Seda pura', id_lang: 'Kasual Sutra Asli', ru: 'Повседневная Натуральный шелк', fr: 'Décontracté Soie naturelle', ar: 'حرير طبيعي كاجوال', ja: ''
  },
  '休闲竹纤维': {
    cn: '休闲竹纤维', en: 'Casual Bamboo Fiber', th: 'ลำลอง เส้นใยไผ่', vn: 'Thường ngày Sợi tre', es: 'Casual Fibra de bambú',
    pt: 'Casual Fibra de bambu', id_lang: 'Kasual Serat Bambu', ru: 'Повседневная Бамбуковое волокно', fr: 'Décontracté Fibre de bambou', ar: 'ألياف الخيزران كاجوال', ja: ''
  },
  '休闲粘纤': {
    cn: '休闲粘纤', en: 'Casual Viscose', th: 'ลำลอง วิสโคส', vn: 'Thường ngày Viscose', es: 'Casual Viscosa',
    pt: 'Casual Viscose', id_lang: 'Kasual Viskosa', ru: 'Повседневная Вискоза', fr: 'Décontracté Viscose', ar: 'فيسكوز كاجوال', ja: ''
  },
  '休闲精梳棉': {
    cn: '休闲精梳棉', en: 'Casual Combed Cotton', th: 'ลำลอง ผ้าฝ้ายหวี', vn: 'Thường ngày Cotton chải', es: 'Casual Algodón peinado',
    pt: 'Casual Algodão penteado', id_lang: 'Kasual Katun Sisir', ru: 'Повседневная Гребенной хлопок', fr: 'Décontracté Coton peigné', ar: 'قطن ممشط كاجوال', ja: ''
  },
  '休闲羊毛': {
    cn: '休闲羊毛', en: 'Casual Wool', th: 'ลำลอง ขนแกะ', vn: 'Thường ngày Len', es: 'Casual Lana',
    pt: 'Casual Lã', id_lang: 'Kasual Wol', ru: 'Повседневная Шерсть', fr: 'Décontracté Laine', ar: 'صوف كاجوال', ja: ''
  },
  '休闲羊绒': {
    cn: '休闲羊绒', en: 'Casual Cashmere', th: 'ลำลอง แคชเมียร์', vn: 'Thường ngày Cashmere', es: 'Casual Cachemira',
    pt: 'Casual Caxemira', id_lang: 'Kasual Kasmir', ru: 'Повседневная Кашемир', fr: 'Décontracté Cachemire', ar: 'كشمير كاجوال', ja: ''
  },
  '休闲腈纶': {
    cn: '休闲腈纶', en: 'Casual Acrylic', th: 'ลำลอง อะคริลิก', vn: 'Thường ngày Acrylic', es: 'Casual Acrílico',
    pt: 'Casual Acrílico', id_lang: 'Kasual Akrilik', ru: 'Повседневная Акрил', fr: 'Décontracté Acrylique', ar: 'أكريليك كاجوال', ja: ''
  },
  '休闲莫代尔': {
    cn: '休闲莫代尔', en: 'Casual Modal', th: 'ลำลอง โมดอล', vn: 'Thường ngày Modal', es: 'Casual Modal',
    pt: 'Casual Modal', id_lang: 'Kasual Modal', ru: 'Повседневная Модал', fr: 'Décontracté Modal', ar: 'مودال كاجوال', ja: ''
  },
  '休闲莱赛尔': {
    cn: '休闲莱赛尔', en: 'Casual Lyocell', th: 'ลำลอง ไลโอเซลล์', vn: 'Thường ngày Lyocell', es: 'Casual Lyocell',
    pt: 'Casual Lyocell', id_lang: 'Kasual Lyocell', ru: 'Повседневная Лиоцелл', fr: 'Décontracté Lyocell', ar: 'ليوسيل كاجوال', ja: ''
  },
  '休闲锦纶': {
    cn: '休闲锦纶', en: 'Casual Nylon', th: 'ลำลอง ไนลอน', vn: 'Thường ngày Nylon', es: 'Casual Nailon',
    pt: 'Casual Nylon', id_lang: 'Kasual Nilon', ru: 'Повседневная Нейлон', fr: 'Décontracté Nylon', ar: 'نايلون كاجوال', ja: ''
  },
  '休闲马海毛': {
    cn: '休闲马海毛', en: 'Casual Mohair', th: 'ลำลอง โมแฮร์', vn: 'Thường ngày Mohair', es: 'Casual Mohair',
    pt: 'Casual Mohair', id_lang: 'Kasual Mohair', ru: 'Повседневная Мохер', fr: 'Décontracté Mohair', ar: 'موهير كاجوال', ja: ''
  },
  '低温烘干': {
    cn: '低温烘干', en: 'Tumble dry low', th: 'อบแห้งด้วยความร้อนต่ำ', vn: 'Sấy khô nhiệt độ thấp', es: 'Secar en secadora a baja temp',
    pt: 'Secar na máquina a baixa temp', id_lang: 'Keringkan mesin suhu rendah', ru: 'Сушить в машине при низкой темп', fr: 'Séchage en machine à basse temp', ar: 'تجفيف آلي بحرارة منخفضة', ja: ''
  },
  '低温熨烫': {
    cn: '低温熨烫', en: 'Iron low heat', th: 'รีดด้วยความร้อนต่ำ', vn: 'Ủi nhiệt độ thấp', es: 'Planchar a baja temperatura',
    pt: 'Passar a ferro em temperatura baixa', id_lang: 'Setrika suhu rendah', ru: 'Гладить при низкой температуре', fr: 'Repasser à basse température', ar: 'كي بدرجة حرارة منخفضة', ja: ''
  },
  '余白': {
    cn: '余白', en: 'Yu Bai', th: 'หยูไป๋', vn: 'Ngọc Bạch', es: 'Yubai',
    pt: 'Yu Bai', id_lang: 'Yu Bai', ru: 'Ю Бай', fr: 'Yu Bai', ar: 'يو باي', ja: ''
  },
  '使用中性洗涤剂轻柔洗涤': {
    cn: '使用中性洗涤剂轻柔洗涤', en: 'Use neutral detergent and wash gently.', th: 'ใช้ผงซักฟอกชนิดอ่อนและซักอย่างเบามือ', vn: 'Sử dụng chất tẩy rửa trung tính và giặt nhẹ nhàng.', es: 'Usar detergente neutro y lavar suavemente.',
    pt: 'Usar detergente neutro e lavar suavemente.', id_lang: 'Gunakan deterjen netral dan cuci dengan lembut.', ru: 'Использовать нейтральное моющее средство и стирать в щадящем режиме.', fr: 'Utiliser un détergent neutre et laver délicatement.', ar: 'استخدم منظفًا محايدًا واغسل بلطف.', ja: ''
  },
  '使用中性洗涤剂轻柔洗涤 注：深浅色衣物分开洗涤，不可长时间浸泡，不可重搓洗。': {
    cn: '使用中性洗涤剂轻柔洗涤 注：深浅色衣物分开洗涤，不可长时间浸泡，不可重搓洗。', en: 'Wash gently with a neutral detergent. Note: Wash dark and light-colored clothes separately, do not soak for a long time, and do not rub vigorously.', th: 'ซักด้วยผงซักฟอกที่เป็นกลางและอ่อนโยน ข้อควรระวัง: ควรแยกซักเสื้อผ้าสีเข้มและสีอ่อน ไม่ควรแช่น้ำเป็นเวลานาน และไม่ควรขยี้ซ้ำๆ', vn: 'Sử dụng chất tẩy trung tính, giặt nhẹ nhàng. Lưu ý: phân loại quần áo màu sẫm và màu sáng để giặt riêng, không ngâm lâu, không vò mạnh.', es: 'Lavar a mano con detergente neutro. Nota: Lavar por separado las prendas de colores oscuros y claros, no dejar en remojo por mucho tiempo y no frotar con fuerza.',
    pt: 'Utilize detergente neutro e lave com delicadeza. Nota: lave roupas claras e escuras separadamente, não deixe de molho por muito tempo e não esfregue demais.', id_lang: 'Gunakan deterjen netral untuk mencuci dengan lembut. Catatan: Cuci pakaian berwarna terang dan gelap secara terpisah, jangan merendam terlalu lama, dan jangan dicuci secara berlebihan.', ru: 'Бережно стирать в нейтральном моющем средстве. Примечание: темные и светлые вещи стирать отдельно, не замачивать надолго, не тереть сильно.', fr: 'Laver délicatement avec un détergent neutre. Remarque : laver les couleurs foncées et claires séparément, ne pas faire tremper longtemps, ne pas frotter vigoureusement.', ar: 'يُغسل بلطف بمنظف محايد. ملاحظة: اغسل الملابس الداكنة والفاتحة بشكل منفصل، ولا تنقعها لفترة طويلة، ولا تفركها بقوة.', ja: ''
  },
  '使用四氯乙烯和符号F代表的所有溶剂的专业缓和干洗': {
    cn: '使用四氯乙烯和符号F代表的所有溶剂的专业缓和干洗', en: 'Professional dry cleaning with tetrachloroethylene and all solvents represented by the symbol F, mild dry cleaning', th: 'ซักแห้งโดยผู้เชี่ยวชาญด้วยเตตราคลอโรเอทิลีนและสารละลายทั้งหมดที่มีสัญลักษณ์ F, ซักแห้งแบบอ่อนโยน', vn: 'Giặt khô chuyên nghiệp với tetrachloroethylene và tất cả các dung môi được biểu thị bằng ký hiệu F, giặt khô nhẹ', es: 'Limpieza profesional en seco con tetracloroetileno y todos los disolventes representados por el símbolo F, limpieza en seco suave',
    pt: 'Limpieza profissional a seco com tetracloroetileno e todos os solventes representados pelo símbolo F, limpeza suave a seco', id_lang: 'Pencucian kering profesional dengan tetrakloroetilen dan semua pelarut yang ditunjukkan dengan simbol F, pencucian kering ringan', ru: 'Профессиональная химчистка с использованием тетрахлорэтилена и всех растворителей, обозначенных символом F, мягкая химчистка', fr: 'Nettoyage à sec professionnel avec du tétrachloroéthylène et tous les solvants représentés par le symbole F, nettoyage à sec doux', ar: 'ينظف تنظيفاً جافاً على يد متخصصين باستخدام رباعي كلور الإيثيلين وجميع المذيبات الممثلة بالرمز F، ينظف تنظيفاً جافاً في دورة خفيفة', ja: 'パークロロエチレン及び石油系溶剤による弱いドライクリーニングができる'
  },
  '使用温和洗涤剂': {
    cn: '使用温和洗涤剂', en: 'Use mild detergent', th: 'ใช้ผงซักฟอกแบบอ่อนโยน', vn: 'Dùng chất tẩy rửa nhẹ', es: 'Usar detergente suave',
    pt: 'Usar detergente suave', id_lang: 'Gunakan deterjen lembut', ru: 'Использовать мягкое моющее средство', fr: 'Utiliser un détergent doux', ar: 'استخدم منظف معتدل', ja: ''
  },
  '保养方法：勿接触酸碱、勿湿水、勿高温': {
    cn: '保养方法：勿接触酸碱、勿湿水、勿高温', en: 'Maintenance methods: Avoid contact with acids and bases, do not get wet, and avoid high temperatures.', th: 'วิธีการดูแลรักษา: ห้ามสัมผัสกับกรดหรือด่าง, ห้ามสัมผัสน้ำ, ห้ามอุณหภูมิสูง', vn: 'Cách bảo quản: Tránh tiếp xúc với axit và kiềm, không để ướt, không ở nhiệt độ cao', es: 'Métodos de mantenimiento: no tocar con ácidos o bases, no mojar, no exponer a altas temperaturas.',
    pt: 'Métodos de manutenção: não entrar em contato com ácidos ou bases, não molhar, não expor a altas temperaturas.', id_lang: 'Metode perawatan: Hindari kontak dengan asam dan basa, jangan terkena air, hindari suhu tinggi', ru: 'Способы ухода: избегать контакта с кислотами и щелочами, не мочить, не подвергать высокотемпературному воздействию.', fr: 'Méthode d\'entretien : éviter le contact avec des acides et des bases, éviter l\'humidité, éviter les températures élevées.', ar: 'طرق العناية: تجنب ملامسة الأحماض والقلويات، تجنب البلل، وتجنب درجات الحرارة العالية', ja: ''
  },
  '儿童': {
    cn: '儿童', en: 'Kids\'', th: 'เด็ก', vn: 'Trẻ em', es: 'de niño',
    pt: 'Infantil', id_lang: 'Anak-anak', ru: 'Детский', fr: 'Enfant', ar: 'أطفال', ja: ''
  },
  '儿童30度机洗': {
    cn: '儿童30度机洗', en: 'Kids\' Machine Wash at 30°C', th: 'เด็ก ซักเครื่อง 30°C', vn: 'Trẻ em Giặt máy 30°C', es: 'Niños Lavado a máquina a 30°C',
    pt: 'Infantil Lavagem à máquina a 30°C', id_lang: 'Anak Cuci Mesin 30°C', ru: 'Детская Машинная стирка при 30°C', fr: 'Enfant Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة أطفال', ja: ''
  },
  '儿童40度机洗': {
    cn: '儿童40度机洗', en: 'Kids\' Machine Wash at 40°C', th: 'เด็ก ซักเครื่อง 40°C', vn: 'Trẻ em Giặt máy 40°C', es: 'Niños Lavado a máquina a 40°C',
    pt: 'Infantil Lavagem à máquina a 40°C', id_lang: 'Anak Cuci Mesin 40°C', ru: 'Детская Машинная стирка при 40°C', fr: 'Enfant Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة أطفال', ja: ''
  },
  '儿童不可干洗': {
    cn: '儿童不可干洗', en: 'Kids\' Do Not Dry Clean', th: 'เด็ก ห้ามซักแห้ง', vn: 'Trẻ em Không giặt khô', es: 'Niños No lavar en seco',
    pt: 'Infantil Não lavar a seco', id_lang: 'Anak Jangan Dry Clean', ru: 'Детская Не подвергать химчистке', fr: 'Enfant Ne pas nettoyer à sec', ar: 'لا تنظف جافاً أطفال', ja: ''
  },
  '儿童不可漂白': {
    cn: '儿童不可漂白', en: 'Kids\' Do Not Bleach', th: 'เด็ก ห้ามฟอกขาว', vn: 'Trẻ em Không tẩy trắng', es: 'Niños No blanquear',
    pt: 'Infantil Não usar alvejante', id_lang: 'Anak Jangan Diputihkan', ru: 'Детская Не отбеливать', fr: 'Enfant Ne pas blanchir', ar: 'لا تبيض أطفال', ja: ''
  },
  '儿童不可烘干': {
    cn: '儿童不可烘干', en: 'Kids\' Do Not Tumble Dry', th: 'เด็ก ห้ามอบแห้ง', vn: 'Trẻ em Không sấy khô', es: 'Niños No secar en secadora',
    pt: 'Infantil Não secar em secadora', id_lang: 'Anak Jangan Dikeringkan', ru: 'Детская Не сушить в машине', fr: 'Enfant Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف أطفال', ja: ''
  },
  '儿童亚麻': {
    cn: '儿童亚麻', en: 'Kids\' Linen', th: 'เด็ก ผ้าลินิน', vn: 'Trẻ em Vải lanh', es: 'Niños Lino',
    pt: 'Infantil Linho', id_lang: 'Anak Linen', ru: 'Детская Лен', fr: 'Enfant Lin', ar: 'كتان أطفال', ja: ''
  },
  '儿童低温熨烫': {
    cn: '儿童低温熨烫', en: 'Kids\' Low Temperature Ironing', th: 'เด็ก รีดอุณหภูมิต่ำ', vn: 'Trẻ em Ủi nhiệt độ thấp', es: 'Niños Planchar a baja temperatura',
    pt: 'Infantil Passar a baixa temperatura', id_lang: 'Anak Setrika Suhu Rendah', ru: 'Детская Глажка при низкой температуре', fr: 'Enfant Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة أطفال', ja: ''
  },
  '儿童再生涤纶': {
    cn: '儿童再生涤纶', en: 'Kids\' Recycled Polyester', th: 'เด็ก โพลีเอสเตอร์รีไซเคิล', vn: 'Trẻ em Polyester tái chế', es: 'Niños Poliéster reciclado',
    pt: 'Infantil Poliéster reciclado', id_lang: 'Anak Poliester Daur Ulang', ru: 'Детская Переработанный полиэстер', fr: 'Enfant Polyester recyclé', ar: 'بوليستر معاد التدوير أطفال', ja: ''
  },
  '儿童冷水洗': {
    cn: '儿童冷水洗', en: 'Kids\' Cold Water Wash', th: 'เด็ก ซักน้ำเย็น', vn: 'Trẻ em Giặt nước lạnh', es: 'Niños Lavado en agua fría',
    pt: 'Infantil Lavagem em água fria', id_lang: 'Anak Cuci Air Dingin', ru: 'Детская Стирка в холодной воде', fr: 'Enfant Lavage à l\'eau froide', ar: 'غسيل بالماء البارد أطفال', ja: ''
  },
  '儿童天丝': {
    cn: '儿童天丝', en: 'Kids\' Tencel', th: 'เด็ก เทนเซล', vn: 'Trẻ em Tencel', es: 'Niños Tencel',
    pt: 'Infantil Tencel', id_lang: 'Anak Tencel', ru: 'Детская Тенсел', fr: 'Enfant Tencel', ar: 'تنسل أطفال', ja: ''
  },
  '儿童尼龙': {
    cn: '儿童尼龙', en: 'Kids\' Nylon', th: 'เด็ก ไนลอน', vn: 'Trẻ em Nylon', es: 'Niños Nailon',
    pt: 'Infantil Nylon', id_lang: 'Anak Nilon', ru: 'Детская Нейлон', fr: 'Enfant Nylon', ar: 'نايلون أطفال', ja: ''
  },
  '儿童平铺晾干': {
    cn: '儿童平铺晾干', en: 'Kids\' Lay Flat to Dry', th: 'เด็ก ตากแห้งแบบแบน', vn: 'Trẻ em Phơi phẳng', es: 'Niños Secar en plano',
    pt: 'Infantil Secar na horizontal', id_lang: 'Anak Keringkan Datar', ru: 'Детская Сушить в расправленном виде', fr: 'Enfant Sécher à plat', ar: 'تجفيف مسطح أطفال', ja: ''
  },
  '儿童悬挂晾干': {
    cn: '儿童悬挂晾干', en: 'Kids\' Hang Dry', th: 'เด็ก แขวนตากแห้ง', vn: 'Trẻ em Phơi treo', es: 'Niños Secar colgado',
    pt: 'Infantil Secar pendurado', id_lang: 'Anak Gantung Kering', ru: 'Детская Сушить в подвешенном состоянии', fr: 'Enfant Sécher suspendu', ar: 'تجفيف بالتعليق أطفال', ja: ''
  },
  '儿童手洗': {
    cn: '儿童手洗', en: 'Kids\' Hand Wash', th: 'เด็ก ซักมือ', vn: 'Trẻ em Giặt tay', es: 'Niños Lavado a mano',
    pt: 'Infantil Lavagem à mão', id_lang: 'Anak Cuci Tangan', ru: 'Детская Ручная стирка', fr: 'Enfant Lavage à la main', ar: 'غسيل يدوي أطفال', ja: ''
  },
  '儿童有机棉': {
    cn: '儿童有机棉', en: 'Kids\' Organic Cotton', th: 'เด็ก ผ้าฝ้ายออร์แกนิก', vn: 'Trẻ em Cotton hữu cơ', es: 'Niños Algodón orgánico',
    pt: 'Infantil Algodão orgânico', id_lang: 'Anak Katun Organik', ru: 'Детская Органический хлопок', fr: 'Enfant Coton biologique', ar: 'قطن عضوي أطفال', ja: ''
  },
  '儿童机洗': {
    cn: '儿童机洗', en: 'Kids\' Machine Wash', th: 'เด็ก ซักเครื่อง', vn: 'Trẻ em Giặt máy', es: 'Niños Lavado a máquina',
    pt: 'Infantil Lavagem à máquina', id_lang: 'Anak Cuci Mesin', ru: 'Детская Машинная стирка', fr: 'Enfant Lavage en machine', ar: 'غسيل آلي أطفال', ja: ''
  },
  '儿童棉': {
    cn: '儿童棉', en: 'Kids\' Cotton', th: 'เด็ก ผ้าฝ้าย', vn: 'Trẻ em Cotton', es: 'Niños Algodón',
    pt: 'Infantil Algodão', id_lang: 'Anak Katun', ru: 'Детская Хлопок', fr: 'Enfant Coton', ar: 'قطن أطفال', ja: ''
  },
  '儿童氨纶': {
    cn: '儿童氨纶', en: 'Kids\' Spandex', th: 'เด็ก สแปนเด็กซ์', vn: 'Trẻ em Spandex', es: 'Niños Elastano',
    pt: 'Infantil Elastano', id_lang: 'Anak Spandex', ru: 'Детская Спандекс', fr: 'Enfant Élasthanne', ar: 'سباندكس أطفال', ja: ''
  },
  '儿童涤纶': {
    cn: '儿童涤纶', en: 'Kids\' Polyester', th: 'เด็ก โพลีเอสเตอร์', vn: 'Trẻ em Polyester', es: 'Niños Poliéster',
    pt: 'Infantil Poliéster', id_lang: 'Anak Poliester', ru: 'Детская Полиэстер', fr: 'Enfant Polyester', ar: 'بوليستر أطفال', ja: ''
  },
  '儿童温水洗': {
    cn: '儿童温水洗', en: 'Kids\' Warm Water Wash', th: 'เด็ก ซักน้ำอุ่น', vn: 'Trẻ em Giặt nước ấm', es: 'Niños Lavado en agua tibia',
    pt: 'Infantil Lavagem em água morna', id_lang: 'Anak Cuci Air Hangat', ru: 'Детская Стирка в теплой воде', fr: 'Enfant Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ أطفال', ja: ''
  },
  '儿童真丝': {
    cn: '儿童真丝', en: 'Kids\' Pure Silk', th: 'เด็ก ผ้าไหมแท้', vn: 'Trẻ em Lụa thật', es: 'Niños Seda pura',
    pt: 'Infantil Seda pura', id_lang: 'Anak Sutra Asli', ru: 'Детская Натуральный шелк', fr: 'Enfant Soie naturelle', ar: 'حرير طبيعي أطفال', ja: ''
  },
  '儿童竹纤维': {
    cn: '儿童竹纤维', en: 'Kids\' Bamboo Fiber', th: 'เด็ก เส้นใยไผ่', vn: 'Trẻ em Sợi tre', es: 'Niños Fibra de bambú',
    pt: 'Infantil Fibra de bambu', id_lang: 'Anak Serat Bambu', ru: 'Детская Бамбуковое волокно', fr: 'Enfant Fibre de bambou', ar: 'ألياف الخيزران أطفال', ja: ''
  },
  '儿童粘纤': {
    cn: '儿童粘纤', en: 'Kids\' Viscose', th: 'เด็ก วิสโคส', vn: 'Trẻ em Viscose', es: 'Niños Viscosa',
    pt: 'Infantil Viscose', id_lang: 'Anak Viskosa', ru: 'Детская Вискоза', fr: 'Enfant Viscose', ar: 'فيسكوز أطفال', ja: ''
  },
  '儿童精梳棉': {
    cn: '儿童精梳棉', en: 'Kids\' Combed Cotton', th: 'เด็ก ผ้าฝ้ายหวี', vn: 'Trẻ em Cotton chải', es: 'Niños Algodón peinado',
    pt: 'Infantil Algodão penteado', id_lang: 'Anak Katun Sisir', ru: 'Детская Гребенной хлопок', fr: 'Enfant Coton peigné', ar: 'قطن ممشط أطفال', ja: ''
  },
  '儿童羊毛': {
    cn: '儿童羊毛', en: 'Kids\' Wool', th: 'เด็ก ขนแกะ', vn: 'Trẻ em Len', es: 'Niños Lana',
    pt: 'Infantil Lã', id_lang: 'Anak Wol', ru: 'Детская Шерсть', fr: 'Enfant Laine', ar: 'صوف أطفال', ja: ''
  },
  '儿童羊绒': {
    cn: '儿童羊绒', en: 'Kids\' Cashmere', th: 'เด็ก แคชเมียร์', vn: 'Trẻ em Cashmere', es: 'Niños Cachemira',
    pt: 'Infantil Caxemira', id_lang: 'Anak Kasmir', ru: 'Детская Кашемир', fr: 'Enfant Cachemire', ar: 'كشمير أطفال', ja: ''
  },
  '儿童腈纶': {
    cn: '儿童腈纶', en: 'Kids\' Acrylic', th: 'เด็ก อะคริลิก', vn: 'Trẻ em Acrylic', es: 'Niños Acrílico',
    pt: 'Infantil Acrílico', id_lang: 'Anak Akrilik', ru: 'Детская Акрил', fr: 'Enfant Acrylique', ar: 'أكريليك أطفال', ja: ''
  },
  '儿童莫代尔': {
    cn: '儿童莫代尔', en: 'Kids\' Modal', th: 'เด็ก โมดอล', vn: 'Trẻ em Modal', es: 'Niños Modal',
    pt: 'Infantil Modal', id_lang: 'Anak Modal', ru: 'Детская Модал', fr: 'Enfant Modal', ar: 'مودال أطفال', ja: ''
  },
  '儿童莱赛尔': {
    cn: '儿童莱赛尔', en: 'Kids\' Lyocell', th: 'เด็ก ไลโอเซลล์', vn: 'Trẻ em Lyocell', es: 'Niños Lyocell',
    pt: 'Infantil Lyocell', id_lang: 'Anak Lyocell', ru: 'Детская Лиоцелл', fr: 'Enfant Lyocell', ar: 'ليوسيل أطفال', ja: ''
  },
  '儿童锦纶': {
    cn: '儿童锦纶', en: 'Kids\' Nylon', th: 'เด็ก ไนลอน', vn: 'Trẻ em Nylon', es: 'Niños Nailon',
    pt: 'Infantil Nylon', id_lang: 'Anak Nilon', ru: 'Детская Нейлон', fr: 'Enfant Nylon', ar: 'نايلون أطفال', ja: ''
  },
  '儿童马海毛': {
    cn: '儿童马海毛', en: 'Kids\' Mohair', th: 'เด็ก โมแฮร์', vn: 'Trẻ em Mohair', es: 'Niños Mohair',
    pt: 'Infantil Mohair', id_lang: 'Anak Mohair', ru: 'Детская Мохер', fr: 'Enfant Mohair', ar: 'موهير أطفال', ja: ''
  },
  '克隆棉': {
    cn: '克隆棉', en: 'Cloned cotton', th: 'ฝ้ายโคลน', vn: 'Bông nhân bản', es: 'Algodón clonado',
    pt: 'Algodão clonado', id_lang: 'Kapas hasil kloning', ru: 'Клонированный хлопок', fr: 'Coton cloné', ar: 'قطن مستنسخ', ja: ''
  },
  '免烫': {
    cn: '免烫', en: 'No wrinkle', th: 'ไม่มีรอยยับ', vn: 'Không nhăn', es: 'Sin arrugas',
    pt: 'Sem rugas', id_lang: 'Tidak berkerut', ru: 'Без морщин', fr: 'Aucune ride', ar: 'لا تجاعيد', ja: ''
  },
  '兔毛': {
    cn: '兔毛', en: 'rabbit fur', th: 'ขนกระต่าย', vn: 'lông thỏ', es: 'piel de conejo',
    pt: 'pele de coelho', id_lang: 'bulu kelinci', ru: 'кроличий мех', fr: 'fourrure de lapin', ar: 'أرنب', ja: ''
  },
  '兔毛皮': {
    cn: '兔毛皮', en: 'rabbit fur', th: 'ขนกระต่าย', vn: 'lông thỏ', es: 'piel de conejo',
    pt: 'pele de coelho', id_lang: 'bulu kelinci', ru: 'кроличий мех', fr: 'fourrure de lapin', ar: 'أرنب', ja: ''
  },
  '兔绒复合': {
    cn: '兔绒复合', en: 'Rabbit hair composite', th: 'ขนกระต่ายผสม', vn: 'Hợp chất lông thỏ', es: 'compuesto de pelo de conejo',
    pt: 'composto de pelo de coelho', id_lang: 'Komposit bulu kelinci', ru: 'композит из кроличьей шерсти', fr: 'Composé de poils de lapin', ar: 'مركب شعر الأرنب', ja: ''
  },
  '全新冰爽棉': {
    cn: '全新冰爽棉', en: 'New Cool Cotton', th: 'ผ้าฝ้ายเย็นใหม่', vn: 'Bông thoáng mát mới', es: 'Nuevo algodón fresco',
    pt: 'Novo algodão fresco', id_lang: 'Katun Baru yang Sejuk', ru: 'Новый прохладный хлопок', fr: 'Nouveau coton frais', ar: 'قطن بارد جديد', ja: ''
  },
  '全棉': {
    cn: '全棉', en: '100% cotton', th: 'ผ้าฝ้าย 100%', vn: '100% cotton', es: '100% algodón',
    pt: '100% algodão', id_lang: '100% katun', ru: '100% хлопок', fr: '100% coton', ar: 'قطن 100%', ja: ''
  },
  '全棉牛仔面料': {
    cn: '全棉牛仔面料', en: '100% cotton denim fabric', th: 'ผ้าเดนิมคอตตอน 100%', vn: 'Vải denim 100% cotton', es: 'Tejido vaquero 100% algodón',
    pt: 'Tecido denim 100% algodão', id_lang: 'Kain denim 100% katun', ru: '100% хлопковая джинсовая ткань', fr: 'tissu denim 100% coton', ar: 'قماش الدنيم المصنوع من القطن بنسبة 100%', ja: ''
  },
  '全棉盐缩印花面料': {
    cn: '全棉盐缩印花面料', en: '100% Cotton Salt Shrink Printed Fabric', th: 'ผ้าฝ้ายพิมพ์ลาย 100% หดตัวเมื่อถูกเกลือ', vn: 'Vải in co rút muối 100% cotton', es: 'Tejido estampado 100% algodón con efecto encogimiento por sal',
    pt: 'Tecido estampado 100% algodão com encolhimento por sal', id_lang: 'Kain Katun 100% dengan Motif Penyusutan Garam', ru: 'Ткань из 100% хлопка с принтом, нанесенным методом солевой термоусадки.', fr: 'Tissu imprimé rétrécissant au sel 100% coton', ar: 'قماش قطني 100% مطبوع بتقنية الانكماش الملحي', ja: ''
  },
  '全棉间条': {
    cn: '全棉间条', en: '100% cotton stripes', th: 'ลายทางผ้าฝ้าย 100%', vn: 'Sọc 100% cotton', es: 'Rayas 100% algodón',
    pt: 'listras 100% algodão', id_lang: 'Garis-garis 100% katun', ru: '100% хлопковые полоски', fr: 'rayures 100% coton', ar: 'مخططات قطنية 100%', ja: ''
  },
  '全棉面料': {
    cn: '全棉面料', en: '100% cotton fabric', th: 'ผ้าฝ้าย 100%', vn: 'Vải cotton 100%', es: 'Tejido 100% algodón',
    pt: 'Tecido 100% algodão', id_lang: 'Kain katun 100%', ru: 'Ткань из 100% хлопка', fr: 'tissu 100% coton', ar: 'قماش قطني 100%', ja: ''
  },
  '全毛': {
    cn: '全毛', en: 'All hair', th: 'ผมทั้งหมด', vn: 'Tất cả tóc', es: 'Todo el cabello',
    pt: 'Todo o cabelo', id_lang: 'Semua rambut', ru: 'Все волосы', fr: 'Tous les cheveux', ar: 'جميع أنواع الشعر', ja: ''
  },
  '全涤': {
    cn: '全涤', en: 'Full polyester', th: 'โพลีเอสเตอร์ล้วน', vn: 'Hoàn toàn bằng polyester', es: 'Poliéster completo',
    pt: 'Poliéster 100%', id_lang: 'Poliester penuh', ru: 'Полностью полиэстер', fr: '100% polyester', ar: 'بوليستر كامل', ja: ''
  },
  '全涤衬衫面料': {
    cn: '全涤衬衫面料', en: '100% polyester shirt fabric', th: 'ผ้าสำหรับทำเสื้อเชิ้ตโพลีเอสเตอร์ 100%', vn: 'Vải áo sơ mi 100% polyester', es: 'Tela de camisa 100% poliéster',
    pt: 'Tecido da camisa 100% poliéster', id_lang: 'Kain kemeja 100% poliester', ru: 'Ткань для рубашки: 100% полиэстер', fr: 'Tissu de chemise 100% polyester', ar: 'قماش قميص مصنوع من البوليستر بنسبة 100%', ja: ''
  },
  '全涤面料': {
    cn: '全涤面料', en: '100% polyester fabric', th: 'ผ้าโพลีเอสเตอร์ 100%', vn: 'Vải polyester 100%', es: 'Tejido 100% poliéster',
    pt: 'Tecido 100% poliéster', id_lang: 'Kain 100% poliester', ru: 'Ткань из 100% полиэстера.', fr: 'tissu 100% polyester', ar: 'نسيج بوليستر 100%', ja: ''
  },
  '全羊毛': {
    cn: '全羊毛', en: '100% wool', th: 'ขนแกะ 100%', vn: '100% len', es: '100% lana',
    pt: '100% lã', id_lang: '100% wol', ru: '100% шерсть', fr: '100% laine', ar: 'صوف 100%', ja: ''
  },
  '全锦': {
    cn: '全锦', en: 'All Brocade', th: 'ผ้าไหมทอลายทั้งหมด', vn: 'Tất cả gấm', es: 'Todo brocado',
    pt: 'Todo brocado', id_lang: 'Semua Brokat', ru: 'Вся парча', fr: 'Tout en brocart', ar: 'جميع أنواع البروكار', ja: ''
  },
  '六明治': {
    cn: '六明治', en: 'six meiji', th: 'หกเมจิ', vn: 'sáu meiji', es: 'seis meiji',
    pt: 'seis meiji', id_lang: 'enam Meiji', ru: 'шесть Мэйдзи', fr: 'six meiji', ar: 'ستة ميجي', ja: ''
  },
  '六明治面料': {
    cn: '六明治面料', en: 'Rokumeiji fabric', th: 'ผ้าโรคุเมจิ', vn: 'Vải Rokumeiji', es: 'Tela Rokumeiji',
    pt: 'Tecido Rokumeiji', id_lang: 'Kain Rokumeiji', ru: 'Ткань Рокумейдзи', fr: 'Tissu Rokumeiji', ar: 'قماش روكوميجي', ja: ''
  },
  '六维弹力': {
    cn: '六维弹力', en: 'Six-dimensional elasticity', th: 'ความยืดหยุ่นหกมิติ', vn: 'Độ đàn hồi sáu chiều', es: 'elasticidad de seis dimensiones',
    pt: 'Elasticidade em seis dimensões', id_lang: 'Elastisitas enam dimensi', ru: 'Шестимерная упругость', fr: 'Élasticité à six dimensions', ar: 'المرونة سداسية الأبعاد', ja: ''
  },
  '六维弹力桑蚕丝': {
    cn: '六维弹力桑蚕丝', en: 'Six-dimensional elastic mulberry silk', th: 'ผ้าไหมมัลเบอร์รี่ยืดหยุ่นหกมิติ', vn: 'Tơ tằm dâu tằm đàn hồi sáu chiều', es: 'Seda de morera elástica de seis dimensiones',
    pt: 'Seda de amoreira elástica em seis dimensões', id_lang: 'Sutra murbei elastis enam dimensi', ru: 'Шестимерный эластичный тутовый шелк', fr: 'Soie de mûrier élastique à six dimensions', ar: 'حرير التوت المرن سداسي الأبعاد', ja: ''
  },
  '六维弹力面料': {
    cn: '六维弹力面料', en: 'Six-dimensional elastic fabric', th: 'ผ้ายืดหยุ่นหกมิติ', vn: 'vải đàn hồi sáu chiều', es: 'Tejido elástico de seis dimensiones',
    pt: 'tecido elástico de seis dimensões', id_lang: 'Kain elastis enam dimensi', ru: 'Шестимерная эластичная ткань', fr: 'Tissu élastique à six dimensions', ar: 'نسيج مطاطي سداسي الأبعاد', ja: ''
  },
  '六维超弹力': {
    cn: '六维超弹力', en: 'Six-dimensional super elasticity', th: 'ความยืดหยุ่นสูงพิเศษแบบหกมิติ', vn: 'Siêu đàn hồi sáu chiều', es: 'Súper elasticidad de seis dimensiones',
    pt: 'Superelasticidade em seis dimensões', id_lang: 'Elastisitas super enam dimensi', ru: 'Шестимерная сверхэластичность', fr: 'Super élasticité à six dimensions', ar: 'مرونة فائقة سداسية الأبعاد', ja: ''
  },
  '其他小部位填充物': {
    cn: '其他小部位填充物', en: 'Other small parts filler', th: 'วัสดุอุดชิ้นส่วนขนาดเล็กอื่นๆ', vn: 'Các chi tiết nhỏ khác', es: 'Otros rellenos de piezas pequeñas',
    pt: 'Outras peças pequenas de enchimento', id_lang: 'Pengisi bagian kecil lainnya', ru: 'Другие мелкие детали, наполнитель', fr: 'Autres petites pièces de remplissage', ar: 'مواد حشو أخرى صغيرة', ja: ''
  },
  '其他特种动物毛': {
    cn: '其他特种动物毛', en: 'Other special animal hair', th: 'ขนสัตว์ชนิดพิเศษอื่นๆ', vn: 'Lông động vật đặc biệt khác', es: 'Otro pelo de animal especial',
    pt: 'Outros pelos especiais de animais', id_lang: 'Rambut hewan khusus lainnya', ru: 'Другие особые виды шерсти животных', fr: 'Autres poils d&#39;animaux particuliers', ar: 'أنواع أخرى من شعر الحيوانات الخاص', ja: ''
  },
  '其他纤维': {
    cn: '其他纤维', en: 'Other fibers', th: 'เส้นใยอื่นๆ', vn: 'Các loại sợi khác', es: 'Otras fibras',
    pt: 'Outras fibras', id_lang: 'Serat lainnya', ru: 'Другие волокна', fr: 'Autres fibres', ar: 'ألياف أخرى', ja: ''
  },
  '内': {
    cn: '内', en: 'Inside', th: 'ข้างใน', vn: 'Bên trong', es: 'Adentro',
    pt: 'Dentro', id_lang: 'Di dalam', ru: 'Внутри', fr: 'À l&#39;intérieur', ar: 'داخل', ja: ''
  },
  '内件': {
    cn: '内件', en: 'Internal components', th: 'ส่วนประกอบภายใน', vn: 'Các thành phần bên trong', es: 'Componentes internos',
    pt: 'Componentes internos', id_lang: 'Komponen internal', ru: 'Внутренние компоненты', fr: 'Composants internes', ar: 'المكونات الداخلية', ja: ''
  },
  '内件上半身': {
    cn: '内件上半身', en: 'Upper body of the inner parts', th: 'ส่วนบนของร่างกายส่วนใน', vn: 'Phần thân trên của các bộ phận bên trong', es: 'Parte superior del cuerpo de las partes internas',
    pt: 'Parte superior do corpo das partes internas', id_lang: 'Bagian tubuh atas dari bagian dalam', ru: 'Верхняя часть корпуса внутренних частей', fr: 'Partie supérieure du corps des parties internes', ar: 'الجزء العلوي من الأجزاء الداخلية', ja: ''
  },
  '内件上半身里料': {
    cn: '内件上半身里料', en: 'Inner upper body lining', th: 'ซับในส่วนบนของร่างกาย', vn: 'lớp lót bên trong phần thân trên', es: 'Revestimiento interior de la parte superior del cuerpo',
    pt: 'Forro interno da parte superior do corpo', id_lang: 'Lapisan bagian dalam tubuh bagian atas', ru: 'Внутренняя подкладка верхней части тела', fr: 'doublure intérieure supérieure du corps', ar: 'البطانة الداخلية للجزء العلوي من الجسم', ja: ''
  },
  '内件上半身面料': {
    cn: '内件上半身面料', en: 'Inner upper body fabric', th: 'ผ้าชั้นในส่วนบนของร่างกาย', vn: 'vải bên trong phần thân trên', es: 'Tejido interior de la parte superior del cuerpo',
    pt: 'Tecido da parte superior interna do corpo', id_lang: 'Kain bagian dalam tubuh bagian atas', ru: 'Внутренняя ткань верхней части тела', fr: 'Tissu intérieur du haut du corps', ar: 'قماش الجزء العلوي الداخلي من الجسم', ja: ''
  },
  '内件上拼面料': {
    cn: '内件上拼面料', en: 'Fabric patchwork inside', th: 'งานปะติดปะต่อผ้าด้านใน', vn: 'Bên trong là các mảnh vải chắp vá.', es: 'Retazos de tela en el interior',
    pt: 'Retalhos de tecido no interior', id_lang: 'Kain perca di bagian dalam', ru: 'Внутри — лоскутное одеяло из ткани.', fr: 'patchwork de tissu à l&#39;intérieur', ar: 'رقعة قماشية داخلية', ja: ''
  },
  '内件上身': {
    cn: '内件上身', en: 'Innerwear', th: 'ชุดชั้นใน', vn: 'Đồ lót', es: 'Ropa interior',
    pt: 'Roupa íntima', id_lang: 'Pakaian dalam', ru: 'Нижнее белье', fr: 'Sous-vêtements', ar: 'ملابس داخلية', ja: ''
  },
  '内件上身里': {
    cn: '内件上身里', en: 'Innerwear', th: 'ชุดชั้นใน', vn: 'Đồ lót', es: 'Ropa interior',
    pt: 'Roupa íntima', id_lang: 'Pakaian dalam', ru: 'Нижнее белье', fr: 'Sous-vêtements', ar: 'ملابس داخلية', ja: ''
  },
  '内件上身里布': {
    cn: '内件上身里布', en: 'Innerwear lining', th: 'ซับในชุดชั้นใน', vn: 'Lớp lót bên trong', es: 'Forro de ropa interior',
    pt: 'Forro de roupa íntima', id_lang: 'Lapisan pakaian dalam', ru: 'Подкладка нижнего белья', fr: 'doublure intérieure', ar: 'بطانة الملابس الداخلية', ja: ''
  },
  '内件上身面料': {
    cn: '内件上身面料', en: 'Innerwear fabric', th: 'ผ้าสำหรับชุดชั้นใน', vn: 'Vải lót', es: 'Tela para ropa interior',
    pt: 'Tecido para roupa íntima', id_lang: 'Kain pakaian dalam', ru: 'Ткань для нижнего белья', fr: 'Tissu pour sous-vêtements', ar: 'قماش الملابس الداخلية', ja: ''
  },
  '内件下半裙面料': {
    cn: '内件下半裙面料', en: 'Inner skirt fabric', th: 'ผ้าซับในกระโปรง', vn: 'Vải váy bên trong', es: 'Tela de la falda interior',
    pt: 'Tecido da saia interna', id_lang: 'Kain rok bagian dalam', ru: 'Внутренняя ткань юбки', fr: 'Tissu de la jupe intérieure', ar: 'قماش التنورة الداخلية', ja: ''
  },
  '内件下半身里料': {
    cn: '内件下半身里料', en: 'Inner fabric of the lower body', th: 'เนื้อผ้าชั้นในของส่วนล่างของร่างกาย', vn: 'Lớp vải bên trong của phần thân dưới', es: 'Tejido interno de la parte inferior del cuerpo',
    pt: 'Tecido interno da parte inferior do corpo', id_lang: 'Kain bagian dalam tubuh bagian bawah', ru: 'Внутренняя ткань нижней части тела', fr: 'Tissu intérieur du bas du corps', ar: 'النسيج الداخلي للجزء السفلي من الجسم', ja: ''
  },
  '内件下摆里层': {
    cn: '内件下摆里层', en: 'Inner hem layer', th: 'ชั้นในสุดของชายผ้า', vn: 'Lớp viền bên trong', es: 'Capa del dobladillo interior',
    pt: 'Camada da bainha interna', id_lang: 'Lapisan kelim bagian dalam', ru: 'Внутренний слой подола', fr: 'couche intérieure de l&#39;ourlet', ar: 'طبقة الحافة الداخلية', ja: ''
  },
  '内件下裙': {
    cn: '内件下裙', en: 'Inner skirt', th: 'กระโปรงชั้นใน', vn: 'Váy trong', es: 'Falda interior',
    pt: 'Saia interna', id_lang: 'Rok dalam', ru: 'Внутренняя юбка', fr: 'jupe intérieure', ar: 'التنورة الداخلية', ja: ''
  },
  '内件下裙第三层': {
    cn: '内件下裙第三层', en: 'The third layer of the inner skirt', th: 'ชั้นที่สามของกระโปรงชั้นใน', vn: 'Lớp thứ ba của váy trong', es: 'La tercera capa de la falda interior',
    pt: 'A terceira camada da saia interna', id_lang: 'Lapisan ketiga dari rok bagian dalam', ru: 'Третий слой внутренней юбки', fr: 'La troisième couche de la jupe intérieure', ar: 'الطبقة الثالثة من التنورة الداخلية', ja: ''
  },
  '内件内胆填充物': {
    cn: '内件内胆填充物', en: 'Inner liner filling', th: 'ไส้ใน', vn: 'Lớp lót bên trong', es: 'Relleno del revestimiento interior',
    pt: 'Enchimento do revestimento interno', id_lang: 'Pengisian lapisan dalam', ru: 'Наполнитель внутренней подкладки', fr: 'Remplissage de la doublure intérieure', ar: 'حشوة البطانة الداخلية', ja: ''
  },
  '内件后上里': {
    cn: '内件后上里', en: 'Inner parts back upper lining', th: 'ส่วนด้านใน ด้านหลัง ซับในส่วนบน', vn: 'Lớp lót bên trong, mặt trong, lớp lót trên', es: 'Forro superior de la parte interior de la espalda',
    pt: 'Forro superior traseiro das partes internas', id_lang: 'Lapisan bagian dalam belakang atas', ru: 'Внутренние части, задняя верхняя подкладка', fr: 'Doublure supérieure arrière des parties intérieures', ar: 'البطانة الداخلية للجزء الخلفي العلوي', ja: ''
  },
  '内件填充物': {
    cn: '内件填充物', en: 'Internal filling material', th: 'วัสดุบรรจุภายใน', vn: 'Vật liệu trám bên trong', es: 'material de relleno interno',
    pt: 'Material de enchimento interno', id_lang: 'Bahan pengisi internal', ru: 'Внутренний наполнитель', fr: 'matériau de remplissage interne', ar: 'مادة الحشو الداخلية', ja: ''
  },
  '内件填充物一': {
    cn: '内件填充物一', en: 'Internal filling material 1', th: 'วัสดุบรรจุภายใน 1', vn: 'Vật liệu trám bên trong 1', es: 'Material de relleno interno 1',
    pt: 'Material de enchimento interno 1', id_lang: 'Bahan pengisi internal 1', ru: 'Внутренний пломбировочный материал 1', fr: 'Matériau de remplissage interne 1', ar: 'مادة الحشو الداخلية 1', ja: ''
  },
  '内件填充物二': {
    cn: '内件填充物二', en: 'Internal filler 2', th: 'สารเติมเต็มภายใน 2', vn: 'Chất độn bên trong 2', es: 'Relleno interno 2',
    pt: 'Preenchimento interno 2', id_lang: 'Pengisi internal 2', ru: 'Внутренний наполнитель 2', fr: 'Remplissage interne 2', ar: 'الحشو الداخلي 2', ja: ''
  },
  '内件外层下摆': {
    cn: '内件外层下摆', en: 'Inner outer layer hem', th: 'ชายเสื้อชั้นในและชั้นนอก', vn: 'viền lớp trong lớp ngoài', es: 'dobladillo de la capa exterior interior',
    pt: 'bainha da camada interna e externa', id_lang: 'Kelim lapisan dalam dan luar', ru: 'Внутренний и внешний слой подола', fr: 'ourlet de la couche intérieure extérieure', ar: 'حافة الطبقة الداخلية والخارجية', ja: ''
  },
  '内件大身': {
    cn: '内件大身', en: 'Internal components', th: 'ส่วนประกอบภายใน', vn: 'Các thành phần bên trong', es: 'Componentes internos',
    pt: 'Componentes internos', id_lang: 'Komponen internal', ru: 'Внутренние компоненты', fr: 'Composants internes', ar: 'المكونات الداخلية', ja: ''
  },
  '内件大身里': {
    cn: '内件大身里', en: 'Inside the main body', th: 'ภายในตัวเครื่องหลัก', vn: 'Bên trong thân chính', es: 'Dentro del cuerpo principal',
    pt: 'Dentro do corpo principal', id_lang: 'Di dalam badan utama', ru: 'Внутри основного корпуса', fr: 'À l&#39;intérieur du corps principal', ar: 'داخل الجسم الرئيسي', ja: ''
  },
  '内件大身面料': {
    cn: '内件大身面料', en: 'Inner body fabric', th: 'ผ้าชั้นใน', vn: 'Vải thân trong', es: 'Tejido interior del cuerpo',
    pt: 'tecido interno do corpo', id_lang: 'Kain bagian dalam tubuh', ru: 'Внутренняя ткань корпуса', fr: 'Tissu intérieur', ar: 'نسيج الجسم الداخلي', ja: ''
  },
  '内件拼料': {
    cn: '内件拼料', en: 'Internal component assembly', th: 'การประกอบชิ้นส่วนภายใน', vn: 'Lắp ráp linh kiện bên trong', es: 'Ensamblaje de componentes internos',
    pt: 'Montagem de componentes internos', id_lang: 'Perakitan komponen internal', ru: 'Сборка внутренних компонентов', fr: 'assemblage des composants internes', ar: 'تجميع المكونات الداخلية', ja: ''
  },
  '内件挂面': {
    cn: '内件挂面', en: 'Inner noodle', th: 'เส้นบะหมี่ใน', vn: 'Mì bên trong', es: 'Fideos internos',
    pt: 'Macarrão interno', id_lang: 'Mie bagian dalam', ru: 'Внутренняя лапша', fr: 'Nouilles intérieures', ar: 'المعكرونة الداخلية', ja: ''
  },
  '内件网纱': {
    cn: '内件网纱', en: 'Inner mesh', th: 'ตาข่ายด้านใน', vn: 'Lưới bên trong', es: 'Malla interior',
    pt: 'malha interna', id_lang: 'Jaring bagian dalam', ru: 'Внутренняя сетка', fr: 'maille intérieure', ar: 'الشبكة الداخلية', ja: ''
  },
  '内件袖里': {
    cn: '内件袖里', en: 'Inner sleeve', th: 'ปลอกด้านใน', vn: 'Tay áo bên trong', es: 'Funda interior',
    pt: 'Manga interna', id_lang: 'Selongsong bagian dalam', ru: 'Внутренний рукав', fr: 'Manchon intérieur', ar: 'الغلاف الداخلي', ja: ''
  },
  '内件裙上拼': {
    cn: '内件裙上拼', en: 'Inner dress patchwork', th: 'ชุดเดรสด้านในแบบปะติดปะต่อ', vn: 'Áo trong chắp vá', es: 'Vestido interior de retazos',
    pt: 'Remendos no vestido interno', id_lang: 'Gaun bagian dalam dengan motif tambal sulam.', ru: 'Внутренняя часть платья, лоскутное одеяло', fr: 'Empiècements de la robe intérieure', ar: 'فستان داخلي مرقع', ja: ''
  },
  '内件裙下拼里': {
    cn: '内件裙下拼里', en: 'Underneath the skirt patchwork', th: 'ใต้กระโปรงเป็นผ้าปะติดปะต่อกัน', vn: 'Bên dưới lớp vải chắp vá của chiếc váy', es: 'Debajo de la falda de retazos',
    pt: 'Por baixo da saia de retalhos', id_lang: 'Di bawah rok terdapat tambal sulam.', ru: 'Под юбкой — лоскутное одеяло.', fr: 'Sous le patchwork de la jupe', ar: 'تحت رقعة التنورة', ja: ''
  },
  '内件裙中层': {
    cn: '内件裙中层', en: 'Inner skirt middle layer', th: 'กระโปรงชั้นในชั้นกลาง', vn: 'lớp giữa của váy trong', es: 'Capa intermedia de la falda interior',
    pt: 'camada intermediária da saia interna', id_lang: 'Lapisan tengah rok bagian dalam', ru: 'Внутренний средний слой юбки', fr: 'couche intermédiaire de la jupe intérieure', ar: 'الطبقة الوسطى للتنورة الداخلية', ja: ''
  },
  '内件裙里': {
    cn: '内件裙里', en: 'Inner skirt', th: 'กระโปรงชั้นใน', vn: 'Váy trong', es: 'Falda interior',
    pt: 'Saia interna', id_lang: 'Rok dalam', ru: 'Внутренняя юбка', fr: 'jupe intérieure', ar: 'التنورة الداخلية', ja: ''
  },
  '内件裙里布': {
    cn: '内件裙里布', en: 'Inner skirt lining', th: 'ซับในกระโปรง', vn: 'lớp lót váy bên trong', es: 'Forro interior de la falda',
    pt: 'Forro da saia interna', id_lang: 'Lapisan dalam rok', ru: 'Внутренняя подкладка юбки', fr: 'doublure intérieure de la jupe', ar: 'بطانة التنورة الداخلية', ja: ''
  },
  '内件配料': {
    cn: '内件配料', en: 'Ingredients', th: 'วัตถุดิบ', vn: 'Thành phần', es: 'Ingredientes',
    pt: 'Ingredientes', id_lang: 'Bahan-bahan', ru: 'Ингредиенты', fr: 'Ingrédients', ar: 'مكونات', ja: ''
  },
  '内件里料': {
    cn: '内件里料', en: 'Interior lining', th: 'ซับใน', vn: 'Lớp lót bên trong', es: 'Revestimiento interior',
    pt: 'Forro interior', id_lang: 'Lapisan dalam', ru: 'Внутренняя обшивка', fr: 'doublure intérieure', ar: 'البطانة الداخلية', ja: ''
  },
  '内件针织面料': {
    cn: '内件针织面料', en: 'Inner knit fabric', th: 'ผ้าถักด้านใน', vn: 'Vải dệt kim bên trong', es: 'Tejido interior de punto',
    pt: 'Tecido de malha interna', id_lang: 'Kain rajutan bagian dalam', ru: 'Внутренняя трикотажная ткань', fr: 'Tissu tricoté intérieur', ar: 'نسيج داخلي محبوك', ja: ''
  },
  '内件门襟': {
    cn: '内件门襟', en: 'Inner placket', th: 'สาบเสื้อด้านใน', vn: 'Nẹp áo trong', es: 'tapeta interior',
    pt: 'Carcela interna', id_lang: 'Plaket bagian dalam', ru: 'Внутренняя планка', fr: 'patte de boutonnage intérieure', ar: 'فتحة داخلية', ja: ''
  },
  '内件面料': {
    cn: '内件面料', en: 'Inner fabric', th: 'ผ้าชั้นใน', vn: 'Vải bên trong', es: 'Tejido interior',
    pt: 'Tecido interno', id_lang: 'Kain bagian dalam', ru: 'Внутренняя ткань', fr: 'Tissu intérieur', ar: 'القماش الداخلي', ja: ''
  },
  '内外件里料': {
    cn: '内外件里料', en: 'Inner and outer parts lining', th: 'ซับในชิ้นส่วนด้านในและด้านนอก', vn: 'Lớp lót bên trong và bên ngoài', es: 'Revestimiento de las partes internas y externas',
    pt: 'Revestimento das partes internas e externas', id_lang: 'Pelapis bagian dalam dan luar', ru: 'Внутренняя и внешняя облицовка', fr: 'doublure des parties intérieure et extérieure', ar: 'بطانة الأجزاء الداخلية والخارجية', ja: ''
  },
  '内外件面料': {
    cn: '内外件面料', en: 'Inner and outer fabrics', th: 'ผ้าชั้นในและชั้นนอก', vn: 'Vải bên trong và bên ngoài', es: 'Tejidos interiores y exteriores',
    pt: 'Tecidos internos e externos', id_lang: 'Kain bagian dalam dan luar', ru: 'Внутренняя и внешняя ткани', fr: 'Tissus intérieurs et extérieurs', ar: 'الأقمشة الداخلية والخارجية', ja: ''
  },
  '内层': {
    cn: '内层', en: 'Inner layer', th: 'ชั้นใน', vn: 'Lớp bên trong', es: 'capa interna',
    pt: 'Camada interna', id_lang: 'Lapisan dalam', ru: 'Внутренний слой', fr: 'couche interne', ar: 'الطبقة الداخلية', ja: ''
  },
  '内格': {
    cn: '内格', en: 'neg', th: 'เชิงลบ', vn: 'âm', es: 'negativo',
    pt: 'neg', id_lang: 'negatif', ru: 'отрицание', fr: 'négatif', ar: 'سلبي', ja: ''
  },
  '内胆填充物': {
    cn: '内胆填充物', en: 'Inner liner filling', th: 'ไส้ใน', vn: 'Lớp lót bên trong', es: 'Relleno del revestimiento interior',
    pt: 'Enchimento do revestimento interno', id_lang: 'Pengisian lapisan dalam', ru: 'Наполнитель внутренней подкладки', fr: 'Remplissage de la doublure intérieure', ar: 'حشوة البطانة الداخلية', ja: ''
  },
  '内胆里料': {
    cn: '内胆里料', en: 'Inner liner', th: 'ซับใน', vn: 'Lớp lót bên trong', es: 'Revestimiento interior',
    pt: 'Forro interno', id_lang: 'Lapisan dalam', ru: 'Внутренняя подкладка', fr: 'doublure intérieure', ar: 'البطانة الداخلية', ja: ''
  },
  '内胆面料': {
    cn: '内胆面料', en: 'Liner fabric', th: 'ผ้าซับใน', vn: 'Vải lót', es: 'Tela de forro',
    pt: 'Tecido de forro', id_lang: 'Kain pelapis', ru: 'Подкладочная ткань', fr: 'Tissu de doublure', ar: 'قماش البطانة', ja: ''
  },
  '内腰': {
    cn: '内腰', en: 'inner waist', th: 'รอบเอว', vn: 'eo trong', es: 'cintura interior',
    pt: 'cintura interna', id_lang: 'pinggang bagian dalam', ru: 'внутренняя талия', fr: 'taille intérieure', ar: 'الخصر الداخلي', ja: ''
  },
  '内袖口': {
    cn: '内袖口', en: 'inner cuffs', th: 'ข้อมือด้านใน', vn: 'cổ tay áo bên trong', es: 'puños interiores',
    pt: 'punhos internos', id_lang: 'manset bagian dalam', ru: 'внутренние манжеты', fr: 'poignets intérieurs', ar: 'الأساور الداخلية', ja: ''
  },
  '内门襟': {
    cn: '内门襟', en: 'Inner placket', th: 'สาบเสื้อด้านใน', vn: 'Nẹp áo trong', es: 'tapeta interior',
    pt: 'Carcela interna', id_lang: 'Plaket bagian dalam', ru: 'Внутренняя планка', fr: 'patte de boutonnage intérieure', ar: 'فتحة داخلية', ja: ''
  },
  '内领面料': {
    cn: '内领面料', en: 'Inner collar fabric', th: 'ผ้าด้านในปกเสื้อ', vn: 'Vải cổ áo bên trong', es: 'Tejido del cuello interior',
    pt: 'Tecido da gola interna', id_lang: 'Kain kerah bagian dalam', ru: 'Внутренняя ткань воротника', fr: 'Tissu intérieur du col', ar: 'قماش الياقة الداخلية', ja: ''
  },
  '再生棉': {
    cn: '再生棉', en: 'Recycled Cotton', th: 'ผ้าฝ้ายรีไซเคิล', vn: 'Cotton tái chế', es: 'Algodón reciclado',
    pt: 'Algodão reciclado', id_lang: 'Katun daur ulang', ru: 'Переработанный хлопок', fr: 'Coton recyclé', ar: 'قطن معاد تدويره', ja: ''
  },
  '再生涤纶': {
    cn: '再生涤纶', en: 'Recycled polyester', th: 'โพลีเอสเตอร์รีไซเคิล', vn: 'Polyester tái chế', es: 'poliéster reciclado',
    pt: 'Poliéster reciclado', id_lang: 'Poliester daur ulang', ru: 'Переработанный полиэстер', fr: 'polyester recyclé', ar: 'بوليستر معاد تدويره', ja: ''
  },
  '再生素纤维': {
    cn: '再生素纤维', en: 'Regenerated fiber', th: 'เส้นใยที่สร้างใหม่', vn: 'Sợi tái tạo', es: 'Fibra regenerada',
    pt: 'Fibra regenerada', id_lang: 'Serat yang diregenerasi', ru: 'Регенерированное волокно', fr: 'Fibre régénérée', ar: 'ألياف مُجددة', ja: ''
  },
  '再生纤维素纤维': {
    cn: '再生纤维素纤维', en: 'Regenerated cellulose fiber', th: 'เส้นใยเซลลูโลสที่สร้างใหม่', vn: 'Sợi xenluloza tái tạo', es: 'Fibra de celulosa regenerada',
    pt: 'Fibra de celulose regenerada', id_lang: 'Serat selulosa yang diregenerasi', ru: 'Регенерированное целлюлозное волокно', fr: 'Fibre de cellulose régénérée', ar: 'ألياف السليلوز المُجددة', ja: ''
  },
  '再生纤维素纤维（莱赛尔+粘纤）': {
    cn: '再生纤维素纤维（莱赛尔+粘纤）', en: 'Recycled Cellulosic Fibres (Lyocell + Viscose)', th: 'เส้นใยเซลลูโลสที่สร้างใหม่ (ไลโอเซลล์ + วิสคอส)', vn: 'Sợi Cellulose Tái Sinh (Lyocell + Viscose)', es: 'Fibras Celulósicas Recicladas (Lyocell + Viscosa)',
    pt: 'Fibras Celulósicas Recicladas (Liocel + Viscose)', id_lang: 'Serat Selulosa Regenerasi (Lyocell + Viscose)', ru: 'Переработанные Целлюлозные Волокна (Лиоцелл + Вискоза)', fr: 'Fibres Cellulosiques Recyclées (Lyocell + Viscose)', ar: 'ألياف السليلوز المتجددة (الليوسيل + الفسكوز)', ja: '再生セルロース繊維（リヨセル＋レーヨン）'
  },
  '军绿': {
    cn: '军绿', en: 'military green', th: 'สีเขียวทหาร', vn: 'màu xanh quân đội', es: 'verde militar',
    pt: 'verde militar', id_lang: 'hijau militer', ru: 'военный зеленый', fr: 'vert militaire', ar: 'أخضر عسكري', ja: ''
  },
  '军绿条纹': {
    cn: '军绿条纹', en: 'Army Green Stripes', th: 'ลายทางสีเขียวทหาร', vn: 'Sọc xanh quân đội', es: 'Rayas verde militar',
    pt: 'Listras Verde-Exército', id_lang: 'Garis-garis Hijau Tentara', ru: 'Армейские зеленые полосы', fr: 'Rayures vert armée', ar: 'خطوط خضراء عسكرية', ja: ''
  },
  '军绿渐变': {
    cn: '军绿渐变', en: 'Military Green Gradient', th: 'สีเขียวทหารไล่ระดับ', vn: 'Gradient màu xanh quân đội', es: 'Degradado verde militar',
    pt: 'Gradiente Verde Militar', id_lang: 'Gradien Hijau Militer', ru: 'Военный зеленый градиент', fr: 'Dégradé vert militaire', ar: 'تدرج اللون الأخضر العسكري', ja: ''
  },
  '军绿色面料': {
    cn: '军绿色面料', en: 'military green fabric', th: 'ผ้าสีเขียวทหาร', vn: 'vải màu xanh quân đội', es: 'tela verde militar',
    pt: 'tecido verde militar', id_lang: 'kain hijau militer', ru: 'ткань цвета военного зеленого', fr: 'tissu vert militaire', ar: 'قماش أخضر عسكري', ja: ''
  },
  '军绿花纹': {
    cn: '军绿花纹', en: 'Army Green Pattern', th: 'ลายสีเขียวทหาร', vn: 'Họa tiết màu xanh quân đội', es: 'Patrón verde militar',
    pt: 'Padrão Verde Militar', id_lang: 'Pola Hijau Tentara', ru: 'Армейский зеленый узор', fr: 'Motif vert armée', ar: 'بنمط أخضر عسكري', ja: ''
  },
  '军绿镶拼': {
    cn: '军绿镶拼', en: 'Military green patchwork', th: 'ลายปะติดปะต่อสีเขียวทหาร', vn: 'chắp vá màu xanh quân đội', es: 'mosaico verde militar',
    pt: 'patchwork verde militar', id_lang: 'Tambal sulam hijau militer', ru: 'Военный зеленый лоскутный узор', fr: 'patchwork vert militaire', ar: 'مرقعة باللون الأخضر العسكري', ja: ''
  },
  '军绿面料': {
    cn: '军绿面料', en: 'military green fabric', th: 'ผ้าสีเขียวทหาร', vn: 'vải màu xanh quân đội', es: 'tela verde militar',
    pt: 'tecido verde militar', id_lang: 'kain hijau militer', ru: 'ткань цвета военного зеленого', fr: 'tissu vert militaire', ar: 'قماش أخضر عسكري', ja: ''
  },
  '冬季': {
    cn: '冬季', en: 'Winter', th: 'ฤดูหนาว', vn: 'Mùa đông', es: 'de invierno',
    pt: 'Inverno', id_lang: 'Musim Dingin', ru: 'Зимний', fr: 'Hiver', ar: 'شتوي', ja: ''
  },
  '冬季30度机洗': {
    cn: '冬季30度机洗', en: 'Winter Machine Wash at 30°C', th: 'ฤดูหนาว ซักเครื่อง 30°C', vn: 'Mùa đông Giặt máy 30°C', es: 'Invierno Lavado a máquina a 30°C',
    pt: 'Inverno Lavagem à máquina a 30°C', id_lang: 'Musim Dingin Cuci Mesin 30°C', ru: 'Зимняя Машинная стирка при 30°C', fr: 'Hiver Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة شتوي', ja: ''
  },
  '冬季40度机洗': {
    cn: '冬季40度机洗', en: 'Winter Machine Wash at 40°C', th: 'ฤดูหนาว ซักเครื่อง 40°C', vn: 'Mùa đông Giặt máy 40°C', es: 'Invierno Lavado a máquina a 40°C',
    pt: 'Inverno Lavagem à máquina a 40°C', id_lang: 'Musim Dingin Cuci Mesin 40°C', ru: 'Зимняя Машинная стирка при 40°C', fr: 'Hiver Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة شتوي', ja: ''
  },
  '冬季不可干洗': {
    cn: '冬季不可干洗', en: 'Winter Do Not Dry Clean', th: 'ฤดูหนาว ห้ามซักแห้ง', vn: 'Mùa đông Không giặt khô', es: 'Invierno No lavar en seco',
    pt: 'Inverno Não lavar a seco', id_lang: 'Musim Dingin Jangan Dry Clean', ru: 'Зимняя Не подвергать химчистке', fr: 'Hiver Ne pas nettoyer à sec', ar: 'لا تنظف جافاً شتوي', ja: ''
  },
  '冬季不可漂白': {
    cn: '冬季不可漂白', en: 'Winter Do Not Bleach', th: 'ฤดูหนาว ห้ามฟอกขาว', vn: 'Mùa đông Không tẩy trắng', es: 'Invierno No blanquear',
    pt: 'Inverno Não usar alvejante', id_lang: 'Musim Dingin Jangan Diputihkan', ru: 'Зимняя Не отбеливать', fr: 'Hiver Ne pas blanchir', ar: 'لا تبيض شتوي', ja: ''
  },
  '冬季不可烘干': {
    cn: '冬季不可烘干', en: 'Winter Do Not Tumble Dry', th: 'ฤดูหนาว ห้ามอบแห้ง', vn: 'Mùa đông Không sấy khô', es: 'Invierno No secar en secadora',
    pt: 'Inverno Não secar em secadora', id_lang: 'Musim Dingin Jangan Dikeringkan', ru: 'Зимняя Не сушить в машине', fr: 'Hiver Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف شتوي', ja: ''
  },
  '冬季亚麻': {
    cn: '冬季亚麻', en: 'Winter Linen', th: 'ฤดูหนาว ผ้าลินิน', vn: 'Mùa đông Vải lanh', es: 'Invierno Lino',
    pt: 'Inverno Linho', id_lang: 'Musim Dingin Linen', ru: 'Зимняя Лен', fr: 'Hiver Lin', ar: 'كتان شتوي', ja: ''
  },
  '冬季低温熨烫': {
    cn: '冬季低温熨烫', en: 'Winter Low Temperature Ironing', th: 'ฤดูหนาว รีดอุณหภูมิต่ำ', vn: 'Mùa đông Ủi nhiệt độ thấp', es: 'Invierno Planchar a baja temperatura',
    pt: 'Inverno Passar a baixa temperatura', id_lang: 'Musim Dingin Setrika Suhu Rendah', ru: 'Зимняя Глажка при низкой температуре', fr: 'Hiver Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة شتوي', ja: ''
  },
  '冬季再生涤纶': {
    cn: '冬季再生涤纶', en: 'Winter Recycled Polyester', th: 'ฤดูหนาว โพลีเอสเตอร์รีไซเคิล', vn: 'Mùa đông Polyester tái chế', es: 'Invierno Poliéster reciclado',
    pt: 'Inverno Poliéster reciclado', id_lang: 'Musim Dingin Poliester Daur Ulang', ru: 'Зимняя Переработанный полиэстер', fr: 'Hiver Polyester recyclé', ar: 'بوليستر معاد التدوير شتوي', ja: ''
  },
  '冬季冷水洗': {
    cn: '冬季冷水洗', en: 'Winter Cold Water Wash', th: 'ฤดูหนาว ซักน้ำเย็น', vn: 'Mùa đông Giặt nước lạnh', es: 'Invierno Lavado en agua fría',
    pt: 'Inverno Lavagem em água fria', id_lang: 'Musim Dingin Cuci Air Dingin', ru: 'Зимняя Стирка в холодной воде', fr: 'Hiver Lavage à l\'eau froide', ar: 'غسيل بالماء البارد شتوي', ja: ''
  },
  '冬季天丝': {
    cn: '冬季天丝', en: 'Winter Tencel', th: 'ฤดูหนาว เทนเซล', vn: 'Mùa đông Tencel', es: 'Invierno Tencel',
    pt: 'Inverno Tencel', id_lang: 'Musim Dingin Tencel', ru: 'Зимняя Тенсел', fr: 'Hiver Tencel', ar: 'تنسل شتوي', ja: ''
  },
  '冬季尼龙': {
    cn: '冬季尼龙', en: 'Winter Nylon', th: 'ฤดูหนาว ไนลอน', vn: 'Mùa đông Nylon', es: 'Invierno Nailon',
    pt: 'Inverno Nylon', id_lang: 'Musim Dingin Nilon', ru: 'Зимняя Нейлон', fr: 'Hiver Nylon', ar: 'نايلون شتوي', ja: ''
  },
  '冬季平铺晾干': {
    cn: '冬季平铺晾干', en: 'Winter Lay Flat to Dry', th: 'ฤดูหนาว ตากแห้งแบบแบน', vn: 'Mùa đông Phơi phẳng', es: 'Invierno Secar en plano',
    pt: 'Inverno Secar na horizontal', id_lang: 'Musim Dingin Keringkan Datar', ru: 'Зимняя Сушить в расправленном виде', fr: 'Hiver Sécher à plat', ar: 'تجفيف مسطح شتوي', ja: ''
  },
  '冬季悬挂晾干': {
    cn: '冬季悬挂晾干', en: 'Winter Hang Dry', th: 'ฤดูหนาว แขวนตากแห้ง', vn: 'Mùa đông Phơi treo', es: 'Invierno Secar colgado',
    pt: 'Inverno Secar pendurado', id_lang: 'Musim Dingin Gantung Kering', ru: 'Зимняя Сушить в подвешенном состоянии', fr: 'Hiver Sécher suspendu', ar: 'تجفيف بالتعليق شتوي', ja: ''
  },
  '冬季手洗': {
    cn: '冬季手洗', en: 'Winter Hand Wash', th: 'ฤดูหนาว ซักมือ', vn: 'Mùa đông Giặt tay', es: 'Invierno Lavado a mano',
    pt: 'Inverno Lavagem à mão', id_lang: 'Musim Dingin Cuci Tangan', ru: 'Зимняя Ручная стирка', fr: 'Hiver Lavage à la main', ar: 'غسيل يدوي شتوي', ja: ''
  },
  '冬季有机棉': {
    cn: '冬季有机棉', en: 'Winter Organic Cotton', th: 'ฤดูหนาว ผ้าฝ้ายออร์แกนิก', vn: 'Mùa đông Cotton hữu cơ', es: 'Invierno Algodón orgánico',
    pt: 'Inverno Algodão orgânico', id_lang: 'Musim Dingin Katun Organik', ru: 'Зимняя Органический хлопок', fr: 'Hiver Coton biologique', ar: 'قطن عضوي شتوي', ja: ''
  },
  '冬季机洗': {
    cn: '冬季机洗', en: 'Winter Machine Wash', th: 'ฤดูหนาว ซักเครื่อง', vn: 'Mùa đông Giặt máy', es: 'Invierno Lavado a máquina',
    pt: 'Inverno Lavagem à máquina', id_lang: 'Musim Dingin Cuci Mesin', ru: 'Зимняя Машинная стирка', fr: 'Hiver Lavage en machine', ar: 'غسيل آلي شتوي', ja: ''
  },
  '冬季棉': {
    cn: '冬季棉', en: 'Winter Cotton', th: 'ฤดูหนาว ผ้าฝ้าย', vn: 'Mùa đông Cotton', es: 'Invierno Algodón',
    pt: 'Inverno Algodão', id_lang: 'Musim Dingin Katun', ru: 'Зимняя Хлопок', fr: 'Hiver Coton', ar: 'قطن شتوي', ja: ''
  },
  '冬季氨纶': {
    cn: '冬季氨纶', en: 'Winter Spandex', th: 'ฤดูหนาว สแปนเด็กซ์', vn: 'Mùa đông Spandex', es: 'Invierno Elastano',
    pt: 'Inverno Elastano', id_lang: 'Musim Dingin Spandex', ru: 'Зимняя Спандекс', fr: 'Hiver Élasthanne', ar: 'سباندكس شتوي', ja: ''
  },
  '冬季涤纶': {
    cn: '冬季涤纶', en: 'Winter Polyester', th: 'ฤดูหนาว โพลีเอสเตอร์', vn: 'Mùa đông Polyester', es: 'Invierno Poliéster',
    pt: 'Inverno Poliéster', id_lang: 'Musim Dingin Poliester', ru: 'Зимняя Полиэстер', fr: 'Hiver Polyester', ar: 'بوليستر شتوي', ja: ''
  },
  '冬季温水洗': {
    cn: '冬季温水洗', en: 'Winter Warm Water Wash', th: 'ฤดูหนาว ซักน้ำอุ่น', vn: 'Mùa đông Giặt nước ấm', es: 'Invierno Lavado en agua tibia',
    pt: 'Inverno Lavagem em água morna', id_lang: 'Musim Dingin Cuci Air Hangat', ru: 'Зимняя Стирка в теплой воде', fr: 'Hiver Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ شتوي', ja: ''
  },
  '冬季真丝': {
    cn: '冬季真丝', en: 'Winter Pure Silk', th: 'ฤดูหนาว ผ้าไหมแท้', vn: 'Mùa đông Lụa thật', es: 'Invierno Seda pura',
    pt: 'Inverno Seda pura', id_lang: 'Musim Dingin Sutra Asli', ru: 'Зимняя Натуральный шелк', fr: 'Hiver Soie naturelle', ar: 'حرير طبيعي شتوي', ja: ''
  },
  '冬季竹纤维': {
    cn: '冬季竹纤维', en: 'Winter Bamboo Fiber', th: 'ฤดูหนาว เส้นใยไผ่', vn: 'Mùa đông Sợi tre', es: 'Invierno Fibra de bambú',
    pt: 'Inverno Fibra de bambu', id_lang: 'Musim Dingin Serat Bambu', ru: 'Зимняя Бамбуковое волокно', fr: 'Hiver Fibre de bambou', ar: 'ألياف الخيزران شتوي', ja: ''
  },
  '冬季粘纤': {
    cn: '冬季粘纤', en: 'Winter Viscose', th: 'ฤดูหนาว วิสโคส', vn: 'Mùa đông Viscose', es: 'Invierno Viscosa',
    pt: 'Inverno Viscose', id_lang: 'Musim Dingin Viskosa', ru: 'Зимняя Вискоза', fr: 'Hiver Viscose', ar: 'فيسكوز شتوي', ja: ''
  },
  '冬季精梳棉': {
    cn: '冬季精梳棉', en: 'Winter Combed Cotton', th: 'ฤดูหนาว ผ้าฝ้ายหวี', vn: 'Mùa đông Cotton chải', es: 'Invierno Algodón peinado',
    pt: 'Inverno Algodão penteado', id_lang: 'Musim Dingin Katun Sisir', ru: 'Зимняя Гребенной хлопок', fr: 'Hiver Coton peigné', ar: 'قطن ممشط شتوي', ja: ''
  },
  '冬季羊毛': {
    cn: '冬季羊毛', en: 'Winter Wool', th: 'ฤดูหนาว ขนแกะ', vn: 'Mùa đông Len', es: 'Invierno Lana',
    pt: 'Inverno Lã', id_lang: 'Musim Dingin Wol', ru: 'Зимняя Шерсть', fr: 'Hiver Laine', ar: 'صوف شتوي', ja: ''
  },
  '冬季羊绒': {
    cn: '冬季羊绒', en: 'Winter Cashmere', th: 'ฤดูหนาว แคชเมียร์', vn: 'Mùa đông Cashmere', es: 'Invierno Cachemira',
    pt: 'Inverno Caxemira', id_lang: 'Musim Dingin Kasmir', ru: 'Зимняя Кашемир', fr: 'Hiver Cachemire', ar: 'كشمير شتوي', ja: ''
  },
  '冬季腈纶': {
    cn: '冬季腈纶', en: 'Winter Acrylic', th: 'ฤดูหนาว อะคริลิก', vn: 'Mùa đông Acrylic', es: 'Invierno Acrílico',
    pt: 'Inverno Acrílico', id_lang: 'Musim Dingin Akrilik', ru: 'Зимняя Акрил', fr: 'Hiver Acrylique', ar: 'أكريليك شتوي', ja: ''
  },
  '冬季莫代尔': {
    cn: '冬季莫代尔', en: 'Winter Modal', th: 'ฤดูหนาว โมดอล', vn: 'Mùa đông Modal', es: 'Invierno Modal',
    pt: 'Inverno Modal', id_lang: 'Musim Dingin Modal', ru: 'Зимняя Модал', fr: 'Hiver Modal', ar: 'مودال شتوي', ja: ''
  },
  '冬季莱赛尔': {
    cn: '冬季莱赛尔', en: 'Winter Lyocell', th: 'ฤดูหนาว ไลโอเซลล์', vn: 'Mùa đông Lyocell', es: 'Invierno Lyocell',
    pt: 'Inverno Lyocell', id_lang: 'Musim Dingin Lyocell', ru: 'Зимняя Лиоцелл', fr: 'Hiver Lyocell', ar: 'ليوسيل شتوي', ja: ''
  },
  '冬季锦纶': {
    cn: '冬季锦纶', en: 'Winter Nylon', th: 'ฤดูหนาว ไนลอน', vn: 'Mùa đông Nylon', es: 'Invierno Nailon',
    pt: 'Inverno Nylon', id_lang: 'Musim Dingin Nilon', ru: 'Зимняя Нейлон', fr: 'Hiver Nylon', ar: 'نايلون شتوي', ja: ''
  },
  '冬季马海毛': {
    cn: '冬季马海毛', en: 'Winter Mohair', th: 'ฤดูหนาว โมแฮร์', vn: 'Mùa đông Mohair', es: 'Invierno Mohair',
    pt: 'Inverno Mohair', id_lang: 'Musim Dingin Mohair', ru: 'Зимняя Мохер', fr: 'Hiver Mohair', ar: 'موهير شتوي', ja: ''
  },
  '冰凉丝': {
    cn: '冰凉丝', en: 'Cool silk', th: 'ผ้าไหมเย็นสบาย', vn: 'Lụa mát', es: 'Seda fresca',
    pt: 'Seda fresca', id_lang: 'Sutra yang sejuk', ru: 'Прохладный шелк', fr: 'Soie fraîche', ar: 'حرير بارد', ja: ''
  },
  '冰感丝珠地布': {
    cn: '冰感丝珠地布', en: 'Ice-feel silk beaded fabric', th: 'ผ้าไหมปักลูกปัดสัมผัสเย็นสบาย', vn: 'Vải lụa đính hạt, cảm giác như băng', es: 'Tejido de seda con cuentas y tacto helado',
    pt: 'Tecido de seda com toque de gelo e aplicações de miçangas', id_lang: 'Kain manik-manik sutra yang terasa seperti es', ru: 'Шелковая ткань с бисерной отделкой, напоминающая лед', fr: 'tissu de soie perlé à l&#39;effet glacé', ar: 'قماش حريري مطرز بملمس جليدي', ja: ''
  },
  '冰爽棉': {
    cn: '冰爽棉', en: 'Cool cotton', th: 'ผ้าฝ้ายเย็นสบาย', vn: 'Bông thoáng mát', es: 'Algodón fresco',
    pt: 'Algodão fresco', id_lang: 'Katun dingin', ru: 'Прохладный хлопок', fr: 'Coton frais', ar: 'قطن بارد', ja: ''
  },
  '冰爽麻': {
    cn: '冰爽麻', en: 'Icy numb', th: 'เย็นชา', vn: 'Tê buốt', es: 'Entumecimiento helado',
    pt: 'Entorpecimento gélido', id_lang: 'Dingin dan mati rasa', ru: 'Ледяное онемение', fr: 'Engourdi par la glace', ar: 'خدر بارد', ja: ''
  },
  '冷水机洗': {
    cn: '冷水机洗', en: 'Machine wash cold', th: 'ซักเครื่องด้วยน้ำเย็น', vn: 'Giặt máy nước lạnh', es: 'Lavar a máquina en frío',
    pt: 'Lavar à máquina a frio', id_lang: 'Cuci mesin air dingin', ru: 'Машинная стирка в холодной воде', fr: 'Lavage en machine à froid', ar: 'غسيل آلي بماء بارد', ja: ''
  },
  '冷水洗': {
    cn: '冷水洗', en: 'Cold Wash', th: 'ซักน้ำเย็น', vn: 'Giặt nước lạnh', es: 'Lavar en frío',
    pt: 'Lavar a frio', id_lang: 'Cuci dingin', ru: 'Холодная стирка', fr: 'Lavage à froid', ar: 'غسيل بارد', ja: ''
  },
  '净干': {
    cn: '净干', en: 'Clean', th: 'ทำความสะอาด', vn: 'Lau dọn', es: 'Limpio',
    pt: 'Limpar', id_lang: 'Membersihkan', ru: 'Чистый', fr: 'Faire le ménage', ar: 'ينظف', ja: ''
  },
  '净干含量': {
    cn: '净干含量', en: 'Net dry content', th: 'ปริมาณแห้งสุทธิ', vn: 'Khối lượng khô tịnh', es: 'Contenido seco neto',
    pt: 'Conteúdo seco líquido', id_lang: 'Isi kering bersih', ru: 'Содержание нетто-сухого вещества', fr: 'Contenu sec net', ar: 'صافي المحتوى الجاف', ja: ''
  },
  '净色': {
    cn: '净色', en: 'Solid color', th: 'สีพื้นเรียบ', vn: 'Màu trơn', es: 'Color sólido',
    pt: 'Cor sólida', id_lang: 'Warna polos', ru: 'Однотонный цвет', fr: 'Couleur unie', ar: 'لون موحد', ja: ''
  },
  '净色仿棉': {
    cn: '净色仿棉', en: 'Solid color imitation cotton', th: 'ผ้าฝ้ายเทียมสีพื้น', vn: 'Vải giả cotton màu trơn', es: 'Imitación de algodón de color liso',
    pt: 'algodão sintético de cor sólida', id_lang: 'Katun imitasi warna polos', ru: 'Однотонный искусственный хлопок', fr: 'imitation coton de couleur unie', ar: 'قطن صناعي بلون موحد', ja: ''
  },
  '净色面料': {
    cn: '净色面料', en: 'Solid color fabric', th: 'ผ้าสีพื้นเรียบ', vn: 'Vải màu trơn', es: 'Tela de color liso',
    pt: 'Tecido de cor sólida', id_lang: 'Kain warna polos', ru: 'Однотонная ткань', fr: 'Tissu de couleur unie', ar: 'قماش بلون موحد', ja: ''
  },
  '凉感双面': {
    cn: '凉感双面', en: 'Cooling double-sided', th: 'ระบบระบายความร้อนแบบสองด้าน', vn: 'Làm mát hai mặt', es: 'Refrigeración por ambos lados',
    pt: 'Resfriamento de dupla face', id_lang: 'Pendinginan dua sisi', ru: 'Двустороннее охлаждение', fr: 'Refroidissement double face', ar: 'تبريد مزدوج الجوانب', ja: ''
  },
  '凉感索罗娜': {
    cn: '凉感索罗娜', en: 'Cooling Sorona', th: 'โซโรน่าระบายความร้อน', vn: 'Làm mát Sorona', es: 'Sorona refrescante',
    pt: 'Resfriamento Sorona', id_lang: 'Pendingin Solona', ru: 'Охлаждение Солоны', fr: 'Refroidissement Sorona', ar: 'سولونا الباردة', ja: ''
  },
  '凝脂白': {
    cn: '凝脂白', en: 'Creamy White', th: 'สีขาวครีม', vn: 'Màu trắng kem', es: 'Blanco cremoso',
    pt: 'Branco cremoso', id_lang: 'Putih Krem', ru: 'Кремово-белый', fr: 'Blanc crémeux', ar: 'أبيض كريمي', ja: ''
  },
  '分开洗涤': {
    cn: '分开洗涤', en: 'Wash separately', th: 'ซักแยก', vn: 'Giặt riêng', es: 'Lavar por separado',
    pt: 'Lavar separadamente', id_lang: 'Cuci terpisah', ru: 'Стирать отдельно', fr: 'Laver séparément', ar: 'يُغسل بشكل منفصل', ja: ''
  },
  '制造商': {
    cn: '制造商', en: 'Manufacturer', th: 'ผู้ผลิต', vn: 'Nhà sản xuất', es: 'Fabricante',
    pt: 'Fabricante', id_lang: 'Produsen', ru: 'Производитель', fr: 'Fabricant', ar: 'الشركة المصنعة', ja: ''
  },
  '前上': {
    cn: '前上', en: 'Forward', th: 'ซึ่งไปข้างหน้า', vn: 'Phía trước', es: 'Adelante',
    pt: 'Avançar', id_lang: 'Maju', ru: 'Вперед', fr: 'Avant', ar: 'إلى الأمام', ja: ''
  },
  '前上外层': {
    cn: '前上外层', en: 'Front upper outer layer', th: 'ชั้นนอกสุดด้านหน้า', vn: 'Lớp ngoài phía trên mặt trước', es: 'Capa exterior superior frontal',
    pt: 'Camada externa superior frontal', id_lang: 'lapisan luar atas depan', ru: 'Передний верхний внешний слой', fr: 'couche extérieure supérieure avant', ar: 'الطبقة الخارجية العلوية الأمامية', ja: ''
  },
  '前上片': {
    cn: '前上片', en: 'Front upper part', th: 'ส่วนบนด้านหน้า', vn: 'Phần trên phía trước', es: 'Parte superior frontal',
    pt: 'Parte superior frontal', id_lang: 'Bagian depan atas', ru: 'Передняя верхняя часть', fr: 'partie supérieure avant', ar: 'الجزء الأمامي العلوي', ja: ''
  },
  '前上里': {
    cn: '前上里', en: 'Qian Shang Li', th: 'เฉียน ชาง ลี', vn: 'Tiền Thượng Lý', es: 'Qian Shang Li',
    pt: 'Qian Shang-Li', id_lang: 'Qian Shang Li', ru: 'Цянь Шан Ли', fr: 'Qian Shang Li', ar: 'تشيان شانغ لي', ja: ''
  },
  '前中': {
    cn: '前中', en: 'Front and Middle', th: 'ด้านหน้าและตรงกลาง', vn: 'Phía trước và giữa', es: 'Delantero y centro',
    pt: 'Frente e Meio', id_lang: 'Depan dan Tengah', ru: 'Передняя и средняя', fr: 'Avant et milieu', ar: 'الأمام والوسط', ja: ''
  },
  '前后上拼': {
    cn: '前后上拼', en: 'Front and back top', th: 'ด้านหน้าและด้านหลังบน', vn: 'Mặt trước và mặt sau phía trên', es: 'Parte superior delantera y trasera',
    pt: 'Frente e verso superior', id_lang: 'Bagian depan dan belakang atas', ru: 'Передняя и задняя верхняя часть', fr: 'dessus avant et arrière', ar: 'الجزء العلوي الأمامي والخلفي', ja: ''
  },
  '前后上拼里': {
    cn: '前后上拼里', en: 'Front and back of the pinyin', th: 'ด้านหน้าและด้านหลังของพินอิน', vn: 'Mặt trước và mặt sau của phiên âm pinyin', es: 'Anverso y reverso del pinyin',
    pt: 'Frente e verso do pinyin', id_lang: 'Bagian depan dan belakang pinyin', ru: 'Лицевая и обратная стороны пиньиня', fr: 'Recto et verso du pinyin', ar: 'وجه وظهر البينيين', ja: ''
  },
  '前后上拼面': {
    cn: '前后上拼面', en: 'Front and rear upper panels', th: 'แผงด้านบนด้านหน้าและด้านหลัง', vn: 'Tấm trên phía trước và phía sau', es: 'Paneles superiores delanteros y traseros',
    pt: 'Painéis superiores dianteiros e traseiros', id_lang: 'Panel atas depan dan belakang', ru: 'Верхние передняя и задняя панели', fr: 'panneaux supérieurs avant et arrière', ar: 'الألواح العلوية الأمامية والخلفية', ja: ''
  },
  '前后中拼面料': {
    cn: '前后中拼面料', en: 'Front and back center patchwork fabric', th: 'ผ้าปะติดปะต่อตรงกลางด้านหน้าและด้านหลัง', vn: 'Vải chắp vá ở giữa mặt trước và mặt sau', es: 'Tela de retazos en el centro delantero y trasero',
    pt: 'Tecido patchwork central na frente e nas costas', id_lang: 'Kain tambal sulam bagian tengah depan dan belakang', ru: 'Передняя и задняя центральные части, лоскутная ткань', fr: 'tissu patchwork central avant et arrière', ar: 'قماش مرقع في المنتصف الأمامي والخلفي', ja: ''
  },
  '前后侧拼': {
    cn: '前后侧拼', en: 'Front and rear side splicing', th: 'การต่อเชื่อมด้านหน้าและด้านหลัง', vn: 'Nối mặt trước và mặt sau', es: 'Empalme lateral delantero y trasero',
    pt: 'emendas laterais dianteiras e traseiras', id_lang: 'Penyambungan sisi depan dan belakang', ru: 'Передняя и задняя боковая склейка', fr: 'Raccordement latéral avant et arrière', ar: 'وصلات جانبية أمامية وخلفية', ja: ''
  },
  '前后片活页': {
    cn: '前后片活页', en: 'Front and back loose-leaf sheets', th: 'แผ่นกระดาษแยกหน้าและหลัง', vn: 'Tờ rời mặt trước và mặt sau', es: 'Hojas sueltas delanteras y traseras',
    pt: 'Folhas soltas na frente e no verso', id_lang: 'Lembaran lepas depan dan belakang', ru: 'Передняя и задняя стороны отдельных листов', fr: 'Feuilles mobiles recto et verso', ar: 'أوراق منفصلة أمامية وخلفية', ja: ''
  },
  '前后肩': {
    cn: '前后肩', en: 'front and back shoulders', th: 'ไหล่ด้านหน้าและด้านหลัง', vn: 'vai trước và vai sau', es: 'hombros delanteros y traseros',
    pt: 'ombros da frente e de trás', id_lang: 'bahu depan dan belakang', ru: 'передние и задние плечи', fr: 'épaules avant et arrière', ar: 'الكتفين الأمامي والخلفي', ja: ''
  },
  '前后育克': {
    cn: '前后育克', en: 'Forehead and back yolk', th: 'หน้าผากและไข่แดงหลัง', vn: 'Trán và lòng đỏ trứng', es: 'Yema de la frente y de la espalda',
    pt: 'gema da testa e das costas', id_lang: 'Dahi dan kuning telur belakang', ru: 'Желток на лбу и спине', fr: 'Jaune d&#39;œuf du front et du dos', ar: 'صفار البيض من الأمام والخلف', ja: ''
  },
  '前后裙片': {
    cn: '前后裙片', en: 'Front and back skirt panels', th: 'แผงกระโปรงด้านหน้าและด้านหลัง', vn: 'Tấm váy trước và sau', es: 'Paneles de falda delanteros y traseros',
    pt: 'Painéis da saia frontal e traseira', id_lang: 'Panel rok depan dan belakang', ru: 'Передние и задние панели юбки', fr: 'panneaux de jupe avant et arrière', ar: 'ألواح التنورة الأمامية والخلفية', ja: ''
  },
  '前片': {
    cn: '前片', en: 'Front', th: 'ด้านหน้า', vn: 'Đằng trước', es: 'Frente',
    pt: 'Frente', id_lang: 'Depan', ru: 'Передний', fr: 'Devant', ar: 'أمام', ja: ''
  },
  '前片上': {
    cn: '前片上', en: 'Front of film', th: 'ด้านหน้าของฟิล์ม', vn: 'Mặt trước của phim', es: 'Parte frontal de la película',
    pt: 'Frente do filme', id_lang: 'Bagian depan film', ru: 'Лицевая сторона пленки', fr: 'Avant du film', ar: 'مقدمة الفيلم', ja: ''
  },
  '前片上拼面': {
    cn: '前片上拼面', en: 'Front panel', th: 'แผงด้านหน้า', vn: 'Mặt trước', es: 'Panel frontal',
    pt: 'Painel frontal', id_lang: 'Panel depan', ru: 'Передняя панель', fr: 'Panneau avant', ar: 'اللوحة الأمامية', ja: ''
  },
  '前片中拼': {
    cn: '前片中拼', en: 'In the first part of the film', th: 'ในส่วนแรกของภาพยนตร์', vn: 'Trong phần đầu của bộ phim', es: 'En la primera parte de la película',
    pt: 'Na primeira parte do filme', id_lang: 'Di bagian pertama film', ru: 'В первой части фильма', fr: 'Dans la première partie du film', ar: 'في الجزء الأول من الفيلم', ja: ''
  },
  '前片侧拼': {
    cn: '前片侧拼', en: 'Front side splicing', th: 'การต่อด้านหน้า', vn: 'Nối mặt trước', es: 'Empalme del lado frontal',
    pt: 'emenda frontal', id_lang: 'Penyambungan sisi depan', ru: 'Сращивание с лицевой стороны', fr: 'épissure avant', ar: 'وصلة الجانب الأمامي', ja: ''
  },
  '前片外层': {
    cn: '前片外层', en: 'Front outer layer', th: 'ชั้นนอกสุดด้านหน้า', vn: 'Lớp ngoài phía trước', es: 'Capa exterior frontal',
    pt: 'Camada externa frontal', id_lang: 'Lapisan luar depan', ru: 'Передний внешний слой', fr: 'couche extérieure avant', ar: 'الطبقة الخارجية الأمامية', ja: ''
  },
  '前片木耳边': {
    cn: '前片木耳边', en: 'Front piece of wood ear edge', th: 'ขอบหูไม้ด้านหน้า', vn: 'Mảnh gỗ phía trước của mép tai', es: 'Pieza frontal de madera del borde de la oreja',
    pt: 'peça frontal de madeira da borda da orelha', id_lang: 'Bagian depan tepi telinga kayu', ru: 'Передняя часть деревянной кромки уха', fr: 'Pièce avant en bois bord d&#39;oreille', ar: 'حافة الأذن الخشبية الأمامية', ja: ''
  },
  '前片面料': {
    cn: '前片面料', en: 'Front fabric', th: 'ผ้าด้านหน้า', vn: 'Mặt trước vải', es: 'Tela frontal',
    pt: 'Tecido frontal', id_lang: 'Kain bagian depan', ru: 'Передняя ткань', fr: 'Tissu avant', ar: 'القماش الأمامي', ja: ''
  },
  '前育克': {
    cn: '前育克', en: 'Pre-Yok', th: 'พรีโยค', vn: 'Tiền-Yok', es: 'Pre-Yok',
    pt: 'Pré-Yok', id_lang: 'Pra-Yok', ru: 'Пре Йок', fr: 'Pré-Yok', ar: 'ما قبل اليو', ja: ''
  },
  '前里': {
    cn: '前里', en: 'Qianli', th: 'เฉียนลี่', vn: 'Càn Lí', es: 'Qianli',
    pt: 'Qianli', id_lang: 'Qianli', ru: 'Цяньли', fr: 'Qianli', ar: 'تشيانلي', ja: ''
  },
  '前领内层面料': {
    cn: '前领内层面料', en: 'Front collar inner fabric', th: 'ผ้าด้านในปกหน้า', vn: 'lớp vải lót bên trong cổ áo phía trước', es: 'Tejido interior del cuello delantero',
    pt: 'tecido interno da gola frontal', id_lang: 'Kain bagian dalam kerah depan', ru: 'Внутренняя ткань переднего воротника', fr: 'tissu intérieur du col avant', ar: 'قماش داخلي للياقة الأمامية', ja: ''
  },
  '前领口': {
    cn: '前领口', en: 'front neckline', th: 'คอเสื้อด้านหน้า', vn: 'đường viền cổ phía trước', es: 'escote delantero',
    pt: 'decote frontal', id_lang: 'garis leher depan', ru: 'передний вырез горловины', fr: 'encolure avant', ar: 'فتحة الرقبة الأمامية', ja: ''
  },
  '加加大号(2XL)': {
    cn: '加加大号(2XL)', en: '2XL / XXL', th: 'ไซส์ 2XL', vn: 'Cỡ 2XL', es: 'Talla 2XL',
    pt: 'Tamanho 2XL (XG)', id_lang: 'Ukuran 2XL', ru: 'Размер 2XL', fr: 'Taille 2XL', ar: 'مقاس 2XL', ja: ''
  },
  '加加小号(XXS)': {
    cn: '加加小号(XXS)', en: 'XXS', th: 'ไซส์ XXS', vn: 'Cỡ XXS', es: 'Talla XXS',
    pt: 'Tamanho XXS (PP)', id_lang: 'Ukuran XXS', ru: 'Размер XXS', fr: 'Taille XXS', ar: 'مقاس XXS', ja: ''
  },
  '加大': {
    cn: '加大', en: 'XL', th: 'XL', vn: 'XL', es: 'XL',
    pt: 'XL', id_lang: 'XL', ru: 'XL', fr: 'XL', ar: 'XL', ja: ''
  },
  '加大号(XL)': {
    cn: '加大号(XL)', en: 'Extra Large (XL)', th: 'ไซส์ XL', vn: 'Cỡ XL', es: 'Talla XL',
    pt: 'Tamanho XL (GG)', id_lang: 'Ukuran XL', ru: 'Размер XL', fr: 'Taille XL', ar: 'مقاس XL', ja: ''
  },
  '加小号(XS)': {
    cn: '加小号(XS)', en: 'XS', th: 'ไซส์ XS', vn: 'Cỡ XS', es: 'Talla XS',
    pt: 'Tamanho XS (PP)', id_lang: 'Ukuran XS', ru: 'Размер XS', fr: 'Taille XS', ar: 'مقاس XS', ja: ''
  },
  '加弹部位除外': {
    cn: '加弹部位除外', en: 'Except for the bullet-loaded parts', th: 'ยกเว้นส่วนที่บรรจุกระสุน', vn: 'Ngoại trừ các bộ phận chứa đạn.', es: 'Excepto por las partes cargadas con balas',
    pt: 'Exceto pelas partes carregadas com balas', id_lang: 'Kecuali bagian-bagian yang berisi peluru', ru: 'За исключением частей, заряженных пулями.', fr: 'À l&#39;exception des parties chargées de balles', ar: 'باستثناء الأجزاء المحشوة بالرصاص', ja: ''
  },
  '加弹部分除外': {
    cn: '加弹部分除外', en: 'Except for the added parts', th: 'ยกเว้นส่วนที่เพิ่มเข้ามา', vn: 'Ngoại trừ các bộ phận được thêm vào', es: 'Excepto por las partes añadidas',
    pt: 'Exceto pelas peças adicionadas', id_lang: 'Kecuali untuk bagian tambahan', ru: 'За исключением добавленных деталей.', fr: 'À l&#39;exception des pièces ajoutées', ar: 'باستثناء الأجزاء المضافة', ja: ''
  },
  '加长版': {
    cn: '加长版', en: 'Tall', th: 'ไซส์คนตัวสูง', vn: 'Cỡ Tall', es: 'Talla Alta',
    pt: 'Tamanho Tall', id_lang: 'Ukuran Tall', ru: 'Tall', fr: 'Taille Tall', ar: 'مقاس طويل', ja: ''
  },
  '动感珠地': {
    cn: '动感珠地', en: 'Dynamic Pearl', th: 'ไดนามิกเพิร์ล', vn: 'Ngọc trai năng động', es: 'Perla dinámica',
    pt: 'Pérola Dinâmica', id_lang: 'Mutiara Dinamis', ru: 'Динамический Жемчужный', fr: 'Perle dynamique', ar: 'لؤلؤة ديناميكية', ja: ''
  },
  '勿熨烫印花': {
    cn: '勿熨烫印花', en: 'Do not iron on print', th: 'ห้ามรีดทับลายพิมพ์', vn: 'Không ủi lên hình in', es: 'No planchar sobre el estampado',
    pt: 'Não passar sobre a estampa', id_lang: 'Jangan setrika bagian cetakan', ru: 'Не гладить по принту', fr: 'Ne pas repasser sur l\'imprimé', ar: 'لا تكوي على الطباعة', ja: ''
  },
  '勿熨烫印花或装饰': {
    cn: '勿熨烫印花或装饰', en: 'Do not iron on print or decoration', th: 'ห้ามรีดทับลายพิมพ์หรือส่วนตกแต่ง', vn: 'Không ủi lên hình in hoặc chi tiết trang trí', es: 'No planchar sobre estampados o adornos',
    pt: 'Não passar sobre estampa ou decoração', id_lang: 'Jangan setrika pada cetakan atau dekorasi', ru: 'Не гладить по принту и украшениям', fr: 'Ne pas repasser sur l\'imprimé ou les décorations', ar: 'لا تكوي على الطباعة أو الزخارف', ja: ''
  },
  '包条成分不计': {
    cn: '包条成分不计', en: 'The ingredients of the wrapper are not counted.', th: 'ส่วนประกอบของบรรจุภัณฑ์จะไม่ถูกนับรวม', vn: 'Các thành phần của lớp vỏ bánh không được tính vào.', es: 'Los ingredientes del envoltorio no se tienen en cuenta.',
    pt: 'Os ingredientes da embalagem não são contabilizados.', id_lang: 'Bahan-bahan pembungkusnya tidak dihitung.', ru: 'Состав обертки не учитывается.', fr: 'Les ingrédients de l&#39;emballage ne sont pas comptabilisés.', ar: 'لا يتم احتساب مكونات الغلاف.', ja: ''
  },
  '包边': {
    cn: '包边', en: 'Edge binding', th: 'การเย็บขอบ', vn: 'Viền mép', es: 'Encuadernación de borde',
    pt: 'Encadernação de borda', id_lang: 'Pengikatan tepi', ru: 'Переплет по краю', fr: 'Reliure à bords', ar: 'حافة', ja: ''
  },
  '化纤': {
    cn: '化纤', en: 'synthetic fibers', th: 'เส้นใยสังเคราะห์', vn: 'sợi tổng hợp', es: 'fibras sintéticas',
    pt: 'fibras sintéticas', id_lang: 'serat sintetis', ru: 'синтетические волокна', fr: 'fibres synthétiques', ar: 'الألياف الاصطناعية', ja: ''
  },
  '化纤九分半': {
    cn: '化纤九分半', en: 'Nine and a half parts synthetic fiber', th: 'เส้นใยสังเคราะห์เก้าส่วนครึ่ง', vn: 'Chín phần rưỡi sợi tổng hợp', es: 'Nueve partes y media de fibra sintética',
    pt: 'Nove partes e meia de fibra sintética', id_lang: 'Sembilan setengah bagian serat sintetis', ru: 'Девять с половиной частей синтетического волокна', fr: 'Neuf parts et demie de fibres synthétiques', ar: 'تسعة أجزاء ونصف من الألياف الاصطناعية', ja: ''
  },
  '化纤印花面料': {
    cn: '化纤印花面料', en: 'Chemical fiber printed fabrics', th: 'ผ้าพิมพ์ลายเส้นใยเคมี', vn: 'vải in sợi hóa học', es: 'tejidos estampados con fibras químicas',
    pt: 'tecidos estampados com fibras químicas', id_lang: 'Kain cetak serat kimia', ru: 'Ткани с химической печатью', fr: 'tissus imprimés en fibres chimiques', ar: 'أقمشة مطبوعة بألياف كيميائية', ja: ''
  },
  '化纤复合面料': {
    cn: '化纤复合面料', en: 'Chemical fiber composite fabric', th: 'ผ้าคอมโพสิตเส้นใยเคมี', vn: 'vải composite sợi hóa học', es: 'Tejido compuesto de fibra química',
    pt: 'tecido composto de fibra química', id_lang: 'Kain komposit serat kimia', ru: 'Ткань из композитных химических волокон', fr: 'tissu composite à fibres chimiques', ar: 'نسيج مركب من الألياف الكيميائية', ja: ''
  },
  '化纤微皱': {
    cn: '化纤微皱', en: 'Micro-wrinkle of synthetic fibers', th: 'รอยย่นเล็กๆ ของเส้นใยสังเคราะห์', vn: 'Nếp nhăn siêu nhỏ của sợi tổng hợp', es: 'Microarrugas de fibras sintéticas',
    pt: 'Micro-rugas em fibras sintéticas', id_lang: 'Kerutan mikro pada serat sintetis', ru: 'Микроморщины синтетических волокон', fr: 'Micro-rides des fibres synthétiques', ar: 'تجاعيد دقيقة من الألياف الاصطناعية', ja: ''
  },
  '化纤格纹': {
    cn: '化纤格纹', en: 'Synthetic fiber plaid', th: 'ลายสก็อตใยสังเคราะห์', vn: 'Vải kẻ sọc sợi tổng hợp', es: 'Cuadros de fibra sintética',
    pt: 'Xadrez de fibra sintética', id_lang: 'Serat sintetis kotak-kotak', ru: 'клетчатая ткань из синтетического волокна', fr: 'carreaux en fibres synthétiques', ar: 'قماش كاروهات من الألياف الصناعية', ja: ''
  },
  '化纤混纺': {
    cn: '化纤混纺', en: 'Chemical fiber blends', th: 'ส่วนผสมของเส้นใยเคมี', vn: 'Hỗn hợp sợi hóa học', es: 'mezclas de fibras químicas',
    pt: 'Misturas de fibras químicas', id_lang: 'Campuran serat kimia', ru: 'Смеси химических волокон', fr: 'mélanges de fibres chimiques', ar: 'مزيج الألياف الكيميائية', ja: ''
  },
  '化纤针织': {
    cn: '化纤针织', en: 'Synthetic fiber knitting', th: 'การถักทอเส้นใยสังเคราะห์', vn: 'đan sợi tổng hợp', es: 'Tejido de fibras sintéticas',
    pt: 'Tricô de fibra sintética', id_lang: 'Rajutan serat sintetis', ru: 'вязание из синтетического волокна', fr: 'Tricotage en fibres synthétiques', ar: 'حياكة الألياف الاصطناعية', ja: ''
  },
  '化纤锦氨': {
    cn: '化纤锦氨', en: 'synthetic fiber nylon', th: 'เส้นใยสังเคราะห์ไนลอน', vn: 'sợi tổng hợp nylon', es: 'nailon de fibra sintética',
    pt: 'nylon de fibra sintética', id_lang: 'serat sintetis nilon', ru: 'синтетическое волокно нейлон', fr: 'nylon en fibre synthétique', ar: 'نايلون صناعي', ja: ''
  },
  '化纤面料': {
    cn: '化纤面料', en: 'Synthetic fiber fabrics', th: 'ผ้าใยสังเคราะห์', vn: 'Vải sợi tổng hợp', es: 'tejidos de fibra sintética',
    pt: 'Tecidos de fibra sintética', id_lang: 'Kain serat sintetis', ru: 'Ткани из синтетических волокон', fr: 'tissus en fibres synthétiques', ar: 'أقمشة الألياف الاصطناعية', ja: ''
  },
  '化纤高弹': {
    cn: '化纤高弹', en: 'High elasticity of synthetic fibers', th: 'เส้นใยสังเคราะห์มีความยืดหยุ่นสูง', vn: 'Độ đàn hồi cao của sợi tổng hợp', es: 'Alta elasticidad de las fibras sintéticas',
    pt: 'Alta elasticidade das fibras sintéticas', id_lang: 'Elastisitas tinggi serat sintetis', ru: 'Высокая эластичность синтетических волокон', fr: 'Haute élasticité des fibres synthétiques', ar: 'مرونة عالية للألياف الاصطناعية', ja: ''
  },
  '化纤高弹提花': {
    cn: '化纤高弹提花', en: 'High-elasticity jacquard of synthetic fibers', th: 'ผ้าแจ็กการ์ดที่มีความยืดหยุ่นสูง ผลิตจากเส้นใยสังเคราะห์', vn: 'Vải jacquard có độ đàn hồi cao làm từ sợi tổng hợp', es: 'Jacquard de alta elasticidad de fibras sintéticas',
    pt: 'Jacquard de alta elasticidade de fibras sintéticas', id_lang: 'Jacquard elastis tinggi dari serat sintetis', ru: 'Высокоэластичный жаккард из синтетических волокон', fr: 'Jacquard à haute élasticité en fibres synthétiques', ar: 'نسيج جاكار عالي المرونة من الألياف الاصطناعية', ja: ''
  },
  '半漂': {
    cn: '半漂', en: 'Half-floating', th: 'ลอยครึ่งตัว', vn: 'Nửa lơ lửng', es: 'Semiflotante',
    pt: 'Semiflutuante', id_lang: 'Setengah mengambang', ru: 'Полуплавающий', fr: 'Semi-flottant', ar: 'نصف عائم', ja: ''
  },
  '半精纺': {
    cn: '半精纺', en: 'Semi-worsted', th: 'เซมิ-เวิร์สเต็ด', vn: 'len bán thô', es: 'Semi-estambre',
    pt: 'Semi-penteado', id_lang: 'Wol semi-kotor', ru: 'Полушерстяная', fr: 'Laine semi-peignée', ar: 'شبه صوفي', ja: ''
  },
  '半裙面料': {
    cn: '半裙面料', en: 'Skirt fabric', th: 'ผ้าสำหรับทำกระโปรง', vn: 'Vải may váy', es: 'Tela para falda',
    pt: 'Tecido para saia', id_lang: 'Kain rok', ru: 'Ткань для юбки', fr: 'Tissu pour jupe', ar: 'قماش التنورة', ja: ''
  },
  '华夫格': {
    cn: '华夫格', en: 'Waffle', th: 'วาฟเฟิล', vn: 'Bánh quế', es: 'Gofre',
    pt: 'Waffle', id_lang: 'Omongan', ru: 'Вафля', fr: 'Gaufre', ar: 'وافل', ja: ''
  },
  '单灰': {
    cn: '单灰', en: 'single gray', th: 'สีเทาเดี่ยว', vn: 'màu xám đơn', es: 'gris simple',
    pt: 'cinza único', id_lang: 'abu-abu tunggal', ru: 'один серый', fr: 'gris uni', ar: 'رمادي مفرد', ja: ''
  },
  '单独洗涤': {
    cn: '单独洗涤', en: 'Wash separately.', th: 'ซักแยก', vn: 'Giặt riêng.', es: 'Lavar por separado.',
    pt: 'Lavar separadamente.', id_lang: 'Cuci terpisah.', ru: 'Стирать отдельно.', fr: 'Laver séparément.', ar: 'يُغسل بشكل منفصل.', ja: ''
  },
  '单边吊目': {
    cn: '单边吊目', en: 'Single-sided hanging eye', th: 'ห่วงแขวนด้านเดียว', vn: 'Móc treo một mặt', es: 'Ojal colgante de un solo lado',
    pt: 'Olhal suspenso de um lado', id_lang: 'Lubang gantungan satu sisi', ru: 'Одностороннее подвесное ушко', fr: 'œillet de suspension unilatéral', ar: 'عين معلقة من جانب واحد', ja: ''
  },
  '卡其': {
    cn: '卡其', en: 'Khaki', th: 'กากี', vn: 'Màu kaki', es: 'Caqui',
    pt: 'Cáqui', id_lang: 'Dril', ru: 'Хаки', fr: 'Kaki', ar: 'كاكي', ja: ''
  },
  '卡其净色': {
    cn: '卡其净色', en: 'Khaki Plain', th: 'สีกากีเรียบ', vn: 'Màu kaki trơn', es: 'Caqui liso',
    pt: 'Cáqui liso', id_lang: 'Warna Khaki Polos', ru: 'Хаки простой', fr: 'kaki uni', ar: 'كاكي سادة', ja: ''
  },
  '卡其条纹': {
    cn: '卡其条纹', en: 'Khaki stripes', th: 'ลายทางสีกากี', vn: 'Sọc kaki', es: 'rayas caqui',
    pt: 'Listras cáqui', id_lang: 'Garis-garis khaki', ru: 'Хаки полоски', fr: 'rayures kaki', ar: 'مخططات كاكي', ja: ''
  },
  '卡其条纹面料': {
    cn: '卡其条纹面料', en: 'Khaki striped fabric', th: 'ผ้าลายทางสีกากี', vn: 'Vải sọc kaki', es: 'Tela a rayas color caqui',
    pt: 'Tecido listrado cáqui', id_lang: 'Kain bergaris khaki', ru: 'Ткань в полоску цвета хаки', fr: 'tissu à rayures kaki', ar: 'قماش مخطط باللون الكاكي', ja: ''
  },
  '卡其格纹': {
    cn: '卡其格纹', en: 'Khaki plaid', th: 'ลายตารางสีกากี', vn: 'kẻ sọc kaki', es: 'Cuadros color caqui',
    pt: 'Xadrez cáqui', id_lang: 'Kotak-kotak khaki', ru: 'клетчатый узор цвета хаки', fr: 'kaki à carreaux', ar: 'كاروهات كاكي', ja: ''
  },
  '卡其渐变': {
    cn: '卡其渐变', en: 'Khaki Gradient', th: 'สีกากีไล่ระดับ', vn: 'Màu kaki chuyển sắc', es: 'Degradado caqui',
    pt: 'Gradiente cáqui', id_lang: 'Gradien Khaki', ru: 'Цвет хаки градиент', fr: 'Dégradé kaki', ar: 'تدرج لوني كاكي', ja: ''
  },
  '卡其绿': {
    cn: '卡其绿', en: 'Khaki Green', th: 'สีเขียวกากี', vn: 'Màu xanh kaki', es: 'Verde caqui',
    pt: 'Verde cáqui', id_lang: 'Hijau Khaki', ru: 'Хаки-зеленый', fr: 'Vert kaki', ar: 'أخضر كاكي', ja: ''
  },
  '卡其绿条': {
    cn: '卡其绿条', en: 'Khaki Green Stripe', th: 'ลายทางสีเขียวขี้ม้า', vn: 'Sọc xanh kaki', es: 'Raya verde caqui',
    pt: 'Listras verde-cáqui', id_lang: 'Garis Hijau Khaki', ru: 'Хаки Зеленая полоса', fr: 'Rayures vert kaki', ar: 'مخطط باللون الأخضر الكاكي', ja: ''
  },
  '卡其绿条纹': {
    cn: '卡其绿条纹', en: 'Khaki Green Stripes', th: 'ลายทางสีเขียวขี้ม้า', vn: 'Sọc xanh kaki', es: 'Rayas verde caqui',
    pt: 'Listras verde-cáqui', id_lang: 'Garis-garis Hijau Khaki', ru: 'Хаки-зеленые полосы', fr: 'Rayures vert kaki', ar: 'مخطط باللون الأخضر الكاكي', ja: ''
  },
  '卡其绿格纹': {
    cn: '卡其绿格纹', en: 'Khaki Green Plaid', th: 'ลายตารางสีเขียวขี้ม้า', vn: 'Màu xanh kaki kẻ caro', es: 'Cuadros verde caqui',
    pt: 'Xadrez verde cáqui', id_lang: 'Kotak-kotak Hijau Khaki', ru: 'Хаки зеленая клетка', fr: 'Carreaux vert kaki', ar: 'كاروهات كاكي أخضر', ja: ''
  },
  '卡其绿花纹': {
    cn: '卡其绿花纹', en: 'Khaki Green Pattern', th: 'ลายสีเขียวขี้ม้า', vn: 'Họa tiết màu xanh kaki', es: 'Patrón verde caqui',
    pt: 'Padrão verde cáqui', id_lang: 'Pola Hijau Khaki', ru: 'Хаки-зеленый узор', fr: 'Motif vert kaki', ar: 'بنقشة خضراء كاكي', ja: ''
  },
  '卡其绿镶拼': {
    cn: '卡其绿镶拼', en: 'Khaki Green Patchwork', th: 'ลายปะติดปะต่อสีเขียวขี้ม้า', vn: 'Màu xanh kaki chắp vá', es: 'Patchwork verde caqui',
    pt: 'Patchwork verde cáqui', id_lang: 'Patchwork Hijau Khaki', ru: 'Хаки-зеленый лоскутный узор', fr: 'Patchwork vert kaki', ar: 'مرقعات خضراء كاكي', ja: ''
  },
  '卡其色': {
    cn: '卡其色', en: 'Khaki', th: 'กากี', vn: 'Màu kaki', es: 'Caqui',
    pt: 'Cáqui', id_lang: 'Dril', ru: 'Хаки', fr: 'Kaki', ar: 'كاكي', ja: ''
  },
  '卡其色纱线': {
    cn: '卡其色纱线', en: 'Khaki yarn', th: 'เส้นด้ายสีกากี', vn: 'Sợi kaki', es: 'Hilo color caqui',
    pt: 'Fio cáqui', id_lang: 'Benang khaki', ru: 'пряжа цвета хаки', fr: 'Fil kaki', ar: 'خيوط كاكي', ja: ''
  },
  '卡其色面料': {
    cn: '卡其色面料', en: 'Khaki fabric', th: 'ผ้าสีกากี', vn: 'Vải kaki', es: 'Tela color caqui',
    pt: 'Tecido cáqui', id_lang: 'Kain khaki', ru: 'Ткань цвета хаки', fr: 'Tissu kaki', ar: 'قماش كاكي', ja: ''
  },
  '卡其花纹': {
    cn: '卡其花纹', en: 'Khaki pattern', th: 'ลายสีกากี', vn: 'Họa tiết kaki', es: 'Patrón caqui',
    pt: 'Padrão cáqui', id_lang: 'Pola khaki', ru: 'Хаки узор', fr: 'Motif kaki', ar: 'بنمط كاكي', ja: ''
  },
  '卡其里料': {
    cn: '卡其里料', en: 'Khaki', th: 'กากี', vn: 'Màu kaki', es: 'Caqui',
    pt: 'Cáqui', id_lang: 'Dril', ru: 'Хаки', fr: 'Kaki', ar: 'كاكي', ja: ''
  },
  '卡其镶拼': {
    cn: '卡其镶拼', en: 'Khaki patchwork', th: 'ผ้าปะติดปะต่อสีกากี', vn: 'Vải chắp vá kaki', es: 'Retazos color caqui',
    pt: 'Patchwork cáqui', id_lang: 'Patchwork khaki', ru: 'Хаки, лоскутное одеяло', fr: 'patchwork kaki', ar: 'مرقعات كاكي', ja: ''
  },
  '卡其面料': {
    cn: '卡其面料', en: 'Khaki fabric', th: 'ผ้าสีกากี', vn: 'Vải kaki', es: 'Tela color caqui',
    pt: 'Tecido cáqui', id_lang: 'Kain khaki', ru: 'Ткань цвета хаки', fr: 'Tissu kaki', ar: 'قماش كاكي', ja: ''
  },
  '卫衣大身面料': {
    cn: '卫衣大身面料', en: 'Sweatshirt body fabric', th: 'ผ้าสำหรับทำฮู้ดดี้', vn: 'Vải thân áo nỉ', es: 'Tejido principal de la sudadera',
    pt: 'tecido do corpo do moletom', id_lang: 'Bahan badan kaus', ru: 'Ткань для основной части толстовки', fr: 'tissu du corps du sweat-shirt', ar: 'قماش جسم البلوزة', ja: ''
  },
  '卫衣罗纹面料': {
    cn: '卫衣罗纹面料', en: 'Ribbed fabric for sweatshirts', th: 'ผ้าลายริ้วสำหรับเสื้อสเวตเตอร์', vn: 'Vải gân cho áo nỉ', es: 'Tejido acanalado para sudaderas',
    pt: 'Tecido canelado para moletons', id_lang: 'Kain bertekstur untuk kaus', ru: 'Ребристая ткань для толстовок', fr: 'Tissu côtelé pour sweat-shirts', ar: 'قماش مضلع للكنزات الرياضية', ja: ''
  },
  '卫衣面料': {
    cn: '卫衣面料', en: 'Hoodie fabric', th: 'ผ้าสำหรับทำฮู้ดดี้', vn: 'Vải áo hoodie', es: 'Tela para sudadera con capucha',
    pt: 'Tecido do moletom', id_lang: 'Kain hoodie', ru: 'Ткань для худи', fr: 'Tissu à capuche', ar: 'قماش السترة ذات القلنسوة', ja: ''
  },
  '印度制造': {
    cn: '印度制造', en: 'Made in India', th: 'ผลิตในอินเดีย', vn: 'Sản xuất tại Ấn Độ', es: 'Hecho en India',
    pt: 'Feito na Índia', id_lang: 'Buatan India', ru: 'Сделано в Индии', fr: 'Fabriqué en Inde', ar: 'صنع في الهند', ja: ''
  },
  '印花': {
    cn: '印花', en: 'printing', th: 'การพิมพ์', vn: 'in ấn', es: 'impresión',
    pt: 'impressão', id_lang: 'pencetakan', ru: 'печать', fr: 'impression', ar: 'طباعة', ja: ''
  },
  '印花处不可熨烫': {
    cn: '印花处不可熨烫', en: 'Do Not Iron Print', th: 'ห้ามรีดลายพิมพ์', vn: 'Không ủi lên hình in', es: 'No planchar sobre el estampado',
    pt: 'Não passar sobre a estampa', id_lang: 'Jangan setrika bagian cetakan', ru: 'Не гладить по принту', fr: 'Ne pas repasser sur l\'imprimé', ar: 'لا تكوي على الطباعة', ja: ''
  },
  '印花料': {
    cn: '印花料', en: 'Printing materials', th: 'สื่อสิ่งพิมพ์', vn: 'Vật liệu in ấn', es: 'Materiales de impresión',
    pt: 'Materiais de impressão', id_lang: 'Bahan cetak', ru: 'Материалы для печати', fr: 'Matériaux d&#39;impression', ar: 'مواد الطباعة', ja: ''
  },
  '印花烫金面料': {
    cn: '印花烫金面料', en: 'Printed and hot stamped fabric', th: 'ผ้าพิมพ์ลายและผ้าปั๊มร้อน', vn: 'Vải in và dập nổi', es: 'Tela estampada y con estampado en caliente',
    pt: 'Tecido estampado e com impressão a quente', id_lang: 'Kain yang dicetak dan dicap panas', ru: 'Ткань с принтом и горячим тиснением', fr: 'Tissu imprimé et estampé à chaud', ar: 'قماش مطبوع ومختوم حرارياً', ja: ''
  },
  '印花面料': {
    cn: '印花面料', en: 'Printed fabrics', th: 'ผ้าพิมพ์ลาย', vn: 'Vải in', es: 'Telas estampadas',
    pt: 'Tecidos estampados', id_lang: 'Kain bercetak', ru: 'Ткани с принтами', fr: 'tissus imprimés', ar: 'أقمشة مطبوعة', ja: ''
  },
  '原牛色': {
    cn: '原牛色', en: 'Raw cow color', th: 'สีวัวดิบ', vn: 'Màu da bò tươi', es: 'Color de vaca cruda',
    pt: 'Cor de vaca crua', id_lang: 'Warna sapi mentah', ru: 'Цвет сырой коровы', fr: 'couleur de vache brute', ar: 'لون لحم البقر الخام', ja: ''
  },
  '双纱': {
    cn: '双纱', en: 'Double yarn', th: 'เส้นด้ายคู่', vn: 'Sợi đôi', es: 'Hilo doble',
    pt: 'Fio duplo', id_lang: 'Benang ganda', ru: 'Двойная пряжа', fr: 'Fil double', ar: 'خيوط مزدوجة', ja: ''
  },
  '双纱平纹': {
    cn: '双纱平纹', en: 'Double yarn plain weave', th: 'ทอแบบเรียบด้วยเส้นด้ายคู่', vn: 'Dệt trơn sợi đôi', es: 'tejido liso de doble hilo',
    pt: 'tecido plano de fio duplo', id_lang: 'Tenunan polos benang ganda', ru: 'Двойная пряжа простого переплетения', fr: 'armure toile double fil', ar: 'نسيج عادي مزدوج الخيوط', ja: ''
  },
  '双股平纹': {
    cn: '双股平纹', en: 'Double-strand plain weave', th: 'การทอแบบธรรมดาสองเส้น', vn: 'Dệt trơn hai sợi', es: 'tejido liso de doble hebra',
    pt: 'Tecido plano de fio duplo', id_lang: 'Tenunan polos dua untai', ru: 'Двухниточное простое переплетение', fr: 'Tissage uni à double brin', ar: 'نسيج عادي مزدوج الخيوط', ja: ''
  },
  '双面': {
    cn: '双面', en: 'Double-sided', th: 'สองด้าน', vn: 'Hai mặt', es: 'De dos caras',
    pt: 'Dupla face', id_lang: 'Dua sisi', ru: 'Двусторонний', fr: 'Double face', ar: 'وجهان', ja: ''
  },
  '双面布': {
    cn: '双面布', en: 'Double-sided fabric', th: 'ผ้าสองด้าน', vn: 'Vải hai mặt', es: 'Tela de doble cara',
    pt: 'tecido de dupla face', id_lang: 'Kain dua sisi', ru: 'Двусторонняя ткань', fr: 'Tissu double face', ar: 'قماش ذو وجهين', ja: ''
  },
  '双面斜纹': {
    cn: '双面斜纹', en: 'Double-sided twill', th: 'ผ้าทวิลล์สองด้าน', vn: 'Vải chéo hai mặt', es: 'Sarga de doble cara',
    pt: 'Sarja dupla face', id_lang: 'Kain kepar dua sisi', ru: 'Двусторонняя саржа', fr: 'Sergé double face', ar: 'نسيج قطني مزدوج الجوانب', ja: ''
  },
  '双面磨毛面料': {
    cn: '双面磨毛面料', en: 'Double-sided brushed fabric', th: 'ผ้าขัดเงาสองด้าน', vn: 'Vải chải hai mặt', es: 'Tejido cepillado de doble cara',
    pt: 'Tecido escovado de dupla face', id_lang: 'Kain sikat dua sisi', ru: 'Двусторонняя ворсистая ткань', fr: 'Tissu brossé double face', ar: 'قماش مصقول ذو وجهين', ja: ''
  },
  '反毛皮': {
    cn: '反毛皮', en: 'Suede', th: 'หนังกลับ', vn: 'Da lộn', es: 'Ante',
    pt: 'Camurça', id_lang: 'Suede', ru: 'Замша', fr: 'Suède', ar: 'جلد سويدي', ja: ''
  },
  '反绒皮': {
    cn: '反绒皮', en: 'Suede', th: 'หนังกลับ', vn: 'Da lộn', es: 'Ante',
    pt: 'Camurça', id_lang: 'Suede', ru: 'Замша', fr: 'Suède', ar: 'جلد سويدي', ja: ''
  },
  '反面': {
    cn: '反面', en: 'reverse side', th: 'ด้านหลัง', vn: 'mặt sau', es: 'reverso',
    pt: 'verso', id_lang: 'sisi sebaliknya', ru: 'обратная сторона', fr: 'verso', ar: 'الوجه الخلفي', ja: ''
  },
  '反面摇粒绒': {
    cn: '反面摇粒绒', en: 'Reverse fleece', th: 'ฟลีซกลับด้าน', vn: 'Lông cừu ngược', es: 'Forro polar inverso',
    pt: 'Fleece reverso', id_lang: 'Bulu domba terbalik', ru: 'Обратная сторона флиса', fr: 'polaire inversée', ar: 'صوف معكوس', ja: ''
  },
  '反面洗涤': {
    cn: '反面洗涤', en: 'Wash Inside Out', th: 'ซักด้านในออก', vn: 'Giặt mặt trái', es: 'Lavar del revés',
    pt: 'Lavar do avesso', id_lang: 'Cuci bagian dalam di luar', ru: 'Стирать наизнанку', fr: 'Laver à l\'envers', ar: 'يُغسل مقلوباً', ja: ''
  },
  '反面熨烫': {
    cn: '反面熨烫', en: 'Iron inside out', th: 'กลับด้านรีด', vn: 'Ủi mặt trái', es: 'Planchar del revés',
    pt: 'Passar do avesso', id_lang: 'Setrika bagian dalam', ru: 'Гладить с изнаночной стороны', fr: 'Repasser à l\'envers', ar: 'اكوي الملابس مقلوبة', ja: ''
  },
  '发泡': {
    cn: '发泡', en: 'Foaming', th: 'การเกิดฟอง', vn: 'Tạo bọt', es: 'Espumoso',
    pt: 'Espumante', id_lang: 'Berbusa', ru: 'Пенообразование', fr: 'Mousseuse', ar: 'رغوة', ja: ''
  },
  '发泡底': {
    cn: '发泡底', en: 'Foamed base', th: 'ฐานโฟม', vn: 'Đế xốp', es: 'Base de espuma',
    pt: 'Base de espuma', id_lang: 'Dasar berbusa', ru: 'Основание из вспененного материала', fr: 'Base en mousse', ar: 'قاعدة رغوية', ja: ''
  },
  '发热纤维': {
    cn: '发热纤维', en: 'Heating fiber', th: 'เส้นใยความร้อน', vn: 'Sợi gia nhiệt', es: 'Fibra calefactora',
    pt: 'Fibra de aquecimento', id_lang: 'Serat pemanas', ru: 'Нагревательное волокно', fr: 'Fibre chauffante', ar: 'ألياف التدفئة', ja: ''
  },
  '口袋里料': {
    cn: '口袋里料', en: 'Pocket Lining', th: 'ซับในกระเป๋า', vn: 'Lớp lót túi', es: 'Forro del bolsillo',
    pt: 'Forro do bolso', id_lang: 'Lapisan Saku', ru: 'Подкладка карманов', fr: 'Doublure de poche', ar: 'بطانة الجيب', ja: ''
  },
  '古典灰': {
    cn: '古典灰', en: 'Classic Gray', th: 'สีเทาคลาสสิก', vn: 'Màu xám cổ điển', es: 'Gris clásico',
    pt: 'Cinza Clássico', id_lang: 'Abu-abu Klasik', ru: 'Классический серый', fr: 'Gris classique', ar: 'رمادي كلاسيكي', ja: ''
  },
  '可使用非氯漂白': {
    cn: '可使用非氯漂白', en: 'Non-chlorine bleach allowed', th: 'ใช้สารฟอกขาวที่ไม่มีคลอรีนได้', vn: 'Có thể sử dụng chất tẩy không chứa clo', es: 'Se permite blanqueador sin cloro',
    pt: 'Permitido uso de alvejante sem cloro', id_lang: 'Dapat menggunakan pemutih tanpa klorin', ru: 'Разрешен нехлорный отбеливатель', fr: 'Agent de blanchiment non chloré autorisé', ar: 'يسمح باستخدام مبيض خالٍ من الكلور', ja: ''
  },
  '可干洗': {
    cn: '可干洗', en: 'Dry cleanable', th: 'ซักแห้งได้', vn: 'Có thể giặt khô', es: 'Lavable en seco',
    pt: 'Lavável a seco', id_lang: 'Dapat dicuci kering', ru: 'Подлежит химчистке', fr: 'Nettoyage à sec possible', ar: 'قابل للتنظيف الجاف', ja: ''
  },
  '可拆卸内领': {
    cn: '可拆卸内领', en: 'Detachable inner collar', th: 'ปลอกคอด้านในถอดได้', vn: 'Cổ áo bên trong có thể tháo rời', es: 'Collar interior desmontable',
    pt: 'Colarinho interno removível', id_lang: 'Kerah bagian dalam yang dapat dilepas', ru: 'Съемный внутренний воротник', fr: 'Col intérieur amovible', ar: 'طوق داخلي قابل للفصل', ja: ''
  },
  '可机洗': {
    cn: '可机洗', en: 'Machine washable', th: 'ซักเครื่องได้', vn: 'Có thể giặt máy', es: 'Lavable a máquina',
    pt: 'Lavável à máquina', id_lang: 'Dapat dicuci dengan mesin', ru: 'Машинная стирка', fr: 'Lavable en machine', ar: 'قابل للغسيل الآلي', ja: ''
  },
  '可能存在轻微褪色': {
    cn: '可能存在轻微褪色', en: 'Color may bleed / transfer', th: 'สีอาจตกได้', vn: 'Có thể phai màu', es: 'El color puede desteñir',
    pt: 'A cor pode soltar / desbotar', id_lang: 'Warna mungkin luntur', ru: 'Цвет может линять', fr: 'La couleur peut déteindre', ar: 'قد يبهت اللون أو ينتقل', ja: ''
  },
  '可脱卸挂面': {
    cn: '可脱卸挂面', en: 'Detachable noodles', th: 'บะหมี่แบบแยกชิ้น', vn: 'Mì có thể tháo rời', es: 'Fideos desmontables',
    pt: 'Macarrão destacável', id_lang: 'Mie yang dapat dilepas', ru: 'Съемная лапша', fr: 'Nouilles détachables', ar: 'معكرونة قابلة للفصل', ja: ''
  },
  '可脱卸蝴蝶结成分不计': {
    cn: '可脱卸蝴蝶结成分不计', en: 'The removable bow component is not counted.', th: 'ส่วนประกอบคันธนูที่ถอดออกได้จะไม่นับรวม', vn: 'Bộ phận cung có thể tháo rời không được tính vào.', es: 'El componente de arco desmontable no se tiene en cuenta.',
    pt: 'A parte removível do arco não está incluída na contagem.', id_lang: 'Komponen busur yang dapat dilepas tidak dihitung.', ru: 'Съемный элемент в виде лука не учитывается.', fr: 'La partie amovible de l&#39;arceau n&#39;est pas prise en compte.', ar: 'لا يتم احتساب الجزء القابل للإزالة من القوس.', ja: ''
  },
  '可脱卸袖口': {
    cn: '可脱卸袖口', en: 'Detachable cuffs', th: 'ข้อมือแบบถอดได้', vn: 'Cổ tay áo có thể tháo rời', es: 'Puños desmontables',
    pt: 'Algemas removíveis', id_lang: 'Manset yang dapat dilepas', ru: 'Съемные манжеты', fr: 'Menottes amovibles', ar: 'أساور قابلة للفصل', ja: ''
  },
  '可脱卸领子': {
    cn: '可脱卸领子', en: 'Detachable collar', th: 'ปลอกคอแบบถอดได้', vn: 'Cổ áo có thể tháo rời', es: 'Collar desmontable',
    pt: 'Coleira removível', id_lang: 'Kerah yang dapat dilepas', ru: 'Съемный ошейник', fr: 'Col amovible', ar: 'طوق قابل للفصل', ja: ''
  },
  '可脱卸领带成分不计': {
    cn: '可脱卸领带成分不计', en: 'Detachable tie components not counted', th: 'ส่วนประกอบของเนคไทที่ถอดได้จะไม่นับรวม', vn: 'Các bộ phận cà vạt có thể tháo rời không được tính.', es: 'Los componentes desmontables de la corbata no se tienen en cuenta.',
    pt: 'Componentes de gravata removíveis não contabilizados.', id_lang: 'Komponen pengikat yang dapat dilepas tidak dihitung.', ru: 'Съемные элементы стяжек не учитываются.', fr: 'Les éléments de cravate détachables ne sont pas comptabilisés.', ar: 'لا يتم احتساب مكونات الربط القابلة للفصل.', ja: ''
  },
  '可脱卸领结成分不计': {
    cn: '可脱卸领结成分不计', en: 'Detachable bow tie component not counted', th: 'ส่วนประกอบโบว์ไทแบบถอดได้ไม่นับรวม', vn: 'Bộ phận nơ cài có thể tháo rời không được tính vào.', es: 'El componente desmontable de la pajarita no se tiene en cuenta.',
    pt: 'Componente de gravata borboleta removível não contabilizado.', id_lang: 'Komponen dasi kupu-kupu yang dapat dilepas tidak dihitung.', ru: 'Съемный элемент галстука-бабочки не учитывается.', fr: 'Le nœud papillon amovible n&#39;est pas comptabilisé.', ar: 'لا يتم احتساب قطعة ربطة العنق القابلة للفصل.', ja: ''
  },
  '可非氯漂白': {
    cn: '可非氯漂白', en: 'Non-Chlorine Bleach Only', th: 'ใช้สารฟอกขาวที่ไม่ใช่คลอรีนเท่านั้น', vn: 'Chỉ dùng chất tẩy không chứa clo', es: 'Solo blanqueador sin cloro',
    pt: 'Somente alvejante sem cloro', id_lang: 'Hanya pemutih non-klorin', ru: 'Только нехлорный отбеливатель', fr: 'Javel sans chlore uniquement', ar: 'مبيض غير كلوري فقط', ja: ''
  },
  '合成革': {
    cn: '合成革', en: 'synthetic leather', th: 'หนังสังเคราะห์', vn: 'da tổng hợp', es: 'cuero sintético',
    pt: 'couro sintético', id_lang: 'kulit sintetis', ru: 'искусственная кожа', fr: 'cuir synthétique', ar: 'جلد صناعي', ja: ''
  },
  '吊带裙面料': {
    cn: '吊带裙面料', en: 'slip dress fabric', th: 'ผ้าสำหรับชุดเดรสสลิป', vn: 'vải váy slip', es: 'tela para vestido lencero',
    pt: 'tecido para vestido de alças', id_lang: 'kain gaun slip', ru: 'ткань для платья-комбинации', fr: 'tissu pour robe nuisette', ar: 'قماش فستان سليب', ja: ''
  },
  '吊带面料': {
    cn: '吊带面料', en: 'suspender fabric', th: 'ผ้าสายรัด', vn: 'vải dây đeo', es: 'tela de tirantes',
    pt: 'tecido de suspensório', id_lang: 'kain suspender', ru: 'ткань для подтяжек', fr: 'tissu à bretelles', ar: 'قماش حمالات البنطلون', ja: ''
  },
  '后上': {
    cn: '后上', en: 'Back to top', th: 'กลับสู่ด้านบน', vn: 'Trở lại đầu trang', es: 'Volver arriba',
    pt: 'Voltar ao topo', id_lang: 'Kembali ke atas', ru: 'Вернуться наверх', fr: 'Retour en haut de page', ar: 'العودة إلى الأعلى', ja: ''
  },
  '后上里': {
    cn: '后上里', en: 'Hou Shang Li', th: 'โหวซางลี่', vn: 'Hầu Thượng Lý', es: 'Hou Shang Li',
    pt: 'Hou Shang-Li', id_lang: 'Hou Shang Li', ru: 'Хоу Шан Ли', fr: 'Hou Shang Li', ar: 'هو شانغ لي', ja: ''
  },
  '后片': {
    cn: '后片', en: 'Rear', th: 'หลัง', vn: 'Ở phía sau', es: 'Trasero',
    pt: 'Traseira', id_lang: 'Belakang', ru: 'Задний', fr: 'Arrière', ar: 'مؤخرة', ja: ''
  },
  '后片上': {
    cn: '后片上', en: 'Rear film', th: 'ฟิล์มด้านหลัง', vn: 'Phim phía sau', es: 'Película trasera',
    pt: 'Película traseira', id_lang: 'Film belakang', ru: 'Задняя пленка', fr: 'Film arrière', ar: 'الفيلم الخلفي', ja: ''
  },
  '后育克': {
    cn: '后育克', en: 'Post-Yok', th: 'หลังโยค', vn: 'Hậu-Yok', es: 'Post-Yok',
    pt: 'Pós-Yok', id_lang: 'Pasca-Kuku', ru: 'Пост-Йок', fr: 'Post-Yok', ar: 'ما بعد يوك', ja: ''
  },
  '后背带': {
    cn: '后背带', en: 'Back strap', th: 'สายรัดด้านหลัง', vn: 'Dây đeo lưng', es: 'Correa trasera',
    pt: 'Alça traseira', id_lang: 'Tali belakang', ru: 'Задний ремешок', fr: 'sangle dorsale', ar: 'حزام الظهر', ja: ''
  },
  '后背蝴蝶结': {
    cn: '后背蝴蝶结', en: 'Back bow', th: 'โค้งหลัง', vn: 'Cung sau', es: 'Arco trasero',
    pt: 'Arco para trás', id_lang: 'Busur belakang', ru: 'Задний лук', fr: 'Arc arrière', ar: 'قوس خلفي', ja: ''
  },
  '后里料': {
    cn: '后里料', en: 'Lining', th: 'ซับใน', vn: 'Niêm mạc', es: 'Recubrimiento',
    pt: 'Resina', id_lang: 'Lapisan', ru: 'Оболочка', fr: 'Garniture', ar: 'بطانة', ja: ''
  },
  '后领贴': {
    cn: '后领贴', en: 'Back collar sticker', th: 'สติกเกอร์ปกหลัง', vn: 'Nhãn dán cổ áo phía sau', es: 'Pegatina del cuello trasero',
    pt: 'Adesivo para a parte de trás da gola', id_lang: 'Stiker kerah belakang', ru: 'Наклейка на задний воротник', fr: 'Autocollant pour col arrière', ar: 'ملصق ياقة خلفية', ja: ''
  },
  '含小部件': {
    cn: '含小部件', en: 'Contains small parts', th: 'มีชิ้นส่วนขนาดเล็ก', vn: 'Có chứa chi tiết nhỏ', es: 'Contiene piezas pequeñas',
    pt: 'Contém peças pequenas', id_lang: 'Mengandung bagian kecil', ru: 'Содержит мелкие детали', fr: 'Contient de petites pièces', ar: 'يحتوي على أجزاء صغيرة', ja: ''
  },
  '含微量其他纤维': {
    cn: '含微量其他纤维', en: 'Contains trace amounts of other fibers', th: 'มีเส้นใยชนิดอื่นปนอยู่เล็กน้อย', vn: 'Chứa một lượng nhỏ các chất xơ khác.', es: 'Contiene trazas de otras fibras.',
    pt: 'Contém quantidades mínimas de outras fibras.', id_lang: 'Mengandung sedikit serat lainnya', ru: 'Содержит следы других волокон.', fr: 'Contient des traces d&#39;autres fibres', ar: 'يحتوي على كميات ضئيلة من ألياف أخرى', ja: ''
  },
  '含微量导电涤纶': {
    cn: '含微量导电涤纶', en: 'Contains trace amounts of conductive polyester', th: 'มีส่วนประกอบของโพลีเอสเตอร์นำไฟฟ้าในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ polyester dẫn điện', es: 'Contiene trazas de poliéster conductor.',
    pt: 'Contém traços de poliéster condutor.', id_lang: 'Mengandung sejumlah kecil poliester konduktif.', ru: 'Содержит следы проводящего полиэстера.', fr: 'Contient des traces de polyester conducteur', ar: 'يحتوي على كميات ضئيلة من البوليستر الموصل', ja: ''
  },
  '含微量导电锦纶': {
    cn: '含微量导电锦纶', en: 'Contains trace amounts of conductive nylon', th: 'มีส่วนผสมของไนลอนนำไฟฟ้าในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ nylon dẫn điện.', es: 'Contiene trazas de nailon conductor.',
    pt: 'Contém traços de náilon condutor.', id_lang: 'Mengandung sejumlah kecil nilon konduktif.', ru: 'Содержит следы проводящего нейлона.', fr: 'Contient des traces de nylon conducteur', ar: 'يحتوي على كميات ضئيلة من النايلون الموصل', ja: ''
  },
  '含微量粘纤': {
    cn: '含微量粘纤', en: 'Contains trace amounts of viscose fiber', th: 'มีส่วนประกอบของเส้นใยวิสโคสในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ sợi viscose', es: 'Contiene trazas de fibra de viscosa.',
    pt: 'Contém traços de fibra de viscose.', id_lang: 'Mengandung sedikit sekali serat viskosa', ru: 'Содержит следы вискозного волокна.', fr: 'Contient des traces de fibres de viscose', ar: 'يحتوي على كميات ضئيلة من ألياف الفسكوز', ja: ''
  },
  '含微量绵羊毛': {
    cn: '含微量绵羊毛', en: 'Contains trace amounts of sheep wool', th: 'มีส่วนผสมของขนแกะในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ lông cừu.', es: 'Contiene trazas de lana de oveja.',
    pt: 'Contém vestígios de lã de ovelha.', id_lang: 'Mengandung sedikit sekali wol domba.', ru: 'Содержит следы овечьей шерсти.', fr: 'Contient des traces de laine de mouton', ar: 'يحتوي على كميات ضئيلة من صوف الأغنام', ja: ''
  },
  '含微量羽绒羽毛': {
    cn: '含微量羽绒羽毛', en: 'Contains trace amounts of down feathers', th: 'มีส่วนผสมของขนเป็ดในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ lông vũ.', es: 'Contiene trazas de plumas de plumón.',
    pt: 'Contém traços de penas de penugem.', id_lang: 'Mengandung sedikit sekali bulu halus.', ru: 'Содержит следы пуха.', fr: 'Contient des traces de duvet', ar: 'يحتوي على كميات ضئيلة من الريش الناعم', ja: ''
  },
  '含微量聚酯纤维': {
    cn: '含微量聚酯纤维', en: 'Contains trace amounts of polyester fiber', th: 'มีส่วนประกอบของเส้นใยโพลีเอสเตอร์ในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ sợi polyester', es: 'Contiene trazas de fibra de poliéster.',
    pt: 'Contém traços de fibra de poliéster.', id_lang: 'Mengandung sedikit sekali serat poliester.', ru: 'Содержит следы полиэфирного волокна.', fr: 'Contient des traces de fibres de polyester', ar: 'يحتوي على كميات ضئيلة من ألياف البوليستر', ja: ''
  },
  '含微量聚酯薄膜纤维': {
    cn: '含微量聚酯薄膜纤维', en: 'Contains trace amounts of polyester film fibers', th: 'มีส่วนประกอบของเส้นใยฟิล์มโพลีเอสเตอร์ในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ sợi màng polyester.', es: 'Contiene trazas de fibras de película de poliéster.',
    pt: 'Contém traços de fibras de filme de poliéster.', id_lang: 'Mengandung sejumlah kecil serat film poliester.', ru: 'Содержит следы волокон полиэфирной пленки.', fr: 'Contient des traces de fibres de film polyester', ar: 'يحتوي على كميات ضئيلة من ألياف أغشية البوليستر', ja: ''
  },
  '含微量莫代尔': {
    cn: '含微量莫代尔', en: 'Contains trace amounts of modal', th: 'มีโมดอลในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ modal', es: 'Contiene cantidades traza de modal',
    pt: 'Contém traços de modal', id_lang: 'Mengandung sedikit modal', ru: 'Содержит следы модального вещества.', fr: 'Contient des traces de modal', ar: 'يحتوي على كميات ضئيلة من المودال', ja: ''
  },
  '含微量莱赛尔': {
    cn: '含微量莱赛尔', en: 'Contains trace amounts of Lyocell', th: 'มีส่วนประกอบของไลโอเซลล์ในปริมาณเล็กน้อย', vn: 'Chứa một lượng nhỏ Lyocell', es: 'Contiene trazas de Lyocell.',
    pt: 'Contém traços de Lyocell.', id_lang: 'Mengandung sedikit sekali Lyocell.', ru: 'Содержит следы лиоцелла.', fr: 'Contient des traces de lyocell', ar: 'يحتوي على كميات ضئيلة من الليوسيل', ja: ''
  },
  '含粘合剂': {
    cn: '含粘合剂', en: 'Contains adhesive', th: 'มีส่วนผสมของกาว', vn: 'Chứa chất kết dính', es: 'Contiene adhesivo',
    pt: 'Contém adesivo', id_lang: 'Mengandung perekat', ru: 'Содержит клей.', fr: 'Contient de l&#39;adhésif', ar: 'يحتوي على مادة لاصقة', ja: ''
  },
  '含聚酯': {
    cn: '含聚酯', en: 'Polyester', th: 'โพลีเอสเตอร์', vn: 'Polyester', es: 'Poliéster',
    pt: 'Poliéster', id_lang: 'Poliester', ru: 'Полиэстер', fr: 'Polyester', ar: 'بوليستر', ja: ''
  },
  '含聚酯薄膜纤维': {
    cn: '含聚酯薄膜纤维', en: 'Polyester film fiber', th: 'เส้นใยฟิล์มโพลีเอสเตอร์', vn: 'Sợi màng polyester', es: 'fibra de película de poliéster',
    pt: 'Fibra de filme de poliéster', id_lang: 'Serat film poliester', ru: 'Полиэфирное пленочное волокно', fr: 'Fibre de film polyester', ar: 'فيلم بوليستر', ja: ''
  },
  '含胶': {
    cn: '含胶', en: 'Glue', th: 'กาว', vn: 'Keo dán', es: 'Pegamento',
    pt: 'Cola', id_lang: 'Lem', ru: 'Клей', fr: 'Colle', ar: 'غراء', ja: ''
  },
  '含莱赛尔纤维': {
    cn: '含莱赛尔纤维', en: 'Lyocell fiber', th: 'เส้นใยไลโอเซลล์', vn: 'Sợi Lyocell', es: 'fibra de lyocell',
    pt: 'Fibra de Lyocell', id_lang: 'Serat Lyocell', ru: 'Волокно лиоцелл', fr: 'Fibre de lyocell', ar: 'ألياف الليوسيل', ja: ''
  },
  '咖啡色': {
    cn: '咖啡色', en: 'coffee brown', th: 'สีน้ำตาลกาแฟ', vn: 'màu nâu cà phê', es: 'marrón café',
    pt: 'marrom café', id_lang: 'cokelat kopi', ru: 'кофейно-коричневый', fr: 'brun café', ar: 'لون القهوة البني', ja: ''
  },
  '咖白面料': {
    cn: '咖白面料', en: 'Coffee white fabric', th: 'ผ้าสีขาวกาแฟ', vn: 'Vải màu cà phê trắng', es: 'Tela color café',
    pt: 'Tecido branco-café', id_lang: 'Kain berwarna putih kopi', ru: 'Ткань кофейно-белого цвета', fr: 'Tissu blanc café', ar: 'قماش أبيض بلون القهوة', ja: ''
  },
  '咖色': {
    cn: '咖色', en: 'brown', th: 'สีน้ำตาล', vn: 'màu nâu', es: 'marrón',
    pt: 'marrom', id_lang: 'cokelat', ru: 'коричневый', fr: 'brun', ar: 'بني', ja: ''
  },
  '咖色条纹': {
    cn: '咖色条纹', en: 'Brown stripes', th: 'ลายทางสีน้ำตาล', vn: 'Sọc nâu', es: 'rayas marrones',
    pt: 'Listras marrons', id_lang: 'Garis-garis cokelat', ru: 'Коричневые полосы', fr: 'Rayures brunes', ar: 'خطوط بنية', ja: ''
  },
  '咖色格纹': {
    cn: '咖色格纹', en: 'Brown plaid', th: 'ลายตารางสีน้ำตาล', vn: 'kẻ sọc nâu', es: 'Cuadros marrones',
    pt: 'xadrez marrom', id_lang: 'Kotak-kotak cokelat', ru: 'Коричневая клетка', fr: 'à carreaux marron', ar: 'كاروهات بنية', ja: ''
  },
  '咖色花纹': {
    cn: '咖色花纹', en: 'Brown pattern', th: 'ลายสีน้ำตาล', vn: 'Họa tiết màu nâu', es: 'Patrón marrón',
    pt: 'Padrão marrom', id_lang: 'Pola cokelat', ru: 'Коричневый узор', fr: 'Motif marron', ar: 'نقش بني', ja: ''
  },
  '咖色镶拼': {
    cn: '咖色镶拼', en: 'Brown patchwork', th: 'ผ้าปะสีน้ำตาล', vn: 'mảnh vải màu nâu', es: 'Mosaico marrón',
    pt: 'Retalhos marrons', id_lang: 'Tambal sulam cokelat', ru: 'Коричневая лоскутная ткань', fr: 'patchwork marron', ar: 'رقعة بنية اللون', ja: ''
  },
  '咖色面料': {
    cn: '咖色面料', en: 'Brown fabric', th: 'ผ้าสีน้ำตาล', vn: 'Vải màu nâu', es: 'Tela marrón',
    pt: 'Tecido marrom', id_lang: 'Kain cokelat', ru: 'Коричневая ткань', fr: 'Tissu marron', ar: 'قماش بني', ja: ''
  },
  '品名': {
    cn: '品名', en: 'Product Name', th: 'ชื่อสินค้า', vn: 'Tên sản phẩm', es: 'Nombre del producto',
    pt: 'Nome do produto', id_lang: 'Nama produk', ru: 'Наименование товара', fr: 'Nom du produit', ar: 'اسم المنتج', ja: ''
  },
  '品牌': {
    cn: '品牌', en: 'Brand', th: 'แบรนด์', vn: 'Thương hiệu', es: 'Marca',
    pt: 'Marca', id_lang: 'Merek', ru: 'Бренд', fr: 'Marque', ar: 'العلامة التجارية', ja: ''
  },
  '哥弟布': {
    cn: '哥弟布', en: 'Gedibu', th: 'เกดิบู', vn: 'Gedibu', es: 'Gedibu',
    pt: 'Gedibu', id_lang: 'Gedibu', ru: 'Гедибу', fr: 'Gedibu', ar: 'جيديبو', ja: ''
  },
  '商务': {
    cn: '商务', en: 'Business', th: 'ธุรกิจ', vn: 'Công sở', es: 'de negocios',
    pt: 'Business', id_lang: 'Bisnis', ru: 'Бизнес', fr: 'Affaires', ar: 'عمل', ja: ''
  },
  '商务30度机洗': {
    cn: '商务30度机洗', en: 'Business Machine Wash at 30°C', th: 'ธุรกิจ ซักเครื่อง 30°C', vn: 'Công sở Giặt máy 30°C', es: 'Negocios Lavado a máquina a 30°C',
    pt: 'Executivo Lavagem à máquina a 30°C', id_lang: 'Bisnis Cuci Mesin 30°C', ru: 'Деловая Машинная стирка при 30°C', fr: 'Affaires Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة رسمي', ja: ''
  },
  '商务40度机洗': {
    cn: '商务40度机洗', en: 'Business Machine Wash at 40°C', th: 'ธุรกิจ ซักเครื่อง 40°C', vn: 'Công sở Giặt máy 40°C', es: 'Negocios Lavado a máquina a 40°C',
    pt: 'Executivo Lavagem à máquina a 40°C', id_lang: 'Bisnis Cuci Mesin 40°C', ru: 'Деловая Машинная стирка при 40°C', fr: 'Affaires Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة رسمي', ja: ''
  },
  '商务不可干洗': {
    cn: '商务不可干洗', en: 'Business Do Not Dry Clean', th: 'ธุรกิจ ห้ามซักแห้ง', vn: 'Công sở Không giặt khô', es: 'Negocios No lavar en seco',
    pt: 'Executivo Não lavar a seco', id_lang: 'Bisnis Jangan Dry Clean', ru: 'Деловая Не подвергать химчистке', fr: 'Affaires Ne pas nettoyer à sec', ar: 'لا تنظف جافاً رسمي', ja: ''
  },
  '商务不可漂白': {
    cn: '商务不可漂白', en: 'Business Do Not Bleach', th: 'ธุรกิจ ห้ามฟอกขาว', vn: 'Công sở Không tẩy trắng', es: 'Negocios No blanquear',
    pt: 'Executivo Não usar alvejante', id_lang: 'Bisnis Jangan Diputihkan', ru: 'Деловая Не отбеливать', fr: 'Affaires Ne pas blanchir', ar: 'لا تبيض رسمي', ja: ''
  },
  '商务不可烘干': {
    cn: '商务不可烘干', en: 'Business Do Not Tumble Dry', th: 'ธุรกิจ ห้ามอบแห้ง', vn: 'Công sở Không sấy khô', es: 'Negocios No secar en secadora',
    pt: 'Executivo Não secar em secadora', id_lang: 'Bisnis Jangan Dikeringkan', ru: 'Деловая Не сушить в машине', fr: 'Affaires Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف رسمي', ja: ''
  },
  '商务亚麻': {
    cn: '商务亚麻', en: 'Business Linen', th: 'ธุรกิจ ผ้าลินิน', vn: 'Công sở Vải lanh', es: 'Negocios Lino',
    pt: 'Executivo Linho', id_lang: 'Bisnis Linen', ru: 'Деловая Лен', fr: 'Affaires Lin', ar: 'كتان رسمي', ja: ''
  },
  '商务低温熨烫': {
    cn: '商务低温熨烫', en: 'Business Low Temperature Ironing', th: 'ธุรกิจ รีดอุณหภูมิต่ำ', vn: 'Công sở Ủi nhiệt độ thấp', es: 'Negocios Planchar a baja temperatura',
    pt: 'Executivo Passar a baixa temperatura', id_lang: 'Bisnis Setrika Suhu Rendah', ru: 'Деловая Глажка при низкой температуре', fr: 'Affaires Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة رسمي', ja: ''
  },
  '商务再生涤纶': {
    cn: '商务再生涤纶', en: 'Business Recycled Polyester', th: 'ธุรกิจ โพลีเอสเตอร์รีไซเคิล', vn: 'Công sở Polyester tái chế', es: 'Negocios Poliéster reciclado',
    pt: 'Executivo Poliéster reciclado', id_lang: 'Bisnis Poliester Daur Ulang', ru: 'Деловая Переработанный полиэстер', fr: 'Affaires Polyester recyclé', ar: 'بوليستر معاد التدوير رسمي', ja: ''
  },
  '商务冷水洗': {
    cn: '商务冷水洗', en: 'Business Cold Water Wash', th: 'ธุรกิจ ซักน้ำเย็น', vn: 'Công sở Giặt nước lạnh', es: 'Negocios Lavado en agua fría',
    pt: 'Executivo Lavagem em água fria', id_lang: 'Bisnis Cuci Air Dingin', ru: 'Деловая Стирка в холодной воде', fr: 'Affaires Lavage à l\'eau froide', ar: 'غسيل بالماء البارد رسمي', ja: ''
  },
  '商务天丝': {
    cn: '商务天丝', en: 'Business Tencel', th: 'ธุรกิจ เทนเซล', vn: 'Công sở Tencel', es: 'Negocios Tencel',
    pt: 'Executivo Tencel', id_lang: 'Bisnis Tencel', ru: 'Деловая Тенсел', fr: 'Affaires Tencel', ar: 'تنسل رسمي', ja: ''
  },
  '商务尼龙': {
    cn: '商务尼龙', en: 'Business Nylon', th: 'ธุรกิจ ไนลอน', vn: 'Công sở Nylon', es: 'Negocios Nailon',
    pt: 'Executivo Nylon', id_lang: 'Bisnis Nilon', ru: 'Деловая Нейлон', fr: 'Affaires Nylon', ar: 'نايلون رسمي', ja: ''
  },
  '商务平铺晾干': {
    cn: '商务平铺晾干', en: 'Business Lay Flat to Dry', th: 'ธุรกิจ ตากแห้งแบบแบน', vn: 'Công sở Phơi phẳng', es: 'Negocios Secar en plano',
    pt: 'Executivo Secar na horizontal', id_lang: 'Bisnis Keringkan Datar', ru: 'Деловая Сушить в расправленном виде', fr: 'Affaires Sécher à plat', ar: 'تجفيف مسطح رسمي', ja: ''
  },
  '商务悬挂晾干': {
    cn: '商务悬挂晾干', en: 'Business Hang Dry', th: 'ธุรกิจ แขวนตากแห้ง', vn: 'Công sở Phơi treo', es: 'Negocios Secar colgado',
    pt: 'Executivo Secar pendurado', id_lang: 'Bisnis Gantung Kering', ru: 'Деловая Сушить в подвешенном состоянии', fr: 'Affaires Sécher suspendu', ar: 'تجفيف بالتعليق رسمي', ja: ''
  },
  '商务手洗': {
    cn: '商务手洗', en: 'Business Hand Wash', th: 'ธุรกิจ ซักมือ', vn: 'Công sở Giặt tay', es: 'Negocios Lavado a mano',
    pt: 'Executivo Lavagem à mão', id_lang: 'Bisnis Cuci Tangan', ru: 'Деловая Ручная стирка', fr: 'Affaires Lavage à la main', ar: 'غسيل يدوي رسمي', ja: ''
  },
  '商务有机棉': {
    cn: '商务有机棉', en: 'Business Organic Cotton', th: 'ธุรกิจ ผ้าฝ้ายออร์แกนิก', vn: 'Công sở Cotton hữu cơ', es: 'Negocios Algodón orgánico',
    pt: 'Executivo Algodão orgânico', id_lang: 'Bisnis Katun Organik', ru: 'Деловая Органический хлопок', fr: 'Affaires Coton biologique', ar: 'قطن عضوي رسمي', ja: ''
  },
  '商务机洗': {
    cn: '商务机洗', en: 'Business Machine Wash', th: 'ธุรกิจ ซักเครื่อง', vn: 'Công sở Giặt máy', es: 'Negocios Lavado a máquina',
    pt: 'Executivo Lavagem à máquina', id_lang: 'Bisnis Cuci Mesin', ru: 'Деловая Машинная стирка', fr: 'Affaires Lavage en machine', ar: 'غسيل آلي رسمي', ja: ''
  },
  '商务棉': {
    cn: '商务棉', en: 'Business Cotton', th: 'ธุรกิจ ผ้าฝ้าย', vn: 'Công sở Cotton', es: 'Negocios Algodón',
    pt: 'Executivo Algodão', id_lang: 'Bisnis Katun', ru: 'Деловая Хлопок', fr: 'Affaires Coton', ar: 'قطن رسمي', ja: ''
  },
  '商务氨纶': {
    cn: '商务氨纶', en: 'Business Spandex', th: 'ธุรกิจ สแปนเด็กซ์', vn: 'Công sở Spandex', es: 'Negocios Elastano',
    pt: 'Executivo Elastano', id_lang: 'Bisnis Spandex', ru: 'Деловая Спандекс', fr: 'Affaires Élasthanne', ar: 'سباندكس رسمي', ja: ''
  },
  '商务涤纶': {
    cn: '商务涤纶', en: 'Business Polyester', th: 'ธุรกิจ โพลีเอสเตอร์', vn: 'Công sở Polyester', es: 'Negocios Poliéster',
    pt: 'Executivo Poliéster', id_lang: 'Bisnis Poliester', ru: 'Деловая Полиэстер', fr: 'Affaires Polyester', ar: 'بوليستر رسمي', ja: ''
  },
  '商务温水洗': {
    cn: '商务温水洗', en: 'Business Warm Water Wash', th: 'ธุรกิจ ซักน้ำอุ่น', vn: 'Công sở Giặt nước ấm', es: 'Negocios Lavado en agua tibia',
    pt: 'Executivo Lavagem em água morna', id_lang: 'Bisnis Cuci Air Hangat', ru: 'Деловая Стирка в теплой воде', fr: 'Affaires Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ رسمي', ja: ''
  },
  '商务真丝': {
    cn: '商务真丝', en: 'Business Pure Silk', th: 'ธุรกิจ ผ้าไหมแท้', vn: 'Công sở Lụa thật', es: 'Negocios Seda pura',
    pt: 'Executivo Seda pura', id_lang: 'Bisnis Sutra Asli', ru: 'Деловая Натуральный шелк', fr: 'Affaires Soie naturelle', ar: 'حرير طبيعي رسمي', ja: ''
  },
  '商务竹纤维': {
    cn: '商务竹纤维', en: 'Business Bamboo Fiber', th: 'ธุรกิจ เส้นใยไผ่', vn: 'Công sở Sợi tre', es: 'Negocios Fibra de bambú',
    pt: 'Executivo Fibra de bambu', id_lang: 'Bisnis Serat Bambu', ru: 'Деловая Бамбуковое волокно', fr: 'Affaires Fibre de bambou', ar: 'ألياف الخيزران رسمي', ja: ''
  },
  '商务粘纤': {
    cn: '商务粘纤', en: 'Business Viscose', th: 'ธุรกิจ วิสโคส', vn: 'Công sở Viscose', es: 'Negocios Viscosa',
    pt: 'Executivo Viscose', id_lang: 'Bisnis Viskosa', ru: 'Деловая Вискоза', fr: 'Affaires Viscose', ar: 'فيسكوز رسمي', ja: ''
  },
  '商务精梳棉': {
    cn: '商务精梳棉', en: 'Business Combed Cotton', th: 'ธุรกิจ ผ้าฝ้ายหวี', vn: 'Công sở Cotton chải', es: 'Negocios Algodón peinado',
    pt: 'Executivo Algodão penteado', id_lang: 'Bisnis Katun Sisir', ru: 'Деловая Гребенной хлопок', fr: 'Affaires Coton peigné', ar: 'قطن ممشط رسمي', ja: ''
  },
  '商务羊毛': {
    cn: '商务羊毛', en: 'Business Wool', th: 'ธุรกิจ ขนแกะ', vn: 'Công sở Len', es: 'Negocios Lana',
    pt: 'Executivo Lã', id_lang: 'Bisnis Wol', ru: 'Деловая Шерсть', fr: 'Affaires Laine', ar: 'صوف رسمي', ja: ''
  },
  '商务羊绒': {
    cn: '商务羊绒', en: 'Business Cashmere', th: 'ธุรกิจ แคชเมียร์', vn: 'Công sở Cashmere', es: 'Negocios Cachemira',
    pt: 'Executivo Caxemira', id_lang: 'Bisnis Kasmir', ru: 'Деловая Кашемир', fr: 'Affaires Cachemire', ar: 'كشمير رسمي', ja: ''
  },
  '商务腈纶': {
    cn: '商务腈纶', en: 'Business Acrylic', th: 'ธุรกิจ อะคริลิก', vn: 'Công sở Acrylic', es: 'Negocios Acrílico',
    pt: 'Executivo Acrílico', id_lang: 'Bisnis Akrilik', ru: 'Деловая Акрил', fr: 'Affaires Acrylique', ar: 'أكريليك رسمي', ja: ''
  },
  '商务莫代尔': {
    cn: '商务莫代尔', en: 'Business Modal', th: 'ธุรกิจ โมดอล', vn: 'Công sở Modal', es: 'Negocios Modal',
    pt: 'Executivo Modal', id_lang: 'Bisnis Modal', ru: 'Деловая Модал', fr: 'Affaires Modal', ar: 'مودال رسمي', ja: ''
  },
  '商务莱赛尔': {
    cn: '商务莱赛尔', en: 'Business Lyocell', th: 'ธุรกิจ ไลโอเซลล์', vn: 'Công sở Lyocell', es: 'Negocios Lyocell',
    pt: 'Executivo Lyocell', id_lang: 'Bisnis Lyocell', ru: 'Деловая Лиоцелл', fr: 'Affaires Lyocell', ar: 'ليوسيل رسمي', ja: ''
  },
  '商务锦纶': {
    cn: '商务锦纶', en: 'Business Nylon', th: 'ธุรกิจ ไนลอน', vn: 'Công sở Nylon', es: 'Negocios Nailon',
    pt: 'Executivo Nylon', id_lang: 'Bisnis Nilon', ru: 'Деловая Нейлон', fr: 'Affaires Nylon', ar: 'نايلون رسمي', ja: ''
  },
  '商务马海毛': {
    cn: '商务马海毛', en: 'Business Mohair', th: 'ธุรกิจ โมแฮร์', vn: 'Công sở Mohair', es: 'Negocios Mohair',
    pt: 'Executivo Mohair', id_lang: 'Bisnis Mohair', ru: 'Деловая Мохер', fr: 'Affaires Mohair', ar: 'موهير رسمي', ja: ''
  },
  '四面弹': {
    cn: '四面弹', en: 'Four-sided bullet', th: 'กระสุนสี่ด้าน', vn: 'Viên đạn bốn mặt', es: 'bala de cuatro lados',
    pt: 'Bala de quatro lados', id_lang: 'Peluru empat sisi', ru: 'Четырехгранная пуля', fr: 'Balle à quatre faces', ar: 'رصاصة رباعية الأضلاع', ja: ''
  },
  '围脖': {
    cn: '围脖', en: 'scarf', th: 'ผ้าพันคอ', vn: 'khăn quàng cổ', es: 'bufanda',
    pt: 'lenço', id_lang: 'syal', ru: 'шарф', fr: 'foulard', ar: 'وشاح', ja: ''
  },
  '国家/地区': {
    cn: '国家/地区', en: 'Country/Region', th: 'ประเทศ/ภูมิภาค', vn: 'Quốc gia/Khu vực', es: 'País/Región',
    pt: 'País/Região', id_lang: 'Negara/Wilayah', ru: 'Страна/Регион', fr: 'Pays/Région', ar: 'البلد/المنطقة', ja: ''
  },
  '圆机': {
    cn: '圆机', en: 'Circular loom', th: 'เครื่องทอแบบวงกลม', vn: 'máy dệt tròn', es: 'telar circular',
    pt: 'tear circular', id_lang: 'Alat tenun bundar', ru: 'Круговой ткацкий станок', fr: 'métier à tisser circulaire', ar: 'نول دائري', ja: ''
  },
  '土耳其制造': {
    cn: '土耳其制造', en: 'Made in Turkey', th: 'ผลิตในตุรกี', vn: 'Sản xuất tại Thổ Nhĩ Kỳ', es: 'Hecho en Turquía',
    pt: 'Feito na Turquia', id_lang: 'Buatan Turki', ru: 'Сделано в Турции', fr: 'Fabriqué en Turquie', ar: 'صنع في تركيا', ja: ''
  },
  '土黄': {
    cn: '土黄', en: 'earth yellow', th: 'สีเหลืองดิน', vn: 'màu vàng đất', es: 'amarillo tierra',
    pt: 'amarelo terra', id_lang: 'kuning tanah', ru: 'земляной желтый', fr: 'jaune terre', ar: 'أصفر ترابي', ja: ''
  },
  '土黄净色': {
    cn: '土黄净色', en: 'Earthy yellow pure color', th: 'สีเหลืองเอิร์ธโทนบริสุทธิ์', vn: 'Màu vàng đất thuần khiết', es: 'Color amarillo terroso puro',
    pt: 'cor amarela terrosa pura', id_lang: 'Warna kuning tanah murni', ru: 'Землисто-желтый чистый цвет', fr: 'jaune terreux pur', ar: 'لون أصفر ترابي نقي', ja: ''
  },
  '土黄条纹': {
    cn: '土黄条纹', en: 'Earthy yellow stripes', th: 'ลายทางสีเหลืองเอิร์ธโทน', vn: 'Sọc vàng đất', es: 'rayas de color amarillo tierra',
    pt: 'Listras amarelas terrosas', id_lang: 'Garis-garis kuning kecoklatan', ru: 'Землисто-желтые полосы', fr: 'Rayures jaune terre', ar: 'خطوط صفراء ترابية', ja: ''
  },
  '土黄格纹': {
    cn: '土黄格纹', en: 'Earthy yellow plaid', th: 'ลายตารางสีเหลืองเอิร์ธโทน', vn: 'kẻ sọc màu vàng đất', es: 'cuadros amarillo tierra',
    pt: 'xadrez amarelo terroso', id_lang: 'kotak-kotak kuning tanah', ru: 'Клетка землисто-желтого цвета', fr: 'carreaux jaune terreux', ar: 'كاروهات أصفر ترابي', ja: ''
  },
  '土黄渐变': {
    cn: '土黄渐变', en: 'Earthy yellow gradient', th: 'การไล่ระดับสีเหลืองแบบเอิร์ธโทน', vn: 'Màu vàng đất chuyển sắc', es: 'Degradado amarillo terroso',
    pt: 'gradiente amarelo terroso', id_lang: 'Gradien kuning tanah', ru: 'Землисто-желтый градиент', fr: 'Dégradé jaune terreux', ar: 'تدرج لوني أصفر ترابي', ja: ''
  },
  '土黄花纹': {
    cn: '土黄花纹', en: 'Earthy yellow pattern', th: 'ลวดลายสีเหลืองเอิร์ธโทน', vn: 'Họa tiết màu vàng đất', es: 'Patrón amarillo terroso',
    pt: 'Padrão amarelo terroso', id_lang: 'Pola kuning kecoklatan', ru: 'Узор землисто-желтого цвета', fr: 'Motif jaune terreux', ar: 'نقش أصفر ترابي', ja: ''
  },
  '土黄镶拼': {
    cn: '土黄镶拼', en: 'Earthy yellow inlaid', th: 'ฝังสีเหลืองเอิร์ธโทน', vn: 'màu vàng đất khảm', es: 'Incrustaciones de color amarillo tierra',
    pt: 'amarelo terroso incrustado', id_lang: 'bertatahkan warna kuning tanah', ru: 'Землисто-желтый цвет с вставками', fr: 'incrustation jaune terre', ar: 'مرصع باللون الأصفر الترابي', ja: ''
  },
  '均码': {
    cn: '均码', en: 'One Size', th: 'ฟรีไซซ์', vn: 'Một cỡ', es: 'Talla única',
    pt: 'Tamanho único', id_lang: 'Satu ukuran', ru: 'Универсальный размер', fr: 'Taille unique', ar: 'مقاس واحد', ja: ''
  },
  '坑条': {
    cn: '坑条', en: 'Piping', th: 'ท่อ', vn: 'Đường ống', es: 'Tubería',
    pt: 'Tubulação', id_lang: 'Pipa', ru: 'Трубопроводы', fr: 'Tuyauterie', ar: 'الأنابيب', ja: ''
  },
  '坑条布': {
    cn: '坑条布', en: 'Ribbed fabric', th: 'ผ้าลายริ้ว', vn: 'Vải gân', es: 'Tejido acanalado',
    pt: 'Tecido canelado', id_lang: 'Kain bergaris', ru: 'Ребристая ткань', fr: 'Tissu côtelé', ar: 'قماش مضلع', ja: ''
  },
  '垫布熨烫': {
    cn: '垫布熨烫', en: 'Iron with press cloth', th: 'รีดโดยใช้ผ้ารอง', vn: 'Đặt vải lót khi ủi', es: 'Planchar con un paño',
    pt: 'Passar com um pano protetor', id_lang: 'Setrika dengan kain pelapis', ru: 'Гладить через ткань', fr: 'Repasser avec une pattemouille', ar: 'اكوي باستخدام قطعة قماش فاصلة', ja: ''
  },
  '基布': {
    cn: '基布', en: 'base fabric', th: 'ผ้าพื้นฐาน', vn: 'vải cơ bản', es: 'tejido base',
    pt: 'tecido base', id_lang: 'kain dasar', ru: 'базовая ткань', fr: 'tissu de base', ar: 'القماش الأساسي', ja: ''
  },
  '填充物': {
    cn: '填充物', en: 'filler', th: 'ฟิลเลอร์', vn: 'chất làm đầy', es: 'relleno',
    pt: 'enchimento', id_lang: 'pengisi', ru: 'наполнитель', fr: 'produit de remplissage', ar: 'حشو', ja: ''
  },
  '填充物A': {
    cn: '填充物A', en: 'Filler A', th: 'ฟิลเลอร์ A', vn: 'Chất độn A', es: 'Relleno A',
    pt: 'Preenchimento A', id_lang: 'Pengisi A', ru: 'Наполнитель А', fr: 'Remplissage A', ar: 'الحشو أ', ja: ''
  },
  '填充物B': {
    cn: '填充物B', en: 'Filler B', th: 'ฟิลเลอร์ บี', vn: 'Chất độn B', es: 'Relleno B',
    pt: 'Preenchimento B', id_lang: 'Pengisi B', ru: 'Наполнитель B', fr: 'Produit de remplissage B', ar: 'الحشو ب', ja: ''
  },
  '填充物一': {
    cn: '填充物一', en: 'Filler 1', th: 'ฟิลเลอร์ 1', vn: 'Chất độn 1', es: 'Relleno 1',
    pt: 'Enchimento 1', id_lang: 'Pengisi 1', ru: 'Наполнитель 1', fr: 'Remplissage 1', ar: 'الحشو 1', ja: ''
  },
  '填充物二': {
    cn: '填充物二', en: 'Filler 2', th: 'ฟิลเลอร์ 2', vn: 'Chất độn 2', es: 'Relleno 2',
    pt: 'Enchimento 2', id_lang: 'Pengisi 2', ru: 'Наполнитель 2', fr: 'Filler 2', ar: 'الحشو 2', ja: ''
  },
  '墨绿': {
    cn: '墨绿', en: 'Dark green', th: 'สีเขียวเข้ม', vn: 'Xanh đậm', es: 'verde oscuro',
    pt: 'Verde escuro', id_lang: 'Hijau tua', ru: 'Темно-зеленый', fr: 'vert foncé', ar: 'أخضر داكن', ja: ''
  },
  '墨绿色': {
    cn: '墨绿色', en: 'Dark green', th: 'สีเขียวเข้ม', vn: 'Xanh đậm', es: 'verde oscuro',
    pt: 'Verde escuro', id_lang: 'Hijau tua', ru: 'Темно-зеленый', fr: 'vert foncé', ar: 'أخضر داكن', ja: ''
  },
  '墨绿面料': {
    cn: '墨绿面料', en: 'Dark green fabric', th: 'ผ้าสีเขียวเข้ม', vn: 'Vải màu xanh đậm', es: 'Tela verde oscuro',
    pt: 'Tecido verde escuro', id_lang: 'Kain hijau tua', ru: 'Темно-зеленая ткань', fr: 'tissu vert foncé', ar: 'قماش أخضر داكن', ja: ''
  },
  '复合': {
    cn: '复合', en: 'Bonded', th: 'ประกบ', vn: 'Ép dán', es: 'Laminado',
    pt: 'Dublado', id_lang: 'Komposit', ru: 'Дублированный', fr: 'Contrecollé', ar: 'مركب / مصفح', ja: 'ボンディング'
  },
  '复合丝斜纹料': {
    cn: '复合丝斜纹料', en: 'Composite twill fabric', th: 'ผ้าทวิลล์ผสม', vn: 'Vải dệt chéo tổng hợp', es: 'Tejido de sarga compuesto',
    pt: 'Tecido de sarja composto', id_lang: 'Kain kepar komposit', ru: 'Композитная саржевая ткань', fr: 'tissu sergé composite', ar: 'قماش قطني مركب', ja: ''
  },
  '复合印花面料': {
    cn: '复合印花面料', en: 'Composite Printed Fabrics', th: 'ผ้าพิมพ์คอมโพสิต', vn: 'Vải in tổng hợp', es: 'Tejidos compuestos estampados',
    pt: 'Tecidos compostos estampados', id_lang: 'Kain Cetak Komposit', ru: 'Композитные ткани с принтом', fr: 'Tissus imprimés composites', ar: 'أقمشة مطبوعة مركبة', ja: ''
  },
  '复合压花面料': {
    cn: '复合压花面料', en: 'Composite embossed fabric', th: 'ผ้าคอมโพสิตนูน', vn: 'Vải dập nổi tổng hợp', es: 'Tejido compuesto con relieve',
    pt: 'Tecido composto com relevo', id_lang: 'Kain timbul komposit', ru: 'Композитная тисненая ткань', fr: 'Tissu composite gaufré', ar: 'قماش منقوش مركب', ja: ''
  },
  '复合底层': {
    cn: '复合底层', en: 'Composite base layer', th: 'ชั้นฐานคอมโพสิต', vn: 'Lớp nền composite', es: 'Capa base compuesta',
    pt: 'Camada base composta', id_lang: 'Lapisan dasar komposit', ru: 'Композитный базовый слой', fr: 'couche de base composite', ar: 'طبقة أساسية مركبة', ja: ''
  },
  '复合底层面料': {
    cn: '复合底层面料', en: 'Composite base fabric', th: 'ผ้าฐานคอมโพสิต', vn: 'vải nền tổng hợp', es: 'Tejido base compuesto',
    pt: 'tecido base composto', id_lang: 'Kain dasar komposit', ru: 'Композитная базовая ткань', fr: 'tissu de base composite', ar: 'نسيج أساسي مركب', ja: ''
  },
  '复合底布': {
    cn: '复合底布', en: 'Composite base fabric', th: 'ผ้าฐานคอมโพสิต', vn: 'vải nền tổng hợp', es: 'Tejido base compuesto',
    pt: 'tecido base composto', id_lang: 'Kain dasar komposit', ru: 'Композитная базовая ткань', fr: 'tissu de base composite', ar: 'نسيج أساسي مركب', ja: ''
  },
  '复合底布光面层': {
    cn: '复合底布光面层', en: 'Composite base fabric smooth layer', th: 'ชั้นผิวเรียบของผ้าฐานคอมโพสิต', vn: 'lớp vải nền composite mịn', es: 'Capa lisa de tejido base compuesto',
    pt: 'camada lisa de tecido base composto', id_lang: 'Lapisan halus kain dasar komposit', ru: 'Композитная базовая ткань, гладкий слой', fr: 'couche lisse de tissu de base composite', ar: 'طبقة ناعمة من نسيج أساسي مركب', ja: ''
  },
  '复合底布绒面层': {
    cn: '复合底布绒面层', en: 'Composite base fabric plush surface layer', th: 'ชั้นผิวสัมผัสกำมะหยี่นุ่มพิเศษ ทำจากผ้าพื้นฐานผสม', vn: 'lớp bề mặt nhung của vải nền tổng hợp', es: 'Capa superficial de felpa de tejido base compuesto',
    pt: 'camada superficial de pelúcia em tecido base composto', id_lang: 'Lapisan permukaan kain dasar komposit yang mewah', ru: 'Композитная базовая ткань, плюшевый поверхностный слой', fr: 'couche de surface en peluche de tissu de base composite', ar: 'طبقة سطحية مخملية من نسيج أساسي مركب', ja: ''
  },
  '复合材料': {
    cn: '复合材料', en: 'Composite materials', th: 'วัสดุผสม', vn: 'Vật liệu tổng hợp', es: 'Materiales compuestos',
    pt: 'Materiais compósitos', id_lang: 'Bahan komposit', ru: 'Композитные материалы', fr: 'Matériaux composites', ar: 'المواد المركبة', ja: ''
  },
  '复合灰色恋人': {
    cn: '复合灰色恋人', en: 'Bonded gray lover fabric', th: 'ผ้าประกบสีเทา', vn: 'Vải ép dán màu xám', es: 'Tejido laminado amantes grises',
    pt: 'Tecido dublado amantes cinzentos', id_lang: 'Kain komposit abu-abu', ru: 'Дублированная ткань серого цвета', fr: 'Tissu contrecollé amants gris', ar: 'قماش مركب رمادي', ja: 'グレー恋人ボンディング生地'
  },
  '复合超柔': {
    cn: '复合超柔', en: 'Composite Ultra-Flexible', th: 'วัสดุคอมโพสิตที่มีความยืดหยุ่นสูงเป็นพิเศษ', vn: 'Vật liệu composite siêu linh hoạt', es: 'Compuesto ultra flexible',
    pt: 'Compósito Ultraflexível', id_lang: 'Komposit Ultra-Fleksibel', ru: 'Композитный сверхгибкий', fr: 'Composite ultra-flexible', ar: 'مركب فائق المرونة', ja: ''
  },
  '复合里层': {
    cn: '复合里层', en: 'Composite inner layer', th: 'ชั้นในทำจากวัสดุผสม', vn: 'Lớp trong composite', es: 'Capa interna compuesta',
    pt: 'camada interna composta', id_lang: 'Lapisan dalam komposit', ru: 'Композитный внутренний слой', fr: 'couche interne composite', ar: 'طبقة داخلية مركبة', ja: ''
  },
  '复合里层面料': {
    cn: '复合里层面料', en: 'Composite inner layer fabric', th: 'ผ้าชั้นในแบบผสม', vn: 'Vải lớp trong tổng hợp', es: 'Tejido de capa interior compuesta',
    pt: 'tecido de camada interna composto', id_lang: 'Kain lapisan dalam komposit', ru: 'Внутренний слой из композитной ткани', fr: 'Tissu de la couche intérieure composite', ar: 'نسيج الطبقة الداخلية المركب', ja: ''
  },
  '复合面层': {
    cn: '复合面层', en: 'Composite surface layer', th: 'ชั้นผิวคอมโพสิต', vn: 'Lớp bề mặt composite', es: 'capa superficial compuesta',
    pt: 'Camada superficial composta', id_lang: 'Lapisan permukaan komposit', ru: 'Композитный поверхностный слой', fr: 'couche superficielle composite', ar: 'طبقة سطحية مركبة', ja: ''
  },
  '复合面层面料': {
    cn: '复合面层面料', en: 'Composite surface fabric', th: 'ผ้าพื้นผิวคอมโพสิต', vn: 'vải bề mặt tổng hợp', es: 'Tejido de superficie compuesto',
    pt: 'Tecido de superfície composto', id_lang: 'Kain permukaan komposit', ru: 'Композитная поверхностная ткань', fr: 'Tissu de surface composite', ar: 'نسيج سطحي مركب', ja: ''
  },
  '复合面布': {
    cn: '复合面布', en: 'Composite fabric', th: 'ผ้าคอมโพสิต', vn: 'Vải tổng hợp', es: 'Tejido compuesto',
    pt: 'Tecido composto', id_lang: 'Kain komposit', ru: 'Композитная ткань', fr: 'Tissu composite', ar: 'نسيج مركب', ja: ''
  },
  '复合面料': {
    cn: '复合面料', en: 'Composite fabrics', th: 'ผ้าคอมโพสิต', vn: 'Vải tổng hợp', es: 'tejidos compuestos',
    pt: 'Tecidos compostos', id_lang: 'Kain komposit', ru: 'Композитные ткани', fr: 'tissus composites', ar: 'الأقمشة المركبة', ja: ''
  },
  '夏季': {
    cn: '夏季', en: 'Summer', th: 'ฤดูร้อน', vn: 'Mùa hè', es: 'de verano',
    pt: 'Verão', id_lang: 'Musim Panas', ru: 'Летний', fr: 'Été', ar: 'صيفي', ja: ''
  },
  '夏季30度机洗': {
    cn: '夏季30度机洗', en: 'Summer Machine Wash at 30°C', th: 'ฤดูร้อน ซักเครื่อง 30°C', vn: 'Mùa hè Giặt máy 30°C', es: 'Verano Lavado a máquina a 30°C',
    pt: 'Verão Lavagem à máquina a 30°C', id_lang: 'Musim Panas Cuci Mesin 30°C', ru: 'Летняя Машинная стирка при 30°C', fr: 'Été Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة صيفي', ja: ''
  },
  '夏季40度机洗': {
    cn: '夏季40度机洗', en: 'Summer Machine Wash at 40°C', th: 'ฤดูร้อน ซักเครื่อง 40°C', vn: 'Mùa hè Giặt máy 40°C', es: 'Verano Lavado a máquina a 40°C',
    pt: 'Verão Lavagem à máquina a 40°C', id_lang: 'Musim Panas Cuci Mesin 40°C', ru: 'Летняя Машинная стирка при 40°C', fr: 'Été Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة صيفي', ja: ''
  },
  '夏季不可干洗': {
    cn: '夏季不可干洗', en: 'Summer Do Not Dry Clean', th: 'ฤดูร้อน ห้ามซักแห้ง', vn: 'Mùa hè Không giặt khô', es: 'Verano No lavar en seco',
    pt: 'Verão Não lavar a seco', id_lang: 'Musim Panas Jangan Dry Clean', ru: 'Летняя Не подвергать химчистке', fr: 'Été Ne pas nettoyer à sec', ar: 'لا تنظف جافاً صيفي', ja: ''
  },
  '夏季不可漂白': {
    cn: '夏季不可漂白', en: 'Summer Do Not Bleach', th: 'ฤดูร้อน ห้ามฟอกขาว', vn: 'Mùa hè Không tẩy trắng', es: 'Verano No blanquear',
    pt: 'Verão Não usar alvejante', id_lang: 'Musim Panas Jangan Diputihkan', ru: 'Летняя Не отбеливать', fr: 'Été Ne pas blanchir', ar: 'لا تبيض صيفي', ja: ''
  },
  '夏季不可烘干': {
    cn: '夏季不可烘干', en: 'Summer Do Not Tumble Dry', th: 'ฤดูร้อน ห้ามอบแห้ง', vn: 'Mùa hè Không sấy khô', es: 'Verano No secar en secadora',
    pt: 'Verão Não secar em secadora', id_lang: 'Musim Panas Jangan Dikeringkan', ru: 'Летняя Не сушить в машине', fr: 'Été Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف صيفي', ja: ''
  },
  '夏季亚麻': {
    cn: '夏季亚麻', en: 'Summer Linen', th: 'ฤดูร้อน ผ้าลินิน', vn: 'Mùa hè Vải lanh', es: 'Verano Lino',
    pt: 'Verão Linho', id_lang: 'Musim Panas Linen', ru: 'Летняя Лен', fr: 'Été Lin', ar: 'كتان صيفي', ja: ''
  },
  '夏季低温熨烫': {
    cn: '夏季低温熨烫', en: 'Summer Low Temperature Ironing', th: 'ฤดูร้อน รีดอุณหภูมิต่ำ', vn: 'Mùa hè Ủi nhiệt độ thấp', es: 'Verano Planchar a baja temperatura',
    pt: 'Verão Passar a baixa temperatura', id_lang: 'Musim Panas Setrika Suhu Rendah', ru: 'Летняя Глажка при низкой температуре', fr: 'Été Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة صيفي', ja: ''
  },
  '夏季再生涤纶': {
    cn: '夏季再生涤纶', en: 'Summer Recycled Polyester', th: 'ฤดูร้อน โพลีเอสเตอร์รีไซเคิล', vn: 'Mùa hè Polyester tái chế', es: 'Verano Poliéster reciclado',
    pt: 'Verão Poliéster reciclado', id_lang: 'Musim Panas Poliester Daur Ulang', ru: 'Летняя Переработанный полиэстер', fr: 'Été Polyester recyclé', ar: 'بوليستر معاد التدوير صيفي', ja: ''
  },
  '夏季冷水洗': {
    cn: '夏季冷水洗', en: 'Summer Cold Water Wash', th: 'ฤดูร้อน ซักน้ำเย็น', vn: 'Mùa hè Giặt nước lạnh', es: 'Verano Lavado en agua fría',
    pt: 'Verão Lavagem em água fria', id_lang: 'Musim Panas Cuci Air Dingin', ru: 'Летняя Стирка в холодной воде', fr: 'Été Lavage à l\'eau froide', ar: 'غسيل بالماء البارد صيفي', ja: ''
  },
  '夏季天丝': {
    cn: '夏季天丝', en: 'Summer Tencel', th: 'ฤดูร้อน เทนเซล', vn: 'Mùa hè Tencel', es: 'Verano Tencel',
    pt: 'Verão Tencel', id_lang: 'Musim Panas Tencel', ru: 'Летняя Тенсел', fr: 'Été Tencel', ar: 'تنسل صيفي', ja: ''
  },
  '夏季尼龙': {
    cn: '夏季尼龙', en: 'Summer Nylon', th: 'ฤดูร้อน ไนลอน', vn: 'Mùa hè Nylon', es: 'Verano Nailon',
    pt: 'Verão Nylon', id_lang: 'Musim Panas Nilon', ru: 'Летняя Нейлон', fr: 'Été Nylon', ar: 'نايلون صيفي', ja: ''
  },
  '夏季平铺晾干': {
    cn: '夏季平铺晾干', en: 'Summer Lay Flat to Dry', th: 'ฤดูร้อน ตากแห้งแบบแบน', vn: 'Mùa hè Phơi phẳng', es: 'Verano Secar en plano',
    pt: 'Verão Secar na horizontal', id_lang: 'Musim Panas Keringkan Datar', ru: 'Летняя Сушить в расправленном виде', fr: 'Été Sécher à plat', ar: 'تجفيف مسطح صيفي', ja: ''
  },
  '夏季悬挂晾干': {
    cn: '夏季悬挂晾干', en: 'Summer Hang Dry', th: 'ฤดูร้อน แขวนตากแห้ง', vn: 'Mùa hè Phơi treo', es: 'Verano Secar colgado',
    pt: 'Verão Secar pendurado', id_lang: 'Musim Panas Gantung Kering', ru: 'Летняя Сушить в подвешенном состоянии', fr: 'Été Sécher suspendu', ar: 'تجفيف بالتعليق صيفي', ja: ''
  },
  '夏季手洗': {
    cn: '夏季手洗', en: 'Summer Hand Wash', th: 'ฤดูร้อน ซักมือ', vn: 'Mùa hè Giặt tay', es: 'Verano Lavado a mano',
    pt: 'Verão Lavagem à mão', id_lang: 'Musim Panas Cuci Tangan', ru: 'Летняя Ручная стирка', fr: 'Été Lavage à la main', ar: 'غسيل يدوي صيفي', ja: ''
  },
  '夏季有机棉': {
    cn: '夏季有机棉', en: 'Summer Organic Cotton', th: 'ฤดูร้อน ผ้าฝ้ายออร์แกนิก', vn: 'Mùa hè Cotton hữu cơ', es: 'Verano Algodón orgánico',
    pt: 'Verão Algodão orgânico', id_lang: 'Musim Panas Katun Organik', ru: 'Летняя Органический хлопок', fr: 'Été Coton biologique', ar: 'قطن عضوي صيفي', ja: ''
  },
  '夏季机洗': {
    cn: '夏季机洗', en: 'Summer Machine Wash', th: 'ฤดูร้อน ซักเครื่อง', vn: 'Mùa hè Giặt máy', es: 'Verano Lavado a máquina',
    pt: 'Verão Lavagem à máquina', id_lang: 'Musim Panas Cuci Mesin', ru: 'Летняя Машинная стирка', fr: 'Été Lavage en machine', ar: 'غسيل آلي صيفي', ja: ''
  },
  '夏季棉': {
    cn: '夏季棉', en: 'Summer Cotton', th: 'ฤดูร้อน ผ้าฝ้าย', vn: 'Mùa hè Cotton', es: 'Verano Algodón',
    pt: 'Verão Algodão', id_lang: 'Musim Panas Katun', ru: 'Летняя Хлопок', fr: 'Été Coton', ar: 'قطن صيفي', ja: ''
  },
  '夏季氨纶': {
    cn: '夏季氨纶', en: 'Summer Spandex', th: 'ฤดูร้อน สแปนเด็กซ์', vn: 'Mùa hè Spandex', es: 'Verano Elastano',
    pt: 'Verão Elastano', id_lang: 'Musim Panas Spandex', ru: 'Летняя Спандекс', fr: 'Été Élasthanne', ar: 'سباندكس صيفي', ja: ''
  },
  '夏季涤纶': {
    cn: '夏季涤纶', en: 'Summer Polyester', th: 'ฤดูร้อน โพลีเอสเตอร์', vn: 'Mùa hè Polyester', es: 'Verano Poliéster',
    pt: 'Verão Poliéster', id_lang: 'Musim Panas Poliester', ru: 'Летняя Полиэстер', fr: 'Été Polyester', ar: 'بوليستر صيفي', ja: ''
  },
  '夏季温水洗': {
    cn: '夏季温水洗', en: 'Summer Warm Water Wash', th: 'ฤดูร้อน ซักน้ำอุ่น', vn: 'Mùa hè Giặt nước ấm', es: 'Verano Lavado en agua tibia',
    pt: 'Verão Lavagem em água morna', id_lang: 'Musim Panas Cuci Air Hangat', ru: 'Летняя Стирка в теплой воде', fr: 'Été Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ صيفي', ja: ''
  },
  '夏季真丝': {
    cn: '夏季真丝', en: 'Summer Pure Silk', th: 'ฤดูร้อน ผ้าไหมแท้', vn: 'Mùa hè Lụa thật', es: 'Verano Seda pura',
    pt: 'Verão Seda pura', id_lang: 'Musim Panas Sutra Asli', ru: 'Летняя Натуральный шелк', fr: 'Été Soie naturelle', ar: 'حرير طبيعي صيفي', ja: ''
  },
  '夏季竹纤维': {
    cn: '夏季竹纤维', en: 'Summer Bamboo Fiber', th: 'ฤดูร้อน เส้นใยไผ่', vn: 'Mùa hè Sợi tre', es: 'Verano Fibra de bambú',
    pt: 'Verão Fibra de bambu', id_lang: 'Musim Panas Serat Bambu', ru: 'Летняя Бамбуковое волокно', fr: 'Été Fibre de bambou', ar: 'ألياف الخيزران صيفي', ja: ''
  },
  '夏季粘纤': {
    cn: '夏季粘纤', en: 'Summer Viscose', th: 'ฤดูร้อน วิสโคส', vn: 'Mùa hè Viscose', es: 'Verano Viscosa',
    pt: 'Verão Viscose', id_lang: 'Musim Panas Viskosa', ru: 'Летняя Вискоза', fr: 'Été Viscose', ar: 'فيسكوز صيفي', ja: ''
  },
  '夏季精梳棉': {
    cn: '夏季精梳棉', en: 'Summer Combed Cotton', th: 'ฤดูร้อน ผ้าฝ้ายหวี', vn: 'Mùa hè Cotton chải', es: 'Verano Algodón peinado',
    pt: 'Verão Algodão penteado', id_lang: 'Musim Panas Katun Sisir', ru: 'Летняя Гребенной хлопок', fr: 'Été Coton peigné', ar: 'قطن ممشط صيفي', ja: ''
  },
  '夏季羊毛': {
    cn: '夏季羊毛', en: 'Summer Wool', th: 'ฤดูร้อน ขนแกะ', vn: 'Mùa hè Len', es: 'Verano Lana',
    pt: 'Verão Lã', id_lang: 'Musim Panas Wol', ru: 'Летняя Шерсть', fr: 'Été Laine', ar: 'صوف صيفي', ja: ''
  },
  '夏季羊绒': {
    cn: '夏季羊绒', en: 'Summer Cashmere', th: 'ฤดูร้อน แคชเมียร์', vn: 'Mùa hè Cashmere', es: 'Verano Cachemira',
    pt: 'Verão Caxemira', id_lang: 'Musim Panas Kasmir', ru: 'Летняя Кашемир', fr: 'Été Cachemire', ar: 'كشمير صيفي', ja: ''
  },
  '夏季腈纶': {
    cn: '夏季腈纶', en: 'Summer Acrylic', th: 'ฤดูร้อน อะคริลิก', vn: 'Mùa hè Acrylic', es: 'Verano Acrílico',
    pt: 'Verão Acrílico', id_lang: 'Musim Panas Akrilik', ru: 'Летняя Акрил', fr: 'Été Acrylique', ar: 'أكريليك صيفي', ja: ''
  },
  '夏季莫代尔': {
    cn: '夏季莫代尔', en: 'Summer Modal', th: 'ฤดูร้อน โมดอล', vn: 'Mùa hè Modal', es: 'Verano Modal',
    pt: 'Verão Modal', id_lang: 'Musim Panas Modal', ru: 'Летняя Модал', fr: 'Été Modal', ar: 'مودال صيفي', ja: ''
  },
  '夏季莱赛尔': {
    cn: '夏季莱赛尔', en: 'Summer Lyocell', th: 'ฤดูร้อน ไลโอเซลล์', vn: 'Mùa hè Lyocell', es: 'Verano Lyocell',
    pt: 'Verão Lyocell', id_lang: 'Musim Panas Lyocell', ru: 'Летняя Лиоцелл', fr: 'Été Lyocell', ar: 'ليوسيل صيفي', ja: ''
  },
  '夏季锦纶': {
    cn: '夏季锦纶', en: 'Summer Nylon', th: 'ฤดูร้อน ไนลอน', vn: 'Mùa hè Nylon', es: 'Verano Nailon',
    pt: 'Verão Nylon', id_lang: 'Musim Panas Nilon', ru: 'Летняя Нейлон', fr: 'Été Nylon', ar: 'نايلون صيفي', ja: ''
  },
  '夏季马海毛': {
    cn: '夏季马海毛', en: 'Summer Mohair', th: 'ฤดูร้อน โมแฮร์', vn: 'Mùa hè Mohair', es: 'Verano Mohair',
    pt: 'Verão Mohair', id_lang: 'Musim Panas Mohair', ru: 'Летняя Мохер', fr: 'Été Mohair', ar: 'موهير صيفي', ja: ''
  },
  '外件': {
    cn: '外件', en: 'External', th: 'ภายนอก', vn: 'Bên ngoài', es: 'Externo',
    pt: 'Externo', id_lang: 'Luar', ru: 'Внешний', fr: 'Externe', ar: 'خارجي', ja: ''
  },
  '外件内层面料': {
    cn: '外件内层面料', en: 'Outer and inner fabric', th: 'ผ้าชั้นนอกและชั้นใน', vn: 'Vải bên ngoài và vải bên trong', es: 'Tejido exterior e interior',
    pt: 'Tecido externo e interno', id_lang: 'Kain luar dan dalam', ru: 'Внешняя и внутренняя ткань', fr: 'Tissu extérieur et intérieur', ar: 'القماش الخارجي والداخلي', ja: ''
  },
  '外件后领贴': {
    cn: '外件后领贴', en: 'Outer collar sticker', th: 'สติกเกอร์ปกเสื้อด้านนอก', vn: 'Nhãn dán cổ áo ngoài', es: 'Pegatina del cuello exterior',
    pt: 'adesivo externo da gola', id_lang: 'Stiker kerah luar', ru: 'Наклейка на внешний воротник', fr: 'autocollant extérieur', ar: 'ملصق الياقة الخارجية', ja: ''
  },
  '外件外层面料': {
    cn: '外件外层面料', en: 'Outer fabric of outer part', th: 'ผ้าชั้นนอกของส่วนนอก', vn: 'Vải ngoài của phần ngoài', es: 'Tejido exterior de la parte exterior',
    pt: 'Tecido externo da parte externa', id_lang: 'Kain luar bagian luar', ru: 'Внешняя ткань внешней части', fr: 'Tissu extérieur de la partie extérieure', ar: 'النسيج الخارجي للجزء الخارجي', ja: ''
  },
  '外件大身': {
    cn: '外件大身', en: 'External body', th: 'ตัวถังภายนอก', vn: 'Thân thể bên ngoài', es: 'Cuerpo externo',
    pt: 'Corpo externo', id_lang: 'Badan luar', ru: 'Внешнее тело', fr: 'Corps externe', ar: 'جسم خارجي', ja: ''
  },
  '外件大身面料': {
    cn: '外件大身面料', en: 'Outer body fabric', th: 'ผ้าชั้นนอก', vn: 'Vải thân ngoài', es: 'Tejido exterior',
    pt: 'Tecido externo', id_lang: 'Kain badan luar', ru: 'Внешняя ткань корпуса', fr: 'Tissu extérieur', ar: 'قماش الجسم الخارجي', ja: ''
  },
  '外件拼料': {
    cn: '外件拼料', en: 'External component assembly', th: 'การประกอบชิ้นส่วนภายนอก', vn: 'Lắp ráp linh kiện bên ngoài', es: 'Ensamblaje de componentes externos',
    pt: 'Montagem de componentes externos', id_lang: 'Perakitan komponen eksternal', ru: 'Сборка внешних компонентов', fr: 'Assemblage de composants externes', ar: 'تجميع المكونات الخارجية', ja: ''
  },
  '外件浅黄色纱': {
    cn: '外件浅黄色纱', en: 'outer layer: light yellow yarn', th: 'ชั้นนอก: เส้นด้ายสีเหลืองอ่อน', vn: 'lớp ngoài: sợi màu vàng nhạt', es: 'capa exterior: hilo amarillo claro',
    pt: 'camada externa: fio amarelo claro', id_lang: 'lapisan luar: benang kuning muda', ru: 'внешний слой: светло-желтая пряжа', fr: 'couche extérieure : fil jaune clair', ar: 'الطبقة الخارجية: خيوط صفراء فاتحة', ja: ''
  },
  '外件白色长毛纱': {
    cn: '外件白色长毛纱', en: 'White long-pile yarn outer garment', th: 'เส้นด้ายสีขาวด้านนอกแบบขนยาว', vn: 'Sợi lông dài màu trắng bên ngoài', es: 'Prenda exterior de hilo blanco de pelo largo',
    pt: 'peça de roupa exterior branca de fio de pelo comprido', id_lang: 'Pakaian luar dari benang berbulu panjang berwarna putih', ru: 'Верхняя одежда из белой длинноворсовой пряжи', fr: 'Fil extérieur blanc à poils longs', ar: 'ملابس خارجية من خيوط بيضاء طويلة الوبر', ja: ''
  },
  '外件红色纱': {
    cn: '外件红色纱', en: 'Red yarn outer garment', th: 'เสื้อคลุมไหมพรมสีแดง', vn: 'Áo khoác ngoài bằng sợi len đỏ', es: 'Prenda exterior de hilo rojo',
    pt: 'Casaco de lã vermelha', id_lang: 'Pakaian luar dari benang merah', ru: 'Верхняя одежда из красной пряжи', fr: 'Vêtement extérieur en fil rouge', ar: 'ثوب خارجي من خيوط حمراء', ja: ''
  },
  '外件绿色纱': {
    cn: '外件绿色纱', en: 'Outer green yarn', th: 'เส้นด้ายสีเขียวด้านนอก', vn: 'Sợi len màu xanh lá cây bên ngoài', es: 'Hilo verde exterior',
    pt: 'fio verde externo', id_lang: 'Benang hijau luar', ru: 'Внешняя зеленая пряжа', fr: 'Fil vert extérieur', ar: 'خيوط خارجية خضراء', ja: ''
  },
  '外件花色纱': {
    cn: '外件花色纱', en: 'Outer fabric patterned yarn', th: 'เส้นด้ายลายผ้าชั้นนอก', vn: 'Sợi vải ngoài có hoa văn', es: 'Tejido exterior con hilo estampado',
    pt: 'Fio estampado no tecido externo', id_lang: 'Kain luar dengan benang bermotif', ru: 'Внешняя ткань, узорчатая пряжа', fr: 'fil à motifs pour le tissu extérieur', ar: 'خيوط منقوشة للنسيج الخارجي', ja: ''
  },
  '外件袖口': {
    cn: '外件袖口', en: 'Outer cuffs', th: 'ข้อมือนอก', vn: 'Cổ tay áo ngoài', es: 'Puños exteriores',
    pt: 'Punhos externos', id_lang: 'Manset luar', ru: 'Внешние манжеты', fr: 'Poignets extérieurs', ar: 'الأساور الخارجية', ja: ''
  },
  '外件袖子': {
    cn: '外件袖子', en: 'Outer sleeves', th: 'ปลอกหุ้มด้านนอก', vn: 'Tay áo ngoài', es: 'Mangas exteriores',
    pt: 'Mangas externas', id_lang: 'Lengan luar', ru: 'Внешние рукава', fr: 'Manches extérieures', ar: 'الأكمام الخارجية', ja: ''
  },
  '外件袖子填充物': {
    cn: '外件袖子填充物', en: 'Outer sleeve padding', th: 'แผ่นรองแขนเสื้อด้านนอก', vn: 'Lớp đệm tay áo bên ngoài', es: 'Relleno exterior de la manga',
    pt: 'Acolchoamento da manga externa', id_lang: 'Bantalan lengan luar', ru: 'Внешняя подкладка рукава', fr: 'Rembourrage de la manche extérieure', ar: 'حشوة الكم الخارجي', ja: ''
  },
  '外件配料': {
    cn: '外件配料', en: 'External components', th: 'ส่วนประกอบภายนอก', vn: 'Các thành phần bên ngoài', es: 'Componentes externos',
    pt: 'Componentes externos', id_lang: 'Komponen eksternal', ru: 'Внешние компоненты', fr: 'Composants externes', ar: 'المكونات الخارجية', ja: ''
  },
  '外件里料': {
    cn: '外件里料', en: 'Outer and inner materials', th: 'วัสดุภายนอกและภายใน', vn: 'Vật liệu bên ngoài và bên trong', es: 'Materiales exteriores e interiores',
    pt: 'Materiais externos e internos', id_lang: 'Bahan luar dan dalam', ru: 'Внешние и внутренние материалы', fr: 'Matériaux extérieurs et intérieurs', ar: 'المواد الخارجية والداخلية', ja: ''
  },
  '外件面料': {
    cn: '外件面料', en: 'Outer fabric', th: 'ผ้าชั้นนอก', vn: 'Vải ngoài', es: 'Tejido exterior',
    pt: 'Tecido exterior', id_lang: 'Kain luar', ru: 'Внешняя ткань', fr: 'Tissu extérieur', ar: 'القماش الخارجي', ja: ''
  },
  '外件领子': {
    cn: '外件领子', en: 'Outer collar', th: 'ปกนอก', vn: 'Cổ áo ngoài', es: 'Cuello exterior',
    pt: 'Gola externa', id_lang: 'Kerah luar', ru: 'Внешний воротник', fr: 'Col extérieur', ar: 'الياقة الخارجية', ja: ''
  },
  '外件黑色': {
    cn: '外件黑色', en: 'Black exterior', th: 'ภายนอกสีดำ', vn: 'Ngoại thất màu đen', es: 'Exterior negro',
    pt: 'exterior preto', id_lang: 'Eksterior hitam', ru: 'Черный экстерьер', fr: 'Extérieur noir', ar: 'هيكل خارجي أسود', ja: ''
  },
  '外套里料': {
    cn: '外套里料', en: 'Outerwear lining', th: 'ซับในด้านนอก', vn: 'Lớp lót bên ngoài', es: 'Forro para prendas exteriores',
    pt: 'Forro de roupa exterior', id_lang: 'Lapisan pakaian luar', ru: 'Подкладка верхней одежды', fr: 'Doublure d&#39;extérieur', ar: 'بطانة الملابس الخارجية', ja: ''
  },
  '外套面料': {
    cn: '外套面料', en: 'Outerwear fabric', th: 'ผ้าสำหรับทำเสื้อนอก', vn: 'Vải ngoài', es: 'Tejido para prendas de abrigo',
    pt: 'Tecido para roupas externas', id_lang: 'Kain untuk pakaian luar', ru: 'Ткань для верхней одежды', fr: 'Tissu d&#39;extérieur', ar: 'قماش الملابس الخارجية', ja: ''
  },
  '外层面料': {
    cn: '外层面料', en: 'Outer fabric', th: 'ผ้าชั้นนอก', vn: 'Vải ngoài', es: 'Tejido exterior',
    pt: 'Tecido exterior', id_lang: 'Kain luar', ru: 'Внешняя ткань', fr: 'Tissu extérieur', ar: 'القماش الخارجي', ja: ''
  },
  '外披面料': {
    cn: '外披面料', en: 'Outer fabric', th: 'ผ้าชั้นนอก', vn: 'Vải ngoài', es: 'Tejido exterior',
    pt: 'Tecido exterior', id_lang: 'Kain luar', ru: 'Внешняя ткань', fr: 'Tissu extérieur', ar: 'القماش الخارجي', ja: ''
  },
  '外衣': {
    cn: '外衣', en: 'coat', th: 'เสื้อโค้ท', vn: 'áo choàng', es: 'abrigo',
    pt: 'casaco', id_lang: 'mantel', ru: 'пальто', fr: 'manteau', ar: 'معطف', ja: ''
  },
  '外衣面料': {
    cn: '外衣面料', en: 'Outerwear fabric', th: 'ผ้าสำหรับทำเสื้อนอก', vn: 'Vải ngoài', es: 'Tejido para prendas de abrigo',
    pt: 'Tecido para roupas externas', id_lang: 'Kain untuk pakaian luar', ru: 'Ткань для верхней одежды', fr: 'Tissu d&#39;extérieur', ar: 'قماش الملابس الخارجية', ja: ''
  },
  '外衫面料': {
    cn: '外衫面料', en: 'outer fabric', th: 'ผ้าชั้นนอก', vn: 'vải ngoài', es: 'tejido exterior',
    pt: 'tecido externo', id_lang: 'kain luar', ru: 'внешняя ткань', fr: 'tissu extérieur', ar: 'القماش الخارجي', ja: ''
  },
  '外裙里料': {
    cn: '外裙里料', en: 'outer skirt lining', th: 'ซับในกระโปรงชั้นนอก', vn: 'lớp lót váy ngoài', es: 'forro exterior de la falda',
    pt: 'forro da saia externa', id_lang: 'lapisan rok luar', ru: 'внешняя подкладка юбки', fr: 'doublure de la jupe extérieure', ar: 'بطانة التنورة الخارجية', ja: ''
  },
  '外裙面料': {
    cn: '外裙面料', en: 'Outer skirt fabric', th: 'ผ้ากระโปรงชั้นนอก', vn: 'Vải váy ngoài', es: 'Tela de la falda exterior',
    pt: 'Tecido da saia externa', id_lang: 'Kain rok luar', ru: 'Ткань для верхней юбки', fr: 'Tissu de la jupe extérieure', ar: 'قماش التنورة الخارجية', ja: ''
  },
  '大号': {
    cn: '大号', en: 'Large (L)', th: 'ไซส์ใหญ่', vn: 'Cỡ L (Lớn)', es: 'Talla L (Grande)',
    pt: 'Tamanho L (G)', id_lang: 'Ukuran L (Besar)', ru: 'Размер L', fr: 'Taille L', ar: 'مقاس كبير', ja: ''
  },
  '大号(L)': {
    cn: '大号(L)', en: 'Large (L)', th: 'ไซส์ใหญ่ (L)', vn: 'Cỡ L', es: 'Talla L (Grande)',
    pt: 'Tamanho L (G)', id_lang: 'Ukuran L (Besar)', ru: 'Размер L', fr: 'Taille L (Grand)', ar: 'مقاس كبير (L)', ja: ''
  },
  '大码': {
    cn: '大码', en: 'Plus Size', th: 'พลัสไซส์', vn: 'Cỡ lớn (Plus Size)', es: 'Talla grande',
    pt: 'Tamanho Plus Size', id_lang: 'Ukuran Jumbo', ru: 'Plus size', fr: 'Grande taille', ar: 'مقاس كبير', ja: ''
  },
  '大红': {
    cn: '大红', en: 'Big Red', th: 'บิ๊กเรด', vn: 'Đỏ Lớn', es: 'Gran Rojo',
    pt: 'Grande Vermelho', id_lang: 'Si Merah Besar', ru: 'Большой Красный', fr: 'Grand Rouge', ar: 'بيج ريد', ja: ''
  },
  '大红条纹': {
    cn: '大红条纹', en: 'Big red stripes', th: 'แถบสีแดงขนาดใหญ่', vn: 'Sọc đỏ lớn', es: 'Grandes rayas rojas',
    pt: 'Grandes listras vermelhas', id_lang: 'Garis-garis merah besar', ru: 'Большие красные полосы', fr: 'Grandes rayures rouges', ar: 'خطوط حمراء كبيرة', ja: ''
  },
  '大红格纹': {
    cn: '大红格纹', en: 'Bright red plaid', th: 'ลายตารางสีแดงสดใส', vn: 'kẻ sọc đỏ tươi', es: 'Cuadros de color rojo brillante',
    pt: 'xadrez vermelho vivo', id_lang: 'Kotak-kotak merah terang', ru: 'Ярко-красная клетка', fr: 'Carreaux rouge vif', ar: 'كاروهات حمراء زاهية', ja: ''
  },
  '大红花纹': {
    cn: '大红花纹', en: 'Large red floral pattern', th: 'ลายดอกไม้สีแดงขนาดใหญ่', vn: 'Họa tiết hoa lớn màu đỏ', es: 'Gran estampado floral rojo',
    pt: 'Grande estampa floral vermelha', id_lang: 'Pola bunga merah besar', ru: 'Крупный красный цветочный узор', fr: 'Grand motif floral rouge', ar: 'نقش زهري أحمر كبير', ja: ''
  },
  '大红镶拼': {
    cn: '大红镶拼', en: 'Large red inlaid', th: 'ฝังลายสีแดงขนาดใหญ่', vn: 'lớn, khảm màu đỏ', es: 'Gran incrustación roja',
    pt: 'Grande incrustação vermelha', id_lang: 'Bertatahkan merah besar', ru: 'Большая красная инкрустация', fr: 'Grand rouge incrusté', ar: 'مرصع كبير باللون الأحمر', ja: ''
  },
  '大身': {
    cn: '大身', en: 'Big Body', th: 'ร่างใหญ่', vn: 'Thân hình to lớn', es: 'Cuerpo grande',
    pt: 'Corpo Grande', id_lang: 'Badan besar', ru: 'Большое тело', fr: 'Gros corps', ar: 'جسم كبير', ja: ''
  },
  '大身上拼': {
    cn: '大身上拼', en: 'large body piece', th: 'ชิ้นส่วนขนาดใหญ่', vn: 'mảnh thân lớn', es: 'pieza de cuerpo grande',
    pt: 'peça grande do corpo', id_lang: 'potongan tubuh besar', ru: 'большой фрагмент тела', fr: 'grande pièce de corps', ar: 'قطعة جسم كبيرة', ja: ''
  },
  '大身下拼': {
    cn: '大身下拼', en: 'Large body bottom piece', th: 'ชิ้นส่วนด้านล่างขนาดใหญ่', vn: 'Phần thân dưới lớn', es: 'Pieza inferior del cuerpo grande',
    pt: 'peça inferior do corpo grande', id_lang: 'Bagian bawah badan yang besar', ru: 'Большая нижняя часть тела', fr: 'partie inférieure du corps large', ar: 'قطعة سفلية كبيرة للجسم', ja: ''
  },
  '大身下拼内层': {
    cn: '大身下拼内层', en: 'The inner layer of the main body', th: 'ชั้นในสุดของร่างกายหลัก', vn: 'Lớp bên trong của phần thân chính', es: 'La capa interna del cuerpo principal',
    pt: 'A camada interna do corpo principal', id_lang: 'Lapisan dalam dari badan utama', ru: 'Внутренний слой основного корпуса', fr: 'La couche interne du corps principal', ar: 'الطبقة الداخلية للجسم الرئيسي', ja: ''
  },
  '大身下拼外层': {
    cn: '大身下拼外层', en: 'The outer layer of the main body', th: 'ชั้นนอกสุดของร่างกายหลัก', vn: 'Lớp ngoài của phần thân chính', es: 'La capa exterior del cuerpo principal',
    pt: 'A camada externa do corpo principal', id_lang: 'Lapisan terluar dari badan utama', ru: 'Внешний слой основного тела', fr: 'La couche externe du corps principal', ar: 'الطبقة الخارجية للجسم الرئيسي', ja: ''
  },
  '大身侧拼': {
    cn: '大身侧拼', en: 'Side panel of the main body', th: 'แผงด้านข้างของตัวเครื่องหลัก', vn: 'Tấm ốp bên của thân chính', es: 'Panel lateral del cuerpo principal',
    pt: 'Painel lateral do corpo principal', id_lang: 'Panel samping bodi utama', ru: 'Боковая панель основного корпуса', fr: 'Panneau latéral du corps principal', ar: 'اللوحة الجانبية للهيكل الرئيسي', ja: ''
  },
  '大身内层': {
    cn: '大身内层', en: 'Inner layer of the body', th: 'ชั้นในของร่างกาย', vn: 'Lớp trong của cơ thể', es: 'Capa interna del cuerpo',
    pt: 'Camada interna do corpo', id_lang: 'Lapisan dalam tubuh', ru: 'Внутренний слой тела', fr: 'Couche interne du corps', ar: 'الطبقة الداخلية للجسم', ja: ''
  },
  '大身填充物': {
    cn: '大身填充物', en: 'Body padding', th: 'แผ่นรองร่างกาย', vn: 'Đệm thân', es: 'Relleno corporal',
    pt: 'Acolchoamento corporal', id_lang: 'Bantalan tubuh', ru: 'Накладки на тело', fr: 'Rembourrage corporel', ar: 'حشوة الجسم', ja: ''
  },
  '大身外层': {
    cn: '大身外层', en: 'outer layer of the body', th: 'ชั้นนอกของร่างกาย', vn: 'lớp ngoài của cơ thể', es: 'capa exterior del cuerpo',
    pt: 'camada externa do corpo', id_lang: 'lapisan luar tubuh', ru: 'наружный слой тела', fr: 'couche externe du corps', ar: 'الطبقة الخارجية للجسم', ja: ''
  },
  '大身成分': {
    cn: '大身成分', en: 'Body composition', th: 'องค์ประกอบของร่างกาย', vn: 'Thành phần cơ thể', es: 'composición corporal',
    pt: 'Composição corporal', id_lang: 'Komposisi tubuh', ru: 'состав тела', fr: 'composition corporelle', ar: 'تكوين الجسم', ja: ''
  },
  '大身里': {
    cn: '大身里', en: 'Big body inside', th: 'ร่างใหญ่ข้างใน', vn: 'Thân hình to lớn bên trong', es: 'Cuerpo grande en el interior',
    pt: 'Corpo grande dentro', id_lang: 'Tubuh besar di dalam', ru: 'Большое тело внутри', fr: 'Gros corps à l&#39;intérieur', ar: 'جسم ضخم في الداخل', ja: ''
  },
  '大身里布': {
    cn: '大身里布', en: 'Large body lining', th: 'ซับในร่างกายขนาดใหญ่', vn: 'Lớp lót thân lớn', es: 'Revestimiento de carrocería grande',
    pt: 'Forro corporal grande', id_lang: 'Lapisan tubuh besar', ru: 'Большая подкладка тела', fr: 'Grande doublure de corps', ar: 'بطانة جسم كبيرة', ja: ''
  },
  '大身里料': {
    cn: '大身里料', en: 'Large body lining', th: 'ซับในร่างกายขนาดใหญ่', vn: 'Lớp lót thân lớn', es: 'Revestimiento de carrocería grande',
    pt: 'Forro corporal grande', id_lang: 'Lapisan tubuh besar', ru: 'Большая подкладка тела', fr: 'Grande doublure de corps', ar: 'بطانة جسم كبيرة', ja: ''
  },
  '大身面料': {
    cn: '大身面料', en: 'Body fabric', th: 'เนื้อผ้าของร่างกาย', vn: 'Vải thân', es: 'Tejido del cuerpo',
    pt: 'Tecido corporal', id_lang: 'Kain badan', ru: 'Ткань корпуса', fr: 'Tissu du corps', ar: 'نسيج الجسم', ja: ''
  },
  '大麻': {
    cn: '大麻', en: 'marijuana', th: 'กัญชา', vn: 'cần sa', es: 'marijuana',
    pt: 'maconha', id_lang: 'ganja', ru: 'марихуана', fr: 'marijuana', ar: 'قنب هندي', ja: ''
  },
  '大麻/汉麻': {
    cn: '大麻/汉麻', en: 'Hemp', th: 'ใยกัญชง', vn: 'Gai / Hemp', es: 'Cáñamo',
    pt: 'Cânhamo', id_lang: 'Rami / Hemp', ru: 'Конопля', fr: 'Chanvre', ar: 'قنب', ja: ''
  },
  '大麻纤维': {
    cn: '大麻纤维', en: 'Hemp Fiber', th: 'ใยกัญชง', vn: 'Sợi gai dầu', es: 'Fibra de cáñamo',
    pt: 'Fibra de cânhamo', id_lang: 'Serat rami hemp', ru: 'Конопляное волокно', fr: 'Fibre de chanvre', ar: 'ألياف القنب', ja: ''
  },
  '天丝': {
    cn: '天丝', en: 'Tencel', th: 'เทนเซล', vn: 'Tencel', es: 'Tencel',
    pt: 'Tencel', id_lang: 'Tencel', ru: 'Тенсел', fr: 'Tencel', ar: 'تينسل', ja: ''
  },
  '天丝/莱赛尔': {
    cn: '天丝/莱赛尔', en: 'Tencel / Lyocell', th: 'เทนเซล / ไลโอเซลล์', vn: 'Tencel / Lyocell', es: 'Tencel / Lyocell',
    pt: 'Tencel / Liocel', id_lang: 'Tencel / Lyocell', ru: 'Тенсель / Лиоцелл', fr: 'Tencel / Lyocell', ar: 'تينسيل / لايوسيل', ja: ''
  },
  '天丝棉': {
    cn: '天丝棉', en: 'Tencel cotton', th: 'ผ้าฝ้ายเทนเซล', vn: 'Bông Tencel', es: 'Algodón Tencel',
    pt: 'Algodão Tencel', id_lang: 'Katun Tencel', ru: 'хлопок Тенсел', fr: 'Coton Tencel', ar: 'قطن تينسل', ja: ''
  },
  '天丝涤混纺': {
    cn: '天丝涤混纺', en: 'Tencel polyester blend', th: 'ส่วนผสมโพลีเอสเตอร์เทนเซล', vn: 'Hỗn hợp polyester Tencel', es: 'Mezcla de poliéster Tencel',
    pt: 'Mistura de poliéster Tencel', id_lang: 'Campuran poliester Tencel', ru: 'Смесь полиэстера и тенсела', fr: 'Mélange de polyester Tencel', ar: 'مزيج من البوليستر والتنسل', ja: ''
  },
  '天丝混纺': {
    cn: '天丝混纺', en: 'Tencel blend', th: 'ส่วนผสมเทนเซล', vn: 'Hỗn hợp Tencel', es: 'Mezcla de Tencel',
    pt: 'Mistura de Tencel', id_lang: 'Campuran Tencel', ru: 'Смесь тенсела', fr: 'Mélange de Tencel', ar: 'مزيج تينسل', ja: ''
  },
  '天丝罗马': {
    cn: '天丝罗马', en: 'Tensil Rome', th: 'เทนซิล โรม', vn: 'Tensil Rome', es: 'Tensil Roma',
    pt: 'Tensil Roma', id_lang: 'Tensil Roma', ru: 'Тенсил Рим', fr: 'Tensil Rome', ar: 'تينسيل روما', ja: ''
  },
  '天丝面料': {
    cn: '天丝面料', en: 'Tencel fabric', th: 'ผ้าเทนเซล', vn: 'Vải Tencel', es: 'Tejido Tencel',
    pt: 'Tecido Tencel', id_lang: 'Kain Tencel', ru: 'Ткань Тенсел', fr: 'Tissu Tencel', ar: 'قماش تينسل', ja: ''
  },
  '天丝麻': {
    cn: '天丝麻', en: 'Tencel', th: 'เทนเซล', vn: 'Tencel', es: 'Tencel',
    pt: 'Tencel', id_lang: 'Tencel', ru: 'Тенсел', fr: 'Tencel', ar: 'تينسل', ja: ''
  },
  '天蓝': {
    cn: '天蓝', en: 'Sky blue', th: 'สีฟ้าอ่อน', vn: 'màu xanh da trời', es: 'azul cielo',
    pt: 'Azul celeste', id_lang: 'Biru langit', ru: 'Небесно-голубой', fr: 'Bleu ciel', ar: 'أزرق سماوي', ja: ''
  },
  '天蓝镶拼': {
    cn: '天蓝镶拼', en: 'Sky blue inlaid', th: 'สีฟ้าอ่อนฝังลาย', vn: 'khảm màu xanh da trời', es: 'Incrustaciones de color azul cielo',
    pt: 'Azul celeste incrustado', id_lang: 'bertatahkan warna biru langit', ru: 'Небесно-голубая инкрустация', fr: 'bleu ciel incrusté', ar: 'مطعم باللون الأزرق السماوي', ja: ''
  },
  '夹层': {
    cn: '夹层', en: 'mezzanine', th: 'ชั้นลอย', vn: 'tầng lửng', es: 'entresuelo',
    pt: 'mezanino', id_lang: 'loteng tengah', ru: 'антресоль', fr: 'mezzanine', ar: 'طابق نصفي', ja: ''
  },
  '夹里': {
    cn: '夹里', en: 'Jiali', th: 'เจียลี่', vn: 'Jiali', es: 'Jiali',
    pt: 'Jiali', id_lang: 'Jiali', ru: 'Джиали', fr: 'Jiali', ar: 'جيالي', ja: ''
  },
  '女款': {
    cn: '女款', en: 'Women\'s', th: 'ผู้หญิง', vn: 'Nữ', es: 'de mujer',
    pt: 'Feminino', id_lang: 'Wanita', ru: 'Женский', fr: 'Femme', ar: 'نسائي', ja: ''
  },
  '女款30度机洗': {
    cn: '女款30度机洗', en: 'Women\'s Machine Wash at 30°C', th: 'ผู้หญิง ซักเครื่อง 30°C', vn: 'Nữ Giặt máy 30°C', es: 'Mujer Lavado a máquina a 30°C',
    pt: 'Feminino Lavagem à máquina a 30°C', id_lang: 'Wanita Cuci Mesin 30°C', ru: 'Женская Машинная стирка при 30°C', fr: 'Femme Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة نسائي', ja: ''
  },
  '女款40度机洗': {
    cn: '女款40度机洗', en: 'Women\'s Machine Wash at 40°C', th: 'ผู้หญิง ซักเครื่อง 40°C', vn: 'Nữ Giặt máy 40°C', es: 'Mujer Lavado a máquina a 40°C',
    pt: 'Feminino Lavagem à máquina a 40°C', id_lang: 'Wanita Cuci Mesin 40°C', ru: 'Женская Машинная стирка при 40°C', fr: 'Femme Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة نسائي', ja: ''
  },
  '女款不可干洗': {
    cn: '女款不可干洗', en: 'Women\'s Do Not Dry Clean', th: 'ผู้หญิง ห้ามซักแห้ง', vn: 'Nữ Không giặt khô', es: 'Mujer No lavar en seco',
    pt: 'Feminino Não lavar a seco', id_lang: 'Wanita Jangan Dry Clean', ru: 'Женская Не подвергать химчистке', fr: 'Femme Ne pas nettoyer à sec', ar: 'لا تنظف جافاً نسائي', ja: ''
  },
  '女款不可漂白': {
    cn: '女款不可漂白', en: 'Women\'s Do Not Bleach', th: 'ผู้หญิง ห้ามฟอกขาว', vn: 'Nữ Không tẩy trắng', es: 'Mujer No blanquear',
    pt: 'Feminino Não usar alvejante', id_lang: 'Wanita Jangan Diputihkan', ru: 'Женская Не отбеливать', fr: 'Femme Ne pas blanchir', ar: 'لا تبيض نسائي', ja: ''
  },
  '女款不可烘干': {
    cn: '女款不可烘干', en: 'Women\'s Do Not Tumble Dry', th: 'ผู้หญิง ห้ามอบแห้ง', vn: 'Nữ Không sấy khô', es: 'Mujer No secar en secadora',
    pt: 'Feminino Não secar em secadora', id_lang: 'Wanita Jangan Dikeringkan', ru: 'Женская Не сушить в машине', fr: 'Femme Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف نسائي', ja: ''
  },
  '女款亚麻': {
    cn: '女款亚麻', en: 'Women\'s Linen', th: 'ผู้หญิง ผ้าลินิน', vn: 'Nữ Vải lanh', es: 'Mujer Lino',
    pt: 'Feminino Linho', id_lang: 'Wanita Linen', ru: 'Женская Лен', fr: 'Femme Lin', ar: 'كتان نسائي', ja: ''
  },
  '女款低温熨烫': {
    cn: '女款低温熨烫', en: 'Women\'s Low Temperature Ironing', th: 'ผู้หญิง รีดอุณหภูมิต่ำ', vn: 'Nữ Ủi nhiệt độ thấp', es: 'Mujer Planchar a baja temperatura',
    pt: 'Feminino Passar a baixa temperatura', id_lang: 'Wanita Setrika Suhu Rendah', ru: 'Женская Глажка при низкой температуре', fr: 'Femme Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة نسائي', ja: ''
  },
  '女款再生涤纶': {
    cn: '女款再生涤纶', en: 'Women\'s Recycled Polyester', th: 'ผู้หญิง โพลีเอสเตอร์รีไซเคิล', vn: 'Nữ Polyester tái chế', es: 'Mujer Poliéster reciclado',
    pt: 'Feminino Poliéster reciclado', id_lang: 'Wanita Poliester Daur Ulang', ru: 'Женская Переработанный полиэстер', fr: 'Femme Polyester recyclé', ar: 'بوليستر معاد التدوير نسائي', ja: ''
  },
  '女款冷水洗': {
    cn: '女款冷水洗', en: 'Women\'s Cold Water Wash', th: 'ผู้หญิง ซักน้ำเย็น', vn: 'Nữ Giặt nước lạnh', es: 'Mujer Lavado en agua fría',
    pt: 'Feminino Lavagem em água fria', id_lang: 'Wanita Cuci Air Dingin', ru: 'Женская Стирка в холодной воде', fr: 'Femme Lavage à l\'eau froide', ar: 'غسيل بالماء البارد نسائي', ja: ''
  },
  '女款天丝': {
    cn: '女款天丝', en: 'Women\'s Tencel', th: 'ผู้หญิง เทนเซล', vn: 'Nữ Tencel', es: 'Mujer Tencel',
    pt: 'Feminino Tencel', id_lang: 'Wanita Tencel', ru: 'Женская Тенсел', fr: 'Femme Tencel', ar: 'تنسل نسائي', ja: ''
  },
  '女款尼龙': {
    cn: '女款尼龙', en: 'Women\'s Nylon', th: 'ผู้หญิง ไนลอน', vn: 'Nữ Nylon', es: 'Mujer Nailon',
    pt: 'Feminino Nylon', id_lang: 'Wanita Nilon', ru: 'Женская Нейлон', fr: 'Femme Nylon', ar: 'نايلون نسائي', ja: ''
  },
  '女款平铺晾干': {
    cn: '女款平铺晾干', en: 'Women\'s Lay Flat to Dry', th: 'ผู้หญิง ตากแห้งแบบแบน', vn: 'Nữ Phơi phẳng', es: 'Mujer Secar en plano',
    pt: 'Feminino Secar na horizontal', id_lang: 'Wanita Keringkan Datar', ru: 'Женская Сушить в расправленном виде', fr: 'Femme Sécher à plat', ar: 'تجفيف مسطح نسائي', ja: ''
  },
  '女款悬挂晾干': {
    cn: '女款悬挂晾干', en: 'Women\'s Hang Dry', th: 'ผู้หญิง แขวนตากแห้ง', vn: 'Nữ Phơi treo', es: 'Mujer Secar colgado',
    pt: 'Feminino Secar pendurado', id_lang: 'Wanita Gantung Kering', ru: 'Женская Сушить в подвешенном состоянии', fr: 'Femme Sécher suspendu', ar: 'تجفيف بالتعليق نسائي', ja: ''
  },
  '女款手洗': {
    cn: '女款手洗', en: 'Women\'s Hand Wash', th: 'ผู้หญิง ซักมือ', vn: 'Nữ Giặt tay', es: 'Mujer Lavado a mano',
    pt: 'Feminino Lavagem à mão', id_lang: 'Wanita Cuci Tangan', ru: 'Женская Ручная стирка', fr: 'Femme Lavage à la main', ar: 'غسيل يدوي نسائي', ja: ''
  },
  '女款有机棉': {
    cn: '女款有机棉', en: 'Women\'s Organic Cotton', th: 'ผู้หญิง ผ้าฝ้ายออร์แกนิก', vn: 'Nữ Cotton hữu cơ', es: 'Mujer Algodón orgánico',
    pt: 'Feminino Algodão orgânico', id_lang: 'Wanita Katun Organik', ru: 'Женская Органический хлопок', fr: 'Femme Coton biologique', ar: 'قطن عضوي نسائي', ja: ''
  },
  '女款机洗': {
    cn: '女款机洗', en: 'Women\'s Machine Wash', th: 'ผู้หญิง ซักเครื่อง', vn: 'Nữ Giặt máy', es: 'Mujer Lavado a máquina',
    pt: 'Feminino Lavagem à máquina', id_lang: 'Wanita Cuci Mesin', ru: 'Женская Машинная стирка', fr: 'Femme Lavage en machine', ar: 'غسيل آلي نسائي', ja: ''
  },
  '女款棉': {
    cn: '女款棉', en: 'Women\'s Cotton', th: 'ผู้หญิง ผ้าฝ้าย', vn: 'Nữ Cotton', es: 'Mujer Algodón',
    pt: 'Feminino Algodão', id_lang: 'Wanita Katun', ru: 'Женская Хлопок', fr: 'Femme Coton', ar: 'قطن نسائي', ja: ''
  },
  '女款氨纶': {
    cn: '女款氨纶', en: 'Women\'s Spandex', th: 'ผู้หญิง สแปนเด็กซ์', vn: 'Nữ Spandex', es: 'Mujer Elastano',
    pt: 'Feminino Elastano', id_lang: 'Wanita Spandex', ru: 'Женская Спандекс', fr: 'Femme Élasthanne', ar: 'سباندكس نسائي', ja: ''
  },
  '女款涤纶': {
    cn: '女款涤纶', en: 'Women\'s Polyester', th: 'ผู้หญิง โพลีเอสเตอร์', vn: 'Nữ Polyester', es: 'Mujer Poliéster',
    pt: 'Feminino Poliéster', id_lang: 'Wanita Poliester', ru: 'Женская Полиэстер', fr: 'Femme Polyester', ar: 'بوليستر نسائي', ja: ''
  },
  '女款温水洗': {
    cn: '女款温水洗', en: 'Women\'s Warm Water Wash', th: 'ผู้หญิง ซักน้ำอุ่น', vn: 'Nữ Giặt nước ấm', es: 'Mujer Lavado en agua tibia',
    pt: 'Feminino Lavagem em água morna', id_lang: 'Wanita Cuci Air Hangat', ru: 'Женская Стирка в теплой воде', fr: 'Femme Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ نسائي', ja: ''
  },
  '女款真丝': {
    cn: '女款真丝', en: 'Women\'s Pure Silk', th: 'ผู้หญิง ผ้าไหมแท้', vn: 'Nữ Lụa thật', es: 'Mujer Seda pura',
    pt: 'Feminino Seda pura', id_lang: 'Wanita Sutra Asli', ru: 'Женская Натуральный шелк', fr: 'Femme Soie naturelle', ar: 'حرير طبيعي نسائي', ja: ''
  },
  '女款竹纤维': {
    cn: '女款竹纤维', en: 'Women\'s Bamboo Fiber', th: 'ผู้หญิง เส้นใยไผ่', vn: 'Nữ Sợi tre', es: 'Mujer Fibra de bambú',
    pt: 'Feminino Fibra de bambu', id_lang: 'Wanita Serat Bambu', ru: 'Женская Бамбуковое волокно', fr: 'Femme Fibre de bambou', ar: 'ألياف الخيزران نسائي', ja: ''
  },
  '女款粘纤': {
    cn: '女款粘纤', en: 'Women\'s Viscose', th: 'ผู้หญิง วิสโคส', vn: 'Nữ Viscose', es: 'Mujer Viscosa',
    pt: 'Feminino Viscose', id_lang: 'Wanita Viskosa', ru: 'Женская Вискоза', fr: 'Femme Viscose', ar: 'فيسكوز نسائي', ja: ''
  },
  '女款精梳棉': {
    cn: '女款精梳棉', en: 'Women\'s Combed Cotton', th: 'ผู้หญิง ผ้าฝ้ายหวี', vn: 'Nữ Cotton chải', es: 'Mujer Algodón peinado',
    pt: 'Feminino Algodão penteado', id_lang: 'Wanita Katun Sisir', ru: 'Женская Гребенной хлопок', fr: 'Femme Coton peigné', ar: 'قطن ممشط نسائي', ja: ''
  },
  '女款羊毛': {
    cn: '女款羊毛', en: 'Women\'s Wool', th: 'ผู้หญิง ขนแกะ', vn: 'Nữ Len', es: 'Mujer Lana',
    pt: 'Feminino Lã', id_lang: 'Wanita Wol', ru: 'Женская Шерсть', fr: 'Femme Laine', ar: 'صوف نسائي', ja: ''
  },
  '女款羊绒': {
    cn: '女款羊绒', en: 'Women\'s Cashmere', th: 'ผู้หญิง แคชเมียร์', vn: 'Nữ Cashmere', es: 'Mujer Cachemira',
    pt: 'Feminino Caxemira', id_lang: 'Wanita Kasmir', ru: 'Женская Кашемир', fr: 'Femme Cachemire', ar: 'كشمير نسائي', ja: ''
  },
  '女款腈纶': {
    cn: '女款腈纶', en: 'Women\'s Acrylic', th: 'ผู้หญิง อะคริลิก', vn: 'Nữ Acrylic', es: 'Mujer Acrílico',
    pt: 'Feminino Acrílico', id_lang: 'Wanita Akrilik', ru: 'Женская Акрил', fr: 'Femme Acrylique', ar: 'أكريليك نسائي', ja: ''
  },
  '女款莫代尔': {
    cn: '女款莫代尔', en: 'Women\'s Modal', th: 'ผู้หญิง โมดอล', vn: 'Nữ Modal', es: 'Mujer Modal',
    pt: 'Feminino Modal', id_lang: 'Wanita Modal', ru: 'Женская Модал', fr: 'Femme Modal', ar: 'مودال نسائي', ja: ''
  },
  '女款莱赛尔': {
    cn: '女款莱赛尔', en: 'Women\'s Lyocell', th: 'ผู้หญิง ไลโอเซลล์', vn: 'Nữ Lyocell', es: 'Mujer Lyocell',
    pt: 'Feminino Lyocell', id_lang: 'Wanita Lyocell', ru: 'Женская Лиоцелл', fr: 'Femme Lyocell', ar: 'ليوسيل نسائي', ja: ''
  },
  '女款锦纶': {
    cn: '女款锦纶', en: 'Women\'s Nylon', th: 'ผู้หญิง ไนลอน', vn: 'Nữ Nylon', es: 'Mujer Nailon',
    pt: 'Feminino Nylon', id_lang: 'Wanita Nilon', ru: 'Женская Нейлон', fr: 'Femme Nylon', ar: 'نايلون نسائي', ja: ''
  },
  '女款马海毛': {
    cn: '女款马海毛', en: 'Women\'s Mohair', th: 'ผู้หญิง โมแฮร์', vn: 'Nữ Mohair', es: 'Mujer Mohair',
    pt: 'Feminino Mohair', id_lang: 'Wanita Mohair', ru: 'Женская Мохер', fr: 'Femme Mohair', ar: 'موهير نسائي', ja: ''
  },
  '奶咖色': {
    cn: '奶咖色', en: 'Milk coffee color', th: 'สีนมกาแฟ', vn: 'Màu cà phê sữa', es: 'color del café con leche',
    pt: 'Cor de café com leite', id_lang: 'warna kopi susu', ru: 'Цвет молочного кофе', fr: 'couleur café au lait', ar: 'لون قهوة الحليب', ja: ''
  },
  '奶灰色': {
    cn: '奶灰色', en: 'Milky gray', th: 'สีเทาอ่อน', vn: 'Màu xám sữa', es: 'Gris lechoso',
    pt: 'Cinza leitoso', id_lang: 'Abu-abu susu', ru: 'Молочно-серый', fr: 'Gris laiteux', ar: 'رمادي حليبي', ja: ''
  },
  '奶白': {
    cn: '奶白', en: 'milky white', th: 'สีขาวขุ่น', vn: 'màu trắng sữa', es: 'blanco lechoso',
    pt: 'branco leitoso', id_lang: 'putih susu', ru: 'молочно-белый', fr: 'blanc laiteux', ar: 'أبيض حليبي', ja: ''
  },
  '奶茶色': {
    cn: '奶茶色', en: 'Milk tea color', th: 'สีชานม', vn: 'Màu trà sữa', es: 'color del té con leche',
    pt: 'Cor do chá com leite', id_lang: 'warna teh susu', ru: 'Цвет молочного чая', fr: 'couleur thé au lait', ar: 'لون شاي الحليب', ja: ''
  },
  '姜黄': {
    cn: '姜黄', en: 'turmeric', th: 'ขมิ้น', vn: 'nghệ', es: 'cúrcuma',
    pt: 'cúrcuma', id_lang: 'kunyit', ru: 'куркума', fr: 'curcuma', ar: 'كُركُم', ja: ''
  },
  '姜黄格纹': {
    cn: '姜黄格纹', en: 'Turmeric checkered pattern', th: 'ลายตารางหมากรุกขมิ้น', vn: 'Họa tiết caro nghệ', es: 'Patrón a cuadros de cúrcuma',
    pt: 'Padrão xadrez de cúrcuma', id_lang: 'Pola kotak-kotak kunyit', ru: 'клетчатый узор с куркумой', fr: 'Motif à carreaux de curcuma', ar: 'نمط الكركم المربّع', ja: ''
  },
  '姜黄花纹': {
    cn: '姜黄花纹', en: 'Turmeric pattern', th: 'ลวดลายขมิ้น', vn: 'Họa tiết nghệ', es: 'Patrón de cúrcuma',
    pt: 'Padrão de cúrcuma', id_lang: 'Pola kunyit', ru: 'Узор куркумы', fr: 'Motif de curcuma', ar: 'نمط الكركم', ja: ''
  },
  '娇小版': {
    cn: '娇小版', en: 'Petite', th: 'ไซส์คนตัวเล็ก', vn: 'Cỡ Petite', es: 'Talla Petite',
    pt: 'Tamanho Petite', id_lang: 'Ukuran Petite', ru: 'Petite', fr: 'Taille Petite', ar: 'مقاس بتيت', ja: ''
  },
  '孕妇装': {
    cn: '孕妇装', en: 'Maternity', th: 'ไซส์คนท้อง', vn: 'Đồ bầu', es: 'Premamá',
    pt: 'Gestante', id_lang: 'Pakaian Hamil', ru: 'Для беременных', fr: 'Maternité', ar: 'ملابس حوامل', ja: ''
  },
  '字母除外': {
    cn: '字母除外', en: 'Except for letters', th: 'ยกเว้นตัวอักษร', vn: 'Ngoại trừ thư từ.', es: 'Excepto por las cartas',
    pt: 'Exceto pelas letras', id_lang: 'Kecuali untuk huruf', ru: 'За исключением писем', fr: 'À l&#39;exception des lettres', ar: 'باستثناء الرسائل', ja: ''
  },
  '孟加拉制造': {
    cn: '孟加拉制造', en: 'Made in Bangladesh', th: 'ผลิตในบังกลาเทศ', vn: 'SX tại Bangladesh', es: 'Hecho en Bangladés',
    pt: 'Feito em Bangladesh', id_lang: 'Buatan Bangladesh', ru: 'Сделано в Бангладеш', fr: 'Fabriqué au Bangladesh', ar: 'صنع في بنجلاديش', ja: ''
  },
  '宝冠蓝': {
    cn: '宝冠蓝', en: 'Crown Blue', th: 'คราวน์บลู', vn: 'Vương miện xanh', es: 'Azul Corona',
    pt: 'Coroa Azul', id_lang: 'Biru Mahkota', ru: 'Корона Блю', fr: 'Bleu Couronne', ar: 'التاج الأزرق', ja: ''
  },
  '宝蓝': {
    cn: '宝蓝', en: 'sapphire', th: 'ไพลิน', vn: 'sapphire', es: 'zafiro',
    pt: 'safira', id_lang: 'safir', ru: 'сапфир', fr: 'saphir', ar: 'الياقوت', ja: ''
  },
  '宝蓝条纹': {
    cn: '宝蓝条纹', en: 'Royal blue stripes', th: 'ลายทางสีน้ำเงินรอยัลบลู', vn: 'sọc xanh hoàng gia', es: 'rayas azul marino',
    pt: 'Listras azul-royal', id_lang: 'Garis-garis biru kerajaan', ru: 'Королевские синие полосы', fr: 'rayures bleu roi', ar: 'خطوط زرقاء ملكية', ja: ''
  },
  '宝蓝色': {
    cn: '宝蓝色', en: 'Royal Blue', th: 'สีน้ำเงินรอยัล', vn: 'Xanh hoàng gia', es: 'Azul real',
    pt: 'Azul Royal', id_lang: 'Biru Kerajaan', ru: 'Королевский синий', fr: 'Bleu royal', ar: 'الأزرق الملكي', ja: ''
  },
  '宝蓝花纹': {
    cn: '宝蓝花纹', en: 'Royal blue pattern', th: 'ลายสีน้ำเงินรอยัล', vn: 'Họa tiết màu xanh hoàng gia', es: 'Patrón azul real',
    pt: 'Padrão azul real', id_lang: 'Pola biru kerajaan', ru: 'Королевский синий узор', fr: 'motif bleu royal', ar: 'نقش أزرق ملكي', ja: ''
  },
  '实际以检测为准': {
    cn: '实际以检测为准', en: 'The actual test shall prevail.', th: 'ผลลัพธ์จากการทดสอบจริงจะเป็นตัวตัดสิน', vn: 'Kết quả kiểm tra thực tế sẽ được ưu tiên.', es: 'Prevalecerá el resultado de la prueba real.',
    pt: 'O teste realizado prevalecerá.', id_lang: 'Hasil tes sebenarnya yang akan berlaku.', ru: 'Результаты фактического теста имеют приоритет.', fr: 'C&#39;est le résultat du test qui prévaudra.', ar: 'سيُعتمد الاختبار الفعلي.', ja: ''
  },
  '宽花边': {
    cn: '宽花边', en: 'Wide lace', th: 'ลูกไม้กว้าง', vn: 'Ren rộng', es: 'encaje ancho',
    pt: 'Renda larga', id_lang: 'Renda lebar', ru: 'Широкое кружево', fr: 'Dentelle large', ar: 'دانتيل عريض', ja: ''
  },
  '小号': {
    cn: '小号', en: 'Small (S)', th: 'ไซส์เล็ก', vn: 'Cỡ S (Nhỏ)', es: 'Talla S (Pequeña)',
    pt: 'Tamanho S (P)', id_lang: 'Ukuran S (Kecil)', ru: 'Размер S', fr: 'Taille S', ar: 'مقاس صغير', ja: ''
  },
  '小号(S)': {
    cn: '小号(S)', en: 'Small (S)', th: 'ไซส์เล็ก (S)', vn: 'Cỡ S', es: 'Talla S (Pequeña)',
    pt: 'Tamanho S (P)', id_lang: 'Ukuran S (Kecil)', ru: 'Размер S', fr: 'Taille S (Petit)', ar: 'مقاس صغير (S)', ja: ''
  },
  '小提花': {
    cn: '小提花', en: 'Jacquard', th: 'จาการ์ด', vn: 'Jacquard', es: 'Jacquard',
    pt: 'Jacquard', id_lang: 'Jacquard', ru: 'Жаккар', fr: 'Jacquard', ar: 'جاكارد', ja: ''
  },
  '小码': {
    cn: '小码', en: 'S', th: 'S', vn: 'S', es: 'S',
    pt: 'S', id_lang: 'S', ru: 'S', fr: 'S', ar: 'S', ja: ''
  },
  '小花边': {
    cn: '小花边', en: 'Small lace', th: 'ลูกไม้เล็ก ๆ', vn: 'Ren nhỏ', es: 'Encaje pequeño',
    pt: 'Renda pequena', id_lang: 'Renda kecil', ru: 'Маленькое кружево', fr: 'petite dentelle', ar: 'دانتيل صغير', ja: ''
  },
  '尺码': {
    cn: '尺码', en: 'Size', th: 'ขนาด / ไซส์', vn: 'Kích cỡ', es: 'Talla',
    pt: 'Tamanho', id_lang: 'Ukuran', ru: 'Размер', fr: 'Taille', ar: 'المقاس', ja: ''
  },
  '尼龙': {
    cn: '尼龙', en: 'nylon', th: 'ไนลอน', vn: 'nylon', es: 'nylon',
    pt: 'nylon', id_lang: 'nilon', ru: 'нейлон', fr: 'nylon', ar: 'نايلون', ja: ''
  },
  '尼龙弹力': {
    cn: '尼龙弹力', en: 'Nylon elastic', th: 'ยางยืดไนลอน', vn: 'Dây thun nylon', es: 'Elástico de nailon',
    pt: 'Elástico de nylon', id_lang: 'Nilon elastis', ru: 'Нейлоновая эластичная ткань', fr: 'Élastique en nylon', ar: 'نايلون مرن', ja: ''
  },
  '山澜迎风': {
    cn: '山澜迎风', en: 'Mountain Waves Welcome the Wind', th: 'คลื่นบนภูเขาต้อนรับสายลม', vn: 'Những con sóng trên núi chào đón gió', es: 'Las olas de la montaña dan la bienvenida al viento.',
    pt: 'Ondas da montanha saúdam o vento', id_lang: 'Ombak Gunung Menyambut Angin', ru: 'Горные волны приветствуют ветер.', fr: 'Les vagues de la montagne accueillent le vent', ar: 'أمواج الجبل ترحب بالريح', ja: ''
  },
  '山矾': {
    cn: '山矾', en: 'Mountain ash', th: 'เถ้าภูเขา', vn: 'Cây tần bì', es: 'fresno de montaña',
    pt: 'sorveira', id_lang: 'Pohon abu gunung', ru: 'Рябина', fr: 'Sorbier', ar: 'الرماد الجبلي', ja: ''
  },
  '山羊绒': {
    cn: '山羊绒', en: 'cashmere', th: 'แคชเมียร์', vn: 'len cashmere', es: 'cachemira',
    pt: 'caxemira', id_lang: 'kasmir', ru: 'кашемир', fr: 'cachemire', ar: 'الكشمير', ja: ''
  },
  '左斜双面布': {
    cn: '左斜双面布', en: 'Left-slanted double-sided fabric', th: 'ผ้าสองด้านเอียงซ้าย', vn: 'Vải hai mặt nghiêng về bên trái', es: 'Tela de doble cara con inclinación hacia la izquierda',
    pt: 'Tecido de dupla face inclinado para a esquerda', id_lang: 'Kain dua sisi miring ke kiri', ru: 'Двусторонняя ткань с левым наклоном', fr: 'Tissu double face incliné à gauche', ar: 'قماش مزدوج الجوانب مائل لليسار', ja: ''
  },
  '巨丰': {
    cn: '巨丰', en: 'Jufeng', th: 'จูเฟิง', vn: 'Cư Phong', es: 'jufeng',
    pt: 'Jufeng', id_lang: 'Jufeng', ru: 'Цзюфэн', fr: 'Jufeng', ar: 'يوفينغ', ja: ''
  },
  '布拉克': {
    cn: '布拉克', en: 'Black', th: 'สีดำ', vn: 'Đen', es: 'Negro',
    pt: 'Preto', id_lang: 'Hitam', ru: 'Черный', fr: 'Noir', ar: 'أسود', ja: ''
  },
  '布里': {
    cn: '布里', en: 'Bri', th: 'บริ', vn: 'Bri', es: 'Bri',
    pt: 'Bri', id_lang: 'Bri', ru: 'Бри', fr: 'Bri', ar: 'بري', ja: ''
  },
  '带里': {
    cn: '带里', en: 'belt', th: 'เข็มขัด', vn: 'thắt lưng', es: 'cinturón',
    pt: 'cinto', id_lang: 'sabuk', ru: 'пояс', fr: 'ceinture', ar: 'حزام', ja: ''
  },
  '带面': {
    cn: '带面', en: 'noodles', th: 'บะหมี่', vn: 'mì', es: 'fideos',
    pt: 'macarrão', id_lang: 'mie', ru: 'лапша', fr: 'nouilles', ar: 'نودلز', ja: ''
  },
  '帮面材料': {
    cn: '帮面材料', en: 'Upper material', th: 'วัสดุส่วนบน', vn: 'Chất liệu phần trên', es: 'Material superior',
    pt: 'Material superior', id_lang: 'Bahan bagian atas', ru: 'Верхний материал', fr: 'Matériau supérieur', ar: 'الخامة العلوية', ja: ''
  },
  '帮面材质': {
    cn: '帮面材质', en: 'Upper material', th: 'วัสดุส่วนบน', vn: 'Chất liệu phần trên', es: 'Material superior',
    pt: 'Material superior', id_lang: 'Bahan bagian atas', ru: 'Верхний материал', fr: 'Matériau supérieur', ar: 'الخامة العلوية', ja: ''
  },
  '常规干洗': {
    cn: '常规干洗', en: 'Dry clean', th: 'ซักแห้ง', vn: 'Giặt khô', es: 'Limpieza en seco',
    pt: 'Lavagem a seco', id_lang: 'Cuci kering', ru: 'Химчистка', fr: 'Nettoyage à sec', ar: 'تنظيف جاف', ja: ''
  },
  '帽': {
    cn: '帽', en: 'cap', th: 'หมวก', vn: 'mũ', es: 'tapa',
    pt: 'boné', id_lang: 'topi', ru: 'кепка', fr: 'capuchon', ar: 'كاب', ja: ''
  },
  '帽子': {
    cn: '帽子', en: 'hat', th: 'หมวก', vn: 'mũ', es: 'sombrero',
    pt: 'chapéu', id_lang: 'topi', ru: 'шляпа', fr: 'chapeau', ar: 'قبعة', ja: ''
  },
  '帽檐': {
    cn: '帽檐', en: 'hat brim', th: 'ปีกหมวก', vn: 'vành mũ', es: 'ala del sombrero',
    pt: 'aba do chapéu', id_lang: 'pinggiran topi', ru: 'поля шляпы', fr: 'bord du chapeau', ar: 'حافة القبعة', ja: ''
  },
  '帽毛条': {
    cn: '帽毛条', en: 'Hat trim', th: 'ขอบหมวก', vn: 'Viền mũ', es: 'Ribete del sombrero',
    pt: 'enfeite de chapéu', id_lang: 'Hiasan topi', ru: 'отделка шляпы', fr: 'garniture de chapeau', ar: 'زينة القبعة', ja: ''
  },
  '帽里': {
    cn: '帽里', en: 'hat', th: 'หมวก', vn: 'mũ', es: 'sombrero',
    pt: 'chapéu', id_lang: 'topi', ru: 'шляпа', fr: 'chapeau', ar: 'قبعة', ja: ''
  },
  '帽里料': {
    cn: '帽里料', en: 'Hat lining', th: 'ซับในหมวก', vn: 'Lớp lót mũ', es: 'Forro del sombrero',
    pt: 'Forro do chapéu', id_lang: 'Lapisan topi', ru: 'Подкладка шляпы', fr: 'doublure de chapeau', ar: 'بطانة القبعة', ja: ''
  },
  '帽面': {
    cn: '帽面', en: 'hat surface', th: 'พื้นผิวหมวก', vn: 'bề mặt mũ', es: 'superficie del sombrero',
    pt: 'superfície do chapéu', id_lang: 'permukaan topi', ru: 'поверхность шляпы', fr: 'surface du chapeau', ar: 'سطح القبعة', ja: ''
  },
  '帽面料': {
    cn: '帽面料', en: 'Hat fabric', th: 'ผ้าสำหรับทำหมวก', vn: 'Vải làm mũ', es: 'Tela para sombreros',
    pt: 'Tecido para chapéu', id_lang: 'Kain topi', ru: 'Ткань для шляпы', fr: 'Tissu pour chapeau', ar: 'قماش القبعة', ja: ''
  },
  '干燥后轻轻拍打 请与其它衣物分开洗涤': {
    cn: '干燥后轻轻拍打 请与其它衣物分开洗涤', en: 'After drying, pat gently. Please wash separately from other clothing.', th: 'หลังแห้งให้ตบเบาๆ กรุณาซักแยกจากเสื้อผ้าชิ้นอื่น', vn: 'Giặt riêng với các quần áo khác sau khi làm khô và vỗ nhẹ.', es: 'Después de secar, golpee suavemente. Por favor, lave por separado de otras prendas.',
    pt: 'Após secar, bata levemente. Por favor, lave separadamente de outras roupas.', id_lang: 'Setelah kering, tepuk perlahan. Harap cuci terpisah dari pakaian lainnya.', ru: 'После стирки аккуратно отжать. Стирать отдельно от других вещей.', fr: 'Tamponnez doucement après le séchage. Veuillez laver séparément des autres vêtements.', ar: 'بعد التجفيف، قم بتربيت الملابس برفق، يُرجى غسلها منفصلة عن الملابس الأخرى.', ja: ''
  },
  '干燥后轻轻拍打 请与其它衣物分开洗涤 本产品在洗涤过程中出现的轻微褪色属正常现象': {
    cn: '干燥后轻轻拍打 请与其它衣物分开洗涤 本产品在洗涤过程中出现的轻微褪色属正常现象', en: 'After drying, gently pat. Please wash separately from other garments. Slight fading during washing is normal for this product.', th: 'หลังแห้งให้ตบเบาๆ กรุณาแยกซักจากเสื้อผ้าชิ้นอื่น การซีดจางเล็กน้อยที่อาจเกิดขึ้นระหว่างการซักเป็นเรื่องปกติ', vn: 'Sau khi làm khô, vỗ nhẹ. Vui lòng giặt riêng với các loại quần áo khác. Hiện tượng phai màu nhẹ trong quá trình giặt của sản phẩm này là hiện tượng bình thường.', es: 'Secar a palmaditas suaves. Lavar por separado de otras prendas. El ligero desteñido que pueda aparecer durante el lavado de este producto es normal.',
    pt: 'Após a secagem, bata suavemente. Lave separadamente de outras roupas. O leve desbotamento que ocorre durante a lavagem deste produto é normal.', id_lang: 'Setelah kering tepuk-tepuk perlahan. Cuci terpisah dari pakaian lain. Sedikit luntur saat dicuci adalah hal normal untuk produk ini.', ru: 'После высыхания аккуратно встряхните. Стирайте отдельно от других вещей. Легкое выцветание при стирке является нормальным явлением для данного изделия.', fr: 'Après séchage, tapotez doucement. Veuillez laver séparément des autres vêtements. La légère décoloration qui peut apparaître pendant le lavage de ce produit est normale.', ar: 'بعد التجفيف، الربت بلطف. يُغسل منفصلاً عن الملابس الأخرى. يعتبر تلاشي اللون الطفيف الذي يحدث أثناء الغسيل ظاهرة طبيعية لهذا المنتج.', ja: ''
  },
  '平摊晾干': {
    cn: '平摊晾干', en: 'Dry flat', th: 'วางราบตากให้แห้ง', vn: 'Trải phẳng để phơi', es: 'Secar en plano',
    pt: 'Secar na horizontal', id_lang: 'Keringkan mendatar', ru: 'Сушить в горизонтальном положении', fr: 'Séchage à plat', ar: 'يجفف مسطحاً', ja: ''
  },
  '平纹': {
    cn: '平纹', en: 'plain weave', th: 'ทอธรรมดา', vn: 'dệt trơn', es: 'tejido liso',
    pt: 'ponto de tafetá', id_lang: 'tenun polos', ru: 'простое плетение', fr: 'toile unie', ar: 'نسيج عادي', ja: ''
  },
  '平纹布': {
    cn: '平纹布', en: 'plain weave', th: 'ทอธรรมดา', vn: 'dệt trơn', es: 'tejido liso',
    pt: 'ponto de tafetá', id_lang: 'tenun polos', ru: 'простое плетение', fr: 'toile unie', ar: 'نسيج عادي', ja: ''
  },
  '平纹面料': {
    cn: '平纹面料', en: 'Plain weave fabric', th: 'ผ้าทอธรรมดา', vn: 'Vải dệt trơn', es: 'tejido de trama lisa',
    pt: 'Tecido de trama simples', id_lang: 'Kain tenun polos', ru: 'Ткань простого переплетения', fr: 'Tissu à armure toile', ar: 'قماش منسوج سادة', ja: ''
  },
  '平绒复合': {
    cn: '平绒复合', en: 'Velvet composite', th: 'กำมะหยี่คอมโพสิต', vn: 'Vật liệu tổng hợp nhung', es: 'Compuesto de terciopelo',
    pt: 'Composto de veludo', id_lang: 'Komposit beludru', ru: 'Бархатный композит', fr: 'Composite de velours', ar: 'مركب مخملي', ja: ''
  },
  '平铺晾干': {
    cn: '平铺晾干', en: 'Dry Flat', th: 'ตากราบ', vn: 'Phơi ngang', es: 'Secar en plano',
    pt: 'Secar na horizontal', id_lang: 'Keringkan dengan diletakkan rata', ru: 'Сушить в горизонтальном положении', fr: 'Sécher à plat', ar: 'تجفيف بالوضع المسطح', ja: ''
  },
  '幻彩条纹': {
    cn: '幻彩条纹', en: 'iridescent stripes', th: 'แถบสีรุ้ง', vn: 'sọc óng ánh', es: 'rayas iridiscentes',
    pt: 'listras iridescentes', id_lang: 'garis-garis warna-warni', ru: 'переливающиеся полосы', fr: 'rayures irisées', ar: 'ألوان متقزحة', ja: ''
  },
  '底': {
    cn: '底', en: 'end', th: 'จบ', vn: 'kết thúc', es: 'fin',
    pt: 'fim', id_lang: 'akhir', ru: 'конец', fr: 'fin', ar: 'نهاية', ja: ''
  },
  '底基': {
    cn: '底基', en: 'base', th: 'ฐาน', vn: 'căn cứ', es: 'base',
    pt: 'base', id_lang: 'basis', ru: 'база', fr: 'base', ar: 'قاعدة', ja: ''
  },
  '底层': {
    cn: '底层', en: 'bottom layer', th: 'ชั้นล่างสุด', vn: 'lớp dưới cùng', es: 'capa inferior',
    pt: 'camada inferior', id_lang: 'lapisan bawah', ru: 'нижний слой', fr: 'couche inférieure', ar: 'الطبقة السفلية', ja: ''
  },
  '底层牛剖层革': {
    cn: '底层牛剖层革', en: 'Bottom layer cowhide', th: 'หนังวัวชั้นล่าง', vn: 'lớp da bò dưới cùng', es: 'Piel de vaca de capa inferior',
    pt: 'camada inferior de couro bovino', id_lang: 'Lapisan bawah kulit sapi', ru: 'Нижний слой коровьей кожи', fr: 'couche inférieure en cuir de vache', ar: 'الطبقة السفلية من جلد البقر', ja: ''
  },
  '底层面料': {
    cn: '底层面料', en: 'base fabric', th: 'ผ้าพื้นฐาน', vn: 'vải cơ bản', es: 'tejido base',
    pt: 'tecido base', id_lang: 'kain dasar', ru: 'базовая ткань', fr: 'tissu de base', ar: 'القماش الأساسي', ja: ''
  },
  '底布': {
    cn: '底布', en: 'base fabric', th: 'ผ้าพื้นฐาน', vn: 'vải cơ bản', es: 'tejido base',
    pt: 'tecido base', id_lang: 'kain dasar', ru: 'базовая ткань', fr: 'tissu de base', ar: 'القماش الأساسي', ja: ''
  },
  '底布面料': {
    cn: '底布面料', en: 'Base fabric', th: 'ผ้าพื้นฐาน', vn: 'Vải nền', es: 'Tejido base',
    pt: 'Tecido base', id_lang: 'Kain dasar', ru: 'Базовая ткань', fr: 'Tissu de base', ar: 'القماش الأساسي', ja: ''
  },
  '底纱除外': {
    cn: '底纱除外', en: 'Except for the base yarn', th: 'ยกเว้นเส้นด้ายพื้นฐาน', vn: 'Ngoại trừ sợi cơ bản', es: 'Excepto por el hilo base',
    pt: 'Com exceção do fio base.', id_lang: 'Kecuali benang dasar', ru: 'За исключением основной пряжи.', fr: 'À l&#39;exception du fil de base', ar: 'باستثناء خيوط القاعدة', ja: ''
  },
  '弹力': {
    cn: '弹力', en: 'elasticity', th: 'ความยืดหยุ่น', vn: 'độ đàn hồi', es: 'elasticidad',
    pt: 'elasticidade', id_lang: 'elastisitas', ru: 'эластичность', fr: 'élasticité', ar: 'مرونة', ja: ''
  },
  '弹性纤维': {
    cn: '弹性纤维', en: 'elastic fibers', th: 'เส้นใยยืดหยุ่น', vn: 'sợi đàn hồi', es: 'fibras elásticas',
    pt: 'fibras elásticas', id_lang: 'serat elastis', ru: 'эластичные волокна', fr: 'fibres élastiques', ar: 'الألياف المرنة', ja: ''
  },
  '弹性纤维除外': {
    cn: '弹性纤维除外', en: 'Except for elastic fibers', th: 'ยกเว้นเส้นใยยืดหยุ่น', vn: 'Ngoại trừ các sợi đàn hồi', es: 'Excepto por las fibras elásticas',
    pt: 'Exceto fibras elásticas', id_lang: 'Kecuali serat elastis', ru: 'За исключением эластичных волокон', fr: 'À l&#39;exception des fibres élastiques', ar: 'باستثناء الألياف المرنة', ja: ''
  },
  '弹性部分除外': {
    cn: '弹性部分除外', en: 'Except for the elastic part', th: 'ยกเว้นส่วนที่เป็นยางยืด', vn: 'Ngoại trừ phần chun co giãn.', es: 'Excepto por la parte elástica',
    pt: 'Exceto pela parte elástica', id_lang: 'Kecuali bagian yang elastis', ru: 'За исключением упругой части', fr: 'À l&#39;exception de la partie élastique', ar: 'باستثناء الجزء المرن', ja: ''
  },
  '弹柔珠地': {
    cn: '弹柔珠地', en: 'bouncy pearl', th: 'ไข่มุกเด้ง', vn: 'ngọc trai nảy', es: 'perla elástica',
    pt: 'pérola saltitante', id_lang: 'mutiara yang memantul', ru: 'упругая жемчужина', fr: 'perle rebondissante', ar: 'لؤلؤة نطاطة', ja: ''
  },
  '弹袖条': {
    cn: '弹袖条', en: 'Elastic sleeve strip', th: 'แถบยางยืดที่แขนเสื้อ', vn: 'dải tay áo co giãn', es: 'Tira elástica para manga',
    pt: 'Tira elástica na manga', id_lang: 'Strip lengan elastis', ru: 'Эластичная манжета', fr: 'Bande élastique pour les manches', ar: 'شريط أكمام مطاطي', ja: ''
  },
  '彩蓝': {
    cn: '彩蓝', en: 'Rainbow Blue', th: 'สายรุ้งสีฟ้า', vn: 'Cầu vồng xanh', es: 'Azul arcoíris',
    pt: 'Azul Arco-Íris', id_lang: 'Biru Pelangi', ru: 'Радужный синий', fr: 'Bleu arc-en-ciel', ar: 'أزرق قوس قزح', ja: ''
  },
  '彩虹条纹': {
    cn: '彩虹条纹', en: 'Rainbow stripes', th: 'ลายทางสีรุ้ง', vn: 'Sọc cầu vồng', es: 'rayas arcoíris',
    pt: 'Listras do arco-íris', id_lang: 'Garis-garis pelangi', ru: 'Радужные полосы', fr: 'rayures arc-en-ciel', ar: 'خطوط قوس قزح', ja: ''
  },
  '御寒智慧绒': {
    cn: '御寒智慧绒', en: 'Cold-proof Smart Fleece', th: 'ผ้าฟลีซอัจฉริยะกันหนาว', vn: 'Áo khoác nỉ thông minh chống lạnh', es: 'Forro polar inteligente resistente al frío',
    pt: 'Fleece inteligente à prova de frio', id_lang: 'Fleece Pintar Tahan Dingin', ru: 'Умный флис, защищающий от холода', fr: 'Polaire intelligente résistante au froid', ar: 'صوف ذكي مقاوم للبرد', ja: ''
  },
  '微肌理面料': {
    cn: '微肌理面料', en: 'Micro-textured fabric', th: 'ผ้าที่มีพื้นผิวละเอียดระดับไมโคร', vn: 'Vải có kết cấu vi mô', es: 'Tejido microtexturizado',
    pt: 'Tecido microtexturizado', id_lang: 'Kain bertekstur mikro', ru: 'Ткань с микротекстурой', fr: 'Tissu micro-texturé', ar: 'نسيج ذو ملمس دقيق', ja: ''
  },
  '德绒拉架双面': {
    cn: '德绒拉架双面', en: 'Delong stretch double-sided', th: 'เดอลอง สเตรท สองด้าน', vn: 'Delong co giãn hai mặt', es: 'Delong elástico de doble cara',
    pt: 'Delong estica dupla face', id_lang: 'Delong stretch dua sisi', ru: 'Delong растягивается с двух сторон', fr: 'Delong extensible double face', ar: 'قماش مطاطي مزدوج الجوانب قابل للتمدد من ديلونج', ja: ''
  },
  '德芙棉': {
    cn: '德芙棉', en: 'Dove Cotton', th: 'โดฟ คอตตอน', vn: 'Bông Dove', es: 'Algodón Dove',
    pt: 'Algodão Dove', id_lang: 'Dove Cotton', ru: 'Голубиный хлопок', fr: 'Coton colombe', ar: 'قطن دوف', ja: ''
  },
  '恤面料': {
    cn: '恤面料', en: 'T-shirt fabric', th: 'ผ้าสำหรับทำเสื้อยืด', vn: 'Vải áo thun', es: 'Tela de camiseta',
    pt: 'tecido de camiseta', id_lang: 'Kain kaos', ru: 'ткань для футболки', fr: 'tissu de t-shirt', ar: 'قماش التيشيرت', ja: ''
  },
  '悬挂干燥': {
    cn: '悬挂干燥', en: 'Hang to dry', th: 'แขวนไว้ให้แห้ง', vn: 'Treo để phơi khô', es: 'Colgar para secar',
    pt: 'Pendurar para secar', id_lang: 'Gantung sampai kering', ru: 'Сушить вертикально', fr: 'Suspendre pour sécher', ar: 'يجفف بالتعليق', ja: 'つり干しが良い'
  },
  '悬挂晾干': {
    cn: '悬挂晾干', en: 'Line Dry', th: 'ตากแขวน', vn: 'Phơi treo', es: 'Secar colgado',
    pt: 'Secar pendurado', id_lang: 'Gantung untuk mengeringkan', ru: 'Сушить в подвешенном состоянии', fr: 'Sécher suspendu', ar: 'تجفيف بالتعليق', ja: ''
  },
  '悬挂阴干': {
    cn: '悬挂阴干', en: 'Line dry in the shade', th: 'แขวนตากในร่ม', vn: 'Phơi trên dây trong bóng râm', es: 'Secar colgado a la sombra',
    pt: 'Secar em varal à sombra', id_lang: 'Gantung untuk mengeringkan di tempat teduh', ru: 'Сушка на веревке в тени', fr: 'Séchage sur fil à l\'ombre', ar: 'تجفيف على الحبل في الظل', ja: '日陰の吊り干しが良い'
  },
  '感温冰爽棉': {
    cn: '感温冰爽棉', en: 'Temperature-sensitive cooling cotton', th: 'ผ้าฝ้ายระบายความร้อนที่ไวต่ออุณหภูมิ', vn: 'bông làm mát nhạy cảm với nhiệt độ', es: 'Algodón refrigerante sensible a la temperatura',
    pt: 'algodão refrescante sensível à temperatura', id_lang: 'Kapas pendingin yang peka terhadap suhu', ru: 'Термочувствительная охлаждающая вата', fr: 'Coton rafraîchissant thermosensible', ar: 'قطن تبريد حساس للحرارة', ja: ''
  },
  '感温平纹': {
    cn: '感温平纹', en: 'Temperature-sensitive plain weave', th: 'ผ้าทอธรรมดาที่ไวต่ออุณหภูมิ', vn: 'dệt trơn nhạy cảm với nhiệt độ', es: 'tejido liso sensible a la temperatura',
    pt: 'tecido plano sensível à temperatura', id_lang: 'Tenunan polos yang sensitif terhadap suhu', ru: 'Термочувствительное полотняное переплетение', fr: 'Tissage uni thermosensible', ar: 'نسيج عادي حساس للحرارة', ja: ''
  },
  '感温棉': {
    cn: '感温棉', en: 'Temperature-sensitive cotton', th: 'ฝ้ายที่ไวต่ออุณหภูมิ', vn: 'bông nhạy cảm với nhiệt độ', es: 'Algodón termosensible',
    pt: 'algodão sensível à temperatura', id_lang: 'Kapas yang sensitif terhadap suhu', ru: 'Термочувствительный хлопок', fr: 'Coton thermosensible', ar: 'قطن حساس للحرارة', ja: ''
  },
  '感温棉平纹': {
    cn: '感温棉平纹', en: 'Temperature-sensitive cotton plain weave', th: 'ผ้าฝ้ายทอธรรมดาที่ไวต่ออุณหภูมิ', vn: 'vải dệt trơn bằng cotton nhạy cảm với nhiệt độ', es: 'Tejido liso de algodón sensible a la temperatura',
    pt: 'Tecido plano de algodão sensível à temperatura', id_lang: 'Kain katun tenun polos yang sensitif terhadap suhu', ru: 'Термочувствительная хлопчатобумажная ткань простого переплетения', fr: 'Toile de coton thermosensible', ar: 'نسيج قطني عادي حساس للحرارة', ja: ''
  },
  '感温罗马': {
    cn: '感温罗马', en: 'Temperature-sensing Rome', th: 'กรุงโรมที่ตรวจจับอุณหภูมิได้', vn: 'Rome cảm biến nhiệt độ', es: 'Roma con sensores de temperatura',
    pt: 'Roma com sensor de temperatura', id_lang: 'Roma yang dilengkapi dengan sensor suhu', ru: 'Датчики температуры в Риме', fr: 'Rome, capteur de température', ar: 'روما التي تستشعر درجة الحرارة', ja: ''
  },
  '感温罗马布': {
    cn: '感温罗马布', en: 'Thermosensitive Roman cloth', th: 'ผ้าโรมันที่ไวต่ออุณหภูมิ', vn: 'Vải La Mã nhạy nhiệt', es: 'Paño romano termosensible',
    pt: 'Tecido romano termossensível', id_lang: 'Kain Romawi yang sensitif terhadap suhu', ru: 'Термочувствительная римская ткань', fr: 'Tissu romain thermosensible', ar: 'قماش روماني حساس للحرارة', ja: ''
  },
  '成分': {
    cn: '成分', en: 'Element', th: 'องค์ประกอบ', vn: 'Yếu tố', es: 'Elemento',
    pt: 'Elemento', id_lang: 'Elemen', ru: 'Элемент', fr: 'Élément', ar: 'عنصر', ja: ''
  },
  '户外': {
    cn: '户外', en: 'outdoor', th: 'กลางแจ้ง', vn: 'ngoài trời', es: 'exterior',
    pt: 'ar livre', id_lang: 'luar ruangan', ru: 'на открытом воздухе', fr: 'de plein air', ar: 'في الهواء الطلق', ja: ''
  },
  '户外30度机洗': {
    cn: '户外30度机洗', en: 'Outdoor Machine Wash at 30°C', th: 'กลางแจ้ง ซักเครื่อง 30°C', vn: 'Ngoài trời Giặt máy 30°C', es: 'Exterior Lavado a máquina a 30°C',
    pt: 'Outdoor Lavagem à máquina a 30°C', id_lang: 'Outdoor Cuci Mesin 30°C', ru: 'Уличная Машинная стирка при 30°C', fr: 'Plein air Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة خارجي', ja: ''
  },
  '户外40度机洗': {
    cn: '户外40度机洗', en: 'Outdoor Machine Wash at 40°C', th: 'กลางแจ้ง ซักเครื่อง 40°C', vn: 'Ngoài trời Giặt máy 40°C', es: 'Exterior Lavado a máquina a 40°C',
    pt: 'Outdoor Lavagem à máquina a 40°C', id_lang: 'Outdoor Cuci Mesin 40°C', ru: 'Уличная Машинная стирка при 40°C', fr: 'Plein air Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة خارجي', ja: ''
  },
  '户外不可干洗': {
    cn: '户外不可干洗', en: 'Outdoor Do Not Dry Clean', th: 'กลางแจ้ง ห้ามซักแห้ง', vn: 'Ngoài trời Không giặt khô', es: 'Exterior No lavar en seco',
    pt: 'Outdoor Não lavar a seco', id_lang: 'Outdoor Jangan Dry Clean', ru: 'Уличная Не подвергать химчистке', fr: 'Plein air Ne pas nettoyer à sec', ar: 'لا تنظف جافاً خارجي', ja: ''
  },
  '户外不可漂白': {
    cn: '户外不可漂白', en: 'Outdoor Do Not Bleach', th: 'กลางแจ้ง ห้ามฟอกขาว', vn: 'Ngoài trời Không tẩy trắng', es: 'Exterior No blanquear',
    pt: 'Outdoor Não usar alvejante', id_lang: 'Outdoor Jangan Diputihkan', ru: 'Уличная Не отбеливать', fr: 'Plein air Ne pas blanchir', ar: 'لا تبيض خارجي', ja: ''
  },
  '户外不可烘干': {
    cn: '户外不可烘干', en: 'Outdoor Do Not Tumble Dry', th: 'กลางแจ้ง ห้ามอบแห้ง', vn: 'Ngoài trời Không sấy khô', es: 'Exterior No secar en secadora',
    pt: 'Outdoor Não secar em secadora', id_lang: 'Outdoor Jangan Dikeringkan', ru: 'Уличная Не сушить в машине', fr: 'Plein air Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف خارجي', ja: ''
  },
  '户外亚麻': {
    cn: '户外亚麻', en: 'Outdoor Linen', th: 'กลางแจ้ง ผ้าลินิน', vn: 'Ngoài trời Vải lanh', es: 'Exterior Lino',
    pt: 'Outdoor Linho', id_lang: 'Outdoor Linen', ru: 'Уличная Лен', fr: 'Plein air Lin', ar: 'كتان خارجي', ja: ''
  },
  '户外低温熨烫': {
    cn: '户外低温熨烫', en: 'Outdoor Low Temperature Ironing', th: 'กลางแจ้ง รีดอุณหภูมิต่ำ', vn: 'Ngoài trời Ủi nhiệt độ thấp', es: 'Exterior Planchar a baja temperatura',
    pt: 'Outdoor Passar a baixa temperatura', id_lang: 'Outdoor Setrika Suhu Rendah', ru: 'Уличная Глажка при низкой температуре', fr: 'Plein air Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة خارجي', ja: ''
  },
  '户外再生涤纶': {
    cn: '户外再生涤纶', en: 'Outdoor Recycled Polyester', th: 'กลางแจ้ง โพลีเอสเตอร์รีไซเคิล', vn: 'Ngoài trời Polyester tái chế', es: 'Exterior Poliéster reciclado',
    pt: 'Outdoor Poliéster reciclado', id_lang: 'Outdoor Poliester Daur Ulang', ru: 'Уличная Переработанный полиэстер', fr: 'Plein air Polyester recyclé', ar: 'بوليستر معاد التدوير خارجي', ja: ''
  },
  '户外冷水洗': {
    cn: '户外冷水洗', en: 'Outdoor Cold Water Wash', th: 'กลางแจ้ง ซักน้ำเย็น', vn: 'Ngoài trời Giặt nước lạnh', es: 'Exterior Lavado en agua fría',
    pt: 'Outdoor Lavagem em água fria', id_lang: 'Outdoor Cuci Air Dingin', ru: 'Уличная Стирка в холодной воде', fr: 'Plein air Lavage à l\'eau froide', ar: 'غسيل بالماء البارد خارجي', ja: ''
  },
  '户外天丝': {
    cn: '户外天丝', en: 'Outdoor Tencel', th: 'กลางแจ้ง เทนเซล', vn: 'Ngoài trời Tencel', es: 'Exterior Tencel',
    pt: 'Outdoor Tencel', id_lang: 'Outdoor Tencel', ru: 'Уличная Тенсел', fr: 'Plein air Tencel', ar: 'تنسل خارجي', ja: ''
  },
  '户外尼龙': {
    cn: '户外尼龙', en: 'Outdoor Nylon', th: 'กลางแจ้ง ไนลอน', vn: 'Ngoài trời Nylon', es: 'Exterior Nailon',
    pt: 'Outdoor Nylon', id_lang: 'Outdoor Nilon', ru: 'Уличная Нейлон', fr: 'Plein air Nylon', ar: 'نايلون خارجي', ja: ''
  },
  '户外平铺晾干': {
    cn: '户外平铺晾干', en: 'Outdoor Lay Flat to Dry', th: 'กลางแจ้ง ตากแห้งแบบแบน', vn: 'Ngoài trời Phơi phẳng', es: 'Exterior Secar en plano',
    pt: 'Outdoor Secar na horizontal', id_lang: 'Outdoor Keringkan Datar', ru: 'Уличная Сушить в расправленном виде', fr: 'Plein air Sécher à plat', ar: 'تجفيف مسطح خارجي', ja: ''
  },
  '户外悬挂晾干': {
    cn: '户外悬挂晾干', en: 'Outdoor Hang Dry', th: 'กลางแจ้ง แขวนตากแห้ง', vn: 'Ngoài trời Phơi treo', es: 'Exterior Secar colgado',
    pt: 'Outdoor Secar pendurado', id_lang: 'Outdoor Gantung Kering', ru: 'Уличная Сушить в подвешенном состоянии', fr: 'Plein air Sécher suspendu', ar: 'تجفيف بالتعليق خارجي', ja: ''
  },
  '户外手洗': {
    cn: '户外手洗', en: 'Outdoor Hand Wash', th: 'กลางแจ้ง ซักมือ', vn: 'Ngoài trời Giặt tay', es: 'Exterior Lavado a mano',
    pt: 'Outdoor Lavagem à mão', id_lang: 'Outdoor Cuci Tangan', ru: 'Уличная Ручная стирка', fr: 'Plein air Lavage à la main', ar: 'غسيل يدوي خارجي', ja: ''
  },
  '户外有机棉': {
    cn: '户外有机棉', en: 'Outdoor Organic Cotton', th: 'กลางแจ้ง ผ้าฝ้ายออร์แกนิก', vn: 'Ngoài trời Cotton hữu cơ', es: 'Exterior Algodón orgánico',
    pt: 'Outdoor Algodão orgânico', id_lang: 'Outdoor Katun Organik', ru: 'Уличная Органический хлопок', fr: 'Plein air Coton biologique', ar: 'قطن عضوي خارجي', ja: ''
  },
  '户外机洗': {
    cn: '户外机洗', en: 'Outdoor Machine Wash', th: 'กลางแจ้ง ซักเครื่อง', vn: 'Ngoài trời Giặt máy', es: 'Exterior Lavado a máquina',
    pt: 'Outdoor Lavagem à máquina', id_lang: 'Outdoor Cuci Mesin', ru: 'Уличная Машинная стирка', fr: 'Plein air Lavage en machine', ar: 'غسيل آلي خارجي', ja: ''
  },
  '户外棉': {
    cn: '户外棉', en: 'Outdoor Cotton', th: 'กลางแจ้ง ผ้าฝ้าย', vn: 'Ngoài trời Cotton', es: 'Exterior Algodón',
    pt: 'Outdoor Algodão', id_lang: 'Outdoor Katun', ru: 'Уличная Хлопок', fr: 'Plein air Coton', ar: 'قطن خارجي', ja: ''
  },
  '户外氨纶': {
    cn: '户外氨纶', en: 'Outdoor Spandex', th: 'กลางแจ้ง สแปนเด็กซ์', vn: 'Ngoài trời Spandex', es: 'Exterior Elastano',
    pt: 'Outdoor Elastano', id_lang: 'Outdoor Spandex', ru: 'Уличная Спандекс', fr: 'Plein air Élasthanne', ar: 'سباندكس خارجي', ja: ''
  },
  '户外涤纶': {
    cn: '户外涤纶', en: 'Outdoor Polyester', th: 'กลางแจ้ง โพลีเอสเตอร์', vn: 'Ngoài trời Polyester', es: 'Exterior Poliéster',
    pt: 'Outdoor Poliéster', id_lang: 'Outdoor Poliester', ru: 'Уличная Полиэстер', fr: 'Plein air Polyester', ar: 'بوليستر خارجي', ja: ''
  },
  '户外温水洗': {
    cn: '户外温水洗', en: 'Outdoor Warm Water Wash', th: 'กลางแจ้ง ซักน้ำอุ่น', vn: 'Ngoài trời Giặt nước ấm', es: 'Exterior Lavado en agua tibia',
    pt: 'Outdoor Lavagem em água morna', id_lang: 'Outdoor Cuci Air Hangat', ru: 'Уличная Стирка в теплой воде', fr: 'Plein air Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ خارجي', ja: ''
  },
  '户外真丝': {
    cn: '户外真丝', en: 'Outdoor Pure Silk', th: 'กลางแจ้ง ผ้าไหมแท้', vn: 'Ngoài trời Lụa thật', es: 'Exterior Seda pura',
    pt: 'Outdoor Seda pura', id_lang: 'Outdoor Sutra Asli', ru: 'Уличная Натуральный шелк', fr: 'Plein air Soie naturelle', ar: 'حرير طبيعي خارجي', ja: ''
  },
  '户外竹纤维': {
    cn: '户外竹纤维', en: 'Outdoor Bamboo Fiber', th: 'กลางแจ้ง เส้นใยไผ่', vn: 'Ngoài trời Sợi tre', es: 'Exterior Fibra de bambú',
    pt: 'Outdoor Fibra de bambu', id_lang: 'Outdoor Serat Bambu', ru: 'Уличная Бамбуковое волокно', fr: 'Plein air Fibre de bambou', ar: 'ألياف الخيزران خارجي', ja: ''
  },
  '户外粘纤': {
    cn: '户外粘纤', en: 'Outdoor Viscose', th: 'กลางแจ้ง วิสโคส', vn: 'Ngoài trời Viscose', es: 'Exterior Viscosa',
    pt: 'Outdoor Viscose', id_lang: 'Outdoor Viskosa', ru: 'Уличная Вискоза', fr: 'Plein air Viscose', ar: 'فيسكوز خارجي', ja: ''
  },
  '户外精梳棉': {
    cn: '户外精梳棉', en: 'Outdoor Combed Cotton', th: 'กลางแจ้ง ผ้าฝ้ายหวี', vn: 'Ngoài trời Cotton chải', es: 'Exterior Algodón peinado',
    pt: 'Outdoor Algodão penteado', id_lang: 'Outdoor Katun Sisir', ru: 'Уличная Гребенной хлопок', fr: 'Plein air Coton peigné', ar: 'قطن ممشط خارجي', ja: ''
  },
  '户外羊毛': {
    cn: '户外羊毛', en: 'Outdoor Wool', th: 'กลางแจ้ง ขนแกะ', vn: 'Ngoài trời Len', es: 'Exterior Lana',
    pt: 'Outdoor Lã', id_lang: 'Outdoor Wol', ru: 'Уличная Шерсть', fr: 'Plein air Laine', ar: 'صوف خارجي', ja: ''
  },
  '户外羊绒': {
    cn: '户外羊绒', en: 'Outdoor Cashmere', th: 'กลางแจ้ง แคชเมียร์', vn: 'Ngoài trời Cashmere', es: 'Exterior Cachemira',
    pt: 'Outdoor Caxemira', id_lang: 'Outdoor Kasmir', ru: 'Уличная Кашемир', fr: 'Plein air Cachemire', ar: 'كشمير خارجي', ja: ''
  },
  '户外腈纶': {
    cn: '户外腈纶', en: 'Outdoor Acrylic', th: 'กลางแจ้ง อะคริลิก', vn: 'Ngoài trời Acrylic', es: 'Exterior Acrílico',
    pt: 'Outdoor Acrílico', id_lang: 'Outdoor Akrilik', ru: 'Уличная Акрил', fr: 'Plein air Acrylique', ar: 'أكريليك خارجي', ja: ''
  },
  '户外莫代尔': {
    cn: '户外莫代尔', en: 'Outdoor Modal', th: 'กลางแจ้ง โมดอล', vn: 'Ngoài trời Modal', es: 'Exterior Modal',
    pt: 'Outdoor Modal', id_lang: 'Outdoor Modal', ru: 'Уличная Модал', fr: 'Plein air Modal', ar: 'مودال خارجي', ja: ''
  },
  '户外莱赛尔': {
    cn: '户外莱赛尔', en: 'Outdoor Lyocell', th: 'กลางแจ้ง ไลโอเซลล์', vn: 'Ngoài trời Lyocell', es: 'Exterior Lyocell',
    pt: 'Outdoor Lyocell', id_lang: 'Outdoor Lyocell', ru: 'Уличная Лиоцелл', fr: 'Plein air Lyocell', ar: 'ليوسيل خارجي', ja: ''
  },
  '户外锦纶': {
    cn: '户外锦纶', en: 'Outdoor Nylon', th: 'กลางแจ้ง ไนลอน', vn: 'Ngoài trời Nylon', es: 'Exterior Nailon',
    pt: 'Outdoor Nylon', id_lang: 'Outdoor Nilon', ru: 'Уличная Нейлон', fr: 'Plein air Nylon', ar: 'نايلون خارجي', ja: ''
  },
  '户外马海毛': {
    cn: '户外马海毛', en: 'Outdoor Mohair', th: 'กลางแจ้ง โมแฮร์', vn: 'Ngoài trời Mohair', es: 'Exterior Mohair',
    pt: 'Outdoor Mohair', id_lang: 'Outdoor Mohair', ru: 'Уличная Мохер', fr: 'Plein air Mohair', ar: 'موهير خارجي', ja: ''
  },
  '手心袋布': {
    cn: '手心袋布', en: 'Handbag cloth', th: 'ผ้าสำหรับกระเป๋าถือ', vn: 'Vải túi xách', es: 'Tela para bolsos',
    pt: 'tecido para bolsa', id_lang: 'Kain tas tangan', ru: 'ткань для сумок', fr: 'Tissu pour sac à main', ar: 'قماش حقيبة اليد', ja: ''
  },
  '手洗': {
    cn: '手洗', en: 'Hand wash', th: 'ซักมือ', vn: 'Giặt tay', es: 'Lavar a mano',
    pt: 'Lavagem à mão', id_lang: 'Cuci dengan tangan', ru: 'Ручная стирка', fr: 'Lavage à la main', ar: 'غسيل يدوي', ja: ''
  },
  '手洗 最高洗涤温度40℃': {
    cn: '手洗 最高洗涤温度40℃', en: 'Hand Wash, Maximum Wash Temperature 40°C', th: 'ซักมือ อุณหภูมิซักสูงสุด 40°C', vn: 'Giặt tay, nhiệt độ giặt tối đa 40°C', es: 'Lavado a mano, temperatura máxima de lavado 40°C',
    pt: 'Lavagem à mão, temperatura máxima de lavagem 40°C', id_lang: 'Cuci Tangan, Suhu Cuci Maksimum 40°C', ru: 'Ручная стирка, максимальная температура стирки 40°C', fr: 'Lavage à la main, température de lavage maximale 40°C', ar: 'غسيل يدوي، أقصى درجة حرارة للغسيل 40 درجة مئوية', ja: ''
  },
  '手绣': {
    cn: '手绣', en: 'hand embroidery', th: 'งานปักมือ', vn: 'thêu tay', es: 'bordado a mano',
    pt: 'bordado à mão', id_lang: 'sulaman tangan', ru: 'ручная вышивка', fr: 'broderie à la main', ar: 'تطريز يدوي', ja: ''
  },
  '手钩': {
    cn: '手钩', en: 'hand hook', th: 'ตะขอมือ', vn: 'móc tay', es: 'gancho de mano',
    pt: 'gancho de mão', id_lang: 'pengait tangan', ru: 'ручной крюк', fr: 'crochet à main', ar: 'خطاف يدوي', ja: ''
  },
  '手钩花': {
    cn: '手钩花', en: 'Hand-crocheted flowers', th: 'ดอกไม้ถักโครเชต์ด้วยมือ', vn: 'Hoa móc tay', es: 'Flores tejidas a mano',
    pt: 'Flores feitas à mão em crochê', id_lang: 'Bunga rajutan tangan', ru: 'Цветы, связанные крючком вручную', fr: 'Fleurs crochetées à la main', ar: 'زهور مصنوعة يدوياً بالكروشيه', ja: ''
  },
  '手钩除外': {
    cn: '手钩除外', en: 'Except for hand hooks', th: 'ยกเว้นตะขอเกี่ยว', vn: 'Ngoại trừ móc tay', es: 'Excepto los ganchos de mano',
    pt: 'Exceto para ganchos de mão', id_lang: 'Kecuali untuk kait tangan', ru: 'За исключением ручных крюков', fr: 'À l&#39;exception des crochets à main', ar: 'باستثناء خطافات اليد', ja: ''
  },
  '打花': {
    cn: '打花', en: 'Flower', th: 'ดอกไม้', vn: 'Hoa', es: 'Flor',
    pt: 'Flor', id_lang: 'Bunga', ru: 'Цветок', fr: 'Fleur', ar: 'ورد', ja: ''
  },
  '批号': {
    cn: '批号', en: 'Batch No.', th: 'เลขล็อต', vn: 'Số lô', es: 'Lote Nº',
    pt: 'Lote Nº', id_lang: 'Nomor batch', ru: 'Номер партии', fr: 'Lot Nº', ar: 'رقم التشغيلة', ja: ''
  },
  '抗菌功能': {
    cn: '抗菌功能', en: 'Antibacterial function', th: 'คุณสมบัติในการต้านเชื้อแบคทีเรีย', vn: 'Chức năng kháng khuẩn', es: 'Función antibacteriana',
    pt: 'Função antibacteriana', id_lang: 'Fungsi antibakteri', ru: 'Антибактериальная функция', fr: 'fonction antibactérienne', ar: 'وظيفة مضادة للبكتيريا', ja: ''
  },
  '抗菌纤维': {
    cn: '抗菌纤维', en: 'Antibacterial fibers', th: 'เส้นใยต้านแบคทีเรีย', vn: 'Sợi kháng khuẩn', es: 'Fibras antibacterianas',
    pt: 'Fibras antibacterianas', id_lang: 'Serat antibakteri', ru: 'Антибактериальные волокна', fr: 'fibres antibactériennes', ar: 'ألياف مضادة للبكتيريا', ja: ''
  },
  '抗菌腈纶': {
    cn: '抗菌腈纶', en: 'Antibacterial acrylic fiber', th: 'เส้นใยอะคริลิกต้านแบคทีเรีย', vn: 'Sợi acrylic kháng khuẩn', es: 'Fibra acrílica antibacteriana',
    pt: 'fibra acrílica antibacteriana', id_lang: 'Serat akrilik antibakteri', ru: 'Антибактериальное акриловое волокно', fr: 'Fibre acrylique antibactérienne', ar: 'ألياف أكريليك مضادة للبكتيريا', ja: ''
  },
  '抗起球': {
    cn: '抗起球', en: 'Anti-pilling', th: 'ป้องกันการเกิดขุย', vn: 'Chống vón cục', es: 'Antipilling',
    pt: 'Antipilling', id_lang: 'Anti-pilling', ru: 'Предотвращение образования катышков', fr: 'Anti-boulochage', ar: 'مضاد للوبر', ja: ''
  },
  '抗起球北极绒': {
    cn: '抗起球北极绒', en: 'Anti-pilling Arctic Velvet', th: 'ผ้ากำมะหยี่อาร์กติกป้องกันการเกิดขุย', vn: 'Vải nhung Bắc Cực chống xù lông', es: 'Terciopelo ártico antipilling',
    pt: 'Veludo Ártico Antipilling', id_lang: 'Anti-pilling Arctic Velvet', ru: 'Антикапиллярный арктический бархат', fr: 'Velours arctique anti-boulochage', ar: 'مخمل القطب الشمالي المقاوم للوبر', ja: ''
  },
  '抗起球腈纶': {
    cn: '抗起球腈纶', en: 'Anti-pilling acrylic fiber', th: 'เส้นใยอะคริลิกป้องกันการเกิดขุย', vn: 'Sợi acrylic chống vón cục', es: 'Fibra acrílica antipilling',
    pt: 'fibra acrílica antipilling', id_lang: 'Serat akrilik anti-pilling', ru: 'Акриловое волокно, предотвращающее образование катышков.', fr: 'Fibre acrylique anti-boulochage', ar: 'ألياف أكريليك مقاومة للوبر', ja: ''
  },
  '披肩': {
    cn: '披肩', en: 'shawl', th: 'ผ้าคลุมไหล่', vn: 'khăn choàng', es: 'chal',
    pt: 'xale', id_lang: 'selendang', ru: 'шаль', fr: 'châle', ar: 'شال', ja: ''
  },
  '披肩面料': {
    cn: '披肩面料', en: 'Shawl fabric', th: 'ผ้าสำหรับทำผ้าคลุมไหล่', vn: 'Vải khăn choàng', es: 'Tela para chal',
    pt: 'Tecido para xale', id_lang: 'Kain selendang', ru: 'Ткань для шали', fr: 'Tissu pour châle', ar: 'قماش الشال', ja: ''
  },
  '抽绳': {
    cn: '抽绳', en: 'drawstring', th: 'เชือกผูก', vn: 'dây rút', es: 'cordón',
    pt: 'cordão', id_lang: 'kolor', ru: 'шнурок', fr: 'cordon de serrage', ar: 'رباط سحب', ja: ''
  },
  '拉架': {
    cn: '拉架', en: 'pull the rack', th: 'ดึงชั้นวาง', vn: 'kéo giá đỡ', es: 'tirar del estante',
    pt: 'puxe a cremalheira', id_lang: 'tarik raknya', ru: 'потяните стеллаж', fr: 'tirer le rack', ar: 'اسحب الرف', ja: ''
  },
  '拉架刷毛面料': {
    cn: '拉架刷毛面料', en: 'stretch brush fabric', th: 'ผ้าแปรงยืดหยุ่น', vn: 'vải chải co giãn', es: 'tejido de cepillo elástico',
    pt: 'tecido de escova elástico', id_lang: 'kain sikat elastis', ru: 'эластичная кисть ткань', fr: 'tissu extensible brossé', ar: 'قماش فرشاة مطاطي', ja: ''
  },
  '拉架双面': {
    cn: '拉架双面', en: 'Double-sided tensioner', th: 'ตัวปรับความตึงแบบสองด้าน', vn: 'Bộ căng dây hai mặt', es: 'Tensor de doble cara',
    pt: 'Tensionador de dupla face', id_lang: 'Pengencang dua sisi', ru: 'Двусторонний натяжитель', fr: 'Tendeur double face', ar: 'جهاز شد مزدوج الجوانب', ja: ''
  },
  '拉架双面布': {
    cn: '拉架双面布', en: 'Double-sided fabric for the truss', th: 'ผ้าสองด้านสำหรับโครงหลังคา', vn: 'Vải hai mặt của giàn khung', es: 'Tejido de doble cara para la estructura.',
    pt: 'Tecido dupla face para a treliça', id_lang: 'Kain rangka dua sisi', ru: 'Двусторонняя ткань для фермы', fr: 'Tissu double face pour la structure', ar: 'قماش ذو وجهين للهيكل', ja: ''
  },
  '拉架斜纹': {
    cn: '拉架斜纹', en: 'Twill', th: 'ผ้าทวิลล์', vn: 'Vải chéo', es: 'Tela asargada',
    pt: 'Sarja', id_lang: 'Kain kepar', ru: 'Твил', fr: 'Sergé', ar: 'نسيج قطني طويل', ja: ''
  },
  '拉架梯级间条': {
    cn: '拉架梯级间条', en: 'Frame ladder strip', th: 'แถบบันไดเฟรม', vn: 'Thanh thang khung', es: 'Tira de escalera de marco',
    pt: 'tira de escada de estrutura', id_lang: 'Rangka strip tangga', ru: 'Полоска лестничной рамы', fr: 'latte d&#39;échelle de cadre', ar: 'سلم إطار', ja: ''
  },
  '拉架棉': {
    cn: '拉架棉', en: 'stretch cotton', th: 'ผ้าฝ้ายยืด', vn: 'vải cotton co giãn', es: 'algodón elástico',
    pt: 'algodão elástico', id_lang: 'katun elastis', ru: 'эластичный хлопок', fr: 'coton extensible', ar: 'قطن مطاطي', ja: ''
  },
  '拉架锦柔棉': {
    cn: '拉架锦柔棉', en: 'Plug-in Soft Cotton', th: 'ผ้าฝ้ายนุ่มแบบเสียบปลั๊ก', vn: 'Bông mềm cắm điện', es: 'Algodón suave enchufable',
    pt: 'Algodão macio para tomada', id_lang: 'Katun Lembut yang Dapat Dicolokkan', ru: 'Встраиваемый мягкий хлопок', fr: 'Coton doux à brancher', ar: 'قطن ناعم قابل للتوصيل', ja: ''
  },
  '拉链': {
    cn: '拉链', en: 'Zipper', th: 'ซิป', vn: 'Dây kéo / Khóa kéo', es: 'Cremallera',
    pt: 'Zíper / Fecho', id_lang: 'Ritsleting', ru: 'Молния', fr: 'Fermeture éclair', ar: 'سحاب', ja: ''
  },
  '拉链护齿': {
    cn: '拉链护齿', en: 'Zipper teeth guard', th: 'ที่ป้องกันฟันซิป', vn: 'Bảo vệ răng khóa kéo', es: 'Protector dental con cremallera',
    pt: 'protetor de dentes do zíper', id_lang: 'Pelindung gigi ritsleting', ru: 'Защитная накладка на зубы с застежкой-молнией', fr: 'Protège-dents à fermeture éclair', ar: 'واقي أسنان مزود بسحاب', ja: ''
  },
  '拼布': {
    cn: '拼布', en: 'Patchwork', th: 'แพทช์เวิร์ค', vn: 'Ghép vải', es: 'Labor de retazos',
    pt: 'Retalhos', id_lang: 'Tambal sulam', ru: 'Лоскутное одеяло', fr: 'Patchwork', ar: 'مرقعة', ja: ''
  },
  '拼料': {
    cn: '拼料', en: 'Mixed materials', th: 'วัสดุผสม', vn: 'Vật liệu hỗn hợp', es: 'Materiales mixtos',
    pt: 'Materiais mistos', id_lang: 'Bahan campuran', ru: 'Смешанные материалы', fr: 'matériaux mixtes', ar: 'مواد مختلطة', ja: ''
  },
  '挂面': {
    cn: '挂面', en: 'vermicelli', th: 'วุ้นเส้น', vn: 'bún', es: 'fideos',
    pt: 'vermicelli', id_lang: 'bihun', ru: 'вермишель', fr: 'vermicelle', ar: 'الشعيرية', ja: ''
  },
  '挑孔': {
    cn: '挑孔', en: 'Piercing', th: 'การเจาะ', vn: 'Xỏ khuyên', es: 'Perforación',
    pt: 'Piercing', id_lang: 'Tajam', ru: 'Пирсинг', fr: 'Perçant', ar: 'ثقب الجسم', ja: ''
  },
  '挑孔提花': {
    cn: '挑孔提花', en: 'Jacquard', th: 'จาการ์ด', vn: 'Jacquard', es: 'Jacquard',
    pt: 'Jacquard', id_lang: 'Jacquard', ru: 'Жаккар', fr: 'Jacquard', ar: 'جاكارد', ja: ''
  },
  '挺滑双纱平纹': {
    cn: '挺滑双纱平纹', en: 'Smooth double yarn plain weave', th: 'ผ้าทอเรียบสองเส้นด้าย', vn: 'Dệt trơn sợi đôi mịn', es: 'Tejido liso de doble hilo',
    pt: 'Tecido liso de fio duplo', id_lang: 'Tenunan polos benang ganda yang halus', ru: 'Гладкая двойная пряжа простого переплетения', fr: 'toile lisse à double fil', ar: 'نسيج سادة من خيوط مزدوجة ناعمة', ja: ''
  },
  '接触凉感功能': {
    cn: '接触凉感功能', en: 'Cooling sensation upon contact', th: 'สัมผัสแล้วรู้สึกเย็นสบาย', vn: 'Cảm giác mát lạnh khi tiếp xúc', es: 'Sensación de frescor al contacto.',
    pt: 'Sensação refrescante ao contato', id_lang: 'Sensasi dingin saat disentuh', ru: 'Ощущение прохлады при контакте', fr: 'Sensation de fraîcheur au contact', ar: 'إحساس بالبرودة عند التلامس', ja: ''
  },
  '提条部位除外': {
    cn: '提条部位除外', en: 'Except for the lifting part', th: 'ยกเว้นส่วนที่ยกขึ้น', vn: 'Ngoại trừ phần nâng', es: 'Excepto por la parte de elevación',
    pt: 'Exceto pela parte de levantamento.', id_lang: 'Kecuali bagian pengangkatannya', ru: 'За исключением подъемной части.', fr: 'À l&#39;exception de la partie levage', ar: 'باستثناء جزء الرفع', ja: ''
  },
  '提花': {
    cn: '提花', en: 'Jacquard', th: 'จาการ์ด', vn: 'Jacquard', es: 'Jacquard',
    pt: 'Jacquard', id_lang: 'Jacquard', ru: 'Жаккар', fr: 'Jacquard', ar: 'جاكارد', ja: ''
  },
  '提花印花面料': {
    cn: '提花印花面料', en: 'Jacquard printed fabrics', th: 'ผ้าพิมพ์ลายจาการ์ด', vn: 'Vải in Jacquard', es: 'Telas estampadas en jacquard',
    pt: 'Tecidos estampados em jacquard', id_lang: 'Kain bercetak jacquard', ru: 'Жаккардовые ткани с принтом', fr: 'tissus imprimés Jacquard', ar: 'قماش مطبوع بنمط الجاكار', ja: ''
  },
  '提花四面弹': {
    cn: '提花四面弹', en: 'Jacquard four-sided stretch', th: 'ผ้าแจ็กการ์ดแบบยืดได้สี่ด้าน', vn: 'Vải Jacquard co giãn bốn mặt', es: 'Jacquard elástico de cuatro lados',
    pt: 'Jacquard de quatro lados', id_lang: 'Jacquard peregangan empat sisi', ru: 'Жаккардовый четырехсторонний растяжение', fr: 'Jacquard extensible sur les quatre côtés', ar: 'نسيج جاكار مطاطي رباعي الجوانب', ja: ''
  },
  '提花复合': {
    cn: '提花复合', en: 'Jacquard composite', th: 'วัสดุคอมโพสิตจาการ์ด', vn: 'Vật liệu tổng hợp Jacquard', es: 'compuesto Jacquard',
    pt: 'Compósito Jacquard', id_lang: 'Komposit Jacquard', ru: 'Жаккардовый композит', fr: 'Composite Jacquard', ar: 'مركب جاكار', ja: ''
  },
  '提花泡泡格': {
    cn: '提花泡泡格', en: 'Jacquard bubble pattern', th: 'ลวดลายฟองอากาศแบบจาการ์ด', vn: 'Họa tiết bong bóng Jacquard', es: 'cuadrícula de burbujas Jacquard',
    pt: 'Grade de bolhas Jacquard', id_lang: 'Kisi gelembung Jacquard', ru: 'Жаккардовый узор в виде пузырьков', fr: 'Motif à bulles Jacquard', ar: 'نمط فقاعات الجاكار', ja: ''
  },
  '提花珠地': {
    cn: '提花珠地', en: 'Jacquard pique', th: 'ผ้าปิเก้จาการ์ด', vn: 'Vải dệt jacquard pique', es: 'Piqué jacquard',
    pt: 'Jacquard piqué', id_lang: 'Jacquard pique', ru: 'Жаккард пике', fr: 'Jacquard piqué', ar: 'نسيج جاكار بيكيه', ja: ''
  },
  '提花纱除外': {
    cn: '提花纱除外', en: 'Except for jacquard yarn', th: 'ยกเว้นเส้นด้ายแจ็กการ์ด', vn: 'Ngoại trừ sợi dệt jacquard', es: 'Excepto el hilo jacquard',
    pt: 'Com exceção do fio jacquard.', id_lang: 'Kecuali benang jacquard', ru: 'За исключением жаккардовой пряжи.', fr: 'À l&#39;exception du fil jacquard', ar: 'باستثناء خيوط الجاكار', ja: ''
  },
  '提花肌理': {
    cn: '提花肌理', en: 'jacquard texture', th: 'ลวดลายแจ็กการ์ด', vn: 'kết cấu jacquard', es: 'textura jacquard',
    pt: 'textura jacquard', id_lang: 'tekstur jacquard', ru: 'жаккардовая текстура', fr: 'texture jacquard', ar: 'نسيج الجاكار', ja: ''
  },
  '提花速干面料': {
    cn: '提花速干面料', en: 'Jacquard quick-drying fabric', th: 'ผ้าแจ็กการ์ดแห้งเร็ว', vn: 'Vải Jacquard nhanh khô', es: 'Tejido jacquard de secado rápido',
    pt: 'Tecido Jacquard de secagem rápida', id_lang: 'Kain jacquard cepat kering', ru: 'Жаккардовая быстросохнущая ткань', fr: 'Tissu Jacquard à séchage rapide', ar: 'قماش جاكار سريع الجفاف', ja: ''
  },
  '提花部位除外': {
    cn: '提花部位除外', en: 'Except for the jacquard parts', th: 'ยกเว้นส่วนที่เป็นลายจาการ์ด', vn: 'Ngoại trừ các bộ phận dệt jacquard.', es: 'Excepto por las partes jacquard',
    pt: 'Com exceção das partes em jacquard.', id_lang: 'Kecuali bagian jacquard', ru: 'За исключением жаккардовых элементов.', fr: 'À l&#39;exception des parties jacquard', ar: 'باستثناء أجزاء الجاكار', ja: ''
  },
  '提花间条': {
    cn: '提花间条', en: 'Jacquard stripes', th: 'ลายทางจาการ์ด', vn: 'Sọc Jacquard', es: 'rayas jacquard',
    pt: 'Listras Jacquard', id_lang: 'Garis-garis jacquard', ru: 'Жаккардовые полосы', fr: 'rayures Jacquard', ar: 'جاكارد', ja: ''
  },
  '提花除外': {
    cn: '提花除外', en: 'Except for jacquard', th: 'ยกเว้นผ้าแจ็กการ์ด', vn: 'Ngoại trừ vải jacquard', es: 'Excepto por jacquard',
    pt: 'Exceto para jacquard', id_lang: 'Kecuali jacquard', ru: 'За исключением жаккарда', fr: 'À l&#39;exception du jacquard', ar: 'باستثناء الجاكار', ja: ''
  },
  '提花面料': {
    cn: '提花面料', en: 'Jacquard fabric', th: 'ผ้าแจ็กการ์ด', vn: 'Vải Jacquard', es: 'Tejido jacquard',
    pt: 'Tecido Jacquard', id_lang: 'Kain jacquard', ru: 'Жаккардовая ткань', fr: 'Tissu jacquard', ar: 'قماش الجاكار', ja: ''
  },
  '支': {
    cn: '支', en: 'Count', th: 'คาวน์', vn: 'Chi số sợi', es: 'Título',
    pt: 'Título', id_lang: 'Nomor benang', ru: 'Номер пряжи', fr: 'Nombre de fils', ar: 'نمرة الخيط', ja: '番手'
  },
  '支冰爽棉': {
    cn: '支冰爽棉', en: 'Cool cotton', th: 'ผ้าฝ้ายเย็นสบาย', vn: 'Bông thoáng mát', es: 'Algodón fresco',
    pt: 'Algodão fresco', id_lang: 'Katun dingin', ru: 'Прохладный хлопок', fr: 'Coton frais', ar: 'قطن بارد', ja: ''
  },
  '支双面': {
    cn: '支双面', en: 'Double-sided support', th: 'รองรับสองด้าน', vn: 'Hỗ trợ hai mặt', es: 'Soporte de doble cara',
    pt: 'Suporte de dupla face', id_lang: 'Dukungan dua sisi', ru: 'Двусторонняя поддержка', fr: 'Support double face', ar: 'دعم مزدوج الجوانب', ja: ''
  },
  '支平纹': {
    cn: '支平纹', en: 'Plain weave', th: 'ทอธรรมดา', vn: 'Dệt trơn', es: 'tejido liso',
    pt: 'Ponto de tafetá', id_lang: 'Tenunan polos', ru: 'Простое переплетение', fr: 'toile unie', ar: 'نسيج عادي', ja: ''
  },
  '支棉盖丝': {
    cn: '支棉盖丝', en: 'cotton cover silk', th: 'ผ้าฝ้ายหุ้มผ้าไหม', vn: 'vỏ bông lụa', es: 'funda de algodón seda',
    pt: 'capa de algodão seda', id_lang: 'penutup katun sutra', ru: 'хлопковый чехол шелк', fr: 'coton recouvrir de soie', ar: 'غطاء قطني حريري', ja: ''
  },
  '收口处长丝除外': {
    cn: '收口处长丝除外', en: 'Except for the long filaments at the hem', th: 'ยกเว้นเส้นใยยาวบริเวณชายผ้า', vn: 'Ngoại trừ những sợi dài ở viền.', es: 'Excepto por los largos filamentos en el dobladillo',
    pt: 'Exceto pelos longos filamentos na bainha', id_lang: 'Kecuali untuk filamen panjang di bagian tepinya', ru: 'За исключением длинных волокон по краю.', fr: 'À l&#39;exception des longs filaments à l&#39;ourlet', ar: 'باستثناء الخيوط الطويلة عند الحافة', ja: ''
  },
  '数码印花蕾丝面料': {
    cn: '数码印花蕾丝面料', en: 'Digitally printed lace fabric', th: 'ผ้าลูกไม้พิมพ์ลายดิจิทัล', vn: 'Vải ren in kỹ thuật số', es: 'Tela de encaje estampada digitalmente',
    pt: 'Tecido de renda com estampa digital', id_lang: 'Kain renda yang dicetak secara digital', ru: 'кружевная ткань с цифровой печатью', fr: 'Tissu en dentelle imprimé numériquement', ar: 'قماش دانتيل مطبوع رقميًا', ja: ''
  },
  '数量': {
    cn: '数量', en: 'Quantity', th: 'จำนวน', vn: 'Số lượng', es: 'Cantidad',
    pt: 'Quantidade', id_lang: 'Jumlah', ru: 'Количество', fr: 'Quantité', ar: 'الكمية', ja: ''
  },
  '斜纹': {
    cn: '斜纹', en: 'Twill', th: 'ผ้าทวิลล์', vn: 'Vải chéo', es: 'Tela asargada',
    pt: 'Sarja', id_lang: 'Kain kepar', ru: 'Твил', fr: 'Sergé', ar: 'نسيج قطني طويل', ja: ''
  },
  '斜纹云柔棉': {
    cn: '斜纹云柔棉', en: 'Twill Cloud Soft Cotton', th: 'ผ้าฝ้ายทวิลล์เนื้อนุ่มลายเมฆ', vn: 'Vải cotton mềm mại, dệt chéo, màu mây.', es: 'Sarga de algodón suave como la nube',
    pt: 'Sarja Cloud Algodão Macio', id_lang: 'Katun Lembut Twill Cloud', ru: 'Твил Cloud Soft Cotton', fr: 'Sergé de coton doux nuageux', ar: 'قطن ناعم من نسيج التويل السحابي', ja: ''
  },
  '斜纹双面': {
    cn: '斜纹双面', en: 'Twill Double-sided', th: 'ผ้าทวิลล์สองด้าน', vn: 'Vải chéo hai mặt', es: 'Sarga de doble cara',
    pt: 'Sarja dupla face', id_lang: 'Kain kepar dua sisi', ru: 'Двусторонняя саржевая ткань', fr: 'Sergé double face', ar: 'قماش قطني مزدوج الجوانب', ja: ''
  },
  '斜纹提花': {
    cn: '斜纹提花', en: 'Twill Jacquard', th: 'ผ้าทวิลล์แจ็กการ์ด', vn: 'Vải dệt chéo Jacquard', es: 'Jacquard de sarga',
    pt: 'Jacquard sarjado', id_lang: 'Jacquard Kepar', ru: 'Твиловый жаккард', fr: 'Jacquard sergé', ar: 'نسيج جاكار مائل', ja: ''
  },
  '斜纹梭织布': {
    cn: '斜纹梭织布', en: 'Twill woven fabric', th: 'ผ้าทอทวิลล์', vn: 'Vải dệt chéo', es: 'Tejido de sarga',
    pt: 'Tecido de sarja', id_lang: 'Kain tenun kepar', ru: 'Ткань саржевого переплетения', fr: 'tissu tissé en sergé', ar: 'قماش منسوج من نسيج التويل', ja: ''
  },
  '斜纹空气层': {
    cn: '斜纹空气层', en: 'Twill Air Layer', th: 'ผ้าทวิลล์ระบายอากาศ', vn: 'Lớp vải chéo thoáng khí', es: 'Capa de aire de sarga',
    pt: 'Camada de ar em sarja', id_lang: 'Lapisan Udara Kepar', ru: 'Твиловый воздушный слой', fr: 'Couche d&#39;air en sergé', ar: 'طبقة هوائية من نسيج التويل', ja: ''
  },
  '斜纹肌理': {
    cn: '斜纹肌理', en: 'diagonal texture', th: 'พื้นผิวแนวทแยง', vn: 'kết cấu chéo', es: 'textura diagonal',
    pt: 'textura diagonal', id_lang: 'tekstur diagonal', ru: 'диагональная текстура', fr: 'texture diagonale', ar: 'نسيج قطري', ja: ''
  },
  '斜纹面料': {
    cn: '斜纹面料', en: 'Twill fabric', th: 'ผ้าทวิลล์', vn: 'Vải chéo', es: 'Tejido de sarga',
    pt: 'Tecido sarja', id_lang: 'Kain kepar', ru: 'Ткань саржевого переплетения', fr: 'tissu sergé', ar: 'قماش التويل', ja: ''
  },
  '新休闲': {
    cn: '新休闲', en: 'New Leisure', th: 'สันทนาการใหม่', vn: 'Giải trí mới', es: 'Nuevo ocio',
    pt: 'Novo Lazer', id_lang: 'Hiburan Baru', ru: 'Новый досуг', fr: 'Nouveaux loisirs', ar: 'نيو ليجر', ja: ''
  },
  '新生儿': {
    cn: '新生儿', en: 'Newborn (NB)', th: 'เด็กแรกเกิด (NB)', vn: 'Sơ sinh (NB)', es: 'Recién nacido (NB)',
    pt: 'Recém-nascido (RN)', id_lang: 'Bayi Baru Lahir', ru: 'Для новорожденных', fr: 'Nouveau-né (NB)', ar: 'حديث الولادة', ja: ''
  },
  '新疆棉': {
    cn: '新疆棉', en: 'Xinjiang cotton', th: 'ผ้าฝ้ายซินเจียง', vn: 'Bông Tân Cương', es: 'Algodón de Sinkiang',
    pt: 'Algodão de Xinjiang', id_lang: 'kapas Xinjiang', ru: 'Синьцзянский хлопок', fr: 'Coton du Xinjiang', ar: 'قطن شينجيانغ', ja: ''
  },
  '新疆长绒棉': {
    cn: '新疆长绒棉', en: 'Xinjiang long-staple cotton', th: 'ฝ้ายเส้นใยยาวซินเจียง', vn: 'Bông sợi dài Tân Cương', es: 'Algodón de fibra larga de Xinjiang',
    pt: 'Algodão de fibra longa de Xinjiang', id_lang: 'kapas serat panjang Xinjiang', ru: 'Синьцзянский длинноволокнистый хлопок', fr: 'Coton à fibres longues du Xinjiang', ar: 'قطن شينجيانغ طويل التيلة', ja: ''
  },
  '无光锦纶': {
    cn: '无光锦纶', en: 'Matte nylon', th: 'ไนลอนด้าน', vn: 'Nylon mờ', es: 'Nylon mate',
    pt: 'Nylon fosco', id_lang: 'Nilon matte', ru: 'Матовый нейлон', fr: 'nylon mat', ar: 'نايلون غير لامع', ja: ''
  },
  '无纺布除外': {
    cn: '无纺布除外', en: 'Except for non-woven fabrics', th: 'ยกเว้นผ้าไม่ทอ', vn: 'Ngoại trừ vải không dệt', es: 'Excepto para telas no tejidas',
    pt: 'Exceto para tecidos não tecidos', id_lang: 'Kecuali untuk kain non-anyaman', ru: 'За исключением нетканых материалов.', fr: 'À l&#39;exception des tissus non tissés', ar: 'باستثناء الأقمشة غير المنسوجة', ja: ''
  },
  '日本码': {
    cn: '日本码', en: 'JP Size', th: 'ไซซ์ญี่ปุ่น', vn: 'Cỡ JP', es: 'Talla JP',
    pt: 'Tamanho JP', id_lang: 'Ukuran JP', ru: 'Размер JP', fr: 'Taille JP', ar: 'مقاس JP', ja: ''
  },
  '时尚': {
    cn: '时尚', en: 'Fashion', th: 'แฟชั่น', vn: 'Thời trang', es: 'de moda',
    pt: 'Fashion', id_lang: 'Fashion', ru: 'Модный', fr: 'Mode', ar: 'موضة', ja: ''
  },
  '时尚30度机洗': {
    cn: '时尚30度机洗', en: 'Fashion Machine Wash at 30°C', th: 'แฟชั่น ซักเครื่อง 30°C', vn: 'Thời trang Giặt máy 30°C', es: 'Moda Lavado a máquina a 30°C',
    pt: 'Fashion Lavagem à máquina a 30°C', id_lang: 'Fashion Cuci Mesin 30°C', ru: 'Модная Машинная стирка при 30°C', fr: 'Mode Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة عصري', ja: ''
  },
  '时尚40度机洗': {
    cn: '时尚40度机洗', en: 'Fashion Machine Wash at 40°C', th: 'แฟชั่น ซักเครื่อง 40°C', vn: 'Thời trang Giặt máy 40°C', es: 'Moda Lavado a máquina a 40°C',
    pt: 'Fashion Lavagem à máquina a 40°C', id_lang: 'Fashion Cuci Mesin 40°C', ru: 'Модная Машинная стирка при 40°C', fr: 'Mode Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة عصري', ja: ''
  },
  '时尚不可干洗': {
    cn: '时尚不可干洗', en: 'Fashion Do Not Dry Clean', th: 'แฟชั่น ห้ามซักแห้ง', vn: 'Thời trang Không giặt khô', es: 'Moda No lavar en seco',
    pt: 'Fashion Não lavar a seco', id_lang: 'Fashion Jangan Dry Clean', ru: 'Модная Не подвергать химчистке', fr: 'Mode Ne pas nettoyer à sec', ar: 'لا تنظف جافاً عصري', ja: ''
  },
  '时尚不可漂白': {
    cn: '时尚不可漂白', en: 'Fashion Do Not Bleach', th: 'แฟชั่น ห้ามฟอกขาว', vn: 'Thời trang Không tẩy trắng', es: 'Moda No blanquear',
    pt: 'Fashion Não usar alvejante', id_lang: 'Fashion Jangan Diputihkan', ru: 'Модная Не отбеливать', fr: 'Mode Ne pas blanchir', ar: 'لا تبيض عصري', ja: ''
  },
  '时尚不可烘干': {
    cn: '时尚不可烘干', en: 'Fashion Do Not Tumble Dry', th: 'แฟชั่น ห้ามอบแห้ง', vn: 'Thời trang Không sấy khô', es: 'Moda No secar en secadora',
    pt: 'Fashion Não secar em secadora', id_lang: 'Fashion Jangan Dikeringkan', ru: 'Модная Не сушить в машине', fr: 'Mode Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف عصري', ja: ''
  },
  '时尚亚麻': {
    cn: '时尚亚麻', en: 'Fashion Linen', th: 'แฟชั่น ผ้าลินิน', vn: 'Thời trang Vải lanh', es: 'Moda Lino',
    pt: 'Fashion Linho', id_lang: 'Fashion Linen', ru: 'Модная Лен', fr: 'Mode Lin', ar: 'كتان عصري', ja: ''
  },
  '时尚低温熨烫': {
    cn: '时尚低温熨烫', en: 'Fashion Low Temperature Ironing', th: 'แฟชั่น รีดอุณหภูมิต่ำ', vn: 'Thời trang Ủi nhiệt độ thấp', es: 'Moda Planchar a baja temperatura',
    pt: 'Fashion Passar a baixa temperatura', id_lang: 'Fashion Setrika Suhu Rendah', ru: 'Модная Глажка при низкой температуре', fr: 'Mode Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة عصري', ja: ''
  },
  '时尚再生涤纶': {
    cn: '时尚再生涤纶', en: 'Fashion Recycled Polyester', th: 'แฟชั่น โพลีเอสเตอร์รีไซเคิล', vn: 'Thời trang Polyester tái chế', es: 'Moda Poliéster reciclado',
    pt: 'Fashion Poliéster reciclado', id_lang: 'Fashion Poliester Daur Ulang', ru: 'Модная Переработанный полиэстер', fr: 'Mode Polyester recyclé', ar: 'بوليستر معاد التدوير عصري', ja: ''
  },
  '时尚冷水洗': {
    cn: '时尚冷水洗', en: 'Fashion Cold Water Wash', th: 'แฟชั่น ซักน้ำเย็น', vn: 'Thời trang Giặt nước lạnh', es: 'Moda Lavado en agua fría',
    pt: 'Fashion Lavagem em água fria', id_lang: 'Fashion Cuci Air Dingin', ru: 'Модная Стирка в холодной воде', fr: 'Mode Lavage à l\'eau froide', ar: 'غسيل بالماء البارد عصري', ja: ''
  },
  '时尚天丝': {
    cn: '时尚天丝', en: 'Fashion Tencel', th: 'แฟชั่น เทนเซล', vn: 'Thời trang Tencel', es: 'Moda Tencel',
    pt: 'Fashion Tencel', id_lang: 'Fashion Tencel', ru: 'Модная Тенсел', fr: 'Mode Tencel', ar: 'تنسل عصري', ja: ''
  },
  '时尚尼龙': {
    cn: '时尚尼龙', en: 'Fashion Nylon', th: 'แฟชั่น ไนลอน', vn: 'Thời trang Nylon', es: 'Moda Nailon',
    pt: 'Fashion Nylon', id_lang: 'Fashion Nilon', ru: 'Модная Нейлон', fr: 'Mode Nylon', ar: 'نايلون عصري', ja: ''
  },
  '时尚平铺晾干': {
    cn: '时尚平铺晾干', en: 'Fashion Lay Flat to Dry', th: 'แฟชั่น ตากแห้งแบบแบน', vn: 'Thời trang Phơi phẳng', es: 'Moda Secar en plano',
    pt: 'Fashion Secar na horizontal', id_lang: 'Fashion Keringkan Datar', ru: 'Модная Сушить в расправленном виде', fr: 'Mode Sécher à plat', ar: 'تجفيف مسطح عصري', ja: ''
  },
  '时尚悬挂晾干': {
    cn: '时尚悬挂晾干', en: 'Fashion Hang Dry', th: 'แฟชั่น แขวนตากแห้ง', vn: 'Thời trang Phơi treo', es: 'Moda Secar colgado',
    pt: 'Fashion Secar pendurado', id_lang: 'Fashion Gantung Kering', ru: 'Модная Сушить в подвешенном состоянии', fr: 'Mode Sécher suspendu', ar: 'تجفيف بالتعليق عصري', ja: ''
  },
  '时尚手洗': {
    cn: '时尚手洗', en: 'Fashion Hand Wash', th: 'แฟชั่น ซักมือ', vn: 'Thời trang Giặt tay', es: 'Moda Lavado a mano',
    pt: 'Fashion Lavagem à mão', id_lang: 'Fashion Cuci Tangan', ru: 'Модная Ручная стирка', fr: 'Mode Lavage à la main', ar: 'غسيل يدوي عصري', ja: ''
  },
  '时尚新潮': {
    cn: '时尚新潮', en: 'Fashionable and trendy', th: 'ทันสมัยและอินเทรนด์', vn: 'Thời trang và sành điệu', es: 'Moderno y a la moda',
    pt: 'Elegante e moderno', id_lang: 'Modis dan trendi', ru: 'Модный и трендовый', fr: 'À la mode et tendance', ar: 'أنيق وعصري', ja: ''
  },
  '时尚有机棉': {
    cn: '时尚有机棉', en: 'Fashion Organic Cotton', th: 'แฟชั่น ผ้าฝ้ายออร์แกนิก', vn: 'Thời trang Cotton hữu cơ', es: 'Moda Algodón orgánico',
    pt: 'Fashion Algodão orgânico', id_lang: 'Fashion Katun Organik', ru: 'Модная Органический хлопок', fr: 'Mode Coton biologique', ar: 'قطن عضوي عصري', ja: ''
  },
  '时尚机洗': {
    cn: '时尚机洗', en: 'Fashion Machine Wash', th: 'แฟชั่น ซักเครื่อง', vn: 'Thời trang Giặt máy', es: 'Moda Lavado a máquina',
    pt: 'Fashion Lavagem à máquina', id_lang: 'Fashion Cuci Mesin', ru: 'Модная Машинная стирка', fr: 'Mode Lavage en machine', ar: 'غسيل آلي عصري', ja: ''
  },
  '时尚棉': {
    cn: '时尚棉', en: 'Fashion Cotton', th: 'แฟชั่น ผ้าฝ้าย', vn: 'Thời trang Cotton', es: 'Moda Algodón',
    pt: 'Fashion Algodão', id_lang: 'Fashion Katun', ru: 'Модная Хлопок', fr: 'Mode Coton', ar: 'قطن عصري', ja: ''
  },
  '时尚氨纶': {
    cn: '时尚氨纶', en: 'Fashion Spandex', th: 'แฟชั่น สแปนเด็กซ์', vn: 'Thời trang Spandex', es: 'Moda Elastano',
    pt: 'Fashion Elastano', id_lang: 'Fashion Spandex', ru: 'Модная Спандекс', fr: 'Mode Élasthanne', ar: 'سباندكس عصري', ja: ''
  },
  '时尚涤纶': {
    cn: '时尚涤纶', en: 'Fashion Polyester', th: 'แฟชั่น โพลีเอสเตอร์', vn: 'Thời trang Polyester', es: 'Moda Poliéster',
    pt: 'Fashion Poliéster', id_lang: 'Fashion Poliester', ru: 'Модная Полиэстер', fr: 'Mode Polyester', ar: 'بوليستر عصري', ja: ''
  },
  '时尚温水洗': {
    cn: '时尚温水洗', en: 'Fashion Warm Water Wash', th: 'แฟชั่น ซักน้ำอุ่น', vn: 'Thời trang Giặt nước ấm', es: 'Moda Lavado en agua tibia',
    pt: 'Fashion Lavagem em água morna', id_lang: 'Fashion Cuci Air Hangat', ru: 'Модная Стирка в теплой воде', fr: 'Mode Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ عصري', ja: ''
  },
  '时尚潮流': {
    cn: '时尚潮流', en: 'Fashion Trends', th: 'เทรนด์แฟชั่น', vn: 'Xu hướng thời trang', es: 'Tendencias de moda',
    pt: 'Tendências da moda', id_lang: 'Tren Fesyen', ru: 'Модные тенденции', fr: 'Tendances de la mode', ar: 'صيحات الموضة', ja: ''
  },
  '时尚真丝': {
    cn: '时尚真丝', en: 'Fashion Pure Silk', th: 'แฟชั่น ผ้าไหมแท้', vn: 'Thời trang Lụa thật', es: 'Moda Seda pura',
    pt: 'Fashion Seda pura', id_lang: 'Fashion Sutra Asli', ru: 'Модная Натуральный шелк', fr: 'Mode Soie naturelle', ar: 'حرير طبيعي عصري', ja: ''
  },
  '时尚竹纤维': {
    cn: '时尚竹纤维', en: 'Fashion Bamboo Fiber', th: 'แฟชั่น เส้นใยไผ่', vn: 'Thời trang Sợi tre', es: 'Moda Fibra de bambú',
    pt: 'Fashion Fibra de bambu', id_lang: 'Fashion Serat Bambu', ru: 'Модная Бамбуковое волокно', fr: 'Mode Fibre de bambou', ar: 'ألياف الخيزران عصري', ja: ''
  },
  '时尚粘纤': {
    cn: '时尚粘纤', en: 'Fashion Viscose', th: 'แฟชั่น วิสโคส', vn: 'Thời trang Viscose', es: 'Moda Viscosa',
    pt: 'Fashion Viscose', id_lang: 'Fashion Viskosa', ru: 'Модная Вискоза', fr: 'Mode Viscose', ar: 'فيسكوز عصري', ja: ''
  },
  '时尚精梳棉': {
    cn: '时尚精梳棉', en: 'Fashion Combed Cotton', th: 'แฟชั่น ผ้าฝ้ายหวี', vn: 'Thời trang Cotton chải', es: 'Moda Algodón peinado',
    pt: 'Fashion Algodão penteado', id_lang: 'Fashion Katun Sisir', ru: 'Модная Гребенной хлопок', fr: 'Mode Coton peigné', ar: 'قطن ممشط عصري', ja: ''
  },
  '时尚羊毛': {
    cn: '时尚羊毛', en: 'Fashion Wool', th: 'แฟชั่น ขนแกะ', vn: 'Thời trang Len', es: 'Moda Lana',
    pt: 'Fashion Lã', id_lang: 'Fashion Wol', ru: 'Модная Шерсть', fr: 'Mode Laine', ar: 'صوف عصري', ja: ''
  },
  '时尚羊绒': {
    cn: '时尚羊绒', en: 'Fashion Cashmere', th: 'แฟชั่น แคชเมียร์', vn: 'Thời trang Cashmere', es: 'Moda Cachemira',
    pt: 'Fashion Caxemira', id_lang: 'Fashion Kasmir', ru: 'Модная Кашемир', fr: 'Mode Cachemire', ar: 'كشمير عصري', ja: ''
  },
  '时尚腈纶': {
    cn: '时尚腈纶', en: 'Fashion Acrylic', th: 'แฟชั่น อะคริลิก', vn: 'Thời trang Acrylic', es: 'Moda Acrílico',
    pt: 'Fashion Acrílico', id_lang: 'Fashion Akrilik', ru: 'Модная Акрил', fr: 'Mode Acrylique', ar: 'أكريليك عصري', ja: ''
  },
  '时尚莫代尔': {
    cn: '时尚莫代尔', en: 'Fashion Modal', th: 'แฟชั่น โมดอล', vn: 'Thời trang Modal', es: 'Moda Modal',
    pt: 'Fashion Modal', id_lang: 'Fashion Modal', ru: 'Модная Модал', fr: 'Mode Modal', ar: 'مودال عصري', ja: ''
  },
  '时尚莱赛尔': {
    cn: '时尚莱赛尔', en: 'Fashion Lyocell', th: 'แฟชั่น ไลโอเซลล์', vn: 'Thời trang Lyocell', es: 'Moda Lyocell',
    pt: 'Fashion Lyocell', id_lang: 'Fashion Lyocell', ru: 'Модная Лиоцелл', fr: 'Mode Lyocell', ar: 'ليوسيل عصري', ja: ''
  },
  '时尚锦纶': {
    cn: '时尚锦纶', en: 'Fashion Nylon', th: 'แฟชั่น ไนลอน', vn: 'Thời trang Nylon', es: 'Moda Nailon',
    pt: 'Fashion Nylon', id_lang: 'Fashion Nilon', ru: 'Модная Нейлон', fr: 'Mode Nylon', ar: 'نايلون عصري', ja: ''
  },
  '时尚马海毛': {
    cn: '时尚马海毛', en: 'Fashion Mohair', th: 'แฟชั่น โมแฮร์', vn: 'Thời trang Mohair', es: 'Moda Mohair',
    pt: 'Fashion Mohair', id_lang: 'Fashion Mohair', ru: 'Модная Мохер', fr: 'Mode Mohair', ar: 'موهير عصري', ja: ''
  },
  '星空呢': {
    cn: '星空呢', en: 'Where is the starry sky?', th: 'ท้องฟ้าที่เต็มไปด้วยดวงดาวอยู่ที่ไหน?', vn: 'Bầu trời đầy sao ở đâu?', es: '¿Dónde está el cielo estrellado?',
    pt: 'Onde está o céu estrelado?', id_lang: 'Di manakah langit berbintang?', ru: 'Где же звёздное небо?', fr: 'Où est le ciel étoilé ?', ar: 'أين السماء المرصعة بالنجوم؟', ja: ''
  },
  '映月紫': {
    cn: '映月紫', en: 'Reflecting Moon Purple', th: 'สีม่วงสะท้อนแสงจันทร์', vn: 'Ánh Trăng Phản Chiếu Màu Tím', es: 'Luna que refleja el color púrpura',
    pt: 'Lua Refletindo Roxo', id_lang: 'Bulan Ungu yang Terpantul', ru: 'Отражающая луна, фиолетовая', fr: 'Reflets de lune violette', ar: 'انعكاس القمر أرجواني', ja: ''
  },
  '晨纱': {
    cn: '晨纱', en: 'morning yarn', th: 'เส้นด้ายยามเช้า', vn: 'câu chuyện buổi sáng', es: 'cuento matutino',
    pt: 'conversa matinal', id_lang: 'cerita pagi', ru: 'утренняя болтовня', fr: 'histoire du matin', ar: 'حكايات الصباح', ja: ''
  },
  '晴纶': {
    cn: '晴纶', en: 'Acrylic', th: 'อะคริลิก', vn: 'Acrylic', es: 'Acrílico',
    pt: 'Acrílico', id_lang: 'Akrilik', ru: 'Акрил', fr: 'Acrylique', ar: 'أكريليك', ja: ''
  },
  '晴蓝': {
    cn: '晴蓝', en: 'Sunny Blue', th: 'ซันนี่บลู', vn: 'Xanh nắng', es: 'Azul soleado',
    pt: 'Azul ensolarado', id_lang: 'Biru Cerah', ru: 'Солнечный синий', fr: 'Bleu ensoleillé', ar: 'أزرق مشرق', ja: ''
  },
  '智慧绒': {
    cn: '智慧绒', en: 'Smart Velvet', th: 'สมาร์ทเวลเวท', vn: 'Nhung thông minh', es: 'Terciopelo inteligente',
    pt: 'Veludo Inteligente', id_lang: 'Beludru Pintar', ru: 'Умный бархат', fr: 'Velours intelligent', ar: 'سمارت فيلفيت', ja: ''
  },
  '暗红': {
    cn: '暗红', en: 'Dark red', th: 'สีแดงเข้ม', vn: 'Màu đỏ sẫm', es: 'Rojo oscuro',
    pt: 'vermelho escuro', id_lang: 'Merah tua', ru: 'Темно-красный', fr: 'rouge foncé', ar: 'أحمر داكن', ja: ''
  },
  '暗红斜纹': {
    cn: '暗红斜纹', en: 'Dark red twill', th: 'ผ้าทวิลล์สีแดงเข้ม', vn: 'Vải chéo màu đỏ sẫm', es: 'Sarga rojo oscuro',
    pt: 'Sarja vermelho-escura', id_lang: 'Kain kepar merah tua', ru: 'Темно-красная саржа', fr: 'Sergé rouge foncé', ar: 'قماش قطني أحمر داكن', ja: ''
  },
  '暗红条纹': {
    cn: '暗红条纹', en: 'Dark red stripes', th: 'ลายเส้นสีแดงเข้ม', vn: 'Sọc đỏ sẫm', es: 'rayas rojo oscuro',
    pt: 'Listras vermelho-escuras', id_lang: 'Garis-garis merah gelap', ru: 'Темно-красные полосы', fr: 'rayures rouge foncé', ar: 'خطوط حمراء داكنة', ja: ''
  },
  '暗红格纹': {
    cn: '暗红格纹', en: 'Dark red plaid', th: 'ลายตารางสีแดงเข้ม', vn: 'kẻ sọc đỏ sẫm', es: 'Cuadros de color rojo oscuro',
    pt: 'xadrez vermelho escuro', id_lang: 'Kotak-kotak merah tua', ru: 'Темно-красная клетка', fr: 'Carreaux rouge foncé', ar: 'كاروهات حمراء داكنة', ja: ''
  },
  '暗红花纹': {
    cn: '暗红花纹', en: 'Dark red pattern', th: 'ลวดลายสีแดงเข้ม', vn: 'Họa tiết màu đỏ đậm', es: 'Patrón rojo oscuro',
    pt: 'Padrão vermelho escuro', id_lang: 'Pola merah gelap', ru: 'Темно-красный узор', fr: 'motif rouge foncé', ar: 'نمط أحمر داكن', ja: ''
  },
  '暗红镶拼': {
    cn: '暗红镶拼', en: 'Dark red inlaid', th: 'ฝังลายสีแดงเข้ม', vn: 'khảm màu đỏ sẫm', es: 'Incrustaciones de color rojo oscuro',
    pt: 'vermelho escuro incrustado', id_lang: 'Bertatahkan warna merah gelap', ru: 'Темно-красная инкрустация', fr: 'incrustation rouge foncé', ar: 'مطعم باللون الأحمر الداكن', ja: ''
  },
  '暗红面料': {
    cn: '暗红面料', en: 'Dark red fabric', th: 'ผ้าสีแดงเข้ม', vn: 'Vải màu đỏ sẫm', es: 'Tela de color rojo oscuro',
    pt: 'Tecido vermelho escuro', id_lang: 'Kain merah gelap', ru: 'Темно-красная ткань', fr: 'tissu rouge foncé', ar: 'قماش أحمر داكن', ja: ''
  },
  '最高洗涤温度30°C': {
    cn: '最高洗涤温度30°C', en: 'Maximum washing temperature 30°C', th: 'อุณหภูมิซักสูงสุด 30°C', vn: 'Nhiệt độ giặt tối đa 30°C', es: 'Temperatura máxima de lavado 30°C',
    pt: 'Temperatura máxima de lavagem 30°C', id_lang: 'Suhu cuci maksimum 30°C', ru: 'Максимальная температура стирки 30°C', fr: 'Température maximale de lavage 30°C', ar: 'درجة حرارة الغسيل القصوى 30 درجة مئوية', ja: ''
  },
  '最高洗涤温度40°C': {
    cn: '最高洗涤温度40°C', en: 'Maximum washing temperature 40°C', th: 'อุณหภูมิซักสูงสุด 40°C', vn: 'Nhiệt độ giặt tối đa 40°C', es: 'Temperatura máxima de lavado 40°C',
    pt: 'Temperatura máxima de lavagem 40°C', id_lang: 'Suhu cuci maksimum 40°C', ru: 'Максимальная температура стирки 40°C', fr: 'Température maximale de lavage 40°C', ar: 'درجة حرارة الغسيل القصوى 40 درجة مئوية', ja: ''
  },
  '最高洗涤温度60°C': {
    cn: '最高洗涤温度60°C', en: 'Maximum washing temperature 60°C', th: 'อุณหภูมิซักสูงสุด 60°C', vn: 'Nhiệt độ giặt tối đa 60°C', es: 'Temperatura máxima de lavado 60°C',
    pt: 'Temperatura máxima de lavagem 60°C', id_lang: 'Suhu cuci maksimum 60°C', ru: 'Максимальная температура стирки 60°C', fr: 'Température maximale de lavage 60°C', ar: 'درجة حرارة الغسيل القصوى 60 درجة مئوية', ja: ''
  },
  '月影白': {
    cn: '月影白', en: 'moon shadow white', th: 'เงาดวงจันทร์สีขาว', vn: 'bóng trăng trắng', es: 'sombra de luna blanca',
    pt: 'sombra da lua branca', id_lang: 'bayangan bulan putih', ru: 'лунная тень белый', fr: 'ombre de lune blanche', ar: 'ظل القمر الأبيض', ja: ''
  },
  '月灰色': {
    cn: '月灰色', en: 'Moon Gray', th: 'มูนเกรย์', vn: 'Xám Mặt Trăng', es: 'Gris Luna',
    pt: 'Cinza lunar', id_lang: 'Abu-abu Bulan', ru: 'Лунный серый', fr: 'Gris lunaire', ar: 'رمادي قمري', ja: ''
  },
  '月白': {
    cn: '月白', en: 'Moon White', th: 'มูนไวท์', vn: 'Trắng Trăng', es: 'Blanco Luna',
    pt: 'Lua Branca', id_lang: 'Bulan Putih', ru: 'Мун Уайт', fr: 'Moon White', ar: 'القمر الأبيض', ja: ''
  },
  '月青色': {
    cn: '月青色', en: 'Moon blue', th: 'สีน้ำเงินดวงจันทร์', vn: 'màu xanh trăng', es: 'azul lunar',
    pt: 'Azul lua', id_lang: 'Biru bulan', ru: 'Лунный синий', fr: 'Bleu lunaire', ar: 'أزرق القمر', ja: ''
  },
  '有机棉': {
    cn: '有机棉', en: 'Organic Cotton', th: 'คอตตอนออร์แกนิก', vn: 'Cotton hữu cơ', es: 'Algodón orgánico',
    pt: 'Algodão orgânico', id_lang: 'Katun organik', ru: 'Органический хлопок', fr: 'Coton biologique', ar: 'قطن عضوي', ja: ''
  },
  '朝颜': {
    cn: '朝颜', en: 'Morning Glory', th: 'มอร์นิ่งกลอรี่', vn: 'Hoa bìm bìm', es: 'Gloria matutina',
    pt: 'Glória da Manhã', id_lang: 'Morning Glory', ru: 'Утренняя слава', fr: 'Gloire du matin', ar: 'مجد الصباح', ja: ''
  },
  '木棉': {
    cn: '木棉', en: 'Kapok', th: 'ใยฝ้าย', vn: 'Bông gòn', es: 'Capoc',
    pt: 'Kapok', id_lang: 'Kapok', ru: 'Капок', fr: 'Kapok', ar: 'كابوك', ja: ''
  },
  '木耳边': {
    cn: '木耳边', en: 'Wood ear edge', th: 'ขอบหูไม้', vn: 'Mép tai gỗ', es: 'borde de oreja de madera',
    pt: 'Borda da orelha de madeira', id_lang: 'Tepi telinga kayu', ru: 'Деревянная кромка уха', fr: 'Bord d&#39;oreille en bois', ar: 'حافة أذن خشبية', ja: ''
  },
  '本白': {
    cn: '本白', en: 'Benbai', th: 'เบ็นไบ', vn: 'Benbai', es: 'benbai',
    pt: 'Benbai', id_lang: 'Benbai', ru: 'Бенбай', fr: 'Benbaï', ar: 'بنباي', ja: ''
  },
  '本白条纹': {
    cn: '本白条纹', en: 'White stripes', th: 'ลายทางสีขาว', vn: 'Sọc trắng', es: 'rayas blancas',
    pt: 'Listras brancas', id_lang: 'Garis-garis putih', ru: 'Белые полосы', fr: 'rayures blanches', ar: 'خطوط بيضاء', ja: ''
  },
  '本白梭织面料': {
    cn: '本白梭织面料', en: 'This white woven fabric', th: 'ผ้าทอสีขาวผืนนี้', vn: 'Vải dệt màu trắng này', es: 'Esta tela tejida blanca',
    pt: 'Este tecido branco trançado', id_lang: 'Kain tenun putih ini', ru: 'Эта белая тканая ткань', fr: 'Ce tissu blanc tissé', ar: 'هذا القماش الأبيض المنسوج', ja: ''
  },
  '本白花纹': {
    cn: '本白花纹', en: 'White floral pattern', th: 'ลายดอกไม้สีขาว', vn: 'Họa tiết hoa màu trắng', es: 'Estampado floral blanco',
    pt: 'Estampa floral branca', id_lang: 'Pola bunga putih', ru: 'Белый цветочный узор', fr: 'Motif floral blanc', ar: 'نقش زهري أبيض', ja: ''
  },
  '本白镶拼': {
    cn: '本白镶拼', en: 'White inlaid patchwork', th: 'งานปะติดปะต่อสีขาว', vn: 'ghép vải trắng', es: 'Mosaico blanco con incrustaciones',
    pt: 'patchwork branco embutido', id_lang: 'Patchwork bertatahkan putih', ru: 'Белое лоскутное одеяло с вставками', fr: 'patchwork blanc incrusté', ar: 'رقعة بيضاء مرصعة', ja: ''
  },
  '本白面料': {
    cn: '本白面料', en: 'off-white fabric', th: 'ผ้าสีขาวนวล', vn: 'vải màu trắng ngà', es: 'tela blanquecina',
    pt: 'tecido branco-sujo', id_lang: 'kain putih gading', ru: 'ткань кремового цвета', fr: 'tissu blanc cassé', ar: 'قماش أبيض مائل للبيج', ja: ''
  },
  '机洗': {
    cn: '机洗', en: 'Machine Wash', th: 'ซักเครื่อง', vn: 'Giặt máy', es: 'Lavado a máquina',
    pt: 'Lavar à máquina', id_lang: 'Cuci Mesin', ru: 'Машинная стирка', fr: 'Lavage en machine', ar: 'غسيل آلي', ja: ''
  },
  '机织面料': {
    cn: '机织面料', en: 'Woven fabrics', th: 'ผ้าทอ', vn: 'Vải dệt', es: 'Telas tejidas',
    pt: 'Tecidos trançados', id_lang: 'Kain tenun', ru: 'Тканые ткани', fr: 'tissus tissés', ar: 'الأقمشة المنسوجة', ja: ''
  },
  '杏白': {
    cn: '杏白', en: 'Apricot White', th: 'แอปริคอตขาว', vn: 'Màu trắng mơ', es: 'Albaricoque blanco',
    pt: 'Damasco Branco', id_lang: 'Aprikot Putih', ru: 'Абрикосовый белый', fr: 'Blanc abricot', ar: 'المشمش الأبيض', ja: ''
  },
  '杏色': {
    cn: '杏色', en: 'apricot', th: 'แอปริคอต', vn: 'quả mơ', es: 'albaricoque',
    pt: 'damasco', id_lang: 'aprikot', ru: 'абрикос', fr: 'abricot', ar: 'مشمش', ja: ''
  },
  '材质': {
    cn: '材质', en: 'Material', th: 'วัสดุ', vn: 'Vật liệu', es: 'Material',
    pt: 'Material', id_lang: 'Bahan', ru: 'Материал', fr: 'Matériel', ar: 'مادة', ja: ''
  },
  '杜邦': {
    cn: '杜邦', en: 'DuPont', th: 'ดูปองท์', vn: 'DuPont', es: 'DuPont',
    pt: 'DuPont', id_lang: 'DuPont', ru: 'Дюпон', fr: 'DuPont', ar: 'دوبونت', ja: ''
  },
  '条子面料': {
    cn: '条子面料', en: 'striped fabric', th: 'ผ้าลายทาง', vn: 'vải sọc', es: 'tela a rayas',
    pt: 'tecido listrado', id_lang: 'kain bergaris', ru: 'полосатая ткань', fr: 'tissu rayé', ar: 'قماش مخطط', ja: ''
  },
  '条纹': {
    cn: '条纹', en: 'stripe', th: 'ลายเส้น', vn: 'sọc', es: 'raya',
    pt: 'listra', id_lang: 'garis', ru: 'полоса', fr: 'bande', ar: 'شريط', ja: ''
  },
  '条纹部位': {
    cn: '条纹部位', en: 'striped areas', th: 'พื้นที่ลายทาง', vn: 'khu vực sọc', es: 'áreas rayadas',
    pt: 'áreas listradas', id_lang: 'area bergaris', ru: 'полосатые участки', fr: 'zones rayées', ar: 'المناطق المشمولة', ja: ''
  },
  '条纹面料': {
    cn: '条纹面料', en: 'striped fabric', th: 'ผ้าลายทาง', vn: 'vải sọc', es: 'tela a rayas',
    pt: 'tecido listrado', id_lang: 'kain bergaris', ru: 'полосатая ткань', fr: 'tissu rayé', ar: 'قماش مخطط', ja: ''
  },
  '条绒复合': {
    cn: '条绒复合', en: 'corduroy composite', th: 'ผ้าลูกฟูกผสม', vn: 'vải nhung kẻ tổng hợp', es: 'compuesto de pana',
    pt: 'composto de veludo cotelê', id_lang: 'komposit korduroi', ru: 'вельветовый композит', fr: 'composite de velours côtelé', ar: 'مركب الكوردروي', ja: ''
  },
  '松石绿': {
    cn: '松石绿', en: 'Turquoise', th: 'สีเทอร์ควอยซ์', vn: 'màu ngọc lam', es: 'Turquesa',
    pt: 'Turquesa', id_lang: 'Pirus', ru: 'Бирюзовый', fr: 'Turquoise', ar: 'الفيروزي', ja: ''
  },
  '松紧带': {
    cn: '松紧带', en: 'Elastic Band', th: 'ยางยืด', vn: 'Dây thun', es: 'Banda elástica',
    pt: 'Elástico', id_lang: 'Pita elastis / Karet', ru: 'Резинка', fr: 'Bande élastique', ar: 'شريط مطاطي', ja: ''
  },
  '枫叶提花面料': {
    cn: '枫叶提花面料', en: 'Maple leaf jacquard fabric', th: 'ผ้าแจ็กการ์ดลายใบเมเปิล', vn: 'Vải dệt jacquard họa tiết lá phong', es: 'Tejido jacquard con forma de hoja de arce',
    pt: 'Tecido jacquard com estampa de folha de bordo', id_lang: 'Kain jacquard daun maple', ru: 'Жаккардовая ткань с рисунком кленового листа', fr: 'tissu jacquard à motif de feuille d&#39;érable', ar: 'قماش جاكار بنقشة أوراق القيقب', ja: ''
  },
  '柞蚕丝': {
    cn: '柞蚕丝', en: 'Tussah silk', th: 'ผ้าไหมทัสซาห์', vn: 'Lụa Tussah', es: 'seda tussah',
    pt: 'Seda tussah', id_lang: 'Sutra Tussah', ru: 'Шелк тусса', fr: 'Soie tussah', ar: 'حرير التوسة', ja: ''
  },
  '柠檬黄': {
    cn: '柠檬黄', en: 'Lemon Yellow', th: 'สีเหลืองมะนาว', vn: 'Vàng chanh', es: 'Amarillo limón',
    pt: 'Amarelo limão', id_lang: 'Kuning Lemon', ru: 'Лимонно-желтый', fr: 'Jaune citron', ar: 'أصفر ليموني', ja: ''
  },
  '栗秋': {
    cn: '栗秋', en: 'Li Qiu', th: 'หลี่ชิว', vn: 'Lý Thu', es: 'Li Qiu',
    pt: 'Li Qiu', id_lang: 'Li Qiu', ru: 'Ли Цю', fr: 'Li Qiu', ar: 'لي تشيو', ja: ''
  },
  '格子': {
    cn: '格子', en: 'lattice', th: 'แลตติส', vn: 'mạng lưới', es: 'enrejado',
    pt: 'treliça', id_lang: 'kisi', ru: 'решетка', fr: 'treillis', ar: 'شعرية', ja: ''
  },
  '格子双面布': {
    cn: '格子双面布', en: 'double-sided checkered fabric', th: 'ผ้าลายตารางหมากรุกสองด้าน', vn: 'vải kẻ ô hai mặt', es: 'tela a cuadros de doble cara',
    pt: 'tecido xadrez dupla face', id_lang: 'kain kotak-kotak dua sisi', ru: 'двусторонняя клетчатая ткань', fr: 'tissu à carreaux double face', ar: 'قماش مربّع الوجهين', ja: ''
  },
  '格子布': {
    cn: '格子布', en: 'checkered cloth', th: 'ผ้าลายตารางหมากรุก', vn: 'vải kẻ ô', es: 'tela a cuadros',
    pt: 'tecido xadrez', id_lang: 'kain kotak-kotak', ru: 'клетчатая ткань', fr: 'tissu à carreaux', ar: 'قماش مربّع', ja: ''
  },
  '格子提花': {
    cn: '格子提花', en: 'Checkered jacquard', th: 'ผ้าแจ็กการ์ดลายตารางหมากรุก', vn: 'Vải jacquard kẻ caro', es: 'Jacquard a cuadros',
    pt: 'Jacquard xadrez', id_lang: 'Jacquard kotak-kotak', ru: 'клетчатый жаккард', fr: 'Jacquard à carreaux', ar: 'جاكار مربّع', ja: ''
  },
  '格子面料': {
    cn: '格子面料', en: 'plaid fabric', th: 'ผ้าลายตาราง', vn: 'vải kẻ caro', es: 'tela a cuadros',
    pt: 'tecido xadrez', id_lang: 'kain kotak-kotak', ru: 'клетчатая ткань', fr: 'tissu à carreaux', ar: 'قماش كاروهات', ja: ''
  },
  '格纹': {
    cn: '格纹', en: 'plaid', th: 'ลายตารางหมากรุก', vn: 'kẻ sọc', es: 'tartán',
    pt: 'xadrez', id_lang: 'kotak-kotak', ru: 'плед', fr: 'plaid', ar: 'بنقشة مربعة', ja: ''
  },
  '格纹面料': {
    cn: '格纹面料', en: 'plaid fabric', th: 'ผ้าลายตาราง', vn: 'vải kẻ caro', es: 'tela a cuadros',
    pt: 'tecido xadrez', id_lang: 'kain kotak-kotak', ru: 'клетчатая ткань', fr: 'tissu à carreaux', ar: 'قماش كاروهات', ja: ''
  },
  '桂皮': {
    cn: '桂皮', en: 'Cinnamon', th: 'อบเชย', vn: 'Quế', es: 'Canela',
    pt: 'Canela', id_lang: 'Kayu manis', ru: 'Корица', fr: 'Cannelle', ar: 'القرفة', ja: ''
  },
  '桑蚕': {
    cn: '桑蚕', en: 'silkworm', th: 'ไหม', vn: 'tằm', es: 'gusano de seda',
    pt: 'bicho-da-seda', id_lang: 'ulat sutera', ru: 'шелкопряд', fr: 'ver à soie', ar: 'دودة القز', ja: ''
  },
  '桑蚕丝': {
    cn: '桑蚕丝', en: 'Mulberry silk', th: 'ผ้าไหมมัลเบอร์รี่', vn: 'Lụa tơ tằm', es: 'seda de morera',
    pt: 'Seda de amoreira', id_lang: 'Sutra murbei', ru: 'Шелк тутового дерева', fr: 'Soie de mûrier', ar: 'حرير التوت', ja: ''
  },
  '桑蚕丝哥弟布': {
    cn: '桑蚕丝哥弟布', en: 'Silk fabric', th: 'ผ้าไหมมัลเบอร์รี่', vn: 'Vải lụa tơ tằm', es: 'Tela de seda',
    pt: 'Tecido de seda', id_lang: 'Kain sutra', ru: 'Шелковая ткань', fr: 'tissu de soie', ar: 'قماش حريري', ja: ''
  },
  '桑蚕丝罗马布': {
    cn: '桑蚕丝罗马布', en: 'Mulberry silk Roman cloth', th: 'ผ้าไหมมัลเบอร์รี่แบบโรมัน', vn: 'Vải lụa tơ tằm La Mã', es: 'Tela romana de seda de morera',
    pt: 'Tecido romano de seda Mulberry', id_lang: 'Kain sutra murbei Romawi', ru: 'Римская ткань из тутового шелка', fr: 'Tissu romain en soie de mûrier', ar: 'قماش روماني من حرير التوت', ja: ''
  },
  '桑铜': {
    cn: '桑铜', en: 'Sangtong', th: 'ซังตง', vn: 'Sangtong', es: 'Sangtong',
    pt: 'Sangtong', id_lang: 'Sangtong', ru: 'Сангтонг', fr: 'Sangtong', ar: 'سانغتونغ', ja: ''
  },
  '桔粉色': {
    cn: '桔粉色', en: 'Orange-pink', th: 'สีส้มอมชมพู', vn: 'màu cam hồng', es: 'Rosa anaranjado',
    pt: 'Rosa-alaranjado', id_lang: 'Oranye-merah muda', ru: 'Оранжево-розовый', fr: 'rose orangé', ar: 'برتقالي وردي', ja: ''
  },
  '桔色': {
    cn: '桔色', en: 'orange', th: 'ส้ม', vn: 'quả cam', es: 'naranja',
    pt: 'laranja', id_lang: 'oranye', ru: 'апельсин', fr: 'orange', ar: 'البرتقالي', ja: ''
  },
  '梭织': {
    cn: '梭织', en: 'Woven', th: 'ทอ', vn: 'Dệt', es: 'Tejido',
    pt: 'Tecido', id_lang: 'Ditenun', ru: 'Тканый', fr: 'Tissé', ar: 'منسوج', ja: ''
  },
  '梭织花料': {
    cn: '梭织花料', en: 'Woven floral fabric', th: 'ผ้าทอลายดอกไม้', vn: 'Vải hoa dệt', es: 'Tela floral tejida',
    pt: 'Tecido floral trançado', id_lang: 'Kain tenun bermotif bunga', ru: 'Ткань с цветочным узором', fr: 'tissu floral tissé', ar: 'قماش منسوج بنقوش زهرية', ja: ''
  },
  '梭织里料': {
    cn: '梭织里料', en: 'Woven lining', th: 'ซับในทอ', vn: 'Lớp lót dệt', es: 'Forro tejido',
    pt: 'Forro tecido', id_lang: 'Lapisan tenun', ru: 'Тканая подкладка', fr: 'Doublure tissée', ar: 'بطانة منسوجة', ja: ''
  },
  '梭织面料': {
    cn: '梭织面料', en: 'Woven fabrics', th: 'ผ้าทอ', vn: 'Vải dệt', es: 'Telas tejidas',
    pt: 'Tecidos trançados', id_lang: 'Kain tenun', ru: 'Тканые ткани', fr: 'tissus tissés', ar: 'الأقمشة المنسوجة', ja: ''
  },
  '梭织高弹面料': {
    cn: '梭织高弹面料', en: 'Woven high-elastic fabric', th: 'ผ้าทอที่มีความยืดหยุ่นสูง', vn: 'Vải dệt có độ đàn hồi cao', es: 'Tejido de alta elasticidad',
    pt: 'Tecido de alta elasticidade', id_lang: 'Kain tenun elastis tinggi', ru: 'Высокоэластичная тканая ткань', fr: 'Tissu tissé à haute élasticité', ar: 'نسيج عالي المرونة', ja: ''
  },
  '梯级布': {
    cn: '梯级布', en: 'tiered fabric', th: 'ผ้าหลายชั้น', vn: 'vải nhiều tầng', es: 'tela escalonada',
    pt: 'tecido em camadas', id_lang: 'kain bertingkat', ru: 'многоярусная ткань', fr: 'tissu à étages', ar: 'قماش متعدد الطبقات', ja: ''
  },
  '梯级提花': {
    cn: '梯级提花', en: 'Stepped jacquard', th: 'ลายแจ็กการ์ดแบบขั้นบันได', vn: 'Vải jacquard bậc thang', es: 'Jacquard escalonado',
    pt: 'Jacquard escalonado', id_lang: 'Jacquard bertingkat', ru: 'Ступенчатый жаккард', fr: 'Jacquard à gradins', ar: 'جاكار متدرج', ja: ''
  },
  '检验合格': {
    cn: '检验合格', en: 'Quality Approved', th: 'ผ่านการตรวจสอบ', vn: 'Đạt kiểm tra', es: 'Control de calidad aprobado',
    pt: 'Aprovado na inspeção', id_lang: 'Lulus inspeksi', ru: 'Проверено', fr: 'Contrôle qualité approuvé', ar: 'اجتاز فحص الجودة', ja: ''
  },
  '棉': {
    cn: '棉', en: 'cotton', th: 'ฝ้าย', vn: 'cotton', es: 'algodón',
    pt: 'algodão', id_lang: 'kapas', ru: 'хлопок', fr: 'coton', ar: 'قطن', ja: ''
  },
  '棉布': {
    cn: '棉布', en: 'cotton', th: 'ฝ้าย', vn: 'bông', es: 'algodón',
    pt: 'algodão', id_lang: 'kapas', ru: 'хлопок', fr: 'coton', ar: 'قطن', ja: ''
  },
  '棉布免烫': {
    cn: '棉布免烫', en: 'Wrinkle-free cotton fabric', th: 'ผ้าฝ้ายไม่ยับ', vn: 'Vải cotton không nhăn', es: 'Tejido de algodón sin arrugas',
    pt: 'Tecido de algodão que não amassa.', id_lang: 'Kain katun anti kusut', ru: 'Хлопчатобумажная ткань, не мнущаяся', fr: 'Tissu en coton infroissable', ar: 'قماش قطني مقاوم للتجاعيد', ja: ''
  },
  '棉布净色': {
    cn: '棉布净色', en: 'Plain cotton fabric', th: 'ผ้าฝ้ายธรรมดา', vn: 'Vải cotton trơn', es: 'Tela de algodón lisa',
    pt: 'Tecido de algodão liso', id_lang: 'Kain katun polos', ru: 'Однотонная хлопчатобумажная ткань', fr: 'Tissu de coton uni', ar: 'قماش قطني سادة', ja: ''
  },
  '棉布印花': {
    cn: '棉布印花', en: 'Cotton Print', th: 'ผ้าฝ้ายพิมพ์ลาย', vn: 'Vải cotton in', es: 'Estampado de algodón',
    pt: 'Estampa de algodão', id_lang: 'Motif Katun', ru: 'Хлопковый принт', fr: 'Imprimé en coton', ar: 'قطن مطبوع', ja: ''
  },
  '棉布四面弹': {
    cn: '棉布四面弹', en: 'Four-way stretch cotton fabric', th: 'ผ้าฝ้ายยืดได้สี่ทิศทาง', vn: 'Vải cotton co giãn bốn chiều', es: 'Tejido de algodón elástico en cuatro direcciones',
    pt: 'Tecido de algodão com elasticidade em quatro direções', id_lang: 'Kain katun elastis empat arah', ru: 'Эластичная хлопчатобумажная ткань, растягивающаяся в четырех направлениях.', fr: 'Tissu en coton extensible dans les quatre sens', ar: 'قماش قطني قابل للتمدد في أربعة اتجاهات', ja: ''
  },
  '棉布提花': {
    cn: '棉布提花', en: 'cotton jacquard', th: 'ผ้าฝ้ายแจ็กการ์ด', vn: 'vải jacquard cotton', es: 'jacquard de algodón',
    pt: 'jacquard de algodão', id_lang: 'jacquard katun', ru: 'хлопковый жаккард', fr: 'jacquard de coton', ar: 'جاكار قطني', ja: ''
  },
  '棉布色织': {
    cn: '棉布色织', en: 'Yarn-dyed cotton fabric', th: 'ผ้าฝ้ายย้อมสีเส้นด้าย', vn: 'Vải cotton nhuộm sợi', es: 'Tejido de algodón teñido en hilo',
    pt: 'Tecido de algodão tingido com fios', id_lang: 'Kain katun yang diwarnai benang', ru: 'Хлопчатобумажная ткань, окрашенная пряжей', fr: 'Tissu de coton teint en fil', ar: 'قماش قطني مصبوغ بالغزل', ja: ''
  },
  '棉布轻薄': {
    cn: '棉布轻薄', en: 'Cotton fabric is light and thin', th: 'ผ้าฝ้ายมีน้ำหนักเบาและบาง', vn: 'Vải cotton nhẹ và mỏng.', es: 'La tela de algodón es ligera y fina.',
    pt: 'O tecido de algodão é leve e fino.', id_lang: 'Kain katun ringan dan tipis.', ru: 'Хлопчатобумажная ткань легкая и тонкая.', fr: 'Le tissu en coton est léger et fin.', ar: 'قماش القطن خفيف ورقيق', ja: ''
  },
  '棉平纹': {
    cn: '棉平纹', en: 'Plain cotton', th: 'ผ้าฝ้ายธรรมดา', vn: 'Vải cotton trơn', es: 'Algodón liso',
    pt: 'algodão liso', id_lang: 'Katun polos', ru: 'Обычный хлопок', fr: 'Coton uni', ar: 'قطن عادي', ja: ''
  },
  '棉弹面料': {
    cn: '棉弹面料', en: 'cotton-elastic fabric', th: 'ผ้าฝ้ายผสมยางยืด', vn: 'vải cotton-co giãn', es: 'tejido elástico de algodón',
    pt: 'tecido de algodão elástico', id_lang: 'kain katun elastis', ru: 'хлопчатобумажная эластичная ткань', fr: 'tissu en coton élastique', ar: 'قماش قطني مطاطي', ja: ''
  },
  '棉感罗马': {
    cn: '棉感罗马', en: 'Cotton-feel Roman', th: 'โรมัน สัมผัสนุ่มดุจผ้าฝ้าย', vn: 'Áo Roman cảm giác như cotton', es: 'Romano con tacto de algodón',
    pt: 'Romana com toque de algodão', id_lang: 'Roman dengan tekstur seperti katun', ru: 'Хлопок Римский', fr: 'Coton Roman', ar: 'روماني بملمس قطني', ja: ''
  },
  '棉感罗马布': {
    cn: '棉感罗马布', en: 'Cotton-feel Roma fabric', th: 'ผ้าโรมาเนื้อนุ่มสัมผัสเหมือนผ้าฝ้าย', vn: 'Vải Roma có cảm giác như cotton', es: 'Tejido Roma con tacto de algodón',
    pt: 'Tecido Roma com toque de algodão', id_lang: 'Kain Roma dengan tekstur seperti katun.', ru: 'Ткань «Рома» с хлопковой текстурой', fr: 'Tissu Roma effet coton', ar: 'قماش روما ذو ملمس قطني', ja: ''
  },
  '棉拉架': {
    cn: '棉拉架', en: 'Cotton Frame', th: 'กรอบฝ้าย', vn: 'Khung bông', es: 'Marco de algodón',
    pt: 'Moldura de algodão', id_lang: 'Bingkai Katun', ru: 'Хлопковая рамка', fr: 'Cadre en coton', ar: 'إطار قطني', ja: ''
  },
  '棉氨': {
    cn: '棉氨', en: 'Cotton Ammonium', th: 'ฝ้ายแอมโมเนียม', vn: 'Bông Amoni', es: 'Algodón amonio',
    pt: 'Amônio de algodão', id_lang: 'Kapas Amonium', ru: 'Хлопок Аммоний', fr: 'Coton ammonium', ar: 'أمونيوم القطن', ja: ''
  },
  '棉涤': {
    cn: '棉涤', en: 'cotton polyester', th: 'ผ้าฝ้ายผสมโพลีเอสเตอร์', vn: 'bông polyester', es: 'algodón poliéster',
    pt: 'algodão poliéster', id_lang: 'katun poliester', ru: 'хлопок полиэстер', fr: 'coton polyester', ar: 'قطن بوليستر', ja: ''
  },
  '棉涤梭织面料': {
    cn: '棉涤梭织面料', en: 'Cotton-polyester woven fabric', th: 'ผ้าทอผสมฝ้ายและโพลีเอสเตอร์', vn: 'vải dệt cotton-polyester', es: 'Tejido de algodón y poliéster',
    pt: 'Tecido misto de algodão e poliéster', id_lang: 'Kain tenun katun-poliester', ru: 'Ткань из хлопка и полиэстера', fr: 'tissu tissé en coton-polyester', ar: 'نسيج منسوج من القطن والبوليستر', ja: ''
  },
  '棉涤氨': {
    cn: '棉涤氨', en: 'cotton-polyester-ammonia', th: 'ฝ้าย-โพลีเอสเตอร์-แอมโมเนีย', vn: 'bông-polyester-amoniac', es: 'algodón-poliéster-amoniaco',
    pt: 'algodão-poliéster-amônia', id_lang: 'kapas-poliester-amonia', ru: 'хлопок-полиэстер-аммиак', fr: 'coton-polyester-ammoniaque', ar: 'قطن-بوليستر-أمونيا', ja: ''
  },
  '棉涤面料': {
    cn: '棉涤面料', en: 'cotton-polyester fabric', th: 'ผ้าฝ้ายผสมโพลีเอสเตอร์', vn: 'vải cotton-polyester', es: 'tejido de algodón y poliéster',
    pt: 'tecido de algodão-poliéster', id_lang: 'kain katun-poliester', ru: 'хлопчатобумажно-полиэстерная ткань', fr: 'tissu coton-polyester', ar: 'قماش قطني بوليستر', ja: ''
  },
  '棉混纺': {
    cn: '棉混纺', en: 'Cotton Blend', th: 'ผ้าฝ้ายผสม', vn: 'Hỗn hợp cotton', es: 'Mezcla de algodón',
    pt: 'Combinação de algodão', id_lang: 'Campuran Katun', ru: 'Смешанный хлопок', fr: 'Mélange de coton', ar: 'مزيج القطن', ja: ''
  },
  '棉混纺面料': {
    cn: '棉混纺面料', en: 'cotton blend fabric', th: 'ผ้าผสมฝ้าย', vn: 'vải pha cotton', es: 'tejido de mezcla de algodón',
    pt: 'tecido de mistura de algodão', id_lang: 'kain campuran katun', ru: 'ткань из смеси хлопка', fr: 'tissu en mélange de coton', ar: 'قماش قطني مخلوط', ja: ''
  },
  '棉盖丝': {
    cn: '棉盖丝', en: 'Cotton-covered silk', th: 'ผ้าไหมหุ้มผ้าฝ้าย', vn: 'Lụa bọc bông', es: 'Seda recubierta de algodón',
    pt: 'Seda revestida de algodão', id_lang: 'Sutra berlapis katun', ru: 'Шелк, покрытый хлопком', fr: 'Soie recouverte de coton', ar: 'حرير مغطى بالقطن', ja: ''
  },
  '棉盖丝平纹': {
    cn: '棉盖丝平纹', en: 'Cotton-covered plain weave', th: 'ผ้าทอเรียบหุ้มด้วยผ้าฝ้าย', vn: 'Dệt trơn phủ bông', es: 'Tejido liso recubierto de algodón',
    pt: 'Tecido liso revestido de algodão', id_lang: 'Tenunan polos berlapis katun', ru: 'Хлопчатобумажное полотняное переплетение', fr: 'Toile unie recouverte de coton', ar: 'نسيج سادة مغطى بالقطن', ja: ''
  },
  '棉盖丝蜡染平纹': {
    cn: '棉盖丝蜡染平纹', en: 'Cotton-covered silk batik plain weave', th: 'ผ้าไหมบาติกทอเรียบหุ้มด้วยผ้าฝ้าย', vn: 'Vải dệt trơn batik lụa phủ bông', es: 'Tejido liso batik de seda recubierta de algodón',
    pt: 'Tecido liso de batik de seda revestido de algodão', id_lang: 'Kain batik sutra tenun polos berlapis katun', ru: 'Шелковый батик, покрытый хлопком, простое переплетение.', fr: 'batik en soie recouvert de coton, tissage uni', ar: 'نسيج باتيك حريري سادة مغطى بالقطن', ja: ''
  },
  '棉罗纹': {
    cn: '棉罗纹', en: 'cotton rib', th: 'ผ้าฝ้ายริบ', vn: 'gân bông', es: 'canalé de algodón',
    pt: 'ribana de algodão', id_lang: 'katun rib', ru: 'хлопковая резинка', fr: 'côtes de coton', ar: 'ضلع قطني', ja: ''
  },
  '棉聚酯提花面料': {
    cn: '棉聚酯提花面料', en: 'Cotton-polyester jacquard fabric', th: 'ผ้าแจ็กการ์ดผสมฝ้ายและโพลีเอสเตอร์', vn: 'Vải jacquard cotton-polyester', es: 'Tejido jacquard de algodón y poliéster',
    pt: 'Tecido jacquard de algodão e poliéster', id_lang: 'Kain jacquard katun-poliester', ru: 'Жаккардовая ткань из хлопка и полиэстера', fr: 'tissu jacquard coton-polyester', ar: 'قماش جاكار من القطن والبوليستر', ja: ''
  },
  '棉袖子面料': {
    cn: '棉袖子面料', en: 'Cotton sleeve fabric', th: 'ผ้าสำหรับทำแขนเสื้อทำจากผ้าฝ้าย', vn: 'Vải tay áo bằng cotton', es: 'Tela de manga de algodón',
    pt: 'Tecido de algodão para mangas', id_lang: 'Kain lengan katun', ru: 'Хлопчатобумажная ткань для рукавов', fr: 'Tissu de manche en coton', ar: 'قماش أكمام قطني', ja: ''
  },
  '棉针织': {
    cn: '棉针织', en: 'cotton knitwear', th: 'เสื้อถักผ้าฝ้าย', vn: 'đồ dệt kim bằng cotton', es: 'prendas de punto de algodón',
    pt: 'malha de algodão', id_lang: 'rajutan katun', ru: 'хлопковый трикотаж', fr: 'tricots en coton', ar: 'ملابس قطنية محبوكة', ja: ''
  },
  '棉锦': {
    cn: '棉锦', en: 'cotton brocade', th: 'ผ้าฝ้ายทอลาย', vn: 'gấm bông', es: 'brocado de algodón',
    pt: 'brocado de algodão', id_lang: 'brokat katun', ru: 'хлопковая парча', fr: 'brocart de coton', ar: 'ديباج قطني', ja: ''
  },
  '棉锦斜纹': {
    cn: '棉锦斜纹', en: 'Cotton twill', th: 'ผ้าฝ้ายทวิลล์', vn: 'Vải chéo cotton', es: 'Sarga de algodón',
    pt: 'Sarja de algodão', id_lang: 'Kain katun kepar', ru: 'Хлопковая саржа', fr: 'Sergé de coton', ar: 'قطن تويل', ja: ''
  },
  '棉锦氨': {
    cn: '棉锦氨', en: 'Cotton, Nylon, and Ammonium', th: 'ฝ้าย ไนลอน และแอมโมเนียม', vn: 'Bông, Nylon và Amoni', es: 'Algodón, nailon y amonio',
    pt: 'Algodão, náilon e amônio', id_lang: 'Kapas, Nilon, dan Amonium', ru: 'Хлопок, нейлон и аммоний', fr: 'Coton, nylon et ammonium', ar: 'القطن والنايلون والأمونيوم', ja: ''
  },
  '棉锦氨面料': {
    cn: '棉锦氨面料', en: 'Cotton-nylon-spandex fabric', th: 'ผ้าฝ้ายผสมไนลอนและสแปนเด็กซ์', vn: 'Vải cotton-nylon-spandex', es: 'Tejido de algodón, nailon y elastano.',
    pt: 'Tecido de algodão, nylon e elastano', id_lang: 'Kain katun-nilon-spandex', ru: 'Ткань из хлопка, нейлона и спандекса', fr: 'tissu coton-nylon-élasthanne', ar: 'قماش قطني-نايلون-سباندكس', ja: ''
  },
  '棉锦衬衫面料': {
    cn: '棉锦衬衫面料', en: 'Cotton-nylon shirt fabric', th: 'ผ้าสำหรับทำเสื้อเชิ้ต ผ้าฝ้ายผสมไนลอน', vn: 'Vải cotton-nylon dùng làm áo sơ mi', es: 'Tela de camisa de algodón y nailon',
    pt: 'Tecido de camisa de algodão e nylon', id_lang: 'Kain kemeja katun-nilon', ru: 'Ткань для рубашек из хлопка и нейлона', fr: 'tissu de chemise en coton-nylon', ar: 'قماش قميص من القطن والنايلون', ja: ''
  },
  '棉面料': {
    cn: '棉面料', en: 'cotton fabric', th: 'ผ้าฝ้าย', vn: 'vải cotton', es: 'tejido de algodón',
    pt: 'tecido de algodão', id_lang: 'kain katun', ru: 'хлопчатобумажная ткань', fr: 'tissu de coton', ar: 'قماش قطني', ja: ''
  },
  '棉麻': {
    cn: '棉麻', en: 'cotton and linen', th: 'ผ้าฝ้ายและผ้าลินิน', vn: 'bông và vải lanh', es: 'algodón y lino',
    pt: 'algodão e linho', id_lang: 'katun dan linen', ru: 'хлопок и лён', fr: 'coton et lin', ar: 'القطن والكتان', ja: ''
  },
  '棉麻天丝': {
    cn: '棉麻天丝', en: 'Cotton, linen, and Tencel', th: 'ผ้าฝ้าย ผ้าลินิน และผ้าเทนเซล', vn: 'Bông, lanh và Tencel', es: 'Algodón, lino y Tencel',
    pt: 'Algodão, linho e Tencel', id_lang: 'Katun, linen, dan Tencel', ru: 'Хлопок, лён и тенсел', fr: 'Coton, lin et Tencel', ar: 'القطن والكتان والتنسل', ja: ''
  },
  '棉麻面料': {
    cn: '棉麻面料', en: 'cotton and linen fabric', th: 'ผ้าฝ้ายและผ้าลินิน', vn: 'vải bông và vải lanh', es: 'tela de algodón y lino',
    pt: 'tecido de algodão e linho', id_lang: 'kain katun dan linen', ru: 'хлопчатобумажная и льняная ткань', fr: 'tissu de coton et de lin', ar: 'قماش قطني وكتاني', ja: ''
  },
  '棋盘格': {
    cn: '棋盘格', en: 'chessboard', th: 'กระดานหมากรุก', vn: 'bàn cờ', es: 'tablero de ajedrez',
    pt: 'tabuleiro de xadrez', id_lang: 'papan catur', ru: 'шахматная доска', fr: 'échiquier', ar: 'رقعة الشطرنج', ja: ''
  },
  '棕咖色': {
    cn: '棕咖色', en: 'Brown coffee color', th: 'สีน้ำตาลกาแฟ', vn: 'Màu cà phê nâu', es: 'color café marrón',
    pt: 'Cor de café marrom', id_lang: 'Warna cokelat kopi', ru: 'Коричневый кофейный цвет', fr: 'couleur café brun', ar: 'لون القهوة البني', ja: ''
  },
  '棕灰色部分': {
    cn: '棕灰色部分', en: 'brownish-gray parts', th: 'ส่วนสีน้ำตาลเทา', vn: 'các phần màu nâu xám', es: 'partes de color gris parduzco',
    pt: 'partes marrom-acinzentadas', id_lang: 'bagian berwarna abu-abu kecoklatan', ru: 'коричневато-серые части', fr: 'parties gris brunâtre', ar: 'أجزاء رمادية بنية', ja: ''
  },
  '棕色': {
    cn: '棕色', en: 'brown', th: 'สีน้ำตาล', vn: 'màu nâu', es: 'marrón',
    pt: 'marrom', id_lang: 'cokelat', ru: 'коричневый', fr: 'brun', ar: 'بني', ja: ''
  },
  '棕色印花面料': {
    cn: '棕色印花面料', en: 'Brown printed fabric', th: 'ผ้าพิมพ์ลายสีน้ำตาล', vn: 'Vải in màu nâu', es: 'Tela estampada marrón',
    pt: 'Tecido marrom estampado', id_lang: 'Kain bercorak cokelat', ru: 'Коричневая ткань с принтом', fr: 'tissu imprimé marron', ar: 'قماش بني مطبوع', ja: ''
  },
  '棕色系': {
    cn: '棕色系', en: 'Brown', th: 'สีน้ำตาล', vn: 'Màu nâu', es: 'Marrón',
    pt: 'Marrom', id_lang: 'Cokelat', ru: 'Коричневый', fr: 'Brun', ar: 'بني', ja: ''
  },
  '棕色纱': {
    cn: '棕色纱', en: 'brown yarn', th: 'เส้นด้ายสีน้ำตาล', vn: 'sợi len màu nâu', es: 'hilo marrón',
    pt: 'fio marrom', id_lang: 'benang cokelat', ru: 'коричневая пряжа', fr: 'fil brun', ar: 'خيوط بنية اللون', ja: ''
  },
  '棕色绣线': {
    cn: '棕色绣线', en: 'Brown embroidery thread', th: 'ด้ายปักสีน้ำตาล', vn: 'Chỉ thêu màu nâu', es: 'Hilo de bordar marrón',
    pt: 'Linha de bordar marrom', id_lang: 'Benang sulam cokelat', ru: 'Коричневые вышивальные нити', fr: 'Fil à broder marron', ar: 'خيط تطريز بني', ja: ''
  },
  '棕色股纱': {
    cn: '棕色股纱', en: 'Brown yarn', th: 'เส้นด้ายสีน้ำตาล', vn: 'Sợi len màu nâu', es: 'Hilo marrón',
    pt: 'Fio marrom', id_lang: 'Benang cokelat', ru: 'Коричневая пряжа', fr: 'Fil marron', ar: 'خيوط بنية اللون', ja: ''
  },
  '棕色长丝': {
    cn: '棕色长丝', en: 'Brown filament', th: 'เส้นใยสีน้ำตาล', vn: 'Sợi màu nâu', es: 'Filamento marrón',
    pt: 'Filamento marrom', id_lang: 'Filamen cokelat', ru: 'Коричневая нить', fr: 'filament brun', ar: 'خيط بني', ja: ''
  },
  '植绒': {
    cn: '植绒', en: 'flocking', th: 'ฝูง', vn: 'bầy đàn', es: 'formación de bandadas',
    pt: 'bando', id_lang: 'berkelompok', ru: 'стадо', fr: 'flocage', ar: 'التجمّع', ja: ''
  },
  '植绒除外': {
    cn: '植绒除外', en: 'Except for flocking', th: 'ยกเว้นการต้อนฝูง', vn: 'Ngoại trừ hiện tượng tụ tập thành đàn.', es: 'Excepto por la formación de bandadas',
    pt: 'Exceto para flocagem', id_lang: 'Kecuali berbulu', ru: 'За исключением образования стад', fr: 'Sauf le flocage', ar: 'باستثناء التلبيد', ja: ''
  },
  '横机': {
    cn: '横机', en: 'Flat knitting machine', th: 'เครื่องถักแบบแบน', vn: 'Máy dệt kim phẳng', es: 'máquina de tejer plana',
    pt: 'Máquina de tricô plana', id_lang: 'Mesin rajut datar', ru: 'Плосковязальная машина', fr: 'machine à tricoter à plat', ar: 'آلة حياكة مسطحة', ja: ''
  },
  '横条肌理': {
    cn: '横条肌理', en: 'Horizontal stripe texture', th: 'ลวดลายเส้นแนวนอน', vn: 'Họa tiết sọc ngang', es: 'Textura de rayas horizontales',
    pt: 'Textura de listras horizontais', id_lang: 'Tekstur garis horizontal', ru: 'Текстура в виде горизонтальных полос', fr: 'texture à rayures horizontales', ar: 'نسيج مخطط أفقي', ja: ''
  },
  '横纹': {
    cn: '横纹', en: 'horizontal stripes', th: 'ลายเส้นแนวนอน', vn: 'sọc ngang', es: 'rayas horizontales',
    pt: 'listras horizontais', id_lang: 'garis horizontal', ru: 'горизонтальные полосы', fr: 'rayures horizontales', ar: 'الخطوط الأفقية', ja: ''
  },
  '橄榄绿': {
    cn: '橄榄绿', en: 'Olive Green', th: 'สีเขียวมะกอก', vn: 'Màu xanh ô liu', es: 'Verde oliva',
    pt: 'Verde Oliva', id_lang: 'Hijau Zaitun', ru: 'Оливково-зелёный', fr: 'Vert olive', ar: 'أخضر زيتوني', ja: ''
  },
  '橘粉': {
    cn: '橘粉', en: 'orange powder', th: 'ผงสีส้ม', vn: 'bột màu cam', es: 'polvo de naranja',
    pt: 'pó de laranja', id_lang: 'bubuk jeruk', ru: 'апельсиновый порошок', fr: 'poudre orange', ar: 'مسحوق البرتقال', ja: ''
  },
  '橘色': {
    cn: '橘色', en: 'orange', th: 'ส้ม', vn: 'quả cam', es: 'naranja',
    pt: 'laranja', id_lang: 'oranye', ru: 'апельсин', fr: 'orange', ar: 'البرتقالي', ja: ''
  },
  '橘花印绣机织面料': {
    cn: '橘花印绣机织面料', en: 'Orange blossom printed embroidered machine-woven fabric', th: 'ผ้าทอจักรปักลายดอกส้ม', vn: 'Vải dệt máy thêu in họa tiết hoa cam', es: 'Tela tejida a máquina con bordados y estampado de flores de naranjo',
    pt: 'Tecido bordado à máquina com estampa de flor de laranjeira', id_lang: 'Kain tenun mesin bordir bermotif bunga jeruk', ru: 'Ткань машинного производства с вышивкой в ​​виде цветков апельсина', fr: 'tissu tissé à la machine brodé imprimé de fleurs d&#39;oranger', ar: 'قماش منسوج آلياً مطرز بنقشة زهر البرتقال', ja: ''
  },
  '橙色': {
    cn: '橙色', en: 'orange color', th: 'สีส้ม', vn: 'màu cam', es: 'color naranja',
    pt: 'cor laranja', id_lang: 'warna oranye', ru: 'оранжевый цвет', fr: 'couleur orange', ar: 'اللون البرتقالي', ja: ''
  },
  '橙色镶拼': {
    cn: '橙色镶拼', en: 'Orange patchwork', th: 'สีส้มปะติดปะต่อกัน', vn: 'chắp vá màu cam', es: 'mosaico naranja',
    pt: 'Retalhos laranja', id_lang: 'tambal sulam oranye', ru: 'Оранжевый лоскутный узор', fr: 'patchwork orange', ar: 'رقعة برتقالية', ja: ''
  },
  '橡皮红': {
    cn: '橡皮红', en: 'Rubber Red', th: 'ยางสีแดง', vn: 'Cao su đỏ', es: 'Rojo caucho',
    pt: 'Vermelho de borracha', id_lang: 'Karet Merah', ru: 'Резиновый красный', fr: 'Caoutchouc rouge', ar: 'أحمر مطاطي', ja: ''
  },
  '橡皮红花纹': {
    cn: '橡皮红花纹', en: 'Rubber Red Pattern', th: 'ลวดลายยางสีแดง', vn: 'Họa tiết cao su đỏ', es: 'Patrón rojo de goma',
    pt: 'Borracha com padrão vermelho', id_lang: 'Pola Merah Karet', ru: 'Резиновый красный узор', fr: 'Motif en caoutchouc rouge', ar: 'نمط أحمر مطاطي', ja: ''
  },
  '橡胶': {
    cn: '橡胶', en: 'rubber', th: 'ยาง', vn: 'cao su', es: 'goma',
    pt: 'borracha', id_lang: 'karet', ru: 'резина', fr: 'caoutchouc', ar: 'ممحاة', ja: ''
  },
  '欧洲码': {
    cn: '欧洲码', en: 'EU Size', th: 'ไซซ์ยุโรป', vn: 'Cỡ EU', es: 'Talla EU',
    pt: 'Tamanho EU', id_lang: 'Ukuran EU', ru: 'Размер EU', fr: 'Taille EU', ar: 'مقاس EU', ja: ''
  },
  '款号': {
    cn: '款号', en: 'Style No.', th: 'รหัสแบบ', vn: 'Mã kiểu dáng', es: 'N.º de estilo',
    pt: 'N.º do modelo', id_lang: 'Nomor Gaya', ru: 'Номер модели', fr: 'N° de style', ar: 'رقم الموديل', ja: ''
  },
  '正反捻': {
    cn: '正反捻', en: 'Twist', th: 'บิด', vn: 'Xoắn', es: 'Girar',
    pt: 'Torção', id_lang: 'Memutar', ru: 'Крутить', fr: 'Torsion', ar: 'التواء', ja: ''
  },
  '比例': {
    cn: '比例', en: 'Proportion', th: 'สัดส่วน', vn: 'Tỷ lệ', es: 'Proporción',
    pt: 'Proporção', id_lang: 'Proporsi', ru: 'Пропорция', fr: 'Proportion', ar: 'حَجم', ja: ''
  },
  '毛呢': {
    cn: '毛呢', en: 'woolen', th: 'ขนสัตว์', vn: 'len', es: 'de lana',
    pt: 'de lã', id_lang: 'wol', ru: 'шерстяной', fr: 'de laine', ar: 'صوفي', ja: ''
  },
  '毛呢格纹': {
    cn: '毛呢格纹', en: 'wool plaid', th: 'ลายสก็อตผ้าขนสัตว์', vn: 'kẻ sọc len', es: 'cuadros de lana',
    pt: 'xadrez de lã', id_lang: 'wol kotak-kotak', ru: 'шерстяная клетка', fr: 'plaid en laine', ar: 'صوف كاروهات', ja: ''
  },
  '毛圈': {
    cn: '毛圈', en: 'Terry Cloth', th: 'ผ้าขนหนู', vn: 'Vải bông xốp', es: 'Tela de rizo',
    pt: 'Tecido atoalhado', id_lang: 'Kain Handuk', ru: 'Махровая ткань', fr: 'Tissu éponge', ar: 'قماش تيري', ja: ''
  },
  '毛圈布': {
    cn: '毛圈布', en: 'terry cloth', th: 'ผ้าเทอร์รี่', vn: 'vải bông', es: 'tela de rizo',
    pt: 'tecido atoalhado', id_lang: 'kain terry', ru: 'махровая ткань', fr: 'tissu éponge', ar: 'قماش تيري', ja: ''
  },
  '毛涤混纺': {
    cn: '毛涤混纺', en: 'Wool-polyester blend', th: 'ส่วนผสมของขนสัตว์และโพลีเอสเตอร์', vn: 'Hỗn hợp len-polyester', es: 'Mezcla de lana y poliéster',
    pt: 'Mistura de lã e poliéster', id_lang: 'Campuran wol dan poliester', ru: 'Смесь шерсти и полиэстера', fr: 'mélange laine-polyester', ar: 'مزيج من الصوف والبوليستر', ja: ''
  },
  '毛皮': {
    cn: '毛皮', en: 'fur', th: 'ขน', vn: 'lông thú', es: 'pelo',
    pt: 'pelagem', id_lang: 'bulu', ru: 'шерсть', fr: 'fourrure', ar: 'ف', ja: ''
  },
  '毛织': {
    cn: '毛织', en: 'wool', th: 'ขนสัตว์', vn: 'len', es: 'lana',
    pt: 'lã', id_lang: 'wol', ru: 'шерсть', fr: 'laine', ar: 'صوف', ja: ''
  },
  '毛织布片': {
    cn: '毛织布片', en: 'woolen fabric pieces', th: 'ชิ้นส่วนผ้าขนสัตว์', vn: 'mảnh vải len', es: 'piezas de tela de lana',
    pt: 'peças de tecido de lã', id_lang: 'potongan kain wol', ru: 'кусочки шерстяной ткани', fr: 'morceaux de tissu de laine', ar: 'قطع من القماش الصوفي', ja: ''
  },
  '毛织片': {
    cn: '毛织片', en: 'woolen pieces', th: 'ชิ้นส่วนขนสัตว์', vn: 'những mảnh len', es: 'piezas de lana',
    pt: 'peças de lã', id_lang: 'potongan wol', ru: 'шерстяные изделия', fr: 'pièces en laine', ar: 'قطع صوفية', ja: ''
  },
  '毛织面料': {
    cn: '毛织面料', en: 'wool fabric', th: 'ผ้าขนสัตว์', vn: 'vải len', es: 'tela de lana',
    pt: 'tecido de lã', id_lang: 'kain wol', ru: 'шерстяная ткань', fr: 'tissu de laine', ar: 'قماش صوفي', ja: ''
  },
  '毛羽纱': {
    cn: '毛羽纱', en: 'Feather yarn', th: 'เส้นด้ายขนนก', vn: 'Sợi lông vũ', es: 'Hilo de plumas',
    pt: 'Fio de penas', id_lang: 'Benang bulu', ru: 'Перьевая пряжа', fr: 'Fil de plumes', ar: 'خيوط الريش', ja: ''
  },
  '毛衣': {
    cn: '毛衣', en: 'sweater', th: 'เสื้อกันหนาว', vn: 'áo len', es: 'suéter',
    pt: 'suéter', id_lang: 'sweter', ru: 'свитер', fr: 'pull-over', ar: 'سترة', ja: ''
  },
  '毛衫片': {
    cn: '毛衫片', en: 'sweater piece', th: 'เสื้อสเวตเตอร์', vn: 'mảnh áo len', es: 'pieza de suéter',
    pt: 'peça de suéter', id_lang: 'potongan sweter', ru: 'свитер', fr: 'pièce de pull', ar: 'قطعة صوفية', ja: ''
  },
  '毛衫片罗纹': {
    cn: '毛衫片罗纹', en: 'ribbed sweater', th: 'เสื้อสเวตเตอร์ลายริบ', vn: 'áo len gân', es: 'suéter acanalado',
    pt: 'suéter canelado', id_lang: 'sweater bergaris', ru: 'ребристый свитер', fr: 'pull côtelé', ar: 'كنزة صوفية مضلعة', ja: ''
  },
  '毛领': {
    cn: '毛领', en: 'fur collar', th: 'ปกขนสัตว์', vn: 'cổ áo lông', es: 'cuello de piel',
    pt: 'gola de pele', id_lang: 'kerah bulu', ru: 'меховой воротник', fr: 'col en fourrure', ar: 'طوق أحمر', ja: ''
  },
  '氨纶': {
    cn: '氨纶', en: 'spandex', th: 'สแปนเด็กซ์', vn: 'spandex', es: 'spandex',
    pt: 'spandex', id_lang: 'spandeks', ru: 'спандекс', fr: 'spandex', ar: 'سباندوكس', ja: ''
  },
  '氨纶复合里层': {
    cn: '氨纶复合里层', en: 'Spandex composite inner layer', th: 'ชั้นในทำจากวัสดุผสมสแปนเด็กซ์', vn: 'Lớp trong bằng sợi tổng hợp Spandex', es: 'capa interior compuesta de Spandex',
    pt: 'camada interna composta de elastano', id_lang: 'Lapisan dalam komposit spandeks', ru: 'Внутренний слой из композитного спандекса', fr: 'couche intérieure composite en spandex', ar: 'طبقة داخلية مركبة من الإسباندكس', ja: ''
  },
  '氨纶汗布': {
    cn: '氨纶汗布', en: 'Spandex jersey fabric', th: 'ผ้าเจอร์ซีย์สแปนเด็กซ์', vn: 'Vải thun spandex', es: 'tejido de punto de spandex',
    pt: 'Tecido de malha de elastano', id_lang: 'Kain jersey spandeks', ru: 'Ткань из спандекса', fr: 'tissu jersey Spandex', ar: 'قماش جيرسي سباندكس', ja: ''
  },
  '氨纶粗纺': {
    cn: '氨纶粗纺', en: 'Spandex coarse spinning', th: 'สแปนเด็กซ์ปั่นหยาบ', vn: 'Sợi Spandex thô', es: 'Spandex de hilado grueso',
    pt: 'Fiação grossa de elastano', id_lang: 'Spandex dengan pemintalan kasar', ru: 'Спандекс грубое прядение', fr: 'filage grossier de spandex', ar: 'غزل خشن من الإسباندكس', ja: ''
  },
  '氨纶针织面料': {
    cn: '氨纶针织面料', en: 'Spandex knitted fabric', th: 'ผ้าสแปนเด็กซ์ถัก', vn: 'Vải dệt kim Spandex', es: 'tejido de punto de spandex',
    pt: 'Tecido de malha de elastano', id_lang: 'Kain rajut spandeks', ru: 'Трикотажная ткань из спандекса', fr: 'tissu tricoté en spandex', ar: 'قماش محبوك من الإسباندكس', ja: ''
  },
  '水墨山河': {
    cn: '水墨山河', en: 'Ink and wash landscape', th: 'ภาพทิวทัศน์แบบหมึกและสีน้ำ', vn: 'Tranh phong cảnh mực và màu nước', es: 'Paisaje con tinta y aguada',
    pt: 'Paisagem em tinta e aguarela', id_lang: 'Pemandangan dengan tinta dan sapuan kuas.', ru: 'Пейзаж, выполненный тушью и акварелью.', fr: 'paysage à l&#39;encre et au lavis', ar: 'منظر طبيعي بالحبر والغسل', ja: ''
  },
  '水泥': {
    cn: '水泥', en: 'cement', th: 'ปูนซีเมนต์', vn: 'xi măng', es: 'cemento',
    pt: 'cimento', id_lang: 'semen', ru: 'цемент', fr: 'ciment', ar: 'أسمنت', ja: ''
  },
  '水泥灰': {
    cn: '水泥灰', en: 'Cement ash', th: 'เถ้าซีเมนต์', vn: 'Tro xi măng', es: 'Ceniza de cemento',
    pt: 'Cinzas de cimento', id_lang: 'Abu semen', ru: 'Цементная зола', fr: 'Cendres de ciment', ar: 'رماد الأسمنت', ja: ''
  },
  '水泥灰花纹': {
    cn: '水泥灰花纹', en: 'Cement gray pattern', th: 'ลวดลายสีเทาซีเมนต์', vn: 'Mẫu màu xám xi măng', es: 'Patrón gris cemento',
    pt: 'Padrão cinza cimento', id_lang: 'Pola abu-abu semen', ru: 'Узор серого цементного цвета', fr: 'Motif gris ciment', ar: 'نمط رمادي إسمنتي', ja: ''
  },
  '水泥灰镶拼': {
    cn: '水泥灰镶拼', en: 'Cement gray inlay', th: 'ฝังซีเมนต์สีเทา', vn: 'Lớp lót màu xám xi măng', es: 'Incrustaciones de color gris cemento',
    pt: 'Inlay cinza cimento', id_lang: 'Inlay abu-abu semen', ru: 'Вставка из цементно-серого материала', fr: 'Incrustation gris ciment', ar: 'تطعيم رمادي إسمنتي', ja: ''
  },
  '水蓝': {
    cn: '水蓝', en: 'Water Blue', th: 'สีน้ำเงินน้ำ', vn: 'Màu xanh nước', es: 'Azul del agua',
    pt: 'Azul Água', id_lang: 'Biru Air', ru: 'Вода голубая', fr: 'Bleu d&#39;eau', ar: 'أزرق مائي', ja: ''
  },
  '水蓝镶拼': {
    cn: '水蓝镶拼', en: 'Aquamarine patchwork', th: 'ลายปะติดปะต่อสีฟ้าอมเขียว', vn: 'Mảnh ghép màu xanh ngọc lam', es: 'Mosaico aguamarina',
    pt: 'Patchwork azul-turquesa', id_lang: 'tambal sulam warna aquamarine', ru: 'Аквамариновый лоскутный узор', fr: 'patchwork aigue-marine', ar: 'رقعة من اللون الأزرق المائي', ja: ''
  },
  '汉麻': {
    cn: '汉麻', en: 'hemp', th: 'กัญชา', vn: 'cây gai dầu', es: 'cáñamo',
    pt: 'cânhamo', id_lang: 'rami', ru: 'конопля', fr: 'chanvre', ar: 'القنب', ja: ''
  },
  '池塘蓝': {
    cn: '池塘蓝', en: 'Pond Blue', th: 'บ่อน้ำสีฟ้า', vn: 'Màu xanh ao', es: 'Azul del estanque',
    pt: 'Lago Azul', id_lang: 'Biru Kolam', ru: 'Пруд Блю', fr: 'Étang bleu', ar: 'بركة زرقاء', ja: ''
  },
  '法国罗纹': {
    cn: '法国罗纹', en: 'French rib', th: 'ซี่โครงฝรั่งเศส', vn: 'sườn kiểu Pháp', es: 'costilla francesa',
    pt: 'costela francesa', id_lang: 'Iga Prancis', ru: 'Французские ребрышки', fr: 'côtes de porc françaises', ar: 'ضلوع فرنسية', ja: ''
  },
  '泡泡格': {
    cn: '泡泡格', en: 'Bubble Grid', th: 'ตารางฟอง', vn: 'Lưới bong bóng', es: 'Cuadrícula de burbujas',
    pt: 'Grade de Bolhas', id_lang: 'Kisi Gelembung', ru: 'Пузырьковая сетка', fr: 'Grille à bulles', ar: 'شبكة الفقاعات', ja: ''
  },
  '泡泡针织': {
    cn: '泡泡针织', en: 'Bubble Knitting', th: 'การถักแบบฟองสบู่', vn: 'Đan bong bóng', es: 'Tejido de burbujas',
    pt: 'Tricô de bolhas', id_lang: 'Merajut Gelembung', ru: 'Вязание с пузырьками', fr: 'Tricot à bulles', ar: 'حياكة الفقاعات', ja: ''
  },
  '泡泡面料': {
    cn: '泡泡面料', en: 'Bubble fabric', th: 'ผ้าฟองอากาศ', vn: 'Vải bong bóng', es: 'Tela de burbujas',
    pt: 'Tecido de bolhas', id_lang: 'Kain gelembung', ru: 'Пузырчатая ткань', fr: 'tissu à bulles', ar: 'قماش الفقاعات', ja: ''
  },
  '注意：洗涤用品': {
    cn: '注意：洗涤用品', en: 'Note: Washing products', th: 'หมายเหตุ: ผลิตภัณฑ์ซักผ้า', vn: 'Lưu ý: Sản phẩm giặt', es: 'Nota: Productos de lavado',
    pt: 'Nota: Produtos de lavagem', id_lang: 'Catatan: Mencuci produk', ru: 'Примечание: Средства для стирки', fr: 'Remarque : Produits de lavage', ar: 'ملحوظة: منتجات الغسيل', ja: '注意：洗剤'
  },
  '注： 不可长时间浸泡，请与其它衣物分开洗涤。': {
    cn: '注： 不可长时间浸泡，请与其它衣物分开洗涤。', en: 'Note: Do not soak for extended periods. Please wash separately from other garments.', th: 'หมายเหตุ: ห้ามแช่น้ำเป็นเวลานาน กรุณาซักแยกจากเสื้อผ้าชนิดอื่น', vn: 'Lưu ý: Không ngâm quá lâu, vui lòng giặt riêng với các loại quần áo khác.', es: 'Nota: No sumergir durante mucho tiempo. Lavar por separado de otras prendas.',
    pt: 'Nota: Não mergulhe por longos períodos e lave separadamente de outras roupas.', id_lang: 'Catatan: Jangan direndam terlalu lama, cuci terpisah dari pakaian lain.', ru: 'Примечание: не замачивайте на длительное время, стирайте отдельно от других вещей.', fr: 'Remarque : Ne pas faire tremper longtemps, laver séparément des autres vêtements.', ar: 'ملاحظة: لا تنقع لفترة طويلة، ويُغسل بشكل منفصل عن الملابس الأخرى.', ja: ''
  },
  '注：不可长时间浸泡，请与其它衣物分开洗涤。': {
    cn: '注：不可长时间浸泡，请与其它衣物分开洗涤。', en: 'Note: Do not soak for extended periods. Please wash separately from other garments.', th: 'ข้อควรระวัง: ห้ามแช่น้ำเป็นเวลานาน กรุณาซักแยกจากเสื้อผ้าชิ้นอื่น', vn: 'Lưu ý: Không ngâm quá lâu, giặt riêng với các quần áo khác.', es: 'Nota: No remojar durante mucho tiempo, lavar por separado de otras prendas.',
    pt: 'Nota: Não mergulhe por muito tempo, lave separadamente de outras roupas.', id_lang: 'Catatan: Jangan direndam terlalu lama, cuci terpisah dari pakaian lain.', ru: 'Примечание: не замачивайте на длительное время, стирайте отдельно от других вещей.', fr: 'Remarque : Ne pas laisser tremper longtemps, laver séparément des autres vêtements.', ar: 'ملاحظة: لا تنقع لفترة طويلة، يرجى غسلها منفصلة عن الملابس الأخرى.', ja: ''
  },
  '注：不可长时间浸泡，请与其它衣物分开洗涤；未晾干前不可硬拉，不可抠压胶部分，压胶处垫布熨烫。': {
    cn: '注：不可长时间浸泡，请与其它衣物分开洗涤；未晾干前不可硬拉，不可抠压胶部分，压胶处垫布熨烫。', en: 'Note: Do not soak for extended periods. Wash separately from other garments. Do not pull forcefully before drying. Do not press or rub the taped areas; iron the taped areas with a cloth placed over them.', th: 'หมายเหตุ: ห้ามแช่น้ำเป็นเวลานาน ควรซักแยกจากเสื้อผ้าชิ้นอื่น ห้ามดึงส่วนที่เป็นกาวอย่างแรงก่อนแห้ง ห้ามบีบหรือกดส่วนที่เป็นกาว และควรรีดทับด้วยผ้ารองบริเวณที่เป็นกาว', vn: 'Lưu ý: Không ngâm lâu, giặt riêng với các quần áo khác; không kéo mạnh trước khi phơi khô, không ấn vào phần keo, là ủi phần keo có lót vải.', es: 'Nota: No sumergir durante mucho tiempo, lavar por separado de otras prendas; no estirar con fuerza antes de secar, no presionar la parte con adhesivo, y planchar la zona con adhesivo interponiendo un paño.',
    pt: 'Observação: não mergulhe por longos períodos, lave separadamente de outras peças de roupa; não puxe com força antes de secar, não aperte ou pressione as partes com fita adesiva, e passe a ferro com um pano sobre a área com fita adesiva.', id_lang: 'Catatan: Jangan direndam terlalu lama, cuci terpisah dari pakaian lain; jangan menarik dengan paksa sebelum kering, jangan menekan bagian lem, setrika bagian lem dengan alas kain.', ru: 'Примечание: не замачивать надолго, стирать отдельно от другой одежды; не тянуть сильно до полного высыхания, не нажимать на проклеенные участки, гладить проклеенные участки через ткань.', fr: 'Remarque : ne pas immerger longtemps, laver séparément des autres vêtements ; ne pas tirer fort avant séchage, ne pas presser la partie adhésive, repasser la partie adhésive avec un tissu.', ar: 'ملاحظة: لا تنقع لفترة طويلة، واغسلها بشكل منفصل عن الملابس الأخرى؛ لا تسحب بقوة قبل أن تجف، ولا تضغط على الجزء المطلي بالمادة اللاصقة، واكوي منطقة الضغط اللاصق بقطعة قماش.', ja: ''
  },
  '注：压胶处垫布熨烫。': {
    cn: '注：压胶处垫布熨烫。', en: 'Note: Use a cloth to iron the taped seam.', th: 'หมายเหตุ: รีดผ้าบริเวณที่ติดเทปด้วยผ้าบุ', vn: 'Lưu ý: Dùng vải đệm để là phần dán keo.', es: 'Nota: Planchar el paño de respaldo en el área sellada.',
    pt: 'Nota: A área de fita adesiva deve ser passada com um pano.', id_lang: 'Catatan: Area yang direkatkan dengan tape perlu dilapisi kain saat disetrika.', ru: 'Примечание: Проклейте шов тканью с помощью утюга.', fr: 'Remarque : Repasser le tissu sur les coutures thermocollées.', ar: 'ملاحظة: استخدم قطعة قماش لتثبيت منطقة الشريط اللاصق بالكي.', ja: ''
  },
  '注：垫布熨烫': {
    cn: '注：垫布熨烫', en: 'Note: Iron with a pressing cloth.', th: 'หมายเหตุ: รีดโดยใช้ผ้ารองรีด', vn: 'Lưu ý: Ủi với khăn lót.', es: 'Nota: Planchar con un paño de protección.',
    pt: 'Nota: Passe a ferro com um pano de proteção.', id_lang: 'Catatan: Setrika dengan kain pelapis.', ru: 'Примечание: Гладить через ткань.', fr: 'Remarque : Repasser avec un chiffon de protection.', ar: 'ملاحظة: الكي باستخدام قطعة قماش واقية.', ja: ''
  },
  '注：垫布熨烫。不可长时间浸泡，请与其它衣物分开洗涤。': {
    cn: '注：垫布熨烫。不可长时间浸泡，请与其它衣物分开洗涤。', en: 'Note: Iron with a pressing cloth. Do not soak for extended periods. Wash separately from other garments.', th: 'หมายเหตุ: รีดผ้าโดยใช้ผ้ารองรีด ห้ามแช่น้ำเป็นเวลานาน ควรแยกซักจากเสื้อผ้าชนิดอื่น', vn: 'Lưu ý: Ủi bằng vải lót. Không ngâm quá lâu, vui lòng giặt riêng với quần áo khác.', es: 'Nota: Planchar a baja temperatura. No remojar durante mucho tiempo, lavar por separado de otras prendas.',
    pt: 'Observação: Passar a ferro com um pano entre a peça e o ferro. Não deixar de molho por muito tempo, lavar separadamente de outras roupas.', id_lang: 'Catatan: Setrika dengan alas. Jangan direndam terlalu lama, cuci terpisah dari pakaian lain.', ru: 'Примечание: гладить через прокладку. Не замачивать надолго, стирать отдельно от других вещей.', fr: 'Remarque : repasser à basse température. Ne pas laisser tremper longtemps, laver séparément des autres vêtements.', ar: 'ملاحظة: استخدم قطعة قماش للتسوية عند الكي. لا تنقعها لفترة طويلة، واغسلها منفصلة عن الملابس الأخرى.', ja: ''
  },
  '注：垫布熨烫。不能湿态堆放。不可长时间浸泡，请与其它衣物分开洗涤。': {
    cn: '注：垫布熨烫。不能湿态堆放。不可长时间浸泡，请与其它衣物分开洗涤。', en: 'Note: Iron with a cloth. Do not pile when wet. Do not soak for extended periods. Wash separately from other garments.', th: 'หมายเหตุ: รีดผ้าโดยใช้แผ่นรองห้ามวางซ้อนกันขณะเปียก ห้ามแช่ผ้านานเกินไป กรุณาซักแยกจากเสื้อผ้าชนิดอื่น', vn: 'Lưu ý: Phơi khô sau khi là. Không được xếp chồng khi còn ẩm. Không ngâm quá lâu, giặt riêng với các quần áo khác.', es: 'Nota: Planchar con un paño. No apilar en estado húmedo. No remojar durante mucho tiempo y lavar por separado de otras prendas.',
    pt: 'Observação: Passar com ferro em temperatura baixa. Não empilhar enquanto úmido. Não deixar de molho por muito tempo, lavar separadamente de outras roupas.', id_lang: 'Catatan: Setrika dengan alas setrika. Tidak boleh ditumpuk saat basah. Jangan direndam terlalu lama, cuci terpisah dari pakaian lain.', ru: 'Примечание: гладить через прокладку. Не складывать во влажном состоянии. Не замачивать надолго, стирать отдельно от других вещей.', fr: 'Remarque : Repasser sur un tissu. Ne pas empiler à l\'état humide. Ne pas laisser tremper longtemps, laver séparément des autres vêtements.', ar: 'ملاحظة: يمكن كي القماش. لا يجب تكديسه وهو رطب. لا تنقعه لفترة طويلة، واغسله منفصلاً عن الملابس الأخرى.', ja: ''
  },
  '注：垫布熨烫。不能湿态堆放。不可长时间浸泡，请与其它衣物分开洗涤，本产品在洗涤过程中出现的轻微褪色属正常现象。': {
    cn: '注：垫布熨烫。不能湿态堆放。不可长时间浸泡，请与其它衣物分开洗涤，本产品在洗涤过程中出现的轻微褪色属正常现象。', en: 'Note: Iron on a cloth pad. Do not stack while wet. Do not soak for extended periods. Wash separately from other garments. Slight color fading during washing is normal for this product.', th: 'หมายเหตุ: รีดผ้าโดยใช้แผ่นรองรองรีด ห้ามวางซ้อนกันขณะเปียก ห้ามแช่น้ำเป็นเวลานาน โปรดแยกซักจากเสื้อผ้าชนิดอื่น การซีดจางเล็กน้อยระหว่างการซักเป็นเรื่องปกติ', vn: 'Ghi chú: Lót vải để ủi. Không được để ẩm ướt trong thời gian dài. Không ngâm lâu, vui lòng giặt riêng với các loại quần áo khác. Việc có chút phai màu trong quá trình giặt là hiện tượng bình thường.', es: 'Nota: planchar la tela de fondo. No debe almacenarse en estado húmedo. No se debe sumergir durante mucho tiempo, lávelo por separado de otras prendas. Es normal que este producto presente un ligero desvanecimiento durante el proceso de lavado.',
    pt: 'Nota: Não colocar a base de pano em água. Não pode ser armazenada molhada. Não mergulhe por longos períodos, lave separadamente de outras peças de roupa. A leve descoloração que pode ocorrer durante a lavagem é uma ocorrência normal.', id_lang: 'Catatan: Setrika dengan kain pelindung. Jangan ditumpuk dalam keadaan basah. Tidak boleh direndam dalam waktu lama, harap cuci terpisah dari pakaian lainnya. Sedikit pudar yang terjadi selama proses pencucian adalah fenomena yang normal.', ru: 'Примечание: Утюжить на подкладке. Не хранить в сыром виде. Не мочить долгое время, стирать отдельно от других вещей. Небольшая потеря цвета в процессе стирки — это нормальное явление.', fr: 'Remarque : repasser sur un tapis de repassage. Ne pas empiler à l\'état humide. Ne pas laisser tremper longtemps. Laver séparément des autres vêtements. Une légère décoloration lors du lavage est normale pour ce produit.', ar: 'ملاحظة: يجب كيّ قطعة القماش وهي جافة. لا تترك مبللة مكدسة. تجنب النقع لفترات طويلة، واغسلها منفصلة عن الملابس الأخرى. يعتبر تلاشي اللون البسيط أثناء الغسيل ظاهرة طبيعية لهذا المنتج.', ja: ''
  },
  '注：垫布熨烫。不能湿态堆放。不可长时间浸泡，请与其它衣物分开洗涤；本产品在洗涤过程中出现的轻微褪色属正常现象。': {
    cn: '注：垫布熨烫。不能湿态堆放。不可长时间浸泡，请与其它衣物分开洗涤；本产品在洗涤过程中出现的轻微褪色属正常现象。', en: 'Note: Iron with a cloth. Do not stack when wet. Do not soak for extended periods; wash separately from other garments. Slight fading during washing is normal for this product.', th: 'ข้อควรระวัง: รีดด้วยผ้ารอง ห้ามวางซ้อนขณะเปียก ห้ามแช่น้ำนานๆ โปรดซักแยกจากเสื้อผ้าชนิดอื่น การซีดจางเล็กน้อยระหว่างการซักเป็นเรื่องปกติ', vn: 'Lưu ý: Giặt bằng miếng đệm. Không được xếp chồng khi còn ẩm. Không ngâm quá lâu, giặt riêng với các quần áo khác; hiện tượng phai màu nhẹ trong quá trình giặt là bình thường.', es: 'Nota: Planchar con paño. No apilar en húmedo. No dejar en remojo por mucho tiempo, lavar por separado de otras prendas; la ligera decoloración que aparece durante el lavado es un fenómeno normal.',
    pt: 'Observação: Passar a ferro em temperatura baixa. Não empilhar quando molhado. Não deixar de molho por muito tempo, lavar separadamente de outras roupas; o leve desbotamento que ocorre durante a lavagem é normal.', id_lang: 'Catatan: Setrika dengan alas. Tidak boleh ditumpuk dalam keadaan basah. Jangan direndam terlalu lama, cuci terpisah dari pakaian lain; kelunturan ringan yang terjadi selama pencucian produk ini adalah fenomena normal.', ru: 'Примечание: гладить через прокладку. Не складировать во влажном состоянии. Не замачивать надолго, стирать отдельно от других вещей; легкое выцветание при стирке является нормальным явлением.', fr: 'Remarque : Repasser sur un tissu de protection. Ne pas empiler lorsqu\'il est humide. Ne pas laisser tremper longtemps. Laver séparément des autres vêtements. Une légère décoloration lors du lavage est normale pour ce produit.', ar: 'ملاحظة: يتم كيّ قطعة القماش. لا يجوز تكديسها وهي رطبة. لا تنقع لفترة طويلة، واغسلها بشكل منفصل عن الملابس الأخرى؛ يعتبر بهتان اللون الخفيف الذي قد يظهر أثناء الغسيل ظاهرة طبيعية.', ja: ''
  },
  '注：干燥后轻轻拍打，请与其它衣物分开洗涤。': {
    cn: '注：干燥后轻轻拍打，请与其它衣物分开洗涤。', en: 'Note: Gently pat after drying. Wash separately from other garments.', th: 'หมายเหตุ: หลังจากแห้งแล้วให้ตบเบา ๆ และซักแยกจากเสื้อผ้าอื่น', vn: 'Lưu ý: Sau khi khô, vỗ nhẹ. Giặt riêng với các quần áo khác.', es: 'Nota: Golpear suavemente después del secado. Lavar por separado de otras prendas.',
    pt: 'Nota: Após secar, bata levemente. Lavar separadamente de outras roupas.', id_lang: 'Catatan: Setelah kering, tepuk perlahan. Cuci terpisah dari pakaian lain.', ru: 'Примечание: После высыхания слегка встряхнуть. Стирать отдельно от другой одежды.', fr: 'Remarque : Tapoter légèrement après séchage. Laver séparément des autres vêtements.', ar: 'ملاحظة: بعد الجفاف ربّت برفق. يُغسل منفصلًا عن الملابس الأخرى.', ja: ''
  },
  '注：未晾干前不可硬拉，不可抠压胶部分，压胶处垫布熨烫。': {
    cn: '注：未晾干前不可硬拉，不可抠压胶部分，压胶处垫布熨烫。', en: 'Note: Do not pull hard or press the glued parts before they are dry. Iron the glued parts with a cloth placed on top.', th: 'หมายเหตุ: ห้ามดึงแรงๆ ก่อนแห้ง ห้ามกดหรือบีบส่วนที่เป็นกาว รีดผ้าโดยมีผ้ารองทับบริเวณที่ติดกาว', vn: 'Lưu ý: Không kéo mạnh khi chưa khô, không ấn vào phần keo dán, là phần keo dán bằng vải lót.', es: 'Nota: No tire con fuerza antes de que esté seco, no presione ni apriete la parte sellada con pegamento, planche la zona sellada con pegamento colocando un paño.',
    pt: 'Observação: Não puxe com força nem pressione a parte adesiva antes de secar. Passe a ferro com um pano sobre a parte adesiva.', id_lang: 'Catatan: Jangan menarik dengan keras sebelum kering, jangan menekan bagian lem, setrika bagian yang dilem dengan alas kain.', ru: 'Примечание: не тяните с силой до высыхания, не вдавливайте и не нажимайте на проклеенные участки; гладьте проклеенные участки через ткань.', fr: 'Remarque : ne pas tirer fort avant que ce soit sec, ne pas toucher la partie collée, utilisez un tissu pour presser et repasser.', ar: 'ملاحظة: لا يمكن سحبها بقوة قبل أن تجف، ولا يمكن الضغط على قسم اللصق، يجب وضع قطعة قماش تحت منطقة اللصق عند الكي.', ja: ''
  },
  '注：水洗产品': {
    cn: '注：水洗产品', en: 'Note: Washable product', th: 'หมายเหตุ: ผลิตภัณฑ์สำหรับซักด้วยน้ำ', vn: 'Lưu ý: Sản phẩm giặt', es: 'Nota: Producto lavable',
    pt: 'Nota: Produto lavável', id_lang: 'Catatan: produk cuci air', ru: 'Примечание: Продукты, пригодные для стирки', fr: 'Remarque : produit lavable', ar: 'ملاحظة: منتجات قابلة للغسيل', ja: ''
  },
  '注：水洗产品 (有特殊磨损)': {
    cn: '注：水洗产品 (有特殊磨损)', en: 'Note: Water-washed product (special wear)', th: 'หมายเหตุ: ผลิตภัณฑ์ที่ผ่านการซัก (มีการสึกหรอเป็นพิเศษ)', vn: 'Lưu ý: Sản phẩm giặt (có hao mòn đặc biệt)', es: 'Nota: Productos lavados (con desgastes especiales)',
    pt: 'Nota: Produtos para lavagem (com desgaste especial)', id_lang: 'Catatan: Produk yang dicuci (dengan keausan khusus)', ru: 'Примечание: изделия, подвергшиеся стирке (со специальным эффектом износа)', fr: 'Note : Produits lavés (avec usure spéciale)', ar: 'ملاحظة: منتجات غسيل (ذات تآكل خاص)', ja: ''
  },
  '注：水洗产品(有特殊磨损)': {
    cn: '注：水洗产品(有特殊磨损)', en: 'Note: Water-washed products (with special wear)', th: 'หมายเหตุ: ผลิตภัณฑ์สำหรับซัก (มีการสึกหรอเป็นพิเศษ)', vn: 'Lưu ý: Sản phẩm giặt (có độ mài mòn đặc biệt)', es: 'Nota: Productos lavados (con desgaste especial)',
    pt: 'Nota: Produtos lavados (com desgaste especial)', id_lang: 'Catatan: Produk cuci air (dengan keausan khusus)', ru: 'Примечание: изделия, прошедшие водную стирку (с особым эффектом потертости)', fr: 'Remarque : Produits lavés (avec usure spéciale)', ar: 'ملاحظة: المنتجات المغسولة (مع تآكل خاص)', ja: ''
  },
  '注：水洗产品(有特殊磨损、洗烂工艺)': {
    cn: '注：水洗产品(有特殊磨损、洗烂工艺)', en: 'Note: Washable products (with special abrasion and washing processes)', th: 'หมายเหตุ: ผลิตภัณฑ์ที่สามารถซักได้ (มีการสึกหรอพิเศษ, กระบวนการซักที่ซับซ้อน)', vn: 'Chú thích: Sản phẩm rửa bằng nước (có mài mòn đặc biệt, quy trình giặt hỏng)', es: 'Nota: productos lavables (con desgaste especial, técnicas de lavado especiales)',
    pt: '[Translation failed, reason: deepl translation failed]注：水洗产品(有特殊磨损、洗烂工艺)', id_lang: 'Catatan: Produk cuci air (dengan proses keausan khusus, pencucian rusak)', ru: 'Примечание: изделия, подлежащие стирке (со специальной обработкой для износа и повреждения).', fr: 'Remarque : Produits lavés (avec usure spéciale, procédé de lavage abîmé)', ar: 'ملاحظة: منتجات الغسيل (مع عمليات خاصة للتآكل والتمزيق والغسيل).', ja: ''
  },
  '注：请与其它衣物分开洗涤，水洗后轻微褪色属正常现象，反面晾晒。注：水洗产品。': {
    cn: '注：请与其它衣物分开洗涤，水洗后轻微褪色属正常现象，反面晾晒。注：水洗产品。', en: 'Note: Wash separately from other garments. Slight fading after washing is normal. Hang to dry inside out. Note: Machine/hand washable product.', th: 'หมายเหตุ: ซักแยกจากเสื้อผ้าอื่น สีซีดเล็กน้อยหลังซักเป็นเรื่องปกติ ตากโดยกลับด้าน หมายเหตุ: เป็นผลิตภัณฑ์ที่ซักน้ำได้', vn: 'Lưu ý: Giặt riêng với các quần áo khác. Phai màu nhẹ sau khi giặt là hiện tượng bình thường. Phơi mặt trái. Lưu ý: Sản phẩm giặt nước.', es: 'Nota: Lavar por separado de otras prendas. Un ligero desteñido después del lavado es normal. Secar del revés. Nota: Producto lavable con agua.',
    pt: 'Nota: Lavar separadamente de outras roupas. Um leve desbotamento após a lavagem é normal. Secar do avesso. Nota: Produto lavável.', id_lang: 'Catatan: Cuci terpisah dari pakaian lain. Sedikit pudar setelah dicuci adalah hal normal. Jemur dengan bagian dalam di luar. Catatan: Produk dapat dicuci dengan air.', ru: 'Примечание: Стирать отдельно от другой одежды. Небольшое выцветание после стирки является нормальным. Сушить, вывернув наизнанку. Примечание: Изделие можно стирать.', fr: 'Remarque : Laver séparément des autres vêtements. Une légère décoloration après lavage est normale. Sécher à l’envers. Remarque : Produit lavable à l’eau.', ar: 'ملاحظة: يُغسل منفصلًا عن الملابس الأخرى. بهتان خفيف بعد الغسل أمر طبيعي. يُجفف مقلوبًا. ملاحظة: المنتج قابل للغسل بالماء.', ja: ''
  },
  '注：需将充气枕卸下后再洗涤护理。不可长时间浸泡，请与其它衣物分开洗涤。': {
    cn: '注：需将充气枕卸下后再洗涤护理。不可长时间浸泡，请与其它衣物分开洗涤。', en: 'Note: Remove the inflatable pillow before washing and care. Do not soak for a long time, and wash separately from other clothes.', th: 'หมายเหตุ: ต้องถอดหมอนลมออกก่อนทำการซักและดูแลรักษา ห้ามแช่น้ำเป็นเวลานาน และควรแยกซักต่างหากจากเสื้อผ้าชนิดอื่น', vn: 'Lưu ý: Cần tháo gối hơi ra trước khi giặt và bảo quản. Không ngâm trong thời gian dài, vui lòng giặt riêng với các loại quần áo khác.', es: 'Nota: La almohada inflable debe retirarse antes de lavar y cuidar. No la remoje durante mucho tiempo y lávela por separado de otras prendas.',
    pt: 'Nota: É necessário remover o travesseiro inflável antes de lavar e cuidar. Não deixe de molho por muito tempo e lave separadamente de outras roupas.', id_lang: 'Catatan: Bantal tiup harus dilepas sebelum dicuci dan dirawat. Jangan merendam terlalu lama, dan cuci terpisah dari pakaian lain.', ru: 'Примечание: перед стиркой и уходом необходимо снять надувную подушку. Не замачивайте надолго, стирайте отдельно от других вещей.', fr: 'Remarque : retirez le coussin gonflable avant le lavage et l\'entretien. Ne pas laisser tremper longtemps, laver séparément des autres vêtements.', ar: 'ملاحظة: يجب فك وسادة الهواء قبل الغسيل والعناية بها. لا تنقعها لفترة طويلة، واغسلها بشكل منفصل عن الملابس الأخرى.', ja: ''
  },
  '注：需将充气腰枕卸下后再洗涤护理。不可长时间浸泡，请与其它衣物分开洗涤。': {
    cn: '注：需将充气腰枕卸下后再洗涤护理。不可长时间浸泡，请与其它衣物分开洗涤。', en: 'Note: Remove the inflatable lumbar pillow before washing and care. Do not soak for extended periods. Wash separately from other garments.', th: 'หมายเหตุ: ต้องถอดหมอนรองเอวที่เติมลมออกก่อนทำการซักและดูแลรักษา ห้ามแช่น้ำเป็นเวลานาน และควรซักแยกจากเสื้อผ้าชนิดอื่น', vn: 'Lưu ý: Cần tháo gối hơi tựa lưng ra trước khi giặt và bảo quản. Không ngâm quá lâu, giặt riêng với các quần áo khác.', es: 'Nota: el cojín lumbar inflable debe retirarse antes del lavado. No remojar durante mucho tiempo y lavar por separado de otras prendas.',
    pt: 'Observação: o travesseiro lombar inflável deve ser removido antes da lavagem e cuidados. Não deixe de molho por muito tempo e lave separadamente de outras roupas.', id_lang: 'Catatan: Bantal pinggang tiup harus dilepas sebelum dicuci. Jangan direndam terlalu lama, cuci terpisah dari pakaian lain.', ru: 'Примечание: Перед стиркой и уходом необходимо снять надувную подушку для поясницы. Не замачивайте надолго, стирайте отдельно от другой одежды.', fr: 'Remarque : le coussin gonflable lombaire doit être retiré avant le lavage et l\'entretien. Ne pas faire tremper pendant une longue période, laver séparément des autres vêtements.', ar: 'ملاحظة: يجب فك وسادة الخصر القابلة للنفخ قبل الغسيل والعناية. لا تنقع لفترة طويلة، واغسلها بشكل منفصل عن الملابس الأخرى.', ja: ''
  },
  '泰国制造': {
    cn: '泰国制造', en: 'Made in Thailand', th: 'ผลิตในไทย', vn: 'Sản xuất tại Thái Lan', es: 'Hecho en Tailandia',
    pt: 'Fabricado na Tailândia', id_lang: 'Buatan Thailand', ru: 'Сделано в Таиланде', fr: 'Fabriqué en Thaïlande', ar: 'صنع في تايلاند', ja: ''
  },
  '洗后立即取出': {
    cn: '洗后立即取出', en: 'Remove promptly', th: 'เอาออกทันทีหลังซัก', vn: 'Lấy ra ngay sau khi giặt', es: 'Sacar de inmediato',
    pt: 'Retirar prontamente', id_lang: 'Segera angkat setelah dicuci', ru: 'Извлечь немедленно', fr: 'Retirer rapidement', ar: 'أخرجه فوراً', ja: ''
  },
  '洗涤说明': {
    cn: '洗涤说明', en: 'Care Instructions', th: 'คำแนะนำการดูแล', vn: 'Hướng dẫn giặt', es: 'Instrucciones de cuidado',
    pt: 'Instruções de cuidados', id_lang: 'Petunjuk perawatan', ru: 'Инструкции по уходу', fr: 'Instructions d\'entretien', ar: 'تعليمات العناية', ja: ''
  },
  '活性黑': {
    cn: '活性黑', en: 'Active Black', th: 'แอคทีฟแบล็ค', vn: 'Màu đen chủ động', es: 'Negro activo',
    pt: 'Preto ativo', id_lang: 'Hitam Aktif', ru: 'Активный черный', fr: 'Noir actif', ar: 'أسود نشط', ja: ''
  },
  '浅': {
    cn: '浅', en: 'shallow', th: 'ตื้น', vn: 'nông', es: 'poco profundo',
    pt: 'raso', id_lang: 'dangkal', ru: 'мелкий', fr: 'peu profond', ar: 'أجوف', ja: ''
  },
  '浅军绿': {
    cn: '浅军绿', en: 'Light military green', th: 'สีเขียวทหารอ่อน', vn: 'màu xanh quân đội nhạt', es: 'verde militar claro',
    pt: 'Verde militar claro', id_lang: 'Hijau militer muda', ru: 'Светло-зеленый цвет военного образца', fr: 'vert militaire clair', ar: 'أخضر عسكري فاتح', ja: ''
  },
  '浅卡其': {
    cn: '浅卡其', en: 'Light khaki', th: 'สีกากีอ่อน', vn: 'màu kaki nhạt', es: 'caqui claro',
    pt: 'cáqui claro', id_lang: 'khaki muda', ru: 'Светло-хаки', fr: 'kaki clair', ar: 'كاكي فاتح', ja: ''
  },
  '浅卡其花纹': {
    cn: '浅卡其花纹', en: 'Light khaki pattern', th: 'ลายสีกากีอ่อน', vn: 'Họa tiết kaki nhạt', es: 'Patrón caqui claro',
    pt: 'Padrão cáqui claro', id_lang: 'Pola khaki muda', ru: 'Светло-хаки узор', fr: 'Motif kaki clair', ar: 'بنقشة كاكي فاتحة', ja: ''
  },
  '浅咖': {
    cn: '浅咖', en: 'Light brown', th: 'สีน้ำตาลอ่อน', vn: 'Nâu nhạt', es: 'Marrón claro',
    pt: 'Castanho claro', id_lang: 'Cokelat muda', ru: 'Светло-коричневый', fr: 'brun clair', ar: 'بني فاتح', ja: ''
  },
  '浅咖条纹': {
    cn: '浅咖条纹', en: 'Light brown stripes', th: 'ลายทางสีน้ำตาลอ่อน', vn: 'Sọc màu nâu nhạt', es: 'rayas marrón claro',
    pt: 'Listras marrom-claras', id_lang: 'Garis-garis cokelat muda', ru: 'Светло-коричневые полосы', fr: 'rayures brun clair', ar: 'بني فاتح', ja: ''
  },
  '浅咖渐变': {
    cn: '浅咖渐变', en: 'Light brown gradient', th: 'ไล่ระดับสีน้ำตาลอ่อน', vn: 'Màu nâu nhạt chuyển sắc', es: 'Degradado marrón claro',
    pt: 'degradê marrom claro', id_lang: 'Gradien cokelat muda', ru: 'Светло-коричневый градиент', fr: 'Dégradé brun clair', ar: 'تدرج لوني بني فاتح', ja: ''
  },
  '浅咖花纹': {
    cn: '浅咖花纹', en: 'Light brown pattern', th: 'ลวดลายสีน้ำตาลอ่อน', vn: 'Họa tiết màu nâu nhạt', es: 'Patrón marrón claro',
    pt: 'Padrão marrom claro', id_lang: 'Pola cokelat muda', ru: 'Светло-коричневый узор', fr: 'Motif brun clair', ar: 'نقش بني فاتح', ja: ''
  },
  '浅咖镶拼': {
    cn: '浅咖镶拼', en: 'Light brown inlaid', th: 'ฝังลายสีน้ำตาลอ่อน', vn: 'Màu nâu nhạt khảm', es: 'Incrustaciones de color marrón claro',
    pt: 'marrom claro embutido', id_lang: 'Bertatahkan warna cokelat muda', ru: 'Светло-коричневая инкрустация', fr: 'incrustation brun clair', ar: 'بني فاتح مطعم', ja: ''
  },
  '浅杏色': {
    cn: '浅杏色', en: 'light apricot', th: 'แอปริคอทอ่อน', vn: 'mơ nhạt', es: 'albaricoque claro',
    pt: 'damasco claro', id_lang: 'aprikot muda', ru: 'светлый абрикосовый', fr: 'abricot clair', ar: 'مشمش فاتح', ja: ''
  },
  '浅桔色面料': {
    cn: '浅桔色面料', en: 'Light orange fabric', th: 'ผ้าสีส้มอ่อน', vn: 'Vải màu cam nhạt', es: 'Tela de color naranja claro',
    pt: 'Tecido laranja claro', id_lang: 'Kain berwarna oranye muda', ru: 'Светло-оранжевая ткань', fr: 'Tissu orange clair', ar: 'قماش برتقالي فاتح', ja: ''
  },
  '浅棕': {
    cn: '浅棕', en: 'Light brown', th: 'สีน้ำตาลอ่อน', vn: 'Nâu nhạt', es: 'Marrón claro',
    pt: 'Castanho claro', id_lang: 'Cokelat muda', ru: 'Светло-коричневый', fr: 'brun clair', ar: 'بني فاتح', ja: ''
  },
  '浅橙': {
    cn: '浅橙', en: 'Light orange', th: 'สีส้มอ่อน', vn: 'màu cam nhạt', es: 'Naranja claro',
    pt: 'Laranja claro', id_lang: 'Oranye muda', ru: 'Светло-оранжевый', fr: 'orange clair', ar: 'برتقالي فاتح', ja: ''
  },
  '浅橙格纹': {
    cn: '浅橙格纹', en: 'Light orange plaid', th: 'ลายตารางสีส้มอ่อน', vn: 'kẻ sọc màu cam nhạt', es: 'Cuadros de color naranja claro',
    pt: 'xadrez laranja claro', id_lang: 'Kotak-kotak oranye muda', ru: 'Светло-оранжевая клетка', fr: 'carreaux orange clair', ar: 'كاروهات برتقالية فاتحة', ja: ''
  },
  '浅橙花纹': {
    cn: '浅橙花纹', en: 'Light orange pattern', th: 'ลวดลายสีส้มอ่อน', vn: 'Họa tiết hoa màu cam nhạt', es: 'Patrón naranja claro',
    pt: 'Padrão laranja claro', id_lang: 'Pola bunga berwarna oranye muda', ru: 'Светло-оранжевый цветочный узор', fr: 'Motif orange clair', ar: 'نقش زهري برتقالي فاتح', ja: ''
  },
  '浅橙镶拼': {
    cn: '浅橙镶拼', en: 'Light orange patchwork', th: 'ผ้าปะติดปะต่อสีส้มอ่อน', vn: 'chắp vá màu cam nhạt', es: 'Mosaico de color naranja claro',
    pt: 'patchwork laranja claro', id_lang: 'bercorak oranye muda', ru: 'Светло-оранжевая лоскутная ткань', fr: 'patchwork orange clair', ar: 'قطع قماش برتقالية فاتحة', ja: ''
  },
  '浅水绿': {
    cn: '浅水绿', en: 'Shallow Water Green', th: 'น้ำตื้น สีเขียว', vn: 'Nước nông xanh', es: 'Verde de aguas poco profundas',
    pt: 'Água rasa verde', id_lang: 'Air Dangkal Hijau', ru: 'Мелководная зеленая вода', fr: 'Vert d&#39;eau peu profonde', ar: 'أخضر المياه الضحلة', ja: ''
  },
  '浅灰': {
    cn: '浅灰', en: 'Light gray', th: 'สีเทาอ่อน', vn: 'Màu xám nhạt', es: 'Gris claro',
    pt: 'Cinza claro', id_lang: 'Abu-abu muda', ru: 'Светло-серый', fr: 'Gris clair', ar: 'رمادي فاتح', ja: ''
  },
  '浅灰斜纹': {
    cn: '浅灰斜纹', en: 'Light gray twill', th: 'ผ้าทวิลสีเทาอ่อน', vn: 'Vải chéo màu xám nhạt', es: 'Sarga gris claro',
    pt: 'Sarja cinza claro', id_lang: 'Kain kepar abu-abu muda', ru: 'Светло-серый твил', fr: 'Sergé gris clair', ar: 'قماش قطني رمادي فاتح', ja: ''
  },
  '浅灰条纹': {
    cn: '浅灰条纹', en: 'Light gray stripes', th: 'ลายทางสีเทาอ่อน', vn: 'Sọc xám nhạt', es: 'rayas gris claro',
    pt: 'Listras cinza-claro', id_lang: 'Garis-garis abu-abu muda', ru: 'Светло-серые полосы', fr: 'rayures gris clair', ar: 'شريط رمادي فاتح', ja: ''
  },
  '浅灰格纹': {
    cn: '浅灰格纹', en: 'Light gray plaid', th: 'ลายตารางสีเทาอ่อน', vn: 'kẻ sọc xám nhạt', es: 'Cuadros gris claro',
    pt: 'xadrez cinza claro', id_lang: 'Kotak-kotak abu-abu muda', ru: 'Светло-серая клетка', fr: 'Carreaux gris clair', ar: 'كاروهات رمادي فاتح', ja: ''
  },
  '浅灰渐变': {
    cn: '浅灰渐变', en: 'Light gray gradient', th: 'ไล่ระดับสีเทาอ่อน', vn: 'chuyển sắc xám nhạt', es: 'Degradado gris claro',
    pt: 'gradiente cinza claro', id_lang: 'Gradien abu-abu muda', ru: 'Светло-серый градиент', fr: 'Dégradé gris clair', ar: 'تدرج اللون الرمادي الفاتح', ja: ''
  },
  '浅灰色': {
    cn: '浅灰色', en: 'Light gray', th: 'สีเทาอ่อน', vn: 'Màu xám nhạt', es: 'Gris claro',
    pt: 'Cinza claro', id_lang: 'Abu-abu muda', ru: 'Светло-серый', fr: 'Gris clair', ar: 'رمادي فاتح', ja: ''
  },
  '浅灰花纹': {
    cn: '浅灰花纹', en: 'Light gray pattern', th: 'ลวดลายสีเทาอ่อน', vn: 'Họa tiết màu xám nhạt', es: 'Patrón gris claro',
    pt: 'Padrão cinza claro', id_lang: 'Pola abu-abu muda', ru: 'Светло-серый узор', fr: 'Motif gris clair', ar: 'نمط رمادي فاتح', ja: ''
  },
  '浅灰花纹面料': {
    cn: '浅灰花纹面料', en: 'Light gray patterned fabric', th: 'ผ้าลายสีเทาอ่อน', vn: 'Vải màu xám nhạt có họa tiết', es: 'Tela estampada de color gris claro',
    pt: 'Tecido estampado cinza claro', id_lang: 'Kain bermotif abu-abu muda', ru: 'Светло-серая ткань с узором', fr: 'Tissu à motifs gris clair', ar: 'قماش منقوش رمادي فاتح', ja: ''
  },
  '浅灰镶拼': {
    cn: '浅灰镶拼', en: 'Light gray patchwork', th: 'ผ้าปะติดปะต่อสีเทาอ่อน', vn: 'chắp vá màu xám nhạt', es: 'Mosaico gris claro',
    pt: 'patchwork cinza claro', id_lang: 'Tambal sulam abu-abu muda', ru: 'Светло-серый лоскутный узор', fr: 'patchwork gris clair', ar: 'مرقعة رمادية فاتحة', ja: ''
  },
  '浅灰面料': {
    cn: '浅灰面料', en: 'Light gray fabric', th: 'ผ้าสีเทาอ่อน', vn: 'Vải màu xám nhạt', es: 'Tela gris claro',
    pt: 'Tecido cinza claro', id_lang: 'Kain abu-abu muda', ru: 'Светло-серая ткань', fr: 'Tissu gris clair', ar: 'قماش رمادي فاتح', ja: ''
  },
  '浅牛仔蓝': {
    cn: '浅牛仔蓝', en: 'Light denim blue', th: 'สีน้ำเงินเดนิมอ่อน', vn: 'màu xanh denim nhạt', es: 'azul vaquero claro',
    pt: 'azul denim claro', id_lang: 'Biru denim muda', ru: 'Светло-голубой джинсовый', fr: 'bleu denim clair', ar: 'أزرق جينز فاتح', ja: ''
  },
  '浅白杏': {
    cn: '浅白杏', en: 'Light white apricot', th: 'แอปริคอตสีขาวอ่อน', vn: 'quả mơ trắng nhạt', es: 'Albaricoque blanco claro',
    pt: 'damasco branco claro', id_lang: 'Aprikot putih muda', ru: 'Светло-белый абрикосовый', fr: 'abricot blanc clair', ar: 'مشمش أبيض فاتح', ja: ''
  },
  '浅米黄': {
    cn: '浅米黄', en: 'Light beige', th: 'สีเบจอ่อน', vn: 'Màu be nhạt', es: 'Beige claro',
    pt: 'Bege claro', id_lang: 'Krem muda', ru: 'Светло-бежевый', fr: 'beige clair', ar: 'بيج فاتح', ja: ''
  },
  '浅粉': {
    cn: '浅粉', en: 'light pink', th: 'สีชมพูอ่อน', vn: 'màu hồng nhạt', es: 'rosa claro',
    pt: 'rosa claro', id_lang: 'merah muda terang', ru: 'светло-розовый', fr: 'rose clair', ar: 'وردي فاتح', ja: ''
  },
  '浅粉条纹': {
    cn: '浅粉条纹', en: 'Light pink stripes', th: 'ลายทางสีชมพูอ่อน', vn: 'Sọc màu hồng nhạt', es: 'rayas rosa claro',
    pt: 'Listras rosa claro', id_lang: 'Garis-garis merah muda terang', ru: 'Светло-розовые полоски', fr: 'rayures rose clair', ar: 'نظارات وردية فاتحة', ja: ''
  },
  '浅粉花纹': {
    cn: '浅粉花纹', en: 'Light pink floral pattern', th: 'ลายดอกไม้สีชมพูอ่อน', vn: 'Họa tiết hoa màu hồng nhạt', es: 'Estampado floral rosa claro',
    pt: 'Estampa floral rosa claro', id_lang: 'Pola merah muda terang', ru: 'Светло-розовый цветочный узор', fr: 'Motif floral rose clair', ar: 'نقش زهري وردي فاتح', ja: ''
  },
  '浅粉镶拼': {
    cn: '浅粉镶拼', en: 'Light pink patchwork', th: 'ผ้าปะติดสีชมพูอ่อน', vn: 'chắp vá màu hồng nhạt', es: 'Mosaico rosa claro',
    pt: 'patchwork rosa claro', id_lang: 'Patchwork merah muda terang', ru: 'Светло-розовый лоскутный узор', fr: 'patchwork rose pâle', ar: 'رقعة وردية فاتحة', ja: ''
  },
  '浅紫': {
    cn: '浅紫', en: 'Light purple', th: 'สีม่วงอ่อน', vn: 'Màu tím nhạt', es: 'Morado claro',
    pt: 'lilás claro', id_lang: 'Ungu muda', ru: 'Светло-фиолетовый', fr: 'violet clair', ar: 'بنفسجي فاتح', ja: ''
  },
  '浅紫斜纹': {
    cn: '浅紫斜纹', en: 'Light purple twill', th: 'ผ้าทวิลสีม่วงอ่อน', vn: 'Vải chéo màu tím nhạt', es: 'Sarga de color lila claro',
    pt: 'Sarja lilás claro', id_lang: 'Kain kepar berwarna ungu muda', ru: 'Светло-фиолетовая саржа', fr: 'Sergé violet clair', ar: 'قماش قطني بلون بنفسجي فاتح', ja: ''
  },
  '浅紫条纹': {
    cn: '浅紫条纹', en: 'Light purple stripes', th: 'ลายทางสีม่วงอ่อน', vn: 'Sọc màu tím nhạt', es: 'rayas de color morado claro',
    pt: 'Listras lilás claro', id_lang: 'Garis-garis ungu muda', ru: 'Светло-фиолетовые полосы', fr: 'rayures violet clair', ar: 'مخطط أرجواني فاتح', ja: ''
  },
  '浅紫色': {
    cn: '浅紫色', en: 'Light purple', th: 'สีม่วงอ่อน', vn: 'Màu tím nhạt', es: 'Morado claro',
    pt: 'lilás claro', id_lang: 'Ungu muda', ru: 'Светло-фиолетовый', fr: 'violet clair', ar: 'بنفسجي فاتح', ja: ''
  },
  '浅紫花纹': {
    cn: '浅紫花纹', en: 'Light purple pattern', th: 'ลวดลายสีม่วงอ่อน', vn: 'Họa tiết màu tím nhạt', es: 'Patrón de color morado claro',
    pt: 'Padrão lilás claro', id_lang: 'Pola ungu muda', ru: 'Светло-фиолетовый узор', fr: 'Motif violet clair', ar: 'نقش بنفسجي فاتح', ja: ''
  },
  '浅紫镶拼': {
    cn: '浅紫镶拼', en: 'Light purple inlaid', th: 'ฝังลายสีม่วงอ่อน', vn: 'Màu tím nhạt khảm', es: 'Incrustaciones de color púrpura claro',
    pt: 'roxo claro incrustado', id_lang: 'Bertatahkan warna ungu muda', ru: 'Светло-фиолетовая инкрустация', fr: 'incrustation violet clair', ar: 'مرصع باللون الأرجواني الفاتح', ja: ''
  },
  '浅绿': {
    cn: '浅绿', en: 'Light green', th: 'สีเขียวอ่อน', vn: 'Xanh lá nhạt', es: 'verde claro',
    pt: 'Verde claro', id_lang: 'Hijau muda', ru: 'Светло-зелёный', fr: 'Vert clair', ar: 'أخضر فاتح', ja: ''
  },
  '浅绿条纹': {
    cn: '浅绿条纹', en: 'Light green stripes', th: 'ลายทางสีเขียวอ่อน', vn: 'Sọc màu xanh lá nhạt', es: 'rayas verde claro',
    pt: 'Listras verde-claras', id_lang: 'Garis-garis hijau muda', ru: 'Светло-зеленые полосы', fr: 'rayures vert clair', ar: 'خطوط خضراء فاتحة', ja: ''
  },
  '浅绿格纹': {
    cn: '浅绿格纹', en: 'Light green plaid', th: 'ลายสก็อตสีเขียวอ่อน', vn: 'kẻ sọc xanh nhạt', es: 'Cuadros verde claro',
    pt: 'xadrez verde claro', id_lang: 'Kotak-kotak hijau muda', ru: 'Светло-зеленая клетка', fr: 'carreaux vert clair', ar: 'كاروهات باللون الأخضر الفاتح', ja: ''
  },
  '浅绿渐变': {
    cn: '浅绿渐变', en: 'Light green gradient', th: 'ไล่ระดับสีเขียวอ่อน', vn: 'chuyển sắc màu xanh lá nhạt', es: 'Degradado verde claro',
    pt: 'gradiente verde claro', id_lang: 'Gradien hijau muda', ru: 'Светло-зеленый градиент', fr: 'Dégradé vert clair', ar: 'تدرج لوني أخضر فاتح', ja: ''
  },
  '浅绿色': {
    cn: '浅绿色', en: 'Light green', th: 'สีเขียวอ่อน', vn: 'Xanh lá nhạt', es: 'verde claro',
    pt: 'Verde claro', id_lang: 'Hijau muda', ru: 'Светло-зелёный', fr: 'Vert clair', ar: 'أخضر فاتح', ja: ''
  },
  '浅绿色股纱': {
    cn: '浅绿色股纱', en: 'Light green yarn', th: 'เส้นด้ายสีเขียวอ่อน', vn: 'sợi len màu xanh lá nhạt', es: 'Hilo verde claro',
    pt: 'Fio verde claro', id_lang: 'Benang hijau muda', ru: 'Светло-зеленая пряжа', fr: 'Fil vert clair', ar: 'خيوط خضراء فاتحة', ja: ''
  },
  '浅绿花纹': {
    cn: '浅绿花纹', en: 'Light green pattern', th: 'ลวดลายสีเขียวอ่อน', vn: 'Họa tiết màu xanh lá nhạt', es: 'Patrón verde claro',
    pt: 'Padrão verde claro', id_lang: 'Pola hijau muda', ru: 'Светло-зеленый узор', fr: 'Motif vert clair', ar: 'نمط أخضر فاتح', ja: ''
  },
  '浅绿镶拼': {
    cn: '浅绿镶拼', en: 'Light green patchwork', th: 'ลายปะติดปะต่อสีเขียวอ่อน', vn: 'chắp vá màu xanh nhạt', es: 'Mosaico verde claro',
    pt: 'patchwork verde claro', id_lang: 'bercorak hijau muda', ru: 'Светло-зеленый лоскутный узор', fr: 'patchwork vert clair', ar: 'مرقعة باللون الأخضر الفاتح', ja: ''
  },
  '浅色条纹面料': {
    cn: '浅色条纹面料', en: 'Light-colored striped fabric', th: 'ผ้าลายทางสีอ่อน', vn: 'Vải sọc màu sáng', es: 'Tela a rayas de color claro',
    pt: 'Tecido listrado de cor clara', id_lang: 'Kain bergaris warna terang', ru: 'Светлая полосатая ткань', fr: 'Tissu à rayures de couleur claire', ar: 'قماش مخطط فاتح اللون', ja: ''
  },
  '浅花灰': {
    cn: '浅花灰', en: 'Light gray', th: 'สีเทาอ่อน', vn: 'Màu xám nhạt', es: 'Gris claro',
    pt: 'Cinza claro', id_lang: 'Abu-abu muda', ru: 'Светло-серый', fr: 'Gris clair', ar: 'رمادي فاتح', ja: ''
  },
  '浅蓝': {
    cn: '浅蓝', en: 'Light blue', th: 'สีฟ้าอ่อน', vn: 'màu xanh nhạt', es: 'azul claro',
    pt: 'Azul claro', id_lang: 'Biru muda', ru: 'Светло-голубой', fr: 'bleu clair', ar: 'أزرق فاتح', ja: ''
  },
  '浅蓝斜纹': {
    cn: '浅蓝斜纹', en: 'Light blue twill', th: 'ผ้าทวิลสีฟ้าอ่อน', vn: 'Vải chéo màu xanh nhạt', es: 'Sarga azul claro',
    pt: 'Sarja azul claro', id_lang: 'Kain kepar biru muda', ru: 'Светло-голубая саржа', fr: 'Sergé bleu clair', ar: 'قماش قطني أزرق فاتح', ja: ''
  },
  '浅蓝条纹': {
    cn: '浅蓝条纹', en: 'Light blue stripes', th: 'ลายทางสีฟ้าอ่อน', vn: 'Sọc màu xanh nhạt', es: 'rayas azul claro',
    pt: 'Listras azul-claras', id_lang: 'Garis-garis biru muda', ru: 'Светло-голубые полосы', fr: 'rayures bleu clair', ar: 'سحالي زرقاء فاتحة', ja: ''
  },
  '浅蓝格纹': {
    cn: '浅蓝格纹', en: 'Light blue plaid', th: 'ลายตารางสีฟ้าอ่อน', vn: 'kẻ sọc xanh nhạt', es: 'Cuadros azul claro',
    pt: 'xadrez azul claro', id_lang: 'Kotak-kotak biru muda', ru: 'Светло-голубая клетка', fr: 'carreaux bleu clair', ar: 'كاروهات زرقاء فاتحة', ja: ''
  },
  '浅蓝渐变': {
    cn: '浅蓝渐变', en: 'Light blue gradient', th: 'ไล่ระดับสีฟ้าอ่อน', vn: 'chuyển sắc màu xanh nhạt', es: 'Degradado azul claro',
    pt: 'gradiente azul claro', id_lang: 'Gradien biru muda', ru: 'Светло-голубой градиент', fr: 'Dégradé bleu clair', ar: 'تدرج اللون الأزرق الفاتح', ja: ''
  },
  '浅蓝牛': {
    cn: '浅蓝牛', en: 'Light Blue Cow', th: 'วัวสีฟ้าอ่อน', vn: 'Bò màu xanh nhạt', es: 'Vaca azul claro',
    pt: 'Vaca azul clara', id_lang: 'Sapi Biru Muda', ru: 'Светло-голубая корова', fr: 'Vache bleu clair', ar: 'بقرة زرقاء فاتحة', ja: ''
  },
  '浅蓝色纱': {
    cn: '浅蓝色纱', en: 'Light blue gauze', th: 'ผ้าก๊อซสีฟ้าอ่อน', vn: 'Vải gạc màu xanh nhạt', es: 'Gasa azul claro',
    pt: 'gaze azul clara', id_lang: 'Kain kasa biru muda', ru: 'Светло-голубая марля', fr: 'gaze bleu clair', ar: 'شاش أزرق فاتح', ja: ''
  },
  '浅蓝色股纱': {
    cn: '浅蓝色股纱', en: 'Light blue yarn', th: 'เส้นด้ายสีฟ้าอ่อน', vn: 'Sợi len màu xanh nhạt', es: 'Hilo azul claro',
    pt: 'Fio azul claro', id_lang: 'Benang biru muda', ru: 'Светло-голубая пряжа', fr: 'Fil bleu clair', ar: 'خيوط زرقاء فاتحة', ja: ''
  },
  '浅蓝花纹': {
    cn: '浅蓝花纹', en: 'Light blue pattern', th: 'ลวดลายสีฟ้าอ่อน', vn: 'Họa tiết màu xanh nhạt', es: 'Patrón azul claro',
    pt: 'Padrão azul claro', id_lang: 'Pola biru muda', ru: 'Светло-голубой узор', fr: 'Motif bleu clair', ar: 'نمط أزرق فاتح', ja: ''
  },
  '浅蓝镶拼': {
    cn: '浅蓝镶拼', en: 'Light blue patchwork', th: 'ผ้าปะติดปะต่อสีฟ้าอ่อน', vn: 'chắp vá màu xanh nhạt', es: 'Mosaico azul claro',
    pt: 'patchwork azul claro', id_lang: 'tambal sulam biru muda', ru: 'Светло-голубая лоскутная ткань', fr: 'patchwork bleu clair', ar: 'رقعة زرقاء فاتحة', ja: ''
  },
  '浅豆绿': {
    cn: '浅豆绿', en: 'Light pea green', th: 'สีเขียวอ่อนคล้ายถั่วลันเตา', vn: 'màu xanh lá đậu nhạt', es: 'verde guisante claro',
    pt: 'Verde ervilha claro', id_lang: 'Hijau muda seperti kacang polong', ru: 'Светло-горохово-зеленый', fr: 'Vert pois clair', ar: 'أخضر فاتح', ja: ''
  },
  '浅黄': {
    cn: '浅黄', en: 'light yellow', th: 'สีเหลืองอ่อน', vn: 'vàng nhạt', es: 'amarillo claro',
    pt: 'amarelo claro', id_lang: 'kuning muda', ru: 'светло-жёлтый', fr: 'jaune clair', ar: 'أصفر فاتح', ja: ''
  },
  '浅黄格纹': {
    cn: '浅黄格纹', en: 'Light yellow plaid', th: 'ลายตารางสีเหลืองอ่อน', vn: 'kẻ sọc vàng nhạt', es: 'Cuadros amarillo claro',
    pt: 'xadrez amarelo claro', id_lang: 'Kotak-kotak kuning muda', ru: 'Светло-желтая клетка', fr: 'carreaux jaune clair', ar: 'كاروهات أصفر فاتح', ja: ''
  },
  '浅黄花纹': {
    cn: '浅黄花纹', en: 'Light yellow pattern', th: 'ลวดลายสีเหลืองอ่อน', vn: 'Họa tiết màu vàng nhạt', es: 'Patrón amarillo claro',
    pt: 'Padrão amarelo claro', id_lang: 'Pola kuning muda', ru: 'Светло-желтый узор', fr: 'Motif jaune clair', ar: 'نمط أصفر فاتح', ja: ''
  },
  '浅黄镶拼': {
    cn: '浅黄镶拼', en: 'Light yellow inlaid', th: 'ฝังลายสีเหลืองอ่อน', vn: 'Màu vàng nhạt khảm', es: 'Incrustaciones de color amarillo claro',
    pt: 'amarelo claro embutido', id_lang: 'Bertatahkan warna kuning muda', ru: 'Светло-желтая инкрустация', fr: 'incrustation jaune clair', ar: 'مطعم باللون الأصفر الفاتح', ja: ''
  },
  '海军蓝': {
    cn: '海军蓝', en: 'Navy Blue', th: 'สีน้ำเงินกรมท่า', vn: 'Xanh hải quân', es: 'Azul marino',
    pt: 'Azul-marinho', id_lang: 'Biru laut', ru: 'Темно-синий', fr: 'Bleu marine', ar: 'الأزرق الداكن', ja: ''
  },
  '海浪斜纹': {
    cn: '海浪斜纹', en: 'Wave pattern', th: 'รูปแบบคลื่น', vn: 'Mẫu sóng', es: 'Patrón de onda',
    pt: 'Padrão de onda', id_lang: 'Pola gelombang', ru: 'Волнообразный узор', fr: 'Motif ondulé', ar: 'نمط الموجة', ja: ''
  },
  '涂层': {
    cn: '涂层', en: 'coating', th: 'การเคลือบ', vn: 'lớp phủ', es: 'revestimiento',
    pt: 'revestimento', id_lang: 'lapisan', ru: 'покрытие', fr: 'revêtement', ar: 'طلاء', ja: ''
  },
  '涂层种类': {
    cn: '涂层种类', en: 'Coating types', th: 'ประเภทของสารเคลือบ', vn: 'Các loại lớp phủ', es: 'Tipos de recubrimiento',
    pt: 'Tipos de revestimento', id_lang: 'Jenis pelapis', ru: 'Типы покрытий', fr: 'Types de revêtement', ar: 'أنواع الطلاء', ja: ''
  },
  '涂层除外': {
    cn: '涂层除外', en: 'Except for coatings', th: 'ยกเว้นสารเคลือบ', vn: 'Ngoại trừ các lớp phủ', es: 'Excepto los recubrimientos',
    pt: 'Exceto para revestimentos', id_lang: 'Kecuali untuk lapisan', ru: 'За исключением покрытий', fr: 'À l&#39;exception des revêtements', ar: 'باستثناء الطلاءات', ja: ''
  },
  '涂覆层除外': {
    cn: '涂覆层除外', en: 'Except for coating', th: 'ยกเว้นการเคลือบ', vn: 'Ngoại trừ lớp phủ', es: 'Excepto por el recubrimiento',
    pt: 'Exceto para revestimento', id_lang: 'Kecuali untuk lapisan', ru: 'За исключением покрытия', fr: 'À l&#39;exception du revêtement', ar: 'باستثناء الطلاء', ja: ''
  },
  '消光破卡印花压绉': {
    cn: '消光破卡印花压绉', en: 'Matte distressed card print crepe', th: 'กระดาษเครปพิมพ์ลายแบบด้านและดูเก่า', vn: 'Giấy crepe in mờ, kiểu cũ.', es: 'Papel crepé con estampado mate envejecido',
    pt: 'crepe com estampa fosca e efeito desgastado', id_lang: 'Kertas krep dengan cetakan kartu matte bertekstur', ru: 'Матовый картон с эффектом потертости, креповая ткань', fr: 'crêpe imprimée sur carton mat vieilli', ar: 'كريب مطبوع عليه ورق مقوى غير لامع ذو مظهر عتيق', ja: ''
  },
  '涤仿棉': {
    cn: '涤仿棉', en: 'Polyester imitation cotton', th: 'โพลีเอสเตอร์เลียนแบบผ้าฝ้าย', vn: 'Vải giả cotton polyester', es: 'Poliéster imitación algodón',
    pt: 'Imitação de algodão de poliéster', id_lang: 'Katun imitasi poliester', ru: 'Имитация полиэстера и хлопка', fr: 'imitation coton en polyester', ar: 'بوليستر قطن صناعي', ja: ''
  },
  '涤氨': {
    cn: '涤氨', en: 'Polyester', th: 'โพลีเอสเตอร์', vn: 'Polyester', es: 'Poliéster',
    pt: 'Poliéster', id_lang: 'Poliester', ru: 'Полиэстер', fr: 'Polyester', ar: 'بوليستر', ja: ''
  },
  '涤氨消光布': {
    cn: '涤氨消光布', en: 'Polyester-spandex matte fabric', th: 'ผ้าโพลีเอสเตอร์ผสมสแปนเด็กซ์เนื้อด้าน', vn: 'Vải polyester-spandex mờ', es: 'Tejido mate de poliéster y elastano',
    pt: 'Tecido fosco de poliéster e elastano', id_lang: 'Kain matte poliester-spandex', ru: 'Матовая ткань из полиэстера и спандекса', fr: 'tissu mat en polyester-élasthanne', ar: 'قماش غير لامع من البوليستر والإيلاستين', ja: ''
  },
  '涤氨混纺': {
    cn: '涤氨混纺', en: 'Polyester-spandex blend', th: 'ส่วนผสมโพลีเอสเตอร์-สแปนเด็กซ์', vn: 'Hỗn hợp polyester-spandex', es: 'Mezcla de poliéster y elastano',
    pt: 'Mistura de poliéster e elastano', id_lang: 'Campuran poliester-spandex', ru: 'Смесь полиэстера и спандекса', fr: 'Mélange polyester-élasthanne', ar: 'مزيج من البوليستر والإيلاستين', ja: ''
  },
  '涤氨衬衫面料': {
    cn: '涤氨衬衫面料', en: 'Polyester-spandex shirt fabric', th: 'ผ้าสำหรับทำเสื้อเชิ้ต โพลีเอสเตอร์ผสมสแปนเด็กซ์', vn: 'Vải may áo sơ mi polyester-spandex', es: 'Tela de camisa de poliéster y elastano',
    pt: 'Tecido de camisa em poliéster e elastano', id_lang: 'Kain kemeja poliester-spandex', ru: 'Рубашечная ткань из полиэстера и спандекса', fr: 'Tissu pour chemise en polyester-élasthanne', ar: 'قماش قميص من البوليستر والإيلاستين', ja: ''
  },
  '涤混纺': {
    cn: '涤混纺', en: 'Polyester blend', th: 'โพลีเอสเตอร์ผสม', vn: 'Hỗn hợp polyester', es: 'Mezcla de poliéster',
    pt: 'Mistura de poliéster', id_lang: 'Campuran poliester', ru: 'Полиэстерная смесь', fr: 'Mélange de polyester', ar: 'مزيج البوليستر', ja: ''
  },
  '涤粘': {
    cn: '涤粘', en: 'Polyester', th: 'โพลีเอสเตอร์', vn: 'Polyester', es: 'Poliéster',
    pt: 'Poliéster', id_lang: 'Poliester', ru: 'Полиэстер', fr: 'Polyester', ar: 'بوليستر', ja: ''
  },
  '涤粘混纺': {
    cn: '涤粘混纺', en: 'Polyester-viscose blend', th: 'ส่วนผสมโพลีเอสเตอร์-วิสโคส', vn: 'Hỗn hợp polyester-viscose', es: 'Mezcla de poliéster y viscosa',
    pt: 'Mistura de poliéster e viscose', id_lang: 'Campuran poliester-viscose', ru: 'Смесь полиэстера и вискозы', fr: 'Mélange polyester-viscose', ar: 'مزيج البوليستر والفيسكوز', ja: ''
  },
  '涤纶': {
    cn: '涤纶', en: 'Polyester', th: 'โพลีเอสเตอร์', vn: 'Polyester', es: 'Poliéster',
    pt: 'Poliéster', id_lang: 'Poliester', ru: 'Полиэстер', fr: 'Polyester', ar: 'بوليستر', ja: ''
  },
  '液氨': {
    cn: '液氨', en: 'liquid ammonia', th: 'แอมโมเนียเหลว', vn: 'amoniac lỏng', es: 'amoníaco líquido',
    pt: 'amônia líquida', id_lang: 'amonia cair', ru: 'жидкий аммиак', fr: 'ammoniac liquide', ar: 'الأمونيا السائلة', ja: ''
  },
  '液氨面料': {
    cn: '液氨面料', en: 'Liquid ammonia fabric', th: 'ผ้าแอมโมเนียเหลว', vn: 'vải amoniac lỏng', es: 'Tejido con amoníaco líquido',
    pt: 'tecido de amônia líquida', id_lang: 'Kain amonia cair', ru: 'Жидкий аммиак, ткань', fr: 'tissu à l&#39;ammoniaque liquide', ar: 'قماش الأمونيا السائلة', ja: ''
  },
  '淞蓝': {
    cn: '淞蓝', en: 'Pine Blue', th: 'ไพน์บลู', vn: 'Xanh thông', es: 'Azul pino',
    pt: 'Azul Pinheiro', id_lang: 'Biru Pinus', ru: 'Сосновая голубая', fr: 'Bleu pin', ar: 'أزرق صنوبري', ja: ''
  },
  '淡米色': {
    cn: '淡米色', en: 'light beige', th: 'สีเบจอ่อน', vn: 'màu be nhạt', es: 'beige claro',
    pt: 'bege claro', id_lang: 'krem muda', ru: 'светло-бежевый', fr: 'beige clair', ar: 'بيج فاتح', ja: ''
  },
  '淡绿': {
    cn: '淡绿', en: 'pale green', th: 'สีเขียวอ่อน', vn: 'màu xanh nhạt', es: 'verde pálido',
    pt: 'verde claro', id_lang: 'hijau pucat', ru: 'бледно-зеленый', fr: 'vert pâle', ar: 'أخضر فاتح', ja: ''
  },
  '淡茶': {
    cn: '淡茶', en: 'light tea', th: 'ชาอ่อน', vn: 'trà nhẹ', es: 'té ligero',
    pt: 'chá leve', id_lang: 'teh ringan', ru: 'легкий чай', fr: 'thé léger', ar: 'شاي خفيف', ja: ''
  },
  '淡黄': {
    cn: '淡黄', en: 'pale yellow', th: 'สีเหลืองอ่อน', vn: 'màu vàng nhạt', es: 'amarillo pálido',
    pt: 'amarelo pálido', id_lang: 'kuning pucat', ru: 'бледно-желтый', fr: 'jaune pâle', ar: 'أصفر باهت', ja: ''
  },
  '深': {
    cn: '深', en: 'deep', th: 'ลึก', vn: 'sâu', es: 'profundo',
    pt: 'profundo', id_lang: 'dalam', ru: 'глубокий', fr: 'profond', ar: 'عميق', ja: ''
  },
  '深卡其': {
    cn: '深卡其', en: 'Dark khaki', th: 'สีกากีเข้ม', vn: 'màu kaki đậm', es: 'caqui oscuro',
    pt: 'cáqui escuro', id_lang: 'Khaki gelap', ru: 'Темно-хаки', fr: 'Kaki foncé', ar: 'كاكي داكن', ja: ''
  },
  '深咖': {
    cn: '深咖', en: 'Dark Coffee', th: 'กาแฟดำ', vn: 'Cà phê đen', es: 'Café oscuro',
    pt: 'Café escuro', id_lang: 'Kopi Hitam', ru: 'Темный кофе', fr: 'Café noir', ar: 'قهوة داكنة', ja: ''
  },
  '深咖条纹': {
    cn: '深咖条纹', en: 'Dark brown stripes', th: 'ลายทางสีน้ำตาลเข้ม', vn: 'Sọc nâu sẫm', es: 'rayas marrón oscuro',
    pt: 'Listras marrom-escuras', id_lang: 'Garis-garis cokelat gelap', ru: 'Темно-коричневые полосы', fr: 'rayures brun foncé', ar: 'خطوط بنية داكنة', ja: ''
  },
  '深咖格纹': {
    cn: '深咖格纹', en: 'Dark brown plaid', th: 'ลายตารางสีน้ำตาลเข้ม', vn: 'kẻ sọc nâu đậm', es: 'Cuadros de color marrón oscuro',
    pt: 'xadrez marrom escuro', id_lang: 'Kotak-kotak cokelat tua', ru: 'Темно-коричневая клетка', fr: 'Carreaux marron foncé', ar: 'كاروهات بني داكن', ja: ''
  },
  '深咖渐变': {
    cn: '深咖渐变', en: 'Dark brown gradient', th: 'ไล่ระดับสีน้ำตาลเข้ม', vn: 'Màu nâu sẫm chuyển sắc', es: 'Degradado marrón oscuro',
    pt: 'degradê marrom escuro', id_lang: 'Gradien cokelat gelap', ru: 'Темно-коричневый градиент', fr: 'Dégradé brun foncé', ar: 'تدرج اللون البني الداكن', ja: ''
  },
  '深咖花纹': {
    cn: '深咖花纹', en: 'Dark brown pattern', th: 'ลวดลายสีน้ำตาลเข้ม', vn: 'Họa tiết màu nâu sẫm', es: 'Patrón marrón oscuro',
    pt: 'Padrão marrom escuro', id_lang: 'Pola cokelat gelap', ru: 'Темно-коричневый узор', fr: 'Motif brun foncé', ar: 'نقش بني داكن', ja: ''
  },
  '深咖镶拼': {
    cn: '深咖镶拼', en: 'Dark brown inlaid', th: 'ฝังลายสีน้ำตาลเข้ม', vn: 'Màu nâu sẫm khảm', es: 'Incrustaciones de color marrón oscuro',
    pt: 'marrom escuro incrustado', id_lang: 'Cokelat tua bertatahkan', ru: 'Темно-коричневая инкрустация', fr: 'incrustation brun foncé', ar: 'بني داكن مطعم', ja: ''
  },
  '深栗': {
    cn: '深栗', en: 'Deep chestnut', th: 'สีน้ำตาลเข้ม', vn: 'màu hạt dẻ đậm', es: 'castaño oscuro',
    pt: 'Castanho escuro', id_lang: 'Cokelat tua', ru: 'Темно-каштановый', fr: 'Châtaigne foncé', ar: 'كستنائي داكن', ja: ''
  },
  '深棕': {
    cn: '深棕', en: 'Dark Brown', th: 'สีน้ำตาลเข้ม', vn: 'Nâu đậm', es: 'Marrón oscuro',
    pt: 'Castanho escuro', id_lang: 'Cokelat Tua', ru: 'Темно-коричневый', fr: 'Brun foncé', ar: 'بني داكن', ja: ''
  },
  '深棕净色': {
    cn: '深棕净色', en: 'Dark brown solid color', th: 'สีน้ำตาลเข้มล้วน', vn: 'Màu nâu đậm đồng nhất', es: 'Color marrón oscuro sólido',
    pt: 'Cor sólida marrom escuro', id_lang: 'Warna cokelat tua polos', ru: 'Темно-коричневый однотонный цвет', fr: 'couleur unie brun foncé', ar: 'لون بني داكن موحد', ja: ''
  },
  '深棕条纹': {
    cn: '深棕条纹', en: 'Dark brown stripes', th: 'ลายทางสีน้ำตาลเข้ม', vn: 'Sọc nâu đậm', es: 'rayas marrón oscuro',
    pt: 'Listras marrom-escuras', id_lang: 'Garis-garis cokelat gelap', ru: 'Темно-коричневые полосы', fr: 'rayures brun foncé', ar: 'خطوط بنية داكنة', ja: ''
  },
  '深棕格纹': {
    cn: '深棕格纹', en: 'Dark brown plaid', th: 'ลายตารางสีน้ำตาลเข้ม', vn: 'kẻ sọc nâu đậm', es: 'Cuadros de color marrón oscuro',
    pt: 'xadrez marrom escuro', id_lang: 'Kotak-kotak cokelat tua', ru: 'Темно-коричневая клетка', fr: 'Carreaux marron foncé', ar: 'كاروهات بني داكن', ja: ''
  },
  '深棕花纹': {
    cn: '深棕花纹', en: 'Dark brown pattern', th: 'ลวดลายสีน้ำตาลเข้ม', vn: 'Họa tiết màu nâu sẫm', es: 'Patrón marrón oscuro',
    pt: 'Padrão marrom escuro', id_lang: 'Pola cokelat gelap', ru: 'Темно-коричневый узор', fr: 'Motif brun foncé', ar: 'نقش بني داكن', ja: ''
  },
  '深棕镶拼': {
    cn: '深棕镶拼', en: 'Dark brown patchwork', th: 'ผ้าปะติดปะต่อสีน้ำตาลเข้ม', vn: 'chắp vá màu nâu sẫm', es: 'Mosaico marrón oscuro',
    pt: 'patchwork marrom escuro', id_lang: 'bercorak cokelat gelap', ru: 'Темно-коричневая лоскутная ткань', fr: 'patchwork brun foncé', ar: 'مرقعات بنية داكنة', ja: ''
  },
  '深棕面料': {
    cn: '深棕面料', en: 'Dark brown fabric', th: 'ผ้าสีน้ำตาลเข้ม', vn: 'Vải màu nâu đậm', es: 'Tela marrón oscuro',
    pt: 'Tecido marrom escuro', id_lang: 'Kain berwarna cokelat gelap', ru: 'Темно-коричневая ткань', fr: 'tissu marron foncé', ar: 'قماش بني داكن', ja: ''
  },
  '深橙': {
    cn: '深橙', en: 'Dark Orange', th: 'สีส้มเข้ม', vn: 'Màu cam đậm', es: 'Naranja oscuro',
    pt: 'Laranja escuro', id_lang: 'Oranye Tua', ru: 'Темно-оранжевый', fr: 'Orange foncé', ar: 'برتقالي داكن', ja: ''
  },
  '深橙条纹': {
    cn: '深橙条纹', en: 'Dark orange stripes', th: 'ลายทางสีส้มเข้ม', vn: 'Sọc màu cam đậm', es: 'rayas de color naranja oscuro',
    pt: 'Listras laranja-escuras', id_lang: 'Garis-garis oranye gelap', ru: 'Темно-оранжевые полосы', fr: 'rayures orange foncé', ar: 'خطوط برتقالية داكنة', ja: ''
  },
  '深橙格纹': {
    cn: '深橙格纹', en: 'Dark orange plaid', th: 'ลายตารางสีส้มเข้ม', vn: 'kẻ sọc màu cam đậm', es: 'Cuadros de color naranja oscuro',
    pt: 'xadrez laranja escuro', id_lang: 'Kotak-kotak oranye gelap', ru: 'Темно-оранжевая клетка', fr: 'Carreaux orange foncé', ar: 'كاروهات برتقالية داكنة', ja: ''
  },
  '深橙花纹': {
    cn: '深橙花纹', en: 'Dark orange pattern', th: 'ลวดลายสีส้มเข้ม', vn: 'Họa tiết màu cam đậm', es: 'Patrón de color naranja oscuro',
    pt: 'Padrão laranja escuro', id_lang: 'Pola oranye gelap', ru: 'Темно-оранжевый узор', fr: 'Motif orange foncé', ar: 'نمط برتقالي داكن', ja: ''
  },
  '深橙镶拼': {
    cn: '深橙镶拼', en: 'Dark orange inlay', th: 'ฝังสีส้มเข้ม', vn: 'Viền màu cam đậm', es: 'Incrustaciones de color naranja oscuro',
    pt: 'Inlay laranja escuro', id_lang: 'Inlay berwarna oranye gelap', ru: 'Темно-оранжевая инкрустация', fr: 'Incrustation orange foncé', ar: 'تطعيم برتقالي داكن', ja: ''
  },
  '深浅色分开洗': {
    cn: '深浅色分开洗', en: 'Wash Separately', th: 'ซักแยกสี', vn: 'Giặt riêng', es: 'Lavar colores claros y oscuros por separado',
    pt: 'Lavar cores claras e escuras separadamente', id_lang: 'Cuci warna terang dan gelap terpisah', ru: 'Стирать светлые и тёмные цвета отдельно', fr: 'Laver les couleurs claires et foncées séparément', ar: 'اغسل الألوان الفاتحة والداكنة بشكل منفصل', ja: ''
  },
  '深浅色分开洗涤': {
    cn: '深浅色分开洗涤', en: 'Wash dark and light colors separately', th: 'ซักสีเข้มและสีอ่อนแยกกัน', vn: 'Giặt riêng đồ màu tối và màu sáng', es: 'Lavar colores oscuros y claros por separado',
    pt: 'Lavar cores escuras e claras separadamente', id_lang: 'Cuci warna gelap dan terang secara terpisah', ru: 'Стирать темные и светлые вещи отдельно', fr: 'Laver les couleurs foncées et claires séparément', ar: 'اغسل الألوان الداكنة والفاتحة بشكل منفصل', ja: ''
  },
  '深浅色衣物请分开洗涤和浸泡': {
    cn: '深浅色衣物请分开洗涤和浸泡', en: 'Please wash and soak dark and light colored clothes separately.', th: 'กรุณาซักและแช่ผ้าสีเข้มและสีอ่อนแยกกัน', vn: 'Vui lòng giặt và ngâm riêng quần áo màu đậm và màu nhạt.', es: 'Lave y remoje por separado la ropa de colores claros y oscuros.',
    pt: 'Lave e deixe de molho separadamente roupas claras e escuras.', id_lang: 'Harap cuci dan rendam pakaian berwarna gelap dan terang secara terpisah.', ru: 'Пожалуйста, стирайте и замачивайте тёмные и светлые вещи отдельно.', fr: 'Veuillez laver et faire tremper séparément les vêtements foncés et clairs.', ar: 'يرجى غسل ونقع الملابس الداكنة والفاتحة بشكل منفصل.', ja: ''
  },
  '深浅衣物分开洗涤': {
    cn: '深浅衣物分开洗涤', en: 'Wash dark and light garments separately.', th: 'ซักผ้าสีเข้มและสีอ่อนแยกกัน', vn: 'Giặt riêng quần áo màu đậm và màu nhạt.', es: 'Lavar por separado las prendas oscuras y claras.',
    pt: 'Lavar separadamente roupas escuras e claras.', id_lang: 'Cuci pakaian berwarna gelap dan terang secara terpisah.', ru: 'Стирать тёмные и светлые вещи отдельно.', fr: 'Laver séparément les vêtements foncés et clairs.', ar: 'يُغسل الملابس الداكنة والفاتحة بشكل منفصل.', ja: ''
  },
  '深海迷踪': {
    cn: '深海迷踪', en: 'Deep Sea Mystery', th: 'ปริศนาใต้ทะเลลึก', vn: 'Bí ẩn đáy biển sâu', es: 'Misterio de las profundidades marinas',
    pt: 'Mistério das profundezas do mar', id_lang: 'Misteri Laut Dalam', ru: 'Тайна глубоководья', fr: 'Mystère des profondeurs marines', ar: 'لغز أعماق البحار', ja: ''
  },
  '深灰': {
    cn: '深灰', en: 'Dark gray', th: 'สีเทาเข้ม', vn: 'Xám đậm', es: 'Gris oscuro',
    pt: 'Cinza escuro', id_lang: 'Abu-abu gelap', ru: 'Темно-серый', fr: 'Gris foncé', ar: 'رمادي داكن', ja: ''
  },
  '深灰净色面料': {
    cn: '深灰净色面料', en: 'Dark gray solid color fabric', th: 'ผ้าสีเทาเข้มล้วน', vn: 'Vải màu xám đậm trơn', es: 'Tela de color gris oscuro liso',
    pt: 'Tecido de cor sólida cinza escuro', id_lang: 'Kain berwarna abu-abu gelap polos', ru: 'Ткань однотонного темно-серого цвета', fr: 'tissu uni gris foncé', ar: 'قماش بلون رمادي داكن سادة', ja: ''
  },
  '深灰条纹': {
    cn: '深灰条纹', en: 'Dark gray stripes', th: 'ลายทางสีเทาเข้ม', vn: 'Sọc xám đậm', es: 'rayas gris oscuro',
    pt: 'Listras cinza-escuras', id_lang: 'Garis-garis abu-abu gelap', ru: 'Темно-серые полосы', fr: 'rayures gris foncé', ar: 'خطوط رمادية داكنة', ja: ''
  },
  '深灰格纹': {
    cn: '深灰格纹', en: 'Dark gray plaid', th: 'ลายตารางสีเทาเข้ม', vn: 'kẻ sọc xám đậm', es: 'Cuadros gris oscuro',
    pt: 'xadrez cinza escuro', id_lang: 'Kotak-kotak abu-abu gelap', ru: 'Темно-серая клетка', fr: 'Carreaux gris foncé', ar: 'كاروهات رمادية داكنة', ja: ''
  },
  '深灰渐变': {
    cn: '深灰渐变', en: 'Dark gray gradient', th: 'ไล่ระดับสีเทาเข้ม', vn: 'chuyển sắc xám đậm', es: 'Degradado gris oscuro',
    pt: 'gradiente cinza escuro', id_lang: 'Gradien abu-abu gelap', ru: 'Темно-серый градиент', fr: 'Dégradé gris foncé', ar: 'تدرج رمادي داكن', ja: ''
  },
  '深灰色': {
    cn: '深灰色', en: 'Dark gray', th: 'สีเทาเข้ม', vn: 'Xám đậm', es: 'Gris oscuro',
    pt: 'Cinza escuro', id_lang: 'Abu-abu gelap', ru: 'Темно-серый', fr: 'Gris foncé', ar: 'رمادي داكن', ja: ''
  },
  '深灰色面料': {
    cn: '深灰色面料', en: 'Dark gray fabric', th: 'ผ้าสีเทาเข้ม', vn: 'Vải màu xám đậm', es: 'Tela gris oscuro',
    pt: 'Tecido cinza escuro', id_lang: 'Kain abu-abu gelap', ru: 'Темно-серая ткань', fr: 'tissu gris foncé', ar: 'قماش رمادي داكن', ja: ''
  },
  '深灰花纹': {
    cn: '深灰花纹', en: 'Dark gray pattern', th: 'ลวดลายสีเทาเข้ม', vn: 'Họa tiết màu xám đậm', es: 'Patrón gris oscuro',
    pt: 'Padrão cinza escuro', id_lang: 'Pola abu-abu gelap', ru: 'Темно-серый узор', fr: 'Motif gris foncé', ar: 'نمط رمادي داكن', ja: ''
  },
  '深灰镶拼': {
    cn: '深灰镶拼', en: 'Dark gray patchwork', th: 'ผ้าปะติดปะต่อสีเทาเข้ม', vn: 'chắp vá màu xám đậm', es: 'Mosaico gris oscuro',
    pt: 'patchwork cinza escuro', id_lang: 'Tambal sulam abu-abu gelap', ru: 'Темно-серый лоскутный узор', fr: 'patchwork gris foncé', ar: 'مرقعة رمادية داكنة', ja: ''
  },
  '深灰面料': {
    cn: '深灰面料', en: 'Dark gray fabric', th: 'ผ้าสีเทาเข้ม', vn: 'Vải màu xám đậm', es: 'Tela gris oscuro',
    pt: 'Tecido cinza escuro', id_lang: 'Kain abu-abu gelap', ru: 'Темно-серая ткань', fr: 'tissu gris foncé', ar: 'قماش رمادي داكن', ja: ''
  },
  '深牛仔蓝': {
    cn: '深牛仔蓝', en: 'Dark denim blue', th: 'สีน้ำเงินเดนิมเข้ม', vn: 'màu xanh denim đậm', es: 'azul vaquero oscuro',
    pt: 'azul jeans escuro', id_lang: 'Biru denim gelap', ru: 'Темно-синий джинсовый цвет', fr: 'bleu denim foncé', ar: 'أزرق داكن من الدنيم', ja: ''
  },
  '深紫': {
    cn: '深紫', en: 'Deep purple', th: 'สีม่วงเข้ม', vn: 'Màu tím đậm', es: 'Morado intenso',
    pt: 'Roxo escuro', id_lang: 'Ungu tua', ru: 'Насыщенный фиолетовый', fr: 'violet foncé', ar: 'بنفسجي داكن', ja: ''
  },
  '深紫渐变': {
    cn: '深紫渐变', en: 'Deep purple gradient', th: 'ไล่ระดับสีม่วงเข้ม', vn: 'sắc tím đậm chuyển sắc', es: 'Degradado de color púrpura intenso',
    pt: 'Gradiente roxo escuro', id_lang: 'Gradien ungu tua', ru: 'Насыщенный фиолетовый градиент', fr: 'Dégradé violet foncé', ar: 'تدرج لوني أرجواني داكن', ja: ''
  },
  '深紫花纹': {
    cn: '深紫花纹', en: 'Deep purple pattern', th: 'ลวดลายสีม่วงเข้ม', vn: 'Họa tiết màu tím đậm', es: 'Patrón de color púrpura intenso',
    pt: 'Padrão roxo escuro', id_lang: 'Pola ungu tua', ru: 'Темно-фиолетовый узор', fr: 'Motif violet foncé', ar: 'نقش أرجواني داكن', ja: ''
  },
  '深紫镶拼': {
    cn: '深紫镶拼', en: 'Deep purple inlaid', th: 'ฝังสีม่วงเข้ม', vn: 'Màu tím đậm khảm', es: 'Incrustaciones de color púrpura intenso',
    pt: 'roxo escuro incrustado', id_lang: 'Bertatahkan warna ungu tua', ru: 'Темно-фиолетовая инкрустация', fr: 'incrustation violet foncé', ar: 'مرصع باللون الأرجواني الداكن', ja: ''
  },
  '深红': {
    cn: '深红', en: 'Crimson', th: 'สีแดงเข้ม', vn: 'Đỏ thẫm', es: 'Carmesí',
    pt: 'Carmesim', id_lang: 'Merah tua', ru: 'Багровый', fr: 'Cramoisi', ar: 'قرمزي', ja: ''
  },
  '深红色股纱': {
    cn: '深红色股纱', en: 'Deep red yarn', th: 'เส้นด้ายสีแดงเข้ม', vn: 'Sợi len màu đỏ đậm', es: 'Hilo rojo intenso',
    pt: 'fio vermelho escuro', id_lang: 'Benang merah tua', ru: 'Темно-красная пряжа', fr: 'Fil rouge foncé', ar: 'خيوط حمراء داكنة', ja: ''
  },
  '深绿': {
    cn: '深绿', en: 'Dark green', th: 'สีเขียวเข้ม', vn: 'Xanh đậm', es: 'verde oscuro',
    pt: 'Verde escuro', id_lang: 'Hijau tua', ru: 'Темно-зеленый', fr: 'vert foncé', ar: 'أخضر داكن', ja: ''
  },
  '深绿条纹': {
    cn: '深绿条纹', en: 'Dark green stripes', th: 'ลายทางสีเขียวเข้ม', vn: 'Sọc màu xanh đậm', es: 'rayas verde oscuro',
    pt: 'Listras verde-escuras', id_lang: 'Garis-garis hijau gelap', ru: 'Темно-зеленые полосы', fr: 'rayures vert foncé', ar: 'خطوط خضراء داكنة', ja: ''
  },
  '深绿格纹': {
    cn: '深绿格纹', en: 'Dark green plaid', th: 'ลายตารางสีเขียวเข้ม', vn: 'kẻ sọc xanh đậm', es: 'Cuadros verde oscuro',
    pt: 'xadrez verde escuro', id_lang: 'Kotak-kotak hijau tua', ru: 'Темно-зеленая клетка', fr: 'Carreaux vert foncé', ar: 'كاروهات باللون الأخضر الداكن', ja: ''
  },
  '深绿渐变': {
    cn: '深绿渐变', en: 'Dark green gradient', th: 'ไล่ระดับสีเขียวเข้ม', vn: 'chuyển sắc màu xanh đậm', es: 'Degradado verde oscuro',
    pt: 'gradiente verde escuro', id_lang: 'Gradien hijau gelap', ru: 'Темно-зеленый градиент', fr: 'Dégradé vert foncé', ar: 'تدرج اللون الأخضر الداكن', ja: ''
  },
  '深绿色': {
    cn: '深绿色', en: 'Dark green', th: 'สีเขียวเข้ม', vn: 'Xanh đậm', es: 'verde oscuro',
    pt: 'Verde escuro', id_lang: 'Hijau tua', ru: 'Темно-зеленый', fr: 'vert foncé', ar: 'أخضر داكن', ja: ''
  },
  '深绿花纹': {
    cn: '深绿花纹', en: 'Dark green pattern', th: 'ลวดลายสีเขียวเข้ม', vn: 'Họa tiết màu xanh đậm', es: 'Patrón verde oscuro',
    pt: 'Padrão verde escuro', id_lang: 'Pola hijau gelap', ru: 'Темно-зеленый узор', fr: 'Motif vert foncé', ar: 'نمط أخضر داكن', ja: ''
  },
  '深绿镶拼': {
    cn: '深绿镶拼', en: 'Dark green patchwork', th: 'ผ้าปะติดปะต่อสีเขียวเข้ม', vn: 'chắp vá màu xanh đậm', es: 'Mosaico verde oscuro',
    pt: 'Retalhos verde-escuros', id_lang: 'bercorak hijau tua', ru: 'Темно-зеленый лоскутный узор', fr: 'patchwork vert foncé', ar: 'مرقعات خضراء داكنة', ja: ''
  },
  '深蓝': {
    cn: '深蓝', en: 'Deep Blue', th: 'สีน้ำเงินเข้ม', vn: 'Xanh đậm', es: 'Azul profundo',
    pt: 'Azul profundo', id_lang: 'Biru Tua', ru: 'Глубокий синий', fr: 'Bleu profond', ar: 'أزرق داكن', ja: ''
  },
  '深蓝条纹': {
    cn: '深蓝条纹', en: 'Dark blue stripes', th: 'ลายทางสีน้ำเงินเข้ม', vn: 'Sọc màu xanh đậm', es: 'rayas azul oscuro',
    pt: 'Listras azul-escuras', id_lang: 'Garis-garis biru tua', ru: 'Темно-синие полосы', fr: 'rayures bleu foncé', ar: 'خطوط زرقاء داكنة', ja: ''
  },
  '深蓝格纹': {
    cn: '深蓝格纹', en: 'Dark blue plaid', th: 'ลายตารางสีน้ำเงินเข้ม', vn: 'kẻ sọc xanh đậm', es: 'Cuadros azul oscuro',
    pt: 'xadrez azul escuro', id_lang: 'Kotak-kotak biru tua', ru: 'Темно-синяя клетка', fr: 'carreaux bleu foncé', ar: 'كاروهات زرقاء داكنة', ja: ''
  },
  '深蓝渐变': {
    cn: '深蓝渐变', en: 'Dark blue gradient', th: 'ไล่ระดับสีน้ำเงินเข้ม', vn: 'chuyển sắc màu xanh đậm', es: 'Degradado azul oscuro',
    pt: 'gradiente azul escuro', id_lang: 'Gradien biru tua', ru: 'Темно-синий градиент', fr: 'Dégradé bleu foncé', ar: 'تدرج اللون الأزرق الداكن', ja: ''
  },
  '深蓝绿': {
    cn: '深蓝绿', en: 'Dark blue-green', th: 'สีน้ำเงินเข้มอมเขียว', vn: 'Xanh lục đậm', es: 'azul verdoso oscuro',
    pt: 'Verde-azulado escuro', id_lang: 'Biru kehijauan gelap', ru: 'Темно-сине-зеленый', fr: 'Bleu-vert foncé', ar: 'أزرق مخضر داكن', ja: ''
  },
  '深蓝色': {
    cn: '深蓝色', en: 'Dark blue', th: 'สีน้ำเงินเข้ม', vn: 'Màu xanh đậm', es: 'Azul oscuro',
    pt: 'Azul escuro', id_lang: 'Biru tua', ru: 'Темно-синий', fr: 'bleu foncé', ar: 'أزرق داكن', ja: ''
  },
  '深蓝花纹': {
    cn: '深蓝花纹', en: 'Dark blue pattern', th: 'ลวดลายสีน้ำเงินเข้ม', vn: 'Họa tiết màu xanh đậm', es: 'Patrón azul oscuro',
    pt: 'Padrão azul escuro', id_lang: 'Pola biru tua', ru: 'Темно-синий узор', fr: 'motif bleu foncé', ar: 'نمط أزرق داكن', ja: ''
  },
  '深蓝镶拼': {
    cn: '深蓝镶拼', en: 'Dark blue inlay', th: 'ผ้าปะติดปะต่อสีน้ำเงินเข้ม', vn: 'chắp vá màu xanh đậm', es: 'Mosaico azul oscuro',
    pt: 'patchwork azul escuro', id_lang: 'tambal sulam biru tua', ru: 'Темно-синяя вставка', fr: 'patchwork bleu foncé', ar: 'تطعيم أزرق داكن', ja: ''
  },
  '深藏青': {
    cn: '深藏青', en: 'Dark Navy Blue', th: 'สีน้ำเงินเข้มพิเศษ', vn: 'Màu xanh hải quân đậm', es: 'Azul marino oscuro',
    pt: 'Azul-marinho escuro', id_lang: 'Biru tua pekat', ru: 'Темно-синий (темный)', fr: 'Bleu marine foncé', ar: 'أรُق داكن غامق', ja: 'ダークネイビー'
  },
  '深青色部分': {
    cn: '深青色部分', en: 'Dark blue part', th: 'ส่วนสีน้ำเงินเข้ม', vn: 'Phần màu xanh đậm', es: 'Parte azul oscuro',
    pt: 'Parte azul escura', id_lang: 'Bagian biru tua', ru: 'Темно-синяя часть', fr: 'partie bleu foncé', ar: 'جزء أزرق داكن', ja: ''
  },
  '混纺': {
    cn: '混纺', en: 'Blended', th: 'ผสมผสาน', vn: 'Pha trộn', es: 'Mezclado',
    pt: 'Misturado', id_lang: 'Campuran', ru: 'Смешанный', fr: 'Mélangé', ar: 'مزيج', ja: ''
  },
  '混纺面料': {
    cn: '混纺面料', en: 'Blended fabrics', th: 'ผ้าผสม', vn: 'Vải pha trộn', es: 'tejidos mixtos',
    pt: 'Tecidos mistos', id_lang: 'Kain campuran', ru: 'Смесовые ткани', fr: 'tissus mélangés', ar: 'أقمشة مخلوطة', ja: ''
  },
  '渐变面料': {
    cn: '渐变面料', en: 'Gradient fabric', th: 'ผ้าไล่ระดับสี', vn: 'Vải chuyển màu', es: 'Tejido degradado',
    pt: 'Tecido degradê', id_lang: 'Kain gradien', ru: 'Градиентная ткань', fr: 'Tissu dégradé', ar: 'قماش متدرج الألوان', ja: ''
  },
  '渐灰兰水银': {
    cn: '渐灰兰水银', en: 'Gradual gray-blue mercury', th: 'ปรอทสีเทาอมฟ้าค่อยๆ เปลี่ยนเป็นสีเทาอมฟ้า', vn: 'Thủy ngân màu xám xanh dần dần', es: 'Mercurio de color gris azulado gradual',
    pt: 'Mercúrio cinza-azulado gradual', id_lang: 'Merkuri abu-biru bertahap', ru: 'Постепенный серо-голубой ртутный поток', fr: 'mercure gris-bleu progressif', ar: 'زئبق رمادي مزرق تدريجي', ja: ''
  },
  '渐灰白水银': {
    cn: '渐灰白水银', en: 'Gradually grayish-white mercury', th: 'ปรอทค่อยๆ เปลี่ยนเป็นสีเทาขาว', vn: 'Thủy ngân chuyển dần sang màu trắng xám', es: 'Mercurio gradualmente de color blanco grisáceo',
    pt: 'Mercúrio gradualmente branco-acinzentado', id_lang: 'merkuri berwarna putih keabu-abuan secara bertahap', ru: 'Постепенно серовато-белая ртуть', fr: 'Mercure progressivement grisâtre-blanc', ar: 'يتحول الزئبق تدريجياً إلى اللون الرمادي المائل للبياض', ja: ''
  },
  '温感冰爽棉': {
    cn: '温感冰爽棉', en: 'Temperature-sensitive cooling cotton', th: 'ผ้าฝ้ายระบายความร้อนที่ไวต่ออุณหภูมิ', vn: 'bông làm mát nhạy cảm với nhiệt độ', es: 'Algodón refrigerante sensible a la temperatura',
    pt: 'algodão refrescante sensível à temperatura', id_lang: 'Kapas pendingin yang peka terhadap suhu', ru: 'Термочувствительная охлаждающая вата', fr: 'Coton rafraîchissant thermosensible', ar: 'قطن تبريد حساس للحرارة', ja: ''
  },
  '温感棉': {
    cn: '温感棉', en: 'Temperature-sensitive cotton', th: 'ฝ้ายที่ไวต่ออุณหภูมิ', vn: 'bông nhạy cảm với nhiệt độ', es: 'Algodón termosensible',
    pt: 'algodão sensível à temperatura', id_lang: 'Kapas yang sensitif terhadap suhu', ru: 'Термочувствительный хлопок', fr: 'Coton thermosensible', ar: 'قطن حساس للحرارة', ja: ''
  },
  '温感罗马布': {
    cn: '温感罗马布', en: 'Temperature-sensitive Roman cloth', th: 'ผ้าปูโต๊ะโรมันที่ไวต่ออุณหภูมิ', vn: 'Vải La Mã nhạy cảm với nhiệt độ', es: 'Tela romana termosensible',
    pt: 'Tecido romano sensível à temperatura', id_lang: 'Kain Romawi yang sensitif terhadap suhu', ru: 'Термочувствительная римская ткань', fr: 'Tissu romain thermosensible', ar: 'قماش روماني حساس للحرارة', ja: ''
  },
  '温控棉': {
    cn: '温控棉', en: 'Temperature-controlled cotton', th: 'ผ้าฝ้ายควบคุมอุณหภูมิ', vn: 'bông được kiểm soát nhiệt độ', es: 'Algodón con temperatura controlada',
    pt: 'Algodão com temperatura controlada', id_lang: 'Katun dengan suhu terkontrol', ru: 'Хлопок с терморегулируемым сопротивлением', fr: 'Coton à température contrôlée', ar: 'قطن يتم التحكم بدرجة حرارته', ja: ''
  },
  '温水机洗': {
    cn: '温水机洗', en: 'Machine wash warm', th: 'ซักเครื่องด้วยน้ำอุ่น', vn: 'Giặt máy nước ấm', es: 'Lavar a máquina con agua tibia',
    pt: 'Lavar à máquina em água morna', id_lang: 'Cuci mesin air hangat', ru: 'Машинная стирка в теплой воде', fr: 'Lavage machine à l\'eau tiède', ar: 'غسيل آلي بماء دافئ', ja: ''
  },
  '温水洗': {
    cn: '温水洗', en: 'Warm Wash', th: 'ซักน้ำอุ่น', vn: 'Giặt nước ấm', es: 'Lavar con agua tibia',
    pt: 'Lavar morno', id_lang: 'Cuci hangat', ru: 'Стирка в теплой воде', fr: 'Lavage tiède', ar: 'غسيل بماء دافئ', ja: ''
  },
  '湖水绿': {
    cn: '湖水绿', en: 'Lake water green', th: 'น้ำในทะเลสาบสีเขียว', vn: 'Nước hồ có màu xanh lục.', es: 'El agua del lago es verde.',
    pt: 'Água verde do lago', id_lang: 'Warna hijau air danau', ru: 'Зеленая вода озера', fr: 'eau du lac vert', ar: 'لون مياه البحيرة أخضر', ja: ''
  },
  '湖绿色': {
    cn: '湖绿色', en: 'lake green', th: 'ทะเลสาบสีเขียว', vn: 'hồ xanh', es: 'verde lago',
    pt: 'lago verde', id_lang: 'danau hijau', ru: 'озеро зеленый', fr: 'lac vert', ar: 'لون البحيرة الأخضر', ja: ''
  },
  '湖蓝': {
    cn: '湖蓝', en: 'Lake Blue', th: 'ทะเลสาบสีฟ้า', vn: 'Hồ Xanh', es: 'Azul del lago',
    pt: 'Lago Azul', id_lang: 'Biru Danau', ru: 'Озеро Блю', fr: 'Lac Bleu', ar: 'بحيرة زرقاء', ja: ''
  },
  '湖蓝条纹': {
    cn: '湖蓝条纹', en: 'Lake Blue Stripes', th: 'ลายทางสีฟ้าทะเลสาบ', vn: 'Sọc xanh hồ', es: 'Rayas azules del lago',
    pt: 'Listras azuis do lago', id_lang: 'Garis Biru Danau', ru: 'Голубые полосы озера', fr: 'Rayures bleu lac', ar: 'خطوط زرقاء بحيرية', ja: ''
  },
  '湖蓝花纹': {
    cn: '湖蓝花纹', en: 'Lake blue pattern', th: 'ลวดลายสีน้ำเงินทะเลสาบ', vn: 'Mẫu màu xanh hồ', es: 'Patrón azul lago',
    pt: 'Padrão azul lago', id_lang: 'Pola biru danau', ru: 'узор «озеро синий»', fr: 'Motif bleu lac', ar: 'نمط أزرق بحيري', ja: ''
  },
  '湖蓝镶拼': {
    cn: '湖蓝镶拼', en: 'Lake Blue Inlay', th: 'ฝังลายสีน้ำเงินทะเลสาบ', vn: 'Viền khảm màu xanh hồ', es: 'Incrustaciones de color azul lago',
    pt: 'Inlay Azul Lago', id_lang: 'Inlay Biru Danau', ru: 'Вставка цвета «Озерная синяя»', fr: 'Incrustation bleu lac', ar: 'تطعيم أزرق بحيري', ja: ''
  },
  '滚条': {
    cn: '滚条', en: 'Roller', th: 'ลูกกลิ้ง', vn: 'Con lăn', es: 'Rodillo',
    pt: 'Rolo', id_lang: 'Rol', ru: 'Ролик', fr: 'Rouleau', ar: 'أسطوانة', ja: ''
  },
  '漂白': {
    cn: '漂白', en: 'bleach', th: 'สารฟอกขาว', vn: 'thuốc tẩy', es: 'lejía',
    pt: 'água sanitária', id_lang: 'pemutih', ru: 'отбеливать', fr: 'eau de Javel', ar: 'مبيض', ja: ''
  },
  '漂白净色': {
    cn: '漂白净色', en: 'Bleaching and color removal', th: 'การฟอกสีและการกำจัดสี', vn: 'Tẩy trắng và loại bỏ màu', es: 'Decoloración y eliminación de color',
    pt: 'Descoloração e remoção de cor', id_lang: 'Pemutihan dan penghilangan warna', ru: 'Отбеливание и удаление цвета', fr: 'Blanchiment et décoloration', ar: 'تبييض البشرة وإزالة اللون', ja: ''
  },
  '漂白斜纹': {
    cn: '漂白斜纹', en: 'Bleached Twill', th: 'ผ้าทวิลล์ฟอกขาว', vn: 'Vải chéo tẩy trắng', es: 'Sarga blanqueada',
    pt: 'Sarja descolorida', id_lang: 'Kain kepar yang diputihkan', ru: 'Отбеленная саржа', fr: 'Sergé blanchi', ar: 'قماش قطني مبيض', ja: ''
  },
  '漂白条纹': {
    cn: '漂白条纹', en: 'Bleached stripes', th: 'ลายทางสีฟอกขาว', vn: 'Sọc tẩy trắng', es: 'rayas decoloradas',
    pt: 'Listras descoloridas', id_lang: 'Garis-garis yang diputihkan', ru: 'Выбеленные полосы', fr: 'Rayures décolorées', ar: 'خطوط مبيضة', ja: ''
  },
  '漂白格纹': {
    cn: '漂白格纹', en: 'bleached plaid', th: 'ลายสก็อตฟอกขาว', vn: 'kẻ sọc tẩy trắng', es: 'cuadros desteñidos',
    pt: 'xadrez desbotado', id_lang: 'kotak-kotak yang diputihkan', ru: 'отбеленная клетка', fr: 'carreaux délavés', ar: 'كاروهات مبيضة', ja: ''
  },
  '漂白渐变': {
    cn: '漂白渐变', en: 'bleaching gradient', th: 'การไล่ระดับสีฟอกขาว', vn: 'độ dốc tẩy trắng', es: 'gradiente de decoloración',
    pt: 'gradiente de clareamento', id_lang: 'gradien pemutihan', ru: 'градиент отбеливания', fr: 'gradient de blanchiment', ar: 'تدرج التبييض', ja: ''
  },
  '漂白花纹': {
    cn: '漂白花纹', en: 'Bleached Pattern', th: 'ลวดลายฟอกขาว', vn: 'Họa tiết tẩy trắng', es: 'Patrón desteñido',
    pt: 'Padrão Descolorido', id_lang: 'Pola yang Diputihkan', ru: 'Отбеленный узор', fr: 'Motif blanchi', ar: 'نمط مبيض', ja: ''
  },
  '漂白镶拼': {
    cn: '漂白镶拼', en: 'Bleached inlay', th: 'ฝังลายฟอกขาว', vn: 'Khảm tẩy trắng', es: 'Incrustaciones blanqueadas',
    pt: 'Incrustação branqueada', id_lang: 'Inlay yang diputihkan', ru: 'Отбеленная вставка', fr: 'Incrustation blanchie', ar: 'تطعيم مبيض', ja: ''
  },
  '潮棉': {
    cn: '潮棉', en: 'Damp cotton', th: 'ผ้าฝ้ายชื้น', vn: 'Bông ẩm', es: 'Algodón húmedo',
    pt: 'algodão úmido', id_lang: 'Kapas lembap', ru: 'Влажный хлопок', fr: 'Coton humide', ar: 'قطن رطب', ja: ''
  },
  '潮棉平纹': {
    cn: '潮棉平纹', en: 'Plain cotton weave', th: 'ผ้าฝ้ายทอธรรมดา', vn: 'Vải cotton dệt trơn', es: 'Tejido de algodón liso',
    pt: 'Tecido de algodão liso', id_lang: 'Tenunan katun polos', ru: 'Простое хлопчатобумажное полотно', fr: 'Tissage de coton uni', ar: 'نسيج قطني سادة', ja: ''
  },
  '潮湿时平摊定型': {
    cn: '潮湿时平摊定型', en: 'Reshape while damp', th: 'จัดทรงขณะผ้าหมาด', vn: 'Kéo phẳng khi còn ẩm', es: 'Dar forma mientras está húmedo',
    pt: 'Remodelar enquanto úmido', id_lang: 'Bentuk kembali saat lembab', ru: 'Придать форму во влажном состоянии', fr: 'Remettre en forme quand humide', ar: 'أعد التشكيل وهو رطب', ja: ''
  },
  '灯芯绒': {
    cn: '灯芯绒', en: 'Corduroy', th: 'ผ้าลูกฟูก', vn: 'vải nhung kẻ', es: 'Pana',
    pt: 'Veludo cotelê', id_lang: 'Korduroi', ru: 'Вельвет', fr: 'Velours côtelé', ar: 'سروال قصير', ja: ''
  },
  '灯芯绒面料': {
    cn: '灯芯绒面料', en: 'Corduroy fabric', th: 'ผ้าลูกฟูก', vn: 'Vải nhung kẻ', es: 'Tela de pana',
    pt: 'Tecido de veludo cotelê', id_lang: 'Kain korduroi', ru: 'Вельветовая ткань', fr: 'Tissu en velours côtelé', ar: 'قماش الكوردروي', ja: ''
  },
  '灰兰': {
    cn: '灰兰', en: 'Grey Orchid', th: 'กล้วยไม้สีเทา', vn: 'Lan xám', es: 'Orquídea gris',
    pt: 'Orquídea Cinza', id_lang: 'Anggrek Abu-abu', ru: 'Серая Орхидея', fr: 'Orchidée grise', ar: 'زهرة الأوركيد الرمادية', ja: ''
  },
  '灰卡其': {
    cn: '灰卡其', en: 'Grey Khaki', th: 'สีเทากากี', vn: 'Màu kaki xám', es: 'Caqui gris',
    pt: 'Cáqui cinza', id_lang: 'Abu-abu Khaki', ru: 'Серый хаки', fr: 'Gris kaki', ar: 'رمادي كاكي', ja: ''
  },
  '灰杏': {
    cn: '灰杏', en: 'Grey apricot', th: 'แอปริคอตสีเทา', vn: 'Quả mơ xám', es: 'albaricoque gris',
    pt: 'damasco cinza', id_lang: 'Aprikot abu-abu', ru: 'Серый абрикос', fr: 'Abricot gris', ar: 'المشمش الرمادي', ja: ''
  },
  '灰牛仔': {
    cn: '灰牛仔', en: 'Grey Denim', th: 'กางเกงยีนส์สีเทา', vn: 'Quần jean xám', es: 'Denim gris',
    pt: 'jeans cinza', id_lang: 'Denim Abu-abu', ru: 'Серый деним', fr: 'Denim gris', ar: 'جينز رمادي', ja: ''
  },
  '灰白': {
    cn: '灰白', en: 'gray', th: 'สีเทา', vn: 'xám', es: 'gris',
    pt: 'cinza', id_lang: 'abu-abu', ru: 'серый', fr: 'gris', ar: 'رمادي', ja: ''
  },
  '灰粉': {
    cn: '灰粉', en: 'Ash', th: 'เถ้า', vn: 'Tro', es: 'Ceniza',
    pt: 'Cinzas', id_lang: 'Abu', ru: 'Пепел', fr: 'Cendre', ar: 'رماد', ja: ''
  },
  '灰紫': {
    cn: '灰紫', en: 'grayish purple', th: 'สีม่วงอมเทา', vn: 'màu tím xám', es: 'púrpura grisáceo',
    pt: 'roxo acinzentado', id_lang: 'ungu keabu-abuan', ru: 'серовато-фиолетовый', fr: 'violet grisâtre', ar: 'رمادي بنفسجي', ja: ''
  },
  '灰紫条纹': {
    cn: '灰紫条纹', en: 'Gray-purple stripes', th: 'ลายทางสีเทาม่วง', vn: 'Sọc xám tím', es: 'rayas gris-moradas',
    pt: 'Listras cinza-púrpura', id_lang: 'Garis-garis abu-ungu', ru: 'Серо-фиолетовые полосы', fr: 'rayures gris-violettes', ar: 'خطوط رمادية بنفسجية', ja: ''
  },
  '灰紫花纹': {
    cn: '灰紫花纹', en: 'Grayish-purple pattern', th: 'ลวดลายสีม่วงอมเทา', vn: 'Họa tiết màu xám tím', es: 'Patrón de color púrpura grisáceo',
    pt: 'Padrão cinza-arroxeado', id_lang: 'Pola berwarna ungu keabu-abuan', ru: 'Серовато-фиолетовый узор', fr: 'Motif gris-violet', ar: 'نمط رمادي بنفسجي', ja: ''
  },
  '灰绿': {
    cn: '灰绿', en: 'gray-green', th: 'สีเทาอมเขียว', vn: 'xám xanh', es: 'verde grisáceo',
    pt: 'cinza-esverdeado', id_lang: 'hijau keabu-abuan', ru: 'серо-зеленый', fr: 'gris-vert', ar: 'رمادي مخضر', ja: ''
  },
  '灰绿花纹': {
    cn: '灰绿花纹', en: 'Gray-green pattern', th: 'ลวดลายสีเทาเขียว', vn: 'Họa tiết xám xanh', es: 'Patrón gris verdoso',
    pt: 'Padrão cinza-esverdeado', id_lang: 'Pola abu-abu kehijauan', ru: 'Серо-зеленый узор', fr: 'Motif gris-vert', ar: 'نمط رمادي مخضر', ja: ''
  },
  '灰绿镶拼': {
    cn: '灰绿镶拼', en: 'Gray and green patchwork', th: 'ลายปะติดปะต่อสีเทาและสีเขียว', vn: 'Mảnh ghép màu xám và xanh lá cây', es: 'Mosaico gris y verde',
    pt: 'Retalhos cinza e verde', id_lang: 'bercorak abu-abu dan hijau', ru: 'Серо-зеленая лоскутная ткань', fr: 'Patchwork gris et vert', ar: 'قطع قماش رمادية وخضراء', ja: ''
  },
  '灰绿面料': {
    cn: '灰绿面料', en: 'gray-green fabric', th: 'ผ้าสีเทาอมเขียว', vn: 'vải màu xám xanh', es: 'tela gris verdosa',
    pt: 'tecido cinza-esverdeado', id_lang: 'kain abu-abu kehijauan', ru: 'серо-зеленая ткань', fr: 'tissu gris-vert', ar: 'قماش رمادي مخضر', ja: ''
  },
  '灰色': {
    cn: '灰色', en: 'grey', th: 'สีเทา', vn: 'xám', es: 'gris',
    pt: 'cinza', id_lang: 'abu-abu', ru: 'серый', fr: 'gris', ar: 'رمادي', ja: ''
  },
  '灰色条纹': {
    cn: '灰色条纹', en: 'Grey stripes', th: 'ลายทางสีเทา', vn: 'Sọc xám', es: 'rayas grises',
    pt: 'Listras cinzentas', id_lang: 'Garis-garis abu-abu', ru: 'Серые полосы', fr: 'rayures grises', ar: 'غريسكي', ja: ''
  },
  '灰色系': {
    cn: '灰色系', en: 'gray tones', th: 'โทนสีเทา', vn: 'tông màu xám', es: 'tonos grises',
    pt: 'tons de cinza', id_lang: 'warna abu-abu', ru: 'серые тона', fr: 'tons gris', ar: 'درجات اللون الرمادي', ja: ''
  },
  '灰色针织面料': {
    cn: '灰色针织面料', en: 'Gray Knitted Fabric', th: 'ผ้าถักสีเทา', vn: 'Vải Dệt Kim Màu Xám', es: 'Tejido De Punto Gris',
    pt: 'Tecido De Malha Cinzento', id_lang: 'Kain Rajut Abu-Abu', ru: 'Серая Трикотажная Ткань', fr: 'Tissu Tricoté Gris', ar: 'قماش محبوك رمادي', ja: 'グレーのニット地'
  },
  '灰色面料': {
    cn: '灰色面料', en: 'gray fabric', th: 'ผ้าสีเทา', vn: 'vải màu xám', es: 'tela gris',
    pt: 'tecido cinza', id_lang: 'kain abu-abu', ru: 'серая ткань', fr: 'tissu gris', ar: 'قماش رمادي', ja: ''
  },
  '灰蓝': {
    cn: '灰蓝', en: 'gray-blue', th: 'สีเทาอมน้ำเงิน', vn: 'màu xám xanh', es: 'azul grisáceo',
    pt: 'cinza-azulado', id_lang: 'abu-biru', ru: 'серо-голубой', fr: 'gris-bleu', ar: 'رمادي-أزرق', ja: ''
  },
  '灰蓝条纹': {
    cn: '灰蓝条纹', en: 'Gray-blue stripes', th: 'ลายทางสีเทาอมฟ้า', vn: 'Sọc xám xanh', es: 'Rayas gris azuladas',
    pt: 'Listras cinza-azuladas', id_lang: 'Garis-garis abu-biru', ru: 'Серо-голубые полосы', fr: 'Rayures gris-bleu', ar: 'خطوط رمادية زرقاء', ja: ''
  },
  '灰蓝渐变': {
    cn: '灰蓝渐变', en: 'gray-blue gradient', th: 'ไล่ระดับสีเทา-น้ำเงิน', vn: 'gradient xám xanh', es: 'degradado gris azulado',
    pt: 'gradiente cinza-azulado', id_lang: 'gradien abu-biru', ru: 'серо-голубой градиент', fr: 'dégradé gris-bleu', ar: 'تدرج رمادي-أزرق', ja: ''
  },
  '灰蓝花纹': {
    cn: '灰蓝花纹', en: 'Gray-blue pattern', th: 'ลวดลายสีเทาอมฟ้า', vn: 'Họa tiết xám xanh', es: 'Patrón gris azulado',
    pt: 'Padrão cinza-azulado', id_lang: 'Pola abu-biru', ru: 'Серо-голубой узор', fr: 'Motif gris-bleu', ar: 'نمط رمادي-أزرق', ja: ''
  },
  '烂花': {
    cn: '烂花', en: 'Rotten flowers', th: 'ดอกไม้เน่า', vn: 'Hoa thối rữa', es: 'Flores podridas',
    pt: 'Flores podres', id_lang: 'Bunga busuk', ru: 'Гнилые цветы', fr: 'Fleurs pourries', ar: 'الزهور المتعفنة', ja: ''
  },
  '烟墨': {
    cn: '烟墨', en: 'Ink', th: 'หมึก', vn: 'Mực', es: 'Tinta',
    pt: 'Tinta', id_lang: 'Tinta', ru: 'Чернила', fr: 'Encre', ar: 'حبر', ja: ''
  },
  '烟灰色': {
    cn: '烟灰色', en: 'Smoky Gray', th: 'สีเทาควัน', vn: 'Xám khói', es: 'Gris ahumado',
    pt: 'Cinza esfumaçado', id_lang: 'Abu-abu Keabu-abuan', ru: 'Дымчато-серый', fr: 'Gris fumé', ar: 'رمادي دخاني', ja: ''
  },
  '烟绿': {
    cn: '烟绿', en: 'Smoky Green', th: 'สีเขียวควัน', vn: 'Xanh khói', es: 'Verde ahumado',
    pt: 'Verde Fumê', id_lang: 'Hijau Berasap', ru: 'Дымчато-зеленый', fr: 'Vert fumé', ar: 'أخضر دخاني', ja: ''
  },
  '烧花面料': {
    cn: '烧花面料', en: 'Burnished fabric', th: 'ผ้าขัดเงา', vn: 'Vải đánh bóng', es: 'Tela bruñida',
    pt: 'Tecido polido', id_lang: 'Kain yang dipoles', ru: 'Полированная ткань', fr: 'Tissu bruni', ar: 'قماش مصقول', ja: ''
  },
  '热氧空气层': {
    cn: '热氧空气层', en: 'thermo-oxygen air layer', th: 'ชั้นอากาศเทอร์โมออกซิเจน', vn: 'lớp không khí nhiệt-oxy', es: 'capa de aire termooxígeno',
    pt: 'camada de ar termo-oxigenada', id_lang: 'lapisan udara termo-oksigen', ru: 'термокислородный воздушный слой', fr: 'couche d&#39;air thermo-oxygénée', ar: 'طبقة الهواء الحراري الأكسجيني', ja: ''
  },
  '热水机洗': {
    cn: '热水机洗', en: 'Machine wash hot', th: 'ซักเครื่องด้วยน้ำร้อน', vn: 'Giặt máy nước nóng', es: 'Lavar a máquina con agua caliente',
    pt: 'Lavar à máquina em água quente', id_lang: 'Cuci mesin air panas', ru: 'Машинная стирка в горячей воде', fr: 'Lavage machine à l\'eau chaude', ar: 'غسيل آلي بماء ساخن', ja: ''
  },
  '焦糖': {
    cn: '焦糖', en: 'caramel', th: 'คาราเมล', vn: 'caramel', es: 'caramelo',
    pt: 'caramelo', id_lang: 'karamel', ru: 'карамель', fr: 'caramel', ar: 'الكراميل', ja: ''
  },
  '焦糖格纹': {
    cn: '焦糖格纹', en: 'Caramel plaid', th: 'ลายสก็อตสีคาราเมล', vn: 'Caramel kẻ sọc', es: 'Cuadros color caramelo',
    pt: 'Xadrez caramelo', id_lang: 'Kotak-kotak karamel', ru: 'Карамельная клетка', fr: 'Carreaux caramel', ar: 'كاروهات الكراميل', ja: ''
  },
  '焦糖色': {
    cn: '焦糖色', en: 'Caramel color', th: 'สีคาราเมล', vn: 'Màu caramel', es: 'color caramelo',
    pt: 'Cor caramelo', id_lang: 'Warna karamel', ru: 'Карамельный цвет', fr: 'couleur caramel', ar: 'لون الكراميل', ja: ''
  },
  '焦糖花纹': {
    cn: '焦糖花纹', en: 'Caramel pattern', th: 'ลวดลายคาราเมล', vn: 'Họa tiết caramel', es: 'Patrón de caramelo',
    pt: 'Padrão caramelo', id_lang: 'Pola karamel', ru: 'Карамельный узор', fr: 'Motif caramel', ar: 'نقش الكراميل', ja: ''
  },
  '焦糖镶拼': {
    cn: '焦糖镶拼', en: 'Caramel Inlay', th: 'คาราเมลฝัง', vn: 'Lớp phủ caramel', es: 'Incrustaciones de caramelo',
    pt: 'Inlay de caramelo', id_lang: 'Lapisan Karamel', ru: 'Карамельная вставка', fr: 'Incrustations au caramel', ar: 'حشوة الكراميل', ja: ''
  },
  '熨斗底板最高温度110℃，蒸汽熨烫可能造成不可回复的损伤': {
    cn: '熨斗底板最高温度110℃，蒸汽熨烫可能造成不可回复的损伤', en: 'Maximum iron sole plate temperature 110°C, steam ironing may cause irreversible damage', th: 'อุณหภูมิแผ่นเตารีดสูงสุด 110°C การรีดด้วยไอน้ำอาจทำให้เกิดความเสียหายที่ไม่สามารถกลับคืนได้', vn: 'Nhiệt độ đế bàn ủi tối đa 110°C, ủi hơi nước có thể gây hư hại không thể phục hồi', es: 'Temperatura máxima de la suela de la plancha 110°C, el planchado con vapor puede causar daños irreversibles',
    pt: 'Temperatura máxima da base do ferro 110°C, passar a vapor pode causar danos irreversíveis', id_lang: 'Suhu maksimum alas setrika 110°C, setrika uap dapat menyebabkan kerusakan permanen', ru: 'Температура подошвы утюга не выше 110°C. Отпаривание может вызвать необратимые повреждения.', fr: 'Température maximale de la semelle du fer 110°C, le repassage à la vapeur peut causer des dommages irréversibles', ar: 'أقصى درجة حرارة لقاعدة المكواة 110 درجة مئوية، الكي بالبخار قد يسبب ضرراً لا يمكن إصلاحه', ja: ''
  },
  '熨斗底板最高温度150℃': {
    cn: '熨斗底板最高温度150℃', en: 'The maximum temperature of the ironing board soleplate is 150 °C', th: 'อุณหภูมิสูงสุดของแผ่นความร้อนที่รองรีดคือ 150 °C', vn: 'Nhiệt độ tối đa của mặt đế bàn ủi là 150°C', es: 'La temperatura máxima de la base de la plancha es de 150 °C',
    pt: 'A temperatura máxima do ferro de engomar é de 150 °C', id_lang: 'Suhu maksimum tapak setrika adalah 150 °C', ru: 'Максимальная температура пластины утюга составляет 150 °C', fr: 'La température maximale de la semelle de la planche à repasser est de 150 °C', ar: 'أقصى درجة حرارة لصفيحة النعل الحديدية هي 150 درجة مئوية', ja: 'アイロン底面温度150℃を限度とし、アイロン仕上げができる'
  },
  '燕麦': {
    cn: '燕麦', en: 'oat', th: 'ข้าวโอ๊ต', vn: 'yến mạch', es: 'avena',
    pt: 'aveia', id_lang: 'haver', ru: 'овсянка', fr: 'avoine', ar: 'شوفان نباتة', ja: ''
  },
  '燕麦条纹': {
    cn: '燕麦条纹', en: 'Oatmeal stripes', th: 'ลายข้าวโอ๊ต', vn: 'Sọc yến mạch', es: 'rayas de avena',
    pt: 'Listras de aveia', id_lang: 'Garis-garis oatmeal', ru: 'Овсяные полоски', fr: 'rayures d&#39;avoine', ar: 'شرائح الشوفان', ja: ''
  },
  '燕麦格纹': {
    cn: '燕麦格纹', en: 'Oatmeal plaid', th: 'ลายสก็อตข้าวโอ๊ต', vn: 'họa tiết kẻ sọc yến mạch', es: 'Cuadros de avena',
    pt: 'Xadrez cor de aveia', id_lang: 'Oatmeal kotak-kotak', ru: 'Овсяная клетка', fr: 'Plaid avoine', ar: 'بنقشة الشوفان', ja: ''
  },
  '燕麦色': {
    cn: '燕麦色', en: 'oatmeal color', th: 'สีข้าวโอ๊ต', vn: 'màu yến mạch', es: 'color avena',
    pt: 'cor de aveia', id_lang: 'warna oatmeal', ru: 'овсяный цвет', fr: 'couleur avoine', ar: 'لون دقيق الشوفان', ja: ''
  },
  '燕麦花纹': {
    cn: '燕麦花纹', en: 'Oatmeal pattern', th: 'ลวดลายข้าวโอ๊ต', vn: 'Mẫu yến mạch', es: 'Patrón de avena',
    pt: 'Padrão de aveia', id_lang: 'Pola oatmeal', ru: 'Овсяный узор', fr: 'Motif de flocons d&#39;avoine', ar: 'نمط الشوفان', ja: ''
  },
  '燕麦镶拼': {
    cn: '燕麦镶拼', en: 'Oatmeal', th: 'ข้าวโอ๊ต', vn: 'Bột yến mạch', es: 'Avena',
    pt: 'Aveia', id_lang: 'Havermut', ru: 'Овсянка', fr: 'Gruau', ar: 'دقيق الشوفان', ja: ''
  },
  '爱心盐缩面料': {
    cn: '爱心盐缩面料', en: 'Love-filled salt shrinkage fabric', th: 'ผ้าหดตัวจากเกลือที่เปี่ยมด้วยความรัก', vn: 'Vải co rút do muối, thấm đẫm tình yêu thương', es: 'Tela encogida de sal llena de amor',
    pt: 'Tecido de encolhimento de sal cheio de amor', id_lang: 'Kain penyusut garam penuh cinta', ru: 'Ткань, усадочная из-за соли, наполненной любовью', fr: 'Tissu rétrécissant au sel rempli d&#39;amour', ar: 'قماش قابل للانكماش بالملح مليء بالحب', ja: ''
  },
  '牙签条': {
    cn: '牙签条', en: 'Toothpick strips', th: 'แถบไม้จิ้มฟัน', vn: 'dải tăm', es: 'Tiras de palillos de dientes',
    pt: 'Tiras de palito', id_lang: 'Potongan tusuk gigi', ru: 'Полоски для зубочисток', fr: 'bandes de cure-dents', ar: 'شرائح أعواد الأسنان', ja: ''
  },
  '牛仔蓝': {
    cn: '牛仔蓝', en: 'Denim Blue', th: 'สีน้ำเงินเดนิม', vn: 'Xanh denim', es: 'Azul vaquero',
    pt: 'Azul jeans', id_lang: 'Biru Denim', ru: 'Джинсовый синий', fr: 'Bleu denim', ar: 'أزرق جينز', ja: ''
  },
  '牛仔蓝压花': {
    cn: '牛仔蓝压花', en: 'Denim blue embossed', th: 'สีน้ำเงินเดนิมนูน', vn: 'Màu xanh denim dập nổi', es: 'Azul vaquero en relieve',
    pt: 'azul jeans em relevo', id_lang: 'Biru denim timbul', ru: 'Рельефный джинсовый синий', fr: 'denim bleu gaufré', ar: 'أزرق جينز منقوش', ja: ''
  },
  '牛仔蓝条纹': {
    cn: '牛仔蓝条纹', en: 'Denim blue stripes', th: 'ลายทางสีน้ำเงินเดนิม', vn: 'Sọc xanh denim', es: 'rayas azul vaquero',
    pt: 'listras azuis jeans', id_lang: 'Garis-garis biru denim', ru: 'Синие полоски из джинсовой ткани', fr: 'rayures bleu denim', ar: 'خطوط زرقاء من قماش الدنيم', ja: ''
  },
  '牛仔蓝格纹': {
    cn: '牛仔蓝格纹', en: 'Denim blue plaid', th: 'ลายตารางสีน้ำเงินเดนิม', vn: 'kẻ caro xanh denim', es: 'Cuadros azules vaqueros',
    pt: 'xadrez azul jeans', id_lang: 'Kotak-kotak biru denim', ru: 'Джинсовая синяя клетка', fr: 'à carreaux bleu denim', ar: 'قماش جينز أزرق منقوش', ja: ''
  },
  '牛仔蓝花纹': {
    cn: '牛仔蓝花纹', en: 'Denim blue floral pattern', th: 'ลายดอกไม้สีน้ำเงินเดนิม', vn: 'Họa tiết hoa màu xanh denim', es: 'Estampado floral azul vaquero',
    pt: 'Estampa floral azul jeans', id_lang: 'Pola bunga biru denim', ru: 'Цветочный узор джинсово-синего цвета', fr: 'motif floral bleu denim', ar: 'نقش زهري باللون الأزرق الدنيم', ja: ''
  },
  '牛仔蓝过渡色': {
    cn: '牛仔蓝过渡色', en: 'Denim blue transition color', th: 'สีน้ำเงินเดนิมเป็นสีเปลี่ยนผ่านที่สวยงาม', vn: 'màu chuyển tiếp xanh denim', es: 'color de transición azul vaquero',
    pt: 'cor de transição azul jeans', id_lang: 'warna transisi biru denim', ru: 'Переходный цвет джинсово-синего цвета', fr: 'couleur de transition bleu denim', ar: 'لون انتقالي أزرق جينز', ja: ''
  },
  '牛仔蓝镶拼': {
    cn: '牛仔蓝镶拼', en: 'Denim blue patchwork', th: 'ผ้าเดนิมสีน้ำเงินแบบปะติดปะต่อกัน', vn: 'Vải denim xanh chắp vá', es: 'patchwork azul vaquero',
    pt: 'patchwork azul jeans', id_lang: 'tambal sulam biru denim', ru: 'джинсовая синяя лоскутная ткань', fr: 'patchwork bleu denim', ar: 'قماش الدنيم الأزرق المرقع', ja: ''
  },
  '牛仔裤': {
    cn: '牛仔裤', en: 'Jeans', th: 'กางเกงยีนส์', vn: 'Quần Jeans', es: 'Jeans',
    pt: 'Calças De Ganga', id_lang: 'Jeans', ru: 'Джинсы', fr: 'Jean', ar: 'جينز', ja: 'ジーンズ'
  },
  '牛仔面料': {
    cn: '牛仔面料', en: 'Denim fabric', th: 'ผ้าเดนิม', vn: 'Vải denim', es: 'tela vaquera',
    pt: 'Tecido jeans', id_lang: 'Kain denim', ru: 'Джинсовая ткань', fr: 'Tissu denim', ar: 'قماش الدنيم', ja: ''
  },
  '牛剖层皮革': {
    cn: '牛剖层皮革', en: 'split cow leather', th: 'หนังวัวผ่าซีก', vn: 'da bò tách lớp', es: 'cuero de vaca dividido',
    pt: 'couro bovino dividido', id_lang: 'kulit sapi belah', ru: 'расщепленная коровья кожа', fr: 'cuir de vache fendu', ar: 'جلد البقر المدبوغ', ja: ''
  },
  '牛剖层移膜革': {
    cn: '牛剖层移膜革', en: 'Cow split transfer leather', th: 'หนังวัวแยกชั้นสำหรับถ่ายโอน', vn: 'Da bò tách lớp chuyển đổi', es: 'cuero de vaca dividido transferible',
    pt: 'Couro bovino dividido por transferência', id_lang: 'Kulit sapi belah dengan transfer', ru: 'Коровья расщепленная трансферная кожа', fr: 'cuir de vache fendu transféré', ar: 'جلد البقر المقشور المنقول', ja: ''
  },
  '牛剖层绒面革': {
    cn: '牛剖层绒面革', en: 'split suede', th: 'หนังกลับแยกชิ้น', vn: 'da lộn tách rời', es: 'ante partido',
    pt: 'camurça dividida', id_lang: 'suede terbelah', ru: 'расщепленная замша', fr: 'daim fendu', ar: 'جلد سويدي مقسم', ja: ''
  },
  '牛剖层革': {
    cn: '牛剖层革', en: 'split leather', th: 'หนังแยกชั้น', vn: 'da tách lớp', es: 'cuero dividido',
    pt: 'couro dividido', id_lang: 'kulit belah', ru: 'расщепленная кожа', fr: 'cuir fendu', ar: 'جلد مقسوم', ja: ''
  },
  '牛反绒': {
    cn: '牛反绒', en: 'suede', th: 'หนังกลับ', vn: 'da lộn', es: 'ante',
    pt: 'camurça', id_lang: 'suede', ru: 'замша', fr: 'suède', ar: 'جلد سويدي', ja: ''
  },
  '牛油果绿': {
    cn: '牛油果绿', en: 'Avocado Green', th: 'สีเขียวอะโวคาโด', vn: 'Bơ xanh', es: 'Aguacate verde',
    pt: 'Verde Abacate', id_lang: 'Alpukat Hijau', ru: 'Зеленый авокадо', fr: 'Vert avocat', ar: 'الأفوكادو الأخضر', ja: ''
  },
  '牛津双面': {
    cn: '牛津双面', en: 'Oxford double-sided', th: 'อ็อกซ์ฟอร์ด สองด้าน', vn: 'Oxford hai mặt', es: 'Oxford de doble cara',
    pt: 'Oxford dupla face', id_lang: 'Oxford dua sisi', ru: 'Оксфорд двусторонний', fr: 'Oxford double face', ar: 'أكسفورد ذو وجهين', ja: ''
  },
  '牛津纺面料': {
    cn: '牛津纺面料', en: 'Oxford cloth fabric', th: 'ผ้าอ็อกซ์ฟอร์ด', vn: 'Vải Oxford', es: 'tela Oxford',
    pt: 'Tecido Oxford', id_lang: 'Kain Oxford', ru: 'Оксфордская ткань', fr: 'tissu Oxford', ar: 'قماش أكسفورد', ja: ''
  },
  '牛皮革': {
    cn: '牛皮革', en: 'cowhide', th: 'หนังวัว', vn: 'da bò', es: 'cuero',
    pt: 'couro de vaca', id_lang: 'kulit sapi', ru: 'коровья кожа', fr: 'peau de vache', ar: 'جلد البقر', ja: ''
  },
  '牛筋': {
    cn: '牛筋', en: 'Beef tendon', th: 'เอ็นเนื้อวัว', vn: 'gân bò', es: 'Tendón de res',
    pt: 'Tendão bovino', id_lang: 'Urat sapi', ru: 'Говяжье сухожилие', fr: 'tendon de bœuf', ar: 'وتر بقري', ja: ''
  },
  '牛绒': {
    cn: '牛绒', en: 'Wool', th: 'ขนสัตว์', vn: 'Len', es: 'Lana',
    pt: 'Lã', id_lang: 'Wol', ru: 'Шерсть', fr: 'Laine', ar: 'صوف', ja: ''
  },
  '特大': {
    cn: '特大', en: 'XXL', th: 'XXL', vn: 'XXL', es: 'XXL',
    pt: 'XXL', id_lang: 'XXL', ru: 'XXL', fr: 'XXL', ar: 'XXL', ja: ''
  },
  '特大号': {
    cn: '特大号', en: 'Extra Large (XL)', th: 'ไซส์พิเศษใหญ่', vn: 'Cỡ XL', es: 'Talla XL',
    pt: 'Tamanho XL (GG)', id_lang: 'Ukuran XL', ru: 'Размер XL', fr: 'Taille XL', ar: 'مقاس كبير جداً', ja: ''
  },
  '特大号(3XL)': {
    cn: '特大号(3XL)', en: '3XL / XXXL', th: 'ไซส์ 3XL', vn: 'Cỡ 3XL', es: 'Talla 3XL',
    pt: 'Tamanho 3XL (XXG)', id_lang: 'Ukuran 3XL', ru: 'Размер 3XL', fr: 'Taille 3XL', ar: 'مقاس 3XL', ja: ''
  },
  '特大号(4XL)': {
    cn: '特大号(4XL)', en: '4XL', th: 'ไซส์ 4XL', vn: 'Cỡ 4XL', es: 'Talla 4XL',
    pt: 'Tamanho 4XL', id_lang: 'Ukuran 4XL', ru: 'Размер 4XL', fr: 'Taille 4XL', ar: 'مقاس 4XL', ja: ''
  },
  '特大号(5XL)': {
    cn: '特大号(5XL)', en: '5XL', th: 'ไซส์ 5XL', vn: 'Cỡ 5XL', es: 'Talla 5XL',
    pt: 'Tamanho 5XL', id_lang: 'Ukuran 5XL', ru: 'Размер 5XL', fr: 'Taille 5XL', ar: 'مقاس 5XL', ja: ''
  },
  '特大号(6XL)': {
    cn: '特大号(6XL)', en: '6XL', th: 'ไซส์ 6XL', vn: 'Cỡ 6XL', es: 'Talla 6XL',
    pt: 'Tamanho 6XL', id_lang: 'Ukuran 6XL', ru: 'Размер 6XL', fr: 'Taille 6XL', ar: 'مقاس 6XL', ja: ''
  },
  '特小码': {
    cn: '特小码', en: 'XS', th: 'XS', vn: 'XS', es: 'XS',
    pt: 'XS', id_lang: 'XS', ru: 'XS', fr: 'XS', ar: 'XS', ja: ''
  },
  '狐狸毛皮': {
    cn: '狐狸毛皮', en: 'fox fur', th: 'ขนจิ้งจอก', vn: 'lông cáo', es: 'piel de zorro',
    pt: 'pele de raposa', id_lang: 'bulu rubah', ru: 'лисья шерсть', fr: 'fourrure de renard', ar: 'فرو الثعلب', ja: ''
  },
  '猪剖层革': {
    cn: '猪剖层革', en: 'Pig split leather', th: 'หนังหมูผ่าซีก', vn: 'da lợn tách lớp', es: 'Piel de cerdo dividida',
    pt: 'couro rachado de porco', id_lang: 'Kulit babi belah', ru: 'Свиная расщепленная кожа', fr: 'cuir de porc fendu', ar: 'جلد الخنزير المدبوغ', ja: ''
  },
  '猪巴戈': {
    cn: '猪巴戈', en: 'Pig Bago', th: 'หมูบาโก', vn: 'Lợn Bago', es: 'Cerdo Bago',
    pt: 'Bago de porco', id_lang: 'Babi Bago', ru: 'Пиг Баго', fr: 'Pig Bago', ar: 'خنزير باجو', ja: ''
  },
  '玉蚕哥弟': {
    cn: '玉蚕哥弟', en: 'Jade Silkworm Brothers', th: 'พี่น้องไหมหยก', vn: 'Anh em Tằm Ngọc', es: 'Hermanos gusanos de seda de jade',
    pt: 'Irmãos do Bicho-da-Seda de Jade', id_lang: 'Saudara Ulat Sutra Giok', ru: 'Братья нефритового шелкопряда', fr: 'Les frères vers à soie Jade', ar: 'إخوة دودة القز اليشم', ja: ''
  },
  '玉醋': {
    cn: '玉醋', en: 'Jade Vinegar', th: 'น้ำส้มสายชูหยก', vn: 'Giấm Ngọc Bích', es: 'Vinagre de jade',
    pt: 'Vinagre de Jade', id_lang: 'Cuka Giok', ru: 'Нефритовый уксус', fr: 'Vinaigre de jade', ar: 'خل اليشم', ja: ''
  },
  '玛瑙灰': {
    cn: '玛瑙灰', en: 'Agate Gray', th: 'สีเทาอะเกต', vn: 'Xám Agate', es: 'Gris ágata',
    pt: 'Cinza Ágata', id_lang: 'Abu-abu Agate', ru: 'Агатовый серый', fr: 'Gris agate', ar: 'رمادي عقيقي', ja: ''
  },
  '玛瑙黑': {
    cn: '玛瑙黑', en: 'Agate Black', th: 'หินอาเกตสีดำ', vn: 'Đá mã não đen', es: 'Ágata negra',
    pt: 'Ágata Preta', id_lang: 'Agate Hitam', ru: 'Черный агат', fr: 'Agate noire', ar: 'العقيق الأسود', ja: ''
  },
  '玫瑰纤维': {
    cn: '玫瑰纤维', en: 'Rose fiber', th: 'เส้นใยกุหลาบ', vn: 'Sợi hoa hồng', es: 'Fibra de rosa',
    pt: 'Fibra de rosa', id_lang: 'Serat mawar', ru: 'Розовое волокно', fr: 'Fibre de rose', ar: 'ألياف وردية', ja: ''
  },
  '玫粉': {
    cn: '玫粉', en: 'Rose Pink', th: 'สีชมพูกุหลาบ', vn: 'Hồng hoa hồng', es: 'Rosa',
    pt: 'Rosa Pink', id_lang: 'Merah Muda Mawar', ru: 'Розовый', fr: 'Rose rose', ar: 'وردي فاتح', ja: ''
  },
  '玫粉渐变': {
    cn: '玫粉渐变', en: 'Rose pink gradient', th: 'ไล่ระดับสีชมพูกุหลาบ', vn: 'chuyển sắc hồng hoa hồng', es: 'Degradado rosa palo',
    pt: 'degradê rosa-claro', id_lang: 'Gradien warna merah muda mawar', ru: 'Розовый градиент', fr: 'Dégradé rose', ar: 'تدرج لوني وردي فاتح', ja: ''
  },
  '玫粉花纹': {
    cn: '玫粉花纹', en: 'Rose pink floral pattern', th: 'ลายดอกไม้สีชมพูอ่อน', vn: 'Họa tiết hoa màu hồng nhạt', es: 'estampado floral rosa',
    pt: 'Estampa floral rosa-clara', id_lang: 'Pola bunga berwarna merah muda mawar', ru: 'Розовый цветочный узор', fr: 'motif floral rose pâle', ar: 'نقش زهري وردي', ja: ''
  },
  '玫粉镶拼': {
    cn: '玫粉镶拼', en: 'Rose pink patchwork', th: 'ผ้าปะติดปะต่อสีชมพูอ่อน', vn: 'chắp vá màu hồng hoa hồng', es: 'mosaico rosa',
    pt: 'patchwork rosa-claro', id_lang: 'tambal sulam merah muda mawar', ru: 'Розово-розовый лоскутный узор', fr: 'patchwork rose poudré', ar: 'رقعة وردية اللون', ja: ''
  },
  '玫红': {
    cn: '玫红', en: 'Rose Red', th: 'สีแดงกุหลาบ', vn: 'Hồng đỏ', es: 'Rojo rosa',
    pt: 'Rosa Vermelha', id_lang: 'Merah Mawar', ru: 'Розовый красный', fr: 'Rose rouge', ar: 'وردي أحمر', ja: ''
  },
  '玫红条纹': {
    cn: '玫红条纹', en: 'Rose red stripes', th: 'ลายทางสีแดงกุหลาบ', vn: 'Sọc đỏ hồng', es: 'rayas rojo rosa',
    pt: 'Listras vermelhas rosadas', id_lang: 'Garis-garis merah mawar', ru: 'Розово-красные полосы', fr: 'rayures rose rouge', ar: 'خطوط وردية حمراء', ja: ''
  },
  '玫红渐变': {
    cn: '玫红渐变', en: 'Rose pink gradient', th: 'ไล่ระดับสีชมพูกุหลาบ', vn: 'Màu đỏ hồng chuyển sắc', es: 'Degradado rosa palo',
    pt: 'Gradiente Rosa Vermelho', id_lang: 'Gradien Merah Mawar', ru: 'Розово-красный градиент', fr: 'Dégradé rose', ar: 'تدرج اللون الأحمر الوردي', ja: ''
  },
  '玫红花纹': {
    cn: '玫红花纹', en: 'Rose Red Pattern', th: 'ลวดลายสีแดงกุหลาบ', vn: 'Họa tiết màu đỏ hồng', es: 'Patrón rojo rosa',
    pt: 'Padrão Rosa Vermelho', id_lang: 'Pola Merah Mawar', ru: 'Узор «Розовый красный»', fr: 'Motif rose rouge', ar: 'نقش باللون الأحمر الوردي', ja: ''
  },
  '玲眼小提花': {
    cn: '玲眼小提花', en: 'Lingyan small jacquard', th: 'หลิงหยาน แจ็กการ์ดขนาดเล็ก', vn: 'Vải jacquard nhỏ Lingyan', es: 'Jacquard pequeño Lingyan',
    pt: 'Jacquard pequeno Lingyan', id_lang: 'Lingyan jacquard kecil', ru: 'Линъянь малый жаккард', fr: 'Lingyan petit jacquard', ar: 'قماش جاكار صغير من لينغيان', ja: ''
  },
  '珊瑚粉': {
    cn: '珊瑚粉', en: 'Coral powder', th: 'ผงปะการัง', vn: 'Bột san hô', es: 'Polvo de coral',
    pt: 'Pó de coral', id_lang: 'Bubuk karang', ru: 'Коралловый порошок', fr: 'poudre de corail', ar: 'مسحوق المرجان', ja: ''
  },
  '珠地': {
    cn: '珠地', en: 'Pearl', th: 'ไข่มุก', vn: 'Ngọc trai', es: 'Perla',
    pt: 'Pérola', id_lang: 'Mutiara', ru: 'Жемчуг', fr: 'Perle', ar: 'لؤلؤة', ja: ''
  },
  '珠地提花': {
    cn: '珠地提花', en: 'pique jacquard', th: 'ผ้าปิเก้แจ็กการ์ด', vn: 'vải jacquard pique', es: 'jacquard piqué',
    pt: 'jacquard piqué', id_lang: 'pique jacquard', ru: 'пике жаккард', fr: 'jacquard piqué', ar: 'قماش البيكيه جاكار', ja: ''
  },
  '珠地空气层': {
    cn: '珠地空气层', en: 'Pearl layer', th: 'ชั้นไข่มุก', vn: 'Lớp ngọc trai', es: 'capa de perlas',
    pt: 'Camada de pérola', id_lang: 'Lapisan mutiara', ru: 'Жемчужный слой', fr: 'couche nacrée', ar: 'طبقة اللؤلؤ', ja: ''
  },
  '珠片除外': {
    cn: '珠片除外', en: 'Except for sequins', th: 'ยกเว้นเลื่อม', vn: 'Ngoại trừ kim sa', es: 'Excepto por las lentejuelas',
    pt: 'Exceto lantejoulas', id_lang: 'Kecuali payet', ru: 'За исключением пайеток', fr: 'À l&#39;exception des paillettes', ar: 'باستثناء الترتر', ja: ''
  },
  '珠眼提花': {
    cn: '珠眼提花', en: 'Pearl Jacquard', th: 'ไข่มุกจาการ์ด', vn: 'Vải Jacquard ngọc trai', es: 'Jacquard perlado',
    pt: 'Jacquard de Pérolas', id_lang: 'Jacquard Mutiara', ru: 'Жаккардовый жемчуг', fr: 'Jacquard perlé', ar: 'جاكار اللؤلؤ', ja: ''
  },
  '琉璃瓦': {
    cn: '琉璃瓦', en: 'Glazed tiles', th: 'กระเบื้องเคลือบ', vn: 'Gạch men', es: 'Azulejos esmaltados',
    pt: 'Azulejos esmaltados', id_lang: 'Ubin mengkilap', ru: 'Глазурованная плитка', fr: 'Carreaux émaillés', ar: 'بلاط مزجج', ja: ''
  },
  '甜杏仁': {
    cn: '甜杏仁', en: 'Sweet almonds', th: 'อัลมอนด์หวาน', vn: 'Hạnh nhân ngọt', es: 'Almendras dulces',
    pt: 'Amêndoas doces', id_lang: 'Kacang almond manis', ru: 'Сладкий миндаль', fr: 'Amandes douces', ar: 'اللوز الحلو', ja: ''
  },
  '生产日期': {
    cn: '生产日期', en: 'Production Date', th: 'วันที่ผลิต', vn: 'Ngày sản xuất', es: 'Fecha de producción',
    pt: 'Data de produção', id_lang: 'Tanggal produksi', ru: 'Дата производства', fr: 'Date de production', ar: 'تاريخ الإنتاج', ja: ''
  },
  '由于特殊工艺，请反面洗涤并避免揉搓': {
    cn: '由于特殊工艺，请反面洗涤并避免揉搓', en: 'Supplementary note: Due to special craft, please wash inside out and avoid scrubbing', th: 'หมายเหตุเพิ่มเติม: เนื่องจากการตัดเย็บแบบพิเศษ โปรดกลับด้านซักและหลีกเลี่ยงการขัด', vn: 'Lưu ý bổ sung: Do trang trí thủ công đặc biệt, vui lòng lộn trái khi giặt và tránh vò mạnh', es: 'Nota adicional: Debido a su confección artesanal especial, se ruega lavar por el revés y evitar frotar al lavar',
    pt: 'Nota adicional: Devido ao fabrico especial, por favor, lave do lado do avesso e evitar a lavagem com fricção', id_lang: 'Catatan tambahan: Karena pengerjaan khusus, harap cuci pada sisi sebaliknya dan hindari pencucian dengan cara menggosok', ru: 'Дополнительное примечание: Ввиду особенностей изготовления следует стирать изделие с изнаночной стороны и избегать стирки с помощью растирания', fr: 'Remarque supplémentaire : En raison de la fabrication spéciale, veuillez laver sur l’envers et éviter de frotter', ar: 'ملحوظة إضافية: نظراً للمصنعية الخاصة，يرجى الغسل على الجانب العكسي وتجنب الفرك أثناء الغسل', ja: '裏返して洗う、摩擦を避ける'
  },
  '电绣': {
    cn: '电绣', en: 'Electric Embroidery', th: 'การปักด้วยไฟฟ้า', vn: 'Thêu điện', es: 'Bordado eléctrico',
    pt: 'Bordado Elétrico', id_lang: 'Bordir Elektrik', ru: 'Электровышивка', fr: 'broderie électrique', ar: 'التطريز الكهربائي', ja: ''
  },
  '电绣除外': {
    cn: '电绣除外', en: 'Except for electric embroidery', th: 'ยกเว้นการปักด้วยไฟฟ้า', vn: 'Ngoại trừ thêu điện', es: 'Excepto para el bordado eléctrico',
    pt: 'Com exceção do bordado elétrico.', id_lang: 'Kecuali untuk bordir listrik', ru: 'За исключением электрической вышивки', fr: 'À l&#39;exception de la broderie électrique', ar: 'باستثناء التطريز الكهربائي', ja: ''
  },
  '男款': {
    cn: '男款', en: 'Men\'s', th: 'ผู้ชาย', vn: 'Nam', es: 'de hombre',
    pt: 'Masculino', id_lang: 'Pria', ru: 'Мужской', fr: 'Homme', ar: 'رجالي', ja: ''
  },
  '男款30度机洗': {
    cn: '男款30度机洗', en: 'Men\'s Machine Wash at 30°C', th: 'ผู้ชาย ซักเครื่อง 30°C', vn: 'Nam Giặt máy 30°C', es: 'Hombre Lavado a máquina a 30°C',
    pt: 'Masculino Lavagem à máquina a 30°C', id_lang: 'Pria Cuci Mesin 30°C', ru: 'Мужская Машинная стирка при 30°C', fr: 'Homme Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة رجالي', ja: ''
  },
  '男款40度机洗': {
    cn: '男款40度机洗', en: 'Men\'s Machine Wash at 40°C', th: 'ผู้ชาย ซักเครื่อง 40°C', vn: 'Nam Giặt máy 40°C', es: 'Hombre Lavado a máquina a 40°C',
    pt: 'Masculino Lavagem à máquina a 40°C', id_lang: 'Pria Cuci Mesin 40°C', ru: 'Мужская Машинная стирка при 40°C', fr: 'Homme Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة رجالي', ja: ''
  },
  '男款不可干洗': {
    cn: '男款不可干洗', en: 'Men\'s Do Not Dry Clean', th: 'ผู้ชาย ห้ามซักแห้ง', vn: 'Nam Không giặt khô', es: 'Hombre No lavar en seco',
    pt: 'Masculino Não lavar a seco', id_lang: 'Pria Jangan Dry Clean', ru: 'Мужская Не подвергать химчистке', fr: 'Homme Ne pas nettoyer à sec', ar: 'لا تنظف جافاً رجالي', ja: ''
  },
  '男款不可漂白': {
    cn: '男款不可漂白', en: 'Men\'s Do Not Bleach', th: 'ผู้ชาย ห้ามฟอกขาว', vn: 'Nam Không tẩy trắng', es: 'Hombre No blanquear',
    pt: 'Masculino Não usar alvejante', id_lang: 'Pria Jangan Diputihkan', ru: 'Мужская Не отбеливать', fr: 'Homme Ne pas blanchir', ar: 'لا تبيض رجالي', ja: ''
  },
  '男款不可烘干': {
    cn: '男款不可烘干', en: 'Men\'s Do Not Tumble Dry', th: 'ผู้ชาย ห้ามอบแห้ง', vn: 'Nam Không sấy khô', es: 'Hombre No secar en secadora',
    pt: 'Masculino Não secar em secadora', id_lang: 'Pria Jangan Dikeringkan', ru: 'Мужская Не сушить в машине', fr: 'Homme Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف رجالي', ja: ''
  },
  '男款亚麻': {
    cn: '男款亚麻', en: 'Men\'s Linen', th: 'ผู้ชาย ผ้าลินิน', vn: 'Nam Vải lanh', es: 'Hombre Lino',
    pt: 'Masculino Linho', id_lang: 'Pria Linen', ru: 'Мужская Лен', fr: 'Homme Lin', ar: 'كتان رجالي', ja: ''
  },
  '男款低温熨烫': {
    cn: '男款低温熨烫', en: 'Men\'s Low Temperature Ironing', th: 'ผู้ชาย รีดอุณหภูมิต่ำ', vn: 'Nam Ủi nhiệt độ thấp', es: 'Hombre Planchar a baja temperatura',
    pt: 'Masculino Passar a baixa temperatura', id_lang: 'Pria Setrika Suhu Rendah', ru: 'Мужская Глажка при низкой температуре', fr: 'Homme Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة رجالي', ja: ''
  },
  '男款再生涤纶': {
    cn: '男款再生涤纶', en: 'Men\'s Recycled Polyester', th: 'ผู้ชาย โพลีเอสเตอร์รีไซเคิล', vn: 'Nam Polyester tái chế', es: 'Hombre Poliéster reciclado',
    pt: 'Masculino Poliéster reciclado', id_lang: 'Pria Poliester Daur Ulang', ru: 'Мужская Переработанный полиэстер', fr: 'Homme Polyester recyclé', ar: 'بوليستر معاد التدوير رجالي', ja: ''
  },
  '男款冷水洗': {
    cn: '男款冷水洗', en: 'Men\'s Cold Water Wash', th: 'ผู้ชาย ซักน้ำเย็น', vn: 'Nam Giặt nước lạnh', es: 'Hombre Lavado en agua fría',
    pt: 'Masculino Lavagem em água fria', id_lang: 'Pria Cuci Air Dingin', ru: 'Мужская Стирка в холодной воде', fr: 'Homme Lavage à l\'eau froide', ar: 'غسيل بالماء البارد رجالي', ja: ''
  },
  '男款天丝': {
    cn: '男款天丝', en: 'Men\'s Tencel', th: 'ผู้ชาย เทนเซล', vn: 'Nam Tencel', es: 'Hombre Tencel',
    pt: 'Masculino Tencel', id_lang: 'Pria Tencel', ru: 'Мужская Тенсел', fr: 'Homme Tencel', ar: 'تنسل رجالي', ja: ''
  },
  '男款尼龙': {
    cn: '男款尼龙', en: 'Men\'s Nylon', th: 'ผู้ชาย ไนลอน', vn: 'Nam Nylon', es: 'Hombre Nailon',
    pt: 'Masculino Nylon', id_lang: 'Pria Nilon', ru: 'Мужская Нейлон', fr: 'Homme Nylon', ar: 'نايلون رجالي', ja: ''
  },
  '男款平铺晾干': {
    cn: '男款平铺晾干', en: 'Men\'s Lay Flat to Dry', th: 'ผู้ชาย ตากแห้งแบบแบน', vn: 'Nam Phơi phẳng', es: 'Hombre Secar en plano',
    pt: 'Masculino Secar na horizontal', id_lang: 'Pria Keringkan Datar', ru: 'Мужская Сушить в расправленном виде', fr: 'Homme Sécher à plat', ar: 'تجفيف مسطح رجالي', ja: ''
  },
  '男款悬挂晾干': {
    cn: '男款悬挂晾干', en: 'Men\'s Hang Dry', th: 'ผู้ชาย แขวนตากแห้ง', vn: 'Nam Phơi treo', es: 'Hombre Secar colgado',
    pt: 'Masculino Secar pendurado', id_lang: 'Pria Gantung Kering', ru: 'Мужская Сушить в подвешенном состоянии', fr: 'Homme Sécher suspendu', ar: 'تجفيف بالتعليق رجالي', ja: ''
  },
  '男款手洗': {
    cn: '男款手洗', en: 'Men\'s Hand Wash', th: 'ผู้ชาย ซักมือ', vn: 'Nam Giặt tay', es: 'Hombre Lavado a mano',
    pt: 'Masculino Lavagem à mão', id_lang: 'Pria Cuci Tangan', ru: 'Мужская Ручная стирка', fr: 'Homme Lavage à la main', ar: 'غسيل يدوي رجالي', ja: ''
  },
  '男款有机棉': {
    cn: '男款有机棉', en: 'Men\'s Organic Cotton', th: 'ผู้ชาย ผ้าฝ้ายออร์แกนิก', vn: 'Nam Cotton hữu cơ', es: 'Hombre Algodón orgánico',
    pt: 'Masculino Algodão orgânico', id_lang: 'Pria Katun Organik', ru: 'Мужская Органический хлопок', fr: 'Homme Coton biologique', ar: 'قطن عضوي رجالي', ja: ''
  },
  '男款机洗': {
    cn: '男款机洗', en: 'Men\'s Machine Wash', th: 'ผู้ชาย ซักเครื่อง', vn: 'Nam Giặt máy', es: 'Hombre Lavado a máquina',
    pt: 'Masculino Lavagem à máquina', id_lang: 'Pria Cuci Mesin', ru: 'Мужская Машинная стирка', fr: 'Homme Lavage en machine', ar: 'غسيل آلي رجالي', ja: ''
  },
  '男款棉': {
    cn: '男款棉', en: 'Men\'s Cotton', th: 'ผู้ชาย ผ้าฝ้าย', vn: 'Nam Cotton', es: 'Hombre Algodón',
    pt: 'Masculino Algodão', id_lang: 'Pria Katun', ru: 'Мужская Хлопок', fr: 'Homme Coton', ar: 'قطن رجالي', ja: ''
  },
  '男款氨纶': {
    cn: '男款氨纶', en: 'Men\'s Spandex', th: 'ผู้ชาย สแปนเด็กซ์', vn: 'Nam Spandex', es: 'Hombre Elastano',
    pt: 'Masculino Elastano', id_lang: 'Pria Spandex', ru: 'Мужская Спандекс', fr: 'Homme Élasthanne', ar: 'سباندكس رجالي', ja: ''
  },
  '男款涤纶': {
    cn: '男款涤纶', en: 'Men\'s Polyester', th: 'ผู้ชาย โพลีเอสเตอร์', vn: 'Nam Polyester', es: 'Hombre Poliéster',
    pt: 'Masculino Poliéster', id_lang: 'Pria Poliester', ru: 'Мужская Полиэстер', fr: 'Homme Polyester', ar: 'بوليستر رجالي', ja: ''
  },
  '男款温水洗': {
    cn: '男款温水洗', en: 'Men\'s Warm Water Wash', th: 'ผู้ชาย ซักน้ำอุ่น', vn: 'Nam Giặt nước ấm', es: 'Hombre Lavado en agua tibia',
    pt: 'Masculino Lavagem em água morna', id_lang: 'Pria Cuci Air Hangat', ru: 'Мужская Стирка в теплой воде', fr: 'Homme Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ رجالي', ja: ''
  },
  '男款真丝': {
    cn: '男款真丝', en: 'Men\'s Pure Silk', th: 'ผู้ชาย ผ้าไหมแท้', vn: 'Nam Lụa thật', es: 'Hombre Seda pura',
    pt: 'Masculino Seda pura', id_lang: 'Pria Sutra Asli', ru: 'Мужская Натуральный шелк', fr: 'Homme Soie naturelle', ar: 'حرير طبيعي رجالي', ja: ''
  },
  '男款竹纤维': {
    cn: '男款竹纤维', en: 'Men\'s Bamboo Fiber', th: 'ผู้ชาย เส้นใยไผ่', vn: 'Nam Sợi tre', es: 'Hombre Fibra de bambú',
    pt: 'Masculino Fibra de bambu', id_lang: 'Pria Serat Bambu', ru: 'Мужская Бамбуковое волокно', fr: 'Homme Fibre de bambou', ar: 'ألياف الخيزران رجالي', ja: ''
  },
  '男款粘纤': {
    cn: '男款粘纤', en: 'Men\'s Viscose', th: 'ผู้ชาย วิสโคส', vn: 'Nam Viscose', es: 'Hombre Viscosa',
    pt: 'Masculino Viscose', id_lang: 'Pria Viskosa', ru: 'Мужская Вискоза', fr: 'Homme Viscose', ar: 'فيسكوز رجالي', ja: ''
  },
  '男款精梳棉': {
    cn: '男款精梳棉', en: 'Men\'s Combed Cotton', th: 'ผู้ชาย ผ้าฝ้ายหวี', vn: 'Nam Cotton chải', es: 'Hombre Algodón peinado',
    pt: 'Masculino Algodão penteado', id_lang: 'Pria Katun Sisir', ru: 'Мужская Гребенной хлопок', fr: 'Homme Coton peigné', ar: 'قطن ممشط رجالي', ja: ''
  },
  '男款羊毛': {
    cn: '男款羊毛', en: 'Men\'s Wool', th: 'ผู้ชาย ขนแกะ', vn: 'Nam Len', es: 'Hombre Lana',
    pt: 'Masculino Lã', id_lang: 'Pria Wol', ru: 'Мужская Шерсть', fr: 'Homme Laine', ar: 'صوف رجالي', ja: ''
  },
  '男款羊绒': {
    cn: '男款羊绒', en: 'Men\'s Cashmere', th: 'ผู้ชาย แคชเมียร์', vn: 'Nam Cashmere', es: 'Hombre Cachemira',
    pt: 'Masculino Caxemira', id_lang: 'Pria Kasmir', ru: 'Мужская Кашемир', fr: 'Homme Cachemire', ar: 'كشمير رجالي', ja: ''
  },
  '男款腈纶': {
    cn: '男款腈纶', en: 'Men\'s Acrylic', th: 'ผู้ชาย อะคริลิก', vn: 'Nam Acrylic', es: 'Hombre Acrílico',
    pt: 'Masculino Acrílico', id_lang: 'Pria Akrilik', ru: 'Мужская Акрил', fr: 'Homme Acrylique', ar: 'أكريليك رجالي', ja: ''
  },
  '男款莫代尔': {
    cn: '男款莫代尔', en: 'Men\'s Modal', th: 'ผู้ชาย โมดอล', vn: 'Nam Modal', es: 'Hombre Modal',
    pt: 'Masculino Modal', id_lang: 'Pria Modal', ru: 'Мужская Модал', fr: 'Homme Modal', ar: 'مودال رجالي', ja: ''
  },
  '男款莱赛尔': {
    cn: '男款莱赛尔', en: 'Men\'s Lyocell', th: 'ผู้ชาย ไลโอเซลล์', vn: 'Nam Lyocell', es: 'Hombre Lyocell',
    pt: 'Masculino Lyocell', id_lang: 'Pria Lyocell', ru: 'Мужская Лиоцелл', fr: 'Homme Lyocell', ar: 'ليوسيل رجالي', ja: ''
  },
  '男款锦纶': {
    cn: '男款锦纶', en: 'Men\'s Nylon', th: 'ผู้ชาย ไนลอน', vn: 'Nam Nylon', es: 'Hombre Nailon',
    pt: 'Masculino Nylon', id_lang: 'Pria Nilon', ru: 'Мужская Нейлон', fr: 'Homme Nylon', ar: 'نايلون رجالي', ja: ''
  },
  '男款马海毛': {
    cn: '男款马海毛', en: 'Men\'s Mohair', th: 'ผู้ชาย โมแฮร์', vn: 'Nam Mohair', es: 'Hombre Mohair',
    pt: 'Masculino Mohair', id_lang: 'Pria Mohair', ru: 'Мужская Мохер', fr: 'Homme Mohair', ar: 'موهير رجالي', ja: ''
  },
  '登山布': {
    cn: '登山布', en: 'mountaineering cloth', th: 'ผ้าสำหรับปีนเขา', vn: 'vải leo núi', es: 'tela de montañismo',
    pt: 'tecido de montanhismo', id_lang: 'kain pendakian gunung', ru: 'альпинистская ткань', fr: 'tissu d&#39;alpinisme', ar: 'قماش تسلق الجبال', ja: ''
  },
  '白底黑条': {
    cn: '白底黑条', en: 'White background with black stripes', th: 'พื้นหลังสีขาวมีลายเส้นสีดำ', vn: 'Nền trắng với các sọc đen', es: 'Fondo blanco con rayas negras',
    pt: 'Fundo branco com listras pretas', id_lang: 'Latar belakang putih dengan garis-garis hitam', ru: 'Белый фон с черными полосами', fr: 'Fond blanc à rayures noires', ar: 'خلفية بيضاء بخطوط سوداء', ja: ''
  },
  '白牛色': {
    cn: '白牛色', en: 'white cow color', th: 'สีวัวขาว', vn: 'màu trắng của bò', es: 'color de vaca blanca',
    pt: 'cor de vaca branca', id_lang: 'warna sapi putih', ru: 'белый коровий цвет', fr: 'couleur de vache blanche', ar: 'لون البقرة البيضاء', ja: ''
  },
  '白色': {
    cn: '白色', en: 'White', th: 'สีขาว', vn: 'Trắng', es: 'Blanco',
    pt: 'Branco', id_lang: 'Putih', ru: 'Белый', fr: 'Blanc', ar: 'أبيض', ja: ''
  },
  '白色亮丝': {
    cn: '白色亮丝', en: 'White shimmering silk', th: 'ผ้าไหมสีขาวระยิบระยับ', vn: 'Lụa trắng lấp lánh', es: 'Seda blanca brillante',
    pt: 'Seda branca brilhante', id_lang: 'Sutra putih berkilauan', ru: 'Белый мерцающий шелк', fr: 'Soie blanche chatoyante', ar: 'حرير أبيض لامع', ja: ''
  },
  '白色天丝': {
    cn: '白色天丝', en: 'White Tencel', th: 'เทนเซลสีขาว', vn: 'Tencel trắng', es: 'Tencel blanco',
    pt: 'Tencel branco', id_lang: 'Tencel Putih', ru: 'Белый тенсел', fr: 'Tencel blanc', ar: 'قماش تينسل أبيض', ja: ''
  },
  '白色弹力纱': {
    cn: '白色弹力纱', en: 'White elastic yarn', th: 'เส้นด้ายยางยืดสีขาว', vn: 'Sợi co giãn màu trắng', es: 'Hilo elástico blanco',
    pt: 'Fio elástico branco', id_lang: 'Benang elastis putih', ru: 'Белая эластичная пряжа', fr: 'Fil élastique blanc', ar: 'خيوط مطاطية بيضاء', ja: ''
  },
  '白色条纹': {
    cn: '白色条纹', en: 'White stripes', th: 'ลายทางสีขาว', vn: 'Sọc trắng', es: 'rayas blancas',
    pt: 'Listras brancas', id_lang: 'Garis-garis putih', ru: 'Белые полосы', fr: 'rayures blanches', ar: 'خطوط بيضاء', ja: ''
  },
  '白色条部位除外': {
    cn: '白色条部位除外', en: 'Except for the white striped areas', th: 'ยกเว้นบริเวณที่เป็นลายเส้นสีขาว', vn: 'Ngoại trừ các khu vực có sọc trắng.', es: 'Excepto las zonas con rayas blancas',
    pt: 'Exceto pelas áreas listradas de branco', id_lang: 'Kecuali area yang bergaris putih', ru: 'За исключением участков с белыми полосами.', fr: 'À l&#39;exception des zones à rayures blanches', ar: 'باستثناء المناطق ذات الخطوط البيضاء', ja: ''
  },
  '白色牛仔布': {
    cn: '白色牛仔布', en: 'White denim', th: 'กางเกงยีนส์สีขาว', vn: 'Quần jean trắng', es: 'Vaqueros blancos',
    pt: 'jeans branco', id_lang: 'Denim putih', ru: 'Белые джинсы', fr: 'Jean blanc', ar: 'جينز أبيض', ja: ''
  },
  '白色系': {
    cn: '白色系', en: 'White', th: 'สีขาว', vn: 'Trắng', es: 'Blanco',
    pt: 'Branco', id_lang: 'Putih', ru: 'Белый', fr: 'Blanc', ar: 'أبيض', ja: ''
  },
  '白色纱': {
    cn: '白色纱', en: 'White gauze', th: 'ผ้าก๊อซสีขาว', vn: 'Vải gạc trắng', es: 'Gasa blanca',
    pt: 'gaze branca', id_lang: 'Kain kasa putih', ru: 'Белая марля', fr: 'gaze blanche', ar: 'شاش أبيض', ja: ''
  },
  '白色绣线': {
    cn: '白色绣线', en: 'White embroidery thread', th: 'ด้ายปักสีขาว', vn: 'Chỉ thêu màu trắng', es: 'Hilo de bordar blanco',
    pt: 'Linha de bordar branca', id_lang: 'Benang bordir putih', ru: 'Белые вышивальные нити', fr: 'Fil à broder blanc', ar: 'خيط تطريز أبيض', ja: ''
  },
  '白色股纱': {
    cn: '白色股纱', en: 'White yarn', th: 'เส้นด้ายสีขาว', vn: 'Sợi len trắng', es: 'Hilo blanco',
    pt: 'Fio branco', id_lang: 'Benang putih', ru: 'Белая пряжа', fr: 'Fil blanc', ar: 'خيوط بيضاء', ja: ''
  },
  '白色部位除外': {
    cn: '白色部位除外', en: 'Except for the white parts', th: 'ยกเว้นส่วนที่เป็นสีขาว', vn: 'Ngoại trừ các phần màu trắng.', es: 'Excepto por las partes blancas',
    pt: 'Exceto pelas partes brancas', id_lang: 'Kecuali bagian yang berwarna putih', ru: 'За исключением белых частей', fr: 'À l&#39;exception des parties blanches', ar: 'باستثناء الأجزاء البيضاء', ja: ''
  },
  '白色里料': {
    cn: '白色里料', en: 'White lining', th: 'ซับในสีขาว', vn: 'Lớp lót màu trắng', es: 'Forro blanco',
    pt: 'Forro branco', id_lang: 'Lapisan putih', ru: 'Белая подкладка', fr: 'doublure blanche', ar: 'البطانة البيضاء', ja: ''
  },
  '白色长丝': {
    cn: '白色长丝', en: 'White filament', th: 'เส้นใยสีขาว', vn: 'Sợi trắng', es: 'Filamento blanco',
    pt: 'Filamento branco', id_lang: 'Filamen putih', ru: 'Белая нить', fr: 'filament blanc', ar: 'خيط أبيض', ja: ''
  },
  '白色面料': {
    cn: '白色面料', en: 'White fabric', th: 'ผ้าสีขาว', vn: 'Vải trắng', es: 'Tela blanca',
    pt: 'Tecido branco', id_lang: 'Kain putih', ru: 'Белая ткань', fr: 'Tissu blanc', ar: 'قماش أبيض', ja: ''
  },
  '白鸭绒': {
    cn: '白鸭绒', en: 'White Duck Down', th: 'ขนเป็ดขาว', vn: 'Lông vịt trắng', es: 'Plumón de pato blanco',
    pt: 'Penugem de pato branco', id_lang: 'Bulu bebek putih', ru: 'Белый утиный пух', fr: 'Duvet de canard blanc', ar: 'زغب البط الأبيض', ja: ''
  },
  '白鹅绒': {
    cn: '白鹅绒', en: 'White Goose Down', th: 'ขนห่านขาว', vn: 'Lông ngỗng trắng', es: 'Plumón de ganso blanco',
    pt: 'Penugem de ganso branco', id_lang: 'Bulu angsa putih', ru: 'Белый гусиный пух', fr: 'Duvet d\'oie blanc', ar: 'زغب الإوز الأبيض', ja: ''
  },
  '百棉': {
    cn: '百棉', en: 'Hundred Cotton', th: 'ร้อยคอตตอน', vn: 'Trăm Bông', es: 'Cien Algodón',
    pt: 'Cem Algodão', id_lang: 'Seratus Katun', ru: 'Сто хлопка', fr: 'Cent cotons', ar: 'مائة قطن', ja: ''
  },
  '的要求': {
    cn: '的要求', en: 'Requirements', th: 'ความต้องการ', vn: 'Yêu cầu', es: 'Requisitos',
    pt: 'Requisitos', id_lang: 'Persyaratan', ru: 'Требования', fr: 'Exigences', ar: 'متطلبات', ja: ''
  },
  '皮': {
    cn: '皮', en: 'Skin', th: 'ผิว', vn: 'Da', es: 'Piel',
    pt: 'Pele', id_lang: 'Kulit', ru: 'Кожа', fr: 'Peau', ar: 'جلد', ja: ''
  },
  '皮革': {
    cn: '皮革', en: 'Leather', th: 'หนัง', vn: 'Da', es: 'Cuero',
    pt: 'Couro', id_lang: 'Kulit', ru: 'Кожа', fr: 'Cuir', ar: 'جلد', ja: ''
  },
  '皱皱布': {
    cn: '皱皱布', en: 'wrinkled cloth', th: 'ผ้ายับย่น', vn: 'vải nhăn', es: 'tela arrugada',
    pt: 'pano amassado', id_lang: 'kain kusut', ru: 'мятая ткань', fr: 'tissu froissé', ar: 'قماش مجعد', ja: ''
  },
  '盐缩花料': {
    cn: '盐缩花料', en: 'Salt shrinkage material', th: 'วัสดุหดตัวจากเกลือ', vn: 'Vật liệu co ngót do muối', es: 'Material de contracción de sal',
    pt: 'Material de retração de sal', id_lang: 'Bahan penyusutan garam', ru: 'Материал, подверженный усадке соли', fr: 'matériau de retrait salin', ar: 'مادة انكماش الملح', ja: ''
  },
  '盐缩面料': {
    cn: '盐缩面料', en: 'Salt shrinkage fabric', th: 'ผ้าหดตัวจากเกลือ', vn: 'Vải co rút do muối', es: 'Tejido encogido por sal',
    pt: 'tecido que encolhe com sal', id_lang: 'Kain penyusutan garam', ru: 'Ткань, подверженная усадке под воздействием соли', fr: 'Tissu rétrécissant au sel', ar: 'قماش قابل للانكماش بالملح', ja: ''
  },
  '相拼面料': {
    cn: '相拼面料', en: 'Patchwork fabrics', th: 'ผ้าปะติดปะต่อ', vn: 'Vải chắp vá', es: 'Telas de patchwork',
    pt: 'Tecidos de patchwork', id_lang: 'Kain tambal sulam', ru: 'Лоскутные ткани', fr: 'tissus patchwork', ar: 'أقمشة مرقعة', ja: ''
  },
  '真丝': {
    cn: '真丝', en: 'Silk', th: 'ไหม', vn: 'Lụa', es: 'Seda',
    pt: 'Seda', id_lang: 'Sutra', ru: 'Шёлк', fr: 'Soie', ar: 'حرير', ja: ''
  },
  '真丝/蚕丝': {
    cn: '真丝/蚕丝', en: 'Silk', th: 'ผ้าไหม', vn: 'Lụa', es: 'Seda',
    pt: 'Seda', id_lang: 'Sutra', ru: 'Шелк', fr: 'Soie', ar: 'حرير', ja: ''
  },
  '真丝绒花料': {
    cn: '真丝绒花料', en: 'Silk velvet floral material', th: 'ผ้ากำมะหยี่ไหมลายดอกไม้', vn: 'Chất liệu nhung lụa họa tiết hoa', es: 'Material floral de terciopelo de seda',
    pt: 'Tecido floral de veludo de seda', id_lang: 'Bahan beludru sutra bermotif bunga', ru: 'Шелковый бархат с цветочным рисунком', fr: 'tissu à fleurs en velours de soie', ar: 'قماش مخملي حريري مزهر', ja: ''
  },
  '真毛皮': {
    cn: '真毛皮', en: 'Genuine Fur', th: 'ขนสัตว์แท้', vn: 'Lông thú thật', es: 'Piel genuina / Pelo',
    pt: 'Pele verdadeira', id_lang: 'Bulu asli', ru: 'Натуральный мех', fr: 'Fourrure véritable', ar: 'فرو طبيعي', ja: ''
  },
  '真皮': {
    cn: '真皮', en: 'Genuine Leather', th: 'หนังแท้', vn: 'Da thật', es: 'Piel genuina',
    pt: 'Couro genuíno', id_lang: 'Kulit asli', ru: 'Натуральная кожа', fr: 'cuir véritable', ar: 'جلدية حقيقية', ja: ''
  },
  '真皮/牛皮': {
    cn: '真皮/牛皮', en: 'Genuine Leather / Cowhide', th: 'หนังแท้ / หนังวัว', vn: 'Da thật / Da bò', es: 'Cuero genuino',
    pt: 'Couro genuíno', id_lang: 'Kulit asli', ru: 'Натуральная кожа', fr: 'Cuir véritable', ar: 'جلد طبيعي', ja: ''
  },
  '短袖休闲衬衫': {
    cn: '短袖休闲衬衫', en: 'Short-Sleeved Casual Shirt', th: 'เสื้อเชิ้ตลำลองแขนสั้น', vn: 'Áo Sơ Mi Thường Ngày Ngắn Tay', es: 'Camisa Casual De Manga Corta',
    pt: 'Camisa Casual De Manga Curta', id_lang: 'Kemeja Kasual Lengan Pendek', ru: 'Повседневная Рубашка С Короткими Рукавами', fr: 'Chemise Décontractée À Manches Courtes', ar: 'قميص كاجوال بأكمام قصيرة', ja: '半袖カジュアルシャツ'
  },
  '石英': {
    cn: '石英', en: 'quartz', th: 'ควอตซ์', vn: 'thạch anh', es: 'cuarzo',
    pt: 'quartzo', id_lang: 'kuarsa', ru: 'кварц', fr: 'quartz', ar: 'كوارتز', ja: ''
  },
  '砖红': {
    cn: '砖红', en: 'Brick Red', th: 'สีแดงอิฐ', vn: 'Màu đỏ gạch', es: 'Rojo ladrillo',
    pt: 'Vermelho tijolo', id_lang: 'Merah Bata', ru: 'Кирпично-красный', fr: 'Rouge brique', ar: 'أحمر طوبي', ja: ''
  },
  '砖红花纹': {
    cn: '砖红花纹', en: 'Brick red pattern', th: 'ลวดลายอิฐสีแดง', vn: 'Họa tiết màu đỏ gạch', es: 'Patrón rojo ladrillo',
    pt: 'Padrão vermelho tijolo', id_lang: 'Pola merah bata', ru: 'Кирпично-красный узор', fr: 'motif rouge brique', ar: 'نقش باللون الأحمر الطوبي', ja: ''
  },
  '砖红镶拼': {
    cn: '砖红镶拼', en: 'Brick Red Inlay', th: 'ฝังลายอิฐสีแดง', vn: 'Viền màu đỏ gạch', es: 'Incrustación de color rojo ladrillo',
    pt: 'Inlay vermelho tijolo', id_lang: 'Inlay Merah Bata', ru: 'Кирпично-красная вставка', fr: 'Incrustation rouge brique', ar: 'تطعيم باللون الأحمر الطوبي', ja: ''
  },
  '碧绿': {
    cn: '碧绿', en: 'Emerald green', th: 'สีเขียวมรกต', vn: 'màu xanh ngọc lục bảo', es: 'verde esmeralda',
    pt: 'Verde esmeralda', id_lang: 'Hijau zamrud', ru: 'Изумрудно-зеленый', fr: 'vert émeraude', ar: 'أخضر زمردي', ja: ''
  },
  '碳灰': {
    cn: '碳灰', en: 'Carbon ash', th: 'เถ้าคาร์บอน', vn: 'Tro cacbon', es: 'ceniza de carbono',
    pt: 'cinzas de carbono', id_lang: 'Abu karbon', ru: 'Углеродная зола', fr: 'Cendres de carbone', ar: 'رماد الكربون', ja: ''
  },
  '磨毛': {
    cn: '磨毛', en: 'brushing', th: 'การแปรงฟัน', vn: 'chải', es: 'cepillado',
    pt: 'escovação', id_lang: 'penyikatan', ru: 'чистка зубов', fr: 'brossage', ar: 'تنظيف الأسنان بالفرشاة', ja: ''
  },
  '磨毛布': {
    cn: '磨毛布', en: 'brushed fabric', th: 'ผ้าขัดเงา', vn: 'vải chải', es: 'tela cepillada',
    pt: 'tecido escovado', id_lang: 'kain yang disikat', ru: 'ворсистая ткань', fr: 'tissu brossé', ar: 'قماش مصقول', ja: ''
  },
  '磨砂牛皮': {
    cn: '磨砂牛皮', en: 'nubuck leather', th: 'หนังนูบัค', vn: 'da nubuck', es: 'cuero nobuk',
    pt: 'couro nobuck', id_lang: 'kulit nubuk', ru: 'нубуковая кожа', fr: 'cuir nubuck', ar: 'جلد نوبوك', ja: ''
  },
  '秋暮': {
    cn: '秋暮', en: 'Autumn Evening', th: 'ยามเย็นฤดูใบไม้ร่วง', vn: 'Buổi tối mùa thu', es: 'Tarde de otoño',
    pt: 'Noite de Outono', id_lang: 'Malam Musim Gugur', ru: 'Осенний вечер', fr: 'Soirée d&#39;automne', ar: 'أمسية خريفية', ja: ''
  },
  '移圈': {
    cn: '移圈', en: 'Shifting circles', th: 'วงกลมที่เคลื่อนที่', vn: 'Vòng tròn dịch chuyển', es: 'Círculos cambiantes',
    pt: 'círculos em movimento', id_lang: 'Lingkaran yang bergeser', ru: 'Сдвигающиеся круги', fr: 'Cercles changeants', ar: 'دوائر متغيرة', ja: ''
  },
  '移圈提花': {
    cn: '移圈提花', en: 'Jacquard with shift loop', th: 'แจ็กการ์ดพร้อมห่วงเลื่อน', vn: 'Jacquard với vòng lặp dịch chuyển', es: 'Jacquard con bucle de desplazamiento',
    pt: 'Jacquard com presilha para câmbio', id_lang: 'Jacquard dengan pengait geser', ru: 'Жаккард с петлей смещения', fr: 'Jacquard avec boucle de décalage', ar: 'نسيج جاكار مع حلقة تحويل', ja: ''
  },
  '空气层': {
    cn: '空气层', en: 'air layer', th: 'ชั้นอากาศ', vn: 'lớp không khí', es: 'capa de aire',
    pt: 'camada de ar', id_lang: 'lapisan udara', ru: 'воздушный слой', fr: 'couche d&#39;air', ar: 'طبقة الهواء', ja: ''
  },
  '空气层双面': {
    cn: '空气层双面', en: 'air layer double side', th: 'ชั้นอากาศสองด้าน', vn: 'lớp không khí hai mặt', es: 'capa de aire de doble cara',
    pt: 'camada de ar dupla face', id_lang: 'lapisan udara dua sisi', ru: 'воздушный слой, двусторонний', fr: 'couche d&#39;air double face', ar: 'طبقة هوائية مزدوجة الجوانب', ja: ''
  },
  '穿着前请洗涤': {
    cn: '穿着前请洗涤', en: 'Wash before wearing', th: 'ซักก่อนสวมใส่', vn: 'Giặt trước khi mặc', es: 'Lavar antes de usar',
    pt: 'Lavar antes de usar', id_lang: 'Cuci sebelum dipakai', ru: 'Постирать перед ноской', fr: 'Laver avant de porter', ar: 'يُغسل قبل اللبس', ja: ''
  },
  '窄花边': {
    cn: '窄花边', en: 'Narrow lace', th: 'ลูกไม้แคบ', vn: 'Ren mỏng', es: 'encaje estrecho',
    pt: 'renda estreita', id_lang: 'Renda sempit', ru: 'Узкое кружево', fr: 'dentelle étroite', ar: 'دانتيل ضيق', ja: ''
  },
  '竖条': {
    cn: '竖条', en: 'vertical strip', th: 'แถบแนวตั้ง', vn: 'dải dọc', es: 'franja vertical',
    pt: 'faixa vertical', id_lang: 'garis vertikal', ru: 'вертикальная полоса', fr: 'bande verticale', ar: 'شريط عمودي', ja: ''
  },
  '竖条双面': {
    cn: '竖条双面', en: 'Vertical stripes, double-sided', th: 'ลายทางแนวตั้ง สองด้าน', vn: 'Sọc dọc, hai mặt', es: 'Rayas verticales, doble cara',
    pt: 'Listras verticais, dupla face', id_lang: 'Garis vertikal, dua sisi', ru: 'Вертикальные полосы, двусторонние', fr: 'Rayures verticales, double face', ar: 'خطوط عمودية، مزدوجة الجوانب', ja: ''
  },
  '竖条提花': {
    cn: '竖条提花', en: 'Vertical stripe jacquard', th: 'ลายแจ็กการ์ดลายทางแนวตั้ง', vn: 'Vải jacquard sọc dọc', es: 'Jacquard de rayas verticales',
    pt: 'Jacquard com listras verticais', id_lang: 'Jacquard garis vertikal', ru: 'Жаккард с вертикальными полосами', fr: 'Jacquard à rayures verticales', ar: 'جاكار عمودي مقسم', ja: ''
  },
  '竖条提花单面布': {
    cn: '竖条提花单面布', en: 'Vertical striped jacquard single-sided fabric', th: 'ผ้าแจ็กการ์ดลายทางแนวตั้งด้านเดียว', vn: 'Vải jacquard một mặt kẻ sọc dọc', es: 'Tejido jacquard de rayas verticales de una sola cara',
    pt: 'Tecido jacquard com listras verticais em um só lado', id_lang: 'Kain jacquard bergaris vertikal satu sisi', ru: 'Односторонняя жаккардовая ткань с вертикальными полосами', fr: 'Tissu jacquard à rayures verticales simple face', ar: 'قماش جاكار مخطط عموديًا من جانب واحد', ja: ''
  },
  '竖条波纹': {
    cn: '竖条波纹', en: 'Vertical wavy lines', th: 'เส้นหยักแนวตั้ง', vn: 'Đường lượn sóng dọc', es: 'líneas onduladas verticales',
    pt: 'Linhas onduladas verticais', id_lang: 'garis bergelombang vertikal', ru: 'Вертикальные волнистые линии', fr: 'Lignes ondulées verticales', ar: 'خطوط متموجة عمودية', ja: ''
  },
  '竖条纹': {
    cn: '竖条纹', en: 'Vertical stripes', th: 'ลายทางแนวตั้ง', vn: 'Sọc dọc', es: 'rayas verticales',
    pt: 'Listras verticais', id_lang: 'Garis vertikal', ru: 'Вертикальные полосы', fr: 'rayures verticales', ar: 'الخطوط العمودية', ja: ''
  },
  '竖条肌理': {
    cn: '竖条肌理', en: 'Vertical stripe texture', th: 'ลวดลายเส้นแนวตั้ง', vn: 'Kết cấu sọc dọc', es: 'Textura de rayas verticales',
    pt: 'Textura de listras verticais', id_lang: 'Tekstur garis vertikal', ru: 'Текстура в виде вертикальных полос', fr: 'texture à rayures verticales', ar: 'نسيج شريطي عمودي', ja: ''
  },
  '竖纹': {
    cn: '竖纹', en: 'Vertical stripes', th: 'ลายทางแนวตั้ง', vn: 'Sọc dọc', es: 'rayas verticales',
    pt: 'Listras verticais', id_lang: 'Garis vertikal', ru: 'Вертикальные полосы', fr: 'rayures verticales', ar: 'الخطوط العمودية', ja: ''
  },
  '竖纹提花': {
    cn: '竖纹提花', en: 'Vertical stripe jacquard', th: 'ลายแจ็กการ์ดลายทางแนวตั้ง', vn: 'Vải jacquard sọc dọc', es: 'Jacquard de rayas verticales',
    pt: 'Jacquard com listras verticais', id_lang: 'Jacquard garis vertikal', ru: 'Жаккард с вертикальными полосами', fr: 'Jacquard à rayures verticales', ar: 'جاكار عمودي مقسم', ja: ''
  },
  '竖纹空气层': {
    cn: '竖纹空气层', en: 'Vertical striped air layer', th: 'ชั้นอากาศลายทางแนวตั้ง', vn: 'lớp không khí sọc dọc', es: 'capa de aire con rayas verticales',
    pt: 'Camada de ar listrada vertical', id_lang: 'lapisan udara bergaris vertikal', ru: 'Вертикальный полосатый слой воздуха', fr: 'couche d&#39;air à rayures verticales', ar: 'طبقة هوائية مخططة عمودياً', ja: ''
  },
  '童装中号(Kids M)': {
    cn: '童装中号(Kids M)', en: 'Kids M', th: 'ไซส์เด็ก (M)', vn: 'Trẻ em cỡ M', es: 'Niños Talla M',
    pt: 'Infantil Tamanho M', id_lang: 'Anak-anak M', ru: 'Детский размер M', fr: 'Enfant Taille M', ar: 'أطفال مقاس M', ja: ''
  },
  '童装大号(Kids L)': {
    cn: '童装大号(Kids L)', en: 'Kids L', th: 'ไซส์เด็ก (L)', vn: 'Trẻ em cỡ L', es: 'Niños Talla L',
    pt: 'Infantil Tamanho L', id_lang: 'Anak-anak L', ru: 'Детский размер L', fr: 'Enfant Taille L', ar: 'أطفال مقاس L', ja: ''
  },
  '童装小号(Kids S)': {
    cn: '童装小号(Kids S)', en: 'Kids S', th: 'ไซส์เด็ก (S)', vn: 'Trẻ em cỡ S', es: 'Niños Talla S',
    pt: 'Infantil Tamanho S', id_lang: 'Anak-anak S', ru: 'Детский размер S', fr: 'Enfant Taille S', ar: 'أطفال مقاس S', ja: ''
  },
  '竹子印花面料': {
    cn: '竹子印花面料', en: 'Bamboo Printed Fabric', th: 'ผ้าพิมพ์ลายไม้ไผ่', vn: 'Vải in hình tre', es: 'Tela estampada de bambú',
    pt: 'Tecido com estampa de bambu', id_lang: 'Kain Bermotif Bambu', ru: 'Ткань с бамбуковым принтом', fr: 'Tissu imprimé en bambou', ar: 'قماش مطبوع عليه صورة من الخيزران', ja: ''
  },
  '竹浆': {
    cn: '竹浆', en: 'Bamboo pulp', th: 'เยื่อไม้ไผ่', vn: 'Bột tre', es: 'pulpa de bambú',
    pt: 'Polpa de bambu', id_lang: 'Bubur bambu', ru: 'Бамбуковая мякоть', fr: 'pulpe de bambou', ar: 'لب الخيزران', ja: ''
  },
  '竹浆纤维': {
    cn: '竹浆纤维', en: 'bamboo pulp fiber', th: 'เส้นใยเยื่อไม้ไผ่', vn: 'sợi bột tre', es: 'fibra de pulpa de bambú',
    pt: 'fibra de polpa de bambu', id_lang: 'serat pulp bambu', ru: 'бамбуковое целлюлозное волокно', fr: 'fibres de pulpe de bambou', ar: 'لب الخيزران', ja: ''
  },
  '竹纤维': {
    cn: '竹纤维', en: 'bamboo fiber', th: 'เส้นใยไม้ไผ่', vn: 'sợi tre', es: 'fibra de bambú',
    pt: 'fibra de bambu', id_lang: 'serat bambu', ru: 'бамбуковое волокно', fr: 'fibre de bambou', ar: 'ألياف الخيزران', ja: ''
  },
  '竹节': {
    cn: '竹节', en: 'Bamboo joint', th: 'ข้อต่อไม้ไผ่', vn: 'Khớp tre', es: 'Junta de bambú',
    pt: 'Junção de bambu', id_lang: 'Sambungan bambu', ru: 'Бамбуковый лафет', fr: 'joint en bambou', ar: 'وصلة من الخيزران', ja: ''
  },
  '竹节棉': {
    cn: '竹节棉', en: 'Bamboo cotton', th: 'ผ้าฝ้ายไผ่', vn: 'Bông tre', es: 'Algodón de bambú',
    pt: 'Algodão de bambu', id_lang: 'Katun bambu', ru: 'бамбуковый хлопок', fr: 'Coton de bambou', ar: 'قطن الخيزران', ja: ''
  },
  '竹节棉平纹': {
    cn: '竹节棉平纹', en: 'Slub cotton plain weave', th: 'ผ้าฝ้ายสลัปทอธรรมดา', vn: 'Vải cotton thô dệt trơn', es: 'Tejido liso de algodón flameado',
    pt: 'Tecido plano de algodão slub', id_lang: 'Katun slub tenun polos', ru: 'Хлопок с неоднородной текстурой, простое переплетение.', fr: 'armure toile en coton flammé', ar: 'نسيج قطني عادي من نوع سلوب', ja: ''
  },
  '符合': {
    cn: '符合', en: 'conform to', th: 'สอดคล้องกับ', vn: 'tuân theo', es: 'ajustarse a',
    pt: 'conformar-se a', id_lang: 'sesuai dengan', ru: 'соответствовать', fr: 'se conformer à', ar: 'الالتزام بـ', ja: ''
  },
  '符合标准': {
    cn: '符合标准', en: 'Complies with Standards', th: 'เป็นไปตามมาตรฐาน', vn: 'Phù hợp tiêu chuẩn', es: 'Cumple con las normas',
    pt: 'Em conformidade com as normas', id_lang: 'Memenuhi standar', ru: 'Соответствует стандартам', fr: 'Conforme aux normes', ar: 'مطابق للمعايير', ja: ''
  },
  '筠雾': {
    cn: '筠雾', en: 'Yunwu', th: 'หยุนหวู่', vn: 'Vân Vũ', es: 'yunwu',
    pt: 'Yunwu', id_lang: 'Yunwu', ru: 'Юну', fr: 'Yunwu', ar: 'يونوو', ja: ''
  },
  '米杏': {
    cn: '米杏', en: 'Mi Xing', th: 'หมี่ซิง', vn: 'Mi Xing', es: 'Mi Xing',
    pt: 'Mi Xing', id_lang: 'Mi Xing', ru: 'Ми Син', fr: 'Mi Xing', ar: 'مي شينغ', ja: ''
  },
  '米杏条纹': {
    cn: '米杏条纹', en: 'Beige stripes', th: 'ลายทางสีเบจ', vn: 'Sọc màu be', es: 'rayas beige',
    pt: 'Listras bege', id_lang: 'Garis-garis krem', ru: 'Бежевые полосы', fr: 'rayures beiges', ar: 'مخطط بيج', ja: ''
  },
  '米杏格纹': {
    cn: '米杏格纹', en: 'Beige plaid', th: 'ลายตารางสีเบจ', vn: 'kẻ caro màu be', es: 'Cuadros beige',
    pt: 'Xadrez bege', id_lang: 'Kotak-kotak krem', ru: 'Бежевая клетка', fr: 'à carreaux beiges', ar: 'كاروهات بيج', ja: ''
  },
  '米杏渐变': {
    cn: '米杏渐变', en: 'Gradient of Apricot', th: 'ไล่ระดับสีแอปริคอต', vn: 'Màu mơ chuyển sắc', es: 'Degradado de albaricoque',
    pt: 'Gradiente de Damasco', id_lang: 'Gradien Aprikot', ru: 'Абрикосовый градиент', fr: 'Dégradé abricot', ar: 'تدرج المشمش', ja: ''
  },
  '米杏色': {
    cn: '米杏色', en: 'Beige color', th: 'สีเบจ', vn: 'Màu be', es: 'Color beige',
    pt: 'Cor bege', id_lang: 'Warna krem', ru: 'Бежевый цвет', fr: 'couleur beige', ar: 'اللون البيج', ja: ''
  },
  '米杏花纹': {
    cn: '米杏花纹', en: 'Rice and apricot pattern', th: 'ลวดลายข้าวและแอปริคอต', vn: 'Họa tiết gạo và mơ', es: 'Patrón de arroz y albaricoque',
    pt: 'Padrão de arroz e damasco', id_lang: 'Pola nasi dan aprikot', ru: 'Узор из риса и абрикоса', fr: 'Motif riz et abricot', ar: 'نقش الأرز والمشمش', ja: ''
  },
  '米杏镶拼': {
    cn: '米杏镶拼', en: 'Mi Xing Inlay', th: 'มิ ซิง อินเลย์', vn: 'Mi Xing Inlay', es: 'Incrustaciones Mi Xing',
    pt: 'Mi Xing Inlay', id_lang: 'Mi Xing Inlay', ru: 'Вставка Ми Син', fr: 'Incrustation Mi Xing', ar: 'تطعيم مي شينغ', ja: ''
  },
  '米白': {
    cn: '米白', en: 'off-white', th: 'สีขาวนวล', vn: 'màu trắng ngà', es: 'blanquecino',
    pt: 'off white', id_lang: 'putih pucat', ru: 'от белого', fr: 'blanc cassé', ar: 'أبيض مائل للبيج', ja: ''
  },
  '米白条纹': {
    cn: '米白条纹', en: 'off-white stripes', th: 'ลายทางสีขาวนวล', vn: 'sọc màu trắng nhạt', es: 'rayas blanquecinas',
    pt: 'listras branco-sujas', id_lang: 'garis-garis putih pucat', ru: 'полосы кремового цвета', fr: 'rayures blanc cassé', ar: 'خطوط بيضاء مائلة للصفرة', ja: ''
  },
  '米白格纹': {
    cn: '米白格纹', en: 'off-white checkered pattern', th: 'ลายตารางหมากรุกสีขาวนวล', vn: 'họa tiết caro màu trắng nhạt', es: 'patrón a cuadros blanquecino',
    pt: 'padrão xadrez branco-sujo', id_lang: 'pola kotak-kotak putih gading', ru: 'клетчатый узор кремового цвета', fr: 'motif à carreaux blanc cassé', ar: 'نمط مربعات أبيض مائل للبيج', ja: ''
  },
  '米白渐变': {
    cn: '米白渐变', en: 'Off-white gradient', th: 'การไล่ระดับสีขาวนวล', vn: 'Màu chuyển sắc trắng nhạt', es: 'Degradado blanquecino',
    pt: 'Gradiente branco-sujo', id_lang: 'Gradien putih pucat', ru: 'Градиент белого цвета', fr: 'Dégradé blanc cassé', ar: 'تدرج لوني أبيض مائل للصفرة', ja: ''
  },
  '米白色': {
    cn: '米白色', en: 'off white', th: 'สีขาวนวล', vn: 'màu trắng nhạt', es: 'blanquecino',
    pt: 'off white', id_lang: 'putih pucat', ru: 'от белого', fr: 'blanc cassé', ar: 'أبيض مائل للبيج', ja: ''
  },
  '米白色股纱': {
    cn: '米白色股纱', en: 'off-white yarn', th: 'เส้นด้ายสีขาวนวล', vn: 'sợi màu trắng ngà', es: 'hilo blanquecino',
    pt: 'fio branco-sujo', id_lang: 'benang putih pucat', ru: 'пряжа кремового цвета', fr: 'fil blanc cassé', ar: 'خيوط بيضاء مائلة للصفرة', ja: ''
  },
  '米白色长丝': {
    cn: '米白色长丝', en: 'Off-white long silk', th: 'ผ้าไหมสีขาวนวลยาว', vn: 'lụa dài màu trắng ngà', es: 'Seda larga de color blanco roto',
    pt: 'seda longa cor de creme', id_lang: 'Sutra panjang berwarna putih gading', ru: 'Длинный шелк кремового цвета', fr: 'soie longue blanc cassé', ar: 'حرير طويل بلون أبيض مائل للبيج', ja: ''
  },
  '米白色长毛纱': {
    cn: '米白色长毛纱', en: 'off-white long-haired yarn', th: 'เส้นด้ายขนยาวสีขาวนวล', vn: 'sợi len dài màu trắng ngà', es: 'hilo de pelo largo de color blanco roto',
    pt: 'fio de pelo comprido branco-sujo', id_lang: 'benang berbulu panjang berwarna putih gading', ru: 'пряжа кремового цвета с длинным ворсом', fr: 'laine à poils longs blanc cassé', ar: 'خيوط طويلة الشعر بلون أبيض مائل للصفرة', ja: ''
  },
  '米白花纹': {
    cn: '米白花纹', en: 'off-white pattern', th: 'ลวดลายสีขาวนวล', vn: 'họa tiết màu trắng ngà', es: 'patrón blanquecino',
    pt: 'padrão branco-sujo', id_lang: 'pola putih pucat', ru: 'узор кремового цвета', fr: 'motif blanc cassé', ar: 'نقش أبيض مائل للبيج', ja: ''
  },
  '米白里布': {
    cn: '米白里布', en: 'Off-white lining', th: 'ซับในสีขาวนวล', vn: 'Lớp lót màu trắng ngà', es: 'Forro de color blanco roto',
    pt: 'Forro branco-sujo', id_lang: 'Lapisan dalam berwarna putih gading', ru: 'Подкладка кремового цвета', fr: 'Doublure blanc cassé', ar: 'بطانة بيضاء مائلة للبيج', ja: ''
  },
  '米白里料': {
    cn: '米白里料', en: 'off-white lining', th: 'ซับในสีขาวนวล', vn: 'lớp lót màu trắng ngà', es: 'forro blanquecino',
    pt: 'forro branco-sujo', id_lang: 'lapisan berwarna putih gading', ru: 'подкладка кремового цвета', fr: 'doublure blanc cassé', ar: 'بطانة بيضاء مائلة للبيج', ja: ''
  },
  '米白镶拼': {
    cn: '米白镶拼', en: 'off-white inlaid', th: 'ฝังสีขาวนวล', vn: 'khảm màu trắng ngà', es: 'incrustaciones de color blanco roto',
    pt: 'embutido branco-sujo', id_lang: 'bertatahkan putih pucat', ru: 'вставка кремового цвета', fr: 'incrustation blanc cassé', ar: 'مطعم بلون أبيض مائل للصفرة', ja: ''
  },
  '米白面料': {
    cn: '米白面料', en: 'off-white fabric', th: 'ผ้าสีขาวนวล', vn: 'vải màu trắng ngà', es: 'tela blanquecina',
    pt: 'tecido branco-sujo', id_lang: 'kain putih gading', ru: 'ткань кремового цвета', fr: 'tissu blanc cassé', ar: 'قماش أبيض مائل للبيج', ja: ''
  },
  '米红条部位': {
    cn: '米红条部位', en: 'Red stripe area', th: 'บริเวณแถบสีแดง', vn: 'Vùng sọc đỏ', es: 'zona de franja roja',
    pt: 'Área da faixa vermelha', id_lang: 'Area garis merah', ru: 'Красная полоса', fr: 'Zone à rayures rouges', ar: 'منطقة ريدبس', ja: ''
  },
  '米色': {
    cn: '米色', en: 'Beige', th: 'สีเบจ', vn: 'Be', es: 'Beige',
    pt: 'Bege', id_lang: 'Krem', ru: 'Бежевый', fr: 'Beige', ar: 'البيج', ja: ''
  },
  '米色纱': {
    cn: '米色纱', en: 'Beige yarn', th: 'เส้นด้ายสีเบจ', vn: 'Sợi màu be', es: 'Hilo beige',
    pt: 'Fio bege', id_lang: 'Benang krem', ru: 'Бежевая пряжа', fr: 'Fil beige', ar: 'خيوط بيج', ja: ''
  },
  '米色绣花面料': {
    cn: '米色绣花面料', en: 'Beige embroidered fabric', th: 'ผ้าปักสีเบจ', vn: 'Vải thêu màu be', es: 'Tela bordada color beige',
    pt: 'Tecido bordado bege', id_lang: 'Kain bordir berwarna krem', ru: 'Бежевая вышитая ткань', fr: 'tissu brodé beige', ar: 'قماش مطرز بيج', ja: ''
  },
  '米色部位': {
    cn: '米色部位', en: 'beige area', th: 'พื้นที่สีเบจ', vn: 'vùng màu be', es: 'zona beige',
    pt: 'área bege', id_lang: 'area krem', ru: 'бежевая область', fr: 'zone beige', ar: 'منطقة بيج', ja: ''
  },
  '米色面料': {
    cn: '米色面料', en: 'beige fabric', th: 'ผ้าสีเบจ', vn: 'vải màu be', es: 'tela beige',
    pt: 'tecido bege', id_lang: 'kain krem', ru: 'бежевая ткань', fr: 'tissu beige', ar: 'قماش بيج', ja: ''
  },
  '米金': {
    cn: '米金', en: 'Mijin', th: 'มิจิน', vn: 'Mijin', es: 'Mijin',
    pt: 'Mijin', id_lang: 'Mijin', ru: 'Миджин', fr: 'Mijin', ar: 'ميجين', ja: ''
  },
  '米金面料': {
    cn: '米金面料', en: 'Gold-colored fabric', th: 'ผ้าสีทอง', vn: 'Vải màu vàng', es: 'Tela color oro',
    pt: 'Tecido cor de ouro', id_lang: 'Kain berwarna emas', ru: 'Ткань золотистого цвета', fr: 'Tissu de couleur or', ar: 'قماش ذهبي اللون', ja: ''
  },
  '米黄': {
    cn: '米黄', en: 'Beige', th: 'สีเบจ', vn: 'Be', es: 'Beige',
    pt: 'Bege', id_lang: 'Krem', ru: 'Бежевый', fr: 'Beige', ar: 'البيج', ja: ''
  },
  '米黄花纹': {
    cn: '米黄花纹', en: 'Beige pattern', th: 'ลายสีเบจ', vn: 'Họa tiết màu be', es: 'Estampado beige',
    pt: 'Padrão bege', id_lang: 'Pola krem', ru: 'Бежевый узор', fr: 'Motif beige', ar: 'نقش بيج', ja: ''
  },
  '米黄镶拼': {
    cn: '米黄镶拼', en: 'Beige inlaid', th: 'ฝังสีเบจ', vn: 'chắp vá màu be', es: 'Incrustaciones de color beige',
    pt: 'Bege com incrustações', id_lang: 'Tambal sulam krem', ru: 'Бежевый лоскутный узор', fr: 'incrustation beige', ar: 'مرقع بيج', ja: ''
  },
  '米黄面料': {
    cn: '米黄面料', en: 'Beige fabric', th: 'ผ้าสีเบจ', vn: 'Vải màu be', es: 'Tela beige',
    pt: 'Tecido bege', id_lang: 'Kain krem', ru: 'Бежевая ткань', fr: 'Tissu beige', ar: 'قماش بيج', ja: ''
  },
  '类目': {
    cn: '类目', en: 'Category', th: 'หมวดหมู่', vn: 'Danh mục', es: 'Categoría',
    pt: 'Categoria', id_lang: 'Kategori', ru: 'Категория', fr: 'Catégorie', ar: 'الفئة', ja: ''
  },
  '粉白格面料': {
    cn: '粉白格面料', en: 'Pink and white checkered fabric', th: 'ผ้าลายตารางหมากรุกสีชมพูและขาว', vn: 'Vải kẻ caro hồng và trắng', es: 'Tela a cuadros rosas y blancos',
    pt: 'Tecido xadrez rosa e branco', id_lang: 'Kain kotak-kotak merah muda dan putih', ru: 'Ткань в розово-белую клетку', fr: 'tissu à carreaux roses et blancs', ar: 'قماش مربعات وردي وأبيض', ja: ''
  },
  '粉紫': {
    cn: '粉紫', en: 'pinkish purple', th: 'สีม่วงอมชมพู', vn: 'màu tím hồng', es: 'morado rosado',
    pt: 'roxo rosado', id_lang: 'ungu kemerahan', ru: 'розовато-фиолетовый', fr: 'rose violet', ar: 'وردي بنفسجي', ja: ''
  },
  '粉紫渐变': {
    cn: '粉紫渐变', en: 'Pinkish-purple gradient', th: 'ไล่ระดับสีชมพูม่วง', vn: 'Màu chuyển sắc hồng tím', es: 'Degradado rosa púrpura',
    pt: 'Gradiente rosa-arroxeado', id_lang: 'Gradien ungu kemerahan', ru: 'Розово-фиолетовый градиент', fr: 'Dégradé rose-violet', ar: 'تدرج لوني وردي بنفسجي', ja: ''
  },
  '粉红': {
    cn: '粉红', en: 'pink', th: 'สีชมพู', vn: 'hồng', es: 'rosa',
    pt: 'rosa', id_lang: 'berwarna merah muda', ru: 'розовый', fr: 'rose', ar: 'لون القرنفل', ja: ''
  },
  '粉红斜纹': {
    cn: '粉红斜纹', en: 'Pink Twill', th: 'ผ้าทวิลล์สีชมพู', vn: 'Vải chéo màu hồng', es: 'Sarga rosa',
    pt: 'Sarja rosa', id_lang: 'Kain kepar merah muda', ru: 'Розовая саржа', fr: 'Sergé rose', ar: 'قماش وردي مضلع', ja: ''
  },
  '粉红条纹': {
    cn: '粉红条纹', en: 'Pink stripes', th: 'ลายทางสีชมพู', vn: 'Sọc hồng', es: 'rayas rosas',
    pt: 'Listras rosa', id_lang: 'Garis-garis merah muda', ru: 'Розовые полосы', fr: 'rayures roses', ar: 'شرائط وردية', ja: ''
  },
  '粉红格纹': {
    cn: '粉红格纹', en: 'pink plaid', th: 'ลายสก็อตสีชมพู', vn: 'kẻ sọc hồng', es: 'cuadros rosas',
    pt: 'xadrez rosa', id_lang: 'kotak-kotak merah muda', ru: 'розовая клетка', fr: 'carreaux roses', ar: 'كاروهات وردية', ja: ''
  },
  '粉红渐变': {
    cn: '粉红渐变', en: 'Pink gradient', th: 'สีชมพูไล่ระดับ', vn: 'Màu hồng chuyển sắc', es: 'Degradado rosa',
    pt: 'Gradiente rosa', id_lang: 'Gradien merah muda', ru: 'Розовый градиент', fr: 'Dégradé rose', ar: 'متدرج وردي', ja: ''
  },
  '粉红花纹': {
    cn: '粉红花纹', en: 'Pink floral pattern', th: 'ลายดอกไม้สีชมพู', vn: 'Họa tiết hoa màu hồng', es: 'Estampado floral rosa',
    pt: 'Estampa floral rosa', id_lang: 'Pola bunga berwarna merah muda', ru: 'Розовый цветочный узор', fr: 'Motif floral rose', ar: 'نقش زهري وردي', ja: ''
  },
  '粉红镶拼': {
    cn: '粉红镶拼', en: 'Pink patchwork', th: 'ผ้าปะติดสีชมพู', vn: 'chắp vá màu hồng', es: 'mosaico rosa',
    pt: 'Retalhos rosa', id_lang: 'Patchwork merah muda', ru: 'Розовое лоскутное одеяло', fr: 'patchwork rose', ar: 'رقعة وردية', ja: ''
  },
  '粉色': {
    cn: '粉色', en: 'pink', th: 'สีชมพู', vn: 'hồng', es: 'rosa',
    pt: 'rosa', id_lang: 'berwarna merah muda', ru: 'розовый', fr: 'rose', ar: 'لون القرنفل', ja: ''
  },
  '粉色面料': {
    cn: '粉色面料', en: 'pink fabric', th: 'ผ้าสีชมพู', vn: 'vải màu hồng', es: 'tela rosa',
    pt: 'tecido rosa', id_lang: 'kain merah muda', ru: 'розовая ткань', fr: 'tissu rose', ar: 'قماش وردي', ja: ''
  },
  '粉蓝': {
    cn: '粉蓝', en: 'Powder Blue', th: 'สีฟ้าอ่อน', vn: 'Màu xanh nhạt', es: 'Azul pálido',
    pt: 'Azul Pó', id_lang: 'Biru Muda', ru: 'Светло-голубой', fr: 'Bleu poudre', ar: 'أزرق فاتح', ja: ''
  },
  '粗白纱': {
    cn: '粗白纱', en: 'Coarse white yarn', th: 'เส้นด้ายสีขาวหยาบ', vn: 'Sợi trắng thô', es: 'Hilo blanco grueso',
    pt: 'Fio branco grosso', id_lang: 'Benang putih kasar', ru: 'Грубая белая пряжа', fr: 'Fil blanc grossier', ar: 'خيوط بيضاء خشنة', ja: ''
  },
  '粗纺': {
    cn: '粗纺', en: 'coarse spinning', th: 'การปั่นหยาบ', vn: 'quay thô', es: 'hilado grueso',
    pt: 'fiação grosseira', id_lang: 'pemintalan kasar', ru: 'грубое прядение', fr: 'filage grossier', ar: 'الغزل الخشن', ja: ''
  },
  '粘合衬除外': {
    cn: '粘合衬除外', en: 'Except for fusible interlining', th: 'ยกเว้นซับในที่หลอมละลายได้', vn: 'Ngoại trừ lớp lót có thể ép nhiệt.', es: 'Excepto para entretela termoadhesiva',
    pt: 'Exceto para entretela termocolante', id_lang: 'Kecuali lapisan dalam yang dapat dilebur', ru: 'За исключением клеевой прокладки', fr: 'À l&#39;exception de l&#39;entoilage thermocollant', ar: 'باستثناء الحشوات القابلة للصهر', ja: ''
  },
  '粘纤': {
    cn: '粘纤', en: 'Viscose', th: 'วิสโคส', vn: 'Viscose', es: 'Viscosa',
    pt: 'Viscose', id_lang: 'Viskosa', ru: 'Вискоза', fr: 'Viscose', ar: 'فسكوزي', ja: ''
  },
  '粘纤/人造丝': {
    cn: '粘纤/人造丝', en: 'Viscose / Rayon', th: 'เรยอน / วิสโคส', vn: 'Viscose / Rayon', es: 'Viscosa / Rayón',
    pt: 'Viscose / Rayon', id_lang: 'Viskosa / Rayon', ru: 'Вискоза', fr: 'Viscose', ar: 'فيسكوز / رايون', ja: ''
  },
  '粘纤纤维': {
    cn: '粘纤纤维', en: 'Viscose fiber', th: 'เส้นใยวิสโคส', vn: 'Sợi viscose', es: 'Fibra de viscosa',
    pt: 'Fibra de viscose', id_lang: 'Serat viskosa', ru: 'Вискозное волокно', fr: 'Fibre de viscose', ar: 'ألياف الفسكوز', ja: ''
  },
  '粘胶': {
    cn: '粘胶', en: 'adhesive', th: 'กาว', vn: 'keo dán', es: 'adhesivo',
    pt: 'adesivo', id_lang: 'perekat', ru: 'клей', fr: 'adhésif', ar: 'لاصق', ja: ''
  },
  '粘胶纤维': {
    cn: '粘胶纤维', en: 'viscose fiber', th: 'เส้นใยวิสโคส', vn: 'sợi viscose', es: 'fibra de viscosa',
    pt: 'fibra de viscose', id_lang: 'serat viskosa', ru: 'вискозное волокно', fr: 'fibre de viscose', ar: 'ألياف الفسكوز', ja: ''
  },
  '粘衬除外': {
    cn: '粘衬除外', en: 'Except for lining', th: 'ยกเว้นส่วนที่เป็นกาวด้านหลัง', vn: 'Ngoại trừ lớp lót', es: 'Excepto por el revestimiento',
    pt: 'Exceto pelo forro', id_lang: 'Kecuali lapisan dalam', ru: 'За исключением подкладки', fr: 'À l&#39;exception de la doublure', ar: 'باستثناء البطانة', ja: ''
  },
  '精梳棉': {
    cn: '精梳棉', en: 'combed cotton', th: 'ฝ้ายหวี', vn: 'bông chải', es: 'algodón peinado',
    pt: 'algodão penteado', id_lang: 'kapas sisir', ru: 'чесаный хлопок', fr: 'coton peigné', ar: 'قطن ممشط', ja: ''
  },
  '精梳棉紧密纺': {
    cn: '精梳棉紧密纺', en: 'Combed cotton compact spinning', th: 'ฝ้ายหวีปั่นแน่น', vn: 'Sợi bông chải kỹ được kéo sợi nhỏ gọn', es: 'Hilado compacto de algodón peinado',
    pt: 'fiação compacta de algodão penteado', id_lang: 'Pemintalan kapas sisir padat', ru: 'Компактная прядильная машина для чесаного хлопка', fr: 'filage compact du coton peigné', ar: 'غزل القطن الممشط المضغوط', ja: ''
  },
  '精纺': {
    cn: '精纺', en: 'Worsted spinning', th: 'การปั่นด้ายขนสัตว์', vn: 'Sợi len dệt', es: 'Hilo de lana peinada',
    pt: 'Fiação de lã penteada', id_lang: 'Benang wol', ru: 'Камвольная пряжа', fr: 'filage de laine peignée', ar: 'غزل الصوف', ja: ''
  },
  '精纺纱': {
    cn: '精纺纱', en: 'Worsted yarn', th: 'เส้นด้ายวูล', vn: 'Sợi len Worsted', es: 'Hilo de lana peinada',
    pt: 'Fio de lã penteada', id_lang: 'Benang wol', ru: 'Камвольная пряжа', fr: 'Laine peignée', ar: 'خيوط صوفية', ja: ''
  },
  '精纺羊毛': {
    cn: '精纺羊毛', en: 'Worsted wool', th: 'ขนแกะวอร์สเต็ด', vn: 'Len Worsted', es: 'Lana peinada',
    pt: 'Lã penteada', id_lang: 'Wol worsted', ru: 'камвольная шерсть', fr: 'Laine peignée', ar: 'صوف ممشط', ja: ''
  },
  '索罗你': {
    cn: '索罗你', en: 'Solo', th: 'โซโล', vn: 'Độc lập', es: 'Solo',
    pt: 'Solo', id_lang: 'Solo', ru: 'Соло', fr: 'Solo', ar: 'منفرد', ja: ''
  },
  '索罗娜罗马布': {
    cn: '索罗娜罗马布', en: 'Sorona Romabu', th: 'โซโรนา โรมาบู', vn: 'Sorona Romabu', es: 'Sorona Romabu',
    pt: 'Sorona Romabu', id_lang: 'Sorona Romabu', ru: 'Сорона Ромабу', fr: 'Sorona Romabu', ar: 'سورونا رومابو', ja: ''
  },
  '索罗拉威化布': {
    cn: '索罗拉威化布', en: 'Sorolla Wafer Cloth', th: 'ผ้าเวเฟอร์โซโรลลา', vn: 'Vải wafer Sorolla', es: 'Paño de oblea Sorolla',
    pt: 'Tecido de hóstia Sorolla', id_lang: 'Kain Wafer Sorolla', ru: 'Ткань для вафель Соролла', fr: 'Tissu de gaufrette Sorolla', ar: 'قماش رقائق سورولا', ja: ''
  },
  '索罗纳罗马': {
    cn: '索罗纳罗马', en: 'Solona Roma', th: 'โซโลนา โรม่า', vn: 'Solona Roma', es: 'Solona Roma',
    pt: 'Solona Roma', id_lang: 'Solona Roma', ru: 'Солона Рома', fr: 'Solona Roma', ar: 'سولونا روما', ja: ''
  },
  '索罗那': {
    cn: '索罗那', en: 'Solona', th: 'โซโลน่า', vn: 'Solona', es: 'Solana',
    pt: 'Solona', id_lang: 'Solona', ru: 'Солона', fr: 'Solona', ar: 'سولونا', ja: ''
  },
  '索罗那提花': {
    cn: '索罗那提花', en: 'Solonati Flower', th: 'ดอกไม้โซโลนาติ', vn: 'Hoa Solonati', es: 'Flor de Solonati',
    pt: 'Flor Solonati', id_lang: 'Bunga Solonati', ru: 'Цветок Солонати', fr: 'Fleur de Solonati', ar: 'زهرة سولوناتي', ja: ''
  },
  '紫灰': {
    cn: '紫灰', en: 'Purple-gray', th: 'สีม่วงเทา', vn: 'Tím xám', es: 'Gris púrpura',
    pt: 'Cinza-púrpura', id_lang: 'Ungu keabu-abuan', ru: 'Пурпурно-серый', fr: 'Gris-violet', ar: 'رمادي بنفسجي', ja: ''
  },
  '紫灰花纹': {
    cn: '紫灰花纹', en: 'Purple-gray pattern', th: 'ลวดลายสีม่วงเทา', vn: 'Họa tiết màu tím xám', es: 'Patrón gris púrpura',
    pt: 'Padrão roxo-acinzentado', id_lang: 'Pola ungu-abu-abu', ru: 'Фиолетово-серый узор', fr: 'Motif violet-gris', ar: 'نمط أرجواني رمادي', ja: ''
  },
  '紫红': {
    cn: '紫红', en: 'Purple-red', th: 'สีม่วงแดง', vn: 'Tím đỏ', es: 'Rojo púrpura',
    pt: 'Vermelho-púrpura', id_lang: 'Merah keunguan', ru: 'Пурпурно-красный', fr: 'Rouge violacé', ar: 'أرجواني-أحمر', ja: ''
  },
  '紫红条纹': {
    cn: '紫红条纹', en: 'Purple-red stripes', th: 'ลายทางสีม่วงแดง', vn: 'Sọc tím đỏ', es: 'rayas rojo púrpura',
    pt: 'Listras vermelho-púrpura', id_lang: 'Garis-garis ungu-merah', ru: 'Фиолетово-красные полосы', fr: 'Rayures pourpre-rouge', ar: 'خطوط أرجوانية حمراء', ja: ''
  },
  '紫红渐变': {
    cn: '紫红渐变', en: 'Purple-red gradient', th: 'ไล่ระดับสีม่วงแดง', vn: 'sắc tím đỏ chuyển sắc', es: 'Degradado rojo púrpura',
    pt: 'Gradiente roxo-avermelhado', id_lang: 'Gradien ungu-merah', ru: 'Фиолетово-красный градиент', fr: 'Dégradé violet-rouge', ar: 'تدرج اللون الأرجواني والأحمر', ja: ''
  },
  '紫红花纹': {
    cn: '紫红花纹', en: 'Purple-red pattern', th: 'ลวดลายสีม่วงแดง', vn: 'Họa tiết tím đỏ', es: 'Patrón rojo púrpura',
    pt: 'Padrão vermelho-púrpura', id_lang: 'Pola ungu-merah', ru: 'Фиолетово-красный узор', fr: 'Motif pourpre-rouge', ar: 'نمط أرجواني-أحمر', ja: ''
  },
  '紫红镶拼': {
    cn: '紫红镶拼', en: 'Purple and red inlaid', th: 'ฝังลายสีม่วงและสีแดง', vn: 'Màu tím và đỏ khảm', es: 'Incrustaciones moradas y rojas',
    pt: 'Incrustações roxas e vermelhas', id_lang: 'Bertatahkan warna ungu dan merah', ru: 'Фиолетовая и красная инкрустация', fr: 'incrusté de violet et de rouge', ar: 'مرصع باللونين الأرجواني والأحمر', ja: ''
  },
  '紫色': {
    cn: '紫色', en: 'Purple', th: 'สีม่วง', vn: 'Màu tím', es: 'Púrpura',
    pt: 'Roxo', id_lang: 'Ungu', ru: 'Фиолетовый', fr: 'Violet', ar: 'أرجواني', ja: ''
  },
  '紫色提花面料': {
    cn: '紫色提花面料', en: 'Purple jacquard fabric', th: 'ผ้าแจ็กการ์ดสีม่วง', vn: 'Vải jacquard màu tím', es: 'Tela jacquard morada',
    pt: 'Tecido jacquard roxo', id_lang: 'Kain jacquard ungu', ru: 'Ткань жаккард фиолетового цвета', fr: 'Tissu jacquard violet', ar: 'قماش جاكار بنفسجي', ja: ''
  },
  '红棕': {
    cn: '红棕', en: 'Reddish brown', th: 'สีน้ำตาลแดง', vn: 'Nâu đỏ', es: 'Marrón rojizo',
    pt: 'Castanho avermelhado', id_lang: 'Cokelat kemerahan', ru: 'Красновато-коричневый', fr: 'brun rougeâtre', ar: 'بني محمر', ja: ''
  },
  '红棕条纹': {
    cn: '红棕条纹', en: 'Reddish-brown stripes', th: 'ลายเส้นสีน้ำตาลแดง', vn: 'Sọc màu nâu đỏ', es: 'Rayas de color marrón rojizo',
    pt: 'Listras marrom-avermelhadas', id_lang: 'Garis-garis cokelat kemerahan', ru: 'красновато-коричневые полосы', fr: 'Rayures brun rougeâtre', ar: 'خطوط بنية محمرة', ja: ''
  },
  '红棕格纹': {
    cn: '红棕格纹', en: 'Reddish-brown plaid', th: 'ลายสก็อตสีน้ำตาลแดง', vn: 'kẻ sọc màu nâu đỏ', es: 'Cuadros de color marrón rojizo',
    pt: 'Xadrez marrom-avermelhado', id_lang: 'Kotak-kotak cokelat kemerahan', ru: 'красновато-коричневая клетка', fr: 'Carreaux brun rougeâtre', ar: 'كاروهات بني محمر', ja: ''
  },
  '红棕花纹': {
    cn: '红棕花纹', en: 'Reddish-brown pattern', th: 'ลวดลายสีน้ำตาลแดง', vn: 'Hoa văn màu nâu đỏ', es: 'Patrón marrón rojizo',
    pt: 'Padrão marrom-avermelhado', id_lang: 'Pola cokelat kemerahan', ru: 'Красновато-коричневый узор', fr: 'Motif brun rougeâtre', ar: 'نمط بني محمر', ja: ''
  },
  '红棕镶拼': {
    cn: '红棕镶拼', en: 'Red and brown inlay', th: 'ลวดลายสีแดงและสีน้ำตาล', vn: 'Khảm màu đỏ và nâu', es: 'Incrustaciones rojas y marrones',
    pt: 'Incrustação vermelha e marrom', id_lang: 'Inlay berwarna merah dan cokelat', ru: 'Красная и коричневая инкрустация', fr: 'Incrustations rouges et brunes', ar: 'تطعيم أحمر وبني', ja: ''
  },
  '红色': {
    cn: '红色', en: 'red', th: 'สีแดง', vn: 'màu đỏ', es: 'rojo',
    pt: 'vermelho', id_lang: 'merah', ru: 'красный', fr: 'rouge', ar: 'أحمر', ja: ''
  },
  '红色条纹': {
    cn: '红色条纹', en: 'Red stripes', th: 'แถบสีแดง', vn: 'Sọc đỏ', es: 'rayas rojas',
    pt: 'Listras vermelhas', id_lang: 'Garis-garis merah', ru: 'Красные полосы', fr: 'rayures rouges', ar: 'ريدس', ja: ''
  },
  '红色粗纱': {
    cn: '红色粗纱', en: 'Red coarse yarn', th: 'เส้นด้ายหยาบสีแดง', vn: 'Sợi thô màu đỏ', es: 'Hilo grueso rojo',
    pt: 'Fio grosso vermelho', id_lang: 'Benang kasar berwarna merah', ru: 'Красная грубая пряжа', fr: 'Fil rouge grossier', ar: 'خيوط حمراء خشنة', ja: ''
  },
  '红色系': {
    cn: '红色系', en: 'Red series', th: 'ซีรี่ส์สีแดง', vn: 'Dòng sản phẩm màu đỏ', es: 'Serie roja',
    pt: 'Série vermelha', id_lang: 'Seri merah', ru: 'Красная серия', fr: 'Série rouge', ar: 'سلسلة ريد', ja: ''
  },
  '红色纱': {
    cn: '红色纱', en: 'Red gauze', th: 'ผ้าก๊อซสีแดง', vn: 'Vải gạc đỏ', es: 'Gasa roja',
    pt: 'gaze vermelha', id_lang: 'Kain kasa merah', ru: 'Красная марля', fr: 'gaze rouge', ar: 'شاش أحمر', ja: ''
  },
  '红色细纱': {
    cn: '红色细纱', en: 'Red fine yarn', th: 'เส้นด้ายสีแดงละเอียด', vn: 'Sợi mảnh màu đỏ', es: 'Hilo fino rojo',
    pt: 'Fio fino vermelho', id_lang: 'Benang halus merah', ru: 'Красная тонкая пряжа', fr: 'Fil fin rouge', ar: 'خيوط حمراء رفيعة', ja: ''
  },
  '红色股纱': {
    cn: '红色股纱', en: 'Red silk', th: 'ผ้าไหมสีแดง', vn: 'Lụa đỏ', es: 'Seda roja',
    pt: 'Seda vermelha', id_lang: 'Sutra merah', ru: 'Красный шелк', fr: 'Soie rouge', ar: 'حرير أحمر', ja: ''
  },
  '红色面料': {
    cn: '红色面料', en: 'Red fabric', th: 'ผ้าสีแดง', vn: 'Vải đỏ', es: 'Tela roja',
    pt: 'Tecido vermelho', id_lang: 'Kain merah', ru: 'Красная ткань', fr: 'Tissu rouge', ar: 'قماش أحمر', ja: ''
  },
  '纤维素材料': {
    cn: '纤维素材料', en: 'Cellulose materials', th: 'วัสดุเซลลูโลส', vn: 'Vật liệu xenluloza', es: 'Materiales de celulosa',
    pt: 'Materiais de celulose', id_lang: 'Bahan selulosa', ru: 'целлюлозные материалы', fr: 'Matériaux cellulosiques', ar: 'مواد السليلوز', ja: ''
  },
  '纤维素醋酯纤维': {
    cn: '纤维素醋酯纤维', en: 'Cellulose acetate fiber', th: 'เส้นใยเซลลูโลสอะซิเตท', vn: 'sợi cellulose axetat', es: 'fibra de acetato de celulosa',
    pt: 'Fibra de acetato de celulose', id_lang: 'Serat selulosa asetat', ru: 'Волокно из ацетата целлюлозы', fr: 'Fibre d&#39;acétate de cellulose', ar: 'ألياف أسيتات السليلوز', ja: ''
  },
  '级抗菌性能': {
    cn: '级抗菌性能', en: 'Grade A antibacterial properties', th: 'คุณสมบัติในการต้านเชื้อแบคทีเรียระดับ A', vn: 'Đặc tính kháng khuẩn loại A', es: 'Propiedades antibacterianas de grado A',
    pt: 'Propriedades antibacterianas de grau A', id_lang: 'Sifat antibakteri kelas A', ru: 'Антибактериальные свойства высшего класса.', fr: 'Propriétés antibactériennes de grade A', ar: 'خصائص مضادة للبكتيريا من الدرجة الأولى', ja: ''
  },
  '纱线': {
    cn: '纱线', en: 'yarn', th: 'เส้นด้าย', vn: 'sợi', es: 'hilo',
    pt: 'fio', id_lang: 'benang', ru: 'пряжа', fr: 'fil', ar: 'غزل', ja: ''
  },
  '纽扣': {
    cn: '纽扣', en: 'Button', th: 'กระดุม', vn: 'Nút / Cúc', es: 'Botón',
    pt: 'Botão', id_lang: 'Kancing', ru: 'Пуговица', fr: 'Bouton', ar: 'زر', ja: ''
  },
  '织带': {
    cn: '织带', en: 'webbing', th: 'สายรัด', vn: 'dây đai', es: 'cincha',
    pt: 'teia', id_lang: 'anyaman', ru: 'плетение', fr: 'sangles', ar: 'حزام', ja: ''
  },
  '织带成分不计': {
    cn: '织带成分不计', en: 'Webbing composition not considered', th: 'ไม่ได้พิจารณาองค์ประกอบของสายรัด', vn: 'Thành phần của dây đai không được xem xét', es: 'No se consideró la composición de la cinta',
    pt: 'Composição da fita não considerada', id_lang: 'Komposisi anyaman tidak dipertimbangkan', ru: 'Состав ленты не учитывался.', fr: 'La composition de la sangle n&#39;est pas prise en compte', ar: 'لم يتم أخذ تركيبة النسيج بعين الاعتبار', ja: ''
  },
  '织物': {
    cn: '织物', en: 'fabric', th: 'ผ้า', vn: 'vải vóc', es: 'tela',
    pt: 'tecido', id_lang: 'kain', ru: 'ткань', fr: 'tissu', ar: 'قماش', ja: ''
  },
  '经典': {
    cn: '经典', en: 'Classic', th: 'คลาสสิก', vn: 'Cổ điển', es: 'Clásico',
    pt: 'Clássico', id_lang: 'Klasik', ru: 'Классический', fr: 'Classique', ar: 'كلاسيكي', ja: ''
  },
  '经典30度机洗': {
    cn: '经典30度机洗', en: 'Classic Machine Wash at 30°C', th: 'คลาสสิก ซักเครื่อง 30°C', vn: 'Cổ điển Giặt máy 30°C', es: 'Clásico Lavado a máquina a 30°C',
    pt: 'Clássico Lavagem à máquina a 30°C', id_lang: 'Klasik Cuci Mesin 30°C', ru: 'Классическая Машинная стирка при 30°C', fr: 'Classique Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة كلاسيكي', ja: ''
  },
  '经典40度机洗': {
    cn: '经典40度机洗', en: 'Classic Machine Wash at 40°C', th: 'คลาสสิก ซักเครื่อง 40°C', vn: 'Cổ điển Giặt máy 40°C', es: 'Clásico Lavado a máquina a 40°C',
    pt: 'Clássico Lavagem à máquina a 40°C', id_lang: 'Klasik Cuci Mesin 40°C', ru: 'Классическая Машинная стирка при 40°C', fr: 'Classique Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة كلاسيكي', ja: ''
  },
  '经典不可干洗': {
    cn: '经典不可干洗', en: 'Classic Do Not Dry Clean', th: 'คลาสสิก ห้ามซักแห้ง', vn: 'Cổ điển Không giặt khô', es: 'Clásico No lavar en seco',
    pt: 'Clássico Não lavar a seco', id_lang: 'Klasik Jangan Dry Clean', ru: 'Классическая Не подвергать химчистке', fr: 'Classique Ne pas nettoyer à sec', ar: 'لا تنظف جافاً كلاسيكي', ja: ''
  },
  '经典不可漂白': {
    cn: '经典不可漂白', en: 'Classic Do Not Bleach', th: 'คลาสสิก ห้ามฟอกขาว', vn: 'Cổ điển Không tẩy trắng', es: 'Clásico No blanquear',
    pt: 'Clássico Não usar alvejante', id_lang: 'Klasik Jangan Diputihkan', ru: 'Классическая Не отбеливать', fr: 'Classique Ne pas blanchir', ar: 'لا تبيض كلاسيكي', ja: ''
  },
  '经典不可烘干': {
    cn: '经典不可烘干', en: 'Classic Do Not Tumble Dry', th: 'คลาสสิก ห้ามอบแห้ง', vn: 'Cổ điển Không sấy khô', es: 'Clásico No secar en secadora',
    pt: 'Clássico Não secar em secadora', id_lang: 'Klasik Jangan Dikeringkan', ru: 'Классическая Не сушить в машине', fr: 'Classique Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف كلاسيكي', ja: ''
  },
  '经典亚麻': {
    cn: '经典亚麻', en: 'Classic Linen', th: 'คลาสสิก ผ้าลินิน', vn: 'Cổ điển Vải lanh', es: 'Clásico Lino',
    pt: 'Clássico Linho', id_lang: 'Klasik Linen', ru: 'Классическая Лен', fr: 'Classique Lin', ar: 'كتان كلاسيكي', ja: ''
  },
  '经典低温熨烫': {
    cn: '经典低温熨烫', en: 'Classic Low Temperature Ironing', th: 'คลาสสิก รีดอุณหภูมิต่ำ', vn: 'Cổ điển Ủi nhiệt độ thấp', es: 'Clásico Planchar a baja temperatura',
    pt: 'Clássico Passar a baixa temperatura', id_lang: 'Klasik Setrika Suhu Rendah', ru: 'Классическая Глажка при низкой температуре', fr: 'Classique Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة كلاسيكي', ja: ''
  },
  '经典再生涤纶': {
    cn: '经典再生涤纶', en: 'Classic Recycled Polyester', th: 'คลาสสิก โพลีเอสเตอร์รีไซเคิล', vn: 'Cổ điển Polyester tái chế', es: 'Clásico Poliéster reciclado',
    pt: 'Clássico Poliéster reciclado', id_lang: 'Klasik Poliester Daur Ulang', ru: 'Классическая Переработанный полиэстер', fr: 'Classique Polyester recyclé', ar: 'بوليستر معاد التدوير كلاسيكي', ja: ''
  },
  '经典冷水洗': {
    cn: '经典冷水洗', en: 'Classic Cold Water Wash', th: 'คลาสสิก ซักน้ำเย็น', vn: 'Cổ điển Giặt nước lạnh', es: 'Clásico Lavado en agua fría',
    pt: 'Clássico Lavagem em água fria', id_lang: 'Klasik Cuci Air Dingin', ru: 'Классическая Стирка в холодной воде', fr: 'Classique Lavage à l\'eau froide', ar: 'غسيل بالماء البارد كلاسيكي', ja: ''
  },
  '经典天丝': {
    cn: '经典天丝', en: 'Classic Tencel', th: 'คลาสสิก เทนเซล', vn: 'Cổ điển Tencel', es: 'Clásico Tencel',
    pt: 'Clássico Tencel', id_lang: 'Klasik Tencel', ru: 'Классическая Тенсел', fr: 'Classique Tencel', ar: 'تنسل كلاسيكي', ja: ''
  },
  '经典尼龙': {
    cn: '经典尼龙', en: 'Classic Nylon', th: 'คลาสสิก ไนลอน', vn: 'Cổ điển Nylon', es: 'Clásico Nailon',
    pt: 'Clássico Nylon', id_lang: 'Klasik Nilon', ru: 'Классическая Нейлон', fr: 'Classique Nylon', ar: 'نايلون كلاسيكي', ja: ''
  },
  '经典平铺晾干': {
    cn: '经典平铺晾干', en: 'Classic Lay Flat to Dry', th: 'คลาสสิก ตากแห้งแบบแบน', vn: 'Cổ điển Phơi phẳng', es: 'Clásico Secar en plano',
    pt: 'Clássico Secar na horizontal', id_lang: 'Klasik Keringkan Datar', ru: 'Классическая Сушить в расправленном виде', fr: 'Classique Sécher à plat', ar: 'تجفيف مسطح كلاسيكي', ja: ''
  },
  '经典悬挂晾干': {
    cn: '经典悬挂晾干', en: 'Classic Hang Dry', th: 'คลาสสิก แขวนตากแห้ง', vn: 'Cổ điển Phơi treo', es: 'Clásico Secar colgado',
    pt: 'Clássico Secar pendurado', id_lang: 'Klasik Gantung Kering', ru: 'Классическая Сушить в подвешенном состоянии', fr: 'Classique Sécher suspendu', ar: 'تجفيف بالتعليق كلاسيكي', ja: ''
  },
  '经典手洗': {
    cn: '经典手洗', en: 'Classic Hand Wash', th: 'คลาสสิก ซักมือ', vn: 'Cổ điển Giặt tay', es: 'Clásico Lavado a mano',
    pt: 'Clássico Lavagem à mão', id_lang: 'Klasik Cuci Tangan', ru: 'Классическая Ручная стирка', fr: 'Classique Lavage à la main', ar: 'غسيل يدوي كلاسيكي', ja: ''
  },
  '经典有机棉': {
    cn: '经典有机棉', en: 'Classic Organic Cotton', th: 'คลาสสิก ผ้าฝ้ายออร์แกนิก', vn: 'Cổ điển Cotton hữu cơ', es: 'Clásico Algodón orgánico',
    pt: 'Clássico Algodão orgânico', id_lang: 'Klasik Katun Organik', ru: 'Классическая Органический хлопок', fr: 'Classique Coton biologique', ar: 'قطن عضوي كلاسيكي', ja: ''
  },
  '经典机洗': {
    cn: '经典机洗', en: 'Classic Machine Wash', th: 'คลาสสิก ซักเครื่อง', vn: 'Cổ điển Giặt máy', es: 'Clásico Lavado a máquina',
    pt: 'Clássico Lavagem à máquina', id_lang: 'Klasik Cuci Mesin', ru: 'Классическая Машинная стирка', fr: 'Classique Lavage en machine', ar: 'غسيل آلي كلاسيكي', ja: ''
  },
  '经典棉': {
    cn: '经典棉', en: 'Classic Cotton', th: 'คลาสสิก ผ้าฝ้าย', vn: 'Cổ điển Cotton', es: 'Clásico Algodón',
    pt: 'Clássico Algodão', id_lang: 'Klasik Katun', ru: 'Классическая Хлопок', fr: 'Classique Coton', ar: 'قطن كلاسيكي', ja: ''
  },
  '经典氨纶': {
    cn: '经典氨纶', en: 'Classic Spandex', th: 'คลาสสิก สแปนเด็กซ์', vn: 'Cổ điển Spandex', es: 'Clásico Elastano',
    pt: 'Clássico Elastano', id_lang: 'Klasik Spandex', ru: 'Классическая Спандекс', fr: 'Classique Élasthanne', ar: 'سباندكس كلاسيكي', ja: ''
  },
  '经典涤纶': {
    cn: '经典涤纶', en: 'Classic Polyester', th: 'คลาสสิก โพลีเอสเตอร์', vn: 'Cổ điển Polyester', es: 'Clásico Poliéster',
    pt: 'Clássico Poliéster', id_lang: 'Klasik Poliester', ru: 'Классическая Полиэстер', fr: 'Classique Polyester', ar: 'بوليستر كلاسيكي', ja: ''
  },
  '经典温水洗': {
    cn: '经典温水洗', en: 'Classic Warm Water Wash', th: 'คลาสสิก ซักน้ำอุ่น', vn: 'Cổ điển Giặt nước ấm', es: 'Clásico Lavado en agua tibia',
    pt: 'Clássico Lavagem em água morna', id_lang: 'Klasik Cuci Air Hangat', ru: 'Классическая Стирка в теплой воде', fr: 'Classique Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ كلاسيكي', ja: ''
  },
  '经典真丝': {
    cn: '经典真丝', en: 'Classic Pure Silk', th: 'คลาสสิก ผ้าไหมแท้', vn: 'Cổ điển Lụa thật', es: 'Clásico Seda pura',
    pt: 'Clássico Seda pura', id_lang: 'Klasik Sutra Asli', ru: 'Классическая Натуральный шелк', fr: 'Classique Soie naturelle', ar: 'حرير طبيعي كلاسيكي', ja: ''
  },
  '经典竹纤维': {
    cn: '经典竹纤维', en: 'Classic Bamboo Fiber', th: 'คลาสสิก เส้นใยไผ่', vn: 'Cổ điển Sợi tre', es: 'Clásico Fibra de bambú',
    pt: 'Clássico Fibra de bambu', id_lang: 'Klasik Serat Bambu', ru: 'Классическая Бамбуковое волокно', fr: 'Classique Fibre de bambou', ar: 'ألياف الخيزران كلاسيكي', ja: ''
  },
  '经典粘纤': {
    cn: '经典粘纤', en: 'Classic Viscose', th: 'คลาสสิก วิสโคส', vn: 'Cổ điển Viscose', es: 'Clásico Viscosa',
    pt: 'Clássico Viscose', id_lang: 'Klasik Viskosa', ru: 'Классическая Вискоза', fr: 'Classique Viscose', ar: 'فيسكوز كلاسيكي', ja: ''
  },
  '经典精梳棉': {
    cn: '经典精梳棉', en: 'Classic Combed Cotton', th: 'คลาสสิก ผ้าฝ้ายหวี', vn: 'Cổ điển Cotton chải', es: 'Clásico Algodón peinado',
    pt: 'Clássico Algodão penteado', id_lang: 'Klasik Katun Sisir', ru: 'Классическая Гребенной хлопок', fr: 'Classique Coton peigné', ar: 'قطن ممشط كلاسيكي', ja: ''
  },
  '经典羊毛': {
    cn: '经典羊毛', en: 'Classic Wool', th: 'คลาสสิก ขนแกะ', vn: 'Cổ điển Len', es: 'Clásico Lana',
    pt: 'Clássico Lã', id_lang: 'Klasik Wol', ru: 'Классическая Шерсть', fr: 'Classique Laine', ar: 'صوف كلاسيكي', ja: ''
  },
  '经典羊绒': {
    cn: '经典羊绒', en: 'Classic Cashmere', th: 'คลาสสิก แคชเมียร์', vn: 'Cổ điển Cashmere', es: 'Clásico Cachemira',
    pt: 'Clássico Caxemira', id_lang: 'Klasik Kasmir', ru: 'Классическая Кашемир', fr: 'Classique Cachemire', ar: 'كشمير كلاسيكي', ja: ''
  },
  '经典腈纶': {
    cn: '经典腈纶', en: 'Classic Acrylic', th: 'คลาสสิก อะคริลิก', vn: 'Cổ điển Acrylic', es: 'Clásico Acrílico',
    pt: 'Clássico Acrílico', id_lang: 'Klasik Akrilik', ru: 'Классическая Акрил', fr: 'Classique Acrylique', ar: 'أكريليك كلاسيكي', ja: ''
  },
  '经典莫代尔': {
    cn: '经典莫代尔', en: 'Classic Modal', th: 'คลาสสิก โมดอล', vn: 'Cổ điển Modal', es: 'Clásico Modal',
    pt: 'Clássico Modal', id_lang: 'Klasik Modal', ru: 'Классическая Модал', fr: 'Classique Modal', ar: 'مودال كلاسيكي', ja: ''
  },
  '经典莱赛尔': {
    cn: '经典莱赛尔', en: 'Classic Lyocell', th: 'คลาสสิก ไลโอเซลล์', vn: 'Cổ điển Lyocell', es: 'Clásico Lyocell',
    pt: 'Clássico Lyocell', id_lang: 'Klasik Lyocell', ru: 'Классическая Лиоцелл', fr: 'Classique Lyocell', ar: 'ليوسيل كلاسيكي', ja: ''
  },
  '经典锦纶': {
    cn: '经典锦纶', en: 'Classic Nylon', th: 'คลาสสิก ไนลอน', vn: 'Cổ điển Nylon', es: 'Clásico Nailon',
    pt: 'Clássico Nylon', id_lang: 'Klasik Nilon', ru: 'Классическая Нейлон', fr: 'Classique Nylon', ar: 'نايلون كلاسيكي', ja: ''
  },
  '经典马海毛': {
    cn: '经典马海毛', en: 'Classic Mohair', th: 'คลาสสิก โมแฮร์', vn: 'Cổ điển Mohair', es: 'Clásico Mohair',
    pt: 'Clássico Mohair', id_lang: 'Klasik Mohair', ru: 'Классическая Мохер', fr: 'Classique Mohair', ar: 'موهير كلاسيكي', ja: ''
  },
  '经弹': {
    cn: '经弹', en: 'After bullet', th: 'หลังจากกระสุน', vn: 'Sau viên đạn', es: 'Después de la bala',
    pt: 'Após a bala', id_lang: 'Setelah peluru', ru: 'После пули', fr: 'Après la balle', ar: 'بعد الرصاصة', ja: ''
  },
  '经编': {
    cn: '经编', en: 'Warp knitting', th: 'การถักแบบวาร์ป', vn: 'Đan dọc', es: 'Tejido de punto por urdimbre',
    pt: 'Tricô de urdidura', id_lang: 'Rajutan lusi', ru: 'Основа вязания', fr: 'Tricotage à la chaîne', ar: 'الحياكة السداة', ja: ''
  },
  '经编复合': {
    cn: '经编复合', en: 'Warp-knitted composite', th: 'วัสดุผสมถักทอแบบวาร์ป', vn: 'Vật liệu tổng hợp dệt kim dọc', es: 'Compuesto de punto por urdimbre',
    pt: 'Compósito de malha por urdidura', id_lang: 'Komposit rajutan lusi', ru: 'Композитный материал, связанный по основе', fr: 'Composite tricoté chaîne', ar: 'مركب محبوك باللحمة', ja: ''
  },
  '经编针织': {
    cn: '经编针织', en: 'Warp knitting', th: 'การถักแบบวาร์ป', vn: 'Đan dọc', es: 'Tejido de punto por urdimbre',
    pt: 'Tricô de urdidura', id_lang: 'Rajutan lusi', ru: 'Основа вязания', fr: 'Tricotage à la chaîne', ar: 'الحياكة السداة', ja: ''
  },
  '经编面料': {
    cn: '经编面料', en: 'Warp-knitted fabrics', th: 'ผ้าถักแบบวาร์ป', vn: 'Vải dệt kim dọc', es: 'Tejidos de punto por urdimbre',
    pt: 'Tecidos de malha por urdidura', id_lang: 'Kain rajutan lusi', ru: 'трикотажные полотна', fr: 'Tissus tricotés chaîne', ar: 'أقمشة محبوكة بالخيوط السداة', ja: ''
  },
  '经编高针': {
    cn: '经编高针', en: 'Warp-knitted high needle', th: 'การถักแบบวาร์ปด้วยเข็มสูง', vn: 'Đan kim dọc', es: 'Aguja alta de punto por urdimbre',
    pt: 'Tricotado por urdidura com agulha alta', id_lang: 'Rajutan lusi jarum tinggi', ru: 'вязание основы с высокой иглой', fr: 'tricot chaîne à aiguilles hautes', ar: 'إبرة عالية محبوكة باللحمة', ja: ''
  },
  '经销商': {
    cn: '经销商', en: 'Distributor', th: 'ผู้จัดจำหน่าย', vn: 'Nhà phân phối', es: 'Distribuidor',
    pt: 'Distribuidor', id_lang: 'Distributor', ru: 'Дистрибьютор', fr: 'Distributeur', ar: 'الموزع', ja: ''
  },
  '绒头': {
    cn: '绒头', en: 'plush', th: 'ตุ๊กตาผ้ากำมะหยี่', vn: 'thú nhồi bông', es: 'felpa',
    pt: 'pelúcia', id_lang: 'mewah', ru: 'плюшевый', fr: 'peluche', ar: 'القطيفة', ja: ''
  },
  '绒子含量': {
    cn: '绒子含量', en: 'Down content', th: 'ดาวน์โหลดเนื้อหา', vn: 'Nội dung xuống', es: 'Contenido descendente',
    pt: 'Conteúdo para baixo', id_lang: 'Konten menurun', ru: 'Содержание для скачивания', fr: 'Contenu descendant', ar: 'محتوى غير مرغوب فيه', ja: ''
  },
  '绒毛': {
    cn: '绒毛', en: 'fluff', th: 'ปุย', vn: 'bông xốp', es: 'pelusa',
    pt: 'fofura', id_lang: 'bulu halus', ru: 'пух', fr: 'duvet', ar: 'زغب', ja: ''
  },
  '绗缝线除外': {
    cn: '绗缝线除外', en: 'Except for quilting', th: 'ยกเว้นการเย็บผ้าควิลท์', vn: 'Ngoại trừ việc may vá.', es: 'Excepto para acolchar',
    pt: 'Exceto para acolchoamento', id_lang: 'Kecuali untuk menjahit selimut', ru: 'За исключением квилтинга.', fr: 'À l&#39;exception du matelassage', ar: 'باستثناء الترقيع', ja: ''
  },
  '绣线': {
    cn: '绣线', en: 'Embroidery thread', th: 'ด้ายปัก', vn: 'Chỉ thêu', es: 'Hilo de bordar',
    pt: 'Linha de bordar', id_lang: 'Benang sulam', ru: 'Нитки для вышивания', fr: 'Fil à broder', ar: 'خيط تطريز', ja: ''
  },
  '绣线除外': {
    cn: '绣线除外', en: 'Except for embroidery thread', th: 'ยกเว้นด้ายปัก', vn: 'Ngoại trừ chỉ thêu', es: 'Excepto el hilo de bordar',
    pt: 'Exceto para linha de bordar', id_lang: 'Kecuali benang sulaman', ru: 'За исключением ниток для вышивания.', fr: 'À l&#39;exception du fil à broder', ar: 'باستثناء خيوط التطريز', ja: ''
  },
  '绣花': {
    cn: '绣花', en: 'embroidered', th: 'ปักลาย', vn: 'thêu', es: 'bordado',
    pt: 'bordado', id_lang: 'bersulam', ru: 'вышитый', fr: 'broderie', ar: 'مطرز', ja: ''
  },
  '绣花复合面料': {
    cn: '绣花复合面料', en: 'Embroidery composite fabric', th: 'ผ้าคอมโพสิตปักลาย', vn: 'Vải tổng hợp thêu', es: 'Tejido compuesto para bordado',
    pt: 'Tecido composto para bordado', id_lang: 'Kain komposit bordir', ru: 'Вышитая композитная ткань', fr: 'tissu composite brodé', ar: 'قماش مركب مطرز', ja: ''
  },
  '绣花线': {
    cn: '绣花线', en: 'Embroidery thread', th: 'ด้ายปัก', vn: 'Chỉ thêu', es: 'Hilo de bordar',
    pt: 'Linha de bordar', id_lang: 'Benang sulam', ru: 'Нитки для вышивания', fr: 'Fil à broder', ar: 'خيط تطريز', ja: ''
  },
  '绣花线除外': {
    cn: '绣花线除外', en: 'Except for embroidery thread', th: 'ยกเว้นด้ายปัก', vn: 'Ngoại trừ chỉ thêu', es: 'Excepto el hilo de bordar',
    pt: 'Exceto para linha de bordar', id_lang: 'Kecuali benang sulaman', ru: 'За исключением ниток для вышивания.', fr: 'À l&#39;exception du fil à broder', ar: 'باستثناء خيوط التطريز', ja: ''
  },
  '绣花除外': {
    cn: '绣花除外', en: 'Except for embroidery', th: 'ยกเว้นงานปัก', vn: 'Ngoại trừ thêu', es: 'Excepto por bordado',
    pt: 'Exceto bordados', id_lang: 'Kecuali untuk bordir', ru: 'За исключением вышивки', fr: 'À l&#39;exception de la broderie', ar: 'باستثناء التطريز', ja: ''
  },
  '绣花面料': {
    cn: '绣花面料', en: 'Embroidered fabric', th: 'ผ้าปักลาย', vn: 'Vải thêu', es: 'Tela bordada',
    pt: 'Tecido bordado', id_lang: 'Kain bordir', ru: 'Вышитая ткань', fr: 'tissu brodé', ar: 'قماش مطرز', ja: ''
  },
  '绯茶': {
    cn: '绯茶', en: 'Scarlet Tea', th: 'ชาสการ์เล็ต', vn: 'Trà đỏ', es: 'Té escarlata',
    pt: 'Chá Escarlate', id_lang: 'Teh Merah', ru: 'Алый чай', fr: 'Thé écarlate', ar: 'شاي سكارليت', ja: ''
  },
  '维川平纹': {
    cn: '维川平纹', en: 'Weichuan Plain Weave', th: 'ผ้าทอธรรมดา Weichuan', vn: 'Dệt trơn Weichuan', es: 'Tejido liso de Weichuan',
    pt: 'Tecido liso Weichuan', id_lang: 'Tenunan Polos Weichuan', ru: 'Вэйчуаньское полотняное переплетение', fr: 'Armure toile Weichuan', ar: 'ويتشوان عادي نسج', ja: ''
  },
  '绵羊毛': {
    cn: '绵羊毛', en: 'sheep wool', th: 'ขนแกะ', vn: 'len cừu', es: 'lana de oveja',
    pt: 'lã de ovelha', id_lang: 'wol domba', ru: 'овечья шерсть', fr: 'laine de mouton', ar: 'صوف الأغنام', ja: ''
  },
  '绵羊毛半精纺': {
    cn: '绵羊毛半精纺', en: 'Semi-worsted sheep wool', th: 'ขนแกะกึ่งเวิร์ส', vn: 'Len cừu bán worsted', es: 'Lana de oveja semi-estambre',
    pt: 'Lã de ovelha semi-penteada', id_lang: 'Wol domba semi-worsted', ru: 'Полушерстяная овечья шерсть', fr: 'Laine de mouton semi-peignée', ar: 'صوف أغنام شبه ممشط', ja: ''
  },
  '绾丝': {
    cn: '绾丝', en: 'Twisted silk', th: 'ผ้าไหมบิดเกลียว', vn: 'Lụa xoắn', es: 'Seda retorcida',
    pt: 'Seda torcida', id_lang: 'Sutra yang dipilin', ru: 'Витой шелк', fr: 'Soie torsadée', ar: 'حرير ملتوي', ja: ''
  },
  '绿卡其': {
    cn: '绿卡其', en: 'Green Card', th: 'กรีนการ์ด', vn: 'Thẻ xanh', es: 'Tarjeta Verde',
    pt: 'Green Card', id_lang: 'Kartu Hijau', ru: 'Грин-карта', fr: 'Carte verte', ar: 'البطاقة الخضراء', ja: ''
  },
  '绿格面料': {
    cn: '绿格面料', en: 'Green plaid fabric', th: 'ผ้าลายตารางสีเขียว', vn: 'Vải kẻ sọc xanh lá cây', es: 'Tela a cuadros verdes',
    pt: 'Tecido xadrez verde', id_lang: 'Kain kotak-kotak hijau', ru: 'Зеленая клетчатая ткань', fr: 'tissu à carreaux verts', ar: 'قماش كاروهات أخضر', ja: ''
  },
  '绿灰': {
    cn: '绿灰', en: 'Green-gray', th: 'สีเขียวเทา', vn: 'Xanh xám', es: 'Verde grisáceo',
    pt: 'Verde-acinzentado', id_lang: 'Hijau keabu-abuan', ru: 'Зелено-серый', fr: 'Gris-vert', ar: 'أخضر رمادي', ja: ''
  },
  '绿灰条纹': {
    cn: '绿灰条纹', en: 'Green and gray stripes', th: 'ลายทางสีเขียวและสีเทา', vn: 'Sọc xanh lá và xám', es: 'rayas verdes y grises',
    pt: 'Listras verdes e cinzas', id_lang: 'Garis-garis hijau dan abu-abu', ru: 'Зеленые и серые полосы', fr: 'Rayures vertes et grises', ar: 'خطوط خضراء ورمادية', ja: ''
  },
  '绿灰格纹': {
    cn: '绿灰格纹', en: 'Green and gray plaid', th: 'ลายตารางสีเขียวและสีเทา', vn: 'kẻ sọc xanh lá và xám', es: 'Cuadros verdes y grises',
    pt: 'xadrez verde e cinza', id_lang: 'Kotak-kotak hijau dan abu-abu', ru: 'Зелено-серая клетка', fr: 'à carreaux verts et gris', ar: 'كاروهات خضراء ورمادية', ja: ''
  },
  '绿灰渐变': {
    cn: '绿灰渐变', en: 'Green-gray gradient', th: 'การไล่ระดับสีเขียวเทา', vn: 'Chuyển màu xanh xám', es: 'Degradado verde grisáceo',
    pt: 'Gradiente verde-acinzentado', id_lang: 'Gradien hijau-abu-abu', ru: 'Зелено-серый градиент', fr: 'Dégradé vert-gris', ar: 'تدرج اللون الأخضر الرمادي', ja: ''
  },
  '绿灰花纹': {
    cn: '绿灰花纹', en: 'Green and gray patterns', th: 'ลวดลายสีเขียวและสีเทา', vn: 'Họa tiết màu xanh lá cây và xám', es: 'Patrones verdes y grises',
    pt: 'Padrões verdes e cinzas', id_lang: 'Pola hijau dan abu-abu', ru: 'Зеленые и серые узоры', fr: 'Motifs verts et gris', ar: 'أنماط خضراء ورمادية', ja: ''
  },
  '绿灰镶拼': {
    cn: '绿灰镶拼', en: 'Green and gray patchwork', th: 'ลายปะติดปะต่อสีเขียวและสีเทา', vn: 'chắp vá màu xanh lá cây và xám', es: 'Mosaico verde y gris',
    pt: 'Retalhos verdes e cinzas', id_lang: 'Tambal sulam hijau dan abu-abu', ru: 'Зелено-серая лоскутная ткань', fr: 'patchwork vert et gris', ar: 'مرقعة باللونين الأخضر والرمادي', ja: ''
  },
  '绿白条纹': {
    cn: '绿白条纹', en: 'Green and white stripes', th: 'ลายทางสีเขียวและสีขาว', vn: 'Sọc xanh lá cây và trắng', es: 'rayas verdes y blancas',
    pt: 'Listras verdes e brancas', id_lang: 'Garis-garis hijau dan putih', ru: 'Зеленые и белые полосы', fr: 'Rayures vertes et blanches', ar: 'خطوط خضراء وبيضاء', ja: ''
  },
  '绿色': {
    cn: '绿色', en: 'green', th: 'สีเขียว', vn: 'màu xanh lá', es: 'verde',
    pt: 'verde', id_lang: 'hijau', ru: 'зеленый', fr: 'vert', ar: 'أخضر', ja: ''
  },
  '绿色格纹': {
    cn: '绿色格纹', en: 'Green plaid', th: 'ลายตารางสีเขียว', vn: 'kẻ sọc xanh', es: 'Cuadros verdes',
    pt: 'Xadrez verde', id_lang: 'Kotak-kotak hijau', ru: 'Зеленая клетка', fr: 'à carreaux verts', ar: 'كاروهات خضراء', ja: ''
  },
  '绿色系': {
    cn: '绿色系', en: 'Green series', th: 'ซีรี่ส์สีเขียว', vn: 'Dòng sản phẩm màu xanh lá cây', es: 'Serie verde',
    pt: 'Série Verde', id_lang: 'Seri hijau', ru: 'Зелёная серия', fr: 'Série verte', ar: 'سلسلة خضراء', ja: ''
  },
  '绿色长丝': {
    cn: '绿色长丝', en: 'Green filament', th: 'เส้นใยสีเขียว', vn: 'Sợi màu xanh lá cây', es: 'filamento verde',
    pt: 'Filamento verde', id_lang: 'Filamen hijau', ru: 'Зелёная нить', fr: 'filament vert', ar: 'خيط أخضر', ja: ''
  },
  '绿色面料': {
    cn: '绿色面料', en: 'Green fabric', th: 'ผ้าสีเขียว', vn: 'Vải màu xanh lá cây', es: 'Tela verde',
    pt: 'Tecido verde', id_lang: 'Kain hijau', ru: 'Зеленая ткань', fr: 'Tissu vert', ar: 'قماش أخضر', ja: ''
  },
  '绿褐': {
    cn: '绿褐', en: 'Greenish brown', th: 'สีน้ำตาลอมเขียว', vn: 'Nâu xanh', es: 'Marrón verdoso',
    pt: 'Marrom-esverdeado', id_lang: 'Cokelat kehijauan', ru: 'Зеленовато-коричневый', fr: 'brun verdâtre', ar: 'بني مخضر', ja: ''
  },
  '缝纫线': {
    cn: '缝纫线', en: 'Sewing thread', th: 'ด้ายเย็บผ้า', vn: 'Chỉ may', es: 'Hilo de coser',
    pt: 'Linha de costura', id_lang: 'Benang jahit', ru: 'Швейные нитки', fr: 'Fil à coudre', ar: 'خيط خياطة', ja: ''
  },
  '缝线': {
    cn: '缝线', en: 'Stitching', th: 'การเย็บ', vn: 'Khâu', es: 'Costura',
    pt: 'Costura', id_lang: 'Jahitan', ru: 'Прострочка', fr: 'Coutures', ar: 'خياطة', ja: 'ステッチ'
  },
  '缟羽灰': {
    cn: '缟羽灰', en: 'White Feather Gray', th: 'ขนนกสีขาวสีเทา', vn: 'Lông vũ trắng xám', es: 'Gris pluma blanca',
    pt: 'Cinza Pena Branca', id_lang: 'Bulu Putih Abu-abu', ru: 'Белое перо Серый', fr: 'Plume blanche Gris', ar: 'أبيض ريش رمادي', ja: ''
  },
  '网布': {
    cn: '网布', en: 'Mesh', th: 'ตาข่าย', vn: 'Lưới', es: 'Malla',
    pt: 'Malha', id_lang: 'Jala', ru: 'Сетка', fr: 'Engrener', ar: 'شبكة', ja: ''
  },
  '网眼双面': {
    cn: '网眼双面', en: 'Mesh double-sided', th: 'ตาข่ายสองด้าน', vn: 'Lưới hai mặt', es: 'Malla de doble cara',
    pt: 'Malha dupla face', id_lang: 'Jaring dua sisi', ru: 'Двусторонняя сетка', fr: 'Maille double face', ar: 'شبكة مزدوجة الجوانب', ja: ''
  },
  '网眼里料': {
    cn: '网眼里料', en: 'Mesh material', th: 'วัสดุตาข่าย', vn: 'Vật liệu dạng lưới', es: 'Material de malla',
    pt: 'Material de malha', id_lang: 'Bahan jala', ru: 'Сетчатый материал', fr: 'Matériau en maille', ar: 'مادة شبكية', ja: ''
  },
  '网眼面料': {
    cn: '网眼面料', en: 'Mesh fabric', th: 'ผ้าตาข่าย', vn: 'Vải lưới', es: 'Tejido de malla',
    pt: 'Tecido de malha', id_lang: 'Kain jala', ru: 'Сетчатая ткань', fr: 'Tissu en maille', ar: 'قماش شبكي', ja: ''
  },
  '网纱': {
    cn: '网纱', en: 'Mesh', th: 'ตาข่าย', vn: 'Lưới', es: 'Malla',
    pt: 'Malha', id_lang: 'Jala', ru: 'Сетка', fr: 'Engrener', ar: 'شبكة', ja: ''
  },
  '网纱面料': {
    cn: '网纱面料', en: 'Mesh fabric', th: 'ผ้าตาข่าย', vn: 'Vải lưới', es: 'Tejido de malla',
    pt: 'Tecido de malha', id_lang: 'Kain jala', ru: 'Сетчатая ткань', fr: 'Tissu en maille', ar: 'قماش شبكي', ja: ''
  },
  '罗口': {
    cn: '罗口', en: 'Luokou', th: 'ลั่วโข่ว', vn: 'Lạc Khẩu', es: 'luokou',
    pt: 'Luokou', id_lang: 'Luokou', ru: 'Луокоу', fr: 'Luokou', ar: 'لوكو', ja: ''
  },
  '罗口成分不计': {
    cn: '罗口成分不计', en: 'The composition of the slub is not considered.', th: 'ไม่ได้พิจารณาถึงองค์ประกอบของเส้นใยที่ไม่สม่ำเสมอ', vn: 'Thành phần cấu tạo của sợi thô không được xem xét.', es: 'No se tiene en cuenta la composición del slub.',
    pt: 'A composição da massa irregular não é considerada.', id_lang: 'Komposisi gumpalan tersebut tidak dipertimbangkan.', ru: 'Состав утолщения не учитывается.', fr: 'La composition du granulat n&#39;est pas prise en compte.', ar: 'لم يتم أخذ تركيبة العقدة في الاعتبار.', ja: ''
  },
  '罗口部位': {
    cn: '罗口部位', en: 'Luokou area', th: 'พื้นที่หลัวโข่ว', vn: 'Khu vực Luokou', es: 'Área de Luokou',
    pt: 'Área de Luokou', id_lang: 'Daerah Luokou', ru: 'район Луокоу', fr: 'région de Luokou', ar: 'منطقة لوكو', ja: ''
  },
  '罗曼棉': {
    cn: '罗曼棉', en: 'Roman cotton', th: 'ผ้าฝ้ายโรมัน', vn: 'Bông La Mã', es: 'Algodón romano',
    pt: 'Algodão romano', id_lang: 'kapas Romawi', ru: 'римский хлопок', fr: 'coton romain', ar: 'القطن الروماني', ja: ''
  },
  '罗纹': {
    cn: '罗纹', en: 'Ribbed', th: 'ร่อง', vn: 'có gân', es: 'Acanalado',
    pt: 'Canelado', id_lang: 'Bergaris', ru: 'Ребристый', fr: 'nervuré', ar: 'مضلع', ja: ''
  },
  '罗纹部位': {
    cn: '罗纹部位', en: 'Ribbed area', th: 'บริเวณที่เป็นร่อง', vn: 'Vùng có gân', es: 'Área acanalada',
    pt: 'Área com nervuras', id_lang: 'Area berusuk', ru: 'Ребристая область', fr: 'Zone nervurée', ar: 'منطقة مضلعة', ja: ''
  },
  '罗纹除外': {
    cn: '罗纹除外', en: 'Except for ribbed', th: 'ยกเว้นแบบมีร่อง', vn: 'Ngoại trừ loại có gân', es: 'Excepto por las acanaladas',
    pt: 'Exceto para canelado', id_lang: 'Kecuali yang bergaris-garis', ru: 'За исключением ребристых', fr: 'À l&#39;exception des côtelés', ar: 'باستثناء المضلع', ja: ''
  },
  '罗纹面料': {
    cn: '罗纹面料', en: 'Ribbed fabric', th: 'ผ้าลายริ้ว', vn: 'Vải gân', es: 'Tejido acanalado',
    pt: 'Tecido canelado', id_lang: 'Kain bergaris', ru: 'Ребристая ткань', fr: 'Tissu côtelé', ar: 'قماش مضلع', ja: ''
  },
  '罗马丝光': {
    cn: '罗马丝光', en: 'Roman silk', th: 'ผ้าไหมโรมัน', vn: 'Lụa La Mã', es: 'seda romana',
    pt: 'Seda romana', id_lang: 'sutra Romawi', ru: 'римский шелк', fr: 'Soie romaine', ar: 'الحرير الروماني', ja: ''
  },
  '罗马布': {
    cn: '罗马布', en: 'Romanobu', th: 'โรมาโนบุ', vn: 'Romanobu', es: 'Romanobu',
    pt: 'Romanobu', id_lang: 'Romanobu', ru: 'Романобу', fr: 'Romanobu', ar: 'رومانوبو', ja: ''
  },
  '羊毛': {
    cn: '羊毛', en: 'wool', th: 'ขนสัตว์', vn: 'len', es: 'lana',
    pt: 'lã', id_lang: 'wol', ru: 'шерсть', fr: 'laine', ar: 'صوف', ja: ''
  },
  '羊毛毡': {
    cn: '羊毛毡', en: 'wool felt', th: 'สักหลาดขนสัตว์', vn: 'nỉ len', es: 'fieltro de lana',
    pt: 'feltro de lã', id_lang: 'wol felt', ru: 'шерстяной войлок', fr: 'feutre de laine', ar: 'لباد صوفي', ja: ''
  },
  '羊毛混纺': {
    cn: '羊毛混纺', en: 'wool blend', th: 'ผ้าขนสัตว์ผสม', vn: 'hỗn hợp len', es: 'mezcla de lana',
    pt: 'mistura de lã', id_lang: 'campuran wol', ru: 'смесь шерсти', fr: 'mélange de laine', ar: 'مزيج الصوف', ja: ''
  },
  '羊毛混纺面料': {
    cn: '羊毛混纺面料', en: 'wool blend fabric', th: 'ผ้าผสมขนสัตว์', vn: 'vải pha len', es: 'tejido de mezcla de lana',
    pt: 'tecido de mistura de lã', id_lang: 'kain campuran wol', ru: 'ткань из смеси шерсти', fr: 'tissu mélangé de laine', ar: 'قماش من مزيج الصوف', ja: ''
  },
  '羊皮革': {
    cn: '羊皮革', en: 'sheepskin', th: 'หนังแกะ', vn: 'da cừu', es: 'piel de carnero',
    pt: 'pele de carneiro', id_lang: 'kulit domba', ru: 'овечья шкура', fr: 'peau de mouton', ar: 'جلد الغنم', ja: ''
  },
  '羊绒': {
    cn: '羊绒', en: 'cashmere', th: 'แคชเมียร์', vn: 'len cashmere', es: 'cachemira',
    pt: 'caxemira', id_lang: 'kasmir', ru: 'кашемир', fr: 'cachemire', ar: 'الكشمير', ja: ''
  },
  '羊绒羊毛': {
    cn: '羊绒羊毛', en: 'cashmere wool', th: 'ขนแกะแคชเมียร์', vn: 'len cashmere', es: 'lana de cachemira',
    pt: 'lã de caxemira', id_lang: 'wol kasmir', ru: 'кашемировая шерсть', fr: 'laine cachemire', ar: 'صوف الكشمير', ja: ''
  },
  '羊驼毛': {
    cn: '羊驼毛', en: 'alpaca wool', th: 'ขนอัลปากา', vn: 'len alpaca', es: 'lana de alpaca',
    pt: 'lã de alpaca', id_lang: 'wol alpaka', ru: 'шерсть альпаки', fr: 'laine d&#39;alpaga', ar: 'صوف الألبكة', ja: ''
  },
  '美丽奴羊毛': {
    cn: '美丽奴羊毛', en: 'Merino wool', th: 'ขนแกะเมอริโน', vn: 'Len Merino', es: 'lana merino',
    pt: 'Lã Merino', id_lang: 'Wol Merino', ru: 'Мериносовая шерсть', fr: 'laine mérinos', ar: 'صوف ميرينو', ja: ''
  },
  '美丽诺羊毛': {
    cn: '美丽诺羊毛', en: 'Merino Wool', th: 'ขนแกะเมอริโน', vn: 'Len merino', es: 'Lana merina',
    pt: 'Lã merino', id_lang: 'Wol merino', ru: 'Шерсть мериноса', fr: 'Laine mérinos', ar: 'صوف ميرينو', ja: ''
  },
  '美国码': {
    cn: '美国码', en: 'US Size', th: 'ไซซ์อเมริกา', vn: 'Cỡ US', es: 'Talla US',
    pt: 'Tamanho US', id_lang: 'Ukuran US', ru: 'Размер US', fr: 'Taille US', ar: 'مقاس US', ja: ''
  },
  '羽毛': {
    cn: '羽毛', en: 'Feather', th: 'ขนนก', vn: 'Lông', es: 'Pluma',
    pt: 'Pluma', id_lang: 'Bulu', ru: 'Перо', fr: 'Plume', ar: 'ريش', ja: ''
  },
  '羽绒': {
    cn: '羽绒', en: 'Down', th: 'ขนเป็ด / ขนห่าน', vn: 'Lông vũ', es: 'Plumón',
    pt: 'Penugem / Plumas', id_lang: 'Bulu angsa', ru: 'Пух', fr: 'Duvet', ar: 'زغب / ريش ناعم', ja: ''
  },
  '翠绿': {
    cn: '翠绿', en: 'Emerald green', th: 'สีเขียวมรกต', vn: 'màu xanh ngọc lục bảo', es: 'verde esmeralda',
    pt: 'Verde esmeralda', id_lang: 'Hijau zamrud', ru: 'Изумрудно-зеленый', fr: 'vert émeraude', ar: 'أخضر زمردي', ja: ''
  },
  '翠绿条纹': {
    cn: '翠绿条纹', en: 'Emerald Green Stripes', th: 'ลายทางสีเขียวมรกต', vn: 'Sọc xanh ngọc lục bảo', es: 'Rayas verde esmeralda',
    pt: 'Listras verde-esmeralda', id_lang: 'Garis-garis Hijau Zamrud', ru: 'Изумрудно-зеленые полосы', fr: 'Rayures vert émeraude', ar: 'خطوط خضراء زمردية', ja: ''
  },
  '翠绿花纹': {
    cn: '翠绿花纹', en: 'Emerald Green Pattern', th: 'ลวดลายสีเขียวมรกต', vn: 'Họa tiết màu xanh ngọc lục bảo', es: 'Patrón verde esmeralda',
    pt: 'Padrão Verde Esmeralda', id_lang: 'Pola Hijau Zamrud', ru: 'Изумрудно-зеленый узор', fr: 'Motif vert émeraude', ar: 'نقش أخضر زمردي', ja: ''
  },
  '翻领': {
    cn: '翻领', en: 'lapel', th: 'ปก', vn: 've áo', es: 'solapa',
    pt: 'lapela', id_lang: 'kelapak', ru: 'лацкан', fr: 'revers', ar: 'طية صدر السترة', ja: ''
  },
  '聚丙烯': {
    cn: '聚丙烯', en: 'Polypropylene', th: 'โพลีโพรพิลีน', vn: 'Polypropylene', es: 'Polipropileno',
    pt: 'Polipropileno', id_lang: 'Polipropilena', ru: 'Полипропилен', fr: 'Polypropylène', ar: 'بولي بروبيلين', ja: ''
  },
  '聚丙烯复合纤维': {
    cn: '聚丙烯复合纤维', en: 'Polypropylene composite fiber', th: 'เส้นใยคอมโพสิตโพลีโพรพีลีน', vn: 'Sợi composite polypropylene', es: 'Fibra compuesta de polipropileno',
    pt: 'fibra composta de polipropileno', id_lang: 'Serat komposit polipropilena', ru: 'Композитное полипропиленовое волокно', fr: 'Fibre composite de polypropylène', ar: 'ألياف البولي بروبيلين المركبة', ja: ''
  },
  '聚乙烯': {
    cn: '聚乙烯', en: 'polyethylene', th: 'โพลีเอทิลีน', vn: 'polyetylen', es: 'polietileno',
    pt: 'polietileno', id_lang: 'polietilen', ru: 'полиэтилен', fr: 'polyéthylène', ar: 'البولي إيثيلين', ja: ''
  },
  '聚氨酯': {
    cn: '聚氨酯', en: 'polyurethane', th: 'โพลียูรีเทน', vn: 'polyurethane', es: 'poliuretano',
    pt: 'poliuretano', id_lang: 'poliuretan', ru: 'полиуретан', fr: 'polyuréthane', ar: 'البولي يوريثان', ja: ''
  },
  '聚氨酯合成革': {
    cn: '聚氨酯合成革', en: 'Polyurethane synthetic leather', th: 'หนังสังเคราะห์โพลียูรีเทน', vn: 'Da tổng hợp polyurethane', es: 'Piel sintética de poliuretano',
    pt: 'Couro sintético de poliuretano', id_lang: 'Kulit sintetis poliuretan', ru: 'Искусственная кожа из полиуретана', fr: 'cuir synthétique en polyuréthane', ar: 'جلد صناعي من البولي يوريثان', ja: ''
  },
  '聚氨酯弹性纤维': {
    cn: '聚氨酯弹性纤维', en: 'Elastane', th: 'อีลาสเทน', vn: 'Elastane', es: 'Elastano',
    pt: 'Elastano', id_lang: 'Elastane', ru: 'Эластан', fr: 'Élasthanne', ar: 'إيلاستين', ja: 'ポリウレタン'
  },
  '聚氯乙烯合成革': {
    cn: '聚氯乙烯合成革', en: 'Polyvinyl chloride synthetic leather', th: 'หนังสังเคราะห์โพลีไวนิลคลอไรด์', vn: 'Da tổng hợp polyvinyl clorua', es: 'cuero sintético de cloruro de polivinilo',
    pt: 'couro sintético de cloreto de polivinila', id_lang: 'Kulit sintetis polivinil klorida', ru: 'Искусственная кожа из поливинилхлорида', fr: 'cuir synthétique en polychlorure de vinyle', ar: 'جلد صناعي من كلوريد البولي فينيل', ja: ''
  },
  '聚烯烃弹性纤维': {
    cn: '聚烯烃弹性纤维', en: 'Polyolefin elastic fibers', th: 'เส้นใยยืดหยุ่นโพลีโอเลฟิน', vn: 'Sợi đàn hồi polyolefin', es: 'fibras elásticas de poliolefina',
    pt: 'Fibras elásticas de poliolefina', id_lang: 'Serat elastis poliolefin', ru: 'Полиолефиновые эластичные волокна', fr: 'fibres élastiques de polyoléfine', ar: 'ألياف البولي أوليفين المرنة', ja: ''
  },
  '聚脂纤维': {
    cn: '聚脂纤维', en: 'polyester fiber', th: 'เส้นใยโพลีเอสเตอร์', vn: 'sợi polyester', es: 'fibra de poliéster',
    pt: 'fibra de poliéster', id_lang: 'serat poliester', ru: 'полиэфирное волокно', fr: 'fibre de polyester', ar: 'ألياف البوليستر', ja: ''
  },
  '聚酯': {
    cn: '聚酯', en: 'Polyester', th: 'โพลีเอสเตอร์', vn: 'Polyester', es: 'Poliéster',
    pt: 'Poliéster', id_lang: 'Poliester', ru: 'Полиэстер', fr: 'Polyester', ar: 'بوليستر', ja: ''
  },
  '聚酯复合弹性纤维': {
    cn: '聚酯复合弹性纤维', en: 'Polyester composite elastic fiber', th: 'เส้นใยยืดหยุ่นคอมโพสิตโพลีเอสเตอร์', vn: 'sợi đàn hồi composite polyester', es: 'fibra elástica compuesta de poliéster',
    pt: 'Fibra elástica composta de poliéster', id_lang: 'Serat elastis komposit poliester', ru: 'Полиэстерное композитное эластичное волокно', fr: 'Fibre élastique composite en polyester', ar: 'ألياف البوليستر المرنة المركبة', ja: ''
  },
  '聚酯复合纤维': {
    cn: '聚酯复合纤维', en: 'Polyester composite fiber', th: 'เส้นใยคอมโพสิตโพลีเอสเตอร์', vn: 'Sợi composite polyester', es: 'fibra compuesta de poliéster',
    pt: 'Fibra composta de poliéster', id_lang: 'Serat komposit poliester', ru: 'Полиэфирное композитное волокно', fr: 'Fibre composite de polyester', ar: 'ألياف البوليستر المركبة', ja: ''
  },
  '聚酯纤维': {
    cn: '聚酯纤维', en: 'Polyester fiber', th: 'เส้นใยโพลีเอสเตอร์', vn: 'Sợi polyester', es: 'fibra de poliéster',
    pt: 'Fibra de poliéster', id_lang: 'Serat poliester', ru: 'Полиэфирное волокно', fr: 'Fibre de polyester', ar: 'بوليسترين', ja: ''
  },
  '聚酯纤维/涤纶': {
    cn: '聚酯纤维/涤纶', en: 'Polyester', th: 'โพลีเอสเตอร์', vn: 'Polyester', es: 'Poliéster',
    pt: 'Poliéster', id_lang: 'Poliester', ru: 'Полиэстер', fr: 'Polyester', ar: 'بوليستر', ja: ''
  },
  '聚酯纤维半精纺': {
    cn: '聚酯纤维半精纺', en: 'Semi-worsted polyester fibers', th: 'เส้นใยโพลีเอสเตอร์กึ่งเวิร์ส', vn: 'Sợi polyester bán chải kỹ', es: 'Fibras de poliéster semi-peinado',
    pt: 'Fibras de poliéster semi-penteadas', id_lang: 'Serat poliester semi-worsted', ru: 'Полукамвольные полиэфирные волокна', fr: 'Fibres de polyester semi-peignées', ar: 'ألياف البوليستر شبه الصوفية', ja: ''
  },
  '聚酯纤维粗纺': {
    cn: '聚酯纤维粗纺', en: 'Coarse spinning of polyester fibers', th: 'การปั่นเส้นใยโพลีเอสเตอร์แบบหยาบ', vn: 'Quá trình kéo sợi thô của sợi polyester', es: 'Hilado grueso de fibras de poliéster',
    pt: 'Fiação grosseira de fibras de poliéster', id_lang: 'Pemintalan kasar serat poliester', ru: 'Грубое прядение полиэфирных волокон', fr: 'Filage grossier des fibres de polyester', ar: 'الغزل الخشن لألياف البوليستر', ja: ''
  },
  '聚酯纤维精纺': {
    cn: '聚酯纤维精纺', en: 'worsted polyester fibers', th: 'เส้นใยโพลีเอสเตอร์แบบหวี', vn: 'sợi polyester chải kỹ', es: 'fibras de poliéster peinadas',
    pt: 'fibras de poliéster penteadas', id_lang: 'serat poliester worsted', ru: 'камвольные полиэфирные волокна', fr: 'fibres de polyester peignées', ar: 'ألياف البوليستر الصوفية', ja: ''
  },
  '聚酯纤维薄膜': {
    cn: '聚酯纤维薄膜', en: 'Polyester fiber film', th: 'ฟิล์มใยโพลีเอสเตอร์', vn: 'Màng sợi polyester', es: 'película de fibra de poliéster',
    pt: 'Filme de fibra de poliéster', id_lang: 'Film serat poliester', ru: 'Пленка из полиэфирного волокна', fr: 'film de fibres de polyester', ar: 'فيلم من البوليستر', ja: ''
  },
  '聚酯纤维面料': {
    cn: '聚酯纤维面料', en: 'Polyester fiber fabric', th: 'ผ้าใยโพลีเอสเตอร์', vn: 'Vải sợi polyester', es: 'Tejido de fibra de poliéster',
    pt: 'Tecido de fibra de poliéster', id_lang: 'Kain serat poliester', ru: 'Ткань из полиэфирного волокна', fr: 'tissu en fibres de polyester', ar: 'قماش من ألياف البوليستر', ja: ''
  },
  '聚酯薄膜': {
    cn: '聚酯薄膜', en: 'Polyester film', th: 'ฟิล์มโพลีเอสเตอร์', vn: 'Màng polyester', es: 'película de poliéster',
    pt: 'Filme de poliéster', id_lang: 'Film poliester', ru: 'Полиэфирная пленка', fr: 'film polyester', ar: 'فيلم بوليستر', ja: ''
  },
  '聚酯薄膜纤维': {
    cn: '聚酯薄膜纤维', en: 'Polyester film fiber', th: 'เส้นใยฟิล์มโพลีเอสเตอร์', vn: 'Sợi màng polyester', es: 'fibra de película de poliéster',
    pt: 'Fibra de filme de poliéster', id_lang: 'Serat film poliester', ru: 'Полиэфирное пленочное волокно', fr: 'Fibre de film polyester', ar: 'فيلم بوليستر', ja: ''
  },
  '聚酯钎维': {
    cn: '聚酯钎维', en: 'Polyester fiber', th: 'เส้นใยโพลีเอสเตอร์', vn: 'Sợi polyester', es: 'fibra de poliéster',
    pt: 'Fibra de poliéster', id_lang: 'Serat poliester', ru: 'Полиэфирное волокно', fr: 'Fibre de polyester', ar: 'بوليسترين', ja: ''
  },
  '聚酰胺': {
    cn: '聚酰胺', en: 'polyamide', th: 'โพลีอะไมด์', vn: 'polyamide', es: 'poliamida',
    pt: 'poliamida', id_lang: 'poliamida', ru: 'полиамид', fr: 'polyamide', ar: 'بولي أميد', ja: ''
  },
  '聚酰胺复合纤维': {
    cn: '聚酰胺复合纤维', en: 'Polyamide composite fiber', th: 'เส้นใยคอมโพสิตโพลีอะไมด์', vn: 'Sợi composite polyamide', es: 'fibra compuesta de poliamida',
    pt: 'fibra composta de poliamida', id_lang: 'Serat komposit poliamida', ru: 'Полиамидное композитное волокно', fr: 'Fibre composite de polyamide', ar: 'ألياف مركبة من البولي أميد', ja: ''
  },
  '肌理': {
    cn: '肌理', en: 'Texture', th: 'พื้นผิว', vn: 'Kết cấu', es: 'Textura',
    pt: 'Textura', id_lang: 'Tekstur', ru: 'Текстура', fr: 'Texture', ar: 'نَسِيج', ja: ''
  },
  '肌理微皱': {
    cn: '肌理微皱', en: 'Micro-wrinkles', th: 'ริ้วรอยเล็กๆ', vn: 'Nếp nhăn siêu nhỏ', es: 'Microarrugas',
    pt: 'Micro-rugas', id_lang: 'Kerutan mikro', ru: 'Микроморщины', fr: 'Micro-rides', ar: 'تجاعيد دقيقة', ja: ''
  },
  '肌理提花': {
    cn: '肌理提花', en: 'Jacquard', th: 'จาการ์ด', vn: 'Jacquard', es: 'Jacquard',
    pt: 'Jacquard', id_lang: 'Jacquard', ru: 'Жаккар', fr: 'Jacquard', ar: 'جاكارد', ja: ''
  },
  '肌理梭织面料': {
    cn: '肌理梭织面料', en: 'Textured woven fabric', th: 'ผ้าทอที่มีลวดลาย', vn: 'Vải dệt có kết cấu', es: 'Tejido texturizado',
    pt: 'Tecido texturizado', id_lang: 'Kain tenun bertekstur', ru: 'Текстурированная тканая ткань', fr: 'Tissu tissé texturé', ar: 'قماش منسوج ذو ملمس مميز', ja: ''
  },
  '肌理针织': {
    cn: '肌理针织', en: 'Textured knit', th: 'ผ้าถักเนื้อสัมผัส', vn: 'Dệt kim có kết cấu', es: 'Tejido texturizado',
    pt: 'Tricô texturizado', id_lang: 'Rajutan bertekstur', ru: 'Вязаная фактурная вязка', fr: 'Tricot texturé', ar: 'نسيج محبوك ذو ملمس مميز', ja: ''
  },
  '肌理面料': {
    cn: '肌理面料', en: 'Textured fabrics', th: 'ผ้าที่มีลวดลาย', vn: 'Vải dệt', es: 'Telas texturizadas',
    pt: 'Tecidos texturizados', id_lang: 'Kain bertekstur', ru: 'Текстурированные ткани', fr: 'Tissus texturés', ar: 'أقمشة ذات ملمس مميز', ja: ''
  },
  '肤色': {
    cn: '肤色', en: 'color', th: 'สี', vn: 'màu sắc', es: 'color',
    pt: 'cor', id_lang: 'warna', ru: 'цвет', fr: 'couleur', ar: 'لون', ja: ''
  },
  '肩口': {
    cn: '肩口', en: 'Shoulder mouth', th: 'ปากไหล่', vn: 'Miệng vai', es: 'boca del hombro',
    pt: 'Boca do ombro', id_lang: 'Mulut bahu', ru: 'Плечо рот', fr: 'Épaule bouche', ar: 'كتف الفم', ja: ''
  },
  '肩片': {
    cn: '肩片', en: 'shoulder plate', th: 'แผ่นรองไหล่', vn: 'tấm vai', es: 'placa de hombro',
    pt: 'placa de ombro', id_lang: 'pelat bahu', ru: 'плечевая пластина', fr: 'plaque d&#39;épaule', ar: 'لوحة الكتف', ja: ''
  },
  '胆布': {
    cn: '胆布', en: 'Bronchodilator', th: 'ยาขยายหลอดลม', vn: 'Thuốc giãn phế quản', es: 'Broncodilatador',
    pt: 'Broncodilatador', id_lang: 'Bronkodilator', ru: 'Бронходилататор', fr: 'bronchodilatateur', ar: 'موسع قصبي', ja: ''
  },
  '背包材质为纺织布料，使用时注意勿接触毛糙服装或配件，否则可能导致面料起球影响外观；注意防水，雨、雪、雾天气不适合使用；如有局部脏污可用有机溶剂局部擦拭去除污渍，也可送专业清洗店进行处理。': {
    cn: '背包材质为纺织布料，使用时注意勿接触毛糙服装或配件，否则可能导致面料起球影响外观；注意防水，雨、雪、雾天气不适合使用；如有局部脏污可用有机溶剂局部擦拭去除污渍，也可送专业清洗店进行处理。', en: 'The backpack is made of textile fabric. When using it, avoid contact with rough clothing or accessories, as this may cause pilling and affect its appearance. It is not waterproof and is not suitable for use in rainy, snowy, or foggy weather. For local stains, you can use organic solvents to wipe them off locally, or send it to a professional cleaning store for treatment.', th: 'วัสดุของกระเป๋าเป็นผ้าสิ่งทอ โปรดหลีกเลี่ยงการสัมผัสกับเสื้อผ้าหรือเครื่องประดับที่มีพื้นผิวหยาบขณะใช้งาน เพราะอาจทำให้ผ้าเป็นขุยและส่งผลต่อรูปลักษณ์ได้ โปรดกันน้ำ ห้ามใช้ในสภาพอากาศที่มีฝนตก หิมะตก หรือหมอก หากมีคราบสกปรกเฉพาะจุด สามารถใช้ตัวทำละลายอินทรีย์เช็ดทำความสะอาดคราบได้ หรือส่งร้านซักแห้งมืออาชีพเพื่อจัดการ', vn: 'Chất liệu vải của ba lô là vải dệt, khi sử dụng hãy chú ý không để tiếp xúc với quần áo hoặc phụ kiện thô ráp, nếu không có thể gây xù lông vải, ảnh hưởng đến vẻ ngoài; chú ý chống nước, không thích hợp sử dụng trong thời tiết mưa, tuyết, sương mù; nếu có vết bẩn cục bộ có thể dùng dung môi hữu cơ để lau sạch vết bẩn, hoặc mang đến tiệm giặt chuyên nghiệp để xử lý.', es: 'El material de la mochila es tela textil. Al usarla, evita el contacto con ropa o accesorios ásperos, ya que esto podría causar que la tela forme bolitas, afectando su apariencia. Es importante que sea impermeable; no es adecuada para usar en condiciones de lluvia, nieve o niebla. Si se mancha localmente, puedes limpiarla con un solvente orgánico para eliminar la suciedad, o llevarla a una tintorería profesional para su tratamiento.',
    pt: 'O material da mochila é tecido. Ao usar, evite o contato com roupas ou acessórios ásperos para não causar formação de "bolinhas" no tecido e afetar a aparência. Atenção à impermeabilidade, não é adequado para uso em dias de chuva, neve ou neblina. Se houver sujeira localizada, pode-se usar solvente orgânico para limpar a mancha localmente, ou então enviar para uma lavanderia profissional.', id_lang: 'Bahan tas ransel adalah kain tekstil. Saat digunakan, hindari kontak dengan pakaian atau aksesori yang kasar karena dapat menyebabkan kain berbulu dan memengaruhi tampilan. Perhatikan ketahanan air; tidak cocok digunakan saat cuaca hujan, salju, atau berkabut. Jika ada noda lokal, Anda dapat mengelapnya dengan pelarut organik untuk menghilangkan noda, atau membawanya ke toko binatu profesional untuk dibersihkan.', ru: 'Материал рюкзака — текстиль. Во избежание образования катышков и порчи внешнего вида, не допускайте контакта с грубой одеждой или аксессуарами. Берегите от влаги, не используйте в дождь, снег или туман. Небольшие загрязнения можно удалить с помощью органических растворителей, либо отдать в профессиональную химчистку.', fr: 'Le sac à dos est fait de tissu. Lors de son utilisation, évitez le contact avec des vêtements ou accessoires rugueux, car cela pourrait provoquer des bouloches qui altéreraient son aspect. Il est également important de le protéger de l\'eau, il ne convient donc pas aux jours de pluie, de neige ou de brouillard. Pour les salissures localisées, vous pouvez utiliser un solvant organique pour les nettoyer, ou confier le nettoyage à un professionnel.', ar: 'مادة الحقيبة هي قماش منسوج، يرجى الانتباه عند الاستخدام لتجنب ملامسة الملابس أو الإكسسوارات الخشنة، فقد يؤدي ذلك إلى ظهور كرات الوبر على القماش ويؤثر على المظهر؛ انتبه للماء، ولا يُنصح بالاستخدام في الطقس الممطر أو الثلجي أو الضبابي؛ في حالة وجود اتساخ موضعي، يمكن استخدام مذيب عضوي لمسح البقعة موضعيًا، أو يمكن إرسالها إلى متجر تنظيف متخصص لمعالجتها.', ja: ''
  },
  '背心裙面料': {
    cn: '背心裙面料', en: 'Vest dress fabric', th: 'ผ้าสำหรับชุดเดรสเสื้อกั๊ก', vn: 'Vải may áo vest', es: 'Tela para vestido tipo chaleco',
    pt: 'tecido para vestido colete', id_lang: 'Kain gaun rompi', ru: 'Ткань для жилетного платья', fr: 'tissu pour robe gilet', ar: 'قماش فستان صدرية', ja: ''
  },
  '背心面料': {
    cn: '背心面料', en: 'Vest fabric', th: 'ผ้าสำหรับทำเสื้อกั๊ก', vn: 'Vải áo vest', es: 'Tela para chaleco',
    pt: 'Tecido do colete', id_lang: 'Kain rompi', ru: 'Ткань жилета', fr: 'Tissu pour gilet', ar: 'قماش السترة', ja: ''
  },
  '胶印花面料': {
    cn: '胶印花面料', en: 'Glue-printed fabrics', th: 'ผ้าพิมพ์ลายด้วยกาว', vn: 'Vải in keo', es: 'Telas estampadas con pegamento',
    pt: 'Tecidos estampados com cola', id_lang: 'Kain yang dicetak dengan lem', ru: 'Ткани с клеевой печатью', fr: 'Tissus imprimés à la colle', ar: 'أقمشة مطبوعة بالغراء', ja: ''
  },
  '胶浆印面料': {
    cn: '胶浆印面料', en: 'Printed fabric with adhesive ink', th: 'ผ้าพิมพ์ลายด้วยหมึกกาว', vn: 'Vải in với mực dán', es: 'Tela estampada con tinta adhesiva',
    pt: 'Tecido estampado com tinta adesiva', id_lang: 'Kain bercetak dengan tinta perekat', ru: 'Ткань с принтом, нанесенным клейкими чернилами.', fr: 'Tissu imprimé avec encre adhésive', ar: 'قماش مطبوع بحبر لاصق', ja: ''
  },
  '胶除外': {
    cn: '胶除外', en: 'Except for glue', th: 'ยกเว้นกาว', vn: 'Ngoại trừ keo dán', es: 'Excepto el pegamento',
    pt: 'Exceto a cola.', id_lang: 'Kecuali lem', ru: 'За исключением клея', fr: 'À l&#39;exception de la colle', ar: 'باستثناء الغراء', ja: ''
  },
  '脚口': {
    cn: '脚口', en: 'foot', th: 'เท้า', vn: 'chân', es: 'pie',
    pt: 'pé', id_lang: 'kaki', ru: 'ступня', fr: 'pied', ar: 'قدم', ja: ''
  },
  '脚面': {
    cn: '脚面', en: 'instep', th: 'หลังเท้า', vn: 'mu bàn chân', es: 'empeine',
    pt: 'peito do pé', id_lang: 'punggung kaki', ru: 'подъем', fr: 'cambrure', ar: 'مشط القدم', ja: ''
  },
  '脱卸领': {
    cn: '脱卸领', en: 'Remove collar', th: 'ถอดปลอกคอออก', vn: 'Tháo cổ áo', es: 'Quitar el collar',
    pt: 'Remover a coleira', id_lang: 'Lepaskan kerah', ru: 'Снимите ошейник', fr: 'Retirer le collier', ar: 'قم بإزالة الطوق', ja: ''
  },
  '脱卸领子面料': {
    cn: '脱卸领子面料', en: 'Remove collar fabric', th: 'ถอดผ้าปกเสื้อออก', vn: 'Tháo bỏ phần vải cổ áo.', es: 'Quitar la tela del cuello',
    pt: 'Remova o tecido da gola.', id_lang: 'Lepaskan kain kerah.', ru: 'Снимите ткань воротника', fr: 'Retirer le tissu du col', ar: 'قم بإزالة قماش الياقة', ja: ''
  },
  '腈纶': {
    cn: '腈纶', en: 'acrylic fiber', th: 'เส้นใยอะคริลิก', vn: 'sợi acrylic', es: 'fibra acrílica',
    pt: 'fibra acrílica', id_lang: 'serat akrilik', ru: 'акриловое волокно', fr: 'fibre acrylique', ar: 'ألياف أكريليك', ja: ''
  },
  '腰': {
    cn: '腰', en: 'waist', th: 'เอว', vn: 'thắt lưng', es: 'cintura',
    pt: 'cintura', id_lang: 'pinggang', ru: 'талия', fr: 'taille', ar: 'وَسَط', ja: ''
  },
  '腰外层': {
    cn: '腰外层', en: 'outer waist layer', th: 'ชั้นนอกของเอว', vn: 'lớp eo ngoài', es: 'capa exterior de la cintura',
    pt: 'camada externa da cintura', id_lang: 'lapisan pinggang luar', ru: 'внешний поясной слой', fr: 'couche extérieure de la taille', ar: 'الطبقة الخارجية للخصر', ja: ''
  },
  '腰带': {
    cn: '腰带', en: 'belt', th: 'เข็มขัด', vn: 'thắt lưng', es: 'cinturón',
    pt: 'cinto', id_lang: 'sabuk', ru: 'пояс', fr: 'ceinture', ar: 'حزام', ja: ''
  },
  '腰带丝巾面料': {
    cn: '腰带丝巾面料', en: 'Belt and scarf fabric', th: 'ผ้าสำหรับทำเข็มขัดและผ้าพันคอ', vn: 'Vải thắt lưng và khăn quàng cổ', es: 'Tela para cinturón y bufanda',
    pt: 'Tecido para cinto e lenço', id_lang: 'Kain ikat pinggang dan syal', ru: 'Ткань для пояса и шарфа', fr: 'Tissu pour ceinture et foulard', ar: 'قماش الحزام والوشاح', ja: ''
  },
  '腰成分不计': {
    cn: '腰成分不计', en: 'Waist component not counted', th: 'ส่วนประกอบเอวไม่นับรวม', vn: 'Thành phần vòng eo không được tính', es: 'El componente de la cintura no se tiene en cuenta.',
    pt: 'Componente da cintura não contabilizado', id_lang: 'Komponen pinggang tidak dihitung', ru: 'Компонент талии не учитывается', fr: 'Le tour de taille n&#39;est pas pris en compte.', ar: 'لم يتم احتساب جزء الخصر', ja: ''
  },
  '腰里': {
    cn: '腰里', en: 'waist', th: 'เอว', vn: 'thắt lưng', es: 'cintura',
    pt: 'cintura', id_lang: 'pinggang', ru: 'талия', fr: 'taille', ar: 'وَسَط', ja: ''
  },
  '舒张圈': {
    cn: '舒张圈', en: 'diastolic circles', th: 'วงจรไดแอสโตลิก', vn: 'vòng tròn tâm trương', es: 'círculos diastólicos',
    pt: 'círculos diastólicos', id_lang: 'lingkaran diastolik', ru: 'диастолические круги', fr: 'cercles diastoliques', ar: 'الدوائر الانبساطية', ja: ''
  },
  '舒张圈除外': {
    cn: '舒张圈除外', en: 'Excluding diastolic circles', th: 'ไม่รวมวงจรไดแอสโตลิก', vn: 'Không bao gồm các vòng tròn tâm trương', es: 'Excluyendo los círculos diastólicos',
    pt: 'Excluindo círculos diastólicos', id_lang: 'Tidak termasuk lingkaran diastolik', ru: 'Исключая диастолические круги', fr: 'Cercles diastoliques exclus', ar: 'باستثناء الدوائر الانبساطية', ja: ''
  },
  '舒弹棉': {
    cn: '舒弹棉', en: 'Soft cotton', th: 'ผ้าฝ้ายเนื้อนุ่ม', vn: 'Bông mềm mại', es: 'Algodón suave',
    pt: 'Algodão macio', id_lang: 'Katun lembut', ru: 'Мягкий хлопок', fr: 'Coton doux', ar: 'قطن ناعم', ja: ''
  },
  '舒柔棉': {
    cn: '舒柔棉', en: 'Soft cotton', th: 'ผ้าฝ้ายเนื้อนุ่ม', vn: 'Bông mềm mại', es: 'Algodón suave',
    pt: 'Algodão macio', id_lang: 'Katun lembut', ru: 'Мягкий хлопок', fr: 'Coton doux', ar: 'قطن ناعم', ja: ''
  },
  '色织': {
    cn: '色织', en: 'Yarn-dyed', th: 'ย้อมเส้นด้าย', vn: 'Sợi nhuộm', es: 'Teñido en hilo',
    pt: 'Fio tingido', id_lang: 'Benang yang diwarnai', ru: 'Пряжа, окрашенная красителем', fr: 'Teint en fil', ar: 'خيوط مصبوغة', ja: ''
  },
  '色织双面': {
    cn: '色织双面', en: 'Yarn-dyed double-sided', th: 'ย้อมเส้นด้ายสองด้าน', vn: 'Sợi nhuộm hai mặt', es: 'Doble cara teñida con hilo',
    pt: 'Fio tingido em ambos os lados', id_lang: 'Benang yang diwarnai dua sisi', ru: 'Пряжа окрашена с двух сторон', fr: 'Teint en fil double face', ar: 'مصبوغ بالغزل ذو وجهين', ja: ''
  },
  '色织四面弹': {
    cn: '色织四面弹', en: 'Yarn-dyed four-way stretch', th: 'เส้นด้ายย้อมสี ยืดหยุ่นได้สี่ทิศทาง', vn: 'Sợi nhuộm co giãn bốn chiều', es: 'Tejido elástico en cuatro direcciones teñido en hilo',
    pt: 'Tecido tingido em quatro direções com elasticidade.', id_lang: 'Benang yang diwarnai, elastis empat arah', ru: 'Пряжа окрашена и растягивается в четырех направлениях.', fr: 'Fil teint en extensible dans les quatre sens', ar: 'خيوط مصبوغة قابلة للتمدد في أربعة اتجاهات', ja: ''
  },
  '色织平纹': {
    cn: '色织平纹', en: 'Yarn-dyed plain weave', th: 'ผ้าทอเรียบย้อมสีเส้นด้าย', vn: 'Dệt trơn nhuộm sợi', es: 'Tejido liso teñido en hilo',
    pt: 'Tecido liso tingido com fios', id_lang: 'Tenunan polos yang diwarnai benang', ru: 'Пряжа окрашенная, простое переплетение', fr: 'Toile unie teinte en fil', ar: 'نسيج سادة مصبوغ بالغزل', ja: ''
  },
  '色织微泡面料': {
    cn: '色织微泡面料', en: 'Yarn-dyed microbubble fabric', th: 'ผ้าไมโครบับเบิลย้อมสีเส้นด้าย', vn: 'Vải vi bong bóng nhuộm sợi', es: 'Tejido de microburbujas teñido en hilo',
    pt: 'Tecido de microbolhas tingido em fio', id_lang: 'Kain mikrogelembung yang diwarnai benang', ru: 'Ткань с микропузырьками, окрашенная пряжей', fr: 'Tissu à microbulles teint en fil', ar: 'قماش مصبوغ بالغزل ذو فقاعات دقيقة', ja: ''
  },
  '色织提花': {
    cn: '色织提花', en: 'Yarn-dyed jacquard', th: 'แจ็กการ์ดย้อมสีเส้นด้าย', vn: 'Vải jacquard nhuộm sợi', es: 'Jacquard teñido en hilo',
    pt: 'Jacquard tingido com fios', id_lang: 'Jacquard yang diwarnai benang', ru: 'Жаккард, окрашенный пряжей', fr: 'Jacquard teint en fil', ar: 'جاكار مصبوغ بالغزل', ja: ''
  },
  '色织条': {
    cn: '色织条', en: 'yarn stripes', th: 'ลายเส้นไหมพรม', vn: 'sọc sợi', es: 'rayas de hilo',
    pt: 'listras de fios', id_lang: 'garis-garis benang', ru: 'полоски пряжи', fr: 'rayures de fil', ar: 'مسارات الغزل', ja: ''
  },
  '色织条纹': {
    cn: '色织条纹', en: 'Yarn-dyed stripes', th: 'ลายทางย้อมสีเส้นด้าย', vn: 'Sọc nhuộm sợi', es: 'Rayas teñidas con hilo',
    pt: 'Listras tingidas com fios', id_lang: 'Garis-garis yang diwarnai dengan benang', ru: 'Полосы, окрашенные пряжей', fr: 'Rayures teintes en fil', ar: 'شرائط مصبوغة بالغزل', ja: ''
  },
  '色织格子面料': {
    cn: '色织格子面料', en: 'Yarn-dyed plaid fabric', th: 'ผ้าลายสก็อตย้อมสีเส้นด้าย', vn: 'Vải kẻ sọc nhuộm sợi', es: 'Tela a cuadros teñida en hilo',
    pt: 'Tecido xadrez tingido com fios', id_lang: 'Kain kotak-kotak yang diwarnai dengan benang', ru: 'Ткань в клетку, окрашенная пряжей', fr: 'Tissu à carreaux teint en fil', ar: 'قماش كاروهات مصبوغ بالغزل', ja: ''
  },
  '色织格面料': {
    cn: '色织格面料', en: 'Yarn-dyed plaid fabric', th: 'ผ้าลายสก็อตย้อมสีเส้นด้าย', vn: 'Vải kẻ sọc nhuộm sợi', es: 'Tela a cuadros teñida en hilo',
    pt: 'Tecido xadrez tingido com fios', id_lang: 'Kain kotak-kotak yang diwarnai dengan benang', ru: 'Ткань в клетку, окрашенная пряжей', fr: 'Tissu à carreaux teint en fil', ar: 'قماش كاروهات مصبوغ بالغزل', ja: ''
  },
  '色织桑蚕丝': {
    cn: '色织桑蚕丝', en: 'Color-woven mulberry silk', th: 'ผ้าไหมมัลเบอร์รี่ทอสี', vn: 'Lụa tơ tằm dệt màu', es: 'Seda de morera tejida con colores',
    pt: 'Seda de amoreira tecida em cores', id_lang: 'Sutra murbei tenun warna-warni', ru: 'Цветной шелк тутового дерева', fr: 'Soie de mûrier tissée en couleur', ar: 'حرير التوت المنسوج بالألوان', ja: ''
  },
  '色织毛呢': {
    cn: '色织毛呢', en: 'yarn-dyed woolen fabric', th: 'ผ้าขนสัตว์ย้อมเส้นด้าย', vn: 'vải len nhuộm sợi', es: 'tejido de lana teñido en hilo',
    pt: 'tecido de lã tingido em fio', id_lang: 'kain wol yang diwarnai benang', ru: 'шерстяная ткань, окрашенная пряжей', fr: 'tissu de laine teint en fil', ar: 'قماش صوفي مصبوغ بالغزل', ja: ''
  },
  '色织针织': {
    cn: '色织针织', en: 'Yarn-dyed knitwear', th: 'เสื้อถักย้อมสีเส้นด้าย', vn: 'Đồ dệt kim nhuộm sợi', es: 'Prendas de punto teñidas con hilo',
    pt: 'Malhas tingidas com fios', id_lang: 'Pakaian rajut yang diwarnai dengan benang', ru: 'Трикотаж, окрашенный пряжей', fr: 'Tricots teints en fil', ar: 'ملابس محبوكة مصبوغة بالغزل', ja: ''
  },
  '色织面料': {
    cn: '色织面料', en: 'Yarn-dyed fabrics', th: 'ผ้าที่ย้อมเส้นด้าย', vn: 'Vải nhuộm sợi', es: 'Telas teñidas en hilo',
    pt: 'Tecidos tingidos com fios', id_lang: 'Kain yang diwarnai dengan benang', ru: 'Ткани, окрашенные пряжей', fr: 'Tissus teints en fil', ar: 'أقمشة مصبوغة بالغزل', ja: ''
  },
  '芙黎': {
    cn: '芙黎', en: 'Fuli', th: 'ฟูลี่', vn: 'Fuli', es: 'Fuli',
    pt: 'Fuli', id_lang: 'Fuli', ru: 'Фули', fr: 'Fuli', ar: 'فولي', ja: ''
  },
  '芥末黄条纹': {
    cn: '芥末黄条纹', en: 'Mustard yellow stripes', th: 'ลายทางสีเหลืองมัสตาร์ด', vn: 'Sọc màu vàng mù tạt', es: 'rayas amarillo mostaza',
    pt: 'listras amarelo mostarda', id_lang: 'Garis-garis kuning mustard', ru: 'Полосы горчично-желтого цвета', fr: 'Rayures jaune moutarde', ar: 'خطوط صفراء خردلية', ja: ''
  },
  '花型': {
    cn: '花型', en: 'Flower shape', th: 'รูปทรงดอกไม้', vn: 'Hình dạng hoa', es: 'forma de flor',
    pt: 'formato de flor', id_lang: 'Bentuk bunga', ru: 'форма цветка', fr: 'Forme de fleur', ar: 'شكل زهرة', ja: ''
  },
  '花潮如约': {
    cn: '花潮如约', en: 'The Flower Tide Arrives as Promised', th: 'ฤดูดอกไม้บานมาถึงแล้วตามที่คาดการณ์ไว้', vn: 'Thủy triều hoa đã đến đúng như dự đoán.', es: 'La marea de flores llega tal como se prometió.',
    pt: 'A maré de flores chega conforme prometido.', id_lang: 'Gelombang bunga tiba sesuai janji.', ru: 'Цветочная волна наступает, как и было обещано.', fr: 'La marée de fleurs arrive comme promis', ar: 'يأتي موسم الزهور كما وعد', ja: ''
  },
  '花灰': {
    cn: '花灰', en: 'Heather Gray', th: 'สีเทาผสม', vn: 'Màu xám muối tiêu', es: 'Gris vigoré',
    pt: 'Gris vigoré', id_lang: 'Abu-abu melange', ru: 'Серый меланж', fr: 'Gris chiné', ar: 'رمادي ميلانچ', ja: '杢グレー'
  },
  '花纱': {
    cn: '花纱', en: 'Floral yarn', th: 'เส้นด้ายลายดอกไม้', vn: 'sợi hoa', es: 'Hilo floral',
    pt: 'Fio floral', id_lang: 'Benang bunga', ru: 'Цветочная пряжа', fr: 'fil à fleurs', ar: 'خيوط زهرية', ja: ''
  },
  '花纱平纹': {
    cn: '花纱平纹', en: 'Plain weave floral yarn', th: 'เส้นด้ายลายดอกไม้ทอธรรมดา', vn: 'sợi hoa dệt trơn', es: 'hilo floral de tejido liso',
    pt: 'Fio floral de trama simples', id_lang: 'Benang tenun polos bermotif bunga', ru: 'Пряжа простого переплетения с цветочным рисунком', fr: 'fil floral à armure toile', ar: 'خيوط منسوجة سادة بنقشة زهور', ja: ''
  },
  '花纹面料': {
    cn: '花纹面料', en: 'Patterned fabrics', th: 'ผ้าลายต่างๆ', vn: 'Vải có hoa văn', es: 'Telas estampadas',
    pt: 'tecidos estampados', id_lang: 'Kain bermotif', ru: 'Ткани с узорами', fr: 'Tissus à motifs', ar: 'أقمشة منقوشة', ja: ''
  },
  '花色': {
    cn: '花色', en: 'Flower', th: 'ดอกไม้', vn: 'Hoa', es: 'Flor',
    pt: 'Flor', id_lang: 'Bunga', ru: 'Цветок', fr: 'Fleur', ar: 'ورد', ja: ''
  },
  '花色纱': {
    cn: '花色纱', en: 'Floral yarn', th: 'เส้นด้ายลายดอกไม้', vn: 'sợi hoa', es: 'Hilo floral',
    pt: 'Fio floral', id_lang: 'Benang bunga', ru: 'Цветочная пряжа', fr: 'fil à fleurs', ar: 'خيوط زهرية', ja: ''
  },
  '花色纱线': {
    cn: '花色纱线', en: 'Floral yarn', th: 'เส้นด้ายลายดอกไม้', vn: 'sợi hoa', es: 'Hilo floral',
    pt: 'Fio floral', id_lang: 'Benang bunga', ru: 'Цветочная пряжа', fr: 'fil à fleurs', ar: 'خيوط زهرية', ja: ''
  },
  '花边': {
    cn: '花边', en: 'lace', th: 'ลูกไม้', vn: 'ren', es: 'cordón',
    pt: 'renda', id_lang: 'renda', ru: 'кружево', fr: 'dentelle', ar: 'ربط الحذاء', ja: ''
  },
  '花边成分不计': {
    cn: '花边成分不计', en: 'Lace components not counted', th: 'ส่วนประกอบลูกไม้ไม่นับรวม', vn: 'Các thành phần ren không được tính', es: 'Los componentes de encaje no se tienen en cuenta.',
    pt: 'Componentes de renda não contabilizados', id_lang: 'Komponen renda tidak dihitung', ru: 'Компоненты кружева не учитываются', fr: 'Éléments de dentelle non comptabilisés', ar: 'لا يتم احتساب مكونات الدانتيل', ja: ''
  },
  '芸月粉': {
    cn: '芸月粉', en: 'Yunyue powder', th: 'ผงหยุนเยว่', vn: 'Bột Vân Nguyệt', es: 'Polvo de Yunyue',
    pt: 'Pó Yunyue', id_lang: 'Bubuk Yunyue', ru: 'порошок Юньюэ', fr: 'Poudre de Yunyue', ar: 'مسحوق يونيوي', ja: ''
  },
  '苍烟': {
    cn: '苍烟', en: 'Cangyan', th: 'ชางเอี้ยน', vn: 'Thương Nham', es: 'Cangyan',
    pt: 'Cangyan', id_lang: 'Cangyan', ru: 'Кангьян', fr: 'Cangyan', ar: 'كانجيان', ja: ''
  },
  '苎麻': {
    cn: '苎麻', en: 'Ramie', th: 'รามี่', vn: 'Gai', es: 'Ramina',
    pt: 'Rami', id_lang: 'Rami', ru: 'Рами', fr: 'Ramie', ar: 'رامي', ja: ''
  },
  '英国码': {
    cn: '英国码', en: 'UK Size', th: 'ไซซ์อังกฤษ', vn: 'Cỡ UK', es: 'Talla UK',
    pt: 'Tamanho UK', id_lang: 'Ukuran UK', ru: 'Размер UK', fr: 'Taille UK', ar: 'مقاس UK', ja: ''
  },
  '茶绿色': {
    cn: '茶绿色', en: 'tea green', th: 'ชาเขียว', vn: 'trà xanh', es: 'té verde',
    pt: 'chá verde', id_lang: 'teh hijau', ru: 'зеленый чай', fr: 'thé vert', ar: 'الشاي الأخضر', ja: ''
  },
  '茶褐色': {
    cn: '茶褐色', en: 'dark brown', th: 'สีน้ำตาลเข้ม', vn: 'nâu sẫm', es: 'marrón oscuro',
    pt: 'marrom escuro', id_lang: 'cokelat tua', ru: 'темно-коричневый', fr: 'brun foncé', ar: 'بني داكن', ja: ''
  },
  '草灰绿': {
    cn: '草灰绿', en: 'grass gray-green', th: 'หญ้าสีเทาเขียว', vn: 'cỏ màu xám xanh', es: 'hierba verde grisácea',
    pt: 'grama cinza-esverdeada', id_lang: 'rumput abu-abu kehijauan', ru: 'серо-зеленая трава', fr: 'herbe gris-vert', ar: 'عشب رمادي مخضر', ja: ''
  },
  '草绿': {
    cn: '草绿', en: 'grass green', th: 'หญ้าสีเขียว', vn: 'màu xanh lá cây', es: 'verde hierba',
    pt: 'verde grama', id_lang: 'hijau rumput', ru: 'зелёная трава', fr: 'gazon vert', ar: 'أخضر عشبي', ja: ''
  },
  '草绿色': {
    cn: '草绿色', en: 'grass green', th: 'หญ้าสีเขียว', vn: 'màu xanh lá cây', es: 'verde hierba',
    pt: 'verde grama', id_lang: 'hijau rumput', ru: 'зелёная трава', fr: 'gazon vert', ar: 'أخضر عشبي', ja: ''
  },
  '荧光绿': {
    cn: '荧光绿', en: 'Fluorescent green', th: 'สีเขียวเรืองแสง', vn: 'Xanh huỳnh quang', es: 'verde fluorescente',
    pt: 'Verde fluorescente', id_lang: 'Hijau neon', ru: 'Флуоресцентный зеленый', fr: 'Vert fluorescent', ar: 'أخضر فلورسنت', ja: ''
  },
  '荧光绿花纹': {
    cn: '荧光绿花纹', en: 'Fluorescent green pattern', th: 'ลวดลายสีเขียวเรืองแสง', vn: 'Họa tiết màu xanh huỳnh quang', es: 'Patrón verde fluorescente',
    pt: 'Padrão verde fluorescente', id_lang: 'Pola hijau berpendar', ru: 'Флуоресцентный зеленый узор', fr: 'Motif vert fluorescent', ar: 'نمط أخضر فلوري', ja: ''
  },
  '荷叶边': {
    cn: '荷叶边', en: 'Ruffles', th: 'ระบาย', vn: 'Bèo nhún', es: 'Volantes',
    pt: 'Babados', id_lang: 'Rumbai-rumbai', ru: 'Оборки', fr: 'Volants', ar: 'الكشكشة', ja: ''
  },
  '莫代尔': {
    cn: '莫代尔', en: 'Modal', th: 'โมดัล', vn: 'Modal', es: 'Modal',
    pt: 'Modal', id_lang: 'Modal', ru: 'Модальный', fr: 'Modal', ar: 'نموذج', ja: ''
  },
  '莫代尔纤维': {
    cn: '莫代尔纤维', en: 'Modal fiber', th: 'เส้นใยโมดัล', vn: 'Sợi Modal', es: 'Fibra modal',
    pt: 'Fibra modal', id_lang: 'Serat modal', ru: 'Модальное волокно', fr: 'Fibre modale', ar: 'ألياف مودال', ja: ''
  },
  '莱赛尔': {
    cn: '莱赛尔', en: 'Lyocell', th: 'ไลโอเซลล์', vn: 'Lyocell', es: 'Lyocell',
    pt: 'Lyocell', id_lang: 'Lyocell', ru: 'Лиоцелл', fr: 'Lyocell', ar: 'الليوسيل', ja: ''
  },
  '莱赛尔纤维': {
    cn: '莱赛尔纤维', en: 'Lyocell fiber', th: 'เส้นใยไลโอเซลล์', vn: 'Sợi Lyocell', es: 'fibra de lyocell',
    pt: 'Fibra de Lyocell', id_lang: 'Serat Lyocell', ru: 'Волокно лиоцелл', fr: 'Fibre de lyocell', ar: 'ألياف الليوسيل', ja: ''
  },
  '菠萝花': {
    cn: '菠萝花', en: 'Pineapple blossoms', th: 'ดอกสับปะรด', vn: 'Hoa dứa', es: 'Flores de piña',
    pt: 'Flores de abacaxi', id_lang: 'Bunga nanas', ru: 'Цветы ананаса', fr: 'Fleurs d&#39;ananas', ar: 'أزهار الأناناس', ja: ''
  },
  '菱形提花': {
    cn: '菱形提花', en: 'Diamond jacquard', th: 'ลายแจ็กการ์ดเพชร', vn: 'Họa tiết kim cương', es: 'Jacquard de diamante',
    pt: 'jacquard de diamante', id_lang: 'Jacquard berlian', ru: 'Жаккард «Алмаз»', fr: 'Jacquard diamant', ar: 'جاكار ماسي', ja: ''
  },
  '菱格小香风': {
    cn: '菱格小香风', en: 'Diamond-patterned Chanel style', th: 'สไตล์ชาแนล ลวดลายเพชร', vn: 'Phong cách Chanel họa tiết kim cương', es: 'Estilo Chanel con estampado de diamantes',
    pt: 'Estilo Chanel com padrão de diamantes', id_lang: 'Gaya Chanel bermotif berlian', ru: 'Стиль Chanel с ромбовидным узором', fr: 'Style Chanel à motif losanges', ar: 'نمط شانيل بنقشة ماسية', ja: ''
  },
  '萤烛': {
    cn: '萤烛', en: 'fireflies', th: 'หิ่งห้อย', vn: 'đom đóm', es: 'luciérnagas',
    pt: 'vaga-lumes', id_lang: 'kunang-kunang', ru: 'светлячки', fr: 'lucioles', ar: 'اليراعات', ja: ''
  },
  '蒲灰': {
    cn: '蒲灰', en: 'Cattail ash', th: 'ต้นกกเถ้า', vn: 'Cây bồ đề tro', es: 'Fresno de cola de espadaña',
    pt: 'freixo de taboa', id_lang: 'Pohon cattail ash', ru: 'Ясень рогоза', fr: 'frêne à quenouilles', ar: 'رماد ذيل القط', ja: ''
  },
  '蓝': {
    cn: '蓝', en: 'blue', th: 'สีฟ้า', vn: 'màu xanh da trời', es: 'azul',
    pt: 'azul', id_lang: 'biru', ru: 'синий', fr: 'bleu', ar: 'أزرق', ja: ''
  },
  '蓝灰': {
    cn: '蓝灰', en: 'blue-gray', th: 'สีน้ำเงินเทา', vn: 'xanh xám', es: 'azul grisáceo',
    pt: 'azul-acinzentado', id_lang: 'biru keabu-abuan', ru: 'сине-серый', fr: 'bleu-gris', ar: 'أزرق رمادي', ja: ''
  },
  '蓝灰斜纹': {
    cn: '蓝灰斜纹', en: 'Blue-gray twill', th: 'ผ้าทวิลล์สีเทาอมฟ้า', vn: 'Vải chéo màu xanh xám', es: 'Sarga azul grisácea',
    pt: 'Sarja azul-acinzentada', id_lang: 'Kain kepar abu-biru', ru: 'Сине-серая саржа', fr: 'Sergé bleu-gris', ar: 'قماش قطني أزرق رمادي', ja: ''
  },
  '蓝灰条纹': {
    cn: '蓝灰条纹', en: 'Blue-gray stripes', th: 'ลายทางสีฟ้าเทา', vn: 'Sọc xanh xám', es: 'rayas azul grisáceas',
    pt: 'Listras azul-acinzentadas', id_lang: 'Garis-garis biru keabu-abuan', ru: 'Сине-серые полосы', fr: 'Rayures bleu-gris', ar: 'خطوط زرقاء رمادية', ja: ''
  },
  '蓝灰格纹': {
    cn: '蓝灰格纹', en: 'Blue-gray plaid', th: 'ลายสก็อตสีน้ำเงินเทา', vn: 'kẻ sọc xanh xám', es: 'Cuadros azul grisáceos',
    pt: 'xadrez azul-acinzentado', id_lang: 'Kotak-kotak biru keabu-abuan', ru: 'Сине-серая клетка', fr: 'Carreaux bleu-gris', ar: 'كاروهات أزرق رمادي', ja: ''
  },
  '蓝灰渐变': {
    cn: '蓝灰渐变', en: 'Blue-gray gradient', th: 'การไล่ระดับสีฟ้าเทา', vn: 'Chuyển màu xanh xám', es: 'Degradado azul grisáceo',
    pt: 'Gradiente azul-acinzentado', id_lang: 'Gradien biru keabu-abuan', ru: 'Сине-серый градиент', fr: 'Dégradé bleu-gris', ar: 'تدرج اللون الأزرق الرمادي', ja: ''
  },
  '蓝灰牛过渡色': {
    cn: '蓝灰牛过渡色', en: 'Blue-gray transition color', th: 'สีเปลี่ยนผ่านสีน้ำเงินเทา', vn: 'màu chuyển tiếp xanh xám', es: 'Color de transición azul grisáceo',
    pt: 'Cor de transição azul-acinzentada', id_lang: 'Warna transisi biru keabu-abuan', ru: 'Сине-серый переходный цвет', fr: 'couleur de transition bleu-gris', ar: 'لون انتقالي أزرق رمادي', ja: ''
  },
  '蓝灰花纹': {
    cn: '蓝灰花纹', en: 'Blue-gray pattern', th: 'ลวดลายสีน้ำเงินเทา', vn: 'Họa tiết xanh xám', es: 'Patrón azul grisáceo',
    pt: 'Padrão azul-acinzentado', id_lang: 'Pola biru keabu-abuan', ru: 'Сине-серый узор', fr: 'Motif bleu-gris', ar: 'نمط أزرق رمادي', ja: ''
  },
  '蓝灰镶拼': {
    cn: '蓝灰镶拼', en: 'Blue and gray patchwork', th: 'ผ้าปะติดปะต่อสีน้ำเงินและสีเทา', vn: 'chắp vá màu xanh lam và xám', es: 'Mosaico azul y gris',
    pt: 'Retalhos azuis e cinzas', id_lang: 'Tambal sulam biru dan abu-abu', ru: 'Лоскутное одеяло синего и серого цвета', fr: 'patchwork bleu et gris', ar: 'مرقعة باللونين الأزرق والرمادي', ja: ''
  },
  '蓝牛仔': {
    cn: '蓝牛仔', en: 'Blue Cowboy', th: 'บลูคาวบอย', vn: 'Cao bồi xanh', es: 'Vaquero Azul',
    pt: 'Cowboy Azul', id_lang: 'Koboi Biru', ru: 'Синий ковбой', fr: 'Blue Cowboy', ar: 'راعي البقر الأزرق', ja: ''
  },
  '蓝牛过渡色': {
    cn: '蓝牛过渡色', en: 'Blue Bull transition color', th: 'สีเปลี่ยนผ่านของ Blue Bull', vn: 'Màu chuyển đổi Blue Bull', es: 'Color de transición Blue Bull',
    pt: 'Cor de transição Blue Bull', id_lang: 'Warna transisi Blue Bull', ru: 'Переходный цвет Blue Bull', fr: 'Couleur de transition Blue Bull', ar: 'لون انتقال الثور الأزرق', ja: ''
  },
  '蓝白花纹': {
    cn: '蓝白花纹', en: 'Blue and white pattern', th: 'ลวดลายสีน้ำเงินและสีขาว', vn: 'Họa tiết xanh trắng', es: 'Patrón azul y blanco',
    pt: 'Padrão azul e branco', id_lang: 'Pola biru dan putih', ru: 'Сине-белый узор', fr: 'Motif bleu et blanc', ar: 'نمط أزرق وأبيض', ja: ''
  },
  '蓝绿': {
    cn: '蓝绿', en: 'blue-green', th: 'สีเขียวอมฟ้า', vn: 'xanh lam-xanh lục', es: 'azul verdoso',
    pt: 'azul-esverdeado', id_lang: 'biru kehijauan', ru: 'сине-зеленый', fr: 'bleu-vert', ar: 'أزرق مخضر', ja: ''
  },
  '蓝绿条纹': {
    cn: '蓝绿条纹', en: 'Blue-green stripes', th: 'ลายทางสีฟ้าเขียว', vn: 'sọc xanh lục', es: 'rayas azul verdosas',
    pt: 'Listras azul-esverdeadas', id_lang: 'Garis-garis biru kehijauan', ru: 'Сине-зеленые полосы', fr: 'Rayures bleu-vert', ar: 'مخططة باللونين الأزرق والأخضر', ja: ''
  },
  '蓝绿花纹': {
    cn: '蓝绿花纹', en: 'Blue-green pattern', th: 'ลวดลายสีฟ้าเขียว', vn: 'Họa tiết xanh lam-xanh lục', es: 'Patrón azul verdoso',
    pt: 'Padrão azul-esverdeado', id_lang: 'Pola biru kehijauan', ru: 'Сине-зеленый узор', fr: 'Motif bleu-vert', ar: 'نمط أزرق مخضر', ja: ''
  },
  '蓝绿镶拼': {
    cn: '蓝绿镶拼', en: 'Blue and green patchwork', th: 'ผ้าปะติดปะต่อสีฟ้าและสีเขียว', vn: 'chắp vá màu xanh lam và xanh lá cây', es: 'Mosaico azul y verde',
    pt: 'Retalhos azuis e verdes', id_lang: 'Tambal sulam biru dan hijau', ru: 'Лоскутное одеяло синего и зеленого цвета', fr: 'Patchwork bleu et vert', ar: 'مرقعة باللونين الأزرق والأخضر', ja: ''
  },
  '蓝色': {
    cn: '蓝色', en: 'blue', th: 'สีฟ้า', vn: 'màu xanh da trời', es: 'azul',
    pt: 'azul', id_lang: 'biru', ru: 'синий', fr: 'bleu', ar: 'أزرق', ja: ''
  },
  '蓝色天丝': {
    cn: '蓝色天丝', en: 'Blue Tencel', th: 'เทนเซลสีน้ำเงิน', vn: 'Tencel màu xanh lam', es: 'Tencel azul',
    pt: 'Tencel azul', id_lang: 'Tencel Biru', ru: 'Синий тенсел', fr: 'Tencel bleu', ar: 'تينسل أزرق', ja: ''
  },
  '蓝色条纹': {
    cn: '蓝色条纹', en: 'Blue stripes', th: 'ลายทางสีน้ำเงิน', vn: 'Sọc xanh', es: 'rayas azules',
    pt: 'Listras azuis', id_lang: 'Garis-garis biru', ru: 'Синие полосы', fr: 'rayures bleues', ar: 'بلوسيريز', ja: ''
  },
  '蓝色牛仔布': {
    cn: '蓝色牛仔布', en: 'Blue denim', th: 'ผ้ายีนส์สีน้ำเงิน', vn: 'Quần jean xanh', es: 'Denim azul',
    pt: 'jeans azul', id_lang: 'Denim biru', ru: 'Синие джинсы', fr: 'Denim bleu', ar: 'جينز أزرق', ja: ''
  },
  '蓝色股纱': {
    cn: '蓝色股纱', en: 'Blue yarn', th: 'เส้นด้ายสีน้ำเงิน', vn: 'Sợi len màu xanh', es: 'Hilo azul',
    pt: 'Fio azul', id_lang: 'Benang biru', ru: 'Синяя пряжа', fr: 'Fil bleu', ar: 'خيوط زرقاء', ja: ''
  },
  '蓝色面料': {
    cn: '蓝色面料', en: 'blue fabric', th: 'ผ้าสีน้ำเงิน', vn: 'vải màu xanh', es: 'tela azul',
    pt: 'tecido azul', id_lang: 'kain biru', ru: 'синяя ткань', fr: 'tissu bleu', ar: 'قماش أزرق', ja: ''
  },
  '蕾丝': {
    cn: '蕾丝', en: 'lace', th: 'ลูกไม้', vn: 'ren', es: 'cordón',
    pt: 'renda', id_lang: 'renda', ru: 'кружево', fr: 'dentelle', ar: 'ربط الحذاء', ja: ''
  },
  '蕾丝面料': {
    cn: '蕾丝面料', en: 'Lace fabric', th: 'ผ้าลูกไม้', vn: 'Vải ren', es: 'Tela de encaje',
    pt: 'Tecido de renda', id_lang: 'Kain renda', ru: 'Кружевная ткань', fr: 'Tissu de dentelle', ar: 'قماش الدانتيل', ja: ''
  },
  '薄荷绿': {
    cn: '薄荷绿', en: 'Mint Green', th: 'สีเขียวมิ้นต์', vn: 'Xanh bạc hà', es: 'Verde menta',
    pt: 'Verde menta', id_lang: 'Hijau Mint', ru: 'Мятно-зеленый', fr: 'Vert menthe', ar: 'أخضر نعناعي', ja: ''
  },
  '薄荷绿条纹': {
    cn: '薄荷绿条纹', en: 'Mint Green Stripes', th: 'ลายทางสีเขียวมิ้นต์', vn: 'Sọc xanh bạc hà', es: 'Rayas verde menta',
    pt: 'Listras verde-menta', id_lang: 'Garis-garis Hijau Mint', ru: 'Мятно-зеленые полосы', fr: 'Rayures vert menthe', ar: 'خطوط خضراء نعناع', ja: ''
  },
  '藏蓝': {
    cn: '藏蓝', en: 'Navy blue', th: 'สีน้ำเงินเข้ม', vn: 'màu xanh hải quân', es: 'Azul marino',
    pt: 'azul-marinho', id_lang: 'Biru laut', ru: 'темно-синий', fr: 'bleu marine', ar: 'الأزرق الداكن', ja: ''
  },
  '藏青': {
    cn: '藏青', en: 'Dark blue', th: 'สีน้ำเงินเข้ม', vn: 'Màu xanh đậm', es: 'Azul oscuro',
    pt: 'Azul escuro', id_lang: 'Biru tua', ru: 'Темно-синий', fr: 'bleu foncé', ar: 'أزرق داكن', ja: ''
  },
  '藏青斜纹': {
    cn: '藏青斜纹', en: 'Navy blue twill', th: 'ผ้าทวิลสีน้ำเงินเข้ม', vn: 'Vải chéo màu xanh hải quân', es: 'Sarga azul marino',
    pt: 'Sarja azul marinho', id_lang: 'Kain kepar biru tua', ru: 'Темно-синяя саржа', fr: 'Sergé bleu marine', ar: 'قماش قطني أزرق داكن', ja: ''
  },
  '藏青条纹': {
    cn: '藏青条纹', en: 'Navy blue stripes', th: 'ลายทางสีน้ำเงินเข้ม', vn: 'sọc xanh hải quân', es: 'rayas azul marino',
    pt: 'Listras azul-marinho', id_lang: 'Garis-garis biru tua', ru: 'темно-синие полосы', fr: 'rayures bleu marine', ar: 'الأزرق البحري', ja: ''
  },
  '藏青条纹面料': {
    cn: '藏青条纹面料', en: 'Navy blue striped fabric', th: 'ผ้าลายทางสีน้ำเงินเข้ม', vn: 'Vải sọc màu xanh hải quân', es: 'Tela a rayas azul marino',
    pt: 'Tecido listrado azul marinho', id_lang: 'Kain bergaris biru tua', ru: 'Ткань в полоску темно-синего цвета', fr: 'tissu à rayures bleu marine', ar: 'قماش مخطط باللون الأزرق الداكن', ja: ''
  },
  '藏青格纹': {
    cn: '藏青格纹', en: 'Navy blue plaid', th: 'ลายตารางสีน้ำเงินเข้ม', vn: 'kẻ sọc xanh hải quân', es: 'Cuadros azul marino',
    pt: 'xadrez azul marinho', id_lang: 'Kotak-kotak biru tua', ru: 'Темно-синяя клетка', fr: 'à carreaux bleu marine', ar: 'كاروهات باللون الأزرق الداكن', ja: ''
  },
  '藏青渐变': {
    cn: '藏青渐变', en: 'Dark blue gradient', th: 'ไล่ระดับสีน้ำเงินเข้ม', vn: 'chuyển sắc màu xanh đậm', es: 'Degradado azul oscuro',
    pt: 'gradiente azul escuro', id_lang: 'Gradien biru tua', ru: 'Темно-синий градиент', fr: 'Dégradé bleu foncé', ar: 'تدرج اللون الأزرق الداكن', ja: ''
  },
  '藏青白条': {
    cn: '藏青白条', en: 'Dark blue with white stripes', th: 'สีน้ำเงินเข้มลายขาว', vn: 'Màu xanh đậm với sọc trắng', es: 'Azul oscuro con rayas blancas',
    pt: 'Azul escuro com listras brancas', id_lang: 'Biru tua dengan garis-garis putih', ru: 'Темно-синий с белыми полосами', fr: 'Bleu foncé à rayures blanches', ar: 'أزرق داكن بخطوط بيضاء', ja: ''
  },
  '藏青色': {
    cn: '藏青色', en: 'Navy blue', th: 'สีน้ำเงินเข้ม', vn: 'màu xanh hải quân', es: 'Azul marino',
    pt: 'azul-marinho', id_lang: 'Biru laut', ru: 'темно-синий', fr: 'bleu marine', ar: 'الأزرق الداكن', ja: ''
  },
  '藏青色面料': {
    cn: '藏青色面料', en: 'Woven Fabrics In Navy', th: 'ผ้าทอสีน้ำเงินเข้ม', vn: 'Vải Dệt Màu Xanh Hải Quân', es: 'Tela Tejida Azul Marino',
    pt: 'Tecido Em Azul Marinho', id_lang: 'Kain Tenun Berwarna Biru Tua', ru: 'Тканый Материал Цвета Морской Волны', fr: 'Tissu Tissé En Marine', ar: 'قماش منسوج باللون الأزرق الداكن', ja: '濃紺の織地'
  },
  '藏青花纹': {
    cn: '藏青花纹', en: 'Dark blue pattern', th: 'ลวดลายสีน้ำเงินเข้ม', vn: 'Họa tiết màu xanh đậm', es: 'Patrón azul oscuro',
    pt: 'Padrão azul escuro', id_lang: 'Pola biru tua', ru: 'Темно-синий узор', fr: 'motif bleu foncé', ar: 'نمط أزرق داكن', ja: ''
  },
  '藏青镶拼': {
    cn: '藏青镶拼', en: 'Dark blue inlaid', th: 'สีน้ำเงินเข้มฝังลาย', vn: 'khảm màu xanh đậm', es: 'Incrustaciones de color azul oscuro',
    pt: 'Azul escuro incrustado', id_lang: 'bertatahkan biru tua', ru: 'Темно-синяя инкрустация', fr: 'incrustation bleu foncé', ar: 'مطعم باللون الأزرق الداكن', ja: ''
  },
  '藏青面料': {
    cn: '藏青面料', en: 'Navy blue fabric', th: 'ผ้าสีน้ำเงินเข้ม', vn: 'Vải màu xanh hải quân', es: 'Tela azul marino',
    pt: 'Tecido azul marinho', id_lang: 'Kain berwarna biru tua', ru: 'Ткань темно-синего цвета', fr: 'tissu bleu marine', ar: 'قماش أزرق داكن', ja: ''
  },
  '藕荷': {
    cn: '藕荷', en: 'pale pinkish purple', th: 'สีม่วงอมชมพูอ่อน', vn: 'màu tím hồng nhạt', es: 'púrpura rosado pálido',
    pt: 'roxo rosado pálido', id_lang: 'ungu kemerahan pucat', ru: 'бледно-розово-фиолетовый', fr: 'rose pâle tirant sur le violet', ar: 'بنفسجي وردي باهت', ja: ''
  },
  '虾粉': {
    cn: '虾粉', en: 'Shrimp powder', th: 'ผงกุ้ง', vn: 'Bột tôm', es: 'Polvo de camarones',
    pt: 'Pó de camarão', id_lang: 'Bubuk udang', ru: 'Порошок из креветок', fr: 'Poudre de crevettes', ar: 'مسحوق الروبيان', ja: ''
  },
  '蚂蚁布': {
    cn: '蚂蚁布', en: 'Ant Cloth', th: 'ผ้ากันมด', vn: 'Vải kiến', es: 'Tela de hormiga',
    pt: 'Pano de formiga', id_lang: 'Kain Semut', ru: 'Ткань с изображением муравьев', fr: 'Tissu fourmi', ar: 'قماش النمل', ja: ''
  },
  '蚕丝': {
    cn: '蚕丝', en: 'Silk', th: 'ไหม', vn: 'Tơ tằm', es: 'Seda',
    pt: 'Seda', id_lang: 'Sutra', ru: 'Шелк', fr: 'Soie', ar: 'حرير', ja: '絹'
  },
  '蜂巢单面绒': {
    cn: '蜂巢单面绒', en: 'Honeycomb single-sided fleece', th: 'ผ้าฟลีซด้านเดียวลายรังผึ้ง', vn: 'Vải nỉ một mặt dạng tổ ong', es: 'Forro polar de una sola cara con diseño de panal',
    pt: 'Velo de lã com padrão favo de mel e um lado só', id_lang: 'Bulu domba satu sisi berbentuk sarang lebah', ru: 'Односторонняя флисовая ткань с сотовой структурой', fr: 'polaire alvéolée simple face', ar: 'صوف أحادي الجانب بنمط خلية النحل', ja: ''
  },
  '蜜合': {
    cn: '蜜合', en: 'Honey', th: 'น้ำผึ้ง', vn: 'Em yêu', es: 'Miel',
    pt: 'Mel', id_lang: 'Sayang', ru: 'Мед', fr: 'Chéri', ar: 'عسل', ja: ''
  },
  '蜡染': {
    cn: '蜡染', en: 'Batik', th: 'บาติก', vn: 'Batik', es: 'Batik',
    pt: 'Batik', id_lang: 'Batik', ru: 'Батик', fr: 'Batik', ar: 'باتيك', ja: ''
  },
  '蝴蝶结': {
    cn: '蝴蝶结', en: 'Bow', th: 'โค้งคำนับ', vn: 'Cây cung', es: 'Arco',
    pt: 'Arco', id_lang: 'Busur', ru: 'Поклон', fr: 'Arc', ar: 'قَوس', ja: ''
  },
  '蝴蝶结不计': {
    cn: '蝴蝶结不计', en: 'Bows not counted', th: 'คันธนูไม่นับรวม', vn: 'Không tính cung tên.', es: 'Los lazos no cuentan.',
    pt: 'Arcos não contabilizados', id_lang: 'Busur panah tidak dihitung', ru: 'Луки не учитываются', fr: 'Les arcs ne sont pas comptabilisés', ar: 'لا يتم احتساب الأقواس', ja: ''
  },
  '蝴蝶结成分不计': {
    cn: '蝴蝶结成分不计', en: 'Bow component not counted', th: 'ส่วนประกอบของคันธนูไม่นับรวม', vn: 'Thành phần cung tên không được tính', es: 'El componente del arco no se tiene en cuenta.',
    pt: 'Componente do arco não contabilizado', id_lang: 'Komponen busur tidak dihitung', ru: 'Компонент лука не учитывается', fr: 'Composante de l&#39;arc non prise en compte', ar: 'لا يتم احتساب مكون القوس', ja: ''
  },
  '补充说明：印花工艺特殊，请反面洗涤，避免搓洗。': {
    cn: '补充说明：印花工艺特殊，请反面洗涤，避免搓洗。', en: 'Additional note: Due to the special printing process, please wash inside out and avoid rubbing.', th: 'คำอธิบายเพิ่มเติม: ลายพิมพ์เป็นงานฝีมือพิเศษ กรุณาซักด้านในออกด้านนอกและหลีกเลี่ยงการขัดถู', vn: 'Lưu ý bổ sung: Chất liệu in hoa có quy trình đặc biệt, vui lòng giặt mặt trái và tránh chà xát mạnh.', es: 'Nota adicional: El estampado tiene un proceso especial, por favor lavar del revés y evitar frotar.',
    pt: 'Observação adicional: o processo de impressão é especial, por favor, lave do avesso e evite esfregar.', id_lang: 'Catatan tambahan: Proses cetak khusus, harap cuci terbalik dan hindari menggosok.', ru: 'Дополнительные примечания: из-за особой печати стирайте наизнанку, избегайте трения.', fr: 'Remarques supplémentaires : Le procédé d\'impression est spécial, veuillez laver à l\'envers et éviter de frotter.', ar: 'ملاحظات إضافية: نظرًا لطبيعة عملية الطباعة الخاصة، يرجى الغسل على الجهة الداخلية وتجنب الفرك.', ja: ''
  },
  '补充说明：因工艺特殊，水洗轻微褪色属正常情况，请与浅色衣服分开洗涤。': {
    cn: '补充说明：因工艺特殊，水洗轻微褪色属正常情况，请与浅色衣服分开洗涤。', en: 'Additional notes: Due to the special dyeing process, slight fading after washing is normal. Please wash separately from light-colored clothing.', th: 'หมายเหตุเพิ่มเติม: เนื่องจากกระบวนการผลิตที่พิเศษ การซักน้ำจะทำให้เกิดการซีดเล็กน้อยซึ่งเป็นเรื่องปกติ ควรแยกซักกับเสื้อผ้าสีอ่อน.', vn: 'Thông tin bổ sung: Do quy trình sản xuất đặc biệt, việc nhạt màu nhẹ sau khi giặt là hiện tượng bình thường, xin vui lòng giặt riêng với quần áo màu sáng.', es: 'Nota aclaratoria: Debido a la naturaleza especial del proceso, es normal que el lavado aclare ligeramente el color. Por favor, lave esta prenda por separado de otras prendas de colores claros.',
    pt: 'Observação: devido à peculiaridade do processo de fabricação, um leve desbotamento após a lavagem é normal. Por favor, lave separadamente de roupas de cores claras.', id_lang: 'Catatan tambahan: Karena proses pembuatannya khusus, sedikit kelunturan warna setelah dicuci adalah hal yang normal. Harap cuci terpisah dari pakaian berwarna terang.', ru: 'Дополнительное примечание: из-за особой технологии легкое выцветание при стирке является нормальным явлением. Пожалуйста, стирайте отдельно от светлой одежды.', fr: 'Remarque : En raison de la particularité du processus, une légère décoloration due au lavage à l\'eau est normale. Veuillez laver séparément des vêtements de couleur claire.', ar: 'ملاحظة إضافية: نظرًا لخصوصية العملية، فإن الغسيل الخفيف الذي يتسبب في بهتان اللون يعتبر أمرًا طبيعيًا، يرجى غسله بشكل منفصل عن الملابس ذات الألوان الفاتحة.', ja: ''
  },
  '补充说明：因工艺特殊，请反面洗涤，避免搓洗。': {
    cn: '补充说明：因工艺特殊，请反面洗涤，避免搓洗。', en: 'Additional note: Due to the special craftsmanship, please wash inside out and avoid rubbing.', th: 'คำแนะนำเพิ่มเติม: เนื่องจากเป็นกระบวนการผลิตพิเศษ โปรดซักด้านในออกด้านนอก และหลีกเลี่ยงการขยี้', vn: 'Lưu ý: Do quy trình đặc biệt, vui lòng giặt mặt trái và tránh chà xát.', es: 'Aclaración: Debido a la particularidad del proceso, lávese por el revés y evite frotar.',
    pt: 'Observação: Devido à particularidade do processo de fabrico, lave do avesso e evite esfregar.', id_lang: 'Catatan tambahan: Karena proses produksi yang khusus, mohon cuci dari bagian dalam, hindari menggosoknya.', ru: 'Дополнительные инструкции: из-за особенностей технологии, пожалуйста, стирайте наизнанку и избегайте трения.', fr: 'Note complémentaire : En raison de la particularité du processus, veuillez laver sur l\'envers et éviter de frotter.', ar: 'ملاحظة إضافية: بسبب خصوصية عملية التصنيع، يرجى الغسيل من الداخل وتجنب الفرك.', ja: ''
  },
  '补充说明：因特殊工艺，水洗轻微褪色属正常情况，请与浅色衣服分开洗涤。': {
    cn: '补充说明：因特殊工艺，水洗轻微褪色属正常情况，请与浅色衣服分开洗涤。', en: 'Additional note: Due to special craftsmanship, slight fading during washing is normal. Please wash separately from light-colored clothing.', th: 'หมายเหตุ: เนื่องจากเป็นกระบวนการพิเศษ การซีดจางเล็กน้อยจากการซักจึงเป็นเรื่องปกติ กรุณาซักแยกจากเสื้อผ้าสีอ่อน', vn: 'Lưu ý bổ sung: Do quy trình đặc biệt, tình trạng phai màu nhẹ khi giặt là bình thường, vui lòng giặt riêng với quần áo sáng màu.', es: 'Aclaración: Debido a un proceso especial, una ligera decoloración por lavado es normal. Por favor, lave esta prenda por separado de la ropa de colores claros.',
    pt: 'Observação: Devido ao processo especial, um leve desbotamento após a lavagem é normal. Lave separadamente de roupas de cor clara.', id_lang: 'Catatan tambahan: Karena proses khusus, sedikit luntur saat dicuci adalah normal. Mohon cuci terpisah dari pakaian berwarna terang.', ru: 'Дополнительное примечание: из-за особой технологии легкое выцветание при стирке является нормальным явлением, стирайте отдельно от светлой одежды.', fr: 'Note supplémentaire : En raison d\'un procédé spécial, une légère décoloration au lavage est normale. Veuillez laver séparément des vêtements de couleur claire.', ar: 'ملاحظات إضافية: نظرًا للحرفية الخاصة، فإن تلاشي اللون الطفيف الناتج عن الغسيل يعد أمرًا طبيعيًا. يرجى غسلها بشكل منفصل عن الملابس ذات الألوان الفاتحة.', ja: ''
  },
  '补充说明：绣花工艺特殊，请反面洗涤，避免搓洗。': {
    cn: '补充说明：绣花工艺特殊，请反面洗涤，避免搓洗。', en: 'Additional notes: The embroidery process is special; please wash inside out and avoid scrubbing.', th: 'หมายเหตุเพิ่มเติม: เนื่องจากเป็นงานปักที่มีความพิเศษ กรุณาซักด้านในออกและหลีกเลี่ยงการขยี้', vn: 'Lưu ý thêm: Công nghệ thêu đặc biệt, vui lòng giặt mặt trái, tránh chà xát.', es: 'Nota adicional: el bordado es un proceso especial. Por favor, lave la prenda del revés y evite frotarla.',
    pt: 'Nota adicional: O processo de bordado é especial. Lave do avesso, evite esfregar.', id_lang: 'Catatan tambahan: Proses bordirannya istimewa, mohon dicuci terbalik dan hindari menggosok.', ru: 'Дополнительное примечание: из-за особенностей вышивки стирайте изделие с изнаночной стороны, избегая трения.', fr: 'Note complémentaire : le processus de broderie est particulier, veuillez laver à l\'envers et éviter de frotter.', ar: 'ملاحظات إضافية: نظرًا للطبيعة الخاصة لعملية التطريز، يرجى غسل القطعة من الداخل للخارج وتجنب الفرك.', ja: ''
  },
  '表面': {
    cn: '表面', en: 'surface', th: 'พื้นผิว', vn: 'bề mặt', es: 'superficie',
    pt: 'superfície', id_lang: 'permukaan', ru: 'поверхность', fr: 'surface', ar: 'سطح', ja: ''
  },
  '衬布': {
    cn: '衬布', en: 'Lining', th: 'ซับใน', vn: 'Niêm mạc', es: 'Recubrimiento',
    pt: 'Resina', id_lang: 'Lapisan', ru: 'Оболочка', fr: 'Garniture', ar: 'بطانة', ja: ''
  },
  '衬布除外': {
    cn: '衬布除外', en: 'Except for the lining', th: 'ยกเว้นซับใน', vn: 'Ngoại trừ lớp lót', es: 'Excepto por el forro',
    pt: 'Com exceção do forro.', id_lang: 'Kecuali lapisan dalamnya', ru: 'За исключением подкладки', fr: 'À l&#39;exception de la doublure', ar: 'باستثناء البطانة', ja: ''
  },
  '衬料除外': {
    cn: '衬料除外', en: 'Except for lining', th: 'ยกเว้นซับใน', vn: 'Ngoại trừ lớp lót', es: 'Excepto por el revestimiento',
    pt: 'Exceto pelo forro', id_lang: 'Kecuali lapisan dalam', ru: 'За исключением подкладки', fr: 'À l&#39;exception de la doublure', ar: 'باستثناء البطانة', ja: ''
  },
  '衬衣面料': {
    cn: '衬衣面料', en: 'shirt fabric', th: 'ผ้าสำหรับทำเสื้อเชิ้ต', vn: 'vải áo sơ mi', es: 'tela de camisa',
    pt: 'tecido de camisa', id_lang: 'kain kemeja', ru: 'ткань рубашки', fr: 'tissu de chemise', ar: 'قماش القميص', ja: ''
  },
  '衬衫面料': {
    cn: '衬衫面料', en: 'Shirt fabric', th: 'ผ้าสำหรับทำเสื้อเชิ้ต', vn: 'Vải may áo sơ mi', es: 'Tela de camisa',
    pt: 'Tecido para camisa', id_lang: 'Kain kemeja', ru: 'Ткань рубашки', fr: 'Tissu pour chemise', ar: 'قماش القميص', ja: ''
  },
  '袋口': {
    cn: '袋口', en: 'bag opening', th: 'การเปิดถุง', vn: 'mở túi', es: 'apertura de la bolsa',
    pt: 'abertura da sacola', id_lang: 'pembukaan tas', ru: 'открытие пакета', fr: 'ouverture de sac', ar: 'فتح الحقيبة', ja: ''
  },
  '袋唇': {
    cn: '袋唇', en: 'pouch lips', th: 'ริมฝีปากกระเป๋า', vn: 'môi túi', es: 'labios de la bolsa',
    pt: 'lábios da bolsa', id_lang: 'bibir kantung', ru: 'губы мешочка', fr: 'lèvres de la poche', ar: 'شفاه الجيب', ja: ''
  },
  '袋布': {
    cn: '袋布', en: 'Bag Cloth', th: 'ผ้าสำหรับทำกระเป๋า', vn: 'Vải túi', es: 'Tela para bolsas',
    pt: 'Tecido para bolsa', id_lang: 'Kain Tas', ru: 'Ткань для мешков', fr: 'Sac en tissu', ar: 'قماش الحقيبة', ja: ''
  },
  '袋盖': {
    cn: '袋盖', en: 'bag lid', th: 'ฝาถุง', vn: 'nắp túi', es: 'tapa de la bolsa',
    pt: 'tampa do saco', id_lang: 'tutup tas', ru: 'крышка пакета', fr: 'couvercle de sac', ar: 'غطاء الكيس', ja: ''
  },
  '袖中层': {
    cn: '袖中层', en: 'Mid-sleeve', th: 'แขนเสื้อกลาง', vn: 'Tay áo lửng', es: 'Capa intermedia de la manga',
    pt: 'Manga média', id_lang: 'Lengan sedang', ru: 'рукава до середины груди', fr: 'Manches mi-longues', ar: 'طبقة متوسطة للكم', ja: ''
  },
  '袖口': {
    cn: '袖口', en: 'cuff', th: 'ข้อมือ', vn: 'cổ tay áo', es: 'bofetada',
    pt: 'braçadeira', id_lang: 'manset', ru: 'манжета', fr: 'manchette', ar: 'صفعة', ja: ''
  },
  '袖口内贴': {
    cn: '袖口内贴', en: 'cuff insert', th: 'แผ่นรองข้อมือ', vn: 'miếng đệm cổ tay', es: 'inserto del puño',
    pt: 'inserção de punho', id_lang: 'sisipan manset', ru: 'вставка манжеты', fr: 'insert de manchette', ar: 'حشوة الكفة', ja: ''
  },
  '袖口贴': {
    cn: '袖口贴', en: 'cuff patch', th: 'แผ่นแปะข้อมือ', vn: 'miếng vá cổ tay áo', es: 'parche de puño',
    pt: 'patch de punho', id_lang: 'tambalan manset', ru: 'манжетная нашивка', fr: 'patch de poignet', ar: 'رقعة الكفة', ja: ''
  },
  '袖口里面料': {
    cn: '袖口里面料', en: 'Cuff lining', th: 'ซับในข้อมือ', vn: 'Lớp lót cổ tay', es: 'Forro del puño',
    pt: 'Forro do punho', id_lang: 'Lapisan manset', ru: 'Подкладка манжеты', fr: 'Doublure des poignets', ar: 'بطانة الأكمام', ja: ''
  },
  '袖口面料': {
    cn: '袖口面料', en: 'Cuff fabric', th: 'ผ้าข้อมือ', vn: 'Vải cổ tay áo', es: 'Tejido del puño',
    pt: 'Tecido do punho', id_lang: 'Kain manset', ru: 'Ткань манжеты', fr: 'Tissu pour poignets', ar: 'قماش الأساور', ja: ''
  },
  '袖填充物': {
    cn: '袖填充物', en: 'Sleeve padding', th: 'แผ่นรองแขนเสื้อ', vn: 'Đệm tay áo', es: 'Relleno de manga',
    pt: 'Acolchoamento da manga', id_lang: 'bantalan lengan', ru: 'Вставка в рукав', fr: 'Rembourrage des manches', ar: 'حشوة الأكمام', ja: ''
  },
  '袖外层': {
    cn: '袖外层', en: 'Outer sleeve', th: 'ปลอกหุ้มด้านนอก', vn: 'Tay áo ngoài', es: 'Manga exterior',
    pt: 'Manga externa', id_lang: 'Selubung luar', ru: 'Внешний рукав', fr: 'manche extérieure', ar: 'الغلاف الخارجي', ja: ''
  },
  '袖外布': {
    cn: '袖外布', en: 'Outer sleeve fabric', th: 'ผ้าด้านนอกของแขนเสื้อ', vn: 'Vải tay áo ngoài', es: 'Tejido exterior de la manga',
    pt: 'Tecido da manga externa', id_lang: 'Kain lengan luar', ru: 'Внешняя ткань рукава', fr: 'Tissu de la manche extérieure', ar: 'قماش الكم الخارجي', ja: ''
  },
  '袖子': {
    cn: '袖子', en: 'sleeve', th: 'ปลอกหุ้ม', vn: 'tay áo', es: 'manga',
    pt: 'manga', id_lang: 'lengan baju', ru: 'рукав', fr: 'manche', ar: 'كم', ja: ''
  },
  '袖子中层面料': {
    cn: '袖子中层面料', en: 'Sleeve mid-layer fabric', th: 'ผ้าชั้นกลางของแขนเสื้อ', vn: 'Vải lớp giữa tay áo', es: 'Tejido de capa intermedia de la manga',
    pt: 'tecido da camada intermediária da manga', id_lang: 'Kain lapisan tengah lengan', ru: 'Ткань среднего слоя рукава', fr: 'Tissu de la couche intermédiaire de la manche', ar: 'قماش الطبقة الوسطى للأكمام', ja: ''
  },
  '袖子内层': {
    cn: '袖子内层', en: 'Inner sleeve layer', th: 'ชั้นในของแขนเสื้อ', vn: 'Lớp tay áo bên trong', es: 'capa interior de la manga',
    pt: 'Camada interna da manga', id_lang: 'Lapisan lengan bagian dalam', ru: 'Внутренний слой рукава', fr: 'couche intérieure de la manche', ar: 'طبقة الغلاف الداخلي', ja: ''
  },
  '袖子填充物': {
    cn: '袖子填充物', en: 'Sleeve padding', th: 'แผ่นรองแขนเสื้อ', vn: 'Đệm tay áo', es: 'Relleno de manga',
    pt: 'Acolchoamento da manga', id_lang: 'bantalan lengan', ru: 'Вставка в рукав', fr: 'Rembourrage des manches', ar: 'حشوة الأكمام', ja: ''
  },
  '袖子外层': {
    cn: '袖子外层', en: 'Outer layer of sleeve', th: 'ชั้นนอกของแขนเสื้อ', vn: 'Lớp ngoài của tay áo', es: 'Capa exterior de la manga',
    pt: 'Camada externa da manga', id_lang: 'Lapisan luar lengan', ru: 'Внешний слой рукава', fr: 'Couche extérieure de la manche', ar: 'الطبقة الخارجية للكم', ja: ''
  },
  '袖子里料': {
    cn: '袖子里料', en: 'Sleeve lining', th: 'ซับในแขนเสื้อ', vn: 'Lớp lót tay áo', es: 'Forro de la manga',
    pt: 'Forro da manga', id_lang: 'Lapisan lengan', ru: 'Подкладка рукава', fr: 'doublure des manches', ar: 'بطانة الأكمام', ja: ''
  },
  '袖子面料': {
    cn: '袖子面料', en: 'Sleeve fabric', th: 'ผ้าแขนเสื้อ', vn: 'Vải tay áo', es: 'Tela de la manga',
    pt: 'Tecido da manga', id_lang: 'Kain lengan', ru: 'Ткань рукава', fr: 'Tissu de la manche', ar: 'قماش الأكمام', ja: ''
  },
  '袖山条': {
    cn: '袖山条', en: 'Sleeve Mountain Strip', th: 'สลีฟ เมาน์เทน สตริป', vn: 'Dải núi tay áo', es: 'Franja montañosa de manga',
    pt: 'Manga Mountain Strip', id_lang: 'Garis Gunung Lengan', ru: 'Рукав Горная полоса', fr: 'Bande de montagne Sleeve', ar: 'شريط جبلي من سليف', ja: ''
  },
  '袖山牵条': {
    cn: '袖山牵条', en: 'Sleeve Mountain Pulley', th: 'รอกภูเขาแบบปลอก', vn: 'Ròng rọc leo núi tay áo', es: 'Polea de montaña de manga',
    pt: 'Polia de montanha de manga', id_lang: 'Katrol Gunung Lengan', ru: 'Шкив &quot;Втулка горы&quot;', fr: 'Poulie de montagne à manchon', ar: 'بكرة جبلية', ja: ''
  },
  '袖肩面料': {
    cn: '袖肩面料', en: 'Sleeve and shoulder fabric', th: 'ผ้าสำหรับแขนเสื้อและไหล่', vn: 'Chất liệu tay áo và vai', es: 'Tela de mangas y hombros',
    pt: 'Tecido da manga e do ombro', id_lang: 'Kain lengan dan bahu', ru: 'Ткань рукава и плеча', fr: 'Tissu des manches et des épaules', ar: 'قماش الأكمام والكتف', ja: ''
  },
  '袖里': {
    cn: '袖里', en: 'Sleeve', th: 'ปลอกหุ้ม', vn: 'Tay áo', es: 'Manga',
    pt: 'Manga', id_lang: 'Lengan baju', ru: 'Рукав', fr: 'Manche', ar: 'كم', ja: ''
  },
  '袖里填充物': {
    cn: '袖里填充物', en: 'Sleeve padding', th: 'แผ่นรองแขนเสื้อ', vn: 'Đệm tay áo', es: 'Relleno de manga',
    pt: 'Acolchoamento da manga', id_lang: 'bantalan lengan', ru: 'Вставка в рукав', fr: 'Rembourrage des manches', ar: 'حشوة الأكمام', ja: ''
  },
  '袖里拼': {
    cn: '袖里拼', en: 'Sleeve patchwork', th: 'งานปะติดปะต่อแขนเสื้อ', vn: 'tay áo chắp vá', es: 'Retazos en la manga',
    pt: 'Remendos na manga', id_lang: 'Patchwork lengan', ru: 'лоскутное шитье рукавов', fr: 'patchwork de manches', ar: 'كم مرقع', ja: ''
  },
  '袖里料': {
    cn: '袖里料', en: 'Sleeve lining', th: 'ซับในแขนเสื้อ', vn: 'Lớp lót tay áo', es: 'Forro de la manga',
    pt: 'Forro da manga', id_lang: 'Lapisan lengan', ru: 'Подкладка рукава', fr: 'doublure des manches', ar: 'بطانة الأكمام', ja: ''
  },
  '袖里面料': {
    cn: '袖里面料', en: 'Sleeve lining', th: 'ซับในแขนเสื้อ', vn: 'Lớp lót tay áo', es: 'Forro de la manga',
    pt: 'Forro da manga', id_lang: 'Lapisan lengan', ru: 'Подкладка рукава', fr: 'doublure des manches', ar: 'بطانة الأكمام', ja: ''
  },
  '袖面': {
    cn: '袖面', en: 'sleeve', th: 'ปลอกหุ้ม', vn: 'tay áo', es: 'manga',
    pt: 'manga', id_lang: 'lengan baju', ru: 'рукав', fr: 'manche', ar: 'كم', ja: ''
  },
  '袖面料': {
    cn: '袖面料', en: 'sleeve fabric', th: 'ผ้าแขนเสื้อ', vn: 'vải tay áo', es: 'tela de la manga',
    pt: 'tecido da manga', id_lang: 'kain lengan', ru: 'ткань рукава', fr: 'tissu de manche', ar: 'قماش الأكمام', ja: ''
  },
  '袜尖': {
    cn: '袜尖', en: 'sock toe', th: 'ปลายถุงเท้า', vn: 'ngón chân tất', es: 'punta del calcetín',
    pt: 'ponta da meia', id_lang: 'ujung kaus kaki', ru: 'носок', fr: 'orteils de chaussette', ar: 'مقدمة الجورب', ja: ''
  },
  '袜尖部位除外': {
    cn: '袜尖部位除外', en: 'Except for the toe area', th: 'ยกเว้นบริเวณนิ้วเท้า', vn: 'Ngoại trừ vùng ngón chân', es: 'Excepto en la zona de los dedos del pie.',
    pt: 'Exceto na área dos dedos.', id_lang: 'Kecuali area jari kaki.', ru: 'За исключением области пальцев ног.', fr: 'À l&#39;exception de la zone des orteils', ar: 'باستثناء منطقة أصابع القدم', ja: ''
  },
  '袜底': {
    cn: '袜底', en: 'sock bottom', th: 'ถุงเท้าด้านล่าง', vn: 'đáy tất', es: 'parte inferior del calcetín',
    pt: 'sola da meia', id_lang: 'bagian bawah kaus kaki', ru: 'подошва носка', fr: 'semelle de chaussette', ar: 'أسفل الجورب', ja: ''
  },
  '袜跟': {
    cn: '袜跟', en: 'Heels', th: 'รองเท้าส้นสูง', vn: 'Giày cao gót', es: 'Tacones',
    pt: 'Salto', id_lang: 'Sepatu hak tinggi', ru: 'Каблуки', fr: 'Talons', ar: 'الكعب العالي', ja: ''
  },
  '袜跟部位除外': {
    cn: '袜跟部位除外', en: 'Excluding the heel area', th: 'ไม่รวมบริเวณส้นเท้า', vn: 'Không bao gồm vùng gót chân.', es: 'Excluyendo la zona del talón',
    pt: 'Excluindo a área do calcanhar', id_lang: 'TDtRvNddqme4zcHXfMQm61mVfeS2C7DX39 termasuk area tumit', ru: 'За исключением области пятки', fr: 'À l&#39;exception de la zone du talon', ar: 'باستثناء منطقة الكعب', ja: ''
  },
  '袜跟除外': {
    cn: '袜跟除外', en: 'Except for socks', th: 'ยกเว้นถุงเท้า', vn: 'Ngoại trừ tất.', es: 'Excepto los calcetines',
    pt: 'Exceto meias', id_lang: 'Kecuali kaus kaki', ru: 'За исключением носков', fr: 'À l&#39;exception des chaussettes', ar: 'باستثناء الجوارب', ja: ''
  },
  '装饰及连接线除外': {
    cn: '装饰及连接线除外', en: 'Excluding decorative and connecting wires', th: 'ไม่รวมสายไฟตกแต่งและสายไฟเชื่อมต่อ', vn: 'Không bao gồm dây trang trí và dây nối.', es: 'Excluyendo los cables decorativos y de conexión.',
    pt: 'Excluindo fios decorativos e de conexão.', id_lang: 'Tidak termasuk kabel dekoratif dan kabel penghubung.', ru: 'За исключением декоративных и соединительных проводов.', fr: 'À l&#39;exclusion des fils décoratifs et de connexion', ar: 'باستثناء الأسلاك الزخرفية وأسلاك التوصيل', ja: ''
  },
  '装饰物': {
    cn: '装饰物', en: 'decorations', th: 'การตกแต่ง', vn: 'đồ trang trí', es: 'decoraciones',
    pt: 'decorações', id_lang: 'dekorasi', ru: 'украшения', fr: 'décorations', ar: 'الزينة', ja: ''
  },
  '装饰物不计': {
    cn: '装饰物不计', en: 'Decorations are not counted.', th: 'ไม่นับรวมของตกแต่ง', vn: 'Đồ trang trí không được tính.', es: 'Los adornos no se tienen en cuenta.',
    pt: 'Decorações não são contabilizadas.', id_lang: 'Dekorasi tidak dihitung.', ru: 'Украшения не учитываются.', fr: 'Les décorations ne sont pas comptabilisées.', ar: 'لا يتم احتساب الزينة.', ja: ''
  },
  '装饰物成分不计': {
    cn: '装饰物成分不计', en: 'The decorative components are not considered.', th: 'ไม่ได้พิจารณาส่วนประกอบตกแต่ง', vn: 'Các thành phần trang trí không được tính đến.', es: 'Los elementos decorativos no se tienen en cuenta.',
    pt: 'Os componentes decorativos não são considerados.', id_lang: 'Komponen dekoratif tidak dipertimbangkan.', ru: 'Декоративные элементы не учитываются.', fr: 'Les éléments décoratifs ne sont pas pris en compte.', ar: 'لا يتم أخذ العناصر الزخرفية في الاعتبار.', ja: ''
  },
  '装饰物除外': {
    cn: '装饰物除外', en: 'Except for decorations', th: 'ยกเว้นของตกแต่ง', vn: 'Ngoại trừ đồ trang trí', es: 'Excepto por la decoración',
    pt: 'Exceto decorações', id_lang: 'Kecuali untuk dekorasi', ru: 'За исключением украшений', fr: 'À l&#39;exception des décorations', ar: 'باستثناء الزينة', ja: ''
  },
  '装饰线': {
    cn: '装饰线', en: 'Decorative lines', th: 'เส้นตกแต่ง', vn: 'Đường trang trí', es: 'Líneas decorativas',
    pt: 'Linhas decorativas', id_lang: 'Garis dekoratif', ru: 'Декоративные линии', fr: 'Lignes décoratives', ar: 'خطوط زخرفية', ja: ''
  },
  '装饰线除外': {
    cn: '装饰线除外', en: 'Except for decorative lines', th: 'ยกเว้นเส้นตกแต่ง', vn: 'Ngoại trừ các đường trang trí', es: 'Excepto por líneas decorativas',
    pt: 'Exceto pelas linhas decorativas', id_lang: 'Kecuali untuk garis dekoratif', ru: 'За исключением декоративных линий.', fr: 'À l&#39;exception des lignes décoratives', ar: 'باستثناء الخطوط الزخرفية', ja: ''
  },
  '装饰部分除外': {
    cn: '装饰部分除外', en: 'Except for decorative parts', th: 'ยกเว้นส่วนที่เป็นเครื่องประดับ', vn: 'Ngoại trừ các bộ phận trang trí.', es: 'Excepto las piezas decorativas',
    pt: 'Exceto as peças decorativas', id_lang: 'Kecuali bagian dekoratif', ru: 'За исключением декоративных элементов.', fr: 'À l&#39;exception des parties décoratives', ar: 'باستثناء الأجزاء الزخرفية', ja: ''
  },
  '装饰除外': {
    cn: '装饰除外', en: 'Except for decoration', th: 'ยกเว้นการตกแต่ง', vn: 'Ngoại trừ mục đích trang trí.', es: 'Excepto para decoración',
    pt: 'Exceto para decoração', id_lang: 'Kecuali untuk dekorasi', ru: 'За исключением декоративных элементов.', fr: 'À l&#39;exception de la décoration', ar: 'باستثناء الزينة', ja: ''
  },
  '装饰领成分不计': {
    cn: '装饰领成分不计', en: 'The decorative collar component is not counted.', th: 'ส่วนประกอบของปกเสื้อที่เป็นเครื่องประดับนั้นไม่นับรวม', vn: 'Phần cổ áo trang trí không được tính vào.', es: 'El componente decorativo del collar no se tiene en cuenta.',
    pt: 'O componente decorativo da gola não está incluído na contagem.', id_lang: 'Komponen kerah dekoratif tidak dihitung.', ru: 'Декоративный элемент воротника не учитывается.', fr: 'La partie décorative du col n&#39;est pas prise en compte.', ar: 'لا يتم احتساب عنصر الياقة المزخرفة.', ja: ''
  },
  '裆部里料': {
    cn: '裆部里料', en: 'Crotch Lining', th: 'ซับในเป้ากางเกง', vn: 'Lớp lót đáy quần', es: 'Forro de la entrepierna',
    pt: 'Forro da virilha', id_lang: 'Lapisan Selangkangan', ru: 'Подкладка в области промежности', fr: 'Doublure d&#39;entrejambe', ar: 'بطانة منطقة الحوض', ja: ''
  },
  '裙中层': {
    cn: '裙中层', en: 'Mid-skirt', th: 'กระโปรงยาวระดับกลาง', vn: 'Váy lửng', es: 'Media falda',
    pt: 'saia midi', id_lang: 'Rok selutut', ru: 'середина юбки', fr: 'jupe mi-longue', ar: 'تنورة متوسطة الطول', ja: ''
  },
  '裙外两层': {
    cn: '裙外两层', en: 'Two layers on the outside of the skirt', th: 'กระโปรงมีสองชั้นด้านนอก', vn: 'Hai lớp vải ở bên ngoài váy.', es: 'Dos capas en la parte exterior de la falda.',
    pt: 'Duas camadas na parte externa da saia', id_lang: 'Dua lapisan di bagian luar rok.', ru: 'Два слоя с внешней стороны юбки', fr: 'Deux couches à l&#39;extérieur de la jupe', ar: 'طبقتان على الجزء الخارجي من التنورة', ja: ''
  },
  '裙外层': {
    cn: '裙外层', en: 'outer layer of skirt', th: 'ชั้นนอกของกระโปรง', vn: 'lớp ngoài của váy', es: 'capa exterior de la falda',
    pt: 'camada externa da saia', id_lang: 'lapisan luar rok', ru: 'внешний слой юбки', fr: 'couche extérieure de la jupe', ar: 'الطبقة الخارجية للتنورة', ja: ''
  },
  '裙夹里': {
    cn: '裙夹里', en: 'In the skirt', th: 'ในกระโปรง', vn: 'Trong chiếc váy', es: 'En la falda',
    pt: 'Na saia', id_lang: 'Di dalam rok', ru: 'В юбке', fr: 'En jupe', ar: 'في التنورة', ja: ''
  },
  '裙子里料': {
    cn: '裙子里料', en: 'Skirt lining', th: 'ซับในกระโปรง', vn: 'Lớp lót váy', es: 'Forro de la falda',
    pt: 'Forro da saia', id_lang: 'Lapisan rok', ru: 'Подкладка юбки', fr: 'doublure de jupe', ar: 'بطانة التنورة', ja: ''
  },
  '裙子面料': {
    cn: '裙子面料', en: 'Skirt fabric', th: 'ผ้าสำหรับทำกระโปรง', vn: 'Vải may váy', es: 'Tela para falda',
    pt: 'Tecido para saia', id_lang: 'Kain rok', ru: 'Ткань для юбки', fr: 'Tissu pour jupe', ar: 'قماش التنورة', ja: ''
  },
  '裙摆两层': {
    cn: '裙摆两层', en: 'Two layers of skirt', th: 'กระโปรงสองชั้น', vn: 'Váy hai lớp', es: 'Falda de dos capas',
    pt: 'Saia de duas camadas', id_lang: 'Rok dua lapis', ru: 'Два слоя юбки', fr: 'Jupe à deux couches', ar: 'طبقتان من التنورة', ja: ''
  },
  '裙裤里': {
    cn: '裙裤里', en: 'Under the skirt and pants', th: 'ใต้กระโปรงและกางเกง', vn: 'Bên dưới váy và quần', es: 'Debajo de la falda y los pantalones',
    pt: 'Por baixo da saia e das calças', id_lang: 'Di bawah rok dan celana', ru: 'Под юбкой и брюками', fr: 'Sous la jupe et le pantalon', ar: 'تحت التنورة والسروال', ja: ''
  },
  '裙里': {
    cn: '裙里', en: 'Under the skirt', th: 'ใต้กระโปรง', vn: 'Dưới váy', es: 'Debajo de la falda',
    pt: 'Por baixo da saia', id_lang: 'Di bawah rok', ru: 'Под юбкой', fr: 'Sous la jupe', ar: 'تحت التنورة', ja: ''
  },
  '裙里布': {
    cn: '裙里布', en: 'Skirt lining', th: 'ซับในกระโปรง', vn: 'Lớp lót váy', es: 'Forro de la falda',
    pt: 'Forro da saia', id_lang: 'Lapisan rok', ru: 'Подкладка юбки', fr: 'doublure de jupe', ar: 'بطانة التنورة', ja: ''
  },
  '裤子里料': {
    cn: '裤子里料', en: 'Pants lining', th: 'ซับในกางเกง', vn: 'Lớp lót quần', es: 'Forro de pantalones',
    pt: 'Forro de calças', id_lang: 'Lapisan celana', ru: 'Подкладка брюк', fr: 'doublure de pantalon', ar: 'بطانة البنطال', ja: ''
  },
  '裤子面料': {
    cn: '裤子面料', en: 'Pants fabric', th: 'ผ้าสำหรับกางเกง', vn: 'Vải quần', es: 'Tela de pantalones',
    pt: 'Tecido para calças', id_lang: 'Kain celana', ru: 'Ткань для брюк', fr: 'Tissu pour pantalons', ar: 'قماش البنطال', ja: ''
  },
  '裤腰': {
    cn: '裤腰', en: 'waistband', th: 'เข็มขัด', vn: 'cạp quần', es: 'pretina',
    pt: 'cós', id_lang: 'emban', ru: 'пояс', fr: 'ceinture', ar: 'حزام', ja: ''
  },
  '裸感面料': {
    cn: '裸感面料', en: 'bare-feel fabric', th: 'ผ้าเนื้อบางเบา', vn: 'vải không cảm giác', es: 'tejido de tacto natural',
    pt: 'tecido com toque suave', id_lang: 'kain yang terasa seperti kulit asli', ru: 'ткань на ощупь', fr: 'tissu à l&#39;aspect brut', ar: 'قماش ذو ملمس طبيعي', ja: ''
  },
  '裸粉': {
    cn: '裸粉', en: 'nude pink', th: 'สีชมพูนู้ด', vn: 'màu hồng nude', es: 'rosa nude',
    pt: 'rosa nude', id_lang: 'merah muda telanjang', ru: 'телесно-розовый', fr: 'rose nude', ar: 'وردي فاتح', ja: ''
  },
  '裸粉渐变': {
    cn: '裸粉渐变', en: 'nude pink gradient', th: 'ไล่ระดับสีชมพูนู้ด', vn: 'chuyển sắc hồng nude', es: 'degradado rosa nude',
    pt: 'degradê rosa nude', id_lang: 'gradien merah muda telanjang', ru: 'нюдово-розовый градиент', fr: 'dégradé rose nude', ar: 'تدرج لوني وردي فاتح', ja: ''
  },
  '裸粉花纹': {
    cn: '裸粉花纹', en: 'nude pink pattern', th: 'ลายสีชมพูนู้ด', vn: 'họa tiết màu hồng nude', es: 'estampado rosa nude',
    pt: 'padrão rosa nude', id_lang: 'pola merah muda telanjang', ru: 'узор телесно-розового цвета', fr: 'motif rose nude', ar: 'نقش وردي فاتح', ja: ''
  },
  '裸粉镶拼': {
    cn: '裸粉镶拼', en: 'nude pink patchwork', th: 'ผ้าปะติดปะต่อสีชมพูนู้ด', vn: 'chắp vá màu hồng nude', es: 'patchwork rosa nude',
    pt: 'patchwork rosa nude', id_lang: 'tambal sulam merah muda telanjang', ru: 'нюдово-розовый лоскутный узор', fr: 'patchwork rose nude', ar: 'مرقعة باللون الوردي الفاتح', ja: ''
  },
  '该产品具有': {
    cn: '该产品具有', en: 'This product has', th: 'ผลิตภัณฑ์นี้มี', vn: 'Sản phẩm này có', es: 'Este producto tiene',
    pt: 'Este produto tem', id_lang: 'Produk ini memiliki', ru: 'Этот продукт имеет', fr: 'Ce produit a', ar: 'يحتوي هذا المنتج على', ja: ''
  },
  '该产品具有吸湿速干性能': {
    cn: '该产品具有吸湿速干性能', en: 'This product has moisture-absorbing and quick-drying properties.', th: 'ผลิตภัณฑ์นี้มีคุณสมบัติในการดูดซับความชื้นและแห้งเร็ว', vn: 'Sản phẩm này có khả năng hút ẩm và khô nhanh.', es: 'Este producto tiene propiedades de absorción de humedad y de secado rápido.',
    pt: 'Este produto possui propriedades de absorção de umidade e secagem rápida.', id_lang: 'Produk ini memiliki sifat menyerap kelembapan dan cepat kering.', ru: 'Этот продукт обладает влагопоглощающими и быстросохнущими свойствами.', fr: 'Ce produit possède des propriétés d&#39;absorption de l&#39;humidité et de séchage rapide.', ar: 'يتميز هذا المنتج بخصائص امتصاص الرطوبة والتجفيف السريع.', ja: ''
  },
  '该产品具有接触瞬间凉感性能': {
    cn: '该产品具有接触瞬间凉感性能', en: 'This product has an instant cooling effect upon contact.', th: 'ผลิตภัณฑ์นี้ให้ความรู้สึกเย็นทันทีเมื่อสัมผัส', vn: 'Sản phẩm này có tác dụng làm mát tức thì khi tiếp xúc.', es: 'Este producto tiene un efecto refrescante instantáneo al contacto.',
    pt: 'Este produto tem um efeito refrescante instantâneo ao contato.', id_lang: 'Produk ini memberikan efek pendinginan instan saat bersentuhan.', ru: 'Этот продукт оказывает мгновенный охлаждающий эффект при контакте.', fr: 'Ce produit procure un effet rafraîchissant instantané au contact.', ar: 'يتميز هذا المنتج بتأثير تبريد فوري عند ملامسته للجلد.', ja: ''
  },
  '该产品内件面料后背上里布具有远红外及抗静电性能，符合Q/EHT 08-2024的要求。': {
    cn: '该产品内件面料后背上里布具有远红外及抗静电性能，符合Q/EHT 08-2024的要求。', en: 'The inner fabric of this product\'s back lining features far-infrared and anti-static properties, meeting the requirements of Q/EHT 08-2024.', th: 'ผลิตภัณฑ์นี้มีวัสดุในตัวที่มีคุณสมบัติการสะท้อนความร้อนในช่วงไกลและป้องกันไฟฟ้าสถิต อยู่ในเกณฑ์ตามข้อกำหนด Q/EHT 08-2024.', vn: 'Vải lót phía sau của sản phẩm này có khả năng phát ra sóng hồng ngoại xa và chống tĩnh điện, đáp ứng yêu cầu của Q/EHT 08-2024.', es: 'El forro del tejido interior de este producto en la parte trasera tiene propiedades de infrarrojos lejanos y antiestáticas, cumpliendo con los requisitos de Q/EHT 08-2024.',
    pt: 'A parte interna do tecido da parte de trás deste produto possui propriedades de infravermelho distante e antieletrostáticas, atendendo aos requisitos da Q/EHT 08-2024.', id_lang: 'Bahan lapisan dalam produk ini di bagian belakang memiliki kemampuan inframerah jauh dan anti-statis, sesuai dengan persyaratan Q/EHT 08-2024.', ru: 'Внутренний материал изделия на задней стороне имеет свойства дальнего инфракрасного излучения и антистатические характеристики, соответствует требованиям Q/EHT 08-2024.', fr: 'Le tissu intérieur de ce produit est doté de propriétés d\'émission infrarouge lointain et d\'antistatique, conforme aux exigences de la norme Q/EHT 08-2024.', ar: 'تتميز بطانة ظهر القماش الداخلي لهذا المنتج بخواص الأشعة تحت الحمراء البعيدة ومقاومة الكهرباء الساكنة، وهي تتوافق مع متطلبات Q/EHT 08-2024.', ja: ''
  },
  '该产品外件面料具有防水、防油、防污(易去污)性能，符合Q/EHT 08-2024的要求。': {
    cn: '该产品外件面料具有防水、防油、防污(易去污)性能，符合Q/EHT 08-2024的要求。', en: 'The outer fabric of this product is waterproof, oil-resistant, and stain-resistant (easy to clean), meeting the requirements of Q/EHT 08-2024.', th: 'ผลิตภัณฑ์นี้มีวัสดุภายนอกที่มีคุณสมบัติกันน้ำ กันน้ำมัน และกันคราบ (ทำความสะอาดได้ง่าย) ซึ่งเป็นไปตามข้อกำหนดของ Q/EHT 08-2024.', vn: 'Chất liệu bề mặt của sản phẩm này có khả năng chống nước, chống dầu và chống bẩn (dễ dàng làm sạch), đáp ứng yêu cầu của Q/EHT 08-2024.', es: 'El material exterior de este producto es resistente al agua, al aceite y a las manchas (fácil de limpiar), cumpliendo con los requisitos de la norma Q/EHT 08-2024.',
    pt: 'O tecido externo deste produto possui características de impermeabilidade, resistência a óleos e à sujeira (fácil de limpar), atendendo aos requisitos da norma Q/EHT 08-2024.', id_lang: 'Bahan luar produk ini memiliki kemampuan tahan air, tahan minyak, dan tahan kotoran (mudah dibersihkan), sesuai dengan persyaratan Q/EHT 08-2024.', ru: 'Ткань внешней части данного продукта обладает водо-, масло- и грязеотталкивающими (легко очищаемыми) свойствами и соответствует требованиям Q/EHT 08-2024.', fr: 'Le tissu extérieur de ce produit possède des propriétés imperméables, résistantes à l\'huile et à la salissure (facile à nettoyer), conformément aux exigences de la norme Q/EHT 08-2024.', ar: 'تمتاز مادة الأجزاء الخارجية لهذا المنتج بخصائص مقاومة للماء، والزيت، والأوساخ (سهلة التنظيف)، وتفي بمتطلبات Q/EHT 08-2024.', ja: ''
  },
  '请使用垫布熨烫': {
    cn: '请使用垫布熨烫', en: 'Note: Iron the cloth liner', th: 'หมายเหตุ: รีดส่วนซับในของผ้า', vn: 'Lưu ý: Ủi lớp lót vải', es: 'Nota: Planchar la tela del forro',
    pt: 'Nota: Engomar o tecido do forro', id_lang: 'Catatan: Setrika pelapis kain', ru: 'Примечание: Следует гладить тканевую подкладку', fr: 'Remarque : Repasser la doublure en tissu', ar: 'ملحوظة: قم بكي بطانة القماش', ja: '注意：あて布使用'
  },
  '请勿印花处熨烫': {
    cn: '请勿印花处熨烫', en: 'Do Not Iron Print', th: 'ห้ามรีดลายพิมพ์', vn: 'Không ủi lên hình in', es: 'No planchar sobre el estampado',
    pt: 'Não passar sobre a estampa', id_lang: 'Jangan setrika pada bagian cetakan', ru: 'Не гладить по принту', fr: 'Ne pas repasser sur l\'imprimé', ar: 'لا تكوي على منطقة الطباعة', ja: ''
  },
  '请勿拧干': {
    cn: '请勿拧干', en: 'Do Not Wring', th: 'ห้ามบิด', vn: 'Không vắt', es: 'No retorcer',
    pt: 'Não torcer', id_lang: 'Jangan diperas', ru: 'Не выжимать', fr: 'Ne pas essorer', ar: 'لا تعصر', ja: ''
  },
  '请勿接触火源': {
    cn: '请勿接触火源', en: 'Keep Away From Fire', th: 'หลีกเลี่ยงเปลวไฟ', vn: 'Tránh xa lửa', es: 'No acercar al fuego',
    pt: 'Não aproximar do fogo', id_lang: 'Jauhkan dari api', ru: 'Не приближать к огню', fr: 'Ne pas approcher du feu', ar: 'لا تقرب من النار', ja: ''
  },
  '请勿长时间浸泡': {
    cn: '请勿长时间浸泡', en: 'Do Not Soak', th: 'ห้ามแช่นาน', vn: 'Không ngâm lâu', es: 'No remojar durante mucho tiempo',
    pt: 'Não deixar de molho por muito tempo', id_lang: 'Jangan direndam terlalu lama', ru: 'Не замачивать надолго', fr: 'Ne pas tremper longtemps', ar: 'لا تنقع لفترة طويلة', ja: ''
  },
  '请勿长时间浸泡，请与其他衣物分开洗涤': {
    cn: '请勿长时间浸泡，请与其他衣物分开洗涤', en: 'Note: Do not soak for a long time, please wash separately from other clothing', th: 'หมายเหตุ: อย่าแช่น้ำเป็นเวลานาน โปรดซักแยกต่างหากจากเสื้อผ้าอื่น ๆ', vn: 'Lưu ý: Không ngâm trong thời gian dài, vui lòng giặt riêng với quần áo khác', es: 'Nota: No dejar en remojo durante mucho tiempo, lavar por separado de otras prendas',
    pt: 'Nota: Não deixar de molho durante muito tempo, lavar separadamente da restante roupa', id_lang: 'Catatan: Jangan direndam dalam waktu yang lama, cuci secara terpisah dari pakaian lainnya', ru: 'Примечание: Не замачивать надолго, стирать отдельно от другой одежды', fr: 'Remarque : Ne pas laisser tremper longtemps, laver séparément des autres vêtements', ar: 'ملحوظة: لا ينقع لفترة طويلة، يغسل بشكل منفصل عن الملابس الأخرى', ja: '注意：長時間のつけ置きは避け、他の衣類と分けて洗ってください'
  },
  '谷仓红面料': {
    cn: '谷仓红面料', en: 'Barn Red Fabric', th: 'ผ้าสีแดงเข้ม', vn: 'Vải màu đỏ gạch', es: 'Tela de color rojo granero',
    pt: 'Tecido vermelho celeiro', id_lang: 'Kain Merah Lumbung', ru: 'Ткань цвета &quot;Амбарно-красный&quot;', fr: 'Tissu rouge grange', ar: 'قماش أحمر داكن', ja: ''
  },
  '豆绿': {
    cn: '豆绿', en: 'Bean Green', th: 'ถั่วเขียว', vn: 'Đậu xanh', es: 'Verde de judía',
    pt: 'Feijão Verde', id_lang: 'Kacang Hijau', ru: 'Зеленая фасоль', fr: 'Haricot vert', ar: 'الفاصوليا الخضراء', ja: ''
  },
  '象牙白': {
    cn: '象牙白', en: 'Ivory White', th: 'สีขาวงาช้าง', vn: 'Trắng ngà', es: 'Blanco marfil',
    pt: 'Branco Marfim', id_lang: 'Berwarna gading', ru: 'Белый цвет слоновой кости', fr: 'Blanc ivoire', ar: 'أبيض عاجي', ja: ''
  },
  '象牙白条纹': {
    cn: '象牙白条纹', en: 'Ivory stripes', th: 'ลายทางสีงาช้าง', vn: 'Sọc màu ngà', es: 'rayas color marfil',
    pt: 'Listras cor de marfim', id_lang: 'Garis-garis gading', ru: 'Полосы цвета слоновой кости', fr: 'rayures ivoire', ar: 'خطوط عاجية', ja: ''
  },
  '象牙白镶拼': {
    cn: '象牙白镶拼', en: 'Ivory White Inlaid', th: 'ฝังลายงาช้างสีขาว', vn: 'Màu trắng ngà khảm', es: 'Blanco marfil con incrustaciones',
    pt: 'Marfim Branco Incrustado', id_lang: 'Bertatahkan Warna Putih Gading', ru: 'Вставка цвета слоновой кости', fr: 'Incrustation blanc ivoire', ar: 'مطعم باللون الأبيض العاجي', ja: ''
  },
  '货号': {
    cn: '货号', en: 'Item No. / Art No.', th: 'รหัสสินค้า', vn: 'Mã sản phẩm', es: 'N.º de artículo',
    pt: 'N.º do artigo', id_lang: 'Nomor Barang', ru: 'Артикул', fr: 'N° d\'article', ar: 'رقم الصنف', ja: ''
  },
  '贴标除外': {
    cn: '贴标除外', en: 'Except for labeling', th: 'ยกเว้นการติดฉลาก', vn: 'Ngoại trừ nhãn', es: 'Excepto por el etiquetado',
    pt: 'Exceto pela rotulagem', id_lang: 'Kecuali untuk pelabelan', ru: 'За исключением маркировки', fr: 'À l&#39;exception de l&#39;étiquetage', ar: 'باستثناء ما يتعلق بالتصنيف', ja: ''
  },
  '贴膜除外': {
    cn: '贴膜除外', en: 'Except for screen protectors', th: 'ยกเว้นฟิล์มกันรอยหน้าจอ', vn: 'Ngoại trừ miếng dán bảo vệ màn hình.', es: 'Excepto los protectores de pantalla',
    pt: 'Exceto para protetores de tela', id_lang: 'Kecuali pelindung layar', ru: 'За исключением защитных пленок для экрана.', fr: 'À l&#39;exception des protections d&#39;écran', ar: 'باستثناء واقيات الشاشة', ja: ''
  },
  '贴花线': {
    cn: '贴花线', en: 'Decorative lines', th: 'เส้นตกแต่ง', vn: 'Đường trang trí', es: 'Líneas decorativas',
    pt: 'Linhas decorativas', id_lang: 'Garis dekoratif', ru: 'Декоративные линии', fr: 'Lignes décoratives', ar: 'خطوط زخرفية', ja: ''
  },
  '贴衬及海绵除外': {
    cn: '贴衬及海绵除外', en: 'Excluding lining and sponge', th: 'ไม่รวมซับในและฟองน้ำ', vn: 'Không bao gồm lớp lót và mút xốp.', es: 'Excluyendo el forro y la esponja.',
    pt: 'Excluindo forro e esponja.', id_lang: 'Tidak termasuk lapisan dalam dan spons.', ru: 'Без учета подкладки и губки.', fr: 'À l&#39;exclusion de la doublure et de l&#39;éponge', ar: 'باستثناء البطانة والإسفنج', ja: ''
  },
  '贴衬及非纤维物质除外': {
    cn: '贴衬及非纤维物质除外', en: 'Except for linings and non-fibrous materials', th: 'ยกเว้นวัสดุบุรองและวัสดุที่ไม่ใช่เส้นใย', vn: 'Ngoại trừ lớp lót và các vật liệu không phải sợi.', es: 'Excepto revestimientos y materiales no fibrosos.',
    pt: 'Exceto para revestimentos e materiais não fibrosos.', id_lang: 'Kecuali untuk lapisan dan bahan non-serat', ru: 'За исключением подкладочных материалов и неволокнистых материалов.', fr: 'À l&#39;exception des doublures et des matériaux non fibreux', ar: 'باستثناء البطانات والمواد غير الليفية', ja: ''
  },
  '贴衬除外': {
    cn: '贴衬除外', en: 'Except for the lining', th: 'ยกเว้นซับใน', vn: 'Ngoại trừ lớp lót', es: 'Excepto por el forro',
    pt: 'Com exceção do forro.', id_lang: 'Kecuali lapisan dalamnya', ru: 'За исключением подкладки', fr: 'À l&#39;exception de la doublure', ar: 'باستثناء البطانة', ja: ''
  },
  '贴边面料': {
    cn: '贴边面料', en: 'Edge-fitting fabric', th: 'ผ้าที่เข้ารูปขอบ', vn: 'Vải vừa khít mép', es: 'Tejido ajustado a los bordes',
    pt: 'Tecido com ajuste de borda', id_lang: 'Kain yang pas di tepi', ru: 'Ткань, плотно прилегающая к краю', fr: 'Tissu ajusté aux bords', ar: 'قماش ملائم للحواف', ja: ''
  },
  '起毛纱': {
    cn: '起毛纱', en: 'pile yarn', th: 'เส้นด้ายกอง', vn: 'sợi lông', es: 'hilo de pelo',
    pt: 'fio de pilha', id_lang: 'benang tumpukan', ru: 'ворсовая пряжа', fr: 'fil à poils', ar: 'خيوط الوبر', ja: ''
  },
  '超柔棉': {
    cn: '超柔棉', en: 'Super soft cotton', th: 'ผ้าฝ้ายนุ่มพิเศษ', vn: 'Bông siêu mềm', es: 'Algodón supersuave',
    pt: 'Algodão super macio', id_lang: 'Katun super lembut', ru: 'Супермягкий хлопок', fr: 'Coton ultra doux', ar: 'قطن فائق النعومة', ja: ''
  },
  '超柔纱': {
    cn: '超柔纱', en: 'Super soft yarn', th: 'เส้นด้ายนุ่มพิเศษ', vn: 'Sợi siêu mềm', es: 'Hilo supersuave',
    pt: 'Fio super macio', id_lang: 'Benang super lembut', ru: 'Очень мягкая пряжа', fr: 'Fil ultra doux', ar: 'خيوط فائقة النعومة', ja: ''
  },
  '超纤': {
    cn: '超纤', en: 'Microfiber', th: 'ไมโครไฟเบอร์', vn: 'Sợi siêu nhỏ', es: 'microfibra',
    pt: 'Microfibra', id_lang: 'Mikrofiber', ru: 'Микрофибра', fr: 'microfibre', ar: 'ألياف دقيقة', ja: ''
  },
  '超纤皮': {
    cn: '超纤皮', en: 'Microfiber leather', th: 'หนังไมโครไฟเบอร์', vn: 'Da sợi nhỏ', es: 'Piel de microfibra',
    pt: 'Couro de microfibra', id_lang: 'Kulit mikrofiber', ru: 'Микрофибровая кожа', fr: 'cuir microfibre', ar: 'جلد المايكروفايبر', ja: ''
  },
  '超细丝柔棉': {
    cn: '超细丝柔棉', en: 'Superfine silk cotton', th: 'ผ้าไหมผสมฝ้ายคุณภาพเยี่ยม', vn: 'Bông lụa siêu mịn', es: 'algodón de seda superfino',
    pt: 'algodão de seda superfino', id_lang: 'katun sutra superhalus', ru: 'Сверхтонкий шелковый хлопок', fr: 'Coton de soie extra-fin', ar: 'قطن حريري فائق النعومة', ja: ''
  },
  '越东': {
    cn: '越东', en: 'Vietnam East', th: 'เวียดนามตะวันออก', vn: 'Đông Việt Nam', es: 'Vietnam del Este',
    pt: 'Leste do Vietnã', id_lang: 'Vietnam Timur', ru: 'Восточный Вьетнам', fr: 'Vietnam Est', ar: 'فيتنام الشرقية', ja: ''
  },
  '越南制造': {
    cn: '越南制造', en: 'Made in Vietnam', th: 'ผลิตในเวียดนาม', vn: 'Sản xuất tại Việt Nam', es: 'Hecho en Vietnam',
    pt: 'Fabricado no Vietnã', id_lang: 'Buatan Vietnam', ru: 'Сделано во Вьетнаме', fr: 'Fabriqué au Vietnam', ar: 'صنع في فيتنام', ja: ''
  },
  '身部填充物': {
    cn: '身部填充物', en: 'Body Filler', th: 'ฟิลเลอร์ส่วนลำตัว', vn: 'Phần Độn Ở Thân', es: 'Relleno De Cuerpo',
    pt: 'Enchimento Do Corpo', id_lang: 'Pengisi Bodi', ru: 'Наполнитель В Основной Части Изделия', fr: 'Rembourrage Du Corps', ar: 'حشوة الجسم', ja: '身頃の詰め物'
  },
  '轻户外': {
    cn: '轻户外', en: 'Light outdoor', th: 'แสงสว่างกลางแจ้ง', vn: 'Ánh sáng ngoài trời', es: 'Luz exterior',
    pt: 'Luz externa', id_lang: 'Lampu luar ruangan', ru: 'Свет на улице', fr: 'Lumière extérieure', ar: 'إضاءة خارجية', ja: ''
  },
  '轻户外九分半': {
    cn: '轻户外九分半', en: 'Light outdoor 9.5 minutes', th: 'กลางแจ้งที่มีแสงสว่าง 9.5 นาที', vn: 'Ánh sáng ngoài trời 9,5 phút', es: 'Luz exterior 9,5 minutos',
    pt: 'Luz ao ar livre 9,5 minutos', id_lang: 'Lampu luar ruangan 9,5 menit', ru: 'Свет на улице 9,5 минут', fr: 'Lumière extérieure 9,5 minutes', ar: 'إضاءة خارجية 9.5 دقيقة', ja: ''
  },
  '轻柔洗涤': {
    cn: '轻柔洗涤', en: 'Gentle cycle', th: 'ซักแบบถนอมผ้า', vn: 'Chế độ giặt nhẹ nhàng', es: 'Ciclo suave / delicado',
    pt: 'Ciclo suave / delicado', id_lang: 'Siklus cuci lembut', ru: 'Деликатная стирка', fr: 'Cycle délicat', ar: 'دورة غسيل لطيفة', ja: ''
  },
  '轻薄': {
    cn: '轻薄', en: 'Lightweight', th: 'น้ำหนักเบา', vn: 'Nhẹ', es: 'Ligero',
    pt: 'Leve', id_lang: 'Ringan', ru: 'Легкий', fr: 'Léger', ar: 'خفيف الوزن', ja: ''
  },
  '轻薄格子': {
    cn: '轻薄格子', en: 'Lightweight checkered', th: 'ลายตารางหมากรุกน้ำหนักเบา', vn: 'nhẹ, kẻ caro', es: 'Cuadros ligeros',
    pt: 'xadrez leve', id_lang: 'Ringan dan bercorak kotak-kotak', ru: 'Легкий клетчатый', fr: 'carreaux légers', ar: 'خفيف الوزن بنقشة مربعات', ja: ''
  },
  '轻薄格纹': {
    cn: '轻薄格纹', en: 'Lightweight plaid', th: 'ลายสก็อตน้ำหนักเบา', vn: 'kẻ sọc nhẹ', es: 'Cuadros ligeros',
    pt: 'xadrez leve', id_lang: 'Kain kotak-kotak ringan', ru: 'Легкая клетка', fr: 'Plaid léger', ar: 'قماش كاروهات خفيف الوزن', ja: ''
  },
  '轻薄格纹面料': {
    cn: '轻薄格纹面料', en: 'Lightweight plaid fabric', th: 'ผ้าลายสก็อตเนื้อบางเบา', vn: 'Vải kẻ sọc nhẹ', es: 'Tejido ligero a cuadros',
    pt: 'Tecido xadrez leve', id_lang: 'Kain kotak-kotak ringan', ru: 'Легкая клетчатая ткань', fr: 'Tissu à carreaux léger', ar: 'قماش كاروهات خفيف الوزن', ja: ''
  },
  '轻薄色织': {
    cn: '轻薄色织', en: 'Lightweight yarn fabric', th: 'ผ้าทอจากเส้นด้ายน้ำหนักเบา', vn: 'Vải sợi nhẹ', es: 'Tejido de hilo ligero',
    pt: 'Tecido de fio leve', id_lang: 'Kain benang ringan', ru: 'Легкая ткань из пряжи', fr: 'Tissu en fil léger', ar: 'قماش غزل خفيف الوزن', ja: ''
  },
  '轻薄面料': {
    cn: '轻薄面料', en: 'Lightweight fabric', th: 'ผ้าเนื้อเบา', vn: 'Vải nhẹ', es: 'Tejido ligero',
    pt: 'Tecido leve', id_lang: 'Kain ringan', ru: 'Легкая ткань', fr: 'Tissu léger', ar: 'قماش خفيف الوزن', ja: ''
  },
  '辅料': {
    cn: '辅料', en: 'auxiliary materials', th: 'วัสดุเสริม', vn: 'vật liệu phụ trợ', es: 'materiales auxiliares',
    pt: 'materiais auxiliares', id_lang: 'bahan pembantu', ru: 'вспомогательные материалы', fr: 'matériaux auxiliaires', ar: 'المواد المساعدة', ja: ''
  },
  '辅纱线': {
    cn: '辅纱线', en: 'auxiliary yarn', th: 'เส้นด้ายเสริม', vn: 'sợi phụ', es: 'hilo auxiliar',
    pt: 'fio auxiliar', id_lang: 'benang bantu', ru: 'вспомогательная пряжа', fr: 'fil auxiliaire', ar: 'خيوط مساعدة', ja: ''
  },
  '边缘加弹部位除外': {
    cn: '边缘加弹部位除外', en: 'Except for the edge-reinforced areas', th: 'ยกเว้นบริเวณที่เสริมขอบ', vn: 'Ngoại trừ các khu vực được gia cố ở mép.', es: 'Excepto en las zonas reforzadas en los bordes.',
    pt: 'Exceto nas áreas reforçadas nas bordas', id_lang: 'Kecuali untuk area yang diperkuat di bagian tepinya.', ru: 'За исключением участков с усиленными краями.', fr: 'À l&#39;exception des zones renforcées sur les bords', ar: 'باستثناء المناطق المعززة بالحواف', ja: ''
  },
  '边缘罗纹部位': {
    cn: '边缘罗纹部位', en: 'Edge ribbed area', th: 'บริเวณขอบที่มีร่อง', vn: 'Vùng có gờ ở mép', es: 'Área acanalada del borde',
    pt: 'Área com nervuras na borda', id_lang: 'Area berusuk tepi', ru: 'ребристая кромка', fr: 'zone nervurée du bord', ar: 'منطقة مضلعة على الحافة', ja: ''
  },
  '边缘罗纹部位除外': {
    cn: '边缘罗纹部位除外', en: 'Except for the ribbed edge areas', th: 'ยกเว้นบริเวณขอบที่เป็นร่อง', vn: 'Ngoại trừ các khu vực mép có gờ.', es: 'Excepto en las zonas de borde acanalado.',
    pt: 'Exceto nas áreas com bordas caneladas', id_lang: 'Kecuali area tepi bergaris.', ru: 'За исключением ребристых краев.', fr: 'À l&#39;exception des zones de bord nervuré', ar: 'باستثناء مناطق الحواف المضلعة', ja: ''
  },
  '边缘罗纹除外': {
    cn: '边缘罗纹除外', en: 'Except for edge ribbing', th: 'ยกเว้นร่องขอบ', vn: 'Ngoại trừ phần gân mép', es: 'Excepto por el borde acanalado',
    pt: 'Exceto pelas nervuras de borda.', id_lang: 'Kecuali untuk rusuk tepi', ru: 'За исключением ребер жесткости по краю.', fr: 'À l&#39;exception des nervures de bord', ar: 'باستثناء التضليع الحافي', ja: ''
  },
  '运动': {
    cn: '运动', en: 'Sports', th: 'กีฬา', vn: 'Thể thao', es: 'Deportivo',
    pt: 'Esportivo', id_lang: 'Olahraga', ru: 'Спортивный', fr: 'De sport', ar: 'رياضي', ja: ''
  },
  '运动30度机洗': {
    cn: '运动30度机洗', en: 'Sports Machine Wash at 30°C', th: 'กีฬา ซักเครื่อง 30°C', vn: 'Thể thao Giặt máy 30°C', es: 'Deportivo Lavado a máquina a 30°C',
    pt: 'Esportivo Lavagem à máquina a 30°C', id_lang: 'Olahraga Cuci Mesin 30°C', ru: 'Спортивная Машинная стирка при 30°C', fr: 'Sport Lavage en machine à 30°C', ar: 'غسيل آلي 30 درجة رياضي', ja: ''
  },
  '运动40度机洗': {
    cn: '运动40度机洗', en: 'Sports Machine Wash at 40°C', th: 'กีฬา ซักเครื่อง 40°C', vn: 'Thể thao Giặt máy 40°C', es: 'Deportivo Lavado a máquina a 40°C',
    pt: 'Esportivo Lavagem à máquina a 40°C', id_lang: 'Olahraga Cuci Mesin 40°C', ru: 'Спортивная Машинная стирка при 40°C', fr: 'Sport Lavage en machine à 40°C', ar: 'غسيل آلي 40 درجة رياضي', ja: ''
  },
  '运动不可干洗': {
    cn: '运动不可干洗', en: 'Sports Do Not Dry Clean', th: 'กีฬา ห้ามซักแห้ง', vn: 'Thể thao Không giặt khô', es: 'Deportivo No lavar en seco',
    pt: 'Esportivo Não lavar a seco', id_lang: 'Olahraga Jangan Dry Clean', ru: 'Спортивная Не подвергать химчистке', fr: 'Sport Ne pas nettoyer à sec', ar: 'لا تنظف جافاً رياضي', ja: ''
  },
  '运动不可漂白': {
    cn: '运动不可漂白', en: 'Sports Do Not Bleach', th: 'กีฬา ห้ามฟอกขาว', vn: 'Thể thao Không tẩy trắng', es: 'Deportivo No blanquear',
    pt: 'Esportivo Não usar alvejante', id_lang: 'Olahraga Jangan Diputihkan', ru: 'Спортивная Не отбеливать', fr: 'Sport Ne pas blanchir', ar: 'لا تبيض رياضي', ja: ''
  },
  '运动不可烘干': {
    cn: '运动不可烘干', en: 'Sports Do Not Tumble Dry', th: 'กีฬา ห้ามอบแห้ง', vn: 'Thể thao Không sấy khô', es: 'Deportivo No secar en secadora',
    pt: 'Esportivo Não secar em secadora', id_lang: 'Olahraga Jangan Dikeringkan', ru: 'Спортивная Не сушить в машине', fr: 'Sport Ne pas sécher au sèche-linge', ar: 'لا تجفف بالمجفف رياضي', ja: ''
  },
  '运动亚麻': {
    cn: '运动亚麻', en: 'Sports Linen', th: 'กีฬา ผ้าลินิน', vn: 'Thể thao Vải lanh', es: 'Deportivo Lino',
    pt: 'Esportivo Linho', id_lang: 'Olahraga Linen', ru: 'Спортивная Лен', fr: 'Sport Lin', ar: 'كتان رياضي', ja: ''
  },
  '运动低温熨烫': {
    cn: '运动低温熨烫', en: 'Sports Low Temperature Ironing', th: 'กีฬา รีดอุณหภูมิต่ำ', vn: 'Thể thao Ủi nhiệt độ thấp', es: 'Deportivo Planchar a baja temperatura',
    pt: 'Esportivo Passar a baixa temperatura', id_lang: 'Olahraga Setrika Suhu Rendah', ru: 'Спортивная Глажка при низкой температуре', fr: 'Sport Repassage à basse température', ar: 'كي بدرجة حرارة منخفضة رياضي', ja: ''
  },
  '运动再生涤纶': {
    cn: '运动再生涤纶', en: 'Sports Recycled Polyester', th: 'กีฬา โพลีเอสเตอร์รีไซเคิล', vn: 'Thể thao Polyester tái chế', es: 'Deportivo Poliéster reciclado',
    pt: 'Esportivo Poliéster reciclado', id_lang: 'Olahraga Poliester Daur Ulang', ru: 'Спортивная Переработанный полиэстер', fr: 'Sport Polyester recyclé', ar: 'بوليستر معاد التدوير رياضي', ja: ''
  },
  '运动冷水洗': {
    cn: '运动冷水洗', en: 'Sports Cold Water Wash', th: 'กีฬา ซักน้ำเย็น', vn: 'Thể thao Giặt nước lạnh', es: 'Deportivo Lavado en agua fría',
    pt: 'Esportivo Lavagem em água fria', id_lang: 'Olahraga Cuci Air Dingin', ru: 'Спортивная Стирка в холодной воде', fr: 'Sport Lavage à l\'eau froide', ar: 'غسيل بالماء البارد رياضي', ja: ''
  },
  '运动天丝': {
    cn: '运动天丝', en: 'Sports Tencel', th: 'กีฬา เทนเซล', vn: 'Thể thao Tencel', es: 'Deportivo Tencel',
    pt: 'Esportivo Tencel', id_lang: 'Olahraga Tencel', ru: 'Спортивная Тенсел', fr: 'Sport Tencel', ar: 'تنسل رياضي', ja: ''
  },
  '运动尼龙': {
    cn: '运动尼龙', en: 'Sports Nylon', th: 'กีฬา ไนลอน', vn: 'Thể thao Nylon', es: 'Deportivo Nailon',
    pt: 'Esportivo Nylon', id_lang: 'Olahraga Nilon', ru: 'Спортивная Нейлон', fr: 'Sport Nylon', ar: 'نايلون رياضي', ja: ''
  },
  '运动平铺晾干': {
    cn: '运动平铺晾干', en: 'Sports Lay Flat to Dry', th: 'กีฬา ตากแห้งแบบแบน', vn: 'Thể thao Phơi phẳng', es: 'Deportivo Secar en plano',
    pt: 'Esportivo Secar na horizontal', id_lang: 'Olahraga Keringkan Datar', ru: 'Спортивная Сушить в расправленном виде', fr: 'Sport Sécher à plat', ar: 'تجفيف مسطح رياضي', ja: ''
  },
  '运动悬挂晾干': {
    cn: '运动悬挂晾干', en: 'Sports Hang Dry', th: 'กีฬา แขวนตากแห้ง', vn: 'Thể thao Phơi treo', es: 'Deportivo Secar colgado',
    pt: 'Esportivo Secar pendurado', id_lang: 'Olahraga Gantung Kering', ru: 'Спортивная Сушить в подвешенном состоянии', fr: 'Sport Sécher suspendu', ar: 'تجفيف بالتعليق رياضي', ja: ''
  },
  '运动户外': {
    cn: '运动户外', en: 'Sports and Outdoors', th: 'กีฬาและกิจกรรมกลางแจ้ง', vn: 'Thể thao và Hoạt động ngoài trời', es: 'Deportes y actividades al aire libre',
    pt: 'Esportes e atividades ao ar livre', id_lang: 'Olahraga dan Aktivitas Luar Ruangan', ru: 'Спорт и отдых на природе', fr: 'Sports et loisirs de plein air', ar: 'الرياضة والأنشطة الخارجية', ja: ''
  },
  '运动手洗': {
    cn: '运动手洗', en: 'Sports Hand Wash', th: 'กีฬา ซักมือ', vn: 'Thể thao Giặt tay', es: 'Deportivo Lavado a mano',
    pt: 'Esportivo Lavagem à mão', id_lang: 'Olahraga Cuci Tangan', ru: 'Спортивная Ручная стирка', fr: 'Sport Lavage à la main', ar: 'غسيل يدوي رياضي', ja: ''
  },
  '运动有机棉': {
    cn: '运动有机棉', en: 'Sports Organic Cotton', th: 'กีฬา ผ้าฝ้ายออร์แกนิก', vn: 'Thể thao Cotton hữu cơ', es: 'Deportivo Algodón orgánico',
    pt: 'Esportivo Algodão orgânico', id_lang: 'Olahraga Katun Organik', ru: 'Спортивная Органический хлопок', fr: 'Sport Coton biologique', ar: 'قطن عضوي رياضي', ja: ''
  },
  '运动机洗': {
    cn: '运动机洗', en: 'Sports Machine Wash', th: 'กีฬา ซักเครื่อง', vn: 'Thể thao Giặt máy', es: 'Deportivo Lavado a máquina',
    pt: 'Esportivo Lavagem à máquina', id_lang: 'Olahraga Cuci Mesin', ru: 'Спортивная Машинная стирка', fr: 'Sport Lavage en machine', ar: 'غسيل آلي رياضي', ja: ''
  },
  '运动棉': {
    cn: '运动棉', en: 'Sports Cotton', th: 'กีฬา ผ้าฝ้าย', vn: 'Thể thao Cotton', es: 'Deportivo Algodón',
    pt: 'Esportivo Algodão', id_lang: 'Olahraga Katun', ru: 'Спортивная Хлопок', fr: 'Sport Coton', ar: 'قطن رياضي', ja: ''
  },
  '运动氨纶': {
    cn: '运动氨纶', en: 'Sports Spandex', th: 'กีฬา สแปนเด็กซ์', vn: 'Thể thao Spandex', es: 'Deportivo Elastano',
    pt: 'Esportivo Elastano', id_lang: 'Olahraga Spandex', ru: 'Спортивная Спандекс', fr: 'Sport Élasthanne', ar: 'سباندكس رياضي', ja: ''
  },
  '运动涤纶': {
    cn: '运动涤纶', en: 'Sports Polyester', th: 'กีฬา โพลีเอสเตอร์', vn: 'Thể thao Polyester', es: 'Deportivo Poliéster',
    pt: 'Esportivo Poliéster', id_lang: 'Olahraga Poliester', ru: 'Спортивная Полиэстер', fr: 'Sport Polyester', ar: 'بوليستر رياضي', ja: ''
  },
  '运动温水洗': {
    cn: '运动温水洗', en: 'Sports Warm Water Wash', th: 'กีฬา ซักน้ำอุ่น', vn: 'Thể thao Giặt nước ấm', es: 'Deportivo Lavado en agua tibia',
    pt: 'Esportivo Lavagem em água morna', id_lang: 'Olahraga Cuci Air Hangat', ru: 'Спортивная Стирка в теплой воде', fr: 'Sport Lavage à l\'eau tiède', ar: 'غسيل بالماء الدافئ رياضي', ja: ''
  },
  '运动真丝': {
    cn: '运动真丝', en: 'Sports Pure Silk', th: 'กีฬา ผ้าไหมแท้', vn: 'Thể thao Lụa thật', es: 'Deportivo Seda pura',
    pt: 'Esportivo Seda pura', id_lang: 'Olahraga Sutra Asli', ru: 'Спортивная Натуральный шелк', fr: 'Sport Soie naturelle', ar: 'حرير طبيعي رياضي', ja: ''
  },
  '运动竹纤维': {
    cn: '运动竹纤维', en: 'Sports Bamboo Fiber', th: 'กีฬา เส้นใยไผ่', vn: 'Thể thao Sợi tre', es: 'Deportivo Fibra de bambú',
    pt: 'Esportivo Fibra de bambu', id_lang: 'Olahraga Serat Bambu', ru: 'Спортивная Бамбуковое волокно', fr: 'Sport Fibre de bambou', ar: 'ألياف الخيزران رياضي', ja: ''
  },
  '运动粘纤': {
    cn: '运动粘纤', en: 'Sports Viscose', th: 'กีฬา วิสโคส', vn: 'Thể thao Viscose', es: 'Deportivo Viscosa',
    pt: 'Esportivo Viscose', id_lang: 'Olahraga Viskosa', ru: 'Спортивная Вискоза', fr: 'Sport Viscose', ar: 'فيسكوز رياضي', ja: ''
  },
  '运动精梳棉': {
    cn: '运动精梳棉', en: 'Sports Combed Cotton', th: 'กีฬา ผ้าฝ้ายหวี', vn: 'Thể thao Cotton chải', es: 'Deportivo Algodón peinado',
    pt: 'Esportivo Algodão penteado', id_lang: 'Olahraga Katun Sisir', ru: 'Спортивная Гребенной хлопок', fr: 'Sport Coton peigné', ar: 'قطن ممشط رياضي', ja: ''
  },
  '运动羊毛': {
    cn: '运动羊毛', en: 'Sports Wool', th: 'กีฬา ขนแกะ', vn: 'Thể thao Len', es: 'Deportivo Lana',
    pt: 'Esportivo Lã', id_lang: 'Olahraga Wol', ru: 'Спортивная Шерсть', fr: 'Sport Laine', ar: 'صوف رياضي', ja: ''
  },
  '运动羊绒': {
    cn: '运动羊绒', en: 'Sports Cashmere', th: 'กีฬา แคชเมียร์', vn: 'Thể thao Cashmere', es: 'Deportivo Cachemira',
    pt: 'Esportivo Caxemira', id_lang: 'Olahraga Kasmir', ru: 'Спортивная Кашемир', fr: 'Sport Cachemire', ar: 'كشمير رياضي', ja: ''
  },
  '运动腈纶': {
    cn: '运动腈纶', en: 'Sports Acrylic', th: 'กีฬา อะคริลิก', vn: 'Thể thao Acrylic', es: 'Deportivo Acrílico',
    pt: 'Esportivo Acrílico', id_lang: 'Olahraga Akrilik', ru: 'Спортивная Акрил', fr: 'Sport Acrylique', ar: 'أكريليك رياضي', ja: ''
  },
  '运动莫代尔': {
    cn: '运动莫代尔', en: 'Sports Modal', th: 'กีฬา โมดอล', vn: 'Thể thao Modal', es: 'Deportivo Modal',
    pt: 'Esportivo Modal', id_lang: 'Olahraga Modal', ru: 'Спортивная Модал', fr: 'Sport Modal', ar: 'مودال رياضي', ja: ''
  },
  '运动莱赛尔': {
    cn: '运动莱赛尔', en: 'Sports Lyocell', th: 'กีฬา ไลโอเซลล์', vn: 'Thể thao Lyocell', es: 'Deportivo Lyocell',
    pt: 'Esportivo Lyocell', id_lang: 'Olahraga Lyocell', ru: 'Спортивная Лиоцелл', fr: 'Sport Lyocell', ar: 'ليوسيل رياضي', ja: ''
  },
  '运动锦纶': {
    cn: '运动锦纶', en: 'Sports Nylon', th: 'กีฬา ไนลอน', vn: 'Thể thao Nylon', es: 'Deportivo Nailon',
    pt: 'Esportivo Nylon', id_lang: 'Olahraga Nilon', ru: 'Спортивная Нейлон', fr: 'Sport Nylon', ar: 'نايلون رياضي', ja: ''
  },
  '运动马海毛': {
    cn: '运动马海毛', en: 'Sports Mohair', th: 'กีฬา โมแฮร์', vn: 'Thể thao Mohair', es: 'Deportivo Mohair',
    pt: 'Esportivo Mohair', id_lang: 'Olahraga Mohair', ru: 'Спортивная Мохер', fr: 'Sport Mohair', ar: 'موهير رياضي', ja: ''
  },
  '进口商': {
    cn: '进口商', en: 'Importer', th: 'ผู้นำเข้า', vn: 'Nhà nhập khẩu', es: 'Importador',
    pt: 'Importador', id_lang: 'Importir', ru: 'Импортер', fr: 'Importateur', ar: 'المستورد', ja: ''
  },
  '远离火源': {
    cn: '远离火源', en: 'Keep Away From Fire', th: 'หลีกเลี่ยงเปลวไฟ', vn: 'Tránh xa lửa', es: 'Mantener alejado del fuego',
    pt: 'Manter longe do fogo', id_lang: 'Jauhkan dari api', ru: 'Беречь от огня', fr: 'Tenir éloigné du feu', ar: 'يُحفظ بعيداً عن النار', ja: ''
  },
  '连接线除外': {
    cn: '连接线除外', en: 'Except for connecting wires', th: 'ยกเว้นสายเชื่อมต่อ', vn: 'Ngoại trừ việc kết nối dây dẫn', es: 'Excepto por los cables de conexión',
    pt: 'Exceto para fios de conexão', id_lang: 'Kecuali untuk kabel penghubung', ru: 'За исключением соединительных проводов.', fr: 'À l&#39;exception des fils de connexion', ar: 'باستثناء أسلاك التوصيل', ja: ''
  },
  '连衣裙': {
    cn: '连衣裙', en: 'dress', th: 'ชุด', vn: 'đầm', es: 'vestido',
    pt: 'vestir', id_lang: 'gaun', ru: 'одеваться', fr: 'robe', ar: 'فستان', ja: ''
  },
  '连衣裙里料': {
    cn: '连衣裙里料', en: 'Dress lining', th: 'ซับในเดรส', vn: 'Lớp lót váy', es: 'Forro del vestido',
    pt: 'Forro do vestido', id_lang: 'Lapisan gaun', ru: 'Подкладка платья', fr: 'doublure de robe', ar: 'بطانة الفستان', ja: ''
  },
  '连衣裙面料': {
    cn: '连衣裙面料', en: 'Dress fabric', th: 'ผ้าสำหรับตัดชุด', vn: 'Vải may váy', es: 'Tela para vestido',
    pt: 'Tecido para vestido', id_lang: 'Kain gaun', ru: 'Ткань для платья', fr: 'Tissu pour robe', ar: 'قماش الفستان', ja: ''
  },
  '速干': {
    cn: '速干', en: 'quick-drying', th: 'แห้งเร็ว', vn: 'khô nhanh', es: 'secado rápido',
    pt: 'secagem rápida', id_lang: 'cepat kering', ru: 'быстросохнущий', fr: 'séchage rapide', ar: 'سريع الجفاف', ja: ''
  },
  '速干提花': {
    cn: '速干提花', en: 'quick-drying jacquard', th: 'ผ้าแจ็กการ์ดแห้งเร็ว', vn: 'vải jacquard nhanh khô', es: 'jacquard de secado rápido',
    pt: 'jacquard de secagem rápida', id_lang: 'jacquard cepat kering', ru: 'быстросохнущий жаккард', fr: 'Jacquard à séchage rapide', ar: 'جاكار سريع الجفاف', ja: ''
  },
  '速干面料': {
    cn: '速干面料', en: 'quick-drying fabrics', th: 'ผ้าที่แห้งเร็ว', vn: 'vải nhanh khô', es: 'tejidos de secado rápido',
    pt: 'tecidos de secagem rápida', id_lang: 'kain cepat kering', ru: 'быстросохнущие ткани', fr: 'tissus à séchage rapide', ar: 'أقمشة سريعة الجفاف', ja: ''
  },
  '避免阳光直晒': {
    cn: '避免阳光直晒', en: 'Avoid Direct Sunlight', th: 'หลีกเลี่ยงแสงแดดโดยตรง', vn: 'Tránh ánh nắng trực tiếp', es: 'Evitar la luz solar directa',
    pt: 'Evitar luz solar direta', id_lang: 'Hindari sinar matahari langsung', ru: 'Избегать прямых солнечных лучей', fr: 'Éviter la lumière directe du soleil', ar: 'تجنب أشعة الشمس المباشرة', ja: ''
  },
  '部位': {
    cn: '部位', en: 'Part', th: 'ส่วนหนึ่ง', vn: 'Phần', es: 'Parte',
    pt: 'Papel', id_lang: 'Bagian', ru: 'Часть', fr: 'Partie', ar: 'جزء', ja: ''
  },
  '配布除外': {
    cn: '配布除外', en: 'Except distribution', th: 'ยกเว้นการแจกจ่าย', vn: 'Ngoại trừ việc phân phối', es: 'Excepto la distribución',
    pt: 'Exceto distribuição', id_lang: 'Kecuali distribusi', ru: 'За исключением распределения', fr: 'Sauf distribution', ar: 'التوزيع الاستثنائي', ja: ''
  },
  '配料': {
    cn: '配料', en: 'Ingredients', th: 'วัตถุดิบ', vn: 'Thành phần', es: 'Ingredientes',
    pt: 'Ingredientes', id_lang: 'Bahan-bahan', ru: 'Ингредиенты', fr: 'Ingrédients', ar: 'مكونات', ja: ''
  },
  '配料A': {
    cn: '配料A', en: 'Ingredient A', th: 'ส่วนผสม A', vn: 'Thành phần A', es: 'Ingrediente A',
    pt: 'Ingrediente A', id_lang: 'Bahan A', ru: 'Ингредиент А', fr: 'Ingrédient A', ar: 'المكون أ', ja: ''
  },
  '配料B': {
    cn: '配料B', en: 'Ingredient B', th: 'ส่วนประกอบ บี', vn: 'Thành phần B', es: 'Ingrediente B',
    pt: 'Ingrediente B', id_lang: 'Bahan B', ru: 'Ингредиент B', fr: 'Ingrédient B', ar: 'المكون ب', ja: ''
  },
  '配料底布': {
    cn: '配料底布', en: 'Ingredient base fabric', th: 'ส่วนประกอบหลักคือผ้า', vn: 'Vải cơ bản thành phần', es: 'Tejido base de ingredientes',
    pt: 'Tecido base de ingredientes', id_lang: 'Kain dasar bahan', ru: 'Ткань на основе ингредиентов', fr: 'tissu de base des ingrédients', ar: 'نسيج أساسي مكون', ja: ''
  },
  '配料成分不计': {
    cn: '配料成分不计', en: 'Ingredients not counted', th: 'ส่วนผสมที่ไม่นับรวม', vn: 'Các thành phần không được tính', es: 'Ingredientes no contados',
    pt: 'Ingredientes não contabilizados', id_lang: 'Bahan-bahan yang tidak dihitung', ru: 'Ингредиенты не учитываются', fr: 'Ingrédients non comptabilisés', ar: 'المكونات غير محسوبة', ja: ''
  },
  '配料除外': {
    cn: '配料除外', en: 'Except for ingredients', th: 'ยกเว้นส่วนผสม', vn: 'Ngoại trừ các thành phần', es: 'Excepto los ingredientes',
    pt: 'Exceto pelos ingredientes.', id_lang: 'Kecuali untuk bahan-bahan', ru: 'За исключением ингредиентов', fr: 'À l&#39;exception des ingrédients', ar: 'باستثناء المكونات', ja: ''
  },
  '配饰': {
    cn: '配饰', en: 'Accessories', th: 'เครื่องประดับ', vn: 'Phụ kiện', es: 'Accesorios',
    pt: 'Acessórios', id_lang: 'Aksesoris', ru: 'Аксессуары', fr: 'Accessoires', ar: 'مُكَمِّلات', ja: ''
  },
  '配饰面料': {
    cn: '配饰面料', en: 'Accessory fabrics', th: 'ผ้าสำหรับทำเครื่องประดับ', vn: 'Vải phụ kiện', es: 'Telas para accesorios',
    pt: 'Tecidos para acessórios', id_lang: 'Kain aksesori', ru: 'Ткани для аксессуаров', fr: 'tissus accessoires', ar: 'أقمشة الإكسسوارات', ja: ''
  },
  '酒红': {
    cn: '酒红', en: 'Wine Red', th: 'สีแดงไวน์', vn: 'Màu đỏ rượu vang', es: 'Vino tinto',
    pt: 'Vinho Tinto', id_lang: 'Merah Anggur', ru: 'Красное вино', fr: 'Rouge vin', ar: 'نبيذ أحمر', ja: ''
  },
  '酒红色': {
    cn: '酒红色', en: 'Claret', th: 'แคลเร็ต', vn: 'Rượu vang đỏ', es: 'Burdeos',
    pt: 'Claret', id_lang: 'Darah', ru: 'Кларет', fr: 'Bordeaux', ar: 'كلاريت', ja: ''
  },
  '醋纤': {
    cn: '醋纤', en: 'Acetate', th: 'อะซิเตท', vn: 'Axetat', es: 'Acetato',
    pt: 'Acetato', id_lang: 'Asetat', ru: 'Ацетат', fr: 'Acétate', ar: 'خلات', ja: ''
  },
  '醋酯纤维': {
    cn: '醋酯纤维', en: 'Acetate fiber', th: 'เส้นใยอะซิเตท', vn: 'Sợi axetat', es: 'fibra de acetato',
    pt: 'Fibra de acetato', id_lang: 'Serat asetat', ru: 'Ацетатное волокно', fr: 'Fibre d&#39;acétate', ar: 'ألياف الأسيتات', ja: ''
  },
  '醋酸乙烯酯共聚物': {
    cn: '醋酸乙烯酯共聚物', en: 'vinyl acetate copolymer', th: 'โคพอลิเมอร์ไวนิลอะซิเตต', vn: 'copolymer vinyl axetat', es: 'copolímero de acetato de vinilo',
    pt: 'copolímero de acetato de vinila', id_lang: 'kopolimer vinil asetat', ru: 'сополимер винилацетата', fr: 'copolymère d&#39;acétate de vinyle', ar: 'كوبوليمر أسيتات الفينيل', ja: ''
  },
  '醋酸纤维': {
    cn: '醋酸纤维', en: 'cellulose acetate', th: 'เซลลูโลสอะซิเตท', vn: 'cellulose axetat', es: 'acetato de celulosa',
    pt: 'acetato de celulose', id_lang: 'selulosa asetat', ru: 'ацетат целлюлозы', fr: 'acétate de cellulose', ar: 'أسيتات السليلوز', ja: ''
  },
  '里层': {
    cn: '里层', en: 'Inner layer', th: 'ชั้นใน', vn: 'Lớp bên trong', es: 'capa interna',
    pt: 'Camada interna', id_lang: 'Lapisan dalam', ru: 'Внутренний слой', fr: 'couche interne', ar: 'الطبقة الداخلية', ja: ''
  },
  '里层下摆': {
    cn: '里层下摆', en: 'Inner hem', th: 'ชายเสื้อด้านใน', vn: 'Viền trong', es: 'dobladillo interior',
    pt: 'bainha interna', id_lang: 'Kelim bagian dalam', ru: 'Внутренний край', fr: 'ourlet intérieur', ar: 'الحافة الداخلية', ja: ''
  },
  '里层下摆拼': {
    cn: '里层下摆拼', en: 'Inner hem splicing', th: 'การเย็บตะเข็บด้านใน', vn: 'Nối viền trong', es: 'Empalme del dobladillo interior',
    pt: 'emenda da bainha interna', id_lang: 'Penyambungan kelim bagian dalam', ru: 'Внутренняя окантовка', fr: 'assemblage de l&#39;ourlet intérieur', ar: 'وصلة الحافة الداخلية', ja: ''
  },
  '里层毛织': {
    cn: '里层毛织', en: 'Inner layer wool', th: 'ผ้าขนสัตว์ชั้นใน', vn: 'Lớp len bên trong', es: 'Lana de la capa interior',
    pt: 'camada interna de lã', id_lang: 'Lapisan dalam wol', ru: 'Внутренний слой из шерсти', fr: 'Couche intérieure en laine', ar: 'الصوف للطبقة الداخلية', ja: ''
  },
  '里层网纱': {
    cn: '里层网纱', en: 'Inner layer mesh', th: 'ตาข่ายชั้นใน', vn: 'Lớp lưới bên trong', es: 'Malla de la capa interior',
    pt: 'malha da camada interna', id_lang: 'Jaringan lapisan dalam', ru: 'Внутренний слой сетки', fr: 'maille de la couche intérieure', ar: 'شبكة الطبقة الداخلية', ja: ''
  },
  '里层面料': {
    cn: '里层面料', en: 'Inner fabric', th: 'ผ้าชั้นใน', vn: 'Vải bên trong', es: 'Tejido interior',
    pt: 'Tecido interno', id_lang: 'Kain bagian dalam', ru: 'Внутренняя ткань', fr: 'Tissu intérieur', ar: 'القماش الداخلي', ja: ''
  },
  '里布': {
    cn: '里布', en: 'Ribu', th: 'ริบู', vn: 'Ribu', es: 'Ribu',
    pt: 'Ribu', id_lang: 'Ribu', ru: 'Рибу', fr: 'Ribu', ar: 'ريبو', ja: ''
  },
  '里料': {
    cn: '里料', en: 'Lining', th: 'ซับใน', vn: 'Niêm mạc', es: 'Recubrimiento',
    pt: 'Resina', id_lang: 'Lapisan', ru: 'Оболочка', fr: 'Garniture', ar: 'بطانة', ja: ''
  },
  '里料A': {
    cn: '里料A', en: 'Lining A', th: 'ซับใน A', vn: 'Lớp lót A', es: 'Revestimiento A',
    pt: 'Forro A', id_lang: 'Lapisan A', ru: 'Подкладка А', fr: 'Revêtement A', ar: 'البطانة أ', ja: ''
  },
  '里料B': {
    cn: '里料B', en: 'Lining B', th: 'ซับใน บี', vn: 'Lớp lót B', es: 'Revestimiento B',
    pt: 'Forro B', id_lang: 'Lapisan B', ru: 'Подкладка B', fr: 'Doublure B', ar: 'البطانة ب', ja: ''
  },
  '里料D': {
    cn: '里料D', en: 'Lining D', th: 'ซับใน D', vn: 'Lớp lót D', es: 'Revestimiento D',
    pt: 'Forro D', id_lang: 'Lapisan D', ru: 'Облицовка D', fr: 'Doublure D', ar: 'البطانة د', ja: ''
  },
  '里料成分不计': {
    cn: '里料成分不计', en: 'Lining ingredients not counted', th: 'ส่วนผสมของซับในไม่นับรวม', vn: 'Thành phần lót không được tính', es: 'Ingredientes del revestimiento no incluidos',
    pt: 'Ingredientes do forro não contabilizados', id_lang: 'Bahan pelapis tidak dihitung', ru: 'Состав облицовочных материалов не учитывается.', fr: 'Ingrédients de la doublure non comptabilisés', ar: 'لا يتم احتساب مكونات البطانة.', ja: ''
  },
  '里衬': {
    cn: '里衬', en: 'Lining', th: 'ซับใน', vn: 'Niêm mạc', es: 'Recubrimiento',
    pt: 'Resina', id_lang: 'Lapisan', ru: 'Оболочка', fr: 'Garniture', ar: 'بطانة', ja: ''
  },
  '里襟': {
    cn: '里襟', en: 'inner lapel', th: 'ปกเสื้อด้านใน', vn: 've áo trong', es: 'solapa interior',
    pt: 'lapela interna', id_lang: 'kerah bagian dalam', ru: 'внутренний лацкан', fr: 'revers intérieur', ar: 'طية صدر السترة الداخلية', ja: ''
  },
  '金属丝': {
    cn: '金属丝', en: 'metal wire', th: 'ลวดโลหะ', vn: 'dây kim loại', es: 'alambre metálico',
    pt: 'fio de metal', id_lang: 'kawat logam', ru: 'металлическая проволока', fr: 'fil métallique', ar: 'سلك معدني', ja: ''
  },
  '金属纤维': {
    cn: '金属纤维', en: 'Metal fiber', th: 'เส้นใยโลหะ', vn: 'Sợi kim loại', es: 'fibra metálica',
    pt: 'Fibra metálica', id_lang: 'Serat logam', ru: 'Металлическое волокно', fr: 'Fibre métallique', ar: 'ميتالاب', ja: ''
  },
  '金属膜': {
    cn: '金属膜', en: 'metal film', th: 'ฟิล์มโลหะ', vn: 'màng kim loại', es: 'película metálica',
    pt: 'película metálica', id_lang: 'film logam', ru: 'металлическая пленка', fr: 'film métallique', ar: 'فيلم معدني', ja: ''
  },
  '金属镀膜纤维': {
    cn: '金属镀膜纤维', en: 'Metal-coated fibers', th: 'เส้นใยเคลือบโลหะ', vn: 'Sợi phủ kim loại', es: 'Fibras recubiertas de metal',
    pt: 'Fibras revestidas de metal', id_lang: 'Serat berlapis logam', ru: 'Волокна с металлическим покрытием', fr: 'Fibres revêtues de métal', ar: 'ألياف مطلية بالمعدن', ja: ''
  },
  '金色': {
    cn: '金色', en: 'gold', th: 'ทอง', vn: 'vàng', es: 'oro',
    pt: 'ouro', id_lang: 'emas', ru: 'золото', fr: 'or', ar: 'ذهب', ja: ''
  },
  '金色镶拼': {
    cn: '金色镶拼', en: 'Gold Inlay', th: 'ฝังทอง', vn: 'Khảm vàng', es: 'Incrustaciones de oro',
    pt: 'Incrustação de ouro', id_lang: 'Inlay Emas', ru: 'Золотая инкрустация', fr: 'Incrustations d&#39;or', ar: 'ترصيع ذهبي', ja: ''
  },
  '金葱元仝带': {
    cn: '金葱元仝带', en: 'Glitter Dollar Belt', th: 'เข็มขัดกลิตเตอร์ดอลลาร์', vn: 'Thắt lưng Glitter Dollar', es: 'Cinturón de dólar brillante',
    pt: 'Cinto de Dólares com Glitter', id_lang: 'Sabuk Dolar Berkilau', ru: 'Пояс с блестящими долларами', fr: 'Ceinture à paillettes en forme de dollar', ar: 'حزام الدولار اللامع', ja: ''
  },
  '针织': {
    cn: '针织', en: 'knitting', th: 'การถัก', vn: 'đan len', es: 'tejido de punto',
    pt: 'tricô', id_lang: 'rajutan', ru: 'вязание', fr: 'tricot', ar: 'الحياكة', ja: ''
  },
  '针织仿牛仔': {
    cn: '针织仿牛仔', en: 'Knitted faux denim', th: 'ผ้าถักเลียนแบบผ้ายีนส์', vn: 'Vải giả denim dệt kim', es: 'Tejido de punto imitación mezclilla',
    pt: 'Tricô imitando jeans', id_lang: 'Rajutan denim imitasi', ru: 'Вязаный искусственный деним', fr: 'faux denim tricoté', ar: 'دنيم صناعي محبوك', ja: ''
  },
  '针织包边面料': {
    cn: '针织包边面料', en: 'Knitted edging fabric', th: 'ผ้าขอบถัก', vn: 'Vải viền dệt kim', es: 'Tejido de punto para ribetes',
    pt: 'Tecido de borda tricotado', id_lang: 'Kain tepi rajutan', ru: 'Трикотажная окантовочная ткань', fr: 'tissu de bordure tricoté', ar: 'قماش حواف محبوك', ja: ''
  },
  '针织化纤': {
    cn: '针织化纤', en: 'Knitted synthetic fibers', th: 'เส้นใยสังเคราะห์ถักทอ', vn: 'Sợi tổng hợp dệt kim', es: 'fibras sintéticas tejidas',
    pt: 'Fibras sintéticas tricotadas', id_lang: 'Serat sintetis rajutan', ru: 'Вязаные синтетические волокна', fr: 'fibres synthétiques tricotées', ar: 'ألياف صناعية محبوكة', ja: ''
  },
  '针织华夫格': {
    cn: '针织华夫格', en: 'Knitted waffle', th: 'วาฟเฟิลถัก', vn: 'Bánh quế đan', es: 'gofre tejido',
    pt: 'waffle tricotado', id_lang: 'Wafel rajutan', ru: 'Вязаная вафельная пряжа', fr: 'Gaufre tricotée', ar: 'وافل محبوك', ja: ''
  },
  '针织印花': {
    cn: '针织印花', en: 'Knitwear Printing', th: 'การพิมพ์ลายถัก', vn: 'In ấn hàng dệt kim', es: 'Impresión de prendas de punto',
    pt: 'Estampagem de malhas', id_lang: 'Pencetakan Pakaian Rajut', ru: 'Печать на трикотажных изделиях', fr: 'Impression sur tricots', ar: 'طباعة الملابس المحبوكة', ja: ''
  },
  '针织印花面料': {
    cn: '针织印花面料', en: 'Knitted printed fabrics', th: 'ผ้าถักพิมพ์ลาย', vn: 'Vải dệt kim in', es: 'tejidos de punto estampados',
    pt: 'Tecidos de malha estampados', id_lang: 'Kain rajut bermotif', ru: 'Вязаные ткани с принтом', fr: 'tissus imprimés tricotés', ar: 'أقمشة محبوكة مطبوعة', ja: ''
  },
  '针织四面弹': {
    cn: '针织四面弹', en: 'knitted four-way stretch', th: 'ผ้าถักยืดหยุ่นได้สี่ทิศทาง', vn: 'vải dệt kim co giãn bốn chiều', es: 'Tejido elástico en cuatro direcciones',
    pt: 'malha elástica em quatro direções', id_lang: 'rajutan elastis empat arah', ru: 'вязаный эластичный материал, растягивающийся в четырех направлениях', fr: 'tricot extensible dans les quatre sens', ar: 'نسيج محبوك قابل للتمدد في أربعة اتجاهات', ja: ''
  },
  '针织提花': {
    cn: '针织提花', en: 'knitted jacquard', th: 'ผ้าถักแจ็กการ์ด', vn: 'vải dệt jacquard', es: 'jacquard de punto',
    pt: 'jacquard tricotado', id_lang: 'rajutan jacquard', ru: 'вязаный жаккард', fr: 'jacquard tricoté', ar: 'جاكار محبوك', ja: ''
  },
  '针织毛呢': {
    cn: '针织毛呢', en: 'Knitted wool', th: 'ผ้าขนสัตว์ถัก', vn: 'Len đan', es: 'Lana tejida',
    pt: 'lã tricotada', id_lang: 'Wol rajut', ru: 'Вязаная шерсть', fr: 'Laine tricotée', ar: 'صوف محبوك', ja: ''
  },
  '针织波浪纹面料': {
    cn: '针织波浪纹面料', en: 'Knitted wave pattern fabric', th: 'ผ้าถักลายคลื่น', vn: 'Vải dệt kim họa tiết sóng', es: 'Tejido de punto con estampado de ondas',
    pt: 'Tecido tricotado com padrão de ondas', id_lang: 'Kain rajutan bermotif gelombang', ru: 'Вязаная ткань с волнообразным узором', fr: 'tissu tricoté à motif ondulé', ar: 'قماش محبوك بنمط موجة', ja: ''
  },
  '针织空气层': {
    cn: '针织空气层', en: 'Knitted air layer', th: 'ชั้นอากาศถักทอ', vn: 'Lớp thoáng khí dệt kim', es: 'Capa de aire tejida',
    pt: 'Camada de ar tricotada', id_lang: 'Lapisan Udara Rajutan', ru: 'Вязаный воздушный слой', fr: 'Couche d&#39;air tricotée', ar: 'طبقة هوائية محبوكة', ja: ''
  },
  '针织经编': {
    cn: '针织经编', en: 'Knitting warp knitting', th: 'การถักไหมพรมแบบวาร์ป', vn: 'Đan sợi dọc', es: 'Tejer punto por urdimbre',
    pt: 'Tricô de urdidura', id_lang: 'Merajut dengan teknik lusi', ru: 'Вязание, основовязание', fr: 'tricotage chaîne', ar: 'حياكة السدى', ja: ''
  },
  '针织色织': {
    cn: '针织色织', en: 'Knitted yarn', th: 'เส้นด้ายถัก', vn: 'Sợi đan', es: 'Hilo de punto',
    pt: 'Fio tricotado', id_lang: 'Benang rajut', ru: 'Вязаная пряжа', fr: 'Laine tricotée', ar: 'خيوط التريكو', ja: ''
  },
  '针织里料': {
    cn: '针织里料', en: 'Knitted lining', th: 'ซับในถัก', vn: 'Lớp lót dệt kim', es: 'Forro de punto',
    pt: 'Forro de malha', id_lang: 'lapisan rajutan', ru: 'Вязаная подкладка', fr: 'doublure tricotée', ar: 'بطانة محبوكة', ja: ''
  },
  '针织面料': {
    cn: '针织面料', en: 'Knitted fabrics', th: 'ผ้าถัก', vn: 'Vải dệt kim', es: 'tejidos de punto',
    pt: 'Tecidos de malha', id_lang: 'Kain rajutan', ru: 'Трикотажные ткани', fr: 'tissus tricotés', ar: 'الأقمشة المحبوكة', ja: ''
  },
  '针织高氨': {
    cn: '针织高氨', en: 'Knitting high-ammonia', th: 'การถักทอด้วยแอมโมเนียสูง', vn: 'Đan len với hàm lượng amoniac cao', es: 'Tejer con alto contenido de amoníaco',
    pt: 'Tricotando com alto teor de amônia', id_lang: 'Merajut dengan kadar amonia tinggi', ru: 'Вязание с высоким содержанием аммиака', fr: 'Tricoter à haute teneur en ammoniaque', ar: 'حياكة عالية الأمونيا', ja: ''
  },
  '钢琴格': {
    cn: '钢琴格', en: 'Piano Frame', th: 'กรอบเปียโน', vn: 'Khung đàn piano', es: 'Marco de piano',
    pt: 'Moldura de piano', id_lang: 'Bingkai Piano', ru: 'Рамка для пианино', fr: 'Cadre de piano', ar: 'إطار البيانو', ja: ''
  },
  '钩织面料': {
    cn: '钩织面料', en: 'Crocheted fabric', th: 'ผ้าถักโครเชต์', vn: 'Vải móc', es: 'Tela de ganchillo',
    pt: 'Tecido de crochê', id_lang: 'Kain rajutan', ru: 'Вязаное полотно', fr: 'tissu crocheté', ar: 'قماش كروشيه', ja: ''
  },
  '铁灰': {
    cn: '铁灰', en: 'Iron Gray', th: 'สีเทาเหล็ก', vn: 'Xám sắt', es: 'Gris hierro',
    pt: 'Cinza Ferro', id_lang: 'Abu-abu Besi', ru: 'Железно-серый', fr: 'Gris fer', ar: 'رمادي حديدي', ja: ''
  },
  '铁青灰': {
    cn: '铁青灰', en: 'Iron bluish-gray', th: 'สีเทาอมน้ำเงินเหล็ก', vn: 'Sắt màu xám xanh', es: 'Gris azulado hierro',
    pt: 'Ferro cinza-azulado', id_lang: 'Besi abu-abu kebiruan', ru: 'Железный синевато-серый', fr: 'Gris bleuâtre fer', ar: 'حديدي رمادي مزرق', ja: ''
  },
  '铜氨': {
    cn: '铜氨', en: 'Copper ammonia', th: 'แอมโมเนียทองแดง', vn: 'Đồng amoniac', es: 'amoníaco de cobre',
    pt: 'Amônia de cobre', id_lang: 'Tembaga amonia', ru: 'медь аммиак', fr: 'Ammoniac de cuivre', ar: 'أمونيا النحاس', ja: ''
  },
  '铜氨丝': {
    cn: '铜氨丝', en: 'Cupro wire', th: 'ลวดคิวโปร', vn: 'Dây đồng', es: 'Alambre de cupro',
    pt: 'Fio de cupro', id_lang: 'Kawat Cupro', ru: 'медная проволока', fr: 'fil de cupro', ar: 'سلك نحاسي', ja: ''
  },
  '铜氨丝面料': {
    cn: '铜氨丝面料', en: 'Cupro fabric', th: 'ผ้าคิวโปร', vn: 'Vải Cupro', es: 'Tejido de cupro',
    pt: 'Tecido Cupro', id_lang: 'Kain Cupro', ru: 'Ткань Купро', fr: 'Tissu cupro', ar: 'قماش كوبرو', ja: ''
  },
  '铜氨纤维': {
    cn: '铜氨纤维', en: 'Cupro fiber', th: 'เส้นใยคิวโปร', vn: 'Sợi đồng', es: 'fibra cupro',
    pt: 'Fibra de cupro', id_lang: 'Serat Cupro', ru: 'Купроволоко', fr: 'Fibre de cupro', ar: 'ألياف النحاس', ja: ''
  },
  '银丝': {
    cn: '银丝', en: 'silver thread', th: 'ด้ายสีเงิน', vn: 'sợi chỉ bạc', es: 'hilo de plata',
    pt: 'fio de prata', id_lang: 'benang perak', ru: 'серебряная нить', fr: 'fil d&#39;argent', ar: 'خيط فضي', ja: ''
  },
  '银灰': {
    cn: '银灰', en: 'silver gray', th: 'สีเทาเงิน', vn: 'màu xám bạc', es: 'gris plateado',
    pt: 'cinza prateado', id_lang: 'abu-abu perak', ru: 'серебристо-серый', fr: 'gris argenté', ar: 'رمادي فضي', ja: ''
  },
  '银绿': {
    cn: '银绿', en: 'Silver Green', th: 'สีเขียวเงิน', vn: 'Xanh bạc', es: 'Verde plateado',
    pt: 'Verde Prateado', id_lang: 'Hijau Perak', ru: 'Серебристо-зеленый', fr: 'Vert argenté', ar: 'أخضر فضي', ja: ''
  },
  '银色': {
    cn: '银色', en: 'silver', th: 'เงิน', vn: 'bạc', es: 'plata',
    pt: 'prata', id_lang: 'perak', ru: 'серебро', fr: 'argent', ar: 'فضي', ja: ''
  },
  '银色格纹': {
    cn: '银色格纹', en: 'silver plaid', th: 'ลายตารางสีเงิน', vn: 'kẻ sọc bạc', es: 'cuadros plateados',
    pt: 'xadrez prateado', id_lang: 'kotak-kotak perak', ru: 'серебряная клетка', fr: 'carreaux argentés', ar: 'مربعات فضية', ja: ''
  },
  '银色镶拼': {
    cn: '银色镶拼', en: 'Silver inlay', th: 'ฝังเงิน', vn: 'Khảm bạc', es: 'Incrustaciones de plata',
    pt: 'Incrustação de prata', id_lang: 'Inlay perak', ru: 'Серебряная инкрустация', fr: 'Incrustation d&#39;argent', ar: 'تطعيم فضي', ja: ''
  },
  '锦棉字母条面料': {
    cn: '锦棉字母条面料', en: 'Cotton-nylon letter stripe fabric', th: 'ผ้าคอตตอนผสมไนลอนลายทางตัวอักษร', vn: 'Vải sọc chữ bằng cotton-nylon', es: 'Tela de rayas con letras de algodón y nailon',
    pt: 'Tecido de algodão e nylon com listras em formato de letras', id_lang: 'Kain katun-nilon bergaris huruf', ru: 'Ткань с полосками из хлопка и нейлона', fr: 'tissu à rayures en coton et nylon', ar: 'قماش قطني نايلون مخطط بالأحرف', ja: ''
  },
  '锦棉面料': {
    cn: '锦棉面料', en: 'Cotton-nylon fabric', th: 'ผ้าฝ้ายผสมไนลอน', vn: 'Vải cotton-nylon', es: 'tejido de algodón y nailon',
    pt: 'Tecido de algodão e nylon', id_lang: 'Kain katun-nilon', ru: 'Хлопчатобумажная нейлоновая ткань', fr: 'tissu coton-nylon', ar: 'قماش قطني-نايلون', ja: ''
  },
  '锦氨': {
    cn: '锦氨', en: 'Ammonia', th: 'แอมโมเนีย', vn: 'Amoniac', es: 'Amoníaco',
    pt: 'Amônia', id_lang: 'Amonia', ru: 'Аммиак', fr: 'Ammoniac', ar: 'الأمونيا', ja: ''
  },
  '锦氨九分半': {
    cn: '锦氨九分半', en: 'Nine and a half parts of bromine', th: 'โบรมีนเก้าส่วนครึ่ง', vn: 'Chín phần rưỡi brom', es: 'Nueve partes y media de bromo',
    pt: 'Nove partes e meia de bromo', id_lang: 'Sembilan setengah bagian bromin', ru: 'Девять с половиной частей брома', fr: 'Neuf parties et demie de brome', ar: 'تسعة أجزاء ونصف من البروم', ja: ''
  },
  '锦氨华夫格': {
    cn: '锦氨华夫格', en: 'Nylon Waffle', th: 'ไนลอนวาฟเฟิล', vn: 'Bánh quế nylon', es: 'Gofre de nailon',
    pt: 'Waffle de nylon', id_lang: 'Wafel Nilon', ru: 'Нейлоновая вафельная ткань', fr: 'Gaufre en nylon', ar: 'وافل نايلون', ja: ''
  },
  '锦氨印花': {
    cn: '锦氨印花', en: 'Nylon-ammonia printing', th: 'การพิมพ์ไนลอน-แอมโมเนีย', vn: 'In nylon-amoniac', es: 'Impresión con nailon-amoniaco',
    pt: 'Impressão em nylon-amônia', id_lang: 'Pencetakan nilon-amonia', ru: 'Печать нейлоном-аммиаком', fr: 'Impression nylon-ammoniaque', ar: 'طباعة النايلون والأمونيا', ja: ''
  },
  '锦氨四面弹': {
    cn: '锦氨四面弹', en: 'Nylon four-sided elastic', th: 'ยางยืดไนลอนสี่ด้าน', vn: 'Dây thun nylon bốn mặt', es: 'Elástico de nailon en los cuatro lados',
    pt: 'Elástico de nylon de quatro lados', id_lang: 'Karet elastis empat sisi dari nilon', ru: 'Нейлоновая четырехсторонняя эластичная лента', fr: 'Élastique en nylon à quatre côtés', ar: 'شريط مطاطي من النايلون رباعي الجوانب', ja: ''
  },
  '锦氨复合面料': {
    cn: '锦氨复合面料', en: 'Nylon-spandex composite fabric', th: 'ผ้าผสมไนลอน-สแปนเด็กซ์', vn: 'Vải tổng hợp nylon-spandex', es: 'Tejido compuesto de nailon y elastano',
    pt: 'Tecido composto de nylon e elastano', id_lang: 'Kain komposit nilon-spandex', ru: 'Композитная ткань из нейлона и спандекса', fr: 'tissu composite nylon-élasthanne', ar: 'نسيج مركب من النايلون والإسباندكس', ja: ''
  },
  '锦氨平纹': {
    cn: '锦氨平纹', en: 'Nylon-ammonia plain weave', th: 'ผ้าทอธรรมดาไนลอน-แอมโมเนีย', vn: 'Dệt trơn nylon-amoniac', es: 'tejido liso de nailon-amoniaco',
    pt: 'Tecido plano de náilon-amônia', id_lang: 'Tenunan polos nilon-amonia', ru: 'Нейлон-аммиачная ткань простого переплетения', fr: 'toile nylon-ammoniaque', ar: 'نسيج عادي من النايلون والأمونيا', ja: ''
  },
  '锦氨提花': {
    cn: '锦氨提花', en: 'Nylon Jacquard', th: 'ไนลอนแจ็กการ์ด', vn: 'Vải dệt jacquard nylon', es: 'Jacquard de nailon',
    pt: 'Jacquard de nylon', id_lang: 'Nilon Jacquard', ru: 'Нейлоновый жаккард', fr: 'Jacquard en nylon', ar: 'نايلون جاكار', ja: ''
  },
  '锦氨格纹面料': {
    cn: '锦氨格纹面料', en: 'Nylon-spandex check fabric', th: 'ผ้าลายตารางผสมไนลอนและสแปนเด็กซ์', vn: 'Vải kẻ caro nylon-spandex', es: 'Tejido a cuadros de nailon y elastano',
    pt: 'Tecido xadrez de nylon e elastano', id_lang: 'Kain kotak-kotak nilon-spandex', ru: 'Ткань в клетку из нейлона и спандекса', fr: 'tissu à carreaux en nylon et élasthanne', ar: 'قماش نايلون سباندكس بنقشة مربعات', ja: ''
  },
  '锦氨桑蚕丝': {
    cn: '锦氨桑蚕丝', en: 'nylon-ammonia silk', th: 'ไหมไนลอนแอมโมเนีย', vn: 'lụa nylon-amoniac', es: 'seda de nailon-amoniaco',
    pt: 'seda de náilon-amônia', id_lang: 'sutra nilon-amonia', ru: 'нейлон-аммиачный шелк', fr: 'soie nylon-ammoniaque', ar: 'حرير النايلون والأمونيا', ja: ''
  },
  '锦氨梭织': {
    cn: '锦氨梭织', en: 'Nylon-ammonia woven fabric', th: 'ผ้าทอไนลอนแอมโมเนีย', vn: 'vải dệt nylon-amoniac', es: 'Tejido de nailon y amoníaco',
    pt: 'Tecido de náilon-amônia', id_lang: 'Kain tenun nilon-amonia', ru: 'Ткань из нейлона и аммиака', fr: 'tissu tissé en nylon-ammoniaque', ar: 'نسيج منسوج من النايلون والأمونيا', ja: ''
  },
  '锦氨梭织面料': {
    cn: '锦氨梭织面料', en: 'Nylon-spandex woven fabric', th: 'ผ้าทอไนลอนผสมสแปนเด็กซ์', vn: 'Vải dệt nylon-spandex', es: 'Tejido de nailon y elastano',
    pt: 'Tecido de nylon-elastano', id_lang: 'Kain tenun nilon-spandex', ru: 'Ткань из нейлона и спандекса', fr: 'tissu tissé en nylon-élasthanne', ar: 'نسيج منسوج من النايلون والإيلاستين', ja: ''
  },
  '锦氨横条': {
    cn: '锦氨横条', en: 'Nylon Ammonia Horizontal Strip', th: 'แถบแนวนอนไนลอนแอมโมเนีย', vn: 'Dải ngang Nylon Amoniac', es: 'Tira horizontal de nailon y amoníaco',
    pt: 'Tira horizontal de nylon com amônia', id_lang: 'Strip Horizontal Nilon Amonia', ru: 'Горизонтальная полоса из нейлона с аммиаком', fr: 'Bande horizontale en nylon ammoniaque', ar: 'شريط أفقي من النايلون والأمونيا', ja: ''
  },
  '锦氨罗马布': {
    cn: '锦氨罗马布', en: 'Nylon Romabu', th: 'ไนลอน โรมาบู', vn: 'Nylon Romabu', es: 'Romabu de nailon',
    pt: 'Nylon Romabu', id_lang: 'Nilon Romabu', ru: 'Нейлон Ромабу', fr: 'Nylon Romabu', ar: 'نايلون رومابو', ja: ''
  },
  '锦氨面料': {
    cn: '锦氨面料', en: 'Nylon-spandex fabric', th: 'ผ้าไนลอนผสมสแปนเด็กซ์', vn: 'Vải nylon-spandex', es: 'Tejido de nailon y elastano',
    pt: 'Tecido de nylon-elastano', id_lang: 'Kain nilon-spandex', ru: 'Ткань нейлон-спандекс', fr: 'tissu en nylon-élasthanne', ar: 'قماش النايلون والإيلاستين', ja: ''
  },
  '锦涤氨': {
    cn: '锦涤氨', en: 'nylon polyester ammonia', th: 'ไนลอนโพลีเอสเตอร์แอมโมเนีย', vn: 'nylon polyester amoniac', es: 'nailon poliéster amoníaco',
    pt: 'náilon poliéster amônia', id_lang: 'nilon poliester amonia', ru: 'нейлон полиэстер аммиак', fr: 'nylon polyester ammoniaque', ar: 'نايلون بوليستر أمونيا', ja: ''
  },
  '锦纶': {
    cn: '锦纶', en: 'Nylon', th: 'ไนลอน', vn: 'Nylon', es: 'Nylon',
    pt: 'Nylon', id_lang: 'Nilon', ru: 'Нейлон', fr: 'Nylon', ar: 'نايلون', ja: ''
  },
  '锦纶/尼龙': {
    cn: '锦纶/尼龙', en: 'Nylon / Polyamide', th: 'ไนลอน', vn: 'Nylon / Polyamide', es: 'Nailon / Poliamida',
    pt: 'Nylon / Poliamida', id_lang: 'Nilon / Poliamida', ru: 'Нейлон / Полиамид', fr: 'Nylon / Polyamide', ar: 'نايلون / بولي أميد', ja: ''
  },
  '锦纶半精纺': {
    cn: '锦纶半精纺', en: 'Nylon semi-worsted', th: 'ไนลอนเซมิเวิร์สเต็ด', vn: 'len bán thô nylon', es: 'Nylon semi-peinado',
    pt: 'Nylon semi-penteado', id_lang: 'Nilon semi-worsted', ru: 'Нейлон полушерстяной', fr: 'Nylon semi-peigné', ar: 'نايلون شبه صوفي', ja: ''
  },
  '锦纶双纱排孔': {
    cn: '锦纶双纱排孔', en: 'Nylon double yarn perforated', th: 'ไนลอนเส้นใยคู่เจาะรู', vn: 'Sợi nylon đôi đục lỗ', es: 'Hilo doble de nailon perforado',
    pt: 'Fio duplo de nylon perfurado', id_lang: 'Benang ganda nilon berlubang', ru: 'перфорированная нейлоновая двойная нить', fr: 'fil de nylon double perforé', ar: 'خيوط نايلون مزدوجة مثقبة', ja: ''
  },
  '锦纶无光布': {
    cn: '锦纶无光布', en: 'nylon matte fabric', th: 'ผ้าไนลอนด้าน', vn: 'Vải nylon mờ', es: 'Tejido mate de nailon',
    pt: 'Tecido de nylon fosco', id_lang: 'kain nilon matte', ru: 'Нейлоновая матовая ткань', fr: 'tissu mat en nylon', ar: 'قماش نايلون غير لامع', ja: ''
  },
  '锦纶粗纺': {
    cn: '锦纶粗纺', en: 'Nylon coarse spinning', th: 'การปั่นเส้นใยไนลอนหยาบ', vn: 'Sợi thô nylon', es: 'Hilo grueso de nailon',
    pt: 'Fiação grossa de nylon', id_lang: 'Pemintalan kasar nilon', ru: 'Нейлон грубого прядения', fr: 'Filage grossier du nylon', ar: 'غزل خشن من النايلون', ja: ''
  },
  '锦纶罗纹部位': {
    cn: '锦纶罗纹部位', en: 'Nylon rib section', th: 'ส่วนซี่โครงไนลอน', vn: 'Phần gân nylon', es: 'Sección de nervadura de nailon',
    pt: 'Seção de nervuras de nylon', id_lang: 'Bagian rusuk nilon', ru: 'Нейлоновая ребристая секция', fr: 'section de côtes en nylon', ar: 'مقطع ضلع من النايلون', ja: ''
  },
  '锦纶面料': {
    cn: '锦纶面料', en: 'Nylon fabric', th: 'ผ้าไนลอน', vn: 'Vải nylon', es: 'Tejido de nailon',
    pt: 'Tecido de nylon', id_lang: 'Kain nilon', ru: 'нейлоновая ткань', fr: 'Tissu en nylon', ar: 'قماش النايلون', ja: ''
  },
  '锦轮': {
    cn: '锦轮', en: 'Polyamide', th: 'โพลีอะไมด์', vn: 'Polyamide', es: 'Poliamida',
    pt: 'Poliamida', id_lang: 'Poliamida', ru: 'Полиамид', fr: 'Polyamide', ar: 'بولي أميد', ja: ''
  },
  '镂空部位除外': {
    cn: '镂空部位除外', en: 'Except for the hollowed-out parts', th: 'ยกเว้นส่วนที่กลวง', vn: 'Ngoại trừ các phần rỗng bên trong.', es: 'Excepto por las partes huecas',
    pt: 'Exceto pelas partes ocas', id_lang: 'Kecuali bagian-bagian yang dilubangi', ru: 'За исключением полых частей', fr: 'À l&#39;exception des parties évidées', ar: 'باستثناء الأجزاء المجوفة', ja: ''
  },
  '镶拼': {
    cn: '镶拼', en: 'Inlay', th: 'ฝัง', vn: 'Khảm', es: 'Embutido',
    pt: 'Incrustação', id_lang: 'Tatahan', ru: 'Вставка', fr: 'Incruster', ar: 'ترصيع', ja: ''
  },
  '长丝纤维': {
    cn: '长丝纤维', en: 'filament fiber', th: 'เส้นใย', vn: 'sợi filament', es: 'fibra de filamento',
    pt: 'fibra de filamento', id_lang: 'serat filamen', ru: 'волокно', fr: 'fibre de filament', ar: 'ألياف خيطية', ja: ''
  },
  '长绒棉': {
    cn: '长绒棉', en: 'Long-staple cotton', th: 'ฝ้ายเส้นใยยาว', vn: 'Bông sợi dài', es: 'Algodón de fibra larga',
    pt: 'Algodão de fibra longa', id_lang: 'Kapas serat panjang', ru: 'Длинноволокнистый хлопок', fr: 'Coton à fibres longues', ar: 'قطن طويل التيلة', ja: ''
  },
  '长袖休闲衬衫': {
    cn: '长袖休闲衬衫', en: 'Long-Sleeved Casual Shirt', th: 'เสื้อเชิ้ตแขนยาวลำลอง', vn: 'Sơ Mi Thường Ngày Dài Tay', es: 'Camisa Casual De Manga Larga',
    pt: 'Camisa Casual De Manga Comprida', id_lang: 'Kemeja Kasual Lengan Panjang', ru: 'Повседневная Рубашка С Длинными Рукавами', fr: 'Chemise Décontractée À Manches Longues', ar: 'قميص كاجوال بأكمام طويلة', ja: '長袖カジュアルシャツ'
  },
  '门襟': {
    cn: '门襟', en: 'Placket', th: 'สาบเสื้อ', vn: 'Nẹp áo', es: 'Abertura',
    pt: 'Carcela', id_lang: 'Saku rok', ru: 'Карман в юбке', fr: 'Patte de boutonnage', ar: 'غطاء', ja: ''
  },
  '门襟下摆面料': {
    cn: '门襟下摆面料', en: 'Cloth of placket and hem', th: 'ผ้าของสาบเสื้อและชายเสื้อ', vn: 'Vải nẹp và gấu áo', es: 'Tela de la tapeta y del dobladillo',
    pt: 'Tecido da carcela e da bainha', id_lang: 'Kain untuk plaket dan kelim', ru: 'Ткань планки и подола', fr: 'Tissu de la patte de boutonnage et de l&#39;ourlet', ar: 'قماش فتحة الأزرار والحافة', ja: ''
  },
  '门襟拼': {
    cn: '门襟拼', en: 'Placket', th: 'สาบเสื้อ', vn: 'Nẹp áo', es: 'Abertura',
    pt: 'Carcela', id_lang: 'Saku rok', ru: 'Карман в юбке', fr: 'Patte de boutonnage', ar: 'غطاء', ja: ''
  },
  '门襟里料': {
    cn: '门襟里料', en: 'Placket Lining', th: 'ซับในสาบเสื้อ', vn: 'Nẹp áo lót', es: 'Forro de la tapeta',
    pt: 'Forro da carcela', id_lang: 'Lapisan Plaket', ru: 'Подкладка планки', fr: 'Doublure de patte de boutonnage', ar: 'بطانة فتحة الصدر', ja: ''
  },
  '间条': {
    cn: '间条', en: 'interstices', th: 'ช่องว่าง', vn: 'khoảng trống', es: 'intersticios',
    pt: 'interstícios', id_lang: 'celah', ru: 'промежутки', fr: 'interstices', ar: 'الفراغات', ja: ''
  },
  '阔步随型': {
    cn: '阔步随型', en: 'Striding with the shape', th: 'ก้าวเดินไปพร้อมกับรูปทรง', vn: 'Bước đi cùng hình dáng', es: 'Caminando con la forma',
    pt: 'Caminhando com a forma', id_lang: 'Melangkah mengikuti bentuk', ru: 'Шагая в соответствии с формой', fr: 'Marcher en respectant la forme', ar: 'السير مع الشكل', ja: ''
  },
  '阳离子': {
    cn: '阳离子', en: 'cation', th: 'แคตไอออน', vn: 'cation', es: 'catión',
    pt: 'cátion', id_lang: 'kation', ru: 'катион', fr: 'cation', ar: 'كاتيون', ja: ''
  },
  '阴凉处悬挂晾干': {
    cn: '阴凉处悬挂晾干', en: 'Hang to air dry in the shade', th: 'แขวนให้แห้งด้วยลมในร่ม', vn: 'Phơi khô trong bóng râm', es: 'Dejar secar al aire libre a la sombra',
    pt: 'Secar à sombra na vertical', id_lang: 'Gantung di tempat teduh yang terbuka hingga kering', ru: 'Сушиться на воздухе в тени', fr: 'Suspendre et faire sécher à l’air libre à l’ombre', ar: 'يجفف معلقاً في الهواء في الظل', ja: '日陰のつり干しがよい'
  },
  '阴凉处晾干': {
    cn: '阴凉处晾干', en: 'Dry in Shade', th: 'ตากในที่ร่ม', vn: 'Phơi nơi râm', es: 'Secar a la sombra',
    pt: 'Secar à sombra', id_lang: 'Keringkan di tempat teduh', ru: 'Сушить в тени', fr: 'Sécher à l\'ombre', ar: 'تجفيف في الظل', ja: ''
  },
  '阴干': {
    cn: '阴干', en: 'Dry in the shade', th: 'ตากในร่ม', vn: 'Phơi trong bóng râm', es: 'Secar a la sombra',
    pt: 'Secar à sombra', id_lang: 'Keringkan di tempat teduh', ru: 'Сушка в тени', fr: 'Séchage à l\'ombre', ar: 'تجفيف في الظل', ja: '日陰吊り干し'
  },
  '阿克苏棉': {
    cn: '阿克苏棉', en: 'Aksu Cotton', th: 'ผ้าฝ้ายอักซู', vn: 'Bông Aksu', es: 'Algodón Aksu',
    pt: 'Algodão Aksu', id_lang: 'Aksu Cotton', ru: 'Аксу Коттон', fr: 'Coton d&#39;Aksu', ar: 'أكسو كوتون', ja: ''
  },
  '雾织棉': {
    cn: '雾织棉', en: 'Fog-woven cotton', th: 'ผ้าฝ้ายทอหมอก', vn: 'Bông dệt bằng sương mù', es: 'Algodón tejido en la niebla',
    pt: 'Algodão tecido na névoa', id_lang: 'Katun tenun kabut', ru: 'Хлопок, сотканный методом туманного плетения', fr: 'Coton tissé dans la brume', ar: 'قطن منسوج بتقنية الضباب', ja: ''
  },
  '雾霾绿花纹': {
    cn: '雾霾绿花纹', en: 'Haze Green Pattern', th: 'ลวดลายสีเขียวหมอก', vn: 'Mẫu họa tiết màu xanh lá cây mờ', es: 'Patrón verde bruma',
    pt: 'Padrão Verde Nebuloso', id_lang: 'Pola Hijau Kabut', ru: 'Зелёный узор «Дымка»', fr: 'Motif vert brumeux', ar: 'نمط أخضر ضبابي', ja: ''
  },
  '雾霾蓝': {
    cn: '雾霾蓝', en: 'Haze Blue', th: 'เฮซบลู', vn: 'Xanh mờ', es: 'Azul bruma',
    pt: 'Azul Nebuloso', id_lang: 'Biru Kabut', ru: 'Haze Blue', fr: 'Bleu brumeux', ar: 'أزرق ضبابي', ja: ''
  },
  '霜灰': {
    cn: '霜灰', en: 'Frost Ash', th: 'เถ้าน้ำแข็ง', vn: 'Tro băng', es: 'Ceniza helada',
    pt: 'Cinzas de gelo', id_lang: 'Abu Beku', ru: 'Морозный пепел', fr: 'Cendre givrée', ar: 'رماد الصقيع', ja: ''
  },
  '青柠绿': {
    cn: '青柠绿', en: 'Lime Green', th: 'สีเขียวมะนาว', vn: 'Xanh lá chanh', es: 'Verde lima',
    pt: 'Verde limão', id_lang: 'Hijau Limau', ru: 'Салатовый', fr: 'Vert citron', ar: 'أخضر ليموني', ja: ''
  },
  '青苔绿': {
    cn: '青苔绿', en: 'Green moss', th: 'มอสสีเขียว', vn: 'Rêu xanh', es: 'Musgo verde',
    pt: 'musgo verde', id_lang: 'Lumut hijau', ru: 'Зеленый мох', fr: 'Mousse verte', ar: 'الطحلب الأخضر', ja: ''
  },
  '非纤维物质除外': {
    cn: '非纤维物质除外', en: 'Except for non-fibrous materials', th: 'ยกเว้นวัสดุที่ไม่มีเส้นใย', vn: 'Ngoại trừ các vật liệu không phải dạng sợi', es: 'Excepto para materiales no fibrosos',
    pt: 'Exceto para materiais não fibrosos', id_lang: 'Kecuali untuk bahan non-serat', ru: 'За исключением неволокнистых материалов.', fr: 'À l&#39;exception des matériaux non fibreux', ar: 'باستثناء المواد غير الليفية', ja: ''
  },
  '非起毛纱': {
    cn: '非起毛纱', en: 'Non-pilling yarn', th: 'เส้นด้ายที่ไม่เป็นขุย', vn: 'Sợi không bị xù lông', es: 'Hilo que no forma bolitas',
    pt: 'Fio que não forma bolinhas', id_lang: 'Benang anti-penggumpalan', ru: 'Пряжа, не образующая катышков', fr: 'Fil anti-boulochage', ar: 'خيوط غير قابلة للتكتل', ja: ''
  },
  '面': {
    cn: '面', en: 'noodle', th: 'ก๋วยเตี๋ยว', vn: 'mì', es: 'cabeza',
    pt: 'macarrão', id_lang: 'mi', ru: 'лапша', fr: 'nouille', ar: 'نودلز', ja: ''
  },
  '面主面料': {
    cn: '面主面料', en: 'Main fabric', th: 'ผ้าหลัก', vn: 'chất liệu chính', es: 'Tejido principal',
    pt: 'Tecido principal', id_lang: 'Kain utama', ru: 'Основная ткань', fr: 'Tissu principal', ar: 'القماش الرئيسي', ja: ''
  },
  '面层': {
    cn: '面层', en: 'surface layer', th: 'ชั้นผิว', vn: 'lớp bề mặt', es: 'capa superficial',
    pt: 'camada superficial', id_lang: 'lapisan permukaan', ru: 'поверхностный слой', fr: 'couche superficielle', ar: 'الطبقة السطحية', ja: ''
  },
  '面层底布': {
    cn: '面层底布', en: 'Top layer and bottom layer', th: 'ชั้นบนและชั้นล่าง', vn: 'Lớp trên cùng và lớp dưới cùng', es: 'Capa superior y capa inferior',
    pt: 'Camada superior e camada inferior', id_lang: 'Lapisan atas dan lapisan bawah', ru: 'Верхний и нижний слои', fr: 'couche supérieure et couche inférieure', ar: 'الطبقة العلوية والطبقة السفلية', ja: ''
  },
  '面层网纱': {
    cn: '面层网纱', en: 'Surface mesh', th: 'ตาข่ายพื้นผิว', vn: 'Lưới bề mặt', es: 'Malla superficial',
    pt: 'malha de superfície', id_lang: 'Jaringan permukaan', ru: 'Поверхностная сетка', fr: 'maillage de surface', ar: 'شبكة سطحية', ja: ''
  },
  '面层超纤革': {
    cn: '面层超纤革', en: 'surface microfiber leather', th: 'หนังไมโครไฟเบอร์พื้นผิว', vn: 'da sợi nhỏ bề mặt', es: 'Piel de microfibra superficial',
    pt: 'couro de microfibra de superfície', id_lang: 'permukaan kulit mikrofiber', ru: 'поверхность из микрофибровой кожи', fr: 'surface en cuir microfibre', ar: 'جلد مايكروفايبر سطحي', ja: ''
  },
  '面层面料': {
    cn: '面层面料', en: 'Surface fabric', th: 'เนื้อผ้าพื้นผิว', vn: 'Vải bề mặt', es: 'Tejido de superficie',
    pt: 'Tecido de superfície', id_lang: 'Kain permukaan', ru: 'Поверхностная ткань', fr: 'Tissu de surface', ar: 'نسيج سطحي', ja: ''
  },
  '面布': {
    cn: '面布', en: 'face cloth', th: 'ผ้าเช็ดหน้า', vn: 'khăn mặt', es: 'paño facial',
    pt: 'pano de rosto', id_lang: 'kain lap muka', ru: 'ткань для лица', fr: 'gant de toilette', ar: 'منشفة وجه', ja: ''
  },
  '面料': {
    cn: '面料', en: 'fabric', th: 'ผ้า', vn: 'chất liệu chính', es: 'tela',
    pt: 'tecido', id_lang: 'kain', ru: 'ткань', fr: 'tissu', ar: 'قماش', ja: ''
  },
  '面料基布': {
    cn: '面料基布', en: 'Fabric base fabric', th: 'ผ้าพื้นฐาน', vn: 'Vải nền', es: 'Tejido base de tela',
    pt: 'Tecido base', id_lang: 'Kain dasar', ru: 'Ткань-основа', fr: 'tissu de base', ar: 'قماش أساسي', ja: ''
  },
  '面料底层': {
    cn: '面料底层', en: 'Fabric base layer', th: 'ชั้นฐานผ้า', vn: 'Lớp vải lót', es: 'Capa base de tela',
    pt: 'Camada base de tecido', id_lang: 'Lapisan dasar kain', ru: 'Тканевый базовый слой', fr: 'couche de base en tissu', ar: 'طبقة أساسية من القماش', ja: ''
  },
  '面料成分': {
    cn: '面料成分', en: 'Fabric composition', th: 'ส่วนประกอบของผ้า', vn: 'Thành phần vải', es: 'Composición del tejido',
    pt: 'Composição do tecido', id_lang: 'Komposisi kain', ru: 'состав ткани', fr: 'composition du tissu', ar: 'تركيبة النسيج', ja: ''
  },
  '面料机织层': {
    cn: '面料机织层', en: 'Fabric woven layer', th: 'ชั้นผ้าทอ', vn: 'lớp vải dệt', es: 'Capa de tejido',
    pt: 'camada de tecido trançado', id_lang: 'Lapisan tenun kain', ru: 'Тканый слой', fr: 'couche tissée en tissu', ar: 'طبقة نسيجية منسوجة', ja: ''
  },
  '面料针织层': {
    cn: '面料针织层', en: 'Fabric knit layer', th: 'ชั้นผ้าถัก', vn: 'Lớp vải dệt kim', es: 'Capa de tejido de punto',
    pt: 'camada de malha de tecido', id_lang: 'Lapisan rajutan kain', ru: 'Трикотажный слой ткани', fr: 'couche tricotée en tissu', ar: 'طبقة من نسيج محبوك', ja: ''
  },
  '面料面层': {
    cn: '面料面层', en: 'Fabric surface layer', th: 'ชั้นผิวผ้า', vn: 'Lớp bề mặt vải', es: 'capa superficial del tejido',
    pt: 'camada superficial do tecido', id_lang: 'Lapisan permukaan kain', ru: 'Поверхностный слой ткани', fr: 'couche superficielle du tissu', ar: 'الطبقة السطحية للنسيج', ja: ''
  },
  '革': {
    cn: '革', en: 'leather', th: 'หนัง', vn: 'da thú', es: 'cuero',
    pt: 'couro', id_lang: 'kulit', ru: 'кожа', fr: 'cuir', ar: 'جلد', ja: ''
  },
  '鞋底': {
    cn: '鞋底', en: 'soles', th: 'พื้นรองเท้า', vn: 'đế giày', es: 'suelas',
    pt: 'solas', id_lang: 'telapak kaki', ru: 'подошвы', fr: 'semelles', ar: 'باطن القدم', ja: ''
  },
  '鞋底面料': {
    cn: '鞋底面料', en: 'sole material', th: 'วัสดุพื้นรองเท้า', vn: 'chất liệu đế', es: 'material único',
    pt: 'material único', id_lang: 'bahan sol', ru: 'материал подошвы', fr: 'matériau de semelle', ar: 'مادة النعل', ja: ''
  },
  '鞋面面料': {
    cn: '鞋面面料', en: 'upper material', th: 'วัสดุด้านบน', vn: 'vật liệu phía trên', es: 'material superior',
    pt: 'material superior', id_lang: 'bahan atas', ru: 'верхний материал', fr: 'matériau supérieur', ar: 'المادة العلوية', ja: ''
  },
  '领': {
    cn: '领', en: 'collar', th: 'ปลอกคอ', vn: 'cổ áo', es: 'cuello',
    pt: 'colarinho', id_lang: 'kerah', ru: 'воротник', fr: 'collier', ar: 'طوق', ja: ''
  },
  '领口': {
    cn: '领口', en: 'neckline', th: 'คอเสื้อ', vn: 'đường viền cổ', es: 'escote',
    pt: 'decote', id_lang: 'garis leher', ru: 'вырез', fr: 'encolure', ar: 'فتحة الرقبة', ja: ''
  },
  '领子': {
    cn: '领子', en: 'collar', th: 'ปลอกคอ', vn: 'cổ áo', es: 'cuello',
    pt: 'colarinho', id_lang: 'kerah', ru: 'воротник', fr: 'collier', ar: 'طوق', ja: ''
  },
  '领子下摆': {
    cn: '领子下摆', en: 'collar hem', th: 'ชายเสื้อคอปก', vn: 'viền cổ áo', es: 'dobladillo del cuello',
    pt: 'bainha da gola', id_lang: 'ujung kerah', ru: 'воротник подол', fr: 'ourlet du col', ar: 'حافة الياقة', ja: ''
  },
  '领子成分不计': {
    cn: '领子成分不计', en: 'Collar composition not considered', th: 'ไม่ได้พิจารณาส่วนประกอบของปกเสื้อ', vn: 'Thành phần cổ áo không được xem xét', es: 'No se considera la composición del collar.',
    pt: 'Composição da coleira não considerada', id_lang: 'Komposisi kerah tidak dipertimbangkan', ru: 'Состав воротника не рассматривался', fr: 'La composition du collier n&#39;est pas prise en compte', ar: 'لم يتم أخذ تركيبة الياقة في الاعتبار', ja: ''
  },
  '领子扁机': {
    cn: '领子扁机', en: 'Collar flat knitting machine', th: 'เครื่องถักปกเสื้อแบบแบน', vn: 'Máy dệt kim cổ áo phẳng', es: 'Máquina de tejer plana para cuellos',
    pt: 'máquina de tricô plana para golas', id_lang: 'Mesin rajut kerah datar', ru: 'Плосковязальная машина для воротников', fr: 'machine à tricoter plate pour col', ar: 'ماكينة حياكة مسطحة للأطواق', ja: ''
  },
  '领子除外': {
    cn: '领子除外', en: 'Except for the collar', th: 'ยกเว้นปกเสื้อ', vn: 'Ngoại trừ phần cổ áo.', es: 'Excepto por el collar',
    pt: 'Exceto pela gola', id_lang: 'Kecuali kerahnya', ru: 'За исключением воротника', fr: 'À l&#39;exception du col', ar: 'باستثناء الياقة', ja: ''
  },
  '领子面料': {
    cn: '领子面料', en: 'Collar fabric', th: 'ผ้าปกเสื้อ', vn: 'Vải cổ áo', es: 'Tela del cuello',
    pt: 'Tecido da gola', id_lang: 'Kain kerah', ru: 'Ткань воротника', fr: 'Tissu du col', ar: 'قماش الياقة', ja: ''
  },
  '领巾': {
    cn: '领巾', en: 'scarf', th: 'ผ้าพันคอ', vn: 'khăn quàng cổ', es: 'bufanda',
    pt: 'lenço', id_lang: 'syal', ru: 'шарф', fr: 'foulard', ar: 'وشاح', ja: ''
  },
  '领带': {
    cn: '领带', en: 'tie', th: 'ผูก', vn: 'cà vạt', es: 'atar',
    pt: 'gravata', id_lang: 'mengikat', ru: 'галстук', fr: 'cravate', ar: 'رَابِطَة', ja: ''
  },
  '领带复合面层': {
    cn: '领带复合面层', en: 'Tie composite surface layer', th: 'ชั้นผิวคอมโพสิตที่เชื่อมต่อกัน', vn: 'Lớp bề mặt composite liên kết', es: 'Capa superficial compuesta de unión',
    pt: 'Camada superficial composta de ligação', id_lang: 'Lapisan permukaan komposit pengikat', ru: 'Композитный поверхностный слой', fr: 'Couche de surface composite de liaison', ar: 'طبقة سطحية مركبة رابطة', ja: ''
  },
  '领带复合面层面料': {
    cn: '领带复合面层面料', en: 'Tie composite surface fabric', th: 'ผ้าพื้นผิวคอมโพสิตแบบผูก', vn: 'Vải bề mặt composite buộc', es: 'Tejido de superficie compuesto Tie',
    pt: 'Tecido de superfície composto Tie', id_lang: 'Kain permukaan komposit pengikat', ru: 'Ткань для композитной поверхности скрепления', fr: 'Tissu de surface composite Tie', ar: 'نسيج سطحي مركب من نوع Tie', ja: ''
  },
  '领带面料': {
    cn: '领带面料', en: 'Tie fabric', th: 'ผ้าผูก', vn: 'Vải buộc', es: 'Tela para atar',
    pt: 'Tecido para amarrar', id_lang: 'Kain pengikat', ru: 'Ткань для галстука', fr: 'Tissu à nouer', ar: 'قماش ربطة العنق', ja: ''
  },
  '领底': {
    cn: '领底', en: 'collar bottom', th: 'ปกเสื้อด้านล่าง', vn: 'cổ áo dưới', es: 'parte inferior del cuello',
    pt: 'parte inferior da gola', id_lang: 'bagian bawah kerah', ru: 'нижний воротник', fr: 'bas du col', ar: 'أسفل الياقة', ja: ''
  },
  '领拼': {
    cn: '领拼', en: 'Leading the way', th: 'เป็นผู้นำทาง', vn: 'Dẫn đầu', es: 'Liderando el camino',
    pt: 'Liderando o caminho', id_lang: 'Memimpin jalan', ru: 'Лидерство', fr: 'Ouvrir la voie', ar: 'الريادة', ja: ''
  },
  '领条成分不计': {
    cn: '领条成分不计', en: 'The collar strip component is not counted.', th: 'ส่วนประกอบที่เป็นแถบปกเสื้อจะไม่นับรวม', vn: 'Thành phần dải cổ áo không được tính.', es: 'La tira del cuello no se tiene en cuenta.',
    pt: 'A tira da gola não é contabilizada.', id_lang: 'Komponen strip kerah tidak dihitung.', ru: 'Компонент в виде нашивки на воротнике не учитывается.', fr: 'La partie en forme de bande de col n&#39;est pas prise en compte.', ar: 'لا يتم احتساب شريط الياقة.', ja: ''
  },
  '领结面料': {
    cn: '领结面料', en: 'Bow tie fabric', th: 'ผ้าสำหรับทำโบว์ไท', vn: 'Vải nơ', es: 'Tela para pajarita',
    pt: 'tecido para gravata borboleta', id_lang: 'Kain dasi kupu-kupu', ru: 'ткань для галстука-бабочки', fr: 'Tissu pour nœud papillon', ar: 'قماش ربطة العنق', ja: ''
  },
  '领花边除外': {
    cn: '领花边除外', en: 'Except for the collar trim', th: 'ยกเว้นขอบปกเสื้อ', vn: 'Ngoại trừ phần viền cổ áo.', es: 'Excepto por el ribete del cuello',
    pt: 'Com exceção do acabamento da gola.', id_lang: 'Kecuali hiasan kerah', ru: 'За исключением шнуровки на воротнике.', fr: 'À l&#39;exception de la garniture du col', ar: 'باستثناء حواف الياقة', ja: ''
  },
  '领荷叶边': {
    cn: '领荷叶边', en: 'Ruffled collar', th: 'ปกคอระบาย', vn: 'Cổ áo xếp nếp', es: 'Cuello con volantes',
    pt: 'Gola com babados', id_lang: 'Kerah berenda', ru: 'Воротник с оборками', fr: 'Col à volants', ar: 'ياقة مكشكشة', ja: ''
  },
  '领边梭织面料': {
    cn: '领边梭织面料', en: 'Collar edge woven fabric', th: 'ผ้าทอขอบปกเสื้อ', vn: 'Viền cổ áo bằng vải dệt', es: 'Tejido tejido en el borde del cuello',
    pt: 'Tecido trançado para borda da gola', id_lang: 'Kain tenun tepi kerah', ru: 'Ткань по краю воротника', fr: 'tissu tissé pour bordure de col', ar: 'قماش منسوج بحافة الياقة', ja: ''
  },
  '领里': {
    cn: '领里', en: 'collar', th: 'ปลอกคอ', vn: 'cổ áo', es: 'cuello',
    pt: 'colarinho', id_lang: 'kerah', ru: 'воротник', fr: 'collier', ar: 'طوق', ja: ''
  },
  '领里料': {
    cn: '领里料', en: 'Lining', th: 'ซับใน', vn: 'Niêm mạc', es: 'Recubrimiento',
    pt: 'Resina', id_lang: 'Lapisan', ru: 'Оболочка', fr: 'Garniture', ar: 'بطانة', ja: ''
  },
  '领面': {
    cn: '领面', en: 'Collar', th: 'ปลอกคอ', vn: 'Cổ áo', es: 'Cuello',
    pt: 'Colarinho', id_lang: 'Kerah', ru: 'Воротник', fr: 'Collier', ar: 'طوق', ja: ''
  },
  '领飘带面料': {
    cn: '领飘带面料', en: 'Necklace fabric', th: 'ผ้าสำหรับทำสร้อยคอ', vn: 'Dây chuyền vải', es: 'Tela para collar',
    pt: 'Tecido para colar', id_lang: 'Kain kalung', ru: 'ткань для ожерелья', fr: 'tissu pour collier', ar: 'قماش القلادة', ja: ''
  },
  '颜色': {
    cn: '颜色', en: 'Color', th: 'สี', vn: 'Màu sắc', es: 'Color',
    pt: 'Cor', id_lang: 'Warna', ru: 'Цвет', fr: 'Couleur', ar: 'اللون', ja: ''
  },
  '风感棉': {
    cn: '风感棉', en: 'Wind-feel cotton', th: 'ผ้าฝ้ายสัมผัสลม', vn: 'Vải cotton thoáng gió', es: 'Algodón con sensación de viento',
    pt: 'Algodão com toque de vento', id_lang: 'Katun yang terasa seperti tertiup angin.', ru: 'Хлопок, приятная на ощупь', fr: 'Coton effet vent', ar: 'قطن مقاوم للرياح', ja: ''
  },
  '飘带': {
    cn: '飘带', en: 'ribbon', th: 'ริบบิ้น', vn: 'ruy-băng', es: 'cinta',
    pt: 'fita', id_lang: 'pita', ru: 'лента', fr: 'ruban', ar: 'شريط', ja: ''
  },
  '饰品': {
    cn: '饰品', en: 'accessories', th: 'เครื่องประดับ', vn: 'phụ kiện', es: 'accesorios',
    pt: 'acessórios', id_lang: 'aksesoris', ru: 'аксессуары', fr: 'accessoires', ar: 'مُكَمِّلات', ja: ''
  },
  '饰品不计': {
    cn: '饰品不计', en: 'Jewelry not included', th: 'เครื่องประดับไม่รวมอยู่ในชุด', vn: 'Không bao gồm trang sức.', es: 'Joyas no incluidas',
    pt: 'Joias não incluídas', id_lang: 'Perhiasan tidak termasuk', ru: 'Ювелирные изделия в комплект не входят.', fr: 'Bijoux non inclus', ar: 'المجوهرات غير مشمولة', ja: ''
  },
  '首次洗涤可能掉色': {
    cn: '首次洗涤可能掉色', en: 'Color May Transfer', th: 'สีอาจตก', vn: 'Có thể ra màu', es: 'Puede desteñir en el primer lavado',
    pt: 'Pode desbotar na primeira lavagem', id_lang: 'Mungkin luntur pada pencucian pertama', ru: 'Возможна потеря цвета при первой стирке', fr: 'Peut déteindre au premier lavage', ar: 'قد يبهت اللون عند الغسل الأول', ja: ''
  },
  '香草物语': {
    cn: '香草物语', en: 'Vanilla Story', th: 'วานิลลา สตอรี่', vn: 'Câu chuyện Vanilla', es: 'Historia de vainilla',
    pt: 'História de Baunilha', id_lang: 'Kisah Vanila', ru: 'Ванильная история', fr: 'Histoire de vanille', ar: 'قصة الفانيليا', ja: ''
  },
  '马夹里料': {
    cn: '马夹里料', en: 'Vest Lining', th: 'ซับในเสื้อกั๊ก', vn: 'Lớp lót áo vest', es: 'Forro del chaleco',
    pt: 'Forro do colete', id_lang: 'Lapisan Rompi', ru: 'Подкладка жилета', fr: 'Doublure du gilet', ar: 'بطانة الصدر', ja: ''
  },
  '马夹面料': {
    cn: '马夹面料', en: 'Vest fabric', th: 'ผ้าสำหรับทำเสื้อกั๊ก', vn: 'Vải áo vest', es: 'Tela para chaleco',
    pt: 'Tecido do colete', id_lang: 'Kain rompi', ru: 'Ткань жилета', fr: 'Tissu pour gilet', ar: 'قماش السترة', ja: ''
  },
  '马海毛': {
    cn: '马海毛', en: 'mohair', th: 'ขนแพะ', vn: 'lông dê mohair', es: 'mohair',
    pt: 'mohair', id_lang: 'mohair', ru: 'мохер', fr: 'mohair', ar: 'الموهير', ja: ''
  },
  '马甲面料': {
    cn: '马甲面料', en: 'Vest fabric', th: 'ผ้าสำหรับทำเสื้อกั๊ก', vn: 'Vải áo vest', es: 'Tela para chaleco',
    pt: 'Tecido do colete', id_lang: 'Kain rompi', ru: 'Ткань жилета', fr: 'Tissu pour gilet', ar: 'قماش السترة', ja: ''
  },
  '驼绒': {
    cn: '驼绒', en: 'camel hair', th: 'ขนอูฐ', vn: 'lông lạc đà', es: 'pelo de camello',
    pt: 'pelo de camelo', id_lang: 'bulu unta', ru: 'верблюжья шерсть', fr: 'poils de chameau', ar: 'شعر الجمل', ja: ''
  },
  '驼色': {
    cn: '驼色', en: 'Camel', th: 'อูฐ', vn: 'Con lạc đà', es: 'Camello',
    pt: 'Camelo', id_lang: 'Unta', ru: 'Верблюд', fr: 'Chameau', ar: 'جمل', ja: ''
  },
  '驼色花纹': {
    cn: '驼色花纹', en: 'Camel pattern', th: 'ลายอูฐ', vn: 'Họa tiết lạc đà', es: 'Patrón de camello',
    pt: 'Estampa de camelo', id_lang: 'Pola unta', ru: 'Верблюжий узор', fr: 'Motif chameau', ar: 'نقش الجمل', ja: ''
  },
  '驼色镶拼': {
    cn: '驼色镶拼', en: 'Camel-colored patchwork', th: 'ผ้าปะติดปะต่อสีน้ำตาลอ่อน', vn: 'mảnh vải màu lạc đà', es: 'Mosaico color camello',
    pt: 'patchwork cor de camelo', id_lang: 'Kain tambal sulam berwarna krem', ru: 'Лоскутное одеяло верблюжьего цвета', fr: 'Patchwork couleur camel', ar: 'مرقعة بلون الجمل', ja: ''
  },
  '高弹': {
    cn: '高弹', en: 'High elasticity', th: 'มีความยืดหยุ่นสูง', vn: 'Độ đàn hồi cao', es: 'Alta elasticidad',
    pt: 'Alta elasticidade', id_lang: 'Elastisitas tinggi', ru: 'Высокая эластичность', fr: 'Haute élasticité', ar: 'مرونة عالية', ja: ''
  },
  '高弹方格': {
    cn: '高弹方格', en: 'High-elasticity squares', th: 'สี่เหลี่ยมที่มีความยืดหยุ่นสูง', vn: 'Hình vuông có độ đàn hồi cao', es: 'cuadrados de alta elasticidad',
    pt: 'Quadrados de alta elasticidade', id_lang: 'Kotak elastisitas tinggi', ru: 'Высокоэластичные квадраты', fr: 'Carrés à haute élasticité', ar: 'مربعات عالية المرونة', ja: ''
  },
  '高温烘干': {
    cn: '高温烘干', en: 'Tumble dry high', th: 'อบแห้งด้วยความร้อนสูง', vn: 'Sấy khô ở nhiệt độ cao', es: 'Secar en secadora a alta temperatura',
    pt: 'Secar na máquina a alta temperatura', id_lang: 'Keringkan dengan mesin suhu tinggi', ru: 'Сушить в машине при высокой температуре', fr: 'Séchage en machine à haute température', ar: 'تجفيف آلي بحرارة عالية', ja: ''
  },
  '高温熨烫': {
    cn: '高温熨烫', en: 'Iron high heat', th: 'รีดด้วยความร้อนสูง', vn: 'Ủi nhiệt độ cao', es: 'Planchar a alta temperatura',
    pt: 'Passar a ferro em temperatura alta', id_lang: 'Setrika suhu tinggi', ru: 'Гладить при высокой температуре', fr: 'Repasser à haute température', ar: 'كي بدرجة حرارة عالية', ja: ''
  },
  '高针': {
    cn: '高针', en: 'High needle', th: 'เข็มสูง', vn: 'Kim cao', es: 'Aguja alta',
    pt: 'Agulha alta', id_lang: 'Jarum tinggi', ru: 'Высокая игла', fr: 'Aiguille haute', ar: 'إبرة عالية', ja: ''
  },
  '高针针织': {
    cn: '高针针织', en: 'High-needle knitting', th: 'การถักด้วยเข็มสูง', vn: 'Đan kim cao', es: 'Tejer con agujas altas',
    pt: 'Tricô com agulhas altas', id_lang: 'Rajutan jarum tinggi', ru: 'Вязание с высокими спицами', fr: 'Tricot à aiguilles hautes', ar: 'الحياكة بإبر عالية', ja: ''
  },
  '魔术贴': {
    cn: '魔术贴', en: 'Velcro / Hook & Loop', th: 'ตีนตุ๊กแก', vn: 'Băng gai dính', es: 'Velcro',
    pt: 'Velcro', id_lang: 'Velcro / Perekat', ru: 'Липучка / Велкро', fr: 'Velcro', ar: 'فيلكرو / شريط لاصق', ja: ''
  },
  '鲜红色': {
    cn: '鲜红色', en: 'bright red', th: 'สีแดงสด', vn: 'màu đỏ tươi', es: 'lacre',
    pt: 'vermelho vivo', id_lang: 'merah terang', ru: 'ярко-красный', fr: 'rouge vif', ar: 'أحمر فاقع', ja: ''
  },
  '鸢尾蓝': {
    cn: '鸢尾蓝', en: 'Iris blue', th: 'สีน้ำเงินไอริส', vn: 'màu xanh diên vĩ', es: 'azul iris',
    pt: 'Azul íris', id_lang: 'Biru iris', ru: 'Ирисово-голубой', fr: 'Iris bleu', ar: 'أزرق قزحي', ja: ''
  },
  '鸭绒': {
    cn: '鸭绒', en: 'Duck down', th: 'เป็ดลง', vn: 'Vịt xuống', es: 'Agáchate',
    pt: 'Abaixe-se', id_lang: 'Menunduk', ru: 'Утка вниз', fr: 'Canard vers le bas', ar: 'انبطح', ja: ''
  },
  '鸭青': {
    cn: '鸭青', en: 'Yaqing', th: 'ย่าชิง', vn: 'Á Khánh', es: 'Yaqing',
    pt: 'Yaqing', id_lang: 'Yaqing', ru: 'Яцин', fr: 'Yaqing', ar: 'ياكينغ', ja: ''
  },
  '鸽灰色': {
    cn: '鸽灰色', en: 'dove gray', th: 'สีเทานกพิราบ', vn: 'màu xám bồ câu', es: 'gris paloma',
    pt: 'cinza pomba', id_lang: 'abu-abu merpati', ru: 'голубино-серый', fr: 'gris tourterelle', ar: 'رمادي فاتح', ja: ''
  },
  '鹅绒': {
    cn: '鹅绒', en: 'Goose down', th: 'ขนห่าน', vn: 'Lông ngỗng', es: 'plumón de ganso',
    pt: 'Penugem de ganso', id_lang: 'Bulu angsa', ru: 'Гусиный пух', fr: 'duvet d&#39;oie', ar: 'ريش الإوز', ja: ''
  },
  '鹅黄': {
    cn: '鹅黄', en: 'goose yellow', th: 'ห่านสีเหลือง', vn: 'màu vàng ngỗng', es: 'amarillo ganso',
    pt: 'amarelo ganso', id_lang: 'kuning angsa', ru: 'гусь желтый', fr: 'jaune d&#39;oie', ar: 'أصفر الإوز', ja: ''
  },
  '鹊灰': {
    cn: '鹊灰', en: 'Magpie Gray', th: 'แม็กไพร์เกรย์', vn: 'Xám Magpie', es: 'Gris urraca',
    pt: 'Magpie Gray', id_lang: 'Abu-abu Gagak', ru: 'Сорока Серая', fr: 'Gris pie', ar: 'ماجبي غراي', ja: ''
  },
  '麂皮/翻毛皮': {
    cn: '麂皮/翻毛皮', en: 'Suede', th: 'หนังกลับ', vn: 'Da lộn', es: 'Ante / Gamuza',
    pt: 'Camurça', id_lang: 'Suede / Kulit luku', ru: 'Замша', fr: 'Daim / Suède', ar: 'جلد الغزال / شمواه', ja: ''
  },
  '麂皮绒': {
    cn: '麂皮绒', en: 'Suede', th: 'หนังกลับ', vn: 'Da lộn', es: 'Ante',
    pt: 'Camurça', id_lang: 'Suede', ru: 'Замша', fr: 'Suède', ar: 'جلد سويدي', ja: ''
  },
  '麦芽': {
    cn: '麦芽', en: 'malt', th: 'มอลต์', vn: 'mạch nha', es: 'malta',
    pt: 'malte', id_lang: 'malt', ru: 'солод', fr: 'malt', ar: 'الشعير', ja: ''
  },
  '麻': {
    cn: '麻', en: 'numb', th: 'มึนงง', vn: 'tê', es: 'adormecer',
    pt: 'dormente', id_lang: 'mati rasa', ru: 'онемевший', fr: 'engourdi', ar: 'مُخَدَّر', ja: ''
  },
  '麻灰': {
    cn: '麻灰', en: 'Ash', th: 'เถ้า', vn: 'Tro', es: 'Ceniza',
    pt: 'Cinzas', id_lang: 'Abu', ru: 'Пепел', fr: 'Cendre', ar: 'رماد', ja: ''
  },
  '黄绿': {
    cn: '黄绿', en: 'Yellow-green', th: 'สีเหลืองเขียว', vn: 'Vàng lục', es: 'Amarillo verdoso',
    pt: 'Verde-amarelo', id_lang: 'Hijau kekuningan', ru: 'Желто-зеленый', fr: 'jaune-vert', ar: 'أصفر مخضر', ja: ''
  },
  '黄绿格纹': {
    cn: '黄绿格纹', en: 'Yellow-green plaid', th: 'ลายสก็อตสีเหลืองเขียว', vn: 'kẻ sọc vàng xanh', es: 'Cuadros amarillo verdosos',
    pt: 'xadrez verde-amarelo', id_lang: 'Kotak-kotak kuning kehijauan', ru: 'Желто-зеленая клетка', fr: 'à carreaux jaune-vert', ar: 'كاروهات صفراء مخضرة', ja: ''
  },
  '黄绿色': {
    cn: '黄绿色', en: 'yellow-green', th: 'สีเหลืองเขียว', vn: 'vàng lục', es: 'amarillo verdoso',
    pt: 'verde-amarelo', id_lang: 'hijau kekuningan', ru: 'желто-зеленый', fr: 'jaune-vert', ar: 'أصفر مخضر', ja: ''
  },
  '黄色': {
    cn: '黄色', en: 'yellow', th: 'สีเหลือง', vn: 'màu vàng', es: 'amarillo',
    pt: 'amarelo', id_lang: 'kuning', ru: 'желтый', fr: 'jaune', ar: 'أصفر', ja: ''
  },
  '黄色提花面料': {
    cn: '黄色提花面料', en: 'Yellow jacquard fabric', th: 'ผ้าแจ็กการ์ดสีเหลือง', vn: 'Vải jacquard màu vàng', es: 'Tela jacquard amarilla',
    pt: 'Tecido jacquard amarelo', id_lang: 'Kain jacquard kuning', ru: 'Желтая жаккардовая ткань', fr: 'tissu jacquard jaune', ar: 'قماش جاكار أصفر', ja: ''
  },
  '黄色系': {
    cn: '黄色系', en: 'Yellow series', th: 'ซีรี่ส์สีเหลือง', vn: 'Dòng màu vàng', es: 'Serie amarilla',
    pt: 'Série Amarela', id_lang: 'Seri kuning', ru: 'Желтая серия', fr: 'Série jaune', ar: 'سلسلة صفراء', ja: ''
  },
  '黏胶': {
    cn: '黏胶', en: 'adhesive', th: 'กาว', vn: 'keo dán', es: 'adhesivo',
    pt: 'adesivo', id_lang: 'perekat', ru: 'клей', fr: 'adhésif', ar: 'لاصق', ja: ''
  },
  '黏胶纤维': {
    cn: '黏胶纤维', en: 'viscose fiber', th: 'เส้นใยวิสโคส', vn: 'sợi viscose', es: 'fibra de viscosa',
    pt: 'fibra de viscose', id_lang: 'serat viskosa', ru: 'вискозное волокно', fr: 'fibre de viscose', ar: 'ألياف الفسكوز', ja: ''
  },
  '黑灰': {
    cn: '黑灰', en: 'black and gray', th: 'สีดำและสีเทา', vn: 'đen và xám', es: 'negro y gris',
    pt: 'preto e cinza', id_lang: 'hitam dan abu-abu', ru: 'черный и серый', fr: 'noir et gris', ar: 'أسود ورمادي', ja: ''
  },
  '黑牛仔': {
    cn: '黑牛仔', en: 'Black Cowboy', th: 'คาวบอยดำ', vn: 'Cao bồi da đen', es: 'Vaquero negro',
    pt: 'Cowboy Negro', id_lang: 'Koboi Hitam', ru: 'Черный ковбой', fr: 'Cowboy noir', ar: 'راعي بقر أسود', ja: ''
  },
  '黑牛净色': {
    cn: '黑牛净色', en: 'Black Angus (Plain)', th: 'แบล็กแองกัส (ธรรมดา)', vn: 'Bò Angus đen (loại thường)', es: 'Angus negro (sin tratar)',
    pt: 'Angus preto (simples)', id_lang: 'Black Angus (Biasa)', ru: 'Черный ангус (простой)', fr: 'Black Angus (Plain)', ar: 'بلاك أنجوس (عادي)', ja: ''
  },
  '黑牛过渡色': {
    cn: '黑牛过渡色', en: 'Black Bull Transition Color', th: 'สีเปลี่ยนผ่านของกระทิงดำ', vn: 'Màu chuyển đổi Black Bull', es: 'Color de transición Toro Negro',
    pt: 'Cor de transição Black Bull', id_lang: 'Warna Transisi Banteng Hitam', ru: 'Переходный цвет «Черный бык»', fr: 'Couleur de transition Black Bull', ar: 'لون انتقال الثور الأسود', ja: ''
  },
  '黑白提花面料': {
    cn: '黑白提花面料', en: 'Black and white jacquard fabric', th: 'ผ้าแจ็กการ์ดสีดำและขาว', vn: 'Vải jacquard đen trắng', es: 'Tejido jacquard blanco y negro',
    pt: 'Tecido jacquard preto e branco', id_lang: 'Kain jacquard hitam dan putih', ru: 'Черно-белая жаккардовая ткань', fr: 'tissu jacquard noir et blanc', ar: 'قماش جاكار أبيض وأسود', ja: ''
  },
  '黑白条': {
    cn: '黑白条', en: 'Black and white stripes', th: 'ลายทางสีดำและสีขาว', vn: 'Sọc đen trắng', es: 'rayas blancas y negras',
    pt: 'Listras pretas e brancas', id_lang: 'Garis-garis hitam dan putih', ru: 'Черно-белые полосы', fr: 'Rayures noires et blanches', ar: 'خطوط سوداء وبيضاء', ja: ''
  },
  '黑白条纹面料': {
    cn: '黑白条纹面料', en: 'Black and white striped fabric', th: 'ผ้าลายทางขาวดำ', vn: 'Vải sọc đen trắng', es: 'Tela a rayas blancas y negras',
    pt: 'Tecido listrado em preto e branco', id_lang: 'Kain bergaris hitam dan putih', ru: 'Ткань в черно-белую полоску', fr: 'tissu à rayures noires et blanches', ar: 'قماش مخطط باللونين الأسود والأبيض', ja: ''
  },
  '黑白条罗纹': {
    cn: '黑白条罗纹', en: 'Black and white striped ribbed', th: 'ลายริ้วขาวดำ', vn: 'Sọc đen trắng có gân', es: 'Acanalado a rayas blancas y negras',
    pt: 'canelado listrado em preto e branco', id_lang: 'Bergaris hitam dan putih', ru: 'черно-белая полосатая ребристая', fr: 'côtelé à rayures noires et blanches', ar: 'مخطط باللونين الأسود والأبيض', ja: ''
  },
  '黑白条面料': {
    cn: '黑白条面料', en: 'Black and white striped fabric', th: 'ผ้าลายทางขาวดำ', vn: 'Vải sọc đen trắng', es: 'Tela a rayas blancas y negras',
    pt: 'Tecido listrado em preto e branco', id_lang: 'Kain bergaris hitam dan putih', ru: 'Ткань в черно-белую полоску', fr: 'tissu à rayures noires et blanches', ar: 'قماش مخطط باللونين الأسود والأبيض', ja: ''
  },
  '黑白格面料': {
    cn: '黑白格面料', en: 'Black and white checkered fabric', th: 'ผ้าลายตารางหมากรุกสีดำและขาว', vn: 'Vải kẻ caro đen trắng', es: 'Tela a cuadros blancos y negros',
    pt: 'Tecido xadrez preto e branco', id_lang: 'Kain kotak-kotak hitam dan putih', ru: 'Черно-белая клетчатая ткань', fr: 'tissu à carreaux noirs et blancs', ar: 'قماش مربعات باللونين الأسود والأبيض', ja: ''
  },
  '黑白波点': {
    cn: '黑白波点', en: 'Black and white polka dots', th: 'ลายจุดขาวดำ', vn: 'Chấm bi đen trắng', es: 'Lunares blancos y negros',
    pt: 'bolinhas pretas e brancas', id_lang: 'Bintik-bintik hitam dan putih', ru: 'Черно-белые точки', fr: 'Pois noirs et blancs', ar: 'نقاط سوداء وبيضاء', ja: ''
  },
  '黑白混色': {
    cn: '黑白混色', en: 'Black and white mixed colors', th: 'สีดำและสีขาวผสมกัน', vn: 'Màu đen và trắng pha trộn', es: 'Colores mezclados en blanco y negro',
    pt: 'Cores misturadas em preto e branco', id_lang: 'Warna campuran hitam dan putih', ru: 'Черно-белые смешанные цвета', fr: 'Couleurs mélangées noires et blanches', ar: 'ألوان مختلطة بالأبيض والأسود', ja: ''
  },
  '黑白色': {
    cn: '黑白色', en: 'Black and white', th: 'ขาวดำ', vn: 'Đen trắng', es: 'En blanco y negro',
    pt: 'Preto e branco', id_lang: 'Hitam dan putih', ru: 'Черно-белый', fr: 'Noir et blanc', ar: 'أبيض وأسود', ja: ''
  },
  '黑白面料': {
    cn: '黑白面料', en: 'Black and white fabric', th: 'ผ้าสีดำและสีขาว', vn: 'Vải đen trắng', es: 'Tela blanca y negra',
    pt: 'Tecido preto e branco', id_lang: 'Kain hitam dan putih', ru: 'Черно-белая ткань', fr: 'Tissu noir et blanc', ar: 'قماش أبيض وأسود', ja: ''
  },
  '黑色': {
    cn: '黑色', en: 'black', th: 'สีดำ', vn: 'đen', es: 'negro',
    pt: 'preto', id_lang: 'hitam', ru: 'черный', fr: 'noir', ar: 'أسود', ja: ''
  },
  '黑色净色': {
    cn: '黑色净色', en: 'Solid black', th: 'สีดำล้วน', vn: 'Màu đen tuyền', es: 'Negro sólido',
    pt: 'Preto sólido', id_lang: 'Hitam pekat', ru: 'Насыщенный черный', fr: 'Noir uni', ar: 'أسود داكن', ja: ''
  },
  '黑色压花': {
    cn: '黑色压花', en: 'Black embossed', th: 'นูนสีดำ', vn: 'Màu đen dập nổi', es: 'Negro repujado',
    pt: 'Preto em relevo', id_lang: 'Hitam timbul', ru: 'Черный рельефный', fr: 'Noir en relief', ar: 'أسود منقوش', ja: ''
  },
  '黑色斜纹': {
    cn: '黑色斜纹', en: 'Black twill', th: 'ผ้าทวิลล์สีดำ', vn: 'Vải chéo màu đen', es: 'Sarga negra',
    pt: 'Sarja preta', id_lang: 'Kain kepar hitam', ru: 'Черная саржа', fr: 'Sergé noir', ar: 'قماش قطني أسود', ja: ''
  },
  '黑色条纹': {
    cn: '黑色条纹', en: 'Black stripes', th: 'ลายทางสีดำ', vn: 'Sọc đen', es: 'rayas negras',
    pt: 'Listras pretas', id_lang: 'Garis-garis hitam', ru: 'Черные полосы', fr: 'Rayures noires', ar: 'السود', ja: ''
  },
  '黑色格纹': {
    cn: '黑色格纹', en: 'Black plaid', th: 'ลายตารางหมากรุกสีดำ', vn: 'kẻ sọc đen', es: 'Cuadros negros',
    pt: 'xadrez preto', id_lang: 'Kotak-kotak hitam', ru: 'Черная клетка', fr: 'Carreaux noirs', ar: 'كاروهات سوداء', ja: ''
  },
  '黑色渐变': {
    cn: '黑色渐变', en: 'Black gradient', th: 'การไล่ระดับสีดำ', vn: 'Màu chuyển sắc đen', es: 'Degradado negro',
    pt: 'Gradiente preto', id_lang: 'Gradien hitam', ru: 'Черный градиент', fr: 'Dégradé noir', ar: 'تدرج أسود', ja: ''
  },
  '黑色牛仔布': {
    cn: '黑色牛仔布', en: 'Black denim', th: 'กางเกงยีนส์สีดำ', vn: 'Quần jean đen', es: 'Vaqueros negros',
    pt: 'jeans preto', id_lang: 'Denim hitam', ru: 'Черные джинсы', fr: 'denim noir', ar: 'جينز أسود', ja: ''
  },
  '黑色系': {
    cn: '黑色系', en: 'Black', th: 'สีดำ', vn: 'Đen', es: 'Negro',
    pt: 'Preto', id_lang: 'Hitam', ru: 'Черный', fr: 'Noir', ar: 'أسود', ja: ''
  },
  '黑色纱': {
    cn: '黑色纱', en: 'Black gauze', th: 'ผ้าก๊อซสีดำ', vn: 'Vải gạc đen', es: 'Gasa negra',
    pt: 'gaze preta', id_lang: 'Kain kasa hitam', ru: 'Черная марля', fr: 'gaze noire', ar: 'شاش أسود', ja: ''
  },
  '黑色股纱': {
    cn: '黑色股纱', en: 'Black yarn', th: 'เส้นด้ายสีดำ', vn: 'Sợi đen', es: 'Hilo negro',
    pt: 'Fio preto', id_lang: 'Benang hitam', ru: 'Черная пряжа', fr: 'Fil noir', ar: 'خيوط سوداء', ja: ''
  },
  '黑色花纹': {
    cn: '黑色花纹', en: 'Black pattern', th: 'ลวดลายสีดำ', vn: 'Họa tiết đen', es: 'Patrón negro',
    pt: 'Padrão preto', id_lang: 'Pola hitam', ru: 'Черный узор', fr: 'Motif noir', ar: 'نمط أسود', ja: ''
  },
  '黑色镶拼': {
    cn: '黑色镶拼', en: 'Black trim', th: 'ขอบสีดำ', vn: 'Viền đen', es: 'Ribete negro',
    pt: 'Detalhes em preto', id_lang: 'Lis hitam', ru: 'Черная отделка', fr: 'Garniture noire', ar: 'حواف سوداء', ja: ''
  },
  '黑色长丝': {
    cn: '黑色长丝', en: 'Black long silk', th: 'ผ้าไหมสีดำยาว', vn: 'lụa dài màu đen', es: 'Seda larga negra',
    pt: 'seda longa preta', id_lang: 'sutra panjang hitam', ru: 'Черный длинный шелк', fr: 'soie longue noire', ar: 'حرير أسود طويل', ja: ''
  },
  '黑色面料': {
    cn: '黑色面料', en: 'Black fabric', th: 'ผ้าสีดำ', vn: 'Vải đen', es: 'Tela negra',
    pt: 'Tecido preto', id_lang: 'Kain hitam', ru: 'Черная ткань', fr: 'Tissu noir', ar: 'قماش أسود', ja: ''
  },
  '黑藏青': {
    cn: '黑藏青', en: 'Black Navy', th: 'กรมทหารเรือดำ', vn: 'Đen Hải quân', es: 'Azul marino negro',
    pt: 'Azul Marinho Preto', id_lang: 'Hitam Biru Tua', ru: 'Черный темно-синий', fr: 'Marine noire', ar: 'بلاك نيفي', ja: ''
  },
  '黛绿色': {
    cn: '黛绿色', en: 'dark green', th: 'สีเขียวเข้ม', vn: 'màu xanh đậm', es: 'verde oscuro',
    pt: 'verde escuro', id_lang: 'hijau tua', ru: 'темно-зеленый', fr: 'vert foncé', ar: 'أخضر داكن', ja: ''
  },
  '黛蓝色': {
    cn: '黛蓝色', en: 'dark blue', th: 'สีน้ำเงินเข้ม', vn: 'màu xanh đậm', es: 'azul oscuro',
    pt: 'azul escuro', id_lang: 'biru tua', ru: 'темно-синий', fr: 'bleu foncé', ar: 'أزرق داكن', ja: ''
  },
  '龟背': {
    cn: '龟背', en: 'turtle shell', th: 'กระดองเต่า', vn: 'mai rùa', es: 'caparazón de tortuga',
    pt: 'casco de tartaruga', id_lang: 'cangkang kura-kura', ru: 'панцирь черепахи', fr: 'carapace de tortue', ar: 'صدفة سلحفاة', ja: ''
  },
  '（非纤维物质除外）': {
    cn: '（非纤维物质除外）', en: '(Except For The Non-Fibrous Substances)', th: '(ยกเว้นสารที่ไม่ใช่เส้นใย)', vn: '(Ngoại Trừ Chất Không Có Xơ)', es: '(Con Excepción De Las Sustancias No Fibrosas)',
    pt: '(Exceto As Substâncias Não Fibrosas)', id_lang: '(Kecuali Untuk Bahan Yang Tidak Berserat)', ru: '(За Исключением Неволокнистых Материалов)', fr: '(Sauf Pour Les Matières Non Fibreuses)', ar: '(بدون مواد غير ليفية)', ja: '（非繊維物質を除く）'
  },
  '（非织造物除外）': {
    cn: '（非织造物除外）', en: '(Except Non-Woven Fabrics)', th: '(ยกเว้นผ้าส่วนที่ไม่ถักทอ)', vn: '(Trừ Vải Không Dệt)', es: '(Con Excepción De Las Telas No Tejidas)',
    pt: '(Exceto Tecidos Não Entrelaçados)', id_lang: '(Kecuali Kain Bukan Tenunan)', ru: '(Кроме Нетканых Материалов)', fr: '(Sauf Tissus Non Tissés)', ar: '(باستثناء الأقمشة غير المنسوجة)', ja: '（不織布を除く）'
  },
};

const LOCAL_STORAGE_CUSTOM_KEY = 'OMNIX_CUSTOM_DICTIONARY';

export class DictionaryService {
  /**
   * 获取系统内置词库
   */
  static getSystemDictionary(): Record<string, TranslationRow> {
    return DEFAULT_DICTIONARY;
  }

  /**
   * 获取用户自定义/修改的词库
   */
  static getCustomDictionary(): Record<string, TranslationRow> {
    const stored = localStorage.getItem(LOCAL_STORAGE_CUSTOM_KEY);
    if (!stored) return {};
    try {
      return JSON.parse(stored);
    } catch {
      return {};
    }
  }

  /**
   * 保存自定义词库
   */
  static saveCustomDictionary(dict: Record<string, TranslationRow>): void {
    localStorage.setItem(LOCAL_STORAGE_CUSTOM_KEY, JSON.stringify(dict));
  }

  /**
   * 获取合并后的完整词库 (自定义词库优先级高于内置词库)
   */
  static getDictionary(): Record<string, TranslationRow> {
    return {
      ...DEFAULT_DICTIONARY,
      ...this.getCustomDictionary()
    };
  }

  /**
   * 增加或修改单个词条 (写入自定义词库，不污染系统内置词库)
   */
  static addOrUpdateTerm(cnKey: string, translations: Partial<TranslationRow>): void {
    const customDict = this.getCustomDictionary();
    const cleanKey = cnKey.trim();
    if (!cleanKey) return;

    // 先查找自定义中是否存在，再查找内置，若都无则初始化空白
    const existing: TranslationRow = customDict[cleanKey] || DEFAULT_DICTIONARY[cleanKey] || {
      cn: cleanKey,
      en: '', th: '', vn: '', es: '', pt: '',
      id_lang: '', ru: '', fr: '', ar: '', ja: ''
    };

    const updated: TranslationRow = {
      ...existing,
      ...translations,
      cn: cleanKey
    };

    customDict[cleanKey] = updated;
    this.saveCustomDictionary(customDict);
  }

  /**
   * 删除单个词条
   * 如果是系统内置词条的覆盖，则恢复为内置默认翻译；若是纯自定义词条，则彻底删除。
   */
  static deleteTerm(cnKey: string): void {
    const customDict = this.getCustomDictionary();
    const cleanKey = cnKey.trim();
    if (customDict[cleanKey] !== undefined) {
      delete customDict[cleanKey];
      this.saveCustomDictionary(customDict);
    }
  }

  /**
   * 精确查找对照翻译
   */
  static lookup(cnText: string): TranslationRow | null {
    const dict = this.getDictionary();
    const cleanText = cnText.trim();
    return dict[cleanText] || null;
  }

  /**
   * 重置词库：清空所有用户自定义词条，恢复到出厂标准状态
   */
  static resetToDefault(): Record<string, TranslationRow> {
    localStorage.removeItem(LOCAL_STORAGE_CUSTOM_KEY);
    return DEFAULT_DICTIONARY;
  }

  /**
   * 判断是否为系统内置词条
   */
  static isSystemTerm(key: string): boolean {
    return DEFAULT_DICTIONARY[key] !== undefined;
  }

  /**
   * 判断是否为纯用户新增词条
   */
  static isCustomTerm(key: string): boolean {
    const customDict = this.getCustomDictionary();
    return customDict[key] !== undefined && DEFAULT_DICTIONARY[key] === undefined;
  }

  /**
   * 判断是否为被修改/覆盖的系统词条
   */
  static isModifiedTerm(key: string): boolean {
    const customDict = this.getCustomDictionary();
    return customDict[key] !== undefined && DEFAULT_DICTIONARY[key] !== undefined;
  }
}
