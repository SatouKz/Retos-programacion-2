//6. 3 cifras o mayor:
//Confeccionar un programa que permita cargar un número entero positivo de hasta tres cifras y muestre un mensaje indicando si tiene 1, 2, o 3 cifras. Mostrar un mensaje de error si el número de cifras es mayor.

const num = prompt("Ingresar un número entre 0 y 999");

if (parseInt(num) <= 9) {
  alert(`Número de un digito`);
} else if (parseInt(num) <= 99) {
  alert(`Número de dos digitos`);
} else if (parseInt(num) <= 999) {
  alert(`Número de tres digitos`);
} else if (parseInt(num) > 999) {
  alert(`Es re grande este número bro`);
}

//Solución con switch

// switch (num.length) {
//   case 1:
//     alert("Es un digito");
//     break;
//   case 2:
//     alert("Son dos digitos");
//     break;
//   case 3:
//     alert("Son tres digitos");
//     break;
//   default:
//     alert("ERROR en el ingreso");
// }
