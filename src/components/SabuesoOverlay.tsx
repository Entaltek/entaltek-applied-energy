import { useCallback, useEffect, useState } from "react";
import { X, ArrowUpRight, MessageCircle, LayoutDashboard, Dog, Users, HeartHandshake, CalendarCheck, Settings } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import laptopDashboard from "@/assets/sabueso/laptop-dashboard.webp";
import shotPadres from "@/assets/sabueso/padres.webp";
import shotCuidadores from "@/assets/sabueso/cuidadores.webp";
import shotConfiguracion from "@/assets/sabueso/configuracion.webp";
import shotMovilDashboard from "@/assets/sabueso/movil-dashboard.webp";
import shotMovilPerrhijos from "@/assets/sabueso/movil-perrhijos.webp";
import shotMovilPerfil from "@/assets/sabueso/movil-perfil.webp";

const EXPAND_MS = 550;

const pillars = [
  {
    title: "Sencillez y orden",
    description: "Registro y lectura guiados de información para minimizar errores humanos.",
  },
  {
    title: "Evidencias multimedia",
    description: "Almacenamiento y envío de fotos y video sobre el estado de cada perrhijo.",
  },
  {
    title: "Paquetes flexibles",
    description: "Paquetes por servicio que se crean y actualizan sin fricción: hospedaje, guardería, día perrón, baño.",
  },
  {
    title: "Expedientes automáticos",
    description: "Historial de indicaciones, vacunas y medicinas con acceso sencillo y transparente.",
  },
];

const modules = [
  {
    icon: LayoutDashboard,
    name: "Dashboard",
    description:
      "Tablero en tiempo real: ocupación actual, ingresos del día y gráfico de horas pico. Elimina los puntos ciegos del negocio.",
  },
  {
    icon: Dog,
    name: "Perrhijos",
    description:
      "La identidad digital de cada perrhijo: historial médico, instrucciones de cuidado y galería de fotos. Incluye el Semáforo de Salud: validación visual de vacunas, alergias críticas y alertas de medicamentos.",
  },
  {
    icon: HeartHandshake,
    name: "Padres y madres",
    description:
      "Familias con varios perrhijos bajo un mismo contacto, búsqueda por nombre o correo e historial de visitas de todo el grupo.",
  },
  {
    icon: Users,
    name: "Cuidadores",
    description:
      "Personal filtrable por rol — cuidadores, estilistas, entrenadores y administrativos — con la carga de trabajo de cada quien a la vista.",
  },
  {
    icon: CalendarCheck,
    name: "Asistencia y servicios",
    description:
      "Catálogo visual con precios y duraciones editables en tiempo real, con códigos de color por servicio para identificación rápida.",
  },
  {
    icon: Settings,
    name: "Configuración",
    description:
      "Datos del negocio, tema visual y reglas de notificaciones automáticas: alertas de vacunas y recordatorios de check-out.",
  },
];

const gallery = [
  { src: shotPadres, alt: "Módulo de padres y madres de Sabueso en laptop", wide: true },
  { src: shotCuidadores, alt: "Módulo de cuidadores de Sabueso en laptop", wide: true },
  { src: shotConfiguracion, alt: "Módulo de configuración de Sabueso en laptop", wide: true },
  { src: shotMovilDashboard, alt: "Dashboard de Sabueso en un teléfono", wide: false },
  { src: shotMovilPerrhijos, alt: "Listado de perrhijos de Sabueso en un teléfono", wide: false },
  { src: shotMovilPerfil, alt: "Perfil de un perrhijo en Sabueso móvil", wide: false },
];

type Props = {
  originRect: DOMRect;
  onClose: () => void;
};

const SabuesoOverlay = ({ originRect, onClose }: Props) => {
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
      aria-label="Detalle del producto Sabueso"
    >
      <div
        className={`h-full overflow-y-auto overscroll-contain transition-opacity duration-300 ${
          expanded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-8 max-w-5xl">
          {/* Barra superior */}
          <div {...reveal(0, "flex items-center justify-between")}>
            <span className="px-2.5 py-1 rounded-md text-[0.65rem] font-bold tracking-widest uppercase bg-white/15 text-white">
              Mascotas
            </span>
            <button
              onClick={handleClose}
              className="p-2.5 rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
              aria-label="Cerrar detalle"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Encabezado + laptop */}
          <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
            <div {...reveal(1)}>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">Sabueso</h2>
              <p className="mt-2 text-lg text-[#47DAD6] font-medium">
                Plataforma de gestión integral para guarderías caninas
              </p>
              <p className="mt-4 text-white/70 leading-relaxed">
                Desarrollada para la operación real de Perromies: centraliza expedientes,
                asistencia, personal y comunicación con los dueños en un solo sistema,
                cuidando a los perrhijos como familia.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://perro-pal-manage.lovable.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#47DAD6] text-[#011627] font-semibold hover:bg-white transition-colors"
                >
                  Ver demo en vivo
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg border border-white/30 text-white font-medium hover:border-[#47DAD6] hover:text-[#47DAD6] transition-colors"
                >
                  <MessageCircle className="w-4 h-4" aria-hidden="true" />
                  Quiero algo así
                </a>
              </div>
            </div>
            <div {...reveal(2)}>
              <img
                src={laptopDashboard}
                alt="Dashboard de Sabueso en una laptop"
                className="w-full max-w-md mx-auto drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Pilares */}
          <div {...reveal(3, "mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4")}>
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-xl bg-white/[0.06] border border-white/10 p-5">
                <h3 className="font-bold text-white text-sm">{pillar.title}</h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>

          {/* Módulos */}
          <div {...reveal(4, "mt-14")}>
            <h3 className="text-2xl font-bold text-white">7 módulos, una sola operación</h3>
            <div className="mt-6 grid md:grid-cols-2 gap-x-10 gap-y-6">
              {modules.map((module) => {
                const Icon = module.icon;
                return (
                  <div key={module.name} className="flex items-start gap-4">
                    <div className="p-2.5 rounded-lg bg-[#47DAD6]/15 shrink-0">
                      <Icon className="w-5 h-5 text-[#47DAD6]" aria-hidden="true" />
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
          <div {...reveal(5, "mt-14 pb-10")}>
            <h3 className="text-2xl font-bold text-white">El sistema en pantalla</h3>
            <div className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4">
              {gallery.map((shot) => (
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
        </div>
      </div>
    </div>
  );
};

export default SabuesoOverlay;
