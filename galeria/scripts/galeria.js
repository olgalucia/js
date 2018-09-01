var barra_imagenes = document.querySelector('.barra');
var imagen_display = document.querySelector('.imagen_display');

for (var i = 1; i <= 4; i++) {
  var newImagen = document.createElement('img');
  newImagen.setAttribute('src', 'imagenes/gato' + i + '.jpg')
  barra_imagenes.appendChild(newImagen);
  console.log(newImagen)
  newImagen.onclick = function(e){
    var imgSrc = e.target.getAttribute('src');
    dispayImg(imgSrc)
  }
}

function dispayImg(imgSrc){
  imagen_display.setAttribute('src', imgSrc);
}

//btn.onclick = function(){
//  var btnClass = btn.getAttribute('class');
//  overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
//}
