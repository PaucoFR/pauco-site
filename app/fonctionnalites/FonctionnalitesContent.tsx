"use client";

import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";
import CTASection from "../components/CTASection";

/* eslint-disable @typescript-eslint/no-explicit-any */
const modules: any[] = [
  {
    id: "e-reputation",
    tag: "Module 1",
    title: "E-réputation automatique",
    subtitle: "Ne laissez plus un seul avis sans réponse.",
    description:
      "Pauco répond automatiquement à chaque avis Google, TripAdvisor et Booking.com — de manière personnalisée, dans le ton de votre établissement. Chaque réponse est unique, adaptée au contenu de l'avis, et publiée sous votre nom en moins de 24h.",
    features: [
      "Réponses aux avis Google, TripAdvisor, Booking.com",
      "Chaque réponse unique et personnalisée à votre ton",
      "Publication automatique sous votre nom",
      "Gestion des avis négatifs avec tact et professionnalisme",
      "Suivi de l'évolution de votre note moyenne",
      "Actif dès J+1 après inscription",
    ],
    mockup: {
      type: "review",
      data: {
        rating: 5,
        text: "Excellent restaurant, service impeccable et cuisine raffinée !",
        response:
          "Merci beaucoup pour votre retour ! Toute l'équipe est ravie que vous ayez apprécié votre expérience. Au plaisir de vous revoir bientôt.",
      },
    },
    color: "from-[#2D6A4A] to-[#6DBF85]",
  },
  {
    id: "ca-depenses",
    tag: "Module 2",
    title: "Gestion CA, dépenses & ratios",
    subtitle: "Pilotez votre restaurant avec des chiffres, pas au feeling.",
    description:
      "Saisissez votre CA quotidien et vos dépenses en 4 catégories : Achats & matières, Personnel, Charges opérationnelles, Charges fixes. Pauco calcule automatiquement votre food cost, vos ratios et votre seuil de rentabilité avec la date prévisionnelle d'atteinte.",
    features: [
      "Saisie du CA quotidien en 10 secondes",
      "4 catégories de dépenses prédéfinies",
      "Food cost % calculé automatiquement",
      "Seuil de rentabilité avec date d'atteinte",
      "Graphiques d'évolution jour/semaine/mois",
      "Export CSV et Excel",
    ],
    mockup: {
      type: "dashboard",
      data: {
        ca: "8 450€",
        foodCost: "28,3%",
        seuil: "Atteint le 18 mars",
        trend: "+12%",
      },
    },
    color: "from-[#4F6EF5] to-[#7B8FF7]",
  },
  {
    id: "planning",
    tag: "Module 3",
    title: "Planning drag & drop",
    subtitle: "Finies les heures perdues à faire le planning sur Excel.",
    description:
      "Un planning visuel avec 3 pôles (Salle, Bar, Cuisine), des shifts personnalisés avec couleurs, un compteur d'heures automatique, la gestion des congés (2,5j/mois), et l'export PDF en un clic pour votre équipe.",
    features: [
      "3 pôles : Salle, Bar, Cuisine",
      "Drag & drop intuitif",
      "Shifts personnalisés avec couleurs",
      "Compteur d'heures automatique",
      "Gestion des congés (2,5j/mois)",
      "Export PDF pour l'équipe",
    ],
    mockup: {
      type: "planning",
      data: {
        shifts: [
          { name: "Marie", pole: "Salle", hours: "10h-15h" },
          { name: "Lucas", pole: "Bar", hours: "18h-00h" },
          { name: "Emma", pole: "Cuisine", hours: "8h-16h" },
        ],
      },
    },
    color: "from-[#F59E0B] to-[#FBBF24]",
  },
  {
    id: "fiches-techniques",
    tag: "Module 4",
    title: "Fiches techniques recettes",
    subtitle: "Connaissez le coût réel de chaque plat à la carte.",
    description:
      "Créez vos fiches techniques avec coefficients, ratios, marges, les 14 allergènes réglementaires, portions et temps de préparation. Pauco calcule automatiquement le food cost par plat pour que vous sachiez exactement ce que chaque plat vous rapporte.",
    features: [
      "Calcul automatique du food cost par plat",
      "Coefficients et ratios de marge",
      "14 allergènes réglementaires",
      "Portions et temps de préparation",
      "Prix de revient matière détaillé",
      "Suggestion de prix de vente",
    ],
    mockup: {
      type: "fiche",
      data: {
        plat: "Risotto truffe & parmesan",
        foodCost: "4,20€",
        prixVente: "24€",
        marge: "82,5%",
      },
    },
    color: "from-[#EC4899] to-[#F472B6]",
  },
  {
    id: "costs-bar",
    tag: "Module 5",
    title: "Fiches cocktails & Costs Bar",
    subtitle: "Calculez le coût réel de votre bar — pertes incluses.",
    description:
      "Créez vos fiches cocktails avec calcul en cl. Intégrez toutes les pertes : casse, évaporation, dégustation, décoration. Gérez les recettes sans alcool. Le coût réel de votre bar avec toutes les pertes est calculé automatiquement.",
    features: [
      "Calcul en centilitres précis",
      "Pertes intégrées (casse, évaporation, dégustation, déco)",
      "Recettes avec et sans alcool",
      "Coût réel par cocktail",
      "Food cost bar global",
      "Comparaison coût/prix de vente",
    ],
    mockup: {
      type: "cocktail",
      data: {
        nom: "Mojito Classique",
        cout: "1,85€",
        prix: "12€",
        marge: "84,6%",
      },
    },
    color: "from-[#8B5CF6] to-[#A78BFA]",
  },
  {
    id: "effectifs",
    tag: "Module 6",
    title: "Gestion des effectifs",
    subtitle: "Vos équipes, vos congés, vos ressources — au même endroit.",
    description:
      "Gérez les congés (2,5j/mois), les postes et les 3 pôles (Salle/Bar/Cuisine). Accédez à l'analyse fournisseurs et à 23 ressources métier couvrant Gestion, RH, Cuisine, E-réputation et Juridique.",
    features: [
      "Gestion des congés (2,5j/mois légal)",
      "Attribution des postes par pôle",
      "3 pôles : Salle, Bar, Cuisine",
      "Analyse et suivi fournisseurs",
      "23 ressources métier intégrées",
      "Documentation RH, juridique, cuisine",
    ],
    mockup: {
      type: "effectifs",
      data: {
        equipe: "12 employés",
        conges: "3 en congé",
        poles: ["Salle (5)", "Bar (3)", "Cuisine (4)"],
      },
    },
    color: "from-[#14B8A6] to-[#5EEAD4]",
  },
];

