import { ClipboardCheck, Code2, LineChart } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "1. Entendemos el cuello de botella",
    description:
      "Mapeamos cómo trabaja hoy el negocio: quién captura, dónde se pierde tiempo, qué se repite y qué datos se necesitan para decidir.",
  },
  {
    icon: Code2,
    title: "2. Construimos un MVP útil",
    description:
      "Creamos una primera versión funcional: formularios, dashboards, automatizaciones, integraciones o herramientas internas listas para probar.",
  },
  {
    icon: LineChart,
    title: "3. Medimos y mejoramos",
    description:
      "Revisamos ahorro de tiempo, errores evitados y adopción real. Después iteramos solo lo que sí mueve la aguja del negocio.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center rounded-full bg-accent/15 px-4 py-2 text-sm font-semibold text-secondary mb-4">
              Método de trabajo
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Menos promesas, más avance medible</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              No empezamos vendiendo sistemas enormes. Empezamos con problemas concretos, entregas pequeñas y evidencia de valor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-xl transition-smooth animate-scale-in"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
