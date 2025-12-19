"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
import {
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Quote,
  Award,
  Sparkles,
} from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { cn } from "@/lib/utils";

/* ================= TYPES ================= */
interface AvisClient {
  nom: string;
  role: string;
  contenu: string;
  note: number;
  avatar: string;
  logoEntreprise?: string;
  projet?: string;
  couleur: string;
}

/* ================= DATA ================= */
const avisClients: AvisClient[] = [
  {
    nom: "Alex Johnson",
    role: "CEO, TechVision",
    contenu:
      "Leur équipe a complètement transformé notre présence digitale. Le niveau d'expertise technique et la qualité de livraison ont dépassé toutes nos attentes. Un partenaire fiable et innovant.",
    note: 5,
    avatar: "AJ",
    logoEntreprise: "TV",
    projet: "Plateforme E-commerce",
    couleur: "from-blue-500 to-cyan-500",
  },
  {
    nom: "Sarah Miller",
    role: "Directrice Marketing, GreenRetail",
    contenu:
      "Le lancement de notre application mobile a été un succès retentissant grâce à leur approche méthodique et leur créativité. L'engagement de l'équipe était remarquable.",
    note: 5,
    avatar: "SM",
    logoEntreprise: "GR",
    projet: "Application Mobile",
    couleur: "from-purple-500 to-pink-500",
  },
  {
    nom: "Michael Chen",
    role: "CTO, Finova Solutions",
    contenu:
      "Excellente collaboration sur notre système de paiement. La sécurité et les performances étaient au rendez-vous. Une équipe extrêmement compétente.",
    note: 5,
    avatar: "MC",
    logoEntreprise: "FS",
    projet: "SaaS Fintech",
    couleur: "from-amber-500 to-orange-500",
  },
  {
    nom: "Emma Laurent",
    role: "Directrice Produit, HealthPlus",
    contenu:
      "Une refonte complète de notre infrastructure cloud réalisée dans les délais et avec une qualité exceptionnelle. Leur support post-livraison est exemplaire.",
    note: 5,
    avatar: "EL",
    logoEntreprise: "HP",
    projet: "Infrastructure Cloud",
    couleur: "from-emerald-500 to-teal-500",
  },
];

