// components/pages/About.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Rocket, 
  Users, 
  Award, 
  Globe, 
  TrendingUp,
  Heart,
  Clock,
  Zap,
  Shield,
  Star,
  ArrowRight,
  ChevronRight,
  Sparkles,
  Building,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Github,
  Coffee,
  Palette,
  Code,
  Server,
  Cpu,
  Brain
} from "lucide-react";
import { cn } from "@/lib/utils";
import { GradientText } from "@/components/ui/GradientText";
import { GlowingButton } from "@/components/ui/GlowingButton";
import { TechBackground } from "@/components/ui/TechBackground";

interface MembreEquipe {
  id: number;
  nom: string;
  role: string;
  bio: string;
  avatar: string;
  couleur: string;
  competences: string[];
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export const About = () => {
  const membresEquipe: MembreEquipe[] = [
    {
      id: 1,
      nom: "Mohammed Seddiq BRAHIMI",
      role: "CEO & Fondateur",
      bio: "Leader visionnaire avec plus de 5 ans d'expérience en innovation technologique",
      avatar: "SB",
      couleur: "from-blue-500 to-cyan-500",
      competences: ["Stratégie", "Leadership", "Innovation"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
  ];

  const valeurs = [
    {
      icone: <Zap className="w-8 h-8" />,
      titre: "Innovation",
      description: "Repousser constamment les limites avec les technologies de pointe",
      couleur: "from-blue-500 to-cyan-500"
    },
    {
      icone: <Shield className="w-8 h-8" />,
      titre: "Intégrité",
      description: "Communication transparente et pratiques éthiques",
      couleur: "from-cyan-500 to-emerald-500"
    },
    {
      icone: <Users className="w-8 h-8" />,
      titre: "Collaboration",
      description: "Travailler ensemble pour obtenir des résultats extraordinaires",
      couleur: "from-emerald-500 to-green-500"
    },
    {
      icone: <Heart className="w-8 h-8" />,
      titre: "Passion",
      description: "Amour de la technologie et dévouement à l'excellence",
      couleur: "from-purple-500 to-pink-500"
    }
  ];

  const statistiques = [
    { valeur: "2015", label: "Fondation", icone: <Calendar className="w-6 h-6" /> },
    { valeur: "250+", label: "Projets", icone: <Rocket className="w-6 h-6" /> },
    { valeur: "50+", label: "Membres d'Équipe", icone: <Users className="w-6 h-6" /> },
    { valeur: "15+", label: "Pays", icone: <Globe className="w-6 h-6" /> }
  ];

  return (
    <div className="relative min-h-screen bg-linear-to-br from-gray-900 via-blue-900/20 to-gray-900 text-white overflow-hidden">
      <TechBackground />
      
     
      {/* Section Héro */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20 mb-8"
            >
              <Building className="w-5 h-5 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-300">À propos d'i-Team</span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8">
              Pionniers de <GradientText>l'Excellence Digitale</GradientText>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Nous sommes un collectif de designers, développeurs et stratèges visionnaires 
              dédiés à la création de solutions digitales qui transforment les entreprises 
              et créent un impact durable.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid lg:grid-cols-2 gap-12 mb-32">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-xl border border-blue-500/20"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 mt-6">Notre Mission</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Permettre aux entreprises de prospérer grâce à des solutions digitales innovantes 
                qui stimulent la croissance, améliorent les expériences utilisateurs et créent 
                des avantages concurrentiels durables dans un paysage technologique en constante évolution.
              </p>
              <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-cyan-400"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-xl border border-purple-500/20"
            >
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <Eye className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-bold mb-6 mt-6">Notre Vision</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Devenir le partenaire d'innovation digitale le plus fiable au monde, 
                reconnu pour transformer les industries grâce à la technologie et 
                créer un impact significatif pour les entreprises et la société.
              </p>
              <div className="flex items-center gap-2">
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-purple-400"
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
            </motion.div>
          </div>

          {/* Statistiques */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
          >
            {statistiques.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
                className="relative p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                    <div className="text-blue-400">{stat.icone}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-white">{stat.valeur}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Section Équipe */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Rencontrez Notre <GradientText>Équipe de Rêve</GradientText>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Des experts passionnés dédiés à transformer votre vision en réalité
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {membresEquipe.map((membre, idx) => (
                <motion.div
                  key={membre.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="relative group"
                >
                  {/* Effet de lueur */}
                  <div className={cn(
                    "absolute -inset-0.5 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300",
                    membre.couleur.replace("from-", "from-").replace("to-", "to-")
                  )} />

                  <div className="relative p-6 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 group-hover:border-white/30 transition-all duration-300">
                    {/* Avatar du membre */}
                    <div className="flex flex-col items-center gap-6 mb-6">
                      <div className="relative">
                        <motion.div
                          animate={{
                            rotate: 360,
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="absolute -inset-2 rounded-full border border-cyan-500/30"
                        />
                        <img src={"images/seddik.jfif"} alt={membre.nom} className="w-62 rounded-full" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{membre.nom}</h3>
                        <div className={cn(
                          "text-sm font-semibold bg-gradient-to-r bg-clip-text text-center text-transparent",
                          membre.couleur
                        )}>
                          {membre.role}
                        </div>
                      </div>
                    </div>

                    {/* Bio */}
                    <p className="text-gray-400 mb-6">{membre.bio}</p>

                    {/* Compétences */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {membre.competences.map((competence, idxCompetence) => (
                        <span
                          key={idxCompetence}
                          className="px-3 py-1 rounded-full bg-white/5 text-xs text-gray-300 border border-white/10"
                        >
                          {competence}
                        </span>
                      ))}
                    </div>

                    {/* Liens sociaux */}
                    <div className="flex items-center gap-3">
                      {membre.social.linkedin && (
                        <a
                          href={membre.social.linkedin}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {membre.social.twitter && (
                        <a
                          href={membre.social.twitter}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {membre.social.github && (
                        <a
                          href={membre.social.github}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Valeurs */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Nos <GradientText>Valeurs Fondamentales</GradientText>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valeurs.map((valeur, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={cn(
                      "w-14 h-14 rounded-xl flex items-center justify-center",
                      "bg-gradient-to-br from-white/10 to-white/5",
                      "border border-white/10"
                    )}>
                      <div className={valeur.couleur.replace("from-", "text-").split(" ")[0]}>
                        {valeur.icone}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white">{valeur.titre}</h3>
                  </div>
                  <p className="text-gray-400">{valeur.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bureau & Culture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Culture</h2>
                <div className="space-y-6">
                  {[
                    {
                      icone: <Coffee className="w-6 h-6" />,
                      titre: "Équilibre Vie Pro/Perso",
                      description: "Horaires flexibles et options de travail à distance"
                    },
                    {
                      icone: <TrendingUp className="w-6 h-6" />,
                      titre: "Opportunités de Croissance",
                      description: "Apprentissage continu et développement de carrière"
                    },
                    {
                      icone: <Heart className="w-6 h-6" />,
                      titre: "Environnement Inclusif",
                      description: "Culture de travail diversifiée et accueillante"
                    },
                    {
                      icone: <Zap className="w-6 h-6" />,
                      titre: "Focus Innovation",
                      description: "Temps dédié à la recherche et au développement"
                    }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                        {item.icone}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{item.titre}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Notre Bureau</h2>
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 overflow-hidden">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                      <MapPin className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">Siège Social Paris</h3>
                      <p className="text-gray-400">123 Avenue de l'Innovation, Paris, France</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">+33 (0)1 23 45 67 89</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-gray-400" />
                      <span className="text-gray-300">contact@i-team.fr</span>
                    </div>
                  </div>
                  <div className="mt-8 h-48 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-white/30" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="relative p-12 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10" />
              <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 mb-8">
                  <Users className="w-10 h-10" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                  Rejoignez Notre Aventure
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Faites partie d'une équipe qui façonne l'avenir de l'innovation digitale.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlowingButton className="px-8 py-4 text-lg font-semibold">
                    Voir les Carrières
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </GlowingButton>
                  <button className="px-8 py-4 text-lg rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    Contactez Notre Équipe
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};