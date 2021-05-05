/*Drawer Dropdown*/


$(document).ready(function(){


    $('.sub-menu ul').hide();
	$(".sub-menu a").click(function () {
		$(this).parent(".sub-menu").children("ul").slideToggle("100");
		$(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
	});



$('.menu-icon i').click(function () {
    $('.leftdrawer').toggleClass('overlay');
    $('.inner-drawer').toggleClass('mt_60');
    $('.animated').toggleClass('d_n');

    /*Disable shopping drawer first*/
    $('.shopping-cart-drawer').removeClass('overlay');
    $('.shopping-cart-drawer-container').removeClass('right_zero');
    $( "li.nav-shopping i" ).removeClass( "fa-times", 100 );
    $( ".item-count").removeClass('d-none');


    /*Disable user drawer*/
    $('.user-drawer').removeClass('overlay');
    $('.user-drawer-container').removeClass('right_zero');


});



$('li.nav-user i').click(function () {

    /*Disable shopping drawer first*/
    $('.shopping-cart-drawer').removeClass('overlay');
    $('.shopping-cart-drawer-container').removeClass('right_zero');
    $( "li.nav-shopping i" ).removeClass( "fa-times", 100 );
    $( ".item-count").removeClass('d-none');




        /*Disable menu drawer*/
    $('.leftdrawer').removeClass('overlay');
    $('.inner-drawer').removeClass('mt_60');
    $('.animated').addClass('d_n');
    $( ".menu-icon i" ).removeClass( "fa-times");


    /*Open User Drawer*/
    $('.user-drawer').toggleClass('overlay');
    $('.user-drawer-container').toggleClass('right_zero');
});


/*Shoppning Drawer Show*/

$('li.nav-shopping i').click(function () {

    /*Disable user drawer*/
    $('.user-drawer').removeClass('overlay');
    $('.user-drawer-container').removeClass('right_zero');

    /*Disable menu drawer*/
    $('.leftdrawer').removeClass('overlay');
    $('.inner-drawer').removeClass('mt_60');
    $('.animated').addClass('d_n');
    $( ".menu-icon i" ).removeClass( "fa-times");

    /*Open shopping drawer*/
    $('.shopping-cart-drawer').toggleClass('overlay');
    $('.shopping-cart-drawer-container').toggleClass('right_zero');



});






$('.dismiss-search img').click(function () {
    $('.nav-search-area').toggleClass('top_zero');
});

/*Search  End*/


 
  $( function() {
    $( ".menu-icon i" ).on( "click", function() {
      $( ".menu-icon i" ).toggleClass( "fa-times", 100 );
      $( ".menu-icon i" ).toggleClass('obj_rotation0');
    });

  } );



 
  $( function() {
    $( "li.nav-shopping i" ).on( "click", function() {
      $( "li.nav-shopping i" ).toggleClass( "fa-times", 100 );
      $( ".item-count").toggleClass('d-none');
    });
    
  } );




}); 


/*Main Searchbar Search */
$(document).ready(function() {    
   $('li.nav-search i').click(function(e) {
        $( ".nav-search-area" ).addClass('overlay top_zero');
        e.stopPropagation();
   });

   $(document.body).click(function() {
        $( ".nav-search-area" ).removeClass( "overlay top_zero" )
   });

   $('.nav-search-area').click(function(e) {
        e.stopPropagation();
   });
});




/*Disable Scrolling*/


  // $( function() {
  //   $( "li.nav-shopping i" ).on( "click", function() {

  //     $('body').toggleClass("fixed-position");
  
  //   });
    
  // } );

  // $( function() {
  //   $( ".menu-icon i" ).on( "click", function() {
  //      $('body').toggleClass("fixed-position");
  //   });

  // } );

