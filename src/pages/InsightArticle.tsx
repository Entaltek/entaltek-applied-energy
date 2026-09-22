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
        <div className="mt-14 rounded-2xl bg-[#013762] p-7 text-white sm:p-9">
          <h2 className="text-2xl font-bold">¿Tienes una tarea que quieres mejorar?</h2>
          <p className="mt-3 max-w-xl leading-relaxed text-white/75">Podemos revisar contigo si la idea es alcanzable, qué condiciones necesita y cómo empezar con una prueba pequeña.</p>
          <Link to="/#contacto" className="mt-6 inline-flex items-center gap-2 font-bold text-[#47DAD6] hover:text-white">Cuéntanos tu idea <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></Link>
        </div>
        <a href={insight.sourceUrl} target="_blank" rel="noreferrer" className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#004C7A] hover:text-[#0179B1]">
          {insight.sourceLabel} <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </a>
      </article>
    </main>
  );
};

export default InsightArticle;
