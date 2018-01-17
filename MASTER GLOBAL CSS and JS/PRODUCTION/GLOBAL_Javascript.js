// JS PROD MASTER - BGA 90% - 01.10.18
// PAST:  PROMO HELP MESSAGE - 11.27.17
// jrios@c21stores.com


// FIREING FUNCTIONS
//document.addEventListener( "DOMContentLoaded", denied_rotating_message, false );
//document.addEventListener( "DOMContentLoaded", adquisition_rotating_message, false );
//document.addEventListener( "DOMContentLoaded", retention_rotating_message, false );
document.addEventListener( "DOMContentLoaded", uniqueClasses, false );
document.addEventListener( "DOMContentLoaded", pdpVideos, false );
document.addEventListener( "DOMContentLoaded", pdpTieredPrice, false );
document.addEventListener( "DOMContentLoaded", pdpKnivesPDF, false );
document.addEventListener( "DOMContentLoaded", addingClass_LP_width, false );
document.addEventListener( "DOMContentLoaded", name_taggingCoremetrics, false );
document.addEventListener( "DOMContentLoaded", copy_blocks_cloning, false );
document.addEventListener( "DOMContentLoaded", Curalate_PDP, false );
document.addEventListener( "DOMContentLoaded", thumbnails_duplicat_fix, false );
document.addEventListener( "DOMContentLoaded", zero_results_search, false );
document.addEventListener( "DOMContentLoaded", vip_shopping, false );
document.addEventListener( "DOMContentLoaded", show_banner_when_not_blank, false );
document.addEventListener( "DOMContentLoaded", seoCopyLineFooter, false );
document.addEventListener( "DOMContentLoaded", promo_Code_custom, false );
document.addEventListener( "DOMContentLoaded", promo_Code_custom_productLevel, false );
//document.addEventListener( "DOMContentLoaded", live_chat_message, false );

// FIREING FUNCTIONS ON QUICK VIEW
$(document).on( 'click', '.product-summary__quickview a', function(){
	setTimeout(function() {   //calls click event after a certain time
		//Hover_message_Button();
	}, 1000);
});


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



