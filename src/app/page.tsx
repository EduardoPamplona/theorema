import { LayoutLandingPage } from "@/components/local/layout-landing-page";

export default function Home() {
  return (
    <LayoutLandingPage>
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          This page will be the home page, for logged out users.
        </h1>
      </div>
    </LayoutLandingPage>
  );
}
