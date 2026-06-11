import { useState } from "react";
import { Mail, MapPin, MessageCircle, Github, Linkedin } from "lucide-react";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";
import {
  WHATSAPP_URL,
  WHATSAPP_NUMBER,
  CONTACT_EMAIL,
  LOCATION,
  LINKEDIN_URL,
  GITHUB_URL,
} from "@/lib/site";

const inputClass =
  "w-full bg-transparent border-0 border-b border-[#013762]/20 rounded-none px-0 py-3 text-[#013762] placeholder:text-[#013762]/35 focus:outline-none focus:border-[#0179B1] transition-colors";

const HexLogo = () => (
  <svg viewBox="0 0 32 36" className="h-8 w-auto" aria-hidden="true">
    <path d="M16 2 30 10v16L16 34 2 26V10L16 2Z" stroke="#47DAD6" strokeWidth="2" strokeLinejoin="round" fill="none" />
    <path d="M16 10l7 4v8l-7 4-7-4v-8l7-4Z" fill="#0179B1" />
  </svg>
);

const ContactSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre || !formData.email || !formData.mensaje) {
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
          email: formData.email,
          message: formData.mensaje,
          _subject: "Nuevo Lead desde Entaltek Web",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        toast.success("Mensaje enviado. Te respondemos en menos de 24 horas.");
        setFormData({ nombre: "", email: "", mensaje: "" });
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
    <section
      id="contacto"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-white flex flex-col"
    >
      <div className="flex-1 flex items-center">
        <div
          ref={ref}
          className={`container mx-auto px-4 pt-24 pb-12 transition-all duration-700 ease-out ${
            inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
          }`}
        >
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 max-w-5xl mx-auto items-start">
            {/* Izquierda: copy y vías directas */}
            <div>
              <h2 className="font-bold text-[#013762] text-[clamp(1.8rem,3vw,2.8rem)] leading-tight">
                ¿Tienes un problema que resolver?
              </h2>
              <p className="mt-4 text-lg text-[#013762]/70">
                Cuéntanos qué necesitas. Respondemos en menos de 24 horas.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-[#013762]/80">
                  <MessageCircle className="w-5 h-5 text-[#0179B1] shrink-0" aria-hidden="true" />
                  WhatsApp: {WHATSAPP_NUMBER}
                </li>
                <li className="flex items-center gap-3 text-[#013762]/80">
                  <Mail className="w-5 h-5 text-[#0179B1] shrink-0" aria-hidden="true" />
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-[#0179B1] transition-colors">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3 text-[#013762]/80">
                  <MapPin className="w-5 h-5 text-[#0179B1] shrink-0" aria-hidden="true" />
                  {LOCATION}
                </li>
              </ul>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-8 px-8 py-4 rounded-lg bg-[#0179B1] text-white font-semibold hover:bg-[#013762] transition-colors duration-300"
              >
                Escríbenos por WhatsApp →
              </a>
            </div>

            {/* Derecha: formulario inline */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-[#013762] mb-1">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  placeholder="Tu nombre"
                  autoComplete="name"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#013762] mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@correo.com"
                  autoComplete="email"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-semibold text-[#013762] mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  value={formData.mensaje}
                  onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                  placeholder="Ej. quiero automatizar la agenda de mi clínica…"
                  required
                  rows={4}
                  className={`${inputClass} resize-none`}
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-4 rounded-lg bg-[#013762] text-white font-semibold hover:bg-[#0179B1] transition-colors duration-300 disabled:opacity-60"
              >
                {isSending ? "Enviando…" : "Enviar mensaje"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer integrado */}
      <footer className="bg-[#011627] py-6">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <HexLogo />
            <span className="text-sm text-white/60">
              {LOCATION} · {new Date().getFullYear()}
            </span>
          </div>

          <p className="text-xs text-white/35">
            Construido con React · Supabase · n8n · amor por la ingeniería
          </p>

          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#47DAD6] transition-colors"
              aria-label="LinkedIn de Entaltek"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-[#47DAD6] transition-colors"
              aria-label="GitHub de Entaltek"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
