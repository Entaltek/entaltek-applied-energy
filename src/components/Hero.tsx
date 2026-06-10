import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import heroImage from "@/assets/hero-dev-background.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-technical to-primary">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt=""
          role="presentation"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-transparent to-background"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <p className="text-sm md:text-base font-semibold tracking-widest uppercase text-accent animate-fade-in-up">
            Estudio de tecnología · León, Guanajuato
          </p>

          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg animate-fade-in-up">
            Software y automatización con precisión de ingeniería
          </h1>

          <p
            className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Construimos SaaS a medida, automatizamos procesos con IA y desarrollamos
            apps móviles. Sistemas que tu negocio usa todos los días, no demos.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              asChild
              className="group bg-accent text-secondary hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-smooth"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2" />
                Escríbenos por WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })}
              className="group border-white/70 bg-transparent text-white hover:bg-white hover:text-secondary hover:border-transparent hover:shadow-[0_0_20px_rgba(71,218,214,0.6)] transition-smooth"
            >
              Ver servicios
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
