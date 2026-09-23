import { Blocks, Gauge, ListChecks, PlugZap, Workflow } from "lucide-react";
import type { Insight } from "./insights";

export const capabilityInsights: Insight[] = [
  {
  "slug": "mcp-conectar-herramientas-con-control",
    "title": "MCP: conectar herramientas sin perder el control de la tarea",
    "summary": "Conecta datos y acciones solo cuando la tarea lo necesite; prueba lectura, permisos y resultado antes de ampliar acceso.",
    "category": "Guías",
    "publishedAt": "2026-09-22",
    "image": {
      "src": "/images/insights/mcp-conectar-herramientas-con-control.svg",
      "alt": "Esquema de mcp: conectar herramientas sin perder el control de la tarea en tres pasos revisables."
    },
    "sources": [
      {
        "label": "OpenAI: servidor MCP — consultada el 22 de septiembre de 2026",
        "url": "https://developers.openai.com/plugins/concepts/mcp-server"
      },
      {
        "label": "OpenAI Docs MCP — consultada el 22 de septiembre de 2026",
        "url": "https://developers.openai.com/learn/docs-mcp"
      },
      {
        "label": "Hermes MCP — consultada el 22 de septiembre de 2026",
        "url": "https://hermes-agent.nousresearch.com/docs/user-guide/features/mcp"
      },
      {
        "label": "Linear MCP — consultada el 22 de septiembre de 2026",
        "url": "https://linear.app/docs/mcp"
      }
    ],
    "diagram": [
      "Define dato, acción y permiso",
      "Prueba lectura de un registro conocido",
      "Compara con la fuente y decide si ampliar"
    ],
    "examples": [
      {
        "title": "Ejemplo ilustrativo 1: consulta de Linear.",
        "prompt": "Una coordinadora pide leer dos issues de un proyecto de prueba y devolver ID, estado y enlace. Compara ambos con Linear. El resultado no cambia prioridades ni mueve tarjetas. Linear ofrece un servidor MCP oficial; la demostración real requeriría conectarlo en una cuenta autorizada y documentar qué herramientas expone.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      },
      {
        "title": "Ejemplo ilustrativo 2: documentación de OpenAI.",
        "prompt": "Un editor consulta si una función de Codex aparece en la documentación vigente. El MCP público de documentación permite buscar y leer páginas oficiales, pero no llama la API de OpenAI ni cambia una cuenta. El editor abre la página citada y comprueba que la frase de su artículo no promete más que la fuente.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      }
    ],
    "sections": [
      {
        "heading": "Por qué importa",
        "paragraphs": [
          "«Conecta la IA a todo» suena cómodo, pero no dice qué información necesita, qué podrá modificar ni cómo sabrás que funcionó. Antes de añadir una conexión, escribe una tarea pequeña: «consulta el estado de dos issues y devuelve sus enlaces, sin editarlos». Entonces puedes decidir si hace falta MCP.",
          "MCP, o Model Context Protocol, es un estándar para que una aplicación de IA descubra herramientas y datos ofrecidos por un servidor. Ese servidor puede exponer funciones para buscar, leer o cambiar información, además de recursos y plantillas. La aplicación cliente selecciona una herramienta, envía argumentos y recibe una respuesta. OpenAI explica este mecanismo; tanto Hermes como Linear documentan opciones MCP. Que dos productos lo admitan no prueba que una conexión específica esté configurada, autorizada o sincronice todos sus estados."
        ]
      },
      {
        "heading": "Entrada → proceso → resultado",
        "paragraphs": [
          "Entrada: una pregunta concreta, el origen de datos y la cuenta que posee esos datos. Proceso: elegir el servidor apropiado, revisar permisos, probar lectura de un registro conocido y comparar la respuesta con la interfaz original. Resultado: una respuesta con identificador, fuente y fecha, o una explicación del bloqueo. Solo después se valora si conviene permitir escritura.",
          "La diferencia central es entre método y acceso. Una skill puede enseñar «lee dos issues, resume bloqueos y pide revisión»; el servidor MCP aporta la función y la autorización para obtener esos issues. Un plugin puede empaquetar la skill y la configuración de la conexión. Instalar el paquete no significa que cada cuenta o cada acción ya esté autorizada."
        ]
      },
      {
        "heading": "La primera prueba debe ser fácil de desmentir",
        "paragraphs": [
          "Selecciona un registro que puedas abrir tú mismo. Apunta su identificador y el campo que esperas leer. Si el agente responde con un título distinto o no consigue acceso, no completes la historia con una suposición: revisa servidor, cuenta, permisos y herramienta elegida. Anota también qué datos salieron de la cuenta y quién puede revocar la conexión. Para un equipo, la prueba de lectura es un paso distinto de crear o cerrar tareas.",
          "La documentación de Linear distingue una ruta MCP general con lectura y escritura de una ruta de solo lectura. Para la consulta inicial, escoger solo lectura hace que el alcance técnico coincida con el encargo. La configuración exacta del cliente y la autorización se comprueban en la cuenta donde se realizará la prueba."
        ]
      },
      {
        "heading": "Cuándo no conectar todavía",
        "paragraphs": [
          "Si la tarea se resuelve con un documento público o con una exportación manual ocasional, añadir otra credencial puede complicar el trabajo. Si sí necesitas datos vivos, dibuja un mapa sencillo: dato → herramienta → permiso → salida → persona que revisa. Una conexión de solo lectura no debe recibir escritura por comodidad. Y una prueba exitosa de lectura no autoriza publicaciones, pagos ni cambios de cuenta.",
          "Para empezar, elige una consulta de bajo riesgo y define qué respuesta exacta esperas. Si no puedes comprobarla con el origen, la conexión todavía no está lista para una tarea mayor. En Entaltek podemos ayudarte a delimitar esa primera prueba y evaluar si MCP aporta valor frente a un flujo manual."
        ]
      }
    ],
    "relatedSlugs": [
      "hermes-agent-perfiles-y-subagentes",
      "linear-proyectos-tareas-y-agentes"
    ],
    icon: PlugZap
  },
  {
  "slug": "skills-procedimientos-reutilizables",
    "title": "Skills: convertir un buen procedimiento en trabajo reutilizable",
    "summary": "Documenta un método, pruébalo con otro caso y registra cuándo debe detenerse antes de compartirlo.",
    "category": "Guías",
    "publishedAt": "2026-09-22",
    "image": {
      "src": "/images/insights/skills-procedimientos-reutilizables.svg",
      "alt": "Esquema de skills: convertir un buen procedimiento en trabajo reutilizable en tres pasos revisables."
    },
    "sources": [
      {
        "label": "OpenAI: skills — consultada el 22 de septiembre de 2026",
        "url": "https://developers.openai.com/plugins/concepts/skills"
      },
      {
        "label": "OpenAI: construcción y prueba — consultada el 22 de septiembre de 2026",
        "url": "https://developers.openai.com/plugins/build/skills"
      },
      {
        "label": "Hermes: skills — consultada el 22 de septiembre de 2026",
        "url": "https://hermes-agent.nousresearch.com/docs/user-guide/features/skills"
      }
    ],
    "diagram": [
      "Describe entrada, pasos y salida",
      "Prueba un caso normal y otro límite",
      "Corrige y conserva la versión"
    ],
    "examples": [
      {
        "title": "Ejemplo ilustrativo 1: revisión editorial.",
        "prompt": "El primer borrador trae tres enlaces vigentes y la skill produce una tabla correcta. El segundo incluye un enlace roto y una afirmación sin fuente. La salida aceptable marca ambos pendientes; una tabla «todo verificado» sería un fallo. El editor compara cada fila con el borrador y ajusta la instrucción para que se detenga ante evidencia ausente.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      },
      {
        "title": "Ejemplo ilustrativo 2: clasificación de solicitudes.",
        "prompt": "Un pequeño negocio tiene una regla para separar consultas de soporte y ventas. El primer conjunto es simple; el segundo contiene una solicitud mixta. La skill debe registrar «requiere revisión» y explicar por qué, no forzar una categoría. El equipo conserva ambos conjuntos como pruebas de regresión cuando cambie la regla.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      }
    ],
    "sections": [
      {
        "heading": "Por qué importa",
        "paragraphs": [
          "Una instrucción que funcionó una vez puede fallar con la siguiente entrada. Tal vez dependía de un archivo especial, de una frase que no se documentó o de una decisión humana invisible. Antes de pedir que un agente repita el trabajo, convierte ese recorrido en un procedimiento que otra persona pueda seguir y probar. Ahí aparece una skill.",
          "En el ecosistema de OpenAI, una skill reúne instrucciones y recursos alrededor de una tarea reconocible; suele tener un archivo SKILL.md con nombre, descripción y pasos, y puede acompañarse de referencias o scripts. La documentación oficial separa su función de la de un servidor MCP: la skill explica el flujo; el servidor entrega datos o acciones. Hermes también documenta skills como procedimientos que el agente puede reutilizar. La idea es comparable, pero su instalación, activación y permisos dependen de cada producto."
        ]
      },
      {
        "heading": "Entrada → proceso → resultado",
        "paragraphs": [
          "Entrada: un procedimiento ya probado y un segundo caso diferente. Proceso: escribir cuándo se usa, qué recibe, cuáles pasos sigue, qué produce y en qué condiciones se detiene; probar ambos casos y corregir. Resultado: una versión de la skill con evidencia de dos pruebas, límites y errores conocidos. No basta con guardar el prompt original bajo otro nombre.",
          "Empieza por el problema, no por una lista de herramientas. «Revisar fuentes de un post antes de publicar» es una función concreta. Define su salida como una tabla de afirmación, fuente, fecha y observación. Indica que no debe aprobar una afirmación si el enlace no respalda la frase. La skill puede llamar una herramienta de búsqueda si existe y está autorizada, pero tiene que poder explicar qué hace cuando esa herramienta falta."
        ]
      },
      {
        "heading": "Una segunda prueba revela la regla real",
        "paragraphs": [
          "Una skill no es un agente completo, una cuenta conectada ni una garantía de calidad. Puede coordinar pasos y usar herramientas disponibles, pero no crea acceso a Linear, correo o archivos por sí misma. Tampoco conviene convertir cada preferencia breve en skill: una instrucción de proyecto sirve para reglas estables; una plantilla basta para campos fijos; una skill aporta valor cuando hay un flujo con decisiones, excepciones y recursos reutilizables."
        ]
      },
      {
        "heading": "Cuándo está lista para compartir",
        "paragraphs": [
          "Pide a alguien que no escribió la skill que ejecute una muestra. Debe saber cuándo activarla, reconocer la salida correcta y detectar cuándo pedir ayuda. Guarda la versión y lo que cambió; si una fuente externa o interfaz cambia, vuelve a probar. No instales scripts desconocidos como parte de una skill sin revisarlos antes.",
          "Elige una tarea que ya resolviste dos veces. Escribe entrada, pasos, salida y condición de parada; prueba un caso normal y uno incómodo. Si ambos se pueden revisar, tienes una candidata útil. Entaltek puede ayudarte a convertir ese procedimiento en una guía o skill con una prueba reproducible."
        ]
      }
    ],
    "relatedSlugs": [
      "mcp-conectar-herramientas-con-control",
      "hermes-agent-perfiles-y-subagentes"
    ],
    icon: ListChecks
  },
  {
  "slug": "complementos-apps-y-plugins-codex",
    "title": "Complementos, apps y plugins: qué agregan a Codex y cómo elegirlos",
    "summary": "Distingue instrucciones, conexiones y paquetes; elige la pieza mínima y revisa qué permisos concede.",
    "category": "Herramientas",
    "publishedAt": "2026-09-22",
    "image": {
      "src": "/images/insights/complementos-apps-y-plugins-codex.svg",
      "alt": "Esquema de complementos, apps y plugins: qué agregan a codex y cómo elegirlos en tres pasos revisables."
    },
    "sources": [
      {
        "label": "OpenAI: arquitectura de plugins — consultada el 22 de septiembre de 2026",
        "url": "https://developers.openai.com/plugins/concepts/plugins"
      },
      {
        "label": "OpenAI: skills — consultada el 22 de septiembre de 2026",
        "url": "https://developers.openai.com/plugins/concepts/skills"
      },
      {
        "label": "OpenAI: MCP — consultada el 22 de septiembre de 2026",
        "url": "https://developers.openai.com/plugins/concepts/mcp-server"
      },
      {
        "label": "OpenAI: navegador — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/browser"
      },
      {
        "label": "OpenAI: control de aplicaciones — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/computer-use"
      }
    ],
    "diagram": [
      "Identifica el dato o acción faltante",
      "Elige skill, conexión o plugin",
      "Prueba el resultado y sus permisos"
    ],
    "examples": [
      {
        "title": "Ejemplo ilustrativo 1: fuentes de un artículo.",
        "prompt": "Una editora quiere comprobar cinco afirmaciones. Puede empezar con documentación pública y una skill que exija URL, fecha y cita pertinente. El MCP de documentación de OpenAI permite buscar y leer páginas oficiales; es de solo lectura y no opera una cuenta de la API. La editora abre dos fuentes para confirmar la tabla antes de publicar.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      },
      {
        "title": "Ejemplo ilustrativo 2: pendientes de un equipo.",
        "prompt": "Una coordinadora necesita ver dos issues actuales de Linear. Una copia manual de sus enlaces puede bastar para una prueba ocasional. Si la consulta se repite y existe acceso autorizado, evalúa un conector o servidor MCP que lea ID, estado y bloqueo. Primero contrasta la lectura con Linear; crear o cerrar issues sería una prueba posterior, separada.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      }
    ],
    "sections": [
      {
        "heading": "Por qué importa",
        "paragraphs": [
          "Codex puede leer un proyecto local y trabajar con los archivos que tenga permitidos. Cuando una tarea necesita información de otro servicio, un procedimiento especializado o una interfaz de escritorio, aparecen otras piezas: skills, conexiones MCP, apps y plugins. Sus nombres se parecen, pero resuelven problemas diferentes. Elegirlas por la tarea evita conceder acceso innecesario.",
          "La arquitectura de plugins de OpenAI describe un plugin como paquete instalable. Puede contener una skill, un servidor MCP, ambos y, cuando aporta valor, una interfaz. La skill enseña el procedimiento; el servidor ofrece herramientas y acceso externo. Una app o conector enlaza un servicio concreto con las acciones que permite; su disponibilidad depende de instalación, cuenta, permisos y superficie de producto. La presencia de un plugin en un catálogo no significa que esté activo en tu entorno."
        ]
      },
      {
        "heading": "Entrada → proceso → resultado",
        "paragraphs": [
          "Entrada: una tarea que Codex aún no puede resolver con el contexto disponible. Proceso: identificar el dato o acción faltante, elegir la pieza mínima, revisar permisos y hacer una prueba pequeña. Resultado: una entrega con fuente y evidencia, junto con una lista clara de accesos concedidos. Si el dato se consigue desde una página pública sin conexión, quizá no hace falta instalar nada.",
          "Piensa en cuatro preguntas. ¿Se repite un procedimiento? Considera una skill. ¿Necesitas consultar datos actuales o modificar un sistema externo? Examina un MCP o app disponible. ¿Quieres compartir un flujo que incluye instrucciones y conexión? Un plugin puede empaquetarlos. ¿El paso solo existe en una interfaz visual? En la app de escritorio, las funciones de navegador o control de aplicaciones pueden ayudar donde estén disponibles, con permisos propios y revisión del efecto. No son equivalentes a una API estable."
        ]
      },
      {
        "heading": "Revisa lo que cambia fuera del chat",
        "paragraphs": [
          "Instalar un plugin no sustituye revisar su origen, sus herramientas y los datos que recibirá. Pregunta qué puede leer, qué puede escribir, quién revoca el acceso y cómo se registra una acción. En la interfaz visual, una captura o un clic también pueden afectar una cuenta donde ya iniciaron sesión. Elige un proyecto de prueba cuando sea posible y separa lectura, edición local y publicación.",
          "Los nombres y catálogos cambian. Por eso este artículo enseña una forma de elegir, no una lista fija de complementos que supuestamente tiene todo usuario. Si tienes una tarea concreta, anota el dato que falta y la acción deseada; con eso Entaltek puede ayudarte a decidir qué conexión o procedimiento merece una prueba."
        ]
      }
    ],
    "relatedSlugs": [
      "mcp-conectar-herramientas-con-control",
      "skills-procedimientos-reutilizables"
    ],
    icon: Blocks
  },
  {
  "slug": "modelos-codex-astra-sol-luna",
    "title": "Modelos de Codex: cuándo elegir Astra, Sol o Luna",
    "summary": "Elige modelo y esfuerzo según la dificultad de una tarea comprobable, sin confundir disponibilidad con garantía.",
    "category": "Herramientas",
    "publishedAt": "2026-09-22",
    "image": {
      "src": "/images/insights/modelos-codex-astra-sol-luna.svg",
      "alt": "Esquema de modelos de codex: cuándo elegir astra, sol o luna en tres pasos revisables."
    },
    "sources": [
      {
        "label": "OpenAI: modelos — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/models"
      },
      {
        "label": "OpenAI: selección de modelos — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/model-selection"
      }
    ],
    "diagram": [
      "Define la tarea y su rúbrica",
      "Prueba el modelo disponible",
      "Compara calidad, tiempo y límites"
    ],
    "examples": [
      {
        "title": "Ejemplo ilustrativo 1: inventario repetible.",
        "prompt": "Un equipo tiene veinte fichas ficticias y necesita título, fecha y dato faltante. Prueba cinco con el modelo predeterminado y coteja cada campo con la ficha. Si la salida es suficiente, no hay motivo editorial para afirmar que Astra era necesario. Si falla por instrucciones vagas, corrige primero la solicitud.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      },
      {
        "title": "Ejemplo ilustrativo 2: cambio con dependencias.",
        "prompt": "Una persona pide modificar una página, conservar accesibilidad y comprobar versión móvil. Empieza con un alcance pequeño y usa el modelo que su cuenta recomiende para desarrollo. Revisa la comparación de archivos y abre la vista final. Si aparecen errores de razonamiento al coordinar varios componentes, prueba un modelo o esfuerzo mayor con la misma rúbrica. La evidencia es el cambio comprobado, no el nombre del modelo.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      }
    ],
    "sections": [
      {
        "heading": "Por qué importa",
        "paragraphs": [
          "Elegir el modelo más potente para cada encargo parece una forma de asegurar calidad, pero puede aumentar tiempo y consumo sin resolver la verdadera causa de un fallo: un objetivo ambiguo o una salida imposible de comprobar. La decisión útil empieza por la tarea, el nivel de incertidumbre y la revisión necesaria.",
          "Al 22 de septiembre de 2026, la documentación oficial de modelos presenta GPT-6 Astra como opción para trabajo complejo entre código, aplicaciones e investigación; GPT-6 Sol para programación y flujos con juicio cotidiano; y GPT-6 Luna para trabajo acotado y frecuente. La guía de selección recomienda experimentar con modelo y esfuerzo de razonamiento según calidad, velocidad y frecuencia. Estas descripciones orientan; no son garantías de que uno resuelva cualquier encargo ni una lista idéntica para todas las cuentas."
        ]
      },
      {
        "heading": "Entrada → proceso → resultado",
        "paragraphs": [
          "Entrada: un encargo con resultado y criterio de terminado. Proceso: usar el modelo predeterminado disponible, probar con una muestra, revisar errores y cambiar modelo o esfuerzo solo si la tarea lo exige. Resultado: una elección documentada con calidad observada, tiempo que importa al equipo y coste o límite consultado en su plan. No hace falta inventar comparaciones de rendimiento para explicar este método.",
          "Una tarea de extraer cinco campos de documentos uniformes puede empezar con Luna si el selector la ofrece. Un cambio de código con varias dependencias, pruebas y revisión puede justificar Sol. Una investigación ambigua que cruza interfaces, fuentes y decisiones delicadas puede justificar Astra. La diferencia no elimina la necesidad de comprobar archivos, fuentes y efectos externos."
        ]
      },
      {
        "heading": "Modelo y esfuerzo son decisiones distintas",
        "paragraphs": [
          "La documentación de Codex permite ajustar el esfuerzo de razonamiento en superficies compatibles. Aumentarlo puede ayudar en problemas difíciles, pero suele tomar más tiempo y consumir más tokens. Primero pregunta si el encargo está bien delimitado; después compara una segunda ejecución con el mismo material y criterio. Si cambias a la vez modelo, prompt, documentos y prueba, no sabrás qué produjo la diferencia."
        ]
      },
      {
        "heading": "Lo que muestra tu selector manda",
        "paragraphs": [
          "La disponibilidad varía por plan, cliente, inicio de sesión, políticas del espacio de trabajo y despliegue. La documentación indica que modelos GPT-5.6 aún pueden aparecer durante la transición. Tampoco debes confundir la lista de Codex o ChatGPT Work con el catálogo de la API. Este artículo no afirma qué modelo exacto ejecuta cada sesión ni que una cuenta tenga todos los modos de razonamiento.",
          "Para tu primera comparación, conserva la misma entrada y verifica tres criterios: exactitud, posibilidad de revisar y tiempo aceptable. Documenta la fecha y vuelve a consultar la página oficial antes de grabar un tutorial sobre el selector. Entaltek puede ayudarte a diseñar una muestra de tu propio trabajo para elegir por resultados, no por etiqueta."
        ]
      }
    ],
    "relatedSlugs": [
      "instalar-codex-requisitos-y-modelos",
      "que-puede-hacer-codex-y-como-revisarlo"
    ],
    icon: Gauge
  },
  {
  "slug": "que-puede-hacer-codex-y-como-revisarlo",
    "title": "Qué puede hacer Codex en una tarea y cómo revisar cada resultado",
    "summary": "De archivos y pruebas a web, conexiones y tareas programadas: comprueba cada salida según su efecto.",
    "category": "Herramientas",
    "publishedAt": "2026-09-22",
    "image": {
      "src": "/images/insights/que-puede-hacer-codex-y-como-revisarlo.svg",
      "alt": "Esquema de qué puede hacer codex en una tarea y cómo revisar cada resultado en tres pasos revisables."
    },
    "sources": [
      {
        "label": "OpenAI: trabajo con Codex — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/developers"
      },
      {
        "label": "navegador — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/browser"
      },
      {
        "label": "control de aplicaciones — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/computer-use"
      },
      {
        "label": "tareas programadas — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/automations"
      },
      {
        "label": "worktrees — consultada el 22 de septiembre de 2026",
        "url": "https://learn.chatgpt.com/docs/environments/git-worktrees"
      }
    ],
    "diagram": [
      "Define material y resultado",
      "Elige herramientas con permiso",
      "Revisa archivo, interfaz o cuenta"
    ],
    "examples": [
      {
        "title": "Ejemplo ilustrativo 1: corregir una página.",
        "prompt": "Una persona pide encontrar el texto de contacto en un sitio de práctica, cambiar una frase y comprobar que sigue legible en móvil. La entrega incluye archivos tocados, prueba de compilación y captura o revisión de la página. Si el código compila pero la frase aparece cortada, el trabajo continúa. Publicar el sitio sería otra decisión.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      },
      {
        "title": "Ejemplo ilustrativo 2: revisar un informe.",
        "prompt": "Una coordinadora entrega tres documentos ficticios y pide una tabla de afirmaciones, fuente y duda. Codex puede ayudar a extraer y ordenar, pero la persona abre las páginas decisivas antes de usar la conclusión. Si necesita consultar datos vivos de una cuenta, debe evaluar una conexión y sus permisos por separado.",
        "result": "Comprueba la entrega con la fuente o criterio indicado; el ejercicio no describe una implementación de Entaltek."
      }
    ],
    "sections": [
      {
        "heading": "Por qué importa",
        "paragraphs": [
          "«Usa Codex para todo» no ayuda a decidir qué encargarle. Una tarea de lectura, una edición de archivos, una investigación web y una publicación tienen efectos distintos. El punto de partida es definir qué resultado quieres ver y qué prueba demostraría que está listo. Después eliges las capacidades necesarias.",
          "La documentación de OpenAI describe a Codex como un entorno para comprender proyectos, modificar código, ejecutar pruebas y revisar cambios. En la aplicación de escritorio también puede trabajar con archivos y herramientas, mientras que otras funciones dependen de superficie, plugins, cuenta y permisos. No hay una lista de poderes idéntica para app, terminal, extensión, navegador y nube."
        ]
      },
      {
        "heading": "Entrada → proceso → resultado",
        "paragraphs": [
          "Entrada: proyecto o material autorizado, objetivo, límites y criterio de terminado. Proceso: leer el estado actual, proponer una intervención pequeña, usar las herramientas disponibles y comprobar el resultado. Resultado: archivos modificados, una tabla, una revisión o un borrador que otra persona puede inspeccionar. Un mensaje «listo» sin entrega ni prueba no cierra la tarea.",
          "Para empezar, Codex puede orientarse: localizar archivos relevantes y explicar cómo se relacionan. Luego puede editar una copia o un espacio de trabajo y mostrar la comparación de cambios. Puede ejecutar pruebas disponibles en el proyecto y analizar fallos. En tareas con información cambiante, puede consultar fuentes si tiene acceso a web o a una conexión adecuada; las afirmaciones deben enlazarse y revisarse. Según la superficie, también puede usar una vista de navegador o control de aplicaciones para comprobar una interfaz visible. Un resultado visual se revisa en la pantalla final, no solo en el código."
        ]
      },
      {
        "heading": "Extensiones y trabajo prolongado",
        "paragraphs": [
          "Una skill añade un procedimiento repetible. Una conexión MCP o app aporta datos y acciones externas con permisos. Un plugin puede reunir ambas piezas. Las tareas programadas pueden volver a ejecutar encargos adecuados, pero su contexto, horario y salida requieren una primera revisión. Los worktrees permiten aislar cambios en proyectos Git; no reemplazan una prueba. Estas opciones se eligen después de comprender una ejecución manual."
        ]
      },
      {
        "heading": "La revisión cambia según el efecto",
        "paragraphs": [
          "Para una respuesta, coteja datos con la fuente. Para un archivo, revisa la comparación y una muestra del resultado. Para código, ejecuta pruebas pertinentes y abre la interfaz. Para una acción en una cuenta, verifica el registro final en la propia cuenta. Para una tarea programada, comprueba la primera ejecución, la hora y que no produjo duplicados. El mismo texto «hecho» no es evidencia suficiente en ninguno de esos casos.",
          "Elige una tarea propia y escribe tres líneas: qué puede leer Codex, qué puede cambiar y quién verificará la salida. Si falta cualquiera de ellas, reduce el alcance a una consulta o a una prueba sobre copias. Entaltek puede ayudarte a diseñar esa primera entrega revisable y decidir después si conviene una skill, conexión o programación."
        ]
      }
    ],
    "relatedSlugs": [
      "chatgpt-y-codex",
      "modelos-codex-astra-sol-luna"
    ],
    icon: Workflow
  },
];
