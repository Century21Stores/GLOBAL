// MASTER SCRIPTING OCT 27 2016
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
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
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
	
	//console.log(search);	
  	//console.log(listArr);
  	//console.log(listArr2);
  	//console.log(listArrTotal);
	
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
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "SM"){
			$(currentElement).closest('li').attr('id', '3ws');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "MED"){
			$(currentElement).closest('li').attr('id', '4ws');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "LRG"){
			$(currentElement).closest('li').attr('id', '5ws');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "XL"){
			$(currentElement).closest('li').attr('id', '6ws');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "XXL"){
			$(currentElement).closest('li').attr('id', '7ws');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));			
		}
		else if(value == "3XL"){
			$(currentElement).closest('li').attr('id', '8ws');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value.indexOf("SHORT") >= 0){
			//console.log(value);
			caldo = value.replace("SHORT", "1");
			caldoTrim = caldo.replace(/\s/g, '');
			//console.log(caldoTrim);
			$(currentElement).closest('li').attr('id', caldoTrim);
			
		}		
		else if(value.indexOf("REG") >= 0){
			//console.log(value);
			caldo = value.replace("REG", "2");
			caldoTrim = caldo.replace(/\s/g, '');
			//console.log(caldoTrim);			
			$(currentElement).closest('li').attr('id', caldoTrim);
			
		}		
		else if(value.indexOf("LONG") >= 0){
			//console.log(value);
			caldo = value.replace("LONG", "3");
			caldoTrim = caldo.replace(/\s/g, '');
			//console.log(caldoTrim);
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
		    //console.log(newvalue); 
		});
	
		sortingTheList(this);
	
	});


	//SORTING
	function sortingTheList(listToSort){
		//console.log(listToSort);
		var itemsList = $(listToSort).children();
		//console.log(itemsList);

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
	}, 1000);
	

});

// END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1 END SORTING 1




// FIX MASTER COLLECTION SIZES
function SizeMasterEliminator(){
$('.product-detail-container--package .product-detail-container__child-product').each(function() {
	var packageproduct = $(this).find('.size-options__size-group');
	var countChildren = packageproduct.children().length;
	//console.log('Debugging Master Collections - Package Product Detail:');
	//console.log(packageproduct);
	//console.log(countChildren);	
	if (countChildren == 1){
		var parentOfsingle = packageproduct.parent()
		//console.log(parentOfsingle.find('.size-options__size-header'))
		$('.size-options__size-header').hide();
		//$(parentOfsingle).hide();
		$('.product-details--package-child').addClass('jm-breath-children');
	}
});
}SizeMasterEliminator();
// END FIX MASTER COLLECTION SIZES

// SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - 


