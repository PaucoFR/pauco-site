import type { Metadata } from "next";
import AProposContent from "./AProposContent";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Paul, fondateur de Pauco. 10 ans en restauration de Dinard à Saint-Barth en passant par Méribel. Découvrez pourquoi Pauco existe.",
};

export default function AProposPage() {
  return <AProposContent />;
}
