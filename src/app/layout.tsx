import type { Metadata } from "next";

import { Footer } from "@/features/common/footer";
import { Header } from "@/features/common/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "Rocketella",
  description: "Rocketella - We make things happen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🚀</text></svg>"
        />
      </head>
      <body className="antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
