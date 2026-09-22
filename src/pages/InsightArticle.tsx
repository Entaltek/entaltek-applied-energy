import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import { getInsight } from "@/lib/insights";

const InsightArticle = () => {
  const insight = getInsight(useParams().slug);

  if (!insight) {
    return <main className="min-h-screen bg-[#F5F9FC] p-8 text-[#013762]"><Link to="/">Volver a Entaltek</Link></main>;
  }

  const Icon = insight.icon;
  return (
    <main className="min-h-screen bg-[#F5F9FC] text-[#013762]">
      <header className="border-b border-[#013762]/10 bg-white/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 font-bold tracking-wide text-[#013762]">
            <img src={logoMark} alt="" className="h-9 w-auto" /> ENTALTEK
          </Link>
          <Link to="/#soluciones" className="inline-flex items-center gap-2 text-sm font-semibold text-[#0179B1] hover:text-[#013762]">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Soluciones e impacto
          </Link>
        </div>
      </header>
      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 md:py-24">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#013762] text-[#47DAD6]">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <p className="mt-8 text-sm font-semibold text-[#004C7A]">{insight.category}</p>
        <h1 className="mt-3 text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-tight text-[#013762]">{insight.title}</h1>
        <p className="mt-7 max-w-2xl text-xl leading-relaxed text-[#013762]/72">{insight.summary}</p>
        <time dateTime={insight.publishedAt} className="mt-6 block text-sm text-[#013762]/55">Publicado el {new Intl.DateTimeFormat("es-MX", { dateStyle: "long" }).format(new Date(`${insight.publishedAt}T12:00:00`))}</time>
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
