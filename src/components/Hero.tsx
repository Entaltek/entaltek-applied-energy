import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-dev-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSolutions = () => {
    document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-technical to-primary">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Desarrollo tecnológico e innovación"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/75 via-secondary/40 to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-28 text-center">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm animate-fade-in-up">
            <Sparkles className="w-4 h-4 text-accent" />
            Software, automatización e IA aplicada para negocios reales
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-fade-in-up leading-tight">
            Convertimos procesos manuales en soluciones digitales medibles
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            En Entaltek diseñamos productos, automatizaciones e integraciones para PyMEs que necesitan ordenar operación, ahorrar tiempo y vender mejor.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto text-white/85 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <div className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur-sm">CFDI XML/ZIP a Excel</div>
            <div className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur-sm">Automatización operativa</div>
            <div className="rounded-xl bg-white/10 border border-white/15 px-4 py-3 backdrop-blur-sm">Sistemas a medida</div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group bg-accent text-secondary hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-smooth"
            >
              Agenda un diagnóstico
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToSolutions}
              className="border-white text-primary hover:bg-white hover:text-secondary hover:border-transparent hover:shadow-[0_0_20px_rgba(71,218,214,0.6)] transition-smooth"
            >
              Ver soluciones
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
