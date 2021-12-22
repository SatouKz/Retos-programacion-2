//14. Rango de variación:
//Escribir un programa en el cual: dada una lista de tres valores numéricos distintos se calcule e informe su rango de variación (debe mostrar el mayor y el menor de ellos).

const num1 = parseInt(prompt("Ingrese un numero"));
const num2 = parseInt(prompt("Ingrese un numero"));
const num3 = parseInt(prompt("Ingrese un numero"));

if (num1 < num2 && num1 < num3) {
  alert(`El menor es ${num1}`);
} else if (num2 < num3 && num2 < num1) {
  alert(`El menor es ${num2}`);
} else if (num2 > num3 && num1 > num3) {
  alert(`El menor es ${num3}`);
}

if (num1 > num2 && num1 > num3) {
  alert(`El mayor es ${num1}`);
} else if (num2 > num1 && num2 > num3) {
  alert(`El mayor es ${num2}`);
} else if (num2 < num3 && num1 < num3) {
  alert(`El mayor es ${num3}`);
}
