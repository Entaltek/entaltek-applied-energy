import { LayoutDashboard, Bot, Smartphone } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const services = [
  {
    number: "01",
    icon: LayoutDashboard,
    title: "Desarrollo SaaS a medida",
    bullets: ["React/TypeScript + Supabase", "Multi-tenant desde el diseño", "Integraciones con bots y APIs"],
  },
  {
    number: "02",
    icon: Bot,
    title: "Automatización con IA",
    bullets: ["Pipelines n8n", "Triage de tickets con LLM", "Migración Make→n8n", "Documentos automáticos"],
  },
  {
    number: "03",
    icon: Smartphone,
    title: "Apps móviles Flutter",
    bullets: ["Android e iOS", "Integración con APIs REST", "Maps, pagos y notificaciones"],
  },
];

const ServicesSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="servicios"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-white flex items-center"
    >
      {/* Detalle decorativo de fondo */}
      <div
        className="absolute -top-32 -right-32 w-[420px] h-[420px] rounded-full bg-[#0179B1]/[0.05] blur-[60px]"
        aria-hidden="true"
      />

      <div ref={ref} className="container mx-auto px-4 py-24 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Izquierda: título e intro, entra desde la izquierda */}
          <div
            className={`transition-all duration-700 ease-out ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <p className="text-[0.75rem] font-semibold uppercase tracking-[0.15em] text-[#0179B1] mb-4">
              Lo que hacemos
            </p>
            <h2 className="font-bold text-[#013762] leading-tight text-[clamp(1.8rem,3vw,2.8rem)]">
              Construimos el software que tu negocio necesita
            </h2>
            <p className="mt-6 text-lg text-[#013762]/70 leading-relaxed">
              No soluciones genéricas. Cada sistema sale del entendimiento real del problema.
            </p>
            <button
              onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-8 inline-flex items-center gap-2 text-[#0179B1] font-semibold group"
            >
              Cuéntanos tu caso
              <span className="transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true">
                →
              </span>
            </button>
          </div>

          {/* Derecha: cards apiladas, entran en cascada desde la derecha */}
          <div className="space-y-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.number}
                  className={`group relative overflow-hidden rounded-r-xl border-l-[3px] border-[#0179B1] bg-[#f8fafc] p-6 transition-all duration-500 ease-out hover:border-[#47DAD6] hover:bg-[#f0f9ff] hover:translate-x-1.5 hover:shadow-lg hover:shadow-[#0179B1]/10 ${
                    inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: inView ? `${150 + index * 130}ms` : "0ms" }}
                >
                  <span
                    className="absolute top-2 right-4 text-[4rem] font-black leading-none text-[#0179B1]/[0.08] select-none transition-colors duration-300 group-hover:text-[#47DAD6]/[0.18]"
                    aria-hidden="true"
                  >
                    {service.number}
                  </span>
                  <div className="relative flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#0179B1]/10 text-[#0179B1] shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <Icon className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#013762]">{service.title}</h3>
                      <p className="mt-2 text-sm text-[#013762]/60 leading-relaxed">
                        {service.bullets.join(" · ")}
                      </p>
                    </div>
                  </div>
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
