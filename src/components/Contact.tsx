import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, CONTACT_EMAIL, LOCATION } from "@/lib/site";

const Contact = () => {
  const [formData, setFormData] = useState({ nombre: "", correo: "", mensaje: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre || !formData.correo || !formData.mensaje) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    setIsSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.nombre,
          email: formData.correo,
          message: formData.mensaje,
          _subject: "Nuevo Lead desde Entaltek Web",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        toast.success("Mensaje enviado. Te respondemos en menos de 24 horas.");
        setFormData({ nombre: "", correo: "", mensaje: "" });
      } else {
        toast.error("Error al enviar el mensaje");
      }
    } catch {
      toast.error("No se pudo conectar con el servidor");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">
            Hablemos de tu proyecto
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-2xl mx-auto animate-fade-in-up">
            Cuéntanos qué necesitas y te respondemos en menos de 24 horas con los
            siguientes pasos, sin compromiso.
          </p>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-md border border-border space-y-5 animate-scale-in"
            >
              <div className="space-y-2">
                <Label htmlFor="nombre">Nombre</Label>
                <Input
                  id="nombre"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="correo">Correo electrónico</Label>
                <Input
                  id="correo"
                  type="email"
                  value={formData.correo}
                  onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">¿Qué necesitas resolver?</Label>
                <Textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Ej. quiero automatizar la agenda de mi clínica…"
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSending}>
                {isSending ? "Enviando…" : "Enviar mensaje"}
              </Button>
            </form>

            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card rounded-2xl p-8 shadow-md border border-border">
                <h3 className="text-xl font-bold mb-2">¿Prefieres algo más directo?</h3>
                <p className="text-muted-foreground mb-6">
                  Escríbenos por WhatsApp y agenda una llamada de 20 minutos para
                  platicar tu caso.
                </p>
                <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2" />
                    Abrir WhatsApp
                  </a>
                </Button>
              </div>

              <ul className="bg-card rounded-2xl p-8 shadow-md border border-border space-y-4">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Mail className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-primary transition-smooth">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <MapPin className="w-5 h-5 text-primary shrink-0" aria-hidden="true" />
                  {LOCATION}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
