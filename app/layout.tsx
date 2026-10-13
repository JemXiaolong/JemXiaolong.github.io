import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Inter } from "next/font/google";
import { NO_FLASH_SCRIPT, Providers } from "./providers";
import "./globals.css";
import { GOATCOUNTER_URL } from "@/lib/content";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jemxiaolong.github.io"),
  title: "Jem Escudero — Full Stack Developer",
  description:
    "Full stack developer. I ship mobile apps to the App Store and work inside the fork of an ERP framework running in production. React Native, TypeScript, Python, Odoo.",
  keywords: [
    "Full Stack Developer",
    "React Native",
    "TypeScript",
    "Next.js",
    "Python",
    "Odoo",
    "PostgreSQL",
    "México",
  ],
  authors: [{ name: "Jem Escudero", url: "https://github.com/JemXiaolong" }],
  openGraph: {
    title: "Jem Escudero — Full Stack Developer",
    description:
      "I ship mobile apps to the App Store and work inside the fork of an ERP framework running in production.",
    url: "https://jemxiaolong.github.io",
    siteName: "Jem Escudero",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${inter.variable} ${display.variable} ${mono.variable} h-full antialiased`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: NO_FLASH_SCRIPT }} />
        {/* Cookieless page and download counts; count.js skips localhost on its own. */}
        <script data-goatcounter={GOATCOUNTER_URL} async src="https://gc.zgo.at/count.js" />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
