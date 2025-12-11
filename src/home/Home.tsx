// components/pages/Home.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  Layers
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { ServiceCard } from "./components/ServiceCard";
import { ReviewCard } from "./components/ReviewCard";
import { StatCard } from "./components/StatCard";
import { TechBackground } from "@/components/ui/TechBackground";

export const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    setIsVisible(true);
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
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Mobile Apps",
      description: "Native & cross-platform mobile solutions for iOS and Android platforms.",
      features: ["React Native", "Flutter", "iOS/Android", "App Store"],
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-centered designs that combine aesthetics with exceptional functionality.",
      features: ["Figma", "Prototyping", "User Testing", "Design Systems"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment for enterprise applications.",
      features: ["AWS/Azure", "DevOps", "Microservices", "Kubernetes"],
      gradient: "from-indigo-500 to-blue-500"
    }
  ];


  const reviews = [
    {
      name: "Alex Johnson",
      role: "CEO, TechVision",
      content: "Transformed our digital presence completely. The team's expertise and attention to detail were exceptional.",
      rating: 5,
      avatar: "AJ"
    },
    {
      name: "Sarah Miller",
      role: "Marketing Director",
      content: "Our mobile app launch was a massive success. Professional, timely, and exceeded expectations.",
      rating: 5,
      avatar: "SM"
    },
    {
      name: "David Chen",
      role: "Startup Founder",
      content: "Technical expertise matched with creative vision. They delivered beyond what we imagined.",
      rating: 5,
      avatar: "DC"
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
    { number: "01", title: "Discovery", desc: "Understand your needs" },
    { number: "02", title: "Planning", desc: "Strategic roadmap" },
    { number: "03", title: "Design", desc: "Creative prototyping" },
    { number: "04", title: "Development", desc: "Code & build" },
    { number: "05", title: "Testing", desc: "Quality assurance" },
    { number: "06", title: "Launch", desc: "Deploy & support" }
  ];

  return (
    <div className="relative  min-h-screen bg-linear-to-br from-gray-900 via-blue-900/50 to-gray-900 text-white overflow-hidden">
      {/* Tech Background */}
      <TechBackground />
      
      {/* Hero Section */}
      <section className="relative pt-8  min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="absolute inset-0 bg-linear-to-b from-blue-900/20 via-transparent to-blue-900/30" />
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex mt-8 items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20"
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">
                Digital Innovation Leaders
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight"
            >
              Transform Your
              <span className="block mt-2">
                <GradientText>Digital Future</GradientText>
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              We craft exceptional digital experiences that drive growth, engage audiences, 
              and transform businesses for the modern world.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
            >
              <GlowingButton className="px-8 py-4 text-lg font-semibold">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </GlowingButton>
              <button className="px-8 py-4 text-lg rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group">
                <span className="flex items-center gap-2">
                  View Case Studies
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </button>
            </motion.div>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} delay={index * 0.1} />
            ))}
          </motion.div>

          {/* Tech Stack */}
         <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-50px" }}
  transition={{ duration: 1 }}
  className="relative py-20 overflow-hidden"
