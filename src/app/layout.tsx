import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Particles } from "@/components/effects/Particles";
import { ProgressBar } from "@/components/nav/ProgressBar";
import { Logo, MusicButton } from "@/components/nav/Logo";
import { KonamiListener } from "@/components/easter-eggs/KonamiListener";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Para Thais — De Carlos",
  description: "Uma carta silenciosa esperando pela pessoa certa.",
  authors: [{ name: "Carlos" }],
  openGraph: {
    title: "Para Thais — De Carlos",
    description: "Uma carta silenciosa esperando pela pessoa certa.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#050507",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jetbrains.variable}`}>
      <body>
        <Particles />
        <ProgressBar />
        <Logo />
        <MusicButton />
        {children}
        <KonamiListener />
      </body>
    </html>
  );
}
