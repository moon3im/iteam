// components/pages/components/PackCard.tsx
"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Crown } from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingButton } from "@/components/ui/GlowingButton";

interface PackCardProps {
  pack: {
    nom: string;
    icone: React.ReactNode;
    prix: string;
    periode: string;
    couleur: string;
    couleurFond: string;
    couleurBordure: string;
    populaire: boolean;
    fonctionnalites: string[];
    cta: string;
    description: string;
  };
  index: number;
}

export const PackCard = ({ pack, index }: PackCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Badge "Populaire" */}
      {pack.populaire && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 backdrop-blur-xl border border-purple-500/30 shadow-lg">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-semibold">Le Plus Populaire</span>
          </div>
        </div>
      )}

      {/* Effet de lueur */}
      <div className={cn(
        "absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        pack.couleur
      )} />

      {/* Carte */}
      <div className={cn(
        "relative h-full rounded-3xl backdrop-blur-xl border transition-all duration-300 overflow-hidden",
        pack.couleurFond,
        pack.couleurBordure
      )}>
        {/* En-tête */}
        <div className={cn(
          "p-8 pb-12",
          "bg-gradient-to-b from-transparent via-transparent to-black/20"
        )}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">{pack.nom}</h3>
              <p className="text-gray-400 text-sm">{pack.description}</p>
            </div>
            <div className={cn(
              "p-3 rounded-2xl",
              "bg-gradient-to-br from-white/10 to-white/5",
              "border border-white/10"
            )}>
              {pack.icone}
            </div>
          </div>

          {/* Prix */}
          <div className="mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold text-white">{pack.prix}</span>
              <span className="text-gray-400">{pack.periode}</span>
            </div>
          </div>
        </div>

        {/* Corps */}
        <div className="p-8 pt-0">
          {/* Fonctionnalités */}
          <ul className="space-y-3 mb-8">
            {pack.fonctionnalites.map((fonctionnalite, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className={cn(
                  "p-1 rounded-full mt-1",
                  "bg-gradient-to-br from-green-500/20 to-emerald-500/20"
                )}>
                  <Check className="w-3 h-3 text-green-400" />
                </div>
                <span className="text-gray-300">{fonctionnalite}</span>
              </li>
            ))}
          </ul>

          {/* Bouton CTA */}
          <GlowingButton className={cn(
            "w-full py-4 font-semibold",
            pack.populaire && "bg-gradient-to-r from-purple-500 to-pink-500"
          )}>
            <span className="flex items-center justify-center gap-3">
              {pack.cta}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </GlowingButton>
        </div>

        {/* Effet de bordure animé */}
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/10 transition-all duration-300" />
      </div>
    </motion.div>
  );
};