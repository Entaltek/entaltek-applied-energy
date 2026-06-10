import { AppWindow, Workflow, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: AppWindow,
      title: "Desarrollo SaaS a medida",
      description:
        "Sistemas web para operar tu negocio: agendas, inventarios, reportes, pagos. Construidos con React/TypeScript y Supabase, con autenticación, roles y datos en tiempo real desde el primer día.",
      bullets: [
        "Plataformas multi-tenant listas para crecer",
        "Paneles de administración y reportes PDF/Excel",
        "Integraciones con pasarelas de pago y APIs externas",
      ],
    },
    {
      icon: Workflow,
      title: "Automatización con IA",
      description:
        "Pipelines en n8n que quitan trabajo repetitivo de tu operación. Conectamos tus herramientas actuales y agregamos IA donde aporta valor medible, no donde está de moda.",
      bullets: [
        "Triage de tickets de soporte con LLM: clasificación, duplicados y SLAs",
        "Automatización de documentos y flujos de aprobación",
        "Migración de Make a n8n para reducir costos de licencia",
      ],
    },
    {
      icon: Smartphone,
      title: "Apps móviles Flutter",
      description:
        "Aplicaciones Android e iOS desde un solo código base. Mapas, datos en tiempo real y notificaciones, con publicación en tiendas incluida.",
      bullets: [
        "Un desarrollo, dos plataformas",
        "Integración con APIs y fuentes de datos oficiales",
        "Acompañamiento en publicación y actualizaciones",
      ],
    },
  ];

  return (
    <section id="servicios" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in-up">Servicios</h2>
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up">
            Tres formas concretas de trabajar contigo. Sin paquetes inflados: cotizamos
            sobre lo que tu operación necesita.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={service.title}
                  className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-smooth border border-border flex flex-col animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center p-4 rounded-xl bg-primary/10 mb-6 self-start">
                    <Icon className="w-8 h-8 text-primary" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/80 leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-2 mt-auto">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
