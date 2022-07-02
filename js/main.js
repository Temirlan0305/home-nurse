// $(function(){

// 	$('.button__link').on('click', function(){
// 		const btn = $(this);
// 		const loader = btn.find('span');
// 		$.ajax({
// 			url: '/data.html',
// 			type: 'GET',
// 			beforeSend: function(){
// 				btn.attr('disabled', true);
// 				loader.addClass('d-inline-block');
// 			},
// 			success: function(responce){
// 				setTimeout(function(){
// 					loader.removeClass('d-inline-block');
// 					btn.attr('disabled', false);
// 					console.log('responce');
// 				}, 1000);
// 			},
// 			error: function() {
// 				alert('Error!');
// 				loader.removeClass('d-inline-block');
// 				btn.attr('disabled', false);
// 			}
// 		});
// 	});

// });
$(document).ready(function () {
	$('.slider').slick({
		dots: false,
		adaptiveHeight: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		speed: 800,
		easing: 'linear',
		infinite: true,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 800,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 10,
		touchMove: true,
		waitForAnimate: false,
		centerMode: false,
		varibleWidth: true,
		rows: 1,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}
		]
	});
});