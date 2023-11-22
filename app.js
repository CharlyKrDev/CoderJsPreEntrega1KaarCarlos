function obtenerNombreApellido(promptMessage) {
  let input = "";
  while (input.length < 3 || !/^[A-Za-z]+$/.test(input)) {
    input = prompt(promptMessage);
  }
  return input;
}

function verificarEdad(nombre, apellido, edad) {
  if (edad >= 18) {
    alert(`Bienvenido ${nombre} ${apellido}`);
    console.log(`Usuario: ${nombre} ${apellido}, de ${edad} años.`);
  } else {
    alert("Volvé cuando tengas 18! Saludos.");
    console.log(`Usuario: ${nombre} ${apellido}, de ${edad} años.`);
  }
}

let nombre = obtenerNombreApellido("Hola! Ingresa tu nombre, por favor!");
let apellido = obtenerNombreApellido("Ahora tu apellido.");
let edad = parseInt(prompt("Cual es tu edad? Gracias"));

verificarEdad(nombre, apellido, edad);

alert("Tener en cuenta que es un ciclo de 3 interacciones, pero se corta si el resultado es 5. (Ejemplo: Ingresando 5 - 2 - 2)");
let base = parseInt(prompt("Ingrese el número que será la base para cada interacción"));
let resultado = 0;

for (let i = 0; i < 3; i++) {
  let multiplicador = parseInt(prompt("Ingrese el número que va a multiplicar la base"));
  let divisor = parseInt(prompt("Ingrese el número que va a dividir"));
  resultado = (base * multiplicador) / divisor;

  if (isNaN(base)) {
    base = parseInt(prompt("Ingrese el número que será la base para cada interacción"));
  } else if (resultado == 5) {
    break;
  } else if (isNaN(resultado)) {
    alert("Los valores ingresados no son correctos, vuelve a intentar");
  } else {
    alert(resultado);
    console.log(resultado);
  }
}

const tuAnimalEs = [
  {
    Animal: "el Fénix", id: 1,
    Origen: "Grecia",
    Caracteristicas: "ser un ave del color del fuego",
    Habilidad: "resurgir de sus cenizas",
    Fortaleza: "la sabiduría y la reencarnación",
    Debilidad: "su propio fuego",
  },
  {
    Animal: "la Esfinge", id: 2,
    Origen: "Egipto",
    Caracteristicas: "tener cabeza de mujer y cuerpo de león",
    Habilidad: "ser super inteligente",
    Fortaleza: "la inteligencia y su capacidad para plantear y resolver acertijos",
    Debilidad: "su egocentrismo",
  },
  {
    Animal: "el Dragón", id: 3,
    Origen: "China",
    Caracteristicas: "tener alas y escamas color jade",
    Habilidad: "controlar el fuego",
    Fortaleza: "su fuerza y resistencia",
    Debilidad: " que es vulnerable a la magia",
  },
  {
    Animal: "el Pegaso", id: 4,
    Origen: "Grecia",
    Caracteristicas: "ser un caballo alado color marfil",
    Habilidad: "volar y viajar por las estrellas",
    Fortaleza: "su gran velocidad y belleza",
    Debilidad: "que es vulnerable a las flechas y armas de hierro",
  },
  {
    Animal: "el Unicornio", id: 5,
    Origen: "Europa", 
    Caracteristicas: " su cuerno en la frente y capacidad de curar cualquier enfermedad",
    Habilidad: "su pureza y su capacidad de comunicarse telepáticamente",
    Fortaleza: "Pureza, bondad y magia",
    Debilidad: "que es vulnerable a la magia negra",
  },
];

const eligeTuAnimal = parseInt(
  prompt("Ingrese un número del 1 al 5 para saber qué animal mitológico te representa")
);

const animalElegido = tuAnimalEs.find(animal => animal.id === eligeTuAnimal);

if (animalElegido) {
  alert(`Has elegido ${animalElegido.Animal}`);
} else {
  alert("Número no válido. Por favor, elige un número del 1 al 5.");
};

const masDeTuAnimal = prompt(
  "Querés saber mas de tu animal? (si/no)"
).toUpperCase();
function saberMas() {
  if (masDeTuAnimal === "SI") {
    alert(
      "Tu animal es " +
      animalElegido.Animal +
      " tiene origen en " +
      animalElegido.Origen +
      " se caracteriza por " +
      animalElegido.Caracteristicas +
      ", tiene la habilidad de " +
      animalElegido.Habilidad +
      ", sus fortalezas son " +
      animalElegido.Fortaleza +
      ", y por ultimo su debilidad es " +
      animalElegido.Debilidad +
      ". Saludos"
    );
  } else if (masDeTuAnimal === "NO") {
    alert("Vos te lo perdés!.");
  } else {
    alert("Era fácil la indicación, Continuemos.");
  }
};

saberMas(animalElegido);

class Animales {
  constructor(
    Animal,
    Origen,
    Caracteristicas,
    Habilidad,
    Fortaleza,
    Debilidad
  ) {
    this.Animal = Animal;
    this.Origen = Origen;
    this.Caracteristicas = Caracteristicas;
    this.Habilidad = Habilidad;
    this.Fortaleza = Fortaleza;
    this.Debilidad = Debilidad;
  }
}

alert('Ahora vas a crear un animal mitológico');

const nombreDeAni = validarInput("Ingresa el nombre de tu animal mitológico");
const origenAnimal = validarInput("Tu animal tiene origen en...");
const caracteristicasAnimal = validarInput("Tu animal se caracteriza por...");
const habilidadAnimal = validarInput("Las habilidad de tu animal es...");
const fortalezaAnimal = validarInput("Las fortalezas de tu animal son...");
const debilidadAnimal = validarInput("La debilidad de tu animal es...");

tuAnimalEs.push(
  new Animales(
    nombreDeAni,
    origenAnimal,
    caracteristicasAnimal,
    habilidadAnimal,
    fortalezaAnimal,
    debilidadAnimal,
  )
);

function validarInput(mensaje) {
  let input;
  do {
    input = prompt(mensaje);
  } while (!esLetra(input));
  return input;
}

function esLetra(texto) {
  return /^[a-zA-ZñÑ\s]+$/.test(texto);
};




const nuevoAnimal = prompt("Querés conocer a tu animal? (si/no)").toUpperCase();
function animalIngresado() {
  if (nuevoAnimal === "SI") {
    alert(
      "Tu animal es " +
      nombreDeAni +
      " tiene origen en " +
      origenAnimal +
      " se caracteriza por " +
      caracteristicasAnimal +
      ", tiene la habilidad de " +
      habilidadAnimal +
      ", sus fortalezas son " +
      fortalezaAnimal +
      ", y por ultimo su debilidad es " +
      debilidadAnimal +
      ". Saludos, gracias por participar."
    );
  } else if (nuevoAnimal === "NO") {
    alert("La proxima sera. Gracias por participar.");
  } else
    alert(
      "Gracias por participar, una pena que no hayas entendido la consigna."
    );
}
animalIngresado(tuAnimalEs[5]);

