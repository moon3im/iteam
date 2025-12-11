// components/ui/ReviewCard.tsx
"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface ReviewCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
  index: number;
}

export const ReviewCard = ({ name, role, content, rating, avatar, index }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative p-6 rounded-2xl backdrop-blur-sm border border-white/10 bg-linear-to-b from-white/5 to-transparent hover:border-white/20 transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold">
          {avatar}
        </div>
        <div>
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-400">{role}</p>
          <div className="flex items-center gap-1 mt-1">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-300">{content}</p>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-4xl text-white/10">"</div>
      </div>
    </motion.div>
  );
};