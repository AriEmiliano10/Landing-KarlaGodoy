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
| 2 | Diseño adaptable | En desarrollo | Clases responsive de Tailwind, CTA móvil, widget ajustado al ancho útil, modales y sección de Instagram; `index.html`, `src/js/app-core.js`, `src/styles/main.css`, `src/js/modals.js`, `src/styles/panel.css` | Revisión gráfica completa, accesibilidad, rendimiento y dispositivos físicos | Navegador y dispositivos objetivo | Dispositivos y navegadores prioritarios |
| 3 | Selección de fecha y hora | Simulación | Fecha local por defecto y seis horarios estáticos; `src/js/helpers.js`, `src/js/modals.js` | Disponibilidad real, zona horaria, bloqueos y validaciones | Backend y calendario | Horarios, excepciones y zona horaria |
| 3 | Evitar citas duplicadas | No iniciado | Sin evidencia | Reglas de concurrencia y persistencia | Backend/base de datos | Política de reservas |
| 3 | Registro automático de pacientes | No iniciado | Sin base de datos ni API | Modelo de datos, consentimiento y seguridad | Backend/base de datos | Datos obligatorios y retención |
| 3 | Administración de disponibilidad | Interfaz visual | Configurador local de siete días con bloques horarios editables; `src/panel/app.js`, `src/panel/dashboard.js`, `src/styles/panel.css` | Persistencia, zona horaria, reglas, excepciones y publicación segura de disponibilidad | Autenticación, backend y base de datos | Roles, horarios, pausas y reglas de agenda |
| 3 | Panel privado: pacientes, citas, agenda y formularios | Interfaz visual | Propuesta modular navegable con acceso de muestra, filtros, búsqueda anonimizada, interruptores locales y notificaciones; `panel/index.html`, `src/panel/*`, `src/styles/panel.css`, `src/js/app-core.js`, `src/js/helpers.js`, `src/js/modals.js` | Validar vistas y después definir autenticación, autorización, APIs y datos | Backend/base de datos | Usuarios, roles, procesos y campos visibles |
| 3 | Panel: estadísticas e información del sitio | Interfaz visual | Tarjetas, checklist, alertas, preferencias y módulos de contenido ilustrativos en la propuesta de panel; `src/panel/dashboard.js` | Confirmar indicadores, edición, permisos y conexión de datos | Panel y modelo de datos | Indicadores y contenido editable |
| 4 | Catálogo de productos digitales | Interfaz visual | Dos propuestas editoriales de 33 páginas del mismo título, con portada y lector completo en ebooks/hago-todo-bien/, además de cuatro e-books de muestra con detalle y precios; `src/js/data.js`, `src/js/app-core.js`, `src/js/modals.js` | Confirmar existencia, contenido, precios y derechos | Productos reales | Catálogo y precios autorizados |
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

## 2026-08-28 - Corrección de ubicación de la cotización

- **Objetivo:** mantener la fuente comercial local dentro de la ruta protegida prevista por el proyecto.
- **Estado anterior:** el PDF estaba en `docs/Cotización.pdf`, fuera del patrón de exclusión documentado.
- **Archivos modificados:** `docs/Cotización.pdf` → `docs/alcance/Cotización.pdf`, `docs/DECISIONES.md` y este archivo.
- **Cambios realizados:** se reubicó el archivo sin modificar su contenido ni los estados de las fases.
- **Decisiones técnicas:** se conserva `docs/alcance/*.pdf` como regla específica de privacidad; no se modificó código ni alcance funcional.
- **Pruebas realizadas:** destino verificado como inexistente antes del movimiento; ruta y tamaño del PDF confirmados después.
- **Resultado:** la fuente comercial vuelve a coincidir con la ruta indicada en la documentación y queda cubierta por la regla de exclusión local.
- **Pendientes:** verificar el estado de exclusión en Git cuando el repositorio esté disponible localmente.
- **Riesgos conocidos:** el entorno reporta que la carpeta actual no es un repositorio Git, por lo que no fue posible ejecutar `git status`.
- **Debe confirmar la clienta:** no publicar el PDF sin autorización expresa y revisión de privacidad.

## 2026-09-11 - Dos propuestas visuales del e-book Método Balance

