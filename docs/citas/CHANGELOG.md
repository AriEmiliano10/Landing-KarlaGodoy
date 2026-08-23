# Registro de cambios - Sistema de citas

## 2026-08-23 - Auditoría documental inicial

- **Objetivo:** distinguir la interfaz actual de un sistema real de citas.
- **Estado anterior:** modal con fecha/horarios estáticos y envío por WhatsApp.
- **Archivos modificados:** solo documentación.
- **Cambios realizados:** el flujo quedó clasificado como `Simulación`.
- **Decisiones técnicas:** WhatsApp no se considera agenda, base de datos ni registro automático de pacientes.
- **Pruebas realizadas:** revisión de `src/js/helpers.js` y `src/js/modals.js`.
- **Resultado:** no existe disponibilidad, prevención de duplicados, persistencia ni administración.
- **Pendientes:** reglas de agenda, backend, base de datos, consentimiento y zona horaria.
- **Riesgos conocidos:** exposición de datos personales y de salud a un servicio externo.
- **Debe confirmar la clienta:** horarios, excepciones, datos mínimos, política de cancelación y canal autorizado.
