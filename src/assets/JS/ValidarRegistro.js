var register = document.getElementById('newRegister');
var contLogin = document.getElementById('Login');

register.addEventListener("click", function(event) {
    console.log('click');
    event.preventDefault();
    contLogin.style.display = 'none';
    document.getElementById('Register').style.display = 'block';
});