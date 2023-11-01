let nombre = prompt("Hola! ingresa tu nombre, por favor!");
let apellido = prompt("Ahora tu apellido.");
let edad = parseInt(prompt("Cual es tu edad? Gracias"));
let nombreChequeado = true;
let apellidoChequeado = true;

function checkearDatos() {
  while (nombre.length < 3 || nombreChequeado !== true) {
    nombre = prompt("Por favor ingresa tu nombre");
    nombreChequeado = /^[A-Za-z]+$/.test(nombre);
  }
  while (apellido.length < 3 || apellidoChequeado !== true) {
    apellido = prompt("Por favor ingresa tu apellido");
    apellidoChequeado = /^[A-Za-z]+$/.test(apellido);
  }
  if (edad >= 18) {
    alert("Bienvenido " + nombre + " " + apellido);
    console.log(
      "Usuario: " + nombre + " " + apellido + ", de " + edad + " años."
    );
  } else {
    alert("Volve cuando tengas 18! Saludos.");
    console.log(
      "Usuario: " + nombre + " " + apellido + ", de " + edad + " años."
    );
  }
}

checkearDatos();

alert(
  "Tener en cuenta que es un ciclo de 3 interacciones, pero si el resultado es 5 se corta el ciclo. (Ejemplo: Ingresando 5 - 2 - 2)"
);
let base = parseInt(
  prompt("Ingrese el numero que sera la base para cada interaccion")
);
let resultado = 0;

for (let i = 0; i < 3; i++) {
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
