$(document).ready(function() {

  var $window = $(window);
  var $hero = $('.hero-content');
  var $header =$('.header-site');
  var $menu = $('#header-menu');
  var $body =$('body');
  var $mobile =$('.c-hamburger');


  // Toggles mobile menu:
  function toggleMobileMenu(menu) {
    $('#header-menu').toggleClass('center');
    $('#header-menu').toggleClass('slide-down');
    $(menu).toggleClass('is-active');
    $('.header-site').toggleClass('slide-down');
  }
  
  //toggles slide-down green screen menu

  $('.c-hamburger').on('click', function(e){
      e.preventDefault();
        var menu = $(this);
        toggleMobileMenu(menu);
        currLink.addClass('active');
    });

  // Counter in Fun facts
  function counterUp(){
    $('.counter').each(function() {
      var $this = $(this);
      var countTo = $this.attr('data-count');

      $({ countNum: $this.text()}).animate({

        countNum: countTo
      },

      {

        duration: 2000,
        easing:'linear',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
          //alert('finished');
        }

      });  
    });
  }

  function windowScroll(){
    $(window).scroll (function () {
      var docViewTop = $(this).scrollTop();
      var docViewBottom =docViewTop + $(this).height();
      var elemTop = $('.fun-facts').offset().top;
      var elemBott = elemTop + $('.fun-facts').height();

      if (docViewTop >= 200) {
          $('.logo').addClass('green-menu');
      }else {
          $('.logo').removeClass('green-menu');
      }
      // if fun facts in view run counter 
      if ((docViewBottom >= elemTop) && (elemBott >= docViewTop) ){
        counterUp();
      }
    })
  }

  windowScroll();

   function checkWidth(){
    if ($window.width() < 600) {
        $hero.removeClass('center');
    } else {
        $hero.addClass('center');
    } 

    if ($window.width() > 980) {
      if ($mobile.hasClass('is-active')) {
        toggleMobileMenu($mobile);
      } 
    } 
  
  };

  

  checkWidth();

  $(window).resize(checkWidth);

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

$(document).on("scroll", onScroll);
    
//smoothscroll
$('a[href^="#"]').on('click', function (e) {
  e.preventDefault();
  $(document).off("scroll");
  
  $('a').each(function () {
      $(this).removeClass('active');
  })
  $(this).addClass('active');

  var target = this.hash,
      menu = target;
  $target = $(target);
  $('html, body').stop().animate({
      'scrollTop': $target.offset().top+2
  }, 700, 'swing', function () {
      window.location.hash = target;
      $(document).on("scroll", onScroll);
      if($mobile.hasClass('is-active')){
        toggleMobileMenu($mobile);
      }
  });
});

}); // End of doc ready. 

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#header-menu a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#header-menu ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}