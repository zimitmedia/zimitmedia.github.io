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
		backDelay: 3000,
		backSpeed: 10
	});

});