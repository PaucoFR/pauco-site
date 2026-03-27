import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact — Devenir fondateur Pauco",
  description:
    "Devenez fondateur Pauco à 99€/mois à vie. Contactez Paul directement, réservez un appel de 15 minutes ou souscrivez en ligne. Logiciel de gestion restaurant tout-en-un.",
  alternates: { canonical: "https://paucoandco.com/contact" },
};

export default function ContactPage() {
  return <ContactContent />;
}
