// ALL PAGES BROWSE GRID 1 GRID AD BANNER
// USE THIS WHEN ONLY A 1 GRID AD BANNER IS IN USE IN A PAGE
// IMAGE FILE SIZE: 370x553
// jrios@c21stores.com 
// 05272016


$(window).load(function() {

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	window.onresize = function() {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		console.log('yay it works!');
		AdClassAll();	
    	}, 100);
	};

	$('.product-grid li:nth-of-type(1)').after(
		'<li class="product-grid__cell product-grid__cell--1 jmrv-product-grid__cell--1">'+
		'<div class="product-grid-content-block" style="background-image: url(https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDUvMjcvMDkvMDkvMzcvNjc4LzM3MHg1NTMuanBnIl1d/370x553.jpg?sha=cdce0addc7721d54);">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide " href="https://www.c21stores.com/pages/gift-cards">SHOP NOW</a></p>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);
	
	function AdClassAll(){
		var newHeight1 = $('.product-grid li:nth-of-type(3)').height();
		// console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--1').height(newHeight1);
	}AdClassAll();

});
// DONE ALL PAGES BROWSE 1 GRID GRID AD BANNER

