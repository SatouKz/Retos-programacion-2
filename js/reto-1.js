//1. Mayor y Menor:

//Realizar un programa que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario informar el producto y la división del primero respecto al segundo.

const num1 = parseInt(prompt(`Ingrese un número`));
const num2 = parseInt(prompt(`Ingrese un número`));

if (num1 > num2) {
  alert(`La suma es: ${num1 + num2} y la diferencia es: ${num1 - num2}`);
} else {
  alert(`El producto es: ${num1 * num2} y la division es: ${num1 / num2}`);
}
