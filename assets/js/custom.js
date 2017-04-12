(function($) {
	"use strict";
	$(document).on('ready', function() {

		 $(window).on('load', function() {

		 	//preloder
		 	$("#loading").delay(2000).fadeOut(500);
	        $("#loading-center").click(function() {
	        	$("#loading").fadeOut(500);
	        });

	        //lightspeedBox
	 		$.fn.lightspeedBox({ 
	 	      	showDownloadButton: false, 
	 	      	showPlayButton: false,
	 	    });
		 });

		// Dropdown Menu
		$('.main-menu ul li.item-has-children>a').on('click', function(e) {
			$(this).removeAttr('href');
			var element = $(this).parent('li');
			if (element.hasClass('open')) {
				element.removeClass('open');
				element.find('li').removeClass('open');
				element.find('ul').slideUp(500,"swing");
			}
			else {
				element.addClass('open');
				element.children('ul').slideDown(500,"swing");
				element.siblings('li').children('ul').slideUp(500,"swing");
				element.siblings('li').removeClass('open');
				element.siblings('li').find('li').removeClass('open');
				element.siblings('li').find('ul').slideUp(500,"swing");
			}
		});

		// Footer
		$(window).on('scroll', function() { 
			 $(".content-footer").removeClass("show");
		    var scroll = $(window).scrollTop();
		    if (scroll > 150) {
				$(".content-footer").addClass("show");
			}
		});

		// Sidemenu toggle

		$('.menu-toggle-inner').on('click', function() {
		    $('.side-menubar').toggleClass('open');
		});

		//Mesonary
		$('.mesonary-grid').masonry({
	  		// options
	  		itemSelector: '.mesonary-item',
		});

		// Isotope
		var $grid = $('.portfolio-grid').isotope({
	  		// options
	  		itemSelector: '.portfolio-grid-item',
		  	layoutMode: 'fitRows',
		  	hiddenStyle: {
			    opacity: 0,
			    transform: 'scale(.4)rotate(60deg)',
			},
			visibleStyle: {
				opacity: 1,
			    transform: 'scale(1)rotate(0deg)',
			},
			stagger: 0,
	  		transitionDuration: '0.6s'
		});

		var filterFns = {
	  		// show if number is greater than 50
	 		 numberGreaterThan50: function() {
	    	var number = $(this).find('.number').text();
	    	return parseInt( number, 10 ) > 50;
	  		},
	  		// show if name ends with -ium
	  		ium: function() {
	   		 var name = $(this).find('.name').text();
	    	return name.match( /ium$/ );
	  		}
		};

		$('#filters').on( 'click', 'button', function() {
	  		var filterValue = $( this ).attr('data-filter');
	  		// use filterFn if matches value
	  		filterValue = filterFns[ filterValue ] || filterValue;
	  		$grid.isotope({ filter: filterValue });
		});

		$('.button-group').each( function( i, buttonGroup ) {
		  	var $buttonGroup = $( buttonGroup );
		  	$buttonGroup.on( 'click', 'button', function() {
		    	$buttonGroup.find('.is-checked').removeClass('is-checked');
		    $( this ).addClass('is-checked');
		  });
		});

		//Owl Carousel
	  	$("#our-client").owlCarousel({
	      autoPlay: 3500,
	      items : 5,
	      itemsDesktop : [1280,4],
	      itemsDesktopSmall : [1024,3],
	      rewindNav : false
	  	});

	});
})($);