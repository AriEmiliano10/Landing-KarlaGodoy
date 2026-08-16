# Registro de cambios

## 2026-08-15 - Ajuste de mensaje, orden y paquetes de la landing

Motivo: aplicar las observaciones contenidas en `LANDING.pdf` y el orden de conversión aprobado.

### Cambios realizados

- `src/js/app-core.js`
  - Se reescribió el hero para enfocar el mensaje en transformación y nutrición clínica de precisión, sin referencias a genética.
  - Se agregó el bloque visual “¿Qué puedes lograr conmigo?” después del hero.
  - Se agregó la sección que explica que la consulta incluye una estrategia integral personalizada y sus siete componentes.
  - Se reorganizó la landing: hero, resultados, propuesta de consulta, paquetes, proceso, sección sobre Karla, e-books, testimonios, preguntas frecuentes y CTA final.
  - Se eliminó la referencia a nutrigenómica y nutrigenética en la sección profesional.
  - Los precios pendientes se mantienen visualmente en blanco.

- `src/js/data.js`
  - Se sustituyeron los paquetes anteriores por Consulta Wellness Integral, Programa Transformación 90 Días y Consulta Wellness Integral Online Premium.
  - Se estableció el precio de $3,200 MXN y ahorro de $400 MXN para el Programa Transformación 90 Días.
  - Se dejaron sin precio los dos servicios cuyos importes aún no se han confirmado.
  - Se agregó la indicación “Pagos mensuales” a la Consulta Wellness Integral.
  - Se eliminó la guía de lectura de etiquetas y las referencias a genética en planes y e-books.

- `src/js/helpers.js`
  - Se conectó el botón de agenda de la nueva sección de propuesta de consulta.

- `src/js/modals.js`
  - El selector de servicio ya no muestra un precio cuando éste está pendiente de confirmar.

### Pendientes de Karla

- Confirmar el precio de Consulta Wellness Integral.
- Confirmar el precio de Consulta Wellness Integral Online Premium.
