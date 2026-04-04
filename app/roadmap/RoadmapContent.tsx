"use client";

import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";
import CTASection from "../components/CTASection";

const phases = [
  {
    date: "Maintenant",
    badge: "Phase 1 — Disponible",
    title: "E-réputation + Dashboard CA + Planning + Fiches techniques + HACCP + Légal",
    desc: "Réponses automatiques aux avis Google, TripAdvisor, Booking. Dashboard CA et dépenses. Planning 3 pôles. Fiches techniques recettes et cocktails. Hygiène HACCP complète. Conformité légale (allergènes, DUER, mentions obligatoires).",
    priceFondateur: "99€/mois",
    priceStandard: null,
    priceNote: "fondateurs · à vie",
    active: true,
    modules: [
      "Réponses automatiques aux avis (Google, TripAdvisor, Booking)",
      "Tableau de bord CA et dépenses en 4 catégories",
      "Planning 3 pôles (Salle/Bar/Cuisine)",
      "Fiches techniques recettes avec 14 allergènes",
      "Coût matière automatisé par plat",
      "Coûts bar avec calcul des pertes",
      "HACCP : relevés températures, réception marchandises, traçabilité, étiquetage, checklists",
      "Légal : allergènes, DUER, horaires d\u2019affichage, mentions obligatoires",
    ],
  },
  {
    date: "Fin 2026",
    badge: "Phase 2 — Bientôt",
    title: "RH avancé + Mercuriale + Inventaire + Intégration comptable",
    desc: "Gestion RH complète, mercuriale fournisseurs, inventaire automatisé et export comptable direct.",
    priceFondateur: "99€/mois",
    priceStandard: "149€/mois",
    priceNote: "nouveaux clients",
    active: false,
    modules: [
      "Gestion RH avancée (contrats, fiches de paie, onboarding)",
      "Mercuriale fournisseurs avec suivi des prix",
      "Inventaire automatisé",
      "Intégration comptable directe",
      "Alertes échéances contrats",
      "Suivi des documents RH",
    ],
  },
  {
    date: "Mars 2027",
    badge: "Phase 3 — Planifié",
    title: "App mobile native iOS/Android",
    desc: "Toutes les fonctionnalités Pauco dans votre poche. Application native iOS et Android pour piloter votre restaurant en mobilité.",
    priceFondateur: "99€/mois",
    priceStandard: "199€/mois",
    priceNote: "nouveaux clients",
    active: false,
    modules: [
      "Application native iOS",
      "Application native Android",
      "Notifications push en temps réel",
      "Dashboard CA et ratios en mobilité",
      "Planning et gestion d\u2019équipe mobile",
      "Mode hors-ligne",
    ],
  },
  {
    date: "Déc 2027",
    badge: "Phase 4 — Planifié",
    title: "Intégrations caisses Lightspeed, Zelty, L\u2019Addition",
    desc: "Connexion directe à vos caisses. CA automatique, zéro saisie manuelle. Synchronisation en temps réel.",
    priceFondateur: "99€/mois",
    priceStandard: "249€/mois",
    priceNote: "nouveaux clients",
    active: false,
    modules: [
      "Intégration Lightspeed",
      "Intégration Zelty",
      "Intégration L\u2019Addition",
      "CA automatique sans saisie",
      "Synchronisation temps réel",
      "Rapprochement automatique",
    ],
  },
];

export default function RoadmapContent() {
  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Tag>Roadmap</Tag>
            <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-semibold leading-tight tracking-tight mt-5 mb-4">
              99€ aujourd&apos;hui.
              <br />
              <em className="italic text-[#2D6A4A]">99€ pour toujours.</em>
            </h1>
            <p className="text-lg text-[#6A6059] leading-relaxed max-w-2xl mb-4">
              Chaque nouveau module est inclus dans votre abonnement fondateur. Les
              nouveaux clients paieront plus cher à chaque phase.
            </p>
          </ScrollReveal>

          {/* Info box */}
          <ScrollReveal delay={0.1}>
            <div className="bg-[#D6F0DF] border border-[#6DBF85]/30 rounded-xl p-6 mb-16 max-w-2xl">
              <div className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-[#2D6A4A] flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-[#1c3829] mb-1">Avantage fondateur</div>
                  <p className="text-sm text-[#2D6A4A]/80 leading-relaxed">
                    En tant que fondateur, vous bénéficiez de chaque nouveau module sans augmentation.
                    Votre prix de 99€/mois est contractuellement garanti à vie, même quand le logiciel
                    passera à 249€/mois pour les nouveaux clients.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="pb-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="space-y-0">
            {phases.map((phase, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className={`relative grid grid-cols-1 md:grid-cols-[110px_28px_1fr_auto] gap-x-7 py-8 ${idx < phases.length - 1 ? "border-b border-[#E4DDD3]" : ""}`}>
                  {/* Date */}
                  <div className="text-sm text-[#6A6059] md:text-right md:pt-1 mb-2 md:mb-0">
                    {phase.date}
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-1.5">
                    <div className={`w-2.5 h-2.5 rounded-full shrink-0 ${phase.active ? "bg-[#2D6A4A] shadow-[0_0_0_4px_#D6F0DF]" : "bg-[#E4DDD3]"}`} />
                    {idx < phases.length - 1 && (
                      <div className="w-px flex-1 bg-[#E4DDD3] mt-1.5 min-h-[24px]" />
                    )}
                  </div>

                  {/* Content */}
                  <div>
                    <span className={`inline-block text-[10px] font-semibold tracking-[0.1em] uppercase px-2.5 py-1 rounded mb-2 ${
                      phase.active
                        ? "bg-[#D6F0DF] text-[#2D6A4A]"
                        : "bg-[#fafaf8] border border-[#E4DDD3] text-[#A09488]"
                    }`}>
                      {phase.badge}
                    </span>
                    <h3 className="text-[17px] font-semibold mb-1 tracking-tight">
                      {phase.title}
                    </h3>
                    <p className="text-sm text-[#6A6059] leading-relaxed mb-4">
                      {phase.desc}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {phase.modules.map((m, mi) => (
                        <div key={mi} className="flex items-start gap-2 text-sm text-[#6A6059]">
                          <svg className="w-4 h-4 text-[#6DBF85] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          {m}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="md:text-right md:min-w-[130px] mt-4 md:mt-0 md:pt-1">
                    <span className="font-serif text-2xl font-semibold text-[#2D6A4A] block leading-none">
                      {phase.priceFondateur}
                    </span>
                    {phase.priceStandard && (
                      <span className="text-sm text-[#A09488] line-through block mt-0.5">
                        {phase.priceStandard}
                      </span>
                    )}
                    <span className="text-[11px] text-[#A09488] block mt-0.5">
                      {phase.priceNote}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