function allSortingMASTERSizes(){


$( "div.product-detail-container__child-product" ).wrapAll( '<div class="jm_sorted_products"></div>');
var soldOutPack = $('.product-detail-container--package .product-details__sold-out').closest('div .product-detail-container__child-product');
soldOutPack.hide();

$('.product-detail-container--package .jm_sorted_products').each(function() {


	// ADDING ID TO NON NUMBERS SIZES
	$(this).find('.size-options__size-label').each(function() {

    	var currentElement = $(this);
	    var value = currentElement.html();

		if(value.indexOf("TWIN") >= 0){
			$(currentElement).closest('div.product-detail-container__child-product').attr('data-sort', '1home');    
			//console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}
		else if(value.indexOf("F/QN") >= 0){
			$(currentElement).closest('div.product-detail-container__child-product').attr('data-sort', '2home');    
			//console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}
		else if(value.indexOf("QUEEN") >= 0){
			$(currentElement).closest('div.product-detail-container__child-product').attr('data-sort', '3home');
			//console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}		
		else if(value.indexOf("KING") >= 0){
			$(currentElement).closest('div.product-detail-container__child-product').attr('data-sort', '4home');    
			//console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}	
	
	});

	//sortMasterWeirdSizes(this);
// 	console.log('veritas' + this);
// 	sortingSizes(this);	
	
});

//NON NUMBERS SORTING SIZES
function sortMasterWeirdSizes(weirdList){


	$(weirdList).find('div.product-detail-container__child-product').sort(function (a, b) {
	    return parseFloat($(a).attr('data-sort')) > parseFloat($(b).attr('data-sort'));
	}).each(function () {
    	var elem = $(this);
	    elem.remove();
    	$(elem).appendTo(weirdList);
	});

	
}


}allSortingMASTERSizes();

// $(document).on( 'click', '.product-summary__quickview a', function(){
// 	setTimeout(function() {   //calls click event after a certain time
// 	   	allSortingSizes();
// 		console.log('gua gua guacamole!');
// 	}, 1000);
// 	
// 
// });

// END SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - 




// MULTIPLE GRID AD BANNERS FOR W32 REFRESH

// CREATING BROWSE GRID BANNERS BASED ON LOCATION -- CREATING BROWSE GRID BANNERS BASED ON LOCATION -- CREATING BROWSE GRID BANNERS BASED ON LOCATION -- CREATING BROWSE GRID BANNERS BASED ON LOCATION -- 
$(window).load(function() {
	var jm_p = $('.breadcrumbs__node-group span:nth-of-type(2) a');
	var jm_p3 = $('.breadcrumbs__node-group span:nth-of-type(3)');	
	var jm_cat = jm_p.html();
	var jm_cat3 = jm_p3.html();	
	var urlEshoes = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("under") > -1) ||
		(window.location.href.indexOf("edit") > -1) ||		
		(window.location.href.indexOf("italian") > -1) ||
		(window.location.href.indexOf("rain") > -1) ||		
		(window.location.href.indexOf("luxury") > -1) ||
		(window.location.href.indexOf("40abvw") > -1) || //Bottega
		(window.location.href.indexOf("40afrw") > -1) || // Russo
		(window.location.href.indexOf("40ajcw") > -1) || //Jimmy
		(window.location.href.indexOf("pajar") > -1)//Pajar
	);
	var urlEhandbags = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("shop") > -1) ||
		(window.location.href.indexOf("luxury") > -1) ||		
		(window.location.href.indexOf("edit") > -1) ||
		(window.location.href.indexOf("fur") > -1) ||		
		(window.location.href.indexOf("vintage") > -1) ||
		(window.location.href.indexOf("40ainw") > -1) || //Invicta
		(window.location.href.indexOf("40ajsw") > -1) || //Sander
		(window.location.href.indexOf("40amiw") > -1) || //Missoni
		(window.location.href.indexOf("40amow") > -1) //Moschino
	);	
	var urlEkids = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("gifts") > -1) ||
		(window.location.href.indexOf("essentials") > -1) ||		
		(window.location.href.indexOf("shop") > -1) ||
		(window.location.href.indexOf("occasion") > -1) ||		
		(window.location.href.indexOf("disney") > -1) ||	
		(window.location.href.indexOf("toys") > -1)
	);
	var urlEmens = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("shop") > -1) ||
		(window.location.href.indexOf("street") > -1) ||		
		(window.location.href.indexOf("40aalm") > -1) || //Altea
		(window.location.href.indexOf("40agnm") > -1) || //Ganesh
		(window.location.href.indexOf("40ainm") > -1) || //Invicta
		(window.location.href.indexOf("40ajvm") > -1) || //Varvatos
		(window.location.href.indexOf("40almm") > -1) || //Moschino
		(window.location.href.indexOf("40amtm") > -1) || //Missoni Ties
		(window.location.href.indexOf("40amsm") > -1) || //Missoni More		
		(window.location.href.indexOf("40avrm") > -1) || //Versace
		(window.location.href.indexOf("38ajgm") > -1)//Will		
	);
	var urlEcontemporary = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("shop") > -1) ||
		(window.location.href.indexOf("italian") > -1) ||				
		(window.location.href.indexOf("chic") > -1) ||
		(window.location.href.indexOf("edit") > -1) ||		 
		(window.location.href.indexOf("shoulder") > -1)
	);		
	var urlEmwomens = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("club") > -1) ||
		(window.location.href.indexOf("shop") > -1) ||		
		(window.location.href.indexOf("salon") > -1) || 
		(window.location.href.indexOf("40asvw") > -1) || //DSquared
		(window.location.href.indexOf("40almw") > -1) || // Moschino
		(window.location.href.indexOf("40amaw") > -1) || //Scotch
		(window.location.href.indexOf("40adkw") > -1) || //Raoul
		(window.location.href.indexOf("40assw") > -1) //Samantha
	);
	var urlEhome = (
		(window.location.href.indexOf("essentials") > -1) ||
		(window.location.href.indexOf("holiday") > -1) ||
		(window.location.href.indexOf("seasonal") > -1) ||		
		(window.location.href.indexOf("prep") > -1) || 
		(window.location.href.indexOf("40ahbh") > -1) || //BOSS
		(window.location.href.indexOf("39agdh") > -1) || // Godinger
		(window.location.href.indexOf("38afbh") > -1)//Adler
	);
					
 	//console.log(urlEshoes);

	if(jm_cat === "Tech"){
		giftsGA();	
		TechBrowseGA();
	}
	else if(jm_cat === "New + Now"){
		giftsGA();
	}
	else if(jm_cat === "Beauty"){
		giftsGA();
		BeautyGA();
	}
	else if(jm_cat === "Shoes"){
		giftsGA();
		if(!urlEshoes){
			BootsGA();
		}		
	}
	else if(jm_cat === "Handbags &amp; Accessories"){
		giftsGA();
		if(!urlEhandbags){
			accessoriesFurShopGA();
		}
	}			
	else if(jm_cat === "Kids"){
		giftsGA();
		if(!urlEkids){
			coldWeatherGA();
		}				
	}
	else if(jm_cat === "Contemporary"){
		giftsGA();
		if(!urlEcontemporary){
			contemporaryFurGA();
		}
	}
	else if(jm_cat === "Women"){
		giftsGA();
		if(!urlEmwomens){
			womensFurGA();
		}		
	}
	else if(jm_cat === "Men"){
		giftsGA();
		if(!urlEmens){
			mensCoatGA();
		}
	}
	else if(jm_cat === "Home"){
		giftsGA();
		if(!urlEhome){
			homedecorGA();
		}
	}
	else{
		return false;
	}
	
