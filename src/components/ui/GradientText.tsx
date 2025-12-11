// components/ui/GradientText.tsx (Updated)
"use client";

import { cn } from "@/lib/utils";

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export const GradientText = ({ children, className }: GradientTextProps) => {
  return (
    <span className={cn(
      "bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500",
      "bg-clip-text text-transparent",
      "animate-gradient bg-300%",
      className
    )}>
      {children}
    </span>
  );
};