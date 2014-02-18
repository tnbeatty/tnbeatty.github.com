$(document).ready(function() {

	// $('.splash-container .background').fadeOut(0);

	var url = 'img/landing_bg.jpg';
	$.ajax({ 
		url : url, 
		cache: true,
		processData : false,
	}).always(function(){
		$('.splash-container .background-unloaded').css('background-image', 'url(' + url + ')');

		$('.splash-container .background-unloaded').css({
			'opacity' : 0.3,
			'-ms-filter' : 'progid:DXImageTransform.Microsoft.Alpha(Opacity=30)',
			'filter' : 'alpha(opacity=50)',
			'-moz-opacity' : 0.5,
			'-khtml-opacity' : 0.5
		});
	});
});