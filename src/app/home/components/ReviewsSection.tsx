"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
} from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ReviewCard } from "../components/ReviewCard";

/* ================= TYPES ================= */

interface AvisClient {
  nom: string;
  role: string;
  contenu: string;
  note: number;
  avatar: string;
  logoEntreprise?: string;
  projet?: string;
}

/* ================= DATA ================= */
const avisClients = [
  {
    nom: "Alex Johnson",
    role: "CEO, TechVision",
    contenu:
      "Ils ont complètement transformé notre présence digitale. Un niveau d’expertise exceptionnel.",
    note: 5,
    avatar: "AJ",
    logoEntreprise: "TV",
    projet: "Plateforme E-commerce",
  },
  {
    nom: "Sarah Miller",
    role: "Directrice Marketing",
    contenu:
      "Le lancement de notre application mobile a été un énorme succès.",
    note: 5,
    avatar: "SM",
    logoEntreprise: "GR",
    projet: "Application Bancaire Mobile",
  },
];
 [ /* ← données ci-dessus */ ];

/* ================= SECTION ================= */

export const ReviewsSection = () => {
  const [avisActif, setAvisActif] = useState<number>(0);

  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <EnTeteSection />
        <CarouselAvis
          avis={avisClients}
          avisActif={avisActif}
          setAvisActif={setAvisActif}
        />
      </div>
    </section>
  );
};

/* ================= HEADER ================= */

const EnTeteSection = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    className="text-center mb-16"
  >
    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 mb-6">
      <MessageCircle className="w-5 h-5 text-blue-400" />
      <span className="text-sm font-semibold text-blue-300">
        Témoignages Clients
      </span>
    </div>

    <h2 className="text-4xl sm:text-5xl font-bold mb-8">
      Approuvé par <GradientText>des leaders du secteur</GradientText>
    </h2>

    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
      Découvrez l’expérience de nos clients
    </p>
  </motion.div>
);

/* ================= CAROUSEL ================= */

interface CarouselAvisProps {
  avis: AvisClient[];
  avisActif: number;
  setAvisActif: React.Dispatch<React.SetStateAction<number>>;
}

const CarouselAvis = ({
  avis,
  avisActif,
  setAvisActif,
}: CarouselAvisProps) => {
  return (
    <div className="relative h-[420px] overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={avisActif}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 p-12"
        >
          <ReviewCard {...avis[avisActif]} />
        </motion.div>
      </AnimatePresence>

      <ControlesCarousel
        total={avis.length}
        avisActif={avisActif}
        setAvisActif={setAvisActif}
      />
    </div>
  );
};

/* ================= CONTROLS ================= */

interface ControlesCarouselProps {
  total: number;
  avisActif: number;
  setAvisActif: React.Dispatch<React.SetStateAction<number>>;
}

const ControlesCarousel = ({
  total,
  avisActif,
  setAvisActif,
}: ControlesCarouselProps) => (
  <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
    <button
      type="button"
      onClick={() => setAvisActif((p) => (p - 1 + total) % total)}
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50"
    >
      <ChevronLeft />
    </button>

    <div className="flex gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          onClick={() => setAvisActif(i)}
          className={`h-2 rounded-full transition-all ${
            i === avisActif
              ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500"
              : "w-2 bg-white/30"
          }`}
        />
      ))}
    </div>

    <button
      type="button"
      onClick={() => setAvisActif((p) => (p + 1) % total)}
      className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50"
    >
      <ChevronRightIcon />
    </button>
  </div>
);
