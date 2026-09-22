import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import { newestInsights } from "@/lib/insights";

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
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#013762]/70">Casos, herramientas y guías prácticas. Cada artículo conserva su fecha de publicación y las fuentes que respaldan sus afirmaciones.</p>
      <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {newestInsights().map((insight) => {
          const Icon = insight.icon;
          return <Link key={insight.slug} to={`/soluciones/${insight.slug}`} className="group flex min-h-72 flex-col justify-between rounded-2xl border border-[#013762]/10 bg-white p-7 transition-all hover:-translate-y-1 hover:border-[#0179B1]/40 hover:shadow-[0_20px_44px_rgba(1,55,98,0.12)]">
            <div><Icon className="h-8 w-8 text-[#0179B1]" aria-hidden="true" /><p className="mt-7 text-sm font-semibold text-[#004C7A]">{insight.category}</p><h2 className="mt-3 text-2xl font-bold leading-tight">{insight.title}</h2><p className="mt-4 text-sm leading-relaxed text-[#013762]/65">{insight.summary}</p></div>
            <div className="mt-7 flex items-center justify-between gap-3 text-sm font-semibold text-[#0179B1]"><time dateTime={insight.publishedAt}>{new Intl.DateTimeFormat("es-MX", { dateStyle: "medium" }).format(new Date(`${insight.publishedAt}T12:00:00`))}</time><ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" /></div>
          </Link>;
        })}
      </div>
    </section>
  </main>
);

export default InsightLibrary;
