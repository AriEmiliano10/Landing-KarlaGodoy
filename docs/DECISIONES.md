# Decisiones del proyecto

## 2026-08-23 - Preparación documental inicial

- **Objetivo:** preparar el repositorio para continuar su desarrollo sin alterar la landing.
- **Estado anterior:** no existía `AGENTS.md` ni documentación separada por fases; solo existían el changelog raíz y la cotización.
- **Archivos modificados:** `AGENTS.md` y documentos Markdown dentro de `docs/`.
- **Cambios realizados:** se documentaron arquitectura, reglas de trabajo, alcance contratado, estado comprobable y registros de fase.
- **Decisiones técnicas:** conservar la separación actual entre entrada, renderizado, datos, helpers, modales, estilos y recursos. No introducir dependencias ni arquitectura de backend durante la auditoría.
- **Pruebas realizadas:** inventario completo, revisión del código, comprobación estática de destinos internos, presencia de recursos y carga sintáctica de módulos.
- **Resultado:** la estructura actual queda documentada; no se cambió código de producción.
- **Pendientes:** definir arquitectura de backend, persistencia, autenticación, proveedor de pagos, hosting y entornos cuando se solicite cada fase.
- **Riesgos conocidos:** la landing depende de CDN externos y contiene datos/afirmaciones no confirmados.
- **Debe confirmar la clienta:** datos públicos, contenido comercial y clínico, alcance prioritario y proveedores externos.

## 2026-08-23 - Curaduría manual de Instagram antes de automatizar

- **Objetivo:** incorporar la identidad editorial del perfil oficial sin introducir contenido personal o dependencias externas.
- **Estado anterior:** no existía representación de Instagram en la landing.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js` y documentación de landing, integraciones y alcance.
- **Cambios realizados:** se creó una sección visual propia basada en cuatro categorías profesionales y enlazada a las publicaciones originales.
- **Decisiones técnicas:** usar curaduría manual y componentes nativos de la landing. No copiar imágenes, estadísticas dinámicas ni afirmaciones médicas específicas; no tratar esta solución como “Instagram automático”.
- **Pruebas realizadas:** ejecución local, revisión estructural, enlaces externos, sintaxis y consola.
- **Resultado:** la landing obtiene continuidad de marca y acceso al perfil sin API, credenciales o contenido personal embebido.
- **Pendientes:** aprobación editorial, derechos de imágenes y definición del alcance automático contratado.
- **Riesgos conocidos:** mantenimiento manual y enlaces dependientes de una plataforma externa.
- **Debe confirmar la clienta:** temas definitivos, permiso de reutilización visual y frecuencia de actualización.

## 2026-08-23 - Tratamiento editorial de los seis posts de prueba

- **Objetivo:** adaptar las publicaciones proporcionadas sin convertir su texto original en afirmaciones propias de la landing.
- **Estado anterior:** selección preliminar de cuatro temas generales.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js` y documentación relacionada.
- **Cambios realizados:** seis resúmenes editoriales y una cuadrícula equilibrada de 3 × 2.
- **Decisiones técnicas:** añadir contexto profesional al tema GLP-1, omitir la promoción de InBody del resumen y usar textos prudentes para síntomas, tratamientos y salud mental.
- **Pruebas realizadas:** contraste con las publicaciones originales, renderizado local, sintaxis, enlaces e iconos.
- **Resultado:** la landing referencia el contenido sin replicar instrucciones médicas o comerciales potencialmente temporales.
- **Pendientes:** confirmar vigencia comercial y aprobación de copy.
- **Riesgos conocidos:** una publicación enlazada puede conservar afirmaciones o promociones que la landing no controla.
- **Debe confirmar la clienta:** vigencia del InBody gratuito y aprobación final de los seis enfoques.

## 2026-08-23 - Carga de Instagram bajo demanda

- **Objetivo:** equilibrar visualización directa, rendimiento y privacidad.
- **Estado anterior:** seis tarjetas editoriales sin contenido incrustado.
- **Archivos modificados:** `src/js/data.js`, `src/js/app-core.js` y documentación relacionada.
- **Cambios realizados:** carga y cierre inline de un iframe oficial por publicación.
- **Decisiones técnicas:** no cargar automáticamente seis iframes; el visitante inicia la conexión con Meta mediante “Ver aquí”. Mantener “Abrir en Instagram” como fallback.
- **Pruebas realizadas:** endpoint oficial, DOM, interacción, reproducción, restauración, sintaxis y consola.
- **Resultado:** el contenido real puede consultarse dentro de la cuadrícula sin una dependencia JavaScript nueva.
- **Pendientes:** aviso de privacidad/cookies y fallback visual ante bloqueo de terceros.
- **Riesgos conocidos:** seguimiento o cookies de Meta después de la interacción y dependencia de red.
- **Debe confirmar la clienta:** aceptación del modelo bajo demanda y textos legales correspondientes.

## 2026-08-23 - Sustituir carga bajo demanda por posts visibles

- **Objetivo:** priorizar impacto visual y visualización inmediata solicitada para la sección.
- **Estado anterior:** cada publicación requería pulsar “Ver aquí”.
- **Archivos modificados:** `src/js/app-core.js`, `src/js/helpers.js` y documentación de landing, integraciones y alcance.
- **Cambios realizados:** embeds visibles con marco de marca y actualización del menú sin re-render completo.
- **Decisiones técnicas:** mantener `loading="lazy"` como mitigación; no introducir SDK o dependencia; evitar que el scroll reconstruya los iframes.
- **Pruebas realizadas:** revisión visual, seis iframes, permanencia del identificador de sesión al navegar, sintaxis y consola.
- **Resultado:** presentación más rica y estable durante el desplazamiento.
- **Pendientes:** privacidad/cookies, rendimiento y prueba móvil.
- **Riesgos conocidos:** Meta puede recibir información técnica del visitante al aproximarse a la sección, sin clic explícito.
- **Debe confirmar la clienta:** aprobación final y tratamiento legal de contenido de terceros.

