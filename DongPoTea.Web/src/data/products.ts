export interface Product {
  id: string;
  name: string;
  nameChinese: string;
  price: number;
  category: 'teabag' | 'loose-tea';
  image: string;
  description?: string;
  descriptionChinese?: string;
  inStock?: boolean;
}

// Working image URLs - using stable Unsplash API URLs
export const productImages = {
  // Tea Bags
  classicCollection: 'https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?ixlib=rb-4.0.3&w=600&q=80',
  jinXuan: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=600&q=80',
  redJade: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-4.0.3&w=600&q=80',
  singingOriole: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&w=600&q=80',
  dongDing: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=600&q=80',
  floralRhythm: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&w=600&q=80',
  champagneKiss: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&w=600&q=80',
  mountainPraise: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&w=600&q=80',
  
  // Loose Tea
  premiumOolong: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&w=600&q=80',
  highMountain: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&w=600&q=80',
  orientalBeauty: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&w=600&q=80',
  ironGoddess: 'https://images.unsplash.com/photo-1587451152235-05466c2fc532?ixlib=rb-4.0.3&w=600&q=80',
  blackTea: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=600&q=80',
  greenTea: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=600&q=80',
  
  // Category images
  teaBagsCategory: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&w=1200&q=80',
  looseTeaCategory: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-4.0.3&w=1200&q=80',
  
  // Section images
  taiwanLandscape: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&w=800&q=80',
  teaVarieties: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?ixlib=rb-4.0.3&w=800&q=80',
  teaCraftsmanship: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&w=800&q=80',
  
  // Tea tasting key points
  aromasBanner: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=1000&q=80',
  textureBanner: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&w=1000&q=80',
  aftertasteBanner: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=1000&q=80',
  
  // Placeholder/Default
  placeholder: 'https://images.unsplash.com/photo-1587451152235-05466c2fc532?ixlib=rb-4.0.3&w=600&q=80'
};

