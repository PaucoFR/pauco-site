"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";
import CTASection from "../components/CTASection";

const comparatif = [
  { feature: "E-réputation (avis Google)", pauco: true, lightspeed: false, zelty: false, addition: false },
  { feature: "Fiches techniques & food cost", pauco: true, lightspeed: false, zelty: false, addition: false },
  { feature: "Gestion CA + dépenses + ratios", pauco: true, lightspeed: false, zelty: false, addition: false },
  { feature: "Planning équipe", pauco: true, lightspeed: true, zelty: false, addition: false },
  { feature: "Costs bar & cocktails", pauco: true, lightspeed: false, zelty: false, addition: false },
  { feature: "Rapport WhatsApp", pauco: true, lightspeed: false, zelty: false, addition: false },
  { feature: "Prévisions IA météo", pauco: true, lightspeed: false, zelty: false, addition: false },
  { feature: "Intégration caisses", pauco: true, lightspeed: true, zelty: true, addition: true },
  { feature: "Prix fondateur garanti à vie", pauco: true, lightspeed: false, zelty: false, addition: false },
];

const faqs = [
  {
    q: "Le prix de 99€ est vraiment garanti à vie ?",
    a: "Oui, c'est un engagement contractuel. Tant que vous restez abonné, votre prix ne changera jamais — même quand le logiciel passera à 299€ pour les nouveaux clients.",
  },
  {
    q: "Y a-t-il des frais cachés ?",
    a: "Non. 99€/mois, c'est tout. Pas de frais d'installation, pas de supplément par module, pas de coût de formation. Tout est inclus.",
  },
  {
    q: "Que se passe-t-il si je résilie ?",
    a: "Vous pouvez résilier à tout moment, sans engagement et sans frais. En revanche, si vous résiliez puis souhaitez revenir, ce sera au tarif en vigueur à ce moment-là — vous perdez le prix fondateur.",
  },
  {
    q: "Combien de restaurants puis-je gérer avec un abonnement ?",
    a: "Un abonnement = un restaurant. Si vous avez plusieurs établissements, contactez-nous pour un tarif groupe.",
  },
  {
    q: "Comment fonctionne le paiement ?",
    a: "Paiement mensuel par carte bancaire. Vous serez contacté sous 24h après votre inscription pour mettre en place le paiement et l'accès.",
  },
  {
    q: "Y a-t-il une période d'essai ?",
    a: "Pas de période d'essai classique, mais vous êtes opérationnel en 24h et pouvez résilier sans engagement dès le premier mois si vous n'êtes pas satisfait.",
  },
];

