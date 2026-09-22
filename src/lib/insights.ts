import { type LucideIcon, BotMessageSquare, Code2, Layers3, Workflow } from "lucide-react";

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
