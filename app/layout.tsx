import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/header/NaveBar";

import { JetBrains_Mono, Work_Sans } from "next/font/google";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains-mono",
  preload: true,
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-work-sans",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    default: "Eslam Shaban | Frontend Developer",
    template: "%s | Eslam Shaban",
  },
  description:
    "Eslam Shaban – Frontend Developer specializing in React, Next.js, TypeScript, and Tailwind CSS. Explore professional projects, freelance work, and modern web applications designed with clean architecture and scalability in mind.",
  keywords: [
    "Eslam Shaban",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Tailwind CSS",
    "Web Development Portfolio",
    "Freelance Web Developer",
    "Modern Web Apps",
  ],
  authors: [{ name: "Eslam Shaban" }],
  creator: "Eslam Shaban",
  metadataBase: new URL("https://my-portfolio-one-gilt-24.vercel.app/"),
  openGraph: {
    title: "Eslam Shaban | Frontend Developer",
    description:
      "Portfolio of Eslam Shaban – showcasing professional web projects, freelance work, and expertise in React, Next.js, TypeScript, and Tailwind CSS.",
    url: "https://my-portfolio-one-gilt-24.vercel.app/",
    siteName: "Eslam Shaban Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eslam Shaban Portfolio – Frontend Developer",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${workSans.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute="class">
          <header>
            <Navbar />
          </header>

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
