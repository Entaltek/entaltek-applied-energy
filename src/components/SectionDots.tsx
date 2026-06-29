import { useEffect, useState } from "react";

const sections = [
  { id: "hero", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "productos", label: "Productos" },
  { id: "por-que-entaltek", label: "Por qué Entaltek" },
  { id: "adn-marca", label: "ADN de marca" },
  { id: "contacto", label: "Contacto" },
];

const lightSections = new Set(["servicios", "contacto"]);

const SectionDots = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers = sections.map(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.5 },
      );
      observer.observe(el);
      return observer;
    });
    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  const onLight = lightSections.has(active);

  return (
    <nav
      className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-4"
      aria-label="Navegación de secciones"
    >
      {sections.map((section) => {
        const isActive = active === section.id;
        return (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })}
            className="group relative flex items-center justify-center w-4 h-4"
            aria-label={`Ir a ${section.label}`}
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                isActive
                  ? "w-3 h-3 bg-[#47DAD6] shadow-[0_0_10px_rgba(71,218,214,0.8)]"
                  : onLight
                    ? "w-2 h-2 bg-[#013762]/30 group-hover:bg-[#013762]/60"
                    : "w-2 h-2 bg-white/30 group-hover:bg-white/70"
              }`}
            />
            <span className="absolute right-7 px-2.5 py-1 rounded-md bg-[#011627]/90 text-white text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              {section.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default SectionDots;
