// Hemos omitido los acentos en los comentarios por compatibilidad

var proximos = [];
var hoy;
var eventos;
var html = ""
var contenidoProx=[];

$(document).ready(function () {

  var value=0;
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
  hoy =resultado.fechaActual;
  eventos=resultado.eventos;

  for (var iterator of eventos) {
      if (iterator.fecha > hoy) {
          value +=1;
          proximos.push(iterator);
      }
  } 
  proximos = proximos.sort(function(x,y){
    if (x.fecha <= y.fecha){
      return 1;
    }
    return -1;
  });
  for(var j = 0; j < proximos.length; j++){
  contenidoProx.push( `<h2>${proximos[j].nombre}</h2>
                       <p>${proximos[j].fecha} - ${proximos[j].lugar}</p>
                       <p>Descripción: ${proximos[j].descripcion}</p>
                       <p>Precio: ${proximos[j].precio}</p>
                    `);
               try {
                  var detallespro=document.getElementById("proximos"+j);
                  detallespro.innerHTML=contenidoProx[j];
                  detallespro.addEventListener("click", proxEv);
                } catch (error) {
                 alert("indice por fuera de rango");
                }
    }   
  })
});

function proxEv(){
  document.getElementById("proximos").innerHTML ="";
}