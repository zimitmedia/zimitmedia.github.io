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

function getNavbarOffset() {
	var offset;
	if ($(window).width() >= 1025) {
		offset = 79;
	} else {
		offset = 56
	}
	// SmoothScrolling to Anchors
	smoothScroll.init({
		speed: 1000,
		easing: 'easeInOutCubic',
		offset: offset
	});
	return offset;
}

$(document).ready(function(e){
	// Fixed Navbar Scripts
	navbarTransition();
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

	//Smooth Scrolling to Anchors
	var navbar_offset = getNavbarOffset();
	$(window).resize(function(){
		navbar_offset = getNavbarOffset();
	})

	// Typed.js animations for the splash section
	$('header #typed').typed({
		stringsElement: $('#typed-strings'),
		loop: true,
		typeSpeed: 20,
		backDelay: 2200,
		backSpeed: 10
	});

});

