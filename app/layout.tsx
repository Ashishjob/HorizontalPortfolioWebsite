import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";

const inter = Roboto_Slab({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashish Job Portfolio",
  description: "Ashish Job ~ Aspiring Software Engineer",
  openGraph: {
    images: './panda.png'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}