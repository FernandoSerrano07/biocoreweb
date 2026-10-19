# BIOCORE — Sitio web

Página web de BIOCORE: control de asistencia con reconocimiento facial desde el celular, sin biométricos convencionales.

Es un sitio estático (HTML, CSS y un poco de JavaScript), sin dependencias ni paso de compilación. Usa los colores, la tipografía Archivo y el logo del sistema de marca de BIOCORE.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página completa |
| `css/estilos.css` | Estilos. Los colores de marca están al inicio, en `:root` |
| `js/menu.js` | Abre y cierra el menú en celulares |
| `img/logo-fondo-claro.svg` | Logo para fondos claros (encabezado) |
| `img/logo-fondo-oscuro.svg` | Logo para fondos oscuros (pie y panel) |
| `img/compartir.png` | Imagen que aparece al compartir el enlace en WhatsApp, Facebook, etc. (1200 × 630) |
| `favicon.svg`, `favicon.ico`, `img/apple-touch-icon.png` | Íconos del navegador y del celular |

## Ver la página en tu computadora

Abre `index.html` en el navegador, o levanta un servidor local:

```bash
python3 -m http.server 8080
# y abre http://localhost:8080
```

## Contacto

Los datos de contacto están en la sección `#contacto` de `index.html`:

- **WhatsApp:** +503 7056-4109 (enlaces `https://wa.me/50370564109`, dos lugares).
- **Correo:** biocore.sv@gmail.com (enlaces `mailto:`, dos lugares).

Si cambian, actualiza los dos lugares de cada uno.

## Antes de publicar

- [ ] **Imagen para compartir:** cuando tengas el dominio, cambia `img/compartir.png` en la etiqueta `og:image` por la dirección completa (`https://tu-dominio/img/compartir.png`).

## Publicar

Cualquier hosting de sitios estáticos sirve. Con GitHub Pages:

1. En el repositorio: **Settings → Pages**.
2. En **Source**, elige **Deploy from a branch**, rama `main`, carpeta `/ (root)`.
3. Guarda. En uno o dos minutos la página queda en `https://fernandoserrano07.github.io/biocoreweb/`.
4. Para usar un dominio propio, escríbelo en **Custom domain** en esa misma pantalla.

## Notas de marca

- Siempre decimos **"biométricos convencionales"**, nunca "reloj marcador".
- Texto verde sobre fondo claro: `--brand-strong` (#007A5F). Botones verdes con texto oscuro, nunca blanco.
- Precio: **$100 al año por sucursal**, pago único anual. El módulo de campo se activa solo si la empresa lo necesita.
- Las imágenes de los módulos (Dashboard, Sucursales, Reportes) están hechas en HTML a partir de las pantallas reales del sistema; se pueden cambiar por capturas reales.
