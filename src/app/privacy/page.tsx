import LegalPage from "@/components/LegalPage";

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Politique de Confidentialité"
      subtitle="Protection et respect de vos données personnelles"
      content={
        <>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Chez <strong className="text-white font-semibold">i-Team</strong>, 
            nous considérons la confidentialité de vos informations personnelles 
            comme essentielle. Cette politique détaille comment nous collectons, 
            utilisons et protégeons vos données.
          </p>

          <div className="space-y-8">
            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                1. Données collectées
              </h3>
              <p className="text-gray-300 mb-4">
                Nous pouvons collecter différentes informations lors de votre utilisation de nos services :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Nom et prénom</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Adresse e-mail et numéro de téléphone</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Informations professionnelles (entreprise, poste, site web)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Données de navigation et cookies</span>
                </li>
              </ul>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                2. Utilisation des données
              </h3>
              <p className="text-gray-300 mb-4">
                Vos données sont utilisées uniquement pour :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Gérer vos projets et demandes de service</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Communiquer avec vous sur vos besoins et nos offres</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Améliorer la qualité de nos services et notre expérience utilisateur</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Envoyer des informations promotionnelles si vous y avez consenti</span>
                </li>
              </ul>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                3. Partage et protection
              </h3>
              <p className="text-gray-300 mb-4">
                Nous ne vendons ni ne louons vos informations personnelles. 
                Vos données peuvent être partagées uniquement avec :
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Nos prestataires techniques pour le bon fonctionnement des services</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Nos partenaires dans le cadre de services strictement définis</span>
                </li>
              </ul>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <p className="text-gray-300 italic">
                  Toutes vos données sont protégées par des mesures techniques 
                  et organisationnelles conformes aux normes de sécurité.
                </p>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                4. Vos droits
              </h3>
              <p className="text-gray-300 mb-4">
                Conformément au RGPD, vous pouvez :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Accéder à vos données personnelles</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Les rectifier ou les supprimer</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Retirer votre consentement à tout moment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Vous opposer au traitement de vos données</span>
                </li>
              </ul>
            </section>

            <section className="bg-gradient-to-r from-gray-900/50 to-cyan-900/20 backdrop-blur-sm rounded-xl p-6 border border-cyan-800/50">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-cyan-800/50">
                5. Contact
              </h3>
              <p className="text-gray-300 mb-4">
                Pour toute question relative à vos données personnelles, contactez-nous à :
              </p>
              <div className="inline-flex items-center gap-3 bg-gray-900/70 px-5 py-3 rounded-lg border border-gray-700 hover:border-cyan-600 transition-colors">
                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <a 
                  href="mailto:contact@iteam.digital" 
                  className="text-cyan-400 hover:text-cyan-300 font-medium transition-colors text-lg"
                >
                  contact@iteam.digital
                </a>
              </div>
            </section>
          </div>
        </>
      }
    />
  );
}