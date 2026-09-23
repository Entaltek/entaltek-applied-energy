import { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, BookOpen, BriefcaseBusiness, Search, Wrench } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logoMark from "@/assets/logo_entaltek_solo.svg";
import { insightCategories, insightsByCategory, newestInsights, type Insight } from "@/lib/insights";
import TransitionLink from "@/components/navigation/TransitionLink";
import ThemeToggle from "@/components/ThemeToggle";

const categories = {
  Casos: { slug: "casos", icon: BriefcaseBusiness, description: "Problemas reales, decisiones y resultados observados.", detail: "Aprende del recorrido de una solución: qué ocurrió, qué se probó y qué queda por comprobar.", tone: "bg-[#E7F3F9] dark:bg-[#173C52] text-[#013762] dark:text-[#E7F2F7]" },
  Guías: { slug: "guias", icon: BookOpen, description: "Pasos concretos para aprender haciendo.", detail: "Sigue procedimientos, trabaja con ejemplos y comprueba cada resultado antes de usarlo.", tone: "bg-[#0179B1] text-white" },
  Herramientas: { slug: "herramientas", icon: Wrench, description: "Elige la herramienta según el trabajo.", detail: "Compara usos, requisitos y límites antes de sumar otra pieza a tu proceso.", tone: "bg-[#013762] text-white" },
} as const;
const route = (category: Insight["category"]) => `/soluciones/${categories[category].slug}`;
const categoryHeading = { Casos: "Todos los casos", Guías: "Todas las guías", Herramientas: "Todas las herramientas" };
const collections = {
  Casos: [
    { id: "diseno", title: "Diseño y producción", description: "Experiencias documentadas con una tarea, una solución y sus límites.", slugs: ["ordenar-capas-en-photoshop"] },
  ],
  Guías: [
    { id: "fundamentos", title: "Pedir, comprobar y organizar", description: "Empieza por una tarea clara y aprende a revisar la respuesta.", slugs: ["un-prompt-que-si-ayuda", "mejorar-una-respuesta", "comprobar-una-respuesta", "contexto-util-sin-datos-innecesarios", "documentos-y-archivos-en-chatgpt", "investigar-con-chatgpt-y-fuentes", "organizar-trabajo-continuo-en-chatgpt", "prompt-a-plantilla-reutilizable"] },
    { id: "codex", title: "Probar cambios con Codex", description: "Pasa de un diagnóstico a una prueba pequeña con evidencia.", slugs: ["elegir-tarea-para-automatizar", "diagnosticar-trabajo-antes-de-codex", "primer-proyecto-con-codex", "probar-cambios-antes-de-aplicarlos"] },
    { id: "agentes", title: "Agentes y coordinación", description: "Divide encargos, conecta herramientas y revisa procedimientos y entregas.", slugs: ["mcp-conectar-herramientas-con-control", "skills-procedimientos-reutilizables", "disenar-miniagentes-hermes-linear", "hermes-agent-y-linear"] },
  ],
  Herramientas: [
    { id: "chatgpt-codex", title: "ChatGPT y Codex", description: "Elige superficie, modelo y complementos según una tarea comprobable.", slugs: ["chatgpt-y-codex", "instalar-codex-requisitos-y-modelos", "que-puede-hacer-codex-y-como-revisarlo", "modelos-codex-astra-sol-luna", "complementos-apps-y-plugins-codex"] },
    { id: "agentes-gestion", title: "Agentes y gestión del trabajo", description: "Comprende qué aporta cada herramienta antes de conectarlas.", slugs: ["hermes-agent-perfiles-y-subagentes", "linear-proyectos-tareas-y-agentes"] },
  ],
} as const;
const formatDate = (date: string) => new Intl.DateTimeFormat("es-MX", { dateStyle: "medium" }).format(new Date(`${date}T12:00:00`));

const ArticleRow = ({ insight }: { insight: Insight }) => (
  <TransitionLink to={`/soluciones/${insight.slug}`} className="group grid gap-5 border-b border-[#013762]/15 dark:border-[#B4DDE7]/20 py-6 focus-visible:outline-2 focus-visible:outline-[#0179B1] sm:grid-cols-[8rem_minmax(0,1fr)_auto] sm:items-center">
    <img src={insight.image.src} alt="" loading="lazy" className="h-44 w-full rounded-xl object-cover sm:aspect-square sm:h-auto" />
    <div><p className="text-xs font-bold text-[#004C7A] dark:text-[#8DDDDC]">{insight.category} · <time dateTime={insight.publishedAt}>{formatDate(insight.publishedAt)}</time></p><h3 className="mt-2 text-xl font-bold leading-tight group-hover:text-[#0179B1] dark:group-hover:text-[#7BDDDC] sm:text-2xl">{insight.title}</h3><p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#365872] dark:text-[#B6CEDC]">{insight.summary}</p></div>
    <ArrowUpRight className="hidden h-5 w-5 text-[#0179B1] dark:text-[#72D5E3] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" aria-hidden="true" />
  </TransitionLink>
);

