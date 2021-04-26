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
});



$('li.nav-user i').click(function () {
    $('.user-drawer').toggleClass('overlay');
    $('.user-drawer-container').toggleClass('right_zero');
});












/*Search */
$('li.nav-search i').click(function () {
    $('.nav-search-area').toggleClass('overlay');
    $('.nav-search-area').toggleClass('top_zero');
});


$('.dismiss-search img').click(function () {
    $('.nav-search-area').toggleClass('top_zero');
});

/*Search  End*/

















 
  $( function() {
    $( ".menu-icon i" ).on( "click", function() {
      $( ".menu-icon i" ).toggleClass( "fa-times", 100 );
    });
  } );

}); 

