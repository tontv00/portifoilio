import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wellington Silva | Software Engineer",
  description:
    "Portfólio de Wellington Silva, estudante de Engenharia de Software e desenvolvedor focado em desenvolvimento web, cloud e tecnologia.",
  keywords: [
    "Wellington Silva",
    "Software Engineer",
    "Engenharia de Software",
    "Desenvolvimento Web",
    "React",
    "Next.js",
    "TypeScript",
    "Python",
    "Cloud",
  ],
  authors: [{ name: "Wellington Silva" }],
  creator: "Wellington Silva",
  openGraph: {
    title: "Wellington Silva | Software Engineer",
    description:
      "Portfólio de Wellington Silva, estudante de Engenharia de Software e desenvolvedor focado em desenvolvimento web, cloud e tecnologia.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={geist.className}>{children}</body>
    </html>
  );
}