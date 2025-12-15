// components/shared/Header.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  ChevronRight,
  Phone,
  Mail,
  MapPin,
  Globe,
  ArrowUpRight,
  Sparkles,
  Home,
  Option,
  Rocket,
  User,
  Users,
  PhoneCall,
  Star
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-4 h-4" /> },
    { name: "Services", href: "/services",icon : <Star className="w-4 h-4" /> },
    { name: "About", href: "/about", icon: <Users className="w-4 h-4" /> },
    { name: "Contact", href: "/contact", icon: <PhoneCall className="w-4 h-4" /> },
  ];

  const contactInfo = [
    { icon: <Phone className="w-4 h-4" />, text: "+213 555 123 456", href: "tel:+213555123456" },
    { icon: <Mail className="w-4 h-4" />, text: "info@iteam.dz", href: "mailto:info@iteam.dz" },
    { icon: <MapPin className="w-4 h-4" />, text: "Algiers, Algeria", href: "#" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed left-1/2 top-2 -translate-x-1/2 z-50 w-[95%] max-w-7xl rounded-full px-8 transition-all duration-300",
        isScrolled
          ? "bg-linear-to-r from-blue-900/15 to-blue-900/20 backdrop-blur-xl shadow-2xl border border-white/10"
          : "bg-linear-to-r from-blue-900/20 to-transparent backdrop-blur-sm"
      )}
    >
      <div className="flex items-center justify-between px-6 py-4 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <img src="images/logo.png" alt="Logo" className="w-28" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group"
            >
              <motion.div
                whileHover={{ y: -2 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300"
              >
                <span className="text-lg">{link.icon}</span>
                <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                  {link.name}
                </span>
              </motion.div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-linear-to-r from-blue-400 to-cyan-400 group-hover:w-4/5 transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="relative group overflow-hidden px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 font-semibold text-white shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
          >
            <span className="flex items-center gap-2 relative z-10">
              Start Project
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300 rounded-xl" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-linear-to-b from-blue-900/95 to-blue-900/90 backdrop-blur-xl border-t border-white/10 rounded-b-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-4 px-4 py-3 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span className="text-lg font-medium text-white">{link.name}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-all" />
                  </Link>
                </motion.div>
              ))}

              {/* Contact Info */}
              <div className="mt-6 pt-4 border-t border-white/10">
                {contactInfo.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="p-2 rounded-lg bg-white/5">{item.icon}</div>
                    <span>{item.text}</span>
                  </a>
                ))}
              </div>

              {/* Mobile CTA */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-6 block w-full text-center px-6 py-3 rounded-xl bg-linear-to-r from-blue-600 to-cyan-600 font-semibold text-white shadow-lg hover:shadow-cyan-400/30 transition-all duration-300"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
