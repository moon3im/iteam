// components/ui/FloatingElements.tsx
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className={cn(
            "absolute rounded-full",
            i % 3 === 0 ? "bg-linear-to-r from-blue-500/20 to-cyan-500/20" :
            i % 3 === 1 ? "bg-linear-to-r from-purple-500/20 to-pink-500/20" :
            "bg-linear-to-r from-yellow-500/20 to-orange-500/20"
          )}
          style={{
            width: Math.random() * 200 + 50,
            height: Math.random() * 200 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, Math.random() * 100 - 50, 0],
            x: [0, Math.random() * 100 - 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};