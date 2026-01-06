import { 
  Smile, 
  Droplets, 
  Sparkles, 
  Zap, 
  Activity, 
  MessageCircle, 
  Heart, 
  Scissors, 
  FlaskConical,
  Frown,
  Droplet,
  Hand,
  Scan,
  CircleDot,
  Eye,
  Layers,
  Syringe,
  Pill,
  Dna,
  TestTube,
  PenTool,
  Leaf,
  Waves
} from "lucide-react";
import beforeTreatment1 from "@/assets/before-treatment-1.png";
import afterTreatment1 from "@/assets/after-treatment-1.png";
import beforeTreatment2 from "@/assets/before-treatment-2.png";
import afterTreatment2 from "@/assets/after-treatment-2.png";
import beforeTreatment3 from "@/assets/before-treatment-3.png";
import afterTreatment3 from "@/assets/after-treatment-3.png";

export interface Treatment {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  longDescription: string;
  benefits: string[];
  beforeImage?: string;
  afterImage?: string;
  duration?: string;
  recovery?: string;
  results?: string;
  featured?: boolean;
}

// Tratamientos destacados (aparecen en home)
export const treatments: Treatment[] = [
  {
    id: "consulta-medicina-estetica",
    icon: MessageCircle,
    title: "Consulta de valoración de medicina estética",
    description: "Primera consulta para evaluar tus necesidades y diseñar un plan personalizado",
    longDescription: "La consulta de valoración es el primer paso fundamental antes de cualquier tratamiento. Realizamos un análisis completo de tu rostro, evaluamos tu piel y diseñamos un plan de tratamiento totalmente personalizado. Es el momento perfecto para resolver todas tus dudas y conocernos.",
    benefits: [
      "Análisis facial completo y personalizado",
      "Evaluación del estado de tu piel",
      "Plan de tratamiento diseñado a medida",
      "Resolución de todas tus dudas con transparencia",
      "Presupuesto detallado sin compromiso"
    ],
    duration: "30-45 min",
    recovery: "-",
    results: "-",
    featured: true
  },
  {
    id: "consulta-capilar",
    icon: Scissors,
    title: "Consulta de valoración capilar",
    description: "Consulta especializada para evaluar la salud de tu cabello y cuero cabelludo",
    longDescription: "La consulta de valoración capilar es el paso más importante antes de cualquier tratamiento capilar. Está diseñada para diagnosticar el estado de tu cabello y cuero cabelludo. Evaluamos las posibles causas de caída o debilitamiento capilar y diseñamos un protocolo de tratamiento personalizado.",
    benefits: [
      "Diagnóstico completo del cuero cabelludo",
      "Evaluación de las causas de la caída capilar",
      "Plan de tratamiento capilar personalizado",
      "Recomendaciones de cuidado diario",
      "Seguimiento de evolución"
    ],
    duration: "30-45 min",
    recovery: "-",
    results: "-",
    featured: true
  },
  {
    id: "rutina-dermocosmetica",
    icon: FlaskConical,
    title: "Rutina dermocosmética personalizada",
    description: "Protocolo personalizado de cuidado de la piel para tu día a día",
    longDescription: "Diseñamos una rutina de cuidado facial totalmente personalizada según tu tipo de piel, tus necesidades y tu estilo de vida. Seleccionamos los productos más adecuados y te enseñamos cómo aplicarlos correctamente para maximizar sus beneficios.",
    benefits: [
      "Análisis completo de tu tipo de piel",
      "Selección de productos específicos para ti",
      "Guía de aplicación paso a paso",
      "Seguimiento de resultados",
      "Ajustes según evolución de tu piel"
    ],
    duration: "30 min",
    recovery: "-",
    results: "Progresivo",
    featured: true
  },
  {
    id: "neuromoduladores",
    icon: Smile,
    title: "Neuromoduladores en tercio superior",
    description: "Tratamiento de arrugas de expresión con resultados naturales y duraderos",
    longDescription: "Los neuromoduladores son un tratamiento médico-estético que actúa relajando la musculatura facial responsable de las arrugas de expresión. Su aplicación es precisa y segura, permitiendo suavizar líneas de frente, entrecejo y patas de gallo sin perder naturalidad en la expresión facial.",
    benefits: [
      "Reducción visible de arrugas de expresión en 3-14 días",
      "Resultados naturales que respetan tu expresión facial",
      "Sin tiempo de recuperación, puedes continuar con tu día normal",
      "Efecto preventivo: previene la formación de nuevas arrugas",
      "Duración de 3-5 meses con posibilidad de mantenimiento"
    ],
    beforeImage: beforeTreatment1,
    afterImage: afterTreatment1,
    duration: "15-30 min",
    recovery: "Inmediata",
    results: "3-14 días",
    featured: true
  },
  {
    id: "bruxismo",
    icon: Frown,
    title: "Bruxismo",
    description: "Tratamiento con neuromoduladores para aliviar la tensión mandibular",
    longDescription: "El tratamiento del bruxismo con neuromoduladores relaja los músculos maseteros, aliviando la tensión mandibular y reduciendo el apretamiento involuntario de los dientes. Además de mejorar el dolor y la tensión, consigue afinar el contorno facial.",
    benefits: [
      "Alivio del dolor mandibular y tensión",
      "Reducción del apretamiento de dientes",
      "Afinamiento del contorno facial",
      "Prevención del desgaste dental",
      "Mejora de la calidad del sueño"
    ],
    duration: "15-20 min",
    recovery: "Inmediata",
    results: "1-2 semanas"
  },
  {
    id: "hiperhidrosis",
    icon: Droplet,
    title: "Hiperhidrosis",
    description: "Tratamiento para la sudoración excesiva en axilas y manos",
    longDescription: "El tratamiento de hiperhidrosis con neuromoduladores reduce la sudoración excesiva en zonas como axilas y manos. Las microinyecciones bloquean temporalmente las glándulas sudoríparas, proporcionando una solución efectiva y duradera.",
    benefits: [
      "Reducción significativa de la sudoración",
      "Mejora de la calidad de vida",
      "Sin tiempo de recuperación",
      "Resultados duraderos de 6-9 meses",
      "Tratamiento rápido y poco invasivo"
    ],
    duration: "20-30 min",
    recovery: "Inmediata",
    results: "3-7 días"
  },
  {
    id: "estimulacion-colageno",
    icon: Sparkles,
    title: "Estimulación de colágeno",
    description: "Tratamiento bioestimulador para rostro, cuello y manos",
    longDescription: "La estimulación de colágeno es un tratamiento que activa la producción natural de colágeno en tu piel. Aplicable en rostro, cuello y manos, mejora la firmeza, elasticidad y calidad de la piel de forma progresiva y natural.",
    benefits: [
      "Estimulación natural del colágeno",
      "Mejora la firmeza y elasticidad",
      "Resultados progresivos y naturales",
      "Aplicable en rostro, cuello y manos",
      "Rejuvenecimiento desde el interior"
    ],
    duration: "30-45 min",
    recovery: "24-48 horas",
    results: "A partir del 3º mes"
  },
  {
    id: "tratamiento-labios",
    icon: Heart,
    title: "Tratamiento de labios (aumento y/o hidratación)",
    description: "Realza y define tus labios con resultados naturales y armónicos",
    longDescription: "El tratamiento de labios con ácido hialurónico permite aumentar el volumen, definir el contorno y mejorar la hidratación de los labios. Trabajamos respetando siempre la armonía facial para conseguir unos labios más bonitos y naturales, adaptados a tus rasgos.",
    benefits: [
      "Aumento de volumen natural y armónico",
      "Definición del contorno labial",
      "Hidratación profunda de los labios",
      "Corrección de asimetrías",
      "Resultados inmediatos y duraderos"
    ],
    beforeImage: beforeTreatment2,
    afterImage: afterTreatment2,
    duration: "20-30 min",
    recovery: "24-48 horas",
    results: "Inmediato",
    featured: true
  },
  {
    id: "tratamiento-menton",
    icon: Scan,
    title: "Tratamiento de mentón",
    description: "Definición y proyección del mentón para una armonía facial perfecta",
    longDescription: "El tratamiento de mentón con ácido hialurónico permite proyectar, definir y equilibrar el mentón respecto al resto del rostro. Es clave para conseguir un perfil armónico y una mandíbula más definida.",
    benefits: [
      "Proyección y definición del mentón",
      "Mejora del perfil facial",
      "Armonización de los rasgos",
      "Definición de la línea mandibular",
      "Resultados inmediatos y naturales"
    ],
    duration: "20-30 min",
    recovery: "24-48 horas",
    results: "Inmediato"
  },
  {
    id: "codigo-barras",
    icon: CircleDot,
    title: "Tratamiento de código de barras",
    description: "Corrección de las arrugas periorales del labio superior",
    longDescription: "El tratamiento del código de barras elimina las arrugas verticales que aparecen en el labio superior. Mediante ácido hialurónico de alta precisión, rellenamos estas líneas finas consiguiendo un labio más liso y juvenil.",
    benefits: [
      "Eliminación de arrugas periorales",
      "Labio superior más liso y definido",
      "Aspecto más juvenil",
      "Mejora la aplicación del maquillaje",
      "Resultados naturales e inmediatos"
    ],
    duration: "15-20 min",
    recovery: "24 horas",
    results: "Inmediato"
  },
  {
    id: "tratamiento-ojeras",
    icon: Eye,
    title: "Tratamiento de ojeras",
    description: "Corrección de ojeras con ácido hialurónico para una mirada descansada",
    longDescription: "El tratamiento de ojeras con ácido hialurónico rellena el surco lagrimal y mejora el aspecto de las ojeras oscuras o hundidas. Consigue una mirada más descansada, luminosa y juvenil de forma inmediata.",
    benefits: [
      "Corrección del surco lagrimal",
      "Mirada más descansada y luminosa",
      "Disimula las ojeras oscuras",
      "Rejuvenecimiento de la mirada",
      "Resultados naturales e inmediatos"
    ],
    duration: "20-30 min",
    recovery: "24-48 horas",
    results: "Inmediato"
  },
  {
    id: "full-face",
    icon: Layers,
    title: "Full face",
    description: "Tratamiento integral combinando AH, neuromoduladores y/o estimuladores",
    longDescription: "El tratamiento Full Face es un protocolo completo de rejuvenecimiento facial que combina diferentes técnicas según tus necesidades: ácido hialurónico, neuromoduladores y/o estimuladores de colágeno. Un abordaje integral para resultados armónicos y naturales.",
    benefits: [
      "Rejuvenecimiento facial completo",
      "Combinación personalizada de técnicas",
      "Resultados armónicos y naturales",
      "Abordaje de múltiples zonas",
      "Plan diseñado a medida"
    ],
    duration: "60-90 min",
    recovery: "24-48 horas",
    results: "Progresivo"
  },
  {
    id: "skin-boosters",
    icon: Droplets,
    title: "Skinbooster",
    description: "Hidratación intensiva que mejora la calidad y luminosidad de la piel",
    longDescription: "Los skinboosters son tratamientos de bioestimulación que aportan una hidratación profunda e intensa a la piel. Mediante microinyecciones de ácido hialurónico de última generación, conseguimos mejorar la textura, luminosidad y elasticidad de la piel desde las capas más profundas.",
    benefits: [
      "Piel visiblemente más luminosa y radiante",
      "Mejora la textura y suavidad de la piel",
      "Hidratación profunda y duradera hasta 6 meses",
      "Estimula la producción natural de colágeno",
      "Ideal para rostro, cuello, escote y manos"
    ],
    beforeImage: beforeTreatment3,
    afterImage: afterTreatment3,
    duration: "30 min",
    recovery: "24 horas",
    results: "2-3 semanas",
    featured: true
  },
  {
    id: "vitaminas",
    icon: Pill,
    title: "Vitaminas",
    description: "Cocktail vitamínico para revitalizar y nutrir la piel en profundidad",
    longDescription: "El tratamiento con vitaminas inyectables aporta un cocktail de nutrientes esenciales directamente a la piel. Vitaminas, minerales y antioxidantes que revitalizan, nutren y mejoran la calidad de tu piel desde el interior.",
    benefits: [
      "Nutrición profunda de la piel",
      "Aporte de vitaminas y antioxidantes",
      "Piel más luminosa y saludable",
      "Prevención del envejecimiento",
      "Mejora del aspecto general"
    ],
    duration: "20-30 min",
    recovery: "Inmediata",
    results: "Progresivo"
  },
  {
    id: "polinucleotidos",
    icon: Dna,
    title: "Polinucleótidos",
    description: "Regeneración celular y bioestimulación avanzada para tu piel",
    longDescription: "Los polinucleótidos son una innovadora técnica de bioestimulación que regenera las células de la piel a nivel profundo. Mejoran la hidratación, elasticidad y firmeza, siendo especialmente efectivos en zonas delicadas como el contorno de ojos. Los resultados varían en función del número de sesiones realizadas.",
    benefits: [
      "Regeneración celular profunda",
      "Mejora de hidratación y elasticidad",
      "Ideal para contorno de ojos",
      "Efecto tensor natural",
      "Resultados progresivos y duraderos"
    ],
    duration: "30 min",
    recovery: "24 horas",
    results: "Según protocolo"
  },
  {
    id: "prp-facial",
    icon: TestTube,
    title: "PRP facial",
    description: "Plasma rico en plaquetas para rejuvenecimiento natural",
    longDescription: "El PRP (Plasma Rico en Plaquetas) es un tratamiento regenerativo que utiliza tu propia sangre. Se extraen y concentran los factores de crecimiento para inyectarlos en la piel, estimulando la regeneración natural y el rejuvenecimiento.",
    benefits: [
      "Tratamiento 100% natural con tu propia sangre",
      "Estimula la regeneración celular",
      "Mejora la textura y luminosidad",
      "Reduce arrugas finas",
      "Resultados progresivos y naturales"
    ],
    duration: "45-60 min",
    recovery: "24-48 horas",
    results: "4-6 semanas"
  },
  {
    id: "skin-pen",
    icon: PenTool,
    title: "Skin pen",
    description: "Microneedling profesional para estimular el colágeno",
    longDescription: "El Skin Pen es un dispositivo de microneedling que crea microcanales en la piel, estimulando la producción de colágeno y elastina. Mejora cicatrices, arrugas finas, poros dilatados y textura de la piel de forma efectiva.",
    benefits: [
      "Estimulación de colágeno y elastina",
      "Mejora de cicatrices de acné",
      "Reducción de poros dilatados",
      "Textura de piel más uniforme",
      "Potencia la absorción de activos"
    ],
    duration: "30-45 min",
    recovery: "24-48 horas",
    results: "2-4 semanas"
  },
  {
    id: "mesoterapia-capilar",
    icon: Syringe,
    title: "Mesoterapia capilar",
    description: "Tratamiento para fortalecer y revitalizar el cabello con factores de crecimiento y fármacos",
    longDescription: "La mesoterapia capilar consiste en microinyecciones de vitaminas y fármacos directamente en el cuero cabelludo. Fortalece el cabello, reduce la caída y estimula el crecimiento de nuevo pelo.",
    benefits: [
      "Fortalecimiento del cabello",
      "Reducción de la caída capilar",
      "Estimulación del crecimiento",
      "Nutrición del cuero cabelludo",
      "Mejora de la densidad capilar"
    ],
    duration: "30 min",
    recovery: "Inmediata",
    results: "2-3 meses"
  },
  {
    id: "aquapure",
    icon: Waves,
    title: "Aquapure",
    description: "Limpieza facial profunda con tecnología avanzada",
    longDescription: "Aquapure es un tratamiento de limpieza facial profunda que combina exfoliación, extracción e hidratación mediante tecnología de punta. Limpia los poros en profundidad mientras nutre e hidrata la piel, dejándola luminosa y renovada.",
    benefits: [
      "Limpieza profunda de poros",
      "Exfoliación suave y efectiva",
      "Hidratación intensiva",
      "Piel luminosa al instante",
      "Sin tiempo de recuperación"
    ],
    duration: "45-60 min",
    recovery: "Inmediata",
    results: "Inmediato"
  }
];

// Función para obtener solo los tratamientos destacados
export const getFeaturedTreatments = (): Treatment[] => {
  return treatments.filter(t => t.featured);
};

// Función para obtener todos los tratamientos
export const getAllTreatments = (): Treatment[] => {
  return treatments;
};

export const getTreatmentById = (id: string): Treatment | undefined => {
  return treatments.find(treatment => treatment.id === id);
};
