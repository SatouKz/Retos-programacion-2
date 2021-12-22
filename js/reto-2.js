// 2. Nota del Alumno:
//Se ingresan tres notas de un alumno, si el promedio es mayor o igual a siete mostrar un mensaje "Promocionado".

const nota1 = parseInt(prompt("Ingrese la 1er nota"));
const nota2 = parseInt(prompt("Ingrese la 2da nota"));
const nota3 = parseInt(prompt("Ingrese la 3ra nota"));

const promedio = (nota1 + nota2 + nota3) / 3;

if (promedio >= 7) {
  alert("Aprobado");
} else {
  alert("Desaprobrado");
}
