//Creamos las variables donde se guardarán los datos que vienen del 
//documento HTML según su selector
let nombre = document.querySelector('#nombre');
let asunto = document.querySelector('#asunto');
let mensaje = document.querySelector('#mensaje');
let boton = document.querySelector('#botton');

//Vamos a agregar los eventos para darle un valor a los datos
boton.addEventListener('click', (e) => {
    e.preventDefault();
    clearData();
    let nombreValor = nombre.value
    let asuntoValor = asunto.value
    let mensajeValor = mensaje.value

    nombre.value = ''; //para limpiar los input
    asunto.value = '';
    mensaje.value = '';
    
    //Validación  del mensaje error
    if ((nombreValor.trim() == '') || (asuntoValor.trim() == '') || (mensajeValor.trim() == '')) {
        let errorName = document.querySelector('.errorNombre');
        let errorAbout = document.querySelector('.errorAsunto');
        let errorMsg = document.querySelector('.errorMensaje');

        //Mostrar el mensaje de error en el HTML
        errorName.innerHTML = "El mensaje es requerido";
        errorAbout.innerHTML = "El  asunto es requerido";
        errorMsg.innerHTML = "El mensaje es requerido";
    } else {
        let enviado = document.querySelector('.resultado');
        enviado.innerHTML = "Mensaje enviado con éxito";
    }
});
//Borrar los valores del input una vez enviados
function clearData() {
    document.querySelector('.errorNombre').innerHTML = '';
    document.querySelector('.errorAsunto').innerHTML = '';
    document.querySelector('.errorMensaje').innerHTML = '';
};
function validar(){
    let valor1 = nombre.value
    let valor2 = asunto.value
    let valor3 = mensaje.value
    let patron = /[a-zA-Z]/gim;

    if ((patron.test(nombre) == true) && (patron.test(asunto) == true) && (patron.test(mensaje) == true)) {
        document.querySelector('.errorNombre').innerHTML = 'Palabra permitida';
        document.querySelector('.errorAsunto').innerHTML = 'Palabra permitida';
        document.querySelector('.errorMensaje').innerHTML = 'Palabra permitida';
        valor1 = false;
        valor2 = false;
        valor3 = false;
    } else {
        alert('La palabra no esta permitida')
    }
};



