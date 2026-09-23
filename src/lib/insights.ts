import { type LucideIcon, BotMessageSquare, Code2, Layers3, ListChecks, Workflow } from "lucide-react";
import { insightsModuleThree } from "./insightsModuleThree";
import { codexSetupInsight } from "./insightsCodexSetup";
import { firstCodexInsight } from "./insightsFirstCodex";
import { testChangesInsight } from "./insightsTestChanges";
import { agentInsights } from "./insightsAgents";

export type Insight = {
  slug: string;
  title: string;
  summary: string;
  category: "Casos" | "Herramientas" | "Guías";
  publishedAt: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
  sources: Array<{ label: string; url: string }>;
  diagram: string[];
  mindMap?: {
    title: string;
    variant: "flow" | "compare" | "cycle";
    branches: Array<{ label: string; children: string[] }>;
  };
  examples: Array<{ title: string; prompt: string; result: string }>;
  sections: Array<{ heading: string; paragraphs: string[]; list?: string[] }>;
  relatedSlugs?: string[];
};

export const insights: Insight[] = [
  codexSetupInsight,
  firstCodexInsight,
  testChangesInsight,
  ...insightsModuleThree,
  ...agentInsights,
  {
    slug: "ordenar-capas-en-photoshop",
    title: "De capas desordenadas a una solución que se puede repetir",
    summary:
      "Un caso de uso real: entender una tarea repetitiva dentro de Photoshop, convertir sus reglas en un script y conservar la revisión humana donde importa.",
    category: "Casos",
    publishedAt: "2026-09-22",
    icon: Layers3,
    image: {
      src: "/images/insights/photoshop-layers.png",
      alt: "Ilustración de capas que pasan de una organización dispersa a una estructura revisable.",
    },
    sources: [
      { label: "Adobe Help: Scripting in Photoshop — consultada el 22 de septiembre de 2026", url: "https://helpx.adobe.com/ca/photoshop/using/scripting.html" },
      { label: "Adobe Developer: UXP Scripting — consultada el 22 de septiembre de 2026", url: "https://developer.adobe.com/photoshop/uxp/scripting/" },
    ],
    diagram: ["Observa la tarea y sus reglas", "Prepara una primera solución ejecutable", "Revísala con archivos de prueba antes de reutilizarla"],
    mindMap: {
      title: "De una tarea repetitiva a una solución revisable",
      variant: "flow",
      branches: [
      { label: "La tarea", children: ["Agrupar y acomodar capas", "Detectar lo que se repite"] },
      { label: "Las reglas", children: ["Qué debe ir junto", "Qué casos requieren criterio"] },
      { label: "La solución", children: ["Instrucciones reutilizables", "Script que Photoshop puede ejecutar"] },
      { label: "La validación", children: ["Probar con una copia", "Revisar el resultado antes de adoptarlo"] },
      ],
    },
    examples: [
      {
        title: "Ejemplo 1: una regla que sí se puede explicar",
        prompt: "En cada archivo, agrupa las capas de texto relacionadas con un mismo encabezado. Conserva los nombres existentes y detente si una capa pertenece a más de un grupo.",
        result: "La regla hace visible qué puede automatizarse y qué excepción necesita revisión antes de modificar un archivo real.",
      },
      {
        title: "Ejemplo 2: una prueba controlada",
        prompt: "Usa una copia de un documento con tres grupos de capas. Ejecuta la solución y devuelve una lista de los grupos creados y de las capas que no pudiste clasificar.",
        result: "La persona puede comparar el resultado con el documento original y corregir la regla antes de usarla en más archivos.",
      },
    ],
    sections: [
      {
        heading: "El punto de partida fue una tarea cotidiana",
        paragraphs: [
          "En una conversación sobre trabajo de diseño surgió una tarea repetitiva: agrupar y acomodar capas dentro de Photoshop. El caso no empezó con una especificación técnica ni con la petición de construir una gran herramienta. Empezó al observar una parte concreta del flujo y preguntar qué resultado debía quedar listo.",
          "A partir de esa conversación se prepararon instrucciones reutilizables para generar un script que Photoshop pudiera ejecutar. Adobe documenta que Photoshop admite automatización mediante scripts y que estos sirven especialmente para tareas repetitivas. El detalle técnico de este caso concreto no se presenta como un tutorial: no se han inspeccionado sus archivos ni medido sus resultados.",
        ],
      },
      {
        heading: "La solución dependía de reglas, no solo de código",
        paragraphs: [
          "El valor no estaba en pedir que una herramienta ‘ordenara capas’ de manera general. Estaba en describir qué capas debían reunirse, qué debía conservarse y cuándo la solución debía detenerse. Esas decisiones convierten una tarea repetitiva en un problema que puede probarse.",
          "La automatización no elimina el criterio de la persona que diseña. Tras ejecutar una regla, alguien debe comprobar que el documento conserve la intención visual y que las excepciones no hayan sido forzadas dentro de un grupo equivocado.",
        ],
        list: [
          "Entrada: un documento y criterios observables para sus capas.",
          "Proceso: instrucciones claras que producen un script ejecutable en Photoshop.",
          "Resultado: una primera organización que se revisa antes de repetirla en otros archivos.",
        ],
      },
      {
        heading: "El impacto que sí podemos contar",
        paragraphs: [
          "Según la experiencia compartida, la solución facilitó la organización de capas. No contamos con una medición de tiempo, una comparación de errores ni una revisión del script; por eso no atribuimos ahorros ni resultados que no fueron comprobados.",
          "La lección es que una solución pequeña puede ser valiosa si parte del trabajo real y se entrega de forma que la persona pueda ejecutarla y revisarla. El siguiente paso para mejorarla sería probarla sobre copias de distintos documentos, registrar las excepciones y decidir qué reglas se mantienen.",
        ],
      },
    ],
  },
  {
    slug: "chatgpt-y-codex",
    title: "ChatGPT y Codex: cuándo usar cada uno",
    summary:
      "No necesitas elegir una herramienta para todo. La pregunta correcta es qué resultado quieres obtener y qué contexto hace falta para llegar a él.",
    category: "Herramientas",
    publishedAt: "2026-09-22",
    icon: BotMessageSquare,
    image: {
      src: "/images/insights/chatgpt-codex.png",
      alt: "Ilustración de una pregunta que se convierte en conversaciones y código para llegar a un resultado revisado.",
    },
    sources: [
      { label: "Documentación oficial de OpenAI: Use ChatGPT", url: "https://learn.chatgpt.com/docs/use-chatgpt" },
    ],
    diagram: ["Define el resultado", "Explora y decide con ChatGPT", "Construye, prueba o despliega con Codex"],
    mindMap: {
      title: "¿Qué necesitas resolver?",
      variant: "compare",
      branches: [
      { label: "ChatGPT", children: ["Investigar y comparar", "Ordenar decisiones y textos"] },
      { label: "Codex", children: ["Trabajar en un repositorio", "Probar y desplegar"] },
      { label: "El resultado", children: ["Aclarar una idea", "Construir un cambio comprobable"] },
      { label: "Comprobación", children: ["Revisar restricciones", "Validar que el resultado sirve"] },
      ],
    },
    examples: [
      {
        title: "Ejemplo 1: ordenar una idea de negocio",
        prompt: "Quiero ofrecer una asesoría para evaluar si un proceso es automatizable. Ayúdame a definir qué información debo pedir antes de una primera llamada.",
        result: "ChatGPT puede ayudarte a convertir una idea inicial en preguntas, límites y una estructura de conversación.",
      },
      {
        title: "Ejemplo 2: convertir una decisión en una página",
        prompt: "Añade una sección de asesoría a esta landing, conserva el diseño actual, compila el proyecto y muestra los archivos modificados.",
        result: "Codex puede trabajar dentro del repositorio, implementar el cambio, ejecutar comprobaciones y preparar el despliegue.",
      },
    ],
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
    category: "Guías",
    publishedAt: "2026-09-22",
    icon: Code2,
    image: {
      src: "/images/insights/useful-prompt.png",
      alt: "Ilustración de un proceso que transforma una solicitud ambigua en un resultado verificable.",
    },
    sources: [
      { label: "Documentación oficial de OpenAI: Prompting", url: "https://learn.chatgpt.com/docs/prompting" },
    ],
    diagram: ["Describe el resultado", "Prueba con ejemplos", "Revisa y ajusta una regla"],
    mindMap: {
      title: "Un prompt se mejora en ciclos",
      variant: "cycle",
      branches: [
      { label: "Resultado", children: ["Qué debe quedar listo", "Cómo se reconocerá"] },
      { label: "Contexto", children: ["Qué ocurre hoy", "Qué información es relevante"] },
      { label: "Reglas", children: ["Qué conservar o evitar", "Qué hacer ante faltantes"] },
      { label: "Comprobación", children: ["Primero una muestra", "Ajustar una regla por vez"] },
      ],
    },
    examples: [
      {
        title: "Ejemplo 1: una consulta demasiado amplia",
        prompt: "Automatiza mis archivos.",
        result: "Falta saber qué archivos, qué regla seguir, qué no debe cambiarse y cómo verificar el resultado.",
      },
      {
        title: "Ejemplo 2: una primera prueba controlada",
        prompt: "Con estos cinco nombres, propone una tabla de nombres con fecha_proyecto_pieza_version. Conserva extensiones, no inventes datos y señala duplicados. No cambies archivos todavía.",
        result: "El resultado se puede revisar antes de afectar la carpeta real y deja visibles las excepciones que requieren criterio humano.",
      },
    ],
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
        heading: "Añade un criterio de terminado",
        paragraphs: [
          "Además de pedir una respuesta, explica qué evidencia te permitiría decidir que la tarea quedó lista. Puede ser una tabla que cumpla las reglas, un archivo que abra sin errores, un enlace que funcione o un comportamiento que puedas observar. Ese criterio evita que “terminado” signifique solamente que la herramienta respondió.",
          "Una fórmula breve sirve para revisar tu petición: resultado, contexto, restricciones y criterio de terminado. No hace falta que sea extensa; importa que otra persona pueda reconocer la entrega y comprobarla con los materiales disponibles.",
        ],
      },
      {
        heading: "Un ejemplo para empezar",
        paragraphs: [
          "“Trabajo con archivos de un proyecto de diseño. Necesito una tabla que proponga nombres con el formato fecha_proyecto_pieza_version. Conserva la extensión, no inventes datos faltantes y señala los nombres que puedan duplicarse. Te daré cinco ejemplos. Devuélveme primero la tabla y no renombres archivos. Consideraré la tarea lista cuando cada nombre conserve su extensión, los duplicados estén marcados y los datos ausentes queden señalados.”",
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
  {
    slug: "mejorar-una-respuesta",
    title: "Cómo mejorar una respuesta con preguntas, ejemplos y criterio de terminado",
    summary:
      "Convierte una respuesta inicial en una entrega que puedas revisar: pregunta qué falta, muestra un ejemplo y define la evidencia de cierre.",
    category: "Guías",
    publishedAt: "2026-09-22",
    icon: ListChecks,
    image: {
      src: "/images/insights/mejorar-respuesta.png",
      alt: "Ilustración de una petición ambigua que se transforma en preguntas, ejemplos y una lista de comprobación.",
    },
    sources: [
      { label: "OpenAI Help Center: cómo crear un buen prompt — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/es-419/articles/4936848-c%C3%B3mo-creo-un-buen-prompt-para-un-modelo-de-ia" },
    ],
    diagram: ["Identifica qué falta", "Corrige con una pregunta y una muestra", "Comprueba una entrega con criterios visibles"],
    mindMap: {
      title: "De la primera respuesta a una versión revisable",
      variant: "cycle",
      branches: [
        { label: "Respuesta", children: ["Qué sí sirve", "Qué está incompleto"] },
        { label: "Pregunta", children: ["Una decisión pendiente", "Sin pedir que adivine"] },
        { label: "Ejemplo", children: ["Entrada representativa", "Regla observable"] },
        { label: "Revisión", children: ["Criterio de terminado", "Siguiente corrección"] },
      ],
    },
    examples: [
      {
        title: "Ejemplo ilustrativo 1: corregir un correo",
        prompt: "Conserva un tono profesional y cercano. Incluye fecha deseada, cantidad aproximada y persona responsable. No prometas tiempos ni precios. El correo está terminado si tiene asunto, saludo, tres preguntas y cierre en menos de 140 palabras.",
        result: "La siguiente versión puede comprobarse contra cuatro condiciones concretas en lugar de evaluarse solo por impresión general.",
      },
      {
        title: "Ejemplo ilustrativo 2: revisar solicitudes de soporte",
        prompt: "Clasifica cinco solicitudes ficticias en acceso, facturación o error técnico. Si falta información, escribe ‘dato pendiente’. Entrega una tabla con mensaje, categoría, prioridad y dato pendiente.",
        result: "La tabla hace visibles los casos que necesitan información adicional y permite validar las reglas antes de trabajar con mensajes reales.",
      },
    ],
    sections: [
      {
        heading: "Una primera respuesta es el inicio de la revisión",
        paragraphs: [
          "Si una respuesta todavía no sirve, no hace falta reiniciar la conversación ni encontrar una frase perfecta. Identifica qué parte conservarías, qué dato o regla falta y cuál sería la evidencia para considerar lista la siguiente versión.",
          "OpenAI recomienda trabajar de forma iterativa: dividir una tarea compleja en solicitudes más enfocadas y perfeccionarlas a partir de la respuesta inicial. El objetivo es revisar el trabajo como revisarías un correo, una tabla o una propuesta.",
        ],
      },
      {
        heading: "Pregunta por la decisión que falta",
        paragraphs: [
          "Evita pedir simplemente ‘hazlo mejor’. Nombra la decisión pendiente: ‘¿Qué información falta para estimar el alcance sin suponer el número de usuarios?’ o ‘separa los acuerdos confirmados de las dudas que requieren validación’. Así conservas lo útil y corriges una parte concreta.",
          "Si falta información, la respuesta debe dejarlo visible. El siguiente paso puede ser pedir un dato a una persona, revisar una fuente o reducir el alcance de la tarea.",
        ],
      },
      {
        heading: "El ejemplo y el criterio de terminado hacen visible la calidad",
        paragraphs: [
          "Un ejemplo muestra cómo debe aplicarse una regla; no es decoración. Usa una entrada representativa y explica el resultado esperado. Si contiene datos sensibles, reemplázalos por una versión ficticia o anonimizada.",
          "El criterio de terminado puede ser una tabla con columnas definidas, un texto con límite de extensión, un archivo que abra correctamente o una lista de fuentes con fecha. Sirve para comprobar la entrega con evidencia y no solo por intuición.",
        ],
        list: [
          "¿Conserva lo que ya era útil?",
          "¿Marca los datos faltantes en vez de inventarlos?",
          "¿Cumple las reglas y el formato acordados?",
          "¿Hay una parte que deba revisar una persona o una fuente primaria?",
        ],
      },
      {
        heading: "Trabaja en partes cuando la tarea crece",
        paragraphs: [
          "Primero define el formato, después prueba una muestra y al final prepara la versión completa. Corregir una regla por vez reduce el costo de equivocarse y evita que una petición extensa esconda varios problemas a la vez.",
          "Si tienes una tarea repetitiva que aún da resultados irregulares, Entaltek puede ayudarte a evaluar qué información, reglas y prueba pequeña harían viable un primer paso.",
        ],
      },
    ],
  },
  {
    slug: "comprobar-una-respuesta",
    title: "Cómo comprobar una respuesta antes de usarla",
    summary:
      "Una lista breve para distinguir datos, supuestos, transformaciones y recomendaciones antes de usar una respuesta en trabajo real.",
    category: "Guías",
    publishedAt: "2026-09-22",
    icon: ListChecks,
    image: {
      src: "/images/insights/comprobar-respuesta.png",
      alt: "Ilustración de un documento que pasa por fuentes, supuestos, transformación y comprobación final.",
    },
    sources: [
      { label: "OpenAI Help Center: cómo crear un buen prompt — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/es-419/articles/4936848-c%C3%B3mo-creo-un-buen-prompt-para-un-modelo-de-ia" },
    ],
    diagram: ["Separa datos, supuestos y recomendaciones", "Contrasta una muestra con su origen", "Aprueba o corrige con evidencia visible"],
    mindMap: {
      title: "Qué comprobar antes de usar una respuesta",
      variant: "flow",
      branches: [
        { label: "Dato", children: ["Fuente comprobable", "Fecha o nombre exacto"] },
        { label: "Suposición", children: ["Confirmar", "Eliminar si no hay evidencia"] },
        { label: "Transformación", children: ["Probar una muestra", "Repetir el cálculo"] },
        { label: "Recomendación", children: ["Contexto del negocio", "Revisión responsable"] },
      ],
    },
    examples: [
      {
        title: "Ejemplo ilustrativo 1: revisar un resumen",
        prompt: "Separa acuerdos explícitos, propuestas y dudas. Para cada acuerdo, añade el fragmento de origen y marca las fechas no confirmadas como pendientes.",
        result: "El resumen deja de convertir una intención en un compromiso y permite comprobar cada acuerdo.",
      },
      {
        title: "Ejemplo ilustrativo 2: probar una clasificación",
        prompt: "Clasifica estas solicitudes ficticias e incluye el motivo de cada prioridad. Si falta impacto o fecha, escribe ‘dato pendiente’ sin asignar prioridad alta.",
        result: "Tres filas representativas permiten revisar la regla antes de usarla con solicitudes reales.",
      },
    ],
    sections: [
      {
        heading: "Una respuesta clara puede seguir necesitando revisión",
        paragraphs: [
          "Antes de copiar un texto a un correo, tomar una decisión con una tabla o ejecutar instrucciones sobre archivos, revisa qué afirma, en qué se apoya y qué queda pendiente. El objetivo no es desconfiar de todo: es decidir con evidencia qué parte usar, ajustar o confirmar.",
          "El nivel de revisión depende del riesgo. Un borrador de ideas puede requerir una revisión ligera; información médica, legal, financiera, contractual o de seguridad requiere fuentes adecuadas y, cuando corresponde, una persona profesional.",
        ],
      },
      {
        heading: "Distingue cuatro tipos de contenido",
        paragraphs: [
          "Marca cada afirmación relevante como dato verificable, suposición, cálculo o transformación, o recomendación. Un dato se contrasta con una fuente; una suposición se confirma o elimina; un cálculo se repite con una muestra; y una recomendación se evalúa contra las condiciones reales del negocio.",
          "Esta separación también indica cuál es el siguiente mensaje útil. En vez de pedir ‘hazlo mejor’, solicita una fuente, una columna de evidencia, una muestra o la eliminación de una suposición.",
        ],
      },
      {
        heading: "Comprueba una muestra antes de escalar",
        paragraphs: [
          "Para clasificaciones, resúmenes y tablas, revisa casos que revelen la regla: uno claro, uno ambiguo y uno que pueda ser una excepción. Si la salida no deja visibles los datos faltantes, no la copies al proceso real todavía.",
          "El criterio de terminado puede ser una tabla con acuerdo, evidencia y responsable; una clasificación con motivo y pendiente; o un archivo que preserve las reglas pactadas. Una respuesta termina cuando puedes comprobar esa evidencia, no cuando simplemente llega al chat.",
        ],
        list: [
          "¿Respeta los límites acordados?",
          "¿Las fechas, cifras y citas importantes tienen fuente?",
          "¿Puedo repetir la transformación con una muestra?",
          "¿Una persona responsable debe confirmar la decisión?",
        ],
      },
      {
        heading: "Corrige el punto que falló",
        paragraphs: [
          "Si algo falla, conserva lo que sí sirve y corrige una condición a la vez. La iteración es más útil cuando hace visible el dato, regla o evidencia que faltaba.",
          "Entaltek puede ayudarte a evaluar una tarea repetitiva y definir una prueba pequeña antes de cambiar un proceso real.",
        ],
      },
    ],
  },
  {
    slug: "contexto-util-sin-datos-innecesarios",
    title: "Cómo aportar contexto útil sin compartir información innecesaria",
    summary: "Selecciona el contexto que cambia una decisión, anonimiza lo que no hace falta y deja claros los límites de una tarea.",
    category: "Guías",
    publishedAt: "2026-09-22",
    icon: ListChecks,
    image: { src: "/images/insights/contexto-util.png", alt: "Ilustración de documentos que se filtran para conservar una muestra de contexto anonimizada." },
    sources: [
      { label: "OpenAI Help Center: Data controls — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/en/articles/7730893" },
      { label: "OpenAI Help Center: cómo crear un buen prompt — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/es-419/articles/4936848-c%C3%B3mo-creo-un-buen-prompt-para-un-modelo-de-ia" },
    ],
    diagram: ["Define el resultado", "Comparte solo los campos necesarios", "Prueba y revisa una muestra sin datos sensibles"],
    mindMap: {
      title: "Contexto suficiente y delimitado",
      variant: "flow",
      branches: [
        { label: "Necesario", children: ["Objetivo", "Campos que cambian la decisión"] },
        { label: "Excluido", children: ["Identidades y credenciales", "Datos que no aportan"] },
        { label: "Reglas", children: ["Qué conservar", "Cuándo detenerse"] },
        { label: "Revisión", children: ["Muestra ficticia", "Criterio de terminado"] },
      ],
    },
    examples: [
      { title: "Ejemplo ilustrativo 1: un correo de seguimiento", prompt: "Redacta un correo profesional para pedir fecha, cantidad y responsable. No menciones precios ni plazos. Usa solo este resumen de la conversación.", result: "El encargo conserva el objetivo y el tono sin compartir el hilo completo ni datos que no aportan a la redacción." },
      { title: "Ejemplo ilustrativo 2: solicitudes de soporte", prompt: "Clasifica cinco casos ficticios en acceso, facturación o error técnico. Incluye categoría, prioridad, dato pendiente y motivo.", result: "La muestra mantiene los casos difíciles y permite probar la regla antes de trabajar con mensajes reales." },
    ],
    sections: [
      { heading: "El contexto se selecciona; no se vuelca", paragraphs: ["Dar contexto mejora una respuesta, pero compartirlo todo no. Antes de pegar un correo o subir un documento, pregunta qué información cambia realmente la decisión y qué material puedes resumir, anonimizar o dejar fuera.", "Los controles de datos de ChatGPT ayudan a gestionar conversaciones y enlaces compartidos, pero no sustituyen la revisión que haces antes de enviar el material. La tarea empieza por delimitar qué necesita el encargo." ] },
      { heading: "Prepara una ficha mínima", paragraphs: ["Registra el resultado, quién usará la salida, los datos necesarios, los datos excluidos, las reglas y el criterio de terminado. Si hay duda, crea una muestra sintética que conserve la estructura y los casos difíciles, pero reemplace identidades y valores sensibles.", "No existe una lista universal de datos seguros: el contexto de una nómina, una conversación con clientes o un archivo de producción exige cuidados distintos. Mantén fuera credenciales, datos de pago y datos personales cuando no sean necesarios." ], list: ["Resultado y audiencia", "Campos indispensables", "Datos excluidos", "Reglas, excepciones y condición de parada"] },
      { heading: "Detén el flujo antes de conectar datos reales", paragraphs: ["Si una tarea requiere permisos, archivos reales o una integración, comienza con una prueba de lectura y define quién revisará la salida. No escales una regla que solo funcionó con una muestra sin comprobar sus límites.", "Un contexto delimitado protege información y vuelve más fácil revisar una respuesta. Entaltek puede ayudar a convertir una tarea dispersa en una prueba pequeña con datos mínimos y reglas visibles."] },
    ],
  },
  {
    slug: "documentos-y-archivos-en-chatgpt",
    title: "Cómo trabajar con documentos y archivos en ChatGPT",
    summary: "Convierte un archivo en una entrega revisable: define qué extraer, transformar o comparar y comprueba una muestra contra el origen.",
    category: "Guías",
    publishedAt: "2026-09-22",
    icon: ListChecks,
    image: { src: "/images/insights/documentos-chatgpt.png", alt: "Ilustración de documentos, hojas de cálculo y presentaciones que pasan por extracción, comparación y resumen." },
    sources: [{ label: "OpenAI Help Center: carga de archivos — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/es-es/articles/8982896-c%C3%B3mo-funciona-la-nueva-funci%C3%B3n-de-carga-de-archivos" }],
    diagram: ["Delimita el archivo y la pregunta", "Extrae, compara o transforma una muestra", "Contrasta la entrega con el origen"],
    mindMap: { title: "Una pregunta para cada archivo", variant: "flow", branches: [
      { label: "Extracción", children: ["Citas y acuerdos", "Campos concretos"] },
      { label: "Transformación", children: ["Resumen", "Reescritura sin perder sentido"] },
      { label: "Comparación", children: ["Dos documentos", "Criterios visibles"] },
      { label: "Revisión", children: ["Muestra manual", "Datos faltantes"] },
    ] },
    examples: [
      { title: "Ejemplo ilustrativo 1: acuerdos de una minuta", prompt: "Extrae acuerdos explícitos, responsable, fecha y párrafo de origen. Marca pendiente si falta información y no infieras compromisos.", result: "La tabla se revisa contra el texto y evita convertir una intención en una decisión." },
      { title: "Ejemplo ilustrativo 2: una hoja de solicitudes", prompt: "Cuenta solicitudes por tipo y marca registros sin estado. La entrega queda lista cuando los totales coincidan con una muestra manual de diez filas.", result: "La prueba revela las excepciones antes de usar el análisis en una decisión operativa." },
    ],
    sections: [
      { heading: "El archivo necesita una pregunta delimitada", paragraphs: ["ChatGPT puede apoyar síntesis, transformación y extracción con documentos y hojas de cálculo. Para que el resultado sirva, define qué debe encontrarse, en qué formato y cómo se contrastará con el origen.", "No siempre hace falta compartir un documento completo. Para detectar acuerdos puede bastar una transcripción; para comparar políticas necesitas ambas versiones y criterios explícitos."] },
      { heading: "Define la evidencia antes de pedir la respuesta", paragraphs: ["Pide columnas, secciones o citas concretas. Un criterio de terminado puede ser una tabla con acuerdo, responsable, fecha y párrafo de origen, o una suma que coincida con una muestra manual.", "Con datos tabulares, usa encabezados claros y una fila por registro. Declara cálculos, agrupaciones y reglas para los faltantes."] },
      { heading: "Conserva límites visibles", paragraphs: ["Un archivo puede ser demasiado grande, complejo, escaneado o poco estructurado para un análisis completo. Revisa cláusulas, cifras, fechas y excepciones en el original antes de usar una respuesta.", "Las funciones disponibles dependen de plan, permisos y tipo de archivo. Si hay datos sensibles, usa una muestra anonimizada y define quién revisa la salida antes de escalar el flujo."] },
    ],
  },
  {
    slug: "investigar-con-chatgpt-y-fuentes",
    title: "Cómo investigar con ChatGPT y revisar las fuentes",
    summary: "Usa búsqueda para reunir evidencia, abre las fuentes importantes y deja claros los límites antes de tomar una decisión.",
    category: "Guías", publishedAt: "2026-09-22", icon: ListChecks,
    image: { src: "/images/insights/investigar-fuentes.png", alt: "Ilustración de fuentes que se comparan por fecha, autoridad y evidencia antes de una conclusión." },
    sources: [{ label: "OpenAI Help Center: buscar en la web con ChatGPT — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/es-419/articles/9237897-chatgpt-search" }],
    diagram: ["Formula una decisión verificable", "Abre y compara fuentes", "Registra evidencia, límites y siguiente paso"],
    mindMap: { title: "Una investigación revisable", variant: "flow", branches: [
      { label: "Pregunta", children: ["Fecha y ubicación", "Criterio de decisión"] }, { label: "Fuente", children: ["Autoridad", "Fecha y alcance"] }, { label: "Evidencia", children: ["Enlace abierto", "Dato confirmado"] }, { label: "Conclusión", children: ["Condiciones", "Pendientes"] },
    ] },
    examples: [
      { title: "Ejemplo ilustrativo 1: comparar herramientas", prompt: "Compara tres herramientas para cinco personas y registra función, requisito, límite, enlace oficial y fecha de consulta.", result: "Cada dato importante se puede abrir y revisar antes de elegir." },
      { title: "Ejemplo ilustrativo 2: una afirmación normativa", prompt: "Encuentra la fuente primaria, fecha de entrada en vigor y sección exacta. Distingue anuncio, texto vigente y datos pendientes.", result: "La respuesta no convierte una publicación secundaria en una obligación confirmada." },
    ],
    sections: [
      { heading: "Una cita no cierra la investigación", paragraphs: ["ChatGPT puede reunir enlaces e información actual, pero los resultados y sus citas pueden ser incompletos, desactualizados o incorrectos. Abre las fuentes importantes y confirma que respaldan exactamente la afirmación.", "Convierte una pregunta amplia en una decisión verificable: registra periodo, ubicación, alternativas y criterio para elegir evidencia."] },
      { heading: "Revisa fecha, autoridad y alcance", paragraphs: ["Prefiere documentación oficial para funciones, condiciones y precios. Revisa cuándo se publicó o actualizó y si aplica a la cuenta, región o situación consultada.", "Una fuente puede respaldar una parte de un argumento sin demostrar una conclusión más amplia. Separa hechos, interpretación y recomendación."] },
      { heading: "Entrega evidencia que otro pueda revisar", paragraphs: ["El resultado útil es una tabla de fuentes, fecha de consulta, evidencia y pendientes. Si un dato no se confirma, reduce la conclusión o continúa la búsqueda.", "Entaltek puede ayudar a convertir una pregunta de negocio en una investigación acotada con evidencia y siguiente paso visible."] },
    ],
  },
  {
    slug: "organizar-trabajo-continuo-en-chatgpt", title: "Cómo organizar un trabajo continuo en un proyecto de ChatGPT", summary: "Mantén objetivo, fuentes, decisiones y pendientes visibles para retomar un trabajo sin perder contexto.", category: "Guías", publishedAt: "2026-09-22", icon: ListChecks,
    image: { src: "/images/insights/proyecto-chatgpt.png", alt: "Ilustración de un proyecto organizado con objetivo, fuentes, decisiones y siguiente paso." },
    sources: [{ label: "OpenAI Help Center: Projects in ChatGPT — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/en/articles/10169521-projects-in-chatgpt" }],
    diagram: ["Conserva el objetivo", "Separa fuentes y decisiones", "Define el siguiente paso revisable"],
    mindMap: { title: "Qué conservar en un proyecto", variant: "flow", branches: [
      { label: "Objetivo", children: ["Resultado esperado", "Audiencia"] },
      { label: "Evidencia", children: ["Archivos aprobados", "Fuente y fecha"] },
      { label: "Decisiones", children: ["Quién confirmó", "Qué sigue abierto"] },
      { label: "Continuidad", children: ["Criterio de terminado", "Siguiente entrega"] },
    ] },
    examples: [
      { title: "Ejemplo ilustrativo 1: propuesta para un cliente", prompt: "Con la minuta aprobada, redacta un esquema de propuesta. Separa hechos confirmados, supuestos y preguntas pendientes. El cliente confirmó las páginas de servicios y contacto; no confirmó precio ni fecha de lanzamiento.", result: "El borrador muestra alcance y dudas. Antes de enviarlo, una persona contrasta cada afirmación con la minuta y mantiene precio y plazo como pendientes." },
      { title: "Ejemplo ilustrativo 2: investigación que cambia", prompt: "Compara la conclusión anterior con esta nueva fuente oficial. Registra enlace, fecha, evidencia nueva y decisión que debemos revisar. No sustituyas otras conclusiones sin evidencia.", result: "El equipo puede ver por qué cambió una recomendación y decidir si la información nueva altera la elección." },
    ],
    sections: [
      { heading: "Un proyecto necesita un resultado", paragraphs: ["Un chat puede resolver una pregunta. Una tarea que dura semanas necesita conservar además el objetivo, materiales aprobados, decisiones tomadas y dudas abiertas. Los proyectos de ChatGPT reúnen chats, archivos e instrucciones relacionadas en un espacio. Ayudan a mantener continuidad, pero no reemplazan la revisión de las respuestas.", "Nombra el proyecto por la entrega: «Propuesta de sitio para taller X» explica más que «Marketing». En las instrucciones indica a quién se dirige el resultado, el formato esperado y las reglas que se mantienen. Adjunta solo archivos pertinentes y señala cuál versión está aprobada."] },
      { heading: "Mantén una ficha que otra persona entienda", paragraphs: ["Una ficha inicial puede tener siete campos: objetivo, audiencia, materiales de referencia, decisiones confirmadas, restricciones, criterio de terminado y siguiente paso. Es más útil que pegar una conversación entera. Distingue lo que dice una fuente, lo que decidió una persona y lo que propone el asistente.", "Para cada etapa abre una pregunta concreta: comparar enfoques, redactar un borrador o revisar una afirmación. Cuando cierres una etapa, actualiza la ficha con la decisión, quién la confirmó y el documento que la respalda. Si guardas una respuesta como fuente del proyecto, comprueba que siga vigente antes de reutilizarla."] },
      { heading: "No dependas de que el chat «recuerde todo»", paragraphs: ["Es difícil saber qué parte de un historial largo seguirá siendo relevante. Repite en cada solicitud las condiciones críticas, especialmente fechas, cifras, permisos y límites comerciales. Las funciones de memoria y compartición varían según configuración y tipo de cuenta: revísalas antes de asumir qué información estará disponible.", "Si el material es sensible, comparte solo lo necesario y revisa permisos del proyecto y de los archivos. Un documento aprobado y una nota de decisiones evitan que una respuesta persuasiva se confunda con una autorización."] },
      { heading: "Cierra con una entrega comprobable", paragraphs: ["Al terminar cada sesión anota qué quedó listo, qué falta verificar y quién revisará la próxima entrega. «Mejorar la propuesta» no indica cuándo acaba; «confirmar dos páginas aprobadas y dejar presupuesto pendiente» sí.", "Prueba la estructura con una tarea real que hoy dependa de varios chats. Si no puedes localizar la fuente de una decisión con rapidez, mejora la ficha antes de agregar material. Entaltek puede ayudarte a ordenar el primer proyecto alrededor de un resultado concreto y revisable."] },
    ],
  },
  {
    slug: "prompt-a-plantilla-reutilizable", title: "De un buen prompt a una plantilla reutilizable", summary: "Separa datos variables, reglas estables y criterios de revisión para repetir una tarea sin ocultar excepciones.", category: "Guías", publishedAt: "2026-09-22", icon: ListChecks,
    image: { src: "/images/insights/plantilla-prompt.png", alt: "Ilustración de una instrucción que se convierte en plantilla con campos, reglas y una revisión." },
    sources: [{ label: "OpenAI Help Center: How do I create a good prompt for an AI model? — consultada el 22 de septiembre de 2026", url: "https://help.openai.com/en/articles/4936848-how-do-i-create-a-good-prompt-for-an-ai-model" }],
    diagram: ["Elige una tarea repetida", "Separa campos y reglas", "Prueba un caso claro y uno incompleto"],
    mindMap: { title: "Anatomía de una plantilla útil", variant: "flow", branches: [
      { label: "Entrada", children: ["Materiales", "Campos variables"] },
      { label: "Reglas", children: ["Límites", "Datos no confirmados"] },
      { label: "Entrega", children: ["Formato", "Criterio de terminado"] },
      { label: "Prueba", children: ["Caso claro", "Caso ambiguo"] },
    ] },
    examples: [
      { title: "Ejemplo ilustrativo 1: propuesta inicial", prompt: "Prepara un esquema de propuesta para [tipo de cliente] con el problema confirmado [problema] y la minuta [documento]. Incluye objetivo, alcance, exclusiones y preguntas pendientes. No prometas precio ni fecha sin aprobación. Está terminado cuando cada dato comercial se pueda localizar en la minuta o aparezca como pendiente.", result: "La prueba con una minuta incompleta muestra si la plantilla conserva límites. Una persona verifica el alcance antes de compartirlo." },
      { title: "Ejemplo ilustrativo 2: resumen de reunión", prompt: "Con [texto de reunión], crea una tabla de acuerdos, propuestas y dudas. Para cada fila indica responsable, fecha y fragmento de origen. Escribe «pendiente» cuando falte un dato. Está terminado cuando tres filas de muestra coincidan con el texto.", result: "La salida se convierte en una lista accionable cuyo origen puede comprobarse, en lugar de una transcripción simplemente más corta." },
    ],
    sections: [
      { heading: "Una respuesta buena todavía no es una plantilla", paragraphs: ["Un prompt puede resolver un caso. Una plantilla sirve cuando la misma clase de encargo regresa con datos distintos y más de una persona necesita repetirlo. La guía de OpenAI recomienda instrucciones claras, contexto e iteraciones; el mismo criterio ayuda a convertir una solicitud probada en un procedimiento revisable.", "Elige una tarea concreta, por ejemplo resumir minutas o preparar un primer alcance. Guarda la solicitud original, la respuesta y las correcciones humanas. Si el resultado solo funcionó porque su autor sabía detalles ausentes del texto, documenta esos detalles antes de compartirlo."] },
      { heading: "Separa lo que cambia de lo que permanece", paragraphs: ["Usa campos visibles para datos variables como [audiencia], [fuente], [fecha] o [límite de extensión]. Coloca fuera de ellos las reglas estables: distinguir hechos de suposiciones, citar el fragmento de origen y marcar pendientes sin adivinar. Define el formato de salida y un criterio de terminado observable.", "Una estructura inicial es: «Prepara [entregable] para [audiencia] usando [materiales]. El objetivo es [uso]. Respeta [límites]. Entrega [formato]. Marca como pendiente lo no confirmado. Está terminado cuando [comprobación]». Evita datos confidenciales en los ejemplos de una plantilla compartida."] },
      { heading: "Prueba el caso incómodo", paragraphs: ["Ensaya con un caso claro, uno incompleto y otro con una excepción conocida. Comprueba restricciones, origen de datos y preguntas pendientes. Si la respuesta inventa un plazo o responsable, corrige una regla y vuelve a probar. Registra versión, fecha y cambio.", "Pide a alguien que no participó en la redacción que complete los campos. Sus dudas revelarán reglas implícitas. Una plantilla útil reduce decisiones repetidas y deja visibles las decisiones que todavía necesitan criterio humano."] },
      { heading: "Úsala antes de automatizarla", paragraphs: ["Una skill o una tarea programada puede venir después, cuando la misma estructura se haya probado en varios casos. Empieza con una solicitud que repitas esta semana y cuenta cuántas correcciones requiere para llegar a una entrega revisable.", "Si quieres evaluar una tarea propia, Entaltek puede ayudarte a probar primero una plantilla pequeña y documentar cuándo sirve, qué excepciones tiene y qué debe revisar una persona."] },
    ],
  },
  {
    slug: "hermes-agent-y-linear",
    title: "Hermes Agent y Linear: cómo se complementan en un encargo",
    summary:
      "Una forma práctica de convertir una petición en trabajo trazable: definir la entrega, seguir dependencias y comprobar el resultado antes de cerrarlo.",
    category: "Guías",
    relatedSlugs: ["hermes-agent-perfiles-y-subagentes", "linear-proyectos-tareas-y-agentes", "disenar-miniagentes-hermes-linear"],
    publishedAt: "2026-09-22",
    icon: Workflow,
    image: {
      src: "/images/insights/hermes-linear.png",
      alt: "Ilustración de una tarea que pasa por investigación, revisión y un resultado comprobado.",
    },
    sources: [
      { label: "Hermes Agent: MCP — consultada el 22 de septiembre de 2026", url: "https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp" },
      { label: "Linear: servidor MCP — consultada el 22 de septiembre de 2026", url: "https://linear.app/docs/mcp" },
      { label: "Linear: relaciones entre tareas — consultada el 22 de septiembre de 2026", url: "https://linear.app/docs/issue-relations" },
      { label: "Linear: asignación y delegación a agentes", url: "https://linear.app/docs/assigning-issues" },
      { label: "Hermes Agent: Kanban entre perfiles", url: "https://hermes-agent.nousresearch.com/docs/user-guide/features/kanban" },
    ],
    diagram: ["Escribe una entrega y criterios verificables", "Divide el trabajo y haz visibles sus dependencias", "Revisa la evidencia antes de marcar la tarea como terminada"],
    mindMap: {
      title: "De encargo a resultado revisable",
      variant: "flow",
      branches: [
        { label: "Encargo", children: ["Problema concreto", "Entrada y entrega esperada"] },
        { label: "Seguimiento", children: ["Tareas pequeñas", "Dependencias y estado"] },
        { label: "Agente", children: ["Herramientas necesarias", "Límites y evidencia"] },
        { label: "Revisión", children: ["Comprobar resultado", "Decidir el cierre"] },
      ],
    },
    examples: [
      {
        title: "Ejemplo ilustrativo 1: preparar una guía",
        prompt: "Divide la creación de una guía sobre nombres de archivos en investigación, borrador y revisión. Para cada tarea, indica una entrega verificable y qué depende de qué.",
        result: "El encargo deja de ser una petición amplia: cada parte tiene un resultado que otra persona puede inspeccionar antes de continuar.",
      },
      {
        title: "Ejemplo ilustrativo 2: probar una regla sin tocar archivos reales",
        prompt: "Con diez nombres ficticios, crea una tabla con propuesta, motivo, duplicados detectados y datos faltantes. No renombres archivos.",
        result: "La tabla permite corregir una regla ambigua en una muestra pequeña antes de autorizar un cambio en una carpeta real.",
      },
    ],
    sections: [
      {
        heading: "Un agente necesita una tarea que se pueda revisar",
        paragraphs: [
          "Pedirle a un agente que se encargue de todo deja abiertas preguntas importantes: qué debe entregar, dónde se verá el avance y quién decide si el resultado sirve. Antes de delegar, escribe el problema, los materiales disponibles y dos o tres condiciones que permitan comprobar el cierre.",
          "Por ejemplo, en lugar de pedir “investiga bien”, pide tres fuentes primarias con enlaces, fecha de consulta y dudas pendientes. La diferencia parece pequeña, pero convierte una expectativa en una entrega revisable.",
        ],
      },
      {
        heading: "Linear hace visible el trabajo que depende de otro trabajo",
        paragraphs: [
          "Linear permite organizar un resultado amplio como proyecto y dividirlo en tareas. Sus estados se configuran por equipo. Para un flujo de aprendizaje, una propuesta útil puede ser Pendiente, En curso, En revisión y Terminado; el estado En revisión se configura si el equipo lo necesita.",
          "Las relaciones entre tareas permiten mostrar qué está bloqueando a qué. Si el borrador necesita que alguien confirme una regla, la dependencia debe quedar visible. Marcar algo como terminado sin la evidencia esperada hace más difícil detectar el problema después.",
        ],
        list: [
          "Proyecto: el resultado amplio que se busca conseguir.",
          "Tarea: una unidad concreta con responsable, entrega y criterio de aceptación.",
          "Dependencia: el trabajo que debe terminar o aclararse antes de continuar.",
          "Revisión: la comprobación humana de que la entrega responde al encargo.",
        ],
      },
      {
        heading: "La conexión entre Hermes y Linear está documentada",
        paragraphs: [
          "Hermes Agent documenta una conexión con Linear mediante MCP, un protocolo para que un agente pueda usar herramientas externas. Linear publica un servidor MCP con acceso a datos y operaciones sobre objetos como tareas, proyectos y comentarios.",
          "La documentación confirma que existe esta ruta de conexión. No se ha instalado Hermes ni conectado Linear en una cuenta de Entaltek, por lo que no presentamos este artículo como una integración probada. Un primer ensayo responsable puede limitarse a leer una tarea conocida y contrastar el resultado con la interfaz.",
        ],
      },
      {
        heading: "Dos tableros distintos: decide cuál lleva el estado oficial",
        paragraphs: [
          "Hermes tiene un Kanban propio que asigna tareas a perfiles y registra estados como todo, running, blocked, review y done. Linear organiza issues por equipo; su flujo predeterminado incluye Backlog, Todo, In Progress, Done y Canceled, y un equipo puede añadir In Review.",
          "Linear permite delegar issues a agentes instalados mientras una persona conserva la responsabilidad. Puedes filtrar una vista por agente delegado para revisar su lista de trabajo. Esto no significa que un perfil de Hermes aparezca automáticamente como agente instalado en Linear ni que los estados de ambos tableros se sincronicen por MCP. Si usas los dos, define cuál es la fuente del estado oficial y cómo se enlaza la evidencia.",
        ],
      },
      {
        heading: "Empieza con una prueba de lectura y una entrega pequeña",
        paragraphs: [
          "Primero selecciona una tarea de prueba, define los campos que esperas encontrar y comprueba que el agente los devuelve correctamente. Después pide un informe local que enlace la evidencia. Solo cuando esa lectura sea fiable conviene valorar una acción que modifique datos, sobre una tarea de prueba y con una verificación posterior.",
          "También puedes comenzar sin conexión: copia el encargo y el resultado entre las herramientas. El proceso sigue aportando claridad porque la parte esencial es que la persona sepa qué se pidió, qué cambió y qué falta revisar.",
        ],
      },
    ],
  },
];

export const getInsight = (slug?: string) => insights.find((insight) => insight.slug === slug);

export const newestInsights = () => [...insights].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export const insightCategories = ["Casos", "Guías", "Herramientas"] as const;

export const insightsByCategory = (category: Insight["category"]) =>
  newestInsights().filter((insight) => insight.category === category);
