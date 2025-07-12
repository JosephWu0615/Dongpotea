export interface SubscriptionPlan {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  descriptionChinese: string;
  shortDescription: string;
  shortDescriptionChinese: string;
  price: number;
  originalPrice?: number;
  frequency: 'monthly' | 'bi-monthly' | 'quarterly';
  frequencyChinese: string;
  duration: number; // in months
  teaQuantity: number; // grams per shipment
  teaVarieties: number; // number of different teas
  features: string[];
  featuresChinese: string[];
  included: SubscriptionItem[];
  benefits: string[];
  benefitsChinese: string[];
  image: string;
  images: string[];
  popular: boolean;
  newCustomerDiscount?: number;
  freeShipping: boolean;
  cancellable: boolean;
  giftable: boolean;
  customizable: boolean;
  trialAvailable: boolean;
}

export interface SubscriptionItem {
  id: string;
  name: string;
  nameChinese: string;
  type: 'tea' | 'accessory' | 'guide' | 'surprise';
  typeChinese: string;
  description: string;
  descriptionChinese: string;
  quantity?: number;
  guarantee: boolean;
}

export interface SubscriptionBenefit {
  id: string;
  title: string;
  titleChinese: string;
  description: string;
  descriptionChinese: string;
  icon: string;
  category: 'convenience' | 'savings' | 'experience' | 'community';
}

export interface SubscriptionTestimonial {
  id: string;
  name: string;
  nameChinese: string;
  location: string;
  locationChinese: string;
  plan: string;
  rating: number;
  quote: string;
  quoteChinese: string;
  image: string;
  subscriptionLength: string;
  subscriptionLengthChinese: string;
}

export const subscriptionBenefits: SubscriptionBenefit[] = [
  {
    id: 'convenience',
    title: 'Never Run Out',
    titleChinese: '永不斷貨',
    description: 'Automatic deliveries ensure you always have premium tea at home',
    descriptionChinese: '自動配送確保您家中總有優質茶葉',
    icon: '📦',
    category: 'convenience'
  },
  {
    id: 'savings',
    title: 'Exclusive Savings',
    titleChinese: '專屬優惠',
    description: 'Save up to 25% compared to one-time purchases',
    descriptionChinese: '比一次性購買節省高達25%',
    icon: '💰',
    category: 'savings'
  },
  {
    id: 'discovery',
    title: 'Discover New Teas',
    titleChinese: '探索新茶',
    description: 'Experience rare and seasonal varieties you can\'t find elsewhere',
    descriptionChinese: '體驗您在其他地方找不到的稀有和季節性品種',
    icon: '🌟',
    category: 'experience'
  },
  {
    id: 'priority',
    title: 'Priority Access',
    titleChinese: '優先享用',
    description: 'First access to limited editions and harvest releases',
    descriptionChinese: '優先獲得限量版和收成發布',
    icon: '⭐',
    category: 'experience'
  },
  {
    id: 'community',
    title: 'Tea Community',
    titleChinese: '茶友社區',
    description: 'Join our subscriber-only community and events',
    descriptionChinese: '加入我們的訂閱者專屬社區和活動',
    icon: '👥',
    category: 'community'
  },
  {
    id: 'flexibility',
    title: 'Full Flexibility',
    titleChinese: '完全靈活',
    description: 'Pause, skip, or cancel anytime with no penalties',
    descriptionChinese: '隨時暫停、跳過或取消，無任何罰金',
    icon: '🔄',
    category: 'convenience'
  }
];

