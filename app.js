let nombre = prompt("Hola! ingresa tu nombre, por favor!");
let apellido = prompt("Ahora tu apellido.");
let edad = parseInt(prompt("Cual es tu edad? Gracias"));
let nombreChequeado = true;
let apellidoChequeado = true;

function chequearDatos(nombre, apellido, edad) {
  while (nombre.length < 3 || nombreChequeado !== true) {
    nombre = prompt("Por favor ingresa tu nombre");
    nombreChequeado = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]+$/.test(nombre);
  }
  while (apellido.length < 3 || apellidoChequeado !== true) {
    apellido = prompt("Por favor ingresa tu apellido");
    apellidoChequeado = /^[A-Za-zÁáÉéÍíÓóÚúÜüÑñ]+$/.test(apellido);
  }
  if (edad >= 18) {
    alert("Bienvenido" + "  " + nombre + "  " + apellido);
    console.log(nombre + " " + " " + apellido + " " + edad);
  } else {
    alert("Volve cuando tengas 18! Saludos.");
    console.log(nombre + " " + " " + apellido + " " + edad);
  }
}
chequearDatos(nombre, apellido, edad);

alert(
  "Tener en cuenta que es un ciclo de 10 interacciones, pero si el resultado es 5 se corta el ciclo"
);
let base = parseInt(
  prompt("Ingrese el numero que sera la base para cada interaccion")
);
let resultado = 0;

for (let i = 0; i < 10; i++) {
  let multiplicador = parseInt(
    prompt("Ingrese el numero que va a multiplicar la base")
  );
  let divisor = parseInt(prompt("Ingrese el numero que va a dividir"));
  resultado = (base * multiplicador) / divisor;

  if (isNaN(base)) {
    base = parseInt(
      prompt("Ingrese el numero que sera la base para cada interaccion")
    );
  } else if (resultado == 5) {
    break;
  } else if (resultado === undefined || resultado === null || isNaN(resultado)) {
    alert("Los valores ingresados no son correctos, volvelo a intentar");
  } else {
    alert(resultado);
    console.log(resultado);
  }
}
