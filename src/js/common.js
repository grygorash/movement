 $(document).ready(function(){
 // всплывающее окно для отправки формы
 $(".popup").magnificPopup();

// регулярка
$('.date').mask('00/00/0000');
$('.phone_us').mask('+38 (000) 000-00-00')

// ФИКСИРОВАННАЯ ШАПКА
$("#header").removeClass("default");
$(window).scroll(function(){
	if ($(this).scrollTop() > 0) {
		$("#header").addClass("default").fadeIn('fast');
	} else {
		$("#header").removeClass("default").fadeIn('fast');
	};
});

// ПЛАВНЫЙ СКРОЛЛ ПО ЯКОРЯМ
$('a[href^="#"]').click(function(){
	var el = $(this).attr('href');
	$('body').animate({
		scrollTop: $(el).offset().top - 87}, 1000);
	return false;
});
});