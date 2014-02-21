$(window).load(function() {

	// -- ACTION LISTENERS -- //
	// ---------------------- //

	$('.navbutton').click(function(e) {
		e.preventDefault();
		var ele = $(this);
		console.log(ele.attr('tnb-dest'));
		$('html, body').animate({ scrollTop: $('.'+ele.attr('tnb-dest')).offset().top }, 500);
	
	});

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