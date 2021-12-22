//9. Todos iguales:
//Se ingresan tres valores por teclado, si todos son iguales se imprime la suma del primero con el segundo y a este resultado se lo multiplica por el tercero.

const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));
const num3 = parseInt(prompt("Ingrese el tercer número"));

const resultado = (num1 + num2) * num3;

if (num1 === num2 && num1 === num3) {
  alert(`El resultado es: ${resultado}`);
} else if (num1 !== num2 && num1 !== num3) {
  alert("Los números no son iguales");
}
