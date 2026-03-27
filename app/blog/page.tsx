import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Conseils pour restaurateurs : food cost, avis Google, planning équipe, seuil de rentabilité. Par Paul, fondateur de Pauco.",
};

const articles = [
  {
    slug: "reduire-food-cost",
    title: "Comment réduire son food cost en restauration",
    excerpt:
      "Le food cost est l'un des indicateurs les plus importants en restauration. Découvrez les méthodes concrètes pour le réduire sans sacrifier la qualité de vos plats.",
    readTime: "8 min",
    category: "Gestion",
  },
  {
    slug: "gerer-avis-google-restaurant",
    title: "Gérer les avis Google de son restaurant : le guide complet",
    excerpt:
      "93% des consommateurs lisent les avis en ligne avant de choisir un restaurant. Voici comment transformer vos avis Google en moteur de croissance.",
    readTime: "10 min",
    category: "E-réputation",
  },
  {
    slug: "planning-equipe-restaurant-erreurs",
    title: "Planning équipe restaurant : les 7 erreurs à éviter",
    excerpt:
      "Un mauvais planning coûte cher — en heures supplémentaires, en turnover et en qualité de service. Voici les erreurs les plus courantes et comment les éviter.",
    readTime: "7 min",
    category: "RH",
  },
  {
    slug: "seuil-rentabilite-restaurant",
    title: "Seuil de rentabilité restaurant : comment le calculer",
    excerpt:
      "Savez-vous à partir de quel jour du mois votre restaurant commence à gagner de l'argent ? Le seuil de rentabilité est l'indicateur qui répond à cette question.",
    readTime: "9 min",
    category: "Finance",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="pt-28 pb-8 md:pt-36 md:pb-12">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Tag>Blog</Tag>
            <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-semibold leading-tight tracking-tight mt-5 mb-4">
              Ressources pour <em className="italic text-[#2D6A4A]">restaurateurs.</em>
            </h1>
            <p className="text-lg text-[#6A6059] leading-relaxed max-w-xl">
              Guides pratiques, conseils de gestion et bonnes pratiques pour piloter
              votre restaurant avec des données.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <ScrollReveal key={article.slug} delay={i * 0.1}>
                <Link
                  href={`/blog/${article.slug}`}
                  className="block bg-white border border-[#E4DDD3] rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 no-underline group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#2D6A4A] bg-[#D6F0DF] px-2.5 py-1 rounded-full">
                      {article.category}
                    </span>
                    <span className="text-xs text-[#A09488]">{article.readTime} de lecture</span>
                  </div>
                  <h2 className="font-serif text-xl font-semibold leading-tight mb-3 group-hover:text-[#2D6A4A] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#6A6059] leading-relaxed">
                    {article.excerpt}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-[#2D6A4A] group-hover:underline">
                    Lire l&apos;article &rarr;
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
