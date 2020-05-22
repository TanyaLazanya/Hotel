$(document).ready(function(){
	
	// $(window).on('load', function(){
    //     $('.preloader').delay(500).fadeOut('slow', function(){
    //     	$(this).attr('style', 'display: none !important');
    //     });
    // });

	$('.reviews-carousel').owlCarousel({
        loop:true,
        margin:40,
        nav:true,
        dots:false,
        navText: [],
        items: 3,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:2
            },
            980:{
                items:3
            }
        }
    });
    
    baguetteBox.run('.gallery', {
        animation: 'slideIn',
    });

    new WOW().init();
	
	// $(window).scroll(function(){
	// 	if ($(this).scrollTop() > 300) {
	// 		$('.scrollToTop').fadeIn();
	// 	} else {
	// 		$('.scrollToTop').fadeOut();
	// 	}
	// });

	// $('.scrollToTop').click(function(){
	// 	$('html, body').animate({scrollTop : 0},800);
	// 	return false;
    // });
    
});