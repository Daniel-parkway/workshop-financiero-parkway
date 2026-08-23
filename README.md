# Workshop Financiero — Parkway

Landing page + embudo de registro para el Workshop Financiero. HTML/CSS/JS puro, sin frameworks ni build step — se puede subir directo a Vercel o Netlify.

## Estructura

```
index.html                     → toda la landing + el modal de registro
css/style.css                  → estilos (paleta negro/dorado/verde, mobile-first)
js/config.js                   → ⭐ ÚNICO archivo que necesitas editar para configurar todo
js/main.js                     → lógica del formulario (no requiere edición)
docs/copy.md                   → copy oficial de la landing, bloque por bloque
docs/google-sheets-setup.md    → cómo conectar el formulario a Google Sheets
assets/                        → fotos, logo, etc.
```

## Qué editar para lanzar

Todo vive en [js/config.js](js/config.js):

1. **Fechas del workshop** — array `workshopDates`
2. **Precio** — objeto `pricing`
3. **Link de Mercado Pago** — `mercadoPagoLink`
4. **Número de WhatsApp del asesor** — `whatsapp.number`
5. **Endpoint de Google Sheets** — `googleSheetsEndpoint` (ver [docs/google-sheets-setup.md](docs/google-sheets-setup.md))
6. **Fotos y bios de Fabio y Andrés** — objeto `brand.instructors`

## Flujo del funnel

1. Landing con el copy completo → CTA "Reserva tu lugar ahora"
2. Modal de registro, 3 pasos:
   - Paso 1: elegir fecha del workshop
   - Paso 2: nombre, correo, WhatsApp
   - Paso 3: resumen → guarda el lead en Google Sheets → redirige a Mercado Pago
3. Después del pago, un asesor comercial contacta al lead por WhatsApp para confirmar asistencia (proceso manual del equipo comercial, fuera de la web).

## Probar localmente

Abre `index.html` directamente en el navegador, o sirve la carpeta con cualquier servidor estático (ej. la extensión "Live Server" de VS Code).

## Publicar

Sube la carpeta completa a Vercel o Netlify (deploy de sitio estático, sin comandos de build).
