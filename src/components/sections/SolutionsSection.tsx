import { ArrowRight, ArrowUpRight } from "lucide-react";
import { newestInsights } from "@/lib/insights";
import TransitionLink from "@/components/navigation/TransitionLink";

const dateFormatter = new Intl.DateTimeFormat("es-MX", {
  day: "numeric",
  month: "short",
  year: "numeric",
});

const SolutionsSection = () => {
  const [featured, ...more] = newestInsights().slice(0, 3);

  if (!featured) return null;

  const FeaturedIcon = featured.icon;

  return (
    <section
      id="soluciones"
      aria-labelledby="soluciones-title"
      className="min-h-screen bg-[#F5F9FC] text-[#013762] md:snap-start"
    >
      <div className="mx-auto max-w-7xl px-4 pb-14 pt-24 sm:px-6 md:pb-16 lg:pl-8 lg:pr-16">
        <div className="flex flex-col gap-6 border-b border-[#013762]/15 pb-7 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-3xl">
            <h2
              id="soluciones-title"
              className="text-[clamp(2.6rem,5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.025em]"
            >
              Soluciones e impacto
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#013762]/75 sm:text-lg">
              Casos reales, herramientas y guías para entender una tarea,
              probar una solución y revisar el resultado.
            </p>
          </div>
          <TransitionLink
            to="/soluciones"
            className="inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-lg border border-[#004C7A]/25 bg-white px-4 py-2.5 text-sm font-bold text-[#004C7A] transition-colors hover:border-[#0179B1] hover:text-[#0179B1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0179B1] md:self-auto"
          >
            Ver la biblioteca completa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </TransitionLink>
        </div>

        <nav aria-label="Explorar la biblioteca" className="mt-6 grid gap-3 sm:grid-cols-3">
          <TransitionLink to="/soluciones/casos" className="group flex items-center justify-between rounded-xl bg-[#E7F3F9] px-5 py-4 font-bold text-[#013762] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0179B1]">Casos <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></TransitionLink>
          <TransitionLink to="/soluciones/guias" className="group flex items-center justify-between rounded-xl bg-[#0179B1] px-5 py-4 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0179B1]">Guías <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></TransitionLink>
          <TransitionLink to="/soluciones/herramientas" className="group flex items-center justify-between rounded-xl bg-[#013762] px-5 py-4 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0179B1]">Herramientas <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></TransitionLink>
        </nav>

        <div className="mt-6 grid gap-5 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:gap-6">
          <TransitionLink
            to={`/soluciones/${featured.slug}`}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-[#013762]/12 bg-white transition-colors hover:border-[#0179B1]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0179B1] lg:grid lg:h-[22.5rem] lg:grid-cols-[42%_58%]"
          >
            <div className="overflow-hidden bg-[#E5F2F8]">
              <img
                src={featured.image.src}
                alt=""
                loading="lazy"
                decoding="async"
                className="aspect-[16/9] w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025] lg:aspect-auto lg:h-full"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-bold text-[#004C7A]">
                <FeaturedIcon className="h-4 w-4 text-[#0179B1]" aria-hidden="true" />
                <span>{featured.category}</span>
              </div>
              <h3 className="mt-3 max-w-[28ch] text-2xl font-bold leading-tight tracking-[-0.02em]">
                {featured.title}
              </h3>
              <p className="mt-3 max-w-[65ch] text-sm leading-relaxed text-[#013762]/70">
                {featured.summary}
              </p>
              <div className="mt-auto flex items-center justify-between gap-4 pt-7 text-sm">
                <time dateTime={featured.publishedAt} className="text-[#004C7A]/80">
                  {dateFormatter.format(new Date(`${featured.publishedAt}T12:00:00`))}
                </time>
                <span className="inline-flex items-center gap-1.5 font-bold text-[#0179B1]">
                  Leer artículo
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </span>
              </div>
            </div>
          </TransitionLink>

          <div className="flex min-w-0 flex-col gap-4" aria-label="Más publicaciones recientes">
            {more.map((insight) => {
              const Icon = insight.icon;
              return (
                <TransitionLink
                  key={insight.slug}
                  to={`/soluciones/${insight.slug}`}
                  className="group grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_6.5rem] overflow-hidden rounded-2xl border border-[#013762]/12 bg-white transition-colors hover:border-[#0179B1]/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#0179B1] sm:grid-cols-[minmax(0,1fr)_9rem]"
                >
                  <div className="flex min-w-0 flex-col justify-between gap-4 p-5 sm:p-6">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold text-[#004C7A]">
                        <Icon className="h-4 w-4 text-[#0179B1]" aria-hidden="true" />
                        <span>{insight.category}</span>
                      </div>
                      <h3 className="mt-2 text-base font-bold leading-snug tracking-[-0.015em] sm:text-lg">
                        {insight.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between gap-3 text-xs text-[#004C7A]/80">
                      <time dateTime={insight.publishedAt}>
                        {dateFormatter.format(new Date(`${insight.publishedAt}T12:00:00`))}
                      </time>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[#0179B1]" aria-hidden="true" />
                    </div>
                  </div>
                  <div className="overflow-hidden bg-[#E5F2F8]">
                    <img
                      src={insight.image.src}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.04]"
                    />
                  </div>
                </TransitionLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
