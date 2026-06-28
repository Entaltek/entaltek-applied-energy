import {
  LayoutDashboard,
  Zap,
  Layers,
  BarChart2,
  Wrench,
  Lightbulb,
  Target,
  ScanSearch,
  LayoutTemplate,
  Code2,
  ShieldCheck,
  LifeBuoy,
  CheckCircle2,
} from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const services = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Sistemas para operar mejor",
    bullets: "Clientes · pedidos · inventario · reportes · dashboards",
    accent: "#0179B1",
    accentRgb: "1,121,177",
    tintBg: "rgba(1,121,177,0.05)",
    tintBorder: "rgba(1,121,177,0.18)",
  },
  {
    number: "02",
    icon: Zap,
    title: "Automatización de tareas repetitivas",
    bullets: "Correos · formularios · Excel · WhatsApp · documentos",
    accent: "#3F67C6",
    accentRgb: "63,103,198",
    tintBg: "rgba(63,103,198,0.05)",
    tintBorder: "rgba(63,103,198,0.18)",
  },
  {
    number: "03",
    icon: Layers,
    title: "Apps y herramientas conectadas",
    bullets: "Web · móvil · APIs · pagos · notificaciones",
    accent: "#0DB8B4",
    accentRgb: "13,184,180",
    tintBg: "rgba(71,218,214,0.05)",
    tintBorder: "rgba(71,218,214,0.20)",
  },
  {
    number: "04",
    icon: BarChart2,
    title: "Dashboards y control operativo",
    bullets: "Indicadores · seguimiento · métricas · visibilidad",
    accent: "#004C7A",
    accentRgb: "0,76,122",
    tintBg: "rgba(0,76,122,0.05)",
    tintBorder: "rgba(0,76,122,0.16)",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Herramientas a la medida",
    bullets: "Portales · paneles · formularios · procesos internos",
    accent: "#0E7490",
    accentRgb: "14,116,144",
    tintBg: "rgba(14,116,144,0.05)",
    tintBorder: "rgba(14,116,144,0.18)",
  },
];

const workflowSteps = [
  {
    n: "1",
    icon: Lightbulb,
    title: "Aterrizamos la idea",
    desc: "Escuchamos tu operación, tus problemas y lo que quieres lograr.",
    color: "#0D2C42",
    ring: "rgba(13,44,66,0.15)",
  },
  {
    n: "2",
    icon: Target,
    title: "Definimos lo mínimo valioso",
    desc: "Identificamos qué solución pequeña puede darte valor real primero.",
    color: "#0179B1",
    ring: "rgba(1,121,177,0.20)",
  },
  {
    n: "3",
    icon: ScanSearch,
    title: "Entendemos el alcance",
    desc: "Revisamos procesos, datos, usuarios, herramientas y restricciones.",
    color: "#0179B1",
    ring: "rgba(1,121,177,0.20)",
  },
  {
    n: "4",
    icon: LayoutTemplate,
    title: "Estructuramos y diseñamos",
    desc: "Convertimos la necesidad en flujo, pantallas, reglas y arquitectura.",
    color: "#3F67C6",
    ring: "rgba(63,103,198,0.20)",
  },
  {
    n: "5",
    icon: Code2,
    title: "Desarrollamos e iteramos",
    desc: "Construimos por etapas y ajustamos contigo antes de crecer el alcance.",
    color: "#3F67C6",
    ring: "rgba(63,103,198,0.20)",
  },
  {
    n: "6",
    icon: ShieldCheck,
    title: "Probamos y validamos",
    desc: "Verificamos que funcione, sea entendible y resuelva el problema real.",
    color: "#0DB8B4",
    ring: "rgba(13,184,180,0.22)",
  },
  {
    n: "7",
    icon: LifeBuoy,
    title: "Acompañamos con soporte",
    desc: "Te apoyamos después de la entrega para ajustar, corregir y mejorar.",
    color: "#47DAD6",
    ring: "rgba(71,218,214,0.22)",
  },
];