>
  {/* Animated Background Grid */}
  <div className="absolute inset-0 opacity-5">
    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
  </div>
  
  {/* Glowing Orbs */}
  <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl" />
  <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl" />
  
  <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-12"
    >
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 mb-4">
        <Sparkles className="w-4 h-4 text-cyan-400" />
        <span className="text-sm font-medium text-cyan-300">Technology Stack</span>
      </div>
      <h3 className="text-3xl sm:text-4xl font-bold mb-4">
        Trusted by <span className="bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Industry Leaders</span>
      </h3>
      <p className="text-gray-400 max-w-2xl mx-auto">
        Powered by cutting-edge technologies that drive innovation and deliver exceptional results
      </p>
    </motion.div>

    {/* Tech Grid */}
    <div className="relative">
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Tech Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
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
            <div className="relative bg-linear-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-xl p-6 group-hover:border-blue-500/30 transition-all duration-300 overflow-hidden">
              
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-linear-to-br from-blue-500/5 via-transparent to-cyan-500/5" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
              </div>
              
              {/* Icon Container */}
              <motion.div
               
                className="relative mb-4"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur group-hover:blur-xl transition-all duration-500" />
                <div className={cn(
                  "relative w-14 h-14 mx-auto rounded-xl flex items-center justify-center",
                  "bg-gradient-to-br from-gray-900 to-gray-800",
                  "border border-white/10 group-hover:border-blue-500/50",
                  " transition-all duration-300"
                )}>
                  <div className={cn(
                    "relative z-10  transition-all duration-300",
                    "group-hover:scale-110 group-hover:rotate-12",
                    tech.color
                  )}>
                    {tech.icon}
                  </div>
                </div>
              </motion.div>
              
              {/* Tech Name */}
              <div className="text-center">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="font-semibold text-white mb-1"
                >
                  {tech.name}
                </motion.p>
                <div className="flex items-center justify-center gap-1">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 h-1 rounded-full bg-blue-500/50"
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

      {/* Animated Connector Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          {[...Array(5)].map((_, i) => (
            <motion.path
              key={i}
              d={`M${i * 20},0 L${i * 20},100`}
              stroke="rgba(59, 130, 246, 0.1)"
              strokeWidth="1"
              strokeDasharray="5,5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </svg>
      </div>
    </div>

    {/* Additional Brands/Partners */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.5 }}
      className="mt-16"
    >
      <p className="text-center text-gray-400 mb-8">Partners & Collaborations</p>
      <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
        {[
          "Microsoft",
          "Google Cloud",
          "AWS",
          "DigitalOcean",
          "Vercel",
          "Netlify"
        ].map((brand, index) => (
          <motion.div
            key={brand}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
          >
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative text-gray-400 group-hover:text-white transition-colors font-medium text-sm">
                  {brand}
                </div>
              </div>
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                  repeatDelay: 2,
                }}
                className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-100"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>

    {/* Stats Badge */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className="mt-12"
    >
      <div className="inline-flex items-center gap-4 mx-auto px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 backdrop-blur-xl border border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-gray-300">Rated 4.9/5 by 500+ clients</span>
        </div>
        <div className="w-1 h-1 rounded-full bg-cyan-400/50" />
        <div className="flex items-center gap-2">
          <Award className="w-4 h-4 text-blue-400" />
          <span className="text-sm text-gray-300">Award-winning tech stack</span>
        </div>
      </div>
    </motion.div>
  </div>
</motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <Target className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-medium text-blue-300">About Us</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl font-bold">
                    Pioneering <GradientText>Digital Excellence</GradientText>
                  </h2>
                </div>
                
                <p className="text-lg text-gray-300 leading-relaxed">
                  We are a collective of visionary designers, developers, and strategists 
                  dedicated to crafting digital solutions that not only meet but exceed 
                  expectations. Our mission is to transform complex challenges into 
                  seamless digital experiences.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-colors"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-linear-to-br from-blue-500/20 to-cyan-500/20">
                          {feature.icon}
                        </div>
                        <span className="font-semibold text-white">{feature.text}</span>
                      </div>
                      <p className="text-sm text-gray-400">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 to-cyan-500/20 blur-3xl rounded-full" />
                <div className="relative h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-linear-to-br from-gray-900/50 to-blue-900/30 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-6">
                      <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-linear-to-r from-blue-600 to-cyan-600">
                        <Cpu className="w-12 h-12" />
                      </div>
                      <h3 className="text-2xl font-bold">Innovation Hub</h3>
                      <p className="text-gray-400 max-w-md">Where ideas become reality</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Our Services</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Comprehensive <GradientText>Digital Solutions</GradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              End-to-end digital services tailored to help your business thrive in the modern landscape.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-linear-to-b from-transparent to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our <GradientText>Process</GradientText>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A structured approach to deliver exceptional results every time.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative p-6 rounded-2xl bg-linear-to-b from-white/5 to-white/10 backdrop-blur-sm border border-white/10 group-hover:border-blue-500/30 transition-all duration-300 text-center">
                  <div className="text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {step.number}
                  </div>
                  <h3 className="font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 rotate-45 bg-linear-to-br from-white/5 to-white/10 border-r border-b border-white/10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "10x", label: "Faster Delivery", color: "from-blue-500 to-cyan-500" },
                  { value: "95%", label: "On-Time", color: "from-blue-500 to-indigo-500" },
                  { value: "50k+", label: "Happy Users", color: "from-cyan-500 to-blue-500" },
                  { value: "4.9/5", label: "Rating", color: "from-indigo-500 to-blue-500" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-8 rounded-2xl bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-colors"
                  >
                    <div className={`text-4xl font-bold bg-linear-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Award className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-medium text-blue-300">Why Choose Us</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold">
                  Beyond <GradientText>Expectations</GradientText>
                </h2>
              </div>
              
              <p className="text-lg text-gray-300">
                We combine technical expertise with creative vision to deliver exceptional results. 
                Our partnership approach ensures your success is our priority.
              </p>

              <div className="space-y-4">
                {[
                  "Industry-leading technology stack",
                  "Agile development methodology",
                  "Transparent communication",
                  "24/7 dedicated support",
                  "Competitive pricing",
                  "Proven track record"
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="p-2 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    </div>
                    <span className="text-gray-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative bg-linear-to-b from-transparent to-blue-900/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <MessageCircle className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">Testimonials</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Client <GradientText>Success Stories</GradientText>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <ReviewCard key={index} {...review} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative p-12 rounded-3xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-linear-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10" />
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-r from-blue-600 to-cyan-600 mb-8">
                <Sparkles className="w-10 h-10" />
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Ready to <GradientText>Transform?</GradientText>
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's create something amazing together. Schedule your free consultation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlowingButton className="px-8 py-4 text-lg font-semibold">
                  Start Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </GlowingButton>
                <button className="px-8 py-4 text-lg rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                  Schedule a Call
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};