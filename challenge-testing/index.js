class CarritoCompra {
  //* Se define una clase llamada CarritoCompra
  constructor() {
    this.products = [];
    //* Se define un constructor para que cada instancia de carritocompra contenga un array vacío que servira de almacen para productos.
  }
  agregarProducto(product) {
    //* Creamos un método agregar producto que recibe un objeto producto cómo parametro.
    this.products.push(product);
    //* Le añadimos el producto al array vacío que sirve de almacen.
  }
  calcularTotal() {
    //* Le añadimos un método que va a calcular el total de los productos.
    let total = 0;
    //* Definimos una variable total para poder retornarla a modo de precio después.

    for (let item of this.products) {
      //* Hacemos un bucle for para poder hacer la operación para cada objeto prodcuto que haya.
      total += item.price * item.quantity;
      //* La operación del precio por la cantidad.
    }
    return total;
    //* Devolvemos el resultado de la operación.
  }
  aplicarDescuento(porcentaje) {
    //* Creamos un método para la clase que le aplique un descuento pasado cómo argumento.
    const subtotal = this.calcularTotal();
    //* Creamos una constante que almacene el resultado de la operación de suma para obtener el total antes del descuento
    const descuento = this.calcularTotal() * (porcentaje / 100);
    //* Calculamos el descuento según el precio que nos dió la operación de suma y el porcentaje dado.
    const total = subtotal - descuento;
    //* Le aplicamos el descuento al total que nos había devuelto antes en la operación de suma.
    return total;
    //* Devolvemos el total.
  }
}

module.exports = CarritoCompra;
