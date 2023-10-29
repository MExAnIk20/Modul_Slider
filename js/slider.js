/*
* Carusel
* autor Oleksandr_Krustaliov
* version v1.0
*/
;function Carusel(options){
    options = {
        elem: options.elem,
        btn: options.btn,
        nav: options.nav,
        title: options.title || 'Слайдер',
        autoplay: options.autoplay || false,
        speed: options.speed || 3000,
    }
    
    const photos = options.elem;
    const btnNav = options.btn;
    let count = 0;
    let timer = '';

    function prevPhoto(){
        if (count > 0){
            count--;
        } else {
            count=photos.length-1;
        }
        showImg(count);
    }
    function nextPhoto(){
        if (count < photos.length-1){
            count++;
        } else {
            count=0;
        }
        showImg(count);
    }
    function startPlay(){
        timer = setInterval(nextPhoto, options.speed);
    }
    function showImg(count){
        for (let i = 0; i < photos.length; i++) {
            photos[i].style.opacity = 0;
        }
        photos[count].style.opacity = 1;
    }

    function init() {
        btnNav[0].addEventListener('click', prevPhoto);
        btnNav[1].addEventListener('click', nextPhoto);
        if (options.autoplay === true) {
            startPlay();
        }
        if (!options.nav === true) {
            for (let i = 0; i < btnNav.length; i++) {
                btnNav[i].style.opacity = 0;
            }
        }
    }

    showImg(0);
    init();
    
}