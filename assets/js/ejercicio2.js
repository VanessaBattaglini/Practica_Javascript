//Se guardan los valores del HTML variables globales para todos los botones
let buttons = document.querySelectorAll('button'); 
let caja = document.getElementById('caja'); 

//Se itera el grupo de botones y declara una arrow function para hacer el 
//cambio de stylos adicionando la funcionalidad de click en cada boton
buttons.forEach(button => {
    button.addEventListener('click', () => {
    let backgroundColor = button.style.backgroundColor; 
    caja.style.backgroundColor = backgroundColor; 
    });
});