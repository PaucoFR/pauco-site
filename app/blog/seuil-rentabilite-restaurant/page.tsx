import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import Tag from "../../components/Tag";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Seuil de rentabilité restaurant : comment le calculer",
  description:
    "Savez-vous à quel jour du mois votre restaurant commence à gagner de l'argent ? Apprenez à calculer et suivre votre seuil de rentabilité.",
};

export default function ArticleSeuilRentabilite() {
  return (
    <>
      <article className="pt-28 pb-20 md:pt-36">
        <div className="max-w-[720px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Link href="/blog" className="text-sm text-[#6A6059] hover:text-[#2D6A4A] no-underline mb-6 inline-block">
              &larr; Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Tag>Finance</Tag>
              <span className="text-xs text-[#A09488]">9 min de lecture</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
              Seuil de rentabilité restaurant : comment le calculer
            </h1>
            <p className="text-lg text-[#6A6059] leading-relaxed mb-10">
              Savez-vous à partir de quel jour du mois votre restaurant commence à gagner
              de l&apos;argent ? Le seuil de rentabilité est l&apos;indicateur qui répond à cette question
              cruciale.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Qu&apos;est-ce que le seuil de rentabilité ?</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Le seuil de rentabilité (ou point mort) est le chiffre d&apos;affaires minimum
                que votre restaurant doit réaliser pour couvrir l&apos;ensemble de ses charges
                fixes et variables. En dessous de ce seuil, vous perdez de l&apos;argent.
                Au-dessus, chaque euro supplémentaire est du bénéfice.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">La formule de calcul</h2>
              <div className="bg-white border border-[#E4DDD3] rounded-xl p-6 my-6">
                <p className="text-center font-semibold text-[#1a1a18] text-lg mb-2">
                  Seuil de rentabilité = Charges fixes ÷ Taux de marge sur coûts variables
                </p>
                <p className="text-center text-sm text-[#6A6059]">
                  Taux de marge = (CA - Charges variables) ÷ CA
                </p>
              </div>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Identifier vos charges fixes</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Les charges fixes ne varient pas avec votre activité :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#6A6059] mb-4">
                <li>Loyer et charges locatives</li>
                <li>Salaires fixes (hors heures supplémentaires)</li>
                <li>Assurances</li>
                <li>Abonnements (électricité, eau, internet, logiciels)</li>
                <li>Remboursement d&apos;emprunts</li>
                <li>Expert-comptable</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Identifier vos charges variables</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Les charges variables évoluent avec votre CA :
              </p>
              <ul className="list-disc pl-6 space-y-2 text-[15px] text-[#6A6059] mb-4">
                <li>Achats de matières premières (food cost)</li>
                <li>Heures supplémentaires et extras</li>
                <li>Consommables (serviettes, produits d&apos;entretien)</li>
                <li>Commissions plateformes de livraison</li>
              </ul>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Exemple concret</h2>
              <div className="bg-white border border-[#E4DDD3] rounded-xl p-6 my-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-[#6A6059]">Charges fixes mensuelles</span>
                  <span className="font-semibold text-[#1a1a18]">18 000€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6A6059]">CA mensuel moyen</span>
                  <span className="font-semibold text-[#1a1a18]">45 000€</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-[#6A6059]">Charges variables (food cost 30% + extras)</span>
                  <span className="font-semibold text-[#1a1a18]">15 750€</span>
                </div>
                <div className="border-t border-[#E4DDD3] pt-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-[#6A6059]">Taux de marge</span>
                    <span className="font-semibold text-[#1a1a18]">65%</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-[#6A6059]">Seuil de rentabilité</span>
                    <span className="font-semibold text-[#2D6A4A]">27 692€</span>
                  </div>
                  <div className="flex justify-between text-sm mt-2">
                    <span className="text-[#6A6059]">Soit environ</span>
                    <span className="font-semibold text-[#2D6A4A]">le 18 du mois</span>
                  </div>
                </div>
              </div>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Comment réduire votre seuil de rentabilité</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Deux leviers : réduire vos charges fixes (renégocier le bail, optimiser
                les contrats) ou augmenter votre taux de marge (réduire le food cost,
                ajuster les prix de vente). L&apos;idéal : agir sur les deux en même temps.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Suivre son seuil en temps réel</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-6">
                Le calcul ponctuel c&apos;est bien, mais le suivi quotidien c&apos;est mieux.
                Savoir chaque jour si vous êtes en dessous ou au-dessus de votre seuil
                change votre manière de prendre des décisions.
              </p>

              <div className="bg-[#D6F0DF] border border-[#6DBF85]/30 rounded-xl p-6 my-10">
                <p className="text-sm text-[#2D6A4A] leading-relaxed">
                  <strong>Pauco calcule votre seuil de rentabilité automatiquement</strong> — avec
                  la date prévisionnelle d&apos;atteinte, mise à jour en temps réel à chaque saisie
                  de CA et de dépenses. Tout est inclus dans l&apos;abonnement fondateur à 99€/mois.
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 bg-[#2D6A4A] text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#3a7d58] transition-colors no-underline"
                >
                  Devenir fondateur &rarr;
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </article>
      <CTASection />
    </>
  );
}
