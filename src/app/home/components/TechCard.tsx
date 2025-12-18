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
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
      }}
      whileHover={{
        y: -10,
        scale: 1.05,
        transition: { duration: 0.2 }
      }}
      className="relative group"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
        
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        </div>
        
        <IconeTechnologie tech={tech} />
        <NomTechnologie nom={tech.nom} />
        <LigneConnexion index={index} />
      </div>
    </motion.div>
  );
};

const IconeTechnologie = ({ tech }: { tech: TechCardProps['tech'] }) => {
  return (
    <div className="relative mb-6">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur group-hover:blur-xl transition-all duration-500" />
      <div className={cn(
        "relative w-16 h-16 mx-auto rounded-2xl flex items-center justify-center",
        "bg-gradient-to-br from-gray-900 to-gray-800",
        "border border-white/10 group-hover:border-blue-500/50",
        "transition-all duration-300"
      )}>
        <div className={cn(
          "relative z-10 transition-all duration-300",
          "group-hover:scale-110 group-hover:rotate-12",
          tech.couleur
        )}>
          {tech.icone}
        </div>
      </div>
    </div>
  );
};

const NomTechnologie = ({ nom }: { nom: string }) => {
  return (
    <div className="text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="font-bold text-white text-lg mb-2"
      >
        {nom}
      </motion.p>
    </div>
  );
};

const LigneConnexion = ({ index }: { index: number }) => {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      <motion.path
        d="M0,0 L100,100"
        stroke="url(#gradient)"
        strokeWidth="1"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1, delay: index * 0.1 }}
        className="opacity-0 group-hover:opacity-30 transition-opacity"
      />
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );
};