//CLICKABLE IMAGES
// $(document).ready(function(){
function clonningClickEvent(){
    $('.banner-content-block, .hero-content-block, .three-column-square-content-block__container, .large-square-plus-two-content-block__container--large-image, .large-square-plus-two-content-block__container--small-image, .large-square-plus-one-content-block__container--large-image, .two-column-square-content-block__container, .two-column-hero-content-block__container, .jm-image-clickable').each(function(){
       var new_data= $('a:first-of-type', this).clone();
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
}clonningClickEvent();
// });
//END CLICKABLE IMAGES




// ZERO SEARCH SCRIPT
function zero_results_search(){
if (window.location.href.indexOf("vip") === -1){

	if( ($('#header-search-form .value').length) != 0){

	var search = $('#header-search-form .value').children().val().toString().toLowerCase();
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

		 	if (window.location.href.indexOf("categories") > -1){
		 		cat_Name = $('.view h1').html().toLowerCase();
		 		console.log("Category Name: " + cat_Name);
				for (var z=0; z < listArrTotal.length; z++){
					if(arrayContains(listArrTotal, cat_Name)){
						console.log("search found!");
	// 					$('.page-content__wrapper').hide("fast");
	// 					$('.page-content').prepend(
	// 						'<div id="result">'+
	// 						'</div>'
	// 					);
	// 					$( "#result" ).load( "/pages/zero-search" );
	// 					break;
					}
				}
			}
			function build_ZeroResultPage(){

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

	}

}
};
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
		else if(value == "A"){
			$(currentElement).closest('li').attr('id', '1A');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value == "B"){
			$(currentElement).closest('li').attr('id', '2B');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value == "C"){
			$(currentElement).closest('li').attr('id', '3C');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value == "D"){
			$(currentElement).closest('li').attr('id', '4D');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value == "E"){
			$(currentElement).closest('li').attr('id', '5E');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value == "F"){
			$(currentElement).closest('li').attr('id', '6F');
			//console.log(value);console.log($(currentElement).closest('li').attr("id"));
		}
		else if(value == "G"){
			$(currentElement).closest('li').attr('id', '7G');
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


// FIX MASTER COLLECTION IMAGES
function imagesMasterPages(){

$('.product-detail-container--package .product-detail-container__child-product').each(function() {

	var imageAnchor = $(this).find('.product-details__media').find('.product-details__primary-image:first').find('.product-details__primary-image-button').attr('href');;
	console.log('working!!!');
	console.log(imageAnchor);
	$(this).find('.product-details__media').find('.product-details__primary-image:first').append('<a class="jm-anchor-package" href="' + imageAnchor + '"></a>');

});

}imagesMasterPages();
// END FIX MASTER COLLECTION IMAGES


// SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER - SORTING MASTER -


function allSortingMASTERSizes(){


$( "div.product-detail-container__child-product" ).wrapAll( '<div class="jm_sorted_products"></div>');
var soldOutPack = $('.product-detail-container--package .product-details__sold-out').closest('div .product-detail-container__child-product');
soldOutPack.hide();

$('.product-detail-container--package .jm_sorted_products').each(function() {

	// ADDING ID TO NON NUMBERS SIZES
	$(this).find('.size-options__size-label').each(function() {
		console.log(this);
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
		(window.location.href.indexOf("edit") > -1) ||
		(window.location.href.indexOf("italian") > -1) ||
		(window.location.href.indexOf("luxury") > -1) ||
		(window.location.href.indexOf("under") > -1) ||
		(window.location.href.indexOf("7agrw") > -1) || //Golden
		(window.location.href.indexOf("7arsw") > -1)
	);
	var urlEhandbags = (
		(window.location.href.indexOf("handbags-accessories-watches") > -1) ||
		(window.location.href.indexOf("7alcw") > -1)
	);
	var urlEkids = (
		//(window.location.href.indexOf("arrivals") > -1) ||
		//(window.location.href.indexOf("gifts") > -1) ||
		//(window.location.href.indexOf("essentials") > -1) ||
		//(window.location.href.indexOf("occasion") > -1) ||
		(window.location.href.indexOf("infant") > -1) ||
		(window.location.href.indexOf("cold-weather") > -1)
	);
	var urlEmens = (
		(window.location.href.indexOf("men-bags") > -1) ||
		(window.location.href.indexOf("men-belts") > -1) ||
		(window.location.href.indexOf("men-cuff-links-tie-bars") > -1) ||
		(window.location.href.indexOf("men-hats-scarves-gloves") > -1) ||
		(window.location.href.indexOf("men-jewelry") > -1) ||
		(window.location.href.indexOf("men-sunglasses") > -1) ||
		(window.location.href.indexOf("men-ties") > -1) ||
		(window.location.href.indexOf("men-umbrellas") > -1) ||
		(window.location.href.indexOf("men-wallets") > -1) ||
		(window.location.href.indexOf("men-shop-all-accessories") > -1)
	);
	var urlEcontemporary = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("cashmere") > -1) ||
		(window.location.href.indexOf("italian") > -1)
	);
	var urlEmwomens = (
		(window.location.href.indexOf("arrivals") > -1) ||
		(window.location.href.indexOf("cashmere") > -1) ||
		(window.location.href.indexOf("7aoww") > -1) ||
		(window.location.href.indexOf("7arow") > -1) ||
		(window.location.href.indexOf("7atnw") > -1)
	);
	var urlEhome = (
		(window.location.href.indexOf("home-seasonal-settings") > -1) ||
		(window.location.href.indexOf("7aibh") > -1)
	);
	var urlEbeauty = (
		(window.location.href.indexOf("bvlgari") > -1) ||
		(window.location.href.indexOf("klein") > -1) ||
		(window.location.href.indexOf("elf") > -1) ||
		(window.location.href.indexOf("boss") > -1) ||
		(window.location.href.indexOf("opi") > -1)
	);
	var urlEtech = (
		(window.location.href.indexOf("beats") > -1) ||
		(window.location.href.indexOf("fitbit") > -1) ||
		(window.location.href.indexOf("gopro") > -1) ||
		(window.location.href.indexOf("jbl") > -1) ||
		(window.location.href.indexOf("sonos") > -1)
	);
	var urlEnewandnow = (
		(window.location.href.indexOf("beats") > -1) ||
		(window.location.href.indexOf("fitbit") > -1) ||
		(window.location.href.indexOf("gopro") > -1) ||
		(window.location.href.indexOf("jbl") > -1) ||
		(window.location.href.indexOf("sonos") > -1)
	);
	var urlEspecial = (
		(window.location.href.indexOf("reduction") > -1)
	);
// 	var urlEspecial_Active = (
// 		(window.location.href.indexOf("active") > -1)
// 	);

 	//console.log(urlEshoes);

	if(jm_cat === "Tech"){
		//allSiteGA29();
		allSiteGA14();
		if(!urlEtech){
// 			WishiWankaGA();
		}
	}
	else if(jm_cat === "New + Now"){
			//allSiteGA29();
			allSiteGA14();
	}
	else if(jm_cat === "Beauty"){
		if(!urlEbeauty){
			//freeShippingBeautyGA();
			allSiteGA14();
			//allSiteGA29();
// 			WishiWankaGA();
		}
	}
	else if(jm_cat === "Shoes"){
			//allSiteGA29();
			allSiteGA14();
		if(!urlEshoes){
			//newArrivalsShoesGA();
		}
	}
	else if(jm_cat === "Handbags &amp; Accessories"){
		//doubleHandbagsBGA();
			//allSiteGA29();
			allSiteGA14();
			//handbagsGA();
		if(!urlEhandbags){
			handbagsGA();
		}
	}
	else if(jm_cat === "Kids"){
			//allSiteGA29();
			allSiteGA14();
		if(!urlEkids){
			//kidsColdWeatherGA();
		}
	}
	else if(jm_cat === "Contemporary"){
		if(!urlEcontemporary){
			//newArrivalsContemporaryGA();
		}
	}
	else if(jm_cat === "Women"){
			//allSiteGA29();
			allSiteGA14();
		if(!urlEmwomens){
			//newArrivalsWomenGA();
		}
	}
	else if(jm_cat === "Men"){
			//allSiteGA29();
			allSiteGA14();
		if(urlEmens){
			menGA30();
		}
	}
	else if(jm_cat === "Home"){
			//allSiteGA29();
			allSiteGA14();
		if(!urlEhome){
			//doubleHomeBGA();
			//WishiWankaGA();
		}

	}
	else if(jm_cat === "Private Access Shopping"){
		console.log(jm_cat3);
		if(jm_cat3 == "Clothing"){
			console.log('uiiii');
		}
	}
	else if(jm_cat === "Clearance"){
// 		giftsCardsGA2();
	}

	else{
		return false;
	}


	fixingHeights();

});





// KIDS BABY ESSENTIALS AD BANNER
function babyEssentialsGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMDkvMDEvMDkvMDIvMzcvOTIxLzAxXzA5V2VlazJfQnJvd3NlR3JpZEFkLmpwZyJdXQ/01_09Week2_BrowseGridAd.jpg?sha=88945d04e2e80e5c";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/kids-baby-essentials";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
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

	AdClassAll_Single(realPos, gaType);

}
// END KIDS BABY ESSENTIALS GRID AD BANNER


// KIDS COLD WEATHER AD BANNER
function kidsColdWeatherGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMDkvMjgvMTUvMDEvMzcvOTYxLzAxXzEwV2VlazFfQnJvd3NlR3JpZEFkLmpwZyJdXQ/01_10Week1_BrowseGridAd.jpg?sha=799b7a0317e35a5d";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/kids-cold-weather-shop";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
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

	AdClassAll_Single(realPos, gaType);

}
// END KIDS COLD WEATHER GRID AD BANNER


// MENS FOOTBALL GRID AD BANNER
function menGA30() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 30;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDEvMTcvMTAvMTMvMjIvNDQ1LzAwMV9XZWVrM19CR0FfR1dQLmpwZyJdXQ/001_Week3_BGA_GWP.jpg?sha=3764e2e0bea739cd";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/men-watches?designer%5B%5D=invicta";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
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

	AdClassAll_Single(realPos, gaType);

}
// END MENS FOOTBALL GRID AD BANNER

// HANDBAGS & ACCESSORIES FOOTBALL GRID AD BANNER
function handbagsGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 29;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDEvMTcvMTAvMTMvMjIvNDQ1LzAwMV9XZWVrM19CR0FfR1dQLmpwZyJdXQ/001_Week3_BGA_GWP.jpg?sha=3764e2e0bea739cd";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/handbags-accessories-watches";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
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

	AdClassAll_Single(realPos, gaType);

}
// END HANDBAGS & ACCESSORIES FOOTBALL GRID AD BANNER


// BEAUTY FREESHIPPING GRID AD BANNER
function freeShippingBeautyGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMTIvMDYvMTEvMjkvMTkvOTA0LzAyXzEyV2VlazNfQnJvd3NlR3JpZEFkLmpwZyJdXQ/02_12Week3_BrowseGridAd.jpg?sha=26c0bbe31d8bb61b";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/women-new-arrivals";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
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

	AdClassAll_Single(realPos, gaType);

}
// END BEAUTY FREESHIPPING GRID AD BANNER


// ALL SITE SPRIdG GRID AD BANNER
function allSiteGA14() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 14;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDEvMTAvMTAvNTQvMjgvMzIxLzAxXzFXZWVrM19CR0FfQ2xlYXJhbmNlLmdpZiJdXQ/01_1Week3_BGA_Clearance.gif?sha=6477c29910574d83";

	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/pages/clearance";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
    	}, 100);
	};

	$('.product-grid li:nth-of-type('+ realPos +')').after(
		'<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		//'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
	 	//'<p class="content-block-content__action content-block-content__action--dark-text"><a style="color:white; border-color: white;" target="_blank" class="text" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);

	AdClassAll_Single(realPos, gaType);

}
// END ALL SITE SPRING GRID AD BANNER


