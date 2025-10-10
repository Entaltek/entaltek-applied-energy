import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-dev-background.jpg";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-technical to-primary">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Desarrollo tecnológico e innovación" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/60 via-transparent to-background"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-lg animate-fade-in-up">
            Energía aplicada a la innovación
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-md animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Desarrollamos soluciones tecnológicas que integran software, ciencia e ingeniería para potenciar a las empresas y transformar sistemas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="group bg-accent text-secondary hover:bg-accent/90 font-semibold shadow-lg hover:shadow-xl transition-smooth"
            >
              Conoce nuestras soluciones
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-white text-primary hover:bg-white hover:text-secondary hover:border-transparent hover:shadow-[0_0_20px_rgba(71,218,214,0.6)] transition-smooth"
            >
              Quiénes somos
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
