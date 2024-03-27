const CarritoCompra = require("../index");

const carritoCompra = new CarritoCompra();

describe("tests para la clase CarritoCompra", () => {
  it("Debería devolver el subtotal del producto añadido", () => {
    carritoCompra.agregarProducto({
      name: "ProductoC",
      price: 20,
      quantity: 1,
    });
    //* Realizamos el método agregarProducto de la clase carritocompra para que contenga un producto al que le pueda calcular el total.
    expect(carritoCompra.calcularTotal()).toBe(20);
    //* Ahora realizamos el test para verificar sí cuándo realizamos el método calcularTotal de la instancia da cómo resultado 20 que sería el resultado del precio del producto por la cantidad.
    //TEST PASADO
  });
  it("Debería demostrar que se agrego un producto exitosamente", () => {
    carritoCompra.agregarProducto({
      name: "ProductoC",
      price: 20,
      quantity: 1,
    });
    //* Agregamos un producto a la instancia de carritoCompra para poder verificar que se agregó después (Recordar que el scope del test anterior si afecta a este por lo que el largo deben ser 2).
    expect(carritoCompra.products.length).toBe(2);
    // TEST PASADO
  });
  it("Debería demostrar que el descuento se aplico correctamente", () => {
    expect(carritoCompra.aplicarDescuento(15)).toBe(34);
    //* Acá el valor que se recibe por el metodo de suma es 40, debido a que se agregó un nuevo producto en el it anterior, por lo que el descuento de 15% da un total de 34
    // TEST PASADO
  });
});

//PRODUCTOS
// ({ name: "ProductoA", price: 20, quantity:1})
// ({ name: "ProductoB", price: 20, quantity:1})
// ({ name: "ProductoC", price: 20, quantity:1})
