import LegalPage from "@/components/LegalPage";

export default function TermsPage() {
  return (
    <LegalPage
      title="Conditions d’Utilisation"
      subtitle="Règles et cadre légal pour l'utilisation de nos services"
      content={
        <>
          <p className="text-gray-300 mb-8 leading-relaxed">
            L’utilisation des services fournis par <strong className="text-white font-semibold">i-Team</strong> implique votre accord avec les présentes conditions d’utilisation. Merci de les lire attentivement.
          </p>

          <div className="space-y-8">
            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                1. Services proposés
              </h3>
              <p className="text-gray-300 mb-4">
                i-Team propose des services digitaux, incluant :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Développement web et mobile</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Design UI/UX et identité visuelle</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Gestion de réseaux sociaux et marketing digital</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Solutions Cloud et DevOps</span>
                </li>
              </ul>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                2. Obligations de l'utilisateur
              </h3>
              <p className="text-gray-300 mb-4">
                Vous vous engagez à utiliser nos services conformément à la loi et aux présentes conditions. Il est interdit de :
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Diffuser du contenu illégal, offensant ou piraté</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Partager vos identifiants avec des tiers</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-gray-300">Interférer avec le fonctionnement des services</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-amber-900/20 border border-amber-800/30 rounded-lg">
                <p className="text-amber-300 text-sm">
                  <strong className="font-semibold">Note :</strong> Toute violation de ces obligations peut entraîner la suspension immédiate de votre compte.
                </p>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                3. Propriété intellectuelle
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Tous les contenus, designs, logos, textes, et ressources appartiennent à i-Team, sauf indication contraire. Toute reproduction sans autorisation est interdite.
                </p>
                <div className="bg-gray-800/50 rounded-lg p-5 border border-gray-700">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-purple-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9 17l-5-5 1.41-1.41L9 14.17l7.59-7.59L18 8l-9 9z"/>
                    </svg>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Droits réservés</h4>
                      <p className="text-gray-400 text-sm">
                        Les droits d'auteur et droits de propriété intellectuelle sur tous les matériaux produits par i-Team restent notre propriété exclusive.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-gray-700">
                4. Responsabilité
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  i-Team ne peut être tenue responsable des dommages indirects liés à l'utilisation de nos services. La responsabilité directe est limitée au montant payé pour le service concerné.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                      </svg>
                      Non couvert
                    </h4>
                    <ul className="text-gray-400 text-sm space-y-1">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Pertes d'opportunités commerciales
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        Dommages indirects ou consécutifs
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-800/40 p-4 rounded-lg border border-gray-700">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      Limitation
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Responsabilité limitée au montant payé pour le service concerné au cours des 12 derniers mois.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-gradient-to-r from-gray-900/50 to-purple-900/20 backdrop-blur-sm rounded-xl p-6 border border-purple-800/50">
              <h3 className="text-2xl font-bold text-white mb-4 pb-3 border-b border-purple-800/50">
                5. Modifications
              </h3>
              <div className="space-y-4">
                <p className="text-gray-300">
                  Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés via le site ou par e-mail.
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 bg-gray-800/40 rounded-lg border border-gray-700">
                  <div className="flex items-center gap-3 bg-purple-900/30 px-4 py-2 rounded-lg">
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm1-15v4h4v2h-4v4h-2v-4H7v-2h4V7h2z"/>
                    </svg>
                    <span className="text-white font-medium">Notification</span>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Les modifications prennent effet 30 jours après leur publication. Votre utilisation continue des services vaut acceptation des nouvelles conditions.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </>
      }
    />
  );
}