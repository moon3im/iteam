// components/pages/sections/services/ServicesMindMapSection.tsx
"use client";

import { motion } from "framer-motion";
import { ServicesMindMap } from "./VisionMindMap";

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

interface ServicesMindMapSectionProps {
  services: ServiceNode[];
  activeService: number | null;
  setActiveService: (id: number | null) => void;
}

export const ServicesMindMapSection = ({ 
  services, 
  activeService, 
  setActiveService 
}: ServicesMindMapSectionProps) => {
  return (
    <section className="relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <ServicesMindMap />
        
        <div className="relative flex items-center justify-center mt-4 z-20 opacity-60">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-blue-500"
              />
              <span>Survolez les cartes pour voir l'effet lumineux</span>
            </div>
            <div className="w-px h-4 bg-white/20" />
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="w-2 h-2 rounded-full bg-cyan-500"
              />
              <span>Cliquez pour les informations détaillées</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};