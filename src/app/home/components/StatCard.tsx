// components/ui/StatCard.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatCardProps {
  valeur: string;
  label: string;
  icone: React.ReactNode;
  changement: string;
  delai?: number;
}

export const StatCard = ({ valeur, label, icone, changement, delai = 0 }: StatCardProps) => {
  // Vérification de sécurité pour éviter l'erreur
  const hasPlusSign = changement?.includes?.("+") || false;
  const isAlways = changement === "Toujours" || changement === "Always";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: delai, duration: 0.5, type: "spring", stiffness: 120 }}
      className="group p-6 rounded-2xl backdrop-blur-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/10 hover:from-blue-900/30 hover:to-cyan-900/20 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        {/* Conteneur d'icône */}
        <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/40 group-hover:to-purple-500/40 transition-colors duration-300">
          {icone}
        </div>

        {/* Badge de changement */}
        <span
          className={cn(
            "text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-md",
            hasPlusSign
              ? "text-green-400 bg-green-400/10"
              : isAlways
              ? "text-blue-400 bg-blue-400/10"
              : "text-gray-400 bg-gray-400/10"
          )}
        >
          {changement}
        </span>
      </div>

      {/* Valeur */}
      <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x transition-all duration-500">
        {valeur}
      </div>

      {/* Label */}
      <div className="text-sm md:text-base text-gray-400 mt-2">{label}</div>
    </motion.div>
  );
};