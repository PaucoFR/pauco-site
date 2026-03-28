"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ScrollReveal from "./components/ScrollReveal";
import Tag from "./components/Tag";
import CTASection from "./components/CTASection";

const villes = [
  "Nice", "Bordeaux", "Biarritz", "Bayonne", "Vannes", "Brest", "Quimper",
  "Crozon", "Annecy", "Sète", "Collioure", "La Baule", "Arcachon", "Deauville",
  "Nîmes", "Cassis", "La Rochelle", "Île de Ré", "Pornic", "Les Sables d'Olonne", "Noirmoutier",
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2D6A4A] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "E-réputation automatique",
    desc: "Réponses automatiques aux avis Google, TripAdvisor et Booking. Personnalisées, en 24h, sans rien toucher.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2D6A4A] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Gestion CA, dépenses & ratios",
    desc: "Saisie du CA quotidien, dépenses en 4 catégories, coût matière %, seuil de rentabilité. Export CSV/Excel.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2D6A4A] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: "Planning",
    desc: "3 pôles Salle/Bar/Cuisine, créneaux personnalisés avec couleurs, compteur heures, gestion des congés, export PDF.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2D6A4A] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    title: "Fiches techniques recettes",
    desc: "Coefficients, ratios, marges, 14 allergènes, portions, temps de préparation. Coût matière par plat automatisé.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2D6A4A] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
        <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
        <line x1="6" y1="1" x2="6" y2="4" />
        <line x1="10" y1="1" x2="10" y2="4" />
        <line x1="14" y1="1" x2="14" y2="4" />
      </svg>
    ),
    title: "Fiches cocktails & coûts bar",
    desc: "Calcul en cl, pertes casse, évaporation, dégustation, déco, sans alcool. Coût réel du bar.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-[#2D6A4A] fill-none stroke-2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <line x1="20" y1="8" x2="20" y2="14" />
        <line x1="23" y1="11" x2="17" y2="11" />
      </svg>
    ),
    title: "Gestion des effectifs",
    desc: "Congés 2,5j/mois, postes, 3 pôles.",
  },
];

