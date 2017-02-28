$(window).on('load', function() {



	// ABOUT (LINK)

	$(".about-link").on('click', function() {
		$("#about").addClass('about-active');
		$("#main").addClass('about-active');
	});



	// RM CASE STUDY (LINK)

	$(".rm-study-link").on('click', function() {
		$("#main").addClass('rm-study-active');
		$("#rm").addClass('rm-study-active');
	});



	// MS CASE STUDY (LINK)

	$(".ms-study-link").on('click', function() {
		$("#main").addClass('ms-study-active');
		$("#ms").addClass('ms-study-active');
	});



	// BACK (LINK)

	$(".rm-back-link").on('click', function() {
		$("#main").removeClass('rm-study-active');
		$("#rm").removeClass('rm-study-active');
	});

	$(".ms-back-link").on('click', function() {
		$("#main").removeClass('ms-study-active');
		$("#ms").removeClass('ms-study-active');
	});







});