// ALL SITE NEW REDUCTION GRID AD BANNER
function allSiteGA29() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 29;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMTAvMDMvMTQvMTMvNDAvOTI2LzAxXzExV2VlazRfQkdBZF9OZXdfUmVkdWN0aW9ucy5qcGciXV0/01_11Week4_BGAd_New_Reductions.jpg?sha=af187fa1753b2350";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/pages/new-reductions";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
    	}, 100);
	};

	$('.product-grid li:nth-of-type('+ realPos +')').after(
		'<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a class="button button--alt-inverse button--wide" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);

	AdClassAll_Single(realPos, gaType);

}
// END ALL SITE NEW REDUCTION GRID AD BANNER








// ACQUISITION GRID AD BANNER
function acquisitionGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 46;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTAvMDYvMTYvMDAvNDQvMTUyLzA5V2VlazRfUExDQ19HcmlkX0lNRy5qcGciXV0/09Week4_PLCC_Grid_IMG.jpg?sha=db1dd8d42c58d407";
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
		AdClassAll_Single(realPos, gaType);
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

	AdClassAll_Single(realPos, gaType);

}
// END ACQUISITION GRID AD BANNER





// RETENTION GRID AD BANNER
function retentionGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 1;
	//POSITION
	var pos = 46;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMDIvMTMvMTUvNTQvMTMvOTUzLzA5V2VlazRfUExDQ19HcmlkX1JldGVudGlvbjIuanBnIl1d/09Week4_PLCC_Grid_Retention2.jpg?sha=020b263e54ca1df2";
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
		AdClassAll_Single(realPos, gaType);
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

	AdClassAll_Single(realPos, gaType);

}
// END RETENTION GRID AD BANNER


// HOME BGA 2BLE SEASONAL SETTINGS
function doubleHomeBGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 2;
	//POSITION
	var pos = 29;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMTAvMjcvMTQvMjkvNDQvNTQ1LzAxXzExV2VlazFfQkdBX1NlYXNvbmFsX1NldHRpbmcuanBnIl1d/01_11Week1_BGA_Seasonal_Setting.jpg?sha=4c2e6e38376d0a56";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/home-seasonal-settings";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
    	}, 100);
	};

	$('.product-grid li:nth-of-type('+ realPos +')').after(
		'<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a name="BGA_Small_Spaces" class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
// 		'<p class="content-block-content__action content-block-content__action--dark-text"><a target="_blank" class="text" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);

	AdClassAll_Single(realPos, gaType);

}
//END HOME BGA 2BLE SEASONAL SETTINGS

// HOME BGA 2BLE
function doubleHandbagsBGA() {

	//GRID AD TYPE:  enter 1 or 2
	var gaType = 2;
	//POSITION
	var pos = 30;
	//IMAGE URL 370x552
	var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMDYvMjcvMTUvMzIvNDQvMjgvMDAxXzA3V2VlazFfQkdBX0hvbGx5d29vZEdsYW0uanBnIl1d/001_07Week1_BGA_HollywoodGlam.jpg?sha=63d590bf70970f85";
	//LINK TEXT
	var textLink = "SHOP NOW";
	//LINK URL
	var urlLINK = "https://www.c21stores.com/categories/new-now-hollywood-glam";

	// WHEN FINISH RESIZING WINDOWS MATCH HEIGHT
	var FixHeights;
	var realPos = pos-1;
	window.onresize = function(e) {
    	clearTimeout(FixHeights);
    	FixHeights = setTimeout(function() {
		// console.log('yay it works!');
		AdClassAll_Single(realPos, gaType);
    	}, 100);
	};

	$('.product-grid li:nth-of-type('+ realPos +')').after(
		'<li class="product-grid__cell product-grid__cell--' + gaType + ' jmrv-product-grid__cell--' + gaType + '">'+
		'<div class="product-grid-content-block" style="background-image: url('+ urlIMG +');">'+
		'<div class="product-grid-content-block__image"></div>'+
		'<div class="content-block-content content-block-content--center content-block-content--bottom">'+
		'<div class="content-block-content__container content-block-content__container--center">'+
		'<div class="content-block-content__message content-block-content__message--dark">'+
		'<p class="content-block-content__action content-block-content__action--button"><a name="Hollywood_Glam" class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
// 		'<p class="content-block-content__action content-block-content__action--dark-text"><a target="_blank" class="text" href="'+ urlLINK + '">' + textLink + '</a></p>' +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'+
		'</li>'
	);

	AdClassAll_Single(realPos, gaType);

}
// END Handbags BGA 2BLE

// RESIZING GRID ADS
	function AdClassAll_Single(realPos, gaType){
	setTimeout(function(){
		var newHeight1 = $('.product-grid li:nth-of-type('+ (realPos + 2) + ')').height();
		//console.log($('.product-grid li:nth-of-type('+ (realPos + 2) + ')'));
		//console.log($('.product-grid li:nth-of-type(3)'));
		$('.jmrv-product-grid__cell--'+ gaType).height(newHeight1);
	},1500);
	}
// END RESIZING GRID ADS


// PROMOTIONAL DISCOUNTS HELPFUL MESSAGE

// 	var testing123 = $('.cart-prices__value span').parent().parent().children('.cart-prices__label');
// 	console.log(testing123);
//
// // 	$('.cart-prices__label').eq(1).html(function(){
// 	$(testing123).html(function(){
// 		console.log(this);
// 		var promotion_message = $(this).html();
// 		console.log('Promotion message: ' + promotion_message);
// 		$('.cart-prices__label').each(function(i) {
// 			filtered_promotion_message = promotion_message.match(/\{([^}]+)\}/)[1];
// 		});
// 		var new_promotion_message = promotion_message.replace("{", " ").replace("}", " ").replace(filtered_promotion_message, " ");
//
// 		//console.log('Promotion message: ' + promotion_message);
// 		//console.log('Filtered promotion message: ' + filtered_promotion_message);
// 		//console.log('New promotion message: ' + new_promotion_message);
//
//
// 	    return $(this).html().replace(promotion_message, new_promotion_message);
// 	});








// HEIGHT PRODUCT GRID EVEN
function fixingHeights(){
	setTimeout(function(){
		var gridAds	= [];
		$("ul.product-grid").children().each(function(){
			gridAds.push($(this).height());
		// 	console.log("this is: " + $(this).outerHeight(true));
		});
		console.log(gridAds);
		var maxHeight = Math.max.apply(Math, gridAds);
		console.log(maxHeight);

		$('.product-grid__cell').css('height',maxHeight);

	}, 1000);
}




//AUDIO UGLY SWEATERS

