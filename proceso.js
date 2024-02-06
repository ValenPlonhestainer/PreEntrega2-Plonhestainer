// entrada de cantidad de zapatillas
const cantidadDeZapatillas = prompt("Ingrese la cantidad de zapatillas a comprar:");

// variables y objetos necesarios
const precios = [5000, 7000, 9000];
const descuentoMayorista = 0.2;

// calcular subtotal
const calcularSubtotal = (cantidad, precio) => {
  const subtotal = cantidad * precio;
  return subtotal;
};

// calcular descuento por compra mayorista
const calcularDescuentoMayorista = (subtotal) => {
  let descuento = 0;
  if (subtotal > 10000) {
    descuento = subtotal * descuentoMayorista;
  }
  return descuento;
};

// calcular total a pagar
const calcularTotal = (subtotal, descuento) => {
  const total = subtotal - descuento;
  return total;
};

// obtener el modelo seleccionado por el usuario
const obtenerModelo = () => {
  const modelo = document.getElementById("model").value;
  return modelo;
};

// obtener la cantidad de zapatillas ingresada por el usuario
const obtenerCantidad = () => {
  const cantidad = parseInt(document.getElementById("quantity").value);
  return cantidad;
};

// obtener el precio del modelo seleccionado
const obtenerPrecio = (modelo) => {
  const precio = precios[modelo];
  return precio;
};

// actualizar el resultado en el DOM
const actualizarResultado = (subtotal, descuento, total) => {
  const resultado = document.getElementById("result");
  resultado.innerHTML = `
    <p>Subtotal: $${subtotal}</p>
    <p>Descuento: $${descuento}</p>
    <p>Total: $${total}</p>
  `;
};

// función principal que realiza todo el proceso
const realizarProceso = () => {
  const modelo = obtenerModelo();
  const cantidad = obtenerCantidad();
  const precio = obtenerPrecio(modelo);
  const subtotal = calcularSubtotal(cantidad, precio);
  const descuento = calcularDescuentoMayorista(subtotal);
  const total = calcularTotal(subtotal, descuento);
  actualizarResultado(subtotal, descuento, total);
};

// asociar la función realizarProceso al evento de clic del botón "Calcular"
document.getElementById("calculate").addEventListener("click", realizarProceso);