import { ListChecks } from "lucide-react";
import type { Insight } from "./insights";

export const firstCodexInsight: Insight = {
  slug: "primer-proyecto-con-codex",
  title: "Primer proyecto con Codex: de la petición al resultado comprobado",
  summary: "Empieza con un cambio acotado en una copia de trabajo, revisa los archivos modificados y comprueba el resultado.",
  category: "Guías",
  publishedAt: "2026-09-22",
  icon: ListChecks,
  image: { src: "/images/insights/primer-proyecto-codex.svg", alt: "Una petición se convierte en un cambio pequeño, una revisión y una entrega comprobada." },
  sources: [
    { label: "OpenAI: Projects and chats — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/projects" },
    { label: "OpenAI: Code review — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/code-review" },
    { label: "OpenAI: Agent approvals & security — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/agent-approvals-security" },
  ],
  diagram: ["Prepara una base y define el resultado", "Diagnostica, pide un cambio y revisa el diff", "Prueba el comportamiento y registra los límites"],
  examples: [
    { title: "Ejemplo ilustrativo 1: enlace incorrecto", prompt: "En esta copia de práctica, cambia solo el destino del botón «Conoce el servicio» para que abra /servicios. Conserva su etiqueta y ejecuta la comprobación de compilación disponible.", result: "La persona revisa la diferencia de un archivo y abre el enlace en la vista previa. Una compilación correcta no sustituye esa comprobación." },
    { title: "Ejemplo ilustrativo 2: instrucción confusa", prompt: "Añade a la guía de instalación desde qué carpeta debe ejecutarse el comando. Conserva el comando y no cambies otros temas.", result: "Codex entrega la ruta y línea modificada; una persona sigue la instrucción en una copia para comprobarla." },
  ],
  sections: [
    { heading: "Elige una primera tarea reversible", paragraphs: [
      "Instalar Codex no equivale a saber qué encargarle. Una primera prueba útil tiene un objetivo visible, archivos que puedas revisar y una manera de comprobar el cambio. «Mejora todo el sitio» deja demasiadas decisiones abiertas; corregir un enlace o aclarar una instrucción ofrece un resultado concreto.",
      "Abre la carpeta correcta y comprueba si tiene instrucciones del proyecto. Si usas Git, guarda un punto de retorno; en otro caso trabaja sobre una copia identificada. Evita claves y datos de clientes que no sean necesarios para la tarea. Anota dónde verás el resultado cuando termine.",
    ] },
    { heading: "Pide un diagnóstico antes de editar", paragraphs: [
      "Solicita a Codex que localice el archivo, explique el comportamiento actual y señale qué modificaría, sin tocar nada todavía. Compara la respuesta con los archivos. Si no coincide, corrige la carpeta o añade contexto. Solo después formula la tarea como resultado, contexto, restricciones y criterio de terminado.",
      "Delimita qué componente puede modificar, qué debe conservar y qué prueba se espera. Un encargo pequeño permite relacionar cada edición con una decisión. Si hay una duda de producto, resuélvela antes de pedir un cambio técnico.",
    ] },
    { heading: "Revisa la diferencia y prueba el comportamiento", paragraphs: [
      "Lee el diff: archivos tocados, líneas añadidas o eliminadas y cualquier cambio fuera del alcance. La revisión de código de Codex ayuda a inspeccionar cambios, pero la decisión de aceptar el resultado es humana. Pide una explicación de las ediciones que no puedas vincular con el objetivo.",
      "Registra la prueba automática disponible y su resultado. Después abre la vista previa y realiza el recorrido que definiste al principio. Una compilación que pasa no demuestra que un botón lleve al sitio correcto. Prueba además un comportamiento cercano que podría haberse afectado.",
    ] },
    { heading: "Cierra con evidencia y límites", paragraphs: [
      "Una entrega útil dice qué archivo cambió, qué comprobación pasó, qué comportamiento se observó y qué no se probó. Por ejemplo, una prueba local no demuestra que el despliegue esté correcto. Si la prueba falla, conserva el error y revierte o ajusta el cambio de manera acotada.",
      "Guardar una nota breve con el resultado permite repetir la misma rutina en un trabajo más grande, una tarea a la vez. Si necesitas escoger una primera prueba en un proyecto propio, Entaltek puede ayudarte a definir un cambio con evidencia revisable.",
    ] },
  ],
};
