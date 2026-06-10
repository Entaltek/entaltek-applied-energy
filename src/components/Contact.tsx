import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
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
      
      <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default Contact;
