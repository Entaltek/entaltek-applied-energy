import { Link } from "react-router-dom";
import { CONTACT_EMAIL, LOCATION } from "@/lib/site";

const Privacy = () => (
  <main className="min-h-screen bg-[#F7FAFC] px-4 py-12 text-[#013762] dark:bg-[#091D2C] dark:text-[#E7F2F7]">
    <article className="mx-auto max-w-3xl space-y-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-[#123149] sm:p-10">
      <Link to="/" className="inline-block font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2">← Volver a Entaltek</Link>
      <header>
        <h1 className="text-3xl font-bold">Aviso de Privacidad</h1>
        <p className="mt-3 text-sm leading-relaxed">
          Información sobre el formulario de contacto de entaltek.com. Este borrador requiere completar la identidad y el domicilio del responsable antes de publicarse.
        </p>
      </header>
      <section>
        <h2 className="text-xl font-bold">Responsable</h2>
        <p className="mt-2">Entaltek, nombre comercial. Identidad legal del responsable: [NOMBRE COMPLETO O RAZÓN SOCIAL PENDIENTE]. Domicilio para oír y recibir notificaciones: [DOMICILIO COMPLETO PENDIENTE]. Ubicación de operación: {LOCATION}.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Datos y finalidad</h2>
        <p className="mt-2">Si utilizas el formulario, recibimos tu nombre, correo electrónico y el mensaje que escribas. Los usamos para responder tu consulta, conocer el alcance inicial de tu solicitud y dar seguimiento a esa conversación. El formulario no ofrece suscripción a campañas comerciales. Si se plantea un uso adicional de los datos, deberá informarse por separado.</p>
        <p className="mt-2">Evita incluir datos sensibles, contraseñas o información confidencial en el mensaje.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Cómo llega tu mensaje</h2>
        <p className="mt-2">El formulario envía la información a FormSubmit, que la entrega al correo {CONTACT_EMAIL}. La configuración de correo de Entaltek utiliza Cloudflare para reenviar esos mensajes a una bandeja administrada por la persona responsable. FormSubmit y los proveedores de correo intervienen técnicamente en esta entrega. Debe confirmarse con ellos qué registros conservan y durante cuánto tiempo.</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Conservación y solicitudes</h2>
        <p className="mt-2">[PLAZO O CRITERIO DE CONSERVACIÓN PENDIENTE]. Para solicitar acceso, rectificación, cancelación u oposición respecto de los datos enviados, o para limitar su uso, escribe a <a className="underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. [PROCEDIMIENTO Y PLAZOS DE ATENCIÓN PENDIENTES].</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Preferencias y cambios</h2>
        <p className="mt-2">El sitio recuerda tu preferencia de tema claro u oscuro en el almacenamiento local del navegador. En el código revisado no se cargan herramientas de analítica o publicidad. [CONFIRMAR SERVICIOS ACTIVOS EN PRODUCCIÓN]. Los cambios a este aviso se comunicarán en esta misma página. [FECHA DE PUBLICACIÓN PENDIENTE].</p>
      </section>
    </article>
  </main>
);

export default Privacy;
