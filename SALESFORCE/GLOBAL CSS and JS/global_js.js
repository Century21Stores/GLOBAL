// Global JS - JuanMa - GWP added - 8.27.19

// (none)              /search?prefn1=brand&searchType=designers&prefv1=Adesso
// (space)             %20
// ('47 Brand)         %27
// (Addie & Tate)      %26
// (2(x)IST)           2%28x%29
// (Amanda + Chelsea)  %2B
// (Playtek, LLC)      %2C
// (Re:Named)          %3A
// (Zak!)              %21


// [START] Calls
window.addEventListener("DOMContentLoaded", function(){

  //PDP ONLY
  if(window.location.href.indexOf("/products/") > -1){
    console.log("In PDP");
    jm_Designer_Header_PDP();
    jm_GWP_PDP();
 
  }
  //SEARCH ONLY
  else if(window.location.href.indexOf("/search") > -1){    
    //ROOT
    if(window.location.href.indexOf("/search?cgid=root") > -1){
      console.log("In Root Catalog");
      jm_H1_root_catalog(); 
    }
    //SEARCH
    else{      
      console.log("In Search"); 
      var searc_title = $('.result-title').text().replace(/(\r\n|\n|\r)/gm,"");
      
      if(searc_title.indexOf("Search results for") > -1){
        console.log("In Search with results"); 
      }
      else{
        console.log("In Search NO results");  
      }
    }
    
  }
  //CATEGORIES
  else if(window.location.href.indexOf("/categories/") > -1){
    console.log("In Categories");
    
  };

});
// [END] Calls

// [START] Designer Header
function jm_Designer_Header_PDP(){

  //exceptions
  var jm_brands_exceptions = ['Aimee Kestenberg','Age of Wisdom','Armani','Armani Exchange','Ben Sherman','Billionaire Boys Club','Botkier','Burberry','Calvin Klein','Calvin Klein Jeans','Carters','Champion','Christian Siriano','Citizen','Coach','DKNY','Dolce&Gabbana','Dooney & Bourke','Fossil','Frye','Furla','Gucci','Heritage','Hot Sox','Hugo Boss','Hunter','Kappa','Karl Lagerfeld','Kate Spade','Katy Perry','Kenneth Cole','Kenneth Cole Reaction','Lacoste','Lauren','Lauren Ralph Lauren','Mackage','Marc Jacobs','Marc New York','Max Mara','Members Only','Michael Michael Kors','Michael Kors','Miu Miu','Movado','Nautica','Nike','Nine West','North Face','Peace Love World','Polo Ralph Lauren','Prada','Prada Sport','Ralph Lauren','Reebok','Saint Laurent','Sam.','Skagen','Tahari','Ted Baker','Theory','Timberland','Tommy Hilfiger','Tory Burch','Versace','Zac Zac Posen'];

  if($('.product-set-detail').length == 0){
    console.log('Not a product set');
    designer_brand_raw = $('.product-details-area .product-brand').text();
  }
  else{
    console.log('Product set');
    designer_brand_raw = $('.product-set-detail .product-brand').text();
  };

  var is_there_designer_anchor = $('#jm_designer_anchor').length,      
      designer_brand = designer_brand_raw.replace(/ /g,'%20').replace(/'/g,'%27').replace(/&/g,'%26').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/&/g,'%26').replace(/\+/g,'%2B').replace(/,/g,'%2C').replace(/:/g,'%3A').replace(/!/g,'%21'),
      designer_anchor_url = $('#jm_designer_anchor').attr('href'),
      designer_pdp_name = $('.product-detail .product-brand').text().toLowerCase().replace(/ /g,'-').replace(/'/g,'%27').replace(/&/g,'%26').replace(/\(/g,'%28').replace(/\)/g,'%29').replace(/&/g,'%26').replace(/\+/g,'%2B').replace(/,/g,'%2C').replace(/:/g,'%3A').replace(/!/g,'%21'),
      designer_pdp_parameter_header = "?imc=pdp_header&imccat=designer_" + designer_pdp_name + "'></a>",
      designer_pdp_parameter_header_filter = "&imc=pdp_header&imccat=designer-suppressed_" + designer_pdp_name + "'></a>",
      designer_pdp_parameter_details = "?imc=pdp_details&imccat=designer-suppressed_" + designer_pdp_name;


  //console.log(jm_brands_exceptions.includes(designer_brand_raw));
  //console.log(designer_brand_raw);

  
  if((jm_brands_exceptions.includes(designer_brand_raw)) && (window.location.href.indexOf("/products/") > -1)){
    console.log('Supressed designer');
    $(".product-brand").wrap("<a href=/search?cgid=root&prefn1=brand&prefv1=" + designer_brand + designer_pdp_parameter_header_filter);
    $('#jm_designer_anchor').attr("href", designer_anchor_url + designer_pdp_parameter_details);
    // $('.plp-page-title').text(designer_brand_raw);
  }
  else{
    console.log('No supressed designer');
    $(".product-brand").wrap("<a href='/search?prefn1=brand&searchType=designers&prefv1=" + designer_brand + designer_pdp_parameter_header_filter);

  };

}


function jm_H1_root_catalog(){
  var jm_brand_name = $('.filter-area .filter-bar ul.clearfix li:nth-of-type(2) a > .refinement-name')[0].innerText;
  $('h1').text(jm_brand_name);
}

// [END] Designer Header

// [START] GWP
function jm_GWP_PDP(){
  if($('.jmr-gwp-pdp').length == 1){
    var gwp_id = $('.jmr-gwp-pdp > a').attr('id');
    console.log(gwp_id);
    $('.product-details-area .level-discount .callout').wrapInner('<a href="#" id="'+gwp_id+'_callout"></a>');
  }
}
// [END] GWP

// [START] Scrolling disclaimer browse banner
function jm_scroll_bb_disclaimer(this_id){
    if ($(window).width() < 700) {
        jm_offset = 200;
    }
    else{
        jm_offset = 543;
    }    
        console.log(this_id);
        $('body, html').animate({
            scrollTop: $('#jm-bb-disclaimer').offset().top - jm_offset
        },1000);
}
function jm_scroll_bb_disclaimer_back(this_class){
    $('#jm_drop_main').focus();    
}
// [END] Scrolling disclaimer browse banner

// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&srule=top-sellers&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefn2=divisionCode&srule=top-sellers&prefv1=Calvin%20Klein&prefv2=Men
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefn2=divisionCode&srule=top-sellers&prefv1=Calvin%20Klein&prefv2=Women

