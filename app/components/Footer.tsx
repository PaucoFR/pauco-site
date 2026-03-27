import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1c3829] border-t border-white/[0.07]">
      <div className="max-w-[1120px] mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 no-underline">
              <svg width="24" height="24" viewBox="0 0 56 56" fill="none">
                <rect width="56" height="56" rx="14" fill="#2D6A4A" />
                <path d="M16 10H31C37.6274 10 43 15.3726 43 22C43 28.6274 37.6274 34 31 34H22V46H16V10Z" fill="#ffffff" />
                <circle cx="31" cy="22" r="7" fill="#2D6A4A" />
              </svg>
              <span className="font-serif text-base font-semibold tracking-[0.1em] uppercase text-white/60">
                Pauco
              </span>
            </Link>
            <p className="text-sm text-white/30 leading-relaxed">
              Le logiciel tout-en-un des restaurateurs. E-réputation, gestion, planning, coût matière.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">
              Produit
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/fonctionnalites" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">Fonctionnalités</Link>
              <Link href="/roadmap" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">Roadmap</Link>
              <Link href="/tarifs" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">Tarifs</Link>
              <Link href="/demo" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">Démo</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">
              Ressources
            </h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/blog" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">Blog</Link>
              <Link href="/a-propos" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">À propos</Link>
              <Link href="/contact" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-semibold tracking-[0.1em] uppercase text-white/40 mb-4">
              Contact
            </h4>
            <div className="flex flex-col gap-2.5">
              <a href="mailto:paul@paucoandco.com" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">paul@paucoandco.com</a>
              <a href="tel:+33783470657" className="text-sm text-white/30 hover:text-white/60 transition-colors no-underline">+33 7 83 47 06 57</a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/[0.07] pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-white/20">&copy; 2026 Pauco. Tous droits réservés.</span>
          <div className="flex gap-6">
            <Link href="/contact" className="text-xs text-white/20 hover:text-white/40 transition-colors no-underline">Mentions légales</Link>
            <Link href="/contact" className="text-xs text-white/20 hover:text-white/40 transition-colors no-underline">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