const LibraryHeader = ({ pathname }: { pathname: string }) => (
  <header className="sticky top-0 z-20 border-b border-[#013762]/10 dark:border-[#B4DDE7]/15 bg-white/95 dark:bg-[#102B40]/95 backdrop-blur">
    <div className="mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:px-6 lg:px-8">
      <Link to="/" className="flex shrink-0 items-center gap-2 font-bold tracking-wide text-[#013762] dark:text-[#E7F2F7]"><img src={logoMark} alt="" className="h-8 w-auto" /> ENTALTEK</Link>
      <nav aria-label="Biblioteca" className="flex w-full items-center justify-between gap-1 text-xs font-semibold sm:w-auto sm:justify-start sm:gap-5 sm:text-sm">
        <TransitionLink to="/soluciones" aria-current={pathname === "/soluciones" ? "page" : undefined} className="whitespace-nowrap rounded-md px-2 py-2 text-[#004C7A] dark:text-[#8DDDDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52] aria-[current=page]:bg-[#E7F3F9] dark:aria-[current=page]:bg-[#173C52]">Biblioteca</TransitionLink>
        {insightCategories.map((category) => <TransitionLink key={category} to={route(category)} aria-current={pathname === route(category) ? "page" : undefined} className="whitespace-nowrap rounded-md px-2 py-2 text-[#004C7A] dark:text-[#8DDDDC] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52] aria-[current=page]:bg-[#E7F3F9] dark:aria-[current=page]:bg-[#173C52]">{category}</TransitionLink>)}
        <ThemeToggle className="text-[#004C7A] dark:text-[#BFEAF0]" />
      </nav>
    </div>
  </header>
);

