import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
import { useInView } from "@/hooks/useInView";
import { WHATSAPP_URL } from "@/lib/site";

const metrics = [
  { value: "6", label: "productos en producción" },
  { value: "6", label: "industrias" },
  { value: "León", label: "Guanajuato" },
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

  return (
    <section
      id="hero"
      className="relative min-h-screen md:h-screen md:snap-start overflow-hidden bg-[#011627] flex items-center justify-center"
    >
      <ParticleCanvas />

      {/* Orbes de luz difusa */}
      <div
        className="absolute -top-20 -left-20 w-[400px] h-[400px] rounded-full bg-[#0179B1] opacity-15 blur-[80px] animate-orb"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full bg-[#47DAD6] opacity-10 blur-[80px] animate-orb"
        style={{ animationDelay: "4s" }}
        aria-hidden="true"
      />

      <div
        ref={ref}
        className={`relative z-10 container mx-auto px-4 py-24 text-center transition-all duration-700 ease-out ${
          inView ? "opacity-100 scale-100" : "opacity-0 scale-[0.98]"
        }`}
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#47DAD6]/40 text-[#47DAD6] text-sm tracking-wide mb-8">
          León · Guanajuato · México
        </span>

        <h1 className="font-extrabold text-white leading-[1.1] text-[clamp(2.5rem,6vw,5rem)]">
          Software y automatización
          <br />
          con precisión de ingeniería
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-[1.1rem] leading-relaxed text-white/55">
          Construimos SaaS, automatizamos procesos con IA y desarrollamos apps móviles.
          Sistemas que tu negocio usa todos los días, no demos.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#0179B1] text-white font-semibold hover:bg-[#47DAD6] hover:text-[#011627] transition-colors duration-300"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Escríbenos por WhatsApp
          </a>
          <button
            onClick={() => document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" })}
            className="px-7 py-3.5 rounded-lg border border-white/30 text-white font-medium hover:border-[#47DAD6] hover:text-[#47DAD6] transition-colors duration-300"
          >
            Ver productos →
          </button>
        </div>
      </div>

      {/* Glassmorphism: métricas */}
      <div
        className="hidden lg:flex absolute bottom-10 right-10 z-10 gap-8 rounded-2xl p-5 border border-white/10"
        style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)" }}
      >
        {metrics.map((metric) => (
          <div key={metric.label} className="text-left">
            <p className="text-2xl font-bold text-[#47DAD6] leading-none">{metric.value}</p>
            <p className="mt-1.5 text-[0.7rem] uppercase tracking-wider text-white/40">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* Indicador de scroll */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 transition-opacity duration-500 ${
          hasScrolled ? "opacity-0" : "opacity-100"
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
