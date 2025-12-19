// components/pages/Services.tsx
"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
const TechBackground = dynamic(() => import('@/components/ui/TechBackground').then(mod => mod.TechBackground), { ssr: false, loading: () => null });
const FloatingParticles = dynamic(() => import('./components/FloatingParticles').then(mod => mod.FloatingParticles), { ssr: false, loading: () => null });
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Shield,
  Brain,
  Users,
  Globe,
  Camera,
  BarChart3
} from "lucide-react";
import { ServicesHero } from "./components/Serviceshero";
import { ServicesMindMapSection } from "./components/ServicesMindMapSection";
import { ServicesDetails } from "./components/ServicesDetails";
import { ServicesMethodology } from "./components/ServicesMethodology";
import { ServicesCTA } from "./components/ServicesCTA";

interface ServiceNode {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  position: { x: number; y: number };
  features: string[];
  details: {
    title: string;
    description: string;
    items: string[];
  };
}

export const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);

 const services: ServiceNode[] = [
  {
    id: 1,
    title: "Création de Sites Web",
    icon: <Globe className="w-8 h-8" />,
    description: "Sites vitrines et sur mesure, performants et adaptés à votre image",
    color: "from-blue-500 to-cyan-500",
    position: { x: 70, y: 30 },
    features: ["Sites Vitrine", "Sites Sur Mesure", "Design Responsive", "Optimisation SEO"],
    details: {
      title: "Solutions Web Complètes",
      description: "Nous concevons des sites web modernes et évolutifs, adaptés à vos besoins et à votre image de marque.",
      items: [
        "Sites Vitrine Professionnels",
        "Sites Sur Mesure",
        "Optimisation Responsive & Mobile",
        "SEO & Performance",
        "Intégration avec CRM et outils tiers",
        "Maintenance & Support"
      ]
    }
  },
  {
    id: 2,
    title: "Développement de Solutions Digitales",
    icon: <Code2 className="w-8 h-8" />,
    description: "Applications web et plateformes digitales pour automatiser et optimiser vos processus",
    color: "from-purple-500 to-pink-500",
    position: { x: 30, y: 50 },
    features: ["Applications Web", "Intégration API", "Automatisation", "PWA"],
    details: {
      title: "Applications Web & Digitales",
      description: "Nous développons des solutions digitales personnalisées pour répondre à vos besoins métiers.",
      items: [
        "Applications Web Sur Mesure",
        "Plateformes E-commerce",
        "Systèmes CRM & ERP",
        "Tableaux de Bord et Reporting",
        "Intégration d'API",
        "Applications Web Progressives"
      ]
    }
  },
  {
    id: 3,
    title: "Design & Branding",
    icon: <Palette className="w-8 h-8" />,
    description: "Création d'identité visuelle et design graphique cohérents et impactants",
    color: "from-cyan-500 to-emerald-500",
    position: { x: 50, y: 70 },
    features: ["Identité Visuelle", "Supports Print & Digital", "Wireframes", "Prototypage"],
    details: {
      title: "Design & Identité de Marque",
      description: "Nous créons des interfaces et supports graphiques qui reflètent votre marque et séduisent votre audience.",
      items: [
        "Création d'identité visuelle",
        "Design graphique print et digital",
        "Supports publicitaires et marketing",
        "Wireframes et prototypes interactifs",
        "Design d'interactions",
        "Tests et validation UX"
      ]
    }
  },
  {
    id: 4,
    title: "Production Audiovisuelle",
    icon: <Camera className="w-8 h-8" />,
    description: "Photos et vidéos professionnelles pour valoriser votre marque et vos contenus",
    color: "from-green-500 to-lime-500",
    position: { x: 70, y: 50 },
    features: ["Photographie Pro", "Vidéos Promotionnelles", "Montage", "Contenu Social Media"],
    details: {
      title: "Photo & Vidéo Professionnelle",
      description: "i-Team produit du contenu audiovisuel de qualité pour vos campagnes et réseaux sociaux.",
      items: [
        "Photographie professionnelle",
        "Vidéos promotionnelles et corporate",
        "Contenus pour réseaux sociaux",
        "Montage et post-production",
        "Optimisation pour diffusion digitale",
        "Supports visuels pour marketing"
      ]
    }
  },
  {
    id: 5,
    title: "Marketing Digital",
    icon: <BarChart3 className="w-8 h-8" />,
    description: "Stratégies marketing et publicité digitale pour générer des résultats mesurables",
    color: "from-lime-500 to-yellow-500",
    position: { x: 50, y: 30 },
    features: ["Stratégie Digitale", "Publicité en Ligne", "Analytique", "Optimisation ROI"],
    details: {
      title: "Stratégies & Campagnes Digitales",
      description: "Nous mettons en place des campagnes marketing performantes et analytiques pour booster votre visibilité.",
      items: [
        "Campagnes publicitaires ciblées",
        "Marketing sur les réseaux sociaux",
        "Analyse et reporting des performances",
        "Optimisation continue",
        "Gestion de budget publicitaire",
        "Recommandations stratégiques"
      ]
    }
  },
  {
    id: 6,
    title: "Gestion des Réseaux Sociaux",
    icon: <Users className="w-8 h-8" />,
    description: "Animation et développement de votre communauté sur les réseaux sociaux",
    color: "from-yellow-500 to-orange-500",
    position: { x: 30, y: 70 },
    features: ["Community Management", "Contenu Social", "Planification", "Reporting"],
    details: {
      title: "Social Media Management",
      description: "i-Team assure une présence constante et engageante sur vos réseaux sociaux.",
      items: [
        "Gestion de pages sociales",
        "Création et planification de contenu",
        "Animation de la communauté",
        "Suivi des KPI & reporting",
        "Optimisation des performances",
        "Stratégie de croissance sociale"
      ]
    }
  }
];


  return (
    <div className="relative min-h-screen bg-linear-to-br pb-16 from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      <TechBackground />
      <FloatingParticles />
      
      <ServicesHero />
      <ServicesMindMapSection 
        services={services}
        activeService={activeService}
        setActiveService={setActiveService}
      />
      <ServicesDetails 
        services={services}
        activeService={activeService}
        setActiveService={setActiveService}
      />
      <ServicesMethodology />
      <ServicesCTA />
    </div>
  );
};

// N'oubliez pas les imports d'icônes


