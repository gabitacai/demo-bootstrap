document.addEventListener('DOMContentLoaded', function() {
    
    const form = document.querySelector('.form-card');
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const emailInput = document.getElementById('email');
    const mensajeInput = document.getElementById('mensaje');
    const submitButton = form.querySelector('button[type="submit"]');
    
    
    function showError(input, message) {
        let errorElement = input.nextElementSibling;
        
        if (!errorElement || !errorElement.classList.contains('error')) {
            errorElement = document.createElement('p');
            errorElement.classList.add('error');
            input.parentNode.appendChild(errorElement);
        }
        errorElement.textContent = message;
        input.classList.add('is-invalid');
    }

    
    function clearError(input) {
        let errorElement = input.nextElementSibling;
        if (errorElement && errorElement.classList.contains('error')) {
            errorElement.remove();
        }
        input.classList.remove('is-invalid');
    }

    
    function validateInput(input) {
        const value = input.value.trim();
        
      
        if (value === '') {
            showError(input, `${input.placeholder} es obligatorio.`);
        } else {
            clearError(input);
        }

       
        if (input.id === 'email') {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            if (value === '') {
                showError(input, 'El correo electrónico es obligatorio.');
            } else if (!emailPattern.test(value)) {
                showError(input, 'Por favor ingresa un correo electrónico válido.');
            } else {
                clearError(input);
            }
        }
    }

   
    nombreInput.addEventListener('input', function() {
        validateInput(nombreInput);
    });

    apellidoInput.addEventListener('input', function() {
        validateInput(apellidoInput);
    });

    emailInput.addEventListener('input', function() {
        validateInput(emailInput);
    });

    
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        validateInput(nombreInput);
        validateInput(apellidoInput);
        validateInput(emailInput);

        if (!form.querySelector('.is-invalid')) {
            alert('Formulario enviado correctamente');
        
        } else {
            alert('Por favor, completa todos los campos obligatorios correctamente.');
        }
    });
});