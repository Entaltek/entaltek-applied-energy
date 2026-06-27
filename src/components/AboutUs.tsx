import { Code, Gauge, Users, Zap } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12 animate-fade-in-up">
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary mb-4">
              Quiénes somos
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Tecnología cercana para negocios que quieren avanzar</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Entaltek nace para unir ingeniería, software y criterio de negocio en soluciones pequeñas, útiles y escalables.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg animate-scale-in border border-border">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              Creamos herramientas digitales para empresas que trabajan con procesos manuales, hojas de cálculo, documentos, mensajes y tareas repetitivas. Nuestro objetivo es convertir ese caos operativo en sistemas claros, medibles y fáciles de usar.
            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-10">
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                <div className="p-4 rounded-full bg-primary/10">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Energía aplicada</h3>
                <p className="text-sm text-muted-foreground">Ideas convertidas en soluciones prácticas</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                <div className="p-4 rounded-full bg-primary/10">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Software sólido</h3>
                <p className="text-sm text-muted-foreground">APIs, dashboards, integraciones y productos web</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                <div className="p-4 rounded-full bg-primary/10">
                  <Gauge className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Impacto medible</h3>
                <p className="text-sm text-muted-foreground">Ahorro de tiempo, menos errores y mejor seguimiento</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                <div className="p-4 rounded-full bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Trato humano</h3>
                <p className="text-sm text-muted-foreground">Explicamos, acompañamos y documentamos cada entrega</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
