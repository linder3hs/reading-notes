// TRUCO: Si queremos verificar que nuestro archivo JS este conectado con nuestro HTML

// alert("Funciona");

// VARIABLES:

// INMUTABLES: Su valor no cambia
const dni = "9999999";

// MUTABLES: Su valor cambia
let edad = 0;
edad = 20;
edad = 40;
edad = 55;

// crear una funcion que se encargue de recibir 2 numeros y retornar la suma
function sumar2Numeros(numero1, numero2) {
  console.log("Funcion para sumar numeros");
  const suma = numero1 + numero2;
  console.log(suma);
}

sumar2Numeros(10, 5);
// Podemos usar una funcion n veces
sumar2Numeros(1223, 3412);

// const numeroDelUsuario1 = parseInt(prompt("Ingres un número"));
// const numeroDelUsuario2 = parseInt(prompt("Ingres otro número"));
// sumar2Numeros(numeroDelUsuario1, numeroDelUsuario2);

// crear una funcion que reciba un numero y determine si este es par o impar
function determinarNumeroParOImpar(numero) {
  const residuo = numero % 2;
  if (residuo === 0) {
    console.log("El numero " + numero + " es par");
  } else {
    console.log("El numero " + numero + " es impar");
  }
}

determinarNumeroParOImpar(100); // par
determinarNumeroParOImpar(99); // impar
determinarNumeroParOImpar(32); // par
determinarNumeroParOImpar(5); // impar

// Crear una funcion que me permita hallar el are de un circulo
// Formula: PI * R"2
function calcularAreaDeCirculo(radio) {
  const area = Math.PI * Math.pow(radio, 2);
  console.log(area);
}

calcularAreaDeCirculo(10);

/**
 * Agrega una validación al input (prompt) del usuario para ver si el valor que estas
 * recibiendo es un valor aceptable. En caso contrario, muestra al usuario un
 * mensaje de error y una segunda oportunidad para ingresar un valor adecuado.
 */

function validarElNombreDeUsuario(nombre) {
  /**
   * que tenga vocales
   * que no sea mayor a de 15 caracteres
   * que no sea un numero
   */
  const vocales = "aeiou";

  let validacionVocales = false;
  let validacionCaracteres = false;
  let validacionNumero = false;

  for (let letra of nombre) {
    if (vocales.split("").includes(letra)) {
      validacionVocales = true;
    }
  }

  const cantidadDeCaracteres = nombre.length;

  if (cantidadDeCaracteres < 15) {
    validacionCaracteres = true;
  }

  const conversionANumero = parseInt(nombre);
  if (isNaN(conversionANumero)) {
    validacionNumero = true;
  }

  console.log("validacion vocales", validacionVocales);
  console.log("validacion caracteres", validacionCaracteres);
  console.log("validacion numero", validacionNumero);
  // && = y
  if (
    validacionVocales === true &&
    validacionCaracteres === true &&
    validacionNumero === true
  ) {
    console.log("El usuario cumple con todas las reglas");
  } else {
    console.log("El usuario NO cumple con todas las reglas");
  }
}

validarElNombreDeUsuario("Pepe");
console.log("---------");
validarElNombreDeUsuario("1323232");

const nombreDeUsuario = prompt("Ingrese su nombre de usuario");
validarElNombreDeUsuario(nombreDeUsuario);
