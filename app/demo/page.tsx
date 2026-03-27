import type { Metadata } from "next";
import DemoContent from "./DemoContent";

export const metadata: Metadata = {
  title: "Démo du logiciel de gestion restaurant Pauco",
  description:
    "Testez gratuitement la démo Pauco : réponse automatique aux avis Google, gestion CA, fiches techniques, planning. Le logiciel tout-en-un des restaurateurs indépendants.",
  alternates: { canonical: "https://paucoandco.com/demo" },
};

export default function DemoPage() {
  return <DemoContent />;
}
