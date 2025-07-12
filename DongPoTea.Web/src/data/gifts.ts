export interface GiftSet {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  descriptionChinese: string;
  price: number;
  originalPrice?: number;
  category: GiftCategory;
  occasion: string[];
  occasionChinese: string[];
  recipient: string[];
  recipientChinese: string[];
  image: string;
  images: string[];
  items: GiftItem[];
  packaging: PackagingOption;
  featured: boolean;
  bestSeller: boolean;
  newArrival: boolean;
  customizable: boolean;
  specifications: {
    dimensions: string;
    weight: string;
    shelfLife: string;
  };
  tags: string[];
  tagsChinese: string[];
}

export interface GiftItem {
  id: string;
  name: string;
  nameChinese: string;
  type: 'tea' | 'accessory' | 'sweets' | 'book';
  typeChinese: string;
  description: string;
  descriptionChinese: string;
  quantity: number;
  unit: string;
  unitChinese: string;
  image: string;
}

export interface GiftCategory {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  descriptionChinese: string;
  icon: string;
}

export interface PackagingOption {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  descriptionChinese: string;
  materials: string[];
  materialsChinese: string[];
  sustainable: boolean;
  image: string;
}

export interface GiftOccasion {
  id: string;
  name: string;
  nameChinese: string;
  description: string;
  descriptionChinese: string;
  icon: string;
  color: string;
  recommendations: string[];
}

export const giftCategories: GiftCategory[] = [
  {
    id: 'premium',
    name: 'Premium Collection',
    nameChinese: '高級收藏',
    description: 'Exquisite tea sets featuring our finest selections',
    descriptionChinese: '精緻茶具組，展示我們最優質的選擇',
    icon: '👑'
  },
  {
    id: 'traditional',
    name: 'Traditional Sets',
    nameChinese: '傳統套裝',
    description: 'Classic Taiwanese tea experiences with cultural heritage',
    descriptionChinese: '經典台灣茶體驗，具有文化傳承',
    icon: '🏛️'
  },
  {
    id: 'discovery',
    name: 'Discovery Journey',
    nameChinese: '探索之旅',
    description: 'Perfect introduction to Taiwanese tea varieties',
    descriptionChinese: '台灣茶品種的完美入門',
    icon: '🗺️'
  },
  {
    id: 'wellness',
    name: 'Wellness & Health',
    nameChinese: '健康養生',
    description: 'Tea sets focused on health benefits and relaxation',
    descriptionChinese: '專注於健康益處和放鬆的茶具組',
    icon: '🌿'
  },
  {
    id: 'ceremony',
    name: 'Tea Ceremony',
    nameChinese: '茶道套裝',
    description: 'Complete sets for traditional tea ceremony practice',
    descriptionChinese: '傳統茶道練習的完整套裝',
    icon: '🫖'
  }
];

