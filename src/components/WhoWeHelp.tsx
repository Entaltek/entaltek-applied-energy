import { Building2, Factory, Landmark, Palette, Rocket } from "lucide-react";

const WhoWeHelp = () => {
  const audiences = [
    {
      icon: Building2,
      title: "PyMEs y negocios locales",
      description: "Empresas que necesitan digitalizar operación, ventas, reportes o seguimiento de clientes.",
      primary: true,
    },
    {
      icon: Palette,
      title: "Talleres creativos y de impresión",
      description: "Serigrafía, sublimación, diseño, impresión y negocios que manejan pedidos, anticipos y entregas.",
      primary: true,
    },
    {
      icon: Landmark,
      title: "Despachos y áreas administrativas",
      description: "Equipos que viven entre XML, Excel, correos, documentos, validaciones y reportes repetitivos.",
      primary: true,
    },
    {
      icon: Rocket,
      title: "Startups y nuevos productos",
      description: "Proyectos que necesitan pasar de idea a MVP sin sobredimensionar alcance ni costo.",
      primary: false,
    },
    {
      icon: Factory,
      title: "Operaciones industriales",
      description: "Procesos internos que requieren trazabilidad, tableros, captura de datos o integraciones.",
      primary: false,
    },
  ];

  return (
    <section id="audiences" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in-up">A quién ayudamos</h2>

          <p
            className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Trabajamos con personas que ya sienten el costo de operar a mano y quieren una solución práctica, no solo una página bonita.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div
                  key={audience.title}
                  className={`bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-smooth border ${
                    audience.primary ? "border-primary/20" : "border-border"
                  } animate-scale-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-full ${audience.primary ? "bg-primary/10" : "bg-muted"}`}>
                      <Icon className={`w-8 h-8 ${audience.primary ? "text-primary" : "text-foreground/60"}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                      <p className="text-foreground/70">{audience.description}</p>
                      {audience.primary && (
                        <span className="inline-block mt-3 text-xs font-semibold text-primary">Enfoque prioritario</span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
