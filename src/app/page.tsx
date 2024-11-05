import { Footer } from "@/features/common/footer";
import { Header } from "@/features/common/header";
import { HeroSection } from "@/features/public/hero-section";
import { LogoCarouselSection } from "@/features/public/logo-carousel-section";
import { NewsSection } from "@/features/public/news-section";
import { PassionSection } from "@/features/public/passion-section";
import { PortfolioSection } from "@/features/public/portfolio-section";
import { ServicesSection } from "@/features/public/services-section";
import { StatsSection } from "@/features/public/stats-section";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <PassionSection />
      <LogoCarouselSection />
      <NewsSection />
      <Footer />
    </div>
  );
}
