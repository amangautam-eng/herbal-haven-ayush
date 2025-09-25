import tulsiImage from "@/assets/tulsi.jpg";
import ashwagandhaImage from "@/assets/ashwagandha.jpg";
import neemImage from "@/assets/neem.jpg";
import turmericImage from "@/assets/turmeric.jpg";

export interface Plant {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  description: string;
  ayushUses: {
    ayurveda?: string;
    unani?: string;
    siddha?: string;
    homeopathy?: string;
  };
  cultivation: string;
  ailments: string[];
  position: { x: number; y: number };
}

export const plantsData: Plant[] = [
  {
    id: "tulsi",
    name: "Tulsi (Holy Basil)",
    scientificName: "Ocimum sanctum",
    image: tulsiImage,
    description: "Sacred basil known for its aromatic leaves and spiritual significance. A powerful adaptogen with anti-inflammatory and antimicrobial properties.",
    ayushUses: {
      ayurveda: "Used for respiratory disorders, stress relief, and immune system enhancement. Considered sacred and used in daily worship.",
      unani: "Prescribed for cold, cough, and bronchial disorders. Used as a brain tonic and for treating digestive issues.",
      siddha: "Used for treating fever, respiratory problems, and as a general health tonic."
    },
    cultivation: "Grows best in well-drained soil with partial to full sunlight. Water regularly but avoid waterlogging. Can be grown in pots or garden beds.",
    ailments: ["cough", "cold", "stress", "fever", "respiratory", "immunity"],
    position: { x: 20, y: 30 }
  },
  {
    id: "ashwagandha",
    name: "Ashwagandha",
    scientificName: "Withania somnifera",
    image: ashwagandhaImage,
    description: "Known as Indian winter cherry, this powerful adaptogen helps the body cope with stress and supports overall vitality.",
    ayushUses: {
      ayurveda: "Premier rasayana (rejuvenative) herb used for strength, energy, and longevity. Excellent for nervous system disorders and general debility.",
      unani: "Used as a strengthening tonic and for treating weakness, insomnia, and nervous disorders."
    },
    cultivation: "Thrives in dry, sunny locations with well-drained soil. Drought-tolerant once established. Harvest roots after 6-7 months.",
    ailments: ["stress", "anxiety", "weakness", "insomnia", "fatigue", "immunity"],
    position: { x: 75, y: 25 }
  },
  {
    id: "neem",
    name: "Neem",
    scientificName: "Azadirachta indica",
    image: neemImage,
    description: "The village pharmacy tree, known for its powerful antibacterial, antiviral, and antifungal properties.",
    ayushUses: {
      ayurveda: "Used for skin disorders, diabetes, and as a natural pesticide. All parts of the tree have medicinal value.",
      unani: "Prescribed for skin diseases, fever, and as a blood purifier.",
      siddha: "Used for treating skin conditions, diabetes, and digestive disorders."
    },
    cultivation: "Hardy tree that grows in various soil types. Prefers warm climate and can withstand drought. Requires minimal care once established.",
    ailments: ["skin conditions", "diabetes", "fever", "infection", "blood purification"],
    position: { x: 45, y: 15 }
  },
  {
    id: "turmeric",
    name: "Turmeric",
    scientificName: "Curcuma longa",
    image: turmericImage,
    description: "Golden spice with powerful anti-inflammatory and antioxidant properties. Essential in both cuisine and medicine.",
    ayushUses: {
      ayurveda: "Used for inflammation, digestive disorders, and wound healing. Considered sacred and used in ceremonies.",
      unani: "Prescribed for liver disorders, skin conditions, and as an anti-inflammatory agent.",
      siddha: "Used for treating wounds, skin diseases, and digestive problems."
    },
    cultivation: "Requires warm, humid climate with well-drained soil. Plant rhizomes during monsoon. Harvest after 8-10 months.",
    ailments: ["inflammation", "arthritis", "wounds", "digestion", "liver", "skin"],
    position: { x: 60, y: 70 }
  },
  {
    id: "brahmi",
    name: "Brahmi",
    scientificName: "Bacopa monnieri",
    image: "/placeholder.svg",
    description: "Brain tonic herb known for enhancing memory, concentration, and overall cognitive function.",
    ayushUses: {
      ayurveda: "Premier brain tonic used for improving memory, concentration, and mental clarity. Used in treating anxiety and epilepsy.",
      unani: "Used as a brain tonic and for treating mental disorders and memory loss."
    },
    cultivation: "Aquatic or semi-aquatic herb that grows in wet soil or shallow water. Requires consistent moisture and partial shade.",
    ailments: ["memory", "concentration", "anxiety", "mental clarity", "epilepsy"],
    position: { x: 30, y: 60 }
  },
  {
    id: "aloevera",
    name: "Aloe Vera",
    scientificName: "Aloe barbadensis",
    image: "/placeholder.svg",
    description: "Succulent plant known for its healing gel, excellent for skin conditions and digestive health.",
    ayushUses: {
      ayurveda: "Used for skin disorders, digestive problems, and wound healing. The gel is cooling and anti-inflammatory.",
      unani: "Prescribed for skin conditions, constipation, and liver disorders.",
      homeopathy: "Used for burns, skin conditions, and digestive complaints."
    },
    cultivation: "Drought-tolerant succulent that prefers well-drained soil and bright, indirect sunlight. Water sparingly and allow soil to dry between waterings.",
    ailments: ["burns", "skin conditions", "wounds", "constipation", "digestive"],
    position: { x: 80, y: 55 }
  },
  {
    id: "amla",
    name: "Amla (Indian Gooseberry)",
    scientificName: "Phyllanthus emblica",
    image: "/placeholder.svg",
    description: "Vitamin C powerhouse fruit, considered one of the best rejuvenative herbs in Ayurveda.",
    ayushUses: {
      ayurveda: "Supreme rasayana used for longevity, immunity, and overall health. Excellent for hair, skin, and digestive health.",
      unani: "Used as a tonic for liver, heart, and brain. Prescribed for anemia and general weakness.",
      siddha: "Used for treating diabetes, anemia, and as a general health tonic."
    },
    cultivation: "Hardy tree that grows in various climates. Prefers well-drained soil and full sunlight. Fruits ripen in winter months.",
    ailments: ["immunity", "hair loss", "anemia", "diabetes", "aging", "digestion"],
    position: { x: 15, y: 75 }
  },
  {
    id: "ginger",
    name: "Ginger",
    scientificName: "Zingiber officinale",
    image: "/placeholder.svg",
    description: "Warming spice and medicine, excellent for digestive health and nausea relief.",
    ayushUses: {
      ayurveda: "Universal medicine used for digestive disorders, nausea, and respiratory conditions. Enhances bioavailability of other herbs.",
      unani: "Used for digestive problems, cold, and as a warming tonic.",
      siddha: "Prescribed for indigestion, respiratory disorders, and arthritis."
    },
    cultivation: "Tropical rhizome that requires warm, humid conditions and well-drained soil. Plant during spring and harvest after 8-12 months.",
    ailments: ["nausea", "digestion", "cold", "arthritis", "motion sickness"],
    position: { x: 55, y: 45 }
  },
  {
    id: "mint",
    name: "Mint",
    scientificName: "Mentha",
    image: "/placeholder.svg",
    description: "Cooling aromatic herb excellent for digestive health and respiratory conditions.",
    ayushUses: {
      ayurveda: "Used for digestive disorders, respiratory problems, and as a cooling agent. Excellent for Pitta disorders.",
      unani: "Prescribed for digestive problems, nausea, and headaches.",
      siddha: "Used for treating indigestion, nausea, and respiratory conditions."
    },
    cultivation: "Fast-growing herb that prefers moist soil and partial shade. Can be invasive, so grow in containers. Harvest leaves regularly.",
    ailments: ["indigestion", "nausea", "headache", "respiratory", "cooling"],
    position: { x: 35, y: 40 }
  },
  {
    id: "shatavari",
    name: "Shatavari",
    scientificName: "Asparagus racemosus",
    image: "/placeholder.svg",
    description: "Queen of herbs for women's health, supporting reproductive system and overall vitality.",
    ayushUses: {
      ayurveda: "Premier women's tonic used for reproductive health, lactation support, and as a general rejuvenative.",
      unani: "Used for women's health issues and as a strengthening tonic.",
      siddha: "Prescribed for female reproductive disorders and general weakness."
    },
    cultivation: "Climbing plant that prefers well-drained soil and partial shade. Harvest tuberous roots after 18-20 months of growth.",
    ailments: ["women's health", "lactation", "fertility", "hormonal balance", "strength"],
    position: { x: 70, y: 80 }
  }
];