export const giftOccasions: GiftOccasion[] = [
  {
    id: 'birthday',
    name: 'Birthday Celebration',
    nameChinese: '生日慶祝',
    description: 'Thoughtful tea gifts to celebrate another year of life',
    descriptionChinese: '用心的茶禮慶祝人生的另一年',
    icon: '🎂',
    color: '#ff6b6b',
    recommendations: ['discovery-sampler', 'premium-oolong-collection', 'tea-lover-starter']
  },
  {
    id: 'wedding',
    name: 'Wedding & Anniversary',
    nameChinese: '婚禮週年',
    description: 'Elegant gifts symbolizing harmony and togetherness',
    descriptionChinese: '象徵和諧與團結的優雅禮品',
    icon: '💍',
    color: '#ffd93d',
    recommendations: ['harmony-couple-set', 'premium-oolong-collection', 'golden-oolong-luxury']
  },
  {
    id: 'corporate',
    name: 'Corporate Gifting',
    nameChinese: '企業贈禮',
    description: 'Professional gifts that leave a lasting impression',
    descriptionChinese: '留下持久印象的專業禮品',
    icon: '🏢',
    color: '#4ecdc4',
    recommendations: ['executive-tea-collection', 'premium-oolong-collection', 'taiwan-heritage-set']
  },
  {
    id: 'holiday',
    name: 'Holiday Season',
    nameChinese: '節日季節',
    description: 'Festive tea gifts to warm hearts during celebrations',
    descriptionChinese: '節慶茶禮，在慶祝期間溫暖人心',
    icon: '🎄',
    color: '#26de81',
    recommendations: ['winter-warmth-collection', 'family-sharing-set', 'discovery-sampler']
  },
  {
    id: 'housewarming',
    name: 'Housewarming',
    nameChinese: '喬遷之喜',
    description: 'Welcome gifts for new homes and fresh beginnings',
    descriptionChinese: '新家和新開始的歡迎禮品',
    icon: '🏠',
    color: '#fd79a8',
    recommendations: ['home-brewing-essentials', 'tea-lover-starter', 'harmony-couple-set']
  },
  {
    id: 'mothers-day',
    name: "Mother's Day",
    nameChinese: '母親節',
    description: 'Show appreciation with nurturing tea experiences',
    descriptionChinese: '用滋養的茶體驗表達感激',
    icon: '🌸',
    color: '#a29bfe',
    recommendations: ['wellness-tea-collection', 'premium-oolong-collection', 'relaxation-ritual-set']
  }
];

export const packagingOptions: PackagingOption[] = [
  {
    id: 'bamboo-box',
    name: 'Handcrafted Bamboo Box',
    nameChinese: '手工竹盒',
    description: 'Sustainable bamboo packaging with elegant design',
    descriptionChinese: '具有優雅設計的永續竹包裝',
    materials: ['Sustainable bamboo', 'Recycled paper padding', 'Natural fiber ribbon'],
    materialsChinese: ['永續竹材', '再生紙襯墊', '天然纖維絲帶'],
    sustainable: true,
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&w=600&q=80'
  },
  {
    id: 'silk-pouch',
    name: 'Traditional Silk Pouch',
    nameChinese: '傳統絲綢袋',
    description: 'Luxurious silk packaging with traditional patterns',
    descriptionChinese: '具有傳統圖案的豪華絲綢包裝',
    materials: ['Premium silk fabric', 'Traditional embroidery', 'Drawstring closure'],
    materialsChinese: ['優質絲綢面料', '傳統刺繡', '抽繩封口'],
    sustainable: false,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=600&q=80'
  },
  {
    id: 'ceramic-jar',
    name: 'Ceramic Storage Jar',
    nameChinese: '陶瓷儲存罐',
    description: 'Reusable ceramic jar for long-term tea storage',
    descriptionChinese: '可重複使用的陶瓷罐，用於長期茶葉儲存',
    materials: ['Handmade ceramic', 'Airtight seal', 'Traditional glazing'],
    materialsChinese: ['手工陶瓷', '密封封口', '傳統釉料'],
    sustainable: true,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=600&q=80'
  }
];

