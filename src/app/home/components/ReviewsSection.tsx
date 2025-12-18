// components/pages/sections/ReviewsSection.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, ChevronLeft, ChevronRight as ChevronRightIcon } from "lucide-react";
import { GradientText } from "@/components/ui/GradientText";
import { ReviewCard } from "../components/ReviewCard";

interface ReviewItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  companyLogo: string;
  project: string;
}

const reviews: ReviewItem[] = [
  {
    name: "Alex Johnson",
    role: "CEO, TechVision",
    content: "Transformed our digital presence completely. The team's expertise and attention to detail were exceptional.",
    rating: 5,
    avatar: "AJ",
    companyLogo: "TV",
    project: "E-commerce Platform"
  },
  {
    name: "Sarah Miller",
    role: "Marketing Director",
    content: "Our mobile app launch was a massive success. Professional, timely, and exceeded expectations.",
    rating: 5,
    avatar: "SM",
    companyLogo: "GR",
    project: "Mobile Banking App"
  },
  {
    name: "David Chen",
    role: "Startup Founder",
    content: "Technical expertise matched with creative vision. They delivered beyond what we imagined.",
    rating: 5,
    avatar: "DC",
    companyLogo: "SF",
    project: "SaaS Platform"
  },
  {
    name: "Maria Rodriguez",
    role: "Product Manager",
    content: "The team's agility and technical depth helped us pivot quickly and deliver ahead of schedule.",
    rating: 5,
    avatar: "MR",
    companyLogo: "IP",
    project: "IoT Dashboard"
  }
];

export const ReviewsSection = () => {
  const [activeReview, setActiveReview] = useState(0);

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
      <div className="max-w-6xl mx-auto">
        <SectionHeader />
        <ReviewsCarousel 
          reviews={reviews} 
          activeReview={activeReview} 
          setActiveReview={setActiveReview} 
        />
      </div>
    </section>
  );
};

const SectionHeader = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 mb-6">
        <MessageCircle className="w-5 h-5 text-blue-400" />
        <span className="text-sm font-semibold text-blue-300">Client Stories</span>
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold mb-8">
        Trusted by <GradientText>Industry Leaders</GradientText>
      </h2>
      <p className="text-xl text-gray-400 max-w-2xl mx-auto">
        See what our clients say about their journey with us
      </p>
    </motion.div>
  );
};

interface ReviewsCarouselProps {
  reviews: ReviewItem[];
  activeReview: number;
  setActiveReview: (index: number) => void;
}

const ReviewsCarousel = ({ reviews, activeReview, setActiveReview }: ReviewsCarouselProps) => {
  return (
    <div className="relative h-[400px] overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeReview}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 p-12"
        >
          <ReviewCard {...reviews[activeReview]} fullWidth />
        </motion.div>
      </AnimatePresence>

      <CarouselControls 
        reviews={reviews}
        activeReview={activeReview}
        setActiveReview={setActiveReview}
      />
    </div>
  );
};

interface CarouselControlsProps {
  reviews: ReviewItem[];
  activeReview: number;
  setActiveReview: (index: number) => void;
}

const CarouselControls = ({ reviews, activeReview, setActiveReview }: CarouselControlsProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
      <button
        onClick={() => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      
      <div className="flex items-center gap-2">
        {reviews.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveReview(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeReview 
                ? "w-8 bg-gradient-to-r from-blue-500 to-cyan-500" 
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>
      
      <button
        onClick={() => setActiveReview((prev) => (prev + 1) % reviews.length)}
        className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
      >
        <ChevronRightIcon className="w-5 h-5" />
      </button>
    </div>
  );
};