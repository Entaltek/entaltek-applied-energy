# PR #5 — privacidad y contacto del landing

Actualizado el 23 de septiembre de 2026. Entaltek opera como persona física. El aviso usa el nombre y el domicilio designado por el responsable, `contact@entaltek.com` para solicitudes de datos y una conservación de consultas de un mes. La persona responsable confirmó que el domicilio es suyo. El C.P. 37420 se contrastó con directorios postales de Loma Bonita, León, porque no venía en el mensaje original.

## Cambios del PR

- `/privacidad` describe los tres campos del formulario, la finalidad de responder consultas y la ruta FormSubmit → `contact@entaltek.com` → Cloudflare Email Routing → Gmail personal. También identifica el alojamiento en Vultr, Cloudflare Web Analytics, la preferencia de tema en `localStorage`, los registros técnicos de Nginx, conservación y medio para solicitudes ARCO. No se presenta como certificación legal.
- El aviso breve y su enlace permanecen junto al formulario y en el footer. El formulario tiene etiquetas, límites, honeypot y mensajes accesibles. Aceptación por FormSubmit no se describe como entrega confirmada en Gmail. No pone campos del visitante en URL ni logs de la aplicación.
- El footer identifica al responsable. Se corrigió el espacio del formulario en móvil y escritorio; el enlace de una demo que respondía 404 y afirmaciones no demostradas fueron retirados o acotados. El JSON-LD del sitio usa `WebSite` y el de artículos no atribuye una organización constituida.
- Se incorporó al historial de Git el artículo Better Auth + Stripe y su portada, que ya estaban publicados en Vultr pero faltaban en `main` remoto. Se conservan sus enlaces y metadatos. Otro artículo local todavía no publicado permanece fuera de este PR.
- `docs/asset-provenance-review.md` detalla licencias comprobadas y la procedencia que aún debe documentarse de Sansation, logos y algunas imágenes.

## Verificación

- `npm run build` y `tsc --noEmit`: correctos. Vite conserva el aviso existente de bundle mayor de 500 kB.
- `npm run lint`: 0 errores, 7 advertencias anteriores de Fast Refresh en componentes UI.
- Vista previa a 390 px: aviso y artículo Better Auth + Stripe sin desbordamiento horizontal. El artículo conserva imagen, contenido y canonical propio; su esquema indica `WebSite`, no `Organization`.
- En la revisión anterior de esta rama se comprobó la validación de campos vacíos sin enviar la solicitud y la navegación por teclado del detalle de producto (Tab, Escape y retorno del foco).
- No se envió una solicitud real a FormSubmit. La configuración de DNS apunta a Cloudflare Email Routing, pero ello no demuestra por sí solo la entrega final a Gmail.

## Observaciones posteriores al despliegue

- Comprobar en el buzón personal, sin pedir datos al visitante, que las nuevas consultas se reciben y pueden eliminarse al cumplir un mes. FormSubmit documenta 30 días para formularios aún no activados; no se extrapoló ese plazo a la dirección activa.
- Revisar profesionalmente el texto del aviso y completar el registro de procedencia de los recursos visuales. No se inventaron garantías de cumplimiento ni permisos sobre imágenes.
- El checkout principal conserva cambios locales ajenos al PR, incluido un borrador de correo con Cloudflare y Gmail. No sobrescribir ni incluir esos archivos por accidente.
