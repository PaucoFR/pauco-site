import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité de Pauco — données collectées, finalités, droits RGPD, cookies.",
};

export default function PolitiqueConfidentialite() {
  return (
    <section className="pt-28 pb-20 md:pt-36">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-10">
          Politique de confidentialité
        </h1>

        <div className="space-y-10 text-[15px] text-[#6A6059] leading-relaxed">
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données personnelles est Pauco SASU, représentée par Paul Monfort,
              SIREN 103 317 335, RCS Saint-Malo, dont le siège social est situé au 447 Impasse de la Ville Revault, 35800 Saint-Lunaire, France.
            </p>
            <p className="mt-2">
              Contact : <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">2. Données collectées</h2>
            <p>Dans le cadre de l&apos;utilisation du site et du service Pauco, nous collectons les données suivantes :</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Nom du restaurant</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">3. Finalités du traitement</h2>
            <p>Les données collectées sont utilisées pour :</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>La gestion des abonnements au service Pauco</li>
              <li>La gestion de la relation client (support, onboarding, suivi)</li>
              <li>L&apos;envoi de communications relatives au service (rapports, alertes, mises à jour)</li>
              <li>La facturation et le traitement des paiements</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">4. Base légale du traitement</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li><strong className="text-[#1a1a18]">Votre consentement</strong> : lors de la soumission du formulaire de contact ou d&apos;inscription</li>
              <li><strong className="text-[#1a1a18]">L&apos;exécution du contrat</strong> : dans le cadre de la fourniture du service Pauco et de la gestion de votre abonnement</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">5. Durée de conservation</h2>
            <p>
              Vos données personnelles sont conservées pendant toute la durée de la relation commerciale,
              puis pendant une durée de <strong className="text-[#1a1a18]">3 ans après la fin de la relation commerciale</strong>,
              conformément aux obligations légales en vigueur.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">6. Vos droits (RGPD)</h2>
            <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li><strong className="text-[#1a1a18]">Droit d&apos;accès</strong> : obtenir la confirmation que des données vous concernant sont traitées et en obtenir une copie</li>
              <li><strong className="text-[#1a1a18]">Droit de rectification</strong> : demander la correction de données inexactes ou incomplètes</li>
              <li><strong className="text-[#1a1a18]">Droit de suppression</strong> : demander l&apos;effacement de vos données personnelles</li>
              <li><strong className="text-[#1a1a18]">Droit d&apos;opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong className="text-[#1a1a18]">Droit à la portabilité</strong> : recevoir vos données dans un format structuré et lisible</li>
              <li><strong className="text-[#1a1a18]">Droit à la limitation</strong> : demander la limitation du traitement dans certains cas</li>
            </ul>
            <p className="mt-3">
              Pour exercer ces droits, contactez-nous à :{" "}
              <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a>
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la CNIL (Commission Nationale de
              l&apos;Informatique et des Libertés) : <span className="text-[#1a1a18]">www.cnil.fr</span>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">7. Transferts de données hors UE</h2>
            <p>
              Vos données sont hébergées par Railway Corporation (San Francisco, CA, États-Unis).
              Ce transfert est encadré par des <strong className="text-[#1a1a18]">clauses contractuelles types</strong> approuvées
              par la Commission européenne, garantissant un niveau de protection adéquat de vos données.
            </p>
            <p className="mt-2">
              En dehors de cet hébergement, aucun transfert de données personnelles hors de l&apos;Union européenne n&apos;est effectué.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">8. Cookies</h2>
            <p>
              Le site paucoandco.com utilise uniquement des <strong className="text-[#1a1a18]">cookies techniques essentiels</strong> au
              bon fonctionnement du service. Ces cookies sont strictement nécessaires et ne requièrent pas votre
              consentement préalable conformément à la réglementation en vigueur.
            </p>
            <p className="mt-2">
              Aucun cookie publicitaire, analytique ou de traçage tiers n&apos;est déposé sur votre navigateur.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">9. Sous-traitants</h2>
            <p>Nous faisons appel aux sous-traitants suivants pour le traitement de vos données :</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li><strong className="text-[#1a1a18]">Stripe</strong> : traitement des paiements (certifié PCI-DSS)</li>
              <li><strong className="text-[#1a1a18]">Railway</strong> : hébergement de l&apos;application</li>
              <li><strong className="text-[#1a1a18]">Make (Integromat)</strong> : automatisation des workflows internes</li>
            </ul>
          </div>

          <p className="text-sm text-[#A09488] pt-6 border-t border-[#E4DDD3]">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </div>
    </section>
  );
}
