# Registro de cambios - Landing

El historial anterior de la landing permanece en `../../CHANGELOG.md`. No se copia ni reemplaza para evitar bifurcar el registro histórico.

## 2026-08-31 - Acceso visual al panel desde la landing

- **Objetivo:** permitir presentar desde la landing el acceso y la propuesta visual del panel en GitHub Pages.
- **Estado anterior:** el panel de demostración solo era accesible mediante su ruta directa.
- **Archivos modificados:** `src/js/app-core.js`, `src/js/helpers.js`, `src/js/modals.js`, `docs/landing/CHANGELOG.md`, `docs/panel/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se añadieron acciones de “Acceso panel” en navegación de escritorio y móvil, y un modal de inicio de sesión de muestra que navega a `./panel/`.
- **Decisiones técnicas:** los campos están deshabilitados y no se recopilan ni validan credenciales; la ruta relativa mantiene compatibilidad con despliegues de GitHub Pages bajo subruta.
- **Pruebas realizadas:** validación estática de módulos, identificadores de eventos y destino relativo.
- **Resultado:** la landing puede enlazar a la propuesta visual del panel sin afirmar que existe autenticación.
- **Pendientes:** aprobar el flujo visual y, en una fase posterior, definir autenticación, autorización, privacidad y backend.
- **Riesgos conocidos:** el panel continuará siendo público mientras no se implemente seguridad real; no debe usarse para datos de pacientes.
- **Debe confirmar la clienta:** etiqueta, ubicación y flujo final del acceso al panel.

## 2026-08-25 - Curaduría de cuatro posts de Instagram

- **Objetivo:** reducir la sección de Instagram a las cuatro publicaciones solicitadas por la clienta y adaptar su composición visual.
- **Estado anterior:** seis embeds distribuidos en una, dos o tres columnas según el ancho disponible.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js`, `docs/landing/CHANGELOG.md`, `docs/integraciones/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se conservaron los posts sobre tratamiento y nutrición, hierro y energía, comida preentrenamiento y valoración corporal; se retiraron de la selección los dos posts más generales. La cuadrícula ahora usa una columna en móvil y dos columnas centradas desde tableta.
- **Decisiones técnicas:** priorizar variedad clínica, práctica, deportiva y de valoración; limitar la cuadrícula a `max-w-5xl` para formar un bloque 2 × 2 equilibrado en escritorio.
- **Pruebas realizadas:** conteo estático de objetos, URLs e iframes generados; revisión de clases responsive y numeración consecutiva.
- **Resultado:** la fuente contiene cuatro publicaciones y el renderizado generará cuatro tarjetas numeradas del 01 al 04 en una composición simétrica.
- **Pendientes:** prueba visual y de carga real en escritorio y móvil; consentimiento/cookies para contenido de Meta.
- **Riesgos conocidos:** los cuatro iframes siguen dependiendo de Instagram y pueden afectar privacidad, disponibilidad y rendimiento.
- **Debe confirmar la clienta:** aprobación de los cuatro temas conservados y del orden editorial.

## 2026-08-25 - Precios confirmados de consultas

- **Objetivo:** publicar los costos facilitados por la clienta para las consultas presencial y en línea.
- **Estado anterior:** ambas consultas mostraban un espacio reservado porque su precio estaba pendiente de confirmar.
- **Archivos modificados:** `src/js/data.js`, `docs/landing/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** la consulta presencial quedó en $1,200 MXN y la consulta en línea en $890 MXN; las cifras se muestran desde la fuente centralizada tanto en las tarjetas como en el selector del modal.
- **Decisiones técnicas:** conservar los precios como valores numéricos en `SERVICE_PLANS` para reutilizar el formato monetario existente y evitar duplicaciones.
- **Pruebas realizadas:** búsqueda de precios y modalidades, revisión de los consumidores de `SERVICE_PLANS` y comprobación de formato con `toLocaleString('es-MX')`.
- **Resultado:** los valores configurados producirán `$1,200 MXN` y `$890 MXN` en las tarjetas y opciones del modal.
- **Pendientes:** verificación visual y funcional en navegador; confirmar condiciones de pago, vigencia y alcance exacto de cada consulta.
- **Riesgos conocidos:** el programa de 90 días conserva su precio independiente de $3,200 MXN y su ahorro publicado, ambos pendientes de confirmación.
- **Debe confirmar la clienta:** vigencia de los precios, impuestos o facturación, formas de pago y política de cambios o cancelaciones.

## 2026-08-25 - Nueva presentación personal en Sobre mí

