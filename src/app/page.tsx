import { HeroSection } from "@/features/public/hero-section";
import { LogoCarouselSection } from "@/features/public/logo-carousel-section";
import { NewsSection } from "@/features/public/news-section";
import { PassionSection } from "@/features/public/passion-section";
import { PortfolioSection } from "@/features/public/portfolio-section";
import { StatsSection } from "@/features/public/stats-section";
import { WhatWeOfferSection } from "@/features/public/what-we-offer-section";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WhatWeOfferSection />
      <PortfolioSection />
      <StatsSection />
      <PassionSection />
      <LogoCarouselSection />
      <NewsSection />
    </div>
  );
}
