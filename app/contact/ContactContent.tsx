"use client";

import { useState } from "react";
import ScrollReveal from "../components/ScrollReveal";
import Tag from "../components/Tag";

export default function ContactContent() {
  const [form, setForm] = useState({
    nom: "",
    restaurant: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://hook.eu1.make.com/t9my6wvka33iwdjpp1kzjmu9kbi96koa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: form.nom,
          email: form.email,
          telephone: form.telephone || "non renseigné",
          restaurant: form.restaurant,
          message: form.message,
          source: "paucoandco.com/contact",
          date: new Date().toISOString(),
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ nom: "", restaurant: "", email: "", telephone: "", message: "" });
    } catch {
      window.location.href = `mailto:paul@paucoandco.com?subject=${encodeURIComponent("Contact — " + form.nom)}&body=${encodeURIComponent(`Nom : ${form.nom}\nRestaurant : ${form.restaurant}\nEmail : ${form.email}\nTél : ${form.telephone}\n\n${form.message}`)}`;
      setStatus("sent");
    }
  };

  return (
    <>
      <section className="pt-28 pb-20 md:pt-36 md:pb-24">
        <div className="max-w-[1120px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal>
              <Tag>Contact</Tag>
              <h1 className="font-serif text-[clamp(36px,5vw,48px)] font-semibold leading-tight tracking-tight mt-5 mb-4">
                Parlons de votre <em className="italic text-[#2D6A4A]">restaurant.</em>
              </h1>
              <p className="text-base text-[#6A6059] leading-relaxed mb-8">
                Remplissez le formulaire ou appelez Paul directement. Réponse sous 24h maximum.
              </p>

              {status === "sent" ? (
                <div className="bg-[#D6F0DF] border border-[#6DBF85]/30 rounded-xl p-8 text-center">
                  <div className="text-3xl mb-3">✓</div>
                  <div className="font-semibold text-[#2D6A4A] text-lg mb-2">Message envoyé !</div>
                  <p className="text-sm text-[#2D6A4A]/70">Paul vous recontacte sous 24h.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Votre nom"
                      required
                      value={form.nom}
                      onChange={(e) => setForm({ ...form, nom: e.target.value })}
                      className="w-full bg-[#fafaf8] border-[1.5px] border-[#E4DDD3] rounded-lg px-4 py-3 text-base sm:text-sm text-[#1a1a18] outline-none focus:border-[#2D6A4A] transition-colors placeholder:text-[#A09488]"
                    />
                    <input
                      type="text"
                      placeholder="Nom du restaurant"
                      required
                      value={form.restaurant}
                      onChange={(e) => setForm({ ...form, restaurant: e.target.value })}
                      className="w-full bg-[#fafaf8] border-[1.5px] border-[#E4DDD3] rounded-lg px-4 py-3 text-base sm:text-sm text-[#1a1a18] outline-none focus:border-[#2D6A4A] transition-colors placeholder:text-[#A09488]"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-[#fafaf8] border-[1.5px] border-[#E4DDD3] rounded-lg px-4 py-3 text-base sm:text-sm text-[#1a1a18] outline-none focus:border-[#2D6A4A] transition-colors placeholder:text-[#A09488]"
                    />
                    <input
                      type="tel"
                      placeholder="Téléphone"
                      value={form.telephone}
                      onChange={(e) => setForm({ ...form, telephone: e.target.value })}
                      className="w-full bg-[#fafaf8] border-[1.5px] border-[#E4DDD3] rounded-lg px-4 py-3 text-base sm:text-sm text-[#1a1a18] outline-none focus:border-[#2D6A4A] transition-colors placeholder:text-[#A09488]"
                    />
                  </div>
                  <textarea
                    placeholder="Votre message (optionnel)"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[#fafaf8] border-[1.5px] border-[#E4DDD3] rounded-lg px-4 py-3 text-sm text-[#1a1a18] outline-none focus:border-[#2D6A4A] transition-colors placeholder:text-[#A09488] resize-none"
                  />
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#2D6A4A] text-white font-semibold py-3.5 rounded-lg hover:bg-[#3a7d58] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Envoi en cours..." : "Envoyer ma demande"}
                  </button>
                  <p className="text-[11px] text-[#A09488] text-center">
                    En soumettant vous acceptez d&apos;être contacté par Pauco.
                  </p>
                </form>
              )}
            </ScrollReveal>

            {/* Right side */}
            <div className="space-y-8">
              <ScrollReveal delay={0.05}>
                <div className="bg-[#1c3829] rounded-xl p-7 text-center">
                  <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] uppercase text-[#6DBF85] bg-[#6DBF85]/10 border border-[#6DBF85]/20 px-3 py-1.5 rounded-full mb-4">
                    <span className="w-[5px] h-[5px] rounded-full bg-[#6DBF85] animate-blink" />
                    Accès immédiat
                  </div>
                  <h3 className="font-serif text-2xl font-semibold text-white mb-2">Prêt à démarrer ?</h3>
                  <p className="text-sm text-white/50 mb-6">
                    Accès immédiat après paiement. Onboarding inclus.
                  </p>
                  <a
                    href="https://buy.stripe.com/6oU9AScz10en8LS25s2Ji02"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#2D6A4A] text-white font-semibold py-4 rounded-lg hover:bg-[#3a7d58] hover:-translate-y-0.5 transition-all duration-200 no-underline"
                  >
                    Devenir Fondateur — 99€/mois à vie &rarr;
                  </a>
                  <p className="text-[11px] text-white/30 mt-3">
                    Sans engagement · Prix garanti à vie · 50 places max
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <div className="bg-white border border-[#E4DDD3] rounded-xl p-7">
                  <h3 className="font-semibold text-lg mb-4">Réserver un appel</h3>
                  <p className="text-sm text-[#6A6059] leading-relaxed mb-5">
                    15 minutes avec Paul pour discuter de votre restaurant et voir
                    si Pauco est fait pour vous. Sans engagement.
                  </p>
                  <iframe
                    src="https://calendly.com/paul-paucoandco/15min"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    className="rounded-lg"
                    title="Calendly"
                  />
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="bg-white border border-[#E4DDD3] rounded-xl p-7">
                  <h3 className="font-semibold text-lg mb-4">Contact direct</h3>
                  <div className="space-y-4">
                    <a
                      href="tel:+33783470657"
                      className="flex items-center gap-3 text-[#1a1a18] hover:text-[#2D6A4A] transition-colors no-underline group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#D6F0DF] flex items-center justify-center group-hover:bg-[#2D6A4A] transition-colors">
                        <svg className="w-5 h-5 text-[#2D6A4A] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 13a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 2.18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.91 9.91a16 16 0 006.06 6.06l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">+33 7 83 47 06 57</div>
                        <div className="text-xs text-[#6A6059]">Paul répond directement</div>
                      </div>
                    </a>
                    <a
                      href="mailto:paul@paucoandco.com"
                      className="flex items-center gap-3 text-[#1a1a18] hover:text-[#2D6A4A] transition-colors no-underline group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[#D6F0DF] flex items-center justify-center group-hover:bg-[#2D6A4A] transition-colors">
                        <svg className="w-5 h-5 text-[#2D6A4A] group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-sm">paul@paucoandco.com</div>
                        <div className="text-xs text-[#6A6059]">Réponse sous 24h</div>
                      </div>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
