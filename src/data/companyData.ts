export interface DepartmentService {
  id: string;
  numberBadge: string;
  titleEn: string;
  titleAr: string;
  shortDescEn: string;
  shortDescAr: string;
  fullDescEn: string;
  fullDescAr: string;
  bulletsEn: string[];
  bulletsAr: string[];
  equipmentEn: string[];
  equipmentAr: string[];
  badgeColor: 'orange' | 'gold' | 'grey';
  icon: string;
  images: [string, string, string];
}

export interface ProjectItem {
  id: string;
  titleEn: string;
  titleAr: string;
  category: 'solar' | 'mep' | 'electrical' | 'construction' | 'steel' | 'telecom';
  categoryLabelEn: string;
  categoryLabelAr: string;
  locationEn: string;
  locationAr: string;
  year: string;
  descriptionEn: string;
  descriptionAr: string;
  specsEn: string[];
  specsAr: string[];
  image: string;
}

export interface ClientItem {
  name: string;
  categoryEn: string;
  categoryAr: string;
  logoText: string;
  bgGradient: string;
}

export const COMPANY_INFO = {
  nameEn: "GG Tecknowave Company Ltd.",
  nameAr: "شركة جي جي تكنووِيف المحدودة",
  brandName: "tecknowave",
  taglineEn: "We build together",
  taglineAr: "نبني معاً",
  logoUrl: "/assets/images/tecknowave_logo.png",
  website: "www.tecknowave.com",
  email: "info@tecknowave.com",
  phone: "+966-504666251",
  whatsappNumber: "966504666251",
  addressEn: "P.O. Box 12837 Malaz, Riyadh, Saudi Arabia",
  addressAr: "ص.ب 12837 الملز، الرياض، المملكة العربية السعودية"
};