- **Objetivo:** incorporar el texto de presentación solicitado por la clienta y mejorar su jerarquía tipográfica.
- **Estado anterior:** introducción enfocada en un método de alta precisión, con dos párrafos técnicos y dos destacados de servicio.
- **Archivos modificados:** `src/js/app-core.js` y `docs/landing/CHANGELOG.md`.
- **Cambios realizados:** se sustituyó la introducción por cuatro párrafos en primera persona; se simplificó el encabezado y se retiraron los dos destacados que repetían el contenido anterior.
- **Decisiones técnicas:** conservar las familias tipográficas existentes; usar serif solo para el título y la frase introductoria, sans serif para lectura prolongada y un acento lateral para el cierre.
- **Pruebas realizadas:** revisión estática del contenido, de la estructura HTML generada y de las clases responsive; búsqueda de los textos reemplazados y nuevos.
- **Resultado:** el nuevo contenido está completo y la estructura conserva sus variantes móvil y escritorio. No fue posible validar con Node porque no está instalado, ni ejecutar la landing porque el equipo no dispone de un servidor local compatible y el navegador bloquea URLs `file://`.
- **Pendientes:** ejecución visual y consola en escritorio y móvil; aprobación visual y editorial de la clienta; prueba en dispositivos físicos.
- **Riesgos conocidos:** las credenciales mostradas en las tarjetas contiguas siguen pendientes de verificación documental.
- **Debe confirmar la clienta:** aprobación final del texto, jerarquía tipográfica y permanencia de las tarjetas profesionales.

## 2026-08-23 - Auditoría documental inicial

- **Objetivo:** documentar el estado real de la landing sin cambiar diseño, contenido o comportamiento.
- **Estado anterior:** landing modular existente; sin documentación por fase.
- **Archivos modificados:** solo documentación (`AGENTS.md` y `docs/`).
- **Cambios realizados:** inventario, responsabilidades, evidencia, riesgos y pendientes registrados.
- **Decisiones técnicas:** conservar `index.html`, `app.js`, `app-core.js`, `data.js`, `helpers.js`, `modals.js`, `main.css` y `assets/` en sus responsabilidades actuales.
- **Pruebas realizadas:** revisión completa, validación de sintaxis de módulos, destinos internos y presencia de recursos.
- **Resultado:** sintaxis importable correcta y destinos internos presentes; ejecución visual no verificada.
- **Pendientes:** prueba de navegador, accesibilidad, rendimiento, enlaces externos, datos y legales.
- **Riesgos conocidos:** dependencias CDN, datos provisionales y envío de información sensible a WhatsApp.
- **Debe confirmar la clienta:** todos los datos personales, profesionales, comerciales y de contacto publicados.

## 2026-08-23 - Sección editorial vinculada con Instagram

- **Objetivo:** adaptar temas profesionales del Instagram oficial al lenguaje visual de la landing.
- **Estado anterior:** la landing no mostraba contenido ni enlaces editoriales del perfil oficial.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js`, `docs/landing/CHANGELOG.md`, `docs/integraciones/CHANGELOG.md`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se añadió una sección responsive entre “Sobre mí” y los e-books con cuatro tarjetas editoriales, llamada al perfil oficial y enlaces directos a publicaciones seleccionadas.
- **Decisiones técnicas:** mantener textos, URLs y colores configurables en `data.js`; renderizar la vista en `app-core.js`; no copiar fotografías ni incrustar un feed automático.
- **Pruebas realizadas:** validación sintáctica de módulos; ejecución local en Brave; revisión del DOM, jerarquía accesible, destinos, apertura del perfil en pestaña nueva y consola.
- **Resultado:** la sección renderiza con cuatro artículos y cinco enlaces externos válidos; no se encontraron errores JavaScript de la sección. Se sustituyó un icono de marca no disponible en Lucide.
- **Pendientes:** validación visual móvil en un navegador compatible con emulación de viewport y aprobación editorial de la clienta.
- **Riesgos conocidos:** las publicaciones pueden cambiar o eliminarse; el contenido de Instagram sigue sujeto a sus términos y disponibilidad.
- **Debe confirmar la clienta:** aprobación de los cuatro temas, permiso para usar imágenes en una fase posterior y periodicidad de actualización.

## 2026-08-23 - Curaduría de seis posts de prueba

- **Objetivo:** reemplazar la primera selección editorial por los seis posts facilitados para prueba.
- **Estado anterior:** cuatro tarjetas editoriales basadas en publicaciones elegidas durante la auditoría del perfil.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js`, `docs/landing/CHANGELOG.md`, `docs/integraciones/CHANGELOG.md`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se sustituyeron temas, textos y destinos; la cuadrícula pasó a tres columnas en escritorio, dos en tableta y una en móvil.
- **Decisiones técnicas:** resumir los temas con lenguaje editorial propio; no reproducir la promoción de InBody como vigente ni presentar contenido sobre GLP-1 como indicación médica.
- **Pruebas realizadas:** revisión de autoría y contenido de los seis posts; validación sintáctica; ejecución local; comprobación del DOM, enlaces, iconos y consola.
- **Resultado:** renderizan seis artículos con seis URLs correctas; no hay errores JavaScript ni advertencias de iconos.
- **Pendientes:** aprobación del texto editorial y validación visual móvil en un navegador con emulación disponible.
- **Riesgos conocidos:** enlaces sujetos a cambios de Instagram y temas clínicos que requieren contexto profesional.
- **Debe confirmar la clienta:** si estos seis posts serán la selección definitiva y si la promoción incluida en una publicación continúa vigente.

