$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    // dots:false,
    // navText:[`<i class="fa-solid fa-angles-left fa-2x"></i>` `<i class="fa-solid fa-angles-right"></i>`],
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3,
            // sideBy:3,
            // smartspeed:100

        }
    }
})
