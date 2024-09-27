// Bucles
// while: es una estructura repetitiva que tiene una condición

let n = 0;

while (n < 100) {
  // solo quiero imprimir los numeros pares
  // para hallar el residuo usamos el %
  const residuo = n % 2;
  if (residuo === 0) {
    console.log(n);
  }

  n += 1;
}

while (n < 100) {
  console.log(n);

  n += 2;
}

// preguntarle al usuario

while (true) {
  const pregunta = prompt("Cuanto es la suma de 10 + 45: respuesta 55");
  if (parseInt(pregunta) === 55) {
    // rompemos el bucle
    break;
  }
}

const cantidadDeGatos = prompt("Cuantas veces quieres ver al gato");

// vamos a crear un contador que nos permita ejecutar una accion hasta llegar a un cierto limite
let contador = 0;

// while (contador < parseInt(cantidadDeGatos)) {

// contador += 1;
// }
// while (0 < 5) {} // true
// while (1 < 5) {} // true
// while (2 < 5) {} // true
// while (3 < 5) {} // true
// while (4 < 5) {} // true
// while (5 < 5) {} // false
while (contador < parseInt(cantidadDeGatos)) {
  document.write("<img src='./images/gatito.jpeg' width='200' />");
  document.write("<h4>" + contador + "</h4>");
  contador += 1;
}
