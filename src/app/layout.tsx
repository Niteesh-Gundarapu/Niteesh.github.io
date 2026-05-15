import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Niteesh Gundarapu | Full Stack Engineer",
  description: "Technology Analyst @ Infosys | 5+ Years Experience | React, Next.js, FastAPI, OpenAI Integration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
