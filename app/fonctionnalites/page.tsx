import type { Metadata } from "next";
import FonctionnalitesContent from "./FonctionnalitesContent";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "E-réputation automatique, gestion CA/dépenses, planning, fiches techniques, coût matière, coûts bar. Tout ce dont un restaurateur a besoin.",
};

export default function FonctionnalitesPage() {
  return <FonctionnalitesContent />;
}
