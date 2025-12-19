// components/pages/sections/services/ServicesHero.tsx
"use client";

import { motion } from "framer-motion";
import { Network } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";

export const ServicesHero = () => {
  return (
    <section className="relative pt-42 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 mb-8"
          >
            <Network className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">Nos Services</span>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
            Solutions <GradientText>Digitales</GradientText>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Services digitaux complets conçus pour transformer votre entreprise et propulser la croissance dans le paysage moderne.
          </p>
        </motion.div>
      </div>
    </section>
  );
};