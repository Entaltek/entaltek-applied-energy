import { useEffect, useRef, useState } from "react";

// Valores del diseño fullscreen: threshold 0.3 y rootMargin -10%
// para disparar el fade + scale al entrar cada sección.
export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.3, rootMargin: "-10%" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { ref, inView };
}
