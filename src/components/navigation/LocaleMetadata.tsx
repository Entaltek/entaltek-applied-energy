import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import routes from "@/lib/routeMetadata.json";
import { localeForPath } from "@/lib/i18n";

export default function LocaleMetadata() {
  const { pathname } = useLocation();
  useEffect(() => {
    const path = pathname === "/en" ? "/en/" : pathname.replace(/\/$/, "") || "/";
    const key = path === "/en" ? "/en/" : path;
    const meta = routes[key as keyof typeof routes];
    document.documentElement.lang = localeForPath(pathname) === "en" ? "en" : "es-MX";
    document.querySelectorAll('link[hreflang]').forEach(node => node.remove());
    if (!meta) return;
    document.title = meta.title;
    const update = (selector: string, content: string) => document.querySelector(selector)?.setAttribute("content", content);
    update('meta[name="description"]', meta.description);
    update('meta[property="og:title"]', meta.title);
    update('meta[property="og:description"]', meta.description);
    update('meta[property="og:url"]', `https://entaltek.com${key}`);
    update('meta[property="og:locale"]', meta.locale);
    update('meta[property="og:image:alt"]', meta.title);
    const structured = document.querySelector('script[type="application/ld+json"]');
    if (structured) structured.textContent = JSON.stringify({ "@context": "https://schema.org", "@type": "WebSite", name: "Entaltek", url: `https://entaltek.com${key}`, inLanguage: meta.lang, description: meta.description });
    document.querySelector('link[rel="canonical"]')?.setAttribute("href", `https://entaltek.com${key}`);
    const spanish = meta.lang === "en" ? meta.alternate : key;
    const english = meta.lang === "en" ? key : meta.alternate;
    for (const [lang, href] of [["es-MX", spanish], ["en", english], ["x-default", spanish]]) {
      const link = document.createElement("link");
      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `https://entaltek.com${href}`;
      document.head.appendChild(link);
    }
  }, [pathname]);
  return null;
}
