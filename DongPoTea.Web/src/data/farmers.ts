export interface Farmer {
  id: string;
  name: string;
  nameChinese: string;
  region: string;
  regionChinese: string;
  specialty: string;
  specialtyChinese: string;
  experience: number;
  story: string;
  storyChinese: string;
  philosophy: string;
  philosophyChinese: string;
  achievements: string[];
  achievementsChinese: string[];
  profileImage: string;
  farmImages: string[];
  teaTypes: string[];
  teaTypesChinese: string[];
  elevation: number;
  farmSize: number;
  establishedYear: number;
  certifications: string[];
  certificationsChinese: string[];
  quote: string;
  quoteChinese: string;
  featured: boolean;
}

export interface FarmingPractice {
  id: string;
  title: string;
  titleChinese: string;
  description: string;
  descriptionChinese: string;
  icon: string;
  benefits: string[];
  benefitsChinese: string[];
}

export const farmingPractices: FarmingPractice[] = [
  {
    id: 'organic',
    title: 'Organic Farming',
    titleChinese: '有機耕作',
    description: 'Chemical-free cultivation methods that preserve soil health and tea quality',
    descriptionChinese: '無化學物質的栽培方法，保護土壤健康和茶葉品質',
    icon: '🌱',
    benefits: [
      'No pesticides or chemical fertilizers',
      'Rich, complex flavors',
      'Environmental sustainability',
      'Healthier tea leaves'
    ],
    benefitsChinese: [
      '無農藥或化學肥料',
      '豐富複雜的風味',
      '環境永續性',
      '更健康的茶葉'
    ]
  },
  {
    id: 'traditional',
    title: 'Traditional Methods',
    titleChinese: '傳統方法',
    description: 'Time-honored techniques passed down through generations',
    descriptionChinese: '世代相傳的傳統技術',
    icon: '🏛️',
    benefits: [
      'Authentic processing methods',
      'Artisanal quality',
      'Cultural preservation',
      'Unique character profiles'
    ],
    benefitsChinese: [
      '正宗的加工方法',
      '手工品質',
      '文化保護',
      '獨特的特色檔案'
    ]
  },
  {
    id: 'sustainable',
    title: 'Sustainable Practices',
    titleChinese: '永續實踐',
    description: 'Environmentally responsible farming for future generations',
    descriptionChinese: '為子孫後代負責任的環保農業',
    icon: '♻️',
    benefits: [
      'Water conservation',
      'Biodiversity protection',
      'Soil preservation',
      'Carbon footprint reduction'
    ],
    benefitsChinese: [
      '節水',
      '生物多樣性保護',
      '土壤保護',
      '減少碳足跡'
    ]
  },
  {
    id: 'high-altitude',
    title: 'High Altitude Growing',
    titleChinese: '高海拔種植',
    description: 'Mountain-grown teas with exceptional character and complexity',
    descriptionChinese: '山區種植的茶葉具有非凡的特色和複雜性',
    icon: '⛰️',
    benefits: [
      'Slow leaf growth',
      'Concentrated flavors',
      'Natural stress resistance',
      'Unique terroir expression'
    ],
    benefitsChinese: [
      '葉子生長緩慢',
      '濃縮風味',
      '天然抗壓性',
      '獨特的風土表達'
    ]
  }
];

