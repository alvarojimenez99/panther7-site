#!/bin/bash
# Despliegue automático del sitio (cron cada minuto).
# El repositorio vive FUERA de public_html y solo se copian los archivos del sitio,
# para no tocar admin/, portal/, webservice/ ni nada más que viva en public_html.
# Todo va dentro de una llave { } para que bash lea el script completo antes de ejecutarlo.
{
  REPO="$(cd "$(dirname "$0")" && pwd)"
  DESTINO="${DESTINO:-$HOME/domains/panther7.com/public_html}"
  MARCA="$HOME/.deploy-site.last"

  cd "$REPO" || exit 1
  exec 9>"$HOME/.deploy-site.lock"; flock -n 9 || exit 0
  git fetch -q origin main || exit 1
  git reset -q --hard origin/main
  ACTUAL="$(git rev-parse HEAD)"

  # Si ya se publicó esta versión, no hay nada que hacer
  [ "$(cat "$MARCA" 2>/dev/null)" = "$ACTUAL" ] && [ -f "$DESTINO/index.html" ] && exit 0

  # Solo estos elementos del repositorio se publican: páginas .html, robots.txt, css, js, img
  for f in *.html robots.txt css js img; do
    [ -e "$f" ] || continue
    rm -rf "${DESTINO:?}/$f"
    cp -a "$f" "$DESTINO/$f"
  done
  echo "$ACTUAL" > "$MARCA"
  echo "$(date '+%F %T') sitio desplegado $(git rev-parse --short HEAD)"
  exit 0
}