export const products: Product[] = [
  // Tea Bags
  {
    id: '1',
    name: 'Classic Collection',
    nameChinese: '經典系列',
    price: 18,
    category: 'teabag',
    image: productImages.classicCollection,
    description: 'A carefully curated selection of our most beloved traditional Taiwanese teas, perfect for those new to the world of premium tea.',
    descriptionChinese: '精心策劃的台灣傳統茶葉精選，適合初次品嚐高級茶葉的朋友。',
    inStock: true
  },
  {
    id: '2',
    name: 'Jin Xuan No.12',
    nameChinese: '金萱12號',
    price: 15,
    category: 'teabag',
    image: productImages.jinXuan,
    description: 'Also known as "Milk Oolong," this tea features a naturally creamy and buttery taste with subtle floral notes.',
    descriptionChinese: '又稱「奶香烏龍」，具有天然的奶油和黃油味，帶有細膩的花香。',
    inStock: true
  },
  {
    id: '3',
    name: 'Red Jade No.18',
    nameChinese: '紅玉18號',
    price: 18,
    category: 'teabag',
    image: productImages.redJade,
    description: 'A premium black tea with hints of cinnamon and mint, unique to Sun Moon Lake region.',
    descriptionChinese: '來自日月潭地區的優質紅茶，帶有肉桂和薄荷的香氣。',
    inStock: true
  },
  {
    id: '4',
    name: 'Singing Oriole',
    nameChinese: '黃鶯歌唱',
    price: 15,
    category: 'teabag',
    image: productImages.singingOriole,
    description: 'A light and refreshing green oolong with delicate floral aromas and a sweet aftertaste.',
    descriptionChinese: '清淡爽口的綠烏龍，具有精緻的花香和甜美的餘韻。',
    inStock: true
  },
  {
    id: '5',
    name: 'Dong Ding',
    nameChinese: '凍頂',
    price: 18,
    category: 'teabag',
    image: productImages.dongDing,
    description: 'Traditional roasted oolong from Lugu township, featuring a rich, smooth flavor with honey notes.',
    descriptionChinese: '來自鹿谷鄉的傳統烘焙烏龍，具有豐富順滑的口感和蜂蜜香味。',
    inStock: true
  },
  {
    id: '6',
    name: 'Floral Rhythm No.21',
    nameChinese: '花韻21號',
    price: 22,
    category: 'teabag',
    image: productImages.floralRhythm,
    description: 'An elegant tea with pronounced jasmine and gardenia notes, perfect for special occasions.',
    descriptionChinese: '優雅的茶葉，帶有明顯的茉莉和梔子花香，適合特殊場合。',
    inStock: true
  },
  {
    id: '7',
    name: 'Champagne Kiss',
    nameChinese: '香檳之吻',
    price: 18,
    category: 'teabag',
    image: productImages.champagneKiss,
    description: 'A unique blend with effervescent qualities reminiscent of champagne, light and celebratory.',
    descriptionChinese: '獨特的混合茶，具有類似香檳的氣泡感，輕盈而喜慶。',
    inStock: true
  },
  {
    id: '8',
    name: 'Mountain Praise',
    nameChinese: '山之讚',
    price: 22,
    category: 'teabag',
    image: productImages.mountainPraise,
    description: 'High mountain oolong grown above 2000 meters, with crisp, clean flavors and natural sweetness.',
    descriptionChinese: '生長於2000公尺以上的高山烏龍，具有清脆純淨的風味和天然甜味。',
    inStock: true
  },
  
  // Loose Tea
  {
    id: '9',
    name: 'Premium Oolong',
    nameChinese: '特級烏龍',
    price: 25,
    category: 'loose-tea',
    image: productImages.premiumOolong,
    description: 'Hand-picked premium oolong leaves with complex flavor profile and multiple infusions potential.',
    descriptionChinese: '手工採摘的特級烏龍葉，具有複雜的風味和多次沖泡的潛力。',
    inStock: true
  },
  {
    id: '10',
    name: 'High Mountain Tea',
    nameChinese: '高山茶',
    price: 32,
    category: 'loose-tea',
    image: productImages.highMountain,
    description: 'Cultivated at altitudes above 1600 meters, offering exceptional clarity and floral notes.',
    descriptionChinese: '種植於海拔1600公尺以上，具有卓越的清澈度和花香。',
    inStock: true
  },
  {
    id: '11',
    name: 'Oriental Beauty',
    nameChinese: '東方美人',
    price: 28,
    category: 'loose-tea',
    image: productImages.orientalBeauty,
    description: 'Also known as Bai Hao, this unique tea features natural honey and fruit flavors from leafhopper bites.',
    descriptionChinese: '又稱白毫烏龍，因小綠葉蟬叮咬而產生獨特的蜂蜜和水果風味。',
    inStock: true
  },
  {
    id: '12',
    name: 'Iron Goddess',
    nameChinese: '鐵觀音',
    price: 20,
    category: 'loose-tea',
    image: productImages.ironGoddess,
    description: 'Traditional Tieguanyin with orchid fragrance and lingering sweet aftertaste.',
    descriptionChinese: '傳統鐵觀音，具有蘭花香和持久的甜美餘韻。',
    inStock: true
  },
  {
    id: '13',
    name: 'Black Tea',
    nameChinese: '紅茶',
    price: 18,
    category: 'loose-tea',
    image: productImages.blackTea,
    description: 'Full-bodied Taiwanese black tea with malty sweetness and hints of caramel.',
    descriptionChinese: '醇厚的台灣紅茶，帶有麥芽甜味和焦糖香氣。',
    inStock: true
  },
  {
    id: '14',
    name: 'Green Tea',
    nameChinese: '綠茶',
    price: 15,
    category: 'loose-tea',
    image: productImages.greenTea,
    description: 'Fresh and vibrant green tea with grassy notes and natural umami.',
    descriptionChinese: '新鮮充滿活力的綠茶，帶有草本香味和天然鮮味。',
    inStock: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: 'teabag' | 'loose-tea'): Product[] => {
  return products.filter(product => product.category === category);
};