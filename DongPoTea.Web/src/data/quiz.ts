export interface QuizQuestion {
  id: string;
  question: string;
  questionChinese: string;
  type: 'single' | 'multiple' | 'scale';
  options: QuizOption[];
  category: 'preference' | 'experience' | 'lifestyle' | 'flavor';
  weight: number;
}

export interface QuizOption {
  id: string;
  text: string;
  textChinese: string;
  value: number;
  tags: string[];
}

export interface TeaRecommendation {
  id: string;
  name: string;
  nameChinese: string;
  type: string;
  typeChinese: string;
  description: string;
  descriptionChinese: string;
  image: string;
  matchScore: number;
  brewingNotes: string;
  brewingNotesChinese: string;
  flavorProfile: string[];
  flavorProfileChinese: string[];
  reasons: string[];
  reasonsChinese: string[];
}

export interface QuizResult {
  primaryRecommendation: TeaRecommendation;
  alternativeRecommendations: TeaRecommendation[];
  flavorProfile: {
    sweet: number;
    bitter: number;
    floral: number;
    earthy: number;
    fresh: number;
    rich: number;
  };
  experienceLevel: 'beginner' | 'intermediate' | 'advanced';
  preferredStrength: 'light' | 'medium' | 'strong';
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: '1',
    question: 'How would you describe your tea drinking experience?',
    questionChinese: '您如何描述您的飲茶經驗？',
    type: 'single',
    category: 'experience',
    weight: 1.2,
    options: [
      {
        id: '1a',
        text: 'I\'m new to tea and want to explore',
        textChinese: '我剛接觸茶葉，想要探索',
        value: 1,
        tags: ['beginner', 'mild', 'accessible']
      },
      {
        id: '1b',
        text: 'I enjoy tea occasionally and know some basics',
        textChinese: '我偶爾喝茶，了解一些基礎知識',
        value: 2,
        tags: ['intermediate', 'moderate', 'familiar']
      },
      {
        id: '1c',
        text: 'I\'m a tea enthusiast with refined preferences',
        textChinese: '我是茶愛好者，有精緻的品味',
        value: 3,
        tags: ['advanced', 'complex', 'sophisticated']
      }
    ]
  },
  {
    id: '2',
    question: 'What time of day do you most often drink tea?',
    questionChinese: '您通常在一天中的什麼時候喝茶？',
    type: 'multiple',
    category: 'lifestyle',
    weight: 0.8,
    options: [
      {
        id: '2a',
        text: 'Morning (energizing start)',
        textChinese: '早晨（充滿活力的開始）',
        value: 1,
        tags: ['morning', 'energizing', 'black-tea', 'oolong']
      },
      {
        id: '2b',
        text: 'Afternoon (midday break)',
        textChinese: '下午（中午休息）',
        value: 1,
        tags: ['afternoon', 'refreshing', 'green-tea', 'white-tea']
      },
      {
        id: '2c',
        text: 'Evening (relaxing wind-down)',
        textChinese: '晚上（放鬆休息）',
        value: 1,
        tags: ['evening', 'calming', 'herbal', 'light-oolong']
      },
      {
        id: '2d',
        text: 'All day (I love tea anytime)',
        textChinese: '全天（我隨時都愛喝茶）',
        value: 1,
        tags: ['versatile', 'variety', 'all-types']
      }
    ]
  },
  {
    id: '3',
    question: 'Which flavors appeal to you most?',
    questionChinese: '哪些風味最吸引您？',
    type: 'multiple',
    category: 'flavor',
    weight: 1.5,
    options: [
      {
        id: '3a',
        text: 'Fresh and grassy (like spring meadows)',
        textChinese: '清新草香（如春天的草地）',
        value: 1,
        tags: ['fresh', 'grassy', 'green-tea', 'light']
      },
      {
        id: '3b',
        text: 'Floral and fragrant (like blooming flowers)',
        textChinese: '花香芬芳（如盛開的花朵）',
        value: 1,
        tags: ['floral', 'fragrant', 'oolong', 'jasmine']
      },
      {
        id: '3c',
        text: 'Rich and malty (like warm bread)',
        textChinese: '豐富麥香（如溫暖的麵包）',
        value: 1,
        tags: ['rich', 'malty', 'black-tea', 'strong']
      },
      {
        id: '3d',
        text: 'Sweet and fruity (like ripe fruits)',
        textChinese: '甜美果香（如成熟水果）',
        value: 1,
        tags: ['sweet', 'fruity', 'oolong', 'flavored']
      },
      {
        id: '3e',
        text: 'Earthy and mineral (like mountain stones)',
        textChinese: '土香礦物（如山石）',
        value: 1,
        tags: ['earthy', 'mineral', 'pu-erh', 'aged']
      }
    ]
  },
  {
    id: '4',
    question: 'How do you prefer your tea strength?',
    questionChinese: '您喜歡茶的濃度如何？',
    type: 'single',
    category: 'preference',
    weight: 1.3,
    options: [
      {
        id: '4a',
        text: 'Light and delicate',
        textChinese: '清淡精緻',
        value: 1,
        tags: ['light', 'delicate', 'white-tea', 'green-tea']
      },
      {
        id: '4b',
        text: 'Medium-bodied and balanced',
        textChinese: '中等濃度，平衡',
        value: 2,
        tags: ['medium', 'balanced', 'oolong', 'light-black']
      },
      {
        id: '4c',
        text: 'Full-bodied and robust',
        textChinese: '濃郁厚重',
        value: 3,
        tags: ['strong', 'robust', 'black-tea', 'pu-erh']
      }
    ]
  },
  {
    id: '5',
    question: 'What draws you to tea drinking?',
    questionChinese: '什麼吸引您喝茶？',
    type: 'multiple',
    category: 'preference',
    weight: 1.0,
    options: [
      {
        id: '5a',
        text: 'Health benefits and wellness',
        textChinese: '健康益處和養生',
        value: 1,
        tags: ['health', 'wellness', 'antioxidants', 'green-tea']
      },
      {
        id: '5b',
        text: 'Relaxation and mindfulness',
        textChinese: '放鬆和正念',
        value: 1,
        tags: ['relaxation', 'mindfulness', 'ceremony', 'oolong']
      },
      {
        id: '5c',
        text: 'Energy and focus',
        textChinese: '活力和專注',
        value: 1,
        tags: ['energy', 'focus', 'caffeine', 'black-tea']
      },
      {
        id: '5d',
        text: 'Cultural exploration and tradition',
        textChinese: '文化探索和傳統',
        value: 1,
        tags: ['culture', 'tradition', 'ceremony', 'variety']
      },
      {
        id: '5e',
        text: 'Complex flavors and tasting experience',
        textChinese: '複雜風味和品茗體驗',
        value: 1,
        tags: ['complexity', 'tasting', 'premium', 'aged']
      }
    ]
  },
  {
    id: '6',
    question: 'How adventurous are you with new flavors?',
    questionChinese: '您對新風味的冒險精神如何？',
    type: 'scale',
    category: 'preference',
    weight: 0.9,
    options: [
      {
        id: '6a',
        text: 'I prefer familiar, safe choices',
        textChinese: '我喜歡熟悉、安全的選擇',
        value: 1,
        tags: ['safe', 'familiar', 'classic', 'accessible']
      },
      {
        id: '6b',
        text: 'I\'m open to trying new things occasionally',
        textChinese: '我偶爾會嘗試新事物',
        value: 2,
        tags: ['moderate', 'occasional', 'guided', 'intro']
      },
      {
        id: '6c',
        text: 'I love exploring unique and unusual teas',
        textChinese: '我喜歡探索獨特和不尋常的茶',
        value: 3,
        tags: ['adventurous', 'unique', 'rare', 'experimental']
      }
    ]
  },
  {
    id: '7',
    question: 'How do you typically prepare your tea?',
    questionChinese: '您通常如何準備茶？',
    type: 'single',
    category: 'lifestyle',
    weight: 0.7,
    options: [
      {
        id: '7a',
        text: 'Quick and convenient (tea bags, simple brewing)',
        textChinese: '快速便利（茶包，簡單沖泡）',
        value: 1,
        tags: ['convenient', 'quick', 'tea-bags', 'easy']
      },
      {
        id: '7b',
        text: 'Traditional method (loose leaf, proper timing)',
        textChinese: '傳統方法（散茶，正確時間）',
        value: 2,
        tags: ['traditional', 'loose-leaf', 'proper', 'mindful']
      },
      {
        id: '7c',
        text: 'Ceremonial approach (gongfu, multiple infusions)',
        textChinese: '儀式化方法（功夫茶，多次沖泡）',
        value: 3,
        tags: ['ceremonial', 'gongfu', 'multiple', 'artful']
      }
    ]
  }
];

