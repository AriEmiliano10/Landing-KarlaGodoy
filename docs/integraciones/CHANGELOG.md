# Registro de cambios - Integraciones

## 2026-08-23 - Auditoría documental inicial

- **Objetivo:** verificar integraciones y SEO incluidos en la cotización.
- **Estado anterior:** WhatsApp por enlaces; metadatos SEO básicos; sin Instagram, Maps o reseñas.
- **Archivos modificados:** solo documentación.
- **Cambios realizados:** WhatsApp y SEO clasificados `En desarrollo`; Instagram, Maps y reputación como `No iniciado`.
- **Decisiones técnicas:** no añadir servicios, claves o dependencias sin proveedor y permisos definidos.
- **Pruebas realizadas:** revisión de URLs, metadatos, JSON-LD, robots, sitemap, manifest y código.
- **Resultado:** configuración estática presente; funcionamiento externo y publicación no verificables.
- **Pendientes:** cuentas, permisos, dominio, datos reales, pruebas de red, rendimiento e indexación.
- **Riesgos conocidos:** datos estructurados provisionales, dependencias CDN y exposición del PDF si el repositorio se publica.
- **Debe confirmar la clienta:** dominio, ficha de negocio, ubicación, número de WhatsApp y cuentas autorizadas.

## 2026-08-23 - Vinculación editorial con Instagram

- **Objetivo:** conectar la landing con el perfil oficial sin mezclar publicaciones personales ni depender de una integración automática.
- **Estado anterior:** Instagram estaba clasificado como `No iniciado` y no existían enlaces al perfil o publicaciones.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js`, `docs/integraciones/CHANGELOG.md`, `docs/landing/CHANGELOG.md`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se registró el perfil oficial y una selección manual de cuatro publicaciones profesionales enlazadas desde una sección editorial propia.
- **Decisiones técnicas:** la selección manual no se considera feed ni integración automática; no se usan API, credenciales, embeds, imágenes descargadas o dependencias nuevas.
- **Pruebas realizadas:** apertura del perfil en pestaña nueva, comprobación de atributos `target` y `rel`, revisión de URLs, consola y renderizado local.
- **Resultado:** el perfil y los cuatro destinos quedan disponibles mediante enlaces externos seguros; la integración automática permanece pendiente.
- **Pendientes:** definir si se contratará una API/widget, permisos, frecuencia, moderación y comportamiento ante fallos.
- **Riesgos conocidos:** cambios en URLs o disponibilidad de Instagram; incorporación accidental de publicaciones personales si la curaduría no se mantiene.
- **Debe confirmar la clienta:** selección editorial, autorización de imágenes y si realmente desea automatización en una fase futura.

## 2026-08-23 - Actualización de la selección manual de Instagram

- **Objetivo:** utilizar los seis enlaces de prueba proporcionados como fuente editorial de la landing.
- **Estado anterior:** cuatro publicaciones enlazadas manualmente.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js` y documentación de landing, integraciones, decisiones y alcance.
- **Cambios realizados:** se verificó la autoría del perfil y se reemplazaron los cuatro destinos por seis publicaciones concretas.
- **Decisiones técnicas:** conservar enlaces externos seguros y curaduría manual; no descargar imágenes, usar embeds ni incorporar estadísticas dinámicas.
- **Pruebas realizadas:** apertura y lectura de los seis posts en la sesión autenticada de Instagram; revisión de URLs y consola local.
- **Resultado:** seis enlaces válidos y pertenecientes a `karlagagodoy1`; la solución continúa sin credenciales ni dependencias.
- **Pendientes:** automatización, permisos de reutilización visual y política de actualización.
- **Riesgos conocidos:** contenido clínico descontextualizado, promociones caducables y disponibilidad de la plataforma externa.
- **Debe confirmar la clienta:** vigencia de promociones, autorización de uso visual y periodicidad de la selección.

## 2026-08-23 - Embeds interactivos de Instagram

