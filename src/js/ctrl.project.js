$(window).load(function() {

	// -- ACTION LISTENERS -- //
	// ---------------------- //

	$('.navbutton').click(function(e) {
		e.preventDefault();
		var ele = $(this);
		$('html, body').animate({ scrollTop: $('.'+ele.attr('tnb-dest')).offset().top }, 500);
	});

	// -- MAIN -- //
	// ---------- //

});