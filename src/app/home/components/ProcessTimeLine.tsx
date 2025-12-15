// components/pages/components/ProcessTimeline.tsx
"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ProcessStep {
  number: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export const ProcessTimeline = ({ steps }: ProcessTimelineProps) => {
  const [activeStep, setActiveStep] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const sequence = async () => {
      for (let i = 0; i < steps.length; i++) {
        setActiveStep(i);
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      // Reset to first step after completing sequence
      setActiveStep(0);
    };

    sequence();
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/30 via-transparent to-cyan-950/20" />
        
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-[0.02] bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            <span className="text-sm font-semibold text-cyan-300">Step by Step</span>
          </motion.div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A clear and structured workflow designed to deliver reliable, high-quality results.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              className="h-full w-full bg-gradient-to-b from-blue-500 via-cyan-500 to-blue-500"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            
            {/* Progress Indicator */}
            <motion.div
              className="absolute top-0 z-0 w-full bg-gradient-to-b from-blue-400 to-cyan-400"
              initial={{ height: "0%" }}
              animate={{ height: `${((activeStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps Container */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  onMouseEnter={() => setActiveStep(index)}
                  className="relative flex items-center"
                >
                  {/* Step Card */}
                  <div className={cn(
                    "relative w-full max-w-xl",
                    isLeft ? "mr-auto pr-20" : "ml-auto pl-20"
                  )}>
                    {/* Glow Effect */}
                    <motion.div
                      className={cn(
                        "absolute -inset-0.5 rounded-2xl blur",
                        "opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                        activeStep === index && "opacity-100"
                      )}
                      style={{
                        background: `linear-gradient(to right, ${step.color})`,
                      }}
                    />

                    {/* Card Content */}
                    <motion.div
                      whileHover={{ 
                        scale: 1.02,
                        boxShadow: "0 20px 60px rgba(6, 182, 212, 0.15)"
                      }}
                      animate={{
                        borderColor: activeStep === index 
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
                      {/* Large Step Number */}
                      <motion.div
                        animate={{
                          scale: activeStep === index ? 1.1 : 1,
                          opacity: activeStep === index ? 0.3 : 0.15,
                        }}
                        className={cn(
                          "absolute text-8xl font-black select-none",
                          isLeft ? "right-8 top-4" : "right-8 top-4"
                        )}
                        style={{
                          WebkitTextStroke: `2px ${step.color.split(' ')[0].replace('from-', '')}`
                        }}
                      >
                        {step.number}
                      </motion.div>

                      {/* Step Header */}
                      <div className="flex items-center gap-6 mb-6">
                        {/* Large Icon Container */}
                        <motion.div
                          animate={{
                            scale: activeStep === index ? 1.1 : 1,
                            rotate: activeStep === index ? [0, 10, -10, 0] : 0,
                          }}
                          transition={{ duration: 0.5 }}
                          className="relative"
                        >
                          {/* Icon Glow */}
                          <motion.div
                            animate={{
                              scale: activeStep === index ? 1.2 : 1,
                              opacity: activeStep === index ? 0.5 : 0,
                            }}
                            className="absolute -inset-3 rounded-xl blur"
                            style={{
                              background: `linear-gradient(to right, ${step.color})`,
                            }}
                          />
                          
                          {/* Icon */}
                          <div
                            className={cn(
                              "relative w-16 h-16 rounded-xl",
                              "flex items-center justify-center",
                              "border border-white/10",
                              "transition-all duration-300",
                              "group-hover:border-white/30"
                            )}
                            style={{
                              background: `linear-gradient(135deg, ${step.color})`,
                            }}
                          >
                            <motion.div
                              animate={{
                                scale: activeStep === index ? 1.2 : 1,
                              }}
                              className="text-white"
                            >
                              {step.icon}
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Step Title */}
                        <div>
                          <motion.h3
                            animate={{
                              color: activeStep === index ? "#ffffff" : "#f3f4f6",
                            }}
                            className="text-2xl font-bold mb-2"
                          >
                            {step.title}
                          </motion.h3>
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-0.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
                            <span className="text-sm text-gray-400">Step {index + 1}</span>
                          </div>
                        </div>
                      </div>

                      {/* Step Description */}
                      <motion.p
                        animate={{
                          opacity: activeStep === index ? 1 : 0.8,
                        }}
                        className="text-gray-400 leading-relaxed text-lg"
                      >
                        {step.desc}
                      </motion.p>

                      {/* Progress Indicator Dots */}
                      <div className="flex items-center gap-2 mt-6">
                        {steps.map((_, i) => (
                          <motion.div
                            key={i}
                            animate={{
                              width: i <= index ? "24px" : "8px",
                              backgroundColor: i <= index 
                                ? step.color.split(' ')[0].replace('from-', '')
                                : "rgba(255, 255, 255, 0.1)",
                            }}
                            className="h-2 rounded-full transition-all duration-300"
                          />
                        ))}
                      </div>
                    </motion.div>

                    {/* Connection Line to Center */}
                   
                  </div>

                  {/* Timeline Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      animate={{
                        scale: activeStep === index ? 1.3 : 1,
                        boxShadow: activeStep === index 
                          ? "0 0 30px rgba(6, 182, 212, 0.8)" 
                          : "0 0 0px rgba(6, 182, 212, 0)",
                      }}
                      className="relative w-8 h-8 rounded-full z-100"
                    >
                      {/* Node Outer Ring */}
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
                          borderImage: `linear-gradient(to right, ${step.color}) 1`,
                        }}
                      />
                      
                      {/* Node Center */}
                      <div
                        className="absolute inset-2 rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${step.color})`,
                        }}
                      />
                      
                      {/* Active Indicator */}
                      <motion.div
                        animate={{
                          scale: activeStep === index ? [1, 1.5, 1] : 0,
                          opacity: activeStep === index ? [0, 0.5, 0] : 0,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                        }}
                        className="absolute -inset-4 rounded-full"
                        style={{
                          background: `linear-gradient(to right, ${step.color})`,
                        }}
                      />
                    </motion.div>

                    {/* Step Number on Node */}
                   
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Progress Bar at Bottom */}
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
              
              {/* Progress Steps */}
              <div className="absolute inset-0 flex">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 relative"
                    onClick={() => setActiveStep(i)}
                  >
                    <motion.div
                      animate={{
                        scale: activeStep === i ? 1.5 : 1,
                        backgroundColor: activeStep >= i 
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
            
            {/* Progress Labels */}
            <div className="flex justify-between mt-4 px-2">
              {steps.map((step, i) => (
                <button
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className={cn(
                    "text-sm font-medium transition-all duration-300",
                    activeStep === i 
                      ? "text-cyan-400 scale-110" 
                      : "text-gray-500 hover:text-gray-300"
                  )}
                >
                  {step.title}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};