import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import CommitmentSection from "@/components/sections/home/CommitmentSection";
import CTASection from "@/components/sections/home/CTASection";
import FAQSection from "@/components/sections/home/FAQSection";
import GallerySection from "@/components/sections/home/GallerySection";
import HeroSection from "@/components/sections/home/HeroSection";
import LocationSection from "@/components/sections/home/LocationSection";
import PackingGuideSection from "@/components/sections/home/PackingGuideSection";
import PartnerSection from "@/components/sections/home/PartnerSection";
import PricingSection from "@/components/sections/home/PricingSection";
import ProcessSection from "@/components/sections/home/ProcessSection";
import ProhibitedItemsSection from "@/components/sections/home/ProhibitedItemsSection";
import ServiceSection from "@/components/sections/home/ServiceSection";
import ShippingCalculator from "@/components/sections/home/ShippingCalculator";
import SurchargeSection from "@/components/sections/home/SurchargeSection";
import TestimonialsSection from "@/components/sections/home/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <HeroSection />
      <PartnerSection /> {/* Đặt ở đây để tăng uy tín ngay lập tức */}
      <CommitmentSection />
      <ServiceSection />
      <ProcessSection />
      <PackingGuideSection />
      <PricingSection />
      <ShippingCalculator />
      <SurchargeSection />
      <LocationSection />
      <TestimonialsSection />
      <ProhibitedItemsSection />
      <GallerySection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