function uglySweaters(){

	if(window.location.href.indexOf("https://www.c21stores.com/products/reindeer-holiday-sound-sweater") > -1){
		//$('.product-details__sub-section--description').append(
		//'<audio controls>'+
		//	'<source src="horse.ogg" type="audio/ogg">'+
		//	'<source src="horse.mp3" type="audio/mpeg">'+
		//	'Your browser does not support the audio element.'+
		//'</audio>'
		//);
	}
	else if(window.location.href.indexOf("https://www.c21stores.com/products/elf-dj-holiday-sweater") > -1){
		$('.product-details__sub-section--description').append(
		'<audio controls>'+
	//		'<source src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTEvMDEvMTUvNDgvMzAvNDAyLzI0NzVfMDQ1Ny5tcDMiXV0/2475-0457.mp3?sha=e61c6cd697fad8e8" type="audio/ogg">'+
			'<source src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTEvMDEvMTUvNDgvMzAvNDAyLzI0NzVfMDQ1Ny5tcDMiXV0/2475-0457.mp3?sha=e61c6cd697fad8e8" type="audio/mpeg">'+
			'Your browser does not support the audio element.'+
		'</audio>'
		);
	}

}uglySweaters();



// UNIQUE CLASSES NAMING FOR CATEGORIES
function uniqueClasses(){

// 	setTimeout(function(){
		$(".primary-nav__menu-item, .primary-nav__item-node, .primary-nav__nav-menu").hover(function(){

			$('.primary-nav__nav-menu').each(function() {
				// ADDING ID NAVIGATION
				$(this).find('.primary-nav__item-node, span').each(function() {

					var currentElement = $(this);
					var value = currentElement.html();
					var classValue = value.replace(/[^A-Z0-9]/ig, "");
// 					console.log(value);
// 					console.log(classValue);
					$(currentElement).addClass(classValue);
				});
			});
		});

		$('.secondary-nav__nav-menu').each(function() {
			// ADDING ID NAVIGATION
			$(this).find('.secondary-nav__item-node, span').each(function() {

				var currentElement = $(this);
				var value = currentElement.html();
				var classValue = value.replace(/[^A-Z0-9]/ig, "");
// 				console.log(value);
// 				console.log(classValue);
				$(currentElement).addClass(classValue);

			});
		});



			$('.primary-nav__nav-menu').each(function() {
				// ADDING ID NAVIGATION
				$(this).find('.primary-nav__item-node, span').each(function() {

					var currentElement = $(this);
					var value = currentElement.html();
					var classValue = value.replace(/[^A-Z0-9]/ig, "");
// 					console.log(value);
// 					console.log(classValue);
					$(currentElement).addClass(classValue);
				});
			});

//
// 	},1000);

};

// END UNIQUE CLASSES NAMING FOR CATEGORIES




function bannersMassive(){
	if((window.location.href.indexOf("cyber") > -1) && (window.location.href.indexOf("categories") > -1)){
		console.log('banner Category');
		$('.banner-content-block__large-image-container').css('background-image','url("https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTEvMjIvMTQvMjcvMzMvNzA5LzEyV2VlazFfQkJfQ3liZXIuanBnIl1d/12Week1_BB_Cyber.jpg?sha=a6bdf454a6ec6b1c")');
	}
	else{
		return false;
	}
}//bannersMassive();



// VIDEO PLCC JEWELRY
function pdpVideos(){

	var jewelr_Pull_PI = $('.product-details__id span').text();
	console.log(jewelr_Pull_PI);
	var listVideoJewelry = [
		'6612-0977',
		'6612-1699',
		'6612-4222',
		'6613-0860',
		'6613-4030',
		'6613-9439',
		'6614-0477',
		'6614-0557',
		'6614-1271',
		'6614-0254',
		'6614-6784',
		'6614-5188',
		'6614-1106',
		'6614-0251',
		'6614-2717',
		'6614-8996',
		'953971CDC56614-51886614-89966614-0477',
		'0DA56941B76614-27176614-05576614-0254',
		'674E56A0B56614-67846614-1271',
		'0FD847BFAC6614-02516614-1106'
		];
	console.log(listVideoJewelry);
// 	if(listVideoJewelry.includes(jewelr_Pull_PI)){

	if(listVideoJewelry.indexOf(jewelr_Pull_PI) !== -1){


	console.log('Video');
	function createVideo(){
		var placeVideoHere = document.getElementsByClassName('product-details__media')[0];
		console.log(placeVideoHere);
		$(placeVideoHere).prepend(
			'<figure id="playJV" style="position: absolute; bottom: -5%; z-index: 999; text-align: center; width: 100%;"><a href="#1" style="display: block;width: 7%;margin: 0 48% -2% auto;">'+
			'<img src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTEvMjgvMTYvMzEvMjIvNTMzL3BsYXlidXR0b25fR3JleS5wbmciXV0/playbutton-Grey.png?sha=86cbf51c7b342695"/>'+
			'</a></figure>' +
			'<div class="jm_dark_lightBox" id="jm_dark_lightBox" style="display:none;">'+
			'<iframe style="position: relative; z-index: 99;" class="JewelryVideo" id="JewelryVideo" width="560" height="315" src="https://www.youtube.com/embed/UhdpwZAc0Yk?modestbranding=1&enablejsapi=1&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;disablekb=1&amp;iv_load_policy=3&amp;nologo=1&amp;ps=docs&amp;showsearch=0" frameborder="0" allowfullscreen></iframe>'+
			'<figure class="jm_lightbox_X" style="opacity: 0.6;">'+
			'<img style="width: 38px; margin: 0 auto; display: block;" src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTIvMDEvMTQvMDMvMzQvNDQ3L3BsYXllcl9zdG9wX3ZpZGVvX2J1dHRvbi5wbmciXV0/player-stop-video-button.png?sha=bf4dc632096fa32b"/>'+
			'</figure>'+
			'<a id="stopJV" class="jm_dark_lightBox_X"></a>'+
			'</div>'
		);
	}createVideo();


	function videoControl(action){
		var $playerWindow = $('#JewelryVideo')[0].contentWindow;
		$playerWindow.postMessage('{"event":"command","func":"'+action+'","args":""}', '*');
	}


	function togglitoPDPVideo(){
		$("#playJV").click(function(){
			$('#sticky-wrapper').css('z-index','9');
			$('.page-content').css('z-index','999');
			$(".jm_dark_lightBox").fadeToggle(1300).css('display','flex').css('display','-ms-flexbox').css('display','-webkit-flex');
		　　videoControl("playVideo");
		});

	}togglitoPDPVideo();
	function togglitoPDPVideoOUT(){
		$("#stopJV").click(function(){
			$('#sticky-wrapper').css('z-index','99');
			$('.page-content').css('z-index','9');
			$(".jm_dark_lightBox").fadeToggle(1300).css('display','flex').css('display','-ms-flexbox').css('display','-webkit-flex');
		　　videoControl("stopVideo");
		});

	}togglitoPDPVideoOUT();



};



};

// END VIDEO PLCC JEWELRY



