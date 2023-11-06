// este numero es el que el juego tira al azar para adivinar
const numeroAzar = Math.floor(Math.random()*100)+1;
const numeroEntrada = document.getElementById('numeroEntrada');
const mensaje = document.getElementById("mensaje");
const intento = document.getElementById("intento");
let intentos = 0 ;


function chequearResultado(){
     intentos++;
     intento.textContent = intentos;

     let numeroIngresado = parseInt(numeroEntrada.value);

     if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
          mensaje.textContent = "Por favor ingrese un numero valido entre 1 y 100";
          mensaje.style.color = "red";
          return;
     }

     if (numeroIngresado === numeroAzar){
          mensaje.textContent = "Felicitaciones, acertaste el numero";
          mensaje.style.color = "green";
          numeroEntrada.disabled = true;
          return;
     }

     if (numeroIngresado < numeroAzar) {
          mensaje.textContent = "El numero es mas ALTO";
          mensaje.style.color = "blue";
     } else {
          mensaje.textContent = "El numero es mas BAJO";
          mensaje.style.color = "blue";
     }
}



