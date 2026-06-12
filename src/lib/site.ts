export interface Phone {
  label: string;
  tel: string;
}

export interface Branch {
  id: string;
  title: string;
  badge?: string;
  address: string;
  district: string;
  hours: string;
  areaSqm?: number;
  seats?: number;
  /** [lat, lon] — точные координаты здания (геокодированы по адресу, OSM Nominatim 2026-06-12) */
  coords: [number, number];
}

export interface Category {
  code: string;
  title: string;
  subtitle: string;
  description: string;
  icon: 'motorcycle' | 'car' | 'truck';
  popular: boolean;
}

export interface FleetCar {
  id: number;
  brand: string;
  model: string;
  plate: string;
  trans: 'МКПП' | 'АКПП';
  cat: 'A' | 'B';
  photo: string | null;
  /** Добавлена после регистрации в лицензионном МТО-акте. Если false — машина используется, но в МТО-акт ещё не внесена. */
  inLicenseMTO: boolean;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

export interface License {
  number: string;
  series: string;
  blankNumber: string;
  issuedBy: string;
  issuedAt: string;
  fileUrl: string;
  extractFileUrl: string;
}

export interface Promo {
  freeIntroLesson: boolean;
  rassrochkaMinFirstPayment: number;
}

/** Реквизиты организации — для футера, договоров, /sveden/common/ */
export interface LegalInfo {
  fullName: string;
  shortName: string;
  legalAddress: string;
  inn: string;
  kpp: string;
  ogrn: string;
  okpo: string;
  bank: string;
  foundedOn: string;
  okved: string;
}

/** Руководитель — для /sveden/struct/ */
export interface Director {
  name: string;
  position: string;
  since: string;
  contactHint: string;
}

/** Педагогический работник — для /sveden/employees/ */
export interface Employee {
  id: string;
  name: string;
  role: 'teacher' | 'instructor' | 'teacher_instructor';
  positionRu: string;
  education: string;
  driverCategories?: string;
  notes?: string;
  photoApproved: boolean;
  photoUrl: string | null;
}

/** Обязательный документ — для /sveden/document/ */
export interface LegalDocument {
  id: string;
  title: string;
  date?: string;
  fileUrl: string;
  category: 'charter' | 'license' | 'rules' | 'inspection' | 'program' | 'other';
  available: boolean;
}

export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  url: string;
  domain: string;
  foundedYear: number;
  phones: Phone[];
  email: string;
  whatsapp: string;
  telegram: string;
  socials: { vk: string };
  priceFrom: number;
  cars: number;
  motorcycles: number;
  branches: Branch[];
  categories: Category[];
  fleet: FleetCar[];
  stats: Stat[];
  license: License;
  legal: LegalInfo;
  director: Director;
  employees: Employee[];
  documents: LegalDocument[];
  promo: Promo;
  platformArea: { address: string; sizeHa: number; since: number };
}

/**
 * Данные автошколы АС-Луч (ЧУ ДПО «Луч»).
 * Источники:
 * — старый сайт as-luch.ru (раздел «Материально-техническое обеспечение», документы)
 * — стенд «Учебная документация» в классе Леонова 60 (фото от Ирины 2026-04-23)
 * — фотосессия автопарка 2026-04-23 (4 машины, 4 инструктора)
 * — ЕГРЮЛ (директор, учредитель, ОКВЭД)
 * — интервью с Никульской О.К. 2026-04-19 и Ириной 2026-04-21
 */