// MULTIPLE CTAS CONTENT BLOCKS
$('.hero-content-block, .banner-content-block, .jm-make-ligthbox').each(function(index){
	thereIsCTAs = $(this).find('a').text();
	console.log('ctas????' + $(this).find('a').text());
	console.log(thereIsCTAs);
    if(thereIsCTAs == '') {
        return true;
    }
	console.log("before multi multi");
	console.log(this);
	//MULTIPLE CTA HERO
	var hero_number_CTA = $(this).find('.content-block-content__message').children('p').length;
	var initial_CTA_class = $(this).find('.content-block-content__action a').attr('class');
	var CTAtext = $(this).find('.content-block-content__message > p > a').html().toLowerCase();
	var CTAtext_URL = $(this).find('.content-block-content__message > p > a').attr('href');
	console.log('URLs' + CTAtext_URL);
	console.log(hero_number_CTA);
// 	console.log(initial_CTA_class);


	// IF THERE IS MULTIPLE CTA
	if (hero_number_CTA > 1){
			$(this).find('.content-block-content__action').fadeIn(100);
			console.log("multi multi");
			jm_hero_FirstCTA = $(this).find('.content-block-content__action a').eq(0);
			jm_hero_FirstCTA_url = jm_hero_FirstCTA.attr('href');
// 			console.log('this url ' + jm_hero_FirstCTA_url);
			jm_hero_FirstCTA_text = jm_hero_FirstCTA.text().toLowerCase();

			if (jm_hero_FirstCTA_url.indexOf("#jmlb") > -1){
				console.log('first is hidden');
				jm_hero_FirstCTA.addClass('jm_bottom_lightbox').wrapInner( '<div class="jm_lightBox_CTA"></div>');
				jm_hero_FirstCTA.addClass('JM_trigger_ligthBox');
				console.log ('coming crispy' + $(this));
					   	var new_data_lb = $('.jm_bottom_lightbox:first-of-type', this).clone();
						new_data_lb.attr("id", "jm_img_anchor_LB");
// 						new_data_lb.removeAttr("class");
						new_data_lb.appendTo(this);
				$(this).find('.JM_trigger_ligthBox').hide(100);
				console.log(jm_hero_FirstCTA);
			}


			$(this).find('.content-block-content__message p:not(.content-block-content__action)').each(function(index){
			multi_cta_copy = $(this).html();
					console.log(multi_cta_copy);

			if (multi_cta_copy.indexOf("*") > -1){
				var multi_CTA_text = $(this).html().split("*")[0];
				var multi_CTA_url = $(this).html().split("*")[1].replace("<br>", "").replace(" ", "");
				var multi_CTA_wrap = $(this).parent();

					console.log(multi_CTA_url);

					$(multi_CTA_wrap).find('.content-block-content__action').addClass("jm-multipleCTA-space").append(
						'<a class="' + initial_CTA_class +'" href="' + multi_CTA_url + '">' + multi_CTA_text + '</a>'
					)


// 					if (multi_CTA_url.indexOf("#jmlb") > -1){
// 						console.log('first is hidden of Others');
// 						multi_CTA_url.addClass('JM_trigger_ligthBox');
// 					}

			}

			});
			if(hero_number_CTA == 6){
				$(this).find('.content-block-content__action').addClass("jm-multipleCTA-space6");
				$(this).find('.content-block-content').parent().addClass("jm-multipleCTA-content-wrap");
				if ($(window).width() < 700) {
					$(this).find('.hero-content-block__content-boundary, .content-block-content').css("min-height","171vw");
				}
			}
			if(hero_number_CTA == 5){
				$(this).find('.content-block-content__action').addClass("jm-multipleCTA-space5");
        $('.jm-multipleCTA-space5').parent().parent().parent().parent().find('.content-block-content--center').css('width','100%');
				$(this).find('.content-block-content').parent().addClass("jm-multipleCTA-content-wrap");
				if ($(window).width() < 700) {
					$(this).find('.hero-content-block__content-boundary, .content-block-content').css("min-height","171vw");
				}
			}
			else if(hero_number_CTA == 4){
				$(this).find('.content-block-content__action').addClass("jm-multipleCTA-space4");
				$(this).find('.content-block-content').parent().addClass("jm-multipleCTA-content-wrap");
				$(this).find('.content-block-content__action').parent().eq(2).addClass("jm-multipleCTA-container");
        $('.jm-multipleCTA-space4').parent().parent().parent().parent().find('.content-block-content--center').css('width','100%');
				if ($(window).width() < 700) {
					$(this).find('.hero-content-block__content-boundary, .content-block-content').css("min-height","160vw");
				}
			}
			else if(hero_number_CTA == 3){
				$(this).find('.content-block-content__action').addClass("jm-multipleCTA-space3");
				$(this).find('.content-block-content').parent().addClass("jm-multipleCTA-content-wrap");
        $('.jm-multipleCTA-space3').parent().parent().parent().parent().find('.content-block-content--center').css('width','100%');
				if ($(window).width() < 700) {
					$(this).find('.hero-content-block__content-boundary, .content-block-content').css("min-height","160vw");
				}
			}
			else if(hero_number_CTA == 2){
				$(this).find('.content-block-content__action').addClass("jm-multipleCTA-space2");
				$(this).find('.content-block-content').parent().addClass("jm-multipleCTA-content-wrap");
				$('.jm-multipleCTA-space2').parent().parent().parent().parent().find('.content-block-content--center').css('width','100%');
			}
// 			$('.hero-content-block > a').hide();

	}

	// IF THERE IS ONE CTA WITH WORD LIGHTBOX LB
	else if ((hero_number_CTA = 1) && (CTAtext_URL.indexOf("jmlb") > -1)){
		console.log('unoLightBox!!');
		$(this).find('.content-block-content__action').fadeIn(600);
		$(this).find('a').addClass('JM_trigger_ligthBox').addClass('jm_show_important');
		//$(this).find('a').addClass('JM_trigger_ligthBox').addClass('jm_show_important').addClass('jm_bottom_lightbox').wrapInner( '<div class="jm_lightBox_CTA"></div>');

		// IF THERE IS ONE CTA WITH WORD LIGHTBOX LB and ALSO HIDE
		if ((hero_number_CTA = 1) && ( CTAtext.indexOf("jmhide") > -1)){
			console.log('unoHidden&LightBox!!');
			$(this).find('.content-block-content__action').hide();
		}
		else if ((hero_number_CTA = 1) && ( CTAtext_URL.indexOf("#jmdetails") > -1)){
			$(this).find('a').addClass('JM_trigger_ligthBox').addClass('jm_show_important').addClass('jm_bottom_lightbox').wrapInner( '<div class="jm_lightBox_CTA"></div>');
			$(this).find('.content-block-content').addClass('jmrv-desktop');
		}

	}

	// IF THERE IS ONE CTA WITH WORD HIDE
	else if ((hero_number_CTA = 1) && ( CTAtext.indexOf("jmhide") > -1)){
		console.log('unohidden!!');
		$(this).find('.content-block-content__action').hide();
	}

	// ELSE DISPLAY ALL CTAs
	else{
		$(this).find('.content-block-content__action').fadeIn(100);
	};

	$('.rich-text-content-block p:last-child').addClass('jm_X_Hero_lightBox');

});
// END MULTIPLE CTAS CONTENT BLOCKS



