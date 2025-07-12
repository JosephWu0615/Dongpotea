export interface LearningSection {
  id: string;
  title: string;
  titleChinese: string;
  slug: string;
  description: string;
  descriptionChinese: string;
  icon: string;
  content: LearningContent[];
}

export interface LearningContent {
  id: string;
  title: string;
  titleChinese: string;
  slug: string;
  content: string;
  contentChinese: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readingTime: number;
  image?: string;
}

export interface BrewingGuide {
  id: string;
  teaType: string;
  teaTypeChinese: string;
  waterTemp: string;
  steepTime: string;
  teaAmount: string;
  instructions: string;
  instructionsChinese: string;
  tips: string[];
  tipsChinese: string[];
  image: string;
}

export interface TeaGlossaryTerm {
  id: string;
  term: string;
  termChinese: string;
  pronunciation?: string;
  definition: string;
  definitionChinese: string;
  category: 'processing' | 'tasting' | 'culture' | 'equipment' | 'varieties';
}

export const learningSections: LearningSection[] = [
  {
    id: '1',
    title: 'Tea 101: Beginner\'s Guide',
    titleChinese: '茶葉入門：初學者指南',
    slug: 'tea-101',
    description: 'Start your tea journey with the fundamentals. Learn about tea types, processing, and basic brewing techniques.',
    descriptionChinese: '從基礎開始您的茶葉之旅。學習茶類、加工和基本沖泡技巧。',
    icon: '🌱',
    content: [
      {
        id: '1-1',
        title: 'What is Tea?',
        titleChinese: '什麼是茶？',
        slug: 'what-is-tea',
        difficulty: 'beginner',
        readingTime: 5,
        content: `
# What is Tea?

Tea comes from the Camellia sinensis plant, an evergreen shrub native to China and parts of Southeast Asia. All true teas - whether green, black, white, oolong, or pu-erh - originate from this single plant species.

## The Tea Plant

### Camellia sinensis varieties:
- **var. sinensis**: Chinese variety with smaller leaves, more cold-hardy
- **var. assamica**: Assam variety with larger leaves, prefers warmer climates

### Growing Conditions:
- **Altitude**: 500-2,500+ meters above sea level
- **Climate**: Subtropical to temperate with adequate rainfall
- **Soil**: Well-draining, slightly acidic soil
- **Temperature**: Ideal range varies by variety and season

## Six Types of Tea

All teas are categorized by their processing method and oxidation level:

### Green Tea (綠茶)
- **Oxidation**: Minimal (0-10%)
- **Processing**: Heat-treated quickly to prevent oxidation
- **Flavor**: Fresh, grassy, vegetal
- **Examples**: Sencha, Matcha, Longjing

### White Tea (白茶)
- **Oxidation**: Light (5-10%)
- **Processing**: Minimal - withered and dried
- **Flavor**: Delicate, sweet, subtle
- **Examples**: Silver Needle, White Peony

### Yellow Tea (黃茶)
- **Oxidation**: Light (10-20%)
- **Processing**: Similar to green tea with additional yellowing step
- **Flavor**: Mellow, slightly sweet
- **Examples**: Junshan Yinzhen, Mengding Huangya

### Oolong Tea (烏龍茶)
- **Oxidation**: Partial (20-80%)
- **Processing**: Complex process with multiple steps
- **Flavor**: Complex, ranging from floral to roasted
- **Examples**: Tieguanyin, Dong Ding, Da Hong Pao

### Black Tea (紅茶)
- **Oxidation**: Full (80-100%)
- **Processing**: Fully oxidized before drying
- **Flavor**: Bold, robust, malty
- **Examples**: Earl Grey, English Breakfast, Keemun

### Pu-erh Tea (普洱茶)
- **Oxidation**: Varies (post-fermented)
- **Processing**: Aged through fermentation
- **Flavor**: Earthy, deep, complex
- **Types**: Sheng (raw) and Shou (ripe)

## Health Benefits

Tea contains numerous beneficial compounds:

### Antioxidants:
- **Catechins**: Powerful antioxidants, especially EGCG
- **Theaflavins**: Created during oxidation
- **Flavonoids**: Support cardiovascular health

### Other Compounds:
- **L-theanine**: Promotes relaxation and focus
- **Caffeine**: Natural stimulant (varies by tea type)
- **Polyphenols**: Anti-inflammatory properties

## Tea vs. Herbal Teas

**True Tea** comes from Camellia sinensis and contains caffeine naturally.

**Herbal Teas** (tisanes) are infusions made from:
- Herbs (mint, chamomile)
- Flowers (jasmine, rose)
- Fruits (apple, berry)
- Spices (ginger, cinnamon)
- Roots (ginseng, turmeric)

While herbal teas are caffeine-free and offer their own benefits, they are not technically "tea" in the traditional sense.

## Quality Factors

Several factors determine tea quality:

### Leaf Grade:
- **Whole leaves**: Highest quality, best flavor
- **Broken leaves**: Good quality, stronger brew
- **Fannings**: Smaller pieces, quick brewing
- **Dust**: Finest particles, strongest extraction

### Origin:
- **Terroir**: Soil, climate, and altitude affect flavor
- **Season**: Spring teas often considered highest quality
- **Processing**: Traditional methods vs. mass production

### Freshness:
- **Harvest date**: Fresher teas generally taste better
- **Storage**: Proper storage preserves quality
- **Packaging**: Airtight containers protect from deterioration

## Conclusion

Understanding these fundamentals provides the foundation for appreciating tea's complexity and diversity. Whether you prefer the delicate subtlety of white tea or the robust character of black tea, each type offers unique flavors and experiences waiting to be explored.
`,
        contentChinese: `
# 什麼是茶？

茶來自茶樹（Camellia sinensis），這是一種原產於中國和東南亞部分地區的常綠灌木。所有真正的茶——無論是綠茶、紅茶、白茶、烏龍茶還是普洱茶——都起源於這一單一植物品種。

## 茶樹

### 茶樹品種：
- **中國種（var. sinensis）**：中國品種，葉片較小，更耐寒
- **阿薩姆種（var. assamica）**：阿薩姆品種，葉片較大，喜歡溫暖氣候

### 生長條件：
- **海拔**：海平面以上500-2,500+米
- **氣候**：亞熱帶到溫帶，有充足降雨
- **土壤**：排水良好，微酸性土壤
- **溫度**：理想範圍因品種和季節而異

## 六大茶類

所有茶類都按加工方法和氧化程度分類：

### 綠茶
- **氧化程度**：最少（0-10%）
- **加工**：快速加熱處理以防止氧化
- **風味**：清新、草本、植物味
- **例子**：煎茶、抹茶、龍井

### 白茶
- **氧化程度**：輕微（5-10%）
- **加工**：最少加工——萎凋和乾燥
- **風味**：精緻、甜美、細膩
- **例子**：白毫銀針、白牡丹

### 黃茶
- **氧化程度**：輕微（10-20%）
- **加工**：類似綠茶，但有額外的悶黃步驟
- **風味**：醇厚、微甜
- **例子**：君山銀針、蒙頂黃芽

### 烏龍茶
- **氧化程度**：部分（20-80%）
- **加工**：複雜的多步驟過程
- **風味**：複雜，從花香到烘焙味
- **例子**：鐵觀音、凍頂、大紅袍

### 紅茶
- **氧化程度**：完全（80-100%）
- **加工**：乾燥前完全氧化
- **風味**：濃烈、強勁、麥芽味
- **例子**：伯爵茶、英式早餐茶、祁門紅茶

### 普洱茶
- **氧化程度**：各異（後發酵）
- **加工**：通過發酵陳化
- **風味**：土壤味、深沉、複雜
- **類型**：生茶和熟茶

## 健康益處

茶含有眾多有益化合物：

### 抗氧化劑：
- **兒茶素**：強效抗氧化劑，特別是EGCG
- **茶黃素**：氧化過程中產生
- **類黃酮**：支持心血管健康

### 其他化合物：
- **茶氨酸**：促進放鬆和專注
- **咖啡因**：天然興奮劑（因茶類而異）
- **多酚**：抗炎特性

## 茶與草本茶

**真茶**來自茶樹，天然含有咖啡因。

**草本茶**（花草茶）是由以下製成的浸劑：
- 草本植物（薄荷、洋甘菊）
- 花朵（茉莉、玫瑰）
- 水果（蘋果、漿果）
- 香料（生薑、肉桂）
- 根部（人參、薑黃）

雖然草本茶不含咖啡因並提供自己的益處，但從傳統意義上講，它們在技術上不是"茶"。

## 品質因素

幾個因素決定茶的品質：

### 葉片等級：
- **整葉**：最高品質，最佳風味
- **碎葉**：品質良好，沖泡更濃
- **茶末**：較小片段，快速沖泡
- **茶粉**：最細顆粒，最強萃取

### 產地：
- **風土**：土壤、氣候和海拔影響風味
- **季節**：春茶通常被認為是最高品質
- **加工**：傳統方法與批量生產

### 新鮮度：
- **採摘日期**：越新鮮的茶通常味道越好
- **儲存**：適當儲存保持品質
- **包裝**：密封容器防止變質

## 結論

理解這些基礎知識為欣賞茶的複雜性和多樣性提供了基礎。無論您喜歡白茶的精緻細膩還是紅茶的濃烈特色，每種茶類都提供等待探索的獨特風味和體驗。
`,
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=800&q=80'
      },
      {
        id: '1-2',
        title: 'Tea Processing Basics',
        titleChinese: '茶葉加工基礎',
        slug: 'tea-processing-basics',
        difficulty: 'beginner',
        readingTime: 7,
        content: `
# Tea Processing Basics

Understanding how tea is processed helps appreciate the skill and artistry involved in creating different types of tea. Each processing method affects the final flavor, aroma, and appearance of the tea.

## The Six Steps of Tea Processing

### 1. Plucking (採摘)
The quality of tea begins with proper plucking:

**Standards:**
- **One bud, two leaves**: Premium grade
- **One bud, three leaves**: Standard grade  
- **Machine harvesting**: Lower grades

**Timing:**
- **Early morning**: Optimal moisture content
- **Seasonal considerations**: Spring for highest quality
- **Weather dependency**: Avoid rain or extreme heat

### 2. Withering (萎凋)
Reducing moisture content and initiating flavor development:

**Indoor Withering:**
- Controlled temperature and humidity
- 12-18 hours duration
- Regular turning for even withering

**Outdoor Withering:**
- Natural sun drying
- Weather dependent
- 2-4 hours under mild sunlight

**Purpose:**
- Reduce moisture from 75% to 55-60%
- Make leaves pliable for rolling
- Begin flavor compound development

### 3. Bruising/Rolling (揉捻)
Breaking cell walls to release juices and oils:

**Hand Rolling:**
- Traditional method for premium teas
- Gentle pressure maintains leaf integrity
- Time-intensive but produces superior quality

**Machine Rolling:**
- Faster processing for larger quantities
- Consistent pressure and timing
- Various grades possible

**Effects:**
- Release essential oils
- Initiate oxidation process
- Shape the final tea leaves

### 4. Oxidation (氧化/發酵)
The key step that determines tea type:

**Levels:**
- **Green Tea**: 0-10% oxidation
- **White Tea**: 5-10% oxidation
- **Oolong Tea**: 20-80% oxidation
- **Black Tea**: 80-100% oxidation

**Factors Affecting Oxidation:**
- Temperature and humidity
- Oxygen exposure
- Leaf damage from rolling
- Duration of exposure

**Visual Indicators:**
- Color change from green to brown
- Aroma development
- Chemical transformation

### 5. Fixing (殺青)
Stopping oxidation at desired level:

**Methods:**
- **Pan-firing**: Traditional wok heating
- **Steaming**: Japanese method for green teas
- **Baking**: Oven method for some varieties

**Purpose:**
- Deactivate enzymes
- Lock in desired oxidation level
- Develop specific flavors

### 6. Drying (乾燥)
Final moisture removal for preservation:

**Methods:**
- **Sun drying**: Traditional outdoor method
- **Oven drying**: Controlled temperature
- **Air drying**: Natural indoor method

**Target:**
- Reduce moisture to 2-3%
- Ensure long-term storage stability
- Concentrate flavors

## Specialized Processing

### Oolong Tea Processing
The most complex tea processing:

1. **Outdoor withering** under sunlight
2. **Indoor withering** with periodic tossing
3. **Partial oxidation** (20-80%)
4. **Pan-firing** to stop oxidation
5. **Rolling** to shape leaves
6. **Final roasting** for flavor development

### White Tea Processing
The most minimal processing:

1. **Careful plucking** of young buds and leaves
2. **Natural withering** in shade
3. **Gentle drying** without rolling or firing
4. **Sorting** and grading

### Pu-erh Processing
Unique fermentation process:

**Sheng (Raw) Pu-erh:**
1. Standard green tea processing
2. Compression into cakes
3. Natural aging over years/decades

**Shou (Ripe) Pu-erh:**
1. Green tea base processing
2. Wet fermentation (wo dui)
3. Compression and aging

## Modern vs. Traditional Methods

### Traditional Advantages:
- Handcrafted quality
- Unique flavor profiles
- Cultural preservation
- Artisanal character

### Modern Advantages:
- Consistency
- Efficiency
- Food safety standards
- Quality control

### Hybrid Approaches:
Many producers combine traditional techniques with modern quality control for optimal results.

## Quality Control in Processing

### Monitoring Points:
- **Moisture levels** at each stage
- **Temperature control** during firing
- **Timing precision** for oxidation
- **Environmental conditions** throughout

### Testing Methods:
- **Visual inspection** of leaf color and shape
- **Aroma evaluation** at each stage
- **Taste testing** of finished product
- **Chemical analysis** for consistency

## The Art and Science

Tea processing combines:

**Scientific Precision:**
- Temperature and humidity control
- Timing and chemical reactions
- Quality measurements

**Artistic Intuition:**
- Reading the leaves
- Adapting to conditions
- Traditional knowledge

**Master tea makers** develop the ability to assess tea through:
- Visual examination
- Aroma evaluation
- Touch and feel
- Intuitive understanding

## Conclusion

Tea processing is both an art and a science, requiring deep understanding of the tea plant, environmental factors, and traditional techniques. The skill of the tea maker in executing each step determines whether ordinary leaves become extraordinary tea.

Understanding these processes enhances appreciation for the complexity and craftsmanship in every cup of quality tea.
`,
        contentChinese: `
# 茶葉加工基礎

理解茶葉是如何加工的有助於欣賞製作不同類型茶葉所涉及的技巧和藝術性。每種加工方法都會影響茶葉的最終風味、香氣和外觀。

## 茶葉加工的六個步驟

### 1. 採摘
茶葉品質始於正確的採摘：

**標準：**
- **一芽二葉**：優質等級
- **一芽三葉**：標準等級
- **機械採摘**：較低等級

**時機：**
- **清晨**：最佳水分含量
- **季節考量**：春季品質最高
- **天氣依賴**：避免雨天或極熱天氣

### 2. 萎凋
減少水分含量並啟動風味發展：

**室內萎凋：**
- 控制溫度和濕度
- 持續12-18小時
- 定期翻動以均勻萎凋

**室外萎凋：**
- 天然日曬乾燥
- 取決於天氣
- 在溫和陽光下2-4小時

**目的：**
- 將水分從75%減少到55-60%
- 使葉片柔軟便於揉捻
- 開始風味化合物發展

### 3. 揉捻
破壞細胞壁以釋放汁液和油脂：

**手工揉捻：**
- 優質茶的傳統方法
- 輕柔壓力保持葉片完整性
- 耗時但產生卓越品質

**機械揉捻：**
- 大批量快速加工
- 一致的壓力和時間
- 可產生各種等級

**效果：**
- 釋放精油
- 啟動氧化過程
- 塑造最終茶葉形狀

### 4. 氧化（發酵）
決定茶類的關鍵步驟：

**程度：**
- **綠茶**：0-10%氧化
- **白茶**：5-10%氧化
- **烏龍茶**：20-80%氧化
- **紅茶**：80-100%氧化

**影響氧化的因素：**
- 溫度和濕度
- 氧氣暴露
- 揉捻造成的葉片損傷
- 暴露持續時間

**視覺指標：**
- 顏色從綠色變為棕色
- 香氣發展
- 化學轉化

### 5. 殺青
在所需程度停止氧化：

**方法：**
- **炒青**：傳統炒鍋加熱
- **蒸青**：日式綠茶方法
- **烘青**：某些品種的烘箱方法

**目的：**
- 使酶失活
- 鎖定所需氧化程度
- 發展特定風味

### 6. 乾燥
最終去除水分以保存：

**方法：**
- **曬乾**：傳統戶外方法
- **烘乾**：控制溫度
- **風乾**：天然室內方法

**目標：**
- 將水分減少到2-3%
- 確保長期儲存穩定性
- 濃縮風味

## 特殊加工

### 烏龍茶加工
最複雜的茶葉加工：

1. **戶外萎凋**在陽光下
2. **室內萎凋**定期搖青
3. **部分氧化**（20-80%）
4. **炒青**停止氧化
5. **揉捻**塑造葉片
6. **最終烘焙**發展風味

### 白茶加工
最少的加工：

1. **仔細採摘**嫩芽和葉片
2. **自然萎凋**在陰涼處
3. **輕柔乾燥**無揉捻或炒青
4. **分揀**和分級

### 普洱茶加工
獨特的發酵過程：

**生普洱：**
1. 標準綠茶加工
2. 壓制成餅
3. 數年/數十年自然陳化

**熟普洱：**
1. 綠茶基礎加工
2. 濕發酵（渥堆）
3. 壓制和陳化

## 現代與傳統方法

### 傳統優勢：
- 手工品質
- 獨特風味特點
- 文化保護
- 工藝特色

### 現代優勢：
- 一致性
- 效率
- 食品安全標準
- 品質控制

### 混合方法：
許多生產商結合傳統技術與現代品質控制以獲得最佳效果。

## 加工中的品質控制

### 監控點：
- 各階段的**水分含量**
- 炒青時的**溫度控制**
- 氧化的**時間精確性**
- 整個過程的**環境條件**

### 測試方法：
- 葉片顏色和形狀的**視覺檢查**
- 各階段的**香氣評估**
- 成品的**味覺測試**
- 一致性的**化學分析**

## 藝術與科學

茶葉加工結合了：

**科學精確性：**
- 溫度和濕度控制
- 時間和化學反應
- 品質測量

**藝術直覺：**
- 讀懂茶葉
- 適應條件
- 傳統知識

**製茶師傅**發展了通過以下方式評估茶葉的能力：
- 視覺檢查
- 香氣評估
- 觸覺感受
- 直覺理解

## 結論

茶葉加工既是藝術也是科學，需要對茶樹、環境因素和傳統技術的深度理解。製茶師在執行每個步驟時的技巧決定了普通葉片是否能成為非凡的茶葉。

理解這些過程增進了對每杯優質茶中複雜性和工藝的欣賞。
`,
        image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&w=800&q=80'
      }
    ]
  },
  {
    id: '2',
    title: 'Brewing Guides',
    titleChinese: '沖泡指南',
    slug: 'brewing-guides',
    description: 'Master the art of tea brewing with our comprehensive guides for different tea types and brewing methods.',
    descriptionChinese: '通過我們針對不同茶類和沖泡方法的綜合指南掌握茶藝。',
    icon: '🫖',
    content: [
      {
        id: '2-1',
        title: 'Basic Brewing Principles',
        titleChinese: '基本沖泡原理',
        slug: 'basic-brewing-principles',
        difficulty: 'beginner',
        readingTime: 6,
        content: `
# Basic Brewing Principles

Great tea brewing is both an art and a science. Understanding the fundamental principles helps you extract the best flavors from any tea while avoiding common mistakes that can ruin even the finest leaves.

## The Five Key Variables

### 1. Water Quality
The foundation of great tea:

**Ideal Water Characteristics:**
- **Mineral content**: 150-300 ppm total dissolved solids
- **pH level**: 6.5-7.5 (slightly acidic to neutral)
- **Oxygen content**: Fresh, well-aerated water
- **Temperature**: Appropriate for tea type

**Water Sources:**
- **Spring water**: Often ideal mineral balance
- **Filtered tap water**: Remove chlorine and excess minerals
- **Avoid**: Distilled water (lacks minerals), heavily mineralized water

### 2. Water Temperature
Critical for proper extraction:

**Tea Type Guidelines:**
- **Green Tea**: 70-80°C (158-176°F)
- **White Tea**: 75-85°C (167-185°F)
- **Oolong Tea**: 85-95°C (185-203°F)
- **Black Tea**: 95-100°C (203-212°F)
- **Pu-erh Tea**: 95-100°C (203-212°F)

**Why Temperature Matters:**
- Too hot: Extracts bitter compounds
- Too cool: Under-extracts flavor compounds
- Precise control: Balances flavor elements

### 3. Steeping Time
Timing affects strength and flavor balance:

**General Guidelines:**
- **First infusion**: 30 seconds to 5 minutes
- **Subsequent infusions**: Gradual increases
- **Delicate teas**: Shorter steeps
- **Robust teas**: Longer steeps acceptable

**Factors Affecting Time:**
- Leaf size and processing
- Personal taste preference
- Brewing method (Western vs. Gongfu)
- Water temperature used

### 4. Tea-to-Water Ratio
Determines strength and extraction:

**Western Style:**
- **Light teas**: 1 tsp per cup (2-3g per 250ml)
- **Medium teas**: 1.5 tsp per cup (3-4g per 250ml)
- **Strong teas**: 2 tsp per cup (4-5g per 250ml)

**Gongfu Style:**
- **Ratio**: 1g per 15-20ml water
- **Higher concentration**: Shorter steeping times
- **Multiple infusions**: 6-12+ rounds possible

### 5. Brewing Vessel
Affects heat retention and flavor:

**Teapot Materials:**
- **Porcelain**: Neutral, doesn't affect flavor
- **Glass**: Visual brewing, temperature control
- **Clay**: Seasons over time, enhances certain teas
- **Cast iron**: Excellent heat retention

**Size Considerations:**
- **Personal brewing**: 150-300ml capacity
- **Multiple servings**: 400-600ml capacity
- **Gongfu style**: 100-200ml ideal

## Water Preparation

### Heating Methods:
**Electric Kettle with Temperature Control:**
- Most precise option
- Consistent results
- Energy efficient

**Stovetop Kettle:**
- Traditional method
- Watch for visual cues
- Remove before full boil for lower temperatures

**Visual Temperature Cues:**
- **70-80°C**: Small bubbles forming at bottom
- **80-85°C**: Bubbles rising but not breaking surface
- **85-95°C**: Larger bubbles, some breaking surface
- **100°C**: Full rolling boil

### Resting Water:
Allow boiled water to cool for precise temperatures:
- **5 minutes**: Drops to ~85°C
- **10 minutes**: Drops to ~75°C
- **15 minutes**: Drops to ~70°C

## Extraction Science

### Soluble Compounds:
Tea contains various compounds that extract at different rates:

**Quick Extraction (0-30 seconds):**
- Caffeine
- Some amino acids (L-theanine)
- Light aromatics

**Medium Extraction (30 seconds-2 minutes):**
- Most flavor compounds
- Catechins and polyphenols
- Color compounds

**Slow Extraction (2+ minutes):**
- Tannins (astringency)
- Bitter compounds
- Heavy aromatics

### Balancing Extraction:
- **Under-extracted**: Weak, sour, thin
- **Well-extracted**: Balanced, full flavor
- **Over-extracted**: Bitter, astringent, harsh

## Common Brewing Mistakes

### Water Issues:
- Using poor quality water
- Wrong temperature
- Re-boiling water multiple times
- Not heating enough water

### Timing Problems:
- Over-steeping delicate teas
- Under-steeping robust teas
- Not adjusting for personal preference
- Forgetting about steeping tea

### Measurement Errors:
- Using too little tea
- Inconsistent measurements
- Not adjusting for tea type
- Ignoring personal taste preferences

### Equipment Issues:
- Not preheating teapot
- Using inappropriate vessel size
- Poor quality strainers
- Not cleaning equipment regularly

## Improving Your Brewing

### Taste Development:
**Keep Notes:**
- Tea type and amount used
- Water temperature and steeping time
- Flavor observations
- Adjustments for next time

**Compare Methods:**
- Try same tea with different parameters
- Western vs. Gongfu brewing
- Different water sources
- Various temperatures

### Practice Techniques:
**Multiple Infusions:**
- Same tea, different steeping times
- Observe flavor evolution
- Find optimal extraction

**Parameter Adjustment:**
- Start with guidelines
- Adjust one variable at a time
- Find your personal preference
- Document successful combinations

## Advanced Considerations

### Seasonal Adjustments:
- **Summer**: Longer steeps, cooler water
- **Winter**: Standard parameters
- **Humidity effects**: Adjust timing
- **Tea age**: Older teas may need adjustments

### Personal Taste Factors:
- **Caffeine sensitivity**: Shorter steeps
- **Flavor preference**: Adjust strength
- **Time of day**: Different brewing for morning vs. evening
- **Food pairing**: Match intensity levels

## Conclusion

Mastering basic brewing principles provides the foundation for enjoying tea to its fullest potential. While guidelines provide starting points, personal experimentation and taste development lead to the most satisfying tea experiences.

Remember that brewing tea is a journey of discovery—each tea is unique, and finding the perfect brewing method for your palate is part of the joy of tea appreciation.
`,
        contentChinese: `
# 基本沖泡原理

優秀的茶藝既是藝術也是科學。理解基本原理有助於從任何茶葉中提取最佳風味，同時避免可能毀掉最優質茶葉的常見錯誤。

## 五個關鍵變量

### 1. 水質
優秀茶湯的基礎：

**理想水質特徵：**
- **礦物質含量**：總溶解固體150-300 ppm
- **pH值**：6.5-7.5（微酸性到中性）
- **氧氣含量**：新鮮、充分通氣的水
- **溫度**：適合茶類

**水源：**
- **泉水**：通常有理想的礦物質平衡
- **過濾自來水**：去除氯氣和過量礦物質
- **避免**：蒸餾水（缺乏礦物質）、高礦物質水

### 2. 水溫
正確萃取的關鍵：

**茶類指南：**
- **綠茶**：70-80°C
- **白茶**：75-85°C
- **烏龍茶**：85-95°C
- **紅茶**：95-100°C
- **普洱茶**：95-100°C

**溫度的重要性：**
- 太熱：萃取苦澀化合物
- 太涼：萃取不足風味化合物
- 精確控制：平衡風味元素

### 3. 浸泡時間
時間影響濃度和風味平衡：

**一般指南：**
- **第一泡**：30秒到5分鐘
- **後續沖泡**：逐漸增加
- **精緻茶類**：較短浸泡
- **濃郁茶類**：可接受較長浸泡

**影響時間的因素：**
- 葉片大小和加工
- 個人口味偏好
- 沖泡方法（西式vs功夫茶）
- 使用的水溫

### 4. 茶水比例
決定濃度和萃取：

**西式風格：**
- **清淡茶**：每杯1茶匙（250ml水2-3g）
- **中等茶**：每杯1.5茶匙（250ml水3-4g）
- **濃郁茶**：每杯2茶匙（250ml水4-5g）

**功夫茶風格：**
- **比例**：每15-20ml水1g茶
- **高濃度**：較短浸泡時間
- **多次沖泡**：可沖泡6-12+輪

### 5. 沖泡器具
影響保溫和風味：

**茶壺材質：**
- **瓷器**：中性，不影響風味
- **玻璃**：可視沖泡，溫度控制
- **陶土**：隨時間調養，增強某些茶
- **鑄鐵**：優秀保溫性

**大小考量：**
- **個人沖泡**：150-300ml容量
- **多人份**：400-600ml容量
- **功夫茶風格**：100-200ml理想

## 水的準備

### 加熱方法：
**帶溫控的電熱水壺：**
- 最精確選項
- 一致結果
- 節能高效

**爐頂水壺：**
- 傳統方法
- 觀察視覺線索
- 較低溫度時在完全沸騰前移除

**視覺溫度線索：**
- **70-80°C**：底部形成小氣泡
- **80-85°C**：氣泡上升但未破表面
- **85-95°C**：較大氣泡，部分破表面
- **100°C**：完全沸騰

### 水的靜置：
讓沸水冷卻至精確溫度：
- **5分鐘**：降至~85°C
- **10分鐘**：降至~75°C
- **15分鐘**：降至~70°C

## 萃取科學

### 可溶化合物：
茶含有以不同速率萃取的各種化合物：

**快速萃取（0-30秒）：**
- 咖啡因
- 部分氨基酸（茶氨酸）
- 輕香氣

**中等萃取（30秒-2分鐘）：**
- 大部分風味化合物
- 兒茶素和多酚
- 顏色化合物

**慢速萃取（2+分鐘）：**
- 單寧（澀味）
- 苦味化合物
- 重香氣

### 平衡萃取：
- **萃取不足**：淡、酸、薄
- **萃取良好**：平衡、飽滿風味
- **過度萃取**：苦、澀、粗糙

## 常見沖泡錯誤

### 水質問題：
- 使用劣質水
- 錯誤溫度
- 多次重新煮沸水
- 加熱水量不足

### 時間問題：
- 精緻茶過度浸泡
- 濃郁茶浸泡不足
- 不根據個人偏好調整
- 忘記正在泡茶

### 測量錯誤：
- 茶量太少
- 測量不一致
- 不根據茶類調整
- 忽視個人口味偏好

### 設備問題：
- 不預熱茶壺
- 使用不當容量
- 劣質濾器
- 不定期清潔設備

## 改善您的沖泡

### 味覺發展：
**記錄筆記：**
- 茶類和用量
- 水溫和浸泡時間
- 風味觀察
- 下次調整

**比較方法：**
- 用不同參數試同一茶
- 西式vs功夫茶沖泡
- 不同水源
- 各種溫度

### 練習技巧：
**多次沖泡：**
- 同一茶，不同浸泡時間
- 觀察風味演變
- 找到最佳萃取

**參數調整：**
- 從指南開始
- 一次調整一個變量
- 找到個人偏好
- 記錄成功組合

## 高級考量

### 季節調整：
- **夏季**：較長浸泡，較涼水
- **冬季**：標準參數
- **濕度影響**：調整時間
- **茶齡**：較老茶可能需要調整

### 個人口味因素：
- **咖啡因敏感性**：較短浸泡
- **風味偏好**：調整濃度
- **一天時間**：早晨vs晚上不同沖泡
- **食物搭配**：匹配濃度水平

## 結論

掌握基本沖泡原理為充分享受茶提供了基礎。雖然指南提供起點，但個人實驗和味覺發展導致最令人滿意的茶體驗。

記住泡茶是探索之旅——每種茶都是獨特的，為您的口味找到完美沖泡方法是茶藝欣賞樂趣的一部分。
`,
        image: 'https://images.unsplash.com/photo-1597318181409-cf64d0b5d8a2?ixlib=rb-4.0.3&w=800&q=80'
      }
    ]
  },
  {
    id: '3',
    title: 'Tea Glossary',
    titleChinese: '茶葉詞彙表',
    slug: 'tea-glossary',
    description: 'Learn essential tea terminology to deepen your understanding of tea culture and enhance your tea conversations.',
    descriptionChinese: '學習基本茶葉術語，加深對茶文化的理解，提升您的茶葉對話。',
    icon: '📖',
    content: [
      {
        id: '3-1',
        title: 'Essential Tea Terms',
        titleChinese: '基本茶葉術語',
        slug: 'essential-tea-terms',
        difficulty: 'beginner',
        readingTime: 8,
        content: `
# Essential Tea Terms

Understanding tea terminology helps you navigate the rich world of tea culture, communicate with tea professionals, and appreciate the nuances of different teas. This glossary covers fundamental terms every tea lover should know.

## Processing Terms

### Oxidation (氧化)
**Definition**: The chemical process where tea leaves react with oxygen, causing color and flavor changes.
**Also Known As**: Fermentation (though technically different)
**Levels**: 
- Minimal (green tea): 0-10%
- Partial (oolong): 20-80%  
- Full (black tea): 80-100%

### Withering (萎凋)
**Definition**: The first step in tea processing where fresh leaves lose moisture and become pliable.
**Purpose**: Reduce water content from ~75% to ~55-60%
**Methods**: Indoor controlled environment or outdoor sun withering

### Rolling (揉捻)
**Definition**: Process of breaking tea leaf cell walls to release juices and initiate oxidation.
**Methods**: Hand rolling (traditional) or machine rolling (modern)
**Result**: Shapes final tea leaves and affects brewing characteristics

### Firing (殺青)
**Definition**: Heat treatment to stop oxidation at the desired level.
**Methods**: Pan-firing, steaming, or baking
**Purpose**: Deactivate enzymes and lock in flavor profile

## Tasting Terms

### Astringency (澀味)
**Definition**: Dry, puckering sensation in the mouth caused by tannins.
**Good vs. Bad**: Light astringency adds structure; excessive astringency is unpleasant
**Common In**: Black teas, over-steeped teas

### Body (茶體)
**Definition**: The weight and fullness of tea in the mouth.
**Range**: Light, medium, full-bodied
**Factors**: Processing method, leaf grade, brewing strength

### Brightness (明亮度)
**Definition**: Lively, sparkling quality in tea's appearance and taste.
**Visual**: Clear, lustrous tea liquor
**Taste**: Fresh, clean, vibrant flavor

### Mouthfeel (口感)
**Definition**: Physical sensation of tea in the mouth beyond taste.
**Qualities**: Smooth, velvety, rough, coating, drying
**Importance**: Contributes significantly to overall tea experience

### Finish (餘韻)
**Definition**: Flavors and sensations that linger after swallowing.
**Types**: Short, medium, long finish
**Quality Indicator**: Complex, pleasant finish indicates high-quality tea

## Brewing Terms

### Gongfu Cha (功夫茶)
**Definition**: Traditional Chinese brewing method emphasizing skill and attention.
**Characteristics**: Small vessels, high tea-to-water ratio, multiple short infusions
**Philosophy**: Mindful, meditative approach to tea preparation

### Infusion (沖泡)
**Definition**: Single steeping of tea leaves in hot water.
**Usage**: "First infusion," "multiple infusions"
**Quality Teas**: Can often produce 6-12+ flavorful infusions

### Flash Rinse (洗茶)
**Definition**: Quick (3-5 second) rinse of tea leaves before brewing.
**Purpose**: Awaken leaves, remove dust, prepare for optimal extraction
**Common For**: Oolong, pu-erh, aged teas

### Wet Leaves (葉底)
**Definition**: Tea leaves after brewing, examined for quality assessment.
**Evaluation**: Color, uniformity, flexibility, aroma
**Quality Indicators**: Intact leaves, even color, fresh aroma

## Tea Grades and Qualities

### Whole Leaf (全葉)
**Definition**: Tea made from intact, unbroken leaves.
**Quality**: Generally highest grade, best flavor development
**Brewing**: Slower extraction, multiple infusions possible

### Broken Grade (碎茶)
**Definition**: Tea made from broken or cut leaves.
**Characteristics**: Faster extraction, stronger brew
**Common In**: Many black teas, teabags

### Fannings (茶末)
**Definition**: Small tea particles, smaller than broken grade.
**Use**: Often used in tea bags
**Brewing**: Quick, strong extraction

### Dust (茶粉)
**Definition**: Finest tea particles from processing.
**Characteristics**: Very quick extraction, strong color
**Use**: Commercial tea bags, instant brewing

## Flavor Categories

### Vegetal (植物味)
**Definition**: Green, grassy, or vegetable-like flavors.
**Common In**: Green teas, lightly processed teas
**Examples**: Fresh grass, spinach, edamame

### Floral (花香)
**Definition**: Flower-like aromas and flavors.
**Range**: Rose, jasmine, orchid, violet
**Common In**: White teas, light oolongs, scented teas

### Fruity (果香)
**Definition**: Fruit-like characteristics in tea.
**Types**: Stone fruits (peach, apricot), citrus, berries
**Common In**: Oolongs, some black teas

### Earthy (土壤味)
**Definition**: Soil, mineral, or earth-like flavors.
**Examples**: Wet soil, mushrooms, forest floor
**Common In**: Pu-erh teas, some dark oolongs

### Roasted/Toasted (烘焙味)
**Definition**: Flavors from roasting or firing processes.
**Range**: Light toast to deep roast
**Examples**: Nuts, caramel, coffee, charcoal

## Regional Terms

### Terroir (風土)
**Definition**: Environmental factors affecting tea flavor: soil, climate, altitude, etc.
**Importance**: Creates unique characteristics in teas from specific regions
**Examples**: High mountain minerality, coastal salinity

### Cultivar (品種)
**Definition**: Specific variety of tea plant bred for certain characteristics.
**Examples**: Jin Xuan (金萱), Tie Guan Yin (鐵觀音), Da Hong Pao (大紅袍)
**Impact**: Affects flavor profile, growing requirements, processing suitability

### Estate (茶園)
**Definition**: Single tea garden or plantation.
**Quality Indicator**: Estate teas often have distinctive, traceable characteristics
**Examples**: Specific farms in Darjeeling, Taiwan high mountain estates

## Cultural Terms

### Tea Master (茶師)
**Definition**: Highly skilled tea professional with deep knowledge and experience.
**Roles**: Processing, quality assessment, ceremony leadership
**Recognition**: Often achieved through years of study and practice

### Tea Ceremony (茶道)
**Definition**: Formal, ritualized tea preparation and service.
**Types**: Japanese (Chado), Chinese (Gongfu), Korean (Dado)
**Purpose**: Meditation, cultural preservation, aesthetic appreciation

### Tea House (茶館)
**Definition**: Establishment dedicated to tea service and culture.
**Traditional Role**: Social gathering place, cultural center
**Modern**: Ranges from casual cafes to formal tea rooms

## Quality Descriptors

### Premium (優質)
**Definition**: Highest grade tea with exceptional quality characteristics.
**Indicators**: Whole leaves, complex flavor, clean processing
**Price**: Commands higher prices due to quality and limited availability

### Seasonal (季節性)
**Definition**: Tea quality varying by harvest season.
**Spring**: Generally considered highest quality
**Autumn**: Second harvest, different character
**Summer**: Usually lower quality, stronger flavor

### Aged (陳年)
**Definition**: Tea stored over time to develop flavor complexity.
**Types**: Aged pu-erh, aged white tea, vintage oolongs
**Changes**: Mellowing of harsh notes, development of new flavors

## Modern Terms

### Single Origin (單一產地)
**Definition**: Tea from one specific location or estate.
**Benefits**: Traceable quality, distinctive terroir expression
**Contrast**: Blends combining teas from multiple sources

### Artisanal (工藝)
**Definition**: Small-batch, handcrafted tea with attention to traditional methods.
**Characteristics**: Limited quantities, unique processing, personal touch
**Value**: Often higher quality and price than mass-produced teas

### Organic (有機)
**Definition**: Tea grown without synthetic pesticides, fertilizers, or chemicals.
**Certification**: Third-party verified organic standards
**Benefits**: Environmental sustainability, pure flavor expression

## Conclusion

This glossary provides foundation terminology for tea appreciation and discussion. As you explore different teas and deepen your knowledge, you'll encounter many more specialized terms that add richness to the language of tea.

Understanding these terms enhances your ability to:
- Communicate with tea professionals
- Describe your taste experiences
- Appreciate tea quality and processing
- Navigate tea menus and descriptions
- Deepen your tea culture understanding

Continue building your tea vocabulary as you taste and learn—each new term opens doors to greater tea appreciation and enjoyment.
`,
        contentChinese: `
# 基本茶葉術語

理解茶葉術語有助於您在豐富的茶文化世界中導航，與茶葉專業人士交流，並欣賞不同茶葉的細微差別。這個詞彙表涵蓋了每個茶愛好者都應該知道的基本術語。

## 加工術語

### 氧化
**定義**：茶葉與氧氣反應的化學過程，引起顏色和風味變化。
**也稱為**：發酵（雖然技術上不同）
**程度**：
- 最少（綠茶）：0-10%
- 部分（烏龍）：20-80%
- 完全（紅茶）：80-100%

### 萎凋
**定義**：茶葉加工的第一步，新鮮葉片失去水分變得柔軟。
**目的**：將水分含量從~75%減少到~55-60%
**方法**：室內控制環境或戶外日曬萎凋

### 揉捻
**定義**：破壞茶葉細胞壁以釋放汁液並啟動氧化的過程。
**方法**：手工揉捻（傳統）或機械揉捻（現代）
**結果**：塑造最終茶葉形狀並影響沖泡特性

### 殺青
**定義**：熱處理以在所需程度停止氧化。
**方法**：炒青、蒸青或烘青
**目的**：使酶失活並鎖定風味特點

## 品嚐術語

### 澀味
**定義**：由單寧引起的口中乾燥、收縮感覺。
**好壞區別**：輕微澀味增加結構；過度澀味令人不快
**常見於**：紅茶、過度浸泡的茶

### 茶體
**定義**：茶在口中的重量和飽滿度。
**範圍**：輕盈、中等、飽滿
**因素**：加工方法、葉片等級、沖泡濃度

### 明亮度
**定義**：茶的外觀和味道中生動、閃亮的品質。
**視覺**：清澈、有光澤的茶湯
**味覺**：新鮮、潔淨、充滿活力的風味

### 口感
**定義**：茶在口中除味道外的物理感覺。
**品質**：順滑、絲滑、粗糙、包覆感、乾燥
**重要性**：對整體茶體驗貢獻重大

### 餘韻
**定義**：吞嚥後持續的風味和感覺。
**類型**：短、中、長餘韻
**品質指標**：複雜、愉快的餘韻表示高品質茶

## 沖泡術語

### 功夫茶
**定義**：強調技巧和專注的中國傳統沖泡方法。
**特徵**：小器皿、高茶水比例、多次短時間沖泡
**哲學**：專注、冥想的茶準備方法

### 沖泡
**定義**：茶葉在熱水中的單次浸泡。
**用法**：「第一泡」、「多次沖泡」
**優質茶**：通常可產生6-12+次有風味的沖泡

### 洗茶
**定義**：沖泡前對茶葉的快速（3-5秒）沖洗。
**目的**：喚醒葉片、去除灰塵、為最佳萃取做準備
**常用於**：烏龍、普洱、陳年茶

### 葉底
**定義**：沖泡後的茶葉，用於品質評估檢查。
**評估**：顏色、均勻性、柔韌性、香氣
**品質指標**：完整葉片、均勻顏色、新鮮香氣

## 茶葉等級和品質

### 全葉
**定義**：由完整、未破碎葉片製成的茶。
**品質**：通常最高等級，最佳風味發展
**沖泡**：較慢萃取，可多次沖泡

### 碎茶
**定義**：由破碎或切碎葉片製成的茶。
**特徵**：較快萃取，更濃沖泡
**常見於**：許多紅茶、茶包

### 茶末
**定義**：小茶顆粒，比碎茶更小。
**用途**：通常用於茶包
**沖泡**：快速、濃烈萃取

### 茶粉
**定義**：加工中最細的茶顆粒。
**特徵**：非常快速萃取，濃烈顏色
**用途**：商業茶包、即時沖泡

## 風味類別

### 植物味
**定義**：綠色、草本或蔬菜般的風味。
**常見於**：綠茶、輕微加工茶
**例子**：新鮮草、菠菜、毛豆

### 花香
**定義**：花朵般的香氣和風味。
**範圍**：玫瑰、茉莉、蘭花、紫羅蘭
**常見於**：白茶、輕烏龍、香片茶

### 果香
**定義**：茶中果實般的特徵。
**類型**：核果（桃、杏）、柑橘、漿果
**常見於**：烏龍茶、某些紅茶

### 土壤味
**定義**：土壤、礦物或大地般的風味。
**例子**：濕土、蘑菇、森林地面
**常見於**：普洱茶、某些深色烏龍

### 烘焙味
**定義**：來自烘焙或炒青過程的風味。
**範圍**：輕烤到深烤
**例子**：堅果、焦糖、咖啡、炭燒

## 地域術語

### 風土
**定義**：影響茶風味的環境因素：土壤、氣候、海拔等。
**重要性**：為特定地區的茶創造獨特特徵
**例子**：高山礦物質味、海岸鹹味

### 品種
**定義**：為特定特徵培育的特定茶樹品種。
**例子**：金萱、鐵觀音、大紅袍
**影響**：影響風味特點、生長要求、加工適性

### 茶園
**定義**：單一茶園或種植園。
**品質指標**：茶園茶通常有獨特、可追溯的特徵
**例子**：大吉嶺特定農場、台灣高山茶園

## 文化術語

### 茶師
**定義**：具有深厚知識和經驗的高技能茶專業人士。
**角色**：加工、品質評估、儀式領導
**認可**：通常通過多年學習和實踐獲得

### 茶道
**定義**：正式、儀式化的茶準備和服務。
**類型**：日式（茶道）、中式（功夫）、韓式（茶道）
**目的**：冥想、文化保護、美學欣賞

### 茶館
**定義**：專門從事茶服務和文化的場所。
**傳統角色**：社交聚會場所、文化中心
**現代**：從休閒咖啡館到正式茶室

## 品質描述詞

### 優質
**定義**：具有卓越品質特徵的最高等級茶。
**指標**：整葉、複雜風味、潔淨加工
**價格**：由於品質和有限供應而價格較高

### 季節性
**定義**：茶品質因收穫季節而變化。
**春季**：通常被認為是最高品質
**秋季**：第二次收穫，不同特色
**夏季**：通常品質較低，風味更濃

### 陳年
**定義**：隨時間儲存以發展風味複雜性的茶。
**類型**：陳年普洱、陳年白茶、年份烏龍
**變化**：苦澀味醇化、新風味發展

## 現代術語

### 單一產地
**定義**：來自一個特定地點或茶園的茶。
**好處**：可追溯品質、獨特風土表達
**對比**：結合多個來源茶的拼配

### 工藝
**定義**：小批量、手工製作的茶，注重傳統方法。
**特徵**：有限數量、獨特加工、個人風格
**價值**：通常比大量生產茶品質和價格更高

### 有機
**定義**：不使用合成農藥、肥料或化學品種植的茶。
**認證**：第三方驗證有機標準
**好處**：環境可持續性、純淨風味表達

## 結論

這個詞彙表為茶鑑賞和討論提供了基礎術語。當您探索不同茶類並加深知識時，您會遇到更多專業術語，為茶語言增添豐富性。

理解這些術語增強您的能力：
- 與茶專業人士交流
- 描述您的味覺體驗
- 欣賞茶品質和加工
- 瀏覽茶單和描述
- 加深茶文化理解

繼續在品茶和學習中建立您的茶詞彙——每個新術語都為更深的茶鑑賞和享受打開大門。
`,
        image: 'https://images.unsplash.com/photo-1558160074-4d7d8bdf4256?ixlib=rb-4.0.3&w=800&q=80'
      }
    ]
  },
  {
    id: '4',
    title: 'Tea Ceremony',
    titleChinese: '茶道',
    slug: 'tea-ceremony',
    description: 'Discover the meditative art of traditional Chinese tea ceremony and its philosophical foundations.',
    descriptionChinese: '探索傳統中國茶道的冥想藝術及其哲學基礎。',
    icon: '🫖',
    content: [
      {
        id: '4-1',
        title: 'Philosophy of Tea Ceremony',
        titleChinese: '茶道哲學',
        slug: 'tea-ceremony-philosophy',
        difficulty: 'intermediate',
        readingTime: 10,
        content: `
# Philosophy of Tea Ceremony

The Chinese tea ceremony, known as Gongfu Cha (功夫茶), is far more than a method of brewing tea. It represents a profound philosophical practice that cultivates mindfulness, harmony, and appreciation for life's simple pleasures.

## Historical Origins

### Ancient Beginnings
Tea ceremony evolved from practical tea preparation into a spiritual practice:

**Tang Dynasty (618-907 AD):**
- Lu Yu's "The Classic of Tea" (茶經) established tea culture foundations
- Tea drinking became refined social activity
- Integration with Buddhist and Taoist practices

**Song Dynasty (960-1279 AD):**
- Development of elaborate tea competitions
- Emphasis on aesthetic presentation
- Connection to literati culture and arts

**Ming Dynasty (1368-1644 AD):**
- Simplification toward more natural approach
- Focus on tea quality over elaborate preparation
- Establishment of many modern tea ceremony principles

### Cultural Integration
Tea ceremony absorbed influences from:
- **Buddhism**: Mindfulness and presence
- **Taoism**: Natural harmony and simplicity  
- **Confucianism**: Social harmony and respect
- **Zen Philosophy**: "One time, one meeting" (一期一會)

## Core Philosophical Principles

### 1. Mindfulness (正念)
**Presence in the Moment:**
- Complete attention to current actions
- Awareness of sensory experiences
- Release from past and future concerns
- Cultivation of inner stillness

**Practice Elements:**
- Focus on water sounds while heating
- Attention to steam patterns and aromas
- Mindful movement during preparation
- Present-moment awareness while tasting

### 2. Harmony (和)
**Internal Harmony:**
- Balance between action and stillness
- Alignment of mind, body, and spirit
- Peace with oneself and circumstances
- Integration of opposing forces (yin/yang)

**External Harmony:**
- Respect for guests and tea
- Harmony with natural environment
- Balanced arrangement of tea implements
- Synchronized movements in preparation

### 3. Respect (尊重)
**Respect for Tea:**
- Honoring the farmers who grew it
- Appreciation for processing craftsmanship
- Gratitude for tea's journey to cup
- Recognition of tea's cultural heritage

**Respect for Participants:**
- Equal treatment regardless of status
- Attention to guests' comfort and preferences
- Humble attitude toward serving
- Creating inclusive, welcoming atmosphere

### 4. Purity (純淨)
**Physical Purity:**
- Clean vessels and preparation area
- Fresh, quality water and tea
- Immaculate personal presentation
- Orderly arrangement of implements

**Mental Purity:**
- Clear intention and focused mind
- Release of worldly concerns
- Sincere appreciation and gratitude
- Authentic, unforced interactions

## The Way of Tea (茶道)

### Beyond Technique
While proper technique is important, tea ceremony transcends mechanical preparation:

**Spiritual Dimension:**
- Meditation through repetitive, mindful actions
- Connection with natural rhythms and cycles
- Cultivation of patience and acceptance
- Development of aesthetic sensitivity

**Social Dimension:**
- Breaking down social barriers
- Creating space for authentic connection
- Practicing hospitality and service
- Building community through shared experience

### The Host's Journey
**Preparation Phase:**
- Mental and physical preparation
- Setting intention for gathering
- Arranging space with care and attention
- Selecting appropriate tea for occasion

**Service Phase:**
- Embodying qualities of humility and grace
- Adapting to guests' needs and energy
- Maintaining focused awareness throughout
- Sharing knowledge without showing off

**Reflection Phase:**
- Appreciation for shared experience
- Recognition of lessons learned
- Gratitude for participants and tea
- Integration of insights into daily life

## Tea and Meditation

### Moving Meditation
Tea ceremony serves as form of moving meditation:

**Repetitive Actions:**
- Warming vessels becomes ritual purification
- Pouring water develops rhythmic breathing
- Multiple infusions create meditative cycles
- Cleaning implements becomes mindful completion

**Sensory Awareness:**
- Visual appreciation of tea color changes
- Auditory focus on water and pouring sounds
- Aromatic attention to evolving scents
- Tactile awareness of temperature and texture
- Taste meditation through slow, mindful sipping

### Breath and Movement
**Synchronized Breathing:**
- Coordinate movements with natural breath rhythm
- Use breath awareness to maintain presence
- Allow breathing to naturally slow and deepen
- Connect breath with tea's energy

**Graceful Movement:**
- Economy of motion without rushing
- Smooth, flowing transitions between actions
- Natural posture that embodies calm alertness
- Movements that express inner state

## Tea Space Philosophy

### Creating Sacred Space
**Physical Environment:**
- Simple, uncluttered arrangement
- Natural materials and earth tones
- Adequate lighting for tea appreciation
- Comfortable seating that encourages presence

**Energetic Qualities:**
- Peaceful, contemplative atmosphere
- Removal of distracting elements
- Integration with natural environment when possible
- Space that invites introspection and conversation

### Seasonal Awareness
**Spring Teas:**
- Fresh energy and new beginnings
- Light, delicate preparations
- Focus on renewal and growth
- Green colors and floral arrangements

**Summer Teas:**
- Cooling, refreshing character
- Longer steeps for deeper satisfaction
- Connection with abundance and fullness
- Emphasis on sharing and community

**Autumn Teas:**
- Rich, complex flavors
- Contemplation of change and impermanence
- Gratitude for harvest and preparation
- Warm colors and cozy atmosphere

**Winter Teas:**
- Warming, nourishing qualities
- Longer, more intimate gatherings
- Reflection and inner cultivation
- Minimal decoration, maximum warmth

## Modern Applications

### Daily Practice
**Morning Tea Ritual:**
- Begin day with intentional mindfulness
- Set positive tone for daily activities
- Appreciate moment of solitude or connection
- Cultivate gratitude for new day

**Work Break Ceremony:**
- Create pause in busy schedule
- Reset mental and emotional state
- Practice presence amid activity
- Share moment of calm with colleagues

**Evening Reflection:**
- Process day's experiences
- Release stress and tension
- Appreciate day's gifts and lessons
- Transition peacefully toward rest

### Personal Development
**Character Cultivation:**
- Patience through slow, careful preparation
- Humility through service to others
- Discipline through consistent practice
- Compassion through shared experience

**Aesthetic Appreciation:**
- Sensitivity to beauty in simple things
- Attention to subtle details and changes
- Development of refined taste and judgment
- Integration of beauty into daily life

## Teaching and Learning

### The Student's Path
**Beginning Practice:**
- Focus on basic techniques and principles
- Develop muscle memory through repetition
- Cultivate beginner's mind and openness
- Learn through observation and practice

**Deepening Understanding:**
- Explore philosophical foundations
- Develop personal style within tradition
- Begin teaching others when ready
- Integrate ceremony into broader life practice

### Transmission of Tradition
**Oral Teaching:**
- Stories and parables that convey wisdom
- Personal example more than explanation
- Adaptation to student's level and needs
- Emphasis on experience over theory

**Silent Communication:**
- Learning through careful observation
- Understanding conveyed through presence
- Respect for mystery and gradual revelation
- Trust in natural learning process

## Contemporary Relevance

### Modern Stresses
Tea ceremony offers antidote to contemporary challenges:

**Technology Overwhelm:**
- Digital detox through analog activity
- Slowing down in accelerated world
- Human connection in virtual age
- Grounding in physical, sensory experience

**Urban Disconnection:**
- Connection with natural rhythms
- Appreciation for simple pleasures
- Community building in fragmented society
- Cultivation of inner peace amid chaos

### Universal Principles
**Cross-Cultural Application:**
- Mindfulness practices adaptable to any tradition
- Hospitality principles universal in appeal
- Aesthetic appreciation transcends cultural boundaries
- Human need for ritual and meaning

**Personal Integration:**
- Adapting ceremony to individual circumstances
- Finding authentic expression within tradition
- Building sustainable daily practice
- Sharing benefits with family and community

## Conclusion

Tea ceremony philosophy offers profound teachings about presence, harmony, respect, and purity. Through regular practice, these principles naturally integrate into daily life, transforming not only how we prepare and drink tea, but how we approach all activities with greater mindfulness and appreciation.

The Way of Tea is ultimately about awakening to the extraordinary within the ordinary—finding depth, meaning, and connection through the simple act of sharing tea with others or enjoying a quiet moment alone with a cup of beautifully prepared tea.

Whether practiced in traditional formal style or adapted to modern circumstances, tea ceremony philosophy provides timeless wisdom for living with greater awareness, compassion, and joy.
`,
        contentChinese: `
# 茶道哲學

中國茶道，稱為功夫茶，遠不僅僅是一種泡茶方法。它代表一種深刻的哲學實踐，培養正念、和諧，以及對生活簡單樂趣的欣賞。

## 歷史起源

### 古代起源
茶道從實用的茶準備演變為精神實踐：

**唐朝（618-907年）：**
- 陸羽的《茶經》建立了茶文化基礎
- 飲茶成為精緻的社交活動
- 與佛教和道教實踐結合

**宋朝（960-1279年）：**
- 發展精緻的茶藝競賽
- 強調美學呈現
- 與文人文化和藝術的連接

**明朝（1368-1644年）：**
- 簡化趨向更自然的方法
- 專注於茶品質而非繁複準備
- 建立許多現代茶道原則

### 文化融合
茶道吸收了來自以下的影響：
- **佛教**：正念和當下
- **道教**：自然和諧與簡樸
- **儒教**：社會和諧與尊重
- **禪宗哲學**：「一期一會」

## 核心哲學原則

### 1. 正念
**當下的存在：**
- 完全專注於當前行動
- 對感官體驗的覺察
- 從過去和未來的關注中釋放
- 培養內在寧靜

**實踐要素：**
- 專注於加熱時的水聲
- 注意蒸汽模式和香氣
- 準備時的正念動作
- 品嚐時的當下覺察

### 2. 和諧
**內在和諧：**
- 行動與靜止之間的平衡
- 心、身、靈的一致
- 與自己和環境的和平
- 對立力量的整合（陰陽）

**外在和諧：**
- 對客人和茶的尊重
- 與自然環境的和諧
- 茶具的平衡安排
- 準備時的同步動作

### 3. 尊重
**對茶的尊重：**
- 尊敬種植茶的農民
- 欣賞加工工藝
- 感激茶到杯中的旅程
- 認識茶的文化遺產

**對參與者的尊重：**
- 不論地位一視同仁
- 關注客人的舒適和偏好
- 謙遜的服務態度
- 創造包容、歡迎的氛圍

### 4. 純淨
**物理純淨：**
- 清潔的器皿和準備區域
- 新鮮、優質的水和茶
- 無瑕的個人呈現
- 器具的整齊安排

**心理純淨：**
- 清晰的意圖和專注的心
- 釋放世俗關注
- 真誠的欣賞和感激
- 真實、不勉強的互動

## 茶道

### 超越技術
雖然正確技術很重要，茶道超越了機械準備：

**精神層面：**
- 通過重複、正念行動的冥想
- 與自然節奏和週期的連接
- 培養耐心和接受
- 發展美學敏感性

**社會層面：**
- 打破社會障礙
- 創造真實連接的空間
- 練習款待和服務
- 通過共享體驗建立社區

### 主人的旅程
**準備階段：**
- 心理和身體準備
- 為聚會設定意圖
- 用心和專注安排空間
- 為場合選擇合適的茶

**服務階段：**
- 體現謙遜和優雅品質
- 適應客人的需求和能量
- 始終保持專注覺察
- 分享知識而不炫耀

**反思階段：**
- 欣賞共享體驗
- 認識學到的教訓
- 感激參與者和茶
- 將洞察整合到日常生活

## 茶與冥想

### 動態冥想
茶道作為動態冥想的形式：

**重複動作：**
- 溫器成為儀式淨化
- 倒水發展節奏呼吸
- 多次沖泡創造冥想週期
- 清洗器具成為正念完成

**感官覺察：**
- 視覺欣賞茶色變化
- 聽覺專注於水和倒茶聲
- 嗅覺注意演變的香味
- 觸覺覺察溫度和質地
- 通過緩慢、正念啜飲的味覺冥想

### 呼吸與動作
**同步呼吸：**
- 協調動作與自然呼吸節奏
- 使用呼吸覺察保持當下
- 讓呼吸自然放慢和加深
- 將呼吸與茶的能量連接

**優雅動作：**
- 動作經濟而不匆忙
- 行動間平滑、流暢的轉換
- 體現平靜警覺的自然姿態
- 表達內在狀態的動作

## 茶空間哲學

### 創造神聖空間
**物理環境：**
- 簡單、整潔的安排
- 天然材料和大地色調
- 適當的茶欣賞照明
- 鼓勵存在的舒適座位

**能量品質：**
- 和平、沉思的氛圍
- 移除分散注意力的元素
- 可能時與自然環境結合
- 邀請內省和對話的空間

### 季節覺察
**春茶：**
- 新鮮能量和新開始
- 輕盈、精緻的準備
- 專注於更新和成長
- 綠色和花卉裝飾

**夏茶：**
- 清涼、清爽特性
- 更長浸泡以獲得深度滿足
- 與豐富和充實的連接
- 強調分享和社區

**秋茶：**
- 豐富、複雜風味
- 對變化和無常的沉思
- 對收穫和準備的感激
- 溫暖色彩和舒適氛圍

**冬茶：**
- 溫暖、滋養品質
- 更長、更親密的聚會
- 反思和內在培養
- 最少裝飾，最大溫暖

## 現代應用

### 日常實踐
**晨茶儀式：**
- 以有意的正念開始一天
- 為日常活動設定積極基調
- 欣賞獨處或連接的時刻
- 培養對新一天的感激

**工作休息儀式：**
- 在忙碌日程中創造暫停
- 重置心理和情緒狀態
- 在活動中練習當下
- 與同事分享平靜時刻

**晚間反思：**
- 處理一天的經歷
- 釋放壓力和緊張
- 欣賞一天的禮物和教訓
- 平和地過渡到休息

### 個人發展
**品格培養：**
- 通過緩慢、仔細準備培養耐心
- 通過為他人服務培養謙遜
- 通過持續練習培養紀律
- 通過共享體驗培養慈悲

**美學欣賞：**
- 對簡單事物美的敏感性
- 對細微細節和變化的注意
- 發展精緻的品味和判斷
- 將美融入日常生活

## 教學與學習

### 學生之路
**開始實踐：**
- 專注於基本技術和原則
- 通過重複發展肌肉記憶
- 培養初學者心態和開放性
- 通過觀察和實踐學習

**深化理解：**
- 探索哲學基礎
- 在傳統中發展個人風格
- 準備好時開始教導他人
- 將儀式融入更廣泛的生活實踐

### 傳統傳承
**口頭教學：**
- 傳達智慧的故事和寓言
- 個人榜樣勝過解釋
- 適應學生的水平和需求
- 強調體驗勝過理論

**無聲交流：**
- 通過仔細觀察學習
- 通過存在傳達理解
- 對神秘和漸進啟示的尊重
- 對自然學習過程的信任

## 當代相關性

### 現代壓力
茶道為當代挑戰提供解藥：

**技術過載：**
- 通過模擬活動進行數字排毒
- 在加速世界中放慢速度
- 在虛擬時代的人際連接
- 在物理、感官體驗中紮根

**城市疏離：**
- 與自然節奏的連接
- 對簡單樂趣的欣賞
- 在分裂社會中建設社區
- 在混亂中培養內在和平

### 普遍原則
**跨文化應用：**
- 正念實踐適應任何傳統
- 款待原則具有普遍吸引力
- 美學欣賞超越文化界限
- 人類對儀式和意義的需求

**個人整合：**
- 適應儀式到個人情況
- 在傳統中找到真實表達
- 建立可持續的日常實踐
- 與家庭和社區分享益處

## 結論

茶道哲學提供關於存在、和諧、尊重和純淨的深刻教導。通過定期實踐，這些原則自然地融入日常生活，不僅改變我們如何準備和飲茶，還改變我們如何以更大的正念和欣賞接近所有活動。

茶道最終是關於在平凡中覺醒到非凡——通過與他人分享茶或獨自享受一杯精心準備的茶的簡單行為找到深度、意義和連接。

無論是以傳統正式風格實踐還是適應現代環境，茶道哲學為以更大的覺察、慈悲和喜悅生活提供永恆智慧。
`,
        image: 'https://images.unsplash.com/photo-1567922045116-2a00fae2ed03?ixlib=rb-4.0.3&w=800&q=80'
      }
    ]
  }
];

