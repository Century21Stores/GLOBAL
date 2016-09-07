// MASTER SCRIPTING SEP 7th 2016
// contact: jrios@c21stores.com

// NAVIGATION COLORS
$( "span:contains('Clearance')" ).css( "color", "#EA2C3B" );
$( "a:contains('Clearance')" ).css( "color", "#EA2C3B" );
$("body").on("mouseenter mouseleave", "a", function(){
$( "span:contains('Clearance')" ).css( "color", "#EA2C3B" );
});




// BEAUTY BROWSE GRID AD BANNER

$(window).load(function() {
	var jm_p = $('.breadcrumbs__node-group span:nth-of-type(2) a');
	var jm_cat = jm_p.html();
// 	console.log('worked! techGA');
	console.log(jm_cat);

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


// ALL PAGES BEACH TOWEL GRID AD

if((window.location.href.indexOf("https://www.c21stores.com/categories/mens-swim") > -1) || (window.location.href.indexOf("categories/women-swimsuits-cover-ups") > -1)) {

$(window).load(function() {

	//POSITION
	var pos = 30;
	//IMAGE URL
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDcvMTEvMTYvMTUvMjEvOTI5LzAxX0JlYWNoVG93ZWxzX0Jyb3dzZUdyaWRBZC5qcGciXV0/01_BeachTowels_BrowseGridAd.jpg?sha=4ed6aea51508cf6c";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/home-towels?towel_type%5B%5D=beach";
	
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

}
// END ALL PAGES BEACH TOWEL GRID AD



//CLICKABLE IMAGES
$(document).ready(function(){

    $('.hero-content-block, .three-column-square-content-block__container, .large-square-plus-two-content-block__container--large-image, .large-square-plus-two-content-block__container--small-image, .large-square-plus-one-content-block__container--large-image, .two-column-square-content-block__container, .two-column-hero-content-block__container').each(function(){
       var new_data= $('a', this).clone();
       	new_data.attr("id", "jm_img_anchor");
       	new_data.removeAttr("class");	
    	new_data.appendTo(this);
    });

    $('.large-square-plus-one-content-block__text').each(function(){
       var new_data= $('a', this).clone();
       	new_data.attr("id", "jm_img_anchor2");
       	new_data.removeAttr("class");	
    	new_data.appendTo(this);
    });
});
//END CLICKABLE IMAGES


// ZERO SEARCH SCRIPT
var search = $('#header-search-form .value').children().val().toLowerCase();
// search = search.filter(Boolean)

// HERE GOES THE ID of the Google Spreadsheet SUPPRESION LIST
var spreadsheetID = "1vbPtdgK7tCk7Nl14rDzzqsmMG2Ii5-WakBueCwAeuQE";
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
 
$.getJSON(url, function(data) { 
	var entry = data.feed.entry;
	var listArr = [];
	var listArr2 = [];
  
  	//PUSH DATA FROM 2 COLUMNS TO 2 ARRAYS 
  	$(entry).each(function(){
  		listArr.push(this.gsx$suppressed.$t.toLowerCase());
  		listArr2.push(this.gsx$suppressed2.$t.toLowerCase());
  	});
	
	//COMBINE BOTH ARRAYS INTO ONE SINGLE ARRAY
  	var listArrTotal = listArr.concat(listArr2);

  	// CLEAR EMPTY ITEMS
	listArr = listArr.filter(Boolean)
	listArr2 = listArr2.filter(Boolean)
	listArrTotal = listArrTotal.filter(Boolean)
	
	console.log(search);	
  	console.log(listArr);
  	console.log(listArr2);
  	console.log(listArrTotal);
	
	designerList();	
	function designerList(){
		for (var z=0; z < search.length; z++){

	 		if(arrayContains(listArrTotal, search)){
				$('.page-content__wrapper').hide("fast");
				$('.page-content').prepend(
					'<div id="result">'+
					'</div>'
				);
				$( "#result" ).load( "/pages/zero-search" );
				console.log("din din din!!");				
				break;				
			}
	
		}
	}
});
 
function arrayContains(a, obj) {
    for (var i = 0; i < a.length; i++) {
//         if (a[i] === obj) {
//             return true;
//         }
        if (obj.includes(a[i])) {
            return true;
        }

    }
    return false;
}
// END ZERO SEARCH SCRIPT






//SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 SORTING 1 

function allSortingSizes(){


$('.size-options__size-group').each(function() {


	// ADDING ID TO NON NUMBERS SIZES
	$(this).find('.size-options__size-label').each(function() {

    	var currentElement = $(this);
	    var value = currentElement.html();

		if(value.indexOf("XS") >= 0){
			$(currentElement).closest('li').attr('id', '2ws');    
			console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "SM"){
			$(currentElement).closest('li').attr('id', '3ws');
			console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "MED"){
			$(currentElement).closest('li').attr('id', '4ws');
			console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "LRG"){
			$(currentElement).closest('li').attr('id', '5ws');
			console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "XL"){
			$(currentElement).closest('li').attr('id', '6ws');
			console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "XXL"){
			$(currentElement).closest('li').attr('id', '7ws');
			console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "3XL"){
			$(currentElement).closest('li').attr('id', '8ws');
			console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value.indexOf("SHORT") >= 0){
			console.log(value);
			caldo = value.replace("SHORT", "1");
			caldoTrim = caldo.replace(/\s/g, '');
			console.log(caldoTrim);
			$(currentElement).closest('li').attr('id', caldoTrim);
			
		}		
		else if(value.indexOf("REG") >= 0){
			console.log(value);
			caldo = value.replace("REG", "2");
			caldoTrim = caldo.replace(/\s/g, '');
			console.log(caldoTrim);			
			$(currentElement).closest('li').attr('id', caldoTrim);
			
		}		
		else if(value.indexOf("LONG") >= 0){
			console.log(value);
			caldo = value.replace("LONG", "3");
			caldoTrim = caldo.replace(/\s/g, '');
			console.log(caldoTrim);
			$(currentElement).closest('li').attr('id', caldoTrim);
			
		}		
	
	});

	sortWeirdSizes(this);
	sortingSizes(this);	
	
});

//NON NUMBERS SORTING SIZES
function sortWeirdSizes(weirdList){

	$(weirdList).find('li').sort(function (a, b) {
	    return parseFloat(a.id) > parseFloat(b.id);
	}).each(function () {
    	var elem = $(this);
	    elem.remove();
    	$(elem).appendTo(weirdList);
	});
	
}


//NUMBERS SORTING SIZES
function sortingSizes(numberSizes) {

	$(numberSizes).each(function() {

		$(this).find('.size-options__size-label').each(function() {
	    	var currentElement = $(this);
	    	var value = currentElement.html();
	    	var newvalue = value.replace(/\s{2,}/g, ' ');
		    $(currentElement).closest('li').attr('id', value);
		    console.log(newvalue); 
		});
	
		sortingTheList(this);
	
	});


	//SORTING
	function sortingTheList(listToSort){
		console.log(listToSort);
		var itemsList = $(listToSort).children();
		console.log(itemsList);

		itemsList.sort(function (a, b) {
    		return parseFloat(a.id) > parseFloat(b.id);
		}).each(function () {
    		var elem = $(this);
	    	elem.remove();
	    	$(elem).appendTo(listToSort);
		});
	}


}sortingSizes();



}allSortingSizes();

$(document).on( 'click', '.product-summary__quickview a, .color-options__color-button', function(){
	setTimeout(function() {   //calls click event after a certain time
	   	allSortingSizes();
		console.log('gua gua guacamole!');
	}, 1000);
	

});

// END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1


// MULTIPLE GRID AD BANNERS FOR W32 REFRESH

// CREATING BROWSE GRID BANNERS BASED ON LOCATION -- CREATING BROWSE GRID BANNERS BASED ON LOCATION -- CREATING BROWSE GRID BANNERS BASED ON LOCATION -- CREATING BROWSE GRID BANNERS BASED ON LOCATION -- 
$(window).load(function() {
	var jm_p = $('.breadcrumbs__node-group span:nth-of-type(2) a');
	var jm_p3 = $('.breadcrumbs__node-group span:nth-of-type(3)');	
	var jm_cat = jm_p.html();
	var jm_cat3 = jm_p3.html();	
	var urlE1 = (window.location.href.indexOf("cashmere") > -1);
	var urlEG1 = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("under") > -1) ||
		(window.location.href.indexOf("edit") > -1) ||		
		(window.location.href.indexOf("italian") > -1) ||
		(window.location.href.indexOf("luxury") > -1) ||		
		(window.location.href.indexOf("acne") > -1) ||
		(window.location.href.indexOf("32agfsw") > -1) || //fendi
		(window.location.href.indexOf("32aphw") > -1) || // hardy
		(window.location.href.indexOf("32apshw") > -1)	//schouler
	);

 	console.log(urlEG1);

	if(jm_cat === "Tech"){
		TechBrowseGA();
	}
	else if((jm_cat === "Shoes") && (!urlEG1)){
		TallBootsBrowseGA();
	}	
	else if(jm_cat === "Kids"){
		KidsBootsBrowseGA();
	}
	else if((jm_cat === "Women") && (jm_cat3 !== "Cashmere Shop")){
		WomenCashemereBrowseGA();
	}
	else if((jm_cat === "Men") && (jm_cat3 !== "Cashmere Shop") && (!urlE1)){
		MenCashemereBrowseGA();
	}					
	else{
		return false;
	}
	
// if (window.location.href.indexOf("?added-to-cart=555") > -1)

	
});



// TECH BROWSE GRID AD BANNER
function TechBrowseGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDgvMjkvMTQvMzAvMzMvOTg5LzA5V2VlazJfQnJvd3NlR3JpZEFkX3RlY2guanBnIl1d/09Week2_BrowseGridAd_tech.jpg?sha=02e557457c04427a";
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
// 		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide" href="'+ urlLINK + '">' + textLink + '</a></p>' +
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

}
// END TECH GRID AD BANNER



// TALL BOOTS BROWSE GRID AD BANNER
function TallBootsBrowseGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDgvMzEvMDkvMzEvMjkvNTMvMDFfMDlXZWVrMl9UQUxMQk9PVFMuanBnIl1d/01_09Week2_TALLBOOTS.jpg?sha=4dce37cb34724891";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/shoes-boots?boots_type%5B%5D=tall";
	
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
		'<div class="content-block-content__message content-block-content__message--light">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
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

}
// END TALL BOOTS GRID AD BANNER



