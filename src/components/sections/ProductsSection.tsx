import { useState } from "react";
import { PawPrint, ArrowUpRight, Maximize2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import SabuesoOverlay from "@/components/SabuesoOverlay";

const DeviceFrame = () => (
  <svg
    viewBox="0 0 220 140"
    className="absolute -bottom-4 -right-4 w-48 -rotate-3 drop-shadow-xl"
    aria-hidden="true"
  >
    <rect x="0" y="0" width="220" height="140" rx="10" fill="#011627" stroke="rgba(71,218,214,0.3)" />
    <circle cx="14" cy="12" r="3" fill="#47DAD6" opacity="0.6" />
    <circle cx="26" cy="12" r="3" fill="#0179B1" opacity="0.6" />
    <circle cx="38" cy="12" r="3" fill="#ffffff" opacity="0.25" />
    <line x1="0" y1="24" x2="220" y2="24" stroke="rgba(255,255,255,0.1)" />
    <rect x="14" y="38" width="90" height="10" rx="3" fill="#0179B1" />
    <rect x="14" y="56" width="130" height="10" rx="3" fill="#47DAD6" opacity="0.8" />
    <rect x="14" y="74" width="70" height="10" rx="3" fill="#0179B1" opacity="0.7" />
    <rect x="14" y="92" width="110" height="10" rx="3" fill="#47DAD6" opacity="0.5" />
    <rect x="14" y="110" width="50" height="10" rx="3" fill="#0179B1" opacity="0.5" />
    <rect x="160" y="38" width="46" height="82" rx="4" fill="rgba(71,218,214,0.12)" stroke="rgba(71,218,214,0.3)" />
  </svg>
);

const DemoLink = ({ href }: { href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#47DAD6] hover:underline"
  >
    Ver demo
    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
  </a>
);

const Badge = ({ label, className }: { label: string; className: string }) => (
  <span className={`inline-block self-start px-2.5 py-1 rounded-md text-[0.65rem] font-bold tracking-widest uppercase ${className}`}>
    {label}
  </span>
);

const ProductsSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [sabuesoRect, setSabuesoRect] = useState<DOMRect | null>(null);

  const openSabueso = (target: HTMLElement) => {
    setSabuesoRect(target.getBoundingClientRect());
  };

  return (
    <section
      id="productos"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-[#011627] flex items-center"
    >
      <div
        ref={ref}
        className={`container mx-auto px-4 py-24 md:py-0 md:pt-24 md:pb-10 w-full max-w-6xl flex flex-col transition-all duration-700 ease-out ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
      >
        <div className="text-center mb-8">
          <h2 className="font-bold text-[clamp(1.8rem,3.5vw,3rem)] bg-gradient-to-r from-white to-[#47DAD6] bg-clip-text text-transparent">
            Lo que hemos construido
          </h2>
          <p className="mt-3 text-white/40">
            6 productos en producción · salud, mascotas, belleza, wellness, fiscal y finanzas
          </p>
        </div>

        {/* Bento grid asimétrico */}
        <div className="grid gap-3 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 md:max-h-[58vh] min-h-0">
          {/* MedicLink: 2 filas */}
          <article className="group relative overflow-hidden md:row-span-2 rounded-2xl p-6 border border-[#47DAD6]/15 bg-gradient-to-br from-[#013762] to-[#0c2d4a] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#47DAD6]/40">
            <Badge label="Salud" className="bg-[#47DAD6]/15 text-[#47DAD6]" />
            <h3 className="mt-4 text-2xl font-bold text-white">MedicLink</h3>
            <p className="mt-3 text-white/60 leading-relaxed max-w-sm">
              SaaS multi-tenant de gestión clínica: agenda de citas, bot de Telegram con
              reservas, especialistas y horarios, lista de espera y reportes PDF/Excel.
              Panel Super Admin para operar varias clínicas.
            </p>
            <p className="mt-4 text-xs text-white/35 tracking-wide">
              React/TypeScript · Supabase · n8n · Groq LLM
            </p>
            <DeviceFrame />
          </article>

          {/* Sabueso: clic expande el detalle */}
          <article
            role="button"
            tabIndex={0}
            aria-label="Ver detalle de Sabueso"
            onClick={(e) => openSabueso(e.currentTarget)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openSabueso(e.currentTarget);
              }
            }}
            className="group relative overflow-hidden rounded-2xl p-5 bg-gradient-to-br from-[#0179B1] to-[#013762] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#47DAD6]"
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Mascotas" className="bg-white/15 text-white" />
            <h3 className="mt-3 text-lg font-bold text-white">Sabueso</h3>
            <p className="mt-2 text-sm text-white/60 leading-snug">
              Gestión para guarderías caninas: asistencia, semáforo de salud y vacunas,
              comunicación con dueños.
            </p>
            <DemoLink href="https://perro-pal-manage.lovable.app" />
            <PawPrint
              className="absolute -bottom-3 -right-3 w-20 h-20 text-white/10"
              aria-hidden="true"
            />
          </article>

          {/* Naila Art */}
          <article className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.04] border border-white/[0.08] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25">
            <Badge label="Belleza" className="bg-[#f9a8d4]/10 text-[#f9a8d4]" />
            <h3 className="mt-3 text-lg font-bold text-white">Naila Art</h3>
            <p className="mt-2 text-sm text-white/60 leading-snug">
              ERP para salones de uñas: costo por minuto, POS con cronómetro de
              rentabilidad e inventario.
            </p>
            <DemoLink href="https://nail-chic-system.lovable.app" />
          </article>

          {/* CLIOMM */}
          <article className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.04] border border-white/[0.08] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25">
            <Badge label="Wellness" className="bg-[#6ee7b7]/10 text-[#6ee7b7]" />
            <h3 className="mt-3 text-lg font-bold text-white">CLIOMM</h3>
            <p className="mt-2 text-sm text-white/60 leading-snug">
              Reservas para estudios de pilates y meditación con pagos integrados vía
              Mercado Pago.
            </p>
          </article>

          {/* SAT Harmony */}
          <article className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.04] border border-white/[0.08] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25">
            <Badge label="Fiscal" className="bg-[#fcd34d]/10 text-[#fcd34d]" />
            <h3 className="mt-3 text-lg font-bold text-white">SAT Harmony</h3>
            <p className="mt-2 text-sm text-white/60 leading-snug">
              Automatización fiscal: sincronización con SAT, bóveda XML, facturas y RFC.
            </p>
            <DemoLink href="https://sat-swift-vault.lovable.app" />
          </article>
        </div>

        {/* FinTrack: fila horizontal */}
        <article className="group mt-3 rounded-2xl px-6 py-4 bg-[#0179B1]/10 border border-[#0179B1]/20 flex flex-col sm:flex-row sm:items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#0179B1]/50">
          <Badge label="Finanzas" className="bg-[#a5b4fc]/10 text-[#a5b4fc]" />
          <div className="flex-1">
            <h3 className="text-lg font-bold text-white inline">FinTrack</h3>
            <span className="ml-3 text-sm text-white/60">Gestión financiera personal y empresarial.</span>
          </div>
          <a
            href="https://credit-crusader.lovable.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#47DAD6] hover:underline shrink-0"
          >
            Ver demo
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </article>
      </div>

      {sabuesoRect && <SabuesoOverlay originRect={sabuesoRect} onClose={() => setSabuesoRect(null)} />}
    </section>
  );
};

export default ProductsSection;
