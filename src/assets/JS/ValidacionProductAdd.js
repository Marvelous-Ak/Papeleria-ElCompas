var checkbox = document.getElementById('flexSwitchCheckDefault');
checkbox.addEventListener("change", validaCheckbox, false);
  
function validaCheckbox(){
  var checked = checkbox.checked;
  if(checked){
    //alert('checkbox esta seleccionado');
    document.querySelector('.actPromo').style.display = 'block';
  } else {
    document.querySelector('.actPromo').style.display = 'none';

  }
}