import { Cog, ShieldCheck, Layers, MapPin } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const reasons = [
  {
    icon: Cog,
    title: "Precisión de ingeniería",
    description: "Background en mecatrónica aplicado a cada decisión de arquitectura.",
  },
  {
    icon: ShieldCheck,
    title: "Honestidad técnica",
    description: "Claims calibrados. Sin inflar lo que hacemos ni prometer lo que no podemos entregar.",
  },
  {
    icon: Layers,
    title: "Tecnología apropiada",
    description: "Usamos la herramienta correcta para cada problema. No la de moda.",
  },
  {
    icon: MapPin,
    title: "Cercanía local",
    description: "León, Guanajuato. Disponibles para reunión, no solo para videollamada.",
  },
];

const hexagons = [
  { size: 120, top: "12%", left: "8%" },
  { size: 80, top: "70%", left: "14%" },
  { size: 160, top: "20%", left: "82%" },
  { size: 90, top: "78%", left: "78%" },
  { size: 60, top: "45%", left: "92%" },
];

const Hexagon = ({ size, top, left }: { size: number; top: string; left: string }) => (
  <svg
    viewBox="0 0 32 36"
    width={size}
    height={(size * 36) / 32}
    className="absolute"
    style={{ top, left }}
    aria-hidden="true"
  >
    <path
      d="M16 2 30 10v16L16 34 2 26V10L16 2Z"
      stroke="#47DAD6"
      strokeOpacity="0.06"
      strokeWidth="1.5"
      fill="none"
    />
  </svg>
);

const WhySection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      id="por-que-entaltek"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-[#013762] flex items-center"
    >
      {hexagons.map((hexagon, index) => (
        <Hexagon key={index} {...hexagon} />
      ))}

      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-4 py-24 max-w-[700px] transition-all duration-700 ease-out ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
      >
        <h2 className="sr-only">Por qué Entaltek</h2>

        <blockquote className="relative text-center">
          <span
            className="absolute -top-10 left-1/2 -translate-x-1/2 text-8xl font-bold text-[#47DAD6]/30 select-none leading-none"
            aria-hidden="true"
          >
            "
          </span>
          <p className="text-[1.3rem] leading-[1.7] italic text-white">
            La entalpía mide la energía disponible en un sistema. En Entaltek, medimos la
            energía aplicada a cada problema — sin desperdicio, sin adornos.
          </p>
        </blockquote>

        <div className="mt-14 grid sm:grid-cols-2 gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div key={reason.title} className="flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-[#47DAD6]/10 shrink-0">
                  <Icon className="w-6 h-6 text-[#47DAD6]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-bold text-white">{reason.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/55">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
