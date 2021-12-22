//12. Punto en el plano:
//Escribir un programa que pida ingresar la coordenada de un punto en el plano, es decir dos valores enteros x e y (distintos a cero).
//Posteriormente imprimir en pantalla en que cuadrante se ubica dicho punto.
//(1º Cuadrante si x > 0 Y y > 0 , 2º Cuadrante: x < 0 Y y > 0, etc.)

const x = parseInt(prompt("Ingresar la coordenada X"));
const y = parseInt(prompt("Ingresar la coordenada Y"));

if (x > 0 && y > 0) {
  alert("1° Cuadrante");
} else if (x < 0 && y > 0) {
  alert("2° Cuadrante");
} else if (x < 0 && y < 0) {
  alert("3° Cuadrante");
} else if (x > 0 && y < 0) {
  alert("4° Cuadrante");
}
