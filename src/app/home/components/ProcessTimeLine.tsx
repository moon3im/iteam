// components/pages/components/ProcessTimeline.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

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
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < etapes.length; i++) {
        setEtapeActive(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      // Réinitialiser à la première étape après avoir terminé la séquence
      setEtapeActive(0);
    };

    sequence();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Effets d'arrière-plan */}
      <div className="absolute inset-0">
        {/* Arrière-plan dégradé */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-cyan-950/20" />
        
        {/* Grille animée */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        
        {/* Orbites flottantes */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 mb-6"
          >
            <div className="flex items-center gap-2">
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
            <span className="text-sm font-semibold text-cyan-300">Étape par Étape</span>
          </motion.div>
          
         <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
   Notre <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Processus</span>
  <span className="block text-2xl sm:text-3xl lg:text-4xl mt-3 text-gray-300 font-medium">
    Gestion des Réseaux Sociaux
  </span>
</h2>

<p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
  Une méthode claire et structurée pour gérer, développer et optimiser votre présence
  sur les réseaux sociaux avec des résultats mesurables et durables.
</p>

        </motion.div>

        {/* Conteneur de timeline */}
        <div className="relative">
          {/* Ligne verticale animée */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Indicateur de progression */}
            <motion.div
              className="absolute top-0 z-0 w-full bg-gradient-to-b from-blue-400 to-cyan-400"
              initial={{ height: "0%" }}
              animate={{ height: `${((etapeActive + 1) / etapes.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Conteneur d'étapes */}
          <div className="space-y-8">
            {etapes.map((etape, index) => {
              const estAGauche = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  onMouseEnter={() => setEtapeActive(index)}
                  className="relative flex items-center"
                >
                  {/* Carte d'étape */}
                  <div className={cn(
                    "relative w-full max-w-xl",
                    estAGauche ? "mr-auto pr-20" : "ml-auto pl-20"
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
                        "relative rounded-2xl p-8 backdrop-blur-xl",
                        "bg-gradient-to-br from-white/5 to-white/10",
                        "border transition-all duration-300",
                        "group cursor-pointer"
                      )}
                    >
                      {/* Numéro d'étape en grand */}
                      <motion.div
                        animate={{
                          scale: etapeActive === index ? 1.1 : 1,
                          opacity: etapeActive === index ? 0.3 : 0.15,
                        }}
                        className={cn(
                          "absolute text-8xl font-black select-none",
                          estAGauche ? "right-8 top-4" : "right-8 top-4"
                        )}
                        style={{
                          WebkitTextStroke: `2px ${etape.couleur.split(' ')[0].replace('from-', '')}`
                        }}
                      >
                        {etape.numero}
                      </motion.div>

                      {/* En-tête d'étape */}
                      <div className="flex items-center gap-6 mb-6">
                        {/* Grand conteneur d'icône */}
                        <motion.div
                          animate={{
                            scale: etapeActive === index ? 1.1 : 1,
                            rotate: etapeActive === index ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          {/* Lueur d'icône */}
                          <motion.div
                            animate={{
                              scale: etapeActive === index ? 1.2 : 1,
                              opacity: etapeActive === index ? 0.5 : 0,
                            }}
                            className="absolute -inset-3 rounded-xl blur"
                            style={{
                              background: `linear-gradient(to right, ${etape.couleur})`,
                            }}
                          />
                          
                          {/* Icône */}
                          <div
                            className={cn(
                              "relative w-16 h-16 rounded-xl",
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

                        {/* Titre d'étape */}
                        <div>
                          <motion.h3
                            animate={{
                              color: etapeActive === index ? "#ffffff" : "#f3f4f6",
                            }}
                            className="text-2xl font-bold mb-2"
                          >
                            {etape.titre}
                          </motion.h3>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <span className="text-sm text-gray-400">Étape {index + 1}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description d'étape */}
                      <motion.p
                        animate={{
                          opacity: etapeActive === index ? 1 : 0.8,
                        }}
                        className="text-gray-400 leading-relaxed text-lg"
                      >
                        {etape.description}
                      </motion.p>

                      {/* Points d'indicateur de progression */}
                      <div className="flex items-center gap-2 mt-6">
                        {etapes.map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              width: i <= index ? "24px" : "8px",
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
                      className="relative w-8 h-8 rounded-full z-100"
                    >
                      {/* Anneau extérieur du nœud */}
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
                      
                      {/* Centre du nœud */}
                      <div
                        className="absolute inset-2 rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${etape.couleur})`,
                        }}
                      />
                      
                      {/* Indicateur actif */}
                      <motion.div
                        animate={{
                          scale: etapeActive === index ? [1, 1.5, 1] : 0,
                          opacity: etapeActive === index ? [0, 0.5, 0] : 0,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="absolute -inset-4 rounded-full"
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

          {/* Barre de progression en bas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20"
          >
            <div className="relative h-2 rounded-full bg-white/5 overflow-hidden">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2, delay: 0.5 }}
              />
              
              {/* Étapes de progression */}
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
                        "w-4 h-4 rounded-full cursor-pointer transition-all duration-300",
                        "hover:scale-125"
                      )}
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Étiquettes de progression */}
            <div className="flex justify-between mt-4 px-2">
              {etapes.map((etape, i) => (
                <button
                  key={i}
                  onClick={() => setEtapeActive(i)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300",
                    etapeActive === i 
                      ? "text-cyan-400 scale-110" 
                      : "text-gray-500 hover:text-gray-300"
                  )}
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