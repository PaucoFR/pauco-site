import type { Metadata } from "next";
import TarifsContent from "./TarifsContent";

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "99€/mois à vie pour les fondateurs vs tarif standard futur. Comparatif Pauco vs Lightspeed, Zelty, L'Addition.",
};

export default function TarifsPage() {
  return <TarifsContent />;
}
