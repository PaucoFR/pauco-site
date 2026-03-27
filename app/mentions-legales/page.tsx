import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site paucoandco.com — éditeur, hébergeur, directeur de publication.",
};

export default function MentionsLegales() {
  return (
    <section className="pt-28 pb-20 md:pt-36">
      <div className="max-w-[720px] mx-auto px-6 md:px-12">
        <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-10">
          Mentions légales
        </h1>

        <div className="space-y-10 text-[15px] text-[#6A6059] leading-relaxed">
          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong className="text-[#1a1a18]">paucoandco.com</strong> est édité par :
            </p>
            <ul className="list-none space-y-1.5 mt-3">
              <li><strong className="text-[#1a1a18]">Raison sociale :</strong> SASU Pauco (en cours de création)</li>
              <li><strong className="text-[#1a1a18]">Représentant légal :</strong> Paul Monfort</li>
              <li><strong className="text-[#1a1a18]">Siège social :</strong> Saint-Cast-le-Guildo, Bretagne, France</li>
              <li><strong className="text-[#1a1a18]">Email :</strong> <a href="mailto:paul@paucoandco.com" className="text-[#2D6A4A] hover:underline">paul@paucoandco.com</a></li>
              <li><strong className="text-[#1a1a18]">Téléphone :</strong> <a href="tel:+33783470657" className="text-[#2D6A4A] hover:underline">+33 7 83 47 06 57</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">2. Directeur de la publication</h2>
            <p>Paul Monfort</p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">3. Hébergeur</h2>
            <ul className="list-none space-y-1.5">
              <li><strong className="text-[#1a1a18]">Nom :</strong> Railway Corporation</li>
              <li><strong className="text-[#1a1a18]">Adresse :</strong> San Francisco, CA, États-Unis</li>
              <li><strong className="text-[#1a1a18]">Site :</strong> railway.app</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">4. Propriété intellectuelle</h2>
            <p>
              L&apos;ensemble du contenu du site paucoandco.com (textes, images, graphismes, logo, icônes, logiciels)
              est la propriété exclusive de SASU Pauco ou de ses partenaires et est protégé par les lois françaises
              et internationales relatives à la propriété intellectuelle.
            </p>
            <p className="mt-3">
              Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments
              du site, quel que soit le moyen ou le procédé utilisé, est interdite sauf autorisation écrite préalable de
              SASU Pauco.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">5. Données personnelles</h2>
            <p>
              Pour toute information relative à la collecte et au traitement de vos données personnelles, veuillez
              consulter notre{" "}
              <a href="/politique-de-confidentialite" className="text-[#2D6A4A] hover:underline">
                politique de confidentialité
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-[#1a1a18] text-lg mb-3">6. Cookies</h2>
            <p>
              Le site paucoandco.com utilise uniquement des cookies techniques essentiels au bon fonctionnement
              du service. Aucun cookie publicitaire ou de traçage n&apos;est déposé.
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