export const SITE: SiteConfig = {
  name: 'Автошкола «АС-Луч»',
  legalName: 'ЧУ ДПО «Луч»',
  tagline: 'Автошкола в Перми с 2002 года',
  url: 'https://as-luch.ru',
  domain: 'as-luch.ru',
  foundedYear: 2002,
  phones: [
    { label: '8-912 884-19-43', tel: '+79128841943' },
    { label: '(342) 226-41-41', tel: '+73422264141' },
  ],
  email: 'Nikulskaya_olga@mail.ru',
  whatsapp: 'https://wa.me/79128841943',
  telegram: 'https://t.me/+79128841943',
  socials: {
    vk: 'https://vk.com/club9871523',
  },
  priceFrom: 36000,
  cars: 8,
  motorcycles: 2,
  branches: [
    {
      id: 'kombaynerov',
      title: 'ул. Комбайнёров, 39',
      badge: 'Главный офис',
      address: 'Пермь, ул. Комбайнёров, 39 — 1 этаж',
      district: 'Свердловский район',
      hours: 'Пн-Пт 9:00–20:00, Сб 10:00–18:00',
      areaSqm: 75.7,
      seats: 16,
      coords: [57.9757655, 56.1843189],
    },
    {
      id: 'leonova',
      title: 'ул. Леонова, 60',
      address: 'Пермь, ул. Леонова, 60',
      district: 'Индустриальный район',
      hours: 'Ежедневно 10:00–17:00',
      areaSqm: 56.7,
      seats: 16,
      coords: [57.9646476, 56.1766549],
    },
    {
      id: 'kondratovo',
      title: 'д. Кондратово',
      address: 'д. Кондратово, ул. Садовое кольцо, 14',
      district: 'Пермский район',
      hours: 'Уточняется',
      areaSqm: 61.1,
      seats: 16,
      coords: [57.9750409, 56.1015245],
    },
    {
      id: 'gamovo',
      title: 'д. Гамово',
      address: 'Пермский край, д. Гамово, ул. 50 лет Октября, 1',
      district: 'Пермский район',
      hours: 'Уточняется',
      areaSqm: 40.5,
      seats: 10,
      coords: [57.8689722, 56.0986123],
    },
  ],
  categories: [
    {
      code: 'A',
      title: 'Категория A',
      subtitle: 'Мотоцикл',
      description: 'Мотоциклы и мопеды. Обучаем с 16 лет. Собственный мотопарк — 2 мотоцикла.',
      icon: 'motorcycle',
      popular: false,
    },
    {
      code: 'B',
      title: 'Категория B',
      subtitle: 'Легковой автомобиль',
      description: 'Автомобили до 3 500 кг, до 8 пассажирских мест. Основная категория. МКПП или АКПП.',
      icon: 'car',
      popular: true,
    },
  ],
  fleet: [
    // Категория B — 8 машин (лицензионный МТО-акт) + 2 новых не в акте
    { id: 1, brand: 'Lada',      model: 'Granta',     plate: 'Р982 АТ 159', trans: 'МКПП', cat: 'B', photo: null, inLicenseMTO: true },
    { id: 2, brand: 'Renault',   model: 'Logan',      plate: 'М114 КУ 159', trans: 'МКПП', cat: 'B', photo: null, inLicenseMTO: true },
    { id: 3, brand: 'Lada',      model: 'Granta',     plate: 'К888 ЕК 159', trans: 'МКПП', cat: 'B', photo: null, inLicenseMTO: true },
    { id: 4, brand: 'Lada',      model: '219010',     plate: 'Р687 СЕ 159', trans: 'МКПП', cat: 'B', photo: '/images/fleet/lada-219/car-summer-01.jpg', inLicenseMTO: true },
    { id: 5, brand: 'Kia',       model: 'Rio',        plate: 'М871 РО 159', trans: 'АКПП', cat: 'B', photo: null, inLicenseMTO: true }, // фото только с лицом инструктора — не публикуем (правило: без лиц)
    { id: 6, brand: 'Nissan',    model: 'Almera',     plate: 'М300 КХ 159', trans: 'АКПП', cat: 'B', photo: null, inLicenseMTO: true },
    { id: 7, brand: 'Lada',      model: 'Vesta',      plate: 'А888 РЕ 159', trans: 'МКПП', cat: 'B', photo: null, inLicenseMTO: true },
    { id: 8, brand: 'Hyundai',   model: 'Getz',       plate: 'О517 ЕА 159', trans: 'МКПП', cat: 'B', photo: null, inLicenseMTO: true },
    // Новые (не в МТО-акте — не публикуем на сайте до регистрации в ГАИ).
    // Инструкторы за этими машинами тоже не зарегистрированы в реестре ГАИ → их фото с лицами в публичный доступ НЕ выводим.
    { id: 9,  brand: 'Lada',     model: 'Granta',     plate: 'О302 ХС 159', trans: 'МКПП', cat: 'B', photo: '/images/fleet/granta-black/car-winter-01.jpg', inLicenseMTO: false },
    { id: 10, brand: 'Lada',     model: 'Vesta NEW',  plate: 'Р495 КХ 159', trans: 'МКПП', cat: 'B', photo: null, inLicenseMTO: false },
    // Категория A — 2 мотоцикла
    { id: 11, brand: 'Motoland', model: '',           plate: '7334 АН 159', trans: 'МКПП', cat: 'A', photo: null, inLicenseMTO: true },
    { id: 12, brand: 'Regulmoto',model: 'RM125',      plate: '5384 АН 59',  trans: 'МКПП', cat: 'A', photo: null, inLicenseMTO: true },
  ],
  stats: [
    { value: 23, suffix: ' года', label: 'на рынке Перми' },
    { value: 4,  suffix: '',      label: 'учебных класса' },
    { value: 8,  suffix: '',      label: 'учебных автомобилей' },
    { value: 12, suffix: '',      label: 'педагогов и инструкторов' },
  ],
  license: {
    number: '5402',
    series: '59Л01',
    blankNumber: '0003297',
    issuedBy: 'Государственная инспекция по надзору и контролю в сфере образования Пермского края',
    issuedAt: '2016-05-16',
    fileUrl: '/docs/license.pdf',
    extractFileUrl: '/docs/reestrovaya-vipiska.pdf',
  },
  legal: {
    fullName: 'Частное учреждение дополнительного профессионального обучения «Луч»',
    shortName: 'ЧУ ДПО «Луч»',
    legalAddress: '614065, Пермский край, г. Пермь, ул. Комбайнёров, д. 39',
    inn: '5905221816',
    kpp: '590501001',
    ogrn: '1025901212380',
    okpo: '26619694',
    bank: 'АКБ «Транскапиталбанк»',
    foundedOn: '2002-10-07',
    okved: '85.42.1 — Деятельность школ подготовки водителей автотранспортных средств',
  },
  director: {
    name: 'Никульская Ольга Константиновна',
    position: 'Директор',
    since: '2020-12-23',
    contactHint: 'Связь через приёмную: (342) 226-41-41 или по e-mail Nikulskaya_olga@mail.ru',
  },
  employees: [
    // --- Преподаватели теории (6) ---
    {
      id: 'vishnyakova-ev',
      name: 'Вишнякова Е.В.',
      role: 'teacher',
      positionRu: 'Преподаватель базового и специального цикла',
      education: 'Высшее. Пермский государственный педагогический институт (диплом ФВ №279109)',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'lysenko-aa',
      name: 'Лысенко А.А.',
      role: 'teacher_instructor',
      positionRu: 'Преподаватель и мастер производственного обучения',
      education: 'СПО, повышенный уровень. ГОУ СПО «Строгановский колледж» (диплом №1265)',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'svetlakov-am',
      name: 'Светлаков А.М.',
      role: 'teacher',
      positionRu: 'Преподаватель базового и специального цикла (договор ГПХ)',
      education: 'Пермский авиатехникум + Уральская академия',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'perminov-am',
      name: 'Перминов А.М.',
      role: 'teacher_instructor',
      positionRu: 'Преподаватель и мастер производственного обучения',
      education: 'Пермская сельскохозяйственная академия (ПСХА)',
      driverCategories: 'A, A1, B, B1, C, C1, M',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'maltseva-sa',
      name: 'Мальцева С.А.',
      role: 'teacher',
      positionRu: 'Преподаватель «Оказание первой помощи»',
      education: 'Ленинградский санитарно-эпидемиологический медицинский институт',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'oglezneva-sg',
      name: 'Оглезнева С.Г.',
      role: 'teacher',
      positionRu: 'Преподаватель базового и специального цикла',
      education: 'Пермский политехнический институт (диплом РВ 457152)',
      photoApproved: false,
      photoUrl: null,
    },
    // --- Мастера производственного обучения (инструкторы) (6 отдельных) ---
    {
      id: 'kasimov-rv',
      name: 'Касимов Р.В.',
      role: 'instructor',
      positionRu: 'Мастер производственного обучения',
      education: 'Среднее профессиональное',
      driverCategories: 'B, B1, M',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'sharapov-dv',
      name: 'Шарапов Д.В.',
      role: 'instructor',
      positionRu: 'Мастер производственного обучения',
      education: 'Среднее профессиональное',
      driverCategories: 'B, B1, C, C1, M',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'kuznetsov-da',
      name: 'Кузнецов Д.А.',
      role: 'instructor',
      positionRu: 'Мастер производственного обучения',
      education: 'Среднее профессиональное',
      driverCategories: 'B, B1, M',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'medvedev-ms',
      name: 'Медведев М.С.',
      role: 'instructor',
      positionRu: 'Мастер производственного обучения',
      education: 'Среднее профессиональное',
      driverCategories: 'B, B1, C, C1, M',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'sagadiev-st',
      name: 'Сагадиев С.Т.',
      role: 'instructor',
      positionRu: 'Мастер производственного обучения',
      education: 'Среднее профессиональное',
      driverCategories: 'B, B1, C, C1',
      photoApproved: false,
      photoUrl: null,
    },
    {
      id: 'shmakov-an',
      name: 'Шмаков А.Н.',
      role: 'instructor',
      positionRu: 'Мастер производственного обучения',
      education: 'Среднее профессиональное',
      driverCategories: 'A, A1, B, B1, C, C1, D, D1, BE, CE, C1E, DE, M',
      notes: 'Все категории прав',
      photoApproved: false,
      photoUrl: null,
    },
  ],
  documents: [
    // Доступные — есть в /docs/source/
    { id: 'charter', title: 'Устав ЧУ ДПО «Луч»', fileUrl: '/docs/ustav.pdf', category: 'charter', available: true },
    { id: 'rules-workers', title: 'Правила внутреннего трудового распорядка для работников', fileUrl: '/docs/pravila-trudovogo-rasporyadka.pdf', category: 'rules', available: true },
    { id: 'rules-students', title: 'Правила внутреннего распорядка обучающихся', fileUrl: '/docs/pravila-rasporyadka-obuchayushihsya.pdf', category: 'rules', available: true },
    { id: 'mto-2026', title: 'Акт обследования учебно-материальной базы (кат. A, B)', date: '2026-03-03', fileUrl: '/docs/akt-obsledovaniya-2026-03-03.pdf', category: 'inspection', available: true },
    { id: 'mto-2025', title: 'Акт самообследования учебно-материальной базы (кат. A, B, C)', date: '2025-02-14', fileUrl: '/docs/akt-obsledovaniya-2025-02-14.pdf', category: 'inspection', available: true },
    { id: 'gai-100', title: 'Заключение ГАИ № 100', date: '2026-03-04', fileUrl: '/docs/zaklyuchenie-gai-100-2026.pdf', category: 'inspection', available: true },
    { id: 'extract', title: 'Выписка из реестра лицензий', fileUrl: '/docs/reestrovaya-vipiska.pdf', category: 'license', available: true },
    { id: 'program-a', title: 'Образовательная программа категории A', fileUrl: '/docs/programma-kategoria-A.pdf', category: 'program', available: true },
    // Отсутствуют — запрошены у мамы
    { id: 'license', title: 'Лицензия № 5402 от 16.05.2016 (с приложениями)', fileUrl: '', category: 'license', available: false },
    { id: 'admission-rules', title: 'Правила приёма обучающихся', fileUrl: '', category: 'rules', available: false },
    { id: 'paid-contract', title: 'Образец договора на обучение', fileUrl: '', category: 'rules', available: false },
    { id: 'price-order', title: 'Приказ об утверждении стоимости обучения', fileUrl: '', category: 'rules', available: false },
    { id: 'program-b', title: 'Образовательная программа категории B', fileUrl: '', category: 'program', available: false },
    { id: 'self-report-2025', title: 'Отчёт о результатах самообследования за 2025 год', fileUrl: '', category: 'inspection', available: false },
  ],
  promo: {
    freeIntroLesson: true,
    rassrochkaMinFirstPayment: 3000,
  },
  platformArea: {
    address: 'Пермский край, Пермский район, д. Ясыри',
    sizeHa: 0.28,
    since: 2013,
  },
};

