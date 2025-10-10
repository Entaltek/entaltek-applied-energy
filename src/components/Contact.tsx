import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";
import contactIllustration from "@/assets/contact-illustration.png";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left column - Illustration */}
            <div className="animate-fade-in-up">
              <img 
                src={contactIllustration} 
                alt="Servicio de atención al cliente" 
                className="w-full h-64 object-contain rounded-lg"
              />
            </div>
            
            {/* Right column - CTA */}
            <div className="text-center md:text-left animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                ¿Listo para transformar tu empresa?
              </h2>
              
              <p className="text-xl text-muted-foreground mb-8">
                Conectemos y desarrollemos juntos la solución tecnológica a tu medida
              </p>
              
              <Button 
                variant="hero" 
                size="lg"
                className="group"
                onClick={() => setIsFormOpen(true)}
              >
                Contáctanos
              </Button>
              
              <p className="text-sm text-muted-foreground mt-8">
                Responderemos en menos de 24 horas
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default Contact;
