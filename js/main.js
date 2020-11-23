$(document).ready(function() {
    // Slider
    $('.slider__wrap').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround : true,
        prevNextButtons: false,
        autoPlay : 3000
    });

    $('.banner__wrap').flickity({
        // options
        cellAlign: 'left',
        contain: true,
        wrapAround : true,
        prevNextButtons: false,
        autoPlay : 3000
    });


    // back to top
    $(".backtop").click(function() {
        $("html, body").animate({scrollTop: 0}, 1000);
    }); 

});


// Menu
document.querySelector('.btmenu').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
    this.classList.toggle('clicked');
});


// fix navbar
let navbar = document.querySelector('.header');
let slider = document.querySelector('.slider');
window.addEventListener('scroll',function() {
    if (document.documentElement.scrollTop > 100) {
        navbar.style.display = 'block';
        navbar.classList.add('shownb');
        slider.style.marginTop = "97px";
    }
});