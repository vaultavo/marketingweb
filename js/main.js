AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: false
});

jQuery(document).ready(function($) {

	"use strict";

	// Loader
	$(".loader").delay(1000).fadeOut("slow");
  	$("#overlayer").delay(1000).fadeOut("slow");	

	// Site Menu
	var siteMenuClone = function() {	

		$('.js-clone-nav').each(function() {
			var $this = $(this);
			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
		});


		setTimeout(function() {
			
			var counter = 0;

      		$('.site-mobile-menu .has-children').each(function(){
        		var $this = $(this);
        
        		$this.prepend('<span class="arrow-collapse collapsed">');

        		$this.find('.arrow-collapse').attr({
          			'data-toggle' : 'collapse',
          			'data-target' : '#collapseItem' + counter,
        		});

        		$this.find('> ul').attr({
          			'class' : 'collapse',
          			'id' : 'collapseItem' + counter,
        		});

        		counter++;

      		});

    	}, 1000);

		$('body').on('click', '.arrow-collapse', function(e) {
      		var $this = $(this);
      		if ( $this.closest('li').find('.collapse').hasClass('show') ) {
        		$this.removeClass('active');
      		} else {
        		$this.addClass('active');
      		}
      		e.preventDefault();  
      
    	});

		$(window).resize(function() {
			var $this = $(this),
				w = $this.width();

			if ( w > 768 ) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		})

		$('body').on('click', '.js-menu-toggle', function(e) {
			var $this = $(this);
			e.preventDefault();

			if ( $('body').hasClass('offcanvas-menu') ) {
				$('body').removeClass('offcanvas-menu');
				$this.removeClass('active');
			} else {
				$('body').addClass('offcanvas-menu');
				$this.addClass('active');
			}
		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
	    	var container = $(".site-mobile-menu");
	    	if (!container.is(e.target) && container.has(e.target).length === 0) {
	      		if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
	    	}
		});
	}; 
	siteMenuClone();

	// Site Plus Minus
	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();

	// Site Slider Range
	var siteSliderRange = function() {
    	$( "#slider-range" ).slider({
      		range: true,
      		min: 0,
      		max: 500,
      		values: [ 75, 300 ],
      		slide: function( event, ui ) {
        		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      		}
    	});
    	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      		" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();

	// Site Carousel
	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
		    	center: false,
		    	items: 1,
		    	loop: true,
				stagePadding: 0,
		    	margin: 0,
		    	autoplay: true,
		    	nav: true,
		    	smartSpeed: 1000,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
		    	responsive:{
	        		600:{
	        			margin: 0,
	        			nav: true,
	          			items: 2
	        		},
	        		1000:{
	        			margin: 0,
	        			stagePadding: 0,
	        			nav: true,
	          			items: 3
	        		},
	        		1200:{
	        			margin: 0,
	        			stagePadding: 0,
	        			nav: true,
	          			items: 4
	        		}
		    	}
			});
		}

		$('.slide-one-item').owlCarousel({
	    	center: false,
	    	items: 1,
	    	loop: true,
			stagePadding: 0,
	    	margin: 0,
	    	smartSpeed: 1000,
	    	autoHeight: true,
	    	autoplay: true,
	    	pauseOnHover: false,
	    	nav: true,
	    	navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
	  	});
	};
	siteCarousel();

	// Site Stellar
	var siteStellar = function() {
		$(window).stellar({
	    	responsive: false,
	    	parallaxBackgrounds: true,
	    	parallaxElements: true,
	    	horizontalScrolling: false,
	    	hideDistantElements: false,
	    	scrollProperty: 'scroll'
	  	});
	};
	// siteStellar();

	// Site Count Down
	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
		  	var $this = $(this).html(event.strftime(''
		    	+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
		    	+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
		    	+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
		    	+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
		    	+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});
				
	};
	siteCountDown();

	// Site Date Picker
	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	// Site Sticky
	var siteSticky = function() {
		$(".js-sticky-header").sticky({topSpacing:0});
	};
	siteSticky();

	// Site Navigation
  	var OnePageNavigation = function() {
    	var navToggler = $('.site-menu-toggle');
   		$("body").on("click", ".main-menu li a[href^='#'], .smoothscroll[href^='#'], .site-mobile-menu .site-nav-wrap li a", function(e) {
      		e.preventDefault();

      		var hash = this.hash;

      		$('html, body').animate({
        		'scrollTop': $(hash).offset().top - 0
      		}, 1000, 'easeInOutCirc', function(){
        		window.location.hash = hash;
      		});

    	});
  	};
  	OnePageNavigation();

	// Site Scroll  
	var siteScroll = function() {
  		$(window).scroll(function() {

  			var st = $(this).scrollTop();

  			if (st > 100) {
  				$('.js-sticky-header').addClass('shrink');
  			} else {
  				$('.js-sticky-header').removeClass('shrink');
  			}

  		}) 
  	};
  	siteScroll();

	// Site Scroll  
	var siteSnapSVG = function() {
		var s = Snap("#platform-svg");
		Snap.load("images/platform.svg", onSVGLoaded ) ;
		function onSVGLoaded( data ){ 
			s.append( data );
			
			// Get all paths
			var pathsArr = [];
			for (var i = 1; i <= 30; i++) {
				var path = s.select('#path'+i);
				pathsArr.push(path);
			}

			// Create all dots for path
			var dotsArr = [];
			for (var i = 1; i <= pathsArr.length; i++) {
				var dot = s.circle(0, 0, 4);
				dot.attr({ fill: "#21409a", opacity: 0 });
				dotsArr.push(dot);
			}
		
			// Animates a dot that 
			// > fades in the dot at the start of the path
			// > then moves the dot forward along path
			// > fades out the dot at the end of the path 
			var forwardsDotAnimation = function (path, element) {
				var posStart = path.getPointAtLength(0);
				element.attr({ cx: posStart.x, cy: posStart.y, opacity:0 });
				element.animate({ opacity: '1' }, 500, mina.easeinout, function () { moveforwarddot(path, element, 'forward'); })
			}

			// Animates a dot that 
			// > fades in the dot at the end of the path
			// > then moves the dot backwards along path
			// > fades out the dot at the start of the path
			var backwardsDotAnimation = function (path, element) {
				var lenPath = Snap.path.getTotalLength(path.attr("d"));
				var posEnd = path.getPointAtLength(lenPath);
				element.attr({ cx: posEnd.x, cy: posEnd.y, opacity: 0 });
				element.animate({ opacity: '1' }, 500, mina.easeinout, function () { movebackwardsdot(path, element, 'backwards'); })
			}

			// Helper function that is called when dot has finished fading in and moves the dot forward along path from 
			// the start of the path to the end of the path
			var moveforwarddot = function (path, element, animType) {
				// Get the path length and starting point
				var len = Snap.path.getTotalLength(path.attr("d"));
				var posStart = path.getPointAtLength(0);
				var duration = Math.floor(Math.random() * 5000) + 2000; 

				element.attr({ cx: posStart.x, cy: posStart.y, opacity: 1 });
			  
				Snap.animate(0, len, function (value) {
					// Get the path attributes at a certain frame
				  	var pos = Snap.path.getPointAtLength(path, value);
			  
				  	// apply the attributes to the element
				  	element.attr({ cx: pos.x, cy: pos.y });
				}, duration, mina.easeinout, function () { fadeoutdot(path, element, animType) });
			};

			// Helper function that is called when dot has finished fading in and moves the dot backwards along path from 
			// the end of the path to the start of the path
			var movebackwardsdot = function (path, element, animType) {
				// Get the path length and starting point
				var len = Snap.path.getTotalLength(path.attr("d"));
				var posEnd = path.getPointAtLength(len);
				var duration = Math.floor(Math.random() * 5000) + 2000; 

				element.attr({ cx: posEnd.x, cy: posEnd.y, opacity: 1 });
			  
				Snap.animate(len, 0, function (value) {
					// Get the path attributes at a certain frame
				  	var pos = Snap.path.getPointAtLength(path, value);
			  
				  	// apply the attributes to the element
				  	element.attr({ cx: pos.x, cy: pos.y });
				}, duration, mina.easeinout, function () { fadeoutdot(path, element, animType) });
			};

			// Helper function that is called when moveforwarddot() or movebackwardsdot function is finished
			var fadeoutdot = function (path, element, animType) {
				element.attr({ opacity: 1 });
				element.animate({ opacity: '0' }, 500, mina.easeinout, function () { animationComplete(path, element, animType) })
			};

			// Helper function that is called when forwardsDotAnimation() or backwardsDotAnimation function is finished
			var animationComplete = function (path, element, animType) {
				// Infinte repeat of animations
				if (animType === 'forward') {
					forwardsDotAnimation(path, element);
				}
				if (animType === 'backwards') {
					backwardsDotAnimation(path, element);
				}
			}

			// Create all animations
			for (var i = 0; i < pathsArr.length; i++) {
				var direction = Math.floor(Math.random() * 4) + 1;
				if (direction == 1) {
					forwardsDotAnimation(pathsArr[i], dotsArr[i]);
				}
				if (direction == 2) {
					backwardsDotAnimation(pathsArr[i], dotsArr[i]);
				}
			}
		};
	};
	siteSnapSVG();
	
	// Contact Us Form
	var contactUsForm = function() {
		
		// Form Validation
		$("#contactus_form").validate({
			errorClass: "error contactus-error",
			validClass: "valid contactus-success",
			submitHandler: function(form,e) {
				e.preventDefault();
				
				// Remove Submit Btn and Show Spinner
				$('#form-error-message').empty();
				$('#contactus-submit').empty();
				$('#contactus-submit').append('<div id="contactus-submit-spinner" class="spinner-border text-site-purple"><span class="sr-only">Sending...</span></div><span class="text-site-purple ml-2" >Sending...</span>');
				
				// Send Ajax
				$.ajax({
					type: "POST",
					url: 'contactus_form.php',
					data: $(form).serialize(),
					success: form_submit_response,
					dataType: 'json'
				});
			}
		});

		

		// Form Submit Response
		function form_submit_response(data) {
			if(data.result == 'success') {
				// Sent Successfully
							
				// Hide Form Fields
				$('.form-group').remove();
				
				// Show Success Message
				$('#form-error-message').empty();
				$('#form-success-message').empty();
				$('#contactus-submit').empty();

				$('#form-error-message').hide();
				$('#form-success-message').append('<div class="d-flex justify-content-center align-items-center text-center form-submit-success-messages mb-4"><h2 class="h4">Thank you for contacting us! We will get back to you shortly!</h2></div>');
				$('#form-success-message').show();

			} else {
				// Sent Failed

				if(data.result == 'validation_failed') {
					// Validation Failed
					// Show Error Messages
					$('#form-error-message').empty();
					$('#form-success-message').empty();

					$('#form-success-message').hide();
					$('#form-error-message').append('<p class="mb-0"><b>Unfortunately there are some form errors:</b></p>');
					$('#form-error-message').append('<ul></ul>');
					jQuery.each(data.errors,function(key,val) {
						$('#form-error-message ul').append('<li>'+val+'</li>');
					});
					$('#form-error-message').append('<p class="mb-0"><b>Please correct them and try sending again!</b></p>');
					$('#form-error-message').show();

					// Remove Spinner and add Submit Btn
					$('#contactus-submit').empty();
					$('#contactus-submit').append('<input id="contactus-submit-btn" type="submit" value="Send Message" class="btn btn-primary-purple mr-2 mb-2">');
				
				} else {
					// Server Email error
					// Show Error Messages
					$('#form-error-message').empty();
					$('#form-success-message').empty();

					$('#form-success-message').hide();
					$('#form-error-message').append('<p class="mb-0"><b>Unfortunately there seems to be a server issue at the moment!</p>');
					$('#form-error-message').append('<p class="site-privacy-policy-links"><b>Please email us directly -</b> <a href="mailto:contactus@vaultavo.com">contactus@vaultavo.com</a></p>');
					$('#form-error-message').show();

					// Remove Spinner and Submit Btn
					$('#contactus-submit').empty();
					$('#contactus-submit').append('<input id="contactus-submit-btn" type="submit" value="Send Message" class="btn btn-primary-purple mr-2 mb-2">');
				}
			}
		}

	};
	contactUsForm();
	

});