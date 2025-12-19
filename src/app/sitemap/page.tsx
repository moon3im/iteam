import LegalPage from "@/components/LegalPage";
import Link from "next/link";

export default function SitemapPage() {
  const pages = [
    { 
      name: "Accueil", 
      href: "/", 
      description: "Page d'accueil principale",
      icon: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
    },
    { 
      name: "Services", 
      href: "/services", 
      description: "Découvrez nos services digitaux",
      icon: "M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
    },
    { 
      name: "À Propos", 
      href: "/about", 
      description: "Notre équipe et notre mission",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"
    },
    { 
      name: "Contact", 
      href: "/contact", 
      description: "Prenez contact avec nous",
      icon: "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z"
    },
    { 
      name: "Politique de Confidentialité", 
      href: "/privacy", 
      description: "Protection de vos données personnelles",
      icon: "M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"
    },
    { 
      name: "Conditions d'Utilisation", 
      href: "/terms", 
      description: "Règles d'utilisation de nos services",
      icon: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
    },
    { 
      name: "Politique des Cookies", 
      href: "/cookies", 
      description: "Gestion des cookies sur notre site",
      icon: "M21.95 10.99c-1.79-.03-3.7-1.95-2.68-4.22-2.97 1-5.78-1.59-5.19-4.56C6.95.53 2 5.64 2 11.31 2 16.52 6.48 21 11.69 21c5.67 0 10.61-5.05 9.16-10.01z"
    }
  ];

  return (
    <LegalPage
      title="Plan du Site"
      subtitle="Navigation rapide vers nos pages principales"
      content={
        <>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Trouvez rapidement la page que vous cherchez grâce à notre plan de site organisé. 
            Cliquez sur n'importe quel lien pour accéder directement à la section souhaitée.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pages.map((page, index) => (
              <Link 
                key={page.name} 
                href={page.href}
                className="group bg-gray-900/50 backdrop-blur-sm rounded-xl p-5 border border-gray-700 hover:border-cyan-500/50 hover:bg-gray-800/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-900/30 to-gray-800 flex items-center justify-center group-hover:from-cyan-700/40 group-hover:to-gray-700 transition-all">
                      <svg 
                        className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300 transition-colors" 
                        fill="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path d={page.icon} />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {page.name}
                      </h3>
                      <svg 
                        className="w-5 h-5 text-gray-500 group-hover:text-cyan-400 transform group-hover:translate-x-1 transition-all" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {page.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 bg-gray-800/50 px-3 py-1 rounded-full">
                        {page.href}
                      </span>
                      <span className="text-xs font-medium text-cyan-400 bg-cyan-900/20 px-2 py-1 rounded">
                        {index < 4 ? "Page principale" : "Page légale"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-10 pt-8 border-t border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-gray-900/50 to-cyan-900/10 backdrop-blur-sm rounded-xl p-5 border border-cyan-800/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-cyan-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Navigation rapide</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Utilisez le plan du site pour naviguer rapidement entre toutes les pages importantes de notre site web.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-purple-900/10 backdrop-blur-sm rounded-xl p-5 border border-purple-800/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Pages légales</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Retrouvez toutes nos pages légales (vie privée, conditions, cookies) regroupées pour plus de clarté.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900/50 to-amber-900/10 backdrop-blur-sm rounded-xl p-5 border border-amber-800/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-900/30 flex items-center justify-center">
                    <svg className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"/>
                    </svg>
                  </div>
                  <h4 className="text-white font-semibold">Contact rapide</h4>
                </div>
                <p className="text-gray-400 text-sm">
                  Besoin d'aide ? La page contact est accessible en un clic pour toute question ou demande d'information.
                </p>
              </div>
            </div>
          </div>
        </>
      }
    />
  );
}