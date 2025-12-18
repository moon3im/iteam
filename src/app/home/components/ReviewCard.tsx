// components/pages/components/ReviewCard.tsx
"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  nom: string;
  role: string;
  contenu: string;
  note: number;
  avatar: string;
  logoEntreprise?: string;
  projet?: string;
  index?: number;
  pleineLargeur?: boolean;
}

export const ReviewCard = ({
  nom,
  role,
  contenu,
  note,
  avatar,
  logoEntreprise,
  projet,
  index = 0,
  pleineLargeur = false
}: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className={cn(
        "h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300",
        pleineLargeur && "w-full"
      )}
    >
      {/* Icône de citation */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote className="w-12 h-12" />
      </div>

      {/* Note */}
      <div className="flex items-center gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={cn(
              "w-5 h-5",
              i < note ? "fill-yellow-400 text-yellow-400" : "fill-gray-700 text-gray-700"
            )}
          />
        ))}
      </div>

      {/* Contenu */}
      <p className="text-lg text-gray-300 leading-relaxed mb-8 italic">"{contenu}"</p>

      {/* Informations sur l'auteur */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
            {avatar}
          </div>
          {logoEntreprise && (
            <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-xs font-bold">
              {logoEntreprise}
            </div>
          )}
        </div>

        <div className="flex-1">
          <h4 className="font-bold text-white text-lg">{nom}</h4>
          <p className="text-gray-400 text-sm">{role}</p>
          {projet && (
            <div className="mt-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-xs text-blue-300">{projet}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};