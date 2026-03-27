import type { Metadata } from "next";
import AProposContent from "./AProposContent";

export const metadata: Metadata = {
  title: "À propos — Paul Monfort, fondateur du logiciel Pauco",
  description:
    "Paul Monfort, 10 ans en restauration de Dinard à Saint-Barth. Créateur de Pauco, le logiciel de gestion restaurant tout-en-un pour restaurateurs indépendants.",
  alternates: { canonical: "https://paucoandco.com/a-propos" },
};

export default function AProposPage() {
  return <AProposContent />;
}
