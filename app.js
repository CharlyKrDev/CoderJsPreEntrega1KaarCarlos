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
    Animal: "el Fénix",
    Origen: "Grecia",
    Caracteristicas: "ser un ave del color del fuego",
    Habilidad: "resurgir de sus cenizas",
    Fortaleza: "la sabiduría y la reencarnación",
    Debilidad: "su propio fuego",
  },
  {
    Animal: "la Esfinge",
    Origen: "Egipto",
    Caracteristicas: "tener cabeza de mujer y cuerpo de león",
    Habilidad: "ser super inteligente",
    Fortaleza: "la inteligencia y su capacidad para plantear y resolver acertijos",
    Debilidad: "su egocentrismo",
  },
  {
    Animal: "el Dragón",
    Origen: "China",
    Caracteristicas: "tener alas y escamas color jade",
    Habilidad: "controlar el fuego",
    Fortaleza: "su fuerza y resistencia",
    Debilidad: " que es vulnerable a la magia",
  },
  {
    Animal: "el Pegaso",
    Origen: "Grecia",
    Caracteristicas: "ser un caballo alado color marfil",
    Habilidad: "volar y viajar por las estrellas",
    Fortaleza: "su gran velocidad y belleza",
    Debilidad: "que es vulnerable a las flechas y armas de hierro",
  },
  {
    Animal: "el Unicornio",
    Origen: "Europa",
    Caracteristicas: " su cuerno en la frente y capacidad de curar cualquier enfermedad",
    Habilidad: "su pureza y su capacidad de comunicarse telepáticamente",
    Fortaleza: "Pureza, bondad y magia",
    Debilidad: "que es vulnerable a la magia negra",
  },
];

const eligeTuAnimal = parseInt(
  prompt("Un numero del 1 al 5 para saber que animal mitológico te representa")
);

function tuAnimalSera(eligeTuAnimal) {
  if (eligeTuAnimal == 1) {
    alert("Tu animal es " + tuAnimalEs[0].Animal);
    return (animalGuardado = tuAnimalEs[0]);
  } else if (eligeTuAnimal == 2) {
    alert("Tu animal es " + tuAnimalEs[1].Animal);
    return (animalGuardado = tuAnimalEs[1]);
  } else if (eligeTuAnimal == 3) {
    alert("Tu animal es " + tuAnimalEs[2].Animal);
    return (animalGuardado = tuAnimalEs[2]);
  } else if (eligeTuAnimal == 4) {
    alert("Tu animal es " + tuAnimalEs[3].Animal);
    return (animalGuardado = tuAnimalEs[3]);
  } else if (eligeTuAnimal == 5) {
    alert("Tu animal es " + tuAnimalEs[4].Animal);
    return (animalGuardado = tuAnimalEs[4]);
  } else {
    alert("Te quedaste sin animal, animal!");
  }
  
};
tuAnimalSera(eligeTuAnimal);

const masDeTuAnimal = prompt(
  "Querés saber mas de tu animal? (si/no)"
).toUpperCase();
function saberMas() {
  if (masDeTuAnimal === "SI") {
    alert(
      "Tu animal es " +
      animalGuardado.Animal +
      " tiene origen en " +
      animalGuardado.Origen +
      " se caracteriza por " +
      animalGuardado.Caracteristicas +
      ", tiene la habilidad de " +
      animalGuardado.Habilidad +
      ", sus fortalezas son " +
      animalGuardado.Fortaleza +
      ", y por ultimo su debilidad es " +
      animalGuardado.Debilidad +
      ". Saludos"
    );
  } else if (masDeTuAnimal === "NO") {
    alert("Vos te lo perdés!.");
  } else {
    alert("Era fácil la indicación, Continuemos.");
  }
};

saberMas(animalGuardado);

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
};

alert ('Ahora vas a crear un animal mitológico');

const nombreDeAni = 
prompt("Ingresa el nombre de tu animal mitológico");
const origenAnimal =
prompt("Ingresa el origen de tu animal mitológico");
const caracteristicasAnimal = 
prompt("Ingresa las características de tu animal mitológico");
const habilidadAnimal = 
prompt("Ingresa la habilidad de tu animal mitológico");
const fortalezaAnimal = 
prompt("Ingresa la fortaleza de tu animal mitológico");
const debilidadAnimal = 
prompt("Ingresa la debilidad de tu animal mitológico");

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



const nuevoAnimal = prompt("Querés conocer a tu animal? (si/no)").toUpperCase();
function animalIngresado() {
  if (nuevoAnimal === "SI") {
    alert(
      "Tu animal es " +
      tuAnimalEs[5].Animal +
      " tiene origen en " +
      tuAnimalEs[5].Origen +
      " se caracteriza por " +
      tuAnimalEs[5].Caracteristicas +
      ", tiene la habilidad de " +
      tuAnimalEs[5].Habilidad +
      ", sus fortalezas son " +
      tuAnimalEs[5].Fortaleza +
      ", y por ultimo su debilidad es " +
      tuAnimalEs[5].Debilidad +
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

