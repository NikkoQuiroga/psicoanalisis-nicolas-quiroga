# Optimización de consultas — 20 de noviembre de 2026

## Implementación

Portada reducida a presentación, motivos de consulta, primera entrevista, modalidades, formación breve y contacto. Las historias personales, meditaciones y textos conservan sus páginas y enlaces desde Sobre mí y el pie. Se conservaron honorarios y credenciales existentes.

El contacto directo por WhatsApp está disponible antes del selector opcional. Los botones de Olivos y online abren una consulta de su modalidad sin pasar por otra página. El botón flotante se oculta cuando hay un contacto etiquetado completamente visible, además de ocultarse cerca de la agenda. Navegación principal reducida a Inicio, Olivos, Online, Sobre mí y Contacto.

Se añadió una cola gtag antes de Tag Manager: los eventos no dependen de que la librería termine de cargar antes del clic. Se mantiene el evento wa_click y sus parámetros location, modality y page_path, sin enviar mensajes ni información clínica. Se etiquetaron los botones principales para distinguirlos. La recepción en GA4 depende de la configuración del contenedor existente; no fue posible verificar ni editar esa cuenta desde el proyecto.

Se actualizaron título, descripción y fechas del sitemap de las páginas modificadas. Portada, Olivos y contacto ahora incluyen contenido HTML legible sin JavaScript. Se conservan las 24 URLs canónicas del sitemap y las reglas de consolidación existentes. Se corrigieron fuentes con rutas que no se resolvían al compilar: Vite ahora incluye los cinco archivos WOFF2 utilizados.

## Línea de base

Fuente: exportaciones Search Console Performance-on-Search y Coverage del 20/11/2026 suministradas por el usuario.

Rendimiento del 19/08 al 18/11: 27 clics, 927 impresiones, CTR 2,91%. Del 24/09 al 21/10: 11 clics y 294 impresiones. Del 22/10 al 18/11: 8 clics y 358 impresiones. Son periodos de 28 días comparables. Los clics no equivalen a visitantes únicos ni pacientes.

El informe de cobertura termina el 15/11: 24 URLs indexadas y 47 sin indexar. Motivos: 39 redirecciones, 3 alternativas con canónica, 1 noindex, 1 duplicada sin canónica y 3 rastreadas sin indexar. No incluye las URLs individuales: no se puede afirmar que esos casos particulares estén corregidos. No se eliminaron redirecciones que consolidan variantes válidamente.

## Validación realizada

Compilación de producción correcta y sin referencias rotas a fuentes. Se comprobaron las 24 URLs únicas del sitemap, su canónica y que no contengan noindex, más el HTML de portada, Olivos, contacto y online. Prueba aislada de wa_click: queda encolado con únicamente los tres parámetros previstos. Revisión visual móvil y escritorio. Se comprobó que el selector presencial cambia el mensaje de WhatsApp y que la página online no permite elegir presencial. No se enviaron mensajes de prueba.

## Publicación y comprobaciones externas pendientes

El repositorio no contiene una conexión operativa al hosting: solo instrucciones de carga manual y ejemplos Apache/Nginx. El paquete listo para cargar contiene exclusivamente dist, sin archivos de entorno ni código privado. Subir su contenido a la raíz pública del dominio conservando .htaccess si es Apache. Usar las reglas deploy/nginx-canonical-routes.conf si es Nginx. Guardar una copia del sitio anterior antes de reemplazarlo.

Después de cargar: comprobar portada, Olivos, online, contacto y una historia; verificar respuestas 301 del alias psicoanalista-olivos y de las rutas con barra, y 200 de las rutas finales. El servidor de vista previa de Vite no ejecuta .htaccess ni verifica Nginx.

En Search Console: inspeccionar portada, psicologo-olivos y psicoanalisis-online; confirmar canónica elegida e indexabilidad; enviar sitemap.xml si corresponde. Abrir los motivos duplicada y rastreada sin indexar para obtener las URLs faltantes antes de decidir cambios. Confirmar que la URL noindex es intencional.

En GTM/GA4: comprobar wa_click en Realtime/DebugView, verificar que el contenedor dirige los eventos a la propiedad correcta y que no hay dos etiquetas que los dupliquen. Registrar location y modality como dimensiones de evento si no están creadas. No llamar paciente ni consulta recibida a un clic. No publicar datos de consulta en Analytics.

## Seguimiento durante 28 días completos después de publicar

Registrar semanalmente, en un lugar privado, estos conteos agregados: visitas por canal y página de entrada; wa_click por ubicación y modalidad; consultas efectivamente recibidas por canal; primeras entrevistas acordadas; primeras entrevistas realizadas. Preguntar cómo llegó la persona cuando no se conozca el origen. No usar nombres, mensajes ni motivos clínicos en este registro de marketing.

Comparar los 28 días completos posteriores con los 28 previos a la publicación, considerando el retraso de Search Console. Revisar por separado Olivos, online y búsquedas por nombre. Medir consultas recibidas / visitas y entrevistas realizadas / consultas recibidas solo cuando los registros correspondan al mismo canal y periodo; no mezclar todos los pacientes con solo clics orgánicos. La muestra actual es pequeña: evaluar consultas reales antes de atribuir variaciones al diseño.

## Refinamiento visual

La portada incorpora iconos de Lucide para motivos de consulta, modalidades y señales de confianza; un recorrido de tres pasos; retrato con marco y firma; foto del consultorio con encuadre ajustado; una composición gráfica para videollamada y un cierre de contacto con fondo oscuro. Mantiene enlaces, honorarios y evento wa_click. Las entradas visuales respetan prefers-reduced-motion y los iconos decorativos están ocultos a lectores de pantalla. Revisado en 390 y 1024 píxeles, sin elementos del contenido fuera del ancho móvil.

## Suminagashi y consolidación SEO

Se sustituyeron los fondos oscuros de online y contacto por el suminagashi WebP existente con desenfoque CSS y una capa clara para mantener legibilidad. No se agregaron imágenes ni dependencias. El texto sigue siendo HTML independiente del fondo.

Se unificó el origen público en src/seo/site.js para evitar canónicas locales desde las variables de desarrollo. Helmet ahora gestiona las etiquetas SEO del HTML inicial al navegar, evitando canónicas y metadatos duplicados entre el HTML prerenderizado y React. Validación del build: las 24 URLs del sitemap tienen una sola canónica pública, un título, una descripción y JSON-LD válido. La validación técnica local no verifica posicionamiento ni sustituye la inspección de indexación en Search Console después de publicar.
