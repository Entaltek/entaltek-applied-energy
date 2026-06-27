import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo_entaltek_solo.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "Inicio", id: "hero" },
    { label: "Soluciones", id: "solutions" },
    { label: "Proceso", id: "process" },
    { label: "Marca", id: "brand" },
    { label: "Clientes", id: "audiences" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 hover:opacity-80 transition-smooth"
            aria-label="Ir al inicio"
          >
            <img src={logo} alt="Entaltek Logo" className="h-12 md:h-14 w-auto" />
            <span className={`text-2xl md:text-3xl font-bold ${isScrolled ? "text-foreground" : "text-white"}`}>
              ENTALTEK
            </span>
          </button>

          <div className="hidden lg:flex items-center space-x-3">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                size="sm"
                className={`${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-white hover:bg-white/20 bg-white/10"
                } transition-smooth font-medium`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              size="sm"
              onClick={() => scrollToSection("contact")}
              className={`${
                isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"
              } transition-smooth font-semibold`}
            >
              Agenda diagnóstico
            </Button>
          </div>

          <button
            className={`lg:hidden p-2 rounded-lg transition-smooth ${
              isScrolled ? "hover:bg-muted text-foreground" : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Abrir menú"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`lg:hidden backdrop-blur-md border-t animate-fade-in ${
          isScrolled ? "bg-background/98 border-border" : "bg-secondary/95 border-white/10"
        }`}>
          <div className="container mx-auto px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                variant="ghost"
                className={`w-full justify-start transition-smooth font-medium ${
                  isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white hover:text-primary"
                }`}
              >
                {item.label}
              </Button>
            ))}
            <Button
              className={`w-full mt-4 transition-smooth ${
                isScrolled ? "bg-primary text-white hover:bg-primary/90" : "bg-white text-primary hover:bg-white/90"
              }`}
              onClick={() => scrollToSection("contact")}
            >
              Agenda diagnóstico
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
