import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conditions Générales de Vente",
  description: "CGV du service Pauco — abonnement, prix, paiement, résiliation, garantie prix fondateur.",
};

export default function CGV() {
  return (
    <section className="pt-28 pb-20 md:pt-36">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-10">
          Conditions Générales de Vente
        </h1>

        <div className="space-y-10 text-[15px] text-[#6A6059] leading-relaxed">
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">1. Objet</h2>
            <p>
              Les présentes Conditions Générales de Vente (CGV) régissent les conditions d&apos;abonnement et
              d&apos;utilisation du service <strong className="text-[#1a1a18]">Pauco</strong>, logiciel en mode SaaS
              (Software as a Service) destiné aux professionnels de la restauration.
            </p>
            <p className="mt-2">
              Le service est édité par SASU Pauco (en cours de création), représentée par Paul Monfort,
              dont le siège social est situé à Saint-Cast-le-Guildo, Bretagne, France.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">2. Description du service</h2>
            <p>Pauco est un logiciel tout-en-un de gestion pour restaurateurs comprenant :</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>E-réputation automatique (réponses aux avis Google, TripAdvisor, Booking)</li>
              <li>Gestion du chiffre d&apos;affaires et des dépenses</li>
              <li>Fiches techniques recettes et cocktails</li>
              <li>Calcul du coût matière automatisé</li>
              <li>Planning équipe</li>
              <li>Coûts bar avec pertes intégrées</li>
              <li>Rapport matinal et tableau de bord avancé</li>
              <li>Tout module futur ajouté à la plateforme</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">3. Prix</h2>
            <div className="bg-[#D6F0DF] border border-[#6DBF85]/30 rounded-xl p-5 my-4">
              <p className="text-sm text-[#2D6A4A]">
                <strong>Offre fondateur :</strong> 99€ HT/mois — réservée aux 50 premiers clients.
                Ce prix est contractuellement garanti à vie tant que l&apos;abonnement reste actif.
              </p>
            </div>
            <p>
              Au-delà des 50 places fondateurs, le tarif applicable sera le tarif standard en vigueur
              au moment de la souscription, tel qu&apos;affiché sur le site paucoandco.com.
            </p>
            <p className="mt-2">
              Les prix sont indiqués en euros hors taxes (HT). La TVA applicable sera ajoutée au moment
              de la facturation conformément à la réglementation en vigueur.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">4. Garantie prix fondateur</h2>
            <p>
              SASU Pauco s&apos;engage contractuellement à ne jamais augmenter le prix de l&apos;abonnement pour
              les clients bénéficiant du statut de <strong className="text-[#1a1a18]">client fondateur</strong>,
              tant que leur abonnement reste actif et continu.
            </p>
            <p className="mt-2">
              Cette garantie couvre l&apos;ensemble des modules présents et futurs de la plateforme Pauco.
              Aucun supplément ne sera demandé pour l&apos;accès aux nouvelles fonctionnalités.
            </p>
            <p className="mt-2">
              En cas de résiliation puis de réabonnement, le client perd le bénéfice du prix fondateur
              et se voit appliquer le tarif en vigueur au moment de sa nouvelle souscription.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">5. Paiement</h2>
            <p>
              Le paiement de l&apos;abonnement est effectué <strong className="text-[#1a1a18]">mensuellement</strong> par
              carte bancaire via la plateforme sécurisée <strong className="text-[#1a1a18]">Stripe</strong> (certifiée PCI-DSS).
            </p>
            <p className="mt-2">
              Le paiement est dû à la date anniversaire de la souscription de chaque mois.
              En cas d&apos;échec de paiement, le client sera notifié par email et disposera d&apos;un délai
              de 7 jours pour régulariser sa situation avant suspension du service.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">6. Résiliation</h2>
            <p>
              Le client peut résilier son abonnement <strong className="text-[#1a1a18]">à tout moment</strong>,
              sans frais et sans justification.
            </p>
            <p className="mt-2">
              La résiliation prend effet à la fin du mois en cours. Le client conserve l&apos;accès au service
              jusqu&apos;à la fin de la période déjà payée.
            </p>
            <p className="mt-2">
              Pour résilier, le client peut contacter le service client par email à{" "}
              <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a>{" "}
              ou par téléphone au{" "}
              <a href="tel:+33783470657" className="text-[#2D6A4A] hover:underline">+33 7 83 47 06 57</a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">7. Obligations du client</h2>
            <p>Le client s&apos;engage à :</p>
            <ul className="list-disc pl-6 space-y-1.5 mt-3">
              <li>Fournir des informations exactes et à jour lors de son inscription</li>
              <li>Ne pas partager ses identifiants de connexion avec des tiers</li>
              <li>Utiliser le service conformément à sa destination professionnelle</li>
              <li>Ne pas tenter de contourner les mesures de sécurité du service</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">8. Responsabilité</h2>
            <p>
              SASU Pauco s&apos;engage à fournir le service avec diligence et selon les règles de l&apos;art.
              Il s&apos;agit d&apos;une obligation de moyens et non de résultat.
            </p>
            <p className="mt-2">
              SASU Pauco ne saurait être tenue responsable des dommages indirects, pertes de données,
              pertes de chiffre d&apos;affaires ou interruptions de service résultant de circonstances
              indépendantes de sa volonté (force majeure, panne d&apos;hébergeur, etc.).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">9. Données personnelles</h2>
            <p>
              Le traitement des données personnelles est décrit dans notre{" "}
              <a href="/politique-de-confidentialite" className="text-[#2D6A4A] hover:underline">
                politique de confidentialité
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">10. Droit applicable et litiges</h2>
            <p>
              Les présentes CGV sont régies par le <strong className="text-[#1a1a18]">droit français</strong>.
            </p>
            <p className="mt-2">
              En cas de litige, les parties s&apos;engagent à rechercher une solution amiable avant toute action
              judiciaire. À défaut d&apos;accord amiable dans un délai de 30 jours, le litige sera porté devant
              le <strong className="text-[#1a1a18]">tribunal compétent de Saint-Cast-le-Guildo</strong>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">11. Modification des CGV</h2>
            <p>
              SASU Pauco se réserve le droit de modifier les présentes CGV à tout moment. Les clients seront
              informés de toute modification par email au moins 30 jours avant l&apos;entrée en vigueur des
              nouvelles conditions.
            </p>
            <p className="mt-2">
              La poursuite de l&apos;utilisation du service après l&apos;entrée en vigueur des nouvelles CGV vaut
              acceptation de celles-ci.
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
