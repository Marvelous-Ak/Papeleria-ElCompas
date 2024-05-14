/*$(".slide-header").hover(function () {
    $(".slide-content").slideToggle("slow");
});*/

document.addEventListener("DOMContentLoaded", function() {
    // Simulando que no hay producto
    const hayProducto = false;
  
    // Elementos del DOM
    const mensajeNoProducto = document.getElementById("mensajeNoProducto");
    const tablaProductos = document.getElementById("mensajemuestra");
  
    if (hayProducto) {
      tablaProductos.classList.remove("oculto");
      mensajeNoProducto.classList.add("oculto");
    } else {
      tablaProductos.classList.add("oculto");
      mensajeNoProducto.classList.remove("oculto");
    }
  });