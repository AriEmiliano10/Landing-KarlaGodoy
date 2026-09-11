# Registro de cambios - Landing

El historial anterior de la landing permanece en `../../CHANGELOG.md`. No se copia ni reemplaza para evitar bifurcar el registro histórico.

## 2026-08-31 - Revisión responsive para teléfonos

- **Objetivo:** evitar desbordamientos de los elementos flotantes y asegurar una separación cómoda en pantallas de teléfono.
- **Estado anterior:** la landing era adaptable, pero el widget de WhatsApp conservaba márgenes y un ancho fijo pensados para pantallas más amplias.
- **Archivos modificados:** `src/styles/main.css`, `src/js/modals.js`, `docs/landing/CHANGELOG.md`, `docs/panel/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** el panel informativo de WhatsApp se limita al ancho útil en móvil; el selector de modalidad del modal de cita usa una separación válida entre sus dos opciones.
- **Decisiones técnicas:** se mantuvo la composición y el contenido; los ajustes se hacen con clases responsive y no añaden dependencias ni comportamiento nuevo.
- **Pruebas realizadas:** validación estática de las clases, estructura de modales y anchos para 320, 360, 390 y 414 px.
- **Resultado:** los elementos flotantes y el selector de modalidad conservan márgenes y proporciones en teléfonos estrechos.
- **Pendientes:** revisión visual manual en navegador/dispositivo físico antes de declararlo probado.
- **Riesgos conocidos:** no fue posible ejecutar una inspección gráfica automatizada porque no hay navegador ni emulador disponible en el equipo.
- **Debe confirmar la clienta:** aprobación visual en los dispositivos objetivo.

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