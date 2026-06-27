import { ArrowRight, FileSpreadsheet, Home, Store, Workflow } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: FileSpreadsheet,
    title: "Entaltek CFDI",
    status: "MVP en validación",
    description:
      "Visor de CFDI y conversor de XML/ZIP a Excel para revisar facturas, conceptos, impuestos y relaciones sin capturar todo a mano.",
    bullets: ["Carga por lote", "Dashboard y filtros", "Excel organizado"],
  },
  {
    icon: Workflow,
    title: "Automatización operativa",
    status: "Servicio principal",
    description:
      "Diseñamos flujos para reducir tareas repetitivas: reportes, correos, formularios, archivos Excel, CRM, WhatsApp, APIs y backoffice.",
    bullets: ["APIs y webhooks", "Workers y procesos", "Documentación clara"],
  },
  {
    icon: Store,
    title: "Gestión para talleres",
    status: "En diseño",
    description:
      "Sistema para talleres de serigrafía, sublimación, impresión y negocios similares: clientes, pedidos, anticipos, saldos e ingresos.",
    bullets: ["Pedidos y clientes", "Ingresos y egresos", "Páginas web conectadas"],
  },
  {
    icon: Home,
    title: "Marketplace de rentas",
    status: "Idea en discovery",
    description:
      "Portal local para rentas con publicaciones completas: fotos, información clara, requisitos, precio, disponibilidad y contacto ordenado.",
    bullets: ["Fichas completas", "Contacto por WhatsApp", "Filtro de interesados"],
  },
];

const Solutions = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="solutions" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
              Soluciones Entaltek
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tecnología que baja a operación real</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Creamos productos y automatizaciones para negocios que necesitan ordenar procesos, ahorrar tiempo y vender mejor sin convertir la tecnología en un obstáculo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <article
                  key={solution.title}
                  className="group bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-smooth border border-border animate-scale-in"
                  style={{ animationDelay: `${index * 0.12}s` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                      <Icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-smooth" />
                    </div>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-secondary">
                      {solution.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{solution.title}</h3>
                  <p className="text-foreground/75 leading-relaxed mb-6">{solution.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {solution.bullets.map((bullet) => (
                      <span key={bullet} className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                        {bullet}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={scrollToContact}
                    className="inline-flex items-center text-primary font-semibold hover:gap-3 gap-2 transition-all"
                  >
                    Hablemos de esta solución
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </article>
              );
            })}
          </div>

          <div className="mt-12 rounded-2xl gradient-dark p-8 md:p-10 text-white text-center shadow-lg animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">¿Tienes un proceso manual que te quita horas cada semana?</h3>
            <p className="text-white/80 max-w-3xl mx-auto mb-6">
              Lo analizamos, lo convertimos en un flujo medible y construimos un MVP útil antes de prometer una plataforma gigante.
            </p>
            <Button onClick={scrollToContact} className="bg-accent text-secondary hover:bg-accent/90 font-semibold">
              Cuéntanos tu proceso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
