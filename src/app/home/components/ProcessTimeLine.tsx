// components/pages/components/ProcessTimeline.tsx
"use client";

import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface EtapeProcessus {
  numero: string;
  titre: string;
  description: string;
  icone: React.ReactNode;
  couleur: string;
}

interface ProcessTimelineProps {
  etapes: EtapeProcessus[];
}

export const ProcessTimeline = ({ etapes }: ProcessTimelineProps) => {
  const [etapeActive, setEtapeActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const controls = useAnimation();

  // Détection de la taille d'écran
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Animation automatique
  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < etapes.length; i++) {
        setEtapeActive(i);
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setEtapeActive(0);
    };

    sequence();
  }, []);

  // Navigation tactile
  const handleSwipe = (direction: "left" | "right") => {
    if (direction === "right" && etapeActive < etapes.length - 1) {
      setEtapeActive(prev => prev + 1);
    } else if (direction === "left" && etapeActive > 0) {
      setEtapeActive(prev => prev - 1);
    }
  };

  // Animation pour le défilement
  const scrollX = useTransform(scrollProgress, [0, 100], [0, -100]);

  return (
    <section className="relative py-16  overflow-hidden">
      {/* Effets d'arrière-plan mobile */}
      <div className="absolute inset-0 md:hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto sm:px-6 lg:px-8">
        {/* En-tête responsive */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-24 px-4"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 mb-4 md:mb-6"
          >
            <div className="flex items-center gap-1 md:gap-2">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-1 h-1 rounded-full bg-cyan-400"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
            <span className="text-xs md:text-sm font-semibold text-cyan-300">
              Étape par Étape
            </span>
          </motion.div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 px-2">
            Notre{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Processus
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed px-2">
            Un flux de travail clair et structuré conçu pour livrer des résultats fiables et de haute qualité.
          </p>
        </motion.div>

        {/* Version mobile - Carousel */}
        <div className="md:hidden">
          {/* Indicateur d'étape mobile */}
          <div className="flex justify-center items-center gap-4 mb-8 px-4">
            <button
              onClick={() => handleSwipe("left")}
              disabled={etapeActive === 0}
              className={cn(
                "p-2 rounded-full transition-all",
                etapeActive === 0
                  ? "opacity-30"
                  : "bg-white/5 hover:bg-white/10 active:scale-95"
              )}
            >
              <ChevronLeft className="w-5 h-5 text-cyan-400" />
            </button>
            
            <div className="flex-1 text-center">
              <div className="text-sm text-gray-400 mb-1">
                Étape {etapeActive + 1} sur {etapes.length}
              </div>
              <div className="text-lg font-semibold text-white">
                {etapes[etapeActive]?.titre}
              </div>
            </div>
            
            <button
              onClick={() => handleSwipe("right")}
              disabled={etapeActive === etapes.length - 1}
              className={cn(
                "p-2 rounded-full transition-all",
                etapeActive === etapes.length - 1
                  ? "opacity-30"
                  : "bg-white/5 hover:bg-white/10 active:scale-95"
              )}
            >
              <ChevronRight className="w-5 h-5 text-cyan-400" />
            </button>
          </div>

          {/* Carousel mobile */}
          <div className="relative">
            {/* Ligne de progression mobile */}
            <div className="absolute top-0 left-4 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/30 to-cyan-500/30">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-400 to-cyan-400"
                initial={{ height: "0%" }}
                animate={{ height: `${((etapeActive + 1) / etapes.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Étapes mobiles */}
            <div className="space-y-6 pl-8 pr-4">
              {etapes.map((etape, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: etapeActive === index ? 1 : 0.6,
                    x: 0,
                  }}
                  transition={{ duration: 0.3 }}
                  onClick={() => setEtapeActive(index)}
                  className="relative"
                >
                  {/* Carte mobile */}
                  <motion.div
                    animate={{
                      scale: etapeActive === index ? 1.02 : 1,
                      borderColor: etapeActive === index
                        ? "rgba(6, 182, 212, 0.4)"
                        : "rgba(255, 255, 255, 0.1)",
                    }}
                    className={cn(
                      "relative rounded-2xl p-6 backdrop-blur-xl",
                      "bg-gradient-to-br from-white/5 to-white/10",
                      "border transition-all duration-300",
                      "active:scale-[0.98]",
                      etapeActive === index ? "cursor-default" : "cursor-pointer"
                    )}
                  >
                    {/* Nœud de timeline mobile */}
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{
                          scale: etapeActive === index ? 1.2 : 0.8,
                        }}
                        className="relative w-6 h-6"
                      >
                        <div
                          className="absolute inset-0 rounded-full"
                          style={{
                            background: `linear-gradient(to right, ${etape.couleur})`,
                          }}
                        />
                        {etapeActive === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute hidden md:flex -inset-2 rounded-full border-2"
                            style={{
                              borderColor: etape.couleur.split(' ')[0].replace('from-', ''),
                              opacity: 0.5,
                            }}
                          />
                        )}
                      </motion.div>
                    </div>

                    {/* En-tête mobile */}
                    <div className="flex items-center gap-4 mb-4">
                      <motion.div
                        animate={{
                          scale: etapeActive === index ? 1.1 : 1,
                        }}
                        className="relative"
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl",
                            "flex items-center justify-center",
                            "border border-white/10"
                          )}
                          style={{
                            background: `linear-gradient(135deg, ${etape.couleur})`,
                          }}
                        >
                          <div className="text-white">
                            {etape.icone}
                          </div>
                        </div>
                      </motion.div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h3 className="text-lg font-bold text-white">
                            {etape.titre}
                          </h3>
                          <motion.div
                            animate={{
                              scale: etapeActive === index ? 1 : 0,
                              opacity: etapeActive === index ? 1 : 0,
                            }}
                            className="text-3xl hidden md:flex font-black text-white/10"
                          >
                            {etape.numero}
                          </motion.div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                          <span className="text-xs text-gray-400">
                            Étape {index + 1}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Description mobile */}
                    <motion.p
                      animate={{
                        opacity: etapeActive === index ? 1 : 0.7,
                      }}
                      className="text-sm text-gray-400 leading-relaxed"
                    >
                      {etape.description}
                    </motion.p>

                    {/* Indicateur actif mobile */}
                    {etapeActive === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 pt-4 border-t border-white/10"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                            <span className="text-xs text-cyan-300">
                              Étape active
                            </span>
                          </div>
                          <div className="text-xs text-gray-500">
                            {index + 1}/{etapes.length}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Pagination mobile */}
          <div className="flex justify-center gap-2 mt-8">
            {etapes.map((_, index) => (
              <button
                key={index}
                onClick={() => setEtapeActive(index)}
                className={cn(
                  "w-2 h-2 rounded-full transition-all",
                  "focus:outline-none focus:ring-2 focus:ring-cyan-500/50",
                  etapeActive === index
                    ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500"
                    : "bg-white/30 hover:bg-white/50"
                )}
                aria-label={`Aller à l'étape ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Version desktop - Timeline originale (optimisée) */}
        <div className="hidden md:block relative" ref={containerRef}>
          {/* Ligne verticale animée */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            <motion.div
              className="absolute top-0 z-0 w-full bg-gradient-to-b from-blue-400 to-cyan-400"
              initial={{ height: "0%" }}
              animate={{ height: `${((etapeActive + 1) / etapes.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Conteneur d'étapes desktop */}
          <div className="">
            {etapes.map((etape, index) => {
              const estAGauche = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  onMouseEnter={() => setEtapeActive(index)}
                  className="relative flex items-center"
                >
                  {/* Carte responsive */}
                  <div className={cn(
                    "relative w-full",
                    "md:max-w-lg lg:max-w-xl",
                    estAGauche ? "mr-auto md:pr-16 lg:pr-20" : "ml-auto md:pl-16 lg:pl-20"
                  )}>
                    {/* Effet de lueur */}
                    <motion.div
                      className={cn(
                        "absolute -inset-0.5 rounded-2xl blur",
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        etapeActive === index && "opacity-100"
                      )}
                      style={{
                        background: `linear-gradient(to right, ${etape.couleur})`,
                      }}
                    />

                    {/* Contenu de la carte */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 60px rgba(6, 182, 212, 0.15)"
                      }}
                      animate={{
                        borderColor: etapeActive === index 
                          ? "rgba(6, 182, 212, 0.4)" 
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                      className={cn(
                        "relative rounded-2xl p-6 lg:p-8 backdrop-blur-xl",
                        "bg-gradient-to-br from-white/5 to-white/10",
                        "border transition-all duration-300",
                        "group cursor-pointer"
                      )}
                    >
                      {/* Numéro d'étape */}
                      <motion.div
                        animate={{
                          scale: etapeActive === index ? 1.1 : 1,
                          opacity: etapeActive === index ? 0.3 : 0.15,
                        }}
                        className={cn(
                          "absolute text-6xl lg:text-8xl font-black select-none",
                          estAGauche ? "right-6 lg:right-8 top-4" : "right-6 lg:right-8 top-4"
                        )}
                        style={{
                          WebkitTextStroke: `2px ${etape.couleur.split(' ')[0].replace('from-', '')}`
                        }}
                      >
                        {etape.numero}
                      </motion.div>

                      {/* En-tête */}
                      <div className="flex items-center gap-4 lg:gap-6 mb-4 lg:mb-6">
                        <motion.div
                          animate={{
                            scale: etapeActive === index ? 1.1 : 1,
                          }}
                          className="relative"
                        >
                          <motion.div
                            animate={{
                              scale: etapeActive === index ? 1.2 : 1,
                              opacity: etapeActive === index ? 0.5 : 0,
                            }}
                            className="absolute -inset-2 lg:-inset-3 rounded-xl blur"
                            style={{
                              background: `linear-gradient(to right, ${etape.couleur})`,
                            }}
                          />
                          
                          <div
                            className={cn(
                              "relative w-12 h-12 lg:w-16 lg:h-16 rounded-xl",
                              "flex items-center justify-center",
                              "border border-white/10",
                              "transition-all duration-300",
                              "group-hover:border-white/30"
                            )}
                            style={{
                              background: `linear-gradient(135deg, ${etape.couleur})`,
                            }}
                          >
                            <motion.div
                              animate={{
                                scale: etapeActive === index ? 1.2 : 1,
                              }}
                              className="text-white"
                            >
                              {etape.icone}
                            </motion.div>
                          </div>
                        </motion.div>

                        <div>
                          <motion.h3
                            animate={{
                              color: etapeActive === index ? "#ffffff" : "#f3f4f6",
                            }}
                            className="text-xl lg:text-2xl font-bold mb-2"
                          >
                            {etape.titre}
                          </motion.h3>
                          <div className="flex items-center gap-2">
                            <div className="w-6 lg:w-8 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <span className="text-xs lg:text-sm text-gray-400">
                              Étape {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p
                        animate={{
                          opacity: etapeActive === index ? 1 : 0.8,
                        }}
                        className="text-sm lg:text-lg text-gray-400 leading-relaxed"
                      >
                        {etape.description}
                      </motion.p>

                      {/* Points de progression */}
                      <div className="flex items-center gap-1 lg:gap-2 mt-4 lg:mt-6">
                        {etapes.map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              width: i <= index ? "16px" : "6px",
                              backgroundColor: i <= index 
                                ? etape.couleur.split(' ')[0].replace('from-', '')
                                : "rgba(255, 255, 255, 0.1)",
                            }}
                            className="h-2 rounded-full transition-all duration-300"
                          />
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Nœud de timeline */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      animate={{
                        scale: etapeActive === index ? 1.3 : 1,
                        boxShadow: etapeActive === index 
                          ? "0 0 30px rgba(6, 182, 212, 0.8)" 
                          : "0 0 0px rgba(6, 182, 212, 0)",
                      }}
                      className="relative w-6 h-6 lg:w-8 lg:h-8 rounded-full"
                    >
                      <motion.div
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="absolute inset-0 rounded-full border-2 border-transparent"
                        style={{
                          borderImage: `linear-gradient(to right, ${etape.couleur}) 1`,
                        }}
                      />
                      
                      <div
                        className="absolute inset-1 lg:inset-2 rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${etape.couleur})`,
                        }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Barre de progression */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 lg:mt-20"
          >
            <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              {/* Points d'étape */}
              <div className="absolute inset-0 flex">
                {etapes.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 relative"
                    onClick={() => setEtapeActive(i)}
                  >
                    <motion.div
                      animate={{
                        scale: etapeActive === i ? 1.5 : 1,
                        backgroundColor: etapeActive >= i 
                          ? "rgb(6, 182, 212)" 
                          : "rgba(255, 255, 255, 0.3)",
                      }}
                      className={cn(
                        "absolute top-1/2 -translate-y-1/2 -translate-x-1/2",
                        "w-3 h-3 lg:w-4 lg:h-4 rounded-full cursor-pointer transition-all duration-300",
                        "hover:scale-125"
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Étiquettes */}
            <div className="flex justify-between mt-4 px-2">
              {etapes.map((etape, i) => (
                <button
                  key={i}
                  onClick={() => setEtapeActive(i)}
                  className={cn(
                    "text-xs lg:text-sm font-medium transition-all duration-300 truncate max-w-[20%] px-1",
                    etapeActive === i 
                      ? "text-cyan-400 scale-110" 
                      : "text-gray-500 hover:text-gray-300"
                  )}
                  title={etape.titre}
                >
                  {etape.titre}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};