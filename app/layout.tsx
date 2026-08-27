import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clip Time — AI Video Clipping",
  description: "Turn long videos into short-form content with Clip Time.",
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