export default function Home() {
  return (
    <>
      {/* Ticker */}
      <div className="overflow-hidden bg-[#1A2E1F] border-b border-white/[0.07] py-2.5 mt-[58px]">
        <div className="flex w-max animate-ticker hover:[animation-play-state:paused]">
          {[...villes, ...villes].map((v, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-7 text-[11px] tracking-[0.14em] uppercase text-white/30 whitespace-nowrap"
            >
              <span className="w-1 h-1 rounded-full bg-[#6DBF85] opacity-50" />
              {v}
            </span>
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="py-20 md:py-28">
        <div className="max-w-[720px] mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6">
              <Tag>Prix fondateur · 99€/mois à vie</Tag>
            </div>
            <h1 className="font-serif text-[clamp(40px,5vw,62px)] font-semibold leading-[1.07] tracking-tight mb-5">
              Le logiciel que vos
              <br />
              <em className="italic text-[#2D6A4A]">concurrents n&apos;ont pas.</em>
            </h1>
            <p className="text-[17px] text-[#6A6059] leading-relaxed mb-8 max-w-[520px] mx-auto">
              E-réputation automatique, gestion CA et dépenses, fiches
              techniques, coût matière, planning équipe et coûts bar. Le premier
              logiciel tout-en-un des restaurateurs — 99€/mois à vie.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 mb-8">
              <Link
                href="/contact"
                className="bg-[#2D6A4A] text-white text-base font-semibold px-7 py-4 rounded-lg hover:bg-[#3a7d58] hover:-translate-y-0.5 transition-all duration-200 no-underline text-center"
              >
                Bloquer ma place fondateur
              </Link>
              <Link
                href="/fonctionnalites"
                className="border-[1.5px] border-[#E4DDD3] text-[#6A6059] text-base font-medium px-5 py-3.5 rounded-lg hover:border-[#1a1a18] hover:text-[#1a1a18] transition-all duration-200 no-underline text-center"
              >
                Voir les fonctionnalités
              </Link>
            </div>
            <p className="text-sm text-[#A09488]">
              Déjà utilisé par des restaurateurs en France — 99€/mois, sans engagement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key numbers */}
      <div className="bg-white border-t border-b border-[#E4DDD3] py-14">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <ScrollReveal>
              <div className="bg-white border border-[#E4DDD3] rounded-xl p-5 text-center">
                <div className="font-serif text-3xl font-semibold leading-none text-[#1a1a18]">
                  6 modules
                </div>
                <div className="text-xs text-[#2D6A4A] mt-1.5 font-medium">
                  tout inclus dès maintenant
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="bg-[#1c3829] border border-[#1c3829] rounded-xl p-5 text-center">
                <div className="font-serif text-3xl font-semibold leading-none text-white">
                  99€
                </div>
                <div className="text-xs text-[#6DBF85] mt-1.5 font-medium">
                  prix garanti à vie
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="bg-white border border-[#E4DDD3] rounded-xl p-5 text-center">
                <div className="font-serif text-3xl font-semibold leading-none text-[#1a1a18]">
                  50 places
                </div>
                <div className="text-xs text-[#2D6A4A] mt-1.5 font-medium">
                  puis le prix augmente
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-white border border-[#E4DDD3] rounded-xl p-5 text-center">
                <div className="font-serif text-3xl font-semibold leading-none text-[#1a1a18]">
                  24h
                </div>
                <div className="text-xs text-[#2D6A4A] mt-1.5 font-medium">
                  pour être opérationnel
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Proof strip */}
      <div className="py-12">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-5">
            {[
              { n: "12", l: "restaurants en France" },
              { n: "4,7★", l: "note moyenne clients" },
              { n: "100%", l: "taux de réponse" },
              { n: "24h", l: "pour être opérationnel" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-serif text-3xl sm:text-4xl font-semibold leading-none">
                    {s.n}
                  </div>
                  <div className="text-sm text-[#6A6059] mt-1">{s.l}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Features preview */}
      <section className="py-20 md:py-24" id="features">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12">
              <Tag>Disponible aujourd&apos;hui</Tag>
              <h2 className="font-serif text-[clamp(32px,4.2vw,48px)] font-semibold leading-tight tracking-tight mt-4 mb-3">
                Ce que vous obtenez
                <br />
                <em className="italic text-[#2D6A4A]">dès votre inscription.</em>
              </h2>
              <p className="text-base text-[#6A6059] leading-relaxed max-w-[460px]">
                Opérationnel en 24h. Rien à installer. Rien à configurer de
                votre côté.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#E4DDD3] border border-[#E4DDD3] rounded-xl overflow-hidden">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white p-6 sm:p-9 relative overflow-hidden group hover:bg-[#FAFDF8] transition-colors duration-200">
                  <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#2D6A4A] scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="w-10 h-10 rounded-xl bg-[#D6F0DF] flex items-center justify-center mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-[17px] font-semibold mb-2">{f.title}</h3>
                  <p className="text-sm text-[#6A6059] leading-relaxed">
                    {f.desc}
                  </p>
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.14em] uppercase text-[#2D6A4A] bg-[#D6F0DF] px-2.5 py-1 rounded-full">
                      <span className="w-[5px] h-[5px] rounded-full bg-[#6DBF85] animate-blink" />
                      Actif
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/fonctionnalites"
              className="inline-block border-[1.5px] border-[#E4DDD3] text-[#6A6059] text-base font-medium px-6 py-3 rounded-lg hover:border-[#1a1a18] hover:text-[#1a1a18] transition-all duration-200 no-underline"
            >
              Voir toutes les fonctionnalités en détail &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* How it works */}
      <div className="h-px bg-[#E4DDD3]" />
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-14">
              <Tag>Fonctionnement</Tag>
              <h2 className="font-serif text-[clamp(32px,4.2vw,48px)] font-semibold leading-tight tracking-tight mt-4 mb-3">
                Opérationnel en <em className="italic text-[#2D6A4A]">3 étapes.</em>
              </h2>
              <p className="text-base text-[#6A6059] mx-auto">
                Pas de technique, pas de configuration. On s&apos;occupe de tout.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 pb-10">
            {[
              {
                num: "1",
                title: "Vous créez votre espace en 5 minutes",
                desc: "Nom du restaurant, équipe, CA objectif. On configure tout avec vous en un appel de 15 minutes.",
              },
              {
                num: "2",
                title: "On paramètre votre tableau de bord",
                desc: "Fiches techniques, planning, dépenses, coût matière. Opérationnel en 24h, rien à installer de votre côté.",
                green: true,
              },
              {
                num: "3",
                title: "Pauco pilote, vous gérez",
                desc: "Rapport chaque matin sur votre téléphone, réponses aux avis automatiques, coût matière en temps réel. Vous gardez un œil sur tout sans y passer de temps.",
              },
            ].map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className={`bg-white border border-[#E4DDD3] p-6 sm:p-9 md:p-10 h-full ${
                  i === 0 ? "rounded-t-xl md:rounded-l-xl md:rounded-tr-none" :
                  i === 2 ? "rounded-b-xl md:rounded-r-xl md:rounded-bl-none" : ""
                } ${i > 0 ? "-mt-px md:mt-0 md:-ml-px" : ""}`}>
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center mb-6 ${
                      step.green ? "bg-[#2D6A4A]" : "bg-[#1c3829]"
                    }`}
                  >
                    <span className="font-serif text-[22px] font-semibold text-white leading-none">
                      {step.num}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2.5 tracking-tight">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#6A6059] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
}