export const farmers: Farmer[] = [
  {
    id: 'chen-ming-dao',
    name: 'Chen Ming-dao',
    nameChinese: '陳明道',
    region: 'Alishan, Chiayi County',
    regionChinese: '嘉義縣阿里山',
    specialty: 'High Mountain Oolong',
    specialtyChinese: '高山烏龍茶',
    experience: 35,
    establishedYear: 1985,
    elevation: 1400,
    farmSize: 12,
    featured: true,
    profileImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&w=600&q=80',
    farmImages: [
      'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&w=800&q=80'
    ],
    teaTypes: ['High Mountain Oolong', 'Alishan Oolong', 'Winter Tea'],
    teaTypesChinese: ['高山烏龍茶', '阿里山烏龍茶', '冬茶'],
    certifications: ['Organic Certification', 'Fair Trade', 'Taiwan Tea Association'],
    certificationsChinese: ['有機認證', '公平貿易', '台灣茶協會'],
    story: `Master Chen Ming-dao inherited his family's tea garden in the misty mountains of Alishan over three decades ago. What started as a small family operation has grown into one of Taiwan's most respected high-altitude tea farms. Chen's dedication to traditional farming methods combined with modern organic practices has earned him recognition throughout Asia.

    Growing up among the tea plants, Chen learned the delicate art of tea cultivation from his grandfather, who first planted tea on these slopes in the 1950s. The farm sits at 1,400 meters above sea level, where the combination of cool mountain air, frequent fog, and mineral-rich soil creates the perfect conditions for producing exceptional oolong tea.

    Chen's philosophy centers on patience and respect for nature. He believes that the best tea cannot be rushed, allowing his plants to grow slowly in the mountain environment. This results in leaves with concentrated flavors and complex aromatic profiles that reflect the unique terroir of Alishan.`,
    storyChinese: `陳明道師傅三十多年前在阿里山的霧氣繚繞的山區繼承了家族的茶園。從小型家庭經營開始，現在已發展成為台灣最受尊敬的高海拔茶園之一。陳師傅致力於傳統農業方法與現代有機實踐相結合，在亞洲各地贏得了認可。

    在茶樹叢中長大的陳師傅從祖父那裡學到了精緻的茶葉栽培藝術，祖父在1950年代首次在這些山坡上種植茶葉。農場位於海拔1400米，涼爽的山區空氣、頻繁的霧氣和富含礦物質的土壤結合，為生產優質烏龍茶創造了完美的條件。

    陳師傅的哲學以耐心和對自然的尊重為中心。他相信最好的茶不能急於求成，讓植物在山區環境中緩慢生長。這使得葉子具有濃縮的風味和複雜的香氣檔案，反映了阿里山獨特的風土。`,
    philosophy: 'Tea is a bridge between earth and sky. Our role as farmers is to nurture this connection with patience, respect, and deep understanding of the mountain\'s rhythms.',
    philosophyChinese: '茶是天地之間的橋樑。我們作為農民的角色是以耐心、尊重和對山的節奏的深度理解來培育這種聯繫。',
    achievements: [
      'Taiwan Tea Competition Gold Medal (2018, 2020, 2022)',
      'Organic Certification for 15 consecutive years',
      'Featured in National Geographic Taiwan Tea Documentary',
      'Mentor to 20+ young tea farmers'
    ],
    achievementsChinese: [
      '台灣茶競賽金獎（2018、2020、2022）',
      '連續15年有機認證',
      '國家地理台灣茶紀錄片特色',
      '20多位年輕茶農的導師'
    ],
    quote: 'Every leaf tells the story of the mountain, the rain, and the patience of those who tend it.',
    quoteChinese: '每片葉子都訴說著山、雨以及照料它們的人的耐心的故事。'
  },
  {
    id: 'liu-hsiao-mei',
    name: 'Liu Hsiao-mei',
    nameChinese: '劉小梅',
    region: 'Pinglin, New Taipei City',
    regionChinese: '新北市坪林',
    specialty: 'Oriental Beauty Oolong',
    specialtyChinese: '東方美人茶',
    experience: 28,
    establishedYear: 1992,
    elevation: 600,
    farmSize: 8,
    featured: true,
    profileImage: 'https://images.unsplash.com/photo-1559548331-f9cb98001426?ixlib=rb-4.0.3&w=600&q=80',
    farmImages: [
      'https://images.unsplash.com/photo-1563835113023-8b50c9a70bf7?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1558905916-8c8a4000b02e?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1574859471052-5ab9e3c0f693?ixlib=rb-4.0.3&w=800&q=80'
    ],
    teaTypes: ['Oriental Beauty', 'Iron Goddess', 'Green Tea'],
    teaTypesChinese: ['東方美人茶', '鐵觀音', '綠茶'],
    certifications: ['Women in Tea Leadership', 'Sustainable Farming Certified', 'Master Tea Artisan'],
    certificationsChinese: ['茶業女性領導力', '永續農業認證', '茶藝大師'],
    story: `Liu Hsiao-mei is one of Taiwan's most celebrated female tea masters, known for her exceptional Oriental Beauty oolong. Her journey began when she married into a tea farming family in Pinglin, where she discovered her passion for the intricate art of tea processing.

    What makes Liu's Oriental Beauty unique is her collaborative approach with nature's smallest workers - the green leafhoppers. These tiny insects create the perfect conditions for the tea's distinctive honey-like sweetness and complex floral notes. Liu has mastered the delicate timing required to work with these insects, understanding exactly when to harvest for optimal flavor development.

    As one of the few female tea masters in Taiwan, Liu has broken traditional barriers while preserving ancient wisdom. She has mentored countless women in tea farming and processing, establishing a network of female tea artisans throughout northern Taiwan. Her teas have been served at state dinners and international tea ceremonies.`,
    storyChinese: `劉小梅是台灣最著名的女性茶師之一，以其優質的東方美人烏龍茶聞名。她的旅程始於嫁入坪林的茶農家庭，在那裡她發現了對複雜茶葉加工藝術的熱情。

    劉師傅的東方美人茶獨特之處在於她與自然界最小工作者——小綠葉蟬的合作方式。這些微小的昆蟲為茶葉獨特的蜂蜜般甜味和複雜的花香創造了完美的條件。劉師傅掌握了與這些昆蟲合作所需的精緻時機，確切了解何時收穫以獲得最佳風味發展。

    作為台灣少數女性茶師之一，劉師傅打破了傳統障礙，同時保留了古老智慧。她指導了無數女性進行茶葉種植和加工，在台灣北部建立了女性茶藝師網絡。她的茶曾在國宴和國際茶道儀式上供應。`,
    philosophy: 'Tea teaches us patience and humility. Like the leafhoppers that help create Oriental Beauty, we must work in harmony with nature, not against it.',
    philosophyChinese: '茶教我們耐心和謙卑。就像幫助創造東方美人茶的小綠葉蟬一樣，我們必須與自然和諧合作，而不是對抗它。',
    achievements: [
      'First female Master Tea Processor in Pinglin District',
      'International Tea Championship Winner (2019, 2021)',
      'Established Women\'s Tea Cooperative',
      'Featured in "Taiwan Tea Masters" UNESCO documentary'
    ],
    achievementsChinese: [
      '坪林區首位女性茶葉加工大師',
      '國際茶葉錦標賽冠軍（2019、2021）',
      '成立女性茶葉合作社',
      'UNESCO「台灣茶師」紀錄片特色'
    ],
    quote: 'The sweetest tea comes from the most challenging circumstances - just like the strongest women.',
    quoteChinese: '最甜的茶來自最具挑戰性的環境——就像最堅強的女性一樣。'
  },
  {
    id: 'wang-da-wei',
    name: 'Wang Da-wei',
    nameChinese: '王大偉',
    region: 'Lugu, Nantou County',
    regionChinese: '南投縣鹿谷',
    specialty: 'Dong Ding Oolong',
    specialtyChinese: '凍頂烏龍茶',
    experience: 42,
    establishedYear: 1978,
    elevation: 750,
    farmSize: 15,
    featured: false,
    profileImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&w=600&q=80',
    farmImages: [
      'https://images.unsplash.com/photo-1574859471052-5ab9e3c0f693?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1563835113023-8b50c9a70bf7?ixlib=rb-4.0.3&w=800&q=80'
    ],
    teaTypes: ['Dong Ding Oolong', 'Red Tea', 'Aged Oolong'],
    teaTypesChinese: ['凍頂烏龍茶', '紅茶', '陳年烏龍茶'],
    certifications: ['Traditional Methods Certified', 'Taiwan Tea Master Association', 'Export Quality Certified'],
    certificationsChinese: ['傳統方法認證', '台灣茶師協會', '出口品質認證'],
    story: `Wang Da-wei represents the third generation of his family's commitment to Dong Ding oolong excellence. His grandfather established the farm in the rolling hills of Lugu in 1978, and Wang has spent over four decades perfecting the traditional roasting techniques that give Dong Ding its characteristic rich, complex flavor.

    Wang is particularly renowned for his mastery of the traditional wood-fired roasting process, a skill that few tea masters still possess. He believes that the slow, careful roasting over longan wood fires creates depth and character that cannot be replicated by modern electric methods. His aged oolongs, some stored for over 20 years, are considered treasures among tea connoisseurs.

    Beyond his technical expertise, Wang is deeply committed to preserving Taiwan's tea heritage. He regularly hosts traditional tea ceremonies and teaches young farmers the ancient arts of tea processing. His farm serves as a living museum of traditional Taiwanese tea culture.`,
    storyChinese: `王大偉代表著他家族對凍頂烏龍茶卓越品質三代人的承諾。他的祖父於1978年在鹿谷的丘陵地帶建立了農場，王師傅花了四十多年完善傳統烘焙技術，為凍頂茶帶來特有的豐富複雜風味。

    王師傅以掌握傳統木炭烘焙工藝而聞名，這是少數茶師仍具備的技能。他相信用龍眼木慢火仔細烘焙創造的深度和特色是現代電子方法無法複製的。他的陳年烏龍茶，有些儲存了20多年，被茶葉鑑賞家視為珍寶。

    除了技術專長外，王師傅深深致力於保護台灣的茶葉傳統。他定期舉辦傳統茶道儀式，教導年輕農民古老的茶葉加工藝術。他的農場是台灣傳統茶文化的活博物館。`,
    philosophy: 'True mastery comes not from rushing, but from understanding the rhythm of tea. Each leaf must be respected, each firing carefully considered.',
    philosophyChinese: '真正的精通不是來自匆忙，而是來自理解茶的節奏。每片葉子都必須受到尊重，每次烘焙都要仔細考慮。',
    achievements: [
      'Preserves traditional wood-fire roasting techniques',
      'Maintains 20+ year aged tea collection',
      'Taiwan Cultural Heritage Tea Master designation',
      'Mentored 50+ tea apprentices over 25 years'
    ],
    achievementsChinese: [
      '保護傳統木炭烘焙技術',
      '維護20多年陳年茶收藏',
      '台灣文化遺產茶師稱號',
      '25年來指導了50多位茶學徒'
    ],
    quote: 'Time is the most important ingredient in great tea - patience in growing, wisdom in processing, and years in aging.',
    quoteChinese: '時間是偉大茶葉最重要的成分——種植的耐心、加工的智慧，以及陳化的歲月。'
  },
  {
    id: 'zhang-mei-ling',
    name: 'Zhang Mei-ling',
    nameChinese: '張美玲',
    region: 'Mingjian, Nantou County',
    regionChinese: '南投縣名間',
    specialty: 'Four Seasons Spring Oolong',
    specialtyChinese: '四季春烏龍茶',
    experience: 25,
    establishedYear: 1995,
    elevation: 400,
    farmSize: 10,
    featured: false,
    profileImage: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&w=600&q=80',
    farmImages: [
      'https://images.unsplash.com/photo-1558905916-8c8a4000b02e?ixlib=rb-4.0.3&w=800&q=80',
      'https://images.unsplash.com/photo-1545315003-c5ad6226c272?ixlib=rb-4.0.3&w=800&q=80'
    ],
    teaTypes: ['Four Seasons Spring', 'Green Tea', 'Jasmine Tea'],
    teaTypesChinese: ['四季春', '綠茶', '茉莉花茶'],
    certifications: ['Innovative Farming Methods', 'Quality Assurance Certified', 'Youth Mentorship Program'],
    certificationsChinese: ['創新農業方法', '品質保證認證', '青年指導計劃'],
    story: `Zhang Mei-ling is a pioneer in innovative tea farming, specializing in the adaptable Four Seasons Spring oolong variety. Her approach combines traditional Taiwanese tea wisdom with modern sustainable farming techniques, making her one of the most progressive farmers in Nantou County.

    Zhang's expertise lies in understanding the versatile nature of Four Seasons Spring tea, which can be harvested year-round while maintaining consistent quality. She has developed specialized techniques for processing this variety that highlight its natural floral characteristics and smooth, approachable flavor profile.

    As a leader in tea innovation, Zhang has established educational programs for young farmers, teaching them how to adapt traditional methods for modern challenges. Her farm serves as a demonstration site for sustainable practices, including water conservation and organic pest management.`,
    storyChinese: `張美玲是創新茶農業的先驅，專精於適應性強的四季春烏龍茶品種。她的方法結合了傳統台灣茶智慧與現代永續農業技術，使她成為南投縣最進步的農民之一。

    張師傅的專長在於理解四季春茶的多樣性，這種茶可以全年收穫，同時保持一致的品質。她開發了專門的這個品種加工技術，突出其天然花香特色和順滑易飲的風味檔案。

    作為茶葉創新的領導者，張師傅為年輕農民建立了教育計劃，教導他們如何調整傳統方法以應對現代挑戰。她的農場是永續實踐的示範基地，包括節水和有機害蟲管理。`,
    philosophy: 'Innovation and tradition must dance together. We honor the past while embracing the future, always with respect for the tea plant.',
    philosophyChinese: '創新和傳統必須共舞。我們尊重過去，同時擁抱未來，始終尊重茶樹。',
    achievements: [
      'Developed new Four Seasons Spring processing method',
      'Established Young Farmers Education Center',
      'Water Conservation Innovation Award (2020)',
      'Sustainable Agriculture Leadership Recognition'
    ],
    achievementsChinese: [
      '開發新的四季春加工方法',
      '成立青年農民教育中心',
      '節水創新獎（2020）',
      '永續農業領導力認可'
    ],
    quote: 'Four Seasons Spring teaches us that consistency and adaptability can coexist beautifully.',
    quoteChinese: '四季春教我們一致性和適應性可以美麗地共存。'
  }
];

export const getFeatureFarmers = (): Farmer[] => {
  return farmers.filter(farmer => farmer.featured);
};

export const getFarmerById = (id: string): Farmer | undefined => {
  return farmers.find(farmer => farmer.id === id);
};

export const getFarmersByRegion = (region: string): Farmer[] => {
  return farmers.filter(farmer => 
    farmer.region.toLowerCase().includes(region.toLowerCase()) ||
    farmer.regionChinese.includes(region)
  );
};

export const getFarmersBySpecialty = (specialty: string): Farmer[] => {
  return farmers.filter(farmer => 
    farmer.specialty.toLowerCase().includes(specialty.toLowerCase()) ||
    farmer.specialtyChinese.includes(specialty)
  );
};