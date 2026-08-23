# Registro de cambios - Landing

El historial anterior de la landing permanece en `../../CHANGELOG.md`. No se copia ni reemplaza para evitar bifurcar el registro histórico.

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