## 2026-08-23 - Flujo vertical y ancho mínimo para Instagram en móvil

- **Objetivo:** adaptar los posts visibles a teléfonos sin perder el marco editorial ni interferir con los gestos del contenido incrustado.
- **Estado anterior:** cuadrícula de una, dos y tres columnas con cortes demasiado tempranos y sin tratamiento para el ancho mínimo de Instagram.
- **Archivos modificados:** `src/js/app-core.js`, `src/styles/main.css` y documentación relacionada.
- **Cambios realizados:** una columna hasta tableta, dos hasta escritorio amplio y tres a partir de `xl`; marco y tipografía compactos; escalado específico por debajo de 360 px.
- **Decisiones técnicas:** descartar un carrusel horizontal de tarjetas porque competiría con el deslizamiento de los carruseles internos; no modificar ni intentar controlar el documento cross-origin de Meta.
- **Pruebas realizadas:** revisión visual en 320, 390, 820 y 1440 px, apertura del menú móvil y del modal de cita, y comprobación de la jerarquía accesible.
- **Resultado:** composición estable y legible, sin desplazamiento horizontal, con el contenido oficial dentro de su marco.
- **Pendientes:** validar en dispositivos físicos y revisar rendimiento y consentimiento.
- **Riesgos conocidos:** cambios futuros en el tamaño mínimo o interfaz del embed pueden requerir recalibrar la regla para teléfonos angostos.
- **Debe confirmar la clienta:** si aprueba una columna móvil y la cantidad de seis posts visibles.

## 2026-08-23 - Exclusión de la cotización del repositorio público

- **Objetivo:** conectar el proyecto con GitHub sin publicar información personal o comercial contenida en la cotización.
- **Estado anterior:** la carpeta no tenía metadatos Git ni remoto configurado; la visibilidad del repositorio no estaba documentada.
- **Archivos modificados:** `.gitignore`, `docs/alcance/ALCANCE-CONTRATADO.md`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se vinculó la carpeta con `AriEmiliano10/Landing-KarlaGodoy`, se confirmó que es público y se excluyeron los PDF de `docs/alcance/` del versionado.
- **Decisiones técnicas:** conservar intacta la cotización local; publicar únicamente los resúmenes Markdown; mantener el historial remoto y evitar cualquier `force push`.
- **Pruebas realizadas:** consulta de visibilidad mediante la API pública de GitHub, lectura de la rama `main` remota y comprobación de su árbol de archivos.
- **Resultado:** el remoto tiene historial previo y no contiene la cotización; la regla de exclusión previene su incorporación al nuevo commit.
- **Pendientes:** revisar periódicamente que no se agreguen otros documentos sensibles y confirmar permisos antes de publicar futuros archivos comerciales.
- **Riesgos conocidos:** un archivo sensible agregado con otro nombre o fuera de `docs/alcance/` no quedaría cubierto por esta regla específica.
- **Debe confirmar la clienta:** cualquier autorización futura para publicar documentos contractuales o datos personales.

## 2026-08-28 - Reubicación local y exclusión de la cotización

- **Objetivo:** corregir la ubicación del documento comercial para mantenerlo fuera del repositorio público.
- **Estado anterior:** `docs/Cotización.pdf` estaba fuera de la ruta cubierta por `.gitignore`.
- **Archivos modificados:** `docs/Cotización.pdf` → `docs/alcance/Cotización.pdf`, `docs/DECISIONES.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se reubicó el PDF local sin alterar su contenido; la ruta resultante coincide con la documentación y con la exclusión `docs/alcance/*.pdf`.
- **Decisiones técnicas:** conservar el documento únicamente en local y no ampliar las reglas de exclusión a otros documentos sin una revisión específica.
- **Pruebas realizadas:** verificación de que el destino no existía antes del movimiento y confirmación posterior de ruta, nombre y tamaño del archivo.
- **Resultado:** la cotización queda bajo la carpeta y regla de privacidad previstas.
- **Pendientes:** confirmar la información comercial que se usará para decisiones contractuales; el PDF no se publicará sin autorización expresa.
- **Riesgos conocidos:** el repositorio no está disponible localmente para comprobar el estado de Git en este entorno.
- **Debe confirmar la clienta:** cualquier autorización futura para publicar la cotización o sus datos.

## Decisiones pendientes

1. Confirmar si el total contractual es $39,800 MXN o $49,800 MXN; la suma por fases y el total impreso difieren por $10,000 MXN.
2. Confirmar si `karlagodoynutricion.com` es el dominio definitivo y está bajo control de la clienta.
3. Confirmar teléfono, correo, dirección, horarios, cédula, certificaciones, experiencia, cifra de pacientes y testimonios.
4. Definir consentimiento y aviso de privacidad antes de recopilar o enviar información de salud.
5. Definir backend, base de datos, roles, autenticación y política de retención para citas y panel.
6. Definir proveedor de pagos, moneda, impuestos, reembolsos y entrega segura de productos digitales.
7. Definir cuentas, permisos y alcance de Instagram, Google Maps y reseñas.
8. Confirmar si el repositorio será público; la cotización contiene datos personales y comerciales.
