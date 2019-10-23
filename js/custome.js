$(document).ready(function(){
	$('.slider').owlCarousel({
		loop:true,
		margin:0,
		dots:false,
		nav:true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	});
	$('.client-slider').owlCarousel({
		loop:true,
		margin:25,
		dots:true,
		nav:false,
		autoplay:true,
		autoplayTimeout:3000,
		autoplaySpeed:2000,
		autoplayHoverPause:true,
		responsive:{
			0:{
				items:2
			},
			768:{
				items:4
			},
			992:{
				items:5
			}
		}
	});
	
	$(".age-gate-submit-yes").click(function(){
		$(".alert-popup").fadeOut("slow");
	})
	
	
});

$(window).scroll(function() {
	var height = $(window).scrollTop();
	if (height > 50) {
		$('html').addClass('move-top');
	} else {
		$('html').removeClass('move-top');
	}
	
});

$(document).ready(function() {
	$("#back2Top").click(function(event) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	});
	
});
