import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Pauco — Le logiciel tout-en-un des restaurateurs",
    template: "%s | Pauco",
  },
  description:
    "E-réputation automatique, gestion CA et dépenses, fiches techniques, coût matière, planning équipe. 99€/mois à vie pour les 50 premiers restaurateurs fondateurs.",
  metadataBase: new URL("https://paucoandco.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://paucoandco.com",
    siteName: "Pauco",
    title: "Pauco — Le logiciel tout-en-un des restaurateurs",
    description:
      "Réponses automatiques à tous vos avis, rapport hebdomadaire, dashboard. 99€/mois à vie — prix fondateur garanti.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pauco — Le logiciel tout-en-un des restaurateurs",
    description:
      "Réponses automatiques à tous vos avis. 99€/mois à vie — prix fondateur garanti.",
    images: ["/og-image.jpg"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600;9..40,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 56 56' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='56' height='56' rx='14' fill='%232D6A4A'/%3E%3Cpath d='M16 10H31C37.6274 10 43 15.3726 43 22C43 28.6274 37.6274 34 31 34H22V46H16V10Z' fill='white'/%3E%3Ccircle cx='31' cy='22' r='7' fill='%232D6A4A'/%3E%3C/svg%3E"
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
