import {
  LayoutDashboard,
  Dog,
  Users,
  HeartHandshake,
  CalendarCheck,
  Settings,
  Calculator,
  Timer,
  Package,
  Palette,
  Wallet,
  BarChart3,
  Stethoscope,
  Clock,
  Hourglass,
  Building2,
  LockKeyhole,
  UserCircle,
  CreditCard,
} from "lucide-react";
import type { ProductDetail } from "@/components/ProductOverlay";

import sabuesoLaptop from "@/assets/sabueso/laptop-dashboard.webp";
import sabuesoPadres from "@/assets/sabueso/padres.webp";
import sabuesoCuidadores from "@/assets/sabueso/cuidadores.webp";
import sabuesoConfiguracion from "@/assets/sabueso/configuracion.webp";
import sabuesoMovilDashboard from "@/assets/sabueso/movil-dashboard.webp";
import sabuesoMovilPerrhijos from "@/assets/sabueso/movil-perrhijos.webp";
import sabuesoMovilPerfil from "@/assets/sabueso/movil-perfil.webp";
import nailaArquitectura from "@/assets/naila/arquitectura.webp";
import mediclinkMockup from "@/assets/mediclink/mockup.svg";
import pilatesMockup from "@/assets/pilates/mockup.svg";

export const sabuesoDetail: ProductDetail = {
  badge: { label: "Mascotas", className: "bg-white/15 text-white" },
  accentText: "text-[#47DAD6]",
  accentBg: "bg-[#47DAD6]",
  gradient: "from-[#0179B1] via-[#024d7a] to-[#011627]",
  title: "Sabueso",
  tagline: "Plataforma de gestión integral para guarderías caninas",
  intro:
    "Desarrollada para la operación real de Perromies: centraliza expedientes, asistencia, personal y comunicación con los dueños en un solo sistema, cuidando a los perrhijos como familia.",
  demoUrl: "https://perro-pal-manage.lovable.app",
  hero: { src: sabuesoLaptop, alt: "Dashboard de Sabueso en una laptop" },
  pillars: [
    {
      title: "Sencillez y orden",
      description: "Registro y lectura guiados de información para minimizar errores humanos.",
    },
    {
      title: "Evidencias multimedia",
      description: "Almacenamiento y envío de fotos y video sobre el estado de cada perrhijo.",
    },
    {
      title: "Paquetes flexibles",
      description: "Paquetes por servicio que se crean y actualizan sin fricción: hospedaje, guardería, día perrón, baño.",
    },
    {
      title: "Expedientes automáticos",
      description: "Historial de indicaciones, vacunas y medicinas con acceso sencillo y transparente.",
    },
  ],
  modulesTitle: "7 módulos, una sola operación",
  modules: [
    {
      icon: LayoutDashboard,
      name: "Dashboard",
      description:
        "Tablero en tiempo real: ocupación actual, ingresos del día y gráfico de horas pico. Elimina los puntos ciegos del negocio.",
    },
    {
      icon: Dog,
      name: "Perrhijos",
      description:
        "La identidad digital de cada perrhijo: historial médico, instrucciones de cuidado y galería de fotos. Incluye el Semáforo de Salud: validación visual de vacunas, alergias críticas y alertas de medicamentos.",
    },
    {
      icon: HeartHandshake,
      name: "Padres y madres",
      description:
        "Familias con varios perrhijos bajo un mismo contacto, búsqueda por nombre o correo e historial de visitas de todo el grupo.",
    },
    {
      icon: Users,
      name: "Cuidadores",
      description:
        "Personal filtrable por rol — cuidadores, estilistas, entrenadores y administrativos — con la carga de trabajo de cada quien a la vista.",
    },
    {
      icon: CalendarCheck,
      name: "Asistencia y servicios",
      description:
        "Catálogo visual con precios y duraciones editables en tiempo real, con códigos de color por servicio para identificación rápida.",
    },
    {
      icon: Settings,
      name: "Configuración",
      description:
        "Datos del negocio, tema visual y reglas de notificaciones automáticas: alertas de vacunas y recordatorios de check-out.",
    },
  ],
  gallery: [
    { src: sabuesoPadres, alt: "Módulo de padres y madres de Sabueso en laptop", wide: true },
    { src: sabuesoCuidadores, alt: "Módulo de cuidadores de Sabueso en laptop", wide: true },
    { src: sabuesoConfiguracion, alt: "Módulo de configuración de Sabueso en laptop", wide: true },
    { src: sabuesoMovilDashboard, alt: "Dashboard de Sabueso en un teléfono", wide: false },
    { src: sabuesoMovilPerrhijos, alt: "Listado de perrhijos de Sabueso en un teléfono", wide: false },
    { src: sabuesoMovilPerfil, alt: "Perfil de un perrhijo en Sabueso móvil", wide: false },
  ],
};