export const brewingGuides: BrewingGuide[] = [
  {
    id: 'green-tea',
    teaType: 'Green Tea',
    teaTypeChinese: '綠茶',
    waterTemp: '70-80°C (158-176°F)',
    steepTime: '1-3 minutes',
    teaAmount: '1 tsp per cup (2-3g per 250ml)',
    instructions: 'Use cooler water to preserve delicate flavors. Start with shorter steeping times and adjust to taste. Green tea can be re-steeped 2-3 times.',
    instructionsChinese: '使用較涼的水以保護精緻風味。從較短的浸泡時間開始，根據口味調整。綠茶可以重複沖泡2-3次。',
    tips: [
      'Let boiling water cool for 5-10 minutes before brewing',
      'Use a glass or porcelain teapot to avoid affecting flavor',
      'Remove tea leaves after steeping to prevent bitterness',
      'Drink within 30 minutes for best flavor'
    ],
    tipsChinese: [
      '讓沸水冷卻5-10分鐘後再沖泡',
      '使用玻璃或瓷茶壺以免影響風味',
      '浸泡後取出茶葉以防苦澀',
      '30分鐘內飲用以獲得最佳風味'
    ],
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?ixlib=rb-4.0.3&w=600&q=80'
  },
  {
    id: 'oolong-tea',
    teaType: 'Oolong Tea',
    teaTypeChinese: '烏龍茶',
    waterTemp: '85-95°C (185-203°F)',
    steepTime: '1-5 minutes',
    teaAmount: '1-2 tsp per cup (3-6g per 250ml)',
    instructions: 'Oolong benefits from multiple short infusions. Start with 1 minute and increase time for subsequent brews. Can be steeped 6-8 times.',
    instructionsChinese: '烏龍茶適合多次短時間沖泡。從1分鐘開始，後續沖泡增加時間。可以沖泡6-8次。',
    tips: [
      'Rinse tea leaves with hot water before first infusion',
      'Use gongfu brewing method for best results',
      'Each infusion reveals different flavor notes',
      'High-quality oolongs improve with multiple steepings'
    ],
    tipsChinese: [
      '第一次沖泡前用熱水沖洗茶葉',
      '使用功夫茶法獲得最佳效果',
      '每次沖泡展現不同風味層次',
      '高品質烏龍茶在多次沖泡中提升'
    ],
    image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?ixlib=rb-4.0.3&w=600&q=80'
  },
  {
    id: 'black-tea',
    teaType: 'Black Tea',
    teaTypeChinese: '紅茶',
    waterTemp: '95-100°C (203-212°F)',
    steepTime: '3-5 minutes',
    teaAmount: '1 tsp per cup (2-3g per 250ml)',
    instructions: 'Use fully boiling water for robust extraction. Black tea can handle longer steeping times. Perfect base for milk tea or iced tea.',
    instructionsChinese: '使用完全沸騰的水進行強力萃取。紅茶可以承受較長的浸泡時間。是奶茶或冰茶的完美基底。',
    tips: [
      'Preheat teapot with hot water before brewing',
      'Cover teapot during steeping to retain heat',
      'Add milk or sugar after brewing if desired',
      'Can be re-steeped 2-3 times with increased timing'
    ],
    tipsChinese: [
      '沖泡前用熱水預熱茶壺',
      '浸泡時蓋上茶壺保溫',
      '如需要可在沖泡後加入牛奶或糖',
      '可以重複沖泡2-3次，增加時間'
    ],
    image: 'https://images.unsplash.com/photo-1597481499666-3f9c3a6e9bf8?ixlib=rb-4.0.3&w=600&q=80'
  },
  {
    id: 'white-tea',
    teaType: 'White Tea',
    teaTypeChinese: '白茶',
    waterTemp: '75-85°C (167-185°F)',
    steepTime: '4-6 minutes',
    teaAmount: '1-2 tsp per cup (2-4g per 250ml)',
    instructions: 'White tea requires gentler treatment. Use slightly cooler water and longer steeping times to extract delicate flavors without bitterness.',
    instructionsChinese: '白茶需要更溫和的處理。使用稍涼的水和較長的浸泡時間來萃取精緻風味而不產生苦澀。',
    tips: [
      'Use pure, soft water for best results',
      'Allow longer steeping time than other teas',
      'White tea improves with age',
      'Can be steeped multiple times with extended timing'
    ],
    tipsChinese: [
      '使用純淨軟水獲得最佳效果',
      '比其他茶允許更長的浸泡時間',
      '白茶隨年份改善',
      '可以多次沖泡並延長時間'
    ],
    image: 'https://images.unsplash.com/photo-1559496417-e7f25cb247f3?ixlib=rb-4.0.3&w=600&q=80'
  },
  {
    id: 'puer-tea',
    teaType: 'Pu-erh Tea',
    teaTypeChinese: '普洱茶',
    waterTemp: '95-100°C (203-212°F)',
    steepTime: '30 seconds - 2 minutes',
    teaAmount: '1-2 tsp per cup (5-8g per 250ml)',
    instructions: 'Rinse pu-erh before brewing to remove dust and awaken leaves. Use short infusions for multiple rounds. Aged pu-erh develops complex earthy flavors.',
    instructionsChinese: '沖泡前沖洗普洱以去除灰塵並喚醒茶葉。使用短時間沖泡進行多輪。陳年普洱發展出複雜的土壤風味。',
    tips: [
      'Always rinse tea leaves once or twice before brewing',
      'Start with very short steeping times (20-30 seconds)',
      'Gradually increase steeping time for each infusion',
      'Can be steeped 10-15 times or more'
    ],
    tipsChinese: [
      '沖泡前總是沖洗茶葉一到兩次',
      '從非常短的浸泡時間開始（20-30秒）',
      '每次沖泡逐漸增加浸泡時間',
      '可以沖泡10-15次或更多'
    ],
    image: 'https://images.unsplash.com/photo-1587451152235-05466c2fc532?ixlib=rb-4.0.3&w=600&q=80'
  }
];

