import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import Tag from "../../components/Tag";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Planning équipe restaurant : les 7 erreurs à éviter",
  description:
    "Un mauvais planning coûte cher. Découvrez les 7 erreurs les plus courantes en planification d'équipe restaurant et comment les éviter.",
};

export default function ArticlePlanning() {
  return (
    <>
      <article className="pt-28 pb-20 md:pt-36">
        <div className="max-w-[720px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Link href="/blog" className="text-sm text-[#6A6059] hover:text-[#2D6A4A] no-underline mb-6 inline-block">
              &larr; Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Tag>RH</Tag>
              <span className="text-xs text-[#A09488]">7 min de lecture</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
              Planning équipe restaurant : les 7 erreurs à éviter
            </h1>
            <p className="text-lg text-[#6A6059] leading-relaxed mb-10">
              Un mauvais planning coûte cher — en heures supplémentaires, en turnover
              et en qualité de service. Voici les erreurs les plus courantes et comment les corriger.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Erreur #1 : Faire le planning au dernier moment</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Un planning publié le vendredi pour la semaine suivante, c&apos;est du stress
                pour toute l&apos;équipe. Les employés ne peuvent pas s&apos;organiser, les demandes
                d&apos;échange se multiplient, et vous finissez par improviser. Publiez votre
                planning au moins 10 jours à l&apos;avance.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Erreur #2 : Ne pas compter les heures réelles</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Sans compteur d&apos;heures automatique, les heures supplémentaires s&apos;accumulent
                sans que personne ne s&apos;en rende compte. À la fin du mois, la masse salariale
                explose. Un bon outil de planning compte les heures en temps réel.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Erreur #3 : Ignorer les congés légaux</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                2,5 jours de congés par mois travaillé — c&apos;est la loi. Ne pas les intégrer
                dans votre planning, c&apos;est s&apos;exposer à des conflits et des problèmes légaux.
                Pauco intègre automatiquement les droits à congés de chaque employé.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Erreur #4 : Un seul planning pour tout le monde</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Salle, bar et cuisine n&apos;ont pas les mêmes besoins. Un cuisinier qui prépare
                le service de midi n&apos;a pas les mêmes horaires qu&apos;un serveur qui fait le soir.
                Séparez vos plannings par pôle pour plus de clarté.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Erreur #5 : Planifier sur Excel</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Excel ne prévient pas quand un employé dépasse ses heures. Excel ne gère pas
                les congés. Excel ne se partage pas facilement avec l&apos;équipe. Excel n&apos;exporte
                pas en PDF. Un outil dédié fait tout ça automatiquement.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Erreur #6 : Ne pas impliquer l&apos;équipe</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Un planning imposé sans consultation crée de la frustration. Demandez les
                disponibilités et les préférences. Plus l&apos;équipe est impliquée, moins
                il y aura de changements de dernière minute.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Erreur #7 : Ne pas adapter au flux de clients</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-6">
                Mettre autant de personnel le mardi soir que le samedi soir, c&apos;est gaspiller
                de la masse salariale. Analysez votre historique de fréquentation et adaptez
                vos effectifs. Avec les prévisions IA de Pauco (Phase 4), ce sera même automatique.
              </p>

              <div className="bg-[#D6F0DF] border border-[#6DBF85]/30 rounded-xl p-6 my-10">
                <p className="text-sm text-[#2D6A4A] leading-relaxed">
                  <strong>Le planning Pauco</strong> : glisser-déposer, 3 pôles (Salle/Bar/Cuisine),
                  compteur d&apos;heures automatique, gestion des congés, export PDF. Tout est inclus
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
