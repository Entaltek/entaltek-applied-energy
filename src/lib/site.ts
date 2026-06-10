// Datos de contacto y configuración del sitio.
// Reemplazar [NUMERO] con el número de WhatsApp en formato 52XXXXXXXXXX.
const WHATSAPP_NUMBER = "[NUMERO]";

const WHATSAPP_MESSAGE = "Hola, me interesa hablar sobre un proyecto.";

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CONTACT_EMAIL = "contact@entaltek.com";

export const LOCATION = "León, Guanajuato, México";
