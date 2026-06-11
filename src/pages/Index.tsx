import Navbar from "@/components/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProductsSection from "@/components/sections/ProductsSection";
import WhySection from "@/components/sections/WhySection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Navbar />
      <main
        id="main-scroll"
        className="h-screen overflow-y-auto scroll-smooth md:snap-y md:snap-mandatory"
      >
        <HeroSection />
        <ServicesSection />
        <ProductsSection />
        <WhySection />
        <ContactSection />
      </main>
    </>
  );
};

export default Index;
