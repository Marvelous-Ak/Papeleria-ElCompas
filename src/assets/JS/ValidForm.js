const formulario = document.getElementById('formulario');//Extraer elemento del formulario
const inputs = document.querySelectorAll('#formulario input'); //Extraer todos los inputs que esten dentro de formulario
var val1 = document.getElementById('estado');

//Invalido
const valid = {
    name: false,
    brand: false,
    price: false,
    stock: false,
    descp: false,
    image: false //Esta funcion no se borra
}

// Validacion del input file, donde solo se insertan solo imagenes y no exceda del 10 BM
function validFile(){
    var fileCap = document.getElementById('file');
    var fileRuta = fileCap.value;
    var fileExt = /(.jpg|.png|.webp|.jpeg|.gif)$/i; //Validacion de las extensiones, olo los que estan escritos

    if(!fileExt.exec(fileRuta)){//En caso de que no cumpla la expresion, mandar alerta de aviso
        console.log('Solo imagen png');
        fileCap.value = '';
        valid.image = false;
        alertaFile('error','Error al leer el archivo', 'Los formatos que el archivo sube no son compatibles. SOLO IMAGENES');
        return false;
    } else {
        var fileSize = fileCap.files[0];
        if(fileSize && fileSize.size > 10485800){//Validar que la imagen insertado no exceda de los 10MB
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

const alertaFile = (icono, titulo, texto) => {
    Swal.fire({
        icon: icono,
        title: titulo,
        text: texto
      });
}



