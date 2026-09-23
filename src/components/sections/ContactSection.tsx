import { useState } from "react";
import { ArrowRight, CheckCircle2, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import { Link } from "react-router-dom";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import {
  WHATSAPP_URL,
  WHATSAPP_DISPLAY_NUMBER,
  CONTACT_EMAIL,
  RESPONSIBLE_NAME,
  LOCATION,
  LINKEDIN_URL,
} from "@/lib/site";

const inputClass =
  "w-full rounded-xl border border-[#013762]/12 dark:border-[#B4DDE7]/20 bg-[#F8FAFC] dark:bg-[#102B40] px-4 py-3 text-[#013762] dark:text-[#E7F2F7] placeholder:text-[#013762]/35 dark:placeholder:text-[#9EB7C6] shadow-inner shadow-[#013762]/[0.02] outline-none transition-all focus:border-[#0179B1]/60 focus:bg-white dark:focus:bg-[#173C52] focus:ring-4 focus:ring-[#47DAD6]/15";

const trustPoints = [
  "Atención directa a tu solicitud.",
  "Primero entendemos el proceso que quieres mejorar.",
  "Soluciones pensadas para PYMES, startups y equipos operativos.",
];

const HexLogo = () => <img src={logoMark} alt="Isotipo de Entaltek" className="h-8 w-auto" />;

const ContactSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [isSending, setIsSending] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<{ kind: "success" | "error"; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nombre.trim() || !formData.email.trim() || !formData.mensaje.trim()) {
      setStatus({ kind: "error", message: "Completa nombre, correo y mensaje antes de enviarlo." });
      return;
    }

    if (honeypot) return;

    setStatus(null);
    setIsSending(true);
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          name: formData.nombre.trim(),
          email: formData.email.trim(),
          message: formData.mensaje.trim(),
          _subject: "Nueva consulta desde entaltek.com",
          _captcha: "false",
          _honey: honeypot,
        }),
      });

      const result: { success?: boolean | string } = await response.json();
      if (response.ok && (result.success === true || result.success === "true")) {
        setStatus({ kind: "success", message: "FormSubmit recibió la solicitud. Si no recibes respuesta, escríbenos directamente por correo o WhatsApp." });
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setStatus({ kind: "error", message: "No pudimos confirmar el envío. Conservamos tu mensaje aquí para que intentes de nuevo o nos escribas por correo." });
      }
    } catch {
      setStatus({ kind: "error", message: "No pudimos confirmar el envío. Conservamos tu mensaje aquí para que intentes de nuevo o nos escribas por correo." });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contacto"
      className="relative min-h-screen md:snap-start overflow-x-hidden bg-[#F7FAFC] dark:bg-[#091D2C] flex flex-col"
    >
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-28 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#47DAD6]/16 blur-[95px]" />
        <div className="absolute bottom-20 left-8 h-64 w-64 rounded-full bg-[#0179B1]/10 blur-[90px]" />
        <div className="absolute right-0 top-24 h-80 w-80 rounded-full bg-[#013762]/5 blur-[100px]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#0179B1]/20 to-transparent" />
      </div>

      <div className="relative flex-1 flex items-center">
        <div ref={ref} className="container mx-auto px-4 pt-24 pb-10 md:pt-28 md:pb-12">
          <div className="grid md:grid-cols-[1.12fr_0.88fr] gap-8 lg:gap-12 xl:gap-16 max-w-[88rem] mx-auto items-center">
            <div
              className={`transition-all duration-700 ease-out ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h2 className="max-w-3xl font-extrabold text-[#013762] dark:text-[#E7F2F7] text-[clamp(2.15rem,3.9vw,3.55rem)] leading-[1.08] tracking-tight">
                Cuéntanos qué proceso quieres mejorar
              </h2>
              <p className="mt-5 max-w-3xl text-base lg:text-lg leading-relaxed text-[#013762]/68 dark:text-[#BFD5E1]">
                Ya sea una automatización, una plataforma interna, una landing o una herramienta a la medida, podemos ayudarte a convertir una operación manual en un sistema claro y funcional.
              </p>

              <ul className="mt-6 grid gap-4 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                {trustPoints.map((point) => (
                  <li key={point} className="flex min-h-[5.4rem] items-start gap-3 rounded-2xl border border-[#013762]/8 dark:border-[#B4DDE7]/15 bg-white/60 dark:bg-[#123149]/85 px-5 py-4 text-sm text-[#013762]/80 dark:text-[#CDDFE9] shadow-sm backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#0179B1] dark:text-[#7BDDDC]" aria-hidden="true" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-4 rounded-2xl border border-[#013762]/10 dark:border-[#B4DDE7]/20 bg-white/75 dark:bg-[#123149]/90 p-5 shadow-sm backdrop-blur sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-[1.2fr_1fr_1.05fr]">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[3.5rem] items-center gap-3 rounded-xl bg-white/55 dark:bg-[#173C52] px-3 text-sm text-[#013762]/85 dark:text-[#D5E8F0] hover:text-[#0179B1] transition-colors"
                >
                  <MessageCircle className="h-5 w-5 text-[#0179B1] dark:text-[#7BDDDC] shrink-0" aria-hidden="true" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY_NUMBER}</span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex min-h-[3.5rem] items-center gap-3 rounded-xl bg-white/55 dark:bg-[#173C52] px-3 text-sm text-[#013762]/85 dark:text-[#D5E8F0] hover:text-[#0179B1] transition-colors">
                  <Mail className="h-5 w-5 text-[#0179B1] dark:text-[#7BDDDC] shrink-0" aria-hidden="true" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
                <div className="flex min-h-[3.5rem] items-center gap-3 rounded-xl bg-white/55 dark:bg-[#173C52] px-3 text-sm text-[#013762]/85 dark:text-[#D5E8F0]">
                  <MapPin className="h-5 w-5 text-[#0179B1] dark:text-[#7BDDDC] shrink-0" aria-hidden="true" />
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
              aria-label="Formulario de contacto"
              className={`rounded-3xl border border-[#013762]/10 dark:border-[#B4DDE7]/20 bg-white dark:bg-[#123149] p-5 shadow-[0_24px_80px_rgba(1,55,98,0.12)] transition-all duration-700 ease-out delay-150 md:p-6 lg:p-7 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <div className="mb-5 flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#47DAD6]/12 text-[#0179B1] dark:text-[#7BDDDC]">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-2xl font-extrabold text-[#013762] dark:text-[#E7F2F7]">Envíanos tu idea</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#013762]/58 dark:text-[#B4CEDC]">
                    No necesitas tener todo definido. Con una descripción inicial podemos ayudarte a ordenar el alcance.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="absolute -left-[9999px]" aria-hidden="true">
                  <label htmlFor="contact-website">Deja este campo vacío</label>
                  <input id="contact-website" name="_honey" type="text" tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </div>
                <div>
                  <label htmlFor="nombre" className="mb-1.5 block text-sm font-bold text-[#013762] dark:text-[#E7F2F7]">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    placeholder="Tu nombre"
                    autoComplete="name"
                    maxLength={120}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-[#013762] dark:text-[#E7F2F7]">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="tu@correo.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                    className={inputClass}
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="mb-1.5 block text-sm font-bold text-[#013762] dark:text-[#E7F2F7]">
                    ¿Qué necesitas resolver?
                  </label>
                  <textarea
                    id="mensaje"
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    placeholder="Ej. Quiero automatizar cotizaciones, pedidos o seguimiento de clientes..."
                    required
                    rows={4}
                    maxLength={4000}
                    className={`${inputClass} resize-none`}
                  />
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#013762]/75 dark:text-[#C3D9E5]">
                Usaremos tu nombre, correo y mensaje para responder a tu solicitud. El envío pasa por FormSubmit hacia nuestro correo. Consulta el{" "}
                <Link to="/privacidad" className="font-semibold underline underline-offset-2 hover:text-[#0179B1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0179B1]">Aviso de Privacidad</Link>.
              </p>

              {status && (
                <p role={status.kind === "error" ? "alert" : "status"} className={`mt-4 rounded-lg px-4 py-3 text-sm leading-relaxed ${status.kind === "error" ? "bg-red-50 text-red-900 dark:bg-red-950/40 dark:text-red-100" : "bg-teal-50 text-[#013762] dark:bg-teal-950/40 dark:text-[#E7F2F7]"}`}>
                  {status.message}
                </p>
              )}

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
              Entaltek · Responsable: {RESPONSIBLE_NAME} · {LOCATION} · {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex items-center gap-5">
            <Link to="/privacidad" className="text-sm text-white/75 underline underline-offset-2 hover:text-[#47DAD6] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#47DAD6]">Privacidad</Link>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-[#47DAD6] transition-colors"
            aria-label="LinkedIn de Entaltek"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
