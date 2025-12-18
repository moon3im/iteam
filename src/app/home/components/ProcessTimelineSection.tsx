// components/pages/sections/ProcessTimelineSection.tsx
"use client";

import { Target, Calendar, Palette, Code2, CheckCircle, Rocket } from "lucide-react";
import { ProcessTimeline } from "./ProcessTimeLine";

const etapesProcessus = [
  { 
    numero: "01", 
    titre: "Découverte", 
    description: "Immersion approfondie dans vos besoins business",
    icone: <Target className="w-6 h-6" />,
    couleur: "from-blue-500 to-cyan-500"
  },
  { 
    numero: "02", 
    titre: "Planification", 
    description: "Développement de la feuille de route stratégique",
    icone: <Calendar className="w-6 h-6" />,
    couleur: "from-cyan-500 to-emerald-500"
  },
  { 
    numero: "03", 
    titre: "Design", 
    description: "Prototypage interactif",
    icone: <Palette className="w-6 h-6" />,
    couleur: "from-emerald-500 to-green-500"
  },
  { 
    numero: "04", 
    titre: "Développement", 
    description: "Codage agile & construction",
    icone: <Code2 className="w-6 h-6" />,
    couleur: "from-green-500 to-lime-500"
  },
  { 
    numero: "05", 
    titre: "Tests", 
    description: "Assurance qualité & optimisation",
    icone: <CheckCircle className="w-6 h-6" />,
    couleur: "from-lime-500 to-yellow-500"
  },
  { 
    numero: "06", 
    titre: "Lancement", 
    description: "Déploiement & support continu",
    icone: <Rocket className="w-6 h-6" />,
    couleur: "from-yellow-500 to-orange-500"
  }
];

export const ProcessTimelineSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <ProcessTimeline etapes={etapesProcessus} />
    </section>
  );
};