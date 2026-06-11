import { useCallback, useEffect, useState } from "react";
import { X, ArrowUpRight, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

const EXPAND_MS = 550;

export type ProductDetail = {
  badge: { label: string; className: string };
  /** Color de acento del producto (clases tailwind de texto/fondo). */
  accentText: string;
  accentBg: string;
  title: string;
  tagline: string;
  intro: string;
  demoUrl?: string;
  hero: { src: string; alt: string; className?: string };
  stats?: { value: string; label: string }[];
  pillars: { title: string; description: string }[];
  modulesTitle: string;
  modules: { icon: LucideIcon; name: string; description: string }[];
  gallery?: { src: string; alt: string; wide: boolean }[];
};

type Props = {
  detail: ProductDetail;
  originRect: DOMRect;
  onClose: () => void;
};

const ProductOverlay = ({ detail, originRect, onClose }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClose = useCallback(() => {
    setExpanded(false);
    setTimeout(onClose, EXPAND_MS);
  }, [onClose]);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setExpanded(true));

    const main = document.getElementById("main-scroll");
    if (main) main.style.overflow = "hidden";

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      cancelAnimationFrame(raf);
      if (main) main.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [handleClose]);

  // FLIP: el panel nace en el rect de la card y se expande a viewport completo.
  const boxStyle: React.CSSProperties = expanded
    ? { top: 0, left: 0, width: "100vw", height: "100vh", borderRadius: 0 }
    : {
        top: originRect.top,
        left: originRect.left,
        width: originRect.width,
        height: originRect.height,
        borderRadius: 16,
      };

  const reveal = (index: number, className = ""): { className: string; style: React.CSSProperties } => ({
    className: `${className} transition-all duration-500 ease-out ${
      expanded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
    }`,
    style: { transitionDelay: expanded ? `${280 + index * 90}ms` : "0ms" },
  });

  return (
    <div
      className="fixed z-[60] overflow-hidden bg-gradient-to-br from-[#0179B1] via-[#013762] to-[#011627]"
      style={{ ...boxStyle, transition: `all ${EXPAND_MS}ms cubic-bezier(0.32, 0.72, 0, 1)` }}
      role="dialog"
      aria-modal="true"
      aria-label={`Detalle del producto ${detail.title}`}
    >
      <div
        className={`h-full overflow-y-auto overscroll-contain transition-opacity duration-300 ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Barra superior */}
          <div {...reveal(0, "flex items-center justify-between")}>
            <span
              className={`px-2.5 py-1 rounded-md text-[0.65rem] font-bold tracking-widest uppercase ${detail.badge.className}`}
            >
              {detail.badge.label}
            </span>
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
              aria-label="Cerrar detalle"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Encabezado + visual */}
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div {...reveal(1)}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">{detail.title}</h2>
              <p className={`mt-2 text-lg font-medium ${detail.accentText}`}>{detail.tagline}</p>
              <p className="mt-4 text-white/70 leading-relaxed">{detail.intro}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {detail.demoUrl && (
                  <a
                    href={detail.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg font-semibold text-[#011627] hover:bg-white transition-colors ${detail.accentBg}`}
                  >
                    Ver demo en vivo
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </a>
                )}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-white/30 text-white font-medium hover:border-white hover:bg-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Quiero algo así
                </a>
              </div>
            </div>
            <div {...reveal(2)}>
              <img
                src={detail.hero.src}
                alt={detail.hero.alt}
                className={detail.hero.className ?? "w-full max-w-md mx-auto drop-shadow-2xl"}
                loading="lazy"
              />
            </div>
          </div>

          {/* Métricas de arquitectura */}
          {detail.stats && (
            <div {...reveal(3, "mt-12 flex flex-wrap gap-8 rounded-xl bg-white/[0.06] border border-white/10 px-6 py-5")}>
              {detail.stats.map((stat) => (
                <div key={stat.label}>
                  <p className={`text-2xl font-bold leading-none ${detail.accentText}`}>{stat.value}</p>
                  <p className="mt-1.5 text-[0.7rem] uppercase tracking-wider text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Pilares */}
          <div {...reveal(4, "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4")}>
            {detail.pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl bg-white/[0.06] border border-white/10 p-5">
                <h3 className="font-bold text-white text-sm">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Módulos */}
          <div {...reveal(5, "mt-14")}>
            <h3 className="text-2xl font-bold text-white">{detail.modulesTitle}</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-6">
              {detail.modules.map((module) => {
                const Icon = module.icon;
                return (
                  <div key={module.name} className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-white/10 shrink-0">
                      <Icon className={`w-5 h-5 ${detail.accentText}`} aria-hidden="true" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{module.name}</h4>
                      <p className="mt-1 text-sm text-white/60 leading-relaxed">{module.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Galería */}
          {detail.gallery && detail.gallery.length > 0 ? (
            <div {...reveal(6, "mt-14 pb-10")}>
              <h3 className="text-2xl font-bold text-white">El sistema en pantalla</h3>
              <div className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
                {detail.gallery.map((shot) => (
                  <img
                    key={shot.src}
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className={`snap-start shrink-0 rounded-xl border border-white/10 ${
                      shot.wide ? "h-56 md:h-72" : "h-72 md:h-80"
                    } w-auto`}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="pb-10" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductOverlay;
