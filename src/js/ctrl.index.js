$(window).load(function() {

	// -- HELPER METHODS -- //
	// -------------------- //

	// -- ACTION LISTENERS -- //
	// ---------------------- //

	$('.navbutton').click(function(e) {
		e.preventDefault();
		var ele = $(this);
		$('html, body').animate({ scrollTop: $('.'+ele.attr('tnb-dest')).offset().top }, 500);
	});

	// Fade portfolio items in on window scroll
	// $('.portfolio-container article').css('opacity', 0.0);
	// $(window).scroll(function() {
	// 	// check the element position
	// 	$('.portfolio-container article').each(function() {
	// 		var itemBottom = $(this).position().top + $(this).outerHeight();
	// 		var windowBottom = $(window).scrollTop() + $(window).height();

	// 		if (windowBottom > itemBottom) {
	// 			$(this).animate({'opacity':'1'}, 500);
	// 		}
	// 	});
	// });

	// -- MAIN -- //
	// ---------- //

	$('.splash-container .background').fadeOut(0);
	var url = 'img/landing_bg.jpg';
	$.ajax({ 
		url : url, 
		cache: true,
		processData : false,
	}).always(function(){
		$('.splash-container .background-unloaded').css('background-image', 'url(' + url + ')');

		$('.splash-container .background-unloaded').css({
			'opacity' : 0.5,
			'-ms-filter' : 'progid:DXImageTransform.Microsoft.Alpha(Opacity=30)',
			'filter' : 'alpha(opacity=50)',
			'-moz-opacity' : 0.5,
			'-khtml-opacity' : 0.5
		});
	});

});