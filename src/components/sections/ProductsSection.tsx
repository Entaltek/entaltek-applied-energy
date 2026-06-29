import { useState } from "react";
import { PawPrint, ArrowUpRight, Maximize2 } from "lucide-react";
import { useInView } from "@/hooks/useInView";
import ProductOverlay, { type ProductDetail } from "@/components/ProductOverlay";
import { sabuesoDetail, nailaDetail, mediclinkDetail, pilatesDetail, satHarmonyDetail, nodoDetail } from "@/lib/productDetails";

const DeviceFrame = () => (
  <svg
    viewBox="0 0 220 140"
    className="absolute -bottom-5 -right-5 w-52 lg:w-60 -rotate-3 drop-shadow-xl opacity-90"
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

const DemoLink = ({ href }: { href?: string }) => {
  if (!href) {
    return (
      <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#47DAD6]">
        Ver proyecto
        <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
      </span>
    );
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => e.stopPropagation()}
      className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-[#47DAD6] hover:underline"
    >
      Ver proyecto
      <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
    </a>
  );
};

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

  const cardIn = inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8";
  const cardDelay = (index: number) => ({ transitionDelay: inView ? `${120 + index * 90}ms` : "0ms" });

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
        className="mx-auto w-full max-w-[92rem] px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-12 flex flex-col"
      >
        <div
          className={`text-center mb-10 md:mb-12 max-w-4xl mx-auto transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
        >
          <h2 className="font-bold text-[clamp(1.8rem,3.5vw,3rem)] bg-gradient-to-r from-white to-[#47DAD6] bg-clip-text text-transparent leading-tight uppercase">
            Experiencia Aplicada
          </h2>
          <p className="mt-4 text-white/60 text-base md:text-lg max-w-3xl mx-auto">
            Soluciones digitales desarrolladas para mejorar la operación, reducir trabajo manual y convertir procesos dispersos en sistemas claros.
          </p>
        </div>

        {/* Showcase horizontal amplio */}
        <div className="grid gap-3 md:gap-4 lg:gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-12 auto-rows-fr w-full">

          {/* 1. Clínicas Entaltek (Principal grande) - Salud: cian suave */}
          <article
            {...expandableProps(mediclinkDetail)}
            style={cardDelay(0)}
            className={`group relative overflow-hidden md:col-span-2 lg:col-span-6 lg:row-span-2 rounded-[1.5rem] p-6 md:p-8 lg:p-10 border border-[#7dd3fc]/15 bg-gradient-to-br from-[#7dd3fc]/10 via-[#013762]/45 to-[#011627] flex flex-col justify-between min-h-[360px] lg:min-h-[420px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#7dd3fc]/40 hover:shadow-[0_0_24px_rgba(125,211,252,0.1)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#7dd3fc] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-5 right-5 w-5 h-5 text-[#7dd3fc]/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <div className="max-w-xl">
              <Badge label="Salud" className="bg-[#7dd3fc]/15 text-[#7dd3fc] mb-4" />
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight">Clínicas Entaltek</h3>
              <p className="mt-3 text-white/70 leading-relaxed max-w-lg text-sm lg:text-base">
                Sistema para clínicas y consultorios con agenda de citas, especialistas, horarios, lista de espera, reportes y panel administrativo.
              </p>
            </div>
            <div className="mt-6">
              <DemoLink href="https://demo-mediclink.lovable.app" />
            </div>
            <DeviceFrame />
          </article>

          {/* 2. CFDI Entaltek - Fiscal: dorado tenue */}
          <article
            {...expandableProps(satHarmonyDetail)}
            style={cardDelay(1)}
            className={`group relative overflow-hidden rounded-[1.25rem] p-5 md:p-6 bg-gradient-to-br from-[#fcd34d]/7 via-[#0b1f2e] to-[#011627] border border-[#fcd34d]/15 flex flex-col lg:col-span-2 min-h-[170px] lg:min-h-[200px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#fcd34d]/35 hover:shadow-[0_0_15px_rgba(252,211,77,0.06)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fcd34d] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-[#fcd34d]/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Fiscal" className="bg-[#fcd34d]/10 text-[#fcd34d] mb-auto" />
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white leading-tight">CFDI Entaltek</h3>
              <p className="mt-2 text-white/70 text-sm leading-snug line-clamp-2">
                Herramienta para convertir XML y ZIP de CFDI en información clara, revisable y exportable a Excel.
              </p>
              <DemoLink />
            </div>
          </article>

          {/* 3. Rentas Entaltek - Inmobiliario: violeta tenue */}
          <article
            {...expandableProps(nodoDetail)}
            style={cardDelay(2)}
            className={`group relative overflow-hidden rounded-[1.25rem] p-5 md:p-6 bg-gradient-to-br from-[#a78bfa]/7 via-[#101b33] to-[#011627] border border-[#a78bfa]/15 flex flex-col lg:col-span-2 min-h-[170px] lg:min-h-[200px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#a78bfa]/35 hover:shadow-[0_0_15px_rgba(167,139,250,0.06)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a78bfa] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-[#a78bfa]/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Inmobiliario" className="bg-[#a78bfa]/10 text-[#a78bfa] mb-auto" />
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white leading-tight">Rentas Entaltek</h3>
              <p className="mt-2 text-white/70 text-sm leading-snug line-clamp-2">
                CRM inmobiliario para organizar propiedades, expedientes de renta, prospectos, documentos y seguimiento comercial.
              </p>
              <DemoLink />
            </div>
          </article>

          {/* 5. Reservas Entaltek - Reservas: verde turquesa tenue */}
          <article
            {...expandableProps(pilatesDetail)}
            style={cardDelay(4)}
            className={`group relative overflow-hidden rounded-[1.25rem] p-5 md:p-6 bg-gradient-to-br from-[#34d399]/7 via-[#062b2e] to-[#011627] border border-[#34d399]/15 flex flex-col lg:col-span-2 min-h-[170px] lg:min-h-[200px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#34d399]/35 hover:shadow-[0_0_15px_rgba(52,211,153,0.06)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#34d399] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-[#34d399]/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Reservas" className="bg-[#34d399]/10 text-[#34d399] mb-auto" />
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white leading-tight">Reservas Entaltek</h3>
              <p className="mt-2 text-white/70 text-sm leading-snug line-clamp-2">
                Sistema para clases, estudios y servicios con horarios programados, reservas en línea, perfiles de clientes y pagos.
              </p>
              <DemoLink />
            </div>
          </article>

          {/* 6. Salones Entaltek - Servicios: magenta tenue */}
          <article
            {...expandableProps(nailaDetail)}
            style={cardDelay(5)}
            className={`group relative overflow-hidden rounded-[1.25rem] p-5 md:p-6 bg-gradient-to-br from-[#f472b6]/7 via-[#24142a] to-[#011627] border border-[#f472b6]/15 flex flex-col lg:col-span-2 min-h-[170px] lg:min-h-[200px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#f472b6]/35 hover:shadow-[0_0_15px_rgba(244,114,182,0.06)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f472b6] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-[#f472b6]/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Servicios" className="bg-[#f472b6]/10 text-[#f472b6] mb-auto" />
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white leading-tight">Salones Entaltek</h3>
              <p className="mt-2 text-white/70 text-sm leading-snug line-clamp-2">
                Herramienta para salones y servicios de belleza con control de citas, tiempos de atención, inventario, costos y rentabilidad.
              </p>
              <DemoLink href="https://nail-chic-system.lovable.app" />
            </div>
          </article>

          {/* 7. Guarderías Entaltek - Operación: slate azulado */}
          <article
            {...expandableProps(sabuesoDetail)}
            style={cardDelay(6)}
            className={`group relative overflow-hidden rounded-[1.25rem] p-5 md:p-6 bg-gradient-to-br from-[#94a3b8]/7 via-[#102233] to-[#011627] border border-[#94a3b8]/15 flex flex-col lg:col-span-2 min-h-[170px] lg:min-h-[200px] transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#94a3b8]/35 hover:shadow-[0_0_15px_rgba(148,163,184,0.06)] cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#94a3b8] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-4 right-4 w-4 h-4 text-[#94a3b8]/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Operación" className="bg-[#94a3b8]/10 text-[#94a3b8] mb-auto" />
            <div className="mt-4">
              <h3 className="text-lg font-bold text-white leading-tight">Guarderías Entaltek</h3>
              <p className="mt-2 text-white/70 text-sm leading-snug line-clamp-2">
                Plataforma para negocios de cuidado animal con registro de mascotas, asistencia, vacunas, estado de salud y comunicación con clientes.
              </p>
              <DemoLink href="https://perro-pal-manage.lovable.app" />
            </div>
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
