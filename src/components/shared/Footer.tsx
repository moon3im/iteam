// components/shared/Footer.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
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
  const retourHaut = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const services = [
    "Développement Web",
    "Applications Mobiles",
    "Design UI/UX",
    "Solutions Cloud",
    "Marketing Digital",
    "Services DevOps",
  ];

  const liensRapides = [
    { nom: "Accueil", href: "/" },
    { nom: "À Propos", href: "/about" },
    { nom: "Services", href: "/services" },
    { nom: "Projets", href: "/projects" },
    { nom: "Carrières", href: "/careers" },
    { nom: "Blog", href: "/blog" },
  ];

  const liensEntreprise = [
    { nom: "Politique de Confidentialité", href: "/privacy" },
    { nom: "Conditions d'Utilisation", href: "/terms" },
    { nom: "Politique des Cookies", href: "/cookies" },
    { nom: "Plan du Site", href: "/sitemap" },
  ];

  const liensSociaux = [
    { icone: <Facebook className="w-5 h-5" />, href: "#", label: "Facebook" },
    { icone: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icone: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icone: <Instagram className="w-5 h-5" />, href: "#", label: "Instagram" },
  ];

  const infosContact = [
    { icone: <Mail className="w-5 h-5" />, texte: "info@iteam.dz", href: "mailto:info@iteam.dz" },
    { icone: <Phone className="w-5 h-5" />, texte: "+213 555 123 456", href: "tel:+213555123456" },
    { icone: <MapPin className="w-5 h-5" />, texte: "123 Rue de l'Innovation, Alger, Algérie", href: "#" },
  ];

  const statistiques = [
    { icone: <Award className="w-5 h-5" />, valeur: "50+", label: "Récompenses" },
    { icone: <Users className="w-5 h-5" />, valeur: "100+", label: "Clients Satisfaits" },
    { icone: <Clock className="w-5 h-5" />, valeur: "24/7", label: "Support" },
    { icone: <Shield className="w-5 h-5" />, valeur: "99.9%", label: "Disponibilité" },
  ];

  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-blue-900/30 to-gray-900 border-t border-white/10">
      {/* Éléments décoratifs */}
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5" />
      
      {/* Contenu principal du pied de page */}
      <div className="relative z-10 container mx-auto px-6 py-16">
        {/* Section Statistiques */}
     

        <div className="grid lg:grid-cols-4 gap-10 mb-16">
          {/* Informations de l'entreprise */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                 <Link href="/" className="flex w-full justify-center items-center gap-2 group">
          <img src="images/logo.png" alt="Logo" className="w-36 self-center" />
        </Link>
              </div>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Nous créons des expériences digitales exceptionnelles qui transforment les entreprises et stimulent l'innovation dans le paysage numérique moderne.
            </p>
            
            <div className="flex gap-4">
              {liensSociaux.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2 rounded-lg bg-white/5 hover:bg-blue-500/20 border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-white transition-colors">
                    {social.icone}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Liens Rapides
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </h3>
            <ul className="space-y-3">
              {liensRapides.map((lien, idx) => (
                <motion.li
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <Link
                    href={lien.href}
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors group"
                  >
                    <div className="w-1 h-1 rounded-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span>{lien.nom}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Nos Services
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

          {/* Informations de contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              Contactez-nous
              <ChevronRight className="w-4 h-4 text-cyan-400" />
            </h3>
            <div className="space-y-4">
              {infosContact.map((info, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-linear-to-r from-blue-500/20 to-cyan-500/20">
                    {info.icone}
                  </div>
                  <div>
                    <a
                      href={info.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      {info.texte}
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
                Restez Informé
              </h3>
              <p className="text-gray-400">
                Abonnez-vous à notre newsletter pour les dernières actualités et insights.
              </p>
            </div>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold hover:shadow-blue-500/25 hover:shadow-xl transition-all duration-300"
              >
                S'abonner
              </button>
            </form>
          </div>
        </motion.div>

        {/* Barre inférieure */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm">
              © {new Date().getFullYear()} ITEAM Solutions Digitales. Tous droits réservés.
            </div>
            
            <div className="flex flex-wrap gap-6">
              {liensEntreprise.map((lien, idx) => (
                <Link
                  key={idx}
                  href={lien.href}
                  className="text-sm text-gray-500 hover:text-cyan-400 transition-colors"
                >
                  {lien.nom}
                </Link>
              ))}
            </div>

            {/* Retour en haut */}
            <button
              onClick={retourHaut}
              className="p-3 rounded-full bg-linear-to-r from-blue-500/20 to-cyan-500/20 hover:from-blue-500/30 hover:to-cyan-500/30 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
              aria-label="Retour en haut"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}