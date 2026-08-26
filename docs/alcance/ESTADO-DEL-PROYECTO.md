# Estado del proyecto contra la cotización

Auditoría inicial: 2026-08-23. Los estados describen evidencia verificable en los archivos; no implican aceptación comercial.

| Fase | Descripción | Estado | Evidencia y archivos | Qué falta | Dependencias | Información pendiente de la clienta |
|---|---|---|---|---|---|---|
| 1 | Requerimientos, estructura y UI/UX | En diseño | Estructura modular, landing compuesta y changelog raíz; `index.html`, `src/js/*`, `src/styles/main.css`, `CHANGELOG.md` | Documento de requerimientos, diseños fuente, criterios de aceptación y aprobación | Definición comercial y contenidos | Prioridades, identidad aprobada y aceptación del diseño |
| 2 | Inicio y navegación | En desarrollo | Secciones y navegación interna renderizadas; `index.html`, `src/js/app-core.js`, `src/js/helpers.js` | Pruebas visuales/funcionales reales, accesibilidad y contenido aprobado | Navegador y ambiente de despliegue | Textos, dominio y CTA definitivos |
| 2 | Acerca de, certificaciones y cédula | Interfaz visual | Bloque visual con cédula y experiencia; `src/js/app-core.js` | Verificación documental del contenido | Evidencia profesional autorizada | Cédula, certificaciones y experiencia reales |
| 2 | Servicios | Interfaz visual | Tres planes; precios confirmados de $1,200 MXN para consulta presencial y $890 MXN para consulta en línea; `src/js/data.js`, `src/js/app-core.js` | Confirmar precio del programa de 90 días, condiciones comerciales y conexión con operación real | Modelo comercial | Vigencia, formas de pago, facturación, cancelaciones y alcance de cada servicio |
| 2 | Testimonios | Interfaz visual | Tres testimonios e imágenes remotas codificados; `src/js/data.js`, `src/js/app-core.js` | Consentimientos y evidencia; o integración autorizada | Autorización de pacientes | Textos, fotos y métricas reales |
| 2 | Preguntas frecuentes | En desarrollo | Acordeón y cinco entradas; `src/js/data.js`, `src/js/app-core.js` | Validar respuestas y probar interacción en navegador | Contenido aprobado | Pagos, soporte y proceso reales |
| 2 | Formulario de contacto | Simulación | Modal con campos que abre WhatsApp; `src/js/modals.js`, `src/js/helpers.js` | Consentimiento, envío seguro, persistencia y gestión | Aviso de privacidad y backend | Datos mínimos y canal autorizado |
| 2 | Integración con WhatsApp | En desarrollo | Enlaces `wa.me`, widget y mensajes prellenados; `index.html`, `src/js/data.js`, `src/js/helpers.js`, `src/js/app-core.js` | Confirmar número, consentimiento, pruebas y manejo operativo | Cuenta/número autorizado | Número y política de atención |
| 2 | Diseño adaptable | En desarrollo | Clases responsive de Tailwind, CTA móvil y sección de Instagram probada a 320, 390, 820 y 1440 px; `index.html`, `src/js/app-core.js`, `src/styles/main.css`, `src/js/modals.js` | Auditoría responsive completa del resto de secciones, accesibilidad, rendimiento y dispositivos físicos | Navegador y dispositivos objetivo | Dispositivos y navegadores prioritarios |
| 3 | Selección de fecha y hora | Simulación | Fecha local por defecto y seis horarios estáticos; `src/js/helpers.js`, `src/js/modals.js` | Disponibilidad real, zona horaria, bloqueos y validaciones | Backend y calendario | Horarios, excepciones y zona horaria |
| 3 | Evitar citas duplicadas | No iniciado | Sin evidencia | Reglas de concurrencia y persistencia | Backend/base de datos | Política de reservas |
| 3 | Registro automático de pacientes | No iniciado | Sin base de datos ni API | Modelo de datos, consentimiento y seguridad | Backend/base de datos | Datos obligatorios y retención |
| 3 | Administración de disponibilidad | No iniciado | Sin interfaz ni lógica administrativa | CRUD de horarios y excepciones | Autenticación, backend y base de datos | Roles y reglas de agenda |
| 3 | Panel privado: pacientes, citas, agenda y formularios | No iniciado | Sin archivos de panel | Diseño, autenticación, autorización, APIs y vistas | Backend/base de datos | Usuarios, roles y procesos |
| 3 | Panel: estadísticas e información del sitio | No iniciado | Sin evidencia | Métricas, edición y permisos | Panel y modelo de datos | Indicadores y contenido editable |
| 4 | Catálogo de productos digitales | Interfaz visual | Cuatro e-books con detalle y precios; `src/js/data.js`, `src/js/app-core.js`, `src/js/modals.js` | Confirmar existencia, contenido, precios y derechos | Productos reales | Catálogo y precios autorizados |
| 4 | Compra en línea | No iniciado | El botón solo abre WhatsApp | Checkout, órdenes, impuestos, estados y recibos | Proveedor de pago y backend | Proveedor, moneda, facturación y reembolsos |
| 4 | Descarga automática | No iniciado | La FAQ afirma descarga/código, pero no existe implementación | Almacenamiento protegido y entrega autorizada | Backend, pagos y archivos reales | Productos y reglas de acceso |
| 4 | Historial de compras | No iniciado | Sin cuentas ni persistencia | Modelo de órdenes e interfaz | Backend, identidad y pagos | Retención y acceso del cliente |
| 4 | Instagram automático | En análisis | Perfil oficial revisado y cuatro embeds oficiales visibles con carga diferida; `src/js/data.js`, `src/js/app-core.js`, `src/js/helpers.js`. La selección sigue siendo manual y no equivale a un feed autoactualizable | Actualización automática, permisos, consentimiento, moderación y manejo de fallos | Cuenta, proveedor y permisos autorizados | Aprobar los cuatro embeds, privacidad y decidir si la selección se automatizará |
| 4 | Google Maps | No iniciado | Dirección escrita, sin mapa ni enlace | Mapa/ubicación autorizada y configuración | Dirección y posible API | Dirección exacta y consentimiento de publicación |
| 4 | Reseñas, calificación y botón de opinión | No iniciado | Testimonios locales no equivalen a Google Reviews | Fuente verificable e integración | Perfil de Google Business | Perfil y permisos |
| 4 | SEO técnico y local | En desarrollo | Metadatos, canonical, JSON-LD, robots, sitemap y manifest; `index.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest` | Confirmar datos/dominio, rendimiento, indexación y SEO local publicado | Dominio, hosting y contenido real | Dominio, negocio, dirección y contacto |
| 5 | Pruebas finales y optimización | En análisis | Auditoría estática y sintaxis de módulos; sin suite automática | Pruebas de navegador, rendimiento, accesibilidad, integraciones y regresión | Ambiente ejecutable y servicios | Criterios de aceptación |
| 5 | Capacitación | No iniciado | Sin evidencia | Materiales, sesión y validación | Panel y sistemas funcionales | Personas y formato de capacitación |
| 5 | Puesta en producción | No iniciado | No hay configuración de despliegue verificable | Hosting, dominio, pipeline, observabilidad y respaldo | Proveedores e infraestructura | Hosting y dominio |
| 5 | Soporte posterior | No iniciado | Solo condición comercial en PDF | Inicio ligado a entrega aceptada y canal de soporte | Entrega en producción | Responsables y SLA |

