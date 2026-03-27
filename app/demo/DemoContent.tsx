"use client";

import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";
import CTASection from "../components/CTASection";

const demoModules = [
  {
    title: "E-réputation",
    desc: "Voyez comment Pauco génère des réponses uniques et personnalisées pour chaque avis Google, TripAdvisor et Booking.",
    icon: "💬",
  },
  {
    title: "Tableau de bord CA",
    desc: "Explorez le tableau de bord avec les données de CA, dépenses, coût matière et seuil de rentabilité.",
    icon: "📊",
  },
  {
    title: "Planning",
    desc: "Testez le planning avec les 3 pôles, les créneaux personnalisés et le compteur d'heures.",
    icon: "📅",
  },
  {
    title: "Fiches techniques",
    desc: "Créez une fiche technique avec calcul automatique du coût matière, des allergènes et des marges.",
    icon: "📋",
  },
  {
    title: "Coûts bar",
    desc: "Composez un cocktail et voyez le coût réel calculé avec toutes les pertes intégrées.",
    icon: "🍸",
  },
  {
    title: "Ressources métier",
    desc: "Parcourez les 23 ressources métier couvrant gestion, RH, cuisine, e-réputation et juridique.",
    icon: "📚",
  },
];

export default function DemoContent() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <Tag>Démo interactive</Tag>
              <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-semibold leading-tight tracking-tight mt-5 mb-4">
                Voyez Pauco <em className="italic text-[#2D6A4A]">en action.</em>
              </h1>
              <p className="text-lg text-[#6A6059] leading-relaxed mb-8">
                Explorez l&apos;application complète sans engagement. Naviguez dans tous
                les modules, testez les fonctionnalités et découvrez comment Pauco
                peut transformer la gestion de votre restaurant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://demo.paucoandco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2D6A4A] text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-[#3a7d58] hover:-translate-y-0.5 transition-all duration-200 no-underline text-center"
                >
                  Lancer la démo &rarr;
                </a>
                <Link
                  href="/contact"
                  className="border-[1.5px] border-[#E4DDD3] text-[#6A6059] text-base font-medium px-6 py-3.5 rounded-lg hover:border-[#1a1a18] hover:text-[#1a1a18] transition-all duration-200 no-underline text-center"
                >
                  Réserver un appel avec Paul
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              {/* Mock app preview */}
              <div className="bg-[#1C2230] rounded-2xl overflow-hidden shadow-2xl animate-float-a">
                <div className="bg-[#252D40] px-5 py-3.5 flex items-center gap-3 border-b border-white/[0.06]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="ml-4 flex-1 bg-white/[0.06] rounded-md px-3 py-1.5 text-xs text-white/30">
                    demo.paucoandco.com
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-white/[0.04] rounded-lg p-4">
                      <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">CA Aujourd&apos;hui</div>
                      <div className="text-xl font-bold text-white">2 340€</div>
                      <div className="text-[11px] text-[#4ade80] mt-0.5">+18% vs sem. dern.</div>
                    </div>
                    <div className="bg-white/[0.04] rounded-lg p-4">
                      <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Coût matière</div>
                      <div className="text-xl font-bold text-white">27,4%</div>
                      <div className="text-[11px] text-[#4ade80] mt-0.5">Objectif : 30%</div>
                    </div>
                  </div>
                  <div className="bg-white/[0.04] rounded-lg p-4 mb-3">
                    <div className="text-[10px] text-white/30 uppercase tracking-wider mb-2">Derniers avis</div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-[#F59E0B] text-xs">★★★★★</span>
                        <span className="text-xs text-white/50">Répondu automatiquement</span>
                        <span className="ml-auto text-[10px] text-[#4ade80]">✓</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[#F59E0B] text-xs">★★★★☆</span>
                        <span className="text-xs text-white/50">Répondu automatiquement</span>
                        <span className="ml-auto text-[10px] text-[#4ade80]">✓</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-lg p-3 text-center">
                    <div className="text-sm text-[#4ade80] font-semibold">Seuil de rentabilité atteint</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Demo modules */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-3">
                Ce que vous pouvez <em className="italic text-[#2D6A4A]">tester.</em>
              </h2>
              <p className="text-base text-[#6A6059]">
                Tous les modules sont accessibles dans la démo.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoModules.map((mod, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-[#fafaf8] border border-[#E4DDD3] rounded-xl p-7 hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{mod.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{mod.title}</h3>
                  <p className="text-sm text-[#6A6059] leading-relaxed">{mod.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-12">
            <a
              href="https://demo.paucoandco.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#2D6A4A] text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-[#3a7d58] hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              Accéder à la démo &rarr;
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
