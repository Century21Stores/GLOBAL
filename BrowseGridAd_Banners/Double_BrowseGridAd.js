// ALL PAGES BROWSE GRID 2 GRID AD BANNER
$(window).load(function() {

	//POSITION
	var pos = 4;
	//IMAGE URL
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDEvMjgvMTAvNDcvMDMvNTIyLzAyV2VlazNfQnJvd3NlR3JpZF9fRW5sYXJnZWRfaW1hZ2VzLmpwZyJdXQ/02Week3_BrowseGrid__Enlarged_images.jpg?sha=e2648a7818316693";
	//CTA TEXT
	var textLink = "SHOP NOW";
	//CTA URL
	var urlLINK = "https://www.c21stores.com/pages/gift-cards";
	
	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function() {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Double();	
    	}, 100);
	};

	$('.product-grid li:nth-of-type('+ realPos +')').after(
		'<li class="product-grid__cell product-grid__cell--2 jmrv-product-grid__cell--2">'+
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
	
	function AdClassAll_Double(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--2').height(newHeight1);
	}AdClassAll_Double();

});
// DONE ALL PAGES BROWSE 2 GRID GRID AD BANNER