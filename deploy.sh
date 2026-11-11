#!/bin/bash
# Despliegue automático del sitio: si hay cambios nuevos en main, los aplica.
# Pensado para correr cada minuto por cron en el servidor.
cd "$(dirname "$0")" || exit 1
exec 9>"$HOME/.deploy-site.lock"; flock -n 9 || exit 0
git fetch -q origin main || exit 1
[ "$(git rev-parse HEAD)" = "$(git rev-parse origin/main)" ] && exit 0
git reset -q --hard origin/main
echo "$(date '+%F %T') sitio desplegado $(git rev-parse --short HEAD)"
