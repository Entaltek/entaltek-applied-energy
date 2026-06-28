import { LayoutDashboard, Zap, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";

/* ─── Data ─────────────────────────────────────────────────────────────────── */

const painPoints = [
  "Excel manual",
  "Seguimiento por WhatsApp",
  "Reportes tardados",
  "Pedidos desordenados",
  "Documentos repetitivos",
];

const services = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Sistemas para operar mejor",
    bullets: "Clientes · pedidos · inventario · reportes · dashboards",
    accent: "#0179B1",
    accentAlpha: "rgba(1,121,177,",
    cyanAlpha: "rgba(71,218,214,",
  },
  {
    number: "02",
    icon: Zap,
    title: "Automatización de tareas repetitivas",
    bullets: "Correos · formularios · Excel · WhatsApp · documentos",
    accent: "#3F67C6",
    accentAlpha: "rgba(63,103,198,",
    cyanAlpha: "rgba(71,218,214,",
  },
  {
    number: "03",
    icon: Layers,
    title: "Apps y herramientas conectadas",
    bullets: "Web · móvil · APIs · pagos · notificaciones",
    accent: "#47DAD6",
    accentAlpha: "rgba(71,218,214,",
    cyanAlpha: "rgba(71,218,214,",
  },
];

const flowSteps = [
  { label: "Proceso manual", sub: "tareas repetitivas" },
  { label: "Sistema ordenado", sub: "digital y centralizado" },
  { label: "Automatización medible", sub: "eficiencia real" },
];

/* ─── Component ─────────────────────────────────────────────────────────────── */

const ServicesSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="servicios"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden flex items-center"
      style={{ background: "linear-gradient(160deg, #f7f9fc 0%, #eef4f9 60%, #f0f7ff 100%)" }}
    >
      {/* Decorative orbs */}
      <div
        className="absolute -top-24 -right-24 w-[360px] h-[360px] rounded-full blur-[80px] pointer-events-none"
        style={{ background: "rgba(1,121,177,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 -left-20 w-[280px] h-[280px] rounded-full blur-[70px] pointer-events-none"
        style={{ background: "rgba(71,218,214,0.06)" }}
        aria-hidden="true"
      />

      <div ref={ref} className="container mx-auto px-4 py-16 md:py-10 max-w-6xl">

        {/* ── Header ── */}
        <div
          className={`text-center mb-10 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#0179B1] mb-3">
            Lo que hacemos
          </p>
          <h2 className="font-bold text-[#0D2C42] leading-tight text-[clamp(1.75rem,3vw,2.6rem)] max-w-2xl mx-auto">
            Digitalizamos procesos que hoy te quitan tiempo
          </h2>
          <p className="mt-4 text-[1rem] text-[#0D2C42]/60 leading-relaxed max-w-xl mx-auto">
            Creamos sistemas, automatizaciones y apps que ordenan tu operación,
            reducen tareas manuales y conectan las herramientas que ya usas.
          </p>
        </div>

        {/* ── Pain points strip ── */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: inView ? "120ms" : "0ms" }}
        >
          {painPoints.map((pain) => (
            <span
              key={pain}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[0.72rem] font-medium border"
              style={{
                background: "rgba(13,44,66,0.04)",
                borderColor: "rgba(1,121,177,0.18)",
                color: "#345878",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full shrink-0"
                style={{ background: "#0179B1" }}
                aria-hidden="true"
              />
              {pain}
            </span>
          ))}
        </div>

        {/* ── Main grid: cards + flow ── */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-start">

          {/* Cards */}
          <div className="grid sm:grid-cols-3 gap-4">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <article
                  key={svc.number}
                  className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ease-out cursor-default ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                  style={{
                    transitionDelay: inView ? `${240 + i * 130}ms` : "0ms",
                    background: "rgba(255,255,255,0.80)",
                    borderColor: "rgba(13,44,66,0.09)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300"
                    style={{
                      background: `linear-gradient(90deg, ${svc.accent}, ${svc.accent}88)`,
                      opacity: 0.7,
                    }}
                  />
                  {/* Hover glow layer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{
                      background: `radial-gradient(circle at 30% 0%, ${svc.accentAlpha}0.06), transparent 70%)`,
                    }}
                  />

                  <div className="relative p-5 pt-6">
                    {/* Number watermark */}
                    <span
                      className="absolute top-4 right-4 text-[3.5rem] font-black leading-none select-none transition-colors duration-300"
                      style={{ color: `${svc.accentAlpha}0.06)` }}
                      aria-hidden="true"
                    >
                      {svc.number}
                    </span>

                    {/* Icon */}
                    <div
                      className="relative mb-4 w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                      style={{ background: `${svc.accentAlpha}0.12)` }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: svc.accent }}
                        aria-hidden="true"
                      />
                    </div>

                    {/* Content */}
                    <h3 className="text-[0.95rem] font-bold text-[#0D2C42] leading-snug mb-3">
                      {svc.title}
                    </h3>
                    <p className="text-[0.78rem] text-[#345878]/75 leading-relaxed">
                      {svc.bullets}
                    </p>
                  </div>

                  {/* Bottom hover line */}
                  <div
                    className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500 ease-out"
                    style={{ background: `linear-gradient(90deg, ${svc.accent}66, transparent)` }}
                  />
                </article>
              );
            })}
          </div>

          {/* Flow diagram — hidden on mobile, shown on lg+ */}
          <div
            className={`hidden lg:flex flex-col items-center gap-0 self-center transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"
            }`}
            style={{ transitionDelay: inView ? "580ms" : "0ms" }}
            aria-label="Flujo de transformación"
          >
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex flex-col items-center">
                {/* Step pill */}
                <div
                  className="relative flex flex-col items-center text-center px-5 py-3.5 rounded-2xl border w-44"
                  style={{
                    background:
                      i === 1
                        ? "rgba(1,121,177,0.08)"
                        : i === 2
                        ? "rgba(71,218,214,0.08)"
                        : "rgba(13,44,66,0.04)",
                    borderColor:
                      i === 1
                        ? "rgba(1,121,177,0.25)"
                        : i === 2
                        ? "rgba(71,218,214,0.30)"
                        : "rgba(13,44,66,0.12)",
                  }}
                >
                  {/* Step index dot */}
                  <span
                    className="absolute -top-2 -right-2 w-5 h-5 rounded-full text-[0.6rem] font-bold flex items-center justify-center text-white"
                    style={{
                      background:
                        i === 2 ? "#47DAD6" : i === 1 ? "#0179B1" : "#345878",
                    }}
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <p
                    className="text-[0.75rem] font-bold leading-tight"
                    style={{
                      color: i === 2 ? "#47DAD6" : i === 1 ? "#0179B1" : "#345878",
                    }}
                  >
                    {step.label}
                  </p>
                  <p className="text-[0.65rem] text-[#345878]/55 mt-0.5">{step.sub}</p>
                </div>
                {/* Connector arrow */}
                {i < flowSteps.length - 1 && (
                  <div className="flex flex-col items-center my-1" aria-hidden="true">
                    <div
                      className="w-px h-5"
                      style={{ background: "rgba(1,121,177,0.25)" }}
                    />
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none">
                      <path
                        d="M5 6L0 0h10L5 6z"
                        fill="rgba(1,121,177,0.35)"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <div
          className={`mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: inView ? "700ms" : "0ms" }}
        >
          {/* Flow steps mobile – horizontal pill row */}
          <div className="flex lg:hidden items-center gap-2 flex-wrap justify-center text-[0.68rem]">
            {flowSteps.map((step, i) => (
              <span key={step.label} className="flex items-center gap-1.5">
                <span
                  className="px-2.5 py-1 rounded-full font-semibold"
                  style={{
                    background:
                      i === 2
                        ? "rgba(71,218,214,0.12)"
                        : i === 1
                        ? "rgba(1,121,177,0.10)"
                        : "rgba(13,44,66,0.06)",
                    color: i === 2 ? "#47DAD6" : i === 1 ? "#0179B1" : "#345878",
                  }}
                >
                  {step.label}
                </span>
                {i < flowSteps.length - 1 && (
                  <span className="text-[#0179B1]/40" aria-hidden="true">→</span>
                )}
              </span>
            ))}
          </div>

          <button
            onClick={() =>
              document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
            }
            className="inline-flex items-center gap-2 font-semibold group text-[0.95rem] transition-colors duration-300 ml-auto"
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

      </div>
    </section>
  );
};

export default ServicesSection;
