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
  title: meta.title,
  description: meta.description,
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
