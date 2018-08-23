var headerHeight = $('.menu-nav').outerHeight();
(function($){
  'use strict';
    $(window).on('load', function () {
      if ($(".loader").length > 0)
      {
        $(".loader").fadeOut("slow");
      }
    });
})(jQuery)

$(document).ready(function() {

  var $window = $(window),
 			$hero = $('.hero-content'),
  		$header =$('header'),
			$menu = $('#overlay-menu'),
  		$body =$('body'),
  		$burger =$('.hamburger');




  $('.wrapper').addClass('loaded');

  $('.hamburger').on('click', function(e){
    e.preventDefault();
    	$(this).toggleClass('is-active');
      $('.overlay').toggleClass('active-overlay');
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
        }
      });
    });
  }

  function cleanCounter(){
    $('.counter').each(function() {
      var $this = $(this);
      $this.text('0');
    });

  }

  function counter(){

    var docViewTop = $(document).scrollTop(),
	    	docViewBottom =docViewTop + $(document).height(),
	    	elemTop = $('#team').offset().top,
    		elemBott = elemTop + $('#team').height();
    		// console.log('docViewTop',docViewTop);
    		// console.log('docViewBottom',docViewBottom);
    		// console.log('elemTop',elemTop);
    		// console.log('elemBott',elemBott);
    // if fun facts in view run counter. Otherwise zero out counter
    if ((docViewBottom >= elemTop) && (elemBott >= docViewTop) ){
      counterUp();
    } else {
        cleanCounter();
    }
  }

  // counter();

 	function checkWidth(){
  	if ($window.width() < 600) {
   	   $hero.removeClass('center');
  	} else {
 	     $hero.addClass('center');
 	 	}

  	if ($window.width() > 980) {
  	  if ($burger.hasClass('is-active')) {
  	    $('.overlay').toggleClass('active-overlay');
  	  }
 		}
  };

  checkWidth();

  $(window).resize(checkWidth);

  function filterLinks(){

   $('.filter-link').on('click', function(e){
    e.preventDefault();
    var activeLink = $(this);
    var linkHref = $(this).attr('href');
    $('.filter-link').removeClass('active');
    $(activeLink).addClass('active');

    // Filter images
    var activeImg = $('.works').find("[data-type='" + linkHref + "']");
    $('.brand-box').removeClass('active-img').addClass('inactive-img');
    activeImg.removeClass('inactive-img').addClass('active-img');

    // Show all images
    if(linkHref=="allPhotos"){
      $('.brand-box').removeClass('inactive-img').addClass('active-img');

    }

   }) // end of click function
  } // end of filterLinks

  filterLinks();

  $("#home-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 300,
      singleItem:true,
      autoPlay: true,
  });


 $("#featuresSlider").owlCarousel({
    autoPlay: 3000, //Set AutoPlay to 3 seconds
    items : 3,
    itemsDesktop : [1199,3],
    itemsDesktopSmall : [979,2],
    responsive: true,

	});

	$("#teamSlider").owlCarousel({
		//autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 4,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
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

	  var errors       = 0,
	  		emailArray   = (emails == null) ? [] :emails.split(','),
	  		expression   = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
	  $('.success').fadeTo(400, 0);
	  $('.success').hide();
	})

	$('a[href^="#"]').on('click', function(e) {
		e.preventDefault();
		var target = $(this).attr('href');

		$('.overlay-menu a').removeClass('active');
		$(this).addClass('active');

		$('html, body').stop().animate({
	      'scrollTop': $(target).offset().top
	  	}, 600, 'swing', function () {
	  		window.location.hash = target;
	      if( $('.hamburger').hasClass('is-active') ) {
	        $('.hamburger').toggleClass('is-active');
	        $('.overlay').toggleClass('active-overlay');
	    	}
		});
		return false;
	});

	$(window).scroll(function() {

			var scrollDistance = $(window).scrollTop();

		  function changeMenuColor() {
				if (scrollDistance >= 200) {
		        $('header').addClass('green-menu');
		    }else {
		        $('header').removeClass('green-menu');
		    }
			}
			changeMenuColor();
		  counter();

			$('.page-section').each(function(i) {
					if ( $(this).position().top <= scrollDistance+60 ) {
						 $('.overlay-menu a.active').removeClass('active');
						 $('.overlay-menu a').eq(i).addClass('active');
					}
			});

	}).scroll();


}); // End of doc ready.

