# Entaltek Applied Energy

Sitio web institucional y comercial de Entaltek.

## Propósito

La página presenta a Entaltek como una empresa de software, automatización e IA aplicada para negocios reales. El objetivo del sitio es explicar con claridad:

- qué hace Entaltek;
- qué soluciones ofrece;
- a quién ayuda;
- cómo trabaja;
- cuál es su identidad de marca;
- cómo solicitar un diagnóstico inicial.

## Stack

- Vite
- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- lucide-react
- Lovable

## Scripts

```sh
npm install
npm run dev
npm run build
npm run lint
npm run preview
```

## Estructura principal

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── AboutUs.tsx
│   ├── Solutions.tsx
│   ├── Process.tsx
│   ├── MissionVision.tsx
│   ├── DNA.tsx
│   ├── Values.tsx
│   ├── BrandIdentity.tsx
│   ├── WhoWeHelp.tsx
│   ├── Contact.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
├── pages/
│   ├── Index.tsx
│   └── NotFound.tsx
└── index.css
```

## Líneas de solución comunicadas

- Entaltek CFDI: visor de CFDI y conversor XML/ZIP a Excel.
- Automatización operativa: procesos, reportes, formularios, Excel, CRM, APIs, webhooks y backoffice.
- Gestión para talleres: serigrafía, sublimación, impresión y negocios similares.
- Marketplace de rentas: idea en discovery para publicaciones completas y contacto ordenado.

## Identidad de marca comunicada

La sección `BrandIdentity.tsx` resume el manual de marca:

- ADN: energía aplicada, ciencia e ingeniería, humanidad, adaptabilidad, proporción e inteligencia.
- Valores: responsabilidad, respeto, honestidad, puntualidad y lealtad.
- Paleta: azul brillante, azul marino, azul cielo claro, azul técnico y blanco.
- Tipografía: referencia a Exo 2 como fuente original de marca.

## Flujo de trabajo recomendado

No desarrollar directamente en `main`.

```text
feature/* → main
```

Para cambios relevantes de marca, copy o estructura:

1. Crear rama `feature/*`.
2. Revisar localmente con `npm run dev`.
3. Ejecutar `npm run build` y `npm run lint`.
4. Crear PR hacia `main`.
5. Publicar desde Lovable o el proveedor de hosting configurado.

## Contacto configurado

El formulario usa FormSubmit hacia:

```text
contact@entaltek.com
```

Antes de producción pública, confirmar que el correo esté activado y que FormSubmit haya validado el destinatario.
