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
      { name: 'Salchicarne', price: '$25.000' },
      { name: 'Pinchos pollo', price: '$30.000' }
    ]
  },
  hamburguesas: {
    title: 'Hamburguesas',
    items: [
      { name: 'Sencilla', price: '$18.000', desc: 'Carne, tocineta, cebolla' },
      { name: 'Doble Carne', price: '$25.000' },
      { name: 'De La Casa', price: '$35.000', desc: 'Tocineta, cebolla caramelizada, tomate, lechuga, queso mozarella, pepinillos agridulces, Salsa de la Casa, papas francesas' }
    ]
  },
  perros: {
    title: 'Perros',
    items: [
      { name: 'Sencillo', price: '$15.000' },
      { name: 'Suizo', price: '$20.000' },
      { name: 'De La Casa', price: '$30.000' }
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