// TIERED PRICING


function pdpTieredPrice(){

	//if((window.location.href.indexOf("products") > -1) && ($('.product-details__price-row') > -1)){
	if(window.location.href.indexOf("products") > -1){	
		var tieredPriceChildren = document.getElementsByClassName("product-details__price-row")[0].childElementCount;;
		if (tieredPriceChildren == 2){
			console.log(tieredPriceChildren);
			$('.product-details__price-group').addClass('jm-tieredContainer');
			$('.product-details__price-group > .product-details__price-row').addClass('jm-tieredContainer-row');
			$('.product-details__price-row > .product-details__price--regular').addClass('jm-tieredContainer-regular');
			$('.product-details__price-row > .product-details__price--sell').addClass('jm-tieredContainer-sell');
			$('.product-details__price-row > .product-details__price--msrp').addClass('jm-tieredContainer-msrp');
			$('.product-details__price-row > .product-details__price--percent-saved').addClass('jm-tieredContainer-percent-saved');
		}

	}

};



$(document).on( 'click', '.product-summary__quickview a', function(){
	setTimeout(function() {   //calls click event after a certain time
	   	console.log('quickview');
			function quickViewTieredPrice(){

				if((window.location.href.indexOf("categories") > -1) || (window.location.href.indexOf("hearts") > -1)){
					var tieredPriceChildren = document.getElementsByClassName("product-details__price-row")[0].childElementCount;;
				   	console.log(tieredPriceChildren);
					if (tieredPriceChildren == 2){
						console.log(tieredPriceChildren);
						$('.inline-quickview__content .product-details__attributes').addClass('jm-tieredAttributes-QV');
						$('.inline-quickview__content .product-details__price-group').addClass('jm-tieredContainer-QV');
						$('.inline-quickview__content .product-details__price-group > .product-details__price-row').addClass('jm-tieredContainer-row-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--regular').addClass('jm-tieredContainer-regular-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--sell').addClass('jm-tieredContainer-sell-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--msrp').addClass('jm-tieredContainer-msrp-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--percent-saved').addClass('jm-tieredContainer-percent-saved-QV');
						$('.inline-quickview__content .product-details__badge-container').addClass('jm-product-details__badge-container-QV');
					}

				}
				else if (window.location.href.indexOf("products") > -1){
				   	console.log('quickview Hearts');
					var tieredPriceChildren = document.getElementsByClassName("product-details__price-row")[2].childElementCount;;
				   	console.log(tieredPriceChildren);
					if (tieredPriceChildren == 2){
						console.log(tieredPriceChildren);
						$('.inline-quickview__content .product-details__attributes').addClass('jm-tieredAttributes-QV');
						$('.inline-quickview__content .product-details__price-group').addClass('jm-tieredContainer-QV');
						$('.inline-quickview__content .product-details__price-group > .product-details__price-row').addClass('jm-tieredContainer-row-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--regular').addClass('jm-tieredContainer-regular-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--sell').addClass('jm-tieredContainer-sell-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--msrp').addClass('jm-tieredContainer-msrp-QV');
						$('.inline-quickview__content .product-details__price-row > .product-details__price--percent-saved').addClass('jm-tieredContainer-percent-saved-QV');
						$('.inline-quickview__content .product-details__badge-container').addClass('jm-product-details__badge-container-QV');
					}

				}

			}quickViewTieredPrice();
	}, 1000);


});
// END TIERED PRICING


// KNIVES PDF KNIVES PDF KNIVES PDF KNIVES PDF KNIVES PDF
function pdpKnivesPDF(){


	var wusthof_knives = $('.product-details__id span').text();
// 	console.log(jewelr_Pull_PI);
	var listWusthofKnives = [
		'7086-3538000',
		'7086-3260000',
		'7029-6399000',
		'7029-7030000',
		'7086-0425000',
		'7086-0483000',
		'7086-1081000',
		'7086-2086000',
		'7086-3205000',
		'7086-3260000',
		'7086-3538000',
		'7086-4456000',
		'7086-9169000',
		'7086-9537000'
		];
// 	console.log(listVideoJewelry);

	if(listWusthofKnives.indexOf(wusthof_knives) !== -1){
// 	if(listWusthofKnives.includes(wusthof_knives)){
		console.log("machete machete machete");
		$('.product-details__description-body ul li:last-of-type').append(
			//'<li><a href="https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTIvMDcvMTYvMzEvMDUvMzQ0L1JpZ2h0X0tuaWZlX2Zvcl90aGVfUmlnaHRfSm9iLnBkZiJdXQ/Right%20Knife%20for%20the%20Right%20Job.pdf?sha=93adee9bf2f82289" target="_blank" style="text-decoration:none;">Guide: The Right Knife for the Right Job</a></li>'
			'<li>To find the Right Knife for the Right Job, <a id="playPDF" href="#1">'+
			'click here'+
			'</a></li>' +
			'<div class="jm_dark_lightBox" id="jm_dark_lightBox" style="display:none;">'+
			'<object style="width: 49%; height: 90%; z-index: 9999999; position: relative;" data="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTIvMDcvMTYvMzEvMDUvMzQ0L1JpZ2h0X0tuaWZlX2Zvcl90aGVfUmlnaHRfSm9iLnBkZiJdXQ/Right%20Knife%20for%20the%20Right%20Job.pdf?sha=93adee9bf2f82289" type="application/pdf" width="100%" height="100%">'+
   				'<p>This browser does not support PDFs Viewer. Please download the PDF to view it: <a href="/pdf/sample-3pp.pdf">Download PDF</a>. <br/> or open the PDF <a href="https://www.c21stores.com/media/W1siZiIsIjIwMTYvMTIvMDcvMTYvMzEvMDUvMzQ0L1JpZ2h0X0tuaWZlX2Zvcl90aGVfUmlnaHRfSm9iLnBkZiJdXQ/Right%20Knife%20for%20the%20Right%20Job.pdf?sha=93adee9bf2f82289" target="_blank"> cLick here</a> </p>'+
			'</object>'+
			'<p style="position: absolute; top: 2%; right: 2%; font-size: 20px; font-weight: lighter;">X</p>'+
			'<a id="stopPDF" class="jm_dark_lightBox_X"></a>'+
			'</div>'
		);
		function togglitoPDPPDF(){
			$("#playPDF").click(function(){
				$('#sticky-wrapper').css('z-index','9');
				$('.page-content').css('z-index','999');
				$(".jm_dark_lightBox").fadeToggle(1300).css('display','flex').css('display','-ms-flexbox').css('display','-webkit-flex').css('display','webkit-box-flex');
			});

		}togglitoPDPPDF();
		function togglitoPDPDPFOUT(){
			$("#stopPDF").click(function(){
				$('#sticky-wrapper').css('z-index','99');
				$('.page-content').css('z-index','9');
				$(".jm_dark_lightBox").fadeToggle(800).css('display','flex').css('display','-ms-flexbox').css('display','-webkit-flex').css('display','webkit-box-flex');
			});
		}togglitoPDPDPFOUT();

	}


};
// END KNIVES PDF KNIVES PDF KNIVES PDF KNIVES PDF KNIVES PDF


