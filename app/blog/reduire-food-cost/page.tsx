import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import Tag from "../../components/Tag";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Comment réduire son food cost en restauration",
  description:
    "Le food cost est l'indicateur clé de rentabilité en restauration. Découvrez 8 méthodes concrètes pour le réduire sans sacrifier la qualité.",
};

export default function ArticleFoodCost() {
  return (
    <>
      <article className="pt-28 pb-20 md:pt-36">
        <div className="max-w-[720px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Link href="/blog" className="text-sm text-[#6A6059] hover:text-[#2D6A4A] no-underline mb-6 inline-block">
              &larr; Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Tag>Gestion</Tag>
              <span className="text-xs text-[#A09488]">8 min de lecture</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
              Comment réduire son food cost en restauration
            </h1>
            <p className="text-lg text-[#6A6059] leading-relaxed mb-10">
              Le food cost est l&apos;un des indicateurs les plus importants en restauration.
              Il représente le pourcentage de votre chiffre d&apos;affaires consacré aux matières
              premières. Un food cost mal maîtrisé, c&apos;est de la marge qui disparaît chaque
              jour — silencieusement.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Qu&apos;est-ce que le food cost ?</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Le food cost se calcule simplement : <strong className="text-[#1a1a18]">coût des matières premières ÷ chiffre d&apos;affaires × 100</strong>.
                En France, un food cost moyen en restauration traditionnelle se situe entre 25% et 35%.
                Au-delà de 35%, votre rentabilité est en danger.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">1. Créez des fiches techniques pour chaque plat</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                C&apos;est la base absolue. Sans fiche technique, vous ne connaissez pas le coût réel
                de chaque plat. Listez chaque ingrédient, sa quantité exacte et son prix d&apos;achat.
                Pauco calcule automatiquement le food cost par plat et vous suggère un prix de vente adapté.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">2. Négociez avec vos fournisseurs</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Comparez les prix entre fournisseurs pour chaque produit. Demandez des remises
                sur volume. Renégociez vos contrats au moins une fois par an. Même 2% de réduction
                sur vos achats peut représenter des milliers d&apos;euros sur l&apos;année.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">3. Réduisez le gaspillage</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                30% du gaspillage en restauration vient d&apos;une mauvaise gestion des stocks.
                Appliquez le FIFO (premier entré, premier sorti), contrôlez les DLC et adaptez
                vos commandes à votre fréquentation réelle. Un plat du jour avec les excédents
                de la veille, c&apos;est du food cost récupéré.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">4. Ajustez vos portions</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Des portions trop généreuses = de la marge perdue. Pesez vos portions pendant
                une semaine. Vous serez surpris de l&apos;écart entre ce que vous pensez servir
                et ce que vous servez réellement.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">5. Travaillez votre carte</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Analysez la rentabilité de chaque plat avec la matrice BCG : étoiles (populaire + rentable),
                vaches à lait (populaire + peu rentable), dilemmes (peu populaire + rentable),
                poids morts (ni l&apos;un ni l&apos;autre). Supprimez les poids morts, poussez les étoiles.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">6. Intégrez les pertes dans vos calculs</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Épluchures, casse, évaporation, dégustation — ces pertes existent et doivent
                être intégrées dans votre food cost. Pauco les calcule automatiquement dans
                les fiches cocktails et recettes.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">7. Suivez votre food cost quotidiennement</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Un food cost qui dérive de 2% pendant un mois sans que vous le remarquiez,
                c&apos;est un mois de marge perdu. Suivez l&apos;indicateur chaque jour, pas chaque trimestre.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">8. Utilisez un outil adapté</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-6">
                Excel n&apos;est pas un outil de gestion de food cost. Vous avez besoin d&apos;un outil
                qui calcule automatiquement, qui met à jour en temps réel et qui vous alerte
                quand quelque chose dérive. C&apos;est exactement ce que fait Pauco.
              </p>

              <div className="bg-[#D6F0DF] border border-[#6DBF85]/30 rounded-xl p-6 my-10">
                <p className="text-sm text-[#2D6A4A] leading-relaxed">
                  <strong>Pauco calcule votre food cost automatiquement</strong> — par plat, par cocktail,
                  et globalement. Fiches techniques, pertes intégrées, alertes ratios. Tout est inclus
                  dans l&apos;abonnement fondateur à 99€/mois.
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
