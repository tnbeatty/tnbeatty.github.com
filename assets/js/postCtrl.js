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

	$('img').each(function(index) {
		$modalName = 'modal-' + index;
		$imgLink = $(this).attr('src');
		$newImage = ['<a href="#" data-reveal-id="',
			$modalName,
			'"><img src="',
			$imgLink,
			'" alt="',
			$(this).attr('alt'),
			'" /></a>'
		].join('');
		$(this).replaceWith($newImage);
		$theModal = ['<div id="'+ $modalName +'" class="reveal-modal">',
			'<h4 class="subheader">'+$(this).attr('alt')+'</h4>',
			'<div class="row"><div class="small-8 small-centered columns image">',
			'<img src="'+ $imgLink +'" />',
			'</div></div>',
			'<a class="close-reveal-modal">&#215;</a>',
			'</div>'
		].join('');

		$('body').append($theModal);
	});

});