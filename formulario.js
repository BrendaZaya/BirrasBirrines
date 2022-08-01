const enviarFormulario = document.getElementById('submit');

// validación de formulario

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

// Reseteo del formulario

function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

const validarFormulario = (evento) => {
    evento.preventDefault();

    // Declaración de variables 

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const edad = document.getElementById('edad');
    const comentario = document.getElementById('comentario');

    // validar nombre

    if(nombre.value === "") {
        nombreLabel.innerHTML = `Nombre <input class="errorDeCampo" id="nombre" type="text" placeholder="Ingresá tu nombre"></input>
        `
        return false;
    }

    // validar email
    if(email.value === "") {
        emailLabel.innerHTML = `Email <input class="errorDeCampo" id="email" type="text" placeholder="Ingresá tu email"></input>
        `
        return false;
    }

    if (!emailValido(email.value)) {
        emailLabel.innerHTML = `Email <input class="errorDeCampo" id="email" type="text" placeholder="Ingresá un email valido"></input>
        `
        return false;
    }

    // validar edad
    if (edad.value <= 18) {
        // edad.classList.add('errorDeCampo');
        edadLabel.innerHTML = `Edad <input class="errorDeCampo" id="edad" type="text" placeholder="Debés ser mayor de 18"></input>
        `
        return false;
    }

    // validar mensaje

    if (comentario.value.length < 20) {
        comentarioLabel.innerHTML = `Dejanos tu comentario <textarea class="errorDeCampo" id="comentario" type="text" placeholder="Dejanos tu comentario"></textarea>
        `
        return false;
    }

    // Alerta de envío

    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Tu mensaje se envío correctamente',
        showConfirmButton: false,
        timer: 2000
    })

    limpiarFormulario()
}

// Tipos de mails validos
const emailValido = email => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}