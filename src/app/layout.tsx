import "@/app/styles/global.css";

import { SiteHeaderLandingPage } from "@/components/local/site-header-landing-page";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Theorema",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeaderLandingPage />
        <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
          {children}
        </section>
      </body>
    </html>
  );
}
