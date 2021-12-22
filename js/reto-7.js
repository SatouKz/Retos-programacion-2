//7. Nivel de Capacidad:
//Un postulante a un empleo, realiza un test de capacitación, se obtuvo la siguiente información: cantidad total de preguntas que se le realizaron y la cantidad de preguntas que contestó correctamente. Se pide confeccionar un programa que ingrese los dos datos por teclado e informe el nivel del mismo según el porcentaje de respuestas correctas que ha obtenido, y sabiendo que:
// Nivel máximo:  Porcentaje>=90%.
// Nivel medio:	   Porcentaje>=75% y <90%.
// Nivel regular:	   Porcentaje>=50% y <75%.
// Fuera de nivel: Porcentaje<50%.

const cantPreguntas = parseInt(
  prompt("Ingrese el número de preguntas realizadas")
);
const cantRespuestas = parseInt(
  prompt("Ingrese el número de preguntas respondidas")
);

const porcentaje = (cantRespuestas * 100) / cantPreguntas;

// Solución con else if

if (porcentaje >= 90) {
  alert("Nivel máximo");
} else if (porcentaje >= 75 && porcentaje < 90) {
  alert("Nivel medio");
} else if (porcentaje >= 50 && porcentaje < 75) {
  alert("Nivel regular");
} else if (porcentaje < 50) {
  alert("Debajo del promedio");
}

//Solución con If secuencial

if (porcentaje >= 90) alert("Nivel maximo");
if (porcentaje >= 75 && porcentaje < 90) alert("Nivel medio");
if (porcentaje >= 50 && porcentaje < 75) alert("Nivel regular");
if (porcentaje < 50) alert("Fuera de nivel");