export default function TarifsContent() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <section className="pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center">
              <Tag>Tarifs transparents</Tag>
              <h1 className="font-serif text-[clamp(36px,5vw,56px)] font-semibold leading-tight tracking-tight mt-5 mb-4">
                Un prix. <em className="italic text-[#2D6A4A]">Tout inclus.</em>
              </h1>
              <p className="text-lg text-[#6A6059] leading-relaxed max-w-xl mx-auto">
                Pas de module en supplément, pas de frais cachés. Le prix fondateur
                est garanti contractuellement à vie.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="bg-white border-2 border-[#2D6A4A] rounded-2xl p-8 relative">
                <div className="absolute -top-3 left-8">
                  <span className="bg-[#2D6A4A] text-white text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                </div>
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-[#2D6A4A] mb-4">
                  Fondateur
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-serif text-5xl font-semibold text-[#1a1a18]">99€</span>
                  <span className="text-[#6A6059]">/mois</span>
                </div>
                <p className="text-sm text-[#2D6A4A] font-semibold mb-6">
                  À vie · garanti contractuellement
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "6 modules actifs dès maintenant",
                    "Tous les futurs modules inclus",
                    "Prix garanti à vie",
                    "Opérationnel en 24h",
                    "Sans engagement",
                    "Support direct avec Paul",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#1a1a18]">
                      <svg className="w-4 h-4 text-[#2D6A4A] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="block w-full bg-[#2D6A4A] text-white text-center font-semibold py-3.5 rounded-lg hover:bg-[#3a7d58] transition-colors no-underline"
                >
                  Devenir fondateur
                </Link>
                <p className="text-[11px] text-[#A09488] text-center mt-3">
                  Plus que 38 places sur 50
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="bg-white border border-[#E4DDD3] rounded-2xl p-8">
                <div className="text-xs font-semibold tracking-[0.1em] uppercase text-[#A09488] mb-4">
                  Standard (futur)
                </div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="font-serif text-5xl font-semibold text-[#A09488]">299€</span>
                  <span className="text-[#A09488]">/mois</span>
                </div>
                <p className="text-sm text-[#A09488] mb-6">
                  Tarif prévu après les 50 fondateurs
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Mêmes fonctionnalités",
                    "Pas de prix garanti",
                    "Prix ajusté à chaque phase",
                    "Opérationnel en 24h",
                    "Sans engagement",
                    "Support standard",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-[#A09488]">
                      <svg className="w-4 h-4 text-[#E4DDD3] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="block w-full bg-[#E4DDD3] text-[#A09488] text-center font-semibold py-3.5 rounded-lg cursor-not-allowed">
                  Bientôt disponible
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12">
              <Tag>Comparatif</Tag>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mt-4 mb-3">
                Pauco vs la concurrence.
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="overflow-x-auto border border-[#E4DDD3] rounded-xl">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr>
                    <th className="px-5 py-3.5 text-left border-b border-[#E4DDD3] text-[11px] font-semibold tracking-[0.09em] uppercase text-[#A09488] bg-[#fafaf8] whitespace-nowrap">
                      Fonctionnalité
                    </th>
                    <th className="px-5 py-3.5 text-left border-b border-[#E4DDD3] text-[11px] font-semibold tracking-[0.09em] uppercase text-[#2D6A4A] bg-[#D6F0DF] whitespace-nowrap">
                      Pauco — 99€/mois à vie
                    </th>
                    <th className="px-5 py-3.5 text-left border-b border-[#E4DDD3] text-[11px] font-semibold tracking-[0.09em] uppercase text-[#A09488] bg-[#fafaf8] whitespace-nowrap">
                      Lightspeed 200-400€
                    </th>
                    <th className="px-5 py-3.5 text-left border-b border-[#E4DDD3] text-[11px] font-semibold tracking-[0.09em] uppercase text-[#A09488] bg-[#fafaf8] whitespace-nowrap">
                      Zelty 150-300€
                    </th>
                    <th className="px-5 py-3.5 text-left border-b border-[#E4DDD3] text-[11px] font-semibold tracking-[0.09em] uppercase text-[#A09488] bg-[#fafaf8] whitespace-nowrap">
                      L&apos;Addition 100-250€
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparatif.map((row, i) => (
                    <tr key={i} className="hover:bg-[#FAFDF8]">
                      <td className="px-5 py-3 border-b border-[#E4DDD3] font-medium text-[#1a1a18] whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="px-5 py-3 border-b border-[#E4DDD3]">
                        <span className={row.pauco ? "text-[#2D6A4A] font-bold" : "text-[#E4DDD3]"}>
                          {row.pauco ? "✓" : "—"}
                        </span>
                      </td>
                      <td className="px-5 py-3 border-b border-[#E4DDD3]">
                        <span className={row.lightspeed ? "text-[#2D6A4A] font-bold" : "text-[#E4DDD3]"}>
                          {row.lightspeed ? "✓" : "—"}
                        </span>
                      </td>
                      <td className="px-5 py-3 border-b border-[#E4DDD3]">
                        <span className={row.zelty ? "text-[#2D6A4A] font-bold" : "text-[#E4DDD3]"}>
                          {row.zelty ? "✓" : "—"}
                        </span>
                      </td>
                      <td className="px-5 py-3 border-b border-[#E4DDD3]">
                        <span className={row.addition ? "text-[#2D6A4A] font-bold" : "text-[#E4DDD3]"}>
                          {row.addition ? "✓" : "—"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20">
        <div className="max-w-[800px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="text-center mb-12">
              <Tag>FAQ Prix</Tag>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mt-4 mb-3">
                Questions <em className="italic text-[#2D6A4A]">fréquentes.</em>
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border-b border-[#E4DDD3]">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full py-5 flex justify-between items-center gap-4 text-left text-[15px] font-semibold text-[#1a1a18] hover:text-[#2D6A4A] transition-colors"
                  >
                    {faq.q}
                    <span className={`text-[#A09488] shrink-0 transition-transform duration-200 ${openFaq === i ? "rotate-180 text-[#2D6A4A]" : ""}`}>
                      ↓
                    </span>
                  </button>
                  {openFaq === i && (
                    <div className="pb-5 text-sm text-[#6A6059] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
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
