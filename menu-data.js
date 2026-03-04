/* Datos del menú: cada categoría abre en página aparte */
var MENU_DATA = {
  cremas: {
    title: 'Cremas',
    items: [
      { name: 'Crema de Cebolla', price: '$15.000', image: 'image/platos/imagenesDePruebas/cremaDeCebolla.webp' },
      { name: 'Crema de Pollo', price: '$15.000' },
      { name: 'Crema de Champiñones', price: '$20.000' },
      { name: 'Crema de Pollo Champiñón', price: '$22.000' },
      { name: 'Crema de Camarones', price: '$25.000' }
    ]
  },
  pastas: {
    title: 'Pastas',
    items: [
      { name: 'Lasagna de res', price: '$25.000', image: 'image/platos/imagenesDePruebas/LasañaDeRes.jpeg' },
      { name: 'Lasagna de pollo', price: '$25.000' },
      { name: 'Lasagna de burrata', price: '$30.000' },
      { name: 'Lasagna Especial', price: '$35.000' },
      { name: 'Pastas con pollo', price: '$25.000' },
      { name: 'Pastas de pollo/champiñones', price: '$30.000' },
      { name: 'Pastas Boloñesa', price: '$25.000' },
      { name: 'Pastas con camarones', price: '$35.000' },
      { name: 'Pastas carbonara', price: '$25.000' }
    ]
  },
  pescados: {
    title: 'Pescados y Mariscos',
    items: [
      { name: 'Ensopado de bagre', price: '$45.000', image: 'image/platos/imagenesDePruebas/ensopadoDeBagre.avif' },
      { name: 'Ensopado de bagre y camarones a la marinera', price: '$70.000' },
      { name: 'Filete de Robalo a la plancha', price: '$35.000' },
      { name: 'Filete de Robalo a la milanesa', price: '$40.000' },
      { name: 'Robalo gratinado', price: '$40.000' },
      { name: 'Trucha en Salsa de Camarón', price: '$50.000' },
      { name: 'Salmón a la plancha', price: '$45.000' },
      { name: 'Salmón al ajillo', price: '$50.000' },
      { name: 'Salmón en Salsa de Camarones', price: '$55.000' },
      { name: 'Salmón en Salsa de Mariscos', price: '$60.000' },
      { name: 'Salmón en Salsa de Langostinos', price: '$65.000' },
      { name: 'Langostinos a la brasa', price: '$50.000' },
      { name: 'Langostinos al ajillo', price: '$55.000' },
      { name: 'Langostinos a la milanesa', price: '$55.000' },
      { name: 'Langostinos gratinados', price: '$60.000' },
      { name: 'Bocachico', price: 'Según tamaño' },
      { name: 'Sierra', price: 'Según tamaño' },
      { name: 'Trucha a la plancha', price: 'Consultar' },
      { name: 'Bagre frito', price: '$35.000' },
      { name: 'Bagre a la criolla', price: '$40.000' },
      { name: 'Pargo', price: 'Según tamaño' },
      { name: 'Tilapia', price: 'Consultar' },
      { name: 'Cachama', price: 'Consultar' },
      { name: 'Bagre con camarones', price: '$50.000' },
      { name: 'Bagre con mariscos', price: '$55.000' },
      { name: 'Bagre gratinado', price: '$40.000' },
      { name: 'Trucha al ajillo', price: '$40.000' },
      { name: 'Bagre a la milanesa', price: '$40.000' },
      { name: 'Cazuela de Mariscos', price: '$45.000' },
      { name: 'Cazuela de Camarón', price: '$40.000' },
      { name: 'Ceviche de Camarón', price: '$30.000' }
    ]
  },
  tipicos: {
    title: 'Platos Típicos',
    items: [
      { name: 'Bandeja paisa', price: '$38.000', image: 'image/platos/imagenesDePruebas/bandeja-paisa.jpg' },
      { name: 'Cazuela de frijol', price: '$35.000' }
    ]
  },
  rapidas: {
    title: 'Comidas Rápidas',
    items: [
      { name: 'Salchipapas', price: '$22.000' },
      { name: 'Salchipollo', price: '$25.000' },
      { name: 'Salchicarne', price: '$27.000' },
      { name: 'Pinchos pollo', price: '$30.000' },
      { name: 'Hamburguesa Sencilla', price: '$18.000', desc: 'Carne de res, tocineta, cebolla y queso' },
      { name: 'Hamburguesa Doble Carne', price: '$25.000', desc: 'Doble carne de res, queso y salsas de la casa' },
      { name: 'Hamburguesa De La Casa', price: '$35.000', desc: 'Tocineta, cebolla caramelizada, tomate, lechuga, queso mozarella, pepinillos agridulces, Salsa de la Casa, papas francesas' }
    ],
    extra: 'Todas acompañadas con papas y salsas de la casa'
  },
  perros: {
    title: 'Perros',
    items: [
      { name: 'Sencillo', price: '$10.000', desc: 'Acompañado con papas francesas' },
      { name: 'Suizo', price: '$20.000' },
      { name: 'De La Casa', price: '$30.000', desc: 'Acompañado con papas francesas' }
    ]
  },
  cerdo: {
    title: 'Cerdo',
    items: [
      { name: 'Costilla BBQ', price: '$40.000' },
      { name: 'Chuletica', price: '$40.000' },
      { name: 'Gajos de cerdo', price: '$37.000' },
      { name: 'Lomito en salsa de champiñones', price: '$40.000' },
      { name: 'Lomito a la milanesa', price: '$40.000' },
      { name: 'Lomito gratinado', price: '$42.000' },
      { name: 'Lomito hawaiano', price: '$42.000' },
      { name: 'Ceviche de chicharrón', price: '$30.000' }
    ]
  },
  arroces: {
    title: 'Arroces y Risottos',
    items: [
      { name: 'Arroz con pollo', price: '$30.000' },
      { name: 'Arroz con cerdo', price: '$30.000' },
      { name: 'Arroz con res', price: '$30.000' },
      { name: 'Arroz cubano', price: '$35.000' },
      { name: 'Arroz oriental', price: '$35.000' },
      { name: 'Arroz con camarones', price: '$47.000' },
      { name: 'Arroz mixto', price: '$37.000' },
      { name: 'Arroz con mariscos', price: '$47.000' },
      { name: 'Risotto de pollo', price: '$37.000' },
      { name: 'Risotto marinero (camarón)', price: '$38.000' }
    ]
  },
  pollos: {
    title: 'Pollos',
    items: [
      { name: 'Pechuga a la brasa', price: '$38.000' },
      { name: 'Filete de pechuga', price: '$40.000' },
      { name: 'Pechuga a la milanesa', price: '$40.000' },
      { name: 'Pechuga hawaiana', price: '$40.000' },
      { name: 'Pechuga en salsa de champiñones', price: '$42.000' },
      { name: 'Pechuga gratinada', price: '$42.000' },
      { name: 'Pechuga tres quesos', price: '$42.000' }
    ],
    extra: 'Todas acompañadas con papas francesas y ensalada'
  },
  entradas: {
    title: 'Entradas',
    items: [
      { name: 'Quibbes', price: '$18.000' },
      { name: 'Tahine', price: '$14.000' },
      { name: 'Patacones con queso', price: '$12.000' },
      { name: 'Patacones con hogao', price: '$12.000' },
      { name: 'Canasticas de pollo', price: '$30.000' },
      { name: 'Canasticas de camarón', price: '$30.000' },
      { name: 'Chuzos de queso', price: '$12.000' }
    ]
  },
  carnes: {
    title: 'Carnes',
    items: [
      { name: 'Baby Beef', price: '$40.000' },
      { name: 'Punta de anca', price: '$50.000' },
      { name: 'Churrasco argentino', price: '$50.000' },
      { name: 'Churrasco a la mexicana', price: '$60.000' },
      { name: 'Churrasco de solomito', price: '$55.000' },
      { name: 'Solomito en salsa de champiñones', price: '$45.000' },
      { name: 'Solomito hawaiano', price: '$45.000' },
      { name: 'Solomito gratinado', price: '$45.000' },
      { name: 'Solomito tres quesos', price: '$45.000' },
      { name: 'Sobrebarriga a la brasa', price: '$35.000' },
      { name: 'Sobrebarriga a la criolla', price: '$40.000' },
      { name: 'Lengua a la brasa', price: '$40.000' },
      { name: 'Lengua a la criolla', price: '$41.000' },
      { name: 'Solomito a la pimienta', price: '$45.000' },
      { name: 'Filet Mignon', price: '$47.000' }
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
  untablesSal: {
    title: 'Untables de sal',
    items: [
      { name: 'Dip de tocineta', price: '$18.000' },
      { name: 'Dip de atún', price: '$18.000' },
      { name: 'Dip de jamón', price: '$12.000' },
      { name: 'Dip de cebolla', price: '$12.000' }
    ],
    extra: 'Todos acompañados con tostadas'
  },
  untablesDulce: {
    title: 'Untables de dulce',
    items: [
      { name: 'Dip de mora', price: '$17.000' },
      { name: 'Dip de fresa', price: '$17.000' },
      { name: 'Dip de durazno', price: '$17.000' },
      { name: 'Dip de piña', price: '$17.000' }
    ],
    extra: 'Todos acompañados con tostadas'
  },
  picadas: {
    title: 'Picadas',
    items: [
      { name: 'Picada Suiza', price: 'Consultar' },
      { name: 'Picada de chicharrón', price: 'Consultar' },
      { name: 'Picada Natural', price: 'Consultar' }
    ],
    extra: 'Preguntar por tamaños, precios y acompañamientos'
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
