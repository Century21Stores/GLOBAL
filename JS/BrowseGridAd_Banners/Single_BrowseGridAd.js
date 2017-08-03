// ALL PAGES BROWSE GRID 1 GRID AD BANNER
$(window).load(function() {

	//POSITION
	var pos = 3;
	//IMAGE URL
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDYvMDgvMTQvMTUvMjcvOTU3LzM3MHg1NTJndWlkZS5wbmciXV0/370x552guide.png?sha=d6f91024cbfa7d5a";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/pages/gift-cards";
	
	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function() {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single();	
    	}, 100);
	};

	$('.product-grid li:nth-of-type('+ realPos +')').after(
		'<li class="product-grid__cell product-grid__cell--1 jmrv-product-grid__cell--1">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide " href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);
	
	function AdClassAll_Single(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--1').height(newHeight1);
	}AdClassAll_Single();

});
// END ALL PAGES BROWSE 1 GRID GRID AD BANNER