export const nailaDetail: ProductDetail = {
  badge: { label: "Belleza", className: "bg-[#f9a8d4]/10 text-[#f9a8d4]" },
  accentText: "text-[#f9a8d4]",
  accentBg: "bg-[#f9a8d4]",
  gradient: "from-[#831843] via-[#3d0f2f] to-[#0d0518]",
  title: "Naila Art",
  tagline: "ERP para salones de uñas",
  intro:
    "La mayoría de las manicuristas trabaja sin saber si realmente está ganando dinero. Naila Art existe para cambiar eso: conocer el costo real de cada servicio y ponerle precio con datos, no a ojo.",
  demoUrl: "https://nail-chic-system.lovable.app",
  hero: {
    src: nailaArquitectura,
    alt: "Arquitectura del sistema Naila Art: collage de pantallas del ERP",
    className: "max-h-[420px] w-auto mx-auto rounded-xl border border-white/10 drop-shadow-2xl",
  },
  stats: [
    { value: "11", label: "módulos" },
    { value: "48", label: "endpoints" },
    { value: "17", label: "modelos de datos" },
  ],
  pillars: [
    {
      title: "Costo real",
      description: "Saber cuánto cuesta de verdad cada servicio es la base para ponerle un precio justo y rentable.",
    },
    {
      title: "Precios correctos",
      description: "Precios definidos con datos del propio salón, no copiados de la competencia.",
    },
    {
      title: "Inventario controlado",
      description: "Recursos gestionados sin sobrecostos y sin quedarse sin producto a media cita.",
    },
    {
      title: "Todo en un lugar",
      description: "Un solo entorno para operar el salón completo, sin libretas ni hojas sueltas.",
    },
  ],
  modulesTitle: "Cómo lo resuelve",
  modules: [
    {
      icon: Calculator,
      name: "Calculadora CFO",
      description:
        "Define gastos fijos y sueldo deseado; el sistema calcula tu costo por minuto para tomar decisiones de precio informadas.",
    },
    {
      icon: Timer,
      name: "POS en Vivo",
      description:
        "Punto de venta con cronómetro integrado que alerta si el tiempo real supera lo estimado, cuidando la rentabilidad de cada servicio.",
    },
    {
      icon: Package,
      name: "Inventario 2.0",
      description:
        "Categoriza consumibles, químicos y decoración para gestionar el inventario y el rendimiento de cada producto.",
    },
    {
      icon: Palette,
      name: "Clientas y catálogo",
      description:
        "Expedientes de clientas, menú de servicios y catálogo de arte y extras para cotizar sin adivinar.",
    },
    {
      icon: Wallet,
      name: "Costos y gastos",
      description: "Registro de costos fijos y fondos de ahorro para una vista financiera completa del salón.",
    },
    {
      icon: BarChart3,
      name: "Dashboard y reportes",
      description: "Indicadores del salón y reportes para ver el negocio completo de un vistazo.",
    },
  ],
};

