import { MainNav } from "@/components/local/main-nav";
import { siteConfig } from "@/lib/config/site";

export function SiteHeaderLandingPage() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-b-slate-200 bg-white dark:border-b-slate-700 dark:bg-slate-900">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.landingPageNav} />
      </div>
    </header>
  );
}