// if (window.location.href.indexOf("?added-to-cart=555") > -1)
	//CALL MATCH HEIGHT AFTER 2 SECONDS 
	window.onresize = function() {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		AdClassAll_Single();	
    	}, 100);
	};
	function AdClassAll_height(){
		setTimeout(function(){
			var newHeightALL = $('.product-grid li:nth-of-type(5)').height();
			$('.jmrv-product-grid__cell--1').height(newHeightALL);
		},2000);			
	}AdClassAll_height();
		
});



// TECH BROWSE GRID AD BANNER
function TechBrowseGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTUvNDEvMTIvNjM5LzExV2VlazFfQnJvd3NlR3JpZEFkX3RlY2guanBnIl1d/11Week1_BrowseGridAd_tech.jpg?sha=aaf74f26d37bfe13";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "#";
	
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
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},500);			
	}AdClassAll_Single();	

}
// END TECH GRID AD BANNER


// BEAUTY GRID AD BANNER
function BeautyGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTYvMTgvMjMvNzc5LzExV2VlazFfR3JpZEFkX0JlYXV0eS5qcGciXV0/11Week1_GridAd_Beauty.jpg?sha=aef8a6ef02a17147";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "#";
	
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
// 		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);	

	function AdClassAll_Single(){
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},500);			
	}AdClassAll_Single();
	
}
// END BEAUTY GRID AD BANNER


	
	
// ACCESSORIES FUR SHOP GRID AD BANNER
function accessoriesFurShopGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTUvMjQvMjYvNDQ2LzAxXzExV2VlazFfQkdfRlVSU0FMT05BQ0MuanBnIl1d/01_11Week1_BG_FURSALONACC.jpg?sha=7867e31a5b534169";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/handbags-accessories-fur-salon";
	
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
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 1) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();

}
// ACCESSORIES FUR SHOP GRID AD BANNER


// HOME DECOR GRID AD BANNER
function homedecorGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTUvMjcvNDUvNjE3LzAxXzExV2VlazFfR3JpZEFkX0hPTElEQVlERUNPUi5qcGciXV0/01_11Week1_GridAd_HOLIDAYDECOR.jpg?sha=c05cf6dd87ba5c02";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/home-holiday-decor";
	
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
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();

}
// HOME DECOR GRID AD BANNER


// KIDS COLD WEATHER GRID AD BANNER
function coldWeatherGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTQvNTcvMjYvODg3LzAxXzExV2VlazFfQkdfY29sZHdlYXRoZXIuanBnIl1d/01_11Week1_BG_coldweather.jpg?sha=849ba371bc67ed9b";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/kids-cold-weather-shop";
	
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
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();
		
}


// END KIDS COLD WEATHER  GRID AD BANNER


// KIDS SNOW DAYS GRID AD BANNER
function KidsSnowDaysGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 30;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMDkvMjYvMTEvMDcvMTUvMTE5LzEwV2VlazFfQXByZXNTa2lfQkdBX0tfSU1HLmpwZyJdXQ/10Week1_ApresSki_BGA_K_IMG.jpg?sha=3772296bd3b7a355";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "#";
	
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
	setInterval(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},500);			
	}AdClassAll_Single();

}
// END KIDS SNOW DAYS GRID AD BANNER


// MENS COAT GRID AD BANNER
function mensCoatGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTQvNDIvMDUvNjgyLzAxXzExV2VlazFfQkdfTUVOU0NPQVRTLmpwZyJdXQ/01_11Week1_BG_MENSCOATS.jpg?sha=58d0689c0c9fa275";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/men-coats-jackets";
	
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
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();

}
// END MENS COAT GRID AD BANNER



