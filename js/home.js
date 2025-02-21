//MENÚ HAMBURGUESA
const menuIcon = document.getElementById("menu-icon");
const cerrar = document.getElementById("cerrar")
const abrir = document.getElementById("abrir");      
    
menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("active");
});


//SLIDER DIAS CINE
const slider = document.querySelector('.days-wrapper');
const leftArrow = document.querySelector('.flecha-izquierda');
const rightArrow = document.querySelector('.flecha-derecha');

    leftArrow.addEventListener('click', () => {
        slider.scrollLeft -= 150; // Mueve a la izquierda
    });

    rightArrow.addEventListener('click', () => {
        slider.scrollLeft += 150; // Mueve a la derecha
    });