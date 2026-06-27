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

const initialFormData = {
  nombres: "",
  apellidos: "",
  empresa: "",
  correo: "",
  telefono: "",
  tipoProyecto: "Automatización operativa",
  mensaje: "",
};

const ContactForm = ({ open, onOpenChange }: ContactFormProps) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombres || !formData.apellidos || !formData.correo || !formData.mensaje) {
      toast.error("Por favor completa nombre, correo y mensaje");
      return;
    }

    setIsSubmitting(true);

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
          company: formData.empresa,
          phone: formData.telefono,
          project_type: formData.tipoProyecto,
          message: formData.mensaje,
          _subject: `Nuevo lead Entaltek: ${formData.tipoProyecto}`,
          _captcha: "false",
        }),
      });

      if (response.ok) {
        toast.success("Mensaje enviado correctamente");
        setFormData(initialFormData);
        onOpenChange(false);
      } else {
        toast.error("Error al enviar el mensaje");
      }
    } catch (err) {
      toast.error("No se pudo conectar con el servidor");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[560px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Solicitar diagnóstico</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nombres">Nombres</Label>
              <Input
                id="nombres"
                value={formData.nombres}
                onChange={(e) => setFormData({ ...formData, nombres: e.target.value })}
                placeholder="Carlos"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="apellidos">Apellidos</Label>
              <Input
                id="apellidos"
                value={formData.apellidos}
                onChange={(e) => setFormData({ ...formData, apellidos: e.target.value })}
                placeholder="Cano"
                required
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="empresa">Empresa o proyecto</Label>
              <Input
                id="empresa"
                value={formData.empresa}
                onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                placeholder="Nombre de tu negocio"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="telefono">WhatsApp o teléfono</Label>
              <Input
                id="telefono"
                value={formData.telefono}
                onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                placeholder="477 000 0000"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
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
              <Label htmlFor="tipoProyecto">Tipo de proyecto</Label>
              <select
                id="tipoProyecto"
                value={formData.tipoProyecto}
                onChange={(e) => setFormData({ ...formData, tipoProyecto: e.target.value })}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <option>Automatización operativa</option>
                <option>Sistema web a medida</option>
                <option>Entaltek CFDI</option>
                <option>Gestión para talleres</option>
                <option>Marketplace o producto nuevo</option>
                <option>Otro</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="mensaje">Cuéntanos qué quieres resolver</Label>
            <Textarea
              id="mensaje"
              value={formData.mensaje}
              onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
              placeholder="Ej. Hoy llevo mis pedidos en Excel y WhatsApp; quiero saber quién debe, qué está pendiente y cuánto gané."
              className="min-h-[130px]"
              required
            />
          </div>

          <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
            {isSubmitting ? "Enviando..." : "Enviar solicitud"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
