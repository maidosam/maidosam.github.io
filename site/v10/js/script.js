$(window).on('load', function() {



	// ABOUT (LINK)

	$(".about-link").on('click', function() {
		$("#about").addClass('about-active');
		$("#main").addClass('about-active');
		$(".about-link").addClass('about-active');
		$(".hide-link").addClass('about-active');
		$("#baseline").addClass('about-active');
		$("header").addClass('about-active'); 
	});

	// HIDE (LINK)

	$(".hide-link").on('click', function() {
		$("#about").removeClass('about-active');
		$("#main").removeClass('about-active');
	setTimeout(function(){
		$(".hide-link").removeClass('about-active');
		$(".about-link").removeClass('about-active');
		$("#baseline").removeClass('about-active');
		$("header").removeClass('about-active');
	}, 600);
	});

	// RM CASE STUDY (LINK)

	$(".rm-study-link").on('click', function() {
		$("#main").addClass('rm-study-active');
		$("#rm").addClass('rm-study-active');
		$("#baseline").addClass('study-active');
		$(".about-link").addClass('study-active');
	});

	// MS CASE STUDY (LINK)

	$(".ms-study-link").on('click', function() {
		$("#main").addClass('ms-study-active');
		$("#ms").addClass('ms-study-active');
		$("#baseline").addClass('study-active');
		$(".about-link").addClass('study-active');
	});

	// BACK (LINK)

	$(".rm-back-link").on('click', function() {
		$("#main").removeClass('rm-study-active');
		$("#rm").removeClass('rm-study-active');
	setTimeout(function(){
		$("#baseline").removeClass('study-active');
		$(".about-link").removeClass('study-active');
	}, 600);
	});

	$(".ms-back-link").on('click', function() {
		$("#main").removeClass('ms-study-active');
		$("#ms").removeClass('ms-study-active');
	setTimeout(function(){
		$("#baseline").removeClass('study-active');
		$(".about-link").removeClass('study-active');
	}, 600);
	});

});


