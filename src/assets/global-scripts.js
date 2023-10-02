$(document).ready(function () {
    // Configuración del carrusel
    $('#carouselExampleAutoplaying').carousel({
      interval: 5000, // Establece el intervalo ms
      pause: 'hover', // Pausa el carrusel al pasar el mouse
      wrap: true // Permite que el carrusel vuelva a la primera imagen después de la última
    });
  });