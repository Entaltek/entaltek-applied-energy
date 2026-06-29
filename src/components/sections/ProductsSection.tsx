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
        className="container mx-auto px-4 w-full max-w-7xl flex flex-col"
      >
        <div
          className={`text-center mb-12 max-w-2xl mx-auto transition-all duration-700 ease-out ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h2 className="font-bold text-[clamp(1.8rem,3.5vw,3rem)] bg-gradient-to-r from-white to-[#47DAD6] bg-clip-text text-transparent leading-tight">
            Lo que hemos construido
          </h2>
          <p className="mt-4 text-white/60 text-base md:text-lg">
            Soluciones diseñadas para ordenar operaciones, automatizar procesos y dar visibilidad a negocios reales.
          </p>
        </div>

        {/* Bento Grid unificado */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 auto-rows-min">
          {/* Clínicas Entaltek (Principal grande) */}
          <article
            {...expandableProps(mediclinkDetail)}
            style={cardDelay(0)}
            className={`group relative overflow-hidden md:col-span-2 lg:row-span-2 lg:col-span-2 rounded-3xl p-7 md:p-10 border border-[#47DAD6]/15 bg-gradient-to-br from-[#013762] to-[#0c2d4a] flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#47DAD6]/40 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#47DAD6] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-6 right-6 w-5 h-5 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Salud" className="bg-[#7dd3fc]/15 text-[#7dd3fc]" />
            <h3 className="mt-5 text-3xl font-bold text-white">Clínicas Entaltek</h3>
            <p className="mt-3 text-white/70 leading-relaxed max-w-md text-base md:text-lg">
              Sistema para clínicas y consultorios con agenda de citas, especialistas, horarios, listas de espera, reportes y panel administrativo.
            </p>
            <DemoLink href="https://demo-mediclink.lovable.app" />
            <DeviceFrame />
          </article>

          {/* Guarderías Entaltek */}
          <article
            {...expandableProps(sabuesoDetail)}
            style={cardDelay(1)}
            className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-gradient-to-br from-[#0179B1] to-[#013762] border border-white/5 flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/20 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#47DAD6] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-5 right-5 w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Operación" className="bg-white/15 text-white" />
            <h3 className="mt-4 text-xl font-bold text-white">Guarderías Entaltek</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Plataforma para negocios de cuidado animal con control de mascotas, asistencia, vacunas, salud y comunicación con clientes.
            </p>
            <DemoLink href="https://perro-pal-manage.lovable.app" />
            <PawPrint
              className="absolute -bottom-4 -right-4 w-24 h-24 text-white/10"
              aria-hidden="true"
            />
          </article>

          {/* Salones Entaltek */}
          <article
            {...expandableProps(nailaDetail)}
            style={cardDelay(2)}
            className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/[0.03] border border-white/[0.08] flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/25 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f9a8d4] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-5 right-5 w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Servicios" className="bg-[#f9a8d4]/10 text-[#f9a8d4]" />
            <h3 className="mt-4 text-xl font-bold text-white">Salones Entaltek</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Sistema para salones y servicios de belleza con control de citas, tiempos de atención, inventario, costos y rentabilidad.
            </p>
            <DemoLink href="https://nail-chic-system.lovable.app" />
          </article>

          {/* Reservas Entaltek */}
          <article
            {...expandableProps(pilatesDetail)}
            style={cardDelay(3)}
            className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/[0.03] border border-white/[0.08] flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/25 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#6ee7b7] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-5 right-5 w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Reservas" className="bg-[#6ee7b7]/10 text-[#6ee7b7]" />
            <h3 className="mt-4 text-xl font-bold text-white">Reservas Entaltek</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              App para estudios y clases programadas, con reservas desde el celular, perfiles de clientes, pagos y gestión de horarios.
            </p>
            <DemoLink />
          </article>

          {/* CFDI Entaltek */}
          <article
            {...expandableProps(satHarmonyDetail)}
            style={cardDelay(4)}
            className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/[0.03] border border-white/[0.08] flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/25 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#fcd34d] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-5 right-5 w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Fiscal" className="bg-[#fcd34d]/10 text-[#fcd34d]" />
            <h3 className="mt-4 text-xl font-bold text-white">CFDI Entaltek</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Herramienta para convertir XML y ZIP de CFDI en información clara, revisable y exportable a Excel.
            </p>
            <DemoLink />
          </article>

          {/* Rentas Entaltek */}
          <article
            {...expandableProps(nodoDetail)}
            style={cardDelay(5)}
            className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-[#a78bfa]/[0.06] border border-[#a78bfa]/20 flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#a78bfa]/40 cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a78bfa] ${cardIn}`}
          >
            <Maximize2
              className="absolute top-5 right-5 w-4 h-4 text-white/40 opacity-0 group-hover:opacity-100 transition-opacity"
              aria-hidden="true"
            />
            <Badge label="Inmobiliario" className="bg-[#a78bfa]/15 text-[#a78bfa]" />
            <h3 className="mt-4 text-xl font-bold text-white">Rentas Entaltek</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              CRM inmobiliario para organizar propiedades, expedientes de renta, prospectos, documentos y seguimiento de leads.
            </p>
            <DemoLink />
          </article>

          {/* Finanzas Entaltek */}
          <article
            style={cardDelay(6)}
            className={`group relative overflow-hidden rounded-3xl p-6 md:p-8 bg-white/[0.03] border border-white/[0.08] flex flex-col transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#a5b4fc] ${cardIn}`}
          >
            <Badge label="Finanzas" className="bg-[#a5b4fc]/15 text-[#a5b4fc]" />
            <h3 className="mt-4 text-xl font-bold text-white">Finanzas Entaltek</h3>
            <p className="mt-2 text-sm text-white/70 leading-relaxed">
              Dashboard para visualizar ingresos, egresos, presupuestos y control financiero personal o empresarial.
            </p>
            <DemoLink />
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
