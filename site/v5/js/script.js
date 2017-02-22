$(window).on('load', function() {

	$(".test-btn").on('click', function() {
		$("#about").toggleClass('slide-in');
		$("#main").toggleClass('slide-in');
	});

});