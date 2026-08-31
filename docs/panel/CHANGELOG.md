# Registro de cambios - Panel administrativo

## 2026-08-31 - Configurador visual de horarios semanales

- **Objetivo:** mostrar cómo la administración podría definir días y bloques de atención antes de conectar el sistema de citas.
- **Estado anterior:** disponibilidad representada por un único interruptor y un horario fijo por día hábil.
- **Archivos modificados:** `src/panel/app.js`, `src/panel/dashboard.js`, `src/styles/panel.css`, `docs/panel/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se incorporaron los siete días, activación individual, bloques de inicio/fin editables, alta y eliminación de bloques y la opción visual de aplicar el horario del lunes a los días hábiles.
- **Decisiones técnicas:** los horarios se conservan únicamente en memoria para la demostración y se reinician al recargar; no alimentan el formulario público ni permiten reservas reales.
- **Pruebas realizadas:** validación estática de módulos, renderizado de los siete días y verificación de identificadores de controles.
- **Resultado:** es posible ejemplificar un domingo programable o un día con horarios divididos para acordar el flujo con la clienta.
- **Pendientes:** zona horaria, duración de citas, descansos, anticipación, excepciones, concurrencia, persistencia y publicación segura de disponibilidad.
- **Riesgos conocidos:** interpretar este configurador como agenda real o asumir que bloquea citas.
- **Debe confirmar la clienta:** días de atención, bloques horarios, duración de consulta, pausas y política de cambios/cancelaciones.

## 2026-08-31 - Ampliación interactiva de la propuesta visual

- **Objetivo:** presentar un panel de control más completo para facilitar la definición de requerimientos con la clienta.
- **Estado anterior:** propuesta con navegación básica y vistas estáticas.
- **Archivos modificados:** `src/panel/app.js`, `src/panel/dashboard.js`, `src/styles/panel.css`, `docs/panel/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se añadieron filtros de agenda, navegación semanal local, búsqueda sobre datos anonimizados, interruptores de disponibilidad y preferencias, notificaciones, checklist, acciones de contenido y mensajes de confirmación de muestra.
- **Decisiones técnicas:** todo el estado existe solo en memoria del navegador y se reinicia al recargar; ninguna acción guarda, envía, publica ni procesa datos reales.
- **Pruebas realizadas:** validación estática de sintaxis, rutas de módulos e identificadores de controles.
- **Resultado:** el prototipo permite explorar flujos de control sin representar funcionalidades de producción.
- **Pendientes:** validar los controles que deben conservarse, roles, permisos, datos requeridos, reglas de agenda y backend.
- **Riesgos conocidos:** confundir interacciones locales con persistencia, seguridad o automatización reales.
- **Debe confirmar la clienta:** métricas, filtros, alertas, acciones y configuración que necesita en el panel final.

## 2026-08-31 - Entrada de demostración desde la landing

- **Objetivo:** facilitar la revisión del panel visual desde el sitio publicado.
- **Estado anterior:** la propuesta visual requería abrir directamente `panel/index.html`.
- **Archivos modificados:** `src/js/app-core.js`, `src/js/helpers.js`, `src/js/modals.js`, `docs/landing/CHANGELOG.md`, `docs/panel/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se añadió un acceso visual de muestra desde la landing que navega a `./panel/`.
- **Decisiones técnicas:** no se implementaron usuarios, contraseñas, sesiones ni almacenamiento; los campos del modal son deliberadamente no interactivos.
- **Pruebas realizadas:** validación estática de módulos, identificadores y ruta relativa.
- **Resultado:** el panel puede revisarse desde una ruta pública de GitHub Pages como propuesta de diseño.
- **Pendientes:** aprobación de la clienta y definición de seguridad antes de habilitar un acceso real.
- **Riesgos conocidos:** la ruta pública no protege información y no debe contener datos reales.
- **Debe confirmar la clienta:** si el acceso de demostración debe permanecer visible en la landing final.

## 2026-08-28 - Propuesta visual inicial del panel

- **Objetivo:** crear una referencia visual navegable para validar con la clienta el alcance del futuro panel.
- **Estado anterior:** no existía implementación de panel.
- **Archivos modificados:** `panel/index.html`, `src/panel/app.js`, `src/panel/dashboard.js`, `src/styles/panel.css`, `docs/panel/CHANGELOG.md` y `docs/alcance/ESTADO-DEL-PROYECTO.md`.
- **Cambios realizados:** se incorporó una propuesta separada de la landing con Inicio, Agenda, Pacientes, Disponibilidad y Contenido; las vistas usan únicamente datos anonimizados de demostración.
- **Decisiones técnicas:** mantener el diseño aislado en módulos propios y usar navegación local sin autenticación, persistencia, APIs, formularios operativos ni datos personales reales.
- **Pruebas realizadas:** validación de sintaxis con `node --check`, revisión estática de rutas, módulos, vistas, marcadores de datos de muestra y desplazamiento horizontal previsto para tablas móviles.
- **Resultado:** existe una interfaz visual navegable para discusión; no constituye un panel privado ni sistema de citas funcional. No fue posible hacer una revisión visual en navegador porque no hay uno disponible en este entorno.
- **Pendientes:** validación de secciones, flujos, roles, campos, métricas, reglas de agenda, privacidad y backend.
- **Riesgos conocidos:** interpretar los estados, horarios o acciones visuales como funciones reales.
- **Debe confirmar la clienta:** estructura de navegación, indicadores, información visible por vista y acciones necesarias.

## 2026-08-23 - Auditoría documental inicial

- **Objetivo:** comprobar la existencia del panel contratado.
- **Estado anterior:** no existe implementación de panel.
- **Archivos modificados:** solo documentación.
- **Cambios realizados:** entregables de panel registrados como `No iniciado`.
- **Decisiones técnicas:** no proponer autenticación o backend sin requerimientos confirmados.
- **Pruebas realizadas:** inventario completo y búsqueda de vistas, rutas, APIs, persistencia y configuración.
- **Resultado:** sin evidencia de panel, cuentas, roles, estadísticas o gestión.
- **Pendientes:** requerimientos, diseño, roles, seguridad, backend y modelo de datos.
- **Riesgos conocidos:** acceso indebido a datos personales/de salud si se diseña sin autorización y controles.
- **Debe confirmar la clienta:** usuarios, roles, permisos, información gestionada y métricas.
