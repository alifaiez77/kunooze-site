/* ═══════════════════════════════════════════════════════════
   AL-KUNOOZ UNIVERSITY — Admin Panel SPA
   ═══════════════════════════════════════════════════════════ */
'use strict';

/* ══════════════════ CONFIG ══════════════════ */
const C = {
  API:       'http://localhost:5000/api',
  TOKEN:     'ku-admin-token',
  USER:      'ku-admin-user',
  DEMO_MODE: true,   // ← true = بيانات وهمية بدون backend
};

/* ══════════════════ MOCK DATA ══════════════════ */
const MOCK = {
  stats: { students: 12000, faculty: 450, programs: 32, departments: 4, founded: 1995 },

  news: [
    { _id:'n1', title:{ar:'جامعة الكنوز تفتتح مختبر الذكاء الاصطناعي', en:'Al-Kunooz Opens AI Laboratory'}, category:'academic',  published:true,  featured:true, views:342, publishedAt:'2026-03-15', createdAt:'2026-03-15' },
    { _id:'n2', title:{ar:'فتح باب القبول للعام 2026-2027', en:'Admission Open for 2026-2027'},              category:'announcement',published:true,  featured:true, views:891, publishedAt:'2026-03-10', createdAt:'2026-03-10' },
    { _id:'n3', title:{ar:'توقيع اتفاقية تعاون مع جامعة مانشستر', en:'Partnership with Manchester Uni'},    category:'partnership',published:true,  featured:true, views:215, publishedAt:'2026-03-05', createdAt:'2026-03-05' },
    { _id:'n4', title:{ar:'انطلاق برنامج المنح الدراسية 2026', en:'Scholarship Program 2026 Launched'},       category:'academic',  published:false, featured:false,views:0,   publishedAt:'2026-04-01', createdAt:'2026-04-01' },
    { _id:'n5', title:{ar:'ورشة عمل في تقنيات البرمجة', en:'Programming Technologies Workshop'},             category:'event',     published:true,  featured:false,views:128, publishedAt:'2026-03-28', createdAt:'2026-03-28' },
  ],

  departments: [
    { _id:'d1', name:{ar:'كلية طب الأسنان',           en:'College of Dentistry'},            slug:'dentistry',   icon:'fa-tooth',              studentsCount:680,  programsCount:2, durationYears:5, contact:{email:'dentistry@alkunooz.edu.iq',  phone:'+964 750 001 0001'}, description:{ar:'برنامج متكامل لإعداد أطباء أسنان متميزين.',en:'Comprehensive dental education program.'} },
    { _id:'d2', name:{ar:'كلية الصيدلة',               en:'College of Pharmacy'},             slug:'pharmacy',    icon:'fa-pills',              studentsCount:520,  programsCount:2, durationYears:5, contact:{email:'pharmacy@alkunooz.edu.iq',    phone:'+964 750 001 0002'}, description:{ar:'تُخرّج صيادلة متخصصين.',en:'Trains specialized pharmacists.'} },
    { _id:'d3', name:{ar:'كلية الهندسة والتقنية',      en:'College of Engineering'},          slug:'engineering', icon:'fa-microchip',          studentsCount:980,  programsCount:4, durationYears:4, contact:{email:'engineering@alkunooz.edu.iq', phone:'+964 750 001 0003'}, description:{ar:'تضم تخصصات الهندسة المتعددة.',en:'Multiple engineering specializations.'} },
    { _id:'d4', name:{ar:'كلية القانون',                en:'College of Law'},                  slug:'law',         icon:'fa-scale-balanced',     studentsCount:750,  programsCount:3, durationYears:4, contact:{email:'law@alkunooz.edu.iq',         phone:'+964 750 001 0004'}, description:{ar:'تُخرّج كوادر قانونية متخصصة.',en:'Produces specialized legal professionals.'} },
  ],

  gallery: [
    { _id:'g1', image:'../image/DJI_0745.webp',                          category:'campus',     caption:{ar:'صورة جوية للحرم الجامعي', en:'Aerial view of campus'},    createdAt:'2026-01-10' },
    { _id:'g2', image:'../image/6087photo_2026-02-25_08-34-46.webp',    category:'labs',       caption:{ar:'مختبرات الجامعة',          en:'University labs'},           createdAt:'2026-01-12' },
    { _id:'g3', image:'../image/download7.webp',                          category:'campus',     caption:{ar:'مبنى الإدارة',            en:'Administration building'},   createdAt:'2026-01-15' },
    { _id:'g4', image:'../image/DJI_0745.webp',                          category:'events',     caption:{ar:'فعالية التخرج 2025',       en:'Graduation 2025'},           createdAt:'2026-02-01' },
    { _id:'g5', image:'../image/6087photo_2026-02-25_08-34-46.webp',    category:'campus',     caption:{ar:'ساحة الجامعة',            en:'University square'},         createdAt:'2026-02-10' },
    { _id:'g6', image:'../image/download7.webp',                          category:'graduation', caption:{ar:'حفل التخرج',              en:'Graduation ceremony'},       createdAt:'2026-03-01' },
  ],

  downloads: [
    { _id:'dl1', title:{ar:'نموذج طلب القبول',           en:'Admission Application Form'},    file:'#', fileType:'pdf', fileSizeKB:245, category:'forms',       downloads:128, createdAt:'2026-01-01' },
    { _id:'dl2', title:{ar:'الجدول الدراسي 2025-2026',   en:'Academic Schedule 2025-2026'},   file:'#', fileType:'pdf', fileSizeKB:512, category:'schedules',   downloads:89,  createdAt:'2026-01-05' },
    { _id:'dl3', title:{ar:'لائحة الامتحانات',            en:'Examination Regulations'},        file:'#', fileType:'pdf', fileSizeKB:380, category:'regulations', downloads:54,  createdAt:'2026-01-10' },
    { _id:'dl4', title:{ar:'دليل الطالب',                 en:'Student Handbook'},               file:'#', fileType:'pdf', fileSizeKB:892, category:'books',       downloads:312, createdAt:'2026-02-01' },
    { _id:'dl5', title:{ar:'نموذج طلب تأجيل الامتحانات', en:'Exam Postponement Form'},         file:'#', fileType:'docx',fileSizeKB:45,  category:'forms',       downloads:67,  createdAt:'2026-02-15' },
  ],

  contacts: [
    { _id:'c1', name:'أحمد العبدالله', email:'ahmed@example.com', phone:'+964 770 1234567', subject:'استفسار عن شروط القبول',       message:'السلام عليكم، أريد الاستفسار عن شروط القبول في كلية الهندسة للعام القادم وما هي الأوراق المطلوبة للتقديم.',    lang:'ar', read:false, createdAt:'2026-04-08' },
    { _id:'c2', name:'سارة محمود',     email:'sara@example.com',  phone:'+964 780 9876543', subject:'طلب معلومات عن المنح الدراسية', message:'أود الاستفسار عن المنح الدراسية المتاحة للطلاب المتميزين وكيفية التقديم عليها.',                              lang:'ar', read:false, createdAt:'2026-04-07' },
    { _id:'c3', name:'محمد الرشيدي',   email:'moh@example.com',   phone:'+964 750 5551234', subject:'شكوى إدارية',                  message:'أتقدم بشكوى بخصوص تأخر صدور نتائج الامتحانات للفصل الثاني، آمل المتابعة والحل.',                              lang:'ar', read:true,  createdAt:'2026-04-05' },
    { _id:'c4', name:'John Smith',     email:'john@example.com',  phone:'+1 555 0000',      subject:'Partnership Inquiry',           message:'We are interested in exploring academic collaboration opportunities with Al-Kunooz University.',                 lang:'en', read:true,  createdAt:'2026-04-03' },
    { _id:'c5', name:'فاطمة حسين',     email:'fatima@example.com',phone:'+964 771 2223344', subject:'استفسار عن التحويل الداخلي',    message:'هل يمكن التحويل من كلية الصيدلة إلى كلية طب الأسنان بعد اجتياز السنة الأولى؟ وما هي الشروط المطلوبة؟',          lang:'ar', read:false, createdAt:'2026-04-02' },
  ],

  admissions: [
    { _id:'a1', fullName:'علي حسن الجبوري',    email:'ali@ex.com',    phone:'+964 770 111',  departmentName:'كلية الهندسة والتقنية',  academicYear:'2026-2027', gender:'male',   city:'البصرة',   status:'pending',    highSchoolScore:91.5, createdAt:'2026-04-09' },
    { _id:'a2', fullName:'زينب عادل',           email:'zainab@ex.com', phone:'+964 780 222',  departmentName:'كلية طب الأسنان',        academicYear:'2026-2027', gender:'female', city:'بغداد',    status:'reviewing',  highSchoolScore:95.2, createdAt:'2026-04-08' },
    { _id:'a3', fullName:'كريم إبراهيم',        email:'karim@ex.com',  phone:'+964 750 333',  departmentName:'كلية القانون',           academicYear:'2026-2027', gender:'male',   city:'النجف',    status:'accepted',   highSchoolScore:88.0, createdAt:'2026-04-07' },
    { _id:'a4', fullName:'نور الدين الحمداني', email:'nour@ex.com',   phone:'+964 771 444',  departmentName:'كلية الصيدلة',           academicYear:'2026-2027', gender:'male',   city:'كربلاء',   status:'rejected',   highSchoolScore:72.3, createdAt:'2026-04-06' },
    { _id:'a5', fullName:'ريم الخزعلي',         email:'reem@ex.com',   phone:'+964 772 555',  departmentName:'كلية طب الأسنان',        academicYear:'2026-2027', gender:'female', city:'الموصل',   status:'waitlisted', highSchoolScore:89.7, createdAt:'2026-04-05' },
    { _id:'a6', fullName:'مصطفى النعمان',       email:'mosta@ex.com',  phone:'+964 773 666',  departmentName:'كلية الهندسة والتقنية',  academicYear:'2026-2027', gender:'male',   city:'البصرة',   status:'pending',    highSchoolScore:93.1, createdAt:'2026-04-04' },
  ],

  faculty: [
    { _id:'f1', deptId:'d1', name:{ar:'أ.د. أحمد عبدالرحيم',   en:'Prof. Ahmad Abdulraheem'},   title:'professor',       specialization:{ar:'جراحة الفم والأسنان',    en:'Oral & Maxillofacial Surgery'},   email:'a.abdulraheem@alkunooz.edu.iq',  phone:'+964 770 001 0001', photo:null, bio:{ar:'أستاذ متميز في جراحة الفم والأسنان بخبرة تجاوزت 20 عاماً في التدريس والبحث العلمي، حاصل على جوائز أكاديمية متعددة.', en:'Distinguished professor with over 20 years in oral surgery teaching and research, recipient of multiple academic awards.'}, qualifications:[{degree:'دكتوراه في جراحة الفم',year:2002,university:'جامعة بغداد'},{degree:'ماجستير في طب الأسنان',year:1998,university:'جامعة البصرة'}], courses:['جراحة الفم','أمراض اللثة','التخدير الموضعي'], createdAt:'2020-01-01' },
    { _id:'f2', deptId:'d1', name:{ar:'أ.م.د. سارة الموسى',    en:'Assoc. Prof. Sara Al-Mousa'}, title:'assoc_professor',  specialization:{ar:'تقويم الأسنان',           en:'Orthodontics'},                   email:'s.almousa@alkunooz.edu.iq',      phone:'+964 770 001 0002', photo:null, bio:{ar:'متخصصة في علم التقويم مع اهتمام بحثي في نمو الوجه والأسنان لدى الأطفال والمراهقين.', en:'Specialist in orthodontics with research interest in facial and dental growth in children and adolescents.'}, qualifications:[{degree:'دكتوراه في التقويم',year:2010,university:'جامعة الكوفة'}], courses:['التقويم الثابت','التقويم المتحرك'], createdAt:'2021-01-01' },
    { _id:'f3', deptId:'d2', name:{ar:'أ.د. محمد الكريمي',     en:'Prof. Mohammed Al-Karimi'},   title:'professor',       specialization:{ar:'الكيمياء الصيدلانية',     en:'Pharmaceutical Chemistry'},       email:'m.alkarimi@alkunooz.edu.iq',     phone:'+964 770 001 0003', photo:null, bio:{ar:'رائد في أبحاث الكيمياء الصيدلانية وتطوير الأدوية، نشر أكثر من 60 بحثاً محكماً في مجلات دولية.', en:'Pioneer in pharmaceutical chemistry and drug development research, with over 60 peer-reviewed publications in international journals.'}, qualifications:[{degree:'دكتوراه في الكيمياء الصيدلانية',year:1999,university:'جامعة بغداد'},{degree:'بوست دكتوراه',year:2003,university:'جامعة لندن'}], courses:['الكيمياء الصيدلانية العضوية','تحليل الأدوية'], createdAt:'2019-01-01' },
    { _id:'f4', deptId:'d3', name:{ar:'أ.م.د. يوسف الجعفري',  en:'Assoc. Prof. Yousif Al-Jaafari'}, title:'assoc_professor', specialization:{ar:'هندسة البرمجيات',       en:'Software Engineering'},           email:'y.aljaafari@alkunooz.edu.iq',    phone:'+964 770 001 0004', photo:null, bio:{ar:'خبير في هندسة البرمجيات وأنظمة الذكاء الاصطناعي، حاصل على براءة اختراع في مجال التعلم الآلي.', en:'Expert in software engineering and AI systems, holds a patent in machine learning.'}, qualifications:[{degree:'دكتوراه في علم الحاسوب',year:2008,university:'جامعة تكنولوجيا المعلومات والاتصالات'}], courses:['هندسة البرمجيات','الذكاء الاصطناعي','قواعد البيانات'], createdAt:'2018-01-01' },
    { _id:'f5', deptId:'d4', name:{ar:'أ.م.د. زينب الصافي',   en:'Assoc. Prof. Zainab Al-Safi'},  title:'assoc_professor',  specialization:{ar:'القانون المدني',          en:'Civil Law'},                       email:'z.alsafi@alkunooz.edu.iq',       phone:'+964 770 001 0005', photo:null, bio:{ar:'متخصصة في القانون المدني والعقود مع خبرة واسعة في التحكيم التجاري الدولي.', en:'Specialist in civil law and contracts with extensive experience in international commercial arbitration.'}, qualifications:[{degree:'دكتوراه في القانون المدني',year:2006,university:'جامعة بغداد'}], courses:['القانون المدني','عقود البيع والإيجار','التحكيم التجاري'], createdAt:'2020-06-01' },
  ],

  vmc: {
    vision: {
      ar: 'أن تكون جامعة الكنوز منارة علمية رائدة على المستوى الإقليمي والدولي، تُسهم في بناء مجتمع المعرفة وتنمية الكوادر الوطنية المتخصصة في مختلف الحقول العلمية والإنسانية.',
      en: 'To be a leading academic beacon at the regional and international level, contributing to building a knowledge society and developing specialized national cadres across scientific and humanitarian fields.',
    },
    mission: {
      ar: 'تقديم تعليم عالٍ نوعي ومتميز، وإجراء بحوث علمية تخدم المجتمع والتنمية المستدامة، وتوطيد علاقات شراكة فاعلة مع المؤسسات الأكاديمية والصناعية محلياً وعالمياً.',
      en: 'To provide high-quality and distinguished higher education, conduct scientific research that serves society and sustainable development, and establish effective partnerships with academic and industrial institutions locally and globally.',
    },
    goals: [
      { ar: 'تطوير برامج أكاديمية متميزة تواكب المعايير الدولية', en: 'Developing distinguished academic programs that meet international standards' },
      { ar: 'تعزيز البحث العلمي وربطه باحتياجات المجتمع', en: 'Promoting scientific research and linking it to community needs' },
      { ar: 'بناء شراكات استراتيجية مع جامعات ومؤسسات عالمية', en: 'Building strategic partnerships with international universities and institutions' },
      { ar: 'توفير بيئة تعليمية حديثة ومحفّزة للإبداع والابتكار', en: 'Providing a modern educational environment that stimulates creativity and innovation' },
      { ar: 'تنمية قدرات الكادر التدريسي وتأهيله باستمرار', en: 'Continuously developing and qualifying the teaching staff' },
    ],
    values: [
      { icon:'fa-star',        ar:'التميّز',    en:'Excellence'  },
      { icon:'fa-handshake',   ar:'النزاهة',    en:'Integrity'   },
      { icon:'fa-lightbulb',   ar:'الابتكار',   en:'Innovation'  },
      { icon:'fa-users',       ar:'الشراكة',    en:'Partnership' },
      { icon:'fa-heart',       ar:'الانتماء',   en:'Belonging'   },
      { icon:'fa-leaf',        ar:'الاستدامة',  en:'Sustainability' },
    ],
  },

  admins: [
    { _id:'adm1', username:'admin',     role:'superadmin', lastLogin:'2026-04-10', createdAt:'2025-01-01' },
    { _id:'adm2', username:'editor',    role:'admin',      lastLogin:'2026-04-08', createdAt:'2025-06-01' },
    { _id:'adm3', username:'moderator', role:'moderator',  lastLogin:'2026-04-03', createdAt:'2026-01-15' },
  ],

  deptInfo: {
    d1: {
      minScore:85, seatsPerYear:80, annualFee:'1,500,000 د.ع',
      requirements:[{ar:'شهادة البكالوريا أو ما يعادلها',en:'Baccalaureate or equivalent'},{ar:'معدل لا يقل عن 85%',en:'Min score 85%'},{ar:'اجتياز المقابلة الشخصية',en:'Pass personal interview'}],
      documents:[{ar:'شهادة البكالوريا الأصلية',en:'Original Baccalaureate'},{ar:'صورة الهوية الوطنية',en:'National ID copy'},{ar:'4 صور شخصية',en:'4 passport photos'},{ar:'شهادة الجنسية',en:'Nationality cert.'}],
      notes:{ar:'يُفضّل تقديم الطلب مبكراً نظراً لمحدودية المقاعد.',en:'Early application is preferred due to limited seats.'},
    },
    d2: {
      minScore:80, seatsPerYear:70, annualFee:'1,400,000 د.ع',
      requirements:[{ar:'شهادة البكالوريا أو ما يعادلها',en:'Baccalaureate or equivalent'},{ar:'معدل لا يقل عن 80%',en:'Min score 80%'}],
      documents:[{ar:'شهادة البكالوريا الأصلية',en:'Original Baccalaureate'},{ar:'صورة الهوية الوطنية',en:'National ID copy'},{ar:'4 صور شخصية',en:'4 passport photos'}],
      notes:{ar:'',en:''},
    },
    d3: {
      minScore:75, seatsPerYear:120, annualFee:'1,200,000 د.ع',
      requirements:[{ar:'شهادة البكالوريا أو ما يعادلها',en:'Baccalaureate or equivalent'},{ar:'معدل لا يقل عن 75%',en:'Min score 75%'},{ar:'اجتياز اختبار الكفاءة التقنية',en:'Technical aptitude test'}],
      documents:[{ar:'شهادة البكالوريا الأصلية',en:'Original Baccalaureate'},{ar:'صورة الهوية الوطنية',en:'National ID copy'},{ar:'4 صور شخصية',en:'4 passport photos'}],
      notes:{ar:'يُرجى مراجعة الكلية لاختبار الكفاءة.',en:'Please visit the college for the aptitude test.'},
    },
    d4: {
      minScore:75, seatsPerYear:100, annualFee:'1,000,000 د.ع',
      requirements:[{ar:'شهادة البكالوريا أو ما يعادلها',en:'Baccalaureate or equivalent'},{ar:'معدل لا يقل عن 75%',en:'Min score 75%'}],
      documents:[{ar:'شهادة البكالوريا الأصلية',en:'Original Baccalaureate'},{ar:'صورة الهوية الوطنية',en:'National ID copy'},{ar:'4 صور شخصية',en:'4 passport photos'},{ar:'شهادة حسن السيرة والسلوك',en:'Good conduct cert.'}],
      notes:{ar:'',en:''},
    },
  },

  studentsContent: {
    hero: { titleAr:'بوابة الطالب', titleEn:'Student Portal', subtitleAr:'مرحباً بك في بوابة طلاب جامعة الكنوز — بوابتك للتعليم والمعرفة', subtitleEn:'Welcome to Al-Kunooz University Student Portal' },
    announcements: [
      { _id:'an1', titleAr:'نتائج الامتحانات النهائية للفصل الثاني 2025-2026', important:true,  date:'2026-04-01' },
      { _id:'an2', titleAr:'فتح باب تسجيل المواد للفصل الصيفي',               important:true,  date:'2026-04-05' },
      { _id:'an3', titleAr:'ورشة عمل مهارات البحث العلمي',                    important:false, date:'2026-04-08' },
      { _id:'an4', titleAr:'تعليمات تقديم طلبات التأجيل والانسحاب',           important:false, date:'2026-03-20' },
    ],
    links: [
      { _id:'lk1', titleAr:'نظام التسجيل الإلكتروني', url:'#', icon:'fa-graduation-cap' },
      { _id:'lk2', titleAr:'المكتبة الرقمية',          url:'#', icon:'fa-book-open'      },
      { _id:'lk3', titleAr:'البريد الجامعي',            url:'#', icon:'fa-envelope'       },
      { _id:'lk4', titleAr:'نتائج الامتحانات',          url:'#', icon:'fa-chart-bar'      },
      { _id:'lk5', titleAr:'الجدول الدراسي',            url:'#', icon:'fa-calendar'       },
    ],
  },

  orgChart: [
    { _id:'o1',  parentId:null,  name:{ar:'مجلس الجامعة',                      en:'University Council'},           role:{ar:'الجهة التشريعية العليا',   en:'Supreme Legislative Body'},      holder:'' },
    { _id:'o2',  parentId:'o1',  name:{ar:'رئيس الجامعة',                        en:'University President'},         role:{ar:'الإدارة التنفيذية العليا', en:'Executive Management'},          holder:'أ.د. عمر الخالدي' },
    { _id:'o3',  parentId:'o2',  name:{ar:'نائب الرئيس للشؤون العلمية',         en:'VP for Academic Affairs'},      role:{ar:'الإشراف الأكاديمي والبحثي',en:'Academic & Research Oversight'}, holder:'أ.د. فاطمة الزبيدي' },
    { _id:'o4',  parentId:'o2',  name:{ar:'نائب الرئيس للشؤون الإدارية',        en:'VP for Administrative Affairs'}, role:{ar:'الإدارة والخدمات',          en:'Administration & Services'},    holder:'أ.م.د. سعد الربيعي' },
    { _id:'o5',  parentId:'o3',  name:{ar:'عميد كلية طب الأسنان',               en:'Dean of Dentistry'},            role:{ar:'إدارة الكلية',              en:'College Administration'},        holder:'أ.د. أحمد عبدالرحيم' },
    { _id:'o6',  parentId:'o3',  name:{ar:'عميد كلية الصيدلة',                  en:'Dean of Pharmacy'},             role:{ar:'إدارة الكلية',              en:'College Administration'},        holder:'أ.د. محمد الكريمي' },
    { _id:'o7',  parentId:'o3',  name:{ar:'عميد كلية الهندسة والتقنية',         en:'Dean of Engineering'},          role:{ar:'إدارة الكلية',              en:'College Administration'},        holder:'أ.م.د. يوسف الجعفري' },
    { _id:'o8',  parentId:'o3',  name:{ar:'عميد كلية القانون',                  en:'Dean of Law'},                  role:{ar:'إدارة الكلية',              en:'College Administration'},        holder:'أ.م.د. زينب الصافي' },
    { _id:'o9',  parentId:'o4',  name:{ar:'المدير المالي',                       en:'Financial Director'},           role:{ar:'الشؤون المالية',            en:'Financial Affairs'},             holder:'م. حيدر النصراوي' },
    { _id:'o10', parentId:'o4',  name:{ar:'مدير شؤون الطلبة',                   en:'Student Affairs Director'},     role:{ar:'خدمات ودعم الطلبة',         en:'Student Services & Support'},    holder:'م. نور الدين الحمداني' },
  ],
};

