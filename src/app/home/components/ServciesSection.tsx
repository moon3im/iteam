// components/pages/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Smartphone as Phone, Monitor, Server, CheckCircle, TrendingUp, Zap, Users, Shield, Bell, Database as DbIcon, Layers, Globe, PenTool, Video, Camera, Megaphone } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ServiceCard } from "../components/ServiceCard";

interface ServiceItem {
  icone: React.ReactNode;
  titre: string;
  description: string;
  fonctionnalites: string[];
  degrade: string;
  listeFonctionnalites: Array<{ texte: string; icone: React.ReactNode }>;
}
const services: ServiceItem[] = [
  {
    icone: <Globe className="w-8 h-8" />,
    titre: "Solutions Digitales",
    description: "Des solutions web modernes et fiables pour digitaliser et développer votre activité.",
    fonctionnalites: [
      "Création de sites web vitrine & sur mesure",
      "Développement web et solutions digitales personnalisées",
      "Applications web professionnelles",
      "Hébergement web sécurisé et performant",
      "Maintenance et support technique",
      "Intégration de services et outils digitaux"
    ],
    degrade: "from-blue-500 to-cyan-500",
    listeFonctionnalites: [
      { texte: "Solutions Web & Digitales", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Adapté à vos besoins métiers", icone: <Zap className="w-4 h-4" /> },
      { texte: "Support et maintenance", icone: <Shield className="w-4 h-4" /> }
    ]
  },
  {
    icone: <PenTool className="w-8 h-8" />,
    titre: "Design & Branding",
    description: "Une identité visuelle forte pour marquer les esprits et valoriser votre marque.",
    fonctionnalites: [
      "Création d’identité visuelle & branding",
      "Design graphique print & digital",
      "Impressions professionnelles tous types",
      "Création de supports publicitaires",
      "Chartes graphiques & déclinaisons",
      "Visuels marketing et promotionnels"
    ],
    degrade: "from-purple-500 to-pink-500",
    listeFonctionnalites: [
      { texte: "Identité Visuelle & Création Graphique", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Supports print & digital", icone: <Layers className="w-4 h-4" /> },
      { texte: "Branding impactant", icone: <Sparkles className="w-4 h-4" /> }
    ]
  },
  {
    icone: <Video className="w-8 h-8" />,
    titre: "Production Audiovisuelle",
    description: "Du contenu visuel professionnel pour renforcer votre communication.",
    fonctionnalites: [
      "Photographie professionnelle",
      "Vidéos promotionnelles & corporate",
      "Reels, stories et formats courts",
      "Création de contenu pour réseaux sociaux",
      "Montage et post-production",
      "Contenu visuel orienté marketing"
    ],
    degrade: "from-cyan-500 to-blue-500",
    listeFonctionnalites: [
      { texte: "Production Photo & Vidéo", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Contenu professionnel", icone: <Camera className="w-4 h-4" /> },
      { texte: "Marketing visuel", icone: <Zap className="w-4 h-4" /> }
    ]
  },
  {
    icone: <Megaphone className="w-8 h-8" />,
    titre: "Marketing & Communication",
    description: "Des stratégies efficaces pour augmenter votre visibilité et vos résultats.",
    fonctionnalites: [
      "Marketing digital",
      "Gestion professionnelle des réseaux sociaux",
      "Création de stratégies de contenu",
      "Publicité en ligne (Meta, campagnes sponsorisées)",
      "Stratégie de communication globale",
      "Analyse, suivi et optimisation des performances"
    ],
    degrade: "from-indigo-500 to-blue-500",
    listeFonctionnalites: [
      { texte: "Stratégie Marketing & Communication", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Optimisation visibilité", icone: <TrendingUp className="w-4 h-4" /> },
      { texte: "Performance et analyse", icone: <Zap className="w-4 h-4" /> }
    ]
  }
];


export const ServicesSection = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <EnTeteSection />
        <GrilleServices services={services} />
      </div>
    </section>
  );
};

const EnTeteSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-20"
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 mb-6">
        <Sparkles className="w-5 h-5 text-cyan-400" />
        <span className="text-sm font-semibold text-cyan-300">Notre Expertise</span>
      </div>
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
        Services Digitaux <GradientText>Complets</GradientText>
      </h2>
      <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
        Solutions digitales de bout en bout conçues pour faire prospérer votre entreprise dans le paysage moderne.
      </p>
    </motion.div>
  );
};

interface GrilleServicesProps {
  services: ServiceItem[];
}

const GrilleServices = ({ services }: GrilleServicesProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} index={index} />
      ))}
    </div>
  );
};