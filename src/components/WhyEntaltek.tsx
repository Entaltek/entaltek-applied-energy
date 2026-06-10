import { Cog, CheckCircle, Layers, MapPin } from "lucide-react";

const WhyEntaltek = () => {
  const reasons = [
    {
      icon: Cog,
      title: "Precisión de ingeniería",
      description:
        "Venimos de la mecatrónica: sistemas donde mecánica, electrónica y software tienen que funcionar juntos, sin margen para improvisar. Diseñamos software con esa misma disciplina.",
    },
    {
      icon: CheckCircle,
      title: "Honestidad técnica",
      description:
        "Te decimos qué se puede, qué no y cuánto cuesta antes de empezar. Si una hoja de cálculo resuelve tu problema, te lo vamos a decir.",
    },
    {
      icon: Layers,
      title: "Tecnología apropiada",
      description:
        "React, Supabase, n8n, Flutter: stack moderno elegido por lo que el problema pide, no por moda. Sin sobre-ingeniería que luego nadie puede mantener.",
    },
    {
      icon: MapPin,
      title: "Cercanía",
      description:
        "Estamos en León, Guanajuato. Hablas directo con quien diseña y construye tu sistema, en tu horario y en tu idioma.",
    },
  ];

  return (
    <section id="por-que-entaltek" className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 animate-fade-in-up">
            Por qué Entaltek
          </h2>

          <p className="text-xl text-center text-secondary-foreground/85 max-w-3xl mx-auto mb-12 animate-fade-in-up">
            El nombre viene de la entalpía. La idea también:
          </p>

          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-center max-w-4xl mx-auto mb-16 animate-fade-in-up">
            "Como la entalpía, transformamos conocimiento y presión en{" "}
            <span className="font-bold text-accent">energía aplicada</span> para crear soluciones valiosas."
          </blockquote>

          <div className="grid sm:grid-cols-2 gap-6">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="bg-background/5 backdrop-blur-sm rounded-2xl p-8 border border-secondary-foreground/15 hover:border-accent/50 transition-smooth animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-accent/15">
                      <Icon className="w-7 h-7 text-accent" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold">{reason.title}</h3>
                  </div>
                  <p className="text-secondary-foreground/80 leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-lg text-secondary-foreground/85 mt-12 max-w-3xl mx-auto animate-fade-in-up">
            Trabajamos con PyMEs y startups que ven la tecnología como una herramienta
            para crecer, no como un gasto que hay que sufrir.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyEntaltek;
