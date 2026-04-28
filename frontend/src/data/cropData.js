export const CATEGORIES = [
  { id: 'grains', name: { en: 'Grains', ta: 'தானியங்கள்' }, icon: 'Grain' },
  { id: 'vegetables', name: { en: 'Vegetables', ta: 'காய்கறிகள்' }, icon: 'LeafyGreen' },
  { id: 'fruits', name: { en: 'Fruits', ta: 'பழங்கள்' }, icon: 'Apple' }
];

export const CROPS = [
  // --- GRAINS (10) ---
  {
    id: 'paddy',
    category: 'grains',
    name: { en: 'Paddy (Rice)', ta: 'நெல்' },
    diseases: [
      { id: 'blast', name: { en: 'Blast', ta: 'குலை நோய்' }, symptoms: { en: 'Spindle shaped spots with greyish center.', ta: 'சாம்பல் மையத்துடன் கூடிய கதிர் வடிவப் புள்ளிகள்.' }, prevention: { en: 'Balanced N, use Carbendazim.', ta: 'சீரான உரம், கார்பென்டாசிம் பயன்படுத்தவும்.' }, matchSymptoms: ['spindle_spots', 'grey_center'] },
      { id: 'blight', name: { en: 'Leaf Blight', ta: 'இலை கருகல்' }, symptoms: { en: 'Wavy yellow stripes on leaf margins.', ta: 'இலை ஓரங்களில் மஞ்சள் நிறக் கோடுகள்.' }, prevention: { en: 'Balanced fertilizer.', ta: 'சீரான உரமிடுதல்.' }, matchSymptoms: ['yellow_stripes', 'withered_leaves'] }
    ],
    guide: { season: { en: 'Jun-Jul', ta: 'ஜூன்-ஜூலை' }, soil: { en: 'Clay Loam', ta: 'களிமண் படிவு' }, water: { en: 'High', ta: 'அதிகம்' }, fertilizer: { en: 'NPK 120:60:60', ta: 'தழை, மணி, சாம்பல் சத்து' } }
  },
  {
    id: 'maize',
    category: 'grains',
    name: { en: 'Maize', ta: 'மக்காச்சோளம்' },
    diseases: [
      { id: 'rust', name: { en: 'Common Rust', ta: 'துரு நோய்' }, symptoms: { en: 'Small brownish pustules.', ta: 'சிறிய பழுப்பு நிறக் கொப்புளங்கள்.' }, prevention: { en: 'Early planting.', ta: 'முன்கூட்டியே நடவு.' }, matchSymptoms: ['brown_pustules'] },
      { id: 'smut', name: { en: 'Maize Smut', ta: 'கரிப்பூட்டை' }, symptoms: { en: 'Large galls on ears.', ta: 'கதிர்களில் பெரிய கட்டிகள்.' }, prevention: { en: 'Crop rotation.', ta: 'பயிர் சுழற்சி.' }, matchSymptoms: ['galls', 'black_spores'] }
    ],
    guide: { season: { en: 'Jun-Aug', ta: 'ஜூன்-ஆகஸ்ட்' }, soil: { en: 'Well-drained Loam', ta: 'நல்ல வடிகால் மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 150:75:37', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'wheat',
    category: 'grains',
    name: { en: 'Wheat', ta: 'கோதுமை' },
    diseases: [
      { id: 'leaf_rust', name: { en: 'Leaf Rust', ta: 'இலை துரு' }, symptoms: { en: 'Small orange pustules.', ta: 'சிறிய ஆரஞ்சு கொப்புளங்கள்.' }, prevention: { en: 'Resistant varieties.', ta: 'எதிர்ப்புத் திறன் ரகங்கள்.' }, matchSymptoms: ['orange_spots'] },
      { id: 'loose_smut', name: { en: 'Loose Smut', ta: 'கரிப்பூட்டை' }, symptoms: { en: 'Black powder instead of grains.', ta: 'தானியங்களுக்கு பதில் கறுப்புத் தூள்.' }, prevention: { en: 'Solar heat treatment.', ta: 'சூரிய வெப்ப சிகிச்சை.' }, matchSymptoms: ['black_spores'] }
    ],
    guide: { season: { en: 'Nov-Dec', ta: 'நவ-டிச' }, soil: { en: 'Clayey Loam', ta: 'களிமண் படிவு' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 120:40:0', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'millet',
    category: 'grains',
    name: { en: 'Pearl Millet', ta: 'கம்பு' },
    diseases: [
      { id: 'downy_mildew_m', name: { en: 'Downy Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'White growth on leaves.', ta: 'இலைகளில் வெள்ளை வளர்ச்சி.' }, prevention: { en: 'Seed treatment.', ta: 'விதை நேர்த்தி.' }, matchSymptoms: ['white_growth'] },
      { id: 'ergot_m', name: { en: 'Ergot', ta: 'எர்கோட்' }, symptoms: { en: 'Honey-like liquid from flowers.', ta: 'பூக்களில் தேன் போன்ற திரவம்.' }, prevention: { en: 'Salt water treatment.', ta: 'உப்பு நீர் சிகிச்சை.' }, matchSymptoms: ['sticky_liquid'] }
    ],
    guide: { season: { en: 'Jun-Jul', ta: 'ஜூன்-ஜூலை' }, soil: { en: 'Sandy Loam', ta: 'மணல் கலந்த மண்' }, water: { en: 'Low', ta: 'குறைவு' }, fertilizer: { en: 'NPK 80:40:40', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'sorghum',
    category: 'grains',
    name: { en: 'Sorghum', ta: 'சோளம்' },
    diseases: [
      { id: 'grain_smut_s', name: { en: 'Grain Smut', ta: 'தானிய கரிப்பூட்டை' }, symptoms: { en: 'Grains turn black.', ta: 'தானியங்கள் கருப்பாக மாறுதல்.' }, prevention: { en: 'Seed dressing.', ta: 'விதை நேர்த்தி.' }, matchSymptoms: ['black_grains'] },
      { id: 'anthracnose_s', name: { en: 'Anthracnose', ta: 'கருகல் நோய்' }, symptoms: { en: 'Circular red spots on leaves.', ta: 'இலைகளில் சிவப்பான புள்ளிகள்.' }, prevention: { en: 'Clean seeds.', ta: 'சுத்தமான விதைகள்.' }, matchSymptoms: ['red_spots'] }
    ],
    guide: { season: { en: 'Jan-Feb', ta: 'ஜன-பிப்' }, soil: { en: 'Black Soil', ta: 'கரிசல் மண்' }, water: { en: 'Very Low', ta: 'மிகக் குறைவு' }, fertilizer: { en: 'NPK 60:30:30', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'barley',
    category: 'grains',
    name: { en: 'Barley', ta: 'பார்லி' },
    diseases: [
      { id: 'powdery_mildew_b', name: { en: 'Powdery Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'White floury patches.', ta: 'வெள்ளை மாவு போன்ற திட்டுகள்.' }, prevention: { en: 'Sulphur spray.', ta: 'கந்தகம் தெளிப்பு.' }, matchSymptoms: ['white_powder'] },
      { id: 'net_blotch', name: { en: 'Net Blotch', ta: 'வலைக் கருகல்' }, symptoms: { en: 'Brown net-like patterns on leaves.', ta: 'இலைகளில் பழுப்பு வலை போன்ற அமைப்பு.' }, prevention: { en: 'Crop rotation.', ta: 'பயிர் சுழற்சி.' }, matchSymptoms: ['net_patterns'] }
    ],
    guide: { season: { en: 'Oct-Nov', ta: 'அக்-நவ' }, soil: { en: 'Sandy to Clay Loam', ta: 'மணல் முதல் களிமண் படிவு' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 60:30:30', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'oats',
    category: 'grains',
    name: { en: 'Oats', ta: 'ஓட்ஸ்' },
    diseases: [
      { id: 'leaf_blotch_o', name: { en: 'Leaf Blotch', ta: 'இலைப்புள்ளி' }, symptoms: { en: 'Elongated brown spots.', ta: 'நீளமான பழுப்பு புள்ளிகள்.' }, prevention: { en: 'Avoid wet conditions.', ta: 'ஈரப்பதமான சூழலைத் தவிர்க்கவும்.' }, matchSymptoms: ['elongated_spots'] },
      { id: 'loose_smut_o', name: { en: 'Loose Smut', ta: 'கரிப்பூட்டை' }, symptoms: { en: 'Black mass in heads.', ta: 'கதிர்களில் கறுப்புத் தூள்.' }, prevention: { en: 'Hot water treatment.', ta: 'வெந்நீர் சிகிச்சை.' }, matchSymptoms: ['black_spores'] }
    ],
    guide: { season: { en: 'Oct-Dec', ta: 'அக்-டிச' }, soil: { en: 'Rich Loam', ta: 'சத்தான செம்மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 80:40:0', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'rye',
    category: 'grains',
    name: { en: 'Rye', ta: 'ரை' },
    diseases: [
      { id: 'ergot_r', name: { en: 'Ergot', ta: 'எர்கோட்' }, symptoms: { en: 'Hard black sclerotia in seeds.', ta: 'விதைகளில் கடினமான கறுப்பு வளர்ச்சி.' }, prevention: { en: 'Deep ploughing.', ta: 'ஆழமாக உழுதல்.' }, matchSymptoms: ['dark_seeds'] },
      { id: 'stem_rust_r', name: { en: 'Stem Rust', ta: 'தண்டு துரு' }, symptoms: { en: 'Brick red pustules on stems.', ta: 'தண்டுகளில் சிவப்பு கொப்புளங்கள்.' }, prevention: { en: 'Eradicate barberry.', ta: 'பார்பெர்ரி செடிகளை அகற்றவும்.' }, matchSymptoms: ['red_pustules'] }
    ],
    guide: { season: { en: 'Sep-Oct', ta: 'செப்-அக்' }, soil: { en: 'Sandy Soil', ta: 'மணல் மண்' }, water: { en: 'Low', ta: 'குறைவு' }, fertilizer: { en: 'NPK 60:40:40', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'quinoa',
    category: 'grains',
    name: { en: 'Quinoa', ta: 'குயினோவா' },
    diseases: [
      { id: 'mildew_q', name: { en: 'Downy Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'Pale yellow leaves.', ta: 'வெளிறிய மஞ்சள் இலைகள்.' }, prevention: { en: 'Resistant seeds.', ta: 'எதிர்ப்பு விதைகள்.' }, matchSymptoms: ['pale_leaves'] },
      { id: 'damping_off_q', name: { en: 'Damping Off', ta: 'வேர் அழுகல்' }, symptoms: { en: 'Seedlings collapse.', ta: 'நாற்றுகள் சாய்ந்து விழுதல்.' }, prevention: { en: 'Dry seedbed.', ta: 'உலர்ந்த நாற்றங்கால்.' }, matchSymptoms: ['seedling_collapse'] }
    ],
    guide: { season: { en: 'Spring', ta: 'வசந்த காலம்' }, soil: { en: 'Well-drained', ta: 'நல்ல வடிகால்' }, water: { en: 'Low', ta: 'குறைவு' }, fertilizer: { en: 'Organic Manure', ta: 'இயற்கை உரம்' } }
  },
  {
    id: 'buckwheat',
    category: 'grains',
    name: { en: 'Buckwheat', ta: 'பக்வீட்' },
    diseases: [
      { id: 'leaf_spot_bw', name: { en: 'Leaf Spot', ta: 'இலைப்புள்ளி' }, symptoms: { en: 'Small circular spots.', ta: 'சிறிய வட்டப் புள்ளிகள்.' }, prevention: { en: 'Clean cultivation.', ta: 'சுத்தமான சாகுபடி.' }, matchSymptoms: ['circular_spots'] },
      { id: 'root_rot_bw', name: { en: 'Root Rot', ta: 'வேர் அழுகல்' }, symptoms: { en: 'Blackening of roots.', ta: 'வேர்கள் கருப்பாக மாறுதல்.' }, prevention: { en: 'Avoid waterlogging.', ta: 'தண்ணீர் தேங்குவதைத் தவிர்க்கவும்.' }, matchSymptoms: ['black_roots'] }
    ],
    guide: { season: { en: 'Summer', ta: 'கோடை' }, soil: { en: 'Poor Acidic Soils', ta: 'சத்து குறைந்த அமில மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'Minimal NPK', ta: 'குறைந்த உரமிடுதல்' } }
  },

  // --- VEGETABLES (10) ---
  {
    id: 'tomato',
    category: 'vegetables',
    name: { en: 'Tomato', ta: 'தக்காளி' },
    diseases: [
      { id: 'early_blight', name: { en: 'Early Blight', ta: 'முன்கூட்டிய கருகல்' }, symptoms: { en: 'Bullseye-like spots on leaves.', ta: 'இலைகளில் இலக்கு போன்ற புள்ளிகள்.' }, prevention: { en: 'Copper sprays.', ta: 'செம்பு தெளிப்பு.' }, matchSymptoms: ['bullseye_spots'] },
      { id: 'wilt_t', name: { en: 'Fusarium Wilt', ta: 'வாடல் நோய்' }, symptoms: { en: 'Yellowing of bottom leaves.', ta: 'கீழ் இலைகள் மஞ்சளாகுதல்.' }, prevention: { en: 'Resistant varieties.', ta: 'எதிர்ப்பு ரகங்கள்.' }, matchSymptoms: ['wilting', 'yellow_bottom_leaves'] }
    ],
    guide: { season: { en: 'May-Jun', ta: 'மே-ஜூன்' }, soil: { en: 'Loam', ta: 'செம்மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 75:40:25', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'brinjal',
    category: 'vegetables',
    name: { en: 'Brinjal', ta: 'கத்தரி' },
    diseases: [
      { id: 'little_leaf_br', name: { en: 'Little Leaf', ta: 'சிறு இலை நோய்' }, symptoms: { en: 'Tiny crowded leaves.', ta: 'சிறிய நெருக்கமான இலைகள்.' }, prevention: { en: 'Remove vectors.', ta: 'பூச்சிகளைக் கட்டுப்படுத்தவும்.' }, matchSymptoms: ['tiny_leaves', 'stunting'] },
      { id: 'blight_br', name: { en: 'Phomopsis Blight', ta: 'இலை கருகல்' }, symptoms: { en: 'Circular brown spots.', ta: 'வட்டமான பழுப்பு புள்ளிகள்.' }, prevention: { en: 'Seed treatment.', ta: 'விதை நேர்த்தி.' }, matchSymptoms: ['brown_circles'] }
    ],
    guide: { season: { en: 'Year round', ta: 'ஆண்டு முழுவதும்' }, soil: { en: 'Rich Silt Loam', ta: 'சத்தான வண்டல் மண்' }, water: { en: 'Frequent', ta: 'அடிக்கடி' }, fertilizer: { en: 'NPK 100:50:50', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'chilli',
    category: 'vegetables',
    name: { en: 'Chilli', ta: 'மிளகாய்' },
    diseases: [
      { id: 'dieback_ch', name: { en: 'Dieback', ta: 'நுனி கருகல்' }, symptoms: { en: 'Drying from top downwards.', ta: 'மேலிருந்து கீழாக காய்ந்து போதல்.' }, prevention: { en: 'Apply Mancozeb.', ta: 'மேன்கோசெப் தெளிக்கவும்.' }, matchSymptoms: ['tip_drying'] },
      { id: 'leaf_curl', name: { en: 'Leaf Curl', ta: 'இலை சுருட்டல்' }, symptoms: { en: 'Leaves curl upwards.', ta: 'இலைகள் மேல்நோக்கி சுருளுதல்.' }, prevention: { en: 'Vector control.', ta: 'பூச்சி கட்டுப்பாடு.' }, matchSymptoms: ['curled_leaves'] }
    ],
    guide: { season: { en: 'Jan-Feb', ta: 'ஜன-பிப்' }, soil: { en: 'Well-drained Loam', ta: 'நல்ல வடிகால் மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 120:60:30', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'onion',
    category: 'vegetables',
    name: { en: 'Onion', ta: 'வெங்காயம்' },
    diseases: [
      { id: 'purple_blotch_on', name: { en: 'Purple Blotch', ta: 'ஊதா நிறப்புள்ளி' }, symptoms: { en: 'Purple lesions on leaves.', ta: 'இலைகளில் ஊதா புள்ளிகள்.' }, prevention: { en: 'Spray Copper.', ta: 'செம்பு தெளிக்கவும்.' }, matchSymptoms: ['purple_spots'] },
      { id: 'downy_on', name: { en: 'Downy Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'White downy growth.', ta: 'வெள்ளை சாம்பல் வளர்ச்சி.' }, prevention: { en: 'Field sanitation.', ta: 'வயல் சுத்தம்.' }, matchSymptoms: ['white_growth'] }
    ],
    guide: { season: { en: 'Oct-Nov', ta: 'அக்-நவ' }, soil: { en: 'Sandy Loam', ta: 'மணல் கலந்த மண்' }, water: { en: 'Regular', ta: 'வழக்கமான' }, fertilizer: { en: 'NPK 60:60:30', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'potato',
    category: 'vegetables',
    name: { en: 'Potato', ta: 'உருளை' },
    diseases: [
      { id: 'late_blight_po', name: { en: 'Late Blight', ta: 'பிந்தைய கருகல்' }, symptoms: { en: 'Water soaked spots.', ta: 'நீர் கோர்த்த புள்ளிகள்.' }, prevention: { en: 'Ridomil sprays.', ta: 'ரிடோமில் தெளிப்பு.' }, matchSymptoms: ['watery_spots'] },
      { id: 'scab', name: { en: 'Potato Scab', ta: 'உருளை சொறி நோய்' }, symptoms: { en: 'Rough corky spots on skin.', ta: 'தோலில் சொரசொரப்பான புள்ளிகள்.' }, prevention: { en: 'Soil pH control.', ta: 'மண் pH கட்டுப்பாடு.' }, matchSymptoms: ['cork_lesions'] }
    ],
    guide: { season: { en: 'Oct-Nov', ta: 'அக்-நவ' }, soil: { en: 'Loose Friable Soil', ta: 'தளர்வான மண்' }, water: { en: 'Frequent', ta: 'அடிக்கடி' }, fertilizer: { en: 'NPK 120:240:120', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'carrot',
    category: 'vegetables',
    name: { en: 'Carrot', ta: 'கேரட்' },
    diseases: [
      { id: 'leaf_blight_ca', name: { en: 'Leaf Blight', ta: 'இலை கருகல்' }, symptoms: { en: 'Dark brown spots on leaves.', ta: 'இலைகளில் கரும்பழுப்பு புள்ளிகள்.' }, prevention: { en: 'Clean seeds.', ta: 'சுத்தமான விதைகள்.' }, matchSymptoms: ['dark_spots'] },
      { id: 'root_rot_ca', name: { en: 'Root Rot', ta: 'வேர் அழுகல்' }, symptoms: { en: 'Soft rot of carrot.', ta: 'கேரட் அழுகிப் போதல்.' }, prevention: { en: 'Proper drainage.', ta: 'நல்ல வடிகால்.' }, matchSymptoms: ['soft_rot'] }
    ],
    guide: { season: { en: 'Jul-Aug', ta: 'ஜூலை-ஆகஸ்ட்' }, soil: { en: 'Deep Well-drained', ta: 'ஆழமான வடிகால் மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 75:75:75', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'cabbage',
    category: 'vegetables',
    name: { en: 'Cabbage', ta: 'முட்டைக்கோஸ்' },
    diseases: [
      { id: 'black_rot_cb', name: { en: 'Black Rot', ta: 'கறுப்பு அழுகல்' }, symptoms: { en: 'V-shaped yellow lesions.', ta: 'V வடிவ மஞ்சள் புள்ளிகள்.' }, prevention: { en: 'Hot water seeds.', ta: 'வெந்நீர் விதை நேர்த்தி.' }, matchSymptoms: ['v_shape_yellow'] },
      { id: 'clubroot_cb', name: { en: 'Clubroot', ta: 'வேர் வீக்கம்' }, symptoms: { en: 'Large root galls.', ta: 'வேர்களில் பெரிய கட்டிகள்.' }, prevention: { en: 'Lime soil.', ta: 'சுண்ணாம்புச் சிகிச்சை.' }, matchSymptoms: ['swollen_roots'] }
    ],
    guide: { season: { en: 'Aug-Nov', ta: 'ஆக-நவ' }, soil: { en: 'Sandy Loam', ta: 'மணல் கலந்த மண்' }, water: { en: 'Regular', ta: 'வழக்கமான' }, fertilizer: { en: 'NPK 150:100:125', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'cauliflower',
    category: 'vegetables',
    name: { en: 'Cauliflower', ta: 'காலிஃபிளவர்' },
    diseases: [
      { id: 'leaf_spot_cf', name: { en: 'Leaf Spot', ta: 'இலைப்புள்ளி' }, symptoms: { en: 'Small brown spots.', ta: 'சிறிய பழுப்பு புள்ளிகள்.' }, prevention: { en: 'Spray Dithane.', ta: 'டைத்தேன் தெளிக்கவும்.' }, matchSymptoms: ['brown_spots'] },
      { id: 'whip_tail', name: { en: 'Whip Tail', ta: 'வால் நோய்' }, symptoms: { en: 'Narrow leathery leaves.', ta: 'குறுகிய தடித்த இலைகள்.' }, prevention: { en: 'Apply Molybdenum.', ta: 'மாலிப்டினம் பயன்படுத்தவும்.' }, matchSymptoms: ['narrow_leaves'] }
    ],
    guide: { season: { en: 'Aug-Nov', ta: 'ஆக-நவ' }, soil: { en: 'Well-drained Rich Soil', ta: 'நல்ல வடிகால் சத்தான மண்' }, water: { en: 'High', ta: 'அதிகம்' }, fertilizer: { en: 'NPK 150:100:100', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'ladiesfinger',
    category: 'vegetables',
    name: { en: 'Okra (Lady Finger)', ta: 'வெண்டை' },
    diseases: [
      { id: 'yvm_ok', name: { en: 'Yellow Vein Mosaic', ta: 'மஞ்சள் நரம்பு நோய்' }, symptoms: { en: 'Yellow network of veins.', ta: 'மஞ்சள் நிற நரம்பு வலை.' }, prevention: { en: 'Hybrid seeds.', ta: 'வீரிய ரக விதைகள்.' }, matchSymptoms: ['yellow_veins'] },
      { id: 'powdery_ok', name: { en: 'Powdery Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'White powder on leaves.', ta: 'இலைகளில் வெள்ளை சாம்பல்.' }, prevention: { en: 'Spray Sulphur.', ta: 'கந்தகம் தெளிக்கவும்.' }, matchSymptoms: ['white_powder'] }
    ],
    guide: { season: { en: 'Feb-Mar', ta: 'பிப்-மார்' }, soil: { en: 'Alluvial Soil', ta: 'வண்டல் மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 40:20:20', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'spinach',
    category: 'vegetables',
    name: { en: 'Spinach', ta: 'கீரை' },
    diseases: [
      { id: 'downy_sp', name: { en: 'Downy Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'Yellow spots on leaf tops.', ta: 'இலையின் மேற்புறம் மஞ்சள் புள்ளிகள்.' }, prevention: { en: 'Wide spacing.', ta: 'அதிக இடைவெளி.' }, matchSymptoms: ['yellow_top_spots'] },
      { id: 'leaf_spot_sp', name: { en: 'Leaf Spot', ta: 'இலைப்புள்ளி' }, symptoms: { en: 'Circular greyish spots.', ta: 'வட்டமான சாம்பல் புள்ளிகள்.' }, prevention: { en: 'Sanitation.', ta: 'சுத்தம்.' }, matchSymptoms: ['pale_spots'] }
    ],
    guide: { season: { en: 'Year round', ta: 'ஆண்டு முழுவதும்' }, soil: { en: 'Rich Loam', ta: 'சத்தான செம்மண்' }, water: { en: 'Daily', ta: 'தினமும்' }, fertilizer: { en: 'Urea top dressing', ta: 'யூரியா மேலுரம்' } }
  },

  // --- FRUITS (10) ---
  {
    id: 'mango',
    category: 'fruits',
    name: { en: 'Mango', ta: 'மா' },
    diseases: [
      { id: 'powdery_mg', name: { en: 'Powdery Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'White growth on flowers.', ta: 'பூக்களில் வெள்ளை வளர்ச்சி.' }, prevention: { en: 'Dust Sulphur.', ta: 'கந்தகத் தூள்.' }, matchSymptoms: ['white_powder', 'flower_dropping'] },
      { id: 'anth_mg', name: { en: 'Anthracnose', ta: 'கருகல் நோய்' }, symptoms: { en: 'Black spots on fruit.', ta: 'பழங்களில் கறுப்புப் புள்ளிகள்.' }, prevention: { en: 'Pruning.', ta: 'கத்தரித்தல்.' }, matchSymptoms: ['black_spots'] }
    ],
    guide: { season: { en: 'Feb-Mar', ta: 'பிப்-மார்' }, soil: { en: 'Deep Loam', ta: 'ஆழமான செம்மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'Org + NPK', ta: 'இயற்கை + உரம்' } }
  },
  {
    id: 'banana',
    category: 'fruits',
    name: { en: 'Banana', ta: 'வாழை' },
    diseases: [
      { id: 'sigatoka_ba', name: { en: 'Leaf Spot', ta: 'இலைப்புள்ளி' }, symptoms: { en: 'Pale yellow streaks.', ta: 'வெளிறிய மஞ்சள் கோடுகள்.' }, prevention: { en: 'Good drainage.', ta: 'நல்ல வடிகால்.' }, matchSymptoms: ['pale_yellow_spots'] },
      { id: 'wilt_ba', name: { en: 'Panama Wilt', ta: 'வாடல் நோய்' }, symptoms: { en: 'Yellow leaf margins.', ta: 'மஞ்சள் இலை ஓரங்கள்.' }, prevention: { en: 'Corm treatment.', ta: 'கிழங்கு நேர்த்தி.' }, matchSymptoms: ['leaf_edge_yellowing'] }
    ],
    guide: { season: { en: 'Year round', ta: 'ஆண்டு முழுவதும்' }, soil: { en: 'Rich Alluvial', ta: 'வண்டல் மண்' }, water: { en: 'High', ta: 'அதிகம்' }, fertilizer: { en: 'NPK 200:100:300', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'grapes',
    category: 'fruits',
    name: { en: 'Grapes', ta: 'திராட்சை' },
    diseases: [
      { id: 'mildew_gr', name: { en: 'Downy Mildew', ta: 'சாம்பல் நோய்' }, symptoms: { en: 'Translucent oil spots.', ta: 'எண்ணெய் போன்ற புள்ளிகள்.' }, prevention: { en: 'Bordeaux mix.', ta: 'போர்டோ கலவை.' }, matchSymptoms: ['oily_spots'] },
      { id: 'black_rot_gr', name: { en: 'Black Rot', ta: 'கறுப்பு அழுகல்' }, symptoms: { en: 'Shrivelled black berries.', ta: 'காய்ந்த கறுப்பு பழங்கள்.' }, prevention: { en: 'Clean vineyard.', ta: 'தோட்டத்தை சுத்தமாக வைத்திருத்தல்.' }, matchSymptoms: ['dark_seeds'] }
    ],
    guide: { season: { en: 'Dec-Jan', ta: 'டிச-ஜன' }, soil: { en: 'Sandy Loam', ta: 'மணல் கலந்த மண்' }, water: { en: 'Regular', ta: 'வழக்கமான' }, fertilizer: { en: 'Potash high', ta: 'சாம்பல் சத்து' } }
  },
  {
    id: 'papaya',
    category: 'fruits',
    name: { en: 'Papaya', ta: 'பப்பாளி' },
    diseases: [
      { id: 'ring_spot_pa', name: { en: 'Ring Spot', ta: 'வளையப் புள்ளி' }, symptoms: { en: 'Ring spots on fruit.', ta: 'பழங்களில் வளைய புள்ளிகள்.' }, prevention: { en: 'Netting.', ta: 'வலை அமைத்தல்.' }, matchSymptoms: ['rings_on_fruit'] },
      { id: 'foot_rot_pa', name: { en: 'Foot Rot', ta: 'தண்டு அழுகல்' }, symptoms: { en: 'Rotting at base.', ta: 'அடிப்பகுதி அழுகுதல்.' }, prevention: { en: 'Avoid waterlogging.', ta: 'நீர் தேங்குவதைத் தவிர்க்கவும்.' }, matchSymptoms: ['soft_rot'] }
    ],
    guide: { season: { en: 'Year round', ta: 'ஆண்டு முழுவதும்' }, soil: { en: 'Well-drained', ta: 'நல்ல வடிகால்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 250:250:500', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'guava',
    category: 'fruits',
    name: { en: 'Guava', ta: 'கொய்யா' },
    diseases: [
      { id: 'wilt_gu', name: { en: 'Guava Wilt', ta: 'வாடல் நோய்' }, symptoms: { en: 'Yellowing and drooping.', ta: 'மஞ்சளாகித் தொங்குதல்.' }, prevention: { en: 'Soil drench.', ta: 'மண் நனைத்தல்.' }, matchSymptoms: ['leaf_yellowing', 'wilting'] },
      { id: 'canker_gu', name: { en: 'Fruit Canker', ta: 'பழப்புள்ளி' }, symptoms: { en: 'Raised brown spots.', ta: 'உயர்த்தப்பட்ட பழுப்பு புள்ளிகள்.' }, prevention: { en: 'Zinc spray.', ta: 'துத்தநாக தெளிப்பு.' }, matchSymptoms: ['brown_spots'] }
    ],
    guide: { season: { en: 'Jun-Jul', ta: 'ஜூன்-ஜூலை' }, soil: { en: 'Alluvial', ta: 'வண்டல் மண்' }, water: { en: 'Low', ta: 'குறைவு' }, fertilizer: { en: 'NPK 600:400:600', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'pomegranate',
    category: 'fruits',
    name: { en: 'Pomegranate', ta: 'மாதுளை' },
    diseases: [
      { id: 'oily_pm', name: { en: 'Oily Spot', ta: 'எண்ணெய் புள்ளி' }, symptoms: { en: 'Black oily spots on skin.', ta: 'தோலில் கறுப்பு எண்ணெய் புள்ளிகள்.' }, prevention: { en: 'Streptomycin.', ta: 'ஸ்ட்ரெப்டோமைசின்.' }, matchSymptoms: ['oily_spots'] },
      { id: 'fruit_borer', name: { en: 'Fruit Borer', ta: 'பழத் துளைப்பான்' }, symptoms: { en: 'Holes in fruit.', ta: 'பழங்களில் துளைகள்.' }, prevention: { en: 'Bagging fruits.', ta: 'பழங்களை மூடுதல்.' }, matchSymptoms: ['holes_on_fruit'] }
    ],
    guide: { season: { en: 'Jun-Jul', ta: 'ஜூன்-ஜூலை' }, soil: { en: 'Loamy', ta: 'செம்மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 600:200:200', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'watermelon',
    category: 'fruits',
    name: { en: 'Watermelon', ta: 'தர்பூசணி' },
    diseases: [
      { id: 'anth_wm', name: { en: 'Anthracnose', ta: 'கருகல் நோய்' }, symptoms: { en: 'Sunken spots on melons.', ta: 'பழங்களில் பள்ளமான புள்ளிகள்.' }, prevention: { en: 'Clean seeds.', ta: 'சுத்தமான விதைகள்.' }, matchSymptoms: ['sunken_spots'] },
      { id: 'wilt_wm', name: { en: 'Fusarium Wilt', ta: 'வாடல் நோய்' }, symptoms: { en: 'Sudden vine wilting.', ta: 'திடீர் கொடி வாடல்.' }, prevention: { en: 'Rotation.', ta: 'சுழற்சி.' }, matchSymptoms: ['wilting'] }
    ],
    guide: { season: { en: 'Dec-Mar', ta: 'டிச-மார்' }, soil: { en: 'Sandy Soil', ta: 'மணல் மண்' }, water: { en: 'High', ta: 'அதிகம்' }, fertilizer: { en: 'NPK 100:50:50', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'lemon',
    category: 'fruits',
    name: { en: 'Lemon', ta: 'எலுமிச்சை' },
    diseases: [
      { id: 'canker_le', name: { en: 'Citrus Canker', ta: 'சிட்ரஸ் கேன்கர்' }, symptoms: { en: 'Cork-like lesions.', ta: 'சொறி போன்ற புள்ளிகள்.' }, prevention: { en: 'Streptocycline.', ta: 'ஸ்ட்ரெப்டோசைக்ளின்.' }, matchSymptoms: ['cork_lesions'] },
      { id: 'mottle_le', name: { en: 'Mottle Leaf', ta: 'தவிட்டு இலை' }, symptoms: { en: 'Yellow patches between veins.', ta: 'நரம்புகளுக்கு இடையே மஞ்சள் திட்டுகள்.' }, prevention: { en: 'Zinc sulphate.', ta: 'துத்தநாக சல்பேட்.' }, matchSymptoms: ['yellow_veins'] }
    ],
    guide: { season: { en: 'Jul-Aug', ta: 'ஜூலை-ஆகஸ்ட்' }, soil: { en: 'Well-drained', ta: 'நல்ல வடிகால்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'NPK 600:300:600', ta: 'உரமிடுதல்' } }
  },
  {
    id: 'jackfruit',
    category: 'fruits',
    name: { en: 'Jackfruit', ta: 'பலா' },
    diseases: [
      { id: 'rot_jf', name: { en: 'Fruit Rot', ta: 'பழ அழுகல்' }, symptoms: { en: 'Fuzzy growth on fruit.', ta: 'பழத்தில் மென்மையான வளர்ச்சி.' }, prevention: { en: 'Spray Copper.', ta: 'செம்பு தெளிக்கவும்.' }, matchSymptoms: ['soft_rot'] },
      { id: 'pink_dis', name: { en: 'Pink Disease', ta: 'இளஞ்சிவப்பு நோய்' }, symptoms: { en: 'Pinkish white growth on bark.', ta: 'பட்டையில் இளஞ்சிவப்பு வளர்ச்சி.' }, prevention: { en: 'Bordeaux paste.', ta: 'போர்டோ பசை.' }, matchSymptoms: ['pink_growth'] }
    ],
    guide: { season: { en: 'Jun-Jul', ta: 'ஜூன்-ஜூலை' }, soil: { en: 'Deep Red Loam', ta: 'ஆழமான செம்மண்' }, water: { en: 'Moderate', ta: 'மிதமானது' }, fertilizer: { en: 'Minimal', ta: 'குறைவான உரம்' } }
  },
  {
    id: 'coconut',
    category: 'fruits',
    name: { en: 'Coconut', ta: 'தென்னை' },
    diseases: [
      { id: 'bud_rot_co', name: { en: 'Bud Rot', ta: 'குருத்து அழுகல்' }, symptoms: { en: 'Yellowing of inner leaves.', ta: 'உள் இலைகள் மஞ்சளாகுதல்.' }, prevention: { en: 'Bordeaux spray.', ta: 'போர்டோ தெளிப்பு.' }, matchSymptoms: ['bud_yellowing'] },
      { id: 'wilt_co', name: { en: 'Thanjavur Wilt', ta: 'வாடல் நோய்' }, symptoms: { en: 'Bleeding from trunk.', ta: 'தண்டிலிருந்து வடியும் நீர்.' }, prevention: { en: 'Neem cake.', ta: 'வேப்பம் புண்ணாக்கு.' }, matchSymptoms: ['trunk_bleeding'] }
    ],
    guide: { season: { en: 'Year round', ta: 'ஆண்டு முழுவதும்' }, soil: { en: 'Coastal Alluvium', ta: 'கடலோர வண்டல் மண்' }, water: { en: 'High', ta: 'அதிகம்' }, fertilizer: { en: 'NPK 1.3:2:3.5 kg', ta: 'உரமிடுதல்' } }
  }
];

export const SYMPTOMS = [
  { id: 'spindle_spots', name: { en: 'Spindle-shaped spots', ta: 'கதிர் வடிவப் புள்ளிகள்' } },
  { id: 'grey_center', name: { en: 'Greyish center on spots', ta: 'சாம்பல் நிற மையம்' } },
  { id: 'yellow_stripes', name: { en: 'Wavy yellow stripes', ta: 'அலை அலையான மஞ்சள் கோடுகள்' } },
  { id: 'withered_leaves', name: { en: 'Withered leaves', ta: 'வாடிய இலைகள்' } },
  { id: 'brown_pustules', name: { en: 'Brown pustules', ta: 'பழுப்பு நிறக் கொப்புளங்கள்' } },
  { id: 'galls', name: { en: 'Galls on ears/heads', ta: 'கதிர்களில் கட்டிகள்' } },
  { id: 'black_spores', name: { en: 'Black powder/spores', ta: 'கறுப்புத் தூள்' } },
  { id: 'orange_spots', name: { en: 'Orange spots', ta: 'ஆரஞ்சு புள்ளிகள்' } },
  { id: 'white_growth', name: { en: 'White downy growth', ta: 'வெள்ளை வளர்ச்சி' } },
  { id: 'sticky_liquid', name: { en: 'Sticky honey-like liquid', ta: 'பிசுபிசுப்பான திரவம்' } },
  { id: 'black_grains', name: { en: 'Blackened grains', ta: 'கறுப்பு தானியங்கள்' } },
  { id: 'red_spots', name: { en: 'Red circular spots', ta: 'சிவப்பு வட்டப் புள்ளிகள்' } },
  { id: 'white_powder', name: { en: 'White powdery patches', ta: 'வெள்ளை சாம்பல் திட்டுக்கள்' } },
  { id: 'net_patterns', name: { en: 'Net-like patterns', ta: 'வலை போன்ற அமைப்பு' } },
  { id: 'elongated_spots', name: { en: 'Elongated brown spots', ta: 'நீளமான பழுப்பு புள்ளிகள்' } },
  { id: 'dark_seeds', name: { en: 'Dark/Black seeds', ta: 'கறுப்பு விதைகள்' } },
  { id: 'red_pustules', name: { en: 'Brick red pustules', ta: 'சிவப்பு கொப்புளங்கள்' } },
  { id: 'pale_leaves', name: { en: 'Pale/Discolored leaves', ta: 'வெளிறிய இலைகள்' } },
  { id: 'seedling_collapse', name: { en: 'Seedlings falling over', ta: 'நாற்றுகள் சாய்ந்து விழுதல்' } },
  { id: 'circular_spots', name: { en: 'Circular spots', ta: 'வட்டப் புள்ளிகள்' } },
  { id: 'black_roots', name: { en: 'Black/Rotten roots', ta: 'கறுப்பு/அழுகிய வேர்கள்' } },
  { id: 'bullseye_spots', name: { en: 'Bullseye-like spots', ta: 'இலக்கு போன்ற புள்ளிகள்' } },
  { id: 'wilting', name: { en: 'Plant wilting', ta: 'செடி வாடுதல்' } },
  { id: 'yellow_bottom_leaves', name: { en: 'Yellowing of bottom leaves', ta: 'கீழ் இலைகள் மஞ்சளாகுதல்' } },
  { id: 'tiny_leaves', name: { en: 'Tiny/Small leaves', ta: 'சிறிய இலைகள்' } },
  { id: 'stunting', name: { en: 'Stunted plant growth', ta: 'வளர்ச்சி குன்றுதல்' } },
  { id: 'brown_circles', name: { en: 'Circular brown spots', ta: 'வட்டமான பழுப்பு புள்ளிகள்' } },
  { id: 'tip_drying', name: { en: 'Drying from tips', ta: 'நுனிகள் காய்ந்து போதல்' } },
  { id: 'curled_leaves', name: { en: 'Leaves curling upwards', ta: 'இலைகள் சுருளுதல்' } },
  { id: 'purple_spots', name: { en: 'Purple spots/lesions', ta: 'ஊதா புள்ளிகள்' } },
  { id: 'watery_spots', name: { en: 'Water-soaked spots', ta: 'நீர் கோர்த்த புள்ளிகள்' } },
  { id: 'dark_spots', name: { en: 'Dark/Black spots', ta: 'கறுப்புப் புள்ளிகள்' } },
  { id: 'soft_rot', name: { en: 'Soft rot/Mushy tissue', ta: 'அழுகிப் போதல்' } },
  { id: 'v_shape_yellow', name: { en: 'V-shaped yellow spots', ta: 'V வடிவ மஞ்சள் புள்ளிகள்' } },
  { id: 'swollen_roots', name: { en: 'Swollen/Distorted roots', ta: 'வேர்களில் வீக்கம்' } },
  { id: 'brown_spots', name: { en: 'Small brown spots', ta: 'சிறிய பழுப்பு புள்ளிகள்' } },
  { id: 'narrow_leaves', name: { en: 'Narrow/Thread-like leaves', ta: 'குறுகிய இலைகள்' } },
  { id: 'yellow_veins', name: { en: 'Yellowing of veins', ta: 'நரம்புகள் மஞ்சளாகுதல்' } },
  { id: 'yellow_top_spots', name: { en: 'Yellow spots on leaf top', ta: 'இலையின் மேற்புறம் மஞ்சள் புள்ளிகள்' } },
  { id: 'pale_yellow_spots', name: { en: 'Pale yellow spots', ta: 'வெளிறிய மஞ்சள் புள்ளிகள்' } },
  { id: 'leaf_edge_yellowing', name: { en: 'Yellow leaf margins', ta: 'இலை ஓரங்கள் மஞ்சளாகுதல்' } },
  { id: 'oily_spots', name: { en: 'Translucent/Oily spots', ta: 'எண்ணெய் போன்ற புள்ளிகள்' } },
  { id: 'rings_on_fruit', name: { en: 'Ring-like spots on fruit', ta: 'பழத்தில் வளையப் புள்ளிகள்' } },
  { id: 'leaf_yellowing', name: { en: 'General leaf yellowing', ta: 'இலைகள் மஞ்சளாகுதல்' } },
  { id: 'holes_on_fruit', name: { en: 'Holes/Borer marks on fruit', ta: 'பழத்தில் துளைகள்' } },
  { id: 'sunken_spots', name: { en: 'Sunken spots on fruit', ta: 'பள்ளமான புள்ளிகள்' } },
  { id: 'cork_lesions', name: { en: 'Corky/Rough spots', ta: 'சொறி போன்ற புள்ளிகள்' } },
  { id: 'pink_growth', name: { en: 'Pinkish white growth', ta: 'இளஞ்சிவப்பு வளர்ச்சி' } },
  { id: 'bud_yellowing', name: { en: 'Yellowing of central bud', ta: 'குருத்து மஞ்சளாகுதல்' } },
  { id: 'trunk_bleeding', name: { en: 'Liquid bleeding from trunk', ta: 'தண்டிலிருந்து நீர் வடிதல்' } },
  { id: 'flower_dropping', name: { en: 'Excessive flower drop', ta: 'பூக்கள் உதிர்தல்' } }
];

export const WEATHER_DATA = {
  temp: '32°C',
  condition: { en: 'Sunny', ta: 'வெயில்' },
  advice: { en: 'Water plants in the evening to prevent evaporation.', ta: 'நீர் ஆவியாவதைத் தடுக்க மாலை வேளையில் செடிகளுக்கு நீர் ஊற்றவும்.' }
};

export const MARKET_PRICES = [
  { item: { en: 'Rice', ta: 'அரிசி' }, price: '₹2200', unit: { en: 'per quintal', ta: 'குவின்டாலுக்கு' } },
  { item: { en: 'Tomato', ta: 'தக்காளி' }, price: '₹30', unit: { en: 'per kg', ta: 'கிலோவிற்கு' } },
  { item: { en: 'Onion', ta: 'வெங்காயம்' }, price: '₹45', unit: { en: 'per kg', ta: 'கிலோவிற்கு' } },
  { item: { en: 'Mango', ta: 'மாம்பழம்' }, price: '₹80', unit: { en: 'per kg', ta: 'கிலோவிற்கு' } }
];
