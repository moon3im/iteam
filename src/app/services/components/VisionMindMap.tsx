"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  Shield,
  Brain,
  Zap,
  ArrowRight,
  X,
  CheckCircle,
  Server,
  DatabaseBackup,
  Sparkles,
  Target,
  Cpu,
  GitBranch,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GlowingButton } from "@/components/ui/GlowingButton";

interface ServiceNode {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  features: string[];
  details: {
    title: string;
    description: string;
    items: string[];
  };
}

export const ServicesMindMap = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: ServiceNode[] = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code2 className="w-6 h-6" />,
      description: "Modern web applications built with cutting-edge technologies",
      color: "from-blue-500 to-cyan-500",
      features: ["React/Next.js", "TypeScript", "Responsive Design", "PWA"],
      details: {
        title: "Full-Stack Web Solutions",
        description:
          "We build scalable web applications with modern frameworks and best practices.",
        items: [
          "Custom Web Applications",
          "E-commerce Platforms",
          "CRM & ERP Systems",
          "Real-time Dashboards",
          "API Development & Integration",
          "Progressive Web Apps",
        ],
      },
    },
    {
      id: 2,
      title: "Mobile Apps",
      icon: <Smartphone className="w-6 h-6" />,
      description: "Native & cross-platform mobile solutions",
      color: "from-purple-500 to-pink-500",
      features: ["React Native", "Flutter", "iOS/Android", "App Store"],
      details: {
        title: "Mobile Application Development",
        description:
          "Native and cross-platform mobile applications for all devices.",
        items: [
          "iOS & Android Apps",
          "Cross-platform Solutions",
          "App Store Optimization",
          "Push Notifications",
          "Mobile Analytics",
          "Offline Functionality",
        ],
      },
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      description: "User-centered designs that convert",
      color: "from-cyan-500 to-emerald-500",
      features: ["Figma", "Prototyping", "User Testing", "Design Systems"],
      details: {
        title: "User Experience Design",
        description:
          "Creating intuitive and beautiful interfaces that users love.",
        items: [
          "User Research & Testing",
          "Wireframing & Prototyping",
          "Design Systems",
          "Brand Identity",
          "Interaction Design",
          "Accessibility Compliance",
        ],
      },
    },
    {
      id: 4,
      title: "Cloud Solutions",
      icon: <Cloud className="w-6 h-6" />,
      description: "Scalable cloud infrastructure",
      color: "from-indigo-500 to-blue-500",
      features: ["AWS/Azure", "DevOps", "Microservices", "Kubernetes"],
      details: {
        title: "Cloud Architecture & DevOps",
        description:
          "Enterprise-grade cloud infrastructure and deployment pipelines.",
        items: [
          "Cloud Migration",
          "Serverless Architecture",
          "Container Orchestration",
          "CI/CD Pipelines",
          "Infrastructure as Code",
          "24/7 Monitoring",
        ],
      },
    },
    {
      id: 5,
      title: "AI/ML Solutions",
      icon: <Brain className="w-6 h-6" />,
      description: "Intelligent automation systems",
      color: "from-amber-500 to-orange-500",
      features: ["Machine Learning", "Computer Vision", "NLP", "Predictive Analytics"],
      details: {
        title: "Artificial Intelligence",
        description: "Implementing AI and machine learning to solve complex business problems.",
        items: [
          "Predictive Analytics",
          "Natural Language Processing",
          "Computer Vision",
          "Recommendation Systems",
          "Automated Workflows",
          "Data Science Consulting",
        ],
      },
    },
    {
      id: 6,
      title: "Security",
      icon: <Shield className="w-6 h-6" />,
      description: "Enterprise-grade security",
      color: "from-red-500 to-pink-500",
      features: ["Penetration Testing", "Security Audit", "Compliance", "Encryption"],
      details: {
        title: "Cybersecurity Services",
        description: "Protecting your digital assets with advanced security measures.",
        items: [
          "Penetration Testing",
          "Security Audits",
          "GDPR Compliance",
          "Zero Trust Architecture",
          "Data Encryption",
          "Incident Response",
        ],
      },
    },
    {
      id: 7,
      title: "DevOps",
      icon: <Server className="w-6 h-6" />,
      description: "Automated deployment pipelines",
      color: "from-green-500 to-lime-500",
      features: ["CI/CD", "Docker", "Kubernetes", "Monitoring"],
      details: {
        title: "DevOps & Cloud Operations",
        description: "Efficient deployment and monitoring of applications.",
        items: [
          "Automated Deployment",
          "Monitoring & Alerts",
          "Containerization",
          "Cloud Integration",
        ],
      },
    },
    {
      id: 8,
      title: "Data Management",
      icon: <DatabaseBackup className="w-6 h-6" />,
      description: "Database design and management",
      color: "from-purple-400 to-pink-400",
      features: ["SQL/NoSQL", "Data Warehousing", "ETL", "Analytics"],
      details: {
        title: "Database & Analytics",
        description: "Organize, manage and analyze your data effectively.",
        items: [
          "Database Design",
          "Data Warehousing",
          "ETL Pipelines",
          "Data Analytics",
        ],
      },
    },
  ];

  // Grid positions for services (3x3) excluding center (2,2)
  const gridPositions: [number, number][] = [
    [1, 1],
    [1, 2],
    [1, 3],
    [2, 1],
    [2, 3],
    [3, 1],
    [3, 2],
    [3, 3],
  ];

  // Calculate curved line control points for each position
  const getLinePath = (row: number, col: number) => {
    const centerX = 50;
    const centerY = 50;
    
    // Map grid positions to percentages
    const positions = {
      1: { x: 25, y: 25 },
      2: { x: 50, y: 25 },
      3: { x: 75, y: 25 },
    };

    const endX = positions[col as keyof typeof positions].x;
    const endY = positions[row as keyof typeof positions].y;
    
    // Adjust control points based on position for different curve directions
    let controlX1 = centerX;
    let controlY1 = centerY;
    let controlX2 = endX;
    let controlY2 = endY;

    // Custom curve control points for each position
    if (row === 1 && col === 1) { // Top-left
      controlX1 = 35;
      controlY1 = 35;
      controlX2 = 30;
      controlY2 = 30;
    } else if (row === 1 && col === 2) { // Top-center
      controlX1 = 50;
      controlY1 = 35;
      controlX2 = 50;
      controlY2 = 30;
    } else if (row === 1 && col === 3) { // Top-right
      controlX1 = 65;
      controlY1 = 35;
      controlX2 = 70;
      controlY2 = 30;
    } else if (row === 2 && col === 1) { // Middle-left
      controlX1 = 35;
      controlY1 = 50;
      controlX2 = 30;
      controlY2 = 50;
    } else if (row === 2 && col === 3) { // Middle-right
      controlX1 = 65;
      controlY1 = 50;
      controlX2 = 70;
      controlY2 = 50;
    } else if (row === 3 && col === 1) { // Bottom-left
      controlX1 = 35;
      controlY1 = 65;
      controlX2 = 30;
      controlY2 = 70;
    } else if (row === 3 && col === 2) { // Bottom-center
      controlX1 = 50;
      controlY1 = 65;
      controlX2 = 50;
      controlY2 = 70;
    } else if (row === 3 && col === 3) { // Bottom-right
      controlX1 = 65;
      controlY1 = 65;
      controlX2 = 70;
      controlY2 = 70;
    }

    return { centerX, centerY, endX, endY, controlX1, controlY1, controlX2, controlY2 };
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center  p-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      {/* Animated Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Main Grid Container */}
      <div className="relative w-full max-w-6xl">
        {/* Connection Lines SVG */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
          <defs>
            {/* Gradients for connections */}
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8" />
            </linearGradient>
            
            <linearGradient id="dot-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>

            {/* Arrowhead marker */}
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon
                points="0 0, 10 3.5, 0 7"
                fill="#06b6d4"
              />
            </marker>
          </defs>

          {/* Animated Connection Lines */}
          {gridPositions.map(([row, col], index) => {
            const path = getLinePath(row, col);
            
            return (
              <g key={`line-${index}`}>
                {/* Curved path */}
                <motion.path
                  d={`M ${path.centerX}% ${path.centerY}% Q ${path.controlX1}% ${path.controlY1}%, ${path.endX}% ${path.endY}%`}
                  stroke="url(#line-gradient)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="opacity-70"
                  markerEnd="url(#arrowhead)"
                />
                
                {/* Animated dot along the path */}
                <motion.circle
                  r="3"
                  fill="url(#dot-gradient)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path={`M ${path.centerX}% ${path.centerY}% Q ${path.controlX1}% ${path.controlY1}%, ${path.endX}% ${path.endY}%`}
                    rotate="auto"
                  />
                </motion.circle>
              </g>
            );
          })}
        </svg>

        {/* 3x3 Grid Layout */}
        <div className="grid grid-cols-3 grid-rows-3 gap-12 max-w-6xl w-full relative">
          {/* Render Service Cards */}
          {gridPositions.map((pos, index) => {
            const service = services[index];
            const [row, col] = pos;
            
            return (
              <div
                key={service.id}
                className={`col-start-${col} row-start-${row} flex items-center justify-center relative`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring" }}
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                  onClick={() =>
                    setActiveService(activeService === service.id ? null : service.id)
                  }
                  className="relative w-full max-w-xs"
                >
                  {/* Cloud-shaped Service Card */}
                  <motion.div
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    animate={{
                      borderColor: hoveredService === service.id || activeService === service.id 
                        ? "rgba(6, 182, 212, 0.6)" 
                        : "rgba(255, 255, 255, 0.15)",
                      boxShadow: hoveredService === service.id || activeService === service.id 
                        ? "0 20px 60px rgba(6, 182, 212, 0.3)" 
                        : "0 10px 40px rgba(0, 0, 0, 0.2)",
                    }}
                    className={cn(
                      "p-6 backdrop-blur-xl border cursor-pointer rounded-2xl",
                      "bg-gradient-to-br from-white/10 via-white/5 to-white/10",
                      "transition-all duration-300",
                      "transform-gpu"
                    )}
                   
                  >
                    {/* Glow Effect */}
                    <motion.div
                      animate={{
                        opacity: hoveredService === service.id || activeService === service.id ? 0.8 : 0,
                        scale: hoveredService === service.id || activeService === service.id ? 1.1 : 1,
                      }}
                      className={cn(
                        "absolute -inset-0.5 blur transition-opacity duration-300"
                      )}
                      style={{
                        clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)",
                        borderRadius: "30% 10% 30% 10% / 10% 30% 10% 30%",
                        background: `linear-gradient(135deg, ${service.color})`,
                      }}
                    />

                    {/* Icon with floating animation */}
                    <motion.div
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="mb-4"
                    >
                      <div className={cn(
                        "w-14 h-14 flex items-center justify-center",
                        "rounded-xl",
                        "bg-gradient-to-br from-white/15 to-white/5",
                        "border border-white/10",
                        "shadow-lg"
                      )}>
                        {/* Icon glow */}
                        <motion.div
                          animate={{
                            scale: hoveredService === service.id ? 1.2 : 1,
                          }}
                          className="absolute inset-0 rounded-xl blur"
                          style={{
                            background: `linear-gradient(135deg, ${service.color})`,
                            opacity: 0.3
                          }}
                        />
                        <div className={cn(
                          "relative z-10 text-xl",
                          service.color.replace("from-", "text-").split(" ")[0]
                        )}>
                          {service.icon}
                        </div>
                      </div>
                    </motion.div>
                    
                    {/* Title */}
                    <h3 className="text-lg font-bold text-white text-center mb-2">{service.title}</h3>
                    
                    {/* Description */}
                    <p className="text-gray-400 text-xs text-center mb-3 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features as floating tags */}
                    <div className="flex flex-wrap gap-1.5 justify-center">
                      {service.features.slice(0, 2).map((feature, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className="px-2 py-1 rounded-full bg-white/5 text-[10px] text-gray-300 border border-white/10 hover:border-cyan-500/30 transition-all"
                        >
                          {feature}
                        </motion.span>
                      ))}
                    </div>
                    
                    {/* Click indicator */}
                    <div className="flex items-center justify-center gap-1 mt-4">
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
                      <span className="text-[10px] text-gray-500 ml-1">Learn more</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            );
          })}

          {/* Center Node */}
          <div className="col-start-2 row-start-2 flex items-center justify-center relative">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1, 
                type: "spring",
                stiffness: 150,
                damping: 15
              }}
              className="relative"
            >
              {/* Outer rotating rings */}
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 20, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
                className="absolute -inset-12 rounded-full border border-blue-500/30"
              />
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear"
                }}
                className="absolute -inset-16 rounded-full border border-cyan-500/20"
              />
              
              {/* Pulsing glow */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -inset-8 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-full blur-xl"
              />

              {/* Main center node */}
              <div className="relative w-48 h-48 rounded-full  backdrop-blur-2xl  shadow-2xl shadow-blue-500/30 flex flex-col items-center justify-center">
                {/* Inner rotating element */}

                {/* Logo content */}
               
                <img src={"images/serviceLogo.png"} className="" />  
                  
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Service Details Panel */}
      <AnimatePresence>
        {activeService && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-full px-4"
          >
            {(() => {
              const service = services.find(s => s.id === activeService);
              if (!service) return null;
              
              return (
                <div className="relative p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/10 shadow-2xl shadow-blue-500/30">
                  {/* Close button */}
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setActiveService(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                  
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row items-center gap-6 mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className={cn(
                        "w-20 h-20 flex items-center justify-center rounded-2xl",
                        "bg-gradient-to-br from-white/15 to-white/5",
                        "border border-white/10"
                      )}
                    >
                      <div className={cn(
                        "text-3xl",
                        service.color.replace("from-", "text-").split(" ")[0]
                      )}>
                        {service.icon}
                      </div>
                    </motion.div>
                    <div className="text-center lg:text-left">
                      <h2 className="text-2xl lg:text-3xl font-bold text-white mb-2">
                        {service.details.title}
                      </h2>
                      <p className="text-gray-400">
                        {service.details.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Features List */}
                  <div className="space-y-4 mb-8">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                      {service.details.items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all"
                        >
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0",
                            "bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                          )}>
                            <CheckCircle className="w-4 h-4 text-green-400" />
                          </div>
                          <span className="text-gray-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <GlowingButton className="w-full py-4">
                      <span className="flex items-center justify-center gap-3">
                        Start Your {service.title} Project
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </GlowingButton>
                  </motion.div>
                </div>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Instructions */}
     
    </div>
  );
};