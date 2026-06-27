import { Atom, CheckCircle2, Palette, Type } from "lucide-react";

const attributes = [
  "Energía Aplicada",
  "Ciencia e Ingeniería",
  "Humanidad",
  "Adaptabilidad",
  "Proporción e Inteligencia",
];

const values = ["Responsabilidad", "Respeto", "Honestidad", "Puntualidad", "Lealtad"];

const colors = [
  { name: "Azul Brillante", hex: "#0179B1", role: "Primario y texto destacado" },
  { name: "Azul Marino", hex: "#013762", role: "Fondos oscuros y profundidad" },
  { name: "Azul Cielo Claro", hex: "#47DAD6", role: "Acentos, energía y frescura" },
  { name: "Azul Técnico", hex: "#004C7A", role: "Contornos, botones y detalles" },
  { name: "Blanco", hex: "#FFFFFF", role: "Fondo principal y contraste" },
];

const BrandIdentity = () => {
  return (
    <section id="brand" className="py-24 bg-secondary text-secondary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-accent mb-4">
              Identidad de marca
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">La energía detrás de Entaltek</h2>
            <p className="text-xl text-white/75 leading-relaxed">
              Nuestra marca combina ciencia, ingeniería y trato humano para construir tecnología clara, confiable y cercana.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 md:p-10 backdrop-blur-sm shadow-lg animate-scale-in">
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-accent/15 mb-6">
                <Atom className="w-9 h-9 text-accent" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">ADN de marca</h3>
              <p className="text-lg text-white/80 leading-relaxed mb-8">
                Como la entalpía, tomamos la energía interna del conocimiento y la combinamos con la presión de los desafíos reales para generar soluciones valiosas.
              </p>

              <div className="flex flex-wrap gap-3">
                {attributes.map((attribute) => (
                  <span key={attribute} className="rounded-full border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent">
                    {attribute}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white text-secondary p-8 md:p-10 shadow-lg animate-scale-in" style={{ animationDelay: "0.15s" }}>
              <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 mb-6">
                <CheckCircle2 className="w-9 h-9 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Valores que guían cada entrega</h3>
              <p className="text-secondary/75 leading-relaxed mb-8">
                La tecnología debe estar al servicio de las personas: potenciar lo que ya hacen bien y ayudarles a crecer sin perder su esencia.
              </p>

              <div className="grid sm:grid-cols-2 gap-3">
                {values.map((value) => (
                  <div key={value} className="rounded-xl bg-muted px-4 py-3 font-semibold text-secondary">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 md:p-10 backdrop-blur-sm animate-fade-in-up">
              <div className="flex items-center gap-3 mb-6">
                <Palette className="w-7 h-7 text-accent" />
                <h3 className="text-2xl font-bold">Paleta visual</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {colors.map((color) => (
                  <div key={color.hex} className="rounded-xl overflow-hidden bg-white text-secondary shadow-md">
                    <div className="h-20" style={{ backgroundColor: color.hex }} />
                    <div className="p-4">
                      <p className="font-bold text-sm">{color.name}</p>
                      <p className="font-mono text-xs text-secondary/70 mt-1">{color.hex}</p>
                      <p className="text-xs text-secondary/70 mt-3 leading-relaxed">{color.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-8 md:p-10 backdrop-blur-sm animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              <div className="flex items-center gap-3 mb-6">
                <Type className="w-7 h-7 text-accent" />
                <h3 className="text-2xl font-bold">Tipografía</h3>
              </div>
              <p className="text-white/75 leading-relaxed mb-6">
                La identidad original define Exo 2 como fuente de marca, con personalización en la “A” y la “K”. En web mantenemos una lectura limpia, tecnológica y accesible.
              </p>
              <div className="rounded-xl bg-white text-secondary p-6">
                <p className="text-sm text-secondary/60 mb-2">Muestra visual</p>
                <p className="text-3xl font-bold tracking-wide">ENTALTEK</p>
                <p className="text-sm text-secondary/70 mt-2">Energía aplicada a la innovación tecnológica</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandIdentity;