/* ══════════════════ AUTH ══════════════════ */
const Auth = {
  token:  () => C.DEMO_MODE ? 'demo-token' : localStorage.getItem(C.TOKEN),
  user:   () => C.DEMO_MODE ? { username: 'admin', role: 'superadmin' } : JSON.parse(localStorage.getItem(C.USER) || '{}'),
  logout: () => { if (!C.DEMO_MODE) { localStorage.removeItem(C.TOKEN); localStorage.removeItem(C.USER); } location.href = 'login.html'; },
  check:  () => { if (!C.DEMO_MODE && !Auth.token()) location.href = 'login.html'; },
};

/* ══════════════════ HTTP (with mock fallback) ══════════════════ */
const Http = {
  h: (extra = {}) => ({ Authorization: `Bearer ${Auth.token()}`, ...extra }),

  /* ── Mock responses ── */
  _mock(path) {
    if (path === '/stats')              return { success:true, data: MOCK.stats };
    if (path.startsWith('/news/admin')) return { success:true, data: MOCK.news };
    if (path === '/news/featured')      return { success:true, data: MOCK.news.filter(n=>n.featured) };
    if (path.startsWith('/departments'))return { success:true, data: MOCK.departments };
    if (path.startsWith('/gallery'))    return { success:true, data: MOCK.gallery };
    if (path.startsWith('/downloads'))  return { success:true, data: MOCK.downloads };
    if (path.startsWith('/contact'))    return { success:true, data: MOCK.contacts,   unreadCount: MOCK.contacts.filter(c=>!c.read).length };
    if (path.startsWith('/admission'))  return { success:true, data: MOCK.admissions };
    if (path.startsWith('/faculty'))         return { success:true, data: MOCK.faculty };
    if (path.startsWith('/vmc'))             return { success:true, data: MOCK.vmc };
    if (path.startsWith('/orgchart'))        return { success:true, data: MOCK.orgChart };
    if (path.startsWith('/admins'))          return { success:true, data: MOCK.admins };
    if (path.startsWith('/dept-info/'))      { const id=path.split('/')[2]; return { success:true, data: MOCK.deptInfo[id] || null }; }
    if (path.startsWith('/students-content'))return { success:true, data: MOCK.studentsContent };
    if (path === '/auth/me')                 return { success:true, admin: Auth.user() };
    return { success:true, data:[] };
  },

  async req(method, path, body) {
    if (C.DEMO_MODE) {
      await new Promise(r => setTimeout(r, 180)); // simulate network delay
      if (method !== 'GET') { Toast.show('وضع العرض فقط — الحفظ غير متاح بدون backend', 'info', 3000); return { success:false }; }
      return Http._mock(path);
    }
    try {
      const opts = { method, headers: Http.h({ 'Content-Type': 'application/json' }) };
      if (body) opts.body = JSON.stringify(body);
      const r = await fetch(C.API + path, opts);
      if (r.status === 401) { Auth.logout(); return; }
      return r.json();
    } catch { return { success: false, message: 'لا يمكن الاتصال بالخادم.' }; }
  },

  async upload(method, path, fd) {
    if (C.DEMO_MODE) { Toast.show('وضع العرض فقط — الرفع غير متاح بدون backend', 'info', 3000); return { success:false }; }
    try {
      const r = await fetch(C.API + path, { method, headers: Http.h(), body: fd });
      if (r.status === 401) { Auth.logout(); return; }
      return r.json();
    } catch { return { success: false, message: 'فشل رفع الملف.' }; }
  },

  get:    (p)    => Http.req('GET',    p),
  post:   (p, b) => Http.req('POST',   p, b),
  put:    (p, b) => Http.req('PUT',    p, b),
  patch:  (p, b) => Http.req('PATCH',  p, b),
  del:    (p)    => Http.req('DELETE', p),
  postFD: (p, f) => Http.upload('POST', p, f),
  putFD:  (p, f) => Http.upload('PUT',  p, f),
};

/* ══════════════════ TOAST ══════════════════ */
const Toast = {
  show(msg, type = 'success', ms = 4000) {
    const id = 'toast-' + Date.now();
    const ico = { success:'fa-circle-check', error:'fa-circle-xmark', warning:'fa-triangle-exclamation', info:'fa-circle-info' };
    const el = document.createElement('div');
    el.id = id;
    el.className = `toast toast-${type}`;
    el.innerHTML = `<i class="fa-solid ${ico[type]||ico.info}"></i><span>${msg}</span><button onclick="this.parentElement.remove()"><i class="fa-solid fa-xmark"></i></button>`;
    document.getElementById('toastContainer').appendChild(el);
    setTimeout(() => el.classList.add('show'), 30);
    setTimeout(() => { el.classList.remove('show'); setTimeout(() => el.remove(), 300); }, ms);
  },
};

/* ══════════════════ MODAL ══════════════════ */
const Modal = {
  _scrollHandlers: {},

  open(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.add('active');
    document.body.style.overflow = 'hidden';

    /* Init scroll progress bar */
    requestAnimationFrame(() => {
      const body    = m.querySelector('.modal-body');
      const bar     = m.querySelector('.modal-scroll-bar');
      const box     = m.querySelector('.modal-box');
      if (!body || !bar) return;

      /* Reset */
      bar.style.setProperty('--scroll-pct', '0%');

      const update = () => {
        const { scrollTop, scrollHeight, clientHeight } = body;
        const max = scrollHeight - clientHeight;
        const pct = max > 2 ? Math.round((scrollTop / max) * 100) : 0;
        bar.style.setProperty('--scroll-pct', pct + '%');

        /* Fade indicator at bottom when not fully scrolled */
        if (max > 30) {
          body.style.setProperty('--show-fade', pct < 96 ? '1' : '0');
          body.classList.toggle('has-scroll', pct < 96);
        } else {
          body.classList.remove('has-scroll');
        }
      };

      /* Remove old listener if exists */
      if (this._scrollHandlers[id]) {
        const old = m.querySelector('.modal-body');
        if (old) old.removeEventListener('scroll', this._scrollHandlers[id]);
      }

      this._scrollHandlers[id] = update;
      body.addEventListener('scroll', update, { passive: true });

      /* Scroll to top and run initial check */
      body.scrollTop = 0;
      update();
    });
  },

  close(id) {
    const m = document.getElementById(id);
    if (!m) return;
    m.classList.remove('active');
    document.body.style.overflow = '';

    /* Clean up scroll listener */
    if (this._scrollHandlers[id]) {
      const body = m.querySelector('.modal-body');
      if (body) body.removeEventListener('scroll', this._scrollHandlers[id]);
      delete this._scrollHandlers[id];
    }

    /* Reset scroll bar */
    const bar = m.querySelector('.modal-scroll-bar');
    if (bar) bar.style.setProperty('--scroll-pct', '0%');
  },
};

/* ══════════════════ HELPERS ══════════════════ */
const fmt = {
  date:  (d) => d ? new Date(d).toLocaleDateString('ar-IQ', { year:'numeric', month:'short', day:'numeric' }) : '—',
  size:  (kb) => kb ? (kb >= 1024 ? (kb/1024).toFixed(1)+' MB' : kb+' KB') : '—',
  trunc: (s, n=50) => s && s.length > n ? s.slice(0, n)+'...' : (s || '—'),
};

const CAT = {
  news:     { academic:'أكاديمي', announcement:'إعلان', partnership:'شراكة', event:'فعالية', research:'بحث', other:'أخرى' },
  gallery:  { campus:'الحرم', events:'فعاليات', labs:'مختبرات', graduation:'تخرج', sports:'رياضة', other:'أخرى' },
  downloads:{ forms:'نماذج', regulations:'أنظمة', schedules:'جداول', journals:'مجلات', books:'كتب', other:'أخرى' },
  status:   { pending:'معلق', reviewing:'قيد المراجعة', accepted:'مقبول', rejected:'مرفوض', waitlisted:'انتظار' },
};