## Evidencia de pruebas de la auditoría

- Inventario recursivo y lectura de todos los archivos de código, SEO y documentación.
- Los módulos `data.js`, `helpers.js`, `modals.js` y `app-core.js` cargaron sin errores de sintaxis.
- Todos los destinos internos encontrados (`inicio`, `sobre-mi`, `consultas`, `e-books`, `calculadora`, `testimonios`, `agenda-cta`) tienen un `id` correspondiente.
- Los tres recursos locales existen; `karla.jpg` mide 1696 x 2490 píxeles.
- No se detectaron `package.json`, pruebas automáticas, backend, configuración de despliegue ni repositorio Git.
- No fue posible ejecutar pruebas reales de escritorio/móvil ni revisar la consola porque no había un navegador conectado. Las dependencias y las imágenes remotas tampoco pudieron verificarse en ejecución.

## Evidencia de pruebas de la adaptación editorial

- La landing se ejecutó localmente en Brave y la nueva sección renderizó con encabezado, cuatro artículos y cinco enlaces externos.
- El enlace al perfil abrió una pestaña nueva y los enlaces incluyen `rel="noopener noreferrer"`.
- `data.js` y `app-core.js` superaron la validación de sintaxis de Node sin errores.
- La consola no mostró errores JavaScript de la sección; permanece la advertencia conocida de Tailwind Play CDN para producción.
- Brave aplicó viewports verificables de 320 × 720, 390 × 844, 820 × 900 y 1440 × 900 para revisar la sección de Instagram.
- Los seis posts de prueba se abrieron y se verificaron como publicaciones del perfil `karlagagodoy1`; la cuadrícula local renderizó seis artículos y seis destinos correctos.
- La sección usa una columna en teléfono, dos en tableta y tres en escritorio amplio; los seis iframes, el menú móvil y el modal de cita permanecen disponibles.
- En 320 px se corrigieron el ancho mínimo de Instagram y el desplazamiento horizontal de la página; en 390, 820 y 1440 px no se observó desbordamiento.
- El endpoint oficial de embed respondió para las seis publicaciones; el primer reel se cargó, reprodujo visualmente y cerró dentro de su tarjeta sin errores de consola.
- Los seis embeds se cargan de forma diferida al aproximarse a la sección; ya no requieren “Ver aquí” y pueden iniciar solicitudes a Meta sin clic previo.
- La navegación por scroll actualiza únicamente las clases activas del menú: el identificador de sesión del embed permaneció igual antes y después de navegar a Programas.

## Problemas y riesgos conocidos

- El formulario solicita datos personales y una condición de salud y los envía a WhatsApp sin aviso de privacidad ni consentimiento visible.
- Los enlaces de Aviso de Privacidad y Términos y Condiciones usan `#`.
- Tailwind Play CDN, Lucide, Google Fonts e imágenes de Unsplash son dependencias externas; no hay versionado fijo/integridad para todas ellas y la landing depende de red.
- El teléfono, correo, dirección, horario, dominio, certificación, cédula, experiencia, testimonios, cifra de pacientes, productos, precios y afirmaciones no tienen evidencia adjunta en el repositorio.
- La navegación por scroll actualiza solo el estado visual del menú; ya no reconstruye la aplicación ni reinicia los iframes de Instagram.
- `site.webmanifest` usa rutas desde la raíz, que pueden no funcionar en despliegues bajo subruta.
- El `lastmod` del sitemap es 2026-08-13 y debe mantenerse según cambios reales publicados.
- La cotización contiene información personal/comercial, presenta una diferencia aritmética de $10,000 MXN y se mantiene fuera del repositorio público mediante `.gitignore`.

## Evidencia de preparación del repositorio público

- El repositorio `AriEmiliano10/Landing-KarlaGodoy` es público y usa `main` como rama predeterminada.
- Se conservó el historial remoto existente; no se utilizará `force push`.
- El árbol remoto previo no contenía la cotización y `docs/alcance/*.pdf` quedó excluido del versionado local.
