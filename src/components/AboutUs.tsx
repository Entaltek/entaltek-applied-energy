import { Zap, Code, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in-up">Quiénes Somos</h2>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-lg animate-scale-in">
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8">
              <span className="font-semibold text-primary">ENTALTEK</span> es una empresa de desarrollo tecnológico con
              visión integral. Creamos software sólido, eficiente y humano para pequeñas y medianas empresas que buscan
              adaptarse al mundo digital sin perder su esencia.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                <div className="p-4 rounded-full bg-primary/10">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Energía Aplicada</h3>
                <p className="text-sm text-muted-foreground">Transformamos conocimiento en soluciones prácticas</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                <div className="p-4 rounded-full bg-primary/10">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Ciencia e Ingeniería</h3>
                <p className="text-sm text-muted-foreground">Integramos metodologías técnicas y científicas</p>
              </div>

              <div className="flex flex-col items-center text-center space-y-3 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-smooth">
                <div className="p-4 rounded-full bg-primary/10">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg">Humanidad</h3>
                <p className="text-sm text-muted-foreground">Tecnología accesible, cercana y comprometida</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
