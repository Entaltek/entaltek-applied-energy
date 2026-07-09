import { Atom, BrainCircuit, CheckCircle2, HeartHandshake, Scale, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const attributes = [
  "Automatización",
  "Sistemas a la medida",
  "Procesos claros",
  "Operación eficiente",
  "Tecnología humana",
];

const values = ["Responsabilidad", "Respeto", "Honestidad", "Puntualidad", "Lealtad"];

const principles = [
  {
    title: "Ingeniería aplicada",
    description:
      "No construimos por moda. Analizamos procesos, detectamos fricción y diseñamos soluciones con estructura.",
    Icon: BrainCircuit,
  },
  {
    title: "Tecnología humana",
    description:
      "La automatización no reemplaza el criterio de las personas; lo libera de tareas repetitivas.",
    Icon: HeartHandshake,
  },
  {
    title: "Soluciones proporcionales",
    description:
      "No todo necesita una plataforma gigante. Creamos lo necesario para que el negocio avance sin complejidad innecesaria.",
    Icon: Scale,
  },
  {
    title: "Confianza operativa",
    description:
      "Cuidamos claridad, trazabilidad, seguridad y continuidad para que la tecnología funcione en el día a día.",
    Icon: ShieldCheck,
  },
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
        <div className="absolute top-16 left-6 w-80 h-80 rounded-full bg-[#0179B1]/20 blur-[95px]" />
        <div className="absolute bottom-10 right-0 w-96 h-96 rounded-full bg-[#47DAD6]/10 blur-[110px]" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#47DAD6]/10" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#013762]/35 to-transparent" />
      </div>

      <div ref={ref} className="relative z-10 container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr] gap-10 xl:gap-16 items-center">
          <div>


            <h2 {...reveal(1, "text-white font-extrabold leading-tight text-[clamp(2.1rem,5vw,4.35rem)]")}>
              Creamos software que ordena,
              <br />
              <span className="bg-gradient-to-r from-white via-[#7de8e5] to-[#47DAD6] bg-clip-text text-transparent">
                automatiza y hace crecer tu operación
              </span>
            </h2>

            <p {...reveal(2, "mt-6 text-white/65 text-lg leading-relaxed max-w-xl")}>
              Diseñamos sistemas a la medida para convertir procesos manuales, dispersos o repetitivos en herramientas claras, útiles y fáciles de usar.
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
            <div className="grid md:grid-cols-2 gap-5">
              {principles.map(({ title, description, Icon }, index) => (
                <article
                  key={title}
                  {...reveal(
                    index + 2,
                    "group rounded-2xl border border-white/10 bg-white/[0.06] p-6 md:p-7 backdrop-blur-xl hover:border-[#47DAD6]/85 hover:bg-white/[0.08] transition-colors",
                  )}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#47DAD6]/10 text-[#47DAD6] group-hover:bg-[#47DAD6]/15">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/75">{description}</p>
                </article>
              ))}
            </div>

            <div
              {...reveal(
                6,
                "rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.04] p-5 md:p-6 backdrop-blur-xl",
              )}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#47DAD6]/10">
                    <CheckCircle2 className="h-5 w-5 text-[#47DAD6]" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white">Valores que sostienen el trabajo</h3>
                    <p className="text-sm text-white/50">La base ética se mantiene; el foco está en resolver bien.</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {values.map((value) => (
                    <span key={value} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-medium text-white/70">
                      {value}
                    </span>
                  ))}
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
