export type StatusKey =
  | 'starting'
  | 'checking'
  | 'backingUp'
  | 'services'
  | 'welcome'
  | 'closing'
  | 'shutdownBackup'
  | 'saved';

export type StatusMessage = readonly [title: string, detail: string];
type StatusTable = Record<StatusKey, StatusMessage>;

const en: StatusTable = {
  starting: ['Starting SENOVA POS', 'Getting everything ready…'],
  checking: ['Checking your data', 'Verifying the database and keeping it healthy…'],
  backingUp: ['Backing up your data', 'Saving a safe copy before you start…'],
  services: ['Starting services', 'Almost there…'],
  welcome: ['Welcome to SENOVA POS', 'Opening your workspace…'],
  closing: ['Closing SENOVA POS', 'Saving your data. Please do not turn off the computer.'],
  shutdownBackup: ['Taking a backup', 'Please do not turn off the computer.'],
  saved: ['All saved', 'SENOVA POS will close in a moment.'],
};

const TABLES: Record<string, StatusTable> = {
  en,
  es: {
    starting: ['Iniciando SENOVA POS', 'Preparando todo…'],
    checking: ['Comprobando tus datos', 'Verificando la base de datos y manteniéndola sana…'],
    backingUp: ['Haciendo copia de seguridad', 'Guardando una copia segura antes de empezar…'],
    services: ['Iniciando servicios', 'Casi listo…'],
    welcome: ['Bienvenido a SENOVA POS', 'Abriendo tu espacio de trabajo…'],
    closing: ['Cerrando SENOVA POS', 'Guardando tus datos. No apagues el equipo.'],
    shutdownBackup: ['Haciendo copia de seguridad', 'No apagues el equipo.'],
    saved: ['Todo guardado', 'SENOVA POS se cerrará en un momento.'],
  },
  de: {
    starting: ['SENOVA POS wird gestartet', 'Alles wird vorbereitet…'],
    checking: ['Daten werden geprüft', 'Datenbank wird überprüft und in Ordnung gehalten…'],
    backingUp: ['Datensicherung läuft', 'Vor dem Start wird eine sichere Kopie gespeichert…'],
    services: ['Dienste werden gestartet', 'Gleich geschafft…'],
    welcome: ['Willkommen bei SENOVA POS', 'Ihr Arbeitsbereich wird geöffnet…'],
    closing: [
      'SENOVA POS wird beendet',
      'Ihre Daten werden gespeichert. Bitte den Computer nicht ausschalten.',
    ],
    shutdownBackup: ['Datensicherung läuft', 'Bitte den Computer nicht ausschalten.'],
    saved: ['Alles gespeichert', 'SENOVA POS schließt sich gleich.'],
  },
  tr: {
    starting: ['SENOVA POS başlatılıyor', 'Her şey hazırlanıyor…'],
    checking: ['Verileriniz kontrol ediliyor', 'Veritabanı doğrulanıyor ve sağlıklı tutuluyor…'],
    backingUp: ['Verileriniz yedekleniyor', 'Başlamadan önce güvenli bir kopya kaydediliyor…'],
    services: ['Hizmetler başlatılıyor', 'Neredeyse bitti…'],
    welcome: ["SENOVA POS'ya hoş geldiniz", 'Çalışma alanınız açılıyor…'],
    closing: ['SENOVA POS kapatılıyor', 'Verileriniz kaydediliyor. Lütfen bilgisayarı kapatmayın.'],
    shutdownBackup: ['Yedek alınıyor', 'Lütfen bilgisayarı kapatmayın.'],
    saved: ['Her şey kaydedildi', 'SENOVA POS birazdan kapanacak.'],
  },
  th: {
    starting: ['กำลังเริ่ม SENOVA POS', 'กำลังเตรียมทุกอย่าง…'],
    checking: ['กำลังตรวจสอบข้อมูลของคุณ', 'กำลังตรวจสอบฐานข้อมูลและดูแลให้อยู่ในสภาพดี…'],
    backingUp: ['กำลังสำรองข้อมูล', 'กำลังบันทึกสำเนาที่ปลอดภัยก่อนเริ่มใช้งาน…'],
    services: ['กำลังเริ่มบริการ', 'เกือบเสร็จแล้ว…'],
    welcome: ['ยินดีต้อนรับสู่ SENOVA POS', 'กำลังเปิดพื้นที่ทำงานของคุณ…'],
    closing: ['กำลังปิด SENOVA POS', 'กำลังบันทึกข้อมูลของคุณ กรุณาอย่าปิดคอมพิวเตอร์'],
    shutdownBackup: ['กำลังสำรองข้อมูล', 'กรุณาอย่าปิดคอมพิวเตอร์'],
    saved: ['บันทึกทั้งหมดแล้ว', 'SENOVA POS จะปิดในอีกสักครู่'],
  },
  fil: {
    starting: ['Sinisimulan ang SENOVA POS', 'Inihahanda ang lahat…'],
    checking: ['Sinusuri ang iyong data', 'Bine-verify ang database at pinapanatiling maayos…'],
    backingUp: ['Bina-backup ang iyong data', 'Nagse-save ng ligtas na kopya bago magsimula…'],
    services: ['Sinisimulan ang mga serbisyo', 'Malapit na…'],
    welcome: ['Maligayang pagdating sa SENOVA POS', 'Binubuksan ang iyong workspace…'],
    closing: ['Isinasara ang SENOVA POS', 'Sine-save ang iyong data. Huwag patayin ang computer.'],
    shutdownBackup: ['Gumagawa ng backup', 'Huwag patayin ang computer.'],
    saved: ['Na-save na ang lahat', 'Magsasara ang SENOVA POS sandali lang.'],
  },
  fr: {
    starting: ['Démarrage de SENOVA POS', 'Préparation de tout…'],
    checking: [
      'Vérification de vos données',
      'Contrôle de la base de données et maintien en bon état…',
    ],
    backingUp: ['Sauvegarde de vos données', 'Enregistrement d’une copie sûre avant de commencer…'],
    services: ['Démarrage des services', 'Presque terminé…'],
    welcome: ['Bienvenue dans SENOVA POS', 'Ouverture de votre espace de travail…'],
    closing: [
      'Fermeture de SENOVA POS',
      'Enregistrement de vos données. N’éteignez pas l’ordinateur.',
    ],
    shutdownBackup: ['Sauvegarde en cours', 'N’éteignez pas l’ordinateur.'],
    saved: ['Tout est enregistré', 'SENOVA POS va se fermer dans un instant.'],
  },
  it: {
    starting: ['Avvio di SENOVA POS', 'Preparazione di tutto…'],
    checking: ['Controllo dei tuoi dati', 'Verifica del database e mantenimento in buona salute…'],
    backingUp: ['Backup dei tuoi dati', 'Salvataggio di una copia sicura prima di iniziare…'],
    services: ['Avvio dei servizi', 'Quasi fatto…'],
    welcome: ['Benvenuto in SENOVA POS', 'Apertura del tuo spazio di lavoro…'],
    closing: ['Chiusura di SENOVA POS', 'Salvataggio dei dati. Non spegnere il computer.'],
    shutdownBackup: ['Backup in corso', 'Non spegnere il computer.'],
    saved: ['Tutto salvato', 'SENOVA POS si chiuderà tra un istante.'],
  },
  pt: {
    starting: ['Iniciando o SENOVA POS', 'Preparando tudo…'],
    checking: ['Verificando seus dados', 'Conferindo o banco de dados e mantendo-o saudável…'],
    backingUp: ['Fazendo backup dos seus dados', 'Salvando uma cópia segura antes de começar…'],
    services: ['Iniciando serviços', 'Quase lá…'],
    welcome: ['Bem-vindo ao SENOVA POS', 'Abrindo seu espaço de trabalho…'],
    closing: ['Fechando o SENOVA POS', 'Salvando seus dados. Não desligue o computador.'],
    shutdownBackup: ['Fazendo backup', 'Não desligue o computador.'],
    saved: ['Tudo salvo', 'O SENOVA POS será fechado em instantes.'],
  },
  ru: {
    starting: ['Запуск SENOVA POS', 'Подготовка…'],
    checking: ['Проверка данных', 'Проверяем базу данных и поддерживаем её в порядке…'],
    backingUp: ['Резервное копирование', 'Сохраняем надёжную копию перед началом работы…'],
    services: ['Запуск служб', 'Почти готово…'],
    welcome: ['Добро пожаловать в SENOVA POS', 'Открываем рабочее пространство…'],
    closing: ['Закрытие SENOVA POS', 'Сохраняем ваши данные. Не выключайте компьютер.'],
    shutdownBackup: ['Создание резервной копии', 'Не выключайте компьютер.'],
    saved: ['Всё сохранено', 'SENOVA POS закроется через мгновение.'],
  },
  fa: {
    starting: ['در حال راه‌اندازی SENOVA POS', 'در حال آماده‌سازی همه‌چیز…'],
    checking: ['در حال بررسی داده‌های شما', 'در حال بررسی پایگاه داده و حفظ سلامت آن…'],
    backingUp: ['در حال پشتیبان‌گیری', 'ذخیره یک نسخه امن پیش از شروع…'],
    services: ['در حال راه‌اندازی سرویس‌ها', 'تقریباً تمام شد…'],
    welcome: ['به SENOVA POS خوش آمدید', 'در حال باز کردن فضای کار شما…'],
    closing: ['در حال بستن SENOVA POS', 'در حال ذخیره داده‌های شما. لطفاً رایانه را خاموش نکنید.'],
    shutdownBackup: ['در حال پشتیبان‌گیری', 'لطفاً رایانه را خاموش نکنید.'],
    saved: ['همه‌چیز ذخیره شد', 'SENOVA POS تا لحظه‌ای دیگر بسته می‌شود.'],
  },
  ar: {
    starting: ['جارٍ تشغيل SENOVA POS', 'جارٍ تجهيز كل شيء…'],
    checking: ['جارٍ فحص بياناتك', 'جارٍ التحقق من قاعدة البيانات والحفاظ على سلامتها…'],
    backingUp: ['جارٍ النسخ الاحتياطي لبياناتك', 'جارٍ حفظ نسخة آمنة قبل البدء…'],
    services: ['جارٍ تشغيل الخدمات', 'اقتربنا من الانتهاء…'],
    welcome: ['مرحباً بك في SENOVA POS', 'جارٍ فتح مساحة عملك…'],
    closing: ['جارٍ إغلاق SENOVA POS', 'جارٍ حفظ بياناتك. يرجى عدم إيقاف تشغيل الكمبيوتر.'],
    shutdownBackup: ['جارٍ إنشاء نسخة احتياطية', 'يرجى عدم إيقاف تشغيل الكمبيوتر.'],
    saved: ['تم حفظ كل شيء', 'سيُغلق SENOVA POS بعد لحظات.'],
  },
  ur: {
    starting: ['SENOVA POS شروع ہو رہا ہے', 'سب کچھ تیار کیا جا رہا ہے…'],
    checking: ['آپ کا ڈیٹا چیک کیا جا رہا ہے', 'ڈیٹا بیس کی جانچ اور اسے درست رکھا جا رہا ہے…'],
    backingUp: [
      'آپ کے ڈیٹا کا بیک اپ لیا جا رہا ہے',
      'شروع کرنے سے پہلے محفوظ کاپی رکھی جا رہی ہے…',
    ],
    services: ['سروسز شروع ہو رہی ہیں', 'تقریباً مکمل…'],
    welcome: ['SENOVA POS میں خوش آمدید', 'آپ کا ورک اسپیس کھولا جا رہا ہے…'],
    closing: [
      'SENOVA POS بند ہو رہا ہے',
      'آپ کا ڈیٹا محفوظ کیا جا رہا ہے۔ براہ کرم کمپیوٹر بند نہ کریں۔',
    ],
    shutdownBackup: ['بیک اپ لیا جا رہا ہے', 'براہ کرم کمپیوٹر بند نہ کریں۔'],
    saved: ['سب کچھ محفوظ ہو گیا', 'SENOVA POS ابھی بند ہو جائے گا۔'],
  },
  ja: {
    starting: ['SENOVA POS を起動しています', 'すべて準備しています…'],
    checking: ['データを確認しています', 'データベースを検証し、正常な状態を保っています…'],
    backingUp: ['データをバックアップしています', '開始前に安全なコピーを保存しています…'],
    services: ['サービスを開始しています', 'もうすぐ完了します…'],
    welcome: ['SENOVA POS へようこそ', 'ワークスペースを開いています…'],
    closing: [
      'SENOVA POS を終了しています',
      'データを保存しています。コンピューターの電源を切らないでください。',
    ],
    shutdownBackup: ['バックアップ中', 'コンピューターの電源を切らないでください。'],
    saved: ['すべて保存しました', 'まもなく SENOVA POS を終了します。'],
  },
  zh: {
    starting: ['正在启动 SENOVA POS', '正在准备一切…'],
    checking: ['正在检查您的数据', '正在验证数据库并保持其健康…'],
    backingUp: ['正在备份您的数据', '开始前先保存一份安全副本…'],
    services: ['正在启动服务', '马上就好…'],
    welcome: ['欢迎使用 SENOVA POS', '正在打开您的工作区…'],
    closing: ['正在关闭 SENOVA POS', '正在保存您的数据。请勿关闭电脑。'],
    shutdownBackup: ['正在备份', '请勿关闭电脑。'],
    saved: ['全部已保存', 'SENOVA POS 即将关闭。'],
  },
  'zh-tw': {
    starting: ['正在啟動 SENOVA POS', '正在準備一切…'],
    checking: ['正在檢查您的資料', '正在驗證資料庫並維持其健康…'],
    backingUp: ['正在備份您的資料', '開始前先儲存一份安全副本…'],
    services: ['正在啟動服務', '即將完成…'],
    welcome: ['歡迎使用 SENOVA POS', '正在開啟您的工作區…'],
    closing: ['正在關閉 SENOVA POS', '正在儲存您的資料。請勿關閉電腦。'],
    shutdownBackup: ['正在備份', '請勿關閉電腦。'],
    saved: ['全部已儲存', 'SENOVA POS 即將關閉。'],
  },
  ko: {
    starting: ['SENOVA POS 시작 중', '모든 것을 준비하고 있습니다…'],
    checking: ['데이터 확인 중', '데이터베이스를 검증하고 정상 상태로 유지하고 있습니다…'],
    backingUp: ['데이터 백업 중', '시작하기 전에 안전한 사본을 저장하고 있습니다…'],
    services: ['서비스 시작 중', '거의 다 됐습니다…'],
    welcome: ['SENOVA POS에 오신 것을 환영합니다', '작업 공간을 여는 중…'],
    closing: ['SENOVA POS 종료 중', '데이터를 저장하고 있습니다. 컴퓨터를 끄지 마세요.'],
    shutdownBackup: ['백업 중', '컴퓨터를 끄지 마세요.'],
    saved: ['모두 저장되었습니다', '잠시 후 SENOVA POS가 종료됩니다.'],
  },
  id: {
    starting: ['Memulai SENOVA POS', 'Menyiapkan semuanya…'],
    checking: ['Memeriksa data Anda', 'Memverifikasi basis data dan menjaganya tetap sehat…'],
    backingUp: ['Mencadangkan data Anda', 'Menyimpan salinan aman sebelum Anda mulai…'],
    services: ['Memulai layanan', 'Hampir selesai…'],
    welcome: ['Selamat datang di SENOVA POS', 'Membuka ruang kerja Anda…'],
    closing: ['Menutup SENOVA POS', 'Menyimpan data Anda. Jangan matikan komputer.'],
    shutdownBackup: ['Membuat cadangan', 'Jangan matikan komputer.'],
    saved: ['Semua tersimpan', 'SENOVA POS akan segera menutup.'],
  },
  nl: {
    starting: ['SENOVA POS wordt gestart', 'Alles wordt klaargemaakt…'],
    checking: [
      'Je gegevens worden gecontroleerd',
      'De database wordt gecontroleerd en gezond gehouden…',
    ],
    backingUp: ['Back-up van je gegevens', 'Een veilige kopie wordt opgeslagen voordat je begint…'],
    services: ['Services worden gestart', 'Bijna klaar…'],
    welcome: ['Welkom bij SENOVA POS', 'Je werkruimte wordt geopend…'],
    closing: [
      'SENOVA POS wordt afgesloten',
      'Je gegevens worden opgeslagen. Zet de computer niet uit.',
    ],
    shutdownBackup: ['Back-up maken', 'Zet de computer niet uit.'],
    saved: ['Alles opgeslagen', 'SENOVA POS sluit zo af.'],
  },
  hi: {
    starting: ['SENOVA POS शुरू हो रहा है', 'सब कुछ तैयार किया जा रहा है…'],
    checking: ['आपका डेटा जाँचा जा रहा है', 'डेटाबेस की जाँच और उसे स्वस्थ रखा जा रहा है…'],
    backingUp: ['आपके डेटा का बैकअप लिया जा रहा है', 'शुरू करने से पहले एक सुरक्षित प्रति सहेजी जा रही है…'],
    services: ['सेवाएँ शुरू हो रही हैं', 'लगभग तैयार…'],
    welcome: ['SENOVA POS में आपका स्वागत है', 'आपका कार्यक्षेत्र खुल रहा है…'],
    closing: ['SENOVA POS बंद हो रहा है', 'आपका डेटा सहेजा जा रहा है। कृपया कंप्यूटर बंद न करें।'],
    shutdownBackup: ['बैकअप लिया जा रहा है', 'कृपया कंप्यूटर बंद न करें।'],
    saved: ['सब कुछ सहेज लिया गया', 'SENOVA POS कुछ ही क्षणों में बंद हो जाएगा।'],
  },
  bn: {
    starting: ['SENOVA POS শুরু হচ্ছে', 'সবকিছু প্রস্তুত করা হচ্ছে…'],
    checking: ['আপনার ডেটা পরীক্ষা করা হচ্ছে', 'ডেটাবেস যাচাই করে সুস্থ রাখা হচ্ছে…'],
    backingUp: ['আপনার ডেটার ব্যাকআপ নেওয়া হচ্ছে', 'শুরুর আগে একটি নিরাপদ কপি সংরক্ষণ করা হচ্ছে…'],
    services: ['সেবাগুলো চালু হচ্ছে', 'প্রায় শেষ…'],
    welcome: ['SENOVA POS-তে স্বাগতম', 'আপনার ওয়ার্কস্পেস খোলা হচ্ছে…'],
    closing: ['SENOVA POS বন্ধ হচ্ছে', 'আপনার ডেটা সংরক্ষণ করা হচ্ছে। দয়া করে কম্পিউটার বন্ধ করবেন না।'],
    shutdownBackup: ['ব্যাকআপ নেওয়া হচ্ছে', 'দয়া করে কম্পিউটার বন্ধ করবেন না।'],
    saved: ['সবকিছু সংরক্ষিত হয়েছে', 'SENOVA POS কিছুক্ষণের মধ্যে বন্ধ হবে।'],
  },
  sq: {
    starting: ['SENOVA POS po niset', 'Po përgatitet gjithçka…'],
    checking: [
      'Po kontrollohen të dhënat tuaja',
      'Po verifikohet baza e të dhënave dhe po mbahet në gjendje të mirë…',
    ],
    backingUp: ['Po bëhet kopja rezervë', 'Po ruhet një kopje e sigurt përpara se të filloni…'],
    services: ['Po nisen shërbimet', 'Pothuajse gati…'],
    welcome: ['Mirë se vini në SENOVA POS', 'Po hapet hapësira juaj e punës…'],
    closing: ['SENOVA POS po mbyllet', 'Po ruhen të dhënat tuaja. Mos e fikni kompjuterin.'],
    shutdownBackup: ['Po bëhet kopja rezervë', 'Mos e fikni kompjuterin.'],
    saved: ['Gjithçka u ruajt', 'SENOVA POS do të mbyllet pas pak.'],
  },
  vi: {
    starting: ['Đang khởi động SENOVA POS', 'Đang chuẩn bị mọi thứ…'],
    checking: [
      'Đang kiểm tra dữ liệu của bạn',
      'Đang xác minh cơ sở dữ liệu và giữ cho nó ổn định…',
    ],
    backingUp: ['Đang sao lưu dữ liệu của bạn', 'Đang lưu một bản sao an toàn trước khi bắt đầu…'],
    services: ['Đang khởi động dịch vụ', 'Sắp xong rồi…'],
    welcome: ['Chào mừng đến với SENOVA POS', 'Đang mở không gian làm việc của bạn…'],
    closing: ['Đang đóng SENOVA POS', 'Đang lưu dữ liệu của bạn. Vui lòng không tắt máy tính.'],
    shutdownBackup: ['Đang sao lưu', 'Vui lòng không tắt máy tính.'],
    saved: ['Đã lưu tất cả', 'SENOVA POS sẽ đóng trong giây lát.'],
  },
  ne: {
    starting: ['SENOVA POS सुरु हुँदैछ', 'सबै कुरा तयार गरिँदैछ…'],
    checking: ['तपाईंको डाटा जाँच गरिँदैछ', 'डाटाबेस प्रमाणित गरी स्वस्थ राखिँदैछ…'],
    backingUp: ['तपाईंको डाटाको ब्याकअप लिइँदैछ', 'सुरु गर्नु अघि सुरक्षित प्रति सुरक्षित गरिँदैछ…'],
    services: ['सेवाहरू सुरु हुँदैछन्', 'लगभग सकियो…'],
    welcome: ['SENOVA POS मा स्वागत छ', 'तपाईंको कार्यक्षेत्र खोलिँदैछ…'],
    closing: ['SENOVA POS बन्द हुँदैछ', 'तपाईंको डाटा सुरक्षित गरिँदैछ। कृपया कम्प्युटर बन्द नगर्नुहोस्।'],
    shutdownBackup: ['ब्याकअप लिइँदैछ', 'कृपया कम्प्युटर बन्द नगर्नुहोस्।'],
    saved: ['सबै सुरक्षित भयो', 'SENOVA POS केही क्षणमै बन्द हुनेछ।'],
  },
  ha: {
    starting: ['Ana fara SENOVA POS', 'Ana shirya komai…'],
    checking: ['Ana duba bayananka', "Ana tabbatar da ma'adanar bayanai tare da kiyaye lafiyarta…"],
    backingUp: ['Ana ajiyar bayananka', 'Ana adana kwafi mai aminci kafin ka fara…'],
    services: ['Ana fara ayyuka', 'An kusa kammalawa…'],
    welcome: ['Barka da zuwa SENOVA POS', 'Ana buɗe wurin aikinka…'],
    closing: ['Ana rufe SENOVA POS', 'Ana adana bayananka. Don Allah kada ka kashe kwamfutar.'],
    shutdownBackup: ['Ana yin ajiyar bayanai', 'Don Allah kada ka kashe kwamfutar.'],
    saved: ['An adana komai', 'SENOVA POS zai rufe nan take.'],
  },
  jv: {
    starting: ['Miwiti SENOVA POS', 'Nyiapake kabeh…'],
    checking: ['Mriksa data sampeyan', 'Mriksa basis data lan njaga supaya tetep sehat…'],
    backingUp: [
      'Nyadhangake data sampeyan',
      'Nyimpen salinan sing aman sadurunge sampeyan miwiti…',
    ],
    services: ['Miwiti layanan', 'Meh rampung…'],
    welcome: ['Sugeng rawuh ing SENOVA POS', 'Mbukak ruang kerja sampeyan…'],
    closing: ['Nutup SENOVA POS', 'Nyimpen data sampeyan. Aja mateni komputer.'],
    shutdownBackup: ['Nggawe cadhangan', 'Aja mateni komputer.'],
    saved: ['Kabeh wis kasimpen', 'SENOVA POS bakal enggal ditutup.'],
  },
  mr: {
    starting: ['SENOVA POS सुरू होत आहे', 'सर्व काही तयार केले जात आहे…'],
    checking: ['तुमचा डेटा तपासला जात आहे', 'डेटाबेसची पडताळणी करून तो सुस्थितीत ठेवला जात आहे…'],
    backingUp: ['तुमच्या डेटाचा बॅकअप घेतला जात आहे', 'सुरुवात करण्यापूर्वी सुरक्षित प्रत जतन केली जात आहे…'],
    services: ['सेवा सुरू होत आहेत', 'जवळजवळ तयार…'],
    welcome: ['SENOVA POS मध्ये तुमचे स्वागत आहे', 'तुमची कार्यजागा उघडली जात आहे…'],
    closing: ['SENOVA POS बंद होत आहे', 'तुमचा डेटा जतन केला जात आहे. कृपया संगणक बंद करू नका.'],
    shutdownBackup: ['बॅकअप घेतला जात आहे', 'कृपया संगणक बंद करू नका.'],
    saved: ['सर्व जतन झाले', 'SENOVA POS काही क्षणात बंद होईल.'],
  },
  sw: {
    starting: ['Inaanzisha SENOVA POS', 'Inaandaa kila kitu…'],
    checking: ['Inakagua data yako', 'Inathibitisha hifadhidata na kuiweka salama…'],
    backingUp: ['Inahifadhi nakala ya data yako', 'Inahifadhi nakala salama kabla ya kuanza…'],
    services: ['Inaanzisha huduma', 'Karibu tayari…'],
    welcome: ['Karibu kwenye SENOVA POS', 'Inafungua nafasi yako ya kazi…'],
    closing: ['Inafunga SENOVA POS', 'Inahifadhi data yako. Tafadhali usizime kompyuta.'],
    shutdownBackup: ['Inachukua nakala rudufu', 'Tafadhali usizime kompyuta.'],
    saved: ['Kila kitu kimehifadhiwa', 'SENOVA POS itafungwa hivi punde.'],
  },
  pa: {
    starting: ['SENOVA POS ਸ਼ੁਰੂ ਹੋ ਰਿਹਾ ਹੈ', 'ਸਭ ਕੁਝ ਤਿਆਰ ਕੀਤਾ ਜਾ ਰਿਹਾ ਹੈ…'],
    checking: ['ਤੁਹਾਡੇ ਡਾਟਾ ਦੀ ਜਾਂਚ ਕੀਤੀ ਜਾ ਰਹੀ ਹੈ', 'ਡਾਟਾਬੇਸ ਦੀ ਪੁਸ਼ਟੀ ਕਰਕੇ ਇਸ ਨੂੰ ਤੰਦਰੁਸਤ ਰੱਖਿਆ ਜਾ ਰਿਹਾ ਹੈ…'],
    backingUp: ['ਤੁਹਾਡੇ ਡਾਟਾ ਦਾ ਬੈਕਅੱਪ ਲਿਆ ਜਾ ਰਿਹਾ ਹੈ', 'ਸ਼ੁਰੂ ਕਰਨ ਤੋਂ ਪਹਿਲਾਂ ਇੱਕ ਸੁਰੱਖਿਅਤ ਕਾਪੀ ਸੰਭਾਲੀ ਜਾ ਰਹੀ ਹੈ…'],
    services: ['ਸੇਵਾਵਾਂ ਸ਼ੁਰੂ ਹੋ ਰਹੀਆਂ ਹਨ', 'ਲਗਭਗ ਤਿਆਰ…'],
    welcome: ['SENOVA POS ਵਿੱਚ ਤੁਹਾਡਾ ਸੁਆਗਤ ਹੈ', 'ਤੁਹਾਡਾ ਵਰਕਸਪੇਸ ਖੋਲ੍ਹਿਆ ਜਾ ਰਿਹਾ ਹੈ…'],
    closing: ['SENOVA POS ਬੰਦ ਹੋ ਰਿਹਾ ਹੈ', 'ਤੁਹਾਡਾ ਡਾਟਾ ਸੰਭਾਲਿਆ ਜਾ ਰਿਹਾ ਹੈ। ਕਿਰਪਾ ਕਰਕੇ ਕੰਪਿਊਟਰ ਬੰਦ ਨਾ ਕਰੋ।'],
    shutdownBackup: ['ਬੈਕਅੱਪ ਲਿਆ ਜਾ ਰਿਹਾ ਹੈ', 'ਕਿਰਪਾ ਕਰਕੇ ਕੰਪਿਊਟਰ ਬੰਦ ਨਾ ਕਰੋ।'],
    saved: ['ਸਭ ਕੁਝ ਸੰਭਾਲ ਲਿਆ ਗਿਆ', 'SENOVA POS ਕੁਝ ਹੀ ਪਲਾਂ ਵਿੱਚ ਬੰਦ ਹੋ ਜਾਵੇਗਾ।'],
  },
  te: {
    starting: ['SENOVA POS ప్రారంభమవుతోంది', 'అన్నీ సిద్ధం చేస్తున్నాము…'],
    checking: ['మీ డేటా తనిఖీ చేయబడుతోంది', 'డేటాబేస్ ధృవీకరించి ఆరోగ్యంగా ఉంచుతున్నాము…'],
    backingUp: ['మీ డేటా బ్యాకప్ చేయబడుతోంది', 'ప్రారంభించే ముందు సురక్షిత కాపీని సేవ్ చేస్తున్నాము…'],
    services: ['సేవలు ప్రారంభమవుతున్నాయి', 'దాదాపు పూర్తయింది…'],
    welcome: ['SENOVA POS కు స్వాగతం', 'మీ వర్క్ స్పేస్ తెరవబడుతోంది…'],
    closing: ['SENOVA POS మూసివేయబడుతోంది', 'మీ డేటా సేవ్ చేయబడుతోంది. దయచేసి కంప్యూటర్ ఆఫ్ చేయవద్దు.'],
    shutdownBackup: ['బ్యాకప్ తీసుకుంటోంది', 'దయచేసి కంప్యూటర్ ఆఫ్ చేయవద్దు.'],
    saved: ['అన్నీ సేవ్ చేయబడ్డాయి', 'SENOVA POS కొద్ది క్షణాల్లో మూసివేయబడుతుంది.'],
  },
  ta: {
    starting: ['SENOVA POS தொடங்குகிறது', 'அனைத்தையும் தயார்ப்படுத்துகிறது…'],
    checking: ['உங்கள் தரவு சரிபார்க்கப்படுகிறது', 'தரவுத்தளம் சரிபார்க்கப்பட்டு பாதுகாப்பாக வைக்கப்படுகிறது…'],
    backingUp: [
      'உங்கள் தரவு காப்புப்பிரதி எடுக்கப்படுகிறது',
      'தொடங்குவதற்கு முன் பாதுகாப்பான நகல் சேமிக்கப்படுகிறது…',
    ],
    services: ['சேவைகள் தொடங்குகின்றன', 'கிட்டத்தட்ட தயார்…'],
    welcome: ['SENOVA POS-க்கு வரவேற்கிறோம்', 'உங்கள் பணியிடம் திறக்கப்படுகிறது…'],
    closing: ['SENOVA POS மூடப்படுகிறது', 'உங்கள் தரவு சேமிக்கப்படுகிறது. கணினியை அணைக்க வேண்டாம்.'],
    shutdownBackup: ['காப்புப்பிரதி எடுக்கப்படுகிறது', 'கணினியை அணைக்க வேண்டாம்.'],
    saved: ['அனைத்தும் சேமிக்கப்பட்டன', 'SENOVA POS சில நொடிகளில் மூடப்படும்.'],
  },
  uk: {
    starting: ['Запуск SENOVA POS', 'Підготовка всього необхідного…'],
    checking: ['Перевірка даних', 'Перевіряємо базу даних і підтримуємо її в порядку…'],
    backingUp: ['Резервне копіювання даних', 'Зберігаємо безпечну копію перед початком роботи…'],
    services: ['Запуск служб', 'Майже готово…'],
    welcome: ['Ласкаво просимо до SENOVA POS', 'Відкриваємо робочий простір…'],
    closing: ['Закриття SENOVA POS', 'Зберігаємо ваші дані. Будь ласка, не вимикайте комп’ютер.'],
    shutdownBackup: ['Створення резервної копії', 'Будь ласка, не вимикайте комп’ютер.'],
    saved: ['Усе збережено', 'SENOVA POS закриється за мить.'],
  },
};

export const RTL_STATUS_LANGUAGES: ReadonlySet<string> = new Set(['ar', 'fa', 'ur']);

export const STATUS_LANGUAGES: readonly string[] = Object.keys(TABLES);

/** Maps a store language or OS locale tag (en-US, zh-TW, fil-PH) to a language with messages. */
export function resolveStatusLanguage(tag: string | null | undefined): string {
  const normalized = String(tag ?? '')
    .toLowerCase()
    .replace('_', '-');
  if (TABLES[normalized]) return normalized;
  if (normalized.startsWith('zh')) {
    return /tw|hk|mo|hant/.test(normalized) ? 'zh-tw' : 'zh';
  }
  const base = normalized.split('-')[0];
  if (base === 'tl') return 'fil';
  return TABLES[base] ? base : 'en';
}

export function getStatusMessage(key: StatusKey, language: string): StatusMessage {
  return (TABLES[language] ?? en)[key];
}
