//8. ¿Es Navidad?:
//Realizar un programa que pida cargar una fecha cualquiera, luego verificar si dicha fecha corresponde a Navidad.

const fecha = prompt("Ingrese una fecha. Ej: 2021-12-20");

const fechaCum = new Date(fecha);

if (fechaCum.getDate() === 24 && fechaCum.getMonth() === 11) {
  alert("Feliz Navidad! :D");
} else {
  alert("No hay navidad :(");
}
