//4. Tres números
//Se cargan por teclado tres números distintos. Mostrar por pantalla el mayor de ellos.

const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));
const num3 = parseInt(prompt("Ingrese el tercer número"));

if (num1 > num2 && num1 > num3) {
  alert(`El mayor es: ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  alert(`El mayor es: ${num2}`);
} else if (num3 > num1 && num3 > num2) {
  alert(`El mayor es: ${num3}`);
}
