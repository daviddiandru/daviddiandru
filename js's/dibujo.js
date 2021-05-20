var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");


function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal) 
{
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}


function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var yI, xF;
  var xF2;
  var colorcito = "skyblue";

  /* Dibujar las líneas de los bordes */
  dibujarLinea(colorcito, 0, 0, 0, 300);
  dibujarLinea(colorcito, 0, 300, 300, 300);
  dibujarLinea(colorcito, 0, 0, 300, 0);
  dibujarLinea(colorcito, 300, 0, 300, 300);

for (var l = 0; l < lineas; l++) 
{
  yI = 10 * l;
  xF = 10 * (l + 1);
  xF2 = 300 - (l * 10);
  dibujarLinea(colorcito, 0, yI, xF, 300); // Esquina Inferior-Izquierda
  dibujarLinea(colorcito, 300, yI, xF2, 300); // Esquina Inferior-Derecha
  dibujarLinea(colorcito, xF2, 0, 0, xF); // Esquina Superior-Izquierda
  dibujarLinea(colorcito, 300, xF2, xF2, 0); // Esquina Superior-Derecha
  console.log("linea" + l);
}
}