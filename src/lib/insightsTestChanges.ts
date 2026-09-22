import { Files } from "lucide-react";
import type { Insight } from "./insights";

export const testChangesInsight: Insight = {
  slug: "probar-cambios-antes-de-aplicarlos",
  title: "Cómo probar cambios antes de aplicarlos a todos tus archivos",
  summary: "Usa una muestra y conserva el original mientras descubres reglas ambiguas y resultados inesperados.",
  category: "Guías",
  publishedAt: "2026-09-22",
  icon: Files,
  image: { src: "/images/insights/probar-cambios.svg", alt: "Una muestra de archivos se compara con sus originales antes de ampliar un cambio." },
  sources: [
    { label: "Git: git-diff — consultada el 22 de septiembre de 2026", url: "https://git-scm.com/docs/git-diff" },
    { label: "OpenAI: Code review — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/code-review" },
    { label: "OpenAI: Agent approvals & security — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/agent-approvals-security" },
  ],
  diagram: ["Selecciona muestras normales y difíciles", "Pide propuestas y prueba solo en una copia", "Revisa diferencias y decide si ampliar"],
  examples: [
    { title: "Ejemplo ilustrativo 1: facturas ficticias", prompt: "Con seis nombres ficticios, entrega nombre propuesto, regla, colisión y duda. No renombres archivos.", result: "Dos archivos producirían el mismo nombre; se añade un identificador y se repite la prueba antes de tocar originales." },
    { title: "Ejemplo ilustrativo 2: texto en plantillas", prompt: "Localiza esta frase en tres copias y señala cuáles reemplazarías. No edites todavía.", result: "Una coincidencia está en una cita histórica y debe conservarse. La regla deja de ser un reemplazo global." },
  ],
  sections: [
    { heading: "Una muestra debe incluir casos difíciles", paragraphs: [
      "Una regla puede funcionar con el primer archivo y fallar con el décimo. Antes de cambiar nombres, textos o configuraciones, prepara una copia pequeña. Incluye un caso normal, otro sin datos, dos que podrían producir el mismo resultado y uno cuyo significado sea ambiguo. Anota la salida esperada y deja pendiente lo que aún no hayas decidido.",
      "Si usas Git, conserva un punto de retorno y compara diferencias; si no, guarda los originales en una ubicación identificada. La documentación de git-diff explica cómo ver los cambios, pero la herramienta no determina si su significado es correcto.",
    ] },
    { heading: "Solicita propuestas antes de acciones", paragraphs: [
      "Pide a Codex una tabla con entrada, salida propuesta, regla, colisión y duda, sin editar archivos. Una fecha ausente o dos nombres idénticos pueden revelar que falta una decisión humana. Cambia la regla antes de escribir o ejecutar un proceso en lote.",
      "Define éxito antes de ver la respuesta: extensiones conservadas, cero colisiones y todo dato ausente marcado para revisión. Si la tabla no cumple, detén la prueba. No conviertas la ausencia de un error visible en permiso para modificar originales.",
    ] },
    { heading: "Edita solo la muestra y examina el diff", paragraphs: [
      "Cuando las propuestas sean correctas, autoriza una edición únicamente en la copia. Revisa cada diferencia: líneas modificadas, referencias afectadas y archivos que no debían cambiar. La revisión de código de Codex ayuda a inspeccionar el diff; tú debes comprobar el significado y el comportamiento.",
      "Ejecuta la prueba específica del proyecto si existe. Si trabajas con documentos, abre los archivos y compara una muestra con el original. Registra excepciones y la corrección de la regla. Vuelve a probar después de cada ajuste significativo.",
    ] },
    { heading: "Amplía por etapas y conserva el retorno", paragraphs: [
      "Pasa de la muestra a un grupo acotado y solo entonces al conjunto completo, si las pruebas respaldan la decisión. Define quién revisará la salida y cómo revertir. Si cada caso exige juicio humano, quizá convenga conservar una tabla de propuestas en lugar de automatizar la edición.",
      "La ficha final debe indicar qué se probó, qué quedó fuera y qué evidencia justifica continuar. Entaltek puede ayudarte a diseñar una prueba segura para una tarea propia antes de afectar archivos de trabajo.",
    ] },
  ],
};
