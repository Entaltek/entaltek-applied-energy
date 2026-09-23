import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import { getInsight, insightCategories } from "@/lib/insights";
import MindMap from "@/components/insights/MindMapLayout";
import TransitionLink from "@/components/navigation/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";

const LinearWorkflow = () => (
  <section id="flujo-linear" className="mt-12 border-y border-[#013762]/15 dark:border-[#B4DDE7]/20 py-9" aria-labelledby="linear-workflow-title">
    <div className="max-w-2xl">
      <h2 id="linear-workflow-title" className="text-2xl font-bold tracking-tight">Una lista de trabajo por agente</h2>
      <p className="mt-3 leading-relaxed text-[#365872] dark:text-[#B6CEDC]">Ejemplo ilustrativo de una vista filtrada por agente en Linear. Cada issue conserva una persona responsable; el agente delegado contribuye a la tarea. Los estados pertenecen al flujo del equipo.</p>
    </div>
    <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {[
        { status: "Todo", task: "Inventariar borradores", agent: "Agente de fuentes", person: "Editora", color: "bg-[#E7F3F9] dark:bg-[#173C52]" },
        { status: "In Progress", task: "Comprobar enlaces", agent: "Agente de fuentes", person: "Editora", color: "bg-[#D9EFF8] dark:bg-[#17445A]" },
        { status: "In Review", task: "Validar afirmaciones", agent: "Agente revisor", person: "Editora", color: "bg-[#D7F3F1] dark:bg-[#184B4C]" },
        { status: "Done", task: "Tabla de fuentes aprobada", agent: "Agente revisor", person: "Editora", color: "bg-white dark:bg-[#123149]" },
      ].map((item) => (
        <div key={item.status} className={`rounded-xl border border-[#013762]/15 dark:border-[#B4DDE7]/20 p-4 ${item.color}`}>
          <p className="text-sm font-bold text-[#004C7A] dark:text-[#8DDDDC]">{item.status}</p>
          <p className="mt-4 min-h-14 font-semibold leading-snug">{item.task}</p>
          <p className="mt-4 border-t border-[#013762]/15 dark:border-[#B4DDE7]/20 pt-3 text-xs leading-relaxed text-[#365872] dark:text-[#B6CEDC]">Delegado a: {item.agent}<br />Responsable: {item.person}</p>
        </div>
      ))}
    </div>
    <p className="mt-4 text-sm leading-relaxed text-[#365872] dark:text-[#B6CEDC]">“In Review” es un estado adicional configurable. Mover una tarjeta no confirma la calidad de la entrega: la responsable revisa la evidencia antes de cerrar.</p>
  </section>
);

