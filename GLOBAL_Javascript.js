// MASTER SCRIPTING JULY 06 2016
// contact: jrios@c21stores.com

// NAVIGATION COLORS
$( "span:contains('Clearance')" ).css( "color", "#EA2C3B" );
$( "a:contains('Clearance')" ).css( "color", "#EA2C3B" );
$("body").on("mouseenter mouseleave", "a", function(){
$( "span:contains('Clearance')" ).css( "color", "#EA2C3B" );
});

// ALL PAGES BROWSE GRID AD BANNER
$(window).load(function() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDYvMzAvMDkvMzkvNTEvNzkwLzA2V2VlazVfQnJvd3NlR3JpZEFkXzAxLmpwZyJdXQ/06Week5_BrowseGridAd_01.jpg?sha=f73d222362b93d99";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/pages/clearance";
	
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
		'<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="jm-cta-solidWhite content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide" href="'+ urlLINK + '">' + textLink + '</a></p>' +
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
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	}AdClassAll_Single();

});
// END ALL PAGES BROWSE GRID AD BANNER

// URLS EXCEPTIONS FOR BROWSE GRID ADD
$(window).load(function() {

var URLS = [ 
'https://www.c21stores.com/categories/clearance-women',
'https://www.c21stores.com/categories/clearance-shoes',
'https://www.c21stores.com/categories/clearance-handbags-accessories',
'https://www.c21stores.com/categories/clearance-men',
'https://www.c21stores.com/categories/clearance-kids',
'https://www.c21stores.com/categories/clearance-home'
]; 

exceptThisUR(URLS);

function exceptThisUR(params) {
  for (i=0; i<params.length; i++) {
    console.log(params[i]);
	if(window.location.href.indexOf(params[i]) > -1) {
    	$('.product-grid__cell--1').fadeOut();    	
    	// alert("your url contains the string "+params[i]);
    }    
  }
}

});
// END URLS EXCEPTIONS FOR BROWSE GRID ADD




// BEAUTY BROWSE GRID AD BANNER

$(window).load(function() {
	var jm_p = $('.breadcrumbs__node-group span:nth-of-type(2) a');
	var jm_cat = jm_p.html();
// 	console.log(jm_cat);

	if(jm_cat === "Beauty"){
		createAdBanner();
	}
	else{
		return false;
	}

	
});
	$(window).resize(function(){
		AdClass();
	});	
	function createAdBanner(){
		$('.product-grid li:nth-of-type(29)').after(
			'<li class="product-grid__cell product-grid__cell--1">'+
				'<div class="product-grid-content-block" style="background-image: url(https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDQvMjcvMTQvMjMvMDUvNDAzLzA1V2VlazFfR3JpZEFkX0JlYXV0eV9ub0NUQS5qcGciXV0/05Week1_GridAd_Beauty_noCTA.jpg?sha=4bbc8c08ee5111dc);">'+
					'<div class="product-grid-content-block__image"></div>'+
	 				'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
 						'<div class="content-block-content__container content-block-content__container--center">'+
 							'<div class="content-block-content__message content-block-content__message--dark">'+
// 								'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide " href="https://www.c21stores.com/pages/gift-cards">&nbsp</a></p>'+
 							'</div>'+
 						'</div>'+
					'</div>'+
				'</div>'+
			'</li>'
		);
		AdClass();
	}
	function AdClass(){
// 		var newHeight1 = $('.product-grid li:nth-of-type(4)').height();
// 		$('.product-grid li:nth-of-type(5)').height(newHeight1);
		var newHeight2 = $('.product-grid li:nth-of-type(29)').height();
		$('.product-grid li:nth-of-type(30)').height(newHeight2);
	}	
// END BEAUTY BROWSE GRID AD BANNER




var PROP65_POPUP = Object.freeze({
  "ceramic": '<img src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDIvMDUvMTUvMDQvNDMvNjAzL1BPUFVQNjVfY2VyYW1pYy5qcGciXV0/POPUP65_ceramic.jpg?sha=2b607f152ba38a35">',
  "crystal": '<img src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDIvMDUvMTUvMDQvMjgvOTkvUE9QVVA2NV9DUllTVEFMLmpwZyJdXQ/POPUP65_CRYSTAL.jpg?sha=35ab82a8daefe08e">',
  "handbags": '<img src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDIvMDUvMTUvMDQvMDkvODczL1BPUFVQNjVfaGFuZGJhZ3MuanBnIl1d/POPUP65_handbags.jpg?sha=efb6ea04a14cf6f1">',
  "handbags2": '<img src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDIvMDUvMTUvMDIvNTAvNzQvUE9QVVA2NV9oYW5kYmFnczIuanBnIl1d/POPUP65_handbags2.jpg?sha=63d2ccf67b9e2709">',
  "jewelry": '<img src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDIvMDUvMTQvNDIvMzgvMTM2L1BPUFVQNjVfamV3ZWxyeS5qcGciXV0/POPUP65_jewelry.jpg?sha=61f06fe3b29da5b2">',
  "wires": '<img src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDIvMDUvMTQvNDEvMTYvODk3L1BPUFVQNjVfd2lyZXMuanBnIl1d/POPUP65_wires.jpg?sha=cff7d8ef9acc6328">'
});
function prop65(popup){
  WEBLINC.dialog.create(PROP65_POPUP[popup], 
    {
      "uiDialogOptions": {
        "close": function(){
          $(".view").one("click", "a[data-prop65]", function(e){
            var key = $(e.target).data("prop65");
            prop65(key);
            e.preventDefault();
          });
        }
      }
    }
  );
}
$(".view").one("click", "a[data-prop65]", function(e){
  var key = $(e.target).data("prop65");
  prop65(key);
  e.preventDefault();
});

// PAGINATION FIX
    if ($('ul.pagination').length === 0){
      var count = $('.product-grid__cell').length;
      $('.browsing-controls--top').append('<ul class="pagination"><li class="pagination__node pagination__node--showing">' + count + ' items</li></ul>');
    }

// RELATED PRODUCTS
if ($(window).width() >= 1050) {
	// TO OPEN WIDGET
	$('.br-sf-widget-merchant-qv a').click(function() {
	    $('html, body').animate({
        	scrollTop: $(".br-rp-qv-show").offset().top
    	}, 500);
    	$('.page-footer').animate({paddingTop: '+=43%'},500);  	
	});

	// TO CLOSE WIDGET
	$('.br-sf-widget-merchant-popup-close a').click(function() {
    	$('html, body').animate({
	        scrollTop: $(".complimentary--bloomreach").offset().top
    	}, 500);
    	$('.page-footer').animate({paddingTop: '0'},500);  	    	
	});
}
// END RELATED PRODUCTS
