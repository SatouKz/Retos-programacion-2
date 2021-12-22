//11. Alguno menor a 10:
//Se ingresan por teclado tres números, si al menos uno de los valores ingresados es menor a 10, imprimir en pantalla la leyenda "Alguno de los números es menor a diez".

const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));
const num3 = parseInt(prompt("Ingrese el tercer número"));

if (num1 < 10 || num2 < 10 || num3 < 10) {
  alert("Alguno de los números es menor a 10");
} else {
  alert("Alguno de los números es mayor a 10");
}