function badge(text, cls) { return `<span class="badge badge-${cls}">${text}</span>`; }

function statusBadge(s) {
  const map = { pending:'warning', reviewing:'info', accepted:'success', rejected:'danger', waitlisted:'gray' };
  return badge(CAT.status[s] || s, map[s] || 'gray');
}

function catBadgeNews(c) { return badge(CAT.news[c] || c, 'cat'); }

function loadingHTML() {
  return `<div class="loading-inline"><div class="spin-sm"></div></div>`;
}

function emptyHTML(icon, msg) {
  return `<div class="empty-state"><i class="fa-solid ${icon}"></i><p>${msg}</p></div>`;
}

function btnLoading(id, state) {
  const btn = document.getElementById(id);
  if (!btn) return;
  if (state) { btn.dataset.orig = btn.innerHTML; btn.classList.add('loading'); btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> جاري الحفظ...'; }
  else       { btn.classList.remove('loading'); if (btn.dataset.orig) btn.innerHTML = btn.dataset.orig; }
}

/* ══════════════════ ROUTER ══════════════════ */
const Router = {
  current: null,
  pages: {
    overview:    { label: 'نظرة عامة',          fn: () => Overview.render()     },
    news:        { label: 'الأخبار',             fn: () => News.render()         },
    departments: { label: 'الكليات',             fn: () => Departments.render()  },
    gallery:     { label: 'معرض الصور',          fn: () => Gallery.render()      },
    downloads:   { label: 'التحميلات',           fn: () => Downloads.render()    },
    faculty:         { label: 'الكادر التدريسي',      fn: () => Faculty.render()         },
    identity:        { label: 'الهوية المؤسسية',      fn: () => Identity.render()        },
    orgchart:        { label: 'الهيكل التنظيمي',      fn: () => OrgChart.render()        },
    contacts:        { label: 'رسائل التواصل',        fn: () => Contacts.render()        },
    admissions:      { label: 'طلبات القبول',         fn: () => Admissions.render()      },
    studentsContent: { label: 'محتوى صفحة الطلاب',   fn: () => StudentsContent.render() },
    admins:          { label: 'مدراء النظام',          fn: () => AdminsSection.render()   },
  },

  go(name) {
    if (!this.pages[name]) return;
    this.current = name;

    /* Sidebar active state */
    document.querySelectorAll('.sb-item').forEach(el => {
      el.classList.toggle('active', el.dataset.section === name);
    });

    /* Top bar page name */
    document.getElementById('tbPage').textContent = this.pages[name].label;

    /* Render */
    const mc = document.getElementById('mainContent');
    mc.innerHTML = `<div class="loading-page"><div class="spin-lg"></div><p>جاري التحميل...</p></div>`;
    this.pages[name].fn();

    /* Close mobile sidebar */
    document.getElementById('sidebar').classList.remove('mobile-open');
    document.getElementById('sbOverlay').classList.remove('show');
  },
};

/* ══════════════════════════════════════════════
   OVERVIEW
══════════════════════════════════════════════ */
const Overview = {
  async render() {
    const mc = document.getElementById('mainContent');
    try {
      const [statsR, contactsR, admissionsR, newsR] = await Promise.all([
        Http.get('/stats'),
        Http.get('/contact'),
        Http.get('/admission'),
        Http.get('/news/admin/all'),
      ]);

      const stats  = statsR?.data     || {};
      const msgs   = contactsR?.data  || [];
      const apps   = admissionsR?.data || [];
      const news   = newsR?.data       || [];

      const unread  = msgs.filter(m => !m.read).length;
      const pending = apps.filter(a => a.status === 'pending').length;

      /* Update sidebar badges */
      setBadge('badgeContacts',   unread);
      setBadge('badgeAdmissions', pending);
      document.getElementById('tbDot').style.display = unread > 0 ? 'block' : 'none';

      mc.innerHTML = `
        <div class="page-hd">
          <div class="page-hd-text">
            <h1 class="page-title">نظرة عامة على النظام</h1>
            <p class="page-sub">مرحباً في لوحة إدارة جامعة الكنوز</p>
          </div>
        </div>

        <div class="stats-row">
          <div class="stat-card stat-teal" onclick="Router.go('news')" style="cursor:pointer">
            <div class="stat-icon"><i class="fa-solid fa-newspaper"></i></div>
            <div>
              <div class="stat-val">${news.length}</div>
              <div class="stat-lbl">إجمالي الأخبار</div>
            </div>
          </div>
          <div class="stat-card stat-gold" onclick="Router.go('contacts')" style="cursor:pointer">
            <div class="stat-icon"><i class="fa-solid fa-envelope"></i></div>
            <div>
              <div class="stat-val">${msgs.length}</div>
              <div class="stat-lbl">رسائل التواصل</div>
              ${unread > 0 ? `<div class="stat-note">${unread} جديدة غير مقروءة</div>` : ''}
            </div>
          </div>
          <div class="stat-card stat-navy" onclick="Router.go('admissions')" style="cursor:pointer">
            <div class="stat-icon"><i class="fa-solid fa-graduation-cap"></i></div>
            <div>
              <div class="stat-val">${apps.length}</div>
              <div class="stat-lbl">طلبات القبول</div>
              ${pending > 0 ? `<div class="stat-note">${pending} معلقة</div>` : ''}
            </div>
          </div>
          <div class="stat-card stat-green" onclick="Router.go('departments')" style="cursor:pointer">
            <div class="stat-icon"><i class="fa-solid fa-building-columns"></i></div>
            <div>
              <div class="stat-val">${stats.departments || 0}</div>
              <div class="stat-lbl">الكليات</div>
            </div>
          </div>
        </div>

        <div class="overview-grid">
          <div class="card">
            <div class="card-hd">
              <span class="card-title"><i class="fa-solid fa-envelope"></i> أحدث رسائل التواصل</span>
              <button class="btn btn-outline btn-sm" onclick="Router.go('contacts')">عرض الكل</button>
            </div>
            ${msgs.length ? `
            <div class="dt-wrap">
              <table class="dt">
                <thead><tr><th>الاسم</th><th>الموضوع</th><th>التاريخ</th><th>الحالة</th></tr></thead>
                <tbody>
                  ${msgs.slice(0,5).map(m => `
                    <tr>
                      <td style="font-weight:600;color:var(--text)">${m.name}</td>
                      <td class="dt-truncate">${fmt.trunc(m.subject, 35)}</td>
                      <td style="white-space:nowrap">${fmt.date(m.createdAt)}</td>
                      <td>${m.read ? badge('مقروء','success') : badge('جديد','warning')}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ` : emptyHTML('fa-envelope-open', 'لا توجد رسائل بعد')}
          </div>

          <div class="card">
            <div class="card-hd">
              <span class="card-title"><i class="fa-solid fa-graduation-cap"></i> أحدث طلبات القبول</span>
              <button class="btn btn-outline btn-sm" onclick="Router.go('admissions')">عرض الكل</button>
            </div>
            ${apps.length ? `
            <div class="dt-wrap">
              <table class="dt">
                <thead><tr><th>الاسم</th><th>الكلية</th><th>التاريخ</th><th>الحالة</th></tr></thead>
                <tbody>
                  ${apps.slice(0,5).map(a => `
                    <tr>
                      <td style="font-weight:600;color:var(--text)">${a.fullName}</td>
                      <td>${a.departmentName || '—'}</td>
                      <td style="white-space:nowrap">${fmt.date(a.createdAt)}</td>
                      <td>${statusBadge(a.status)}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
            ` : emptyHTML('fa-file-pen', 'لا توجد طلبات بعد')}
          </div>
        </div>
      `;
    } catch (err) {
      mc.innerHTML = `<div class="empty-state"><i class="fa-solid fa-triangle-exclamation" style="color:var(--danger)"></i><p>${err.message}</p></div>`;
    }
  },
};

function setBadge(id, count) {
  const el = document.getElementById(id);
  if (!el) return;
  if (count > 0) { el.textContent = count > 99 ? '99+' : count; el.style.display = 'grid'; }
  else            { el.style.display = 'none'; }
}

/* ══════════════════════════════════════════════
   NEWS
══════════════════════════════════════════════ */
const News = {
  _filter: 'all',
  _data:   [],

  setFilter(f) { this._filter = f; this.render(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/news/admin/all');
    this._data = res?.data || [];

    const all    = this._data;
    const shown  = this._filter === 'published' ? all.filter(n => n.published)
                 : this._filter === 'draft'     ? all.filter(n => !n.published) : all;

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">الأخبار والإعلانات</h1>
          <p class="page-sub">${all.length} خبر إجمالاً</p>
        </div>
        <div class="page-hd-actions">
          <button class="btn btn-primary" onclick="News.openCreate()"><i class="fa-solid fa-plus"></i> خبر جديد</button>
        </div>
      </div>
      <div class="card">
        <div class="ftabs">
          <button class="ftab ${this._filter==='all'       ?'active':''}" onclick="News.setFilter('all')">الكل (${all.length})</button>
          <button class="ftab ${this._filter==='published' ?'active':''}" onclick="News.setFilter('published')">منشور (${all.filter(n=>n.published).length})</button>
          <button class="ftab ${this._filter==='draft'     ?'active':''}" onclick="News.setFilter('draft')">مسودة (${all.filter(n=>!n.published).length})</button>
        </div>
        ${shown.length ? `
        <div class="dt-wrap">
          <table class="dt">
            <thead><tr><th>العنوان</th><th>التصنيف</th><th>المشاهدات</th><th>التاريخ</th><th>الحالة</th><th></th></tr></thead>
            <tbody>
              ${shown.map(item => `
                <tr>
                  <td>
                    <div class="dt-title-main">${item.title?.ar || '—'}</div>
                    ${item.title?.en ? `<div class="dt-title-sub">${fmt.trunc(item.title.en, 40)}</div>` : ''}
                  </td>
                  <td>${catBadgeNews(item.category)}</td>
                  <td>${item.views || 0}</td>
                  <td style="white-space:nowrap">${fmt.date(item.publishedAt)}</td>
                  <td>${item.published ? badge('منشور','success') : badge('مسودة','gray')}</td>
                  <td>
                    <div class="action-grp">
                      <button class="iab iab-edit" onclick="News.openEdit('${item._id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                      <button class="iab iab-del"  onclick="News.delete('${item._id}')"  title="حذف"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ` : emptyHTML('fa-newspaper', 'لا توجد أخبار في هذا التصنيف')}
      </div>
    `;

    /* Bind form */
    document.getElementById('newsForm')?.addEventListener('submit', e => { e.preventDefault(); News.save(); });
  },

  openCreate() {
    document.getElementById('newsId').value       = '';
    document.getElementById('newsModalTitle').textContent = 'إضافة خبر جديد';
    document.getElementById('newsTitleAr').value  = '';
    document.getElementById('newsTitleEn').value  = '';
    document.getElementById('newsBodyAr').value   = '';
    document.getElementById('newsBodyEn').value   = '';
    document.getElementById('newsCategory').value = 'announcement';
    document.getElementById('newsPublished').checked = true;
    document.getElementById('newsImage').value    = '';
    Modal.open('newsModal');
    /* Re-bind after render */
    document.getElementById('newsForm').onsubmit = e => { e.preventDefault(); News.save(); };
  },

  openEdit(id) {
    const item = this._data.find(n => n._id === id);
    if (!item) { Toast.show('الخبر غير موجود', 'error'); return; }
    document.getElementById('newsId').value       = id;
    document.getElementById('newsModalTitle').textContent = 'تعديل الخبر';
    document.getElementById('newsTitleAr').value  = item.title?.ar || '';
    document.getElementById('newsTitleEn').value  = item.title?.en || '';
    document.getElementById('newsBodyAr').value   = item.body?.ar  || '';
    document.getElementById('newsBodyEn').value   = item.body?.en  || '';
    document.getElementById('newsCategory').value = item.category  || 'announcement';
    document.getElementById('newsPublished').checked = !!item.published;
    document.getElementById('newsImage').value    = '';
    Modal.open('newsModal');
    document.getElementById('newsForm').onsubmit = e => { e.preventDefault(); News.save(); };
  },

  async save() {
    btnLoading('newsSaveBtn', true);
    const id = document.getElementById('newsId').value;

    /* Use FormData (supports image upload) */
    const fd = new FormData();
    fd.append('title[ar]',  document.getElementById('newsTitleAr').value);
    fd.append('title[en]',  document.getElementById('newsTitleEn').value);
    fd.append('body[ar]',   document.getElementById('newsBodyAr').value);
    fd.append('body[en]',   document.getElementById('newsBodyEn').value);
    fd.append('category',   document.getElementById('newsCategory').value);
    fd.append('published',  document.getElementById('newsPublished').checked);
    const img = document.getElementById('newsImage').files[0];
    if (img) fd.append('image', img);

    const res = id ? await Http.putFD(`/news/${id}`, fd) : await Http.postFD('/news', fd);
    btnLoading('newsSaveBtn', false);

    if (!res?.success) { Toast.show(res?.message || 'حدث خطأ', 'error'); return; }
    Toast.show(id ? 'تم تحديث الخبر' : 'تم إضافة الخبر');
    Modal.close('newsModal');
    this.render();
  },

  async delete(id) {
    if (!confirm('هل تريد حذف هذا الخبر نهائياً؟')) return;
    const res = await Http.del(`/news/${id}`);
    if (!res?.success) { Toast.show(res?.message || 'فشل الحذف', 'error'); return; }
    Toast.show('تم حذف الخبر');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   CONTACTS
══════════════════════════════════════════════ */
const Contacts = {
  _filter: 'all',

  setFilter(f) { this._filter = f; this.render(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/contact');
    const all = res?.data || [];
    const unread = all.filter(m => !m.read).length;

    setBadge('badgeContacts', unread);
    document.getElementById('tbDot').style.display = unread > 0 ? 'block' : 'none';

    const shown = this._filter === 'unread' ? all.filter(m => !m.read) : all;

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">رسائل التواصل</h1>
          <p class="page-sub">${all.length} رسالة · ${unread} غير مقروءة</p>
        </div>
      </div>
      <div class="card">
        <div class="ftabs">
          <button class="ftab ${this._filter==='all'   ?'active':''}" onclick="Contacts.setFilter('all')">الكل (${all.length})</button>
          <button class="ftab ${this._filter==='unread'?'active':''}" onclick="Contacts.setFilter('unread')">غير مقروءة (${unread})</button>
        </div>
        ${shown.length ? `
        <div class="dt-wrap">
          <table class="dt">
            <thead><tr><th>الاسم</th><th>البريد</th><th>الموضوع</th><th>التاريخ</th><th>الحالة</th><th></th></tr></thead>
            <tbody>
              ${shown.map(m => `
                <tr style="${!m.read ? 'font-weight:600' : ''}">
                  <td style="font-weight:${m.read?'500':'700'};color:var(--text)">${m.name}</td>
                  <td style="font-family:'Outfit',sans-serif;font-size:12.5px">${m.email}</td>
                  <td class="dt-truncate">${fmt.trunc(m.subject, 40)}</td>
                  <td style="white-space:nowrap">${fmt.date(m.createdAt)}</td>
                  <td>${m.read ? badge('مقروء','success') : badge('جديد','warning')}</td>
                  <td>
                    <div class="action-grp">
                      <button class="iab iab-view" onclick="Contacts.view('${m._id}')" title="عرض"><i class="fa-solid fa-eye"></i></button>
                      ${!m.read ? `<button class="iab iab-edit" onclick="Contacts.markRead('${m._id}')" title="تعليم كمقروء"><i class="fa-solid fa-check"></i></button>` : ''}
                      <button class="iab iab-del" onclick="Contacts.delete('${m._id}')" title="حذف"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ` : emptyHTML('fa-envelope-open', this._filter==='unread' ? 'لا توجد رسائل غير مقروءة' : 'لا توجد رسائل بعد')}
      </div>
    `;
  },

  _data: [],

  async view(id) {
    const res = await Http.get('/contact');
    const all = res?.data || [];
    const m = all.find(x => x._id === id);
    if (!m) { Toast.show('الرسالة غير موجودة', 'error'); return; }

    document.getElementById('contactModalBody').innerHTML = `
      <div class="detail-grid" style="margin-bottom:12px">
        <span class="detail-key">الاسم</span>      <span class="detail-val">${m.name}</span>
        <span class="detail-key">البريد</span>     <span class="detail-val" style="font-family:'Outfit',sans-serif">${m.email}</span>
        <span class="detail-key">الهاتف</span>     <span class="detail-val">${m.phone || '—'}</span>
        <span class="detail-key">الموضوع</span>    <span class="detail-val">${m.subject}</span>
        <span class="detail-key">التاريخ</span>    <span class="detail-val">${fmt.date(m.createdAt)}</span>
        <span class="detail-key">الحالة</span>     <span class="detail-val">${m.read ? badge('مقروء','success') : badge('جديد','warning')}</span>
      </div>
      <div class="detail-msg">${m.message}</div>
    `;
    Modal.open('contactModal');
    if (!m.read) { await Http.patch(`/contact/${id}/read`, {}); this.render(); }
  },

  async markRead(id) {
    const res = await Http.patch(`/contact/${id}/read`, {});
    if (!res?.success) { Toast.show('فشلت العملية', 'error'); return; }
    Toast.show('تم تعليمها كمقروءة');
    this.render();
  },

  async delete(id) {
    if (!confirm('حذف هذه الرسالة نهائياً؟')) return;
    const res = await Http.del(`/contact/${id}`);
    if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
    Toast.show('تم الحذف');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   ADMISSIONS
══════════════════════════════════════════════ */
const Admissions = {
  _filter: 'all',

  setFilter(f) { this._filter = f; this.render(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/admission');
    const all = res?.data || [];
    const pending = all.filter(a => a.status === 'pending').length;
    setBadge('badgeAdmissions', pending);

    const shown = this._filter === 'all' ? all : all.filter(a => a.status === this._filter);

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">طلبات القبول</h1>
          <p class="page-sub">${all.length} طلب إجمالاً · ${pending} معلق</p>
        </div>
      </div>
      <div class="card">
        <div class="ftabs" style="flex-wrap:wrap">
          ${['all','pending','reviewing','accepted','rejected','waitlisted'].map(s => {
            const cnt = s === 'all' ? all.length : all.filter(a => a.status === s).length;
            const lbl = s === 'all' ? 'الكل' : CAT.status[s];
            return `<button class="ftab ${this._filter===s?'active':''}" onclick="Admissions.setFilter('${s}')">${lbl} (${cnt})</button>`;
          }).join('')}
        </div>
        ${shown.length ? `
        <div class="dt-wrap">
          <table class="dt">
            <thead><tr><th>الاسم</th><th>البريد</th><th>الكلية</th><th>العام</th><th>التاريخ</th><th>الحالة</th><th></th></tr></thead>
            <tbody>
              ${shown.map(a => `
                <tr>
                  <td style="font-weight:600;color:var(--text)">${a.fullName}</td>
                  <td style="font-family:'Outfit',sans-serif;font-size:12.5px">${a.email}</td>
                  <td>${a.departmentName || '—'}</td>
                  <td style="font-family:'Outfit',sans-serif">${a.academicYear}</td>
                  <td style="white-space:nowrap">${fmt.date(a.createdAt)}</td>
                  <td>${statusBadge(a.status)}</td>
                  <td>
                    <div class="action-grp">
                      <button class="iab iab-view" onclick="Admissions.view('${a._id}')" title="عرض التفاصيل"><i class="fa-solid fa-eye"></i></button>
                      <button class="iab iab-edit" onclick="Admissions.openEdit('${a._id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                      <button class="iab iab-del" onclick="Admissions.delete('${a._id}')" title="حذف"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ` : emptyHTML('fa-file-pen', 'لا توجد طلبات في هذا التصنيف')}
      </div>
    `;
  },

  async view(id) {
    const res = await Http.get('/admission');
    const a = (res?.data || []).find(x => x._id === id);
    if (!a) { Toast.show('الطلب غير موجود', 'error'); return; }

    document.getElementById('admissionModalBody').innerHTML = `
      <div class="detail-grid">
        <span class="detail-key">الاسم الكامل</span>   <span class="detail-val">${a.fullName}</span>
        <span class="detail-key">البريد الإلكتروني</span> <span class="detail-val" style="font-family:'Outfit',sans-serif">${a.email}</span>
        <span class="detail-key">الهاتف</span>          <span class="detail-val">${a.phone}</span>
        <span class="detail-key">الكلية</span>          <span class="detail-val">${a.departmentName || '—'}</span>
        <span class="detail-key">العام الدراسي</span>   <span class="detail-val">${a.academicYear}</span>
        <span class="detail-key">الجنس</span>           <span class="detail-val">${a.gender==='male'?'ذكر':a.gender==='female'?'أنثى':'—'}</span>
        <span class="detail-key">المدينة</span>         <span class="detail-val">${a.city || '—'}</span>
        <span class="detail-key">تاريخ التقديم</span>   <span class="detail-val">${fmt.date(a.createdAt)}</span>
        <span class="detail-key">الحالة الحالية</span>  <span class="detail-val">${statusBadge(a.status)}</span>
      </div>
      ${a.notes ? `<div class="detail-msg" style="margin-top:12px"><strong>ملاحظات المتقدم:</strong><br>${a.notes}</div>` : ''}
    `;

    document.getElementById('admissionModalFoot').innerHTML = `
      <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;width:100%">
        <span style="font-size:13px;color:var(--text-m);font-weight:600">تغيير الحالة:</span>
        <select class="status-sel" id="statusSel" onchange="Admissions.changeStatus('${a._id}', this.value)">
          <option value="pending"    ${a.status==='pending'   ?'selected':''}>معلق</option>
          <option value="reviewing"  ${a.status==='reviewing' ?'selected':''}>قيد المراجعة</option>
          <option value="accepted"   ${a.status==='accepted'  ?'selected':''}>مقبول</option>
          <option value="rejected"   ${a.status==='rejected'  ?'selected':''}>مرفوض</option>
          <option value="waitlisted" ${a.status==='waitlisted'?'selected':''}>قائمة انتظار</option>
        </select>
        <button class="btn btn-ghost btn-sm" onclick="Modal.close('admissionModal')" style="margin-right:auto">إغلاق</button>
      </div>
    `;
    Modal.open('admissionModal');
  },

  async changeStatus(id, status) {
    const res = await Http.patch(`/admission/${id}/status`, { status });
    if (!res?.success) { Toast.show(res?.message || 'فشل التحديث', 'error'); return; }
    Toast.show('تم تحديث الحالة');
    Modal.close('admissionModal');
    this.render();
  },

  openEdit(id) {
    const res = MOCK.admissions.find(x => x._id === id);
    if (!res) { Toast.show('الطلب غير موجود', 'error'); return; }
    const a = res;
    document.getElementById('admEditId').value     = id;
    document.getElementById('admEditName').value   = a.fullName      || '';
    document.getElementById('admEditEmail').value  = a.email         || '';
    document.getElementById('admEditPhone').value  = a.phone         || '';
    document.getElementById('admEditGender').value = a.gender        || 'male';
    document.getElementById('admEditDept').value   = a.departmentName|| '';
    document.getElementById('admEditYear').value   = a.academicYear  || '';
    document.getElementById('admEditCity').value   = a.city          || '';
    document.getElementById('admEditScore').value  = a.highSchoolScore|| '';
    document.getElementById('admEditStatus').value = a.status        || 'pending';
    document.getElementById('admEditNotes').value  = a.notes         || '';
    const form = document.getElementById('admissionEditForm');
    form.onsubmit = e => { e.preventDefault(); Admissions.saveEdit(); };
    Modal.open('admissionEditModal');
  },

  saveEdit() {
    const id = document.getElementById('admEditId').value;
    btnLoading('admEditSaveBtn', true);
    const data = {
      fullName:       document.getElementById('admEditName').value,
      email:          document.getElementById('admEditEmail').value,
      phone:          document.getElementById('admEditPhone').value,
      gender:         document.getElementById('admEditGender').value,
      departmentName: document.getElementById('admEditDept').value,
      academicYear:   document.getElementById('admEditYear').value,
      city:           document.getElementById('admEditCity').value,
      highSchoolScore:parseFloat(document.getElementById('admEditScore').value) || 0,
      status:         document.getElementById('admEditStatus').value,
      notes:          document.getElementById('admEditNotes').value,
    };
    if (C.DEMO_MODE) {
      const idx = MOCK.admissions.findIndex(x => x._id === id);
      if (idx !== -1) MOCK.admissions[idx] = { ...MOCK.admissions[idx], ...data };
      btnLoading('admEditSaveBtn', false);
      Toast.show('تم تحديث طلب القبول');
      Modal.close('admissionEditModal');
      this.render();
      return;
    }
    Http.put(`/admission/${id}`, data).then(res => {
      btnLoading('admEditSaveBtn', false);
      if (!res?.success) { Toast.show(res?.message || 'فشل التحديث', 'error'); return; }
      Toast.show('تم التحديث');
      Modal.close('admissionEditModal');
      this.render();
    });
  },

  async delete(id) {
    if (!confirm('حذف هذا الطلب نهائياً؟')) return;
    if (C.DEMO_MODE) {
      const idx = MOCK.admissions.findIndex(x => x._id === id);
      if (idx !== -1) MOCK.admissions.splice(idx, 1);
      Toast.show('تم الحذف');
      this.render();
      return;
    }
    const res = await Http.del(`/admission/${id}`);
    if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
    Toast.show('تم الحذف');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   GALLERY
══════════════════════════════════════════════ */
const Gallery = {
  _filter: 'all',
  _data: [],

  setFilter(f) { this._filter = f; this.render(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/gallery?limit=100');
    this._data = res?.data || [];

    const all = this._data;
    const shown = this._filter === 'all' ? all : all.filter(g => g.category === this._filter);
    const cats = [...new Set(all.map(g => g.category))];

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">معرض الصور</h1>
          <p class="page-sub">${all.length} صورة</p>
        </div>
        <div class="page-hd-actions">
          <button class="btn btn-primary" onclick="Modal.open('galleryModal')"><i class="fa-solid fa-upload"></i> رفع صور</button>
        </div>
      </div>
      <div class="card">
        <div class="ftabs">
          <button class="ftab ${this._filter==='all'?'active':''}" onclick="Gallery.setFilter('all')">الكل (${all.length})</button>
          ${cats.map(c => `<button class="ftab ${this._filter===c?'active':''}" onclick="Gallery.setFilter('${c}')">${CAT.gallery[c]||c} (${all.filter(g=>g.category===c).length})</button>`).join('')}
        </div>
        ${shown.length ? `
        <div class="gal-grid">
          ${shown.map(g => `
            <div class="gal-item">
              <img src="${C.API.replace('/api','')}${g.image}" alt="" loading="lazy" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22%3E%3Crect fill=%22%23eef0f7%22 width=%22100%22 height=%22100%22/%3E%3Ctext x=%2250%22 y=%2255%22 text-anchor=%22middle%22 font-size=%2220%22 fill=%22%23ccc%22%3E📷%3C/text%3E%3C/svg%3E'">
              <div class="gal-item-overlay">
                <button class="gal-del-btn" onclick="Gallery.delete('${g._id}', event)"><i class="fa-solid fa-trash"></i></button>
              </div>
              <div class="gal-cat-tag">${CAT.gallery[g.category]||g.category}</div>
            </div>
          `).join('')}
        </div>
        ` : emptyHTML('fa-images', 'لا توجد صور في هذا التصنيف')}
      </div>
    `;
  },

  async upload() {
    const files = document.getElementById('galFiles').files;
    const cat   = document.getElementById('galCat').value;
    if (!files.length) { Toast.show('اختر صوراً أولاً', 'warning'); return; }

    btnLoading('galUploadBtn', true);
    const fd = new FormData();
    Array.from(files).forEach(f => fd.append('images', f));
    fd.append('category', cat);

    const res = await Http.postFD('/gallery', fd);
    btnLoading('galUploadBtn', false);
    if (!res?.success) { Toast.show(res?.message || 'فشل الرفع', 'error'); return; }

    Toast.show(`تم رفع ${res.count} صورة بنجاح`);
    Modal.close('galleryModal');
    document.getElementById('galFiles').value = '';
    document.getElementById('galFilesCount').textContent = '';
    this.render();
  },

  async delete(id, e) {
    e.stopPropagation();
    if (!confirm('حذف هذه الصورة نهائياً؟')) return;
    const res = await Http.del(`/gallery/${id}`);
    if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
    Toast.show('تم حذف الصورة');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   DOWNLOADS
══════════════════════════════════════════════ */
const Downloads = {
  _filter: 'all',

  setFilter(f) { this._filter = f; this.render(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/downloads');
    const all = res?.data || [];
    const shown = this._filter === 'all' ? all : all.filter(d => d.category === this._filter);

    const fileIco = { pdf:'fa-file-pdf text-danger', doc:'fa-file-word', docx:'fa-file-word', xls:'fa-file-excel', xlsx:'fa-file-excel', ppt:'fa-file-powerpoint', zip:'fa-file-zipper', other:'fa-file' };

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">مركز التحميلات</h1>
          <p class="page-sub">${all.length} ملف</p>
        </div>
        <div class="page-hd-actions">
          <button class="btn btn-primary" onclick="Modal.open('downloadModal')"><i class="fa-solid fa-plus"></i> إضافة ملف</button>
        </div>
      </div>
      <div class="card">
        <div class="ftabs">
          <button class="ftab ${this._filter==='all'?'active':''}" onclick="Downloads.setFilter('all')">الكل (${all.length})</button>
          ${Object.entries(CAT.downloads).map(([k,v]) => {
            const cnt = all.filter(d => d.category === k).length;
            return cnt ? `<button class="ftab ${this._filter===k?'active':''}" onclick="Downloads.setFilter('${k}')">${v} (${cnt})</button>` : '';
          }).join('')}
        </div>
        ${shown.length ? `
        <div class="dt-wrap">
          <table class="dt">
            <thead><tr><th>الملف</th><th>التصنيف</th><th>الحجم</th><th>التحميلات</th><th>التاريخ</th><th></th></tr></thead>
            <tbody>
              ${shown.map(d => `
                <tr>
                  <td>
                    <div style="display:flex;align-items:center;gap:10px">
                      <i class="fa-solid ${fileIco[d.fileType]||fileIco.other}" style="font-size:20px;color:var(--text-m)"></i>
                      <div>
                        <div class="dt-title-main">${d.title?.ar || '—'}</div>
                        ${d.title?.en ? `<div class="dt-title-sub">${d.title.en}</div>` : ''}
                      </div>
                    </div>
                  </td>
                  <td>${badge(CAT.downloads[d.category]||d.category,'cat')}</td>
                  <td style="font-family:'Outfit',sans-serif;font-size:12.5px">${fmt.size(d.fileSizeKB)}</td>
                  <td>${d.downloads || 0}</td>
                  <td style="white-space:nowrap">${fmt.date(d.createdAt)}</td>
                  <td>
                    <div class="action-grp">
                      <a href="${C.API}/downloads/${d._id}/file" target="_blank" class="iab iab-view" title="تحميل"><i class="fa-solid fa-download"></i></a>
                      <button class="iab iab-del" onclick="Downloads.delete('${d._id}')" title="حذف"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        ` : emptyHTML('fa-folder-open', 'لا توجد ملفات في هذا التصنيف')}
      </div>
    `;
  },

  async save() {
    const titleAr = document.getElementById('dlTitleAr').value.trim();
    if (!titleAr) { Toast.show('العنوان العربي مطلوب', 'warning'); return; }
    const file = document.getElementById('dlFile').files[0];
    if (!file) { Toast.show('الملف مطلوب', 'warning'); return; }

    btnLoading('dlSaveBtn', true);
    const fd = new FormData();
    fd.append('title[ar]',  titleAr);
    fd.append('title[en]',  document.getElementById('dlTitleEn').value);
    fd.append('category',   document.getElementById('dlCat').value);
    fd.append('file', file);

    const res = await Http.postFD('/downloads', fd);
    btnLoading('dlSaveBtn', false);
    if (!res?.success) { Toast.show(res?.message || 'فشل الرفع', 'error'); return; }
    Toast.show('تم رفع الملف بنجاح');
    Modal.close('downloadModal');
    document.getElementById('dlTitleAr').value = '';
    document.getElementById('dlTitleEn').value = '';
    document.getElementById('dlFile').value    = '';
    this.render();
  },

  async delete(id) {
    if (!confirm('حذف هذا الملف نهائياً؟')) return;
    const res = await Http.del(`/downloads/${id}`);
    if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
    Toast.show('تم الحذف');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   DEPARTMENTS
══════════════════════════════════════════════ */
const Departments = {
  _data: [],
  _programs: [],

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/departments');
    this._data = res?.data || [];

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">الكليات والأقسام</h1>
          <p class="page-sub">${this._data.length} كليات مفعّلة</p>
        </div>
        <div class="page-hd-actions">
          <button class="btn btn-primary" onclick="Departments.openCreate()"><i class="fa-solid fa-plus"></i> إضافة كلية</button>
        </div>
      </div>
      <div class="card">
        <div class="dept-card-grid">
          ${this._data.map(d => `
            <div class="dept-card">
              <div class="dept-card-icon"><i class="fa-solid ${d.icon || 'fa-building-columns'}"></i></div>
              <div class="dept-card-name">${d.name?.ar || '—'}</div>
              <div class="dept-card-sub">${d.name?.en || ''}</div>
              <div class="dept-card-stats">
                <span class="dept-stat"><i class="fa-solid fa-users"></i>${(d.studentsCount||0).toLocaleString()} طالب</span>
                <span class="dept-stat"><i class="fa-solid fa-book"></i>${d.programsCount||0} برامج</span>
                <span class="dept-stat"><i class="fa-solid fa-clock"></i>${d.durationYears||4} سنوات</span>
              </div>
              <div class="dept-card-actions">
                <button class="btn btn-outline btn-sm" onclick="Departments.openEdit('${d._id}')">
                  <i class="fa-solid fa-pen"></i> تعديل
                </button>
                <button class="btn btn-outline btn-sm" style="color:var(--gold);border-color:var(--gold)" onclick="DeptInfo.open('${d._id}','${(d.name?.ar||'').replace(/'/g,"\\'")}')">
                  <i class="fa-solid fa-clipboard-list"></i> شروط القبول
                </button>
                <button class="iab iab-del" onclick="Departments.delete('${d._id}')" title="حذف">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          `).join('')}
        </div>
        ${!this._data.length ? emptyHTML('fa-building-columns', 'لا توجد كليات — أضف كلية جديدة') : ''}
      </div>
    `;

    document.getElementById('deptForm')?.addEventListener('submit', e => { e.preventDefault(); Departments.save(); });
  },

  _resetForm() {
    document.getElementById('deptId').value        = '';
    document.getElementById('deptNameAr').value    = '';
    document.getElementById('deptNameEn').value    = '';
    document.getElementById('deptDescAr').value    = '';
    document.getElementById('deptDescEn').value    = '';
    document.getElementById('deptSlug').value      = '';
    document.getElementById('deptIcon').value      = '';
    document.getElementById('deptBadgeAr').value   = '';
    document.getElementById('deptBadgeEn').value   = '';
    document.getElementById('deptStudents').value  = '';
    document.getElementById('deptPrograms').value  = '';
    document.getElementById('deptYears').value     = '4';
    document.getElementById('deptEmail').value     = '';
    document.getElementById('deptPhone').value     = '';
    document.getElementById('deptImage').value     = '';
    document.getElementById('deptImgPreview').style.display = 'none';
    document.getElementById('deptIconPreview').innerHTML = '<i class="fa-solid fa-building-columns"></i>';
    this._programs = [];
    this._renderPrograms();
    document.getElementById('deptForm').onsubmit = e => { e.preventDefault(); Departments.save(); };
  },

  openCreate() {
    this._resetForm();
    document.getElementById('deptModalTitle').textContent = 'إضافة كلية جديدة';
    Modal.open('deptModal');
  },

  openEdit(id) {
    const d = this._data.find(x => x._id === id);
    if (!d) return;
    this._resetForm();
    document.getElementById('deptId').value        = id;
    document.getElementById('deptModalTitle').textContent = 'تعديل: ' + (d.name?.ar || '');
    document.getElementById('deptNameAr').value    = d.name?.ar || '';
    document.getElementById('deptNameEn').value    = d.name?.en || '';
    document.getElementById('deptDescAr').value    = d.description?.ar || '';
    document.getElementById('deptDescEn').value    = d.description?.en || '';
    document.getElementById('deptSlug').value      = d.slug || '';
    document.getElementById('deptIcon').value      = d.icon || '';
    document.getElementById('deptBadgeAr').value   = d.badge?.ar || '';
    document.getElementById('deptBadgeEn').value   = d.badge?.en || '';
    document.getElementById('deptStudents').value  = d.studentsCount || 0;
    document.getElementById('deptPrograms').value  = d.programsCount || 0;
    document.getElementById('deptYears').value     = d.durationYears || 4;
    document.getElementById('deptEmail').value     = d.contact?.email || '';
    document.getElementById('deptPhone').value     = d.contact?.phone || '';
    if (d.icon) {
      document.getElementById('deptIconPreview').innerHTML = `<i class="fa-solid ${d.icon}"></i>`;
    }
    this._programs = (d.programs || []).map(p => typeof p === 'string' ? {ar:p, en:''} : p);
    this._renderPrograms();
    Modal.open('deptModal');
  },

  previewIcon(val) {
    const el = document.getElementById('deptIconPreview');
    if (el) el.innerHTML = val ? `<i class="fa-solid ${val.replace(/^fa-solid\s+/,'')}"></i>` : '<i class="fa-solid fa-building-columns"></i>';
  },

  previewImg(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById('deptImgThumb').src = e.target.result;
      document.getElementById('deptImgPreview').style.display = 'block';
    };
    reader.readAsDataURL(file);
  },

  addProgram() {
    const ar = document.getElementById('newProgAr').value.trim();
    const en = document.getElementById('newProgEn').value.trim();
    if (!ar) { Toast.show('أدخل اسم البرنامج بالعربية', 'warning'); return; }
    this._programs.push({ ar, en });
    document.getElementById('newProgAr').value = '';
    document.getElementById('newProgEn').value = '';
    this._renderPrograms();
  },

  removeProgram(idx) {
    this._programs.splice(idx, 1);
    this._renderPrograms();
  },

  _renderPrograms() {
    const el = document.getElementById('programsList');
    if (!el) return;
    if (!this._programs.length) { el.innerHTML = '<p style="color:var(--text-m);font-size:13px;padding:6px 0">لا توجد برامج مضافة بعد</p>'; return; }
    el.innerHTML = this._programs.map((p, i) => `
      <div class="prog-item">
        <div class="prog-item-text">
          <span class="prog-ar">${p.ar}</span>
          ${p.en ? `<span class="prog-en">${p.en}</span>` : ''}
        </div>
        <button type="button" class="iab iab-del" onclick="Departments.removeProgram(${i})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('');
  },

  async save() {
    const id = document.getElementById('deptId').value;
    const nameAr = document.getElementById('deptNameAr').value.trim();
    if (!nameAr) { Toast.show('اسم الكلية بالعربية مطلوب', 'warning'); return; }
    btnLoading('deptSaveBtn', true);

    const fd = new FormData();
    fd.append('name[ar]',        nameAr);
    fd.append('name[en]',        document.getElementById('deptNameEn').value);
    fd.append('description[ar]', document.getElementById('deptDescAr').value);
    fd.append('description[en]', document.getElementById('deptDescEn').value);
    fd.append('slug',            document.getElementById('deptSlug').value || nameAr.replace(/\s+/g,'-').replace(/[^\w-]/g,''));
    fd.append('icon',            document.getElementById('deptIcon').value);
    fd.append('badge[ar]',       document.getElementById('deptBadgeAr').value);
    fd.append('badge[en]',       document.getElementById('deptBadgeEn').value);
    fd.append('studentsCount',   parseInt(document.getElementById('deptStudents').value) || 0);
    fd.append('programsCount',   parseInt(document.getElementById('deptPrograms').value) || this._programs.length);
    fd.append('durationYears',   parseInt(document.getElementById('deptYears').value) || 4);
    fd.append('contact[email]',  document.getElementById('deptEmail').value);
    fd.append('contact[phone]',  document.getElementById('deptPhone').value);
    fd.append('programs',        JSON.stringify(this._programs));
    const img = document.getElementById('deptImage').files[0];
    if (img) fd.append('image', img);

    const res = id
      ? await Http.putFD(`/departments/${id}`, fd)
      : await Http.postFD('/departments', fd);

    btnLoading('deptSaveBtn', false);

    /* In demo mode: simulate success locally */
    if (C.DEMO_MODE) {
      if (id) {
        const idx = MOCK.departments.findIndex(x => x._id === id);
        if (idx !== -1) {
          MOCK.departments[idx] = { ...MOCK.departments[idx],
            name: { ar: document.getElementById('deptNameAr').value, en: document.getElementById('deptNameEn').value },
            description: { ar: document.getElementById('deptDescAr').value, en: document.getElementById('deptDescEn').value },
            slug: document.getElementById('deptSlug').value,
            icon: document.getElementById('deptIcon').value,
            badge: { ar: document.getElementById('deptBadgeAr').value, en: document.getElementById('deptBadgeEn').value },
            studentsCount: parseInt(document.getElementById('deptStudents').value) || 0,
            programsCount: parseInt(document.getElementById('deptPrograms').value) || this._programs.length,
            durationYears: parseInt(document.getElementById('deptYears').value) || 4,
            contact: { email: document.getElementById('deptEmail').value, phone: document.getElementById('deptPhone').value },
            programs: this._programs,
          };
        }
      } else {
        const newId = 'd' + Date.now();
        MOCK.departments.push({
          _id: newId,
          name: { ar: document.getElementById('deptNameAr').value, en: document.getElementById('deptNameEn').value },
          description: { ar: document.getElementById('deptDescAr').value, en: document.getElementById('deptDescEn').value },
          slug: document.getElementById('deptSlug').value,
          icon: document.getElementById('deptIcon').value || 'fa-building-columns',
          badge: { ar: document.getElementById('deptBadgeAr').value, en: document.getElementById('deptBadgeEn').value },
          studentsCount: parseInt(document.getElementById('deptStudents').value) || 0,
          programsCount: parseInt(document.getElementById('deptPrograms').value) || this._programs.length,
          durationYears: parseInt(document.getElementById('deptYears').value) || 4,
          contact: { email: document.getElementById('deptEmail').value, phone: document.getElementById('deptPhone').value },
          programs: this._programs,
        });
      }
      Toast.show(id ? 'تم تحديث الكلية' : 'تم إضافة الكلية بنجاح');
      Modal.close('deptModal');
      this.render();
      return;
    }

    if (!res?.success) { Toast.show(res?.message || 'فشل الحفظ', 'error'); return; }
    Toast.show(id ? 'تم تحديث الكلية' : 'تم إضافة الكلية بنجاح');
    Modal.close('deptModal');
    this.render();
  },

  async delete(id) {
    if (!confirm('هل تريد حذف هذه الكلية نهائياً؟')) return;
    if (C.DEMO_MODE) {
      const idx = MOCK.departments.findIndex(x => x._id === id);
      if (idx !== -1) MOCK.departments.splice(idx, 1);
      Toast.show('تم حذف الكلية');
      this.render();
      return;
    }
    const res = await Http.del(`/departments/${id}`);
    if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
    Toast.show('تم حذف الكلية');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   FACULTY
══════════════════════════════════════════════ */
const FAC_TITLES = {
  professor:      'أستاذ',
  assoc_professor:'أستاذ مشارك',
  asst_professor: 'أستاذ مساعد',
  lecturer:       'مدرّس',
  instructor:     'مدرّس مساعد',
};

const Faculty = {
  _data:    [],
  _qualifs: [],
  _courses: [],
  _filter:  'all',

  setFilter(f) { this._filter = f; this.render(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/faculty');
    this._data = res?.data || [];
    const depts = MOCK.departments;

    const shown = this._filter === 'all' ? this._data : this._data.filter(f => f.deptId === this._filter);

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">الكادر التدريسي</h1>
          <p class="page-sub">${this._data.length} عضو هيئة تدريسية</p>
        </div>
        <div class="page-hd-actions">
          <button class="btn btn-primary" onclick="Faculty.openCreate()"><i class="fa-solid fa-user-plus"></i> إضافة عضو</button>
        </div>
      </div>
      <div class="card">
        <div class="ftabs" style="flex-wrap:wrap">
          <button class="ftab ${this._filter==='all'?'active':''}" onclick="Faculty.setFilter('all')">الكل (${this._data.length})</button>
          ${depts.map(d => {
            const cnt = this._data.filter(f => f.deptId === d._id).length;
            return `<button class="ftab ${this._filter===d._id?'active':''}" onclick="Faculty.setFilter('${d._id}')">${d.name.ar} (${cnt})</button>`;
          }).join('')}
        </div>
        ${shown.length ? `
        <div class="fac-grid">
          ${shown.map(f => {
            const dept = depts.find(d => d._id === f.deptId);
            return `
            <div class="fac-card">
              <div class="fac-card-photo">
                ${f.photo
                  ? `<img src="${f.photo}" alt="${f.name.ar}">`
                  : `<div class="fac-card-initials">${(f.name.ar||'?').split(' ').slice(-1)[0].charAt(0)}</div>`
                }
              </div>
              <div class="fac-card-body">
                <div class="fac-card-name">${f.name.ar}</div>
                <div class="fac-card-title">${FAC_TITLES[f.title]||f.title}</div>
                <div class="fac-card-spec">${f.specialization?.ar || '—'}</div>
                ${dept ? `<div class="fac-card-dept"><i class="fa-solid fa-building-columns"></i>${dept.name.ar}</div>` : ''}
                <div class="fac-card-contact">
                  <a href="mailto:${f.email}" title="${f.email}"><i class="fa-solid fa-envelope"></i></a>
                  ${f.phone ? `<a href="tel:${f.phone}" title="${f.phone}"><i class="fa-solid fa-phone"></i></a>` : ''}
                  <a href="faculty-profile.html?id=${f._id}" target="_blank" title="صفحة التدريسي"><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                </div>
              </div>
              <div class="fac-card-actions">
                <button class="iab iab-edit" onclick="Faculty.openEdit('${f._id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                <button class="iab iab-del"  onclick="Faculty.delete('${f._id}')"  title="حذف"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>`;
          }).join('')}
        </div>
        ` : emptyHTML('fa-chalkboard-user', 'لا يوجد أعضاء هيئة تدريسية في هذا القسم')}
      </div>
    `;

    document.getElementById('facultyForm')?.addEventListener('submit', e => { e.preventDefault(); Faculty.save(); });
  },

  _resetForm() {
    document.getElementById('facultyId').value  = '';
    document.getElementById('facNameAr').value  = '';
    document.getElementById('facNameEn').value  = '';
    document.getElementById('facTitle').value   = 'professor';
    document.getElementById('facSpecAr').value  = '';
    document.getElementById('facSpecEn').value  = '';
    document.getElementById('facEmail').value   = '';
    document.getElementById('facPhone').value   = '';
    document.getElementById('facBioAr').value   = '';
    document.getElementById('facBioEn').value   = '';
    document.getElementById('facultyPhoto').value = '';
    document.getElementById('facPhotoPreview').innerHTML = '<i class="fa-solid fa-user"></i>';
    /* populate dept select */
    const sel = document.getElementById('facDept');
    sel.innerHTML = MOCK.departments.map(d => `<option value="${d._id}">${d.name.ar}</option>`).join('');
    this._qualifs = [];
    this._courses = [];
    this._renderQualifs();
    this._renderCourses();
    document.getElementById('facultyForm').onsubmit = e => { e.preventDefault(); Faculty.save(); };
  },

  openCreate() {
    this._resetForm();
    document.getElementById('facultyModalTitle').textContent = 'إضافة عضو هيئة تدريسية';
    Modal.open('facultyModal');
  },

  openEdit(id) {
    const f = this._data.find(x => x._id === id);
    if (!f) return;
    this._resetForm();
    document.getElementById('facultyId').value  = id;
    document.getElementById('facultyModalTitle').textContent = 'تعديل: ' + (f.name?.ar || '');
    document.getElementById('facNameAr').value  = f.name?.ar || '';
    document.getElementById('facNameEn').value  = f.name?.en || '';
    document.getElementById('facTitle').value   = f.title || 'lecturer';
    document.getElementById('facDept').value    = f.deptId || '';
    document.getElementById('facSpecAr').value  = f.specialization?.ar || '';
    document.getElementById('facSpecEn').value  = f.specialization?.en || '';
    document.getElementById('facEmail').value   = f.email || '';
    document.getElementById('facPhone').value   = f.phone || '';
    document.getElementById('facBioAr').value   = f.bio?.ar || '';
    document.getElementById('facBioEn').value   = f.bio?.en || '';
    if (f.photo) {
      document.getElementById('facPhotoPreview').innerHTML = `<img src="${f.photo}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    }
    this._qualifs = JSON.parse(JSON.stringify(f.qualifications || []));
    this._courses = [...(f.courses || [])];
    this._renderQualifs();
    this._renderCourses();
    Modal.open('facultyModal');
  },

  previewPhoto(input) {
    const file = input.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      document.getElementById('facPhotoPreview').innerHTML = `<img src="${e.target.result}" style="width:100%;height:100%;object-fit:cover;border-radius:50%">`;
    };
    reader.readAsDataURL(file);
  },

  addQualif() {
    const degree = document.getElementById('newQualDegree').value.trim();
    const year   = parseInt(document.getElementById('newQualYear').value) || null;
    const univ   = document.getElementById('newQualUniv').value.trim();
    if (!degree) { Toast.show('أدخل الدرجة العلمية', 'warning'); return; }
    this._qualifs.push({ degree, year, university: univ });
    document.getElementById('newQualDegree').value = '';
    document.getElementById('newQualYear').value   = '';
    document.getElementById('newQualUniv').value   = '';
    this._renderQualifs();
  },

  removeQualif(idx) { this._qualifs.splice(idx, 1); this._renderQualifs(); },

  _renderQualifs() {
    const el = document.getElementById('qualifList');
    if (!el) return;
    if (!this._qualifs.length) { el.innerHTML = '<p style="color:var(--text-m);font-size:13px;padding:4px 0">لا توجد مؤهلات مضافة بعد</p>'; return; }
    el.innerHTML = this._qualifs.map((q, i) => `
      <div class="qualif-item">
        <i class="fa-solid fa-graduation-cap" style="color:var(--teal);margin-left:6px"></i>
        <div class="qualif-text">
          <strong>${q.degree}</strong>
          ${q.year ? ` · ${q.year}` : ''}
          ${q.university ? ` · ${q.university}` : ''}
        </div>
        <button type="button" class="iab iab-del" onclick="Faculty.removeQualif(${i})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('');
  },

  addCourse() {
    const v = document.getElementById('newCourse').value.trim();
    if (!v) { Toast.show('أدخل اسم المقرر', 'warning'); return; }
    this._courses.push(v);
    document.getElementById('newCourse').value = '';
    this._renderCourses();
  },

  removeCourse(idx) { this._courses.splice(idx, 1); this._renderCourses(); },

  _renderCourses() {
    const el = document.getElementById('coursesTags');
    if (!el) return;
    if (!this._courses.length) { el.innerHTML = '<p style="color:var(--text-m);font-size:13px">لا توجد مقررات مضافة بعد</p>'; return; }
    el.innerHTML = this._courses.map((c, i) => `
      <span class="course-tag">${c}<button type="button" onclick="Faculty.removeCourse(${i})"><i class="fa-solid fa-xmark"></i></button></span>
    `).join('');
  },

  async save() {
    const id     = document.getElementById('facultyId').value;
    const nameAr = document.getElementById('facNameAr').value.trim();
    if (!nameAr) { Toast.show('الاسم بالعربية مطلوب', 'warning'); return; }
    btnLoading('facSaveBtn', true);

    const data = {
      deptId:          document.getElementById('facDept').value,
      name:            { ar: nameAr, en: document.getElementById('facNameEn').value },
      title:           document.getElementById('facTitle').value,
      specialization:  { ar: document.getElementById('facSpecAr').value, en: document.getElementById('facSpecEn').value },
      email:           document.getElementById('facEmail').value,
      phone:           document.getElementById('facPhone').value,
      bio:             { ar: document.getElementById('facBioAr').value, en: document.getElementById('facBioEn').value },
      qualifications:  this._qualifs,
      courses:         this._courses,
    };

    if (C.DEMO_MODE) {
      if (id) {
        const idx = MOCK.faculty.findIndex(x => x._id === id);
        if (idx !== -1) MOCK.faculty[idx] = { ...MOCK.faculty[idx], ...data };
      } else {
        MOCK.faculty.push({ _id:'f'+Date.now(), photo:null, createdAt:new Date().toISOString(), ...data });
      }
      btnLoading('facSaveBtn', false);
      Toast.show(id ? 'تم تحديث بيانات التدريسي' : 'تم إضافة التدريسي بنجاح');
      Modal.close('facultyModal');
      this.render();
      return;
    }

    const fd = new FormData();
    Object.entries(data).forEach(([k,v]) => {
      if (typeof v === 'object' && !Array.isArray(v)) {
        Object.entries(v).forEach(([sk,sv]) => fd.append(`${k}[${sk}]`, sv));
      } else if (Array.isArray(v)) {
        fd.append(k, JSON.stringify(v));
      } else {
        fd.append(k, v);
      }
    });
    const photo = document.getElementById('facultyPhoto').files[0];
    if (photo) fd.append('photo', photo);

    const res = id ? await Http.putFD(`/faculty/${id}`, fd) : await Http.postFD('/faculty', fd);
    btnLoading('facSaveBtn', false);
    if (!res?.success) { Toast.show(res?.message || 'فشل الحفظ', 'error'); return; }
    Toast.show(id ? 'تم التحديث' : 'تم الإضافة');
    Modal.close('facultyModal');
    this.render();
  },

  async delete(id) {
    if (!confirm('حذف هذا التدريسي نهائياً؟')) return;
    if (C.DEMO_MODE) {
      const idx = MOCK.faculty.findIndex(x => x._id === id);
      if (idx !== -1) MOCK.faculty.splice(idx, 1);
      Toast.show('تم الحذف');
      this.render();
      return;
    }
    const res = await Http.del(`/faculty/${id}`);
    if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
    Toast.show('تم الحذف');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   IDENTITY (Vision, Mission, Goals, Values)
══════════════════════════════════════════════ */
const Identity = {
  _data:   null,
  _goals:  [],
  _values: [],
  _tab:    'vmc',

  setTab(t) { this._tab = t; this._renderTabs(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/vmc');
    this._data   = res?.data || MOCK.vmc;
    this._goals  = JSON.parse(JSON.stringify(this._data.goals  || []));
    this._values = JSON.parse(JSON.stringify(this._data.values || []));

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">الهوية المؤسسية</h1>
          <p class="page-sub">إدارة الرؤية والرسالة والأهداف والقيم</p>
        </div>
      </div>
      <div class="card" style="overflow:visible">
        <div class="ftabs">
          <button class="ftab ${this._tab==='vmc'   ?'active':''}" onclick="Identity.setTab('vmc')"><i class="fa-solid fa-eye"></i> الرؤية والرسالة</button>
          <button class="ftab ${this._tab==='goals' ?'active':''}" onclick="Identity.setTab('goals')"><i class="fa-solid fa-bullseye"></i> الأهداف الاستراتيجية</button>
          <button class="ftab ${this._tab==='values'?'active':''}" onclick="Identity.setTab('values')"><i class="fa-solid fa-star"></i> القيم المؤسسية</button>
        </div>
        <div id="identityTabContent" style="padding:20px 0 4px"></div>
      </div>
    `;
    this._renderTabs();
  },

  _renderTabs() {
    const el = document.getElementById('identityTabContent');
    if (!el) return;
    if (this._tab === 'vmc') {
      el.innerHTML = `
        <div class="vmc-grid">
          <div class="vmc-block">
            <div class="vmc-block-head"><i class="fa-solid fa-eye"></i> الرؤية</div>
            <div class="fg">
              <label class="fl">الرؤية بالعربية</label>
              <textarea class="fi fta" id="vmcVisionAr" rows="4">${this._data?.vision?.ar||''}</textarea>
            </div>
            <div class="fg" style="margin-top:12px">
              <label class="fl">Vision in English</label>
              <textarea class="fi fta" id="vmcVisionEn" rows="4" dir="ltr">${this._data?.vision?.en||''}</textarea>
            </div>
          </div>
          <div class="vmc-block">
            <div class="vmc-block-head"><i class="fa-solid fa-flag"></i> الرسالة</div>
            <div class="fg">
              <label class="fl">الرسالة بالعربية</label>
              <textarea class="fi fta" id="vmcMissionAr" rows="4">${this._data?.mission?.ar||''}</textarea>
            </div>
            <div class="fg" style="margin-top:12px">
              <label class="fl">Mission in English</label>
              <textarea class="fi fta" id="vmcMissionEn" rows="4" dir="ltr">${this._data?.mission?.en||''}</textarea>
            </div>
          </div>
        </div>
        <div style="display:flex;justify-content:flex-start;margin-top:20px">
          <button class="btn btn-primary" onclick="Identity.saveVmc()"><i class="fa-solid fa-floppy-disk"></i> حفظ الرؤية والرسالة</button>
        </div>
      `;
    } else if (this._tab === 'goals') {
      el.innerHTML = `
        <div class="goals-list" id="goalsList"></div>
        <div class="goal-add-row" style="margin-top:16px">
          <input type="text" class="fi" id="newGoalAr" placeholder="الهدف بالعربية" style="flex:1.5">
          <input type="text" class="fi" id="newGoalEn" placeholder="Goal in English" dir="ltr" style="flex:1.5">
          <button class="btn btn-outline" onclick="Identity.addGoal()"><i class="fa-solid fa-plus"></i> إضافة</button>
        </div>
        <div style="display:flex;justify-content:flex-start;margin-top:16px">
          <button class="btn btn-primary" onclick="Identity.saveGoals()"><i class="fa-solid fa-floppy-disk"></i> حفظ الأهداف</button>
        </div>
      `;
      this._renderGoals();
    } else if (this._tab === 'values') {
      el.innerHTML = `
        <div class="values-grid" id="valuesList"></div>
        <div class="value-add-row" style="margin-top:16px">
          <input type="text" class="fi" id="newValIcon" placeholder="أيقونة FA (fa-star)" dir="ltr" style="flex:1">
          <input type="text" class="fi" id="newValAr"   placeholder="اسم القيمة بالعربية" style="flex:1.2">
          <input type="text" class="fi" id="newValEn"   placeholder="Value in English" dir="ltr" style="flex:1.2">
          <button class="btn btn-outline" onclick="Identity.addValue()"><i class="fa-solid fa-plus"></i> إضافة</button>
        </div>
        <div style="display:flex;justify-content:flex-start;margin-top:16px">
          <button class="btn btn-primary" onclick="Identity.saveValues()"><i class="fa-solid fa-floppy-disk"></i> حفظ القيم</button>
        </div>
      `;
      this._renderValues();
    }
  },

  saveVmc() {
    if (!this._data) return;
    this._data.vision  = { ar: document.getElementById('vmcVisionAr').value,  en: document.getElementById('vmcVisionEn').value  };
    this._data.mission = { ar: document.getElementById('vmcMissionAr').value, en: document.getElementById('vmcMissionEn').value };
    MOCK.vmc.vision  = this._data.vision;
    MOCK.vmc.mission = this._data.mission;
    Toast.show('تم حفظ الرؤية والرسالة');
  },

  addGoal() {
    const ar = document.getElementById('newGoalAr').value.trim();
    const en = document.getElementById('newGoalEn').value.trim();
    if (!ar) { Toast.show('أدخل الهدف بالعربية', 'warning'); return; }
    this._goals.push({ ar, en });
    document.getElementById('newGoalAr').value = '';
    document.getElementById('newGoalEn').value = '';
    this._renderGoals();
  },

  removeGoal(idx) { this._goals.splice(idx, 1); this._renderGoals(); },

  _renderGoals() {
    const el = document.getElementById('goalsList');
    if (!el) return;
    if (!this._goals.length) { el.innerHTML = `<p style="color:var(--text-m);font-size:13px">لا توجد أهداف مضافة</p>`; return; }
    el.innerHTML = this._goals.map((g, i) => `
      <div class="goal-item">
        <span class="goal-num">${i+1}</span>
        <div class="goal-text">
          <div>${g.ar}</div>
          ${g.en ? `<div class="goal-en">${g.en}</div>` : ''}
        </div>
        <button class="iab iab-del" onclick="Identity.removeGoal(${i})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('');
  },

  saveGoals() {
    MOCK.vmc.goals = JSON.parse(JSON.stringify(this._goals));
    Toast.show('تم حفظ الأهداف الاستراتيجية');
  },

  addValue() {
    const icon = document.getElementById('newValIcon').value.trim() || 'fa-circle';
    const ar   = document.getElementById('newValAr').value.trim();
    const en   = document.getElementById('newValEn').value.trim();
    if (!ar) { Toast.show('أدخل اسم القيمة بالعربية', 'warning'); return; }
    this._values.push({ icon, ar, en });
    document.getElementById('newValIcon').value = '';
    document.getElementById('newValAr').value   = '';
    document.getElementById('newValEn').value   = '';
    this._renderValues();
  },

  removeValue(idx) { this._values.splice(idx, 1); this._renderValues(); },

  _renderValues() {
    const el = document.getElementById('valuesList');
    if (!el) return;
    if (!this._values.length) { el.innerHTML = `<p style="color:var(--text-m);font-size:13px">لا توجد قيم مضافة</p>`; return; }
    el.innerHTML = this._values.map((v, i) => `
      <div class="value-card">
        <div class="value-card-icon"><i class="fa-solid ${v.icon||'fa-star'}"></i></div>
        <div class="value-card-text">
          <div class="value-card-ar">${v.ar}</div>
          ${v.en ? `<div class="value-card-en">${v.en}</div>` : ''}
        </div>
        <button class="iab iab-del" onclick="Identity.removeValue(${i})"><i class="fa-solid fa-xmark"></i></button>
      </div>
    `).join('');
  },

  saveValues() {
    MOCK.vmc.values = JSON.parse(JSON.stringify(this._values));
    Toast.show('تم حفظ القيم المؤسسية');
  },
};

/* ══════════════════════════════════════════════
   ORG CHART
══════════════════════════════════════════════ */
const OrgChart = {
  _data: [],

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/orgchart');
    this._data = res?.data || [];

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">الهيكل التنظيمي</h1>
          <p class="page-sub">${this._data.length} وحدة تنظيمية</p>
        </div>
        <div class="page-hd-actions">
          <button class="btn btn-primary" onclick="OrgChart.openCreate()"><i class="fa-solid fa-plus"></i> إضافة وحدة</button>
        </div>
      </div>
      <div class="card">
        <div class="org-tree-wrap">
          <div class="org-tree">
            ${this._renderLevel(null)}
          </div>
        </div>
      </div>
      <div class="card" style="margin-top:16px">
        <div class="card-hd"><span class="card-title"><i class="fa-solid fa-list"></i> جميع الوحدات</span></div>
        <div class="dt-wrap">
          <table class="dt">
            <thead><tr><th>الوحدة</th><th>الدور</th><th>الشخص المسؤول</th><th>تابع لـ</th><th></th></tr></thead>
            <tbody>
              ${this._data.map(n => {
                const parent = this._data.find(x => x._id === n.parentId);
                return `
                <tr>
                  <td style="font-weight:600;color:var(--text)">${n.name.ar}</td>
                  <td style="color:var(--text-s);font-size:13px">${n.role?.ar||'—'}</td>
                  <td>${n.holder || badge('—','gray')}</td>
                  <td style="color:var(--text-m);font-size:13px">${parent ? parent.name.ar : badge('جذر','info')}</td>
                  <td>
                    <div class="action-grp">
                      <button class="iab iab-edit" onclick="OrgChart.openEdit('${n._id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                      <button class="iab iab-del"  onclick="OrgChart.delete('${n._id}')"   title="حذف"><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;

    document.getElementById('orgNodeForm')?.addEventListener('submit', e => { e.preventDefault(); OrgChart.save(); });
  },

  _renderLevel(parentId, depth = 0) {
    const children = this._data.filter(n => n.parentId === parentId);
    if (!children.length) return '';
    return children.map(n => `
      <div class="org-node-wrap" style="--depth:${depth}">
        <div class="org-node ${depth === 0 ? 'org-node-root' : depth === 1 ? 'org-node-l1' : ''}">
          <div class="org-node-name">${n.name.ar}</div>
          ${n.holder ? `<div class="org-node-holder"><i class="fa-solid fa-user"></i>${n.holder}</div>` : ''}
          ${n.role?.ar ? `<div class="org-node-role">${n.role.ar}</div>` : ''}
          <div class="org-node-actions">
            <button class="org-node-btn" onclick="OrgChart.openEdit('${n._id}')"><i class="fa-solid fa-pen"></i></button>
            <button class="org-node-btn org-node-btn-del" onclick="OrgChart.delete('${n._id}')"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
        ${this._data.some(x => x.parentId === n._id) ? `
          <div class="org-children">
            ${this._renderLevel(n._id, depth + 1)}
          </div>
        ` : ''}
      </div>
    `).join('');
  },

  _populateParent(currentId) {
    const sel = document.getElementById('orgNodeParent');
    sel.innerHTML = '<option value="">— لا يوجد (وحدة جذر) —</option>';
    this._data.filter(n => n._id !== currentId).forEach(n => {
      sel.innerHTML += `<option value="${n._id}">${n.name.ar}</option>`;
    });
  },

  openCreate() {
    document.getElementById('orgNodeId').value       = '';
    document.getElementById('orgNodeTitle').textContent = 'إضافة وحدة تنظيمية';
    document.getElementById('orgNodeNameAr').value   = '';
    document.getElementById('orgNodeNameEn').value   = '';
    document.getElementById('orgNodeRoleAr').value   = '';
    document.getElementById('orgNodeRoleEn').value   = '';
    document.getElementById('orgNodeHolder').value   = '';
    this._populateParent(null);
    document.getElementById('orgNodeForm').onsubmit = e => { e.preventDefault(); OrgChart.save(); };
    Modal.open('orgNodeModal');
  },

  openEdit(id) {
    const n = this._data.find(x => x._id === id);
    if (!n) return;
    document.getElementById('orgNodeId').value       = id;
    document.getElementById('orgNodeTitle').textContent = 'تعديل: ' + (n.name?.ar || '');
    document.getElementById('orgNodeNameAr').value   = n.name?.ar || '';
    document.getElementById('orgNodeNameEn').value   = n.name?.en || '';
    document.getElementById('orgNodeRoleAr').value   = n.role?.ar || '';
    document.getElementById('orgNodeRoleEn').value   = n.role?.en || '';
    document.getElementById('orgNodeHolder').value   = n.holder   || '';
    this._populateParent(id);
    document.getElementById('orgNodeParent').value   = n.parentId || '';
    document.getElementById('orgNodeForm').onsubmit  = e => { e.preventDefault(); OrgChart.save(); };
    Modal.open('orgNodeModal');
  },

  async save() {
    const id     = document.getElementById('orgNodeId').value;
    const nameAr = document.getElementById('orgNodeNameAr').value.trim();
    if (!nameAr) { Toast.show('الاسم بالعربية مطلوب', 'warning'); return; }
    btnLoading('orgNodeSaveBtn', true);

    const data = {
      name:     { ar: nameAr, en: document.getElementById('orgNodeNameEn').value },
      role:     { ar: document.getElementById('orgNodeRoleAr').value, en: document.getElementById('orgNodeRoleEn').value },
      holder:   document.getElementById('orgNodeHolder').value,
      parentId: document.getElementById('orgNodeParent').value || null,
    };

    if (C.DEMO_MODE) {
      if (id) {
        const idx = MOCK.orgChart.findIndex(x => x._id === id);
        if (idx !== -1) MOCK.orgChart[idx] = { ...MOCK.orgChart[idx], ...data };
      } else {
        MOCK.orgChart.push({ _id:'o'+Date.now(), ...data });
      }
      btnLoading('orgNodeSaveBtn', false);
      Toast.show(id ? 'تم تحديث الوحدة' : 'تم إضافة الوحدة');
      Modal.close('orgNodeModal');
      this.render();
      return;
    }

    const res = id ? await Http.put(`/orgchart/${id}`, data) : await Http.post('/orgchart', data);
    btnLoading('orgNodeSaveBtn', false);
    if (!res?.success) { Toast.show(res?.message || 'فشل الحفظ', 'error'); return; }
    Toast.show(id ? 'تم التحديث' : 'تم الإضافة');
    Modal.close('orgNodeModal');
    this.render();
  },

  async delete(id) {
    const hasChildren = this._data.some(x => x.parentId === id);
    if (hasChildren && !confirm('هذه الوحدة لديها وحدات فرعية. هل تريد حذفها أيضاً؟')) return;
    if (!hasChildren && !confirm('حذف هذه الوحدة التنظيمية نهائياً؟')) return;
    if (C.DEMO_MODE) {
      const remove = (nid) => {
        this._data.filter(x => x.parentId === nid).forEach(c => remove(c._id));
        const idx = MOCK.orgChart.findIndex(x => x._id === nid);
        if (idx !== -1) MOCK.orgChart.splice(idx, 1);
      };
      remove(id);
      Toast.show('تم الحذف');
      this.render();
      return;
    }
    const res = await Http.del(`/orgchart/${id}`);
    if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
    Toast.show('تم الحذف');
    this.render();
  },
};

/* ══════════════════════════════════════════════
   DEPT INFO (College Admission Details)
══════════════════════════════════════════════ */
const DeptInfo = {
  _deptId:  null,
  _reqs:    [],
  _docs:    [],

  open(deptId, deptName) {
    this._deptId = deptId;
    document.getElementById('deptInfoId').value = deptId;
    document.getElementById('deptInfoModalTitle').textContent = `شروط القبول — ${deptName}`;

    const info = MOCK.deptInfo[deptId] || { minScore:'', seatsPerYear:'', annualFee:'', requirements:[], documents:[], notes:{ar:'',en:''} };
    document.getElementById('diMinScore').value = info.minScore     || '';
    document.getElementById('diSeats').value    = info.seatsPerYear || '';
    document.getElementById('diFee').value      = info.annualFee    || '';
    document.getElementById('diNotesAr').value  = info.notes?.ar    || '';
    document.getElementById('diNotesEn').value  = info.notes?.en    || '';

    this._reqs = JSON.parse(JSON.stringify(info.requirements || []));
    this._docs = JSON.parse(JSON.stringify(info.documents    || []));
    this._renderReqs();
    this._renderDocs();
    Modal.open('deptInfoModal');
  },

  addReq() {
    const ar = document.getElementById('diNewReqAr').value.trim();
    const en = document.getElementById('diNewReqEn').value.trim();
    if (!ar) { Toast.show('أدخل الشرط بالعربية', 'warning'); return; }
    this._reqs.push({ ar, en });
    document.getElementById('diNewReqAr').value = '';
    document.getElementById('diNewReqEn').value = '';
    this._renderReqs();
  },

  removeReq(i) { this._reqs.splice(i, 1); this._renderReqs(); },

  _renderReqs() {
    const el = document.getElementById('diReqList');
    if (!el) return;
    if (!this._reqs.length) { el.innerHTML = '<p style="color:var(--text-m);font-size:13px;padding:4px 0">لا توجد شروط مضافة</p>'; return; }
    el.innerHTML = this._reqs.map((r, i) => `
      <div class="req-item">
        <i class="fa-solid fa-check-circle" style="color:var(--teal);flex-shrink:0"></i>
        <div class="req-text"><span>${r.ar}</span>${r.en?`<span class="req-en">${r.en}</span>`:''}</div>
        <button type="button" class="iab iab-del" onclick="DeptInfo.removeReq(${i})"><i class="fa-solid fa-xmark"></i></button>
      </div>`).join('');
  },

  addDoc() {
    const ar = document.getElementById('diNewDocAr').value.trim();
    const en = document.getElementById('diNewDocEn').value.trim();
    if (!ar) { Toast.show('أدخل الوثيقة بالعربية', 'warning'); return; }
    this._docs.push({ ar, en });
    document.getElementById('diNewDocAr').value = '';
    document.getElementById('diNewDocEn').value = '';
    this._renderDocs();
  },

  removeDoc(i) { this._docs.splice(i, 1); this._renderDocs(); },

  _renderDocs() {
    const el = document.getElementById('diDocList');
    if (!el) return;
    if (!this._docs.length) { el.innerHTML = '<p style="color:var(--text-m);font-size:13px;padding:4px 0">لا توجد وثائق مضافة</p>'; return; }
    el.innerHTML = this._docs.map((d, i) => `
      <div class="req-item">
        <i class="fa-solid fa-file-alt" style="color:var(--gold);flex-shrink:0"></i>
        <div class="req-text"><span>${d.ar}</span>${d.en?`<span class="req-en">${d.en}</span>`:''}</div>
        <button type="button" class="iab iab-del" onclick="DeptInfo.removeDoc(${i})"><i class="fa-solid fa-xmark"></i></button>
      </div>`).join('');
  },

  save() {
    const id = this._deptId;
    if (!id) return;
    btnLoading('deptInfoSaveBtn', true);
    const data = {
      minScore:     parseInt(document.getElementById('diMinScore').value) || 0,
      seatsPerYear: parseInt(document.getElementById('diSeats').value)    || 0,
      annualFee:    document.getElementById('diFee').value,
      requirements: this._reqs,
      documents:    this._docs,
      notes: { ar: document.getElementById('diNotesAr').value, en: document.getElementById('diNotesEn').value },
    };
    MOCK.deptInfo[id] = data;
    btnLoading('deptInfoSaveBtn', false);
    Toast.show('تم حفظ معلومات القبول');
    Modal.close('deptInfoModal');
  },
};

/* ══════════════════════════════════════════════
   ADMINS SECTION
══════════════════════════════════════════════ */
const ADMIN_ROLES = { superadmin:'مدير عام', admin:'مدير', moderator:'مشرف' };
const ROLE_HINTS  = {
  superadmin: 'مدير عام: صلاحيات كاملة بما فيها إدارة المدراء الآخرين.',
  admin:      'مدير: صلاحيات إدارة المحتوى كاملة دون إدارة المدراء.',
  moderator:  'مشرف: صلاحيات مشاهدة ومراجعة المحتوى فقط.',
};

const AdminsSection = {
  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/admins');
    const all = res?.data || [];

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">مدراء النظام</h1>
          <p class="page-sub">${all.length} مدير</p>
        </div>
        <div class="page-hd-actions">
          <button class="btn btn-primary" onclick="AdminsSection.openCreate()"><i class="fa-solid fa-user-plus"></i> إضافة مدير</button>
        </div>
      </div>
      <div class="card">
        <div class="dt-wrap">
          <table class="dt">
            <thead><tr><th>اسم المستخدم</th><th>الدور</th><th>آخر دخول</th><th>تاريخ الإنشاء</th><th></th></tr></thead>
            <tbody>
              ${all.map(a => `
                <tr>
                  <td>
                    <div style="display:flex;align-items:center;gap:10px">
                      <div class="admin-avatar">${a.username.charAt(0).toUpperCase()}</div>
                      <span style="font-weight:700;color:var(--text);font-family:'Outfit',sans-serif">${a.username}</span>
                    </div>
                  </td>
                  <td>${badge(ADMIN_ROLES[a.role]||a.role, a.role==='superadmin'?'danger':a.role==='admin'?'info':'gray')}</td>
                  <td style="font-size:12.5px;color:var(--text-m)">${fmt.date(a.lastLogin)}</td>
                  <td style="font-size:12.5px;color:var(--text-m)">${fmt.date(a.createdAt)}</td>
                  <td>
                    <div class="action-grp">
                      <button class="iab iab-edit" onclick="AdminsSection.openEdit('${a._id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                      <button class="iab iab-del"  onclick="AdminsSection.delete('${a._id}')"  title="حذف" ${a._id==='adm1'?'disabled title="لا يمكن حذف الحساب الافتراضي"':''}><i class="fa-solid fa-trash"></i></button>
                    </div>
                  </td>
                </tr>`).join('')}
            </tbody>
          </table>
        </div>
      </div>
      <div class="info-box" style="margin-top:16px">
        <i class="fa-solid fa-shield-halved"></i>
        <span>الحسابات في وضع العرض التجريبي — التغييرات محلية ولا تؤثر على قاعدة البيانات الفعلية.</span>
      </div>
    `;

    document.getElementById('adminForm')?.addEventListener('submit', e => { e.preventDefault(); AdminsSection.save(); });
  },

  _resetForm(isEdit = false) {
    document.getElementById('adminId').value       = '';
    document.getElementById('adminUsername').value = '';
    document.getElementById('adminPassword').value = '';
    document.getElementById('adminRole').value     = 'admin';
    document.getElementById('adminPassNote').style.display = isEdit ? 'inline' : 'none';
    document.getElementById('adminUsername').disabled = isEdit; /* can't change username on edit */
    AdminsSection._updateRoleHint('admin');
    document.getElementById('adminRole').onchange = () => AdminsSection._updateRoleHint(document.getElementById('adminRole').value);
    document.getElementById('adminForm').onsubmit = e => { e.preventDefault(); AdminsSection.save(); };
  },

  _updateRoleHint(role) {
    document.getElementById('adminRoleHintText').textContent = ROLE_HINTS[role] || '';
  },

  openCreate() {
    this._resetForm(false);
    document.getElementById('adminModalTitle').textContent = 'إضافة مدير جديد';
    Modal.open('adminModal');
  },

  openEdit(id) {
    const a = MOCK.admins.find(x => x._id === id);
    if (!a) return;
    this._resetForm(true);
    document.getElementById('adminId').value       = id;
    document.getElementById('adminModalTitle').textContent = `تعديل: ${a.username}`;
    document.getElementById('adminUsername').value = a.username;
    document.getElementById('adminRole').value     = a.role;
    AdminsSection._updateRoleHint(a.role);
    Modal.open('adminModal');
  },

  save() {
    const id       = document.getElementById('adminId').value;
    const username = document.getElementById('adminUsername').value.trim();
    const password = document.getElementById('adminPassword').value;
    const role     = document.getElementById('adminRole').value;

    if (!username) { Toast.show('اسم المستخدم مطلوب', 'warning'); return; }
    if (!id && !password) { Toast.show('كلمة المرور مطلوبة للحساب الجديد', 'warning'); return; }

    btnLoading('adminSaveBtn', true);

    if (C.DEMO_MODE) {
      if (id) {
        const idx = MOCK.admins.findIndex(x => x._id === id);
        if (idx !== -1) MOCK.admins[idx] = { ...MOCK.admins[idx], role };
      } else {
        if (MOCK.admins.find(x => x.username === username)) {
          btnLoading('adminSaveBtn', false);
          Toast.show('اسم المستخدم مستخدم بالفعل', 'error'); return;
        }
        MOCK.admins.push({ _id:'adm'+Date.now(), username, role, lastLogin:null, createdAt:new Date().toISOString() });
      }
      btnLoading('adminSaveBtn', false);
      Toast.show(id ? 'تم تحديث الحساب' : 'تم إنشاء الحساب');
      Modal.close('adminModal');
      this.render();
      return;
    }
    const body = { username, role };
    if (password) body.password = password;
    const p = id ? Http.put(`/admins/${id}`, body) : Http.post('/admins', body);
    p.then(res => {
      btnLoading('adminSaveBtn', false);
      if (!res?.success) { Toast.show(res?.message || 'فشل الحفظ', 'error'); return; }
      Toast.show(id ? 'تم التحديث' : 'تم الإنشاء');
      Modal.close('adminModal');
      this.render();
    });
  },

  delete(id) {
    if (id === 'adm1') { Toast.show('لا يمكن حذف الحساب الافتراضي', 'error'); return; }
    if (!confirm('حذف هذا المدير نهائياً؟')) return;
    if (C.DEMO_MODE) {
      const idx = MOCK.admins.findIndex(x => x._id === id);
      if (idx !== -1) MOCK.admins.splice(idx, 1);
      Toast.show('تم الحذف');
      this.render();
      return;
    }
    Http.del(`/admins/${id}`).then(res => {
      if (!res?.success) { Toast.show('فشل الحذف', 'error'); return; }
      Toast.show('تم الحذف');
      this.render();
    });
  },
};

/* ══════════════════════════════════════════════
   STUDENTS CONTENT
══════════════════════════════════════════════ */
const StudentsContent = {
  _data: null,
  _anns: [],
  _links: [],
  _tab: 'hero',

  setTab(t) { this._tab = t; this._renderTabs(); },

  async render() {
    const mc = document.getElementById('mainContent');
    mc.innerHTML = loadingHTML();
    const res = await Http.get('/students-content');
    this._data  = res?.data || MOCK.studentsContent;
    this._anns  = JSON.parse(JSON.stringify(this._data.announcements || []));
    this._links = JSON.parse(JSON.stringify(this._data.links         || []));

    mc.innerHTML = `
      <div class="page-hd">
        <div class="page-hd-text">
          <h1 class="page-title">محتوى صفحة الطلاب</h1>
          <p class="page-sub">إدارة محتوى البوابة الطلابية</p>
        </div>
        <div class="page-hd-actions">
          <a href="../students.html" target="_blank" class="btn btn-outline"><i class="fa-solid fa-arrow-up-right-from-square"></i> معاينة الصفحة</a>
        </div>
      </div>
      <div class="card" style="overflow:visible">
        <div class="ftabs">
          <button class="ftab ${this._tab==='hero' ?'active':''}" onclick="StudentsContent.setTab('hero')"><i class="fa-solid fa-image"></i> إعدادات الصفحة</button>
          <button class="ftab ${this._tab==='anns' ?'active':''}" onclick="StudentsContent.setTab('anns')"><i class="fa-solid fa-bullhorn"></i> الإعلانات (${this._anns.length})</button>
          <button class="ftab ${this._tab==='links'?'active':''}" onclick="StudentsContent.setTab('links')"><i class="fa-solid fa-link"></i> الروابط السريعة (${this._links.length})</button>
        </div>
        <div id="scTabContent" style="padding:20px 0 4px"></div>
      </div>
    `;
    this._renderTabs();

    document.getElementById('announcementForm')?.addEventListener('submit', e => { e.preventDefault(); StudentsContent.saveAnn(); });
    document.getElementById('linkForm')?.addEventListener('submit', e => { e.preventDefault(); StudentsContent.saveLink(); });
  },

  _renderTabs() {
    const el = document.getElementById('scTabContent');
    if (!el) return;
    if (this._tab === 'hero') {
      el.innerHTML = `
        <div class="modal-section-label">بيانات رأس الصفحة (Hero)</div>
        <div class="fg2">
          <div class="fg"><label class="fl">العنوان الرئيسي بالعربية</label><input type="text" class="fi" id="scTitleAr" value="${this._data?.hero?.titleAr||''}"></div>
          <div class="fg"><label class="fl">Main Title in English</label><input type="text" class="fi" id="scTitleEn" value="${this._data?.hero?.titleEn||''}" dir="ltr"></div>
        </div>
        <div class="fg2">
          <div class="fg"><label class="fl">الوصف بالعربية</label><textarea class="fi fta" id="scSubAr" rows="2">${this._data?.hero?.subtitleAr||''}</textarea></div>
          <div class="fg"><label class="fl">Subtitle in English</label><textarea class="fi fta" id="scSubEn" rows="2" dir="ltr">${this._data?.hero?.subtitleEn||''}</textarea></div>
        </div>
        <button class="btn btn-primary" style="margin-top:16px" onclick="StudentsContent.saveHero()"><i class="fa-solid fa-floppy-disk"></i> حفظ إعدادات الصفحة</button>
      `;
    } else if (this._tab === 'anns') {
      el.innerHTML = `
        <div style="display:flex;justify-content:flex-end;margin-bottom:12px">
          <button class="btn btn-primary" onclick="StudentsContent.openCreateAnn()"><i class="fa-solid fa-plus"></i> إعلان جديد</button>
        </div>
        ${this._anns.length ? `
        <div class="dt-wrap"><table class="dt">
          <thead><tr><th>الإعلان</th><th>التاريخ</th><th>الأهمية</th><th></th></tr></thead>
          <tbody>
            ${this._anns.map(a => `
              <tr>
                <td style="font-weight:600;color:var(--text)">${a.titleAr}</td>
                <td style="white-space:nowrap;font-size:12.5px">${fmt.date(a.date)}</td>
                <td>${a.important ? badge('هام','danger') : badge('عادي','gray')}</td>
                <td>
                  <div class="action-grp">
                    <button class="iab iab-edit" onclick="StudentsContent.openEditAnn('${a._id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                    <button class="iab iab-del"  onclick="StudentsContent.deleteAnn('${a._id}')"  title="حذف"><i class="fa-solid fa-trash"></i></button>
                  </div>
                </td>
              </tr>`).join('')}
          </tbody>
        </table></div>` : emptyHTML('fa-bullhorn','لا توجد إعلانات — أضف إعلاناً جديداً')}
      `;
    } else if (this._tab === 'links') {
      el.innerHTML = `
        <div style="display:flex;justify-content:flex-end;margin-bottom:12px">
          <button class="btn btn-primary" onclick="StudentsContent.openCreateLink()"><i class="fa-solid fa-plus"></i> رابط جديد</button>
        </div>
        ${this._links.length ? `
        <div class="sc-links-grid">
          ${this._links.map(lk => `
            <div class="sc-link-card">
              <div class="sc-link-icon"><i class="fa-solid ${lk.icon||'fa-link'}"></i></div>
              <div class="sc-link-title">${lk.titleAr}</div>
              <div class="sc-link-url">${lk.url||'—'}</div>
              <div class="sc-link-actions">
                <button class="iab iab-edit" onclick="StudentsContent.openEditLink('${lk._id}')" title="تعديل"><i class="fa-solid fa-pen"></i></button>
                <button class="iab iab-del"  onclick="StudentsContent.deleteLink('${lk._id}')"  title="حذف"><i class="fa-solid fa-trash"></i></button>
              </div>
            </div>`).join('')}
        </div>` : emptyHTML('fa-link','لا توجد روابط — أضف رابطاً جديداً')}
      `;
    }
  },

  saveHero() {
    if (!this._data) return;
    this._data.hero = {
      titleAr:    document.getElementById('scTitleAr').value,
      titleEn:    document.getElementById('scTitleEn').value,
      subtitleAr: document.getElementById('scSubAr').value,
      subtitleEn: document.getElementById('scSubEn').value,
    };
    MOCK.studentsContent.hero = this._data.hero;
    Toast.show('تم حفظ إعدادات الصفحة');
  },

  /* Announcements */
  openCreateAnn() {
    document.getElementById('annId').value       = '';
    document.getElementById('annModalTitle').textContent = 'إضافة إعلان';
    document.getElementById('annTitleAr').value  = '';
    document.getElementById('annDate').value     = new Date().toISOString().slice(0,10);
    document.getElementById('annImportant').checked = false;
    document.getElementById('announcementForm').onsubmit = e => { e.preventDefault(); StudentsContent.saveAnn(); };
    Modal.open('announcementModal');
  },

  openEditAnn(id) {
    const a = this._anns.find(x => x._id === id);
    if (!a) return;
    document.getElementById('annId').value       = id;
    document.getElementById('annModalTitle').textContent = 'تعديل الإعلان';
    document.getElementById('annTitleAr').value  = a.titleAr;
    document.getElementById('annDate').value     = a.date || '';
    document.getElementById('annImportant').checked = !!a.important;
    document.getElementById('announcementForm').onsubmit = e => { e.preventDefault(); StudentsContent.saveAnn(); };
    Modal.open('announcementModal');
  },

  saveAnn() {
    const id = document.getElementById('annId').value;
    const data = {
      titleAr:   document.getElementById('annTitleAr').value.trim(),
      date:      document.getElementById('annDate').value,
      important: document.getElementById('annImportant').checked,
    };
    if (!data.titleAr) { Toast.show('العنوان مطلوب', 'warning'); return; }
    if (id) {
      const idx = this._anns.findIndex(x => x._id === id);
      if (idx !== -1) this._anns[idx] = { ...this._anns[idx], ...data };
    } else {
      this._anns.unshift({ _id:'an'+Date.now(), ...data });
    }
    MOCK.studentsContent.announcements = this._anns;
    Toast.show(id ? 'تم تحديث الإعلان' : 'تم إضافة الإعلان');
    Modal.close('announcementModal');
    this._renderTabs();
  },

  deleteAnn(id) {
    if (!confirm('حذف هذا الإعلان؟')) return;
    this._anns = this._anns.filter(x => x._id !== id);
    MOCK.studentsContent.announcements = this._anns;
    Toast.show('تم الحذف');
    this._renderTabs();
  },

  /* Links */
  openCreateLink() {
    document.getElementById('linkId').value      = '';
    document.getElementById('linkModalTitle').textContent = 'إضافة رابط سريع';
    document.getElementById('linkTitleAr').value = '';
    document.getElementById('linkUrl').value     = '';
    document.getElementById('linkIcon').value    = '';
    document.getElementById('linkForm').onsubmit = e => { e.preventDefault(); StudentsContent.saveLink(); };
    Modal.open('linkModal');
  },

  openEditLink(id) {
    const lk = this._links.find(x => x._id === id);
    if (!lk) return;
    document.getElementById('linkId').value      = id;
    document.getElementById('linkModalTitle').textContent = 'تعديل الرابط';
    document.getElementById('linkTitleAr').value = lk.titleAr;
    document.getElementById('linkUrl').value     = lk.url     || '';
    document.getElementById('linkIcon').value    = lk.icon    || '';
    document.getElementById('linkForm').onsubmit = e => { e.preventDefault(); StudentsContent.saveLink(); };
    Modal.open('linkModal');
  },

  saveLink() {
    const id = document.getElementById('linkId').value;
    const data = {
      titleAr: document.getElementById('linkTitleAr').value.trim(),
      url:     document.getElementById('linkUrl').value,
      icon:    document.getElementById('linkIcon').value || 'fa-link',
    };
    if (!data.titleAr) { Toast.show('العنوان مطلوب', 'warning'); return; }
    if (id) {
      const idx = this._links.findIndex(x => x._id === id);
      if (idx !== -1) this._links[idx] = { ...this._links[idx], ...data };
    } else {
      this._links.push({ _id:'lk'+Date.now(), ...data });
    }
    MOCK.studentsContent.links = this._links;
    Toast.show(id ? 'تم تحديث الرابط' : 'تم إضافة الرابط');
    Modal.close('linkModal');
    this._renderTabs();
  },

  deleteLink(id) {
    if (!confirm('حذف هذا الرابط؟')) return;
    this._links = this._links.filter(x => x._id !== id);
    MOCK.studentsContent.links = this._links;
    Toast.show('تم الحذف');
    this._renderTabs();
  },
};

/* ══════════════════════════════════════════════
   SIDEBAR TOGGLE
══════════════════════════════════════════════ */
function toggleSidebar() {
  const sb      = document.getElementById('sidebar');
  const overlay = document.getElementById('sbOverlay');
  const isMobile = window.innerWidth <= 860;

  if (isMobile) {
    const open = sb.classList.toggle('mobile-open');
    overlay.classList.toggle('show', open);
  } else {
    sb.classList.toggle('collapsed');
  }
}

/* ══════════════════════════════════════════════
   DROPZONE FILE COUNT
══════════════════════════════════════════════ */
function updateDropzone() {
  const files = document.getElementById('galFiles').files;
  const el    = document.getElementById('galFilesCount');
  if (el) el.textContent = files.length ? `تم اختيار ${files.length} صورة` : '';
}

/* ══════════════════════════════════════════════
   DRAG & DROP
══════════════════════════════════════════════ */
function initDragDrop() {
  const dz = document.getElementById('galDropzone');
  if (!dz) return;
  dz.addEventListener('dragover', e => { e.preventDefault(); dz.style.borderColor = 'var(--teal)'; });
  dz.addEventListener('dragleave', () => { dz.style.borderColor = ''; });
  dz.addEventListener('drop', e => {
    e.preventDefault();
    dz.style.borderColor = '';
    const dt = new DataTransfer();
    Array.from(e.dataTransfer.files).filter(f => f.type.startsWith('image/')).forEach(f => dt.items.add(f));
    document.getElementById('galFiles').files = dt.files;
    updateDropzone();
  });
}

/* ══════════════════════════════════════════════
   APP INIT
══════════════════════════════════════════════ */
const App = {
  logout: Auth.logout,

  init() {
    Auth.check();

    /* Fill user info */
    const user = Auth.user();
    const initial = (user.username || 'A').charAt(0).toUpperCase();
    ['sbAvatar','tbAvatar'].forEach(id => { const el = document.getElementById(id); if (el) el.textContent = initial; });
    const un = document.getElementById('sbUserName');
    const ur = document.getElementById('sbUserRole');
    const tb = document.getElementById('tbUserName');
    if (un) un.textContent = user.username || 'مدير';
    if (ur) ur.textContent = user.role     || 'admin';
    if (tb) tb.textContent = user.username || 'أدمن';

    /* Close modal on backdrop click */
    document.querySelectorAll('.modal').forEach(m => {
      m.addEventListener('click', e => { if (e.target === m) Modal.close(m.id); });
    });

    /* Keyboard: Escape to close modal */
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        document.querySelectorAll('.modal.active').forEach(m => Modal.close(m.id));
      }
    });

    /* Init drag-drop for gallery (open when modal opens) */
    document.getElementById('galleryModal')?.addEventListener('click', () => { setTimeout(initDragDrop, 50); });

    /* Load default section */
    Router.go('overview');
  },
};

document.addEventListener('DOMContentLoaded', () => App.init());