## 2026-08-23 - Visualización de publicaciones dentro de la landing

- **Objetivo:** permitir consultar cada publicación de Instagram sin abandonar la sección editorial.
- **Estado anterior:** las tarjetas mostraban resúmenes y enlaces externos, pero no el contenido original.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js`, `docs/landing/CHANGELOG.md`, `docs/integraciones/CHANGELOG.md`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** cada tarjeta incorpora “Ver aquí”, carga un embed oficial dentro de la tarjeta y permite cerrarlo para recuperar el resumen; se conserva el enlace externo alternativo.
- **Decisiones técnicas:** cargar el iframe únicamente por interacción explícita, mantener una sola responsabilidad de renderizado en `app-core.js` y centralizar las URLs de embed en `data.js`.
- **Pruebas realizadas:** validación sintáctica, carga y cierre del primer embed, comprobación de los seis endpoints, revisión visual de escritorio, accesibilidad, enlaces y consola.
- **Resultado:** reel, carruseles y publicaciones se visualizan dentro de la landing; el estado de la tarjeta se restaura correctamente y no hay errores JavaScript.
- **Pendientes:** validación visual móvil y definición de consentimiento/cookies para contenido de terceros antes de producción.
- **Riesgos conocidos:** dependencia de Instagram, carga más lenta al abrir un post y posibles cambios del endpoint externo.
- **Debe confirmar la clienta:** aprobación de la interacción y tratamiento de privacidad/cookies para contenido de Meta.

## 2026-08-23 - Posts visibles con marco editorial

- **Objetivo:** mostrar el contenido real desde el inicio de la sección y darle una presentación visual más elaborada.
- **Estado anterior:** tarjetas de resumen con botón “Ver aquí” y carga manual del embed.
- **Archivos modificados:** `src/js/app-core.js`, `src/js/helpers.js`, `docs/landing/CHANGELOG.md`, `docs/integraciones/CHANGELOG.md`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se eliminaron el resumen inicial y “Ver aquí”; cada post aparece dentro de un marco editorial con color, categoría, número, icono, título, descripción y enlace externo.
- **Decisiones técnicas:** usar `loading="lazy"`; mantener tres columnas en escritorio; evitar el re-render completo durante el desplazamiento para no reiniciar los iframes.
- **Pruebas realizadas:** sintaxis, renderizado de seis iframes, revisión visual de escritorio, navegación, persistencia de la sesión del embed, modal y consola.
- **Resultado:** las seis publicaciones aparecen integradas y la navegación ya no las recarga al cambiar de sección; no hay errores JavaScript.
- **Pendientes:** prueba visual móvil, medición de rendimiento y consentimiento/cookies antes de producción.
- **Riesgos conocidos:** mayor peso de red que la versión bajo demanda y dependencia de la interfaz de Instagram.
- **Debe confirmar la clienta:** aprobación del marco, cantidad de posts visibles y política de privacidad para Meta.

## 2026-08-23 - Ajuste responsive de la sección de Instagram

- **Objetivo:** optimizar la lectura, navegación táctil y proporción visual de los posts integrados en teléfonos.
- **Estado anterior:** el marco estaba validado en escritorio, pero no en viewport móvil; la cuadrícula cambiaba a dos y tres columnas antes de que los embeds conservaran un ancho cómodo.
- **Archivos modificados:** `src/js/app-core.js`, `src/styles/main.css`, `docs/landing/CHANGELOG.md`, `docs/integraciones/CHANGELOG.md`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** espaciado, tipografía, radios, encabezado, pie y alturas responsive más compactos; cuadrícula de una columna en móvil, dos en tableta y tres en escritorio amplio; área táctil de 44 px en el enlace externo; corrección del desplazamiento horizontal.
- **Decisiones técnicas:** mantener el flujo vertical para no competir con el gesto de los carruseles internos de Instagram; escalar únicamente el iframe oficial por debajo de 360 px debido a su ancho mínimo de 326 px.
- **Pruebas realizadas:** ejecución local en Brave a 320 × 720, 390 × 844, 820 × 900 y 1440 × 900; revisión visual de encabezado, marco, contenido, pie, menú móvil, CTA y modal; comprobación estructural de los seis iframes y enlaces.
- **Resultado:** una columna legible en teléfonos, dos columnas en tableta y tres en escritorio; no queda desplazamiento horizontal; menú y modal siguen funcionando. La sesión disponible no expuso captura de consola, aunque el módulo cargó y ejecutó sin fallo visible.
- **Pendientes:** medición de rendimiento, pruebas en dispositivos físicos y definición de consentimiento/cookies antes de producción.
- **Riesgos conocidos:** seis iframes mantienen un costo alto de red y dependen de la interfaz, disponibilidad y ancho mínimo de Instagram.
- **Debe confirmar la clienta:** aprobación visual móvil, cantidad definitiva de posts y tratamiento legal del contenido de Meta.
