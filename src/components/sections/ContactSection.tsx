import { useState } from "react";
import { ArrowRight, CheckCircle2, Github, Linkedin, Mail, MapPin, MessageCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useInView } from "@/hooks/useInView";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY_NUMBER,
  CONTACT_EMAIL,
  LOCATION,
  LINKEDIN_URL,
  GITHUB_URL,
} from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-[#013762]/12 bg-[#F8FAFC] px-4 py-3 text-[#013762] placeholder:text-[#013762]/35 shadow-inner shadow-[#013762]/[0.02] outline-none transition-all focus:border-[#0179B1]/60 focus:bg-white focus:ring-4 focus:ring-[#47DAD6]/15";

const trustPoints = [
  "Respuesta en menos de 24 horas.",
  "Diagnóstico inicial sin costo.",
  "Soluciones pensadas para PYMES, startups y equipos operativos.",
];

const HexLogo = () => <img src={logoMark} alt="Isotipo de Entaltek" className="h-8 w-auto" />;

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
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-[#F7FAFC] flex flex-col"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#47DAD6]/16 blur-[95px]" />
        <div className="absolute bottom-20 left-8 h-64 w-64 rounded-full bg-[#0179B1]/10 blur-[90px]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#013762]/5 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0179B1]/20 to-transparent" />
      </div>

      <div className="relative flex-1 min-h-0 flex items-center">
        <div ref={ref} className="container mx-auto px-4 pt-16 pb-5 md:pt-14 md:pb-4">
          <div className="grid md:grid-cols-[1.02fr_0.98fr] gap-8 lg:gap-14 xl:gap-20 max-w-7xl mx-auto items-center">
            <div
              className={`transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0179B1]/20 bg-white/70 px-4 py-1.5 text-sm font-semibold text-[#0179B1] shadow-sm">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Empecemos por entender tu operación
              </span>

              <h2 className="mt-5 max-w-2xl font-extrabold text-[#013762] text-[clamp(2rem,3.65vw,3.35rem)] leading-[1.08] tracking-tight">
                Cuéntanos qué proceso quieres mejorar
              </h2>
              <p className="mt-5 max-w-2xl text-base lg:text-lg leading-relaxed text-[#013762]/68">
                Ya sea una automatización, una plataforma interna, una landing o una herramienta a la medida, podemos ayudarte a convertir una operación manual en un sistema claro y funcional.
              </p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 rounded-2xl border border-[#013762]/8 bg-white/55 px-4 py-3 text-sm text-[#013762]/78 shadow-sm backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0179B1]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3 rounded-2xl border border-[#013762]/10 bg-white/75 p-4 shadow-sm backdrop-blur sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#013762]/85 hover:text-[#0179B1] transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0179B1] shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-sm text-[#013762]/85 hover:text-[#0179B1] transition-colors">
                  <Mail className="h-5 w-5 text-[#0179B1] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-[#013762]/85">
                  <MapPin className="h-5 w-5 text-[#0179B1] shrink-0" aria-hidden="true" />
                  <span>{LOCATION}</span>
                </div>
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0179B1] px-7 py-3.5 font-bold text-white shadow-lg shadow-[#0179B1]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#013762] hover:shadow-[#013762]/20"
              >
                Escríbenos por WhatsApp
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </div>

            <form
              onSubmit={handleSubmit}
              className={`rounded-3xl border border-[#013762]/10 bg-white p-5 shadow-[0_24px_80px_rgba(1,55,98,0.12)] transition-all duration-700 ease-out delay-150 md:p-6 lg:p-7 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#47DAD6]/12 text-[#0179B1]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#013762]">Envíanos tu idea</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#013762]/58">
                    No necesitas tener todo definido. Con una descripción inicial podemos ayudarte a ordenar el alcance.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="mb-1.5 block text-sm font-bold text-[#013762]">
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
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-[#013762]">
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
                  <label htmlFor="mensaje" className="mb-1.5 block text-sm font-bold text-[#013762]">
                    ¿Qué necesitas resolver?
                  </label>
                  <textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Ej. Quiero automatizar cotizaciones, pedidos o seguimiento de clientes..."
                    required
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#013762] py-3.5 font-bold text-white shadow-lg shadow-[#013762]/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0179B1] disabled:translate-y-0 disabled:opacity-60"
              >
                {isSending ? "Enviando…" : "Enviar mensaje"}
                {!isSending && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="relative shrink-0 bg-[#011627] py-4">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#47DAD6]/35 to-transparent" aria-hidden="true" />
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
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
