// components/pages/sections/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Code2, Smartphone as Phone, Monitor, Server, CheckCircle, TrendingUp, Zap, Users, Shield, Bell, Database as DbIcon, Layers } from "lucide-react";
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
    icone: <Code2 className="w-8 h-8" />,
    titre: "Développement Web",
    description: "Applications web modernes construites avec des technologies de pointe pour des performances optimales.",
    fonctionnalites: ["React/Next.js", "TypeScript", "Responsive", "PWA"],
    degrade: "from-blue-500 to-cyan-500",
    listeFonctionnalites: [
      { texte: "Composants React Sur Mesure", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Optimisation SEO", icone: <TrendingUp className="w-4 h-4" /> },
      { texte: "Réglage Performance", icone: <Zap className="w-4 h-4" /> }
    ]
  },
  {
    icone: <Phone className="w-8 h-8" />,
    titre: "Applications Mobiles",
    description: "Solutions mobiles natives et multiplateformes pour iOS et Android.",
    fonctionnalites: ["React Native", "Flutter", "iOS/Android", "App Store"],
    degrade: "from-purple-500 to-pink-500",
    listeFonctionnalites: [
      { texte: "Déploiement App Store", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Notifications Push", icone: <Bell className="w-4 h-4" /> },
      { texte: "Support Hors-ligne", icone: <DbIcon className="w-4 h-4" /> }
    ]
  },
  {
    icone: <Monitor className="w-8 h-8" />,
    titre: "Design UI/UX",
    description: "Designs centrés utilisateur qui combinent esthétique et fonctionnalité exceptionnelle.",
    fonctionnalites: ["Figma", "Prototypage", "Tests Utilisateurs", "Systèmes Design"],
    degrade: "from-cyan-500 to-blue-500",
    listeFonctionnalites: [
      { texte: "Prototypes Interactifs", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Recherche Utilisateur", icone: <Users className="w-4 h-4" /> },
      { texte: "Systèmes Design", icone: <Layers className="w-4 h-4" /> }
    ]
  },
  {
    icone: <Server className="w-8 h-8" />,
    titre: "Solutions Cloud",
    description: "Infrastructure cloud évolutive et déploiement pour applications d'entreprise.",
    fonctionnalites: ["AWS/Azure", "DevOps", "Microservices", "Kubernetes"],
    degrade: "from-indigo-500 to-blue-500",
    listeFonctionnalites: [
      { texte: "Monitoring 24/7", icone: <CheckCircle className="w-4 h-4" /> },
      { texte: "Auto-scaling", icone: <TrendingUp className="w-4 h-4" /> },
      { texte: "Audit de Sécurité", icone: <Shield className="w-4 h-4" /> }
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