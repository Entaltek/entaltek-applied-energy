import { LayoutDashboard, Zap, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* ─── Data ──────────────────────────────────────────────────────────────────── */

const services = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Sistemas para operar mejor",
    bullets: "Clientes · pedidos · inventario · reportes · dashboards",
    accent: "#0179B1",
    accentAlpha: "rgba(1,121,177,",
  },
  {
    number: "02",
    icon: Zap,
    title: "Automatización de tareas repetitivas",
    bullets: "Correos · formularios · Excel · WhatsApp · documentos",
    accent: "#3F67C6",
    accentAlpha: "rgba(63,103,198,",
  },
  {
    number: "03",
    icon: Layers,
    title: "Apps y herramientas conectadas",
    bullets: "Web · móvil · APIs · pagos · notificaciones",
    accent: "#47DAD6",
    accentAlpha: "rgba(71,218,214,",
  },
];

const workflowSteps = [
  {
    n: "1",
    title: "Aterrizamos la idea",
    desc: "Escuchamos tu operación, tus problemas y lo que quieres lograr.",
  },
  {
    n: "2",
    title: "Definimos lo mínimo valioso",
    desc: "Identificamos qué solución pequeña puede darte valor real primero.",
  },
  {
    n: "3",
    title: "Entendemos el alcance",
    desc: "Revisamos procesos, datos, usuarios, herramientas y restricciones.",
  },
  {
    n: "4",
    title: "Estructuramos y diseñamos",
    desc: "Convertimos la necesidad en flujo, pantallas, reglas y arquitectura.",
  },
  {
    n: "5",
    title: "Desarrollamos e iteramos",
    desc: "Construimos por etapas y ajustamos contigo antes de crecer el alcance.",
  },
  {
    n: "6",
    title: "Probamos y validamos",
    desc: "Verificamos que funcione, sea entendible y resuelva el problema real.",
  },
  {
    n: "7",
    title: "Acompañamos con soporte",
    desc: "Te apoyamos después de la entrega para ajustar, corregir y mejorar.",
  },
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
          "linear-gradient(160deg, #f7f9fc 0%, #eef4f9 55%, #f0f7ff 100%)",
      }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full blur-[90px] pointer-events-none"
        style={{ background: "rgba(1,121,177,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 w-[260px] h-[260px] rounded-full blur-[70px] pointer-events-none"
        style={{ background: "rgba(71,218,214,0.05)" }}
        aria-hidden="true"
      />

      {/* ── Scroll container ── */}
      <div
        ref={ref}
        className="container mx-auto px-4 py-14 md:py-8 max-w-7xl w-full"
      >
        {/*
         * Layout:
         *   mobile  → single column (copy → cards → flow)
         *   desktop → 3 columns [left | center | right]
         */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-8 lg:gap-6 xl:gap-10 items-start">

          {/* ══ COLUMN LEFT — copy, CTA, trust ══ */}
          <div
            className={`flex flex-col gap-6 lg:sticky lg:top-0 transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: inView ? "80ms" : "0ms" }}
          >
            {/* Eyebrow */}
            <p className="text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#0179B1]">
              Lo que hacemos
            </p>

            {/* Title */}
            <h2 className="font-bold text-[#0D2C42] leading-tight text-[clamp(1.6rem,2.5vw,2.25rem)]">
              Digitalizamos procesos que hoy te quitan tiempo
            </h2>

            {/* Subtitle */}
            <p className="text-[0.9rem] text-[#345878]/75 leading-relaxed">
              Creamos sistemas, automatizaciones y apps que ordenan tu
              operación, reducen tareas manuales y conectan las herramientas
              que ya usas.
            </p>

            {/* Trust phrase */}
            <p
              className="text-[0.78rem] leading-snug italic border-l-2 pl-3"
              style={{
                color: "#345878",
                borderColor: "rgba(71,218,214,0.55)",
              }}
            >
              Si no hay un proceso que realmente valga la pena automatizar,
              te lo diremos.
            </p>

            {/* CTA */}
            <button
              onClick={() =>
                document
                  .getElementById("contacto")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-1.5 font-semibold group text-[0.875rem] w-fit transition-colors duration-300"
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

          {/* ══ COLUMN CENTER — service cards (vertical stack) ══ */}
          <div className="flex flex-col gap-3">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <article
                  key={svc.number}
                  className={`group relative overflow-hidden rounded-xl border transition-all duration-500 ease-out cursor-default ${
                    inView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: inView ? `${200 + i * 120}ms` : "0ms",
                    background: "rgba(255,255,255,0.82)",
                    borderColor: "rgba(13,44,66,0.08)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="absolute top-0 left-0 bottom-0 w-[3px]"
                    style={{
                      background: `linear-gradient(180deg, ${svc.accent}, ${svc.accent}55)`,
                    }}
                  />

                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl"
                    style={{
                      background: `radial-gradient(ellipse at 0% 50%, ${svc.accentAlpha}0.05), transparent 65%)`,
                    }}
                  />

                  {/* Number watermark */}
                  <span
                    className="absolute top-3 right-4 text-[3rem] font-black leading-none select-none pointer-events-none"
                    style={{ color: `${svc.accentAlpha}0.05)` }}
                    aria-hidden="true"
                  >
                    {svc.number}
                  </span>

                  <div className="relative flex items-center gap-4 px-5 py-4 pl-7">
                    {/* Icon */}
                    <div
                      className="shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ background: `${svc.accentAlpha}0.11)` }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: svc.accent }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Text */}
                    <div className="min-w-0">
                      <h3 className="text-[0.9rem] font-bold text-[#0D2C42] leading-snug">
                        {svc.title}
                      </h3>
                      <p className="mt-0.5 text-[0.73rem] text-[#345878]/65 leading-relaxed truncate">
                        {svc.bullets}
                      </p>
                    </div>
                  </div>

                  {/* Bottom slide-in line on hover */}
                  <div
                    className="absolute bottom-0 left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{
                      background: `linear-gradient(90deg, ${svc.accent}55, transparent)`,
                    }}
                  />
                </article>
              );
            })}
          </div>

          {/* ══ COLUMN RIGHT — consultive workflow timeline ══ */}
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: inView ? "560ms" : "0ms" }}
          >
            {/* Section label */}
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#0179B1]/80 mb-4">
              Cómo trabajamos
            </p>

            {/* Timeline */}
            <ol className="relative flex flex-col gap-0" aria-label="Proceso de trabajo">
              {workflowSteps.map((step, i) => {
                const isLast = i === workflowSteps.length - 1;
                const delayMs = inView ? 580 + i * 70 : 0;
                return (
                  <li
                    key={step.n}
                    className={`relative flex gap-3 transition-all duration-500 ease-out ${
                      inView
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${delayMs}ms` }}
                  >
                    {/* Node + connector */}
                    <div className="flex flex-col items-center shrink-0">
                      {/* Circle node */}
                      <div
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[0.6rem] font-bold text-white shrink-0 z-10"
                        style={{
                          background:
                            i < 2
                              ? "#0D2C42"
                              : i < 4
                              ? "#0179B1"
                              : "#3F67C6",
                          boxShadow:
                            i < 2
                              ? "none"
                              : i < 4
                              ? "0 0 0 3px rgba(1,121,177,0.15)"
                              : "0 0 0 3px rgba(63,103,198,0.15)",
                        }}
                      >
                        {step.n}
                      </div>
                      {/* Vertical connector line */}
                      {!isLast && (
                        <div
                          className="w-px flex-1 mt-1 mb-1"
                          style={{
                            background:
                              "linear-gradient(180deg, rgba(1,121,177,0.25), rgba(1,121,177,0.08))",
                            minHeight: "20px",
                          }}
                          aria-hidden="true"
                        />
                      )}
                    </div>

                    {/* Step content */}
                    <div className={`pb-4 ${isLast ? "pb-0" : ""} min-w-0`}>
                      <p className="text-[0.78rem] font-semibold text-[#0D2C42] leading-snug">
                        {step.title}
                      </p>
                      <p className="mt-0.5 text-[0.7rem] text-[#345878]/60 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
