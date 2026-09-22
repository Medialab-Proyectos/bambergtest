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

1. Título del hero. Usamos "Building trust in a connected world", de la reunión. El manual propone "Strengthening security through knowledge and collaboration".
2. Testimonios: ¿los manda el cliente o se sacan de sus redes sociales?
3. Texto de About Us y cifras reales.
4. Inscripción: como los eventos son privados, proponemos solicitar invitación en lugar de la compra directa de Health.
5. Idioma: los textos están en inglés. Falta saber si el sitio será bilingüe.
6. Campos del registro y texto legal de los términos.

## Nota sobre el video

El video original del cliente (4K, 296 MB) no está en el repositorio porque supera el límite de GitHub. En `Demo/assets/video/hero.mp4` está la versión comprimida para web (720p, 11 MB).
