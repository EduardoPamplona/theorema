import { SiteHeaderLandingPage } from "@/components/local/site-header-landing-page";
import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

export function LayoutLandingPage({ children }: LayoutProps) {
  return (
    <>
      <SiteHeaderLandingPage />
      <main>
        <Head>
          <title>Next.js</title>
          <meta
            name="description"
            content="Next.js template for building apps with Radix UI and Tailwind CSS"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <section className="container grid items-center gap-6 pt-6 pb-8 md:py-10">
          {children}
        </section>
      </main>
    </>
  );
}
