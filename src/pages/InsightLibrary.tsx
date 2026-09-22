import { ArrowLeft, ArrowUpRight, BookOpen, BriefcaseBusiness, Compass, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import { insightCategories, insightsByCategory, type Insight } from "@/lib/insights";

const categoryDetails: Record<Insight["category"], { description: string; icon: typeof BriefcaseBusiness; empty: string }> = {
  Casos: {
    description: "Historias anónimas de problemas reales, el camino para resolverlos y el impacto observado.",
    icon: BriefcaseBusiness,
    empty: "Aquí reuniremos casos reales cuando podamos contar el aprendizaje sin exponer a las personas ni a sus empresas.",
  },
  Herramientas: {
    description: "Explicaciones para elegir y usar herramientas con un propósito concreto.",
    icon: Wrench,
    empty: "Próximamente habrá herramientas publicadas en esta sección.",
  },
  Guías: {
    description: "Tutoriales para aplicar una idea, comprobar el resultado y repetir el proceso.",
    icon: Compass,
    empty: "Próximamente habrá guías publicadas en esta sección.",
  },
};

const InsightLibrary = () => (
  <main className="min-h-screen bg-[#F5F9FC] text-[#013762]">
    <header className="border-b border-[#013762]/10 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3 font-bold tracking-wide text-[#013762]"><img src={logoMark} alt="" className="h-9 w-auto" /> ENTALTEK</Link>
        <Link to="/#soluciones" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0179B1] hover:text-[#013762]"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Inicio</Link>
      </div>
    </header>
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <BookOpen className="h-9 w-9 text-[#0179B1]" aria-hidden="true" />
      <h1 className="mt-7 max-w-4xl text-[clamp(2.7rem,6vw,5.5rem)] font-extrabold leading-[0.96] tracking-tight">Biblioteca de soluciones e impacto</h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#013762]/70">Una biblioteca organizada para encontrar casos, herramientas y guías prácticas. Cada artículo conserva su fecha de publicación y las fuentes que respaldan sus afirmaciones.</p>
      <nav aria-label="Secciones de la biblioteca" className="mt-9 flex flex-wrap gap-3">
        {insightCategories.map((category) => <a key={category} href={`#${category.toLowerCase()}`} className="rounded-full border border-[#013762]/15 bg-white px-4 py-2 text-sm font-bold text-[#0179B1] transition-colors hover:border-[#0179B1] hover:text-[#013762]">{category}</a>)}
      </nav>
      <div className="mt-16 space-y-20">
        {insightCategories.map((category) => {
          const details = categoryDetails[category];
          const CategoryIcon = details.icon;
          const categoryInsights = insightsByCategory(category);
          return <section key={category} id={category.toLowerCase()} className="scroll-mt-10">
            <div className="max-w-2xl"><div className="flex items-center gap-3 text-[#0179B1]"><CategoryIcon className="h-6 w-6" aria-hidden="true" /><p className="text-sm font-bold uppercase tracking-[0.16em]">{category}</p></div><h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">{category}</h2><p className="mt-3 text-base leading-relaxed text-[#013762]/70">{details.description}</p></div>
            {categoryInsights.length ? <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{categoryInsights.map((insight) => {
              const Icon = insight.icon;
              return <Link key={insight.slug} to={`/soluciones/${insight.slug}`} className="group flex min-h-72 flex-col justify-between rounded-2xl border border-[#013762]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#0179B1]/40 hover:shadow-[0_20px_44px_rgba(1,55,98,0.12)]">
                <div><Icon className="h-8 w-8 text-[#0179B1]" aria-hidden="true" /><h3 className="mt-7 text-2xl font-bold leading-tight">{insight.title}</h3><p className="mt-4 text-sm leading-relaxed text-[#013762]/65">{insight.summary}</p></div>
                <div className="mt-7 flex items-center justify-between gap-3 text-sm font-semibold text-[#0179B1]"><time dateTime={insight.publishedAt}>{new Intl.DateTimeFormat("es-MX", { dateStyle: "medium" }).format(new Date(`${insight.publishedAt}T12:00:00`))}</time><ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div>
              </Link>;
            })}</div> : <div className="mt-8 rounded-2xl border border-dashed border-[#013762]/20 bg-white/60 p-7 text-sm leading-relaxed text-[#013762]/65">{details.empty}</div>}
          </section>;
        })}
      </div>
    </section>
  </main>
);

export default InsightLibrary;
