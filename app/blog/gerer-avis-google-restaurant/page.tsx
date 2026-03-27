import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "../../components/ScrollReveal";
import Tag from "../../components/Tag";
import CTASection from "../../components/CTASection";

export const metadata: Metadata = {
  title: "Gérer les avis Google de son restaurant : le guide complet",
  description:
    "93% des consommateurs lisent les avis en ligne. Apprenez à gérer vos avis Google, TripAdvisor et Booking pour attirer plus de clients.",
};

export default function ArticleAvisGoogle() {
  return (
    <>
      <article className="pt-28 pb-20 md:pt-36">
        <div className="max-w-[720px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Link href="/blog" className="text-sm text-[#6A6059] hover:text-[#2D6A4A] no-underline mb-6 inline-block">
              &larr; Retour au blog
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <Tag>E-réputation</Tag>
              <span className="text-xs text-[#A09488]">10 min de lecture</span>
            </div>
            <h1 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-6">
              Gérer les avis Google de son restaurant : le guide complet
            </h1>
            <p className="text-lg text-[#6A6059] leading-relaxed mb-10">
              93% des consommateurs lisent les avis en ligne avant de choisir un restaurant.
              Votre fiche Google est votre vitrine numérique — et les avis sont votre premier
              argument commercial.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Pourquoi les avis Google sont cruciaux</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Google utilise vos avis pour vous positionner dans les résultats de recherche locaux.
                Plus vous avez d&apos;avis récents et bien notés, plus vous apparaissez en haut
                du &ldquo;Local Pack&rdquo; — ces 3 résultats avec la carte qui apparaissent quand quelqu&apos;un
                cherche &ldquo;restaurant&rdquo; dans votre ville.
              </p>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Un restaurant avec 200 avis et une note de 4,5 sera systématiquement préféré
                à un restaurant avec 30 avis et une note de 4,2 — autant par Google que par les clients.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Répondre à TOUS les avis — sans exception</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Google confirme que répondre aux avis améliore votre référencement local.
                Mais au-delà du SEO, c&apos;est une question de perception. Un restaurant qui
                répond à ses avis montre qu&apos;il est attentif, professionnel et qu&apos;il se soucie
                de ses clients.
              </p>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Le problème : répondre à chaque avis prend du temps. En moyenne, un restaurateur
                reçoit 15 à 30 avis par mois. À 5 minutes par réponse personnalisée, c&apos;est
                2h30 par mois — que personne n&apos;a.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Comment répondre aux avis positifs</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Ne vous contentez pas d&apos;un &ldquo;Merci pour votre avis&rdquo;. Personnalisez chaque réponse
                en reprenant un élément spécifique mentionné par le client. Si le client parle
                du dessert, remerciez-le et mentionnez le pâtissier. Si le client parle du service,
                valorisez l&apos;équipe.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Comment répondre aux avis négatifs</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Restez professionnel, reconnaissez le problème, proposez une solution. Ne soyez
                jamais agressif ou sarcastique — même si l&apos;avis est injuste. Votre réponse est
                lue par tous les futurs clients. Un avis négatif bien géré peut devenir un
                argument commercial.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Le cas TripAdvisor et Booking</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-4">
                Les mêmes règles s&apos;appliquent à TripAdvisor et Booking. La différence :
                le public est souvent plus international, et les attentes en termes de
                temps de réponse sont plus élevées.
              </p>

              <h2 className="font-serif text-2xl font-semibold mt-10 mb-4">Automatiser sans perdre l&apos;authenticité</h2>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-6">
                La solution idéale : des réponses automatiques mais personnalisées. Chaque réponse
                générée à partir du contenu spécifique de l&apos;avis, dans le ton de votre établissement.
                C&apos;est exactement ce que fait Pauco — en moins de 24h, sans que vous ayez à toucher quoi que ce soit.
              </p>

              <div className="bg-[#D6F0DF] border border-[#6DBF85]/30 rounded-xl p-6 my-10">
                <p className="text-sm text-[#2D6A4A] leading-relaxed">
                  <strong>Pauco répond automatiquement à tous vos avis</strong> — Google, TripAdvisor
                  et Booking. Chaque réponse est unique et personnalisée à votre ton. 100% de taux
                  de réponse, 0 minute de votre temps.
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