export const FEATURED_6_SERVICES: DepartmentService[] = [
  {
    id: "hvac-refrigeration",
    numberBadge: "01",
    titleEn: "Refrigeration, HVAC & Cooling Solutions",
    titleAr: "حلول التبريد والتكييف والتهوية HVAC",
    shortDescEn: "Comprehensive industrial refrigeration, commercial HVAC chiller plant installation, ductwork fabrication, precision temperature control, and cold room logistics.",
    shortDescAr: "حلول التبريد الصناعي الشاملة، تركيب محطات التكييف المركزي والمبردات، تصنيع مجاري الهواء، والتحكم الدقيق في درجات الحرارة وغرف التبريد.",
    fullDescEn: "GG Tecknowave specializes in industrial refrigeration and high-capacity commercial HVAC engineering. From large-scale chiller plant installations to precision cleanroom temperature controls, custom ductwork fabrication, and cold storage warehouse refrigeration systems, we deliver energy-efficient, reliable cooling performance.",
    fullDescAr: "تتخصص جي جي تكنووِيف في التبريد الصناعي وتكييف الهواء المتقدم للقطاعات التجارية والصناعية. ننفذ محطات التكييف المركزي المائي والمبردات، غرف التبريد، تصنيع مجاري الهواء، وأنظمة ضبط الحرارة النظيفة.",
    bulletsEn: [
      "Industrial Cold Room & Chiller Plant Installation",
      "Central HVAC Air Handling Units (AHU) & FCU Setup",
      "Duct Fabrication & Air Distribution Networks",
      "Precision Temperature & Environmental Control",
      "Emergency HVAC Repair & Refrigerant Retrofitting"
    ],
    bulletsAr: [
      "تركيب غرف التبريد ومحطات التكييف المركزي",
      "تركيب وحدات مناولة الهواء AHU ووحدات FCU",
      "تصنيع وتمديد مجاري الهواء ومنافذ التوزيع",
      "التحكم الدقيق بالحرارة والبيئة المنظمة",
      "إصلاح الأعطال الطارئة واستبدال وسائط التبريد"
    ],
    equipmentEn: [
      "Centrifugal Commercial Chiller Testing Stations",
      "Duct Plasma Cutting & Flanging Machines",
      "Refrigerant Leak Diagnostics & Vacuum Pumps"
    ],
    equipmentAr: [
      "محطات اختبار المبردات المركزية الطاردة المركزية",
      "ماكينات قص وتشكيل مجاري الهواء بالبلازما",
      "أجهزة فحص تسريب وسائط التبريد والمضخات الفراغية"
    ],
    badgeColor: "orange",
    icon: "Snowflake",
    images: [
      "/assets/images/service_hvac_rooftop_1794645856668.jpg",
      "/assets/images/service_hvac_coldroom_1794087099997.jpg",
      "/assets/images/service_hvac_1_1794083973951.jpg"
    ]
  },
  {
    id: "facilities-management-main",
    numberBadge: "02",
    titleEn: "Facilities Maintenance & Management",
    titleAr: "إدارة وصيانة المرافق والمنشآت",
    shortDescEn: "Beyond construction, our Facility Management team takes care of your property's ongoing needs. We offer 24/7 electromechanical maintenance, HVAC care, energy optimization, and asset lifecycle management.",
    shortDescAr: "تتولى فرقتنا الإشراف على الاحتياجات التشغيلية المستمرة لمنشأتك. نقدم صيانة كهروميكانيكية على مدار الساعة، صيانة التكييف، ترشيد الطاقة، وإدارة دورة حياة الأصول.",
    fullDescEn: "GG Tecknowave Facility Management division provides end-to-end operation, maintenance, and asset preservation for commercial towers, industrial complexes, and corporate townships. Our 24/7 on-call engineers ensure maximum uptime and reduced operating costs.",
    fullDescAr: "يقدم قسم إدارة المرافق تشغيلاً وصيانة متكاملة للمباني والمجمعات الصناعية. يضمن مهندسونا المتواجدون 24/7 أعلى معدلات الجاهزية مع ترشيد تكاليف التشغيل.",
    bulletsEn: [
      "24/7 Electromechanical Plant Operation & O&M",
      "HVAC Chiller & Environmental Control Maintenance",
      "Asset Lifecycle Management & Preventive Audits",
      "Material Handling & Equipment Logistics Care",
      "Energy Efficiency Retrofitting & Optimization"
    ],
    bulletsAr: [
      "تشغيل وصيانة المنشآت الكهروميكانيكية 24/7",
      "صيانة أنظمة التكييف المركزي والمبردات",
      "الصيانة الوقائية وإدارة دورة حياة الأصول",
      "لوجستيات معدات المناولة الصناعية",
      "تحسين استهلاك الطاقة وترشيد التكاليف"
    ],
    equipmentEn: [
      "Computerized Maintenance Management System (CMMS)",
      "Thermal Infrared Electrical Inspection Cameras",
      "Ultrasonic Flow Meter & Vibration Analyzers"
    ],
    equipmentAr: [
      "نظام إدارة الصيانة الحاسوبي المتقدم CMMS",
      "كاميرات الفحص الحراري بالإنفراريد للكهرباء",
      "أجهزة قياس التدفق والأمواج فوق الصوتية"
    ],
    badgeColor: "gold",
    icon: "Building2",
    images: [
      "/assets/images/service_facility_mgr_1794087116361.jpg",
      "/assets/images/service_automation_bms_1794645856994.jpg",
      "/assets/images/service_amc_1_1794083974014.jpg"
    ]
  },
  {
    id: "mep-solutions-main",
    numberBadge: "03",
    titleEn: "MEP Contracting, Engineering & Maintenance Solutions",
    titleAr: "مقاولات الكهروميكانيك والتصاميم والهندسة MEP",
    shortDescEn: "Full-scope Mechanical, Electrical, and Plumbing (MEP) turnkey contracting, 3D CAD coordination, piping installations, power distribution, and plant maintenance.",
    shortDescAr: "مقاولات كهروميكانيكية شاملة MEP تشمل الكهرباء والميكانيك والسباكة الصناعية، النمذجة ثلاثية الأبعاد، تمديدات الأنابيب، توزيع الطاقة، وصيانة المصانع.",
    fullDescEn: "GG Tecknowave MEP division executes complete electromechanical and plumbing infrastructure for industrial plants, medical complexes, and high-rise commercial structures. From 3D BIM coordination to high-pressure piping and switchgear installation, we ensure flawless execution.",
    fullDescAr: "ينفذ قسم MEP الأعمال الكهروميكانيكية والبنية التحتية للسباكة للمصانع والمجمعات الطبية. نغطي كافة التمديدات ولوحات الكهرباء والأنابيب بنمذجة BIM دقيقة.",
    bulletsEn: [
      "Turnkey Mechanical, Electrical & Plumbing Execution",
      "High-Pressure Process Piping & Pump Stations",
      "Medium & Low Voltage Power Distribution Units",
      "3D BIM/CAD Coordination & Stress Analysis",
      "Electromechanical Testing, Balancing & Commissioning"
    ],
    bulletsAr: [
      "تنفيذ متكامل للأعمال الميكانيكية والكهربائية والسباكة",
      "أنابيب المعالجة الضغط العالي ومحطات الضخ",
      "وحدات توزيع الكهرباء للضغط المتوسط والمنخفض",
      "التنسيق الهندسي والنمذجة ثلاثية الأبعاد BIM/CAD",
      "اختبار وموازنة وتشغيل الأنظمة الكهروميكانيكية"
    ],
    equipmentEn: [
      "Hydraulic Pipe Threading & Grooving Rig",
      "BIM 3D Electromechanical Coordination Station",
      "Duct Leakage Testing Air Flow Meter"
    ],
    equipmentAr: [
      "معدات تسنين وتفاريز الأنابيب الهيدروليكية",
      "محطات التنسيق الهندسي الكهروميكانيكي BIM",
      "أجهزة فحص واختبار تسريب مجاري الهواء"
    ],
    badgeColor: "grey",
    icon: "Zap",
    images: [
      "/assets/images/service_mep_piping_1794087132941.jpg",
      "/assets/images/service_electrical_1794054778762.jpg",
      "/assets/images/service_hvac_rooftop_1794645856668.jpg"
    ]
  },
  {
    id: "civil-fitout-joinery",
    numberBadge: "04",
    titleEn: "Civil Works, Interior Fit-Out & Joinery",
    titleAr: "الأعمال المدنية والديكورات والنجارة Fit-Out",
    shortDescEn: "Comprehensive civil foundation construction, structural concrete framing, corporate interior fit-out customization, acoustic ceiling installation, and bespoke wooden joinery.",
    shortDescAr: "الإنشاءات المدنية الشاملة، الهياكل الخرسانية المسلحة، التجهيزات والديكورات الداخلية للمكاتب والشركات، الأسقف الصوتية، والنجارة الفاخرة المخصصة.",
    fullDescEn: "Combining heavy civil construction capability with exquisite interior architectural fit-out. We manage concrete framing, earthworks, and structural erection along with custom wooden joinery, glass partitions, and acoustic ceiling craftsmanship.",
    fullDescAr: "نجمع بين الإنشاءات المدنية الثقيلة وأعمال الديكور والتجهيز الداخلي الفاخر. ننفذ الهياكل الخرسانية المسلحة إلى جانب أعمال النجارة المعمارية والأسقف الخشبية والصوتية.",
    bulletsEn: [
      "Mechanized Concrete Foundation & Structural Framing",
      "Corporate Office Interior Fit-Out & Partitioning",
      "Custom Architectural Joinery & Wood Slatted Ceiling",
      "High-End Marble, Stone Masonry & Epoxy Flooring",
      "Turnkey Building Handover & Site Infrastructure"
    ],
    bulletsAr: [
      "الأساسات والهياكل الخرسانية المسلحة المميكنة",
      "التجهيز والديكور الداخلي للمكاتب والشركات",
      "أعمال النجارة المعمارية والأسقف الخشبية",
      "الرخام والحجر الطبيعي وأرضيات الإيبوكسي",
      "تسليم المباني الجاهزة والبنية التحتية"
    ],
    badgeColor: "orange",
    icon: "Layout",
    images: [
      "/assets/images/service_civil_1794054780104.jpg",
      "/assets/images/service_joinery_fitout_1794645855631.jpg",
      "/assets/images/service_fitout_1_1794056102476.jpg"
    ],
    equipmentEn: [
      "Precision Wood CNC Router Stations",
      "Total Station GPS Civil Surveying Kits",
      "Automated Power Concrete Finishers"
    ],
    equipmentAr: [
      "آلات الخشب الدقيقة الراوتر CNC",
      "أجهزة المسح المساحي الميداني GPS",
      "مكائن تسوية الخرسانة المسلحة الآلية"
    ]
  },
  {
    id: "annual-maintenance-contracts",
    numberBadge: "05",
    titleEn: "Annual Maintenance Contracts (AMC)",
    titleAr: "عقود الصيانة السنوية الشاملة AMC",
    shortDescEn: "Tailored annual maintenance contracts covering preventive plant audits, guaranteed response times, 24/7 emergency repair response, spare parts logistics, and regulatory compliance.",
    shortDescAr: "عقود صيانة سنوية مخصصة تغطي الفحوصات الوقائية للمصانع، زمن استجابة مضمون، طوارئ على مدار الساعة، توفير قطع الغيار، ومطابقة معايير السلامة.",
    fullDescEn: "Customized AMC programs that safeguard industrial plants, power stations, and commercial buildings. We guarantee defined SLA emergency response times, routine scheduled audits, genuine parts replacement, and official safety compliance certifications.",
    fullDescAr: "برامج عقود صيانة سنوية لحماية المنشآت الصناعية والمباني التجاريّة. نضمن زمن استجابة محدد للأعطال، زيارات صيانة وقائية دورية، توفير قطع الغيار الأصلية، وشهادات السلامة المعتمدة.",
    bulletsEn: [
      "Customized Comprehensive & Labor-Only AMC Plans",
      "Guaranteed SLA Response Times for Critical Outages",
      "Scheduled Preventive Maintenance & System Audits",
      "Spare Parts Procurement & Asset Inventory Management",
      "Regulatory Compliance & Safety Certificate Issuance"
    ],
    bulletsAr: [
      "عقود صيانة سنوية شاملة أو للعمالة الفنية المجهزة",
      "زمن استجابة مضمون للتوقفات والأعطال الحارجة",
      "جدول صيانة وقائية منتظم وفحص شامل للأنظمة",
      "تأمين قطع الغيار وإدارة المخزون للأصول",
      "المطابقة والتأكد من شهادات السلامة المعتمدة"
    ],
    badgeColor: "gold",
    icon: "ShieldCheck",
    images: [
      "/assets/images/service_amc_1_1794083974014.jpg",
      "/assets/images/service_automation_bms_1794645856994.jpg",
      "/assets/images/service_facility_mgr_1794087116361.jpg"
    ],
    equipmentEn: [
      "Digital Asset Diagnostics & CMMS Portal",
      "Calibrated Circuit Breaker Secondary Injection Kit",
      "HVAC Air Velocity & Balancing Anemometers"
    ],
    equipmentAr: [
      "بوابة التشخيص الرقمي وتتبع الأصول CMMS",
      "معدات معايرة القواطع الكهربائية المعتمدة",
      "أجهزة قياس سرعة وضغط التكييف"
    ]
  },
  {
    id: "power-generator-equipment-rental",
    numberBadge: "06",
    titleEn: "Power, Generator & Equipment Rental",
    titleAr: "تأجير المولدات الكهربائية والمعدات الثقيلة",
    shortDescEn: "High-capacity diesel generator rentals, mobile power plant stations, heavy construction machinery leasing, fuel management, and onsite technician support.",
    shortDescAr: "تأجير مولدات المازوت والديزل عالية القدرة، محطات الطاقة المتنقلة، تأجير معدات البناء الثقيلة، إدارة الوقود، والمساعدة الفنية الميدانية.",
    fullDescEn: "Fleet rental services offering soundproof industrial diesel generators, power distribution transformers, excavators, cranes, and heavy earthmoving equipment. Backed by 24/7 field technical support and continuous fuel supply logistics.",
    fullDescAr: "أسطول تأجير معدات يشمل مولدات الديزل كاتمة الصوت، محولات الطاقة، الحفارات والرافعات الهيدروليكية، مع دعم فني متواصل وإدارة تزويد الوقود بالموقع.",
    bulletsEn: [
      "High-Capacity Industrial Diesel Generator Rental",
      "Mobile Soundproof Power Pack Units & Transformers",
      "Heavy Civil Construction Machinery Fleet Leasing",
      "Onsite Fuel Management & Load Bank Testing",
      "24/7 Field Maintenance Technicians & Support"
    ],
    bulletsAr: [
      "تأجير مولدات الديزل الصناعية عالية القدرة",
      "وحدات الطاقة كاتمة الصوت المتنقلة والمحولات",
      "تأجير أسطول معدات البناء والإنشاءات الثقيلة",
      "إدارة التزويد بالوقود وااختبارات الحمل الكهربائي",
      "طاقم صيانة ودعم فني متواجد بالوقع 24/7"
    ],
    badgeColor: "grey",
    icon: "Truck",
    images: [
      "/assets/images/service_equipment_rental_1794645856332.jpg",
      "/assets/images/service_generator_1_1794083974451.jpg",
      "/assets/images/service_electrical_1794054778762.jpg"
    ],
    equipmentEn: [
      "Heavy Industrial Diesel Generators (100kVA - 2000kVA)",
      "Resistive-Reactive Generator Load Bank Tester",
      "Mobile Fuel Tank Trailers & Distribution Rig"
    ],
    equipmentAr: [
      "مولدات الديزل الثقيلة (100 إلى 2000 كيلو فولت أمبير)",
      "معدات إختبار الأحمال الكهرومغناطيسية للمولدات",
      "صهاريج ومقطورات التزويد بالوقود الميداني"
    ]
  }
];

