/* Datos del menú: cada categoría abre en página aparte */
var MENU_DATA = {
  cremas: {
    title: 'Cremas',
    items: [
      { name: 'Crema de Cebolla', price: '$20.000', image: 'image/platos/imagenesDePruebas/cremaDeCebolla.webp' },
      { name: 'Crema de Pollo', price: '$25.000' },
      { name: 'Crema de Champiñones', price: '$20.000' },
      { name: 'Crema de pollo con champiñones', price: '$28.000' },
      { name: 'Crema de Camarones', price: '$30.000' }
    ]
  },
  pastas: {
    title: 'Pastas',
    items: [
      { name: 'Lasagna de res', price: '$35.000', image: 'image/platos/imagenesDePruebas/LasañaDeRes.jpeg' },
      { name: 'Lasagna de pollo', price: '$30.000' },
      { name: 'Lasagna Especial', price: '$40.000' },
      { name: 'Pastas con pollo', price: '$30.000' },
      { name: 'Pastas de pollo/champiñones', price: '$35.000' },
      { name: 'Pastas Boloñesa', price: '$35.000' },
      { name: 'Pastas con camarones', price: '$40.000' },
      { name: 'Pastas carbonara', price: '$30.000' }
    ]
  },
  pescados: {
    title: 'Pescados y Mariscos',
    items: [
      { name: 'Ensopado de bagre', price: '$60.000', image: 'image/platos/EnsopadoBagre.jpeg', imageLayout: 'portrait' },
      { name: 'Ensopado de bagre y camarones a la marinera', price: '$70.000' },
      { name: 'Filete de Robalo a la plancha', price: '$40.000' },
      { name: 'Filete de Robalo a la milanesa', price: '$45.000' },
      { name: 'Robalo gratinado', price: '$45.000' },
      { name: 'Trucha en Salsa de Camarón', price: '$60.000', image: 'image/platos/TruchaSalsaCamaron.jpeg', imageLayout: 'portrait' },
      { name: 'Salmón a la plancha', price: '$60.000' },
      { name: 'Salmón al ajillo', price: '$65.000' },
      { name: 'Salmón en Salsa de Camarones', price: '$70.000' },
      { name: 'Salmón en Salsa de Mariscos', price: '$70.000' },
      { name: 'Salmón en Salsa de Langostinos', price: '$80.000' },
      { name: 'Langostinos a la brasa', price: '$60.000' },
      { name: 'Langostinos al ajillo', price: '$65.000' },
      { name: 'Langostinos gratinados', price: '$65.000' },
      { name: 'Bocachico', price: 'Según tamaño' },
      { name: 'Sierra', price: 'Según tamaño' },
      { name: 'Bagre frito', price: '$45.000' },
      { name: 'Bagre a la criolla', price: '$50.000' },
      { name: 'Pargo', price: 'Según tamaño', image: 'image/platos/PargoSalsaCamaron.jpeg', imageLayout: 'portrait' },
      { name: 'Tilapia', price: 'Según tamaño' },
      { name: 'Cachama', price: 'Según tamaño' },
      { name: 'Bagre con camarones', price: '$60.000' },
      { name: 'Bagre con mariscos', price: '$60.000' },
      { name: 'Bagre gratinado', price: '$50.000' },
      { name: 'Trucha al ajillo', price: '$50.000' },
      { name: 'Bagre a la milanesa', price: '$50.000' },
      { name: 'Cazuela de Mariscos', price: '$60.000', image: 'image/platos/CazuelaMariscos.jpeg', imageLayout: 'portrait' },
      { name: 'Cazuela de Camarón', price: '$50.000' },
      { name: 'Ceviche de Camarón', price: '$35.000' }
    ]
  },
  tipicos: {
    title: 'Platos Típicos',
    items: [
      { name: 'Bandeja paisa', price: '$50.000', image: 'image/platos/imagenesDePruebas/bandeja-paisa.jpg' },
      { name: 'Cazuela de frijol', price: '$45.000' }
    ]
  },
  rapidas: {
    title: 'Comidas Rápidas',
    items: [
      { name: 'Salchipapas', price: '$25.000' },
      { name: 'Salchipollo', price: '$30.000' },
      { name: 'Salchicarne', price: '$30.000' },
      { name: 'Pinchos pollo', price: '$40.000' },
      { name: 'Alitas BBQ X 8 Unidades', price: '$30.000' },
      { name: 'Alitas BBQ X 16 Unidades', price: '$50.000' },
      { name: 'Alitas BBQ X 24 Unidades', price: '$70.000' },
      { name: 'Quesadilla de pollo', price: '$25.000' },
      { name: 'Quesadilla mixta (pollo, carne)', price: '$30.000' },
      { name: 'Desgranado pollo', price: '$40.000' },
      { name: 'Sandwich cubano', price: '$25.000' },
      { name: 'Hamburguesa Sencilla', price: '$25.000', desc: 'Carne de res, tocineta, cebolla y queso' },
      { name: 'Hamburguesa Doble Carne', price: '$35.000', desc: 'Doble carne de res, queso y salsas de la casa' }
    ],
    extra: 'Todas acompañadas con papas y salsas de la casa'
  },
  perros: {
    title: 'Perros',
    items: [
      { name: 'Sencillo', price: '$15.000', desc: 'Acompañado con papas francesas' },
      { name: 'Suizo', price: '$20.000' },
      { name: 'De La Casa', price: '$30.000', desc: 'Acompañado con papas francesas' }
    ]
  },
  cerdo: {
    title: 'Cerdo',
    items: [
      { name: 'Costilla BBQ', price: '$55.000' },
      { name: 'Chuletica', price: '$40.000' },
      { name: 'Cañón de cerdo', price: '$45.000' },
      { name: 'Lomito en salsa de champiñones', price: '$50.000' },
      { name: 'Lomito a la milanesa', price: '$50.000' },
      { name: 'Lomito gratinado', price: '$50.000' },
      { name: 'Lomito hawaiano', price: '$55.000' },
      { name: 'Ceviche de chicharrón', price: '$40.000' }
    ]
  },
  arroces: {
    title: 'Arroces y Risottos',
    items: [
      { name: 'Arroz con pollo', price: '$35.000' },
      { name: 'Arroz con cerdo', price: '$35.000' },
      { name: 'Arroz con res', price: '$35.000' },
      { name: 'Arroz cubano', price: '$45.000' },
      { name: 'Arroz oriental', price: '$50.000' },
      { name: 'Arroz con camarones', price: '$55.000' },
      { name: 'Arroz con mariscos', price: '$50.000' },
      { name: 'Risotto de pollo', price: '$40.000' },
      { name: 'Risotto marinero', price: '$45.000' },
      { name: 'Risotto marinero (camarón)', price: '$50.000' }
    ]
  },
  pollos: {
    title: 'Pollos',
    items: [
      { name: 'Pechuga a la brasa', price: '$40.000' },
      { name: 'Filete de pechuga', price: '$40.000' },
      { name: 'Pechuga a la milanesa', price: '$45.000' },
      { name: 'Pechuga hawaiana', price: '$45.000' },
      { name: 'Pechuga en salsa de champiñones', price: '$45.000' },
      { name: 'Pechuga gratinada', price: '$45.000' },
      { name: 'Pechuga tres quesos', price: '$42.000' }
    ],
    extra: 'Todas acompañadas con papas francesas y ensalada'
  },
  entradas: {
    title: 'Entradas',
    items: [
      { name: 'Patacones con hogao', price: '$20.000' },
      { name: 'Patacones con queso', price: '$20.000' },
      { name: 'Canasticas de pollo', price: '$30.000' },
      { name: 'Canasticas de camarón', price: '$30.000' }
    ]
  },
  carnes: {
    title: 'Carnes',
    items: [
      { name: 'Baby Beef', price: '$60.000' },
      { name: 'Punta de anca', price: '$60.000' },
      { name: 'Solomito en salsa de champiñones', price: '$65.000' },
      { name: 'Solomito hawaiano', price: '$65.000' },
      { name: 'Solomito gratinado', price: '$60.000' },
      { name: 'Solomito tres quesos', price: '$65.000' },
      { name: 'Sobrebarriga a la brasa', price: '$50.000' },
      { name: 'Sobrebarriga a la criolla', price: '$55.000' },
      { name: 'Lengua a la brasa', price: '$50.000' },
      { name: 'Lengua a la criolla', price: '$55.000' },
      { name: 'Solomito a la pimienta', price: '$65.000' },
      { name: 'Filet Mignon', price: '$65.000' }
    ],
    extra: 'Todas las carnes acompañadas con papas francesas y ensalada'
  },
  ensaladas: {
    title: 'Ensaladas',
    items: [
      { name: 'César clásica', price: '$20.000' },
      { name: 'César clásica con pollo', price: '$30.000' }
    ]
  },
  picadas: {
    title: 'Picadas',
    items: [
      { name: 'Picada de chicharrón', price: '$35.000' },
      { name: 'Picada Natural', price: '$70.000' }
    ]
  },
  jugos: {
    title: 'Jugos y Bebidas',
    items: [
      { name: 'Hierbabuena (Menta)', price: '—' },
      { name: 'Lulo', price: '—' },
      { name: 'Limonada Mango Biche', price: '—' },
      { name: 'Limonada Cereza', price: '—' },
      { name: 'Tamarindo', price: '—' },
      { name: 'Maracumango', price: '—' },
      { name: 'Zapote', price: '—' },
      { name: 'Borojó', price: '—' },
      { name: 'Fresa', price: '—' },
      { name: 'Guayaba', price: '—' },
      { name: 'Limonada de coco', price: '—' },
      { name: 'Níspero', price: '—' },
      { name: 'Uva', price: '—' },
      { name: 'Maracuyá', price: '—' },
      { name: 'Mango', price: '—' },
      { name: 'Tomate de árbol', price: '—' },
      { name: 'Avena', price: '—' },
      { name: 'Piña', price: '—' },
      { name: 'Limonada de fresa', price: '—' },
      { name: 'Mandarina', price: '—' },
      { name: 'Mora', price: '—' },
      { name: 'Piña Colada', price: '—' },
      { name: 'Guanábana', price: '—' },
      { name: 'Gaseosa Coca Cola', price: '—' },
      { name: 'Gaseosas', price: '—' },
      { name: 'Cervezas', price: '—' }
    ],
    extra: 'Aguas Saborizadas · Vino · Cócteles · Sangría'
  }
};
