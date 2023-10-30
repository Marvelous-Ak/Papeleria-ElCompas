const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
var val1 = document.getElementById('estado');



let checkMjs = true;

const expresiones = {
	marca: /^[a-zA-Z0-9\_\-]{1,10}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ0-9\s\_\-]{1,20}$/, // Letras y espacios, pueden llevar acentos.
    descp: /^[a-zA-ZÀ-ÿ0-9\s\_\-\.\:]{1,150}$/,
	//password: /^.{4,12}$/, // 4 a 12 digitos.
	//correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{1,4}$/ // 1 a 4 numeros.
}

const valid = {
    name: false,
    brand: false,
    price: false,
    stock: false,
    descp: false,
    image: false
}

const validarFomulario = (e) =>{
    switch (e.target.name){
        case 'name':
            validarCampo(expresiones.nombre, e.target, 'name');
            /*if(expresiones.nombre.test(e.target.value)){
                document.getElementById('grupo__name').classList.remove('FromGrup-error');
                document.querySelector('#grupo__name .msjError').classList.remove('msjError-activo');
            } else {
                document.getElementById('grupo__name').classList.add('FromGrup-error');
                document.querySelector('#grupo__name .msjError').classList.add('msjError-activo');
            }*/
        break;
        case 'brand':
            validarCampo(expresiones.marca, e.target, 'brand');
            
        break;
        case 'price':
            validarCampo(expresiones.telefono, e.target, 'price');
            
        break;
        case 'stock':
            validarCampo(expresiones.telefono, e.target, 'stock');
            
        break;
        case 'descp':
            validarCampo(expresiones.descp, e.target, 'descp');
            
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('FromGrup-error');
        document.querySelector(`#grupo__${campo} .msjError`).classList.remove('msjError-activo');
        valid[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('FromGrup-error');
        document.querySelector(`#grupo__${campo} .msjError`).classList.add('msjError-activo');
        valid[campo] = false;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFomulario);
    input.addEventListener('blur', validarFomulario);
});

function validFile(){
    var fileCap = document.getElementById('file');
    var fileRuta = fileCap.value;
    var fileExt = /(.jpg|.png|.webp|.jpeg|.gif)$/i;

    if(!fileExt.exec(fileRuta)){
        console.log('Solo imagen png');
        fileCap.value = '';
        valid.image = false;
        alertaFile('error','Error al leer archivo', 'Los formatos que el archivo sube no son compatibles. SOLO IMAGENES');
        return false;
    } else {
        var fileSize = fileCap.files[0];
        if(fileSize && fileSize.size > 10485800){
            fileCap.value = '';
            alertaFile('warning','Tamaño de Archivo excedido','No puedes exceder de los 10MB de la imagen');
            valid.image = false;
            return false;
        } else {
            /*if (fileCap.files && fileCap.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imagePreview').innerHTML = '<img src="'+e.target.result+'"/>';
                };
                reader.readAsDataURL(fileCap.files[0]);
            }*/
            val1.image = true;
        }
        
    }

}

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const papel = document.getElementById('flexCheckDefault1');
    const escolar = document.getElementById('flexCheckDefault2');
    const artes = document.getElementById('flexCheckDefault3');
    const escitura = document.getElementById('flexCheckDefault4');
    const oficina = document.getElementById('flexCheckDefault5');
    const manualidades = document.getElementById('flexCheckDefault6');
    const didacticos = document.getElementById('flexCheckDefault7');
    const adhesivos = document.getElementById('flexCheckDefault8');
    
    if(valid.name && valid.brand && valid.price && valid.stock && valid.descp && val1.image &&
        (papel.checked || escolar.checked || artes.checked || escitura.checked || oficina.checked || manualidades.checked || didacticos.checked || adhesivos.checked)){
            /*val1.innerHTML = "Agregar";
            checkMjs = true;*/
            document.getElementById('txtMsj').style.display = 'none';
    } else {
        document.getElementById('txtMsj').style.display = 'block';
        /*val1.innerHTML = "Comprobar";
        checkMjs = false;*/
    }
});

function alertaMJS(){
    console.log('llamada desde TS');
    if(!checkMjs){
        Swal.fire({
            icon: 'error',
            title: 'Llena los datos',
            text: 'No puedes dejar campos vacios, y/o debes de seguir la nomenglatura'
          });
    }
}

const alertaFile = (icono, titulo, texto) => {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: texto
      });
}



