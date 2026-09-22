import { type LucideIcon, BotMessageSquare, Code2, Layers3, ListChecks, Workflow } from "lucide-react";

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
};

export const insights: Insight[] = [
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
    slug: "hermes-agent-y-linear",
    title: "Hermes Agent y Linear: del encargo al resultado revisado",
    summary:
      "Una forma práctica de convertir una petición en trabajo trazable: definir la entrega, seguir dependencias y comprobar el resultado antes de cerrarlo.",
    category: "Guías",
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
        title: "Ejemplo 1: preparar una guía",
        prompt: "Divide la creación de una guía sobre nombres de archivos en investigación, borrador y revisión. Para cada tarea, indica una entrega verificable y qué depende de qué.",
        result: "El encargo deja de ser una petición amplia: cada parte tiene un resultado que otra persona puede inspeccionar antes de continuar.",
      },
      {
        title: "Ejemplo 2: probar una regla sin tocar archivos reales",
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

export const insightCategories = ["Casos", "Herramientas", "Guías"] as const;

export const insightsByCategory = (category: Insight["category"]) =>
  newestInsights().filter((insight) => insight.category === category);
