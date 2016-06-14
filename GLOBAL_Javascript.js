// MASTER SCRIPTING JUN 14th 2016
// contact: jrios@c21stores.com

// NAVIGATION COLORS
$( "span:contains('Clearance')" ).css( "color", "#EA2C3B" );
$( "a:contains('Clearance')" ).css( "color", "#EA2C3B" );


// ALL PAGES BROWSE GRID AD BANNER
$(window).load(function() {
console.log($('.product-grid'));
console.log($('.product-grid li:nth-of-type(13)'));
	$(window).resize(function(){
		AdClassAll();
	});	
$('.product-grid li:nth-of-type(13)').after(
	'<li class="product-grid__cell product-grid__cell--1">'+
	'<div class="product-grid-content-block" style="background-image: url(https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDUvMjUvMDkvMDcvMjEvNjY4LzA2V2VlazFfQnJvd3NlQmFubmVyQWRfTk9DVEEuanBnIl1d/06Week1_BrowseBannerAd_NOCTA.jpg?sha=58c14b840fe140ca);">'+
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
		var newHeight1 = $('.product-grid li:nth-of-type(13)').height();
		$('.product-grid li:nth-of-type(14)').height(newHeight1);
	}AdClassAll();
	
	//GRID AD BANNER GLOBAL EXCEPTION
	if(window.location.href == "https://www.c21stores.com/categories/gifts-accessories" || 
	window.location.href == "https://www.c21stores.com/categories/gifts-dress-shirts-ties" || 
	window.location.href == "https://www.c21stores.com/categories/gifts-cologne" ||
	window.location.href == "https://www.c21stores.com/categories/gifts-polos-shirts" ||
	window.location.href == "https://www.c21stores.com/categories/gifts-tech"){
 		$('.product-grid__cell--1').fadeOut();
	}
	//END GRID AD BANNER GLOBAL EXCEPTION
	
});
// DONE ALL PAGES BROWSE GRID AD BANNER
  


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
