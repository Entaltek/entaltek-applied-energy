import { useState } from "react";
import { ArrowRight, ChevronDown, GitCompareArrows, RotateCw } from "lucide-react";

type Branch = { label: string; children: string[] };
type MindMapProps = { title: string; variant: "flow" | "compare" | "cycle"; branches: Branch[] };

const details = {
  flow: { label: "Ruta de la solución", icon: ArrowRight, text: "Sigue el recorrido desde la tarea hasta la revisión. Abre una etapa para ver sus decisiones." },
  compare: { label: "Mapa de decisión", icon: GitCompareArrows, text: "Compara alternativas y las condiciones para usarlas." },
  cycle: { label: "Ciclo de mejora", icon: RotateCw, text: "Un prompt útil se construye en vueltas cortas: plantea, prueba y corrige." },
};

const MindMapLayout = ({ title, variant, branches }: MindMapProps) => {
  const [expanded, setExpanded] = useState(() => new Set(branches.map((branch) => branch.label)));
  const detail = details[variant];
  const Icon = detail.icon;
  const toggle = (label: string) => setExpanded((current) => {
    const next = new Set(current);
    if (next.has(label)) next.delete(label); else next.add(label);
    return next;
  });
  const card = (branch: Branch, index: number, tone = "border-[#013762]/10") => <div key={branch.label} className={`rounded-2xl border bg-white p-5 shadow-sm ${tone}`}>
    <button type="button" onClick={() => toggle(branch.label)} className="flex w-full items-center justify-between gap-4 text-left font-bold text-[#013762]" aria-expanded={expanded.has(branch.label)}>
      <span className="flex items-center gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9F5F8] text-xs text-[#0179B1]">{index + 1}</span>{branch.label}</span>
      <ChevronDown className={`h-4 w-4 shrink-0 text-[#0179B1] transition-transform ${expanded.has(branch.label) ? "rotate-180" : ""}`} aria-hidden="true" />
    </button>
    {expanded.has(branch.label) && <ul className="mt-4 space-y-2 border-l border-[#47DAD6] pl-4 text-sm leading-relaxed text-[#013762]/70">{branch.children.map((child) => <li key={child}>{child}</li>)}</ul>}
  </div>;

  return <section className="mt-12 overflow-hidden rounded-3xl border border-[#013762]/10 bg-[#E9F5F8] p-5 sm:p-8" aria-labelledby="mind-map-title">
    <div className="flex items-center gap-3 text-[#0179B1]"><Icon className="h-5 w-5" aria-hidden="true" /><p id="mind-map-title" className="text-sm font-bold uppercase tracking-[0.16em]">{detail.label}</p></div>
    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#013762]/65">{detail.text}</p>
    {variant === "flow" && <div className="mt-8"><div className="mx-auto max-w-xl rounded-2xl bg-[#013762] px-6 py-5 text-center text-lg font-bold text-white shadow-[0_16px_35px_rgba(1,55,98,0.2)]">{title}</div><div className="mt-6 grid gap-3 lg:grid-cols-4">{branches.map((branch, index) => <div key={branch.label} className="min-w-0">{card(branch, index)}{index < branches.length - 1 && <ArrowRight className="mx-auto mt-3 h-5 w-5 rotate-90 text-[#0179B1]/60 lg:rotate-0" aria-hidden="true" />}</div>)}</div></div>}
    {variant === "compare" && <div className="mt-8"><div className="mx-auto max-w-md rounded-full bg-[#013762] px-7 py-5 text-center text-lg font-bold text-white shadow-[0_16px_35px_rgba(1,55,98,0.2)]">{title}</div><div className="mt-7 grid gap-4 md:grid-cols-2">{card(branches[0], 0, "border-[#47DAD6]/70")}{card(branches[1], 1, "border-[#0179B1]/50")}</div><div className="mt-4 grid gap-4 sm:grid-cols-2">{card(branches[2], 2)}{card(branches[3], 3)}</div></div>}
    {variant === "cycle" && <div className="mt-8 rounded-[2.5rem] border-2 border-dashed border-[#0179B1]/25 p-5 sm:p-8"><div className="mx-auto flex aspect-square max-w-[13rem] items-center justify-center rounded-full bg-[#013762] p-6 text-center text-base font-bold leading-tight text-white shadow-[0_16px_35px_rgba(1,55,98,0.2)]">{title}</div><div className="mt-6 grid gap-4 sm:grid-cols-2">{branches.map((branch, index) => card(branch, index))}</div><div className="mt-5 flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#0179B1]"><RotateCw className="h-4 w-4" aria-hidden="true" /> Repite solo lo que necesite ajuste</div></div>}
  </section>;
};

export default MindMapLayout;
