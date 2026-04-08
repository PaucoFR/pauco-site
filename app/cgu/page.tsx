import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales d'Utilisation",
  description: "CGU de la plateforme Pauco — conditions d'utilisation du logiciel SaaS de gestion de restaurant, sous-traitance RGPD, données personnelles.",
};

export default function CGU() {
  return (
    <section className="pt-28 pb-20 md:pt-36">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-10">
          Conditions Générales d&apos;Utilisation
        </h1>

        <div className="space-y-10 text-[15px] text-[#6A6059] leading-relaxed">
          {/* Article 1 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">1. Objet et champ d&apos;application</h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (ci-après « CGU ») régissent l&apos;accès et
              l&apos;utilisation de la plateforme <strong className="text-[#1a1a18]">Pauco</strong>, logiciel SaaS de
              gestion de restaurant accessible à l&apos;adresse{" "}
              <a href="https://app.paucoandco.com" className="text-[#2D6A4A] hover:underline">app.paucoandco.com</a>.
            </p>
            <p className="mt-3">
              Pauco est édité par <strong className="text-[#1a1a18]">Pauco SASU</strong>, représentée par Paul Monfort,
              SIREN 103 317 335, RCS Saint-Malo, dont le siège social est situé au 447 Impasse de la Ville Revault, 35800 Saint-Lunaire, France.
            </p>
            <p className="mt-3">
              Toute utilisation de la plateforme implique l&apos;acceptation sans réserve des présentes CGU par
              l&apos;utilisateur (ci-après « le Client »).
            </p>
          </div>

          {/* Article 2 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">2. Accès au service</h2>
            <p>
              L&apos;accès à la plateforme Pauco s&apos;effectue via des identifiants personnels (email et mot de passe)
              strictement confidentiels et non cessibles.
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Le service est réservé aux <strong className="text-[#1a1a18]">professionnels de la restauration</strong> agissant dans le cadre de leur activité.</li>
              <li>L&apos;utilisateur est seul responsable de la confidentialité de ses identifiants de connexion et de toute activité réalisée depuis son compte.</li>
              <li>En cas de suspicion d&apos;utilisation non autorisée, le Client s&apos;engage à en informer immédiatement Pauco à l&apos;adresse{" "}
                <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a>.
              </li>
            </ul>
          </div>

          {/* Article 3 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">3. Description du service</h2>
            <p>
              Pauco est un logiciel tout-en-un de gestion de restaurant proposant les fonctionnalités suivantes :
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li><strong className="text-[#1a1a18]">E-réputation automatique</strong> — collecte et gestion des avis Google</li>
              <li><strong className="text-[#1a1a18]">Gestion financière</strong> — suivi du chiffre d&apos;affaires et des dépenses</li>
              <li><strong className="text-[#1a1a18]">Planning équipe</strong> — organisation des plannings du personnel</li>
              <li><strong className="text-[#1a1a18]">Fiches techniques</strong> — création et gestion des recettes</li>
              <li><strong className="text-[#1a1a18]">Food cost</strong> — calcul du coût matière</li>
              <li><strong className="text-[#1a1a18]">Rapport WhatsApp quotidien</strong> — synthèse journalière envoyée automatiquement</li>
            </ul>
            <p className="mt-3">
              Des modules complémentaires pourront être ajoutés selon la roadmap publiée sur{" "}
              <a href="https://paucoandco.com" className="text-[#2D6A4A] hover:underline">paucoandco.com</a>.
              Pauco se réserve le droit de faire évoluer les fonctionnalités du service.
            </p>
          </div>

          {/* Article 4 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">4. Sous-traitance RGPD</h2>
            <p>
              Au sens du Règlement Général sur la Protection des Données (UE 2016/679, ci-après « RGPD »),
              Pauco agit en qualité de <strong className="text-[#1a1a18]">sous-traitant</strong> des données personnelles.
              Le Client restaurateur est le <strong className="text-[#1a1a18]">responsable de traitement</strong>.
            </p>
            <p className="mt-3 font-semibold text-[#1a1a18]">Engagements de Pauco en tant que sous-traitant :</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Ne traiter les données personnelles que <strong className="text-[#1a1a18]">sur instruction documentée</strong> du Client.</li>
              <li>Garantir la <strong className="text-[#1a1a18]">confidentialité</strong> des données traitées (accès restreints aux personnels habilités, chiffrement TLS en transit, journalisation des accès).</li>
              <li>Ne pas faire appel à un autre sous-traitant sans l&apos;<strong className="text-[#1a1a18]">autorisation écrite préalable</strong> du Client.</li>
              <li>Notifier le Client de toute <strong className="text-[#1a1a18]">violation de données personnelles</strong> dans un délai de <strong className="text-[#1a1a18]">72 heures</strong> suivant la découverte de l&apos;incident.</li>
              <li>À la fin du contrat, <strong className="text-[#1a1a18]">restituer ou supprimer</strong> l&apos;intégralité des données personnelles traitées pour le compte du Client, selon le choix de ce dernier.</li>
              <li>Mettre à disposition du Client toute information nécessaire pour démontrer le respect des obligations RGPD et permettre la réalisation d&apos;audits.</li>
            </ul>
            <div className="mt-4 p-4 bg-[#f8f6f3] rounded-lg border border-[#E4DDD3]">
              <p className="text-sm">
                <strong className="text-[#1a1a18]">Hébergement :</strong> les données sont hébergées par{" "}
                <strong className="text-[#1a1a18]">Railway Corporation</strong> (San Francisco, CA, États-Unis).
                Ce transfert de données hors UE est encadré par les{" "}
                <strong className="text-[#1a1a18]">Clauses Contractuelles Types</strong> de la Commission Européenne
                (décision d&apos;exécution 2021/914 du 4 juin 2021), garantissant un niveau de protection adéquat
                des données personnelles.
              </p>
            </div>
          </div>

          {/* Article 5 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">5. Données personnelles traitées</h2>
            <p>
              Dans le cadre de l&apos;exécution du service, Pauco est amené à traiter les catégories de données
              personnelles suivantes :
            </p>
            <div className="mt-3 space-y-4">
              <div>
                <p className="font-semibold text-[#1a1a18]">Données des restaurateurs (Clients) :</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Nom, prénom, adresse email, numéro de téléphone</li>
                  <li>Données financières du restaurant (CA, dépenses)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a18]">Données des employés du Client :</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Nom, prénom, poste occupé</li>
                  <li>Planning, informations contractuelles</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-[#1a1a18]">Données des clients finaux :</p>
                <ul className="list-disc pl-5 space-y-1 mt-1">
                  <li>Uniquement les données issues des avis Google publics (nom, avis, note)</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              <p><strong className="text-[#1a1a18]">Base légale :</strong> exécution du contrat (article 6.1.b du RGPD).</p>
              <p><strong className="text-[#1a1a18]">Durée de conservation :</strong> les données sont conservées pendant la durée de la relation contractuelle, puis 3 ans après la fin de celle-ci, conformément aux obligations légales.</p>
            </div>
            <div className="mt-4 p-4 bg-[#f8f6f3] rounded-lg border border-[#E4DDD3]">
              <p className="text-sm">
                <strong className="text-[#1a1a18]">Droits RGPD :</strong> conformément au RGPD, vous disposez d&apos;un droit
                d&apos;accès, de rectification, de suppression, de portabilité et de limitation du traitement de vos données.
                Pour exercer ces droits, contactez-nous à{" "}
                <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a>.
              </p>
            </div>
          </div>

          {/* Article 6 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">6. Responsabilités et limitations</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Pauco s&apos;engage à fournir le service avec diligence dans le cadre d&apos;une <strong className="text-[#1a1a18]">obligation de moyens</strong>, et non de résultat.</li>
              <li>Pauco vise une <strong className="text-[#1a1a18]">disponibilité de 99 %</strong> du service, hors périodes de maintenance planifiée dont le Client sera informé à l&apos;avance.</li>
              <li>Pauco ne saurait être tenu responsable des pertes de chiffre d&apos;affaires, de données ou de tout dommage indirect résultant d&apos;une indisponibilité temporaire du service.</li>
              <li>La responsabilité totale de Pauco est <strong className="text-[#1a1a18]">limitée au montant des 3 derniers mois d&apos;abonnement</strong> effectivement payés par le Client.</li>
            </ul>
          </div>

          {/* Article 7 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">7. Engagement de disponibilité (SLA)</h2>
            <p>
              Pauco s&apos;engage à maintenir une disponibilité mensuelle du service de{" "}
              <strong className="text-[#1a1a18]">99 %</strong>, soit moins de 7 heures d&apos;indisponibilité
              par mois calendaire.
            </p>
            <p className="mt-3 font-semibold text-[#1a1a18]">Exclusions du calcul de disponibilité :</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>Les <strong className="text-[#1a1a18]">maintenances planifiées</strong>, annoncées au moins 24 heures à l&apos;avance par email au Client.</li>
              <li>Les incidents liés aux <strong className="text-[#1a1a18]">sous-traitants techniques</strong> (Railway, Airtable, Stripe) sur lesquels Pauco n&apos;a pas de contrôle direct.</li>
              <li>Les cas de <strong className="text-[#1a1a18]">force majeure</strong> tels que définis par l&apos;article 1218 du Code civil.</li>
            </ul>
            <div className="mt-4 p-4 bg-[#f8f6f3] rounded-lg border border-[#E4DDD3]">
              <p className="text-sm">
                <strong className="text-[#1a1a18]">Compensation :</strong> en cas de dépassement du seuil d&apos;indisponibilité,
                le Client peut demander un crédit d&apos;un jour d&apos;abonnement par heure d&apos;indisponibilité
                supplémentaire, sur simple demande à{" "}
                <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a>.
                Ce crédit constitue l&apos;unique recours du Client au titre du présent SLA.
              </p>
            </div>
            <p className="mt-3">
              Suivi de la disponibilité :{" "}
              <a href="https://status.paucoandco.com" className="text-[#2D6A4A] hover:underline">status.paucoandco.com</a>
            </p>
          </div>

          {/* Article 8 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">8. Propriété intellectuelle</h2>
            <p>
              Le logiciel Pauco, son design, ses algorithmes, son code source et l&apos;ensemble de ses composants
              sont la <strong className="text-[#1a1a18]">propriété exclusive de Paul Monfort</strong>.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, distribution ou utilisation non autorisée, totale
              ou partielle, du logiciel est strictement interdite et constitue une contrefaçon sanctionnée par le
              Code de la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Les données saisies par le Client dans la plateforme <strong className="text-[#1a1a18]">lui appartiennent
              intégralement</strong>. Pauco ne revendique aucun droit de propriété sur ces données.
            </p>
          </div>

          {/* Article 9 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">9. Prix et paiement</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>L&apos;abonnement à Pauco est facturé <strong className="text-[#1a1a18]">mensuellement</strong> via la plateforme de paiement sécurisée <strong className="text-[#1a1a18]">Stripe</strong>.</li>
              <li><strong className="text-[#1a1a18]">Offre Client Fondateur :</strong> 99 €/mois HT, tarif garanti à vie, réservé aux 50 premiers clients.</li>
              <li><strong className="text-[#1a1a18]">Tarif standard :</strong> selon le tarif en vigueur publié sur{" "}
                <a href="https://paucoandco.com/tarifs" className="text-[#2D6A4A] hover:underline">paucoandco.com/tarifs</a>.
              </li>
              <li>La facturation est automatique. Le Client autorise le prélèvement récurrent lors de la souscription.</li>
              <li>En cas d&apos;échec de paiement, Pauco se réserve le droit de suspendre l&apos;accès au service après notification par email.</li>
            </ul>
          </div>

          {/* Article 10 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">10. Résiliation</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>Le Client peut résilier son abonnement <strong className="text-[#1a1a18]">à tout moment, sans frais</strong>, par simple email à{" "}
                <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a>.
              </li>
              <li>L&apos;accès au service est maintenu jusqu&apos;à la <strong className="text-[#1a1a18]">fin de la période mensuelle en cours</strong>.</li>
              <li>Un export des données est disponible pendant <strong className="text-[#1a1a18]">30 jours</strong> après la date effective de résiliation. Passé ce délai, les données seront supprimées conformément à l&apos;article 4 des présentes CGU.</li>
            </ul>
          </div>

          {/* Article 11 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">11. Modification des CGU</h2>
            <p>
              Pauco se réserve le droit de modifier les présentes CGU à tout moment. Le Client sera informé de
              toute modification substantielle par email au moins <strong className="text-[#1a1a18]">30 jours</strong> avant
              son entrée en vigueur.
            </p>
            <p className="mt-3">
              La poursuite de l&apos;utilisation du service après l&apos;entrée en vigueur des modifications vaut
              acceptation des nouvelles CGU. En cas de désaccord, le Client pourra résilier son abonnement
              conformément à l&apos;article 10.
            </p>
          </div>

          {/* Article 12 */}
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">12. Droit applicable et juridiction</h2>
            <p>
              Les présentes CGU sont régies par le <strong className="text-[#1a1a18]">droit français</strong>.
            </p>
            <p className="mt-3">
              En cas de litige relatif à l&apos;interprétation ou à l&apos;exécution des présentes, les parties
              s&apos;engagent à rechercher une solution amiable. À défaut, le litige sera soumis aux tribunaux
              compétents de <strong className="text-[#1a1a18]">Saint-Malo</strong>, France.
            </p>
          </div>

          <p className="text-sm text-[#A09488] pt-6 border-t border-[#E4DDD3]">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </div>
    </section>
  );
}
