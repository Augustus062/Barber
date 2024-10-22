//Menu
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{
    
    if(ul.classList.contains('ativo')){
        ul.classList.remove('ativo');
        document.querySelector('.menu-icon img').src = 'C:\Users\kaue-\Documents\Programas\Barber\img\menu.png';
    }else{
        ul.classList.add('ativo');
        document.querySelector('.menu-icon img').src = 'C:\Users\kaue-\Documents\Programas\Barber\img\menu.png';

    }
    
})
//Fim menu

//Inicio do carrosel
let passarslide = 0;
const slides = document.querySelector('.slides img');

function mostrarSlides(index){
    slides.array.forEach(slides => {
        slides.classList.remove('ativo');
        if(i=== index){
            slides.classList.add('ativo')
        }
        
    });
}
function moverSlide(n){
    passarslide += n;
    if(passarslide >= slides.length){
        passarslide = 0;
    }else if(passarslide <0){
        passarslide = slide.length -1;
    }
    mostrarSlides(passarslide);
}
function iniciarCarroselAutomatico(){
    setInterval(()=>{
        moverSlide(1); //proximo slide
    }), 5000; // (5k ms = 5s) contador em milisegundos
}


//Inicia o slide com a primeira imagem visivel

mostrarSlides(passarslide);
iniciarCarroselAutomatico();