const InsightArticle = () => {
  const insight = getInsight(useParams().slug);

  if (!insight) {
    return <main className="route-page min-h-screen bg-[#F5F9FC] dark:bg-[#091D2C] p-8 text-[#013762] dark:text-[#E7F2F7]"><TransitionLink to="/">Volver a Entaltek</TransitionLink></main>;
  }

  const Icon = insight.icon;
  const categoryPath = { Casos: "casos", "Guías": "guias", Herramientas: "herramientas" } as const;
  return (
    <main className="route-page min-h-screen bg-[#F5F9FC] dark:bg-[#091D2C] text-[#013762] dark:text-[#E7F2F7]">
      <header className="border-b border-[#013762]/10 dark:border-[#B4DDE7]/15 bg-white/85 dark:bg-[#102B40]/95 backdrop-blur">
        <div className="mx-auto flex max-w-[90rem] flex-col items-start gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex items-center gap-3 font-bold tracking-wide text-[#013762] dark:text-[#E7F2F7]">
            <img src={logoMark} alt="" className="h-9 w-auto" /> ENTALTEK
          </Link>
          <nav aria-label="Biblioteca" className="flex w-full items-center justify-between gap-1 text-xs font-semibold sm:w-auto sm:gap-5 sm:text-sm">
            <TransitionLink to="/soluciones" className="rounded-md px-2 py-2 text-[#004C7A] dark:text-[#8DDDDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52]">Biblioteca</TransitionLink>
            {insightCategories.map((category) => <TransitionLink key={category} to={`/soluciones/${categoryPath[category]}`} className="rounded-md px-2 py-2 text-[#004C7A] dark:text-[#8DDDDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52]">{category}</TransitionLink>)}
            <ThemeToggle className="text-[#004C7A] dark:text-[#BFEAF0]" />
          </nav>
        </div>
      </header>
      <article className="mx-auto max-w-[90rem] px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-14">
        <div>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#013762] text-[#47DAD6]">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <TransitionLink to={`/soluciones/${categoryPath[insight.category]}`} className="mt-8 inline-block text-sm font-semibold text-[#004C7A] dark:text-[#8DDDDC] underline-offset-4 hover:underline">{insight.category}</TransitionLink>
        <h1 className="mt-3 max-w-3xl text-[clamp(2.5rem,4.6vw,4.75rem)] font-extrabold leading-[1.04] tracking-[-0.03em] text-[#013762] dark:text-[#E7F2F7]">{insight.title}</h1>
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#013762]/72 dark:text-[#C3D9E5]">{insight.summary}</p>
        <time dateTime={insight.publishedAt} className="mt-6 block text-sm text-[#013762]/55 dark:text-[#A4BDCC]">Publicado el {new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(new Date(`${insight.publishedAt}T12:00:00`))}</time>
        </div>
        <figure className="overflow-hidden rounded-2xl bg-white dark:bg-[#123149] shadow-[0_18px_45px_rgba(1,55,98,0.1)]">
          <img src={insight.image.src} alt={insight.image.alt} className="aspect-[16/9] w-full object-cover" />
        </figure>
        </div>
        <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] xl:grid-cols-[minmax(0,1fr)_17rem] xl:gap-16">
        <div className="min-w-0">
        {insight.mindMap && <MindMap {...insight.mindMap} />}
        <section className="mt-12 border-y border-[#013762]/10 dark:border-[#B4DDE7]/15 py-7">
          <h2 className="text-xl font-bold text-[#013762] dark:text-[#E7F2F7]">Esquema de aplicación</h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-3">
            {insight.diagram.map((step, index) => <li key={step} className="flex items-start gap-3 text-sm leading-relaxed text-[#013762]/75 dark:text-[#C3D9E5]"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0179B1] text-xs font-bold text-white">{index + 1}</span>{step}</li>)}
          </ol>
        </section>
        {insight.slug === "linear-proyectos-tareas-y-agentes" && <LinearWorkflow />}
        <div className="mt-12 border-t border-[#013762]/15 dark:border-[#B4DDE7]/20">
          {insight.sections.map((section, index) => (
            <section key={section.heading} id={`seccion-${index + 1}`} className="scroll-mt-24 border-b border-[#013762]/15 dark:border-[#B4DDE7]/20 py-9 xl:grid xl:grid-cols-[minmax(0,0.32fr)_minmax(0,0.68fr)] xl:gap-10 xl:py-11">
              <h2 className="max-w-sm text-2xl font-bold tracking-tight text-[#013762] dark:text-[#E7F2F7]">{section.heading}</h2>
              <div className="min-w-0">
                <div className="mt-4 max-w-[70ch] space-y-4 text-lg leading-8 text-[#013762]/78 dark:text-[#CDDFE9] xl:mt-0">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.list && <ul className="mt-6 max-w-[70ch] space-y-3 border-l border-[#0179B1]/35 pl-5 text-[#013762]/75 dark:text-[#C3D9E5]">{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
              </div>
            </section>
          ))}
        </div>
        <section id="ejemplos" className="mt-14 scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight text-[#013762] dark:text-[#E7F2F7]">Dos ejemplos para llevarlo a la práctica</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {insight.examples.map((example) => (
              <article key={example.title} className="rounded-2xl border border-[#013762]/10 dark:border-[#B4DDE7]/15 bg-white dark:bg-[#123149] p-6">
                <h3 className="font-bold text-[#013762] dark:text-[#E7F2F7]">{example.title}</h3>
                <p className="mt-4 text-sm font-medium leading-relaxed text-[#004C7A] dark:text-[#8DDDDC]">{example.prompt}</p>
                <p className="mt-4 border-t border-[#013762]/10 dark:border-[#B4DDE7]/15 pt-4 text-sm leading-relaxed text-[#013762]/70 dark:text-[#BFD5E1]">{example.result}</p>
              </article>
            ))}
          </div>
        </section>
        <div className="mt-14 rounded-2xl bg-[#013762] p-7 text-white sm:p-9 xl:flex xl:items-end xl:justify-between xl:gap-10">
          <div>
            <h2 className="text-2xl font-bold">¿Tienes una tarea que quieres mejorar?</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-white/75">Podemos revisar contigo si la idea es alcanzable, qué condiciones necesita y cómo empezar con una prueba pequeña.</p>
          </div>
          <Link to="/#contacto" className="mt-6 inline-flex shrink-0 items-center gap-2 font-bold text-[#47DAD6] hover:text-white xl:mt-0">Cuéntanos tu idea <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <section id="fuentes" className="mt-12 scroll-mt-24">
          <h2 className="text-xl font-bold text-[#013762] dark:text-[#E7F2F7]">Fuentes consultadas</h2>
          <ul className="mt-4 space-y-3">
            {insight.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-[#004C7A] dark:text-[#8DDDDC] hover:text-[#0179B1] dark:hover:text-[#7BDDDC]">{source.label} <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></a></li>)}
          </ul>
        </section>
        {insight.relatedSlugs && <section className="mt-12 border-t border-[#013762]/15 dark:border-[#B4DDE7]/20 pt-10" aria-labelledby="related-title">
          <h2 id="related-title" className="text-xl font-bold text-[#013762] dark:text-[#E7F2F7]">Sigue explorando</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">{insight.relatedSlugs.map((slug) => { const related = getInsight(slug); return related && <TransitionLink key={slug} to={`/soluciones/${slug}`} className="rounded-xl border border-[#013762]/15 dark:border-[#B4DDE7]/20 bg-white dark:bg-[#123149] p-4 font-semibold text-[#004C7A] dark:text-[#8DDDDC] hover:border-[#0179B1] hover:text-[#0179B1] dark:hover:text-[#7BDDDC]">{related.title} <ArrowUpRight className="ml-1 inline h-4 w-4" aria-hidden="true" /></TransitionLink>; })}</div>
        </section>}
        </div>
        <aside className="hidden lg:block" aria-label="Contenido de este artículo">
          <div className="sticky top-8 border-t-2 border-[#0179B1] pt-5">
            <p className="font-bold">En este artículo</p>
            <nav className="mt-4 flex flex-col gap-1 text-sm leading-snug">
              {insight.slug === "linear-proyectos-tareas-y-agentes" && <a href="#flujo-linear" className="rounded-md px-2 py-2 text-[#365872] dark:text-[#B6CEDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52]">Lista de tareas por agente</a>}
              {insight.sections.map((section, index) => <a key={section.heading} href={`#seccion-${index + 1}`} className="rounded-md px-2 py-2 text-[#365872] dark:text-[#B6CEDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52] hover:text-[#013762] dark:hover:text-[#E7F2F7] focus-visible:outline-2 focus-visible:outline-[#0179B1]">{section.heading}</a>)}
              <a href="#ejemplos" className="rounded-md px-2 py-2 text-[#365872] dark:text-[#B6CEDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52]">Ejemplos</a>
              <a href="#fuentes" className="rounded-md px-2 py-2 text-[#365872] dark:text-[#B6CEDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52]">Fuentes</a>
            </nav>
            {insight.relatedSlugs?.[0] && <TransitionLink to={`/soluciones/${insight.relatedSlugs[0]}`} className="mt-7 flex items-center gap-2 border-t border-[#013762]/15 dark:border-[#B4DDE7]/20 pt-5 text-sm font-semibold text-[#004C7A] dark:text-[#8DDDDC] hover:text-[#0179B1] dark:hover:text-[#7BDDDC]">Siguiente lectura <ArrowRight className="h-4 w-4" aria-hidden="true" /></TransitionLink>}
          </div>
        </aside>
        </div>
      </article>
    </main>
  );
};

export default InsightArticle;
