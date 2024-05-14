window.onload = function() {
    if (typeof history.pushState === "function") {
      history.pushState("forward", null, null);
      window.onpopstate = function() {
        history.pushState('forward', null, null);
        // Aquí puedes mostrar un mensaje de error o redireccionar al usuario
        alert("No puedes retroceder en esta página.");
        // Por ejemplo, para redireccionar al usuario a una página específica:
        // window.location.href = "https://ejemplo.com/pagina-error";
      };
    }
  };