import { useState } from "react";
import { PawPrint, ArrowUpRight, Maximize2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import ProductOverlay, { type ProductDetail } from "@/components/ProductOverlay";
import { sabuesoDetail, nailaDetail, mediclinkDetail, pilatesDetail, satHarmonyDetail, nodoDetail } from "@/lib/productDetails";

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
  const [active, setActive] = useState<{ detail: ProductDetail; rect: DOMRect } | null>(null);

  const openDetail = (detail: ProductDetail) => (target: HTMLElement) => {
    setActive({ detail, rect: target.getBoundingClientRect() });
  };

  const expandableProps = (detail: ProductDetail) => {
    const open = openDetail(detail);
    return {
      role: "button" as const,
      tabIndex: 0,
      "aria-label": `Ver detalle de ${detail.title}`,
      onClick: (e: React.MouseEvent<HTMLElement>) => open(e.currentTarget),
      onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open(e.currentTarget);
        }
      },
    };
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
            7 productos · salud, mascotas, belleza, wellness, fiscal, finanzas e inmobiliario
          </p>
        </div>

        {/* Bento grid asimétrico */}
        <div className="grid gap-3 md:grid-cols-[2fr_1fr_1fr] md:grid-rows-2 md:max-h-[58vh] min-h-0">
          {/* MedicLink: 2 filas, clic expande el detalle */}
          <article
            {...expandableProps(mediclinkDetail)}
            className="group relative overflow-hidden md:row-span-2 rounded-2xl p-6 border border-[#47DAD6]/15 bg-gradient-to-br from-[#013762] to-[#0c2d4a] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#47DAD6]/40 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#47DAD6]"
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Salud" className="bg-[#7dd3fc]/15 text-[#7dd3fc]" />
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
            {...expandableProps(sabuesoDetail)}
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

          {/* Naila Art: clic expande el detalle */}
          <article
            {...expandableProps(nailaDetail)}
            className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.04] border border-white/[0.08] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f9a8d4]"
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Belleza" className="bg-[#f9a8d4]/10 text-[#f9a8d4]" />
            <h3 className="mt-3 text-lg font-bold text-white">Naila Art</h3>
            <p className="mt-2 text-sm text-white/60 leading-snug">
              ERP para salones de uñas: costo por minuto, POS con cronómetro de
              rentabilidad e inventario.
            </p>
            <DemoLink href="https://nail-chic-system.lovable.app" />
          </article>

          {/* Entaltek Pilates: clic expande el detalle */}
          <article
            {...expandableProps(pilatesDetail)}
            className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.04] border border-white/[0.08] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6ee7b7]"
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Wellness" className="bg-[#6ee7b7]/10 text-[#6ee7b7]" />
            <h3 className="mt-3 text-lg font-bold text-white">Entaltek Pilates</h3>
            <p className="mt-2 text-sm text-white/60 leading-snug">
              App móvil para estudios de pilates. Los clientes reservan clases desde su
              celular, gestionan su perfil y pagan directamente con Mercado Pago. Menos
              WhatsApp, más autonomía.
            </p>
            <p className="mt-2 text-xs text-white/35 tracking-wide">
              Flutter · Firebase · Firestore · Mercado Pago
            </p>
            <span className="inline-flex items-center gap-1 mt-3 text-sm font-medium text-[#6ee7b7]">
              Ver producto →
            </span>
          </article>

          {/* SAT Harmony: clic expande el detalle */}
          <article
            {...expandableProps(satHarmonyDetail)}
            className="group relative overflow-hidden rounded-2xl p-5 bg-white/[0.04] border border-white/[0.08] flex flex-col transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/25 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fcd34d]"
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Fiscal" className="bg-[#fcd34d]/10 text-[#fcd34d]" />
            <h3 className="mt-3 text-lg font-bold text-white">SAT Harmony</h3>
            <p className="mt-2 text-sm text-white/60 leading-snug">
              Automatización fiscal: sincronización con SAT, bóveda XML, facturas y RFC.
            </p>
            <DemoLink href="https://sat-swift-vault.lovable.app" />
          </article>
        </div>

        {/* Fila inferior: Entaltek Nodo + FinTrack */}
        <div className="grid gap-3 md:grid-cols-2 mt-3">
          {/* Entaltek Nodo: clic expande el detalle */}
          <article
            {...expandableProps(nodoDetail)}
            className="group relative overflow-hidden rounded-2xl px-6 py-4 bg-[#a78bfa]/10 border border-[#a78bfa]/20 flex flex-col justify-center transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#a78bfa]/50 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a78bfa]"
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
              <Badge label="Inmobiliario" className="bg-[#a78bfa]/10 text-[#a78bfa]" />
              <div className="flex-1">
                <h3 className="text-lg font-bold text-white inline">Entaltek Nodo</h3>
                <span className="ml-3 text-sm text-white/60">
                  Expedientes de renta, CRM de leads y propiedades para agentes inmobiliarios.
                </span>
              </div>
            </div>
          </article>

          {/* FinTrack */}
          <article className="group rounded-2xl px-6 py-4 bg-[#0179B1]/10 border border-[#0179B1]/20 flex flex-col sm:flex-row sm:items-center gap-3 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:border-[#0179B1]/50">
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
      </div>

      {active && (
        <ProductOverlay detail={active.detail} originRect={active.rect} onClose={() => setActive(null)} />
      )}
    </section>
  );
};

export default ProductsSection;