export const teaDatabase: TeaRecommendation[] = [
  {
    id: 'dongding-oolong',
    name: 'Dong Ding Oolong',
    nameChinese: '凍頂烏龍',
    type: 'Oolong Tea',
    typeChinese: '烏龍茶',
    description: 'A classic Taiwanese oolong with a perfect balance of floral aroma and rich, complex flavors. Ideal for those seeking traditional excellence.',
    descriptionChinese: '經典的台灣烏龍茶，花香與豐富複雜口感完美平衡。適合追求傳統卓越的茶友。',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 95°C water, steep for 2-3 minutes. Can be steeped multiple times.',
    brewingNotesChinese: '使用95°C水溫，浸泡2-3分鐘。可多次沖泡。',
    flavorProfile: ['floral', 'balanced', 'complex', 'traditional'],
    flavorProfileChinese: ['花香', '平衡', '複雜', '傳統'],
    reasons: [],
    reasonsChinese: []
  },
  {
    id: 'high-mountain-oolong',
    name: 'High Mountain Oolong',
    nameChinese: '高山烏龍',
    type: 'Oolong Tea',
    typeChinese: '烏龍茶',
    description: 'Grown above 1000m altitude, this tea offers exceptional clarity, floral notes, and a refreshing mountain character.',
    descriptionChinese: '生長在1000米以上高山，具有卓越的清香、花香和清新的山韻特色。',
    image: 'https://images.unsplash.com/photo-1563822249548-6a32a01735f7?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 90-95°C water, steep for 1-2 minutes initially, extend for subsequent steeps.',
    brewingNotesChinese: '使用90-95°C水溫，初泡1-2分鐘，後續可延長時間。',
    flavorProfile: ['floral', 'fresh', 'high-altitude', 'clean'],
    flavorProfileChinese: ['花香', '清新', '高山', '清淨'],
    reasons: [],
    reasonsChinese: []
  },
  {
    id: 'tie-guan-yin',
    name: 'Tie Guan Yin (Iron Goddess)',
    nameChinese: '鐵觀音',
    type: 'Oolong Tea',
    typeChinese: '烏龍茶',
    description: 'Famous for its orchid-like fragrance and long-lasting sweetness. A sophisticated choice for experienced tea drinkers.',
    descriptionChinese: '以蘭花般的香氣和持久甘甜聞名。是經驗豐富茶友的精緻選擇。',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 95-100°C water, rinse leaves first, then steep for 30-60 seconds.',
    brewingNotesChinese: '使用95-100°C水溫，先洗茶，再浸泡30-60秒。',
    flavorProfile: ['orchid', 'sweet', 'complex', 'sophisticated'],
    flavorProfileChinese: ['蘭香', '甘甜', '複雜', '精緻'],
    reasons: [],
    reasonsChinese: []
  },
  {
    id: 'formosa-black',
    name: 'Formosa Black Tea',
    nameChinese: '台灣紅茶',
    type: 'Black Tea',
    typeChinese: '紅茶',
    description: 'A robust, full-bodied black tea with malty sweetness and energizing properties. Perfect for morning and strong tea lovers.',
    descriptionChinese: '濃郁飽滿的紅茶，具有麥香甜味和提神特性。適合晨間和喜愛濃茶的茶友。',
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 95-100°C water, steep for 3-5 minutes. Great with or without milk.',
    brewingNotesChinese: '使用95-100°C水溫，浸泡3-5分鐘。可加奶或純飲。',
    flavorProfile: ['robust', 'malty', 'energizing', 'strong'],
    flavorProfileChinese: ['濃郁', '麥香', '提神', '濃厚'],
    reasons: [],
    reasonsChinese: []
  },
  {
    id: 'jasmine-green',
    name: 'Jasmine Green Tea',
    nameChinese: '茉莉花茶',
    type: 'Scented Green Tea',
    typeChinese: '花茶',
    description: 'Delicate green tea scented with fresh jasmine flowers. Light, fragrant, and perfect for afternoon relaxation.',
    descriptionChinese: '用新鮮茉莉花薰製的精緻綠茶。清淡香氣，適合下午放鬆時光。',
    image: 'https://images.unsplash.com/photo-1527550122325-b4e4db81b788?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 80°C water, steep for 2-3 minutes. Light and refreshing.',
    brewingNotesChinese: '使用80°C水溫，浸泡2-3分鐘。清淡清新。',
    flavorProfile: ['floral', 'light', 'fragrant', 'refreshing'],
    flavorProfileChinese: ['花香', '清淡', '芬芳', '清新'],
    reasons: [],
    reasonsChinese: []
  },
  {
    id: 'white-peony',
    name: 'White Peony (Bai Mu Dan)',
    nameChinese: '白牡丹',
    type: 'White Tea',
    typeChinese: '白茶',
    description: 'A gentle, naturally sweet white tea with subtle complexity. Perfect for beginners and health-conscious drinkers.',
    descriptionChinese: '溫和天然甘甜的白茶，具有微妙的複雜性。適合初學者和注重健康的茶友。',
    image: 'https://images.unsplash.com/photo-1551024739-6e0b6243e3c6?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 75-80°C water, steep for 3-4 minutes. Very forgiving and healthy.',
    brewingNotesChinese: '使用75-80°C水溫，浸泡3-4分鐘。容易掌握且健康。',
    flavorProfile: ['delicate', 'sweet', 'healthy', 'gentle'],
    flavorProfileChinese: ['精緻', '甘甜', '健康', '溫和'],
    reasons: [],
    reasonsChinese: []
  },
  {
    id: 'aged-pu-erh',
    name: 'Aged Pu-erh',
    nameChinese: '陳年普洱',
    type: 'Pu-erh Tea',
    typeChinese: '普洱茶',
    description: 'A complex, earthy tea with deep, rich flavors that develop over years of aging. For adventurous tea connoisseurs.',
    descriptionChinese: '複雜的土香茶，具有經年陳化的深厚豐富口感。適合冒險的茶品鑑家。',
    image: 'https://images.unsplash.com/photo-1597481499666-1f69e4cfd2b4?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 95-100°C water, rinse leaves first, steep for 30-45 seconds initially.',
    brewingNotesChinese: '使用95-100°C水溫，先洗茶，初泡30-45秒。',
    flavorProfile: ['earthy', 'complex', 'aged', 'deep'],
    flavorProfileChinese: ['土香', '複雜', '陳年', '深厚'],
    reasons: [],
    reasonsChinese: []
  },
  {
    id: 'green-sencha',
    name: 'Taiwanese Sencha Style',
    nameChinese: '台式煎茶',
    type: 'Green Tea',
    typeChinese: '綠茶',
    description: 'Fresh, grassy green tea with vibrant flavors and high antioxidants. Excellent for health benefits and morning energy.',
    descriptionChinese: '清新草香的綠茶，具有活力的口感和高抗氧化物。有益健康，適合晨間提神。',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?ixlib=rb-4.0.3&w=600&q=80',
    matchScore: 0,
    brewingNotes: 'Use 70-80°C water, steep for 1-2 minutes. Fresh and energizing.',
    brewingNotesChinese: '使用70-80°C水溫，浸泡1-2分鐘。清新提神。',
    flavorProfile: ['fresh', 'grassy', 'healthy', 'energizing'],
    flavorProfileChinese: ['清新', '草香', '健康', '提神'],
    reasons: [],
    reasonsChinese: []
  }
];

