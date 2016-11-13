// Copyright 2016 Zimit Media Team

function navbarTransition() {
	var scroll_top = $(window).scrollTop();
	var offset_val = 90;
	if (scroll_top >= offset_val) {
		$('nav#header-nav img.nav-logo-hide').addClass('nav-logo-show');
		$('nav#header-nav').addClass('scrolled');
	} else {
		$('nav#header-nav img.nav-logo-hide').removeClass('nav-logo-show');
		$('nav#header-nav').removeClass('scrolled');
	}
}

$(document).ready(function(e){
	// Fixed Navbar Scripts
	$(window).scroll(navbarTransition);

	//Mobile Menu Toggle
	$('header .menu-icon').click(function(){
		if ($('header .menu-list-mobile').hasClass('activated')) {
			$('header .menu-list-mobile').removeClass('activated');
			$('header .menu-icon .material-icons').text('menu');
			$('nav#header-nav').removeClass('menu-activated');
			$('nav#header-nav img.nav-logo-hide').removeClass('nav-logo-show-mobile');
		} else {
			$('header .menu-list-mobile').addClass('activated');
			$('header .menu-icon .material-icons').text('close');
			$('nav#header-nav').addClass('menu-activated');
			$('nav#header-nav img.nav-logo-hide').addClass('nav-logo-show-mobile');
		}
	});

	$('header .menu-list-mobile li a').click(function(){
		$('header .menu-list-mobile').removeClass('activated');
		$('header .menu-icon .material-icons').text('menu');
		$('nav#header-nav').removeClass('menu-activated');
		$('nav#header-nav img.nav-logo-hide').removeClass('nav-logo-show-mobile');
	});


	// SmoothScrolling to Anchors
	smoothScroll.init({
		speed: 1000,
		easing: 'easeInOutCubic',
		offset: 79
	});

	// Typed.js animations for the splash section
	$('header #typed').typed({
		stringsElement: $('#typed-strings'),
		loop: true,
		typeSpeed: 20,
		backDelay: 2200,
		backSpeed: 10
	});

});

