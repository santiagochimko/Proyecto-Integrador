const closeButton = document.getElementById('close');

closeButton.addEventListener('click', function() {
  // Envía un mensaje al archivo padre indicando que se debe cerrar el modal
  window.parent.postMessage('closeModal', '*');
});
