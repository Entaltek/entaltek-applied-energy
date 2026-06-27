import { useState } from "react";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
            Diagnóstico inicial
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Cuéntanos qué proceso quieres mejorar
          </h2>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Revisamos tu caso y te proponemos una primera ruta: automatización, sistema interno, landing de venta o MVP de producto.
          </p>

          <Button
            variant="hero"
            size="lg"
            className="group"
            onClick={() => setIsFormOpen(true)}
          >
            Solicitar diagnóstico
          </Button>

          <p className="text-sm text-muted-foreground mt-8">
            Responderemos en menos de 24 horas hábiles.
          </p>
        </div>
      </div>

      <ContactForm open={isFormOpen} onOpenChange={setIsFormOpen} />
    </section>
  );
};

export default Contact;
