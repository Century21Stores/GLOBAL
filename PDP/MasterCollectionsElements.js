
// FIX MASTER COLLECTION SIZES
function SizeMasterEliminator(){
$('.product-detail-container--package .product-detail-container__child-product').each(function() {
	var packageproduct = $(this).find('.size-options__size-group');
	var countChildren = packageproduct.children().length;
	console.log('Debugging Master Collections - Package Product Detail:');
	console.log(packageproduct);
	console.log(countChildren);	
	if (countChildren == 1){
		var parentOfsingle = packageproduct.parent()
		console.log(parentOfsingle.find('.size-options__size-header'))
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
			console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}
		else if(value.indexOf("F/QN") >= 0){
			$(currentElement).closest('div.product-detail-container__child-product').attr('data-sort', '2home');    
			console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}
		else if(value.indexOf("QUEEN") >= 0){
			$(currentElement).closest('div.product-detail-container__child-product').attr('data-sort', '3home');
			console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}		
		else if(value.indexOf("KING") >= 0){
			$(currentElement).closest('div.product-detail-container__child-product').attr('data-sort', '4home');    
			console.log('M' + value);console.log('M' + $(currentElement).closest('div.product-detail-container__child-product').attr("data-sort"));			
		}	
	
	});

	sortWeirdSizes(this);
// 	console.log('veritas' + this);
// 	sortingSizes(this);	
	
});

//NON NUMBERS SORTING SIZES
function sortWeirdSizes(weirdList){


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

