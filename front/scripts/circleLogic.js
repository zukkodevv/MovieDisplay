window.onload = function () {
  var circulos = document.querySelectorAll(".mainBtn");
  var i = 0; // Inicializamos un contador
  var circuloAnterior = null; // Inicializamos una referencia al círculo anterior

  function cambiarCirculo() {
    // Restablecer estado del círculo anterior si existe
    if (circuloAnterior) {
      circuloAnterior.innerHTML = "⚬"; // Eliminar marca del círculo anterior
    }

    if (i < circulos.length) {
      circulos[i].innerHTML = "●"; // Marcar el círculo actual
      circuloAnterior = circulos[i]; // Actualizar referencia al círculo anterior
      i++; // Incrementamos el contador para pasar al siguiente círculo
    } else {
      clearInterval(intervalo); // Detenemos el intervalo cuando se cambien todos los círculos
    }
  }

  // Establecemos un intervalo para cambiar un círculo cada 10 segundos
  var intervalo = setInterval(cambiarCirculo, 10000);
};
