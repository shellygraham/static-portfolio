$(document).ready(function() {
 
	$('#scroll nav a').click(function(){
	  $.scrollTo( this.hash, 1500, { easing:'swing' });
	  return false;
	});

	// menu nav toggle for iphone portrait view
	$('.slickbox').hide();

	// toggles the slickbox on clicking
	$('.slick-toggle').click(function() {
		$('.slickbox').toggle(200);
		return false;
	});
	
	$('.resume-icon').click(function(){
		document.location.href='resume.html';
		return false;
	});

	// portfolio image hover effect
	$('a.a01, a.a02, a.a03, a.a1, a.a2, a.a3, a.b1, a.b2, a.b3, a.c1, a.c2, a.c3, a.d1, a.d2, a.d3, a.e1, a.e2, a.e3').hover(
	function() {
	$(this).stop().animate({'opacity': '0'}, 'fast');
	},
	function() {
	$(this).stop().animate({'opacity': '1'}, 'fast');
	});

});
