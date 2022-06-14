$(function(){

    'use strict'

    // slick slider part start

    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
    });

    // slick slider part end






    // VenoBox part start

    $('.venobox').venobox(); 

    // VenoBox part end
    
    // VenoBox in Gal part start

    $('.venobox').venobox(); 

    // VenoBox in Gal part end
    
    
    
    // Slick Slider in testimonial start

    $('.test_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      });

    // Slick Slider in testimonial end



    //   Counter up js start

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //   Counter up js  end


    // Client slider start
    
    $('.client_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        dots: false,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arr"></i>',
      });
    
    // Client slider end



})