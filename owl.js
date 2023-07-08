// $(document).ready(function(){
//     $(".owl-carousel").owlCarousel();
//   });


$('.owl-carousel').owlCarousel({
    loop:true,
    margin:5,
    nav:true,
    infinite:true,
    responsive:{
        0:{
            items:3
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})