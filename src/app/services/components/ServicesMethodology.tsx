// components/pages/sections/services/ServicesMethodology.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GitMerge,
  Search,
  Palette,
  Code2,
  CheckCircle,
  Rocket,
  Users,
  Zap,
  BarChart3,
  Sparkles,
  ChevronDown,
  Clock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";

export const ServicesMethodology = () => {
  const [etapeActive, setEtapeActive] = useState<number | null>(null);

  const etapes = [
    {
      numero: "01",
      titre: "Analyse & Immersion",
      description:
        "Chez i-Team, nous commençons par une immersion complète dans votre activité afin de comprendre votre marque, vos objectifs et votre positionnement.",
      icone: <Search className="w-8 h-8" />,
      couleur: "from-blue-500 to-cyan-500",
      details: [
        "Analyse de votre activité et de votre marché",
        "Étude de votre image actuelle (branding & communication)",
        "Compréhension de vos besoins digitaux et marketing",
        "Définition des objectifs business et marketing",
      ],
      duree: "1 semaine",
    },
    {
      numero: "02",
      titre: "Stratégie Digitale & Communication",
      description:
        "Nous définissons une stratégie globale combinant digital, branding, contenu et communication pour assurer une cohérence totale.",
      icone: <GitMerge className="w-8 h-8" />,
      couleur: "from-cyan-500 to-emerald-500",
      details: [
        "Définition de la stratégie digitale",
        "Stratégie de communication et de présence en ligne",
        "Plan marketing et réseaux sociaux",
        "Choix des supports et canaux adaptés",
      ],
      duree: "1 à 2 semaines",
    },
    {
      numero: "03",
      titre: "Branding, Design & Contenu",
      description:
        "Nous concevons votre identité visuelle et vos contenus afin de construire une image forte, cohérente et mémorable.",
      icone: <Palette className="w-8 h-8" />,
      couleur: "from-emerald-500 to-green-500",
      details: [
        "Création ou refonte de l'identité visuelle",
        "Design graphique print et digital",
        "Création des supports publicitaires",
        "Préparation des contenus visuels et éditoriaux",
      ],
      duree: "1 à 2 semaines",
    },
    {
      numero: "04",
      titre: "Production Digitale & Audiovisuelle",
      description:
        "Nous passons à la production : développement web, création de contenus audiovisuels et mise en place des outils digitaux.",
      icone: <Code2 className="w-8 h-8" />,
      couleur: "from-green-500 to-lime-500",
      details: [
        "Création de sites web (vitrine ou sur mesure)",
        "Développement de solutions digitales",
        "Production photo et vidéo professionnelle",
        "Création de contenus pour les réseaux sociaux",
      ],
      duree: "Selon la complexité",
    },
    {
      numero: "05",
      titre: "Lancement & Diffusion",
      description:
        "Nous déployons vos solutions et lançons vos campagnes de communication afin d'assurer une visibilité optimale.",
      icone: <CheckCircle className="w-8 h-8" />,
      couleur: "from-lime-500 to-yellow-500",
      details: [
        "Mise en ligne des sites et plateformes",
        "Lancement des campagnes marketing",
        "Diffusion des contenus sur les réseaux sociaux",
        "Suivi des premiers résultats",
      ],
      duree: "1 semaine",
    },
    {
      numero: "06",
      titre: "Suivi, Optimisation & Accompagnement",
      description:
        "i-Team vous accompagne sur le long terme avec un suivi continu, des optimisations régulières et un support dédié.",
      icone: <Rocket className="w-8 h-8" />,
      couleur: "from-yellow-500 to-orange-500",
      details: [
        "Gestion et animation des réseaux sociaux",
        "Optimisation des performances digitales",
        "Analyse des résultats et reporting",
        "Évolutions, maintenance et support",
      ],
      duree: "En continu",
    },
  ];

  return (
    <section className="relative px-4 sm:px-6 lg:px-8 mt-32">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-lg border border-blue-500/20 mb-6"
          >
            <Users className="w-5 h-5 text-cyan-400" />
            <span className="text-sm font-semibold text-cyan-300">
              Méthodologie i-Team
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl font-bold mb-6"
          >
            Une Approche <GradientText>Claire & Structurée</GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            Un processus éprouvé pour garantir des résultats concrets, durables et maîtrisés.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {etapes.map((etape, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{
                y: -8,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                },
              }}
              onMouseEnter={() => setEtapeActive(idx)}
              onMouseLeave={() => setEtapeActive(null)}
              className="relative group"
            >
              {/* Glow Effect */}
              <motion.div
                className={cn(
                  "absolute -inset-0.5 rounded-3xl blur opacity-0",
                  etape.couleur
                )}
                animate={{
                  opacity: etapeActive === idx ? 0.4 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Card */}
              <div
                className={cn(
                  "relative rounded-3xl p-6 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl",
                  "border border-white/10 group-hover:border-white/20",
                  "transition-all duration-500 ease-out",
                  "h-full"
                )}
              >
                {/* Header with Number and Icon */}
                <div className="flex items-start justify-between mb-6">
                  <motion.div
                    animate={{
                      rotate: etapeActive === idx ? [0, 5, -5, 0] : 0,
                    }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                      "w-14 h-14 rounded-2xl flex items-center justify-center",
                      "bg-gradient-to-br",
                      etape.couleur,
                      "border border-white/20 group-hover:border-white/30",
                      "transition-all duration-300"
                    )}
                  >
                    <motion.div
                      animate={{
                        scale: etapeActive === idx ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-white"
                    >
                      {etape.icone}
                    </motion.div>
                  </motion.div>

                  <motion.div
                    animate={{
                      scale: etapeActive === idx ? 1.1 : 1,
                    }}
                    className={cn(
                      "text-4xl font-bold bg-gradient-to-r bg-clip-text text-transparent",
                      "select-none"
                    )}
                    style={{
                      backgroundImage: `linear-gradient(to right, ${etape.couleur})`,
                    }}
                  >
                    {etape.numero}
                  </motion.div>
                </div>

                {/* Title and Description */}
                <div className="space-y-4">
                  <motion.h3
                    animate={{
                      color: etapeActive === idx ? "#ffffff" : "#f3f4f6",
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-xl font-bold text-white"
                  >
                    {etape.titre}
                  </motion.h3>

                  <motion.p
                    animate={{
                      opacity: etapeActive === idx ? 0.9 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                    className="text-gray-400 leading-relaxed"
                  >
                    {etape.description}
                  </motion.p>
                </div>

                {/* Duration Badge */}
                <motion.div
                  animate={{
                    y: etapeActive === idx ? 0 : 0,
                    scale: etapeActive === idx ? 1.05 : 1,
                  }}
                  className={cn(
                    "inline-flex items-center gap-2 px-4 py-2 mt-4 rounded-full",
                    "bg-gradient-to-r from-blue-500/10 to-cyan-500/10",
                    "border border-cyan-500/20 group-hover:border-cyan-500/40",
                    "transition-all duration-300"
                  )}
                >
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm font-medium text-cyan-300">
                    {etape.duree}
                  </span>
                </motion.div>

                {/* Details List (Animated) */}
                <AnimatePresence>
                  {etapeActive === idx && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{
                        opacity: { duration: 0.2 },
                        height: { duration: 0.3, ease: "easeInOut" },
                      }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -10 }}
                        animate={{ y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <h4 className="text-sm font-semibold text-gray-300 mb-3">
                          Points Clés :
                        </h4>
                        <ul className="space-y-3">
                          {etape.details.map((detail, detailIdx) => (
                            <motion.li
                              key={detailIdx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                delay: detailIdx * 0.05 + 0.1,
                                duration: 0.2,
                              }}
                              className="flex items-start gap-3 text-sm text-gray-400"
                            >
                              <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{
                                  duration: 0.5,
                                  delay: detailIdx * 0.1,
                                }}
                                className={cn(
                                  "w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5",
                                  "bg-gradient-to-r",
                                  etape.couleur,
                                  "bg-opacity-20"
                                )}
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              </motion.div>
                              <span>{detail}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Expand Indicator */}
                <motion.div
                  animate={{
                    rotate: etapeActive === idx ? 180 : 0,
                    opacity: etapeActive === idx ? 1 : 0.5,
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex justify-center mt-6"
                >
                  <ChevronDown className="w-5 h-5 text-cyan-400" />
                </motion.div>
              </div>

              {/* Connection Lines between cards */}
              {idx < etapes.length - 1 && (
                <motion.div
                  className={cn(
                    "hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5",
                    "bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent",
                    "opacity-0 group-hover:opacity-100",
                    "transition-opacity duration-300"
                  )}
                  animate={{
                    width: etapeActive === idx ? "24px" : "6px",
                    opacity: etapeActive === idx ? 1 : 0.3,
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
            <span className="text-cyan-300 font-medium">
              Une méthode orientée résultats et collaboration
            </span>
            <BarChart3 className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};