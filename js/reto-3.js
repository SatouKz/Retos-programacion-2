// 3. Uno o dos dígitos:
//Se ingresa por teclado un número positivo de uno o dos dígitos (1..99) mostrar un mensaje indicando si el número tiene uno o dos dígitos. Tener en cuenta que condición debe cumplirse para tener dos dígitos.

const num = parseInt(prompt("Ingrese un numero del 1 al 99"));

//Forma simple
// if (num.length === 1) {
//   alert("Es de un digito");
// } else {
//   alert("Es de dos digitos");
// }

//Forma matemática
if (parseInt(num) <= 9) {
  alert("Es de un solo digito");
} else if (parseInt(num) > 9 && parseInt(num) <= 99) {
  alert("Es de dos digitos");
} else if (parseInt(num) > 99 && parseInt(num) <= 999) { //por si ingresan numeros de 3 digitos
  alert("Es de mas de dos digitos");
}
