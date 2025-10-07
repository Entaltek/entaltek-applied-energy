import { Shield, Heart, CheckCircle, Clock, Handshake } from "lucide-react";

const Values = () => {
  const values = [
    {
      icon: Shield,
      title: "Responsabilidad",
      description: "Compromiso con cada proyecto y cliente"
    },
    {
      icon: Heart,
      title: "Respeto",
      description: "Valoramos la diversidad y las ideas"
    },
    {
      icon: CheckCircle,
      title: "Honestidad",
      description: "Transparencia en cada acción"
    },
    {
      icon: Clock,
      title: "Puntualidad",
      description: "Cumplimiento de tiempos acordados"
    },
    {
      icon: Handshake,
      title: "Lealtad",
      description: "Relaciones duraderas y confiables"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Nuestros Valores
          </h2>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition-smooth border border-border animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
