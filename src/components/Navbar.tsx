import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";
import logoMark from "@/assets/logo_entaltek_solo.svg";

const navItems = [
  { label: "Servicios", id: "servicios" },
  { label: "Productos", id: "productos" },
  { label: "Por qué Entaltek", id: "por-que-entaltek" },
  { label: "ADN", id: "adn-marca" },
  { label: "Contacto", id: "contacto" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // El scroll vive en el contenedor de scroll-snap, no en window.
    const container = document.getElementById("main-scroll");
    const target: HTMLElement | Window = container ?? window;
    const handleScroll = () => {
      setIsScrolled((container ? container.scrollTop : window.scrollY) > 50);
    };
    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: isScrolled ? "rgba(13, 44, 66, 0.78)" : "transparent",
          backdropFilter: isScrolled ? "blur(18px)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(18px)" : "none",
          borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
          transition: "background 400ms ease, backdrop-filter 400ms ease, border-color 400ms ease",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              aria-label="Ir al inicio"
            >
              <img src={logoMark} alt="" className="h-10 md:h-12 w-auto" />
              <span className="text-xl md:text-2xl font-bold text-white tracking-wide">ENTALTEK</span>
            </button>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-white/80 hover:text-[#47DAD6] transition-colors duration-300"
                >
                  {item.label}
                </button>
              ))}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-3 px-5 py-2 rounded-lg bg-[#0179B1] text-white text-sm font-semibold hover:bg-[#47DAD6] hover:text-[#011627] transition-colors duration-300"
              >
                Escríbenos
              </a>
            </div>

            {/* Mobile trigger */}
            <button
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={isMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay móvil */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-black/50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Panel móvil deslizante desde la derecha */}
      <div
        className={`lg:hidden fixed inset-y-0 right-0 z-50 w-72 max-w-[85vw] bg-[#0D2C42]/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300 ease-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú de navegación"
        aria-hidden={!isMenuOpen}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <img src={logoMark} alt="" className="h-8 w-auto" />
            <span className="text-lg font-bold text-white">ENTALTEK</span>
          </div>
          <button
            className="p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Cerrar menú"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="w-full text-left px-4 py-3 rounded-lg text-white/80 hover:text-[#47DAD6] hover:bg-white/5 font-medium transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center mt-4 px-5 py-3 rounded-lg bg-[#0179B1] text-white font-semibold hover:bg-[#47DAD6] hover:text-[#011627] transition-colors"
          >
            Escríbenos
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
