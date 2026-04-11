import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins, Fira_Code, Playfair_Display, Quintessential ,Londrina_Shadow  } from "next/font/google";
import Starfield from "./components/starfield";

export const metadata: Metadata = {
  metadataBase: new URL("https://tolulope-dairo.vercel.app"),

  title: "Tolulope Dairo",
  description:
    "Portfolio website built by Tolulope Dairo, showcasing skills developed over the years.",

  icons: {
    icon: "/images/icon.png",
    shortcut: "/images/icon.png",
    apple: "/images/icon.png",
  },

  openGraph: {
    title: "Tolulope Dairo - Portfolio Website",
    description: "Learn more about projects built by Tolulope Dairo",
    url: "https://tolulope-dairo.vercel.app/",
    siteName: "Tolulope Dairo Portfolio",
    locale: "en_NG",
    type: "website",
    images: [
      {
        url: "/images/meta.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tolulope Dairo - Portfolio Website",
    description: "Learn more about projects built by Tolulope Dairo",
    images: ["/images/meta.jpg"],
  },
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const quintessential = Quintessential({
  subsets: ["latin"],
  variable: "--font-quintessential",
  weight: ["400"],
});

const londrinaShadow = Londrina_Shadow({
  subsets: ["latin"],
  variable: "--font-londrina-shadow",
  weight: ["400"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} ${firaCode.variable} ${playfair.variable} ${quintessential.variable} ${londrinaShadow.variable} bg-black`}>
        <Starfield />
        {children}
      </body>
    </html>
  );
}