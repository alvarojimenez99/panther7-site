#!/bin/bash
# Despliegue automático del sitio (cron cada minuto).
# El repositorio vive FUERA de public_html y solo se copian los archivos del sitio,
# para no tocar admin/, portal/, webservice/ ni nada más que viva en public_html.
REPO="$(cd "$(dirname "$0")" && pwd)"
DESTINO="${DESTINO:-$HOME/domains/panther7.com/public_html}"

cd "$REPO" || exit 1
exec 9>"$HOME/.deploy-site.lock"; flock -n 9 || exit 0
git fetch -q origin main || exit 1
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && [ -f "$DESTINO/index.html" ] && exit 0
git reset -q --hard origin/main

# Solo estos elementos del repositorio se publican
for f in index.html robots.txt css js img; do
  rm -rf "${DESTINO:?}/$f"
  cp -a "$f" "$DESTINO/$f"
done
echo "$(date '+%F %T') sitio desplegado $(git rev-parse --short HEAD)"