export const glossaryTerms: TeaGlossaryTerm[] = [
  {
    id: '1',
    term: 'Astringency',
    termChinese: '澀味',
    pronunciation: 'àsè wèi',
    definition: 'A dry, puckering sensation in the mouth caused by tannins in tea. Light astringency adds structure to tea, while excessive astringency is unpleasant.',
    definitionChinese: '由茶中的單寧引起的口中乾燥、收縮感覺。輕微的澀味為茶增加結構，而過度澀味則令人不快。',
    category: 'tasting'
  },
  {
    id: '2',
    term: 'Gongfu Cha',
    termChinese: '功夫茶',
    pronunciation: 'gōngfu chá',
    definition: 'Traditional Chinese tea brewing method emphasizing skill, patience, and multiple short infusions to extract the full potential of tea leaves.',
    definitionChinese: '傳統中國茶沖泡方法，強調技巧、耐心和多次短時間沖泡，以提取茶葉的全部潛力。',
    category: 'culture'
  },
  {
    id: '3',
    term: 'Oxidation',
    termChinese: '氧化',
    pronunciation: 'yǎnghuà',
    definition: 'The chemical process where tea leaves react with oxygen, determining the final type and character of the tea. Also called fermentation in tea contexts.',
    definitionChinese: '茶葉與氧氣反應的化學過程，決定茶的最終類型和特性。在茶的語境中也稱為發酵。',
    category: 'processing'
  },
  {
    id: '4',
    term: 'Terroir',
    termChinese: '風土',
    pronunciation: 'fēngtǔ',
    definition: 'The complete natural environment in which tea is grown, including soil, climate, altitude, and local conditions that influence the tea\'s character.',
    definitionChinese: '茶葉生長的完整自然環境，包括土壤、氣候、海拔和影響茶特性的當地條件。',
    category: 'varieties'
  },
  {
    id: '5',
    term: 'Yixing',
    termChinese: '宜興',
    pronunciation: 'yíxīng',
    definition: 'Famous purple clay from Yixing, China, used to make unglazed teapots that absorb tea flavors over time and enhance the brewing experience.',
    definitionChinese: '來自中國宜興的著名紫砂泥，用於製作無釉茶壺，隨時間吸收茶味並增強沖泡體驗。',
    category: 'equipment'
  }
];

export const getLearningSectionBySlug = (slug: string): LearningSection | undefined => {
  return learningSections.find(section => section.slug === slug);
};

export const getLearningContentBySlug = (sectionSlug: string, contentSlug: string): LearningContent | undefined => {
  const section = getLearningSectionBySlug(sectionSlug);
  if (!section) return undefined;
  return section.content.find(content => content.slug === contentSlug);
};

export const getBrewingGuideById = (id: string): BrewingGuide | undefined => {
  return brewingGuides.find(guide => guide.id === id);
};

export const getGlossaryTermsByCategory = (category: TeaGlossaryTerm['category']): TeaGlossaryTerm[] => {
  return glossaryTerms.filter(term => term.category === category);
};