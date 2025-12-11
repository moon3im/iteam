// components/shared/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram,
  ArrowUp,
  Sparkles,
  Shield,
  Clock,
  Award,
  Users,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Cloud Solutions",
    "Digital Marketing",
    "DevOps Services",
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
  ];

  const companyLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" },
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-5 h-5" />, text: "info@iteam.dz", href: "mailto:info@iteam.dz" },
    { icon: <Phone className="w-5 h-5" />, text: "+213 555 123 456", href: "tel:+213555123456" },
    { icon: <MapPin className="w-5 h-5" />, text: "123 Innovation Street, Algiers, Algeria", href: "#" },
  ];

  const stats = [
    { icon: <Award className="w-5 h-5" />, value: "50+", label: "Awards Won" },
    { icon: <Users className="w-5 h-5" />, value: "100+", label: "Happy Clients" },
    { icon: <Clock className="w-5 h-5" />, value: "24/7", label: "Support" },
    { icon: <Shield className="w-5 h-5" />, value: "99.9%", label: "Uptime" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-blue-900/30 to-gray-900 border-t border-white/10">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-linear-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-linear-to-r from-blue-500/20 to-cyan-500/20">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-10 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute -inset-1 bg-linear-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-30" />
                <div className="relative px-4 py-2 rounded-lg bg-linear-to-br from-blue-600 to-cyan-600">
                  <span className="text-xl font-bold text-white tracking-wider">ITEAM</span>
                </div>
              </div>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              We craft exceptional digital experiences that transform businesses and drive innovation in the modern digital landscape.
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Quick Links
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{link.name}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Our Services
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href="/services"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{service}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Contact Us
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-linear-to-r from-blue-500/20 to-cyan-500/20">
                    {info.icon}
                  </div>
                  <div>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {info.text}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 p-8 rounded-2xl bg-linear-to-r from-blue-900/30 to-cyan-900/30 backdrop-blur-sm border border-white/10"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-400">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ITEAM Digital Solutions. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6">
              {companyLinks.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="p-3 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}