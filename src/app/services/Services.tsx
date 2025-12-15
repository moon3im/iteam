// components/pages/Services.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code2, 
  Smartphone, 
  Palette, 
  Server, 
  Cloud, 
  Shield, 
  Database,
  Zap,
  Globe,
  Cpu,
  GitBranch,
  Layers,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Target,
  Award,
  Rocket,
  Users,
  BarChart3,
  Lock,
  Brain,
  Network,
  GitMerge,
  CircleDot
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { TechBackground } from "@/components/ui/TechBackground";
import  { ServicesMindMap } from "./components/VisionMindMap";

interface ServiceNode {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  color: string;
  position: { x: number; y: number };
  features: string[];
  details: {
    title: string;
    description: string;
    items: string[];
  };
}

interface Particle {
  id: number;
  left: number;
  top: number;
  duration: number;
  delay: number;
}

export const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
const [particles, setParticles] = useState<Particle[]>([]);
useEffect(() => {
  const generated = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 5,
  }));

  setParticles(generated);
}, []);
  const services: ServiceNode[] = [
    {
      id: 1,
      title: "Web Development",
      icon: <Code2 className="w-8 h-8" />,
      description: "Modern web applications built with cutting-edge technologies",
      color: "from-blue-500 to-cyan-500",
      position: { x: 70, y: 30 },
      features: ["React/Next.js", "TypeScript", "Responsive Design", "PWA"],
      details: {
        title: "Full-Stack Web Solutions",
        description: "We build scalable web applications with modern frameworks and best practices.",
        items: [
          "Custom Web Applications",
          "E-commerce Platforms",
          "CRM & ERP Systems",
          "Real-time Dashboards",
          "API Development & Integration",
          "Progressive Web Apps"
        ]
      }
    },
    {
      id: 2,
      title: "Mobile Apps",
      icon: <Smartphone className="w-8 h-8" />,
      description: "Native & cross-platform mobile solutions",
      color: "from-purple-500 to-pink-500",
      position: { x: 30, y: 50 },
      features: ["React Native", "Flutter", "iOS/Android", "App Store"],
      details: {
        title: "Mobile Application Development",
        description: "Native and cross-platform mobile applications for all devices.",
        items: [
          "iOS & Android Apps",
          "Cross-platform Solutions",
          "App Store Optimization",
          "Push Notifications",
          "Mobile Analytics",
          "Offline Functionality"
        ]
      }
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <Palette className="w-8 h-8" />,
      description: "User-centered designs that convert",
      color: "from-cyan-500 to-emerald-500",
      position: { x: 50, y: 70 },
      features: ["Figma", "Prototyping", "User Testing", "Design Systems"],
      details: {
        title: "User Experience Design",
        description: "Creating intuitive and beautiful interfaces that users love.",
        items: [
          "User Research & Testing",
          "Wireframing & Prototyping",
          "Design Systems",
          "Brand Identity",
          "Interaction Design",
          "Accessibility Compliance"
        ]
      }
    },
    {
      id: 4,
      title: "Cloud Solutions",
      icon: <Cloud className="w-8 h-8" />,
      description: "Scalable cloud infrastructure",
      color: "from-indigo-500 to-blue-500",
      position: { x: 70, y: 50 },
      features: ["AWS/Azure", "DevOps", "Microservices", "Kubernetes"],
      details: {
        title: "Cloud Architecture & DevOps",
        description: "Enterprise-grade cloud infrastructure and deployment pipelines.",
        items: [
          "Cloud Migration",
          "Serverless Architecture",
          "Container Orchestration",
          "CI/CD Pipelines",
          "Infrastructure as Code",
          "24/7 Monitoring"
        ]
      }
    },
    {
      id: 5,
      title: "AI/ML Solutions",
      icon: <Brain className="w-8 h-8" />,
      description: "Intelligent automation systems",
      color: "from-amber-500 to-orange-500",
      position: { x: 50, y: 30 },
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
          "Data Science Consulting"
        ]
      }
    },
    {
      id: 6,
      title: "Security",
      icon: <Shield className="w-8 h-8" />,
      description: "Enterprise-grade security",
      color: "from-red-500 to-pink-500",
      position: { x: 30, y: 70 },
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
          "Incident Response"
        ]
      }
    }
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      
      
      {/* Animated Particles */}
     <div className="fixed inset-0 pointer-events-none">
  {particles.map(p => (
    <motion.div
      key={p.id}
      className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
      style={{
        left: `${p.left}%`,
        top: `${p.top}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0, 1, 0],
      }}
      transition={{
        duration: p.duration,
        repeat: Infinity,
        delay: p.delay,
      }}
    />
  ))}
</div>

    <TechBackground />
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 mb-8"
            >
              <Network className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">Our Services</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              Digital <GradientText>Solutions</GradientText>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital services designed to transform your business and drive growth in the modern landscape.
            </p>
          </motion.div>

          {/* Mind Map Section */}
          <ServicesMindMap />
 <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 opacity-60">
        <div className="flex items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-blue-500"
            />
            <span>Hover cards to see glow effect</span>
          </div>
          <div className="w-px h-4 bg-white/20" />
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="w-2 h-2 rounded-full bg-cyan-500"
            />
            <span>Click for detailed information</span>
          </div>
        </div>
      </div>
          {/* Service Details */}
          <AnimatePresence>
            {activeService && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="mt-20"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10">
                  {(() => {
                    const service = services.find(s => s.id === activeService);
                    if (!service) return null;
                    
                    return (
                      <>
                        <div className="flex items-center justify-between mb-8">
                          <div className="flex items-center gap-4">
                            <div className={cn(
                              "w-16 h-16 rounded-2xl flex items-center justify-center",
                              "bg-gradient-to-br from-white/10 to-white/5",
                              "border border-white/10"
                            )}>
                              <div className={cn(
                                "text-2xl",
                                service.color.replace("from-", "text-").split(" ")[0]
                              )}>
                                {service.icon}
                              </div>
                            </div>
                            <div>
                              <h2 className="text-3xl font-bold text-white">{service.details.title}</h2>
                              <p className="text-gray-400">{service.details.description}</p>
                            </div>
                          </div>
                          <button
                            onClick={() => setActiveService(null)}
                            className="p-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                          >
                            <ChevronRight className="w-6 h-6 rotate-90" />
                          </button>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-6">Key Features</h3>
                            <div className="space-y-4">
                              {service.details.items.map((item, idx) => (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: idx * 0.1 }}
                                  className="flex items-center gap-3"
                                >
                                  <div className={cn(
                                    "w-8 h-8 rounded-full flex items-center justify-center",
                                    "bg-gradient-to-r from-blue-500/20 to-cyan-500/20"
                                  )}>
                                    <div className="w-2 h-2 rounded-full bg-cyan-400" />
                                  </div>
                                  <span className="text-gray-300">{item}</span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-xl font-bold text-white mb-6">Why Choose Us</h3>
                            <div className="space-y-6">
                              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3 mb-2">
                                  <Award className="w-5 h-5 text-amber-400" />
                                  <span className="font-semibold text-white">Industry Expertise</span>
                                </div>
                                <p className="text-gray-400 text-sm">10+ years of experience in {service.title}</p>
                              </div>
                              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3 mb-2">
                                  <Zap className="w-5 h-5 text-green-400" />
                                  <span className="font-semibold text-white">Fast Delivery</span>
                                </div>
                                <p className="text-gray-400 text-sm">Agile development with rapid deployment</p>
                              </div>
                              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                                <div className="flex items-center gap-3 mb-2">
                                  <Shield className="w-5 h-5 text-blue-400" />
                                  <span className="font-semibold text-white">Quality Assurance</span>
                                </div>
                                <p className="text-gray-400 text-sm">Rigorous testing and quality control</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-8 pt-8 border-t border-white/10">
                          <GlowingButton className="px-8 py-4">
                            <span className="flex items-center gap-3">
                              Get Started with {service.title}
                              <ArrowRight className="w-5 h-5" />
                            </span>
                          </GlowingButton>
                        </div>
                      </>
                    );
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Process Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Our <GradientText>Methodology</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                A proven process that ensures success at every stage
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery",
                  description: "Deep dive into your business goals and requirements",
                  icon: <Target className="w-8 h-8" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  number: "02",
                  title: "Strategy",
                  description: "Create a comprehensive plan and roadmap",
                  icon: <GitMerge className="w-8 h-8" />,
                  color: "from-cyan-500 to-emerald-500"
                },
                {
                  number: "03",
                  title: "Execution",
                  description: "Implement solutions with precision and quality",
                  icon: <Rocket className="w-8 h-8" />,
                  color: "from-emerald-500 to-green-500"
                }
              ].map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="text-5xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-6" style={{
                    backgroundImage: `linear-gradient(to right, ${step.color})`
                  }}>
                    {step.number}
                  </div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center">
                      <div className={step.color.replace("from-", "text-").split(" ")[0]}>
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-400">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-32 text-center"
          >
            <div className="relative p-12 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10" />
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mb-8">
                  <Zap className="w-10 h-10" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Let's discuss how our services can help you achieve your digital goals.
                </p>
                <GlowingButton className="px-8 py-4 text-lg font-semibold">
                  Start Your Project Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </GlowingButton>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};