/* ============================================================
   CONFIGURACIÓN DEL FUNNEL — WORKSHOP FINANCIERO PARKWAY
   Edita SOLO este archivo para actualizar fechas, precios,
   links y contacto. No es necesario tocar ningún otro archivo.
   ============================================================ */

const CONFIG = {

  /* ------------------------------------------------------------
     BANDA DE PRECIOS (estilo bolsa de valores)
     Franja decorativa con datos de mercado que se desliza debajo
     del header. Son valores de referencia (no en vivo) — puedes
     editarlos cuando quieras para que se vean actualizados.
     - direction: "up" o "down" (controla el color de la flecha)
     ------------------------------------------------------------ */
  tickerItems: [
    { symbol: "S&P 500", price: "5,738.42", change: "+0.62%", direction: "up" },
    { symbol: "NASDAQ", price: "18,342.10", change: "+0.94%", direction: "up" },
    { symbol: "DOW JONES", price: "42,180.75", change: "+0.44%", direction: "up" },
    { symbol: "USD/COP", price: "4,050.30", change: "-0.18%", direction: "down" },
    { symbol: "ORO", price: "2,634.50", change: "+0.31%", direction: "up" },
    { symbol: "BTC", price: "97,250.00", change: "+2.15%", direction: "up" },
    { symbol: "PETRÓLEO WTI", price: "71.85", change: "-0.52%", direction: "down" }
  ],

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
  googleSheetsEndpoint: "https://script.google.com/macros/s/AKfycbx35VCD31K0fp4Yby7K7vmfqp4uIPRb8eJbY1U7MrjGdUSVFGrV7WUYDmqKdpLL4-rp/exec",

  /* ------------------------------------------------------------
     MARCA
     - headerLogo: opcional. Si guardas assets/logo-header.png (o el
       nombre que pongas aquí) se muestra en el encabezado en vez de
       la palabra "PARKway". Si no existe, se sigue viendo el texto
       y no rompe nada.
     ------------------------------------------------------------ */
  brand: {
    name: "Parkway",
    workshopName: "Workshop Financiero",
    headerLogo: "assets/logo-header.png",
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
