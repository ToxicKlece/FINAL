document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.contacto-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const sede = document.getElementById('sede').value;
    const mensaje = document.getElementById('mensaje').value.trim();
    const politica = document.getElementById('politica').checked;

    if (!nombre || !telefono || !correo || !sede || !mensaje) {
      Swal.fire({
        icon: 'error',
        title: 'Campos incompletos',
        text: 'Por favor, completa todos los campos del formulario.',
      });
      return;
    }

    const correoRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correoRegex.test(correo)) {
      Swal.fire({
        icon: 'warning',
        title: 'Correo inválido',
        text: 'Por favor, ingresa un correo electrónico válido.',
      });
      return;
    }

    if (!politica) {
      Swal.fire({
        icon: 'info',
        title: 'Falta aceptar la política',
        text: 'Debes aceptar la política de privacidad antes de continuar.',
      });
      return;
    }
    Swal.fire({
      icon: 'success',
      title: 'Formulario enviado',
      text: 'Gracias por contactarnos. Te responderemos pronto.',
    });

    form.reset();
  });
});
