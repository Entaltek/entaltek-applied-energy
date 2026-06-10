import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyEntaltek from "@/components/WhyEntaltek";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="hero">
        <Hero />
        <Services />
        <WhyEntaltek />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