export default function FonctionnalitesContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <Tag>6 modules actifs</Tag>
            <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-semibold leading-tight tracking-tight mt-5 mb-4">
              Tout ce dont un restaurateur a besoin.
              <br />
              <em className="italic text-[#2D6A4A]">Dans un seul abonnement.</em>
            </h1>
            <p className="text-lg text-[#6A6059] leading-relaxed max-w-2xl mb-8">
              Chaque module est pensé pour les restaurateurs, par un restaurateur.
              Pas de fonctionnalités gadget — uniquement ce qui fait gagner du temps
              et de l&apos;argent au quotidien.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Modules */}
      {modules.map((mod, idx) => (
        <section
          key={mod.id}
          id={mod.id}
          className={`py-16 md:py-20 ${idx % 2 === 0 ? "bg-white" : "bg-[#fafaf8]"}`}
        >
          <div className="max-w-[1120px] mx-auto px-6 md:px-12">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                idx % 2 === 1 ? "lg:direction-rtl" : ""
              }`}
            >
              <ScrollReveal>
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#2D6A4A] bg-[#D6F0DF] px-3 py-1.5 rounded-full mb-4">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#6DBF85] animate-blink" />
                    {mod.tag} — Actif
                  </span>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mb-2">
                    {mod.title}
                  </h2>
                  <p className="text-lg text-[#6A6059] mb-6">{mod.subtitle}</p>
                  <p className="text-[15px] text-[#6A6059] leading-relaxed mb-8">
                    {mod.description}
                  </p>
                  <ul className="space-y-3">
                    {mod.features.map((f: string, fi: number) => (
                      <li
                        key={fi}
                        className="flex items-start gap-3 text-[15px] text-[#1a1a18]"
                      >
                        <span className="w-5 h-5 rounded-full bg-[#D6F0DF] flex items-center justify-center shrink-0 mt-0.5">
                          <svg
                            className="w-3 h-3 text-[#2D6A4A]"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={3}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  {/* Mockup card */}
                  <div className="bg-[#1C2230] rounded-2xl overflow-hidden shadow-2xl">
                    <div className="bg-[#252D40] px-5 py-3.5 flex items-center gap-3 border-b border-white/[0.06]">
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-br ${mod.color} flex items-center justify-center text-xs font-bold text-white`}
                      >
                        P
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white">
                          {mod.title}
                        </div>
                        <div className="text-[11px] text-white/30">
                          app.paucoandco.com
                        </div>
                      </div>
                      <span className="ml-auto text-[11px] font-semibold bg-white/10 text-white/50 px-2.5 py-1 rounded-full">
                        Actif
                      </span>
                    </div>
                    <div className="p-5">
                      {mod.mockup.type === "review" && (
                        <div className="space-y-4">
                          <div className="bg-white/[0.05] rounded-lg p-4">
                            <div className="text-[#F59E0B] text-sm mb-2">★★★★★</div>
                            <p className="text-sm text-white/60 italic">
                              &ldquo;{mod.mockup.data.text}&rdquo;
                            </p>
                          </div>
                          <div className="bg-[#2D6A4A]/20 border border-[#2D6A4A]/30 rounded-lg p-4">
                            <div className="text-[10px] font-semibold tracking-wider uppercase text-[#6DBF85] mb-2">
                              Réponse Pauco
                            </div>
                            <p className="text-sm text-white/70">
                              {mod.mockup.data.response}
                            </p>
                          </div>
                        </div>
                      )}
                      {mod.mockup.type === "dashboard" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-px bg-white/[0.06]">
                            {[
                              { label: "CA Semaine", value: mod.mockup.data.ca, trend: mod.mockup.data.trend },
                              { label: "Food Cost", value: mod.mockup.data.foodCost, trend: "" },
                            ].map((m, mi) => (
                              <div key={mi} className="bg-[#1C2230] p-4">
                                <div className="text-[10px] font-medium tracking-wider uppercase text-white/28 mb-1.5">{m.label}</div>
                                <div className="text-xl font-bold text-white">{m.value}</div>
                                {m.trend && <div className="text-[11px] text-[#4ade80] mt-0.5">{m.trend}</div>}
                              </div>
                            ))}
                          </div>
                          <div className="bg-[#4ade80]/10 border border-[#4ade80]/20 rounded-lg p-3">
                            <div className="text-[11px] text-[#4ade80] font-semibold">{mod.mockup.data.seuil}</div>
                          </div>
                        </div>
                      )}
                      {mod.mockup.type === "planning" && (
                        <div className="space-y-2">
                          {mod.mockup.data.shifts.map((s: any, si: number) => (
                            <div key={si} className="flex justify-between items-center p-3 bg-white/[0.04] rounded-lg">
                              <div>
                                <div className="text-sm text-white font-medium">{s.name}</div>
                                <div className="text-[11px] text-white/30">{s.pole}</div>
                              </div>
                              <div className="text-sm text-white/50">{s.hours}</div>
                            </div>
                          ))}
                        </div>
                      )}
                      {mod.mockup.type === "fiche" && (
                        <div className="space-y-3">
                          <div className="text-base font-semibold text-white">{mod.mockup.data.plat}</div>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { l: "Food Cost", v: mod.mockup.data.foodCost },
                              { l: "Prix vente", v: mod.mockup.data.prixVente },
                              { l: "Marge", v: mod.mockup.data.marge },
                            ].map((m, mi) => (
                              <div key={mi} className="bg-white/[0.04] rounded-lg p-3 text-center">
                                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">{m.l}</div>
                                <div className="text-lg font-bold text-white">{m.v}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {mod.mockup.type === "cocktail" && (
                        <div className="space-y-3">
                          <div className="text-base font-semibold text-white">{mod.mockup.data.nom}</div>
                          <div className="grid grid-cols-3 gap-2">
                            {[
                              { l: "Coût réel", v: mod.mockup.data.cout },
                              { l: "Prix vente", v: mod.mockup.data.prix },
                              { l: "Marge", v: mod.mockup.data.marge },
                            ].map((m, mi) => (
                              <div key={mi} className="bg-white/[0.04] rounded-lg p-3 text-center">
                                <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">{m.l}</div>
                                <div className="text-lg font-bold text-white">{m.v}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {mod.mockup.type === "effectifs" && (
                        <div className="space-y-3">
                          <div className="grid grid-cols-2 gap-2">
                            <div className="bg-white/[0.04] rounded-lg p-3">
                              <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">Équipe</div>
                              <div className="text-lg font-bold text-white">{mod.mockup.data.equipe}</div>
                            </div>
                            <div className="bg-white/[0.04] rounded-lg p-3">
                              <div className="text-[10px] text-white/30 uppercase tracking-wider mb-1">En congé</div>
                              <div className="text-lg font-bold text-[#F59E0B]">{mod.mockup.data.conges}</div>
                            </div>
                          </div>
                          <div className="space-y-1.5">
                            {mod.mockup.data.poles.map((p: any, pi: number) => (
                              <div key={pi} className="flex justify-between text-sm text-white/50 py-1.5 border-b border-white/[0.05]">
                                <span>{p}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      ))}

      <CTASection />
    </>
  );
}
