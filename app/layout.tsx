import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manikantha Kasireddy — Full Stack Developer",
  description: "Production-grade developer portfolio showcasing modern web apps, PingMe, and weather tools built with Next.js.",
  keywords: ["Full Stack Developer", "React", "Next.js", "MongoDB", "Portfolio", "Manikantha Kasireddy"],
  authors: [{ name: "Manikantha Kasireddy" }],
  openGraph: {
    title: "Manikantha Kasireddy — Full Stack Developer",
    description: "Explore my production-grade projects like PingMe and Weather App.",
    url: "https://yourdomain.com",
    siteName: "Manikantha Kasireddy Portfolio",
    type: "website",
  },
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