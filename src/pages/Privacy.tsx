import { useTranslation } from "@/lib/i18n";
import { Link } from "react-router-dom";
import { CONTACT_EMAIL, PRIVACY_ADDRESS, RESPONSIBLE_NAME } from "@/lib/site";

const Privacy = () => {
  const { t, isEnglish } = useTranslation();

  return (
  <main className="min-h-screen bg-[#F7FAFC] px-4 py-12 text-[#013762] dark:bg-[#091D2C] dark:text-[#E7F2F7]">
    <article className="mx-auto max-w-3xl space-y-8 rounded-2xl bg-white p-6 shadow-sm dark:bg-[#123149] sm:p-10">
      <Link to={isEnglish ? "/en/" : "/"} className="inline-block font-semibold underline underline-offset-2 focus-visible:outline-2 focus-visible:outline-offset-2">{t("← Volver a Entaltek")}</Link>
      <header>
        <h1 className="text-3xl font-bold">{t("Aviso de Privacidad")}</h1>
        <p className="mt-3 text-sm leading-relaxed"> {t("Información sobre los datos que se tratan al usar el formulario de contacto de entaltek.com.")} </p>
      </header>
      <section>
        <h2 className="text-xl font-bold">{t("Responsable")}</h2>
        <p className="mt-2">{t("Entaltek es el nombre comercial de")} {RESPONSIBLE_NAME}{t(", persona física responsable del tratamiento de los datos enviados mediante este sitio. Domicilio designado para recibir avisos:")} {PRIVACY_ADDRESS}{t(".")}</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">{t("Datos y finalidad")}</h2>
        <p className="mt-2">{t("Si utilizas el formulario, recibimos tu nombre, correo electrónico y el mensaje que escribas. Los usamos para responder tu consulta, conocer el alcance inicial de tu solicitud y dar seguimiento a esa conversación. Este sitio no crea cuentas ni cobra pagos. El formulario no ofrece suscripción a campañas comerciales. Si se plantea un uso adicional de los datos, deberá informarse por separado.")}</p>
        <p className="mt-2">{t("Evita incluir datos sensibles, contraseñas o información confidencial en el mensaje.")}</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">{t("Cómo llega tu mensaje")}</h2>
        <p className="mt-2">{t("El sitio está alojado en Vultr y se sirve a través de Cloudflare. Al enviar el formulario, el navegador transmite los tres campos a FormSubmit mediante una petición HTTPS. FormSubmit procesa la solicitud y la dirige a")} {CONTACT_EMAIL}{t("; Cloudflare Email Routing reenvía ese correo a una bandeja personal de Gmail administrada por la persona responsable. Google interviene en la entrega y almacenamiento del correo. No mostramos aquí la dirección personal de destino. La aceptación técnica de FormSubmit no confirma por sí sola que el mensaje se entregó en la bandeja.")}</p>
        <p className="mt-2">{t("FormSubmit")} <a className="underline underline-offset-2" href="https://formsubmit.co/help">{t("documenta")}</a> {t("una conservación de hasta 30 días para mensajes de formularios cuya dirección aún no se ha activado. Esa explicación no establece el plazo aplicable a consultas entregadas a una dirección activa ni el plazo de la bandeja de destino.")}</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">{t("Conservación y solicitudes")}</h2>
        <p className="mt-2">{t("Conservamos las consultas recibidas en la bandeja bajo nuestro control durante un mes desde su recepción y después las eliminamos. Los servicios que intervienen en la entrega pueden aplicar sus propios plazos de conservación.")}</p>
        <p className="mt-2">{t("Para solicitar acceso, rectificación, cancelación u oposición respecto de los datos enviados, o limitar su uso, escribe a")} <a className="underline underline-offset-2" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>{t(". Indica tu nombre, la consulta a la que te refieres, el derecho que deseas ejercer y un medio para recibir respuesta. Podremos solicitar información razonable para verificar que los datos son tuyos. Atenderemos la solicitud conforme a los plazos aplicables.")}</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">{t("Registros técnicos")}</h2>
        <p className="mt-2">{t("Al visitar el sitio, el servidor Nginx en Vultr registra datos técnicos de la solicitud, como fecha, ruta solicitada y datos de la conexión y del navegador. Su configuración actual rota esos registros cada día y conserva 14 archivos anteriores. El formulario envía su contenido directamente a FormSubmit: no añadimos el nombre, correo ni mensaje a la URL ni a los registros de la aplicación.")}</p>
      </section>
      <section>
        <h2 className="text-xl font-bold">{t("Preferencias y cambios")}</h2>
        <p className="mt-2">{t("Si cambias entre tema claro y oscuro, este sitio guarda la clave")} <code>{t("entaltek-theme")}</code> {t("en el almacenamiento local del navegador para recordar tu preferencia. Puedes eliminarla desde la configuración de tu navegador. Cloudflare sirve el sitio y carga un beacon de Web Analytics en la página pública para medir visitas y rendimiento.")} <a className="underline underline-offset-2" href="https://developers.cloudflare.com/web-analytics/data-metrics/data-origin-and-collection/">{t("Su documentación")}</a> {t("describe esas métricas;")} <a className="underline underline-offset-2" href="https://developers.cloudflare.com/speed/observatory/rum-beacon/">{t("también indica")}</a> {t("que el beacon no utiliza cookies ni almacenamiento local, y descarta la IP recibida durante la petición antes de guardarla en sus bases o registros principales. No encontramos otros rastreadores en el código ni en la página pública revisada. Los cambios a este aviso se comunicarán en esta misma página. Última actualización: 23 de septiembre de 2026.")}</p>
      </section>
    </article>
  </main>
  );
};

export default Privacy;
