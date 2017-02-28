$(window).on('load', function() {

	$(".r").on('click', function() {
		$("#resume").toggleClass('on');
		
	});

	$(".o").on('click', function() {
		$("#poster1").toggleClass('on');
		
	});

	$(".t").on('click', function() {
		$("#poster2").toggleClass('on');
		
	});


	

	$('#poster1').on('click', function() {
		var $this = $(this);

		$(this).animate({left: 0, top: 0}, 900);

		setTimeout(function() {

			$this.toggleClass('on');

		}, 900);
	});

});