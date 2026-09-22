import { type LucideIcon, BotMessageSquare, Code2 } from "lucide-react";

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  category: string;
  icon: LucideIcon;
  sourceLabel: string;
  sourceUrl: string;
  sections: Array<{ heading: string; paragraphs: string[]; list?: string[] }>;
};

export const insights: Insight[] = [
  {
    slug: "chatgpt-y-codex",
    title: "ChatGPT y Codex: cuándo usar cada uno",
    summary:
      "No necesitas elegir una herramienta para todo. La pregunta correcta es qué resultado quieres obtener y qué contexto hace falta para llegar a él.",
    category: "Herramientas",
    icon: BotMessageSquare,
    sourceLabel: "Documentación oficial de OpenAI: Use ChatGPT",
    sourceUrl: "https://learn.chatgpt.com/docs/use-chatgpt",
    sections: [
      {
        heading: "Dos formas de avanzar el trabajo",
        paragraphs: [
          "ChatGPT es útil cuando necesitas pensar, investigar, ordenar información, comparar opciones o redactar un primer material. Puedes empezar con una pregunta abierta y llegar a una decisión, un texto o un plan que después revisas.",
          "Codex entra cuando el trabajo vive en un proyecto técnico: entender archivos, construir una función, ejecutar pruebas, revisar cambios o publicar una aplicación. Puede usar el contexto del repositorio y herramientas de desarrollo para convertir una idea en un cambio comprobable.",
        ],
      },
      {
        heading: "Un ejemplo en Entaltek",
        paragraphs: [
          "Si quieres definir cómo presentar un nuevo servicio, empieza en ChatGPT: aclara a quién ayudas, qué problema resuelves y qué debería llevarse la persona. Cuando el resultado sea una sección nueva en la página, Codex puede revisar la landing, escribir el componente, compilarlo y preparar el despliegue.",
          "No es una frontera rígida. Codex también puede ayudar a investigar y redactar; ChatGPT también puede trabajar con archivos. La diferencia práctica está en el tipo de resultado que buscas y en las herramientas que necesita el trabajo.",
        ],
        list: [
          "Usa ChatGPT para ideas, investigación, documentos, comparaciones y borradores.",
          "Usa Codex para código, archivos de proyecto, pruebas, servidores y despliegues.",
          "Usa ambos cuando una decisión de negocio deba convertirse en una solución que funcione.",
        ],
      },
      {
        heading: "La comprobación sigue siendo tuya",
        paragraphs: [
          "Una herramienta puede proponer mucho en poco tiempo, pero no reemplaza conocer el problema real. Antes de usar una respuesta, revisa si entiende tus restricciones, prueba el resultado donde se va a utilizar y conserva una forma de volver atrás si afecta archivos o producción.",
          "La mejor elección no es la más sofisticada: es la que te permite avanzar con claridad y comprobar que el resultado sirve.",
        ],
      },
    ],
  },
  {
    slug: "un-prompt-que-si-ayuda",
    title: "Cómo escribir un prompt que sí ayuda a resolver una tarea",
    summary:
      "Un buen prompt no es una frase mágica. Es una descripción clara del resultado, el contexto y la forma de revisar el trabajo.",
    category: "Aprender a usar IA",
    icon: Code2,
    sourceLabel: "Documentación oficial de OpenAI: Prompting",
    sourceUrl: "https://learn.chatgpt.com/docs/prompting",
    sections: [
      {
        heading: "Empieza por el resultado, no por la herramienta",
        paragraphs: [
          "" + "En vez de pedir “automatiza mis archivos”, explica el resultado que necesitas: “quiero proponer nombres consistentes con fecha, proyecto, pieza y versión, sin cambiar todavía ningún archivo”. Ese objetivo permite discutir una solución y comprobar si cumple.",
          "El prompt sirve para hacer visible lo que ya sabes del problema. No hace falta tener todo resuelto; puedes marcar lo incierto para que se convierta en una pregunta y no en una suposición escondida.",
        ],
      },
      {
        heading: "Cinco piezas que hacen un prompt útil",
        paragraphs: [
          "Para tareas prácticas, una estructura breve suele ser suficiente. Puedes adaptarla sin volverla una plantilla rígida.",
        ],
        list: [
          "Contexto: qué haces hoy y para quién es el resultado.",
          "Objetivo: qué tendría que ocurrir para considerar la tarea terminada.",
          "Reglas: qué debe respetar, conservar o evitar.",
          "Ejemplos: una entrada realista y el resultado esperado.",
          "Comprobación: cómo revisarás la propuesta antes de aplicarla.",
        ],
      },
      {
        heading: "Un ejemplo para empezar",
        paragraphs: [
          "“Trabajo con archivos de un proyecto de diseño. Necesito una tabla que proponga nombres con el formato fecha_proyecto_pieza_version. Conserva la extensión, no inventes datos faltantes y señala los nombres que puedan duplicarse. Te daré cinco ejemplos. Devuélveme primero la tabla y no renombres archivos.”",
          "Este prompt no garantiza que la solución final sea correcta. Sí reduce ambigüedades: define la salida, conserva límites y pide una prueba antes de modificar algo importante.",
        ],
      },
      {
        heading: "Trabaja en ciclos cortos",
        paragraphs: [
          "Pide una primera versión pequeña, revísala con ejemplos y corrige una regla por vez. Ese ciclo de proponer, comprobar y ajustar es más confiable que solicitar una solución enorme de una sola vez.",
          "Cuando el proceso ya funciona de forma repetible, entonces puede convertirse en una plantilla, una skill, un script o una capacitación para otras personas.",
        ],
      },
    ],
  },
];

export const getInsight = (slug?: string) => insights.find((insight) => insight.slug === slug);
