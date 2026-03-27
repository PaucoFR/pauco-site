import type { Metadata } from "next";
import RoadmapContent from "./RoadmapContent";

export const metadata: Metadata = {
  title: "Roadmap",
  description:
    "Découvrez les 5 phases de développement de Pauco. Chaque nouveau module est inclus pour les fondateurs à 99€/mois à vie.",
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
