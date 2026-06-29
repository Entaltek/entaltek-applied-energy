import { Atom, Cog, HeartHandshake, Layers } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reasons = [
  {
    icon: Atom,
    title: "Energía aplicada",
    description:
      "Tomamos el conocimiento técnico y lo enfocamos en resolver desafíos reales, sin desperdicio ni adornos innecesarios.",
  },
  {
    icon: Cog,
    title: "Ciencia e ingeniería",
    description:
      "Diseñamos con estructura: analizamos procesos, modelamos soluciones y construimos sistemas pensados para operar.",
  },
  {
    icon: HeartHandshake,
    title: "Humanidad",
    description:
      "La tecnología debe servir a las personas. Por eso escuchamos, acompañamos y adaptamos cada solución a la realidad del negocio.",
  },
  {
    icon: Layers,
    title: "Proporción e inteligencia",
    description:
      "No todo necesita una plataforma enorme. Elegimos la solución adecuada para cada etapa, presupuesto y operación.",
  },
];

const hexagons = [
  { size: 120, top: "12%", left: "8%" },
  { size: 80, top: "70%", left: "14%" },
  { size: 150, top: "18%", left: "84%" },
  { size: 90, top: "78%", left: "78%" },
  { size: 60, top: "46%", left: "92%" },
];

const Hexagon = ({ size, top, left, index }: { size: number; top: string; left: string; index: number }) => (
  <svg
    viewBox="0 0 32 36"
    width={size}
    height={(size * 36) / 32}
    className="absolute animate-hex opacity-80"
    style={{ top, left, animationDuration: `${8 + index * 2}s`, animationDelay: `${index * 1.3}s` }}
    aria-hidden="true"
  >
    <path
      d="M16 2 30 10v16L16 34 2 26V10L16 2Z"
      stroke="#47DAD6"
      strokeOpacity="0.045"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const WhySection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  const reveal = (index: number, className = "") => ({
    className: `${className} transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`,
    style: { transitionDelay: inView ? `${index * 120}ms` : "0ms" },
  });

  return (
    <section
      id="por-que-entaltek"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-[#013762] flex items-center"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 h-80 w-80 rounded-full bg-[#0179B1]/18 blur-[95px]" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#47DAD6]/10 blur-[110px]" />
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#47DAD6]/20 to-transparent" />
        {hexagons.map((hexagon, index) => (
          <Hexagon key={index} {...hexagon} index={index} />
        ))}
      </div>

      <div ref={ref} className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span
            {...reveal(
              0,
              "inline-flex items-center gap-2 rounded-full border border-[#47DAD6]/30 bg-[#47DAD6]/10 px-4 py-1.5 text-sm font-semibold tracking-[0.28em] text-[#47DAD6] uppercase",
            )}
          >
            ADN Entaltek
          </span>

          <h2
            {...reveal(
              1,
              "mt-6 text-white font-extrabold leading-tight text-[clamp(2rem,4.8vw,4.6rem)]",
            )}
          >
            Tecnología con estructura,
            <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-white via-[#9cecea] to-[#47DAD6] bg-clip-text text-transparent">
              propósito y trato humano.
            </span>
          </h2>

          <p {...reveal(2, "mx-auto mt-6 max-w-3xl text-base md:text-lg leading-relaxed text-white/75")}>
            Creamos soluciones sólidas para transformar procesos sin borrar la esencia de cada negocio.
            Aplicamos ciencia, ingeniería y criterio práctico para convertir desafíos reales en sistemas claros,
            útiles y sostenibles.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.title}
                {...reveal(
                  index + 3,
                  "group min-h-[230px] rounded-2xl border border-white/10 bg-white/[0.055] p-6 backdrop-blur-xl hover:-translate-y-1 hover:border-[#47DAD6]/35 hover:bg-white/[0.075] hover:shadow-[0_0_24px_rgba(71,218,214,0.08)]",
                )}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-[#47DAD6]/20 bg-[#47DAD6]/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-6 w-6 text-[#47DAD6]" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-white">{reason.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{reason.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