/* ================= MAIN SECTION ================= */
export const ReviewsSection = () => {
  const [avisActif, setAvisActif] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Responsive detection
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || isMobile) return;

    const startAutoPlay = () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      
      intervalRef.current = setInterval(() => {
        setAvisActif((prev) => (prev + 1) % avisClients.length);
      }, 5000);
    };

    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, isMobile]);

  const handleNext = useCallback(() => {
    setAvisActif((prev) => (prev + 1) % avisClients.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  const handlePrev = useCallback(() => {
    setAvisActif((prev) => (prev - 1 + avisClients.length) % avisClients.length);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  return (
    <section 
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/10 rounded-full"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.sin(i) * 20, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${(i * 7) % 100}%`,
              top: `${20 + (i * 5) % 60}%`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <EnTeteSection />
        
        {/* Mobile Layout */}
        {isMobile ? (
          <MobileCarousel
            avis={avisClients}
            avisActif={avisActif}
            onNext={handleNext}
            onPrev={handlePrev}
            onSelect={setAvisActif}
          />
        ) : (
          <DesktopLayout
            avis={avisClients}
            avisActif={avisActif}
            onNext={handleNext}
            onPrev={handlePrev}
            onSelect={setAvisActif}
          />
        )}

        {/* Stats Bar */}
        {/* <StatsBar avisActif={avisActif} total={avisClients.length} /> */}
      </div>
    </section>
  );
};

/* ================= HEADER ================= */
const EnTeteSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12 md:mb-20 px-4"
  >
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 mb-4 md:mb-6"
    >
      <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-blue-400" />
      <span className="text-xs md:text-sm font-semibold text-blue-300">
        Témoignages Clients
      </span>
    </motion.div>

    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
      Approuvé par <GradientText>des leaders du secteur</GradientText>
    </h2>

    <p className="text-base md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
      Découvrez l'expérience de nos clients à travers des projets innovants
    </p>
  </motion.div>
);

/* ================= MOBILE CAROUSEL ================= */
interface MobileCarouselProps {
  avis: AvisClient[];
  avisActif: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const MobileCarousel = ({ avis, avisActif, onNext, onPrev, onSelect }: MobileCarouselProps) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) onNext();
    if (isRightSwipe) onPrev();

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <div className="md:hidden space-y-6">
      {/* Current Review Card */}
      <div
        className="relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={avisActif}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
          >
            <ReviewCardMobile {...avis[avisActif]} />
          </motion.div>
        </AnimatePresence>

        {/* Swipe Indicator */}
      </div>
       

      {/* Navigation Dots */}
      <div className="flex justify-center gap-2 pt-4">
        {avis.map((_, index) => (
          <button
            key={index}
            onClick={() => onSelect(index)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500/50",
              index === avisActif
                ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500"
                : "w-2 bg-white/30 hover:bg-white/50"
            )}
            aria-label={`Aller à l'avis ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-4 pt-6">
        <button
          onClick={onPrev}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 active:scale-95 transition-all"
          aria-label="Avis précédent"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={onNext}
          className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 active:scale-95 transition-all"
          aria-label="Avis suivant"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

/* ================= DESKTOP LAYOUT ================= */
interface DesktopLayoutProps {
  avis: AvisClient[];
  avisActif: number;
  onNext: () => void;
  onPrev: () => void;
  onSelect: (index: number) => void;
}

const DesktopLayout = ({ avis, avisActif, onNext, onPrev, onSelect }: DesktopLayoutProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="hidden md:block relative">
      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {/* Sidebar with all reviews */}
        <div className="col-span-4 lg:col-span-3">
          <div className="sticky top-24 space-y-4">
            {avis.map((avis, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSelect(index)}
                className={cn(
                  "w-full text-left p-4 rounded-2xl transition-all duration-300",
                  "backdrop-blur-sm border",
                  "focus:outline-none focus:ring-2 focus:ring-blue-500/50",
                  index === avisActif
                    ? "bg-gradient-to-r from-white/10 to-white/5 border-blue-500/30 shadow-lg shadow-blue-500/10"
                    : "bg-white/5 border-white/10 hover:bg-white/10 hover:border-blue-500/20"
                )}
              >
                <div className="flex items-center gap-3">
                  <div 
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold",
                      "transition-all duration-300",
                      index === avisActif ? "scale-110" : "scale-100"
                    )}
                    style={{
                      background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                      // @ts-ignore
                      "--tw-gradient-from": avis.couleur.split(' ')[0],
                      "--tw-gradient-to": avis.couleur.split(' ')[2],
                    }}
                  >
                    {avis.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white truncate">{avis.nom}</h4>
                    <p className="text-xs text-gray-400 truncate">{avis.role}</p>
                  </div>
                  
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Main Review Display */}
        <div className="col-span-8 lg:col-span-9">
          <div className="relative h-full min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={avisActif}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              >
                <ReviewCardDesktop {...avis[avisActif]} />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Controls */}
            {/* <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <button
                onClick={onPrev}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all active:scale-95"
                aria-label="Avis précédent"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={onNext}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all active:scale-95"
                aria-label="Avis suivant"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= MOBILE REVIEW CARD ================= */
const ReviewCardMobile = (props: AvisClient) => {
  const { nom, role, contenu, note, avatar, logoEntreprise, projet, couleur } = props;

  return (
    <motion.div
      whileTap={{ scale: 0.98 }}
      className="relative rounded-3xl p-6 backdrop-blur-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 overflow-hidden"
    >
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          background: `linear-gradient(to right, var(--tw-gradient-stops))`,
          // @ts-ignore
          "--tw-gradient-from": couleur.split(' ')[0],
          "--tw-gradient-to": couleur.split(' ')[2],
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="relative">
            <div 
              className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg"
              style={{
                background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                // @ts-ignore
                "--tw-gradient-from": couleur.split(' ')[0],
                "--tw-gradient-to": couleur.split(' ')[2],
              }}
            >
              {avatar}
            </div>
            {logoEntreprise && (
              <div className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center">
                <span className="text-xs font-bold text-white">{logoEntreprise}</span>
              </div>
            )}
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-white text-lg">{nom}</h3>
            <p className="text-gray-400 text-sm mb-2">{role}</p>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-4 h-4",
                      i < note ? "fill-yellow-400 text-yellow-400" : "fill-gray-800 text-gray-800"
                    )}
                  />
                ))}
              </div>
              <span className="text-sm text-yellow-400">{note}/5</span>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="relative mb-6">
          <Quote className="absolute -top-2 -left-2 w-6 h-6 text-blue-400/20" />
          <p className="text-gray-200 leading-relaxed pl-6">"{contenu}"</p>
        </div>

        {/* Project Badge */}
        {projet && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Award className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300">{projet}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

/* ================= DESKTOP REVIEW CARD ================= */
const ReviewCardDesktop = (props: AvisClient) => {
  const { nom, role, contenu, note, avatar, logoEntreprise, projet, couleur } = props;

  return (
    <div className="relative h-full rounded-3xl overflow-hidden group">
      {/* Animated Background */}


      {/* Card Content */}
      <div className="relative h-full p-8 backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl">
        <div className="h-full flex flex-col">
          {/* Top Section */}
          <div className="flex-1">
            {/* Large Quote Icon */}
            <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
              <Quote className="w-24 h-24" />
            </div>

            {/* Review Content */}
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center text-white font-bold text-2xl"
                  style={{
                    background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                    // @ts-ignore
                    "--tw-gradient-from": couleur.split(' ')[0],
                    "--tw-gradient-to": couleur.split(' ')[2],
                  }}
                >
                  {avatar}
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{nom}</h3>
                  <p className="text-gray-400 mb-3">{role}</p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "w-6 h-6 transition-transform duration-300",
                            "group-hover:scale-110 group-hover:rotate-12",
                            i < note 
                              ? "fill-yellow-400 text-yellow-400" 
                              : "fill-gray-800 text-gray-800"
                          )}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-semibold text-yellow-400">{note}/5</span>
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <div className="relative pl-10">
                <Quote className="absolute left-0 top-0 w-8 h-8 text-blue-400/30" />
                <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed italic font-light">
                  "{contenu}"
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-4 mt-4 border-t border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {logoEntreprise && (
                  <div className="px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <span className="text-sm font-medium text-white">{logoEntreprise}</span>
                  </div>
                )}
              </div>
              
              {projet && (
                <div className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-cyan-400" />
                    <span className="text-lg font-semibold text-cyan-300">{projet}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ================= STATS BAR ================= */
const StatsBar = ({ avisActif, total }: { avisActif: number; total: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.4 }}
    className="mt-12 md:mt-20 px-4"
  >
    <div className="max-w-2xl mx-auto">
      <div className="grid grid-cols-3 gap-4 text-center">
        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
          <div className="text-3xl font-bold text-white mb-2">{total}+</div>
          <div className="text-sm text-gray-400">Avis clients</div>
        </div>
        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
          <div className="text-3xl font-bold text-white mb-2">5.0</div>
          <div className="text-sm text-gray-400">Note moyenne</div>
        </div>
        <div className="p-6 rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
          <div className="text-3xl font-bold text-white mb-2">100%</div>
          <div className="text-sm text-gray-400">Satisfaction</div>
        </div>
      </div>
    </div>
  </motion.div>
);