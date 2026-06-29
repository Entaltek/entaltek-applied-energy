import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import { useInView } from "@/hooks/useInView";
import { WHATSAPP_URL } from "@/lib/site";

const metrics = [
  { value: "León", label: "Guanajuato" },
  { value: "Diagnóstico", label: "sin compromiso" },
  { value: "Automatización", label: "IA" },
];

const HeroSection = () => {
  const { ref, inView } = useInView<HTMLDivElement>();
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const container = document.getElementById("main-scroll");
    const target: HTMLElement | Window = container ?? window;
    const handleScroll = () => {
      setHasScrolled((container ? container.scrollTop : window.scrollY) > 40);
    };
    target.addEventListener("scroll", handleScroll, { passive: true });
    return () => target.removeEventListener("scroll", handleScroll);
  }, []);

  const reveal = (index: number, className = "") => ({
    className: `${className} transition-all duration-700 ease-out ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`,
    style: { transitionDelay: inView ? `${index * 120}ms` : "0ms" },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden flex items-center justify-center"
      style={{
        background: `
          radial-gradient(circle at 15% 20%, rgba(71, 218, 214, 0.08), transparent 22%),
          radial-gradient(circle at 85% 80%, rgba(1, 121, 177, 0.10), transparent 20%),
          linear-gradient(135deg, #0D2C42 0%, #142F46 45%, #2A2C39 100%)
        `,
      }}
    >
      <ParticleCanvas />

      {/* Orbes de luz difusa */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#0179B1] opacity-10 blur-[100px] animate-orb"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full bg-[#47DAD6] opacity-07 blur-[100px] animate-orb"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      />

      <div ref={ref} className="relative z-10 container mx-auto px-4 py-24 text-center">

        <h1 {...reveal(1, "font-extrabold text-white leading-[1.1] text-[clamp(2.5rem,6vw,5rem)]")}>
          Soluciones digitales y automatización
          <br />
          <span className="bg-gradient-to-r from-[#AEEBE9] to-[#47DAD6] bg-clip-text text-transparent">
            para simplificar la operación de tu negocio
          </span>
        </h1>

        <p {...reveal(2, "mt-6 mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-[#B8C2CC]")}>
          Creamos sistemas, automatizaciones e integraciones que reducen tareas manuales, ordenan procesos y ayudan a pequeñas y medianas empresas a vender y operar mejor.
        </p>

        <div {...reveal(3, "mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center")}>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#3F67C6] text-white font-semibold hover:bg-[#5278d4] hover:scale-[1.04] hover:shadow-[0_8px_30px_rgba(63,103,198,0.40)] transition-all duration-300"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Escríbenos por WhatsApp
          </a>
          <button
            onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 rounded-lg border border-white/20 text-[#F5F7FA] font-medium hover:border-[#47DAD6]/60 hover:text-[#47DAD6] hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(71,218,214,0.15)] transition-all duration-300"
          >
            Ver productos →
          </button>
        </div>

        {/* Métricas en flujo para móvil y tablet */}
        <div {...reveal(4, "mt-12 grid grid-cols-3 gap-4 max-w-md mx-auto lg:hidden")}>
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <p className="text-xl font-bold text-[#47DAD6] leading-none">{metric.value}</p>
              <p className="mt-1.5 text-[0.65rem] uppercase tracking-wider text-white/40">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Glassmorphism: métricas en desktop */}
      <div
        className={`hidden lg:flex absolute bottom-10 right-10 z-10 gap-8 rounded-2xl p-5 border border-white/10 transition-all duration-700 ease-out hover:border-[#47DAD6]/40 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        style={{
          background: "rgba(13, 44, 66, 0.55)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          transitionDelay: inView ? "600ms" : "0ms",
        }}
      >
        {metrics.map((metric) => (
          <div key={metric.label} className="text-left">
            <p className="text-2xl font-bold text-[#47DAD6] leading-none">{metric.value}</p>
            <p className="mt-1.5 text-[0.7rem] uppercase tracking-wider text-[#7E8A96]">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Indicador de scroll */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex-col items-center gap-2 transition-opacity duration-500 hidden lg:flex ${hasScrolled ? "opacity-0" : "opacity-100"
          }`}
        aria-hidden="true"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/40">scroll para explorar</span>
        <span className="w-2 h-2 rounded-full bg-[#47DAD6] animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