const idealCases = [
  "Tu operación depende demasiado de Excel.",
  "Das seguimiento por WhatsApp sin orden.",
  "Pierdes tiempo copiando datos entre sistemas.",
  "Tus reportes tardan horas o días.",
  "El negocio creció y el proceso manual empieza a fallar.",
];

/* ─── Component ─────────────────────────────────────────────────────────────── */

const ServicesSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="servicios"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden flex items-center"
      style={{
        background:
          "linear-gradient(155deg, #f5f8fc 0%, #edf3f9 50%, #eef5ff 100%)",
      }}
    >
      {/* Ambient orbs */}
      <div
        className="absolute -top-20 right-0 w-[420px] h-[420px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(1,121,177,0.08)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "rgba(71,218,214,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/3 w-[200px] h-[200px] rounded-full blur-[100px] pointer-events-none"
        style={{ background: "rgba(63,103,198,0.05)" }}
        aria-hidden="true"
      />

      {/* ── Main container ── */}
      <div
        ref={ref}
        className="w-full px-6 xl:px-10 py-12 md:py-8 max-w-[1400px] mx-auto"
      >
        {/*
         * Grid:
         *   mobile  → 1 col (copy → timeline → cards)
         *   desktop → [left 340px | center 1fr | right 360px]
         */}
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr_360px] gap-8 lg:gap-8 xl:gap-12 items-start">

          {/* ══════════════════════════════════════════
              COLUMNA IZQUIERDA — copy + CTA
          ══════════════════════════════════════════ */}
          <div
            className={`flex flex-col gap-6 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "60ms" : "0ms" }}
          >
            {/* Eyebrow */}
            <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-[#0179B1]">
              Lo que hacemos
            </p>

            {/* Title */}
            <h2 className="font-extrabold text-[#0D2C42] leading-[1.1] text-[clamp(2rem,3.4vw,3.4rem)]">
              Digitalizamos procesos que hoy te quitan tiempo
            </h2>

            {/* Subtitle */}
            <p className="text-base lg:text-lg text-[#345878]/85 leading-relaxed">
              Creamos sistemas, automatizaciones y apps que ordenan tu
              operación, reducen tareas manuales y conectan las herramientas
              que ya usas.
            </p>

            {/* Ideal para cuando */}
            <div
              className="flex flex-col gap-3 mt-1 bg-[rgba(1,121,177,0.03)] border border-[rgba(1,121,177,0.12)] p-4 rounded-2xl"
              style={{ boxShadow: "0 4px 20px rgba(13,44,66,0.02)" }}
            >
              <p className="text-[0.78rem] font-bold uppercase tracking-wider text-[#0179B1]/90 mb-1">
                Ideal para cuando...
              </p>
              <ul className="flex flex-col gap-2.5">
                {idealCases.map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-4 h-4 text-[#0179B1] shrink-0 mt-[2px]"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-[0.88rem] text-[#345878] leading-snug">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust phrase */}
            <div
              className="flex gap-3 p-4 rounded-xl mt-1"
              style={{
                background: "rgba(71,218,214,0.07)",
                border: "1px solid rgba(71,218,214,0.25)",
              }}
            >
              <span
                className="shrink-0 w-[4px] rounded-full self-stretch"
                style={{ background: "rgba(71,218,214,0.7)" }}
                aria-hidden="true"
              />
              <p className="text-[0.85rem] font-medium italic leading-snug text-[#345878]">
                Si no hay un proceso que realmente valga la pena automatizar,
                te lo diremos.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 font-bold group text-base w-fit transition-colors duration-300 mt-2"
              style={{ color: "#0179B1" }}
            >
              Cuéntanos qué proceso quieres mejorar
              <span
                className="transition-transform duration-300 group-hover:translate-x-1.5"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </div>

          {/* ══════════════════════════════════════════
              COLUMNA CENTRAL — cómo trabajamos (timeline)
          ══════════════════════════════════════════ */}
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: inView ? "180ms" : "0ms" }}
          >
            {/* Section label */}
            <div className="flex items-center gap-3 mb-7">
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(1,121,177,0.30))",
                }}
                aria-hidden="true"
              />
              <p className="text-[0.75rem] font-bold uppercase tracking-[0.22em] text-[#0179B1] shrink-0">
                Cómo trabajamos
              </p>
              <div
                className="h-px flex-1"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(1,121,177,0.30), transparent)",
                }}
                aria-hidden="true"
              />
            </div>

            {/* Timeline */}
            <ol
              className="relative flex flex-col gap-1.5"
              aria-label="Proceso de trabajo Entaltek"
            >
              {workflowSteps.map((step, i) => {
                const isLast = i === workflowSteps.length - 1;
                const StepIcon = step.icon;
                const delayMs = inView ? 220 + i * 75 : 0;

                return (
                  <li
                    key={step.n}
                    className={`relative flex gap-4 transition-all duration-500 ease-out ${
                      inView
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${delayMs}ms` }}
                  >
                    {/* Node column */}
                    <div className="flex flex-col items-center shrink-0 w-10">
                      {/* Icon node */}
                      <div
                        className="relative w-10 h-10 rounded-full flex items-center justify-center shrink-0 z-10"
                        style={{
                          background: step.color,
                          boxShadow: `0 0 0 3px ${step.ring}, 0 2px 8px rgba(0,0,0,0.12)`,
                        }}
                      >
                        <StepIcon
                          className="w-[1.125rem] h-[1.125rem] text-white"
                          aria-hidden="true"
                          strokeWidth={2.2}
                        />
                        {/* Step number badge */}
                        <span
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full text-[0.55rem] font-bold flex items-center justify-center text-white leading-none"
                          style={{ background: "rgba(13,44,66,0.85)" }}
                          aria-hidden="true"
                        >
                          {step.n}
                        </span>
                      </div>

                      {/* Connector line */}
                      {!isLast && (
                        <div
                          className="w-[2px] mt-1.5 mb-1 flex-1"
                          style={{
                            background: `linear-gradient(180deg, ${step.color}55, ${step.color}18)`,
                            minHeight: "20px",
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Content */}
                    <div className={`pb-5 ${isLast ? "pb-0" : ""} pt-0.5 min-w-0`}>
                      <p className="text-base font-bold text-[#0D2C42] leading-snug">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-[#345878]/75 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* ══════════════════════════════════════════
              COLUMNA DERECHA — 5 service cards
          ══════════════════════════════════════════ */}
          <div className="flex flex-col gap-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              const delay = inView ? 260 + i * 100 : 0;
              return (
                <article
                  key={svc.number}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out cursor-default hover:-translate-y-0.5 hover:shadow-lg ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{
                    transitionDelay: `${delay}ms`,
                    background: svc.tintBg,
                    borderColor: svc.tintBorder,
                    boxShadow: "0 2px 10px rgba(13,44,66,0.06)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-[4px] transition-all duration-300"
                    style={{
                      background: `linear-gradient(180deg, ${svc.accent}, ${svc.accent}44)`,
                    }}
                  />

                  {/* Hover glow overlay */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(ellipse at 10% 50%, rgba(${svc.accentRgb},0.12), transparent 70%)`,
                    }}
                  />

                  {/* Number watermark */}
                  <span
                    className="absolute top-2 right-4 text-[3.2rem] font-black leading-none select-none pointer-events-none transition-colors duration-300"
                    style={{ color: `rgba(${svc.accentRgb},0.08)` }}
                    aria-hidden="true"
                  >
                    {svc.number}
                  </span>

                  <div className="relative flex items-center gap-4 px-6 py-5 pl-8">
                    {/* Icon */}
                    <div
                      className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{
                        background: `rgba(${svc.accentRgb},0.14)`,
                      }}
                    >
                      <Icon
                        className="w-[1.3rem] h-[1.3rem]"
                        style={{ color: svc.accent }}
                        aria-hidden="true"
                        strokeWidth={2}
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0 pr-4">
                      <h3 className="text-base font-bold text-[#0D2C42] leading-snug">
                        {svc.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: `rgba(${svc.accentRgb},0.78)` }}>
                        {svc.bullets}
                      </p>
                    </div>
                  </div>

                  {/* Bottom line on hover */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{
                      background: `linear-gradient(90deg, ${svc.accent}60, transparent)`,
                    }}
                  />
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
