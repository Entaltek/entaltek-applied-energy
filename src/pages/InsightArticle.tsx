import { ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import { getInsight, insightCategories } from "@/lib/insights";
import MindMap from "@/components/insights/MindMapLayout";
import TransitionLink from "@/components/navigation/TransitionLink";

const InsightArticle = () => {
  const insight = getInsight(useParams().slug);

  if (!insight) {
    return <main className="route-page min-h-screen bg-[#F5F9FC] p-8 text-[#013762]"><TransitionLink to="/">Volver a Entaltek</TransitionLink></main>;
  }

  const Icon = insight.icon;
  const categoryPath = { Casos: "casos", "Guías": "guias", Herramientas: "herramientas" } as const;
  return (
    <main className="route-page min-h-screen bg-[#F5F9FC] text-[#013762]">
      <header className="border-b border-[#013762]/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl flex-col items-start gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 font-bold tracking-wide text-[#013762]">
            <img src={logoMark} alt="" className="h-9 w-auto" /> ENTALTEK
          </Link>
          <nav aria-label="Biblioteca" className="flex w-full items-center justify-between gap-1 text-xs font-semibold sm:w-auto sm:gap-5 sm:text-sm">
            <TransitionLink to="/soluciones" className="rounded-md px-2 py-2 text-[#004C7A] hover:bg-[#E7F3F9]">Biblioteca</TransitionLink>
            {insightCategories.map((category) => <TransitionLink key={category} to={`/soluciones/${categoryPath[category]}`} className="rounded-md px-2 py-2 text-[#004C7A] hover:bg-[#E7F3F9]">{category}</TransitionLink>)}
          </nav>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#013762] text-[#47DAD6]">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <TransitionLink to={`/soluciones/${categoryPath[insight.category]}`} className="mt-8 inline-block text-sm font-semibold text-[#004C7A] underline-offset-4 hover:underline">{insight.category}</TransitionLink>
        <h1 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tight text-[#013762]">{insight.title}</h1>
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#013762]/72">{insight.summary}</p>
        <time dateTime={insight.publishedAt} className="mt-6 block text-sm text-[#013762]/55">Publicado el {new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(new Date(`${insight.publishedAt}T12:00:00`))}</time>
        <figure className="mt-10 overflow-hidden rounded-3xl border border-[#013762]/10 bg-white shadow-[0_18px_45px_rgba(1,55,98,0.1)]">
          <img src={insight.image.src} alt={insight.image.alt} className="aspect-[16/9] w-full object-cover" />
        </figure>
        {insight.mindMap && <MindMap {...insight.mindMap} />}
        <section className="mt-12 border-y border-[#013762]/10 py-7">
          <h2 className="text-xl font-bold text-[#013762]">Esquema de aplicación</h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-3">
            {insight.diagram.map((step, index) => <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-[#013762]/75"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0179B1] text-xs font-bold text-white">{index + 1}</span>{step}</li>)}
          </ol>
        </section>
        <div className="mt-12 space-y-12">
          {insight.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-2xl font-bold tracking-tight text-[#013762]">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-lg leading-8 text-[#013762]/78">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.list && <ul className="mt-6 space-y-3 border-l border-[#0179B1]/35 pl-5 text-[#013762]/75">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
            </section>
          ))}
        </div>
        <section className="mt-14">
          <h2 className="text-2xl font-bold tracking-tight text-[#013762]">Dos ejemplos para llevarlo a la práctica</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {insight.examples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-[#013762]/10 bg-white p-6">
                <h3 className="font-bold text-[#013762]">{example.title}</h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#004C7A]">{example.prompt}</p>
                <p className="mt-4 border-t border-[#013762]/10 pt-4 text-sm leading-relaxed text-[#013762]/70">{example.result}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="mt-14 rounded-2xl bg-[#013762] p-7 text-white sm:p-9">
          <h2 className="text-2xl font-bold">¿Tienes una tarea que quieres mejorar?</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-white/75">Podemos revisar contigo si la idea es alcanzable, qué condiciones necesita y cómo empezar con una prueba pequeña.</p>
          <Link to="/#contacto" className="mt-6 inline-flex items-center gap-2 font-bold text-[#47DAD6] hover:text-white">Cuéntanos tu idea <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <section className="mt-12">
          <h2 className="text-xl font-bold text-[#013762]">Fuentes consultadas</h2>
          <ul className="mt-4 space-y-3">
            {insight.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#004C7A] hover:text-[#0179B1]">{source.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></li>)}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default InsightArticle;