export function calculateTeaMatch(answers: Record<string, string[]>): QuizResult {
  const userTags: string[] = [];
  const strengthPreference = { light: 0, medium: 0, strong: 0 };
  const experienceLevel = { beginner: 0, intermediate: 0, advanced: 0 };
  
  // Analyze answers and collect tags
  Object.entries(answers).forEach(([questionId, selectedOptions]) => {
    const question = quizQuestions.find(q => q.id === questionId);
    if (!question) return;
    
    selectedOptions.forEach(optionId => {
      const option = question.options.find(o => o.id === optionId);
      if (!option) return;
      
      userTags.push(...option.tags);
      
      // Track experience level
      if (option.tags.includes('beginner')) experienceLevel.beginner += question.weight;
      if (option.tags.includes('intermediate')) experienceLevel.intermediate += question.weight;
      if (option.tags.includes('advanced')) experienceLevel.advanced += question.weight;
      
      // Track strength preference
      if (option.tags.includes('light') || option.tags.includes('delicate')) {
        strengthPreference.light += question.weight;
      }
      if (option.tags.includes('medium') || option.tags.includes('balanced')) {
        strengthPreference.medium += question.weight;
      }
      if (option.tags.includes('strong') || option.tags.includes('robust')) {
        strengthPreference.strong += question.weight;
      }
    });
  });
  
  // Determine user profile
  const userExperience = Object.entries(experienceLevel).reduce((a, b) => 
    experienceLevel[a[0] as keyof typeof experienceLevel] > experienceLevel[b[0] as keyof typeof experienceLevel] ? a : b
  )[0] as 'beginner' | 'intermediate' | 'advanced';
  
  const userStrength = Object.entries(strengthPreference).reduce((a, b) => 
    strengthPreference[a[0] as keyof typeof strengthPreference] > strengthPreference[b[0] as keyof typeof strengthPreference] ? a : b
  )[0] as 'light' | 'medium' | 'strong';
  
  // Calculate flavor profile
  const flavorProfile = {
    sweet: userTags.filter(tag => ['sweet', 'fruity', 'floral'].includes(tag)).length,
    bitter: userTags.filter(tag => ['bitter', 'strong', 'robust'].includes(tag)).length,
    floral: userTags.filter(tag => ['floral', 'fragrant', 'jasmine', 'orchid'].includes(tag)).length,
    earthy: userTags.filter(tag => ['earthy', 'mineral', 'aged'].includes(tag)).length,
    fresh: userTags.filter(tag => ['fresh', 'grassy', 'clean'].includes(tag)).length,
    rich: userTags.filter(tag => ['rich', 'malty', 'complex', 'deep'].includes(tag)).length,
  };
  
  // Score each tea
  const scoredTeas = teaDatabase.map(tea => {
    let score = 0;
    
    // Check tag matches
    const matchingTags = tea.flavorProfile.filter(flavor => userTags.includes(flavor)).length;
    score += matchingTags * 10;
    
    // Experience level bonus
    if (userExperience === 'beginner' && ['white-peony', 'jasmine-green', 'green-sencha'].includes(tea.id)) {
      score += 15;
    }
    if (userExperience === 'intermediate' && ['dongding-oolong', 'high-mountain-oolong', 'formosa-black'].includes(tea.id)) {
      score += 15;
    }
    if (userExperience === 'advanced' && ['tie-guan-yin', 'aged-pu-erh'].includes(tea.id)) {
      score += 15;
    }
    
    // Strength preference bonus
    if (userStrength === 'light' && ['white-peony', 'jasmine-green', 'green-sencha'].includes(tea.id)) {
      score += 10;
    }
    if (userStrength === 'medium' && ['dongding-oolong', 'high-mountain-oolong', 'tie-guan-yin'].includes(tea.id)) {
      score += 10;
    }
    if (userStrength === 'strong' && ['formosa-black', 'aged-pu-erh'].includes(tea.id)) {
      score += 10;
    }
    
    return { ...tea, matchScore: score };
  });
  
  // Sort by score and get recommendations
  scoredTeas.sort((a, b) => b.matchScore - a.matchScore);
  
  const primaryRecommendation = scoredTeas[0];
  const alternativeRecommendations = scoredTeas.slice(1, 4);
  
  // Generate personalized reasons
  const reasons = [
    `Based on your experience level (${userExperience}), this tea offers the perfect complexity.`,
    `Your preference for ${userStrength} teas makes this an ideal match.`,
    `The flavor profile aligns with your interests in ${userTags.slice(0, 3).join(', ')} characteristics.`
  ];
  
  const reasonsChinese = [
    `基於您的經驗水平（${userExperience === 'beginner' ? '初學者' : userExperience === 'intermediate' ? '中級' : '高級'}），這款茶提供了完美的複雜度。`,
    `您對${userStrength === 'light' ? '清淡' : userStrength === 'medium' ? '中等' : '濃厚'}茶的偏好使這成為理想的選擇。`,
    `風味特徵與您的興趣完美匹配。`
  ];
  
  primaryRecommendation.reasons = reasons;
  primaryRecommendation.reasonsChinese = reasonsChinese;
  
  return {
    primaryRecommendation,
    alternativeRecommendations,
    flavorProfile,
    experienceLevel: userExperience,
    preferredStrength: userStrength
  };
}