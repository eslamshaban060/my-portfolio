import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import { Space_Grotesk, Inter, Cairo } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

const cairo = Cairo({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cairo",
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
      className={`${spaceGrotesk.variable} ${inter.variable} ${cairo.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