// WOMENS FUR GRID AD BANNER
function womensFurGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTQvMjUvMDIvMjEwLzAxXzExV2VlazFfQkdfRlVSU0FMT04uanBnIl1d/01_11Week1_BG_FURSALON.jpg?sha=91ca268d4481f85a";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/women-fur-shop";
	
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
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();

}
// END WOMENS FUR GRID AD BANNER

// CONTEMPORARY COAT GRID AD BANNER
function contemporaryFurGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTQvMjUvMDIvMjEwLzAxXzExV2VlazFfQkdfRlVSU0FMT04uanBnIl1d/01_11Week1_BG_FURSALON.jpg?sha=91ca268d4481f85a";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/women-fur-shop";
	
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
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();

}
// END CONTEMPORARY COAT GRID AD BANNER



// BOOTS GRID AD BANNER
function BootsGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjcvMTQvNDkvMTIvNjM4LzAxXzExV2VlazFfQkdfQk9PVFNGVEZVUi5qcGciXV0/01_11Week1_BG_BOOTSFTFUR.jpg?sha=3ebb90fd07e7672c";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/shoes-cold-weather-rain";
	
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
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);
	
	function AdClassAll_Single(){
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();

}
// END BOOTS GRID AD BANNER


// GIFTS GRID AD BANNER
function giftsGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 29;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMjgvMTMvMjcvNDMvODIvMDFfMTFXZWVrMV9CR19ob2xpZGF5LmpwZyJdXQ/01_11Week1_BG_holiday.jpg?sha=633617e481413aca";
	//LINK TEXT
	var textLink = "SHOP GIFTS";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/pages/gifts";
	
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
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);
	
	function AdClassAll_Single(){
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 1) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1000);			
	}AdClassAll_Single();

}
// END GIFTS GRID AD BANNER



// ACQUISITION GRID AD BANNER
function acquisitionGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 46;
	//IMAGE URL 370x552
	var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTAvMDYvMTYvMDAvNDQvMTUyLzA5V2VlazRfUExDQ19HcmlkX0lNRy5qcGciXV0/09Week4_PLCC_Grid_IMG.jpg?sha=db1dd8d42c58d407";
	//LINK TEXT
	var textLink = "LEARN MORE";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/instant_credit";
	
	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single();	
    	}, 100);
	};


	var $GridAd = $('.product-grid li:nth-of-type(3)');
	
	$('.product-grid li:nth-of-type('+ realPos +')').after(
		'<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);

	function AdClassAll_Single(){
	setTimeout(function(){
		var newHeight1 = $GridAd.outerHeight();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--'+ gaType).outerHeight(newHeight1);
	},1000);			
	}AdClassAll_Single();


}
// END ACQUISITION GRID AD BANNER


// RETENTION GRID AD BANNER
function retentionGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 46;
	//IMAGE URL 370x552
	var urlIMG = "https://www.staging.c21.weblinc.com/media/W1siZiIsIjIwMTYvMDkvMTQvMTYvMjkvMTkvNzc3LzA5V2VlazRfUExDQ19HcmlkX1JldGVudGlvbjIuanBnIl1d/09Week4_PLCC_Grid_Retention2.jpg?sha=68c4450c40899332";
	//LINK TEXT
	var textLink = "LEARN MORE";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/instant_credit";
	
	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
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
		// '<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);
	
	function AdClassAll_Single(){
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));		
		$('.jmrv-product-grid__cell--1').height(newHeight1);
	},2000);			
	}AdClassAll_Single();

}
// END RETENTION GRID AD BANNER


	



// PROMOTIONAL DISCOUNTS HELPFUL MESSAGE

	$('.cart-prices__label').eq(1).html(function(){
		
		console.log(this);
		var promotion_message = $(this).html();
		console.log('Promotion message: ' + promotion_message);
		$('.cart-prices__label').each(function(i) {
			filtered_promotion_message = promotion_message.match(/\{([^}]+)\}/)[1];
		});	
		var new_promotion_message = promotion_message.replace("{", " ").replace("}", " ").replace(filtered_promotion_message, " ");	

		//console.log('Promotion message: ' + promotion_message);
		//console.log('Filtered promotion message: ' + filtered_promotion_message);	
		//console.log('New promotion message: ' + new_promotion_message);			


	    return $(this).html().replace(promotion_message, new_promotion_message);
	});



//HEIGHT FIX
$("ul.product-grid").children().each(function(){
	console.log($(this).outerHeight(true));
});




//TEST COROMETRICS
$( document ).ready(function() {
	$('.br-sf-widget a').attr('name','BR_related_products').attr('categoryID','BR_related_productsID');

});



