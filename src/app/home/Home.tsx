// components/pages/Home.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TechBackground } from "@/components/ui/TechBackground";
import { HeroSection } from "./components/HeroSection";
import { TechStackSection } from "./components/TechStackSection";
import { PacksSection } from "./components/PacksSection";
import { ServicesSection } from "./components/ServciesSection";
import { ProcessTimelineSection } from "./components/ProcessTimelineSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { CTASection } from "./components/CTASection";

export const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-linear-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      <TechBackground />
      <ParticlesFlottants />
      
      <HeroSection 
        heroOpacity={heroOpacity} 
        heroScale={heroScale} 
      />
      
      <TechStackSection />
      <PacksSection />
      <ServicesSection />
      <ProcessTimelineSection />
      <ReviewsSection />
      <CTASection />
    </div>
  );
};

const ParticlesFlottants = () => {
  return (
    <div className="fixed inset-0 pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
          }}
        />
      ))}
    </div>
  );
};