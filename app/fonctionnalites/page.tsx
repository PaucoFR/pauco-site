import type { Metadata } from "next";
import FonctionnalitesContent from "./FonctionnalitesContent";

export const metadata: Metadata = {
  title: "Fonctionnalités du logiciel de gestion restaurant Pauco",
  description:
    "Découvrez les 6 modules Pauco : réponse automatique aux avis Google, gestion CA et dépenses, planning équipe, fiches techniques, coût matière, coûts bar. Le logiciel de gestion restaurant tout-en-un.",
  alternates: { canonical: "https://paucoandco.com/fonctionnalites" },
};

export default function FonctionnalitesPage() {
  return <FonctionnalitesContent />;
}
