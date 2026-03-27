import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Paul directement. Réservez un appel de 15 minutes, envoyez un message ou appelez au +33 7 83 47 06 57.",
};

export default function ContactPage() {
  return <ContactContent />;
}
