import { Atom, CheckCircle2, Palette, Type } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const attributes = [
  "Energía Aplicada",
  "Ciencia e Ingeniería",
  "Humanidad",
  "Adaptabilidad",
  "Proporción e Inteligencia",
];

const values = ["Responsabilidad", "Respeto", "Honestidad", "Puntualidad", "Lealtad"];

const colors = [
  { name: "Azul Brillante", hex: "#0179B1", role: "Primario" },
  { name: "Azul Marino", hex: "#013762", role: "Profundidad" },
  { name: "Azul Cielo", hex: "#47DAD6", role: "Acento" },
  { name: "Azul Técnico", hex: "#004C7A", role: "Detalle" },
];

const BrandAdnSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const reveal = (index: number, className = "") => ({
    className: `${className} transition-all duration-700 ease-out ${
      inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`,
    style: { transitionDelay: inView ? `${index * 120}ms` : "0ms" },
  });

  return (
    <section
      id="adn-marca"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-[#011627] flex items-center"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 left-8 w-72 h-72 rounded-full bg-[#0179B1]/20 blur-[90px]" />
        <div className="absolute bottom-12 right-0 w-80 h-80 rounded-full bg-[#47DAD6]/10 blur-[100px]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#47DAD6]/20 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-10 xl:gap-16 items-center">
          <div>
            <span
              {...reveal(
                0,
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#47DAD6]/35 text-[#47DAD6] text-sm tracking-wide mb-6",
              )}
            >
              <Atom className="w-4 h-4" aria-hidden="true" />
              ADN de marca
            </span>

            <h2 {...reveal(1, "text-white font-extrabold leading-tight text-[clamp(2.1rem,5vw,4.25rem)]")}>
              Energía aplicada
              <br />
              <span className="bg-gradient-to-r from-white via-[#7de8e5] to-[#47DAD6] bg-clip-text text-transparent">
                con propósito humano
              </span>
            </h2>

            <p {...reveal(2, "mt-6 text-white/60 text-lg leading-relaxed max-w-xl")}>
              Como la entalpía, tomamos la energía interna del conocimiento y la combinamos con la presión de los desafíos reales para crear soluciones valiosas.
            </p>

            <div {...reveal(3, "mt-8 flex flex-wrap gap-3")}>
              {attributes.map((attribute) => (
                <span
                  key={attribute}
                  className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-medium text-white/80 hover:border-[#47DAD6]/50 hover:text-[#47DAD6] transition-colors"
                >
                  {attribute}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-5">
            <div
              {...reveal(
                2,
                "rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-8 backdrop-blur-xl hover:border-[#47DAD6]/30 transition-colors",
              )}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2.5 rounded-lg bg-[#47DAD6]/10">
                  <CheckCircle2 className="w-6 h-6 text-[#47DAD6]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">Valores</h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {values.map((value) => (
                  <div key={value} className="rounded-xl bg-white/[0.05] border border-white/10 px-3 py-3 text-center text-sm text-white/75">
                    {value}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_0.75fr] gap-5">
              <div
                {...reveal(
                  3,
                  "rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-8 backdrop-blur-xl hover:border-[#47DAD6]/30 transition-colors",
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-[#47DAD6]/10">
                    <Palette className="w-6 h-6 text-[#47DAD6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Paleta</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {colors.map((color) => (
                    <div key={color.hex} className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.04]">
                      <div className="h-14" style={{ backgroundColor: color.hex }} />
                      <div className="p-3">
                        <p className="text-xs font-bold text-white">{color.name}</p>
                        <p className="mt-1 font-mono text-[0.68rem] text-white/45">{color.hex}</p>
                        <p className="mt-1 text-[0.68rem] text-[#47DAD6]/80">{color.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div
                {...reveal(
                  4,
                  "rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-8 backdrop-blur-xl hover:border-[#47DAD6]/30 transition-colors",
                )}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-lg bg-[#47DAD6]/10">
                    <Type className="w-6 h-6 text-[#47DAD6]" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Tipografía</h3>
                </div>
                <p className="text-sm leading-relaxed text-white/55">
                  Exo 2 es la base de la identidad tipográfica, con personalización en la “A” y la “K”.
                </p>
                <div className="mt-5 rounded-xl bg-white text-[#013762] p-4">
                  <p className="text-2xl font-extrabold tracking-wide">ENTALTEK</p>
                  <p className="mt-1 text-xs text-[#013762]/60">Energía aplicada a la innovación</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAdnSection;
