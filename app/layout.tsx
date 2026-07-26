import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { meta } from "../content";
import { MoleculeBackground } from "../components/MoleculeBackground";
import { SunsetOrb } from "../components/SunsetOrb";

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mikelmangold.com"),
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: "https://mikelmangold.com",
    siteName: meta.title,
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 799,
        alt: "Mikel Mangold",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`scroll-smooth ${ibmPlexSans.variable}`}>
      <body className="font-sans antialiased">
        <MoleculeBackground />
        <SunsetOrb />
        {children}
      </body>
    </html>
  );
}
