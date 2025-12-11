// components/ui/GlowingButton.tsx (Updated)
"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const GlowingButton = ({ children, className, ...props }: GlowingButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(
        "relative rounded-xl bg-linear-to-r from-blue-600 to-cyan-600",
        "px-8 py-4 font-semibold text-white shadow-2xl",
        "transition-all duration-300 hover:shadow-blue-500/25 hover:shadow-xl",
        "group overflow-hidden",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute -inset-1 bg-linear-to-r from-blue-400 to-cyan-400 blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
    </motion.button>
  );
};