export const giftSets: GiftSet[] = [
  {
    id: 'premium-oolong-collection',
    name: 'Premium Oolong Collection',
    nameChinese: '高級烏龍茶收藏',
    description: 'A curated selection of Taiwan\'s finest oolong teas, featuring high mountain varieties and traditional processing methods. Perfect for the sophisticated tea connoisseur.',
    descriptionChinese: '精心挑選的台灣最優質烏龍茶，包括高山品種和傳統加工方法。適合精緻的茶品鑑家。',
    price: 188,
    originalPrice: 220,
    category: giftCategories[0], // Premium Collection
    occasion: ['birthday', 'wedding', 'corporate'],
    occasionChinese: ['生日', '婚禮', '企業'],
    recipient: ['Tea Connoisseur', 'Business Partner', 'Special Someone'],
    recipientChinese: ['茶品鑑家', '商業夥伴', '特別的人'],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=800&q=80'
    ],
    items: [
      {
        id: 'dong-ding-oolong',
        name: 'Dong Ding Oolong',
        nameChinese: '凍頂烏龍',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Traditional roasted oolong with rich, complex flavors',
        descriptionChinese: '傳統烘焙烏龍，具有豐富複雜的風味',
        quantity: 50,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'high-mountain-oolong',
        name: 'High Mountain Oolong',
        nameChinese: '高山烏龍',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Grown above 1000m with exceptional clarity and floral notes',
        descriptionChinese: '生長在1000米以上，具有卓越的清香和花香',
        quantity: 50,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'tie-guan-yin',
        name: 'Tie Guan Yin',
        nameChinese: '鐵觀音',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Iron Goddess of Mercy with orchid-like fragrance',
        descriptionChinese: '鐵觀音具有蘭花般的香氣',
        quantity: 50,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'brewing-guide',
        name: 'Premium Brewing Guide',
        nameChinese: '高級沖泡指南',
        type: 'book',
        typeChinese: '指南',
        description: 'Detailed instructions for optimal brewing',
        descriptionChinese: '最佳沖泡的詳細說明',
        quantity: 1,
        unit: 'booklet',
        unitChinese: '小冊子',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&w=300&q=80'
      }
    ],
    packaging: packagingOptions[0], // Bamboo Box
    featured: true,
    bestSeller: true,
    newArrival: false,
    customizable: true,
    specifications: {
      dimensions: '25cm × 18cm × 8cm',
      weight: '450g',
      shelfLife: '24 months'
    },
    tags: ['premium', 'oolong', 'high-mountain', 'traditional'],
    tagsChinese: ['高級', '烏龍', '高山', '傳統']
  },
  {
    id: 'discovery-sampler',
    name: 'Taiwan Tea Discovery Sampler',
    nameChinese: '台灣茶探索品嚐套裝',
    description: 'Perfect introduction to Taiwanese tea culture with six distinct varieties representing different processing methods and flavor profiles.',
    descriptionChinese: '台灣茶文化的完美入門，包含六種不同品種，代表不同的加工方法和風味特色。',
    price: 68,
    category: giftCategories[2], // Discovery Journey
    occasion: ['birthday', 'housewarming', 'holiday'],
    occasionChinese: ['生日', '喬遷', '節日'],
    recipient: ['Tea Beginner', 'Curious Friend', 'College Student'],
    recipientChinese: ['茶葉初學者', '好奇的朋友', '大學生'],
    image: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1527550122325-b4e4db81b788?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?ixlib=rb-4.0.3&w=800&q=80'
    ],
    items: [
      {
        id: 'green-tea-sample',
        name: 'Green Tea',
        nameChinese: '綠茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Fresh and grassy with vegetal notes',
        descriptionChinese: '清新草香帶有植物風味',
        quantity: 25,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'white-tea-sample',
        name: 'White Tea',
        nameChinese: '白茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Delicate and naturally sweet',
        descriptionChinese: '精緻天然甘甜',
        quantity: 25,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1551024739-6e0b6243e3c6?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'oolong-sample',
        name: 'Oolong Tea',
        nameChinese: '烏龍茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Complex floral and fruity balance',
        descriptionChinese: '複雜的花香和果香平衡',
        quantity: 25,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'black-tea-sample',
        name: 'Black Tea',
        nameChinese: '紅茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Full-bodied with malty sweetness',
        descriptionChinese: '濃郁帶有麥香甜味',
        quantity: 25,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'jasmine-tea-sample',
        name: 'Jasmine Tea',
        nameChinese: '茉莉花茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Green tea scented with jasmine flowers',
        descriptionChinese: '用茉莉花薰製的綠茶',
        quantity: 25,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1527550122325-b4e4db81b788?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'pu-erh-sample',
        name: 'Pu-erh Tea',
        nameChinese: '普洱茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Aged tea with deep, earthy flavors',
        descriptionChinese: '陳年茶具有深厚的土香風味',
        quantity: 25,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1597481499666-1f69e4cfd2b4?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'tasting-notes',
        name: 'Tasting Notes & Guide',
        nameChinese: '品茗筆記與指南',
        type: 'book',
        typeChinese: '指南',
        description: 'Learn to identify flavors and brewing techniques',
        descriptionChinese: '學習識別風味和沖泡技術',
        quantity: 1,
        unit: 'booklet',
        unitChinese: '小冊子',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&w=300&q=80'
      }
    ],
    packaging: packagingOptions[1], // Silk Pouch
    featured: true,
    bestSeller: false,
    newArrival: true,
    customizable: false,
    specifications: {
      dimensions: '20cm × 15cm × 5cm',
      weight: '200g',
      shelfLife: '18 months'
    },
    tags: ['discovery', 'sampler', 'beginner-friendly', 'variety'],
    tagsChinese: ['探索', '品嚐', '初學者友善', '多樣性']
  },
  {
    id: 'tea-ceremony-master-set',
    name: 'Tea Ceremony Master Set',
    nameChinese: '茶道大師套裝',
    description: 'Complete traditional tea ceremony set with premium accessories and ceremonial-grade teas. Everything needed for authentic gongfu tea practice.',
    descriptionChinese: '完整的傳統茶道套裝，包含優質配件和儀式級茶葉。功夫茶練習所需的一切。',
    price: 298,
    originalPrice: 350,
    category: giftCategories[4], // Tea Ceremony
    occasion: ['wedding', 'corporate', 'mothers-day'],
    occasionChinese: ['婚禮', '企業', '母親節'],
    recipient: ['Tea Master', 'Cultural Enthusiast', 'Meditation Practitioner'],
    recipientChinese: ['茶師', '文化愛好者', '冥想練習者'],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&w=800&q=80'
    ],
    items: [
      {
        id: 'gaiwan',
        name: 'Traditional Gaiwan',
        nameChinese: '傳統蓋碗',
        type: 'accessory',
        typeChinese: '茶具',
        description: 'Porcelain lidded bowl for traditional brewing',
        descriptionChinese: '傳統沖泡用瓷蓋碗',
        quantity: 1,
        unit: 'piece',
        unitChinese: '個',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'tea-cups',
        name: 'Porcelain Tea Cups',
        nameChinese: '瓷茶杯',
        type: 'accessory',
        typeChinese: '茶具',
        description: 'Set of 4 traditional tasting cups',
        descriptionChinese: '4個傳統品茗杯組',
        quantity: 4,
        unit: 'pieces',
        unitChinese: '個',
        image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'tea-strainer',
        name: 'Bamboo Tea Strainer',
        nameChinese: '竹茶濾器',
        type: 'accessory',
        typeChinese: '茶具',
        description: 'Fine mesh strainer for loose leaf tea',
        descriptionChinese: '散茶用細網濾器',
        quantity: 1,
        unit: 'piece',
        unitChinese: '個',
        image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'ceremony-oolong',
        name: 'Ceremonial Oolong',
        nameChinese: '儀式烏龍茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Premium oolong perfect for ceremony practice',
        descriptionChinese: '完美的儀式練習高級烏龍茶',
        quantity: 100,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'ceremony-guide',
        name: 'Tea Ceremony Guide',
        nameChinese: '茶道指南',
        type: 'book',
        typeChinese: '指南',
        description: 'Step-by-step ceremony instructions and philosophy',
        descriptionChinese: '分步儀式說明和哲學',
        quantity: 1,
        unit: 'book',
        unitChinese: '本',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&w=300&q=80'
      }
    ],
    packaging: packagingOptions[2], // Ceramic Jar
    featured: true,
    bestSeller: false,
    newArrival: false,
    customizable: true,
    specifications: {
      dimensions: '35cm × 25cm × 12cm',
      weight: '1.2kg',
      shelfLife: '24 months'
    },
    tags: ['ceremony', 'traditional', 'complete-set', 'premium'],
    tagsChinese: ['儀式', '傳統', '完整套裝', '高級']
  },
  {
    id: 'wellness-tea-collection',
    name: 'Wellness Tea Collection',
    nameChinese: '健康茶收藏',
    description: 'Carefully selected teas known for their health benefits and therapeutic properties. Perfect for those focused on natural wellness and mindful living.',
    descriptionChinese: '精心挑選以健康益處和治療特性聞名的茶葉。適合專注於天然健康和正念生活的人。',
    price: 89,
    category: giftCategories[3], // Wellness & Health
    occasion: ['mothers-day', 'birthday', 'housewarming'],
    occasionChinese: ['母親節', '生日', '喬遷'],
    recipient: ['Health Conscious', 'Yoga Practitioner', 'Busy Professional'],
    recipientChinese: ['注重健康者', '瑜伽練習者', '忙碌專業人士'],
    image: 'https://images.unsplash.com/photo-1551024739-6e0b6243e3c6?ixlib=rb-4.0.3&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551024739-6e0b6243e3c6?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1527550122325-b4e4db81b788?ixlib=rb-4.0.3&w=800&q=80'
    ],
    items: [
      {
        id: 'white-tea-wellness',
        name: 'Antioxidant White Tea',
        nameChinese: '抗氧化白茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'High in antioxidants, gentle and naturally sweet',
        descriptionChinese: '高抗氧化劑，溫和天然甘甜',
        quantity: 50,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1551024739-6e0b6243e3c6?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'green-tea-wellness',
        name: 'Detox Green Tea',
        nameChinese: '排毒綠茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Natural detoxification and metabolism support',
        descriptionChinese: '天然排毒和新陳代謝支持',
        quantity: 50,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1520637736862-4d197d17c93a?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'oolong-wellness',
        name: 'Metabolism Oolong',
        nameChinese: '新陳代謝烏龍茶',
        type: 'tea',
        typeChinese: '茶葉',
        description: 'Supports healthy metabolism and weight management',
        descriptionChinese: '支持健康新陳代謝和體重管理',
        quantity: 50,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'wellness-honey',
        name: 'Raw Mountain Honey',
        nameChinese: '生山蜂蜜',
        type: 'sweets',
        typeChinese: '甜品',
        description: 'Pure honey from mountain wildflowers',
        descriptionChinese: '來自山區野花的純蜂蜜',
        quantity: 150,
        unit: 'grams',
        unitChinese: '克',
        image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?ixlib=rb-4.0.3&w=300&q=80'
      },
      {
        id: 'wellness-guide',
        name: 'Tea Wellness Guide',
        nameChinese: '茶養生指南',
        type: 'book',
        typeChinese: '指南',
        description: 'Guide to tea for health and wellness',
        descriptionChinese: '健康養生茶指南',
        quantity: 1,
        unit: 'booklet',
        unitChinese: '小冊子',
        image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&w=300&q=80'
      }
    ],
    packaging: packagingOptions[0], // Bamboo Box
    featured: false,
    bestSeller: true,
    newArrival: false,
    customizable: false,
    specifications: {
      dimensions: '22cm × 16cm × 7cm',
      weight: '350g',
      shelfLife: '18 months'
    },
    tags: ['wellness', 'health', 'antioxidant', 'natural'],
    tagsChinese: ['健康', '養生', '抗氧化', '天然']
  }
];

export const getGiftSetsByCategory = (categoryId: string): GiftSet[] => {
  return giftSets.filter(set => set.category.id === categoryId);
};

export const getGiftSetsByOccasion = (occasionId: string): GiftSet[] => {
  return giftSets.filter(set => set.occasion.includes(occasionId));
};

export const getFeaturedGiftSets = (): GiftSet[] => {
  return giftSets.filter(set => set.featured);
};

export const getBestSellerGiftSets = (): GiftSet[] => {
  return giftSets.filter(set => set.bestSeller);
};

export const getNewArrivalGiftSets = (): GiftSet[] => {
  return giftSets.filter(set => set.newArrival);
};

export const getGiftSetById = (id: string): GiftSet | undefined => {
  return giftSets.find(set => set.id === id);
};