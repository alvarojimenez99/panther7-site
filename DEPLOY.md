# Sitio web de Panther7

Sitio estático (HTML, CSS y JS sin dependencias). Español por defecto, con selector EN/PT.

## Despliegue
El repositorio se clona **fuera** de `public_html` (en `~/domains/panther7.com/sitio_repo`). Un cron ejecuta `deploy.sh` cada minuto: hace `git fetch`, `git reset --hard origin/main` y copia solo `index.html`, `robots.txt`, `css/`, `js/` e `img/` a `public_html`. No toca `admin/`, `portal/`, `webservice/` ni el `.htaccess`.
Registro en `~/deploy-site.log`.

## Contenido
- Textos en español: directamente en `index.html`.
- Traducciones EN y PT: diccionario al inicio de `js/site.js` (misma clave que `data-i18n` en el HTML).
- Colores y tipografía: variables al inicio de `css/site.css`.
