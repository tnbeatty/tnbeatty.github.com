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

	$('img').each(function() {
		$NewImage = ['<a href="',
			$(this).attr("src"),
			'"><img src="',
			$(this).attr('src'),
			'" /></a>'
		].join('');
		$(this).replaceWith($NewImage);
	});

});