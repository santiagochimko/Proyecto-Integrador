// Obtén una referencia al botón "Ingresar"
const loginButton = document.getElementById('login');
const modalContainer = document.getElementById('modalContainer');

// Escucha el evento de clic en el botón "Ingresar"
loginButton.addEventListener('click', function() {
  // Crea un elemento iframe para cargar el contenido del modal.html
  const iframe = document.createElement('iframe');
  iframe.src = 'modal.html';
  iframe.style.position = 'fixed';
  iframe.style.top = '0';
  iframe.style.left = '0';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.zIndex = '9999';

  // Agrega el iframe al cuerpo del documento actual
  modalContainer.appendChild(iframe);
});

window.addEventListener('message', function(event) {
    if (event.data === 'closeModal') {
      // Elimina el contenido del modalContainer
      modalContainer.innerHTML = '';
    }
  });
  