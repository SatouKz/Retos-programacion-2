//13. Sueldo a pagar:
//De un operario se conoce su sueldo y los años de antigüedad. Se pide confeccionar un programa que lea los datos de entrada e informe:
// a) Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
// b)Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
// c) Si el sueldo es mayor o igual a 500 mostrar el sueldo en pantalla sin cambios.

const sueldo = parseInt(prompt("Ingrese el sueldo del operario"));
const añosAnt = parseInt(prompt("Ingrese los años de antigüedad"));

if (sueldo < 500 && añosAnt >= 10) {
  alert(`Sueldo a pagar: ${(sueldo * 20) / 100 + sueldo}`);
} else if (sueldo < 500 && añosAnt < 10) {
  alert(`Sueldo a pagar: ${(sueldo * 5) / 100 + sueldo}`);
} else if (sueldo >= 500) {
  alert("Sin Cambios");
}
