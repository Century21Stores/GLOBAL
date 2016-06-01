// URLS EXCEPTIONS 
$(window).load(function() {

var URLS = [ 
'https://www.staging.c21.weblinc.com/categories/shoes-flats',
'URL2', 
'URL3' 
]; 

exceptThisUR(URLS);

function exceptThisUR(params) {
  for (i=0; i<params.length; i++) {
    console.log(params[i]);
    if(window.location.href === params[i]){
    	$('.product-grid__cell--1').fadeOut();	
    }
    
  }
}

});
// END URLS EXCEPTIONS


//GRID AD BANNER GLOBAL EXCEPTION
	if(window.location.href == "https://www.c21stores.com/categories/gifts-accessories" || 
	window.location.href == "https://www.c21stores.com/categories/gifts-dress-shirts-ties" || 
	window.location.href == "https://www.c21stores.com/categories/gifts-cologne" ||
	window.location.href == "https://www.c21stores.com/categories/gifts-polos-shirts" ||
	window.location.href == "https://www.c21stores.com/categories/gifts-tech"){
 		$('.product-grid__cell--1').fadeOut();
	}
	//END GRID AD BANNER GLOBAL EXCEPTION