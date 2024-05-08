var register = document.getElementById('newRegister');
var contLogin = document.getElementById('Login');

register.addEventListener("click", function(event) {
    console.log('click');
    event.preventDefault();
    contLogin.style.display = 'none';
    document.getElementById('Register').style.display = 'block';
});
function validaMSJ(m){
    console.log(m);
}
/*window.addEventListener('beforeunload', function(event) {
    // Cancela el evento de cierre o recarga del navegador
    event.preventDefault();
    // Establece el mensaje de advertencia
    event.returnValue = '¿Estás seguro de que quieres abandonar esta página?';
});*/