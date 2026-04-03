"use client";

import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";
import CTASection from "../components/CTASection";

const parcours = [
  {
    lieu: "Dinard",
    desc: "Premiers pas en restauration. Service en salle, découverte du métier et de ses réalités quotidiennes.",
  },
  {
    lieu: "Saint-Barth",
    desc: "Restauration haut de gamme dans les Caraïbes. Gestion de volumes importants, exigence de service internationale.",
  },
  {
    lieu: "Méribel",
    desc: "Restauration saisonnière en montagne. Pics d'activité intenses, gestion d'équipe sous pression, optimisation des coûts.",
  },
];

const valeurs = [
  {
    title: "Construit par un restaurateur",
    desc: "Pauco n'est pas un logiciel conçu par des développeurs qui n'ont jamais mis les pieds en cuisine. Chaque fonctionnalité répond à un problème que Paul a vécu en salle et en gestion.",
  },
  {
    title: "Simplicité radicale",
    desc: "Pas de formation nécessaire, pas de configuration complexe. Si c'est compliqué, ce n'est pas Pauco. Le logiciel doit faire gagner du temps, pas en faire perdre.",
  },
  {
    title: "Prix juste et transparent",
    desc: "Un seul prix, tout inclus, garanti à vie pour les fondateurs. Pas de surprises sur la facture, pas de modules en supplément, pas d'engagement.",
  },
  {
    title: "Proximité",
    desc: "Paul répond directement au téléphone. Pas de chatbot, pas de ticket support niveau 1. Un restaurateur qui parle à un restaurateur.",
  },
];

export default function AProposContent() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-16 lg:gap-20 items-center">
            <ScrollReveal>
              <div className="relative">
                <Image
                  src="/paul.jpg"
                  alt="Paul — Fondateur Pauco"
                  width={400}
                  height={600}
                  className="w-full max-w-[400px] rounded-2xl object-cover object-top"
                  style={{ filter: "grayscale(8%)" }}
                  priority
                />
                <div className="absolute bottom-5 right-0 lg:-right-4 bg-white border border-[#E4DDD3] rounded-xl px-4 py-3.5 shadow-lg">
                  <div className="font-serif text-[26px] font-semibold leading-none">10 ans</div>
                  <div className="text-[11px] text-[#6A6059] mt-0.5">en restauration</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <Tag>Le fondateur</Tag>
              <h1 className="font-serif text-[36px] sm:text-[42px] font-semibold tracking-tight mt-4 mb-1">Paul</h1>
              <p className="text-sm text-[#6A6059] mb-5">
                Fondateur de Pauco · Responsable de Restaurant
              </p>
              <blockquote className="text-lg leading-relaxed border-l-[3px] border-[#2D6A4A] pl-5 italic text-[#1a1a18] mb-5">
                &ldquo;J&apos;ai passé 10 ans en salle et en gestion — de Dinard à Saint-Barth,
                en passant par Méribel. Ce qui m&apos;a frappé partout : des gérants qui
                pilotent à l&apos;aveugle, sans données, sans temps.&rdquo;
              </blockquote>
              <p className="text-[15px] text-[#6A6059] leading-relaxed mb-6">
                J&apos;ai créé Pauco pour changer ça. Pour donner aux restaurateurs les
                outils que les grandes chaînes ont, mais accessibles, simples et à un
                prix juste. Parce que gérer un restaurant ne devrait pas vouloir dire
                passer ses soirées sur Excel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:paul@paucoandco.com"
                  className="text-sm text-[#6A6059] hover:text-[#2D6A4A] transition-colors no-underline"
                >
                  paul@paucoandco.com
                </a>
                <a
                  href="tel:+33783470657"
                  className="text-sm text-[#6A6059] hover:text-[#2D6A4A] transition-colors no-underline"
                >
                  +33 7 83 47 06 57
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Parcours */}
      <section className="py-20">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12">
              <Tag>Parcours</Tag>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mt-4 mb-3">
                10 ans sur le terrain.
              </h2>
              <p className="text-base text-[#6A6059] max-w-xl">
                De la Bretagne aux Caraïbes, en passant par les Alpes — chaque
                établissement a forgé la vision de Pauco.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {parcours.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-white border border-[#E4DDD3] rounded-xl p-7">
                  <div className="font-serif text-2xl font-semibold text-[#2D6A4A] mb-3">
                    {p.lieu}
                  </div>
                  <p className="text-sm text-[#6A6059] leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <ScrollReveal>
            <div className="mb-12">
              <Tag>Nos valeurs</Tag>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold leading-tight tracking-tight mt-4 mb-3">
                Pourquoi <em className="italic text-[#2D6A4A]">Pauco.</em>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {valeurs.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-white border border-[#E4DDD3] rounded-xl p-7">
                  <h3 className="text-lg font-semibold mb-2">{v.title}</h3>
                  <p className="text-sm text-[#6A6059] leading-relaxed">{v.desc}</p>
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
