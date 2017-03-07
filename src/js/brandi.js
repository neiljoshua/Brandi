$(document).ready(function() {

  var $window = $(window);
  var $hero = $('.hero-content');

  function checkWidth(){
    if ($window.width() < 600) {
      $hero.removeClass('center');
    } else {
      $hero.addClass('center');
    }
  };

  checkWidth();

  $(window).resize(checkWidth);

  //toogle slide-down menu

  $('.c-hamburger').on('click', function(e){
      e.preventDefault();
        $('.header-menu').toggleClass('center');
        $('.header-menu').toggleClass('slide-down');
        $(this).toggleClass('is-active');
        $('.header-site').toggleClass('slide-down');
    });


  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });

  function windowScroll(){
    $(window).scroll (function () {
          var sT = $(this).scrollTop();
              if (sT >= 200) {
                  $('.logo').addClass('green-menu');
              }else {
                  $('.logo').removeClass('green-menu');
              }
    })
  }

  windowScroll();

  function filterLinks(){

   $('.filter-link').on('click', function(e){
    e.preventDefault();
    var linkHref = $(this).attr('href');
    $('.filter-link').removeClass('active');
    $(this).addClass('active');

    // Filter images
    var activeImg = $('.works').find("[data-type='" + linkHref + "']");
    //console.log(activeImg);
    $('.brand-box').removeClass('active-img').addClass('inactive-img');
    activeImg.removeClass('inactive-img').addClass('active-img');

    // Show all images
    if(linkHref=="allPhotos"){
      $('.brand-box').removeClass('inactive-img').addClass('active-img');

    }

   }) // end of click function
  } // end of filterLinks

  filterLinks();

  function homeSlider(){


    $("#home-slider").owlCarousel({
   
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 300,
        singleItem:true, 
        autoPlay: true,
    });
  }

  homeSlider();

   $("#featuresSlider").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3],
      responsive: true,
 
  });

  $("#teamSlider").owlCarousel({
      //autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 4,
      itemsDesktop : [1199,4],
      itemsDesktopSmall : [979,4],
      responsive: true,
 
  });

$('form').submit(function(e) {

    e.preventDefault();

    var $form  = $(this);
    var $email = $("#email");
    if ( !window.validateEmail( $email.val() ) &&  ( $email.prop('required') ) ) {
      $email.parent().addClass('invalid');
      $(".error").fadeTo(400, 1);

    } else {

    $email.parent().removeClass('invalid')
    $(".error").fadeTo(400, 0);
     var url = "contact.php"; // the script where you handle the form input.
      $.ajax({
         type: "POST",
         url: url,
         data: $("#contact-form").serialize(),
         success: function(data)
         {
               $('.success').fadeTo(400, 1);
               $('form input').val('');
         }
       });
      return false;
    }
});

// Form Validation
window.validateEmail = function( emails ) {

      var errors       = 0;
      var emailArray   = (emails == null) ? [] :emails.split(',');
      var expression   = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      $(emailArray).each(function(index, email){

        if( !expression.test( email.trim() ) ){
          errors++;
        }

      });

      if( errors > 0 ){
        return false;
      }else{
        return true;
      }

  }

 $('.close-success').on('click', function(e) {
    e.preventDefault();
    $('.success').fadeTo(400, 0); // fadeTo is not removing display block
    $('.success').hide();
  })

// // mobile menu
// $('.icon-menu').on('click', function(){
//   if ( $('.menu').hasClass('visible') ){
//     $('.menu').removeClass('visible');
//   }else{
//   $('.menu').addClass('visible');
//   }

// });

$('.menu a').on('click', function(){
  $('.menu').removeClass('visible');
});

}); // End of doc ready.  
