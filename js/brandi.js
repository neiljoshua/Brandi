$(document).ready(function() {

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
                  $('header nav').addClass('green-menu');
              }else {
                  $('header nav').removeClass('green-menu');
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

  function unhideImag() {
   //var el = document.getElementByClassName('myimgclass')
   //var el = $('.works img').attr('data-type')
   //var item = document.getAttribute('data-type');
   // if (item==linkHref) {
   //  item.className=(item.className=='hidden')?'unhidden':'hidden';
   // }
  }  

  unhideImag();

  function homeSlider(){


    $("#home-slider").owlCarousel({
   
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true, 
        autoPlay: true,
        // "singleItem:true" is a shortcut for:
        // items : 4, 
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false,
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


// mobile menu
$('.icon-menu').on('click', function(){
  if ( $('.menu').hasClass('visible') ){
    $('.menu').removeClass('visible');
  }else{
  $('.menu').addClass('visible');
  }

});

$('.menu a').on('click', function(){
  $('.menu').removeClass('visible');
});

}); // End of doc ready.  
