# PR #5 — privacidad, contacto y revisión del landing

Actualizado el 23 de septiembre de 2026. Este texto resume el estado revisable del PR borrador; no autoriza fusionarlo ni desplegarlo.

## Cambios

- Se conserva el aviso junto al formulario y el enlace del footer a `/privacidad`. El borrador describe solamente el nombre, correo y mensaje solicitados; la finalidad de responder; la ruta FormSubmit → `contact@entaltek.com` → Cloudflare Email Routing → bandeja personal; la preferencia de tema en `localStorage`; y Cloudflare Web Analytics, confirmado como script inyectado en el navegador de producción. No hay suscripción comercial ni banner de cookies añadido.
- El formulario comprueba la respuesta JSON de FormSubmit, distingue aceptación técnica de entrega al buzón, mantiene el contenido ante errores y muestra mensajes persistentes accesibles. Conserva honeypot y límites de longitud. No añade datos del visitante a URLs ni registros.
- Se evitó que el formulario quedase cortado por la barra fija en pantalla móvil o escritorio. Se confirmó por teclado la apertura, el ciclo de Tab, Escape y el retorno del foco en el detalle de producto.
- Se quitaron una promesa de diagnóstico gratuito sin confirmación, un enlace a demo de clínicas que respondía 404, una afirmación 24/7 no comprobada, una cuenta de X/Twitter no verificada en metadatos y el registro de rutas 404 en consola. El esquema del HTML ahora identifica el sitio como `WebSite`, sin atribuir una organización constituida. Se matizó la presentación de casos como ejemplos con límites documentados.
- `docs/asset-provenance-review.md` registra procedencia/licencias verificables y dudas sobre Sansation, logos, imágenes y capturas.

## Pruebas

- `npm run build`: correcto; advertencia existente por bundle mayor de 500 kB.
- `tsc --noEmit`: correcto.
- `npm run lint`: 0 errores, 7 advertencias preexistentes de Fast Refresh en componentes UI.
- Vista local a 390 × 844 y escritorio: sin desbordamiento horizontal del formulario; enlace al aviso visible; envío vacío detiene en el primer campo requerido y no genera petición.
- Navegación de teclado del detalle de clínicas: enfoque inicial en cerrar, Tab contenido y retorno, Escape cierra y devuelve el enfoque.
- No se envió ningún formulario real, no se fusionó el PR y no se desplegó.

## Pendiente antes de cerrar el aviso

1. Nombre completo publicable de la persona física responsable.
2. Domicilio completo que designará para recibir avisos. Si pertenece a un familiar, contar con su autorización y asegurar que allí se puedan recibir comunicaciones; revisión profesional de la decisión.
3. Medio publicable para solicitudes de acceso, rectificación, cancelación u oposición (confirmar si será `contact@entaltek.com` u otro).
4. Plazo o criterio concreto para conservar las consultas recibidas en la bandeja personal, y posibilidad real de aplicarlo.

El borrador `/privacidad` conserva marcadores de esos datos. No publicarlo así ni presentarlo como revisión/certificación legal. Confirmar la configuración real de la bandeja de destino y el tratamiento de mensajes de FormSubmit tras activar la dirección. La documentación de FormSubmit indica 30 días para envíos de direcciones todavía sin activar; no se extrapoló ese plazo a consultas entregadas.

## Estado externo que afecta el despliegue

El `main` remoto sigue en `633a2f5`, mientras la producción del 23 de septiembre muestra al menos el artículo `better-auth-stripe-saas-multiempresa`, presente en cambios **sin commit** del checkout principal. Desplegar directamente este PR desde Git podría retirar contenido visible. Primero conciliar y versionar esos cambios por separado. Ese checkout también contiene un esquema de artículo con autor/editor `Organization` que debe corregirse para no presentar a Entaltek como empresa constituida. La rama de este PR no tocó esos archivos ajenos.
