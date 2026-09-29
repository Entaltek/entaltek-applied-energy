import { useLocation } from "react-router-dom";
import { useTranslation } from "@/lib/i18n";

export default function LanguageSwitcher() {
  const { isEnglish } = useTranslation();
  const { hash } = useLocation();
  return (
    <div className="flex shrink-0 items-center gap-1 text-sm text-white" role="group" aria-label={isEnglish ? "Language" : "Idioma"}>
      <a href={`/${hash}`} lang="es" hrefLang="es-MX" aria-current={!isEnglish ? "page" : undefined} aria-label="Español" className={`rounded-md px-2 py-3 focus-visible:outline focus-visible:outline-2 ${!isEnglish ? "bg-white/15 font-bold" : "text-white/75 hover:text-[#47DAD6]"}`}>ES</a>
      <span aria-hidden="true" className="text-white/40">/</span>
      <a href={`/en/${hash}`} lang="en" hrefLang="en" aria-current={isEnglish ? "page" : undefined} aria-label="English" className={`rounded-md px-2 py-3 focus-visible:outline focus-visible:outline-2 ${isEnglish ? "bg-white/15 font-bold" : "text-white/75 hover:text-[#47DAD6]"}`}>EN</a>
    </div>
  );
}
