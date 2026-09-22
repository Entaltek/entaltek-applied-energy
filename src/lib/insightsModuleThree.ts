import { ListChecks, ScanSearch } from "lucide-react";
import type { Insight } from "./insights";

export const insightsModuleThree: Insight[] = [
  {
    slug: "elegir-tarea-para-automatizar",
    title: "Cómo elegir una tarea que vale la pena automatizar",
    summary: "Evalúa reglas, datos, excepciones y revisión humana antes de elegir una herramienta o modificar archivos.",
    category: "Guías",
    publishedAt: "2026-09-22",
    icon: ListChecks,
    image: { src: "/images/insights/elegir-tarea-automatizar.png", alt: "Tarjetas de tareas pasan por un filtro de reglas y excepciones hasta convertirse en una prueba revisable." },
    sources: [
      { label: "NIST: AI Risk Management Framework — consultado el 22 de septiembre de 2026", url: "https://airc.nist.gov/airmf-resources/airmf/5-sec-core/" },
      { label: "OpenAI: Projects and chats — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/projects" },
    ],
    diagram: ["Define el resultado y las exclusiones", "Prueba reglas con muestras y excepciones", "Decide la viabilidad y el próximo ensayo"],
    mindMap: { title: "La decisión de automatizar", variant: "flow", branches: [
      { label: "Tarea", children: ["Resultado concreto", "Frecuencia"] },
      { label: "Reglas", children: ["Datos disponibles", "Casos ambiguos"] },
      { label: "Riesgo", children: ["Costo de un error", "Posibilidad de revertir"] },
      { label: "Prueba", children: ["Muestra pequeña", "Revisión humana"] },
    ] },
    examples: [
      { title: "Ejemplo ilustrativo 1: nombres de archivos", prompt: "Para cinco archivos ficticios, prepara una tabla de nombre actual, nombre propuesto, dato faltante y colisión. Conserva la extensión y no renombres originales.", result: "La prueba descubre fechas ausentes y nombres duplicados. La tarea es viable con condiciones: primero hay que acordar la fecha y la regla para colisiones." },
      { title: "Ejemplo ilustrativo 2: solicitudes de clientes", prompt: "Clasifica mensajes ficticios en tres categorías. Muestra motivo y marca «requiere revisión» si falta contexto o hay dos temas. No envíes respuestas ni incluyas datos de pago.", result: "El equipo puede revisar si coincide en las categorías antes de conectar el proceso a mensajes reales." },
    ],
    sections: [
      { heading: "Repetirse no basta", paragraphs: ["Una tarea frecuente puede parecer candidata natural para automatizarse. La frecuencia, sin embargo, no demuestra que el resultado será correcto, que los datos estén disponibles ni cuánto trabajo exigirá revisar excepciones. Antes de elegir una aplicación o pedir un script, describe una sola tarea y observa si sus reglas se pueden seguir con ejemplos.", "«Organizar archivos» es demasiado amplio. «Proponer un nombre con fecha, proyecto, pieza y versión sin cambiar el original» permite comprobar la salida. Escribe también qué queda fuera: decidir qué versión aprobar, eliminar duplicados o inferir información ausente."] },
      { heading: "Usa muestras que revelen las excepciones", paragraphs: ["Prepara cinco entradas: casos normales, uno sin un dato, uno ambiguo y dos que podrían terminar con el mismo resultado. Para cada una anota salida esperada y persona que la confirma. Si dos expertos discrepan, registra la decisión pendiente en lugar de ocultarla en una respuesta pulida.", "Evalúa cinco condiciones con evidencia: frecuencia, estabilidad de reglas, disponibilidad de datos, costo de errores y tiempo de revisión humana. Puedes marcarlas «claro», «parcial» o «desconocido». No sumes marcas como si fueran una medida científica; la tabla sirve para encontrar la condición que bloquea el ensayo."] },
      { heading: "Diseña una prueba que no cause daño", paragraphs: ["El primer prototipo debe producir una propuesta y señalar excepciones, sin sobrescribir archivos ni enviar mensajes. Antes de ejecutarlo decide qué casos cuentan como correctos, quién revisará una muestra y cómo detenerlo si aparece un resultado dudoso.", "El marco de gestión de riesgos de NIST propone atender contexto, medición y gestión del riesgo. Esa lógica respalda revisar el impacto antes de ampliar una prueba; la ficha concreta de esta guía es un método editorial de Entaltek, no una certificación del marco."] },
      { heading: "Cierra con una decisión verificable", paragraphs: ["Concluye «viable», «viable con condiciones», «falta una prueba» o «no conviene todavía». Adjunta muestras, reglas, excepciones, permisos y criterio de terminado. Si revisar cada resultado cuesta tanto como hacer el trabajo a mano, quizá una plantilla o un cambio de proceso sea mejor primer paso.", "Prueba la ficha con una tarea de esta semana. Si otra persona puede explicar qué se automatizaría, qué queda fuera y qué demostraría un ensayo exitoso, ya existe una base para decidir. Entaltek puede ayudarte a valorar esa viabilidad y acotar la primera prueba."] },
    ],
  },
  {
    slug: "diagnosticar-trabajo-antes-de-codex",
    title: "Cómo diagnosticar un trabajo antes de pedir cambios a Codex",
    summary: "Identifica objetivo, archivos y comportamiento observado antes de autorizar un cambio en un proyecto existente.",
    category: "Guías",
    publishedAt: "2026-09-22",
    icon: ScanSearch,
    image: { src: "/images/insights/diagnosticar-proyecto-codex.png", alt: "Carpeta de proyecto abierta con archivos inspeccionados antes de elaborar una propuesta de cambio." },
    sources: [
      { label: "OpenAI: Projects and chats — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/projects" },
      { label: "OpenAI: Code review — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/code-review" },
    ],
    diagram: ["Delimita un síntoma observable", "Localiza archivos y reproduce el problema", "Entrega hallazgos, dudas y un cambio acotado"],
    mindMap: { title: "Un diagnóstico que se puede comprobar", variant: "flow", branches: [
      { label: "Encargo", children: ["Objetivo", "Síntoma"] },
      { label: "Evidencia", children: ["Archivos citados", "Pasos para reproducir"] },
      { label: "Límites", children: ["Sin cambios todavía", "Sin secretos"] },
      { label: "Siguiente tarea", children: ["Cambio pequeño", "Prueba de aceptación"] },
    ] },
    examples: [
      { title: "Ejemplo ilustrativo 1: formulario de contacto", prompt: "Lee los archivos del formulario y del servicio receptor. No edites nada. Explica qué respuesta muestra la página, qué confirma el servidor y qué prueba falta para saber si llegó el correo.", result: "El diagnóstico distingue una respuesta HTTP aceptada de la entrega real. La siguiente tarea sería una prueba controlada, no afirmar que el correo funciona." },
      { title: "Ejemplo ilustrativo 2: carpeta de documentos", prompt: "Identifica versiones, fechas y diferencias visibles de estas guías. No renombres ni borres. Devuelve tabla de versión probable, evidencia y duda pendiente.", result: "Una persona puede decidir qué archivo está aprobado sin convertir una fecha de modificación en aprobación editorial." },
    ],
    sections: [
      { heading: "Empieza por una pregunta acotada", paragraphs: ["Al llegar a un proyecto existente es tentador pedir «arregla lo que esté mal». Ese encargo deja abiertas preguntas esenciales: qué debería funcionar, qué archivos son la fuente de verdad, cómo se reproduce el síntoma y qué queda fuera del alcance. Codex puede trabajar con proyectos locales y archivos; por eso conviene pedir primero un diagnóstico verificable, sin modificar nada.", "Describe lo que la persona intenta hacer y lo que ocurre hoy. Por ejemplo: la página confirma el envío de un formulario, pero no se sabe si el mensaje llegó. El criterio de terminado del diagnóstico es identificar el recorrido y la comprobación faltante."] },
      { heading: "Identifica la carpeta y los archivos relevantes", paragraphs: ["Comprueba qué carpeta es principal, dónde están las instrucciones del proyecto y si hay cambios locales sin guardar. La documentación oficial explica que un proyecto local puede conectar carpetas y que Codex usa la principal como punto de partida para Git y para detectar instrucciones. Si hay varias, registra cuál contiene la aplicación y cuál la documentación.", "Pide un mapa pequeño: estructura pertinente, rutas implicadas, pruebas disponibles y dudas. Solicita referencias a archivos para cada afirmación. Distingue «observé este comportamiento» de «creo que aquí está el error». No supongas que existen credenciales o servicios externos y no incluyas secretos en el informe."] },
      { heading: "Reproduce antes de proponer", paragraphs: ["Si existe una prueba automatizada, ejecútala en el entorno apropiado y anota resultado, versión y datos de muestra. Si no, describe pasos manuales que otra persona pueda repetir. Una captura o mensaje de error sirve como evidencia solo cuando se relaciona con el paso concreto que falló.", "Pide después la corrección más pequeña que atienda el problema confirmado, los archivos que tocaría, el riesgo y la prueba de aceptación. Si falta una decisión, preséntala como alternativa pendiente. La revisión de un diff puede ayudar después del cambio; no reemplaza la decisión humana sobre el objetivo."] },
      { heading: "Decide si ya se puede cambiar", paragraphs: ["La ficha está lista cuando otra persona puede localizar los archivos citados, reproducir el síntoma y explicar la incertidumbre restante. Si no se encuentra el fallo, no conviertas una hipótesis en corrección: consigue una muestra mejor o delimita de nuevo la pregunta.", "Cuando el problema está confirmado, abre una tarea nueva con resultado, contexto, restricciones y criterio de terminado. Así se evita construir una solución correcta para un problema que nadie había comprobado. Entaltek puede ayudarte a transformar ese diagnóstico en una intervención pequeña y revisable."] },
    ],
  },
];
