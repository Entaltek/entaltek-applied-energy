import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface ContactFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    nombres: "",
    apellidos: "",
    correo: "",
    mensaje: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombres || !formData.apellidos || !formData.correo || !formData.mensaje) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    try {
      const response = await fetch("https://formsubmit.co/ajax/contact@entaltek.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: `${formData.nombres} ${formData.apellidos}`,
          email: formData.correo,
          message: formData.mensaje,
          _subject: "Nuevo Lead desde Entaltek Web",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        toast.success("Mensaje enviado correctamente");
        setFormData({ nombres: "", apellidos: "", correo: "", mensaje: "" });
        onOpenChange(false);
      } else {
        toast.error("Error al enviar el mensaje");
      }
    } catch (err) {
      toast.error("No se pudo conectar con el servidor");
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contáctanos</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="nombres">Nombres</Label>
            <Input
              id="nombres"
              value={formData.nombres}
              onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
              placeholder="Ingresa tus nombres"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellidos">Apellidos</Label>
            <Input
              id="apellidos"
              value={formData.apellidos}
              onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
              placeholder="Ingresa tus apellidos"
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
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje">Mensaje</Label>
            <Textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              placeholder="Escribe tu mensaje aquí..."
              className="min-h-[120px]"
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Enviar mensaje
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
