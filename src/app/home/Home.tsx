// components/pages/Home.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, 
  Rocket, 
  Users, 
  Target, 
  Award, 
  ChevronRight,
  Sparkles,
  Shield,
  Zap,
  Globe,
  Code,
  Palette,
  Smartphone,
  BarChart3,
  CheckCircle,
  Star,
  MessageCircle,
  Clock,
  TrendingUp,
  Heart,
  Cpu,
  Database,
  Cloud,
  Lock,
  BarChart,
  Smartphone as Phone,
  Monitor,
  Server,
  Code2,
  GitBranch,
  Layers,
  Crown,
  Gem,
  Zap as Bolt,
  Shield as ShieldIcon,
  Infinity as InfinityIcon,
  Gift,
  Coffee,
  Calendar,
  Mail,
  PhoneCall,
  Video,
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Bell
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { ServiceCard } from "./components/ServiceCard";
import { ReviewCard } from "./components/ReviewCard";
import { StatCard } from "./components/StatCard";
import { TechBackground } from "@/components/ui/TechBackground";
import { ProcessTimeline } from "./components/ProcessTimeLine";
import { PackCard } from "./components/PackCard";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeReview, setActiveReview] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveReview((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const techStack = [
    { icon: <Code2 className="w-8 h-8" />, name: "TypeScript", color: "text-blue-500" },
    { icon: <Cpu className="w-8 h-8" />, name: "React", color: "text-cyan-400" },
    { icon: <GitBranch className="w-8 h-8" />, name: "Next.js", color: "text-white" },
    { icon: <Database className="w-8 h-8" />, name: "MongoDB", color: "text-green-500" },
    { icon: <Layers className="w-8 h-8" />, name: "Docker", color: "text-blue-400" },
    { icon: <Cloud className="w-8 h-8" />, name: "AWS", color: "text-yellow-500" },
    { icon: <Server className="w-8 h-8" />, name: "Node.js", color: "text-green-400" },
    { icon: <Palette className="w-8 h-8" />, name: "Tailwind", color: "text-teal-400" },
    { icon: <Smartphone className="w-8 h-8" />, name: "React Native", color: "text-blue-300" },
    { icon: <Lock className="w-8 h-8" />, name: "GraphQL", color: "text-pink-500" },
    { icon: <Zap className="w-8 h-8" />, name: "Vue.js", color: "text-emerald-400" },
    { icon: <Globe className="w-8 h-8" />, name: "Python", color: "text-yellow-400" },
  ];

  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern web applications built with cutting-edge technologies for optimal performance.",
      features: ["React/Next.js", "TypeScript", "Responsive", "PWA"],
      gradient: "from-blue-500 to-cyan-500",
      featuresList: [
        { text: "Custom React Components", icon: <CheckCircle className="w-4 h-4" /> },
        { text: "SEO Optimization", icon: <TrendingUp className="w-4 h-4" /> },
        { text: "Performance Tuning", icon: <Zap className="w-4 h-4" /> }
      ]
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native & cross-platform mobile solutions for iOS and Android platforms.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store"],
      gradient: "from-purple-500 to-pink-500",
      featuresList: [
        { text: "App Store Deployment", icon: <CheckCircle className="w-4 h-4" /> },
        { text: "Push Notifications", icon: <Bell className="w-4 h-4" /> },
        { text: "Offline Support", icon: <Database className="w-4 h-4" /> }
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered designs that combine aesthetics with exceptional functionality.",
      features: ["Figma", "Prototyping", "User Testing", "Design Systems"],
      gradient: "from-cyan-500 to-blue-500",
      featuresList: [
        { text: "Interactive Prototypes", icon: <CheckCircle className="w-4 h-4" /> },
        { text: "User Research", icon: <Users className="w-4 h-4" /> },
        { text: "Design Systems", icon: <Layers className="w-4 h-4" /> }
      ]
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment for enterprise applications.",
      features: ["AWS/Azure", "DevOps", "Microservices", "Kubernetes"],
      gradient: "from-indigo-500 to-blue-500",
      featuresList: [
        { text: "24/7 Monitoring", icon: <CheckCircle className="w-4 h-4" /> },
        { text: "Auto Scaling", icon: <TrendingUp className="w-4 h-4" /> },
        { text: "Security Audit", icon: <Shield className="w-4 h-4" /> }
      ]
    }
  ];

  const packs = [
    {
      name: "Starter",
      icon: <Gem className="w-12 h-12" />,
      price: "$2,999",
      period: "/project",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500/5 to-cyan-500/5",
      borderColor: "border-blue-500/20",
      popular: false,
      features: [
        "Basic Website (5 pages)",
        "Responsive Design",
        "Contact Form",
        "Basic SEO",
        "1 Month Support",
        "3 Revisions"
      ],
      cta: "Start Basic",
      description: "Perfect for small businesses starting their digital journey"
    },
    {
      name: "Professional",
      icon: <Crown className="w-12 h-12" />,
      price: "$9,999",
      period: "/project",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500/10 to-pink-500/10",
      borderColor: "border-purple-500/30",
      popular: true,
      features: [
        "Custom Web Application",
        "Mobile Responsive",
        "CMS Integration",
        "Advanced SEO",
        "6 Months Support",
        "Unlimited Revisions",
        "Performance Optimization",
        "Analytics Dashboard"
      ],
      cta: "Go Professional",
      description: "Most popular choice for growing businesses"
    },
    {
      name: "Enterprise",
      icon: <ShieldIcon className="w-12 h-12" />,
      price: "Custom",
      period: "",
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-gradient-to-br from-amber-500/10 to-orange-500/10",
      borderColor: "border-amber-500/30",
      popular: false,
      features: [
        "Full-stack Development",
        "Mobile App (iOS/Android)",
        "Cloud Infrastructure",
        "24/7 Monitoring",
        "Priority Support",
        "Dedicated Team",
        "Security Audit",
        "Scalable Architecture",
        "API Development",
        "DevOps & CI/CD"
      ],
      cta: "Contact Sales",
      description: "Complete digital transformation for enterprises"
    }
  ];

  const reviews = [
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

  const stats = [
    { value: "250+", label: "Projects Completed", icon: <Rocket />, change: "+25%" },
    { value: "99%", label: "Client Satisfaction", icon: <Heart />, change: "+5%" },
    { value: "50+", label: "Team Experts", icon: <Users />, change: "+10" },
    { value: "24/7", label: "Support", icon: <Clock />, change: "Always" }
  ];

  const features = [
    { icon: <Zap />, text: "Lightning Fast Delivery", desc: "Rapid development cycles" },
    { icon: <Shield />, text: "Enterprise Security", desc: "Bank-level protection" },
    { icon: <Award />, text: "Award Winning", desc: "Industry recognition" },
    { icon: <Globe />, text: "Global Support", desc: "Worldwide coverage" }
  ];

  const processSteps = [
    { 
      number: "01", 
      title: "Discovery", 
      desc: "Deep dive into your business needs",
      icon: <Target className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    { 
      number: "02", 
      title: "Planning", 
      desc: "Strategic roadmap development",
      icon: <Calendar className="w-6 h-6" />,
      color: "from-cyan-500 to-emerald-500"
    },
    { 
      number: "03", 
      title: "Design", 
      desc: "Interactive prototyping",
      icon: <Palette className="w-6 h-6" />,
      color: "from-emerald-500 to-green-500"
    },
    { 
      number: "04", 
      title: "Development", 
      desc: "Agile coding & building",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-green-500 to-lime-500"
    },
    { 
      number: "05", 
      title: "Testing", 
      desc: "Quality assurance & optimization",
      icon: <CheckCircle className="w-6 h-6" />,
      color: "from-lime-500 to-yellow-500"
    },
    { 
      number: "06", 
      title: "Launch", 
      desc: "Deployment & ongoing support",
      icon: <Rocket className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen bg-linear-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      {/* Tech Background */}
      <TechBackground />
      
      {/* Floating Particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
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

      {/* Hero Section */}
      <motion.section 
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="relative pt-20 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Animated Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 shadow-lg shadow-blue-500/5"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
              </motion.div>
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Innovation Leaders Since 2020
              </span>
            </motion.div>

            {/* Main Headline with Typewriter Effect */}
            <div className="relative">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
              >
                <span className="block">Transform</span>
                <span className="block mt-2">
                  <GradientText className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent bg-size-200 animate-gradient">
                    Your Vision
                  </GradientText>
                </span>
              </motion.h1>
              
              {/* Animated Underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "200px" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-8 rounded-full"
              />
            </div>

            {/* Subtitle with Floating Animation */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              We craft{" "}
              <span className="relative inline-block">
                <span className="text-white font-semibold">exceptional digital experiences</span>
                <motion.span
                  className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </span>{" "}
              that drive growth and transform businesses.
            </motion.p>

            {/* Interactive CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <GlowingButton className="px-10 py-5 text-lg font-semibold shadow-2xl shadow-blue-500/25">
                  <span className="flex items-center gap-3">
                    <Rocket className="w-6 h-6" />
                    Launch Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </GlowingButton>
              </motion.div>
              
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="group px-10 py-5 text-lg rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 relative overflow-hidden"
              >
                <span className="flex items-center gap-3 relative z-10">
                  <Video className="w-6 h-6 text-cyan-400" />
                  Book Free Consultation
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>
            </motion.div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -right-10 top-1/4 opacity-10"
            >
              <Code2 className="w-24 h-24" />
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              className="absolute -left-10 bottom-1/4 opacity-10"
            >
              <Cpu className="w-24 h-24" />
            </motion.div>
          </motion.div>

          {/* Animated Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-32"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} delay={index * 0.1} />
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Tech Stack Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1 }}
        className="relative py-32 overflow-hidden"
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
        </div>
        
        {/* Glowing Orbs */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">Cutting-Edge Technology</span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-bold mb-6">
              Powered by <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Modern Stack</span>
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We leverage industry-leading technologies to build scalable, performant solutions
            </p>
          </motion.div>

          {/* Tech Grid */}
          <div className="relative">
            {/* Tech Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                  }}
                  whileHover={{
                    y: -10,
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="relative group"
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Tech Card */}
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-8 group-hover:border-blue-500/50 transition-all duration-300 overflow-hidden">
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
                      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                    </div>
                    
                    {/* Icon Container */}
                    <div className="relative mb-6">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur group-hover:blur-xl transition-all duration-500" />
                      <div className={cn(
                        "relative w-16 h-16 mx-auto rounded-2xl flex items-center justify-center",
                        "bg-gradient-to-br from-gray-900 to-gray-800",
                        "border border-white/10 group-hover:border-blue-500/50",
                        "transition-all duration-300"
                      )}>
                        <div className={cn(
                          "relative z-10 transition-all duration-300",
                          "group-hover:scale-110 group-hover:rotate-12",
                          tech.color
                        )}>
                          {tech.icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Tech Name */}
                    <div className="text-center">
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-bold text-white text-lg mb-2"
                      >
                        {tech.name}
                      </motion.p>
                    </div>

                    {/* Connection Lines Animation */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      <motion.path
                        d="M0,0 L100,100"
                        stroke="url(#gradient)"
                        strokeWidth="1"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="opacity-0 group-hover:opacity-30 transition-opacity"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.8" />
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Packs Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-blue-500/30 mb-6">
              <Crown className="w-5 h-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Flexible Solutions</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Choose Your <GradientText className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Perfect Plan</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Select the package that best fits your business needs. All plans include our signature quality.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {packs.map((pack, index) => (
              <PackCard key={index} pack={pack} index={index} />
            ))}
          </div>

          {/* Custom Plan CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex items-center gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 max-w-2xl mx-auto">
              <InfinityIcon className="w-8 h-8 text-blue-400" />
              <div className="text-left">
                <h4 className="text-xl font-bold text-white">Need a Custom Solution?</h4>
                <p className="text-gray-400">Contact us for tailored enterprise packages</p>
              </div>
              <GlowingButton className="ml-auto px-6 py-3">
                Get Custom Quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </GlowingButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-cyan-500/30 mb-6">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">Our Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
              Comprehensive <GradientText>Digital Services</GradientText>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              End-to-end digital solutions tailored to help your business thrive in the modern landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline Section */}
      <ProcessTimeline steps={processSteps} />

      {/* Reviews Carousel Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-transparent via-blue-900/10 to-transparent">
        <div className="max-w-6xl mx-auto">
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

          {/* Reviews Carousel */}
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

            {/* Carousel Controls */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-4">
              <button
                onClick={() => setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              {/* Dots Indicator */}
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
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 sm:p-16 rounded-3xl overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-purple-500/10" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-20 -left-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl"
            />

            <div className="relative z-10 text-center">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mb-8 shadow-2xl shadow-blue-500/25"
              >
                <Sparkles className="w-12 h-12" />
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to <GradientText className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400">Begin?</GradientText>
              </h2>
              
              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's create something amazing together. Schedule your free consultation today and get a custom project roadmap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <GlowingButton className="px-10 py-5 text-lg font-semibold shadow-2xl shadow-blue-500/25">
                  <span className="flex items-center gap-3">
                    <Calendar className="w-6 h-6" />
                    Book Free Strategy Call
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </GlowingButton>
                
                <button className="px-10 py-5 text-lg rounded-2xl bg-gradient-to-r from-white/0 via-white/5 to-white/0 backdrop-blur-xl border border-white/20 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300 group">
                  <span className="flex items-center gap-3">
                    <Mail className="w-6 h-6 text-cyan-400" />
                    Get Project Estimate
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </button>
              </div>
              
              <p className="text-gray-400 mt-8 text-sm">
                <Clock className="inline w-4 h-4 mr-2" />
                Response within 2 hours • Free 30-minute consultation
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};