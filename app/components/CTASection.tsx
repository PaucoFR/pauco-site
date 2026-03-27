import Link from "next/link";
import ScrollReveal from "./ScrollReveal";

export default function CTASection() {
  return (
    <section className="bg-[#1c3829] py-24 text-center relative overflow-hidden">
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(45,106,74,0.22)_0%,transparent_65%)] pointer-events-none" />
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 relative">
        <ScrollReveal>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white mb-4">
            Entrez maintenant.
            <br />
            <em className="italic text-[#6DBF85]">Prix garanti à vie.</em>
          </h2>
          <p className="text-lg text-white/40 mb-10">
            Le prix augmente à chaque nouveau module. Les fondateurs gardent
            99€ à vie.
          </p>
          <Link
            href="/contact"
            className="block sm:inline-block w-full sm:w-auto bg-[#2D6A4A] text-white text-base font-semibold px-8 py-4 rounded-lg hover:bg-[#3a7d58] hover:-translate-y-0.5 transition-all duration-200 no-underline text-center"
          >
            Devenir client fondateur &rarr;
          </Link>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-7 mt-7 items-center">
            {[
              "99€/mois · jamais augmenté",
              "Logiciel complet d'ici fin 2027",
              "Sans engagement",
            ].map((text) => (
              <span
                key={text}
                className="text-sm text-white/30 flex items-center gap-1.5"
              >
                <span className="w-[5px] h-[5px] rounded-full bg-[#4ade80]" />
                {text}
              </span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
