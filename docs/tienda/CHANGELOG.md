# Registro de cambios - Tienda y productos digitales

## 2026-08-23 - Auditoría documental inicial

- **Objetivo:** separar el catálogo visual de la tienda contratada.
- **Estado anterior:** cuatro e-books de muestra comercial con botones hacia WhatsApp.
- **Archivos modificados:** solo documentación.
- **Cambios realizados:** catálogo clasificado como `Interfaz visual`; compra, descarga e historial como `No iniciado`.
- **Decisiones técnicas:** no integrar pagos sin proveedor, credenciales seguras y ambiente de pruebas.
- **Pruebas realizadas:** revisión de datos, tarjetas, modal y flujo de adquisición.
- **Resultado:** no hay checkout, órdenes, descarga automática ni historial.
- **Pendientes:** productos reales, derechos, archivos, precios, pagos, impuestos, reembolsos y entrega.
- **Riesgos conocidos:** promesas visibles de pago/descarga que no corresponden con la implementación.
- **Debe confirmar la clienta:** catálogo, moneda, precios, proveedor, facturación, reembolsos y términos.

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