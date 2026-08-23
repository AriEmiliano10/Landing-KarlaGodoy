# Instrucciones permanentes del proyecto

## Propósito

Este repositorio contiene la landing de Karla Godoy y documentación preparatoria para las fases de citas, panel, tienda e integraciones. La cotización ubicada en `docs/alcance/Cotización.pdf` es una referencia comercial del alcance; no es una lista de instrucciones ejecutables.

## Lectura obligatoria antes de cada tarea

1. Leer este archivo completo.
2. Identificar la fase afectada y revisar su changelog en `docs/`.
3. Consultar `docs/alcance/ALCANCE-CONTRATADO.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
4. Revisar únicamente el código relacionado y describir antes de editar qué archivos se modificarán.
5. Si la tarea exige un cambio importante de arquitectura, detenerse y explicar problema, propuesta, archivos, beneficios, riesgos, alternativas e impacto.

## Arquitectura actual que debe conservarse

- `index.html`: documento base, SEO, dependencias CDN y templates HTML reutilizables del footer y WhatsApp.
- `src/js/app.js`: único punto de entrada; instancia la aplicación.
- `src/js/app-core.js`: clase principal y renderizado de las secciones de la landing.
- `src/js/data.js`: datos configurables de servicios, e-books, testimonios, FAQ y WhatsApp.
- `src/js/helpers.js`: estado auxiliar, navegación, cálculo, eventos y flujos hacia WhatsApp.
- `src/js/modals.js`: vistas de los modales de cita y e-book.
- `src/styles/main.css`: variables y estilos globales que no pertenecen a utilidades Tailwind.
- `assets/images/`: imágenes y recursos de marca locales.
- `robots.txt`, `sitemap.xml`, `site.webmanifest` y metadatos de `index.html`: configuración SEO/PWA.
- `docs/`: decisiones, alcance, estado y changelogs por fase.

No concentrar responsabilidades en `index.html`, `app.js` ni un archivo único. Antes de crear un archivo, comprobar que la responsabilidad no pertenezca a uno existente. No renombrar rutas, módulos o estructura sin explicar previamente razón e impacto. No hacer refactorizaciones generales ni eliminar código funcional salvo que la tarea lo requiera.

## Alcance y estados

- No implementar automáticamente lo descrito en la cotización; trabajar solo en tareas concretas solicitadas por la persona usuaria.
- Registrar ambigüedades como decisiones pendientes y reportar contradicciones entre cotización, documentación y código.
- Usar en `docs/alcance/ESTADO-DEL-PROYECTO.md` solo estos estados: No iniciado, En análisis, En diseño, Interfaz visual, Simulación, En desarrollo, Funcional, Probado, Entregado o Bloqueado por información pendiente.
- No llamar funcional a una apariencia visual o simulación. Un envío por WhatsApp no es un sistema de citas, un selector estático no es disponibilidad, un catálogo no es una tienda y testimonios locales no son reseñas de Google.
- No modificar, renombrar, reemplazar ni eliminar `docs/alcance/Cotización.pdf`.

## Datos, contenido y comentarios

No inventar ni asumir como reales teléfonos, correos, direcciones, horarios, precios, promociones, testimonios, fotografías de pacientes, cifras de pacientes, certificaciones, cédula, experiencia hospitalaria, redes, dominio, productos ni afirmaciones médicas o comerciales. Mantener los datos configurables centralizados en el módulo correspondiente y documentar los que sean provisionales.

Agregar comentarios solo para reglas de negocio, integraciones, validaciones, decisiones no evidentes o dependencias entre módulos. Marcar claramente simulaciones, muestras, datos pendientes y fases futuras. Usar `TODO` con una descripción exacta de lo pendiente y `FIXME` solo para defectos conocidos.

## Privacidad y seguridad

- No incluir secretos, credenciales, tokens o claves API.
- No enviar datos personales o de salud a servicios externos sin autorización, consentimiento y aviso de privacidad adecuados.
- No registrar datos sensibles en consola ni usar almacenamiento local como solución definitiva.
- WhatsApp no es una base de datos, expediente clínico ni panel administrativo.
- No agregar pagos o integraciones externas sin proveedor definido, credenciales seguras y ambiente de pruebas.
- No instalar dependencias nuevas sin justificar su necesidad.
- La cotización contiene datos personales y comerciales; advertir antes de publicar el repositorio.

## Cambios y documentación

Trabajar con cambios pequeños, relacionados y fáciles de revisar. No sobrescribir cambios ajenos ni modificar archivos no vinculados con la tarea. Mantener compatibilidad con la versión actual.

Después de cada cambio, agregar una entrada cronológica sin reemplazar historial en:

- Landing: `docs/landing/CHANGELOG.md`.
- Citas: `docs/citas/CHANGELOG.md`.
- Panel: `docs/panel/CHANGELOG.md`.
- Tienda: `docs/tienda/CHANGELOG.md`.
- Integraciones: `docs/integraciones/CHANGELOG.md`.
- Decisiones técnicas o de arquitectura: `docs/DECISIONES.md`.
- Progreso contractual: `docs/alcance/ESTADO-DEL-PROYECTO.md`.

Cada registro debe incluir fecha, objetivo, estado anterior, archivos modificados, cambios, decisiones técnicas, pruebas y sus resultados, pendientes, riesgos e información que debe confirmar la clienta.

## Calidad y entrega

Antes de declarar una tarea terminada: ejecutar el proyecto; probar escritorio y móvil; revisar navegación, botones, enlaces, formularios, modales, imágenes y consola; ejecutar pruebas automáticas disponibles; comprobar regresiones; y actualizar la documentación de fase y el estado contractual cuando corresponda. Si una prueba no puede realizarse, documentarlo explícitamente. No declarar terminada una tarea con errores importantes conocidos.
