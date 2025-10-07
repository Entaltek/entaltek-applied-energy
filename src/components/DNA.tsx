import { Atom } from "lucide-react";

const DNA = () => {
  const keywords = [
    "Energía Aplicada",
    "Ciencia e Ingeniería",
    "Humanidad",
    "Adaptabilidad"
  ];

  return (
    <section className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/20 mb-8 animate-scale-in">
            <Atom className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in-up">
            Nuestro ADN
          </h2>
          
          <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            "Como la entalpía, transformamos conocimiento y presión en{" "}
            <span className="font-bold text-primary-foreground">energía aplicada</span> para crear soluciones valiosas."
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {keywords.map((keyword, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-background/10 backdrop-blur-sm rounded-full text-sm md:text-base font-medium border border-primary-foreground/20 hover:border-primary-foreground/40 hover:bg-background/20 transition-smooth"
              >
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DNA;
