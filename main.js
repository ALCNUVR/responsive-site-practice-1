//Menu Icon 
const nav = document.querySelector(".top-nav");
const menu = document.querySelector(".menu-toggler").onclick = function () {
    this.classList.toggle('open');
    nav.classList.toggle('open');
};

const navTop = document.querySelector(".top-nav").onclick = function ( ) {
    this.classList.remove('open'); 
    document.querySelector('.menu-toggler').classList.remove('open');
};
//Menu Icon End

//Button
const backtoTopButton  = document.getElementById('up').onclick = function () { 
    window.scrollTo(0,0);        
}

//Button End

//! I will develop this soon. Thanks! 