const InsightLibrary = () => {
  const pathname = useLocation().pathname;
  const categorySlug = pathname.split("/").at(-1);
  const activeCategory = insightCategories.find((category) => categories[category].slug === categorySlug);
  const [query, setQuery] = useState("");
  useEffect(() => setQuery(""), [pathname]);
  const all = activeCategory ? insightsByCategory(activeCategory) : newestInsights();
  const articles = all.filter((item) => `${item.title} ${item.summary}`.toLocaleLowerCase("es").includes(query.trim().toLocaleLowerCase("es")));
  return <main className="route-page min-h-screen bg-[#F5F9FC] dark:bg-[#091D2C] text-[#013762] dark:text-[#E7F2F7]">
    <LibraryHeader pathname={pathname} />
    {!activeCategory ? <>
      <section className="bg-[#013762] text-white"><div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:py-14 lg:px-8"><h1 className="max-w-4xl text-[clamp(2.3rem,5vw,4.5rem)] font-extrabold leading-[1.03] tracking-[-0.03em]">Encuentra una respuesta que puedas poner a prueba.</h1><p className="mt-5 max-w-2xl text-base leading-relaxed text-[#D4E5F0] sm:text-lg">Explora experiencias reales, aprende un procedimiento o compara herramientas. Cada recurso indica sus fuentes y la forma de revisar el resultado.</p></div></section>
      <section aria-label="Explorar recursos" className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8"><div className="grid gap-4 md:grid-cols-3">{insightCategories.map((category) => { const info = categories[category]; const Icon = info.icon; return <TransitionLink key={category} to={route(category)} className={`group flex min-h-56 flex-col justify-between rounded-2xl p-7 transition-transform motion-safe:hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[#0179B1] md:min-h-64 ${info.tone}`}><div><Icon className="h-8 w-8" aria-hidden="true" /><h2 className="mt-5 text-3xl font-bold">{category}</h2><p className={`mt-3 max-w-xs leading-relaxed ${category === "Casos" ? "text-[#365872] dark:text-[#B6CEDC]" : "text-white/85"}`}>{info.description}</p></div><span className="mt-6 inline-flex items-center gap-2 text-sm font-bold">Explorar {category.toLowerCase()} <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" /></span></TransitionLink>; })}</div></section>
    </> : <section className={categories[activeCategory].tone}><div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:px-8"><TransitionLink to="/soluciones" className="text-sm font-bold underline underline-offset-4">← Biblioteca</TransitionLink><h1 className="mt-5 text-[clamp(2.7rem,6vw,5rem)] font-extrabold leading-tight">{activeCategory}</h1><p className="mt-4 max-w-2xl text-lg leading-relaxed opacity-90">{categories[activeCategory].detail}</p></div></section>}
    <section className="mx-auto max-w-7xl px-4 pb-24 pt-6 sm:px-6 lg:px-8"><div className="flex flex-col gap-5 border-b border-[#013762]/20 dark:border-[#B4DDE7]/20 pb-5 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="text-2xl font-bold">{activeCategory ? categoryHeading[activeCategory] : "Publicaciones recientes"}</h2><p className="mt-1 text-sm text-[#365872] dark:text-[#B6CEDC]">{all.length} {all.length === 1 ? "recurso disponible" : "recursos disponibles"}</p></div><label className="flex w-full items-center gap-2 rounded-lg border border-[#013762]/20 dark:border-[#B4DDE7]/20 bg-white dark:bg-[#123149] px-3 py-2 text-[#004C7A] dark:text-[#8DDDDC] focus-within:outline-2 focus-within:outline-[#0179B1] sm:w-80"><Search className="h-4 w-4" aria-hidden="true" /><span className="sr-only">Buscar artículos</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar por tema" className="w-full bg-transparent text-sm text-[#013762] dark:text-[#E7F2F7] outline-none placeholder:text-[#58718A] dark:placeholder:text-[#A4BDCC]" /></label></div>
      {activeCategory && <nav aria-label={`Subsecciones de ${activeCategory.toLowerCase()}`} className="flex flex-wrap gap-2 border-b border-[#013762]/10 dark:border-[#B4DDE7]/15 py-5">{collections[activeCategory].map((collection) => <a key={collection.id} href={`#${collection.id}`} className="rounded-full border border-[#013762]/15 dark:border-[#B4DDE7]/20 bg-white dark:bg-[#123149] px-4 py-2 text-sm font-semibold text-[#004C7A] dark:text-[#8DDDDC] transition-colors hover:border-[#0179B1] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52] focus-visible:outline-2 focus-visible:outline-[#0179B1]">{collection.title}</a>)}{activeCategory === "Casos" && <a href="#mas-casos" className="rounded-full border border-[#013762]/15 dark:border-[#B4DDE7]/20 bg-white dark:bg-[#123149] px-4 py-2 text-sm font-semibold text-[#004C7A] dark:text-[#8DDDDC] hover:border-[#0179B1] hover:bg-[#E7F3F9] dark:hover:bg-[#173C52]">Operaciones y archivos · en preparación</a>}</nav>}
      {articles.length ? activeCategory ? <div className="space-y-14 pt-10">{collections[activeCategory].map((collection) => { const order: readonly string[] = collection.slugs; const items = articles.filter((item) => order.includes(item.slug)).sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug)); return items.length ? <section key={collection.id} id={collection.id} className="scroll-mt-28"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.17em] text-[#0179B1] dark:text-[#72D5E3]">{activeCategory}</p><h3 className="mt-2 text-3xl font-bold tracking-tight">{collection.title}</h3><p className="mt-2 leading-relaxed text-[#365872] dark:text-[#B6CEDC]">{collection.description}</p></div><div className="mt-5 border-t border-[#013762]/20 dark:border-[#B4DDE7]/20">{items.map((insight) => <ArticleRow key={insight.slug} insight={insight} />)}</div></section> : null; })}{activeCategory === "Casos" && !query && <section id="mas-casos" className="scroll-mt-28 rounded-2xl border border-[#0179B1]/20 bg-[#E7F3F9] dark:bg-[#173C52] p-6 sm:p-8"><p className="text-xs font-bold uppercase tracking-[0.17em] text-[#0179B1] dark:text-[#72D5E3]">Próximos casos</p><h3 className="mt-2 text-2xl font-bold">Operaciones y archivos</h3><p className="mt-3 max-w-2xl leading-relaxed text-[#365872] dark:text-[#B6CEDC]">Esta subsección se abrirá cuando podamos documentar una experiencia real con sus materiales, prueba y permiso de publicación. Mientras tanto, los ejercicios hipotéticos están identificados como tales en Guías.</p></section>}</div> : <div>{articles.map((insight) => <ArticleRow key={insight.slug} insight={insight} />)}</div> : <p className="py-10 text-[#365872] dark:text-[#B6CEDC]">No encontramos recursos con ese término. Prueba con otra palabra.</p>}</section>
  </main>;
};

export default InsightLibrary;
