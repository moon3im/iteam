// components/pages/components/TechCard.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TechCardProps {
  tech: {
    icone: React.ReactNode;
    nom: string;
    couleur: string;
  };
  index: number;
}

export const TechCard = ({ tech, index }: TechCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -8,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      {/* Effet de lueur subtil */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Carte principale */}
      <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-8 group-hover:border-white/20 transition-all duration-300 overflow-hidden">
        
        {/* Pattern de fond minimal */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center" />
        </div>

        {/* Container d'icône élégant */}
        <div className="relative mb-6">
          {/* Fond de l'icône avec effet de lumière */}
          <div className="hidden md:flex relative w-32 h-32 mx-auto rounded-2xl  group-hover:border-white/20 transition-all duration-300 overflow-hidden">
            {/* Effet de lumière */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/0" />
            
            {/* Icône */}
            <div className={cn(
              "absolute w-full inset-0 flex items-center justify-center transition-all duration-300",
              "group-hover:scale-110",
              tech.couleur
            )}>
              {tech.icone}
            </div>
          </div>
           {/* Icône */}
            <div className={cn(
              "md:hidden flex justify-center",
            )}>
              {tech.icone}
            </div>
          {/* Point lumineux */}
          <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Nom de la technologie */}
        <div className="text-center">
          <h3 className="hidden font-bold text-white text-lg mb-3 group-hover:text-cyan-100 transition-colors duration-300">
            {tech.nom}
          </h3>
          
          {/* Ligne décorative */}
          <div className="relative h-px w-12 mx-auto bg-gradient-to-r from-transparent via-white/30 to-transparent overflow-hidden">
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1.5, delay: index * 0.1 + 0.3 }}
              className="absolute inset-y-0 w-12 bg-gradient-to-r from-blue-500/0 via-cyan-500 to-blue-500/0"
            />
          </div>
        </div>

        {/* Effet de connexion minimal */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity duration-500">
          <motion.line
            x1="50%"
            y1="0%"
            x2="50%"
            y2="100%"
            stroke="url(#simple-gradient)"
            strokeWidth="0.5"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 1, delay: index * 0.1 }}
          />
          <defs>
            <linearGradient id="simple-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </motion.div>
  );
};