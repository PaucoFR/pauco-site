import type { Metadata } from "next";
import TarifsContent from "./TarifsContent";

export const metadata: Metadata = {
  title: "Tarifs logiciel gestion restaurant — 99€/mois tout inclus",
  description:
    "Logiciel de gestion restaurant à 99€/mois à vie pour les fondateurs. Comparatif Pauco vs Lightspeed, Zelty, L'Addition. Tout inclus, sans engagement.",
  alternates: { canonical: "https://paucoandco.com/tarifs" },
};

export default function TarifsPage() {
  return <TarifsContent />;
}
