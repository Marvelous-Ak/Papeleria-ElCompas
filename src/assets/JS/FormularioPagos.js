document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
  });

  function validateForm() {
    let isValid = true;
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const monto = document.getElementById('monto').value;

    document.getElementById('nombreError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('telefonoError').textContent = '';
    document.getElementById('montoError').textContent = '';

    if (!nombre) {
      document.getElementById('nombreError').textContent = 'Por favor, ingresa tu nombre completo.';
      isValid = false;
    }

    if (!email) {
      document.getElementById('emailError').textContent = 'Por favor, ingresa tu correo electrónico.';
      isValid = false;
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').textContent = 'El correo electrónico ingresado no es válido.';
      isValid = false;
    }

    if (!telefono) {
      document.getElementById('telefonoError').textContent = 'Por favor, ingresa tu número de teléfono.';
      isValid = false;
    }

    if (!monto || monto < 1) {
      document.getElementById('montoError').textContent = 'Por favor, ingresa un monto válido mayor a cero.';
      isValid = false;
    }

    if (isValid) {
      // Aquí puedes enviar el formulario o realizar otras acciones
      alert('Formulario válido. Puedes procesar el pago.');
    }
  }

  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }