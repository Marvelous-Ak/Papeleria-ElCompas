
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