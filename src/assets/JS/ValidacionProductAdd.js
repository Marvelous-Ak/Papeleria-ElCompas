var checkbox = document.getElementById('flexSwitchCheckDefault');
var promoAct = document.getElementById('desc2');
checkbox.addEventListener("change", validaCheckbox, false);
  
function validaCheckbox(){
  var checked = checkbox.checked;
  if(checked){
    console.log('verdadero');
    //alert('checkbox esta seleccionado');
    // document.querySelector('.actPromo').style.display = 'block';
  } else {
    console.log('False');
    // document.querySelector('.actPromo').style.display = 'none';

  }
  
}