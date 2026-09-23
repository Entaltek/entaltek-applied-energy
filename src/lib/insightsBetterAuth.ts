import { ShieldCheck } from "lucide-react";
import type { Insight } from "./insights";

export const betterAuthInsight: Insight = {
  icon: ShieldCheck,
  "slug": "better-auth-stripe-saas-multiempresa",
  "title": "Better Auth + Stripe: usuarios, permisos y suscripciones",
  "summary": "Quién entra, qué puede hacer y qué tiene contratado: exploramos cómo conectar estas tres decisiones en un SaaS para empresas.",
  "category": "Herramientas",
  "publishedAt": "2026-09-23",
  "image": {
    "src": "/images/insights/better-auth-stripe.svg",
    "alt": "Una empresa conecta tres piezas de su plataforma: usuarios, permisos y suscripción."
  },
  "sources": [
    {
      "label": "Better Auth: introducción — consultada el 23-09-2026",
      "url": "https://better-auth.com/docs/introduction"
    },
    {
      "label": "Better Auth: organizaciones y permisos — consultada el 23-09-2026",
      "url": "https://better-auth.com/docs/plugins/organization"
    },
    {
      "label": "Better Auth: integración con Stripe — consultada el 23-09-2026",
      "url": "https://better-auth.com/docs/plugins/stripe"
    },
    {
      "label": "Better Auth: JWT para servicios externos — consultada el 23-09-2026",
      "url": "https://better-auth.com/docs/plugins/jwt"
    }
  ],
  "diagram": [
    "Entrada: empresas, personas y reglas del plan",
    "Proceso: identificar, autorizar y comprobar la suscripción",
    "Resultado: una operación permitida dentro de la empresa correcta"
  ],
  "examples": [
    {
      "title": "Ejemplo ilustrativo 1 · Un taller con varios colaboradores",
      "prompt": "Un taller contrata un plan para su equipo. La propietaria administra la suscripción; recepción registra servicios y un técnico consulta las órdenes que le corresponden. Estos permisos son una propuesta de negocio, no roles preconfigurados del producto.",
      "result": "La prueba debe demostrar que recepción puede trabajar, pero no cambiar el plan, y que nadie puede consultar las órdenes de otro taller modificando un identificador."
    },
    {
      "title": "Ejemplo ilustrativo 2 · Una persona en dos inmobiliarias",
      "prompt": "Una asesora colabora con dos inmobiliarias. En una administra propiedades; en otra solo consulta expedientes. Cada empresa tiene su propio plan y sus propios registros.",
      "result": "Al cambiar de organización deben cambiar el contexto y los permisos. El plan de una inmobiliaria no debe habilitar funciones ni consumir cuotas de la otra."
    }
  ],
  "sections": [
    {
      "heading": "Tres preguntas que aparecen cuando crece una plataforma",
      "paragraphs": [
        "¿Quién entra, qué puede hacer y qué tiene contratado? Para una plataforma que atiende a varias empresas, estas preguntas están presentes en cada operación. Registrar a una persona es apenas el comienzo: también hace falta saber para qué negocio trabaja y qué acciones le corresponden.",
        "Imagina un sistema para talleres. Cada negocio invita a su equipo y contrata un plan, pero sus órdenes de servicio deben permanecer separadas de las de otros talleres. Una pantalla de acceso bien diseñada no resuelve por sí sola esa separación. Este artículo ayuda a quienes planean un SaaS a reconocer las decisiones que necesitan probar."
      ]
    },
    {
      "heading": "Qué aporta Better Auth",
      "paragraphs": [
        "Better Auth es un framework de autenticación y autorización para TypeScript. Incluye gestión de cuentas y sesiones y puede ampliarse mediante plugins. Su plugin de organizaciones permite representar empresas, miembros, invitaciones y roles: una base útil para modelar equipos dentro de una aplicación.",
        "Conviene distinguir identidad, autorización y acceso comercial. La identidad reconoce a la persona; los permisos determinan qué acciones puede realizar; el plan establece qué funciones contrató el negocio. Nuestra propuesta es comprobar las tres condiciones en el servidor antes de permitir una operación."
      ]
    },
    {
      "heading": "Dónde entra Stripe",
      "paragraphs": [
        "El plugin de Stripe permite asociar suscripciones con usuarios u organizaciones, iniciar Checkout y abrir el portal de gestión de facturación. También contempla cobro por asientos. Esto facilita conectar la empresa que usa la plataforma con la suscripción que paga.",
        "La integración gestiona eventos comunes de suscripción, pero no define toda la operación del negocio. Los permisos para administrar una suscripción requieren configuración; los límites de uso y las reglas ante un pago fallido necesitan lógica propia. Por eso evitamos prometer que instalar el plugin deja resueltos todos los pagos."
      ]
    },
    {
      "heading": "Una prueba pequeña antes de adoptar la arquitectura",
      "paragraphs": [
        "En Entaltek estamos explorando esta combinación como posible base para futuros productos SaaS. El siguiente paso propuesto es un piloto con dos empresas ficticias, personas con distintos permisos y una suscripción de prueba. No presentamos esta evaluación como una integración ya implementada ni como una migración realizada.",
        "Para ese piloto planteamos un backend TypeScript, una base de datos y Stripe en modo de prueba. Si una API de negocio usa FastAPI, la integración requiere trabajo adicional: Better Auth documenta JWT y claves públicas JWKS para servicios externos. Esa posibilidad técnica no demuestra todavía compatibilidad con una aplicación concreta."
      ]
    },
    {
      "heading": "Cómo sabremos si el piloto funciona",
      "paragraphs": [
        "La comprobación debe cubrir tanto operaciones permitidas como intentos que deben rechazarse. Probaríamos solicitudes directas al backend, además de recorrer las pantallas. El resultado sería un registro de cada escenario, su respuesta esperada y la evidencia obtenida."
      ],
      "list": [
        "Una persona invitada accede únicamente a las empresas de las que es miembro.",
        "Cambiar el identificador de un registro no permite consultar datos de otra empresa.",
        "Un miembro sin autorización no puede contratar, cambiar ni cancelar el plan.",
        "Al alcanzar una cuota, el backend aplica la regla acordada aunque se omita la interfaz.",
        "Los cambios de suscripción se reflejan en el acceso según la política definida para el producto."
      ]
    },
    {
      "heading": "La decisión de producto sigue siendo nuestra",
      "paragraphs": [
        "Antes de reutilizar esta base habría que definir qué ocurre con los registros cuando una empresa cambia de plan, quién puede recuperar el acceso y cómo se atienden excepciones. También probaríamos respaldos y actualizaciones. Una biblioteca ayuda a construir; la calidad de la solución depende de cómo se integra y se revisa.",
        "El objetivo de Entaltek es dedicar más atención a los procesos particulares de cada negocio, apoyándonos en componentes comunes que podamos comprobar. Si tu plataforma necesita manejar equipos, permisos y planes por empresa, podemos revisar contigo el modelo y delimitar una primera prueba."
      ]
    }
  ]
};
