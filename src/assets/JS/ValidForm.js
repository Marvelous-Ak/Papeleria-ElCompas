const valid = {
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
        var fileSize = fileCap.files[0]; //Extraer el size de la imagen seleccionada
        
        if(fileSize && fileSize.size > 10485800){//Validar que la imagen insertado no exceda de los 10MB
            fileCap.value = '';
            alertaFile('warning','Tamaño de Archivo excedido','No puedes exceder de los 10MB de la imagen');
            valid.image = false;
            return false;
        } else {
            
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



