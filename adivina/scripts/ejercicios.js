var numero = Math.floor(Math.random() * 10 + 1)
var intentos =0;
console.log(numero);

//Elementos del document
var guessField = document.querySelector('#guessField');
var impDeNumeros = document.getElementById('numeros');
var pistas = document.getElementById('pistas');
var listaDeNumeros = " ";
var botonenviar = document.getElementById('enviar');
var boton_reinicio;



function CompararNumero() {

   let usuarioNumero = guessField.value
   listaDeNumeros = listaDeNumeros + "-" + usuarioNumero;

   intentos ++

   if(numero == usuarioNumero){
     gano();
     finDelJuego();
   }else{
     fallo(usuarioNumero);
     }
}

function gano(){
  console.log("Gano!!")
  impDeNumeros.textContent = "GANO!!"
}

function fallo(usuarioNumero){
  if(intentos >= 3){
    console.log("Perdio :()");
    finDelJuego();
    impDeNumeros.textContent = "perdio!!"
  }else {
    mostrarPista(usuarioNumero)
    console.log("Fallo!!");
    impDeNumeros.textContent = listaDeNumeros
  }
}

function mostrarPista(usuarioNumero){
  if(numero > Number(usuarioNumero)){
    console.log("Intenta de nuevo el numero que buscas es mayor");
    pistas.textContent = "Intenta de nuevo el numero que buscas es mayor que: " + usuarioNumero
    pistas.style.backgroundColor = 'blue'
  }else {
    console.log("Intenta de nuevo el numero que buscas es menor");
    pistas.textContent = "Intenta de nuevo el numero que buscas es menor que; " + usuarioNumero
    pistas.style.backgroundColor = 'pink'
  }
}

function finDelJuego(){
  boton_reinicio = document.createElement('button');
  boton_reinicio.textContent = "Reiniciar Juego";
  boton_reinicio.addEventListener('click', reiniciaJuego);
  document.body.appendChild(boton_reinicio);
  botonenviar.disabled = true;
  pistas.textContent = " ";
}

function reiniciaJuego(){
  botonenviar.disabled = false;
  intentos = 0;
  listaDeNumeros = " ";
  numero = Math.floor(Math.random() * 10 + 1);
  impDeNumeros.textContent = " ";
  boton_reinicio.parentNode.removeChild(boton_reinicio)
}
