/* global $,alert*/
$(function () {
	'use strict';

	$('[data-toggle="tooltip"]').tooltip();
	$('[data-toggle="popover"]').popover();
	bsCustomFileInput.init();

	let navBar = $('nav.navbar');
	$(window).scroll(function(){
		if($(window).scrollTop() >= navBar.height()){
			if(!navBar.hasClass('scrolled'))
				navBar.addClass('scrolled');
			// if(!navBar.hasClass('fixed-top'))
			// 	navBar.addClass('fixed-top');
		}
		else{
			if(navBar.hasClass('scrolled'))
				navBar.removeClass('scrolled');
			// if(navBar.hasClass('fixed-top'))
			// 	navBar.removeClass('fixed-top');
		}
		// short if 
		// $(window).scrollTop() >= navBar.height() ? navBar.addClass('scrolled') : navBar.removeClass('scrolled');
	})

	$('nav.navbar ul.navbar-nav li.active').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('body').offset().top
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.feather').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#feather').offset().top -45
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.pricing').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#pricing').offset().top
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.about').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#about').offset().top -150
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.reviews').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#reviews').offset().top -45
		}, 1000);
	});
	$('nav.navbar ul.navbar-nav li.contact').on('click', function() {
		$('html,body').animate({
		  scrollTop: $('#contact').offset().top
		}, 1000);
	});

	let currentDate = new Date();
	document.getElementById('current-year').textContent = currentDate.getFullYear();

	
	// --------  type effect ---------

	var textArray = [
		"programming", 
		"graphic design",
		"web design", 
		"web develpment", 
		"android",
		"information security"
	];

	// Character number of the current sentence being processed 
	var elementArrayIndex = 0; 
	var INTERVAL_VAL; 
	var currentElement = 0; 
	var outputText = document.querySelector("header .write-container span.write-text");
	var cursor = document.querySelector("header .write-container span.write-cursor");

	function TypeEffect() { 
		// Get substring with 1 characater added
		var text =  textArray[currentElement].substring(0, elementArrayIndex + 1);
		outputText.textContent = text;
		elementArrayIndex++;
	
		// If full sentence has been displayed then start to delete the sentence after some time
		if(text === textArray[currentElement]) {
			// Hide the cursor
			cursor.style.visibility = 'hidden';
	
			clearInterval(INTERVAL_VAL);
			setTimeout(function() {
				INTERVAL_VAL = setInterval(DeleteEffect, 100);
			}, 1000);
		}
	}
	
	function DeleteEffect() {
		// Get substring with 1 characater deleted
		var text =  textArray[currentElement].substring(0, elementArrayIndex - 1);
		outputText.innerHTML = text;
		elementArrayIndex--;
	
		// If sentence has been deleted then start to display the next sentence
		if(text === '') {
			clearInterval(INTERVAL_VAL);
	
			// If current sentence was last then display the first one, else move to the next
			if(currentElement == (textArray.length - 1))
			currentElement = 0;
			else
			currentElement++;
			
			elementArrayIndex = 0;
	
			// Start to display the next sentence after some time
			setTimeout(function() {
				cursor.style.visibility = 'visible';
				INTERVAL_VAL = setInterval(TypeEffect, 100);
			}, 200);
		}
	}
	
	// Start the typing effect on load
	INTERVAL_VAL = setInterval(TypeEffect, 100);

});