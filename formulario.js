
// validación de formulario
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
    evento.preventDefault();
    var nombre = document.getElementById('nombre').value;
    if(nombre.length == 0) {
        const nombre = document.getElementById('nombre');
        nombre.classList.add('errorDeCampo');
        nombreLabel.innerHTML = `Nombre <input class="errorDeCampo" id="nombre" type="text" placeholder="Ingresá tu nombre"></input>
        `
        return;
    }
    var email = document.getElementById('email').value;
    if(email.length == 0) {
        alert('No has escrito tu email');
        return;
    }
    var edad = document.getElementById('edad').value;
    if (edad.length >= 18) {
        alert('Tenés que ser mayor de edad');
        return;
    }
    var comentario = document.getElementById('edad').value;
    if (comentario.length < 30) {
        alert('Dejanos un comentario');
        return;
    }
    this.submit();
}

