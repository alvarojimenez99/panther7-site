# Sitio web de Panther7

Sitio estático (HTML, CSS y JS sin dependencias). Español por defecto, con selector EN/PT.

## Despliegue
Cada cambio en `main` se aplica solo: un cron ejecuta `deploy.sh` cada minuto (`git fetch` + `git reset --hard origin/main`). Registro en `~/deploy-site.log`.

## Contenido
- Textos en español: directamente en `index.html`.
- Traducciones EN y PT: diccionario al inicio de `js/site.js` (misma clave que `data-i18n` en el HTML).
- Colores y tipografía: variables al inicio de `css/site.css`.
