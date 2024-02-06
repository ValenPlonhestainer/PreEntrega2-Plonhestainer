// Precios de los modelos
const PRICES = {
  modelo1: 5000,
  modelo2: 7000,
  modelo3: 9000
};

// Función para calcular el total de la venta
const calculateTotal = (model, quantity) => {
  const price = PRICES[model];
  const total = price * quantity;
  return total;
};

// Función para calcular el precio de cada cuota
const calculateInstallment = (total, installments) => {
  const rate = installments > 1 ? 1.1 : 1;
  const installmentPrice = total * rate / installments;
  return installmentPrice;
};

// Función para actualizar el resultado en el DOM
const updateResult = () => {
  const model = document.getElementById("model").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const installments = parseInt(document.getElementById("installments").value);

  const total = calculateTotal(model, quantity);
  const installmentPrice = calculateInstallment(total, installments);

  let result = `Total: $${total}`;
  if (installments > 1) {
    result += ` (${installments} cuotas de $${installmentPrice.toFixed(2)} cada una)`;
  }

  document.getElementById("result").textContent = result;
};

// Evento de clic en el botón "Calcular"
document.getElementById("calculate").addEventListener("click", updateResult);

// Evento de clic en el botón "Guardar"
document.getElementById("save").addEventListener("click", () => {
  const model = document.getElementById("model").value;
  const quantity = parseInt(document.getElementById("quantity").value);
  const installments = parseInt(document.getElementById("installments").value);

  // Crear objeto con los datos de la venta
  const venta = {
    model,
    quantity,
    installments
  };

  // Convertir el objeto a formato JSON
  const ventaJSON = JSON.stringify(venta);

  // Almacenar en el Local Storage
  localStorage.setItem("venta", ventaJSON);

  // Notificación de éxito
  alert("Venta guardada correctamente");
});

// Cargar venta guardada del Local Storage al cargar la página
window.addEventListener("load", () => {
  const ventaJSON = localStorage.getItem("venta");

  if (ventaJSON) {
    // Convertir el JSON a objeto
    const venta = JSON.parse(ventaJSON);

    // Restaurar los valores en el formulario
    document.getElementById("model").value = venta.model;
    document.getElementById("quantity").value = venta.quantity;
    document.getElementById("installments").value = venta.installments;
  }
});