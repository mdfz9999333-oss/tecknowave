export type PageId = 'home' | 'about' | 'services' | 'departments' | 'projects' | 'clients' | 'contact';

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    services: string;
    departments: string;
    projects: string;
    clients: string;
    contact: string;
    requestQuote: string;
  };
  hero: {
    tagline: string;
    companyName: string;
    titleLine1: string;
    titleLine2: string;
    subTitle: string;
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;
    domain: string;
    location: string;
    stats: {
      divisions: string;
      divisionsLabel: string;
      turnkey: string;
      turnkeyLabel: string;
      clients: string;
      clientsLabel: string;
      hq: string;
      hqLabel: string;
    };
  };
  about: {
    badge: string;
    title: string;
    subtitle: string;
    whoWeAreTitle: string;
    whoWeAreDesc: string;
    whyChooseUsTitle: string;
    reasons: {
      title: string;
      desc: string;
    }[];
  };
  vision: {
    badge: string;
    title: string;
    subtitle: string;
    foundationsTitle: string;
    foundationsDesc: string;
    visionTitle: string;
    visionDesc: string;
    missionTitle: string;
    missionDesc: string;
    philosophyTitle: string;
    philosophyDesc: string;
    coreValuesTitle: string;
    values: {
      title: string;
      desc: string;
    }[];
  };
  services: {
    badge: string;
    title: string;
    subtitle: string;
    cardImagesTitle: string;
    getQuoteBtn: string;
    learnMoreBtn: string;
    modalTitle: string;
    capabilitiesTitle: string;
    galleryTitle: string;
    closeBtn: string;
  };
  departments: {
    badge: string;
    title: string;
    subtitle: string;
    equipTitle: string;
    scopeTitle: string;
  };
  projects: {
    badge: string;
    title: string;
    subtitle: string;
    ctaBtn: string;
    allTab: string;
    solarTab: string;
    mepTab: string;
    electricalTab: string;
    constructionTab: string;
    steelTab: string;
    telecomTab: string;
    similarProjectBtn: string;
  };
  clients: {
    badge: string;
    title: string;
    subtitle: string;
    tier1Title: string;
    tier2Title: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    formTitle: string;
    selectServiceLabel: string;
    fullNameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    companyLabel: string;
    locationLabel: string;
    messageLabel: string;
    submitBtn: string;
    successTitle: string;
    successDesc: string;
    infoTitle: string;
    infoDesc: string;
    address: string;
    phone: string;
    email: string;
    hoursTitle: string;
    hoursDesc: string;
    whatsappBtn: string;
  };
  footer: {
    tagline: string;
    desc: string;
    quickLinksTitle: string;
    contactTitle: string;
    rights: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<'en' | 'ar', TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      departments: "Departments",
      projects: "Projects",
      clients: "Clients",
      contact: "Contact",
      requestQuote: "Request Quotation"
    },
    hero: {
      tagline: "We build together",
      companyName: "GG TECKNOWAVE COMPANY LTD.",
      titleLine1: "TURNKEY ENGINEERING &",
      titleLine2: "INDUSTRIAL SOLUTIONS",
      subTitle: "WE KEEP MOVING OPENING NEW HORIZONS",
      intro: "GG Tecknowave Company Ltd is a premier multi-disciplinary Saudi engineering contractor. We deliver greatest possible value with uncompromising honesty and integrity across Refrigeration, HVAC & Cooling Solutions, Facilities Maintenance & Management, MEP Contracting, Engineering & Maintenance Solutions, Civil Works, Interior Fit-Out & Joinery, Annual Maintenance Contracts (AMC), and Power, Generator & Equipment Rental.",
      ctaPrimary: "Request Quotation",
      ctaSecondary: "Explore Our Services",
      domain: "www.tecknowave.com",
      location: "Riyadh, Saudi Arabia",
      stats: {
        divisions: "11+",
        divisionsLabel: "Specialized Divisions",
        turnkey: "100%",
        turnkeyLabel: "Turnkey EPC Execution",
        clients: "12+",
        clientsLabel: "Global Enterprise Clients",
        hq: "Saudi Arabia",
        hqLabel: "Riyadh Headquarters"
      }
    },
    about: {
      badge: "Corporate Profile",
      title: "Who We Are & Our Legacy",
      subtitle: "A trusted engineering powerhouse delivering turnkey industrial, commercial, and civil infrastructure across Saudi Arabia.",
      whoWeAreTitle: "Engineering Excellence Since Inception",
      whoWeAreDesc: "GG Tecknowave Company Ltd is a premier Saudi Arabian engineering firm dedicated to providing comprehensive and efficient solutions across civil, electrical, solar, mechanical, telecommunications, steel fabrication, landscaping, interior fit-out, and facility management services. Taking another step towards better customer satisfaction and to cater to a larger clientele in lesser time spans, we have undertaken comprehensive upgradation and modernisation of our plants.",
      whyChooseUsTitle: "Why Clients Choose GG Tecknowave",
      reasons: [
        {
          title: "Uncompromising Integrity",
          desc: "Adhering to the highest international ethical and safety standards across all project phases."
        },
        {
          title: "Turnkey EPC Execution",
          desc: "From conceptual CAD modeling to final site installation and 24/7 facility management."
        },
        {
          title: "Modernized Industrial Facilities",
          desc: "Continuous capital investment in state-of-the-art machinery, software, and skilled engineering personnel."
        },
        {
          title: "Proven Global Partnerships",
          desc: "Trusted contractor for leaders including Amazon, Lockheed Martin, STC, Accenture, and Almarai."
        }
      ]
    },
    vision: {
      badge: "Strategic Core",
      title: "Vision, Mission & Core Values",
      subtitle: "Formulated through global interactive collaboration across all levels of GG Tecknowave.",
      foundationsTitle: "Collective Foundations",
      foundationsDesc: "GG Tecknowave company Ltd. has a clear vision, mission, and philosophy followed by management and employees to acquire heights in business and in the hearts of our clients.",
      visionTitle: "Our Vision",
      visionDesc: "Be a synonym of 'quality.' Make peoples experience the limitless technologies.",
      missionTitle: "Our Mission",
      missionDesc: "Creative products and services with optimum quality and client's satisfaction.",
      philosophyTitle: "Our Philosophy",
      philosophyDesc: "Hard work or work with pleasure in it is the only shortcut to success and glory.",
      coreValuesTitle: "Core Operating Values",
      values: [
        { title: "Quality Synonym", desc: "Setting benchmarks in precision engineering, civil works, and solar installations." },
        { title: "Client First", desc: "Building long-lasting partnerships through maximum value and on-time execution." },
        { title: "Limitless Tech", desc: "Empowering infrastructure with cutting-edge CAD/CAE, solar, and SCADA systems." },
        { title: "Safety & Ethics", desc: "Zero-compromise workplace safety and transparent corporate governance." }
      ]
    },
    services: {
      badge: "Comprehensive Capabilities",
      title: "Our Engineering Services",
      subtitle: "Each of our 11 specialized services is executed by certified engineering teams, backed by state-of-the-art machinery and 3 visual project showcases per card.",
      cardImagesTitle: "Service Project Gallery (3 Visuals)",
      getQuoteBtn: "Request Quote for Service",
      learnMoreBtn: "Learn More & Scope",
      modalTitle: "Department Specification & Capabilities",
      capabilitiesTitle: "Key Technical Scope & Capabilities",
      galleryTitle: "High-Resolution Service Visuals",
      closeBtn: "Close Specification"
    },
    departments: {
      badge: "Operational Structure",
      title: "Engineering Departments",
      subtitle: "Dedicated divisions operating under unified ISO-certified quality management systems.",
      equipTitle: "Specialized Equipment & Technology",
      scopeTitle: "Departmental Operations Scope"
    },
    projects: {
      badge: "Proven Track Record",
      title: "Featured Engineering Projects",
      subtitle: "Turnkey projects executed across Saudi Arabia in Solar, MEP, Civil Construction, Steel Fabrication, and Telecommunications.",
      ctaBtn: "Submit RFQ For Your Project",
      allTab: "All Projects",
      solarTab: "Solar Energy",
      mepTab: "MEP Solutions",
      electricalTab: "Electrical Power",
      constructionTab: "Civil Construction",
      steelTab: "Steel Fabrication",
      telecomTab: "Telecommunications",
      similarProjectBtn: "Request Similar Project Quote"
    },
    clients: {
      badge: "Industry Leaders",
      title: "Our Satisfied Clients",
      subtitle: "Trusted by government defense primes, multinational tech giants, telecom providers, and FMCG conglomerates.",
      tier1Title: "Enterprise & Global Defense Partners",
      tier2Title: "Regional FMCG, Telecom & EPC Leaders"
    },
    contact: {
      badge: "Get In Touch",
      title: "Contact Us & Quotation Portal",
      subtitle: "Reach out to our engineering estimators in Riyadh or submit an instant online RFQ.",
      formTitle: "Online RFQ Inquiry Form",
      selectServiceLabel: "Select Department / Service *",
      fullNameLabel: "Full Name *",
      emailLabel: "Email Address *",
      phoneLabel: "Phone Number *",
      companyLabel: "Company / Organization",
      locationLabel: "Project Location / Site",
      messageLabel: "Project Scope & Specifications",
      submitBtn: "Submit RFQ Proposal Request",
      successTitle: "Proposal Submitted Successfully!",
      successDesc: "Thank you. Our engineering team at GG Tecknowave will review your request and get in touch within 24 hours.",
      infoTitle: "Headquarters Contact Info",
      infoDesc: "Direct contact with GG Tecknowave headquarters in Riyadh, Saudi Arabia.",
      address: "P.O. Box 12837 Malaz, Riyadh, Saudi Arabia",
      phone: "+966-504666251",
      email: "info@tecknowave.com",
      hoursTitle: "Working Hours",
      hoursDesc: "Sunday – Thursday: 8:00 AM – 5:00 PM (AST)",
      whatsappBtn: "Chat via WhatsApp"
    },
    footer: {
      tagline: "We build together",
      desc: "GG Tecknowave Company Ltd. - Turnkey electrical, solar, mechanical, civil, telecommunications, steel fabrication, landscaping, fit-out, and facility management.",
      quickLinksTitle: "Quick Links",
      contactTitle: "Contact HQ",
      rights: "GG Tecknowave Company Ltd. All rights reserved.",
      backToTop: "Back to top"
    }
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      departments: "الأقسام",
      projects: "المشاريع",
      clients: "العملاء",
      contact: "اتصل بنا",
      requestQuote: "طلب عرض سعر"
    },
    hero: {
      tagline: "نبني معاً",
      companyName: "شركة جي جي تكنووِيف المحدودة",
      titleLine1: "الهندسة المتكاملة و",
      titleLine2: "الحلول الصناعية",
      subTitle: "نستمر في التقدم وفتح آفاق جديدة",
      intro: "شركة جي جي تكنووِيف المحدودة هي مقاول هندسي سعودي رائد متعدد التخصصات. نقدم أعلى قيمة ممكنة بنزاهة وصدق تامين في مجالات حلول التبريد والتكييف والتهوية، وإدارة وتشغيل المرافق، وعقود المقاولات الميكانيكية والكهربائية والهندسية، والأعمال المدنية والتجهيزات الداخلية والديكور، وعقود الصيانة السنوية (AMC)، وتأجير المولدات والمعدات الكهربائية.",
      ctaPrimary: "طلب عرض سعر",
      ctaSecondary: "استكشف خدماتنا",
      domain: "www.tecknowave.com",
      location: "الرياض، المملكة العربية السعودية",
      stats: {
        divisions: "+11",
        divisionsLabel: "قسم هندسي متكامل",
        turnkey: "100%",
        turnkeyLabel: "تنفيذ هندسي تسليم مفتاح",
        clients: "+12",
        clientsLabel: "عميل عالمي ومؤسسي",
        hq: "السعودية",
        hqLabel: "المقر الرئيسي بالرياض"
      }
    },
    about: {
      badge: "عن الشركة",
      title: "من نحن ومسيرة نجاحنا",
      subtitle: "صرح هندسي متعدد التخصصات يقدم حلول البنية التحتية والصناعية والمدنية المتكاملة في جميع أنحاء المملكة.",
      whoWeAreTitle: "التميز الهندسي منذ التأسيس",
      whoWeAreDesc: "شركة جي جي تكنووِيف المحدودة هي شركة هندسية رائدة في المملكة العربية السعودية مكرسة لتقديم حلول شاملة وفعالة عبر مجالات الهندسة المدنية، والكهربائية، والطاقة الشمسية، والميكانيكية، والاتصالات، وتصنيع الهياكل الحديدية، وتنسيق الحدائق، والديكورات الداخلية، وإدارة المرافق. خطونا خطوة أخرى نحو تحقيق رضا العملاء وتلبية احتياجات قاعدة عملاء أكبر في فترات زمنية أقصر من خلال التحديث الشامل وميكنة مصانعنا.",
      whyChooseUsTitle: "لماذا يختار العملاء جي جي تكنووِيف",
      reasons: [
        {
          title: "نزاهة بلا مساومة",
          desc: "الالتزام بأعلى المعايير الأخلاقية ومعايير السلامة الدولية في جميع مراحل المشروع."
        },
        {
          title: "تنفيذ كامل وتسليم مفتاح (EPC)",
          desc: "من التصميم والنمذجة ثلاثية الأبعاد وحتى التركيب الميداني وإدارة المرافق على مدار الساعة."
        },
        {
          title: "مصانع ومعدات حديثة",
          desc: "استثمار رأس المالي المستمر في أحدث الآلات والبرامج الهندسية والكوادر الفنية عالية الكفاءة."
        },
        {
          title: "شراكات عالمية موثوقة",
          desc: "مقاول معتمد لأبرز الشركات العالمية مثل أمازون، لوكهيد مارتن، الاتصالات السعودية STC، أكسنتشر، والمراعي."
        }
      ]
    },
    vision: {
      badge: "الركائز الاستراتيجية",
      title: "الرؤية والرسالة والقيم الجوهرية",
      subtitle: "صُممت من خلال عملية تفاعلية شارك فيها الموظفون على كافة المستويات.",
      foundationsTitle: "الأسس الجماعية",
      foundationsDesc: "تمتلك شركة جي جي تكنووِيف رؤية ورسالة وفلسفة واضحة تتبعها الإدارة والموظفون لتحقيق قمم التميز في عالم الأعمال وفي قلوب العملاء.",
      visionTitle: "رؤيتنا",
      visionDesc: "أن نكون مرادفاً لـ 'الجودة'، ومساعدة الناس على تجربة تقنيات بلا حدود.",
      missionTitle: "رسالتنا",
      missionDesc: "تقديم منتجات وخدمات مبتكرة بأعلى مستويات الجودة وتحقيق الرضا التام للعملاء.",
      philosophyTitle: "فلسفتنا",
      philosophyDesc: "العمل الجاد أو العمل بشغف ومتعة هو الطريق الوحيد المباشر للنجاح والمجد.",
      coreValuesTitle: "قيم التشغيل الأساسية",
      values: [
        { title: "المرادف بالجودة", desc: "وضع المعايير القياسية في الهندسة الدقيقة والأعمال المدنية والطاقة الشمسية." },
        { title: "العميل أولاً", desc: "بناء شراكات طويلة الأمد من خلال تقديم أقصى قيمة والتنفيذ في الوقت المحدد." },
        { title: "تقنيات بلا حدود", desc: "تمكين البنية التحتية بأحدث أنظمة CAD/CAE والطاقة الشمسية والتحكم الرقمي." },
        { title: "السلامة والأخلاق", desc: "سلامة مهنية دون تهاون وحوكمة شركية شفافة." }
      ]
    },
    services: {
      badge: "إمكانيات شاملة",
      title: "خدماتنا الهندسية",
      subtitle: "تُنَفَّذ كل خدمة من خدماتنا الـ 11 بواسطة فرق هندسية معتمدة، مدعومة بأحدث الآلات و 3 صور توضيحية لكل بطاقة خدمة.",
      cardImagesTitle: "معرض صور المشاريع (3 صور لكل خدمة)",
      getQuoteBtn: "طلب عرض سعر لهذه الخدمة",
      learnMoreBtn: "التفاصيل والنطاق الهندسي",
      modalTitle: "مواصفات وإمكانيات القسم",
      capabilitiesTitle: "الخدمات والنطاق الفني",
      galleryTitle: "صور عالية الدقة لمشاريع الخدمة",
      closeBtn: "إغلاق المواصفات"
    },
    departments: {
      badge: "الهيكل التشغيلي",
      title: "الأقسام الهندسية المتخصصة",
      subtitle: "أقسام متكاملة تعمل تحت نظام إدارة جودة موحد معتمد دولياً.",
      equipTitle: "المعدات والتقنيات المتخصصة",
      scopeTitle: "نطاق العمليات القسمية"
    },
    projects: {
      badge: "سجل الإنجازات",
      title: "المشاريع الهندسية المنجزة",
      subtitle: "مشاريع متكاملة نُفذت بنجاح في جميع أنحاء المملكة العربية السعودية في مجالات الطاقة الشمسية والكهرباء والإنشاءات والحديد والاتصالات.",
      ctaBtn: "قدّم طلب مشروعك الآن",
      allTab: "جميع المشاريع",
      solarTab: "الطاقة الشمسية",
      mepTab: "الكهروميكانيك MEP",
      electricalTab: "الكهرباء والطاقة",
      constructionTab: "الإنشاءات المدنية",
      steelTab: "تصنيع الحديد",
      telecomTab: "الاتصالات",
      similarProjectBtn: "طلب عرض سعر لمشروع مماثل"
    },
    clients: {
      badge: "رواد الصناعة",
      title: "عملاؤنا المميزون",
      subtitle: "محل ثقة كبرى شركات الدفاع والتقنية العالمية، ومشغلي الاتصالات، ومجموعات الأغذية والمقاولات.",
      tier1Title: "الشركاء المؤسسيون وشركات الدفاع العالمية",
      tier2Title: "رواد الصناعات الغذائية والاتصالات والمقاولات الإقليمية"
    },
    contact: {
      badge: "تواصل معنا",
      title: "الاتصال وبوابة طلب عروض الأسعار",
      subtitle: "تواصل مع مهندسي التسعير في مقرنا بالرياض أو قدم طلبك مباشرة عبر الإنترنت.",
      formTitle: "نموذج تقديم طلب عرض السعر (RFQ)",
      selectServiceLabel: "اختر القسم / الخدمة المطلوب *",
      fullNameLabel: "الاسم الكامل *",
      emailLabel: "البريد الإلكتروني *",
      phoneLabel: "رقم الهاتف / الجوال *",
      companyLabel: "اسم الشركة / المؤسسة",
      locationLabel: "موقع المشروع / المدينة",
      messageLabel: "تفاصيل ونطاق المشروع",
      submitBtn: "إرسال طلب عرض السعر",
      successTitle: "تم إرسال الطلب بنجاح!",
      successDesc: "شكراً لك. سيقوم فريقنا الهندسي في جي جي تكنووِيف بمراجعة متطلباتك والتواصل معك خلال 24 ساعة.",
      infoTitle: "معلومات المقر الرئيسي",
      infoDesc: "التواصل المباشر مع المقر الرئيسي لشركة جي جي تكنووِيف في الرياض، المملكة العربية السعودية.",
      address: "ص.ب 12837 الملز، الرياض، المملكة العربية السعودية",
      phone: "504666251 966+",
      email: "info@tecknowave.com",
      hoursTitle: "ساعات العمل الرسمية",
      hoursDesc: "الأحد – الخميس: 8:00 صباحاً – 5:00 مساءً (بتوقيت مكة المكرمة)",
      whatsappBtn: "مراسلة عبر واتساب"
    },
    footer: {
      tagline: "نبني معاً",
      desc: "شركة جي جي تكنووِيف المحدودة - المقاول الرائد لحلول الأعمال الكهربائية، الطاقة الشمسية، الميكانيك، المباني، الاتصالات، تصنيع الحديد، الديكورات وإدارة المرافق.",
      quickLinksTitle: "روابط الصفحات",
      contactTitle: "التواصل والفرع الرئيسي",
      rights: "جميع الحقوق محفوظة لشركة جي جي تكنووِيف المحدودة.",
      backToTop: "العودة للأعلى"
    }
  }
};
