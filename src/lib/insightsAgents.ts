import { Bot, Network, PanelsTopLeft } from "lucide-react";
import type { Insight } from "./insights";

export const agentInsights: Insight[] = [
  {
    slug: "hermes-agent-perfiles-y-subagentes",
    title: "Hermes Agent: perfiles y subagentes para tareas acotadas",
    summary: "Qué es el proyecto de Nous Research, cuándo usar un perfil o un subagente y cómo definir una entrega que puedas revisar.",
    category: "Herramientas", publishedAt: "2026-09-22", icon: Bot,
    relatedSlugs: ["linear-proyectos-tareas-y-agentes", "disenar-miniagentes-hermes-linear"],
    image: { src: "/images/insights/hermes-agent.svg", alt: "Esquema de Hermes Agent con un perfil persistente y dos tareas delegadas." },
    sources: [
      { label: "Hermes Agent: repositorio oficial", url: "https://github.com/NousResearch/hermes-agent" },
      { label: "Hermes Agent: perfiles", url: "https://hermes-agent.nousresearch.com/docs/user-guide/profiles" },
      { label: "Hermes Agent: delegación", url: "https://hermes-agent.nousresearch.com/docs/guides/delegation-patterns" },
      { label: "Hermes Agent: memoria", url: "https://hermes-agent.nousresearch.com/docs/user-guide/features/memory" },
      { label: "Hermes Agent: skills", url: "https://hermes-agent.nousresearch.com/docs/user-guide/features/skills" },
    ],
    diagram: ["Define una tarea y su evidencia", "Elige perfil persistente o subagente temporal", "Revisa fuentes, archivos y excepciones"],
    mindMap: { title: "Piezas distintas para trabajos distintos", variant: "compare", branches: [
      { label: "Perfil", children: ["Configuración y memoria propias", "Estado entre sesiones"] },
      { label: "Subagente", children: ["Conversación nueva para una tarea", "Entrega al agente principal"] },
      { label: "Skill", children: ["Procedimiento reutilizable", "Se prueba con más de un caso"] },
      { label: "Control", children: ["Accesos explícitos", "Revisión humana de la salida"] },
    ] },
    examples: [
      { title: "Ilustrativo: miniagente de fuentes", prompt: "Entrada: tres documentos públicos y una pregunta. Encargo: extrae afirmaciones con enlace, fecha y fragmento de apoyo. No edites los documentos ni completes huecos con suposiciones.", result: "Entrega: tabla de afirmaciones, respaldo y dudas. Una persona abre las fuentes y confirma cada fila antes de usarla." },
      { title: "Ilustrativo: miniagente revisor", prompt: "Entrada: un borrador de guía y su lista de criterios. Encargo: señala pasos ambiguos, requisitos no comprobados y frases sin fuente. No publiques ni reescribas el original.", result: "Entrega: observaciones priorizadas con ubicación y propuesta. El editor decide cuáles aplicar y vuelve a revisar el texto." },
    ],
    sections: [
      { heading: "Hermes Agent es un sistema para ejecutar agentes", paragraphs: ["El proyecto Hermes Agent de Nous Research reúne un agente, herramientas, memoria, skills y formas de delegar trabajo. Su nombre puede confundirse con el de un modelo, pero aquí hablamos del proyecto de agente y de su documentación. Las capacidades concretas dependen de la configuración, el modelo y los permisos que reciba.", "Un perfil es un espacio persistente con configuración, sesiones, memoria y skills propios. Sirve cuando una función necesita continuidad, por ejemplo investigar fuentes de un mismo dominio. Un subagente nace para una tarea delegada con conversación nueva. Es adecuado para una revisión puntual, no para crear otra identidad permanente cada vez."] },
      { heading: "Una mini tarea necesita límites visibles", paragraphs: ["Antes de delegar, escribe entrada, objetivo, herramientas permitidas, archivo o tabla de salida y condiciones de aceptación. Una instrucción útil sería: ‘compara estas tres fuentes oficiales, registra fecha y enlace, marca contradicciones y no modifiques archivos’. La entrega es inspeccionable sin conocer toda la conversación.", "Las skills guardan procedimientos que vale la pena repetir; no sustituyen la comprobación. La memoria permite conservar contexto, pero tampoco convierte una afirmación antigua en vigente. Para datos cambiantes, el miniagente debe volver a la fuente primaria y anotar cuándo consultó cada dato."], list: ["Perfil: continuidad y configuración separada.", "Subagente: trabajo temporal con resultado delimitado.", "Skill: procedimiento escrito que puede probarse de nuevo.", "Revisión: comprobación de la entrega por una persona."] },
      { heading: "Qué probar antes de dar más acceso", paragraphs: ["Comienza con material ficticio o público y una tarea de lectura. Comprueba si cada resultado tiene evidencia, si respeta los límites y si admite que falta información. Después puedes ensayar sobre copias y registrar errores. Un perfil por sí mismo no aísla el sistema de archivos: la documentación de Hermes distingue perfil, directorio de trabajo y sandbox.", "Los dos ejemplos de esta página son ilustrativos; no describen agentes instalados ni resultados medidos en Entaltek. Si tienes una tarea que se repite, podemos ayudarte a decidir si conviene una plantilla, un subagente puntual o un perfil persistente y qué tendría que entregar para considerarla resuelta."] },
    ],
  },
  {
    slug: "linear-proyectos-tareas-y-agentes",
    title: "Linear: tareas que un agente o una persona pueden entregar",
    summary: "Organiza proyectos, estados y dependencias; convierte cada issue en un encargo pequeño con evidencia de cierre.",
    category: "Herramientas", publishedAt: "2026-09-22", icon: PanelsTopLeft,
    relatedSlugs: ["hermes-agent-perfiles-y-subagentes", "disenar-miniagentes-hermes-linear"],
    image: { src: "/images/insights/linear-tareas.svg", alt: "Esquema de un proyecto de Linear dividido en tareas con dependencias y revisión." },
    sources: [
      { label: "Linear: proyectos", url: "https://linear.app/docs/projects" },
      { label: "Linear: estados de trabajo", url: "https://linear.app/docs/configuring-workflows" },
      { label: "Linear: relaciones y bloqueos", url: "https://linear.app/docs/issue-relations" },
      { label: "Linear: ciclos", url: "https://linear.app/docs/use-cycles" },
      { label: "Linear: servidor MCP", url: "https://linear.app/docs/mcp" },
    ],
    diagram: ["Define un resultado de proyecto", "Divide en issues con dependencias", "Adjunta evidencia y revisa el cierre"],
    mindMap: { title: "De proyecto a entrega comprobable", variant: "flow", branches: [
      { label: "Proyecto", children: ["Resultado amplio", "Alcance y horizonte"] },
      { label: "Issue", children: ["Responsable", "Entrada y entrega"] },
      { label: "Seguimiento", children: ["Estado y prioridad", "Ciclo si ayuda al equipo"] },
      { label: "Cierre", children: ["Dependencias resueltas", "Evidencia revisada"] },
    ] },
    examples: [
      { title: "Ilustrativo: miniagente de inventario editorial", prompt: "Issue: inventariar diez borradores ficticios. Entrada: carpeta de copias. Entrega: tabla con título, fecha, fuente y faltantes. Criterio: ninguna ficha sin ruta de origen; no publicar.", result: "Una persona o agente con acceso autorizado puede preparar la tabla. El responsable compara tres filas con los archivos antes de cerrar el issue." },
      { title: "Ilustrativo: miniagente de validación", prompt: "Issue bloqueado por el inventario: comprobar cinco enlaces oficiales de un borrador. Entrega: URL, estado y fecha de consulta. Criterio: los enlaces rotos o ambiguos quedan señalados, no sustituidos sin aprobación.", result: "La relación de bloqueo hace visible el orden. La revisión decide si el texto se corrige y cuándo ambas tareas están completas." },
    ],
    sections: [
      { heading: "Linear organiza el trabajo; no lo ejecuta por sí solo", paragraphs: ["Un proyecto agrupa un resultado mayor y sus tareas. Cada issue puede tener responsable, estado, prioridad y relaciones con otras tareas. Los ciclos son una opción para planificar trabajo en periodos; no son requisito para abrir un proyecto. Los estados dependen de la configuración del equipo, así que ‘En revisión’ es una propuesta de flujo, no un estado universal.", "Linear documenta también una plataforma para agentes y un servidor MCP, pero un issue bien escrito no ejecuta un agente automáticamente. Hace falta configurar una integración, permisos y un proceso de revisión. El mismo issue puede asignarse a una persona y conservar su valor como contrato de trabajo."], list: ["Objetivo: qué resultado debe existir.", "Entrada: documentos o datos permitidos.", "Salida: archivo, tabla o decisión verificable.", "Cierre: criterio y evidencia que una persona pueda revisar."] },
      { heading: "Piensa cada issue como un contrato pequeño", paragraphs: ["La comparación con un ‘miniagente’ resulta útil para redactar tareas: una función, una entrada, límites y una salida. En el ejemplo editorial, inventariar borradores y validar enlaces son dos contratos distintos. La segunda tarea puede quedar bloqueada por la primera para que nadie confunda avance con finalización.", "Una prioridad expresa la urgencia relativa; no reemplaza la dependencia ni el criterio de aceptación. Si todas las tareas son urgentes o un único issue contiene investigación, redacción, aprobación y publicación, el tablero deja de explicar qué falta. Divide solo cuando cada parte produzca algo revisable." ] },
      { heading: "Empieza con el flujo manual", paragraphs: ["Abre un proyecto de prueba y dos issues con datos ficticios. Añade la relación de bloqueo y revisa que cada entrega se encuentre desde el issue. Luego compara los estados con lo que de verdad ocurrió. Esta prueba enseña qué información necesita tu equipo antes de conectar otras herramientas.", "Linear ofrece servidor MCP y API para casos que sí requieren integración. Las capacidades y permisos deben comprobarse en la cuenta concreta. Los ejemplos de esta página son ilustrativos, no muestran una conexión activa de Entaltek ni una automatización ejecutada. Si quieres ordenar una tarea propia, podemos revisar primero qué debe quedar documentado para que cualquiera pueda retomarla."] },
    ],
  },
  {
    slug: "disenar-miniagentes-hermes-linear",
    title: "Cómo diseñar miniagentes con Hermes y darles seguimiento en Linear",
    summary: "Una guía para dividir un encargo en funciones pequeñas, probar cada salida y registrar dependencias sin ocultar la revisión humana.",
    category: "Guías", publishedAt: "2026-09-22", icon: Network,
    relatedSlugs: ["hermes-agent-perfiles-y-subagentes", "linear-proyectos-tareas-y-agentes"],
    image: { src: "/images/insights/miniagentes.svg", alt: "Esquema de dos miniagentes: uno investiga y otro revisa, con tareas conectadas a una entrega final." },
    sources: [
      { label: "Hermes Agent: delegación", url: "https://hermes-agent.nousresearch.com/docs/guides/delegation-patterns" },
      { label: "Hermes Agent: perfiles", url: "https://hermes-agent.nousresearch.com/docs/user-guide/profiles" },
      { label: "Hermes Agent: MCP", url: "https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp" },
      { label: "Linear: relaciones entre tareas", url: "https://linear.app/docs/issue-relations" },
      { label: "Linear: servidor MCP", url: "https://linear.app/docs/mcp" },
    ],
    diagram: ["Escribe el contrato de cada función", "Prueba salidas separadas con datos ficticios", "Registra dependencias y revisa la entrega final"],
    mindMap: { title: "Dos funciones, una entrega", variant: "flow", branches: [
      { label: "Entrada", children: ["Pregunta y fuentes", "Permisos explícitos"] },
      { label: "Miniagente A", children: ["Busca evidencia", "Marca incertidumbre"] },
      { label: "Miniagente B", children: ["Comprueba consistencia", "Devuelve observaciones"] },
      { label: "Persona", children: ["Resuelve dudas", "Acepta o devuelve"] },
    ] },
    examples: [
      { title: "Ilustrativo: investigador de requisitos", prompt: "Con tres páginas oficiales de una herramienta, entrega una tabla de requisitos, URL, fecha y grado de certeza. No instales nada ni uses fuentes secundarias como prueba final.", result: "La tabla queda adjunta al issue de investigación. Una persona comprueba las afirmaciones decisivas antes de desbloquear la redacción." },
      { title: "Ilustrativo: revisor de una guía", prompt: "Usa el borrador y la tabla aprobada. Señala frases que prometen más de lo que dicen las fuentes, pasos imposibles de reproducir y requisitos sin versión. Devuelve observaciones, no publiques.", result: "El issue de revisión produce un informe. El editor aplica correcciones, prueba un recorrido y decide si la guía puede cerrarse." },
    ],
    sections: [
      { heading: "Empieza por el resultado, no por el número de agentes", paragraphs: ["Un encargo como ‘prepara una guía’ contiene tareas distintas: reunir evidencia, explicar el procedimiento y comprobar que otra persona pueda seguirlo. Separarlas solo vale la pena cuando las entradas y salidas se pueden describir. Un miniagente es aquí una función acotada, no una promesa de autonomía completa.", "Escribe para cada función: material de entrada, pregunta, herramientas permitidas, formato de salida, exclusiones y criterio de terminado. Si dos funciones necesitan editar el mismo borrador al mismo tiempo, deja claro quién integra los cambios. Si la segunda depende de la primera, registra esa relación en Linear." ] },
      { heading: "Elige la forma de delegación en Hermes", paragraphs: ["Para una revisión puntual, Hermes documenta subagentes con conversación nueva. Para una función que conserva configuración y memoria entre sesiones, documenta perfiles independientes. Una skill puede contener un procedimiento reutilizable. Estas piezas tienen usos distintos; ninguna garantiza por sí sola calidad o acceso seguro.", "En un piloto editorial, el investigador devuelve una tabla de fuentes y el revisor comprueba un borrador contra esa tabla. Una persona decide qué afirmaciones quedan, resuelve contradicciones y acepta la publicación. El trabajo se divide para hacer visibles errores, no para esconderlos tras varias capas de agentes." ] },
      { heading: "Usa Linear como registro del encargo y la prueba", paragraphs: ["Crea un proyecto de prueba y un issue por entrega. Indica la dependencia entre investigación y revisión, la ubicación de los archivos y qué evidencia hará posible cerrar cada issue. Puedes mover estados manualmente. Hermes y Linear documentan una ruta MCP, pero aquí no se ha comprobado una conexión en una cuenta de Entaltek.", "Si decides ensayar la conexión, empieza leyendo un issue conocido y compara su contenido con la interfaz. Mantén la escritura fuera de la primera prueba; después evalúa cambios en un proyecto de prueba y vuelve a verificar el resultado. También funciona copiar manualmente las entregas: el método depende de contratos claros y revisión, no de una integración obligatoria." ] },
      { heading: "Qué observar en la primera prueba", paragraphs: ["Usa documentos ficticios, anota instrucciones y resultados, y revisa si cada salida corresponde a su entrada. Registra omisiones, referencias incorrectas y decisiones que necesitaron intervención humana. Si la división añade más coordinación que claridad, reduce el número de funciones.", "Elige una tarea real pequeña y escribe dos contratos de trabajo con sus evidencias de cierre. En Entaltek podemos ayudarte a evaluar si conviene una persona, un procedimiento o un agente para cada parte antes de ampliar el flujo." ] },
    ],
  },
];
