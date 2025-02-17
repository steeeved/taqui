import type { Metadata } from "next";
import { Poppins, Rubik } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { siteConfig } from "./page";
import ClientProviders from "./client-provider";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-poppins",
});
const rubik = Rubik({
  subsets: ["latin"],
  weight: "600",
  variable: "--font-rubik",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mdTaquiImam.vercel.app"),
  title: {
    default: siteConfig.name,
    template: `%s - Software Engineer`,
  },
  description: siteConfig.description,

  // added new keywords for seo
  keywords: [
    "stephen",
    "muchendu",
    "muranga",
    "MUCHENDU",
    "MD",
    "TAQUI",
    "Taqui",
    "Imam",
    "Imam",
    "Md Taqui Imam",
    "md taqui imam",
    "mdtaqui",
    "mdtaquiimam",
    "taqui imam",
    "Taqui Imam",
    "Taquiimam",
    "portfolio",
    "web developer",
    "web",
    "web dev",
    "developer",
    "PROGRAMMER ",
    "programmer ",
    "MD TAQUI IMAM ",
    "website",
    "@Taquiimam",
    "Taquiimam",
    "taqui developer",
  ],
  authors: [
    {
      name: "Taqui Imam",
      url: "https://github.com/taqui-786",
    },
  ],
  creator: "Taqui imam",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
    creator: "@Taquiimam14",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${rubik.variable} overflow-y-scroll`}
        style={{
          background:
            "linear-gradient(rgb(250 255 255 / .37), rgb(250 255 255 / .37)), url('/bg.webp')",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <ClientProviders>
          <div
            className={cn(
              "max-w-screen-xl w-full mx-auto flex relative break-words h-dvh min-h-screen items-center justify-between pt-14 pb-4 bg-transparent max-sm:px-6 max-sm:pt-20"
            )}
          >
            <Navbar />
            {children}
          </div>
        </ClientProviders>
      </body>
    </html>
  );
}
