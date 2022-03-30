$(function() {
	$(".scroll").click(function(event){
		event.preventDefault();
            
		var url = this.href;
		var parts = url.split("#");
		var target = parts[1];
     
	var target_offset = $("#"+target).offset();
	var target_top = target_offset.top - 56;
     
	$('html, body').animate({scrollTop:target_top}, 800);
	});
});

$(function() {
	var topBtn = $('#page-top');
	topBtn.hide();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 1500) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});

	topBtn.click(function () {
		$('#menu').animate({
			scrollTop: 0
		}, 500);
        return false;
	});
});

$(function() {
	$('a').mouseover(function(){
		$(this).css('opacity', '.4').animate({'opacity': '1'}, 'slow');
	});
});