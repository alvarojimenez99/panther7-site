# Sitio web de Panther7

Sitio estático (HTML, CSS y JS sin dependencias). Español por defecto, con selector EN/PT.

## Despliegue
El repositorio se clona **fuera** de `public_html` (en `~/domains/panther7.com/sitio_repo`). Un cron ejecuta `deploy.sh` cada minuto: hace `git fetch`, `git reset --hard origin/main` y copia solo las páginas `.html`, `robots.txt`, `css/`, `js/` e `img/` a `public_html`. No toca `admin/`, `portal/`, `webservice/` ni el `.htaccess`.
Registro en `~/deploy-site.log`.

## Contenido
- Textos en español: directamente en `index.html`.
- Traducciones EN y PT: diccionario al inicio de `js/site.js` (misma clave que `data-i18n` en el HTML).
- Colores y tipografía: variables al inicio de `css/site.css`.

## Asistente con IA (opcional)
El sitio incluye un asistente (`asistente.php` + `js/asistente.js`) que usa la API de Anthropic. **Está apagado hasta que exista la clave**: sin ella, la sección y el botón no aparecen en el sitio.
Para activarlo: crea el archivo `~/domains/panther7.com/.p7_asistente_clave` (fuera de `public_html`) con la clave de la API en una sola línea y `chmod 600`. Para apagarlo, borra el archivo.
Límites: 20 mensajes por IP y hora, 800 mensajes al día en todo el sitio (constantes al inicio de `asistente.php`). Modelo: `claude-haiku-4-5-20251001`.
Los mensajes de los visitantes se envían a Anthropic: conviene mencionarlo en la política de privacidad.
