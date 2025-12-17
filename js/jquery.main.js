$(document).ready(function() {

	"use strict";

	jQuery("#contactForm").validator().on("submit", function (event) {

		"use strict";

		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError();
			submitMSG(false, "Please Follow Error Messages and Complete as Required");
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		
		"use strict";

		// Initiate Variables With Form Content
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "php/form-process.php",
			data: "name=" + name + "&email=" + email + "&message=" + message,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		
		"use strict";

		$("#contactForm")[0].reset();
		submitMSG(true, "Thank you for your submission :)")
	}

	function formError(){
		
		"use strict";

		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		
		"use strict";

		if(valid){
			var msgClasses = "success form-message";
		} else {
			var msgClasses = "error form-message";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}	
	
	initStickyHeader();
	// sticky header init
	function initStickyHeader() {
		"use strict";

		var win = jQuery(window),
			stickyClass = 'sticky';

		jQuery('#header.sticky-header').each(function() {
			var header = jQuery(this);
			var headerOffset = header.offset().top || 0;
			var flag = true;


			jQuery(this).css('height' , jQuery(this).innerHeight());

			function scrollHandler() {
				if (win.scrollTop() > headerOffset) {
					if (flag){
						flag = false;
						header.addClass(stickyClass);
					}
				} else {
					if (!flag) {
						flag = true;
						header.removeClass(stickyClass);
					}
				}
			}

			scrollHandler();
			win.on('scroll resize orientationchange', scrollHandler);
		});
	}

	initAddClass();
	// AddClass init
	function initAddClass() {
		"use strict";

		jQuery(".icon-menu").click(function(event) {
			event.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});
	}

	initAnchors();
	// initialize smooth anchor links
	function initAnchors() {
		"use strict";

		new SmoothScroll({
			anchorLinks: 'a.smooth[href^="#"]:not([href="#"])',
			activeClasses: 'link'
		});
	}

	initCounter();
	// Counter init
	function initCounter() {
		"use strict";

		jQuery('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	}

	initSlickSlider();
	function initSlickSlider() {
		"use strict";

		jQuery('.main-slider').slick({
		  fade: true,
		  speed: 300,
		  dots: true,
		  arrows: false,
		  autoplay: true,
		  infinite: true,
		  centerPadding: '0'
		});
		jQuery('.testimonials-gallery').slick({
		  dots: false,
		  infinite: true,
		  speed: 300,
		  slidesToShow: 1,
		  centerPadding: '15%',
		  centerMode: true,
		  adaptiveHeight: true,
		  autoplay: true,
	  	  autoplaySpeed: 2000
		});
		jQuery('.testimonial-slider').slick({
		  dots: false,
		  infinite: true,
		  arrows: false,
		  speed: 900,
		  slidesToShow: 1,
		  adaptiveHeight: true,
		  autoplay: true,
	  	  autoplaySpeed: 2000
		});
		jQuery('.testimonials-slider').slick({
		  dots: true,
		  infinite: true,
		  arrows: false,
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 2000,
		  responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: false
		      }
		    }
		  ]
		});
		jQuery('.screen-gallery').slick({
	      prevArrow: jQuery('.screen-prev'),
	      nextArrow: jQuery('.screen-next'),
		  speed: 300,
		  dots: false,
		  arrows: true,
		  infinite: true,
		  autoplay: false,
		  slidesToShow: 3,
		  centerMode: true,
		  centerPadding: '0',
		  adaptiveHeight: true,
	  	  autoplaySpeed: 2000
		});
		jQuery('.line-slider').slick({
			speed: 800,
			dots: false,
			arrows: false,
			infinite: true,
			autoplay: true,
			slidesToShow: 6,
			autoplaySpeed: 2000,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3
					}
				},
				{
				breakpoint: 480,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}

	initLightbox();
	// modal popup init
	function initLightbox() {
		
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			padding: 0
		});
		jQuery("#newsletter-hiddenlink").fancybox().trigger('click');
	}

	initbackTop();
	// sticky header init
	function initbackTop() {
		"use strict";

		var jQuerybackToTop = jQuery("#back-top");
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > 100) {
				jQuerybackToTop.addClass('active');
			} else {
				jQuerybackToTop.removeClass('active');
			}
		});
		jQuerybackToTop.on('click', function(e) {
			jQuery("html, body").animate({scrollTop: 0}, 500);
		});
	}

	// load more init
	function initLoadMore() {
		"use strict";

		jQuery('.load-more-holder').loadMore({
			linkSelector: 'a.load-more',
			additionBottomOffset: 50
		});
	}

	initSameHeight();
	// align blocks height
	function initSameHeight() {
		"use strict";

		jQuery('.sameheight-container').sameHeight({
			elements: '.sameheight',
			useMinHeight: true,
			flexible: true,
			multiLine: true
		});
	}

	initStyleChanger();
	// style changer
	function initStyleChanger() {
		"use strict";
		
		var element = jQuery('#style-changer');

		if(element) {
			$.ajax({
				url: element.attr('data-src'),
				type: 'get',
				dataType: 'text',
				success: function(data) {
					var newContent = jQuery('<div>', {
						html: data
					});

					newContent.appendTo(element);
				}
			});
		}
	}

	initGoogleMap();
	// GoogleMap init
	function initGoogleMap() {
		"use strict";

		jQuery('.map').googleMapAPI({
			marker: 'images/icon.png',
			mapInfoContent: '.map-info',
			streetViewControl: false,
			mapTypeControl: false,
			scrollwheel: false,
			panControl: false,
			zoomControl: false
		});
	}


	initVegasSlider();
	function initVegasSlider() {
	jQuery("#bgvid").vegas({
	  slides: [
	    {   src: 'images/polina.jpg',
	        video: {
	            src: [
	                'video/polina.webm',
	                'video/polina.mp4'
	            ],
	            loop: true,
	            timer: false,
	            mute: true
	        }
	    }
	]
	});
	}

});

jQuery( window ).on( "load" , function() {
	"use strict";

	jQuery( "#loader" ).delay( 600 ).fadeOut( 300 );

});