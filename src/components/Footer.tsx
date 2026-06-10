import { MapPin } from "lucide-react";
import logo from "@/assets/logo_entaltek.svg";
import { WHATSAPP_URL, CONTACT_EMAIL, LOCATION } from "@/lib/site";

const Footer = () => {
  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <img src={logo} alt="Logotipo de Entaltek" className="h-12 w-auto mb-4" />
              <p className="text-secondary-foreground/80 mb-3">
                Estudio de tecnología: SaaS a medida, automatización con IA y apps móviles.
              </p>
              <p className="flex items-center gap-2 text-secondary-foreground/80">
                <MapPin className="w-4 h-4 text-accent shrink-0" aria-hidden="true" />
                {LOCATION}
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Enlaces</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <button onClick={() => scrollTo("servicios")} className="hover:text-accent transition-smooth">
                    Servicios
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("por-que-entaltek")} className="hover:text-accent transition-smooth">
                    Por qué Entaltek
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollTo("contacto")} className="hover:text-accent transition-smooth">
                    Contacto
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contacto</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent transition-smooth">
                    {CONTACT_EMAIL}
                  </a>
                </li>
                <li>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-accent transition-smooth"
                  >
                    WhatsApp
                  </a>
                </li>
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
