const oferta = document.getElementById('promo');
const precio = document.getElementById('price');
const texto = oferta.textContent || oferta.innerHTML;


if(texto != "MNX $0.00"){
    precio.classList.remove('precio');
    oferta.classList.remove('oferta');
    precio.classList.add('oferta');
    oferta.classList.add('price');
    document.querySelector('.oferta').style.display = 'block';
    console.log('Diferente');
}

document.querySelectorAll('.container img').forEach(image =>{
    image.onclick = () =>{
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('#cerrar').onclick = () =>{
    document.querySelector('.popup-image').style.display = 'none';
}
document.addEventListener("keydown",
    function(event){
        switch(event.keyCode){
            case 27:
                document.querySelector('.popup-image').style.display = 'none';
                break;
        }
    }
);