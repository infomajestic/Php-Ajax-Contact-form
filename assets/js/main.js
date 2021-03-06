/* -------------------------------------------------------------------
 * Plugin Name           : Conformy - PHP Ajax Contact Form
 * Author Name           : TemplateHat
 * Author URI            : https://codecanyon.net/user/aip_theme3434
 * Created Date          : 28 September 2020
 * Version               : 1.0
 * File Name             : main.js
------------------------------------------------------------------- */
//  ----------------------------------------- 
//  JS LAYOUT           
//  ----------------------------------------- 
/*  
	1.LEFT SIDE MENU
*/

$(function(){
	"use strict";

//  ----------------------------------------- 
//  1.LEFT SIDE MENU         
//  ----------------------------------------- 
	// Add active class when clicking on links in menu
	var menuLink 		= $(".menu-link a");
	menuLink.on("click", function (event) {
		event.preventDefault ? event.preventDefault() : event.returnValue = false;
		var target = $(this).attr("href");
		$("html, body").stop().animate({
			scrollLeft: $(target).offset().left,
			scrollTop: $(target).offset().top
		}, 1200,"easeInOutExpo");
	});
	
	// Left Side Menu Scroll Spy
	$('body').scrollspy({ 
		target: '#leftSideMenu',
		offset: 20
	});

	/* Navbar Header Toggle Btn */
	$('.left-side-menu-toggle').on("click",function(){
		$('.left-side-menu').toggleClass("left-side-menu-visible");
	});
});	