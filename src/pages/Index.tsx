import Navbar from "@/components/Navbar";
import SectionDots from "@/components/SectionDots";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhySection from "@/components/sections/WhySection";
import BrandAdnSection from "@/components/sections/BrandAdnSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <SectionDots />
      <main
        id="main-scroll"
        className="h-screen overflow-y-auto scroll-smooth md:snap-y md:snap-mandatory"
      >
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <WhySection />
        <BrandAdnSection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
