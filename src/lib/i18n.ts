import { useLocation } from "react-router-dom";
import english from "./locales/en.json";
import { WHATSAPP_NUMBER, WHATSAPP_URL } from "./site";

export type Locale = "es" | "en";
const messages: Record<string, string> = english;
export const localeForPath = (pathname: string): Locale => /^\/en(?:\/|$)/.test(pathname) ? "en" : "es";
export const translate = (text: string, locale: Locale) => locale === "en" ? messages[text] ?? text : text;

export function useTranslation() {
  const { pathname } = useLocation();
  const locale = localeForPath(pathname);
  return {
    locale,
    isEnglish: locale === "en",
    t: (text: string) => translate(text, locale),
    whatsappUrl: locale === "en"
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello, I would like to discuss a project with Entaltek.")}`
      : WHATSAPP_URL,
  };
}
