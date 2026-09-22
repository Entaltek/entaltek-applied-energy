import { useState } from "react";
import { ChevronDown, Network } from "lucide-react";

type MindMapProps = {
  title: string;
  branches: Array<{ label: string; children: string[] }>;
};

const MindMap = ({ title, branches }: MindMapProps) => {
  const [expanded, setExpanded] = useState(() => new Set(branches.map((branch) => branch.label)));

  const toggleBranch = (label: string) => {
    setExpanded((current) => {
      const next = new Set(current);
      if (next.has(label)) next.delete(label);
      else next.add(label);
      return next;
    });
  };

  return (
    <section className="mt-12 overflow-hidden rounded-3xl border border-[#013762]/10 bg-[#E9F5F8] p-5 sm:p-8" aria-labelledby="mind-map-title">
      <div className="flex items-center gap-3 text-[#0179B1]">
        <Network className="h-5 w-5" aria-hidden="true" />
        <p id="mind-map-title" className="text-sm font-bold uppercase tracking-[0.16em]">Mapa mental</p>
      </div>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#013762]/65">Una vista rápida de las ideas del artículo. Selecciona un tema para contraer o mostrar sus conexiones.</p>
      <div className="relative mt-8">
        <div className="relative z-10 mx-auto flex max-w-md items-center justify-center rounded-2xl bg-[#013762] px-6 py-5 text-center text-lg font-bold leading-tight text-white shadow-[0_16px_35px_rgba(1,55,98,0.2)]">{title}</div>
        <div className="mx-auto h-7 w-px bg-[#0179B1]/40" aria-hidden="true" />
        <div className="grid gap-4 md:grid-cols-2">
          {branches.map((branch) => {
            const isExpanded = expanded.has(branch.label);
            return <div key={branch.label} className="relative rounded-2xl border border-[#0179B1]/20 bg-white p-5 shadow-sm before:absolute before:-top-4 before:left-1/2 before:h-4 before:w-px before:-translate-x-1/2 before:bg-[#0179B1]/35">
              <button type="button" onClick={() => toggleBranch(branch.label)} className="flex w-full items-center justify-between gap-4 text-left font-bold text-[#013762]" aria-expanded={isExpanded}>
                {branch.label}<ChevronDown className={`h-4 w-4 shrink-0 text-[#0179B1] transition-transform ${isExpanded ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {isExpanded && <ul className="mt-4 space-y-2 border-l border-[#47DAD6] pl-4 text-sm leading-relaxed text-[#013762]/70">{branch.children.map((child) => <li key={child}>{child}</li>)}</ul>}
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default MindMap;
