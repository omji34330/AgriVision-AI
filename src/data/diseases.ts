import { DiseaseInfo } from '../types';

export const PLANT_DISEASES: DiseaseInfo[] = [
  {
    id: 'tomato_early_blight',
    name: 'Tomato Early Blight',
    crop: 'Tomato',
    scientificName: 'Alternaria solani',
    pathogenType: 'Fungal',
    pathogenName: 'Alternaria solani Sorauer',
    isHealthy: false,
    description: 'A prevalent fungal disease affecting tomato plants in warm, humid climates. It produces characteristic dark concentric rings on mature leaves, leading to premature defoliation and reduced fruit yield.',
    symptoms: [
      'Brown to black spots on older lower leaves with concentric rings ("bullseye" target pattern)',
      'Yellow chlorotic halos surrounding leaf lesions',
      'Stem cankers and dark sunken spots near the soil line (collar rot)',
      'Premature leaf drop and sunscald vulnerability on exposed fruit'
    ],
    favorableConditions: {
      temperature: '24°C - 29°C (75°F - 85°F)',
      humidity: 'Prolonged wet foliage (>90% relative humidity)',
      soilCondition: 'Splashing soil from rain or overhead irrigation',
      spreadFactor: 'Airborne conidia and rain-splashes from crop debris'
    },
    prevention: [
      'Practice 3- to 4-year crop rotation with non-solanaceous crops',
      'Apply organic straw or plastic mulch to prevent soil splashing onto foliage',
      'Stake and prune lower branches to improve air circulation',
      'Use drip irrigation instead of overhead sprinklers to keep foliage dry'
    ],
    organicManagement: [
      'Spray copper octanoate or Bordeaux mixture at first sign of lesions',
      'Apply bio-fungicides containing Bacillus subtilis or Trichoderma viride',
      'Remove and safely destroy heavily infected lower leaves (do not compost)'
    ],
    chemicalManagement: [
      'Protectant fungicides containing Chlorothalonil or Mancozeb as recommended by local agronomy extension',
      'Rotate FRAC code groups (e.g. strobilurins and triazoles) to prevent fungal resistance'
    ],
    severityLevel: 'High'
  },
  {
    id: 'tomato_late_blight',
    name: 'Tomato Late Blight',
    crop: 'Tomato',
    scientificName: 'Phytophthora infestans',
    pathogenType: 'Fungal',
    pathogenName: 'Phytophthora infestans (Mont.) de Bary',
    isHealthy: false,
    description: 'One of the most destructive plant diseases in agriculture, historically responsible for the Irish Potato Famine. It can destroy entire fields within days under cool, wet weather.',
    symptoms: [
      'Large, irregular water-soaked pale-green to brown lesions on leaves and stems',
      'White fuzzy fungal growth (sporangiophores) on the undersides of leaves during high humidity',
      'Rapid browning and collapse of stems (stem dieback)',
      'Firm, dark greasy lesions on tomato fruits with foul odor'
    ],
    favorableConditions: {
      temperature: '15°C - 21°C (60°F - 70°F)',
      humidity: 'Relative humidity >90% for 10+ consecutive hours',
      spreadFactor: 'Wind-blown sporangia travelling over several miles'
    },
    prevention: [
      'Plant certified disease-free transplants and resistant cultivars (e.g., Mountain Magic, Defiant)',
      'Eliminate volunteer tomato and potato cull piles before planting season',
      'Ensure wide plant spacing for rapid canopy drying after rainfall',
      'Avoid planting tomatoes adjacent to late-blight prone potato fields'
    ],
    organicManagement: [
      'Immediate rogueing and bagging of infected plants to stop airborne spore release',
      'Preventative applications of copper hydroxide before disease pressure mounts',
      'Neem oil applications may act as a mild deterrent for secondary infections'
    ],
    chemicalManagement: [
      'Preventative applications of Mancozeb or Chlorothalonil during blight weather alerts',
      'Systemic fungicides such as Cymoxanil, Dimethomorph, or Mandipropamid under university guidance'
    ],
    severityLevel: 'Severe'
  },
  {
    id: 'tomato_healthy',
    name: 'Tomato Healthy Leaf',
    crop: 'Tomato',
    scientificName: 'Solanum lycopersicum',
    pathogenType: 'Healthy',
    isHealthy: true,
    description: 'The tomato foliage displays vibrant, uniform green coloration with well-defined leaf venation, intact epidermal cells, and no visible necrotic or chlorotic lesions.',
    symptoms: [
      'Uniform deep-green color across leaf blades and petioles',
      'Firm, turgid leaf texture without wilting or curling',
      'Absence of fungal spots, powdery coatings, or bacterial ooze',
      'Normal leaf margins without necrosis or chlorosis'
    ],
    favorableConditions: {
      temperature: '20°C - 28°C ideal growing range',
      humidity: '50% - 70% balanced humidity',
      soilCondition: 'Well-draining, loamy soil with pH 6.0 - 6.8'
    },
    prevention: [
      'Continue regular drip irrigation avoiding moisture stress',
      'Maintain balanced N-P-K fertilization and calcium to prevent blossom end rot',
      'Scout foliage twice weekly for early detection of potential pests and pathogens',
      'Maintain clean weeding around plant beds'
    ],
    organicManagement: [
      'Apply compost tea or beneficial mycorrhizal inoculants to reinforce rhizosphere immunity',
      'Utilize sticky traps to monitor whitefly and aphid populations'
    ],
    severityLevel: 'None (Healthy)'
  },
  {
    id: 'potato_early_blight',
    name: 'Potato Early Blight',
    crop: 'Potato',
    scientificName: 'Alternaria solani',
    pathogenType: 'Fungal',
    pathogenName: 'Alternaria solani',
    isHealthy: false,
    description: 'A common foliar disease of potatoes that attacks aging foliage, reducing photosynthetic capacity and diminishing tuber size and dry matter accumulation.',
    symptoms: [
      'Small dark brown to black spots with concentric rings on lower leaves',
      'Spots enlarge and coalesce, causing foliage to turn yellow and dry out',
      'Stem lesions that are elongated and slightly sunken',
      'Tubers may develop brown, dry corky rot under the skin'
    ],
    favorableConditions: {
      temperature: '24°C - 30°C',
      humidity: 'Alternating wet and dry periods',
      soilCondition: 'Nitrogen-stressed or maturing crops'
    },
    prevention: [
      'Maintain adequate plant nutrition, especially nitrogen, to avoid premature senescence',
      'Avoid overhead irrigation late in the day',
      'Rotate crops with non-solanaceous species like cereals or legumes for 3+ years',
      'Harvest mature tubers carefully to avoid bruising the skin'
    ],
    organicManagement: [
      'Preventative copper sulfate sprays starting at flowering',
      'Apply biological control agents like Bacillus amyloliquefaciens'
    ],
    chemicalManagement: [
      'Contact fungicides such as Mancozeb or Chlorothalonil applied according to Degree Day forecasting',
      'Targeted FRAC 7 or 11 fungicides if disease spreads rapidly'
    ],
    severityLevel: 'Moderate'
  },
  {
    id: 'potato_late_blight',
    name: 'Potato Late Blight',
    crop: 'Potato',
    scientificName: 'Phytophthora infestans',
    pathogenType: 'Fungal',
    pathogenName: 'Phytophthora infestans',
    isHealthy: false,
    description: 'Catastrophic oomycete infection capable of destroying potato crops and causing soft, foul-smelling rot in tubers during storage.',
    symptoms: [
      'Dark water-soaked lesions expanding rapidly across foliage and stems',
      'White mildew fringe on the underside of leaves in damp conditions',
      'Vine collapse and blackened stems smelling of decay',
      'Tubers develop reddish-brown granular dry rot that turns soft with secondary bacteria'
    ],
    favorableConditions: {
      temperature: '12°C - 20°C',
      humidity: 'Relative humidity >95%',
      spreadFactor: 'Infected seed tubers and wind-dispersed spores'
    },
    prevention: [
      'Plant only certified seed potatoes inspected for blight free status',
      'Hilling soil properly around tuber zone to prevent sporangia from washing into tubers',
      'Kill potato vines 2 weeks prior to harvest using flail mower or desiccants',
      'Store harvested tubers in cold, well-ventilated storage facilities'
    ],
    organicManagement: [
      'Fixed copper fungicides applied strictly before rain events',
      'Immediate removal and burial of infected plants to protect adjacent fields'
    ],
    chemicalManagement: [
      'Fungicides such as Fluopicolide, Cyazofamid, or Metalaxyl according to regional disease alerts'
    ],
    severityLevel: 'Severe'
  },
  {
    id: 'potato_healthy',
    name: 'Potato Healthy Leaf',
    crop: 'Potato',
    scientificName: 'Solanum tuberosum',
    pathogenType: 'Healthy',
    isHealthy: true,
    description: 'Vigorous potato foliage with lustrous dark green leaflets, sturdy petioles, and robust vegetative canopy indicative of high tuber initiation potential.',
    symptoms: [
      'Smooth, dark green foliage with robust leaflets',
      'No discoloration, necrosis, or foliar blighting',
      'Strong upright stem vigor',
      'Clean leaf margins free of fungal rings'
    ],
    favorableConditions: {
      temperature: '16°C - 22°C optimal for tuber bulking',
      soilCondition: 'Loose, well-aerated sandy loam with pH 5.5 - 6.5'
    },
    prevention: [
      'Maintain regular moisture during tuber initiation to prevent scab',
      'Hill rows properly to protect emerging tubers from light and greening',
      'Monitor fields weekly with sticky traps and visual canopy audits'
    ],
    organicManagement: [
      'Seaweed extract and micronutrient foliar sprays for enhanced stress tolerance'
    ],
    severityLevel: 'None (Healthy)'
  },
  {
    id: 'corn_common_rust',
    name: 'Corn (Maize) Common Rust',
    crop: 'Corn (Maize)',
    scientificName: 'Puccinia sorghi',
    pathogenType: 'Fungal',
    pathogenName: 'Puccinia sorghi Schwein',
    isHealthy: false,
    description: 'A widely distributed fungal disease characterized by golden-brown to cinnamon-brown pustules on both leaf surfaces, disrupting photosynthesis and ear fill.',
    symptoms: [
      'Small, round to elongate powdery brown pustules on upper and lower leaf surfaces',
      'Pustules erupt through the leaf epidermis releasing reddish-brown urediniospores',
      'Severe infection leads to leaf chlorosis, necrosis, and premature leaf death',
      'Stunted stalk development and reduced kernel weight'
    ],
    favorableConditions: {
      temperature: '16°C - 25°C',
      humidity: 'High relative humidity (nearly 100%) with 6 hours of dew',
      spreadFactor: 'Airborne spores carried on southern trade winds'
    },
    prevention: [
      'Plant rust-resistant corn hybrids with Rp gene resistance',
      'Early planting to allow plants to mature before peak spore flights arrive',
      'Avoid high-density planting that restricts wind ventilation through the canopy'
    ],
    organicManagement: [
      'Sulfur-based foliar dusts or potassium bicarbonate solutions',
      'Trichoderma applications early in the vegetative cycle'
    ],
    chemicalManagement: [
      'Triazole (e.g. Propiconazole) or strobilurin fungicides if rust reaches upper canopy before denting'
    ],
    severityLevel: 'Moderate'
  },
  {
    id: 'corn_northern_leaf_blight',
    name: 'Corn Northern Leaf Blight',
    crop: 'Corn (Maize)',
    scientificName: 'Exserohilum turcicum',
    pathogenType: 'Fungal',
    pathogenName: 'Exserohilum turcicum (Pass.) K.J. Leonard & Suggs',
    isHealthy: false,
    description: 'A foliar disease capable of causing severe yield loss in susceptible corn hybrids, distinguished by large, cigar-shaped grayish-green lesions.',
    symptoms: [
      'Elongated, elliptical "cigar-shaped" lesions measuring 2.5 to 15 cm long',
      'Lesions start grayish-green and mature into tan or brown necrotic areas',
      'Dark fungal sporulation visible within lesions during humid weather',
      'Entire leaves become blighted and brittle, giving field a burned appearance'
    ],
    favorableConditions: {
      temperature: '18°C - 27°C',
      humidity: 'Moderate temperatures with heavy morning dew (6 - 12 hours)',
      spreadFactor: 'Crop residue overwintering and rain-splash'
    },
    prevention: [
      'Select hybrids with specific (Ht1, Ht2) or polygenic resistance',
      'Incorporate crop residues by deep tillage to accelerate decomposition',
      'Rotate with non-host crops like soybeans or alfalfa for at least one season'
    ],
    organicManagement: [
      'Bio-fungicide sprays of Bacillus subtilis (Serenade ASO)',
      'Copper octanoate protective sprays'
    ],
    chemicalManagement: [
      'Foliar fungicides applied at tassel emergence (VT-R1) if lesions appear on third leaf below ear'
    ],
    severityLevel: 'High'
  },
  {
    id: 'corn_healthy',
    name: 'Corn (Maize) Healthy Leaf',
    crop: 'Corn (Maize)',
    scientificName: 'Zea mays',
    pathogenType: 'Healthy',
    isHealthy: true,
    description: 'Stately corn leaf with clean linear venation, deep green chlorophyll saturation, and robust photosynthetic architecture without rust pustules or necrotic lesions.',
    symptoms: [
      'Broad, arching leaf blade with crisp, intact margins',
      'Deep emerald green coloration with distinct central midrib',
      'Absence of pustules, streaks, or water-soaked lesions',
      'Excellent vigor and leaf angle orientation'
    ],
    favorableConditions: {
      temperature: '21°C - 30°C',
      soilCondition: 'Fertile, well-drained soils with balanced nitrogen fertility'
    },
    prevention: [
      'Maintain side-dress nitrogen schedule at V6 stage',
      'Monitor soil moisture during pollination and grain fill stages'
    ],
    organicManagement: [
      'Foliar zinc and boron supplementation if indicated by soil test'
    ],
    severityLevel: 'None (Healthy)'
  },
  {
    id: 'pepper_bacterial_spot',
    name: 'Pepper Bell Bacterial Spot',
    crop: 'Pepper Bell',
    scientificName: 'Xanthomonas campestris pv. vesicatoria',
    pathogenType: 'Bacterial',
    pathogenName: 'Xanthomonas euvesicatoria',
    isHealthy: false,
    description: 'A destructive bacterial disease affecting bell peppers and chilies. It causes severe defoliation, blossom drop, and blistered fruit that reduces marketability.',
    symptoms: [
      'Small, circular to irregular water-soaked spots on undersides of leaves',
      'Lesions turn dark brown with greasy texture and slight yellow border',
      'Infected leaves turn yellow and drop prematurely, exposing fruit to sunscald',
      'Rough, raised warty scabs on pepper fruits'
    ],
    favorableConditions: {
      temperature: '24°C - 30°C',
      humidity: 'High relative humidity with driving rain and sprinkler irrigation',
      spreadFactor: 'Bacterial streaming via water droplets, contaminated tools and seeds'
    },
    prevention: [
      'Use certified pathogen-free seeds treated with hot water (50°C for 25 min)',
      'Choose resistant bell pepper varieties (race 1-10 resistance available)',
      'Sterilize pruning shears and tomato stakes with 10% bleach solution',
      'Do not work in fields while foliage is wet'
    ],
    organicManagement: [
      'Apply fixed copper bactericides combined with mancozeb for synergistic control',
      'Use bacteriophages specific to Xanthomonas (e.g., AgriPhage)'
    ],
    chemicalManagement: [
      'Copper hydroxide or copper sulfate pentahydrate sprays',
      'Actigard (acibenzolar-S-methyl) as a systemic acquired resistance (SAR) inducer'
    ],
    severityLevel: 'High'
  },
  {
    id: 'pepper_healthy',
    name: 'Pepper Bell Healthy Leaf',
    crop: 'Pepper Bell',
    scientificName: 'Capsicum annuum',
    pathogenType: 'Healthy',
    isHealthy: true,
    description: 'Firm, glossy green bell pepper foliage with smooth epidermal surface and strong venation, supporting optimal flowering and fruit set.',
    symptoms: [
      'Lustrous, dark green leaves with smooth surface',
      'Intact pointed tips and smooth, uncurled margins',
      'No water-soaked specks, necrotic spotting, or bacterial lesions',
      'Vibrant canopy supporting robust flowering nodes'
    ],
    favorableConditions: {
      temperature: '20°C - 27°C during daytime',
      soilCondition: 'Moist, well-draining loamy soil with organic matter'
    },
    prevention: [
      'Consistent soil moisture to prevent blossom end rot and calcium deficiency',
      'Mulch beds with straw to reduce soil temperature fluctuations'
    ],
    organicManagement: [
      'Neem oil or horticultural oil spray for preventive thrip/aphid control'
    ],
    severityLevel: 'None (Healthy)'
  },
  {
    id: 'apple_scab',
    name: 'Apple Scab',
    crop: 'Apple',
    scientificName: 'Venturia inaequalis',
    pathogenType: 'Fungal',
    pathogenName: 'Venturia inaequalis (Cooke) G. Winter',
    isHealthy: false,
    description: 'The most economically significant disease of apples worldwide, infecting both leaves and fruit, causing deformed, unmarketable fruit and early tree defoliation.',
    symptoms: [
      'Velvety, olive-green to dark brown circular spots on leaf surfaces',
      'Lesions darken with age, become corky and raised',
      'Severely infected leaves turn yellow and drop prematurely',
      'Fruit develops dark, scabby lesions that crack and distort fruit shape'
    ],
    favorableConditions: {
      temperature: '15°C - 24°C',
      humidity: 'Continuous leaf wetness for 6 to 24+ hours (Mills Table parameters)',
      spreadFactor: 'Ascospores discharged from fallen overwintered leaves'
    },
    prevention: [
      'Shred or remove fallen apple leaves in autumn or apply 5% urea to promote leaf breakdown',
      'Plant resistant cultivars like Liberty, Enterprise, or Freedom',
      'Prune tree canopy annually to maximize sunlight and airflow for rapid drying'
    ],
    organicManagement: [
      'Liquid lime sulfur sprays during tight cluster and pink bud stages',
      'Microfine wettable sulfur or potassium bicarbonate at petal fall'
    ],
    chemicalManagement: [
      'Fungicides such as Captan or Myclobutanil timed with Mills infection period models'
    ],
    severityLevel: 'High'
  },
  {
    id: 'apple_healthy',
    name: 'Apple Healthy Leaf',
    crop: 'Apple',
    scientificName: 'Malus domestica',
    pathogenType: 'Healthy',
    isHealthy: true,
    description: 'Crisp, elliptical apple leaf with finely serrated margins, clean pubescence on underside, and rich chlorophyll content driving tree carbohydrate storage.',
    symptoms: [
      'Uniform green foliage with finely serrated leaf edges',
      'No velvety olive spots, rust pustules, or frog-eye lesions',
      'Sturdy petiole attaching cleanly to the spur or shoot',
      'Turgid leaf blade without blistering or curling'
    ],
    favorableConditions: {
      temperature: '18°C - 26°C temperate sunny conditions',
      soilCondition: 'Deep, well-aerated soil with pH 6.0 - 7.0'
    },
    prevention: [
      'Maintain annual winter pruning and balanced calcium/potassium nutrition',
      'Inspect underside of leaves weekly for two-spotted spider mites and aphids'
    ],
    organicManagement: [
      'Dormant horticultural oil spray in late winter to smother overwintering pest eggs'
    ],
    severityLevel: 'None (Healthy)'
  },
  {
    id: 'grape_black_rot',
    name: 'Grape Black Rot',
    crop: 'Grape',
    scientificName: 'Guignardia bidwellii',
    pathogenType: 'Fungal',
    pathogenName: 'Guignardia bidwellii (Ellis) Viala & Ravaz',
    isHealthy: false,
    description: 'A destructive fungal disease of grapes capable of causing up to 80-100% crop loss in humid regions by shrivelling berries into hard, black mummies.',
    symptoms: [
      'Small, circular reddish-brown spots on leaves that enlarge to 6 mm',
      'Ring of tiny black fruiting bodies (pycnidia) arranged inside the lesion boundary',
      'Infected berries turn pale, soften, and shrivel into hard, wrinkled black mummies',
      'Black elongated lesions on shoots, petioles, and tendrils'
    ],
    favorableConditions: {
      temperature: '21°C - 27°C',
      humidity: 'Warm rainy periods requiring 6 to 24 hours of leaf moisture',
      spreadFactor: 'Overwintering mummified berries hanging on vines or on the ground'
    },
    prevention: [
      'Sanitation: Collect and destroy all mummified grape clusters and vine prunings',
      'Canopy management: Shoot thinning and leaf pulling to expose fruit to sunlight',
      'Proper trellising to keep vegetative shoots off the damp ground'
    ],
    organicManagement: [
      'Copper-based fungicides and wettable sulfur applied before precipitation',
      'Bio-pesticide Serenade (Bacillus subtilis) integrated into spray program'
    ],
    chemicalManagement: [
      'Mancozeb, Ziram, or Sterol-inhibiting fungicides (FRAC 3) from bud break to veraison'
    ],
    severityLevel: 'Severe'
  },
  {
    id: 'powdery_mildew',
    name: 'Powdery Mildew',
    crop: 'Cucurbits / Squash / Tomato',
    scientificName: 'Podosphaera xanthii',
    pathogenType: 'Fungal',
    pathogenName: 'Podosphaera xanthii / Erysiphe cichoracearum',
    isHealthy: false,
    description: 'A common fungal condition producing white, talcum powder-like fungal patches across upper and lower leaf surfaces, causing premature senescence.',
    symptoms: [
      'White to off-white powdery fungal growth spots on leaf surfaces and stems',
      'Spots enlarge and merge, coating the entire leaf surface',
      'Underlying leaf tissue turns yellow, browns, and becomes brittle',
      'Shrivelled foliage leads to sunburnt crops and diminished sugar content'
    ],
    favorableConditions: {
      temperature: '20°C - 27°C',
      humidity: 'High ambient humidity with dry leaf surfaces (does not require water droplets)',
      spreadFactor: 'Airborne conidia thriving in shaded, dense, humid canopies'
    },
    prevention: [
      'Plant in full sunlight with adequate spacing between vines',
      'Choose powdery mildew resistant cultivars (labeled PMR)',
      'Prune overlapping foliage to increase interior canopy air movement'
    ],
    organicManagement: [
      'Baking soda solution (1 tbsp sodium bicarbonate + 1 tsp horticultural oil per gallon water)',
      'Potassium bicarbonate sprays (Armicarb / MilStop)',
      'Neem oil or diluted milk spray (1 part milk to 9 parts water) under direct sun'
    ],
    chemicalManagement: [
      'Fungicides such as Quinoxyfen, Triflumizole, or Myclobutanil in alternation'
    ],
    severityLevel: 'Moderate'
  },
  {
    id: 'leaf_rust',
    name: 'Leaf Rust',
    crop: 'Wheat / Cereal / Bean',
    scientificName: 'Puccinia triticina / Uromyces appendiculatus',
    pathogenType: 'Fungal',
    pathogenName: 'Puccinia species',
    isHealthy: false,
    description: 'A fungal disease with worldwide distribution causing rusty-orange pustules that rupture the epidermis, drastically increasing transpiration and decreasing seed weight.',
    symptoms: [
      'Scatterings of small, circular orange-brown pustules on leaf blades',
      'Orange powdery spores easily rub off onto fingers or clothing',
      'Foliage turns chlorotic around the pustules and senesces early',
      'Severe infections cause lodging and shrivelled kernels or pods'
    ],
    favorableConditions: {
      temperature: '15°C - 22°C',
      humidity: 'Free moisture on leaves for 4 - 8 hours',
      spreadFactor: 'Wind-dispersed urediniospores traveling hundreds of miles'
    },
    prevention: [
      'Select certified rust-resistant crop cultivars',
      'Eradicate alternative weed hosts in field borders',
      'Time planting to bypass peak regional spore migration periods'
    ],
    organicManagement: [
      'Wettable sulfur applications early in the growth season',
      'Bio-control formulations containing Bacillus pumilus'
    ],
    chemicalManagement: [
      'Triazole fungicides (e.g. Tebuconazole) applied when flag leaf is threatened'
    ],
    severityLevel: 'High'
  }
];

export const SUPPORTED_CROPS = [
  'Tomato',
  'Potato',
  'Corn (Maize)',
  'Pepper Bell',
  'Apple',
  'Grape',
  'Cucurbits / Squash / Tomato',
  'Wheat / Cereal / Bean'
];
