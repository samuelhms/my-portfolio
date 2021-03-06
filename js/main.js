/*global $, jQuery, alert*/





$(document).ready(function () {

  'use strict';

  // ========================================================================= //
  //  //SMOOTH SCROLL
  // ========================================================================= //


  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();
    $(document).off("scroll");

    $('a').each(function () {
      $(this).removeClass('active');
      if ($(window).width() < 768) {
        //$('.nav-menu').slideUp();
      }
    });

    $(this).addClass('active');

    var target = this.hash,
      menu = target;

    target = $(target);
    $('html, body').stop().animate({
      'scrollTop': target.offset().top - 80
    }, 500, 'swing', function () {
      window.location.hash = target.selector;
      $(document).on("scroll", onScroll);
    });
  });


  function onScroll(event) {
    if ($('.home').length) {
      var scrollPos = $(document).scrollTop();
      $('nav ul li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
      });
    }
  }

  // ========================================================================= //
  //  //NAVBAR SHOW - HIDE
  // ========================================================================= //

  $("#topo").hover(function () {

    console.log("hover")
    $("#main-nav, #main-nav-subpage").slideDown(700);
    $("#main-nav-subpage").removeClass('subpage-nav');
  });

  $(document).ready(function () {
    $(document).on('mouseenter', '#topo', function () {
      $("#main-nav, #main-nav-subpage").slideDown(700);
      $("#main-nav-subpage").removeClass('subpage-nav');

    })
    //.on('mouseout', '#main-nav', function() {
    //   $("#main-nav").slideUp(700);
    //   $("#main-nav-subpage").hide();
    //   $("#main-nav-subpage").addClass('subpage-nav');

    // }).on('mouseout', '#main-nav .row', function() {
    //   $("#main-nav").slideUp(700);
    //   $("#main-nav-subpage").hide();
    //   $("#main-nav-subpage").addClass('subpage-nav');
    // });
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    
       if (scroll > 50) {
        $("#main-nav, #main-nav-subpage").slideDown(700);
        $("#main-nav-subpage").removeClass('subpage-nav');

        } else {
        $("#main-nav").slideUp(700);
        $("#main-nav-subpage").hide();
        $("#main-nav-subpage").addClass('subpage-nav');
        }
      
  });

  // ========================================================================= //
  //  // RESPONSIVE MENU
  // ========================================================================= //

  $('.responsive').on('click', function (e) {
    $('.nav-menu').slideToggle();
  });
  $('.smoothScroll').on('click', function (e) {
    console.log("click")
    $('.nav-menu ').css('display', '');
  });

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function () {
    typed.typed({
      strings: ["Samuel Maciel,", "Future", "Fullstack", "Developer."],
      typeSpeed: 200,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  $('.services-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 20,
    dots: true,
    nav: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnifPopup = function () {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By defailt it looks for an image tag:
        opener: function (openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's defailt one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnifPopup();

});

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(window).load(function () {

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function () {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

if ($(window).width() < 480) { //se a tela for menor que 480 px
  console.log("<480")
  document.querySelector("#main-nav").style.display = "flex";
  $('.toplogo').text('Samuel');
  //$("#main-nav").css("display", "block")
} else {
  $('.toplogo').text('Samuel H. Maciel');
}
$("#main-nav").css("display", "none")

// ========================================================================= //
//  download cv
// ========================================================================= //
// $('cvpdf').on('click', function (e) {
//   url = './cvpdf/cvsamuel.pdf'

//   var link = document.createElement('a');
//   link.href = url;
//   link.download = 'Curriculo - Samuel Maciel.pdf';
//   link.dispatchEvent(new MouseEvent('click'));
  
//     }
//   );