export const NAV_LINKS = [
  { href: '#categories', label: 'Категории' },
  { href: '#process',    label: 'Как учимся' },
  { href: '#pricing',    label: 'Цена' },
  { href: '#fleet',      label: 'Автопарк' },
  { href: '#branches',   label: 'Филиалы' },
  { href: '#faq',        label: 'Вопросы' },
];

/**
 * Обязательная навигация по разделу «Сведения об образовательной организации».
 * Структура задана Приказом Рособрнадзора № 1493 от 14.08.2020.
 * Штраф за отсутствие раздела или несоответствие структуры — 100-200 тыс. ₽ по ст. 19.30 КоАП.
 */
export const SVEDEN_LINKS: ReadonlyArray<{ href: string; label: string }> = [
  { href: '/sveden/common',       label: 'Основные сведения' },
  { href: '/sveden/struct',       label: 'Структура и органы управления' },
  { href: '/sveden/document',     label: 'Документы' },
  { href: '/sveden/education',    label: 'Образование' },
  { href: '/sveden/eduStandarts', label: 'Стандарты и требования' },
  { href: '/sveden/employees',    label: 'Руководство. Педсостав' },
  { href: '/sveden/objects',      label: 'Материально-техническое обеспечение' },
  { href: '/sveden/paid_edu',     label: 'Платные образовательные услуги' },
  { href: '/sveden/budget',       label: 'Финансово-хозяйственная деятельность' },
  { href: '/sveden/vacant',       label: 'Вакантные места' },
  { href: '/sveden/inter',        label: 'Международное сотрудничество' },
  { href: '/sveden/grants',       label: 'Стипендии и меры поддержки' },
];
