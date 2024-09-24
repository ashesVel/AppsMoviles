//obtener el valor de DOM
const botonColor = document.getElementById('cambiarColor'); 
//añadir un listener al boton para manejar el evento click 
botonColor.addEventListener('click',() =>){
    //generar un color aleatorio
    const colorAleatorio = `#${Math.floor(Math.random() * 16777215).toString(16)}`; 
    //cambiar el color de fondo del body
    document.body.style.backgroundColor= colorAleatorio; 
}}; 