- **Objetivo:** mostrar publicaciones públicas dentro de la landing mediante la vista oficial de Instagram.
- **Estado anterior:** integración editorial basada únicamente en enlaces externos.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js` y documentación de landing, integraciones, decisiones y alcance.
- **Cambios realizados:** se añadieron seis URLs de embed y carga bajo demanda dentro de cada tarjeta.
- **Decisiones técnicas:** no usar scraping, token, API privada o SDK adicional; el contenido externo solo se solicita después de pulsar “Ver aquí”.
- **Pruebas realizadas:** apertura de los seis endpoints oficiales, reproducción visible del reel de prueba, cierre del embed, revisión de fallback y consola.
- **Resultado:** los seis endpoints responden con contenido del perfil oficial y el primer embed se verificó completamente dentro de la landing.
- **Pendientes:** consentimiento de terceros, política de cookies, pruebas móviles y manejo visual de indisponibilidad de Instagram.
- **Riesgos conocidos:** Meta recibe la solicitud al cargar el iframe; el proveedor puede modificar disponibilidad, interfaz o políticas.
- **Debe confirmar la clienta:** autorización de esta integración y requisitos legales/cookies del sitio publicado.

## 2026-08-23 - Carga diferida automática de embeds

- **Objetivo:** presentar los posts directamente en la cuadrícula sin interacción previa.
- **Estado anterior:** los embeds se solicitaban únicamente después de pulsar “Ver aquí”.
- **Archivos modificados:** `src/js/app-core.js`, `src/js/helpers.js` y documentación relacionada.
- **Cambios realizados:** seis iframes oficiales con carga diferida y marco editorial; actualización del menú sin reconstruir el documento.
- **Decisiones técnicas:** aceptar la conexión automática con Meta al aproximarse a la sección por solicitud de diseño; conservar carga diferida y enlaces fallback.
- **Pruebas realizadas:** contenido visible de los seis posts, navegación sin reinicio del iframe, consola, modal y sintaxis.
- **Resultado:** los embeds permanecen montados mientras se navega por la landing y se cargan progresivamente según proximidad.
- **Pendientes:** banner/gestor de consentimiento, aviso de privacidad, métricas de rendimiento y manejo de fallos del proveedor.
- **Riesgos conocidos:** solicitudes y posibles cookies de Meta sin clic previo, consumo de red y cambios externos.
- **Debe confirmar la clienta:** base legal/consentimiento, textos de privacidad y aceptación del impacto de rendimiento.

## 2026-08-23 - Adaptación móvil de los embeds oficiales

- **Objetivo:** conservar la visualización directa de Instagram sin desbordamiento ni tarjetas demasiado angostas en teléfonos y tabletas.
- **Estado anterior:** embeds funcionales con carga diferida y diseño comprobado únicamente en escritorio.
- **Archivos modificados:** `src/js/app-core.js`, `src/styles/main.css` y documentación de landing, integraciones, decisiones y alcance.
- **Cambios realizados:** alturas y contenedores responsive, escalado controlado para pantallas menores a 360 px y breakpoints que reservan tres columnas para escritorio amplio.
- **Decisiones técnicas:** no cambiar proveedor, URLs, carga diferida ni permisos del iframe; la corrección es exclusivamente de presentación y mantiene el enlace externo como fallback.
- **Pruebas realizadas:** carga real de los posts a 320, 390, 820 y 1440 px; revisión visual y estructural de los seis iframes, perfil, enlaces y controles móviles relacionados.
- **Resultado:** los embeds permanecen visibles y utilizables en los cuatro anchos; se eliminó el desplazamiento horizontal de la landing. La sesión disponible no expuso captura de consola, aunque los seis iframes cargaron sin fallo visible.
- **Pendientes:** pruebas de rendimiento, bloqueo de terceros, dispositivos físicos y consentimiento antes de publicación.
- **Riesgos conocidos:** el escalado bajo 360 px depende de que Instagram conserve su ancho mínimo actual; Meta continúa recibiendo solicitudes automáticas al cargar.
- **Debe confirmar la clienta:** política de privacidad/cookies, aprobación móvil y aceptación del impacto de carga.
