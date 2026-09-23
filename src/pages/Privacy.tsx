import { Link } from "react-router-dom";
import { CONTACT_EMAIL } from "@/lib/site";

const Privacy = () => (
  <main className="min-h-screen bg-[#F7FAFC] px-4 py-12 text-[#013762] dark:bg-[#091D2C] dark:text-[#E7F2F7]">
    <article className="mx-auto max-w-3xl space-y-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-[#123149] sm:p-10">
      <Link to="/" className="inline-block font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2">← Volver a Entaltek</Link>
      <header>
        <h1 className="text-3xl font-bold">Aviso de Privacidad</h1>
        <p className="mt-3 text-sm leading-relaxed">
          Información sobre el formulario de contacto de entaltek.com. Borrador sujeto a completar y revisar los datos del responsable antes de su publicación.
        </p>
      </header>
      <section>
        <h2 className="text-xl font-bold">Responsable</h2>
        <p className="mt-2">Entaltek es el nombre comercial de una persona física en México. [NOMBRE COMPLETO DEL RESPONSABLE PENDIENTE]. [DOMICILIO COMPLETO DESIGNADO PARA RECIBIR AVISOS PENDIENTE].</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Datos y finalidad</h2>
        <p className="mt-2">Si utilizas el formulario, recibimos tu nombre, correo electrónico y el mensaje que escribas. Los usamos para responder tu consulta, conocer el alcance inicial de tu solicitud y dar seguimiento a esa conversación. El formulario no ofrece suscripción a campañas comerciales. Si se plantea un uso adicional de los datos, deberá informarse por separado.</p>
        <p className="mt-2">Evita incluir datos sensibles, contraseñas o información confidencial en el mensaje.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Cómo llega tu mensaje</h2>
        <p className="mt-2">El navegador envía los tres campos a FormSubmit mediante una petición HTTPS. FormSubmit procesa la solicitud y la dirige a {CONTACT_EMAIL}; Cloudflare Email Routing reenvía ese correo a la bandeja personal administrada por la persona responsable. El proveedor de esa bandeja también interviene en la entrega y almacenamiento del correo. No mostramos aquí la dirección personal de destino. La aceptación técnica de FormSubmit no confirma por sí sola que el mensaje se entregó en la bandeja.</p>
        <p className="mt-2">FormSubmit <a className="underline underline-offset-2" href="https://formsubmit.co/help">documenta</a> una conservación de hasta 30 días para mensajes de formularios cuya dirección aún no se ha activado. Esa explicación no establece el plazo aplicable a consultas entregadas a una dirección activa ni el plazo de la bandeja de destino.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Conservación y solicitudes</h2>
        <p className="mt-2">[PLAZO DE CONSERVACIÓN DE LAS CONSULTAS PENDIENTE]. Para solicitar acceso, rectificación, cancelación u oposición respecto de los datos enviados, escribe al [MEDIO DE CONTACTO PARA DATOS PERSONALES PENDIENTE]. Indica la consulta a la que te refieres, el derecho que deseas ejercer y un medio para recibir respuesta; podremos pedir datos razonables para verificar que se trata de tu información. La respuesta y cualquier corrección o eliminación deberán seguir el procedimiento y los plazos legales aplicables, sujetos a revisión profesional.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Preferencias y cambios</h2>
        <p className="mt-2">Si cambias entre tema claro y oscuro, este sitio guarda la clave <code>entaltek-theme</code> en el almacenamiento local del navegador para recordar tu preferencia. Puedes eliminarla desde la configuración de tu navegador. Cloudflare sirve el sitio y carga un beacon de Web Analytics en la página pública para medir visitas y rendimiento. <a className="underline underline-offset-2" href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/">Su documentación</a> describe esas métricas; <a className="underline underline-offset-2" href="https://developers.cloudflare.com/speed/observatory/rum-beacon/">también indica</a> que el beacon no utiliza cookies ni almacenamiento local, y descarta la IP recibida durante la petición antes de guardarla en sus bases o registros principales. No encontramos otros rastreadores en el código ni en la página pública revisada. Los cambios a este aviso se comunicarán en esta misma página. [FECHA DE PUBLICACIÓN PENDIENTE].</p>
      </section>
    </article>
  </main>
);

export default Privacy;