// ADDING CLASSES TO LPs BASED ON WIDTH AND NAMES
function addingClass_LP_width(){

	//If there is  a Left Nav add class 1170 and name of LP
	if($('.page-content__wrapper').find('div.page-content__aside').length == 1){
		$('.view').addClass('jm_lp_1170');
		nameLP = $('.view h1').html().toLowerCase().replace(/\s/g,'');
		$('.view').addClass('jm_lp_' + nameLP);
	}
	//If there is not Left Nav add class 1440
	else{
		$('.view').addClass('jm_lp_1440');
	};

}
// END ADDING CLASSES TO LPs BASED ON WIDTH AND NAMES


// LIGHT BOX GENERAL
function Lightbox_heroCTA(){

    $('.rich-text-content-block').each(function() {
    console.log("YEA YEA" +this);
        var currentImage = $(this);
        currentImage.wrap('<div class="jm_dark_lightBox" id="jm_dark_lightBox" style="display:none;"></div>');
    });

}Lightbox_heroCTA();

function Lightbox_heroCTA_ClickEvent(){
	$(".JM_trigger_ligthBox").click(function(){
		console.log('muaaaaaniii!!!');
		// $(this).parent().next().addClass('jm_displayflex');
		$(this).closest('div.hero-content-block').next().find('.rich-text-content-block').fadeIn(1000);
		$(this).closest('div.hero-content-block').next().fadeIn(1000).addClass("jm_displayflex");
		$(this).closest('div.hero-content-block').next().append(
			'<p class="jm_dark_lightBox_X">X</p>'
		);
		$(".jm_dark_lightBox_X").click(function(){
			$(this).stop().parent().fadeOut(300);

		});
		$(".jm_X_Hero_lightBox").click(function(){
			$('.jm_displayflex').stop().fadeOut(300);

		});
	});
}Lightbox_heroCTA_ClickEvent();


// END LIGHT BOX GENERAL

// NAME TAGGING FOR LIVE COREMETRICS
function name_taggingCoremetrics(){

    $('.hero-content-block, .three-column-square-content-block, .large-square-plus-one-content-block__container, .two-column-square-content-block, .banner-content-block, .jm-custom-hp > section').each(function() {
		var asset_title = $(this).find('h2').text();
		$(this).find('a').each(function() {
			var asset_anchor = $(this).attr('href').replace('https://www.c21stores.com', '');
			var anchor_id = $(this).attr('id');
			if((anchor_id == 'jm_img_anchor') || (anchor_id == 'jm_img_anchor2')){
				imageornot = 'IMG: '
			}
			else{
				imageornot = 'CTA: '
			};
		    console.log("TITLE " + asset_title);
		    console.log("ID: " + anchor_id);

			if($(window).width() < 768) {
			    console.log("MOBILE ANCHOR: " + imageornot + asset_anchor);
			    $(this).attr('name', "MOBILE-" + imageornot + asset_anchor);
			}
			else if(($(window).width() > 768) && ($(window).width() < 1100)) {
			    console.log("TABLET ANCHOR: " + imageornot + asset_anchor);
			    $(this).attr('name', "TABLET-: " + imageornot + asset_anchor);
			}
			else {
			    console.log("DESKTOP ANCHOR: " + imageornot + asset_anchor);
			    $(this).attr('name', "DESKTOP-" + imageornot + asset_anchor);
			};

		    console.log("-----------");
	    });
    });

}
// END NAME TAGGING FOR LIVE COREMETRICS


// COPY BLOCKS CLONE FOR CATEGORY PAGES
function copy_blocks_cloning(){
	var copy_blocks_category = $('#jm_copy_block_clone').clone();
	copy_blocks_category.addClass('jm_copy_block_clone');
	$('.page-content').append(
		copy_blocks_category
	);
}
// END COPY BLOCKS CLONE FOR CATEGORY PAGES



// CURALATE
function Curalate_PDP(callback){

	if (window.location.href.indexOf("products") > -1){

		thisproductID = digitalData.product[0].productInfo.productID;
		// 	console.log(thisproductID);
		//LOADING SCRIPT
		jQuery.loadScript = function (url, callback) {
			jQuery.ajax({
				url: url,
				dataType: 'script',
				success: callback,
				async: true
			});
		}


		//Loading Script
		//$.loadScript('//d116tqlcqfmz3v.cloudfront.net/pizza-40/gallery.js', function(){
		$.loadScript('//d116tqlcqfmz3v.cloudfront.net/century21-1169/carousel.js', function(){
			//Call after script loaded
	    	//Curalate.FanReels.Gallery.init({ code: "pizza" });
	    	Curalate.FanReels.Carousel.init({ code: "century21",  productId: thisproductID});
		});

		$('.page-content__wrapper').after(
			//'<h2 class="jm-curalate-pdp-title">#C21STYLE</h2>'+
			//'<p class="jm-curalate-pdp-sub-copy">Shop our Instagram and show us your latest loves.</p>'+
			'<div id="curalate-fan-reel-wrapper"></div>'
		);


		//Inject Element
		$('#curalate-fan-reel-wrapper').wrap( "<div class='jm-curalate-container'></div>" );
		//	window.onload = function () { console.log('este es:' + $('.curalate-thumbs').children().length);}
			$(window).load(function() {
				console.log('# of Instagram posts link to this product: ' + $('.curalate-thumbs').children().length);
				if($('.curalate-thumbs').children().length >= 6){
					$('.page-content__wrapper').after(
						'<h2 class="jm-curalate-pdp-title">#C21STORES</h2>'+
						'<p class="jm-curalate-pdp-sub-copy">Shop our Instagram and show us your latest loves.</p>'
					);
				}

			});
	}
}
// END CURALATE



// THUMBNAIL DUPLICATION
function thumbnails_duplicat_fix(){
	arrayimgsrc = [];
	$( ".product-details__alternate-image-button-image" ).each(function( index ) {
		URLs = $( this ).attr('src').split("/")[6];
		arrayimgsrc.push(URLs);
	  console.log( index + ": " + URLs);
	});
	console.log(arrayimgsrc);


	//var sorted_arr = arrayimgsrc.slice().sort();
	var results = [];
	for (var i = 0; i < arrayimgsrc.length - 1; i++) {
	    if (arrayimgsrc[i + 1] == arrayimgsrc[i]) {
	        results.push(arrayimgsrc[i] + " posicion " +i);
					actual_position = i +1;
					$('.product-details__alternate-image-group > div .slick-track div:nth-of-type('+ actual_position +')').hide();
	    }
	}

	for(i=0;i<=results.length;i++){
		console.log(results[i]);
	};

};

	$(document.body).on('click', '.color-options__color-button' ,function(){
	// $('.product-details--clothing .color-options__color-button').change(function(){
		setTimeout(function(){
			thumbnails_duplicat_fix();
			console.log('doing doing');
		},1000);
	});


