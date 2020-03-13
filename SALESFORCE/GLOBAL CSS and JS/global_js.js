// Global JS - JuanMa - GWP added - 3.13.20

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

jm_Global_Alert_ad();

  //PDP ONLY
  if(window.location.href.indexOf("/products/") > -1){
    console.log("In PDP");
    jm_Designer_Header_PDP();
    jmr_temporary_fix_recommender();
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
  //LANDING PAGES
  else if((window.location.href.indexOf("/categories/men") > -1) || (window.location.href.indexOf("/categories/women") > -1) || (window.location.href.indexOf("/categories/shoes") > -1) || (window.location.href.indexOf("/categories/beauty") > -1) || (window.location.href.indexOf("/categories/kids") > -1) || (window.location.href.indexOf("/categories/home") > -1) || (window.location.href.indexOf("/categories/handbags-accessories") > -1)){
    console.log("In Landing Pages");
    jm_carousel_modification();
    jmr_temporary_fix_recommender();
  }

  //CATEGORIES
  else if(window.location.href.indexOf("/categories/") > -1){
    console.log("In Categories");
    jmr_temporary_fix_recommender();

  }

  //CART
  else if(window.location.href.indexOf("/cart") > -1){
    console.log("In Cart");
    //jm_centurycash_message();
    doSwap();

  }

  //MY ACCOUNT
  else if(window.location.href.indexOf("/account") > -1){
    console.log("My Account");
    // jm_loading_messages_from_cart();
  }

  //OTHER PAGES
  else{
    jm_carousel_modification();
  };

});
// [END] Calls


// [START] Designer Header
function jm_Designer_Header_PDP(){

  //exceptions
  var jm_brands_exceptions = ['Aimee Kestenberg','Age of Wisdom','Armani','Armani Exchange','Ben Sherman','Billionaire Boys Club','Botkier','Burberry','Calvin Klein','Stuart Weitzman','Calvin Klein Jeans','Carters','Champion','Christian Siriano','Citizen','Coach','DKNY','Dolce&Gabbana','Dooney & Bourke','Fossil','Frye','Furla','Gucci','Heritage','Hot Sox','Hugo Boss','Hunter','Kappa','Karl Lagerfeld','Kate Spade','Katy Perry','Kenneth Cole','Kenneth Cole Reaction','Lacoste','Lauren','Lauren Ralph Lauren','Mackage','Marc Jacobs','Marc New York','Max Mara','Members Only','Michael Michael Kors','Michael Kors','Miu Miu','Movado','Nautica','Nike','Nine West','North Face','Peace Love World','Polo Ralph Lauren','Prada','Prada Sport','Ralph Lauren','Reebok','Saint Laurent','Sam.','Skagen','Tahari','Ted Baker','Theory','Timberland','Tommy Hilfiger','Tory Burch','Versace','Zac Zac Posen'];

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
  if($('.jmr-gwp-pdp-description').length == 1){
    var gwp_id = $('.jmr-gwp-pdp-description > a').attr('id');
    // console.log(gwp_id);
    $('.product-details-area .level-discount > div[title|="Free Gift With Purchase"]').wrapInner('<a href="#" id="'+gwp_id+'_callout"></a>');
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
function jm_carousel_modification(){
  console.log("carousel script");
  if($('.carousel-product-tiles').length != 0){
    $( ".carousel-product-tiles .one-slide" ).each(function(index) {
      $(this).parent().addClass("jmr-large-carousel");
    });
    $( ".carousel-product-tiles .four-slides" ).each(function(index) {
      $(this).parent().addClass("jmr-small-carousel");
    });
  }
}

function jm_Global_Alert_ad(){  
  if ((window.location.href.indexOf("/checkout") != -1) || (window.location.href.indexOf("/returns.html") != -1)) {
    console.log('DO NOT alert global banner');
  
  }else{
    console.log('show alert global banner');
    $('header').prepend(
      '<p class="jmr-alert-gb" role="alert"><a target="_blank" href="/stores?imc=gb_alert&imccat=w07-20-a_stores"><span>WE‘RE OPEN IN AMERICAN DREAM! <span role="button" class="jmr-text-cta">Store Address</span></span></a></p>'
    )
  };
}
// [END] Scrolling disclaimer browse banner

// [START] CENTURYCASH message cart
function jm_centurycash_message(){
var subtotal = $('.cart-page .order-total-summary .subtotal-item .sub-total');
  if(subtotal){
    var subtotal_number = Number(subtotal.text().replace(",","").replace("$",""));
    console.log(subtotal_number);
    var message;
    switch (true) {
      case (subtotal_number >80 && subtotal_number <100):
        message = "Spend $" + (100 - subtotal_number).toFixed(2) + " more, receive $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >180 && subtotal_number <200):
        message = "Spend $" + (200 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >280 && subtotal_number <300):
        message = "Spend $" + (300 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >380 && subtotal_number <400):
        message = "Spend $" + (400 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >480 && subtotal_number <500):
        message = "Spend $" + (500 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >580 && subtotal_number <600):
        message = "Spend $" + (600 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >680 && subtotal_number <700):
        message = "Spend $" + (700 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >780 && subtotal_number <800):
        message = "Spend $" + (800 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >880 && subtotal_number <900):
        message = "Spend $" + (900 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
        build_centurycash_banner(message,subtotal_number);
        break;
      case (subtotal_number >980 && subtotal_number <1000):
        message = "Spend $" + (1000 - subtotal_number).toFixed(2) + " more, receive an extra $21 CENTURYCASH!";
    }


    console.log(message);

    function build_centurycash_banner(message,subtotal_number){
    if(subtotal_number >80 && subtotal_number <1000){
      $('.cart-wrapper .totals > div.d-block').append(
        '<aside class="jmr-all-cb jmr-cartb jmr-cartb-about-to-get-message">'+
        '<div class="jmr-all-wrapper jmr-cartb-wrapper">'+
          '<a href="/categories/new-arrivals-shop-all?imc=cart-bb_img&imccat=w42-b_new-arrivals-shop-all" class="jm-clickable-image" aria-hidden="true" role="none" tabindex="-1"></a>'+
          '<article>'+
            '<div>'+
            '<p>'+message+'</p>'+
            // '<span class="jmr-ctas">'+
            //     '<a href="/categories/new-arrivals-shop-all?imc=cart-bb_img&imccat=w42-b_new-arrivals-shop-all" class="btn jmr-cta-button jmr-cta-button-solidlight">SHOP NEW ARRIVALS</a>'+
            // '</span>'+
            '</div>'+
          '</article>'+
        '</div>'+
        '</aside>'
        );
    }
    }

  }
}
// [END] CENTURYCASH message cart

// [START] Recommenders Temporary Fix
function jmr_temporary_fix_recommender(){
  $('[id*=cq_recomm_slot]').addClass('container');
}
// [END] Recommenders Temporary Fix

// [START] Swappping elements cart
function doSwap() {
  objeto = document.querySelector('.cart-policies');
  $('.footer-email-signup').before(objeto);
}
// [END] Swappping elements cart

// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&srule=top-sellers&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefv1=Billionaire%20Boys%20Club
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefn2=divisionCode&srule=top-sellers&prefv1=Calvin%20Klein&prefv2=Men
// https://staging-na01-century21.demandware.net/s/C21/search?cgid=root&prefn1=brand&prefn2=divisionCode&srule=top-sellers&prefv1=Calvin%20Klein&prefv2=Women