import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SchemaOrg from "./components/SchemaOrg";

export const metadata: Metadata = {
  title: {
    default:
      "Pauco — Logiciel de gestion restaurant tout-en-un pour restaurateurs indépendants",
    template: "%s | Pauco — Logiciel gestion restaurant",
  },
  description:
    "Logiciel de gestion restaurant tout-en-un : réponse automatique aux avis Google, gestion CA et dépenses, fiches techniques, coût matière, planning équipe. 99€/mois à vie pour les 50 premiers restaurateurs fondateurs.",
  keywords: [
    "logiciel gestion restaurant",
    "logiciel restaurateur indépendant",
    "réponse avis google restaurant automatique",
    "gestion restaurant tout en un",
    "logiciel restauration",
    "gestion avis restaurant",
    "coût matière restaurant",
    "planning restaurant",
    "fiches techniques restaurant",
    "logiciel restaurant pas cher",
  ],
  metadataBase: new URL("https://paucoandco.com"),
  alternates: {
    canonical: "https://paucoandco.com",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://paucoandco.com",
    siteName: "Pauco",
    title:
      "Pauco — Logiciel de gestion restaurant tout-en-un | 99€/mois à vie",
    description:
      "Réponse automatique aux avis Google, gestion CA, fiches techniques, coût matière, planning équipe. Le logiciel tout-en-un des restaurateurs indépendants — 99€/mois à vie.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pauco — Logiciel de gestion restaurant tout-en-un",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pauco — Logiciel de gestion restaurant tout-en-un | 99€/mois à vie",
    description:
      "Réponse automatique aux avis Google, gestion CA, coût matière, planning. Le logiciel tout-en-un des restaurateurs indépendants.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-18006689412"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-18006689412');
            `,
          }}
        />
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </head>
      <body className="font-sans antialiased">
        <SchemaOrg />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
