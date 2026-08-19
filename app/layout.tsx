import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manikantha Kasireddy — Full Stack Developer",
  description: "Production-grade portfolio built with Next.js and CSS Modules.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}