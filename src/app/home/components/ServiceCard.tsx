// components/pages/components/ServiceCard.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  featuresList?: { text: string; icon: React.ReactNode }[];
  index: number;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  features,
  gradient,
  featuresList = [],
  index
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      {/* Glow Effect */}
      <div className={cn(
        "absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        gradient.replace("from-", "from-").replace("to-", "to-")
      )} />

      <div className="relative h-full p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-300">
        {/* Icon */}
        <div className="mb-8">
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
            <div className={cn(
              "transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12",
              gradient.replace("from-", "text-").split(" ")[0]
            )}>
              {icon}
            </div>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-gray-400 leading-relaxed mb-8">{description}</p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {featuresList.length > 0 ? (
            featuresList.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-3 text-sm">
                <div className={cn(
                  "p-1 rounded-full",
                  gradient.replace("from-", "from-").replace("to-", "to-").replace("500", "500/20")
                )}>
                  {feature.icon}
                </div>
                <span className="text-gray-300">{feature.text}</span>
              </div>
            ))
          ) : (
            <div className="flex flex-wrap gap-2">
              {features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <button className="flex items-center gap-2 text-sm font-semibold group/btn">
          <span className={cn(
            "bg-gradient-to-r bg-clip-text text-transparent",
            gradient
          )}>
            Learn More
          </span>
          <ArrowRight className={cn(
            "w-4 h-4 transition-transform group-hover/btn:translate-x-1",
            gradient.replace("from-", "text-").split(" ")[0]
          )} />
        </button>
      </div>
    </motion.div>
  );
};