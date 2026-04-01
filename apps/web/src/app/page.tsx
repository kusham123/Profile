import { SiteNavbar } from "@/components/navigation/site-navbar";
import { AboutSection } from "@/components/sections/about-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { PortfolioSection } from "@/components/sections/portfolio-section";
import { ServicesSection } from "@/components/sections/services-section";

export default function HomePage() {
  return (
    <>
      <SiteNavbar />
      <main className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-rose-500/10 blur-[120px]" />
          <div className="absolute right-0 top-[22rem] h-[340px] w-[340px] rounded-full bg-red-500/10 blur-[120px]" />
          <div className="absolute bottom-[20%] left-[-6rem] h-[280px] w-[280px] rounded-full bg-white/5 blur-[110px]" />
        </div>

        <div className="mx-auto flex w-full max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
          <HeroSection />
          <ServicesSection />
          <PortfolioSection />
          <AboutSection />
          <ContactSection />
          <BlogSection />
        </div>
      </main>
    </>
  );
}
