import { Building2, Rocket, Factory } from "lucide-react";

const WhoWeHelp = () => {
  const audiences = [
    {
      icon: Building2,
      title: "Pymes",
      description: "Empresas que buscan digitalizar o automatizar procesos",
      primary: true
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Proyectos que requieren desarrollo desde cero",
      primary: true
    },
    {
      icon: Factory,
      title: "Industria",
      description: "Sector industrial",
      primary: false
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in-up">
            A Quién Ayudamos
          </h2>
          
          <p className="text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Acompañamos a quienes ven la tecnología como una herramienta para crecer, no como un obstáculo.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div
                  key={index}
                  className={`bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-smooth border ${
                    audience.primary ? 'border-primary/20' : 'border-border'
                  } animate-scale-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-full ${
                      audience.primary ? 'bg-primary/10' : 'bg-muted'
                    }`}>
                      <Icon className={`w-8 h-8 ${
                        audience.primary ? 'text-primary' : 'text-foreground/60'
                      }`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{audience.title}</h3>
                      <p className="text-foreground/70">{audience.description}</p>
                      {audience.primary && (
                        <span className="inline-block mt-3 text-xs font-semibold text-primary">
                          Público Primario
                        </span>
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
