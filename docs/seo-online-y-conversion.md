# Atención online y primera entrevista — 14 de octubre de 2026

La agenda solicita preferencias; no muestra ni reserva disponibilidad real. Los honorarios se muestran para Argentina y exterior sin inferir el país por IP. No hay promesas de respuesta inmediata ni cupos ficticios.

La página online conserva su URL y recibe un formulario exclusivamente online. Olivos mantiene su página principal; el alias psicoanalista-olivos redirige a psicologo-olivos. Las URLs canónicas y el sitemap usan rutas sin barra final.

## Publicación

Ejecutar `npm run build` y subir el contenido de dist al hosting. Apache requiere AllowOverride con FileInfo para las reglas de public/.htaccess. Si el servidor usa Nginx, integrar deploy/nginx-canonical-routes.conf en el bloque del dominio; .htaccess no tiene efecto en Nginx. Validar en producción que las URLs con barra y el alias local responden 301, conservan parámetros y terminan sin bucles en 200. No se cambió la configuración de un servidor remoto.

## Medición

El evento GA4 `wa_click` registra página, ubicación del enlace y modalidad elegida (online/presencial/unspecified). No envía motivo, mensaje, nombre, ciudad ni franja horaria. Se aplica a los enlaces de WhatsApp del sitio, incluyendo el formulario. Un clic no representa una consulta recibida ni una primera sesión confirmada; se dejó de emitir Lead de Meta por este clic.

En GA4, registrar location y modality como dimensiones personalizadas de evento si se necesitan en informes. Verificar recepción en Realtime/DebugView después de publicar. Registrar consultas recibidas y primeras sesiones confirmadas por separado en un registro privado, sin enviar información clínica a Analytics. No existe integración CRM que pueda confirmar esos resultados automáticamente.

Comparar periodos equivalentes de 28 días en Search Console, separando consultas de marca, Olivos y online. Revisar clics, impresiones, CTR y posición por consulta/página. Priorizar consultas de intención de atención y evitar sumar impresiones por página como si fueran impresiones únicas de la propiedad. La exportación inicial de 92 días tuvo 21 clics y 688 impresiones; su tabla de consultas es parcial.
