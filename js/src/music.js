$(function(){
	$('#musicControl').click(function(){
		$(this).toggleClass('on');
		$(this).find('.fa').toggleClass('fa-rotate-180');
	});
});
