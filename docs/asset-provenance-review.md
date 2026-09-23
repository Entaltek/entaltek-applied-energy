# Revisión de procedencia de recursos del landing

Revisado el 23 de septiembre de 2026. Esta revisión identifica lo que puede comprobarse en el repositorio; no certifica la titularidad de cada recurso.

| Recurso | Hallazgo | Acción pendiente |
| --- | --- | --- |
| Iconos de interfaz | Se importan desde `lucide-react`. El paquete instalado incluye su licencia ISC y el aviso de Feather/MIT en `node_modules/lucide-react/LICENSE`; el proyecto [Lucide](https://github.com/lucide-icons/lucide/blob/main/LICENSE) publica esa licencia. | Conservar los avisos de licencia en la distribución y revisar los iconos personalizados por separado. |
| Sansation | Hay seis archivos WOFF2 locales en `public/fonts/`, convertidos desde TTF en el commit `1db186f`. [Google Fonts](https://github.com/google/fonts/tree/main/ofl/sansation) aloja Sansation bajo OFL, pero el repositorio de Entaltek no conserva el origen ni la licencia de estos binarios concretos. | Identificar el paquete fuente y su versión, comparar hashes o sustituir por una descarga de procedencia verificable y guardar el aviso de licencia correspondiente. |
| Logos Entaltek | SVG e imagen de Open Graph están versionados en el repositorio. El historial no demuestra autoría, cesión ni licencia. | Conservar el archivo fuente o constancia de autoría/autorización antes de afirmar titularidad. |
| Mockups y capturas de productos | Los SVG y WebP de `src/assets/` están versionados, pero no hay manifiesto de fuentes, permisos ni datos de prueba. | Confirmar autoría y que las capturas no muestran datos personales reales ni marcas ajenas sin permiso. |
| Portadas de artículos | Los SVG y PNG de `public/images/insights/` están versionados; no hay registro completo de generación, fuente o licencia por imagen. | Registrar autoría/herramienta y derechos de cada portada antes de reutilizarlas en otros medios. |

No se encontraron testimonios, logos de clientes ni porcentajes de impacto en las secciones principales. El enlace a la demo de clínicas devolvía 404 y se retiró del landing. El resto de las demos externas comprobadas respondían HTTP 200 en la fecha de revisión; esto no acredita su contenido ni derechos.
