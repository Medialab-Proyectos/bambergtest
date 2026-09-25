# Bamberg Security — demo del nuevo sitio

Demo estático del nuevo sitio de **Bamberg Security**, la plataforma de cumbres de ciberseguridad de Bamberg Summits. Parte de la estructura del sitio actual de [Bamberg Health](https://bamberghealth.com) y le aplica los cambios pedidos por el cliente y el [manual de marca de Bamberg Security](https://www.bambergsummits.com/brandguidelines/bambergsecurity/).

Sirve para enseñarle la propuesta al cliente y cerrar las decisiones pendientes antes de implementarla en Bubble.

## Cómo verlo

Abre `Demo/index.html` en el navegador. No necesita servidor ni instalación.

## Páginas

| Archivo | Página |
|---|---|
| `Demo/index.html` | Home |
| `Demo/about.html` | About us |
| `Demo/summits.html` | Listado de summits, con pestañas de próximos y pasados, búsqueda y filtro por país |
| `Demo/event.html?id=<id>` | Ficha de evento: temas, speakers, agenda, sede y solicitud de invitación |
| `Demo/photos.html` | Galería de fotos |
| `Demo/login.html`, `Demo/signup.html` | Acceso y registro |
| `Demo/terms.html` | Términos (solo estructura, sin texto legal) |

## Estructura

```
Demo/
  css/styles.css     Estilos, con las reglas del manual de marca comentadas
  js/data.js         Eventos y fotos. Simula lo que vendría del admin de Bubble
  js/layout.js       Header, footer y formulario de consulta
  assets/            Logos oficiales, fotos, video y logos de partners
Contexto/            Transcripción de la reunión del 18/09/2026
Requerimientos/      Documento del cliente y enlaces de referencia
Recursos/            Material original del cliente (logos de partners)
```

## Contenido real vs. de ejemplo

Es real: los logos oficiales de Bamberg Security, el video del hero, las fotos del álbum de Flickr, los logos de los partners, el foro de Madrid del 21 de mayo de 2026 y todos los textos que mandó el cliente.

Es de ejemplo: los próximos summits y sus speakers, los testimonios, las cifras de About Us y el texto de About Us.

## Pendiente de confirmar con el cliente

1. Lemas: el header usa "Strengthening security through knowledge and collaboration" y About Us abre con "Building Trust in a Connected World". Confirmar que conviven a propósito.
2. Testimonios: recibidos (7, del Google Sheet del cliente). Faltan las fotos de 5 de las 7 personas; las otras 2 salen del material publicado por el cliente.
3. Header nuevo (carpeta de Drive privada), datos del footer, equipo para la página Team y categorías de sponsors.
4. Inscripción: el flujo de invitación gratuita y compra con Stripe ya existe en Bamberg Health, así que se reutiliza; falta definir la configuración por evento (invitación, compra o ambas).
5. Idioma: los textos están en inglés. Falta saber si el sitio será bilingüe.
6. Campos del registro y texto legal de los términos.

## Nota sobre el video

El video original del cliente (4K, 296 MB) no está en el repositorio porque supera el límite de GitHub. En `Demo/assets/video/hero.mp4` está la versión comprimida para web (720p, 11 MB).