export const mediclinkDetail: ProductDetail = {
  badge: { label: "Salud", className: "bg-[#7dd3fc]/15 text-[#7dd3fc]" },
  accentText: "text-[#7dd3fc]",
  accentBg: "bg-[#7dd3fc]",
  gradient: "from-[#1e3a8a] via-[#13234d] to-[#011627]",
  title: "MedicLink",
  tagline: "Plataforma de gestión integral para clínicas y consultorios",
  intro:
    "Desarrollada para la operación real de clínicas multi-especialidad: centraliza citas, pacientes, especialistas y horarios en un solo sistema, con un bot de Telegram que agenda por sí solo, 24/7, sin intervención del personal.",
  hero: {
    src: mediclinkMockup,
    alt: "Mockup del panel de administración de MedicLink con métricas de citas",
    className: "w-full max-w-lg mx-auto drop-shadow-2xl rounded-xl",
  },
  stats: [
    { value: "8", label: "módulos" },
    { value: "24/7", label: "agendamiento por bot" },
    { value: "PDF/Excel", label: "reportes exportables" },
  ],
  pillars: [
    {
      title: "Agendamiento autónomo",
      description:
        "Bot de Telegram que guía al paciente paso a paso: servicio, especialista, fecha y horario disponible — la cita se confirma sin tocar el teléfono.",
    },
    {
      title: "Disponibilidad real",
      description:
        "Horarios por bloques con intervalos configurables por especialista. El sistema solo ofrece slots verdaderamente libres, sin dobles reservas.",
    },
    {
      title: "Pacientes centralizados",
      description:
        "Expediente de cada paciente con historial completo de citas, notas clínicas y registro automático desde el primer agendamiento.",
    },
    {
      title: "Reportes accionables",
      description:
        "Métricas por especialista, tendencias de citas y consultas por servicio, exportables a PDF y Excel con un clic.",
    },
  ],
  modulesTitle: "8 módulos, una sola operación",
  modules: [
    {
      icon: LayoutDashboard,
      name: "Dashboard",
      description:
        "Tablero en tiempo real: citas pendientes del día, tendencia semanal, comparativas de periodo y pacientes registrados. El pulso de la clínica de un vistazo.",
    },
    {
      icon: CalendarCheck,
      name: "Citas",
      description:
        "Gestión completa con filtros por fecha, especialista y estado. Agendado manual en 4 pasos con validación de disponibilidad en vivo.",
    },
    {
      icon: Users,
      name: "Pacientes",
      description:
        "Expediente digital con historial de citas filtrable, datos de contacto y notas. Registro automático desde el bot.",
    },
    {
      icon: Stethoscope,
      name: "Especialistas",
      description: "Personal con servicios asignados, cada especialista ofrece solo lo que realmente atiende.",
    },
    {
      icon: Clock,
      name: "Horarios",
      description:
        "Bloques horarios flexibles por día con intervalos de cita configurables. Soporta jornadas partidas (mañana y tarde).",
    },
    {
      icon: Hourglass,
      name: "Lista de espera",
      description:
        "Cuando un slot se cancela, el sistema identifica pacientes en espera para ese especialista y servicio. Ningún espacio se desperdicia.",
    },
    {
      icon: BarChart3,
      name: "Reportes",
      description:
        "Productividad por especialista, tasas de asistencia y servicios más demandados, exportables a PDF y Excel.",
    },
    {
      icon: Building2,
      name: "Multi-clínica",
      description:
        "Arquitectura multi-tenant lista para escalar: cada clínica con su propio panel, datos aislados y administración centralizada.",
    },
  ],
};

export const pilatesDetail: ProductDetail = {
  badge: { label: "Wellness", className: "bg-[#6ee7b7]/10 text-[#6ee7b7]" },
  accentText: "text-[#6ee7b7]",
  accentBg: "bg-[#6ee7b7]",
  gradient: "from-[#065f46] via-[#053a35] to-[#011627]",
  title: "Entaltek Pilates",
  tagline: "App móvil para estudios de pilates",
  intro:
    "Elimina la coordinación manual por WhatsApp: los clientes reservan sus clases desde el celular, pagan dentro de la app y el estudio tiene su base de clientes centralizada en un solo lugar.",
  hero: {
    src: pilatesMockup,
    alt: "Mockup de la app Entaltek Pilates con calendario de reservas y pago",
    className: "max-h-[440px] w-auto mx-auto drop-shadow-2xl",
  },
  stats: [
    { value: "Flutter", label: "un código, dos plataformas" },
    { value: "Firebase", label: "Auth + Cloud Firestore" },
    { value: "Mercado Pago", label: "pagos integrados" },
  ],
  pillars: [
    {
      title: "Reservación autónoma",
      description:
        "Calendario de disponibilidad con horarios libres en tiempo real: el cliente elige, confirma y su cita queda registrada.",
    },
    {
      title: "Pagos en la app",
      description: "Cobro integrado vía APIs de Mercado Pago en el mismo flujo de reserva.",
    },
    {
      title: "Perfil sincronizado",
      description:
        "Datos personales consultables y editables, sincronizados entre Cloud Firestore y el dispositivo con SharedPreferences.",
    },
    {
      title: "Clientes centralizados",
      description: "El estudio ve y gestiona toda su base de clientes desde un solo lugar.",
    },
  ],
  modulesTitle: "Qué hace la app",
  modules: [
    {
      icon: LockKeyhole,
      name: "Autenticación",
      description: "Registro e inicio de sesión de usuarios con Firebase Authentication.",
    },
    {
      icon: UserCircle,
      name: "Perfil de usuario",
      description:
        "Consulta y edición de datos personales con sincronización entre Firestore y almacenamiento local.",
    },
    {
      icon: CalendarCheck,
      name: "Reservación de citas",
      description:
        "Calendario de disponibilidad, selección de horarios libres, confirmación y registro de la cita.",
    },
    {
      icon: CreditCard,
      name: "Pagos",
      description: "Pago de clases dentro de la app vía las APIs de Mercado Pago.",
    },
    {
      icon: Users,
      name: "Gestión de clientes",
      description: "Administración centralizada de los clientes del estudio.",
    },
  ],
};
