import { ArrowUpRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";
import { insights } from "@/lib/insights";
import { useInView } from "@/hooks/useInView";

const SolutionsSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section id="soluciones" className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-[#F5F9FC] flex items-center">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-28 right-[8%] h-[26rem] w-[26rem] rounded-full bg-[#47DAD6]/15 blur-[110px]" />
        <div className="absolute bottom-[-12rem] left-[-8rem] h-[30rem] w-[30rem] rounded-full bg-[#0179B1]/10 blur-[120px]" />
      </div>

      <div ref={ref} className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className={`grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
          <div className="max-w-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#013762] text-[#47DAD6] shadow-[0_12px_28px_rgba(1,55,98,0.18)]">
              <Lightbulb className="h-6 w-6" aria-hidden="true" />
            </div>
            <h2 className="mt-7 text-[clamp(2.2rem,4.6vw,4.4rem)] font-extrabold leading-[0.98] tracking-tight text-[#013762]">
              Soluciones e impacto
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#013762]/70">
              Compartimos aprendizajes que nacen de problemas reales y explicaciones prácticas para usar la tecnología con mejor criterio.
            </p>
            <p className="mt-5 max-w-lg text-sm leading-relaxed text-[#013762]/55">
              El tamaño de una solución no define su valor. Importa que haga más claro, seguro o sencillo el trabajo de alguien.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Link
                  key={insight.slug}
                  to={`/soluciones/${insight.slug}`}
                  className={`group flex min-h-[22rem] flex-col justify-between rounded-2xl border border-[#013762]/10 bg-white p-7 shadow-[0_16px_36px_rgba(1,55,98,0.08)] transition-all duration-500 hover:-translate-y-1 hover:border-[#0179B1]/40 hover:shadow-[0_22px_46px_rgba(1,55,98,0.14)] ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                  style={{ transitionDelay: inView ? `${180 + index * 130}ms` : "0ms" }}
                >
                  <div>
                    <Icon className="h-8 w-8 text-[#0179B1]" aria-hidden="true" />
                    <p className="mt-8 text-sm font-semibold text-[#004C7A]">{insight.category}</p>
                    <h3 className="mt-3 text-2xl font-bold leading-tight text-[#013762]">{insight.title}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-[#013762]/65">{insight.summary}</p>
                  </div>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#0179B1]">
                    Leer artículo <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
