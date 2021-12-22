//5. Positivo, nulo o negativo:
//Se ingresa por teclado un valor entero, mostrar una leyenda que indique si el número es positivo, nulo o negativo.

const num = parseInt(prompt("Ingresar número"));

if (num === 0) {
  alert(`es un número nulo`);
} else if (num > 0) {
  alert(`es un número positivo`);
} else if (num < 0) {
  alert(`es un número negativo`);
}
