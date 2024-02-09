//Declarar variables iniciales
let inputValor1 = document.querySelector('#valor1');
let inputValor2 = document.querySelector('#valor2');
let botonSuma = document.querySelector('#btn-sumar');
let botonResta = document.querySelector('#btn-restar');
let valorResultado = document.querySelector('.resultado');

//Llamar al evento Listener para que a través del click ejecute las funciones
// de sumar, restar y mostrar resultados
botonSuma.addEventListener('click', () => {
    let resultado = parseInt(inputValor1.value) + parseInt(inputValor2.value);
    mostrarResultado(resultado);
    inputValor1.value = ''; //Para limpiar el input
    inputValor2.value = ''; //Para limpiar el input
});

botonResta.addEventListener('click', () => {
    let resultado = parseInt(inputValor1.value) - parseInt(inputValor2.value);
    mostrarResultado(resultado);
    inputValor1.value = ''; //Para limpiar el input
    inputValor2.value = ''; //Para limpiar el input
});

//Declarar la función para mostrar los resultados de suma y resta
function mostrarResultado(resultado) {
    if (resultado < 0) {
    valorResultado.textContent = 0;
    } else {
    valorResultado.textContent = resultado;
    }
}