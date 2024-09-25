// Conceptos base para poder iniciar en JS (JavaScript)

// 1. Variable: Es la forma en la que podemos almacenar valores

// 1.1 Formas de crear una variables (3)

// 1.1.1 Forma 1: var

// var => Prefijo que indica que voy a crear una variable
// direccion => El nombre de la variable
// "Av mi casa 123"; => El valor que estamos almacenando en la variable

// Nota: Los textos en JS son conocidos como string
// Nota: Los numeros en JS son conocidos como number

// var es la forma más antigua de crear variables

var direccion = "Av mi casa 123"; // string
var edad = 22; // number
var altura = 1.74; // number
var tempatura = -5; // number

direccion = "nueva direccion";
edad = 24;
var edad = 30;

// var direccion = "av siempre 123";

// En el nueva version que se lanzo en el 2014 se decidio que ya NO se use var

// 1.1.2 Existe una "nueva" forma de crear variables y es usando el prefijo let
// Nota: Usamos let cuando queremos crear variables y sabes que el valor de estas
// puede cambiar en el futuro
// En otras palabras es una variable MUTABLE
let numeroDeCelular = "989773212";
numeroDeCelular = "55555";

let peso = 100;
peso = 85;

// 1.1.3 Existe otra forma de crear variable, pero que su valor sea INMUTABLE, es decir su
// valor no cambia, para poder crear estas variables usamos el prefijo const
const dni = "8888888";

// camell case
const primerNombre = "Linder";
const promedioPonderadoTrimestral = 19;
// como el valor de la variable no cambio hacer esto es un ERROR
// dni = "999999";

// concatenacion
// queremos unir el valor de variables
console.log(numeroDeCelular + " " + dni);
// alert(numeroDeCelular + " " + dni);

// la funcion prompt retorna un string
const preguntaNombre = prompt("Cual es tu nombre?");
const preguntaEdad = prompt("Cual es tu edad?");
const preguntaColor = prompt("Escribe el color del fondo");

document.body.style.backgroundColor = preguntaColor;

// Esto sirve para poder imprimir en consola el valor de estas 2 variables
console.log("preguntaNombre", typeof preguntaNombre);
console.log("preguntaEdad", typeof preguntaEdad);

// Queremos crear un programa que reciba la edad del usuario y no indique si es
// mayor o menor de edad

// cuando queremos crear una condicion
// if => si (condicion)
// else => si no (caso contrario)
// no se puede comparar un string con un number
// como convertimos un string -> number : parseInt("18") => 18
// "20.5" parseFloat(2)
// Number("100.5") =>
// Number("100") =>
// if (parseInt(preguntaEdad) >= 18) {
//   alert("Mayor de edad");
// } else {
//   alert("Menor de edad");
// }

/**
 * Caules son las caracteristicas de una funcion?
 * - El nombre debe ser un verbo infinitivo
 * - Dentro de las llaves va el bloque de codigo a ejecutar
 * - una funcion siempre debe usar el prefijo `function`
 * - lo que esta dentro de los parentesis son parametros
 * - no hay limites en los parametros
 */

// Este un MAL nombre
// function calMayorE() {}

// Este un CORRECTO nombre
function calcularSiEsMayorDeEdad() {
  // cuando preguntamos sobre la edad
  if (parseInt(preguntaEdad) >= 18) {
    alert("La persona es MAYOR de edad");
  } else {
    alert("La persona es MENOR de edad");
  }
}
// Llamar a la funcion
calcularSiEsMayorDeEdad();
