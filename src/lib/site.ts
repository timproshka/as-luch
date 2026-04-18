export const SITE = {
  name: 'Автошкола «АС-Луч»',
  legalName: 'ЧУДПО «Луч»',
  tagline: 'Автошкола в Перми с 2002 года',
  url: 'https://as-luch.ru',
  domain: 'as-luch.ru',
  foundedYear: 2002,
  phones: [
    { label: '8-912 884-19-43', tel: '+79128841943' },
    { label: '(342) 226-41-41', tel: '+73422264141' },
  ],
  email: 'info@as-luch.ru', // заглушка — уточнить
  whatsapp: 'https://wa.me/79128841943',
  telegram: 'https://t.me/+79128841943',
  socials: {
    vk: 'https://vk.com/club9871523',
  },
  priceFrom: 36000,
  cars: 8,
  graduates: '10 000+',
  examPassRate: '95%', // заглушка для лендинга, уточнить реальную
  branches: [
    {
      id: 'kombaynerov',
      title: 'ул. Комбайнёров, 39',
      badge: 'Главный офис',
      address: 'Пермь, ул. Комбайнёров, 39 — 1 этаж',
      district: 'Свердловский район',
      hours: 'Уточняется',
      coords: [58.003456, 56.231234], // placeholder, подправить после забора Я.Карт
    },
    {
      id: 'leonova',
      title: 'ул. Леонова, 60',
      address: 'Пермь, ул. Леонова, 60',
      district: 'Индустриальный район',
      hours: 'Уточняется',
      coords: [58.00001, 56.17000],
    },
    {
      id: 'gamovo',
      title: 'с. Гамово',
      address: 'Пермский район, с. Гамово',
      district: 'Пермский район (пригород)',
      hours: 'Уточняется',
      coords: [57.92000, 56.14000],
    },
  ],
  categories: [
    {
      code: 'A',
      title: 'Категория A',
      subtitle: 'Мотоцикл',
      description: 'Мотоциклы, включая с боковым прицепом. С 16 лет.',
      icon: 'motorcycle',
      popular: false,
    },
    {
      code: 'B',
      title: 'Категория B',
      subtitle: 'Легковой автомобиль',
      description: 'Автомобили до 3 500 кг, до 8 пассажирских мест. Основная категория.',
      icon: 'car',
      popular: true,
    },
    {
      code: 'C',
      title: 'Категория C',
      subtitle: 'Грузовой автомобиль',
      description: 'Грузовые автомобили свыше 3 500 кг. С 18 лет.',
      icon: 'truck',
      popular: false,
    },
  ],
  promo: {
    studentDiscount: 10, // %, решение на своё усмотрение
    freeIntroLesson: true,
    referralBonus: 3000,
  },
  stats: [
    { value: 23, suffix: ' лет', label: 'на рынке Перми' },
    { value: 10000, suffix: '+', label: 'выпускников' },
    { value: 8, suffix: '', label: 'учебных автомобилей' },
    { value: 3, suffix: '', label: 'филиала в Перми и пригороде' },
  ],
  license: {
    // заглушка — уточнить у клиента
    number: '—',
    issuedBy: 'Министерство образования Пермского края',
    issuedAt: '—',
    fileUrl: '/docs/license.pdf',
  },
};

export const NAV_LINKS = [
  { href: '#categories', label: 'Категории' },
  { href: '#process', label: 'Как учимся' },
  { href: '#pricing', label: 'Цена' },
  { href: '#fleet', label: 'Автопарк' },
  { href: '#branches', label: 'Филиалы' },
  { href: '#faq', label: 'Вопросы' },
];
