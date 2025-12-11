// components/ui/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  index: number;
}

export const ServiceCard = ({ icon, title, description, features, gradient, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -10, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur-sm border border-white/10 bg-linear-to-b from-white/5 to-transparent hover:border-white/20 transition-all duration-300"
    >
      <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500"
           style={{
             backgroundImage: `linear-gradient(135deg, ${gradient})`
           }}
      />
      <div className="relative z-10">
        <div className={cn("inline-flex p-3 rounded-xl mb-4", 
          `bg-linear-to-br ${gradient}`)}>
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2 text-sm">
              <ChevronRight className="w-4 h-4 text-blue-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 group-hover:text-white transition-colors">
          Learn more
          <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </motion.div>
  );
};