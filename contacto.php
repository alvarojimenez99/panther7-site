<?php
// Formulario de contacto de panther7.com: captcha propio (suma firmada), trampa anti-bots,
// límite por IP y copia en un archivo fuera de la web. Sin servicios externos.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

const DESTINO = 'contacto@panther7.com';
const DESDE   = 'no-reply@panther7.com';

$base = dirname(__DIR__);                       // ~/domains/panther7.com (fuera de public_html)
$claveArchivo = $base . '/.p7_contacto_clave';
if (!is_file($claveArchivo)) { @file_put_contents($claveArchivo, bin2hex(random_bytes(32))); @chmod($claveArchivo, 0600); }
$clave = trim((string) @file_get_contents($claveArchivo)) ?: 'p7-respaldo';

function salir($d, $c = 200) { http_response_code($c); echo json_encode($d); exit; }
function firma($txt, $clave) { return hash_hmac('sha256', $txt, $clave); }

if ($_SERVER['REQUEST_METHOD'] === 'GET') {          // pide un desafío
    $a = random_int(2, 9); $b = random_int(2, 9); $t = time();
    $carga = $t . '|' . ($a + $b);
    salir(['q' => "$a + $b", 't' => base64_encode($carga) . '.' . firma($carga, $clave)]);
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') salir(['e' => 'val'], 405);

$p = array_map(fn($v) => is_string($v) ? trim($v) : '', $_POST);
if (($p['web'] ?? '') !== '') salir(['ok' => true]);        // trampa: los bots rellenan este campo

// captcha
$partes = explode('.', $p['t'] ?? '');
$carga = base64_decode($partes[0] ?? '', true) ?: '';
if (count($partes) !== 2 || !hash_equals(firma($carga, $clave), $partes[1])) salir(['e' => 'cap'], 400);
[$ts, $suma] = array_pad(explode('|', $carga), 2, 0);
$edad = time() - (int) $ts;
if ($edad < 3 || $edad > 7200 || (int) ($p['r'] ?? -1) !== (int) $suma) salir(['e' => 'cap'], 400);

// validación
$nombre = mb_substr($p['nombre'] ?? '', 0, 100); $correo = mb_substr($p['correo'] ?? '', 0, 150);
$tema = mb_substr($p['tema'] ?? '', 0, 60); $msg = mb_substr($p['mensaje'] ?? '', 0, 3000);
if ($nombre === '' || mb_strlen($msg) < 10 || !filter_var($correo, FILTER_VALIDATE_EMAIL)) salir(['e' => 'val'], 422);

// límite: 5 envíos por hora por IP
$ip = $_SERVER['REMOTE_ADDR'] ?? '0'; $lim = sys_get_temp_dir() . '/p7c_' . md5($ip);
$hist = array_filter(array_map('intval', @file($lim, FILE_IGNORE_NEW_LINES) ?: []), fn($x) => $x > time() - 3600);
if (count($hist) >= 5) salir(['e' => 'rate'], 429);
$hist[] = time(); @file_put_contents($lim, implode("\n", $hist));

$limpia = fn($s) => str_replace(["\r", "\n"], ' ', $s);
$cuerpo = "Nombre: $nombre\nCorreo: $correo\nTema: $tema\nIP: $ip\n\n$msg\n";
@file_put_contents($base . '/contactos.log', '[' . date('c') . "]\n$cuerpo\n---\n", FILE_APPEND | LOCK_EX);   // copia de respaldo
$cab = "From: Panther7 web <" . DESDE . ">\r\nReply-To: " . $limpia($correo) . "\r\nContent-Type: text/plain; charset=UTF-8\r\n";
$ok = @mail(DESTINO, '=?UTF-8?B?' . base64_encode('Contacto web: ' . $limpia($tema ?: 'consulta')) . '?=', $cuerpo, $cab);
salir($ok ? ['ok' => true] : ['e' => 'envio'], $ok ? 200 : 500);