export const DEPARTMENTS: DepartmentService[] = [
  ...FEATURED_6_SERVICES,
  {
    id: "electrical",
    numberBadge: "07",
    titleEn: "ELECTRICAL ENGINEERING",
    titleAr: "الهندسة الكهربائية",
    shortDescEn: "State-of-the-art power distribution, high/medium/low voltage systems, SCADA instrumentation, and process control.",
    shortDescAr: "أنظمة توزيع الطاقة، والجهد العالي والمتوسط والمنخفض، وأجهزة التحكم والرصد الرقمية SCADA.",
    fullDescEn: "GG TecKnowave company Ltd is always happy to be a part of your project in different phases, from conceptual design to turn-key reality. We assist our clients in new facilities as well as applying new technologies to upgrade existing plants. Our engineering division provides state-of-the-art services in power distribution, low/medium voltage, instrumentation, process piping, lighting, equipment setting, calibration, physical security, and telecommunications.",
    fullDescAr: "تسعد شركة جي جي تكنووِيف بأن تكون جزءاً من مشروعك في مختلف المراحل، بدءاً من التصميم المفاهيمي وحتى التنفيذ الكامل. نساعد عملائنا في تأسيس المنشآت الجديدة وتحديث النباتات القائمة بأحدث التقنيات الرقمية والكهربائية.",
    bulletsEn: [
      "Power Distribution & Grid Substations",
      "Low Voltage & Medium Voltage Switchgears",
      "Instrumentation & Control Panels",
      "Process Piping & Calibration",
      "Industrial & Architectural Lighting",
      "Physical Security & Telemetry Integration"
    ],
    bulletsAr: [
      "توزيع الطاقة ومحطات التحويل الرئيسية",
      "لوحات الجهد المنخفض والمتوسط",
      "أجهزة القياس والتحكم الآلي",
      "أنابيب المعالجة والمعايرة الفنية",
      "الإضاءة الصناعية والمعمارية",
      "دمج أنظمة المراقبة والأمان الفيزيائي"
    ],
    equipmentEn: [
      "High Voltage Secondary Injection Test Kits",
      "SCADA Telemetry Diagnostic Workstations",
      "Primary Current Injection Systems"
    ],
    equipmentAr: [
      "معدات اختبار حقن الجهد العالي الثانوية",
      "محطات فحص وتخصيص أنظمة SCADA",
      "أنظمة اختبار حقن التيار الرئيسي"
    ],
    badgeColor: "orange",
    icon: "Zap",
    images: [
      "/assets/images/service_electrical_1794054778762.jpg",
      "/assets/images/service_automation_bms_1794645856994.jpg",
      "/assets/images/service_generator_1_1794083974451.jpg"
    ]
  },
  {
    id: "solar",
    numberBadge: "08",
    titleEn: "SOLAR ENERGY SYSTEMS",
    titleAr: "أنظمة الطاقة الشمسية",
    shortDescEn: "High-efficiency sustainable photovoltaic solar supply, installation, site feasibility analysis, and turnkey grid connections.",
    shortDescAr: "توريد وتركيب أنظمة الطاقة الشمسية الكهروضوئية عالية الكفاءة ودراسات الجدوى الميدانية والربط بالشبكة.",
    fullDescEn: "Our Solar Division is dedicated to delivering high-quality, sustainable, and efficient solar energy solutions across commercial, industrial, and municipal sectors. We specialize in supply, mounting structural installation, complete turnkey EPC solutions, feasibility evaluation, and long-term O&M maintenance services.",
    fullDescAr: "يتميز قسم الطاقة الشمسية بتوفير حلول طاقة مستدامة وعالية الكفاءة للقطاعات التجارية والصناعية. نتخصص في توريد وتركيب الهياكل والحقول الكهروضوئية وتنفيذ العقود المتكاملة والصيانة المستمرة.",
    bulletsEn: [
      "Photovoltaic Solar System Supply",
      "Turnkey Solar Field EPC Solutions",
      "Rooftop & Ground Mounting Installation",
      "Feasibility & Solar Irradiance Analysis",
      "Grid Interconnection & Substation Integration",
      "Long-term O&M Maintenance Services"
    ],
    bulletsAr: [
      "توريد الألواح والمحولات الكهروضوئية",
      "حلول EPC الشاملة لحقول الطاقة الشمسية",
      "تركيب الألواح على الأسطح والأراضي المفتوحة",
      "دراسات الإشعاع والجدوى الاقتصادية",
      "ربط الطاقة بالشبكات الكهربائية والمحطات",
      "خدمات التشغيل والصيانة طويلة الأمد"
    ],
    equipmentEn: [
      "Photovoltaic Array Solar Trackers",
      "Grid-Tie Inverter Synchronization Units",
      "Thermal Camera Solar Panel Inspection Rig"
    ],
    equipmentAr: [
      "أنظمة التتبع الآلي للمصفوفات الكهروضوئية",
      "وحدات المزامنة والمحولات المربوطة بالشبكة",
      "معدات الفحص الحراري للألواح الكهروضوئية"
    ],
    badgeColor: "gold",
    icon: "Sun",
    images: [
      "/assets/images/service_solar_1794054778024.jpg",
      "/assets/images/service_electrical_1794054778762.jpg",
      "/assets/images/hero_tecknowave_building_1794054778502.jpg"
    ]
  },
  {
    id: "mechanical",
    numberBadge: "09",
    titleEn: "MECHANICAL ENGINEERING",
    titleAr: "الهندسة الميكانيكية",
    shortDescEn: "Advanced mechanical engineering, CAD/CAE 3D modeling, finite element analysis, process piping, and PDM/PLM tool customization.",
    shortDescAr: "الهندسة الميكانيكية المتقدمة، النمذجة ثلاثية الأبعاد CAD/CAE، أنابيب المعالجة، وتطوير أدوات PLM.",
    fullDescEn: "GG Tecknowave company Ltd offers advanced Mechanical Engineering services that help customers develop complex designs, reduce time-to-market, and penetrate emerging markets. We cover the entire product lifecycle from conceptual design, CAD modeling, detailing, simulation, prototyping, testing, and manufacturing across Aerospace, Automotive, Telecom, Semiconductor, and Medical industries.",
    fullDescAr: "نقدم خدمات هندسية ميكانيكية متقدمة تتيح تطوير التصاميم المعقدة وتقليل وقت الوصول للسوق. نغطي كامل دورة حياة المنتج من النمذجة والتحليل والتصنيع لقطاعات الطيران والسيارات والأجهزة الطبية.",
    bulletsEn: [
      "Conceptual & Mechanical 3D CAD Modeling",
      "Finite Element Analysis & Prototyping",
      "Industrial High-Pressure Process Piping",
      "PDM & PLM Tools Customization & Support",
      "Aerospace & Automotive Engineering",
      "Semiconductor & Medical Device Systems"
    ],
    bulletsAr: [
      "التصميم والنمذجة ثلاثية الأبعاد CAD/CAE",
      "تحليل الإجهاد والمحاكاة وإنشاء النماذج",
      "أنابيب المعالجة الضغط العالي الصناعية",
      "تخصيص وإدارة أدوات PDM و PLM",
      "هندسة قطاعات الطيران والسيارات",
      "أنظمة الأجهزة الطبية وأشباه الموصلات"
    ],
    equipmentEn: [
      "High-Precision CNC Machining Workstations",
      "3D Laser Scanning & CAD Modeling Rig",
      "Pressure Vessel Hydro-Testing Rig"
    ],
    equipmentAr: [
      "محطات الخراطة والتفريز CNC عالية الدقة",
      "أجهزة المسح الليزري والنمذجة ثلاثية الأبعاد",
      "منصة الإختبار الهيدروليكي لأوعية الضغط"
    ],
    badgeColor: "grey",
    icon: "Settings",
    images: [
      "/assets/images/service_mechanical_1794054778800.jpg",
      "/assets/images/service_mep_piping_1794087132941.jpg",
      "/assets/images/service_hvac_rooftop_1794645856668.jpg"
    ]
  },
  {
    id: "civil",
    numberBadge: "10",
    titleEn: "CIVIL ENGINEERING & INFRASTRUCTURE",
    titleAr: "الهندسة المدنية والبنية التحتية",
    shortDescEn: "Turnkey civil engineering, surveying, mapping, reinforced concrete framing, commercial developments, and corporate townships.",
    shortDescAr: "الهندسة المدنية الشاملة، المسح الجغرافي، الهياكل الخرسانية المسلحة، والجمعات السكنية والتجارية.",
    fullDescEn: "GG Technowave company Ltd provides comprehensive civil engineering, surveying, and mapping services for municipal, commercial, and industrial sites. Complete turnkey solutions are offered with mechanized systems and project management techniques for speedy construction, corporate townships, and business office parks.",
    fullDescAr: "نقدم خدمات هندسة مدنية ومسح طوبوغرافي ورسم خرائط شاملة للمواقع البلدية والتجارية والصناعية، مع تطبيق أنظمة الميكنة الحديثة لسرعة الإنجاز وبناء المجمعات الإدارية والمدن المؤسسية.",
    bulletsEn: [
      "Municipal, Commercial & Industrial Site Engineering",
      "Land Surveying, Geo-Mapping & Earthworks",
      "Mechanized Concrete Foundation & Framing",
      "Corporate Townships & Business Parks",
      "Turnkey Building Construction Management",
      "Urban Roadways & Infrastructure Laydown"
    ],
    bulletsAr: [
      "هندسة المواقع البلدية والتجارية والصناعية",
      "المسح العقاري والخرائط والأعمال الترابية",
      "الأساسات والهياكل الخرسانية المميكنة",
      "تطوير المجمعات السكنية والمدن الإدارية",
      "إدارة مشاريع البناء وتسليم المفتاح",
      "شبكات الطرق والبنية التحتية"
    ],
    equipmentEn: [
      "Total Station GPS Geo-Surveying Kits",
      "Automated Power Trowel Concrete Finishers",
      "Laser-Guided Earth Leveling Machinery"
    ],
    equipmentAr: [
      "أجهزة المسح المساحي GPS Total Station",
      "مكائن تسوية وتنعيم الخرسانة الآلية",
      "معدات تسوية التربة الموجهة بالليزر"
    ],
    badgeColor: "orange",
    icon: "Building2",
    images: [
      "/assets/images/service_civil_1794054780104.jpg",
      "/assets/images/service_equipment_rental_1794645856332.jpg",
      "/assets/images/hero_tecknowave_building_1794054778502.jpg"
    ]
  },
  {
    id: "security",
    numberBadge: "11",
    titleEn: "INTEGRATED SECURITY SOLUTIONS",
    titleAr: "الحلول الأمنية المتكاملة",
    shortDescEn: "Industrial CCTV surveillance, physical access control, automated gate barriers, and integrated perimeter intrusion telemetry.",
    shortDescAr: "أنظمة المراقبة التلفزيونية CCTV، والتحكم في الدخول، والحواجز الإلكترونية، وحماية المحيط.",
    fullDescEn: "Our Security division delivers high-grade surveillance, physical security integration, electronic access controls, and central control room monitoring tailored for industrial complexes, energy plants, and corporate facilities.",
    fullDescAr: "يقدم قسم الأمن أنظمة مراقبة متطورة، وتحكماً إلكترونياً في الوصول، وغرف مراقبة مركزية مخصصة للمجمعات الصناعية ومحطات الطاقة والمقرات المؤسسية.",
    bulletsEn: [
      "High-Definition CCTV Surveillance Networks",
      "Biometric Physical Access Control & RFID",
      "Automated Vehicle Gate Barriers & Scanners",
      "Perimeter Fiber-Optic Intrusion Detection",
      "24/7 Security Operations Center (SOC) Setup"
    ],
    bulletsAr: [
      "شبكات المراقبة التلفزيونية عالية الدقة",
      "أنظمة التحكم بالبصمة والبطاقات الذكية",
      "حواجز البوابات الإلكترونية وقارئات السيارات",
      "أنظمة كشف التسلل للألواح والسياج المحيطي",
      "تأسيس وتجهيز غرف المراقبة والتحكم الأمنية"
    ],
    equipmentEn: [
      "IP Video Management System Servers",
      "Biometric RFID Access Controllers",
      "Long-Range Thermal Security Cameras"
    ],
    equipmentAr: [
      "خوادم إدارة الفيديو والشبكات الأمنية IP",
      "وحدات التحكم بالوصول البيومترية",
      "كاميرات المراقبة الحرارية طويلة المدى"
    ],
    badgeColor: "gold",
    icon: "ShieldCheck",
    images: [
      "/assets/images/service_security_1_1794056102237.jpg",
      "/assets/images/service_automation_bms_1794645856994.jpg",
      "/assets/images/service_telecom_1_1794056102582.jpg"
    ]
  },
  {
    id: "steel",
    numberBadge: "12",
    titleEn: "STEEL FABRICATION & ERECTION",
    titleAr: "تصنيع وتركيب الهياكل الحديدية",
    shortDescEn: "Heavy industrial steel truss fabrication, certified ISO welding, anti-corrosive coating, and high-load frame erection.",
    shortDescAr: "تصنيع الجسور والجمالونات الحديدية الثقيلة، اللحام المعتمد، الدهانات المقاومة للتآكل، والتركيب الميداني.",
    fullDescEn: "Specialized in heavy structural steel fabrication, precision certified welding, custom truss assembly, and steel frame erection engineered to sustain demanding industrial environments, manufacturing plants, and high-span warehouses.",
    fullDescAr: "متخصصون في تصنيع وتشكيل الحديد الصلب، واللحام المعتمد، وتجميع الجمالونات، وتشييد الهياكل المعدنية الثقيلة للمصانع والمستودعات العملاقة.",
    bulletsEn: [
      "Heavy Structural Steel Girder Fabrication",
      "Certified High-Precision Arc Welding",
      "Corrosion-Resistant Galvanization & Painting",
      "Industrial Crane & Frame Field Erection",
      "High-Span Warehouse Structural Framing"
    ],
    bulletsAr: [
      "تصنيع الجسور والروافد المعدنية الثقيلة",
      "اللحام الدقيق المعايير ISO والتحكم بالجودة",
      "الجلفنة والدهانات المقاومة للعوامل الجوية",
      "تركيب الهياكل الميدانية بالرافعات العملاقة",
      "هياكل المستودعات والمصانع عريضة البحور"
    ],
    equipmentEn: [
      "Automated CNC Plasma Beam Cutters",
      "Submerged Arc Heavy Welding Stations",
      "Hydraulic Steel Section Bending Machines"
    ],
    equipmentAr: [
      "ماكينات قص الجسور بالبلازما CNC",
      "محطات اللحام القوسي المغمور الثقيلة",
      "ماكينات ثني وتشكيل القطاعات الهيدروليكية"
    ],
    badgeColor: "grey",
    icon: "Hammer",
    images: [
      "/assets/images/service_steel_1_1794056102688.jpg",
      "/assets/images/service_mechanical_1794054778800.jpg",
      "/assets/images/service_civil_1794054780104.jpg"
    ]
  },
  {
    id: "telecom",
    numberBadge: "13",
    titleEn: "TELECOMMUNICATIONS INFRASTRUCTURE",
    titleAr: "بنية الاتصالات والشبكات",
    shortDescEn: "Telecom cell tower erection, microwave link alignment, BTS equipment installation, and fiber optic telemetry networks.",
    shortDescAr: "إنشاء أبراج الاتصالات، ضبط الوصلات الميكروية، تركيب محطات BTS، وشبكات الألياف البصرية.",
    fullDescEn: "Complete telecommunication infrastructure services including lattice tower erection, fiber optic laydown, microwave link alignment, cellular base station equipment setup, and solar-hybrid power supply for telecom operators.",
    fullDescAr: "خدمات متكاملة للبنية التحتية للاتصالات تشمل تشييد الأبراج الشبيكية، مد كابلات الألياف البصرية، محاذاة الوصلات الميكروية، وتركيب محطات البث الخلوي.",
    bulletsEn: [
      "Telecom Lattice & Monopole Tower Construction",
      "Microwave Link Alignment & Testing",
      "Base Transceiver Station (BTS) Installation",
      "Fiber Optic Backbone Network Laydown",
      "Solar Hybrid Remote Power Systems"
    ],
    bulletsAr: [
      "إنشاء الأبراج الهيكلية والشبيكية للاتصالات",
      "تركيب ومحاذاة أطباق الميكروويف",
      "تركيب وتجهيز محطات البث الرئيسية BTS",
      "تمديد شبكات كابلات الألياف الضوئية",
      "أنظمة الطاقة الشمسية الهجينة للأبراج"
    ],
    equipmentEn: [
      "Fiber Optic Fusion Splicers & OTDR Testers",
      "Microwave Link Spectrum Analyzers",
      "Tower Winch & Rigging Safety Systems"
    ],
    equipmentAr: [
      "أجهزة لحام وااختبار كابلات الألياف البصرية OTDR",
      "محللات الطيف الميكروي وتغطية الإشارة",
      "أنظمة الرفع والأمان لتركيب الأبراج"
    ],
    badgeColor: "orange",
    icon: "Radio",
    images: [
      "/assets/images/service_telecom_1_1794056102582.jpg",
      "/assets/images/service_automation_bms_1794645856994.jpg",
      "/assets/images/service_solar_1794054778024.jpg"
    ]
  },
  {
    id: "landscaping",
    numberBadge: "14",
    titleEn: "LANDSCAPING & EXTERIOR AESTHETICS",
    titleAr: "تنسيق الحدائق والأعمال الخارجية",
    shortDescEn: "Commercial landscape design, automated irrigation systems, lush greenery, and durable hardscaping paving.",
    shortDescAr: "تصميم الحدائق التجارية، أنظمة الري الأوتوماتيكية، المسطحات الخضراء، والأعمال الحجرية الصلبة.",
    fullDescEn: "Our landscaping experts craft outdoor environments that are both functional and beautiful. We transform landscapes into inviting and sustainable spaces, incorporating lush greenery, hardscape elements, lighting, and smart irrigation.",
    fullDescAr: "يقوم خبراء تنسيق الحدائق لدينا بابتكار بيئات خارجية تجمع بين الجمال والوظيفة. نحول المساحات إلى بيئات مستدامة تجمع بين المسطحات الخضراء والتبليط والأعمال الحجرية.",
    bulletsEn: [
      "Commercial Landscape Architecture Design",
      "Automated Smart Irrigation & Water Recycling",
      "Hardscaping Stone Paving & Retaining Walls",
      "Lush Greenery, Palms & Tree Planting",
      "Outdoor Architectural Lighting & Fountains"
    ],
    bulletsAr: [
      "تصميم الحدائق والهندسة الطبيعية للمشاريع",
      "أنظمة الري الذكية وإعادة تدوير المياه",
      "التبليط الحجري والجدران الاستنادية",
      "زراعة الأشجار والنخيل والمسطحات الخضراء",
      "الإضاءة الخارجية المعمارية والنافورات"
    ],
    equipmentEn: [
      "Smart Solenoid Irrigation Controllers",
      "Heavy Stone Paver Vacuum Lifters",
      "Commercial Soil Conditioning Machinery"
    ],
    equipmentAr: [
      "وحدات الري الإلكترونية الذكية",
      "معدات رفوع وتركيب البلاط الحجري الفراغية",
      "آلات تهيئة وتجهيز التربة التجارية"
    ],
    badgeColor: "gold",
    icon: "Trees",
    images: [
      "/assets/images/service_landscaping_1_1794056102631.jpg",
      "/assets/images/hero_tecknowave_building_1794054778502.jpg",
      "/assets/images/service_civil_1794054780104.jpg"
    ]
  },
  {
    id: "fitout",
    numberBadge: "15",
    titleEn: "INTERIOR FIT OUT & CUSTOMIZATION",
    titleAr: "التصميم والتجهيز الداخلي (Fit Out)",
    shortDescEn: "Bespoke interior fit-out, acoustic ceiling panels, custom wooden joinery, lighting design, and corporate office turnkeys.",
    shortDescAr: "التجهيزات الداخلية المخصصة، الأسقف الصوتية، النجارة الفاخرة، والإضاءة المعمارية للمكاتب.",
    fullDescEn: "Transforming empty spaces into functional works of art, our Fit-Out division specializes in interior customization. We bring creativity and precision to every project, ensuring spaces are beautifully designed and highly practical.",
    fullDescAr: "تحويل المساحات الفارغة إلى تحف فنية وعملية. يتخصص قسم التجهيزات الداخلية في تخصيص الديكورات المكتبيّة والتجارية بأعلى درجات الدقة والإبداع.",
    bulletsEn: [
      "Turnkey Corporate Office Interior Fit-Out",
      "Acoustic Ceiling & Wood Slatted Panels",
      "Custom Architectural Joinery & Carpentry",
      "Ergonomic Space Planning & Partitioning",
      "Bespoke Decorative Interior Lighting"
    ],
    bulletsAr: [
      "التجهيز الداخلي المتكامل للمكاتب والشركات",
      "الأسقف الصوتية والألواح الخشبية الديكورية",
      "أعمال النجارة والتفصيل المعماري المخصص",
      "تخطيط المساحات والتقسيمات الزجاجية",
      "أنظمة الإضاءة الديكورية والمعمارية"
    ],
    equipmentEn: [
      "Precision Wood CNC Router Stations",
      "Laser Alignment Ceiling Fitting Tools",
      "Dust-Free Sanding & Spray Painting Booths"
    ],
    equipmentAr: [
      "آلات النجارة والتوجيه الخشبي الدقيقة CNC",
      "أدوات ضبط ومحاذاة الأسقف بالليزر",
      "كابينات الرش والدهان الخالية من الغبار"
    ],
    badgeColor: "grey",
    icon: "Layout",
    images: [
      "/assets/images/service_joinery_fitout_1794645855631.jpg",
      "/assets/images/service_fitout_1_1794056102476.jpg",
      "/assets/images/service_finishing_masonry_1794645854904.jpg"
    ]
  },
  {
    id: "finishing",
    numberBadge: "16",
    titleEn: "FINISHING WORK & ARCHITECTURAL MASONRY",
    titleAr: "أعمال التشطيبات والكسوة المعمارية",
    shortDescEn: "High-end carved stone masonry, ornamental plaster ceiling craft, epoxy flooring, and exterior building cladding.",
    shortDescAr: "أعمال النحت الحجري الفاخر، الجبس الزخرفي، أرضيات الإيبوكسي، وكسوة الواجهات الخارجية.",
    fullDescEn: "Delivering architectural excellence with precision carved stone masonry, ornamental plaster ceiling detailing, high-end marble/granite tile work, precision epoxy flooring, and meticulous exterior surface cladding.",
    fullDescAr: "تقديم التميز المعماري من خلال أعمال النحت الحجري الدقيق، الجبس الزخرفي للأسقف، تركيب الرخام والجرانيت، وأرضيات الإيبوكسي المقاومة.",
    bulletsEn: [
      "Architectural Stone Carving & Marble Masonry",
      "Ornamental Molded Plaster Ceiling Crafting",
      "High-Durability Industrial Epoxy Flooring",
      "Exterior Architectural Cladding & Painting",
      "Custom Interior Surface Finishing & Tiles"
    ],
    bulletsAr: [
      "نحت الحجارة المعمارية وأعمال الرخام",
      "الجبس الزخرفي المشكل للأسقف والمداخل",
      "أرضيات الإيبوكسي الصناعية عالية التحمل",
      "دهانات وتكسية الواجهات الخارجية",
      "تشطيبات الأسطح والسيراميك عالي الجودة"
    ],
    equipmentEn: [
      "Diamond Waterjet Stone Cutting Tools",
      "Epoxy Floor Application Power Scrapers",
      "Architectural Mold Casting Stations"
    ],
    equipmentAr: [
      "قواطع الرخام والماس المائية عالية الدقة",
      "معدات فرد وصقل أرضيات الإيبوكسي",
      "قوالب صب الزخارف والجبس المعماري"
    ],
    badgeColor: "gold",
    icon: "Sparkles",
    images: [
      "/assets/images/service_finishing_masonry_1794645854904.jpg",
      "/assets/images/service_joinery_fitout_1794645855631.jpg",
      "/assets/images/service_fitout_1_1794056102476.jpg"
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    titleEn: "50MW Commercial Solar Field & Grid Substation",
    titleAr: "حقل طاقة شمسية تجاري قدرة 50 ميجاوات ومحطة تحويل",
    category: "solar",
    categoryLabelEn: "SOLAR ENERGY",
    categoryLabelAr: "الطاقة الشمسية",
    locationEn: "Riyadh Industrial Park, KSA",
    locationAr: "المدينة الصناعية بالرياض، المملكة العربية السعودية",
    year: "2025",
    descriptionEn: "Turnkey EPC contract including PV array supply, solar tracking mounting structures, 33kV grid synchronization, and automated monitoring station.",
    descriptionAr: "عقد هندسة وتوريد وإنشاء متكامل يشمل الألواح الكهروضوئية وهياكل التتبع والربط بالشبكة الكهربائية بقدرة 33 كيلوفولت.",
    specsEn: ["50MW Peak Power Capacity", "Turnkey EPC Contract Execution", "Scavenger Automated Solar Tracking"],
    specsAr: ["قدرة 50 ميجاوات ذروة", "تنفيذ متكامل تسليم مفتاح EPC", "أنظمة تتبع شمسية آلية"],
    image: "/assets/images/service_solar_1794054778024.jpg"
  },
  {
    id: "proj-2",
    titleEn: "High Voltage Industrial Substation & Distribution Unit",
    titleAr: "محطة تحويل وتوزيع كهربائية للضغط العالي",
    category: "electrical",
    categoryLabelEn: "ELECTRICAL POWER",
    categoryLabelAr: "الطاقة والكهرباء",
    locationEn: "Dammam Port Logistics Zone",
    locationAr: "منطقة الميناء اللوجستية بالدمام",
    year: "2024",
    descriptionEn: "Design, supply, and commissioning of 33kV/11kV medium & low voltage switchgears, SCADA control panels, and power calibration units.",
    descriptionAr: "تصميم وتوريد وتشغيل لوحات التوزيع والمفاتيح الكهربائية للضغط المتوسط والمنخفض وأنظمة التحكم SCADA.",
    specsEn: ["33kV/11kV Substation", "SCADA Telemetry Instrumentation", "Zero-Downtime Installation"],
    specsAr: ["محطة 33/11 كيلوفولت", "أجهزة تحكم ورصد رقمية SCADA", "تركيب دون إيقاف التشغيل"],
    image: "/assets/images/service_electrical_1794054778762.jpg"
  },
  {
    id: "proj-3",
    titleEn: "Heavy Industrial Mechanical Process Piping & CAD Simulation",
    titleAr: "أنابيب معالجة ميكانيكية صناعية ونمذجة ثلاثية الأبعاد",
    category: "mep",
    categoryLabelEn: "MEP SOLUTIONS",
    categoryLabelAr: "الحلول الكهروميكانيكية",
    locationEn: "Jubail Petrochemical Complex",
    locationAr: "مجمع الجبيل للبتروكيماويات",
    year: "2024",
    descriptionEn: "3D CAD modeling, stress analysis, process piping laydown, and high-pressure steam valve calibration for petrochemical refinery plants.",
    descriptionAr: "نمذجة ثلاثية الأبعاد، تحليل إجهادات الأنابيب، وتمديد خطوط البخار والضغط العالي لمصفاة البتروكيماويات.",
    specsEn: ["CAD/CAE Finite Element Prototyping", "High-Pressure Stainless Piping", "PDM/PLM System Setup"],
    specsAr: ["نمذجة ومحاكاة ثلاثية الأبعاد CAD/CAE", "أنابيب فولاذية للضغط العالي", "تأسيس أنظمة PDM/PLM"],
    image: "/assets/images/service_mechanical_1794054778800.jpg"
  },
  {
    id: "proj-4",
    titleEn: "Corporate Township & Commercial Office Complex",
    titleAr: "مجمع مكاتب تجاري ومدينة مؤسسية",
    category: "construction",
    categoryLabelEn: "CIVIL CONSTRUCTION",
    categoryLabelAr: "الإنشاءات المدنية",
    locationEn: "Malaz Corporate District, Riyadh",
    locationAr: "حي الملز الإداري، الرياض",
    year: "2023",
    descriptionEn: "Mechanized foundation pouring, multi-story reinforced concrete framing, office fit-out, and commercial infrastructure mapping.",
    descriptionAr: "أساسات خرسانية مميكنة، تشييد الهياكل الخرسانية متعددة الطوابق، التجهيز الداخلي، والبنية التحتية.",
    specsEn: ["42,000 m² Built-Up Area", "Mechanized Concrete Systems", "Turnkey Building Handover"],
    specsAr: ["مساحة بناء 42,000 متر مربع", "أنظمة صب خرساني مميكنة", "تسليم المبنى جاهز للتشغيل"],
    image: "/assets/images/service_civil_1794054780104.jpg"
  },
  {
    id: "proj-5",
    titleEn: "Heavy Structural Steel Fabrication & Plant Erection",
    titleAr: "تصنيع وتشييد الهياكل الحديدية للمصانع",
    category: "steel",
    categoryLabelEn: "STEEL FABRICATION",
    categoryLabelAr: "تصنيع الحديد",
    locationEn: "Yanbu Industrial Port Site",
    locationAr: "منطقة ميناء ينبع الصناعي",
    year: "2024",
    descriptionEn: "Custom steel truss fabrication, anti-corrosion galvanization, certified arc welding, and crane erection for high-capacity industrial plants.",
    descriptionAr: "تصنيع الجمالونات الحديدية، الجلفنة المقاومة للتآكل، اللحام المعتمد، وتركيب الجسور بالرافعات.",
    specsEn: ["3,200 Tons Fabricated Structural Steel", "EN ISO 3834 Certified Welding", "Heavy Crane Field Erection"],
    specsAr: ["3,200 طن من الحديد الهيكلي المصنع", "لحام معتمد وفق معايير ISO", "تركيب ميداني بالرافعات الثقيلة"],
    image: "/assets/images/service_steel_1_1794056102688.jpg"
  },
  {
    id: "proj-6",
    titleEn: "National Telecommunication Lattice Tower Network",
    titleAr: "شبكة أبراج الاتصالات الشبيكية الوطنية",
    category: "telecom",
    categoryLabelEn: "TELECOMMUNICATIONS",
    categoryLabelAr: "الاتصالات",
    locationEn: "Central Province Region, KSA",
    locationAr: "المنطقة الوسطى، المملكة العربية السعودية",
    year: "2025",
    descriptionEn: "Civil pad foundation, lattice tower erection, microwave alignment, BTS shelter setup, and solar-hybrid power supply for 65 telecom sites.",
    descriptionAr: "الأساسات المدنية، تشييد الأبراج الشبيكية، محاذاة أطباق الميكروويف، وتزويد 65 موقعاً بالطاقة الشمسية الهجينة.",
    specsEn: ["65 Telecom Lattice Towers", "Microwave Link Alignment", "Solar Hybrid Off-Grid Power"],
    specsAr: ["65 برج اتصالات شبيكي", "محاذاة وصلات الميكروويف", "أنظمة طاقة شمسية هجينة"],
    image: "/assets/images/service_telecom_1_1794056102582.jpg"
  }
];

export const SATISFIED_CLIENTS: ClientItem[] = [
  { name: "Amazon", categoryEn: "Global Logistics & Cloud", categoryAr: "اللوجستيات والسحابية العالمية", logoText: "amazon", bgGradient: "from-orange-500 to-amber-600" },
  { name: "Lockheed Martin", categoryEn: "Defense & Aerospace", categoryAr: "الدفاع والدراسات الجوية", logoText: "LOCKHEED MARTIN", bgGradient: "from-blue-700 to-slate-900" },
  { name: "Accenture", categoryEn: "Global Tech & Consulting", categoryAr: "الاستشارات والاستشارات التقنية", logoText: "accenture", bgGradient: "from-purple-600 to-indigo-800" },
  { name: "Landmark Group", categoryEn: "Retail & Hospitality", categoryAr: "التجزئة والضيافة", logoText: "LANDMARK GROUP", bgGradient: "from-amber-500 to-orange-600" },
  { name: "STC", categoryEn: "Telecommunications Leader", categoryAr: "شركة الاتصالات السعودية", logoText: "stc", bgGradient: "from-violet-600 to-purple-900" },
  { name: "Al Rashed Food Group", categoryEn: "FMCG & Food Processing", categoryAr: "مجموعة الراشد للأغذية", logoText: "Al Rashed Food Group", bgGradient: "from-emerald-600 to-teal-800" },
  { name: "Coca-Cola", categoryEn: "Global Beverage Corp", categoryAr: "شركة كوكاكولا العالمية", logoText: "Coca-Cola", bgGradient: "from-red-600 to-rose-800" },
  { name: "Almarai", categoryEn: "Dairy & Food Giant", categoryAr: "شركة المراعي للأغذية", logoText: "Almarai", bgGradient: "from-blue-600 to-sky-700" },
  { name: "Salini Saudi Arabia", categoryEn: "Heavy Infrastructure & EPC", categoryAr: "ساليني السعودية للبنية التحتية", logoText: "salini saudi arabia", bgGradient: "from-amber-600 to-orange-700" },
  { name: "Mobily", categoryEn: "Telecom Operator", categoryAr: "شركة موبايلي للاتصالات", logoText: "Mobily", bgGradient: "from-cyan-600 to-blue-700" },
  { name: "Shapoorji Pallonji", categoryEn: "Global Construction EPC", categoryAr: "شابورجي بالونجي للمقاولات", logoText: "Shapoorji Pallonji", bgGradient: "from-slate-700 to-slate-900" },
  { name: "Arabtec", categoryEn: "Civil Engineering & Contracting", categoryAr: "أرابتك للمقاولات والهندسة", logoText: "arabtec", bgGradient: "from-rose-600 to-red-800" }
];
