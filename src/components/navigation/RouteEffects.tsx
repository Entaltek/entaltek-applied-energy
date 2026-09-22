import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const RouteEffects = () => {
  const location = useLocation();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      if (location.pathname !== "/") {
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      const scrollContainer = document.getElementById("main-scroll");
      if (!scrollContainer) return;
      const target = location.hash ? document.querySelector(location.hash) : null;
      scrollContainer.scrollTo({ top: target instanceof HTMLElement ? target.offsetTop : 0, behavior: "auto" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [location.hash, location.pathname]);

  return null;
};

export default RouteEffects;
