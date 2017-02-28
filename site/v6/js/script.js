$(window).on('load', function() {

	$(".ResumeLink").on('click', function() {
		$("#about").toggleClass('slide-in');
		$("#main").toggleClass('slide-in');


		
	});

	$(".WorkLink").on('click', function() {
		$("#work").toggleClass('slide-in');
		$("#main").toggleClass('slide-out');
		$("#grey").toggleClass('slide-in');
		
	});

});