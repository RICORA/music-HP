$(function() {
	$('#menu li img')
	.hover(
		function(){
			$(this).stop().animate({'marginTop':'-59px'},'fast');
		},
		function () {
			$(this).stop().animate({'marginTop':'0px'},'fast');
		}
	);
});