// KIDS BOOTS BROWSE GRID AD BANNER
function KidsBootsBrowseGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDgvMzEvMDkvMzAvMDIvNzQ3LzAxXzA5V2VlazJfa2lkcy5qcGciXV0/01_09Week2_kids.jpg?sha=a7d32b1c8cbbf117";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/kids-cold-weather-shop?kids_category%5B%5D=girls+shoes&kids_category%5B%5D=boys+shoes";
	
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
		'<div class="content-block-content__message content-block-content__message--light">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
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

}
// END KIDS BOOTS GRID AD BANNER


// WOMEN CASHMERE GA BROWSE GRID AD BANNER
function WomenCashemereBrowseGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDkvMDEvMTIvNDkvNDYvNzMwLzAxXzlXZWVrMl9DQVNITUVSRV9BQ0MuanBnIl1d/01_9Week2_CASHMERE_ACC.jpg?sha=2066bb72e3fad7be";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/women-cashmere-shop";
	
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
		'<div class="content-block-content__message content-block-content__message--light">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
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

}
// WOMEN GA BOOTS GRID AD BANNER


// MEN CASHMERE GA BROWSE GRID AD BANNER
function MenCashemereBrowseGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDkvMDEvMTIvNTQvMTUvMzAyLzAxXzA5V2VlazJfQ0FTSE1FUkUuanBnIl1d/01_09Week2_CASHMERE.jpg?sha=e3b785226530aded";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/men-sweaters?sweater_style%5B%5D=cashmere";
	
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
		'<div class="content-block-content__message content-block-content__message--light">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
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

}
// MEN GA BOOTS GRID AD BANNER

