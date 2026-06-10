import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AboutUs from "@/components/AboutUs";
import MissionVision from "@/components/MissionVision";
import DNA from "@/components/DNA";
import Values from "@/components/Values";
import WhoWeHelp from "@/components/WhoWeHelp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="hero">
        <Hero />
        <Services />
        <AboutUs />
        <MissionVision />
        <DNA />
        <Values />
        <WhoWeHelp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
