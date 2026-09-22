import { MonitorDown } from "lucide-react";
import type { Insight } from "./insights";

export const codexSetupInsight: Insight = {
  slug: "instalar-codex-requisitos-y-modelos",
  title: "Cómo instalar Codex: equipo, software y modelos disponibles",
  summary: "Elige app, terminal o editor; comprueba la compatibilidad de tu equipo y empieza con una tarea pequeña.",
  category: "Herramientas",
  publishedAt: "2026-09-22",
  icon: MonitorDown,
  image: { src: "/images/insights/instalar-codex.svg", alt: "Tres rutas de acceso a Codex: aplicación, terminal y editor, conectadas a un proyecto revisable." },
  sources: [
    { label: "OpenAI: aplicación de escritorio — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/app" },
    { label: "OpenAI: Codex CLI — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/codex/cli" },
    { label: "OpenAI: app para Windows — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/windows/windows-app" },
    { label: "OpenAI: app para Linux — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/linux/linux-app" },
    { label: "OpenAI: modelos de Codex — consultada el 22 de septiembre de 2026", url: "https://learn.chatgpt.com/docs/models" },
  ],
  diagram: ["Identifica sistema, arquitectura y proyecto", "Instala una superficie oficial e inicia sesión", "Prueba una tarea de lectura y comprueba los archivos"],
  mindMap: { title: "Tres formas de empezar", variant: "compare", branches: [
    { label: "App", children: ["Interfaz visual", "Proyecto y archivos"] },
    { label: "CLI", children: ["Terminal en la carpeta", "Instalador o npm"] },
    { label: "Editor", children: ["Extensión compatible", "Revisión junto al código"] },
    { label: "Comprobación", children: ["Carpeta de prueba", "Archivos citados"] },
  ] },
  examples: [
    { title: "Ejemplo ilustrativo 1: primera prueba en la app", prompt: "Identifica la página de contacto, sus archivos y cómo probarías un cambio de texto. No edites nada.", result: "La persona revisa las rutas citadas y decide después si encarga una edición." },
    { title: "Ejemplo ilustrativo 2: primera prueba en CLI", prompt: "En esta carpeta, enumera los archivos Markdown, títulos repetidos y enlaces que requieren revisión. No borres ni renombres archivos.", result: "Se comprueban tres filas del inventario antes de pedir una corrección." },
  ],
  sections: [
    { heading: "Elige dónde trabajar", paragraphs: [
      "Codex puede trabajar con los archivos de un proyecto, proponer cambios y usar herramientas disponibles en el equipo. Antes de instalarlo, decide si prefieres la aplicación de escritorio de ChatGPT, Codex CLI en una terminal o una extensión del editor. Empieza donde ya te resulta fácil revisar el trabajo.",
      "La app permite iniciar sesión, elegir una carpeta o proyecto y seleccionar Codex. La terminal ofrece un recorrido directo desde una carpeta de trabajo. La extensión tiene sentido si ya haces tus revisiones dentro de un editor compatible.",
    ] },
    { heading: "Comprueba sistema y equipo", paragraphs: [
      "La descarga oficial para macOS identifica una versión para Apple Silicon. En Windows, OpenAI distribuye la app mediante Microsoft Store y documenta el comando «winget install --id 9PLM9XGG6VKS -s msstore». En Linux está en vista previa para Ubuntu 24.04/26.04 LTS, Debian 13, Fedora 43/44 y Arch actualizado, con paquetes x64 y ARM64.",
      "Las guías oficiales consultadas no publican un mínimo general de RAM, CPU, espacio libre o GPU válido para todas las superficies. No conviene inventar esas cifras. Verifica también lo que exige tu proyecto: una compilación, un archivo de video o un conjunto de datos pueden requerir recursos muy diferentes. En Windows, Git sirve para algunas funciones; Node.js, Python o .NET se instalan cuando el proyecto los necesita.",
    ] },
    { heading: "Instala Codex CLI si prefieres la terminal", paragraphs: [
      "La documentación oficial ofrece instaladores independientes para macOS/Linux y Windows. Como alternativas, permite «npm install -g @openai/codex» y, en macOS, «brew install --cask codex». Node.js y npm son necesarios para el método npm, no para todas las formas de instalar Codex. Revisa la página oficial antes de ejecutar un instalador.",
      "Abre una terminal en una carpeta de práctica y ejecuta «codex». En el primer inicio elige «Sign in with ChatGPT» u otra forma de acceso disponible. Pide una explicación de los archivos sin ediciones; comprueba las rutas citadas antes de autorizar cambios. La página de la extensión de IDE indica cuáles editores son compatibles en el momento de instalación.",
    ] },
    { heading: "Modelos disponibles al 22 de septiembre de 2026", paragraphs: [
      "La página oficial de modelos describe GPT-6 Astra para flujos complejos entre código y herramientas, GPT-6 Sol para trabajo exigente cotidiano y GPT-6 Luna para tareas acotadas y repetibles. También indica que GPT-5.6 Sol, Terra y Luna permanecen durante el despliegue. Esto describe Codex; no equivale al catálogo completo de modelos de la API.",
      "La disponibilidad concreta depende del plan, el inicio de sesión, el cliente, las políticas del espacio de trabajo y el lanzamiento. Empieza con el modelo predeterminado de tu cuenta. Una instrucción clara sobre resultado, contexto, límites y criterio de terminado suele aportar más que cambiar de modelo sin definir el encargo.",
    ] },
    { heading: "Confirma que funciona con una tarea pequeña", paragraphs: [
      "La instalación queda comprobada cuando puedes abrir Codex, iniciar sesión, elegir una carpeta autorizada y recibir una respuesta que mencione archivos reales sin cambios no solicitados. Revisa tres referencias en los originales. Si falla, anota sistema, versión, método de instalación y mensaje antes de reinstalar.",
      "Después crea un punto de retorno con Git y ensaya una edición pequeña con una prueba de aceptación. Las versiones y modelos pueden cambiar, así que consulta la documentación oficial cuando instales o elijas un modelo. Si quieres aplicar Codex a tu trabajo, Entaltek puede ayudarte a acotar una primera prueba y definir la evidencia de éxito.",
    ] },
  ],
};
