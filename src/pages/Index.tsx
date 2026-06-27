import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Solutions from "@/components/Solutions";
import Process from "@/components/Process";
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
        <AboutUs />
        <Solutions />
        <Process />
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