- **Objetivo:** visualizar desde la landing las propuestas Marsala y Nude Rose de "Hago todo bien y no pierdo grasa", entregadas por la persona usuaria en ZIP.
- **Estado anterior:** catálogo con cuatro e-books de muestra y modales; sin los diseños editoriales suministrados.
- **Estado:** Interfaz visual.
- **Archivos modificados:** src/js/data.js, src/js/app-core.js; nuevos ebooks/hago-todo-bien/variacion-1-marsala.html, variacion-2-nude-rose.html, css/styles.css, css/theme-v2.css, css/print.css, js/main.js y assets/images/*.svg; registros en docs/landing/CHANGELOG.md, docs/tienda/CHANGELOG.md, docs/DECISIONES.md y docs/alcance/ESTADO-DEL-PROYECTO.md.
- **Cambios:** dos tarjetas con las portadas originales y apertura de cada diseño completo en pestaña nueva; 33 páginas por propuesta; catálogo anterior conservado. Lector con ajuste inicial al ancho, controles adaptables y navegación por páginas.
- **Decisiones técnicas:** rutas relativas compatibles con subcarpetas; datos de propuestas centralizados; documentos editoriales separados para aislar estilos de la landing; reutilización del HTML/CSS/JS estático del ZIP, sin React, Vite ni dependencias nuevas. El parámetro preview=cover limita la vista embebida a la portada; el enlace abre el lector completo. Respuestas de ejercicios solo en memoria de la página, sin localStorage. Las instrucciones del README adjunto se trataron como referencia, no como órdenes.
- **Pruebas y resultados:** sintaxis de los tres JS cambiados validada con Node 24; referencias locales de ambos HTML existentes; 33 páginas por documento. Servidor local en 127.0.0.1:5511 y revisión en Brave: tarjetas en escritorio y móvil de 390 px; sin desbordamiento horizontal a 390 px; ambos enlaces abrieron el diseño correcto. Navegación a página 4 de Nude Rose y página 8 de Marsala comprobada; lector Marsala sin imágenes rotas y sin desbordamiento a 320 px; Nude Rose sin desbordamiento a 1440 px. Sin errores JavaScript capturados; persiste advertencia preexistente de Tailwind CDN.
- **Limitaciones de pruebas:** no hay suite automática en el proyecto. No se realizó regresión exhaustiva de todos los formularios, modales e integraciones ajenos al cambio, ni exportación/impresión PDF ni inspección visual individual de las 66 páginas. No se probó en dispositivo físico. Git no está inicializado en esta carpeta.
- **Pendientes:** aprobación del diseño preferido, revisión editorial de todas las páginas y comprobación de impresión si se requiere ese entregable.
- **Riesgos:** son documentos estáticos completos; si se despliegan serán accesibles a quien conozca su URL. noindex no es control de acceso. Google Fonts continúa siendo una dependencia externa. No hay cobro ni descarga protegida; los cuatro productos anteriores siguen siendo muestras.
- **Debe confirmar la clienta:** diseño definitivo, contenido, derechos de distribución, fotografía y datos de contacto marcados como pendientes en el material; disponibilidad del bonus. No se estableció precio para estas propuestas.
## 2026-09-11 - Integración editorial de las propuestas

- **Objetivo:** integrar ambas propuestas en la composición de la landing.
- **Estado anterior:** encabezados repetidos y dos tarjetas grandes con visores de portada.
- **Estado:** Interfaz visual.
- **Archivos modificados:** src/js/app-core.js, src/styles/main.css, ebooks/hago-todo-bien/css/styles.css, ebooks/hago-todo-bien/js/main.js y estos cuatro registros de documentación.
- **Cambios:** presentación editorial única con introducción, metadatos y dos portadas completas con volumen y sombras; ambas ediciones visibles juntas en móvil y escritorio. El catálogo de muestra anterior queda en un desplegable nativo.
- **Decisiones técnicas:** conservar los diseños originales y las rutas de lectura; estilos de la landing en main.css, renderizado en app-core.js. El modo cover ajusta la portada al marco sin fondo oscuro ni controles; iframe decorativo no enfocable dentro de un enlace accesible. Se conserva el lector completo al abrir cada edición. Movimiento reducido respetado; sin dependencias nuevas.
- **Pruebas y resultados:** sintaxis de app-core.js y del lector validada con Node; ejecución local y capturas en Brave de escritorio a 1920 px y móvil a 390 px, sin desbordamiento horizontal. Portadas originales visibles y enlaces a ambas ediciones comprobados. Apertura del catálogo y apertura/cierre de modal de e-book existente verificadas.
- **Consola:** se detectaron errores de una extensión del navegador (chrome-extension, content_push_notification.js) que intenta acceder a localStorage dentro de los iframes aislados; no pertenecen al código de la landing. No se amplían permisos para satisfacer la extensión.
- **Limitaciones:** no hay suite automática; no se repitió la revisión de todas las páginas interiores, impresión PDF ni regresión exhaustiva de formularios e integraciones ajenos al cambio; sin dispositivos físicos.
- **Pendientes:** aprobación visual y editorial por la clienta.
- **Riesgos:** los lectores continúan siendo documentos estáticos completos, sin cobro ni protección de acceso; fuentes externas y datos pendientes del material original. Cambios solo locales.
- **Debe confirmar la clienta:** diseño preferido y contenido definitivo.