import type { Metadata } from "next";
import RoadmapContent from "./RoadmapContent";

export const metadata: Metadata = {
  title: "Roadmap — Évolution du logiciel de gestion restaurant Pauco",
  description:
    "5 phases de développement Pauco : e-réputation, gestion CA, planning, comptabilité IA, intégrations caisses. Chaque module inclus pour les fondateurs à 99€/mois à vie.",
  alternates: { canonical: "https://paucoandco.com/roadmap" },
};

export default function RoadmapPage() {
  return <RoadmapContent />;
}