export const subscriptionPlans: SubscriptionPlan[] = [
  {
    id: 'tea-explorer',
    name: 'Tea Explorer',
    nameChinese: '茶葉探索者',
    description: 'Perfect for beginners and curious tea drinkers who want to explore the diverse world of Taiwanese tea. Each month brings new discoveries and learning opportunities.',
    descriptionChinese: '適合想要探索台灣茶多樣世界的初學者和好奇的茶友。每月帶來新的發現和學習機會。',
    shortDescription: 'Monthly tea discovery for beginners',
    shortDescriptionChinese: '初學者每月茶葉探索',
    price: 39,
    originalPrice: 52,
    frequency: 'monthly',
    frequencyChinese: '每月',
    duration: 3,
    teaQuantity: 150,
    teaVarieties: 3,
    features: [
      '3 different tea varieties (50g each)',
      'Detailed tasting notes and brewing guides',
      'Origin stories and farmer profiles',
      'Monthly brewing tips email',
      'Access to online tea community'
    ],
    featuresChinese: [
      '3種不同茶葉品種（各50克）',
      '詳細品茗筆記和沖泡指南',
      '產地故事和茶農簡介',
      '每月沖泡技巧電子郵件',
      '線上茶友社區權限'
    ],
    included: [
      {
        id: 'monthly-teas',
        name: 'Curated Tea Selection',
        nameChinese: '精選茶葉',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Three carefully chosen teas representing different styles',
        descriptionChinese: '三款精心挑選代表不同風格的茶葉',
        quantity: 3,
        guarantee: true
      },
      {
        id: 'tasting-notes',
        name: 'Tasting Notes Card',
        nameChinese: '品茗筆記卡',
        type: 'guide',
        typeChinese: '指南',
        description: 'Professional tasting notes and brewing instructions',
        descriptionChinese: '專業品茗筆記和沖泡說明',
        guarantee: true
      },
      {
        id: 'digital-content',
        name: 'Digital Learning Content',
        nameChinese: '數位學習內容',
        type: 'guide',
        typeChinese: '指南',
        description: 'Access to videos and articles about featured teas',
        descriptionChinese: '精選茶葉的影片和文章權限',
        guarantee: true
      }
    ],
    benefits: [
      'Free shipping on all deliveries',
      'Cancel or pause anytime',
      'Educational content included',
      'Community forum access'
    ],
    benefitsChinese: [
      '所有配送免運費',
      '隨時取消或暫停',
      '包含教育內容',
      '社區論壇權限'
    ],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1527550122325-b4e4db81b788?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?ixlib=rb-4.0.3&w=800&q=80'
    ],
    popular: false,
    newCustomerDiscount: 25,
    freeShipping: true,
    cancellable: true,
    giftable: true,
    customizable: false,
    trialAvailable: true
  },
  {
    id: 'tea-connoisseur',
    name: 'Tea Connoisseur',
    nameChinese: '茶葉鑑賞家',
    description: 'For experienced tea lovers seeking premium selections and exclusive varieties. Features rare teas, seasonal specialties, and limited edition releases.',
    descriptionChinese: '為尋求優質精選和獨家品種的經驗豐富茶友而設。包含稀有茶葉、季節特色和限量版發布。',
    shortDescription: 'Premium teas for experienced enthusiasts',
    shortDescriptionChinese: '經驗豐富愛好者的優質茶葉',
    price: 69,
    originalPrice: 85,
    frequency: 'monthly',
    frequencyChinese: '每月',
    duration: 6,
    teaQuantity: 200,
    teaVarieties: 4,
    features: [
      '4 premium tea varieties (50g each)',
      'Includes rare and limited edition teas',
      'Expert curated selections',
      'Priority access to new releases',
      'Advanced brewing techniques guide',
      'Exclusive member-only teas'
    ],
    featuresChinese: [
      '4種優質茶葉品種（各50克）',
      '包含稀有和限量版茶葉',
      '專家策劃精選',
      '新品發布優先權限',
      '高級沖泡技術指南',
      '會員專屬茶葉'
    ],
    included: [
      {
        id: 'premium-teas',
        name: 'Premium Tea Collection',
        nameChinese: '優質茶葉收藏',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Four premium teas including rare and seasonal varieties',
        descriptionChinese: '四款優質茶葉，包含稀有和季節性品種',
        quantity: 4,
        guarantee: true
      },
      {
        id: 'expert-notes',
        name: 'Expert Tasting Analysis',
        nameChinese: '專家品茗分析',
        type: 'guide',
        typeChinese: '指南',
        description: 'Detailed analysis from tea masters and sommeliers',
        descriptionChinese: '茶師和品茗師的詳細分析',
        guarantee: true
      },
      {
        id: 'brewing-tools',
        name: 'Monthly Brewing Tool',
        nameChinese: '每月沖泡工具',
        type: 'accessory',
        typeChinese: '配件',
        description: 'Premium tea accessories to enhance your experience',
        descriptionChinese: '提升體驗的優質茶具配件',
        guarantee: false
      },
      {
        id: 'exclusive-access',
        name: 'Exclusive Member Benefits',
        nameChinese: '會員專屬福利',
        type: 'surprise',
        typeChinese: '驚喜',
        description: 'Early access to limited releases and special events',
        descriptionChinese: '限量發布和特殊活動的早期權限',
        guarantee: true
      }
    ],
    benefits: [
      'Free shipping worldwide',
      'Member-only exclusive teas',
      'Priority customer support',
      'Quarterly bonus surprises',
      'Virtual tasting sessions'
    ],
    benefitsChinese: [
      '全球免運費',
      '會員專屬茶葉',
      '優先客戶支援',
      '季度獎勵驚喜',
      '虛擬品茗會'
    ],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=800&q=80'
    ],
    popular: true,
    newCustomerDiscount: 20,
    freeShipping: true,
    cancellable: true,
    giftable: true,
    customizable: true,
    trialAvailable: false
  },
  {
    id: 'seasonal-harvest',
    name: 'Seasonal Harvest',
    nameChinese: '季節收成',
    description: 'Experience the natural rhythm of tea harvests with quarterly deliveries of fresh, seasonal teas. Perfect for those who appreciate the connection between tea and seasons.',
    descriptionChinese: '通過季度配送新鮮季節茶葉體驗茶葉收成的自然節奏。適合欣賞茶與季節聯繫的人。',
    shortDescription: 'Quarterly seasonal tea collections',
    shortDescriptionChinese: '季度季節茶葉收藏',
    price: 89,
    originalPrice: 110,
    frequency: 'quarterly',
    frequencyChinese: '季度',
    duration: 12,
    teaQuantity: 300,
    teaVarieties: 5,
    features: [
      '5 seasonal tea varieties (60g each)',
      'Fresh harvest exclusives',
      'Seasonal brewing guides',
      'Harvest calendar and notes',
      'Limited edition packaging',
      'Direct from farm stories'
    ],
    featuresChinese: [
      '5種季節茶葉品種（各60克）',
      '新鮮收成獨家',
      '季節沖泡指南',
      '收成日曆和筆記',
      '限量版包裝',
      '直接來自農場的故事'
    ],
    included: [
      {
        id: 'seasonal-collection',
        name: 'Seasonal Tea Collection',
        nameChinese: '季節茶葉收藏',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Five teas representing the current season\'s best harvest',
        descriptionChinese: '五款代表當季最佳收成的茶葉',
        quantity: 5,
        guarantee: true
      },
      {
        id: 'harvest-calendar',
        name: 'Seasonal Harvest Calendar',
        nameChinese: '季節收成日曆',
        type: 'guide',
        typeChinese: '指南',
        description: 'Beautiful calendar showing tea harvest seasons and timing',
        descriptionChinese: '顯示茶葉收成季節和時間的精美日曆',
        guarantee: true
      },
      {
        id: 'farmer-stories',
        name: 'Direct Farm Stories',
        nameChinese: '直接農場故事',
        type: 'guide',
        typeChinese: '指南',
        description: 'Personal letters and photos from tea farmers',
        descriptionChinese: '來自茶農的個人信件和照片',
        guarantee: true
      },
      {
        id: 'seasonal-gift',
        name: 'Seasonal Surprise Gift',
        nameChinese: '季節驚喜禮物',
        type: 'surprise',
        typeChinese: '驚喜',
        description: 'Unique seasonal item like honey, sweets, or tea ware',
        descriptionChinese: '獨特的季節物品，如蜂蜜、甜品或茶具',
        guarantee: false
      }
    ],
    benefits: [
      'Free international shipping',
      'Fresh harvest guarantee',
      'Seasonal gift surprises',
      'Exclusive packaging',
      'Farm visit invitations'
    ],
    benefitsChinese: [
      '國際免運費',
      '新鮮收成保證',
      '季節禮物驚喜',
      '獨家包裝',
      '農場參觀邀請'
    ],
    image: 'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1574859471052-5ab9e3c0f693?ixlib=rb-4.0.3&w=800&q=80'
    ],
    popular: false,
    newCustomerDiscount: 15,
    freeShipping: true,
    cancellable: true,
    giftable: true,
    customizable: false,
    trialAvailable: false
  },
  {
    id: 'wellness-journey',
    name: 'Wellness Journey',
    nameChinese: '健康之旅',
    description: 'Focus on health and wellness with teas selected for their therapeutic properties and health benefits. Includes wellness guides and mindful drinking practices.',
    descriptionChinese: '專注於健康和養生，精選具有治療特性和健康益處的茶葉。包含健康指南和正念飲茶實踐。',
    shortDescription: 'Health-focused tea selections',
    shortDescriptionChinese: '專注健康的茶葉精選',
    price: 55,
    originalPrice: 70,
    frequency: 'bi-monthly',
    frequencyChinese: '雙月',
    duration: 6,
    teaQuantity: 180,
    teaVarieties: 3,
    features: [
      '3 wellness-focused teas (60g each)',
      'Health benefit guides',
      'Mindful drinking practices',
      'Wellness calendar and tips',
      'Meditation tea ceremony guide',
      'Nutritional information sheets'
    ],
    featuresChinese: [
      '3款專注健康的茶葉（各60克）',
      '健康益處指南',
      '正念飲茶實踐',
      '健康日曆和貼士',
      '冥想茶道指南',
      '營養信息表'
    ],
    included: [
      {
        id: 'wellness-teas',
        name: 'Wellness Tea Selection',
        nameChinese: '健康茶葉精選',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Three teas chosen for specific health benefits',
        descriptionChinese: '為特定健康益處選擇的三款茶葉',
        quantity: 3,
        guarantee: true
      },
      {
        id: 'wellness-guide',
        name: 'Monthly Wellness Guide',
        nameChinese: '每月健康指南',
        type: 'guide',
        typeChinese: '指南',
        description: 'Information on health benefits and optimal consumption',
        descriptionChinese: '健康益處和最佳飲用方式的信息',
        guarantee: true
      },
      {
        id: 'meditation-guide',
        name: 'Tea Meditation Practices',
        nameChinese: '茶冥想實踐',
        type: 'guide',
        typeChinese: '指南',
        description: 'Guided meditation and mindful tea drinking exercises',
        descriptionChinese: '引導冥想和正念飲茶練習',
        guarantee: true
      },
      {
        id: 'wellness-accessory',
        name: 'Wellness Accessory',
        nameChinese: '健康配件',
        type: 'accessory',
        typeChinese: '配件',
        description: 'Items like bamboo strainers, ceramic cups, or wellness herbs',
        descriptionChinese: '如竹濾器、陶瓷杯或健康草藥等物品',
        guarantee: false
      }
    ],
    benefits: [
      'Free shipping included',
      'Focus on health benefits',
      'Mindfulness practices',
      'Wellness community access',
      'Expert nutritionist advice'
    ],
    benefitsChinese: [
      '包含免運費',
      '專注健康益處',
      '正念實踐',
      '健康社區權限',
      '專家營養師建議'
    ],
    image: 'https://images.unsplash.com/photo-1551024739-6e0b6243e3c6?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551024739-6e0b6243e3c6?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1527550122325-b4e4db81b788?ixlib=rb-4.0.3&w=800&q=80'
    ],
    popular: false,
    newCustomerDiscount: 20,
    freeShipping: true,
    cancellable: true,
    giftable: true,
    customizable: true,
    trialAvailable: true
  }
];

