import logo from "@/assets/logo_entaltek.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="md:col-span-1">
              <img src={logo} alt="Entaltek Logo" className="h-12 w-auto mb-4" />
              <p className="text-secondary-foreground/80">
                Software, automatización e IA aplicada para negocios reales.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Empresa</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary-foreground transition-smooth"
                  >
                    Quiénes somos
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary-foreground transition-smooth"
                  >
                    Proceso
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary-foreground transition-smooth"
                  >
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Soluciones</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>Entaltek CFDI</li>
                <li>Automatización operativa</li>
                <li>Gestión para talleres</li>
                <li>Marketplaces y productos web</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <a
                    href="mailto:contact@entaltek.com"
                    className="hover:text-primary-foreground transition-smooth"
                  >
                    contact@entaltek.com
                  </a>
                </li>
                <li>León, Guanajuato · México</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/60">
            <p>© {new Date().getFullYear()} ENTALTEK. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
