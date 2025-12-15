// components/pages/components/PackCard.tsx
"use client";

import { motion } from "framer-motion";
import { CheckCircle, Crown, Gem, Shield } from "lucide-react";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { cn } from "@/lib/utils";

interface PackCardProps {
  pack: {
    name: string;
    icon: React.ReactNode;
    price: string;
    period: string;
    color: string;
    bgColor: string;
    borderColor: string;
    popular: boolean;
    features: string[];
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
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {pack.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-bold shadow-lg shadow-purple-500/25">
            MOST POPULAR
          </div>
        </div>
      )}

      {/* Glow Effect */}
      <div className={cn(
        "absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        pack.popular ? "bg-gradient-to-r from-purple-500/50 to-pink-500/50" : pack.color.replace("from-", "from-").replace("to-", "to-").replace("500", "500/30")
      )} />

      <div className={cn(
        "relative h-full rounded-3xl p-8 backdrop-blur-xl border",
        pack.bgColor,
        pack.borderColor,
        "transition-all duration-300 group-hover:border-white/30"
      )}>
        {/* Header */}
        <div className="text-center mb-8">
          <div className={cn(
            "inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 mx-auto",
            "bg-gradient-to-br from-white/10 to-white/5",
            "border border-white/10"
          )}>
            <div className={cn(
              "transition-transform duration-300 group-hover:scale-110",
              pack.color.replace("from-", "text-").split(" ")[0]
            )}>
              {pack.icon}
            </div>
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-2">{pack.name}</h3>
          <p className="text-gray-400 text-sm mb-6">{pack.description}</p>
          
          <div className="mb-6">
            <div className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent" style={{ backgroundImage: `linear-gradient(to right, ${pack.color})` }}>
              {pack.price}
            </div>
            <div className="text-gray-400">{pack.period}</div>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          {pack.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-3"
            >
              <div className={cn(
                "p-1 rounded-full",
                pack.popular 
                  ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20" 
                  : pack.color.replace("from-", "from-").replace("to-", "to-").replace("500", "500/20")
              )}>
                <CheckCircle className="w-4 h-4 text-green-400" />
              </div>
              <span className="text-gray-300">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <GlowingButton
            className={cn(
              "w-full py-4 font-semibold",
              pack.popular && "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            )}
          >
            {pack.cta}
          </GlowingButton>
        </div>
      </div>
    </motion.div>
  );
};