import { useEffect, useRef, useState } from "react";

// Hook defensivo para animaciones de entrada.
// Regla importante: una animación nunca debe dejar contenido invisible
// si IntersectionObserver tarda, falla o el scroll vive dentro de un contenedor.
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }

    const scrollRoot = document.getElementById("main-scroll");

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting || entry.intersectionRatio > 0);
      },
      {
        root: scrollRoot ?? null,
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      },
    );

    observer.observe(el);

    // Evaluación inicial para evitar pantallas en blanco en mobile/devices
    // donde el primer callback puede llegar tarde.
    const rect = el.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    setInView(rect.top < viewportHeight && rect.bottom > 0);

    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