export const subscriptionTestimonials: SubscriptionTestimonial[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    nameChinese: '陳莎拉',
    location: 'San Francisco, CA',
    locationChinese: '加州舊金山',
    plan: 'Tea Connoisseur',
    rating: 5,
    quote: 'The quality and variety exceed my expectations every month. I\'ve discovered teas I never would have found on my own.',
    quoteChinese: '品質和多樣性每月都超出我的期望。我發現了自己永遠不會找到的茶葉。',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=300&q=80',
    subscriptionLength: '18 months',
    subscriptionLengthChinese: '18個月'
  },
  {
    id: '2',
    name: 'Michael Johnson',
    nameChinese: '邁克爾·約翰遜',
    location: 'London, UK',
    locationChinese: '英國倫敦',
    plan: 'Seasonal Harvest',
    rating: 5,
    quote: 'Love how each delivery connects me to the seasons and the farmers. The packaging is beautiful and sustainable.',
    quoteChinese: '喜歡每次配送都讓我與季節和農民聯繫。包裝美麗且永續。',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=300&q=80',
    subscriptionLength: '2 years',
    subscriptionLengthChinese: '2年'
  },
  {
    id: '3',
    name: 'Emily Wang',
    nameChinese: '王艾米莉',
    location: 'Toronto, Canada',
    locationChinese: '加拿大多倫多',
    plan: 'Tea Explorer',
    rating: 4,
    quote: 'Perfect for someone like me who was new to tea. The educational materials helped me develop my palate.',
    quoteChinese: '對於像我這樣剛接觸茶的人來說很完美。教育材料幫助我培養了味覺。',
    image: 'https://images.unsplash.com/photo-1559548331-f9cb98001426?ixlib=rb-4.0.3&w=300&q=80',
    subscriptionLength: '8 months',
    subscriptionLengthChinese: '8個月'
  }
];

export const getPopularPlans = (): SubscriptionPlan[] => {
  return subscriptionPlans.filter(plan => plan.popular);
};

export const getPlanById = (id: string): SubscriptionPlan | undefined => {
  return subscriptionPlans.find(plan => plan.id === id);
};

export const getPlansWithTrial = (): SubscriptionPlan[] => {
  return subscriptionPlans.filter(plan => plan.trialAvailable);
};

export const getGiftablePlans = (): SubscriptionPlan[] => {
  return subscriptionPlans.filter(plan => plan.giftable);
};