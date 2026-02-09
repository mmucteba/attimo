import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Attimo UI Shell",
  description: "Minimal Next.js shell for backend integration",
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
