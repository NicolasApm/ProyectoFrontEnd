// Hemos omitido los acentos en los comentarios por compatibilidad

//Define las variables que necesites

var pasados = [];
var proximos = [];
var hoy;
var eventos;
var html = ""
var contenidoPas=[];
var contenidoProx=[];

$(document).ready(function () {
  var value=0;
  $.ajax({
    url: "info.json"
  }).done(function(resultado){
  hoy =resultado.fechaActual;
  eventos=resultado.eventos;

  for (var iterator of eventos) {
      if (iterator.fecha < hoy) {
          value +=1;
          pasados.push(iterator);    
      } 
      if (iterator.fecha > hoy) {
          value +=1;
          proximos.push(iterator);  
      }
  } 
  
  pasados = pasados.sort(function(x,y){
    if (x.fecha <= y.fecha){
      return 1;
    }
    return -1;
  });
  proximos = proximos.sort(function(x,y){
    if (x.fecha <= y.fecha){
      return 1;
    }
    return -1;
  });
  for(var j = 0; j < 2; j++){
    
  contenidoPas.push( `<h2>${pasados[j].nombre}</h2>
                    <p>${pasados[j].fecha}</p>
                    <p>Descripción: ${pasados[j].descripcion}</p>
                    `);
  contenidoProx.push( `<h2>${proximos[j].nombre}</h2>
                    <p>${proximos[j].fecha}</p>
                    <p>Descripción: ${proximos[j].descripcion}</p>
                    `);
                 
                 try {
                  var detallespas=document.getElementById("pasados"+j);
                  detallespas.innerHTML=contenidoPas[j];
                  var detallespro=document.getElementById("proximos"+j);
                  detallespro.innerHTML=contenidoProx[j];
                  //detallespas.addEventListener("click", pasadosEv);
                  //detallespro.addEventListener("click", proxEv);

               } catch (error) {
                   alert("indice por fuera de rango");
                   console.log(error);
               }
    } 
  })
});
/*function pasadosEv(){
  document.getElementById("pasados").innerHTML ="";
}
function proxEv(){
  document.getElementById("proximos").innerHTML ="";
}*/
/*function prueba(pasados) {
  
  console.log(pasados.nombre);
  
  var newNode = document.createElement("div");
  //var separador= document.createElement("hr");
  //var space= document.createElement("br");
  var sp2 = document.getElementById("pasadoSub1");
  // Obtener una referencia al nodo padre
  var parentDiv = document.getElementById("pasadoSub1").parentNode;
  var newContent1 = document.createTextNode(pasados.nombre); 
 // var newContent2 = document.createTextNode(iterator.descripcion); 
  newNode.appendChild(newContent1);
  //newNode.appendChild(space);
  //newNode.appendChild(newContent2);
 // newNode.appendChild(separador);
  parentDiv.insertBefore(newNode, sp2);
  }*/
