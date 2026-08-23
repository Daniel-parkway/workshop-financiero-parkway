# Conectar el formulario a Google Sheets

Esto permite que cada registro (fecha elegida, nombre, correo, WhatsApp) se guarde automáticamente en una hoja de Google Sheets, antes de que el lead sea enviado a pagar con Mercado Pago.

## 1. Crea la hoja de cálculo

1. Ve a [sheets.google.com](https://sheets.google.com) y crea una hoja nueva.
2. Nómbrala, por ejemplo: `Leads Workshop Financiero`.
3. En la primera fila (fila 1), agrega estos encabezados, uno por columna:
   `Fecha registro | Fecha workshop | Nombre | Email | Teléfono | Precio`

## 2. Crea el script (Apps Script)

1. En la hoja, ve a **Extensiones → Apps Script**.
2. Borra el contenido de `Code.gs` y pega esto:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.fecha || "",
    data.nombre || "",
    data.email || "",
    data.telefono || "",
    data.precio || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

3. Guarda el proyecto (ícono de disco, o Ctrl+S). Ponle un nombre, ej. `LeadsWorkshopAPI`.

## 3. Publica como Web App

1. Arriba a la derecha, clic en **Implementar → Nueva implementación**.
2. En "Seleccionar tipo", elige **Aplicación web**.
3. Configura:
   - **Ejecutar como:** Yo (tu cuenta)
   - **Quién tiene acceso:** Cualquier usuario
4. Clic en **Implementar**.
5. Google te va a pedir autorizar permisos (es tu propia hoja, es seguro). Acepta.
6. Copia la **URL de la aplicación web** que te entrega (termina en `/exec`).

## 4. Pega la URL en el proyecto

Abre [js/config.js](../js/config.js) y reemplaza:

```javascript
googleSheetsEndpoint: "REEMPLAZAR-CON-TU-URL-DE-APPS-SCRIPT",
```

por tu URL real, por ejemplo:

```javascript
googleSheetsEndpoint: "https://script.google.com/macros/s/AKfycb.../exec",
```

Guarda el archivo y listo — desde ese momento cada registro completado en el formulario se guardará automáticamente como una fila nueva en tu Google Sheet.

## Notas importantes

- Si dejas el placeholder sin reemplazar, el formulario **sigue funcionando** (el usuario puede registrarse y pagar), solo que el registro no se guardará en Sheets — quedará únicamente en el navegador del usuario (`localStorage`) como respaldo temporal.
- Si en algún momento cambias de hoja o rehaces el script, deberás volver a hacer **Implementar → Nueva implementación** y actualizar la URL en `config.js`.
- Cada vez que edites el código del script (`Code.gs`), Google requiere una **nueva implementación** para que los cambios tomen efecto (no basta con guardar).
