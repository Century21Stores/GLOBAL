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
	if(window.location.href.indexOf(params[i]) > -1) {
    	$('.product-grid__cell--1').fadeOut();    	
    	alert("your url contains the string "+params[i]);
    }    
  }
}

});
// END URLS EXCEPTIONS

