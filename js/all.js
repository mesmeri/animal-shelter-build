$(function() {


// Friends-slider

	$('#friends-slider').slick({

		slidesToShow: 3,
		slidesToscroll: 1,
		infinite: false,
		prevArrow: '<button type="button" class="friends-arrow friends-arrow-prev slick-prev"></button>',
		nextArrow: '<button type="button" class="friends-arrow friends-arrow-next slick-next"></button>',
		responsive: [
		{
			breakpoint: 1200,
	      	settings: {
		        slidesToShow: 2
	      	}
   		},
   		{
			breakpoint: 768,
	      	settings: {
		        slidesToShow: 1
	      	}
   		},
   		{
   		 	breakpoint: 480,
		     settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
  				autoplay: true,
  				autoplaySpeed: 4000,
  				arrows: false
     			}
   			}
		]

	});

// End of Friends-slider



// Pagination

	// $('#pets-paginator').buzinaPagination({

	// });

// End of pagination


// Burger menu


	$('.burger-link').on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('burger-link-active');
		$('.main-navigation').addClass('main-navigation-opened').slideToggle(500);
	})

	$(window).resize(function(){
	  if (($(window).width() >= 992) && ($('.main-navigation').hasClass('main-navigation-opened'))) {
	  	$('.main-navigation').removeClass('main-navigation-opened').slideUp(500);
	  	$('.burger-link').removeClass('burger-link-active');
	  }
	});


// End of Burger menu




})