import { Button } from "@/components/ui/button";
import { Mail, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            ¿Listo para transformar tu empresa?
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Conectemos y desarrollemos juntos la solución tecnológica a tu medida
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button 
              variant="hero" 
              size="lg"
              className="group"
              onClick={() => window.open('mailto:contacto@entaltek.com', '_blank')}
            >
              <Mail className="mr-2" />
              Contáctanos
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="group"
            >
              <Calendar className="mr-2" />
              Agendar reunión
            </Button>
          </div>
          
          <p className="text-sm text-muted-foreground mt-12 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            Responderemos en menos de 24 horas
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
