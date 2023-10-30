var checkbox = document.getElementById('flexSwitchCheckDefault');
var promoAct = document.getElementById('desc2');
  


checkbox.addEventListener('change', function() {
  // Si el checkbox está marcado, habilita el input; de lo contrario, deshabilítalo
  promoAct.disabled = !checkbox.checked;
});

promoAct.disabled = !checkbox.checked;

console.log('entra');