// END THUMBNAIL DUPLICATION



// VIP SHOPPING
function vip_shopping(){
	if (window.location.href.indexOf("vip") > -1){
		//lp & category name
		vip_cat_Name_array = $('.view h1').html().split('-');
		vip_cat_Name_array.shift();
		vip_new_name = [];

		console.log('VIP CATEGORY NAME: ' + vip_cat_Name_array);
		for (i = 0; i < vip_cat_Name_array.length; i++) {
		    console.log("numero:" + i + "item: " + vip_cat_Name_array[i]);
				vip_new_name.push(vip_cat_Name_array[i]);
				vip_new_name.push(' ');
		}

		// URL value - actual and fake
		vipURL = window.location.href.split('/');
		lastVipURL = vipURL[vipURL.length - 1].split('-');
		lastVipURL.shift();
		new_lastVipURL = [];
		new_lastVipURL.push('/private-access');
		for (i = 0; i < lastVipURL.length; i++) {
		    // console.log("numero:" + i + "item: " + lastVipURL[i]);
				new_lastVipURL.push('-');
				new_lastVipURL.push(vip_cat_Name_array[i]);
		}

		history.pushState(null, null, new_lastVipURL.join(""));

		$('.view h1').html(vip_new_name).css("text-transform","capitalize")
		$('.view h1').delay(5000).css("opacity","1");


		console.log('VIP NEW NAME: ' + vip_new_name);

		// URL name update
		console.log("LAST URL ACTUAL : " + lastVipURL);
		console.log("FAKE LAST URL ACTUAL : " + new_lastVipURL);
		console.log("FAKE ACTUAL : " + vipURL);


	}

};
// END VIP SHOPPING


// GLOBAL HEADER ROTATING MESSAGE ADQUISITION
function adquisition_rotating_message(){

	var rotatingMessages = [
		'<a href="https://www.c21stores.com/pages/shipping-information">FREE SHIPPING ON ORDERS $75+</a>',
		'<a class="jm-button-hover" href="/pages/careers" target="_blank">WE’RE HIRING! APPLY NOW</a>'
	];

 		function rotatingMessage(e) {
        var msg = rotatingMessages.shift();
        rotatingMessages.push(msg);
        $("div.jm-shipping-plcc-acquisition").html(msg);

				$('.jm-shipping-plcc-acquisition a').hover(function(e){
					//$('a.Shoes').css('background','red');
						clearInterval(jmtimer);
				}, function(e){
					//$('a.Shoes').css('background','blue');
						jmtimer = setInterval( rotatingMessage, 2300);
				});

		};

		var jmtimer = setInterval( rotatingMessage, 2300);

};
// END GLOBAL HEADER ROTATING MESSAGE ADQUISITION

// GLOBAL HEADER ROTATING MESSAGE RETENTION
function retention_rotating_message(er){

	var rotatingMessagesR = [
		'<a href="https://www.c21stores.com/pages/shipping-information">PREMIER CREDIT CARD: FREE SHIPPING ON ORDERS $50+ <br/>ELITE CREDIT CARD: FREE SHIPPING ON ALL ORDERS</a>',
		'<a class="jm-button-hover" href="/pages/careers" target="_blank">WE’RE HIRING! APPLY NOW</a>'
	];

 		function rotatingMessageR(er) {
        var msgR = rotatingMessagesR.shift();
        rotatingMessagesR.push(msgR);
        $("div.jm-shipping-plcc-retention").html(msgR);

				$('.jm-shipping-plcc-retention a').hover(function(er){
					//$('a.Shoes').css('background','green');
						clearInterval(jmtimerR);
				}, function(er){
					//$('a.Shoes').css('background','blue');
						jmtimerR = setInterval( rotatingMessageR, 2300);
				});

		};

		var jmtimerR = setInterval( rotatingMessageR, 2300);

};
//END GLOBAL HEADER ROTATING MESSAGE RETENTION


// GLOBAL HEADER ROTATING MESSAGE DENIED
function denied_rotating_message(ed){

	var rotatingMessagesD = [
		'<a href="https://www.c21stores.com/pages/shipping-information">FREE SHIPPING ON ORDERS $75+</a>',
		'<a class="jm-button-hover" href="/pages/careers" target="_blank">WE’RE HIRING! APPLY NOW</a>'
	];

 		function rotatingMessageD(ed) {
        var msgD = rotatingMessagesD.shift();
        rotatingMessagesD.push(msgD);
        $("div.jm-shipping-plcc-solo").html(msgD);

				$('.jm-shipping-plcc-solo a').hover(function(ed){
					//$('a.Shoes').css('background','green');
						clearInterval(jmtimerD);
				}, function(ed){
					//$('a.Shoes').css('background','blue');
						jmtimerD = setInterval( rotatingMessageD, 2300);
				});

		};

		var jmtimerD = setInterval( rotatingMessageD, 2300);

};
//END GLOBAL HEADER ROTATING MESSAGE DENIED

// GWP Banners
function show_banner_when_not_blank(){
	if (window.location.href.indexOf("categories") > -1){
		var Banner_pankeke = $('.banner-content-block__large-image-container').css('background-image');
		if (Banner_pankeke.indexOf("GWPblank") === -1){
			console.log(Banner_pankeke.indexOf("GWPblank") >= 0);
			$('.banner-content-block').show(100);
		};
	}
};
// END GWP Banners

// SEO COPY AT FOOTER - NYC BEST SECRET
function seoCopyLineFooter(){

	$('.jm_copy_block_clone').before("<h3 style='text-align: center;margin:0;'>NEW YORK'S BEST KEPT SECRET</h3>");

}
// END SEO COPY AT FOOTER - NYC BEST SECRET

// PROMO CODE HELP MESSAGE
function promo_Code_custom(){
	$("div.cart-prices__label").each(function(){
		if ($(this).text().indexOf('{') > -1){
			var s = $(this).text();
			s = s.substring(0, s.indexOf('{'));
			$(this).html(s);
			$(this).parent().css('display','table');
			console.log($(this).text());
			console.log(s);
		}
	});
}
// END PROMO CODE HELP MESSAGE

// PROMO CODE HELP MESSAGE CYBER MONDAY ONLY
function promo_Code_custom_productLevel(){
	$("span.table__price-label").each(function(){
			if ($(this).text().indexOf('{') > -1){
				var spl = $(this).text();
				spl = spl.substring(0, spl.indexOf('{'));
				console.log($(this).html(spl));
			}
	});
}
// END PROMO CODE HELP MESSAGE CYBER MONDAY ONLY


// LIVE CHAT CUSTOM MESSAGE
function live_chat_message(){
	setTimeout(function(){
		$('#livechat-full').prepend("<div class='jm-livechat-message'>Our Call Center will be closed on Monday, 12/25/17 in observance of Christmas Day and on Monday, 1/1/18 in observance of New Year's day</div>");
	}, 1000);
}
// END LIVE CHAT CUSTOM MESSAGE


console.log('all running');
