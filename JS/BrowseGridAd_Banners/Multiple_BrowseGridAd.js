// ALL PAGES BROWSE GRID AD BANNER
$(window).load(function() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType1 = 1;
	var gaType2 = 2;

	//POSITION
	var pos1 = 3;
	var pos2 = 7;

	//IMAGE URL
	var urlIMG1 = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDYvMDgvMTQvMTUvMjcvOTU3LzM3MHg1NTJndWlkZS5wbmciXV0/370x552guide.png?sha=d6f91024cbfa7d5a";
	var urlIMG2 = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDYvMDIvMTIvMTcvMTMvNzczLzc3MHg1NTJfY2VudGVyX2d1aWRlLnBuZyJdXQ/770x552_center_guide.png?sha=b7923eb8b7f42946";

	//LINK TEXT
	var textLink1 = "SHOP NOW";
	var textLink2 = "NOW SHOP";

	//LINK URL
	var urlLINK1 = "#1";
	var urlLINK2 = "#2";
	
	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos1 = pos1-1;
	var realPos2 = pos2-1;
	
	window.onresize = function() {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll();
    	}, 100);
	};

	$('.product-grid li:nth-of-type('+ realPos1 +')').after(
		'<li class="product-grid__cell product-grid__cell--' + gaType1 + ' jmrv-product-grid__cell--' + gaType1 + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG1 +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide " href="'+ urlLINK1 + '">' + textLink1 + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);
	
	$('.product-grid li:nth-of-type('+ realPos2 +')').after(
		'<li class="product-grid__cell product-grid__cell--' + gaType2 + ' jmrv-product-grid__cell--' + gaType2 + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG2 +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide " href="'+ urlLINK2 + '">' + textLink2 + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);

	function AdClassAll(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos1 + 2) + ')').height();
		var newHeight2 = $('.product-grid li:nth-of-type('+ (realPos2 + 2) + ')').height();
		console.log($('.product-grid li:nth-of-type('+ (realPos1 + 2) + ')'));
		console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType1).height(newHeight1);
		$('.jmrv-product-grid__cell--'+ gaType2).height(newHeight2);
	}AdClassAll();

});
// END ALL PAGES BROWSE GRID AD BANNER