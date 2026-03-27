import type { Metadata } from "next";
import FonctionnalitesContent from "./FonctionnalitesContent";

export const metadata: Metadata = {
  title: "Fonctionnalités",
  description:
    "E-réputation automatique, gestion CA/dépenses, planning drag & drop, fiches techniques, food cost, costs bar. Tout ce dont un restaurateur a besoin.",
};

export default function FonctionnalitesPage() {
  return <FonctionnalitesContent />;
}
