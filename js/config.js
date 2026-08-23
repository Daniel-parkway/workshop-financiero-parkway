/* ============================================================
   CONFIGURACIÓN DEL FUNNEL — WORKSHOP FINANCIERO PARKWAY
   Edita SOLO este archivo para actualizar fechas, precios,
   links y contacto. No es necesario tocar ningún otro archivo.
   ============================================================ */

const CONFIG = {

  /* ------------------------------------------------------------
     FECHAS DEL WORKSHOP
     Agrega, elimina o edita las fechas disponibles aquí.
     - id: identificador único (no lo repitas)
     - label: lo que ve el usuario en la tarjeta de selección
     - day: número de día grande (ej. "23")
     - month: mes abreviado (ej. "AGO")
     - weekday: día de la semana
     - time: horario del evento
     - city: ciudad o modalidad (ej. "Presencial · Bogotá" o "Online · Zoom")
     - spotsLeft: cupos restantes (opcional, para urgencia). Pon null para ocultarlo.
     ------------------------------------------------------------ */
  workshopDates: [
    {
      id: "fecha-1",
      label: "Sábado 23 de Agosto",
      day: "23",
      month: "AGO",
      weekday: "Sábado",
      time: "9:00 AM - 1:00 PM",
      city: "Presencial · Por confirmar",
      spotsLeft: 12
    },
    {
      id: "fecha-2",
      label: "Sábado 30 de Agosto",
      day: "30",
      month: "AGO",
      weekday: "Sábado",
      time: "9:00 AM - 1:00 PM",
      city: "Presencial · Por confirmar",
      spotsLeft: 18
    },
    {
      id: "fecha-3",
      label: "Sábado 6 de Septiembre",
      day: "06",
      month: "SEP",
      weekday: "Sábado",
      time: "9:00 AM - 1:00 PM",
      city: "Presencial · Por confirmar",
      spotsLeft: 20
    }
  ],

  /* ------------------------------------------------------------
     PRECIO / OFERTA
     ------------------------------------------------------------ */
  pricing: {
    originalPrice: "$157 USD",
    offerPrice: "$27 USD",
    currencyNote: "Pago único"
  },

  /* ------------------------------------------------------------
     PAGO — MERCADO PAGO
     Reemplaza este link por el link real de pago cuando lo tengas.
     Es el MISMO link para todas las fechas.
     ------------------------------------------------------------ */
  mercadoPagoLink: "https://mpago.li/17NBVRE",

  /* ------------------------------------------------------------
     WHATSAPP DEL ASESOR COMERCIAL
     Formato: código de país + número, sin +, sin espacios, sin guiones.
     Ejemplo Colombia: "573001234567"
     ------------------------------------------------------------ */
  whatsapp: {
    number: "REEMPLAZAR-573000000000",
    defaultMessage: "Hola, acabo de registrarme al Workshop Financiero y quiero confirmar mi asistencia."
  },

  /* ------------------------------------------------------------
     CAPTURA DE LEADS — GOOGLE SHEETS
     Pega aquí la URL de tu Google Apps Script Web App
     (instrucciones de despliegue en docs/google-sheets-setup.md).
     Mientras esté vacío o con el placeholder, el formulario
     seguirá funcionando pero SOLO guardará el registro en el
     navegador (localStorage) y no lo enviará a ningún lado.
     ------------------------------------------------------------ */
  googleSheetsEndpoint: "REEMPLAZAR-CON-TU-URL-DE-APPS-SCRIPT",

  /* ------------------------------------------------------------
     MARCA
     - logo: opcional. Si guardas assets/logo-workshop.png se muestra
       como sello sobre la sección de autoridad. Si no existe, se oculta
       automáticamente y no rompe nada.
     ------------------------------------------------------------ */
  brand: {
    name: "Parkway",
    workshopName: "Workshop Financiero",
    logo: "assets/logo-workshop.png",
    instructors: [
      {
        name: "Fabio",
        role: "Orientador de Vida",
        bio: "Con 30 años de experiencia, transformó sus fracasos empresariales en sabiduría pura. Hoy disfruta de tranquilidad financiera y ayuda a otros a sanar su relación con el dinero y la vida.",
        photo: "assets/fabio.jpg"
      },
      {
        name: "Andrés",
        role: "Mentor Financiero",
        bio: "Administrador de Negocios Internacionales con experiencia en multinacionales gigantes como Binance y Airbnb. Unió la tecnología y las finanzas para crear sistemas de inversión que superan al mercado tradicional. Es quien pone la estrategia detrás de los sueños.",
        photo: "assets/andres.jpg"
      }
    ]
  },

  /* ------------------------------------------------------------
     IMAGEN DE RECURSOS INCLUIDOS (opcional)
     Foto del combo de recursos (e-book, plantillas, calculadora, etc.)
     que se muestra en la tarjeta de oferta. Si el archivo no existe,
     se oculta automáticamente.
     ------------------------------------------------------------ */
  resourcesImage: "assets/recursos-bonus.jpg"

};
