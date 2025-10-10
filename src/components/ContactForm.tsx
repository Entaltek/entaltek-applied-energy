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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.nombres || !formData.apellidos || !formData.correo || !formData.mensaje) {
      toast.error("Por favor completa todos los campos");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form data:", formData);
    toast.success("Mensaje enviado correctamente");
    
    // Reset form and close dialog
    setFormData({ nombres: "", apellidos: "", correo: "", mensaje: "" });
    onOpenChange(false);
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
