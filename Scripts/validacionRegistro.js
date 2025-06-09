document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('registroForm');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const apellidoPaterno = document.getElementById('apellidoPaterno').value.trim();
    const apellidoMaterno = document.getElementById('apellidoMaterno').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const contrasena = document.getElementById('contrasena').value.trim();
    const sexoM = document.getElementById('sexoM').checked;
    const sexoF = document.getElementById('sexoF').checked;
    const distrito = document.getElementById('distrito').value;
    const fecha = document.getElementById('fechaRegistro').value;
    const terminos = document.getElementById('terminos').checked;

    if (!nombre || !apellidoPaterno || !apellidoMaterno || !correo || !contrasena || !fecha) {
      Swal.fire({
        icon: 'warning',
        title: 'Campos incompletos',
        text: 'Por favor, complete todos los campos obligatorios.',
      });
      return;
    }

    if (!sexoM && !sexoF) {
      Swal.fire({
        icon: 'warning',
        title: 'Sexo no seleccionado',
        text: 'Debe seleccionar su sexo.',
      });
      return;
    }

    if (distrito === "") {
      Swal.fire({
        icon: 'warning',
        title: 'Distrito faltante',
        text: 'Debe seleccionar un distrito de residencia.',
      });
      return;
    }

    if (!terminos) {
      Swal.fire({
        icon: 'warning',
        title: 'Falta aceptar términos',
        text: 'Debe aceptar los Términos y Condiciones para continuar.',
      });
      return;
    }

    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'Su cuenta ha sido registrada correctamente.',
      confirmButtonText: 'Aceptar',
    }).then(() => {
      window.location.href = 'login.html';  
    });
  });
});
