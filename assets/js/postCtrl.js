/*
* postCtrl.js
*
* Written by Nate Beatty 
* June 2013
*
*/

$(document).ready(function() {

	$('h1').each(function() {
		$(this).replaceWith('<h4>'+$(this).text()+'</h4>');
	});
	$('h2').each(function() {
		$(this).replaceWith('<h4 class="subheader">'+$(this).text()+'</h4>');
	});

});