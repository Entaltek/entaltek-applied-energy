import { Target, Eye } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in-up">
            Misión y Visión
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-smooth border border-border animate-slide-in-right">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-primary/10">
                  <Target className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Misión</h3>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Desarrollar soluciones tecnológicas que integren software, ciencia e ingeniería para 
                mejorar procesos empresariales y sociales, aportando valor real a nuestros clientes.
              </p>
            </div>
            
            <div className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl transition-smooth border border-border animate-slide-in-right" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-full bg-accent/10">
                  <Eye className="w-10 h-10 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Visión</h3>
              </div>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Convertirnos en una empresa referente en innovación tecnológica aplicada en Latinoamérica, 
                reconocida por nuestra excelencia técnica y compromiso humano.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
