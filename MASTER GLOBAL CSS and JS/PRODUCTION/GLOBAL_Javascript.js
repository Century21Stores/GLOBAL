// JS PROD MASTER - W46A BGA -&- PLCC back to 15% -&- Helpful promo  message -&- Duplicate Images - JMRV- 12.04.18
// PAST: W43E PLCC 20% - JMRV- 11.27.18
// jrios@c21stores.com


var t0 = performance.now();

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
//document.addEventListener( "DOMContentLoaded", Hover_message_Button, false );



// If on search
if(window.location.href === "https://www.c21stores.com/cart"){
    console.log('jm shopping cart');
    document.addEventListener( "DOMContentLoaded", shipping_Message, false );
}
else if (window.location.href.indexOf("search") > -1){
    console.log('searchie');
}
else if (window.location.href.indexOf("/users/account/edit") > -1){
    console.log('my account edit');
};

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
        var listArr3 = [];

        //PUSH DATA FROM 2 COLUMNS TO 2 ARRAYS
        $(entry).each(function(){
            listArr.push(this.gsx$suppressed.$t.toLowerCase());
            listArr2.push(this.gsx$suppressed2.$t.toLowerCase());
            listArr3.push(this.gsx$funkymonkeys.$t.toLowerCase());
        });

        //COMBINE BOTH ARRAYS INTO ONE SINGLE ARRAY
        var listArrTotal = listArr.concat(listArr2);

        // CLEAR EMPTY ITEMS
        listArr = listArr.filter(Boolean)
        listArr2 = listArr2.filter(Boolean)
        listArr3 = listArr3.filter(Boolean)
        listArrTotal = listArrTotal.filter(Boolean)

        //console.log(search.valueOf());
        //console.log("lsit arr: " + listArr);
        //console.log("lsit arr2: " + listArr2);
        //console.log(listArrTotal);
        //console.log(listArr3);

        designerList();
        function designerList(){
            for (var z=0; z < listArrTotal.length; z++){
                //console.log(z + " -> " + listArrTotal[z]);
                //console.log();

                if( (arrayContains(listArrTotal, search.valueOf())) || (listArr3.includes(search.valueOf())) ){
                //if(listArrTotal.includes(search.valueOf())){
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
                //console.log("Category Name: " + cat_Name);
                for (var z=0; z < listArrTotal.length; z++){
                    if(arrayContains(listArrTotal, cat_Name)){
                        //console.log("search found!");
    //                  $('.page-content__wrapper').hide("fast");
    //                  $('.page-content').prepend(
    //                      '<div id="result">'+
    //                      '</div>'
    //                  );
    //                  $( "#result" ).load( "/pages/zero-search" );
    //                  break;
                    }
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

    }

};

function build_searchResults(){
setTimeout(function(){
    if($('section.jm-zerosearch').length === 0){
        $('.page-content--search .page-content__main').css('opacity','1');
        // console.log('NO PANEL');
    }
}, 500);        

}build_searchResults();

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
        //console.log(this);
        sortingTheList(this);

    });

    //SORTING 2
    function sortingTheList2(listToSort){
    
    }
    //END SORTING 2


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
    //console.log('working!!!');
    //console.log(imageAnchor);
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
        //console.log(this);
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
//  console.log('veritas' + this);
//  sortingSizes(this);

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
//  setTimeout(function() {   //calls click event after a certain time
//      allSortingSizes();
//      console.log('gua gua guacamole!');
//  }, 1000);
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
    jm_h1_title = $('.view h1').html().toLowerCase().replace(/'/g,"").replace(/ /g,"_");
    jm_cat_URL = window.location.href;
    jm_cat_slug = jm_cat_URL.substr(jm_cat_URL.lastIndexOf('/') + 1);
    //console.log(jm_h1_title);
    var urlEshoes = (
        (window.location.href.indexOf("shoes-cold-weather-rain") > -1) ||
        //(window.location.href.indexOf("edit") > -1) ||
        (window.location.href.indexOf("7arsw") > -1)
    );
    var urlEshoes2 = (
        (window.location.href.indexOf("shoes-boots") > -1) ||
        //(window.location.href.indexOf("shoes-luxury-designer") > -1) ||        
        //(window.location.href.indexOf("edit") > -1) ||
        (window.location.href.indexOf("sneakers") > -1)
    );    
    var urlEhandbags = (
        (window.location.href.indexOf("arrivals") > -1) ||
        (window.location.href.indexOf("7alcw") > -1)
    );
    var urlEhandbags2 = (
        (window.location.href.indexOf("luxury") > -1) ||
        (window.location.href.indexOf("sunglasses") > -1)
    );    
    var urlEkids = (
        (window.location.href.indexOf("arrivals") > -1) ||
        (window.location.href.indexOf("back-to-cool") > -1) ||
        (window.location.href.indexOf("kids-girls-shoes") > -1) ||
        (window.location.href.indexOf("kids-boys-shoes") > -1) ||
        (window.location.href.indexOf("infant") > -1) ||
        (window.location.href.indexOf("bedroom-must-haves") > -1)
    );
    var urlEkids2 = (
        (window.location.href.indexOf("kids-girls-shoes") > -1) ||
        (window.location.href.indexOf("boys") > -1) ||
        (window.location.href.indexOf("kids-girls-infant") > -1)
    );    
    var urlEmens = (
        (window.location.href.indexOf("arrivals") > -1) ||
        //(window.location.href.indexOf("men-wallets") > -1) ||
        (window.location.href.indexOf("testmen-shop-all-accessories") > -1)
    );
    var urlEmens2 = (
        (window.location.href.indexOf("men-coats-jackets") > -1) ||
        (window.location.href.indexOf("men-dress-shirts") > -1) ||
        (window.location.href.indexOf("men-jeans") > -1)
    );
    var urlEcontemporary = (
        (window.location.href.indexOf("arrivals") > -1) ||
        (window.location.href.indexOf("cashmere") > -1) ||
        (window.location.href.indexOf("italian") > -1)
    );
    var urlEwomensHidden = (
        (window.location.href.indexOf("women-jeans") > -1) ||
        (window.location.href.indexOf("women-coats") > -1) ||
        (window.location.href.indexOf("women-tops") > -1) ||
        (window.location.href.indexOf("dresses-") > -1)
    );
    var urlEmensHidden = (
        (window.location.href.indexOf("men-suits") > -1) ||
        (window.location.href.indexOf("men-coats") > -1) ||
        (window.location.href.indexOf("/men-jeans") > -1)
    );
    var urlEjeansmensHidden = (
        (window.location.href.indexOf("/men-jeans") > -1)
    );
    var urlEjeanswomensHidden = (
        (window.location.href.indexOf("/women-jeans") > -1)
    );
    var urlEcoatsmensHidden = (
        (window.location.href.indexOf("/men-coats-jackets") > -1)
    );       
    var urlEcoatswomensHidden = (
        (window.location.href.indexOf("women-coats") > -1)
    );    
    var urlEmwomens = (
        (window.location.href.indexOf("arrivals") > -1) ||
        //(window.location.href.indexOf("cashmere") > -1) ||
        (window.location.href.indexOf("7atnw") > -1)
    );
    var urlEmwomens2 = (
        (window.location.href.indexOf("women-coats") > -1) ||
        (window.location.href.indexOf("women-jeans") > -1) ||
        //(window.location.href.indexOf("women-swimsuits-cover-ups") > -1) ||
        (window.location.href.indexOf("women-sweaters") > -1)
    );    
    var urlEhome = (
        (window.location.href.indexOf("home-fall-harvest") > -1) ||
        (window.location.href.indexOf("new-arrivals-test") > -1)
    );
    var urlEhome2 = (
        (window.location.href.indexOf("home-dinnerware-flatware") > -1) || // because global
        (window.location.href.indexOf("home-drinkware-barware") > -1) || // because global
        (window.location.href.indexOf("home-serveware") > -1) || // because global
        (window.location.href.indexOf("home-table-linens") > -1) || // because global
        (window.location.href.indexOf("home-shop-all-dining-entertaining") > -1) || // because global
        (window.location.href.indexOf("home-bath-accessories") > -1) || //because global
        (window.location.href.indexOf("home-sheets-pillowcases") > -1)
    );
    var urlEbeauty = (
        (window.location.href.indexOf("beauty-gift-sets") > -1) ||
        (window.location.href.indexOf("beauty-makeup") > -1) ||
        (window.location.href.indexOf("beauty-korean-beauty") > -1) ||
        (window.location.href.indexOf("beauty-skincare") > -1)
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
//  var urlEspecial_Active = (
//      (window.location.href.indexOf("active") > -1)
//  );

    //console.log(urlEshoes);

    if(jm_cat === "Tech"){
        allSiteGA28();
        //allSiteGA14();
        if(!urlEtech){
//          WishiWankaGA();
        }
    }
    else if(jm_cat === "New + Now"){
            allSiteGA28();
            //allSiteGA14();
    }
    else if(jm_cat === "Beauty"){        
        if(!urlEbeauty){            
            beautyGA30();
            //allSiteGA14();
        }
        else{            
            beautyGA14();
        }
    }
    else if(jm_cat === "Shoes"){            
            //allSiteGA14();
         if(!urlEshoes){
           //allSiteGA28();
         }
         if(!urlEshoes2){
           allSiteGA28();
           //shoesGA30(); //BIKER CHICS
         }
    }
    else if(jm_cat === "Handbags &amp; Accessories"){
            allSiteGA28();
            //allSiteGA14();
    //     if(!urlEhandbags){
    
      //   }
        //if(!urlEhandbags2){
            //hbGA30();
        //}
    }
    else if(jm_cat === "Kids"){
            allSiteGA28();
            //allSiteGA14();
        // if(!urlEkids2){
        //     kidsGA30();
        // }
        ////allSiteGA14();
        if(!urlEkids){
            //kidsGA30();
        }
    }
    else if(jm_cat === "Contemporary"){
        if(!urlEcontemporary){
            //newArrivalsContemporaryGA();
        }
    }
    else if((jm_cat === "Women") || (urlEwomensHidden)){
            //allSiteGA28();
            //allSiteGA14();
         if(!urlEmwomens2){
             womenGA30();
         }
        if(!urlEmwomens){
             //womenGA14();
        
            //if(urlEcoatswomensHidden){
               // allSiteGA28();
                //womencoatsHGA30(); //BOOT UP
            //}
            //else if(urlEjeanswomensHidden){
                //allSiteGA28();
                //womenjeansHGA30(); //KNIT LIST
            //}
        }
    }
    else if((jm_cat === "Men") || (urlEmensHidden)){
            allSiteGA28();
            //allSiteGA14();
        //if(!urlEmens2){
             //menGA30();
        //}
        //allSiteGA14();
         if(!urlEmens){
             //menGA14(); 
            //if(urlEjeansmensHidden){
                //menjeansHGA30(); //KNIT LIST
                //allSiteGA28();
            //}
            //else if(urlEcoatsmensHidden){
                //allSiteGA28();
                //mencoatsHGA30();  // COOL ELEMENTS
            //}            
         }        
    }
    else if(jm_cat === "Home"){
            allSiteGA28();
            //allSiteGA14();
            //allSiteGA14();
         //if(!urlEhome){
                //homeGA14();
            //if(!urlEhome2){
               //homeGA30();
             //}
        //}

    }
    else if(jm_cat === "Private Access Shopping"){
        //console.log(jm_cat3);
        if(jm_cat3 == "Clothing"){
            //console.log('uiiii');
        }
    }
    else if(jm_cat === "Clearance"){
//      giftsCardsGA2();
    }

    else{
        return false;
    }


    fixingHeights();

});




// KIDS 14
function kidsGA14() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTQvMTIvMzkvMjA5LzAxXzA5V2VlazFfQkdBX05BX0tJRFMuanBnIl1d/01_09Week1_BGA_NA_KIDS.jpg?sha=8f2cbeab62bd42ae";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/kids-new-arrivals?bga=kids_new_arrivals_from_"+ jm_cat_slug + "_w31&gal=pos14";
    //TAG
    var gaTag = "GA_newArrivalsKids";


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
        '<p class="content-block-content__action content-block-content__action--button"><a name="' + gaTag +'" class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END KIDS 14


// KIDS 30
function kidsGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDkvMjAvMTMvNDgvNTgvMTI0LzA5V2VlazRfQkdBX1ZhcnNpdHlfU3R5bGVfMi5qcGciXV0/09Week4_BGA_Varsity_Style_2.jpg?sha=0b3d8ed2534c1693";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/new-now-varsity-style?bga=kids-varsity_style_from_"+ jm_cat_slug + "_w34&gal=pos28";
    //TAG
    var gaTag = "GA_kidsbacktocool_W27_18";


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
        '<p class="content-block-content__action content-block-content__action--button"><a name="' + gaTag +'" class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END KIDS 30


// WOMENS 14
function womenGA14() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTAvNTAvNDEvNDkzLzAxXzA5V2VlazFfQkdBX05BX1dPTUVOLmpwZyJdXQ/01_09Week1_BGA_NA_WOMEN.jpg?sha=1eeff70e61bd89f9";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/women-new-arrivals?bga=women_new_arrivals_from_"+ jm_cat_slug + "_w31&gal=pos14";

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
// END WOMENS 14



// WOMENS 30 - SHINE & SHIMMER
function womenGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTEvMjYvMTUvNDQvMjYvMTI5LzAxXzExV2VlazRfQkdBX1NISU5FU0hJTU1FUi5qcGciXV0/01_11Week4_BGA_SHINESHIMMER.jpg?sha=7326b4bbc8707ec4";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL    
    var urlLINK = "https://www.c21stores.com/categories/new-now-shine-shimmer?bga=shine_shimmer_from_"+ jm_cat_slug + "_w43B&gal=pos28";

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
// END WOMENS 30



// MENS 14
function menGA14() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTQvMzAvMjEvOTUwLzAxXzA5V2VlazFfQkdBX05BX01FTi5qcGciXV0/01_09Week1_BGA_NA_MEN.jpg?sha=e4ad9504f0f66e87";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/men-new-arrivals?bga=men_new_arrivals_from_"+ jm_cat_slug + "_w31&gal=pos14";

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
// END MENS 14




// MENS 30
function menGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://www.c21stores.com/media/W1siZiIsIjIwMTgvMDkvMjAvMTQvMTIvNTAvNzMxLzA5V2VlazRfQkdBX1JldHJvX1JlcGxheV8yLmpwZyJdXQ/09Week4_BGA_Retro-Replay_2.jpg?sha=7718648527e9dc24";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/new-now-retro-replay?bga=men_newnow_retro_replay_from_"+ jm_cat_slug + "_w34&gal=pos28";

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
        '<p class="content-block-content__action content-block-content__action--button"><a style="background:white; color:black !important" class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END MENS 30


// MENS JEANS HIDDEN 30
function menjeansHGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTUvMDEvMDYvOTQvMDFfMDlXZWVrMV9CR0FfU1dFQVRFUlMuanBnIl1d/01_09Week1_BGA_SWEATERS.jpg?sha=b6809c7acbde3924";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/men-sweaters?bga=men_knit_list_from_"+ jm_cat_slug + "_w31&gal=pos28";

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
// END MENS JEANS HIDDEN 30



// MENS JEANS HIDDEN 30
function mencoatsHGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDkvMDcvMTUvMjcvMzAvNTEwLzAxXzA5V2VlazFfQkdBX1NVSVRTLmpwZyJdXQ/01_09Week1_BGA_SUITS.jpg?sha=a59735d713a3856b";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/men-hats-scarves-gloves?bga=men_cool_elements_from_"+ jm_cat_slug + "_w3&gal=pos28";

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
// END MENS JEANS HIDDEN 30


// WOMENS JEANS HIDDEN 30
function womenjeansHGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTUvMzQvMDAvMjA1LzAxXzA5V2VlazFfQkdBX1NXRUFURVJTLmpwZyJdXQ/01_09Week1_BGA_SWEATERS.jpg?sha=93c0a9dac055da99";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/women-sweaters?bga=women_knit_list_from_"+ jm_cat_slug + "_w31&gal=pos28";

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
// END WOMENS JEANS HIDDEN 30


// WOMEN COATS HIDDEN 30
function womencoatsHGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTUvNDYvMDAvNjY0LzAxXzA5V2VlazFfQkdBX0JPT1RTLmpwZyJdXQ/01_09Week1_BGA_BOOTS.jpg?sha=a7eac14cfd05f3de";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/shoes-boots?bga=boot_up_from_"+ jm_cat_slug + "_w31&gal=pos28";


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
// END WOMEN COATS HIDDEN 30


// SHOES 14
function shoesGA14() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTQvNDQvMjQvODUwLzAxXzA5V2VlazFfQkdBX05BX1NIT0VTLmpwZyJdXQ/01_09Week1_BGA_NA_SHOES.jpg?sha=f53626f04ed86788";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/shoes-new-arrivals?bga=shoes_new_arrivals_from_"+ jm_cat_slug + "_w31&gal=pos14";

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
// END SHOES 14


// SHOES SHOES 30 - BIKER CHIC
function shoesGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTAvMTIvMTAvNTEvNTQvNTkyLzAxXzEwV2VlazJfQkdBX0JJS0VSQ0hJQ19XLmpwZyJdXQ/01_10Week2_BGA_BIKERCHIC_W.jpg?sha=4089c8d7df22d278";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/new-now-biker-chic?bga=new_now_biker_chick_from_"+ jm_cat_slug + "_w37&gal=pos28";

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
// END SHOES 30


// HB 14
function hbGA14() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDgvMzAvMTIvMzMvNDIvNTM3LzAxXzA5V2VlazFfQkdBX05BX0hCQUNDLmpwZyJdXQ/01_09Week1_BGA_NA_HBACC.jpg?sha=9219a1769e4c57af";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/handbags-accessories-new-arrivals?bga=handbags_accessories_new_arrivals__from_"+ jm_cat_slug + "_w31&gal=pos14";

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
// END HB 14



// HB 30
function hbGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDQvMTkvMTYvMjQvMTIvNjc5LzAxXzA0V2VlazNfQkdBX1dhaXN0QmFncy5qcGciXV0/01_04Week3_BGA_WaistBags.jpg?sha=a14d19db3a512b50";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/new-now-the-waist-pack?bga=hb_waist_pack_W12&gal=pos30";

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
// END HB 30


// HOME 14 - FALL HARVEST
function homeGA14() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTAvMTgvMTQvMjkvMjYvMjM3LzEwV2VlazNfQkdBX2ZhbGxoYXJ2ZXN0XzIuanBnIl1d/10Week3_BGA_fallharvest_2.jpg?sha=809dadf57070b8ee";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/home-fall-harvest?bga=home_fall_harvest__from_"+ jm_cat_slug + "_w38&gal=pos14";
    //TAG
    var gaTag = "GA_home_newarrivals";

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
        '<p class="content-block-content__action content-block-content__action--button"><a name="' + gaTag + '" class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END HOME 14


// HOME 30 -
function homeGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 2;
    //POSITION
    var pos = 28;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDkvMjYvMTEvMjkvNTAvNTI0LzA5V2VlazVfQkdBX0Zhcm1ob3VzZV8yLmpwZyJdXQ/09Week5_BGA_Farmhouse_2.jpg?sha=ee90e79b522c5cb2";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/new-now-modern-farmhouse?bga=modern_farmhouse_from_"+ jm_cat_slug + "_w35&gal=pos28";
    //TAG
    var gaTag = "GA_new_on_campus-w29_18";

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
        '<p class="content-block-content__action content-block-content__action--button"><a name="' + gaTag + '" class="button button--alt-inverse button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END HOME 30



// BEAUTY 30 - 
function beautyGA30() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 29;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTEvMDEvMTIvMDgvMzMvMTczLzExV2VlazFfQkdBX0JFQVVUWS5qcGciXV0/11Week1_BGA_BEAUTY.jpg?sha=b99e8b32cf58347d";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/home-new-arrivals?bga=home_newarrivals_w10&gal=pos14";
    //TAG
    var gaTag = "GA_home_newarrivals";

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
        // '<p class="content-block-content__action content-block-content__action--button"><a name="' + gaTag + '" class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END BEAUTY 30


// BEAUTY 14 - FREE SHIPPING
function beautyGA14() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTEvMDEvMTIvMDgvMzMvMTczLzExV2VlazFfQkdBX0JFQVVUWS5qcGciXV0/11Week1_BGA_BEAUTY.jpg?sha=b99e8b32cf58347d";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/home-new-arrivals?bga=home_newarrivals_w10&gal=pos14";
    //TAG
    var gaTag = "GA_home_newarrivals";

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
        // '<p class="content-block-content__action content-block-content__action--button"><a name="' + gaTag + '" class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END BEAUTY 14 - FREE GIFTS + FREE SHIPPING



// ALL SITE 14 GRID AD BANNER - $21 CENTURYCASH
function allSiteGA14() {

    var breacrumb2 = $('.breadcrumbs__node-group span:nth-of-type(2) a').text().toLowerCase();
    var breacrumb3 = $('.breadcrumbs__node-group span:nth-of-type(3)').text().toLowerCase();
    //console.log('top nav: ' + breacrumb2);
    //console.log('top nav2: ' + breacrumb3);
    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 14;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTIvMDMvMTIvNTIvMTUvMzM2LzAxXzEyV2VlZWsxX0JHQV9FR0lGVENBUkRTLmpwZyJdXQ/01_12Weeek1_BGA_EGIFTCARDS.jpg?sha=d0c3bc23cdabcec9";
    //var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTAvMjYvMTIvMTcvMzAvOTIxLzEwV2VlZWs0X0JHQV9HSUZUTU9SRV8yLmpwZyJdXQ/10Weeek4_BGA_GIFTMORE_2.jpg?sha=65772cd4c378dc15";
    //var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTEvMTkvMTMvMTkvMzQvNzM0LzAxXzExV2VlazNfQkdBX0NZQkVSU1BFQ0lBTFMuanBnIl1d/01_11Week3_BGA_CYBERSPECIALS.jpg?sha=2628e79df020172f";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/e-gift-cards?bga=egifts_cards2018_from_"+ jm_cat_slug + "_w44&gal=pos14";
    //var urlLINK = "https://www.c21stores.com/pages/gifts?bga=gifts2018_from_"+ jm_cat_slug + "_w39&gal=pos14";
    //var urlLINK = "https://www.c21stores.com/pages/cyber-specials?bga=cyber-specials2018_from_"+ jm_cat_slug + "_w42&gal=pos14";
    var gaTag = "GA_gifts_2018";

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
        //'<p class="content-block-content__action content-block-content__action--light-text"><a style="color:white;border-color: white;font-size: 1.8em;letter-spacing: 0;line-height: 1.2;padding: 0;" target="_blank" class="text" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '<p class="content-block-content__action content-block-content__action--button"><a name="' + gaTag +'" class="button button--alt button--wide button--large" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END ALL SITE SPRING GRID AD BANNER


// ALL SITE 28 - GIFT CARDS
function allSiteGA28() {

    //GRID AD TYPE:  enter 1 or 2
    var gaType = 1;
    //POSITION
    var pos = 29;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTEvMDEvMTIvMTcvNDcvMjkyLzExV2VlZWsxX0JHQV9HSUZUQ0FSRFNfMi5qcGciXV0/11Weeek1_BGA_GIFTCARDS_2.jpg?sha=75c9a94cb9088d78";
    //var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTEvMjEvMTMvNTAvNTMvMzA3L09NMThfQ1lCRVJNT05fQkdBX3Byb21vYi5qcGciXV0/OM18_CYBERMON_BGA_promob.jpg?sha=0f10a318c2c03e49";
    //LINK TEXT
    var textLink = "SHOP NOW";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/categories/gift-card?bga=gift_cards_2018_from_"+ jm_cat_slug + "_w40&gal=pos28";
    //var urlLINK = "https://www.c21stores.com/users/account/edit?edit_section=c21status&bga=bga_centurycash_2018_from_"+ jm_cat_slug + "_w43&gal=pos28";
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
        //'<p class="content-block-content__action content-block-content__action--light-text" style="margin:0;"><span style="color: white; font-weight: bold; font-size: 1.3em;">NOT A LOYALTY MEMBER?</span><a style="color:white;border-color: white;font-size: 1.3em;letter-spacing: 0;line-height: 1.2;padding: 0;" target="_blank" class="text" href="'+ urlLINK + '">' + textLink + '</a></p>' +
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
    //var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMTEvMjcvMTIvMjAvMjkvMjA0LzAxXzExV2VlazRfQkcuanBnIl1d/01_11Week4_BG.jpg?sha=822fe46318f7fcfc";
    //LINK TEXT
    var textLink = "APPLY NOW";
    // var textLink = "LEARN MORE";
    //LINK URL
    //var urlLINK = "https://www.c21stores.com/instant_credit/apply?bga=acquisition_plcc20_w43E&gal=pos45";
    var urlLINK = "https://www.c21stores.com/instant_credit?bga=acquisition_xtra20_plcc_w30D&gal=pos45";


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
    // var pos = 44;
    var pos = 41;
    //IMAGE URL 370x552
    var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTcvMDIvMTMvMTUvNTQvMTMvOTUzLzA5V2VlazRfUExDQ19HcmlkX1JldGVudGlvbjIuanBnIl1d/09Week4_PLCC_Grid_Retention2.jpg?sha=020b263e54ca1df2";
    // var urlIMG = "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTgvMDUvMjQvMDkvMTYvMjIvNDUvMDFfT00xOF9tZW1vcmlhbGRheV9CR0FfcHJvbW8uanBnIl1d/01_OM18_memorialday_BGA_promo.jpg?sha=6f7241e3efa45488";
    //LINK TEXT
    var textLink = "INFO/EXCLUSIONS";
    //LINK URL
    var urlLINK = "https://www.c21stores.com/pages/double-points-info-exclusions?bga=retention_plcc_w17B&gal=pos45";

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
        // '<p class="content-block-content__action content-block-content__action--button"><a style="font-size:0.87em;" target="_blank" class="button button--alt button--wide" href="'+ urlLINK + '">' + textLink + '</a></p>' +
        '</div>'+
        '</div>'+
        '</div>'+
        '</div>'+
        '</li>'
    );

    AdClassAll_Single(realPos, gaType);

}
// END RETENTION GRID AD BANNER



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

//  var testing123 = $('.cart-prices__value span').parent().parent().children('.cart-prices__label');
//  console.log(testing123);
//
// //   $('.cart-prices__label').eq(1).html(function(){
//  $(testing123).html(function(){
//      console.log(this);
//      var promotion_message = $(this).html();
//      console.log('Promotion message: ' + promotion_message);
//      $('.cart-prices__label').each(function(i) {
//          filtered_promotion_message = promotion_message.match(/\{([^}]+)\}/)[1];
//      });
//      var new_promotion_message = promotion_message.replace("{", " ").replace("}", " ").replace(filtered_promotion_message, " ");
//
//      //console.log('Promotion message: ' + promotion_message);
//      //console.log('Filtered promotion message: ' + filtered_promotion_message);
//      //console.log('New promotion message: ' + new_promotion_message);
//
//
//      return $(this).html().replace(promotion_message, new_promotion_message);
//  });








// HEIGHT PRODUCT GRID EVEN
function fixingHeights(){
    setTimeout(function(){
        var gridAds = [];
        $("ul.product-grid").children().each(function(){
            gridAds.push($(this).height());
        //  console.log("this is: " + $(this).outerHeight(true));
        });
        //console.log(gridAds);
        var maxHeight = Math.max.apply(Math, gridAds);
        //console.log(maxHeight);

        $('.product-grid__cell').css('height',maxHeight);

    }, 1000);
}




//AUDIO UGLY SWEATERS

function uglySweaters(){

    if(window.location.href.indexOf("https://www.c21stores.com/products/reindeer-holiday-sound-sweater") > -1){
        //$('.product-details__sub-section--description').append(
        //'<audio controls>'+
        //  '<source src="horse.ogg" type="audio/ogg">'+
        //  '<source src="horse.mp3" type="audio/mpeg">'+
        //  'Your browser does not support the audio element.'+
        //'</audio>'
        //);
    }
    else if(window.location.href.indexOf("https://www.c21stores.com/products/elf-dj-holiday-sweater") > -1){
        $('.product-details__sub-section--description').append(
        '<audio controls>'+
    //      '<source src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTEvMDEvMTUvNDgvMzAvNDAyLzI0NzVfMDQ1Ny5tcDMiXV0/2475-0457.mp3?sha=e61c6cd697fad8e8" type="audio/ogg">'+
            '<source src="https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTEvMDEvMTUvNDgvMzAvNDAyLzI0NzVfMDQ1Ny5tcDMiXV0/2475-0457.mp3?sha=e61c6cd697fad8e8" type="audio/mpeg">'+
            'Your browser does not support the audio element.'+
        '</audio>'
        );
    }

}uglySweaters();



// UNIQUE CLASSES NAMING FOR CATEGORIES
function uniqueClasses(){

//  setTimeout(function(){
        $(".primary-nav__menu-item, .primary-nav__item-node, .primary-nav__nav-menu").hover(function(){

            $('.primary-nav__nav-menu').each(function() {
                // ADDING ID NAVIGATION
                $(this).find('.primary-nav__item-node, span').each(function() {

                    var currentElement = $(this);
                    var value = currentElement.html();
                    var classValue = value.replace(/[^A-Z0-9]/ig, "");
//                  console.log(value);
//                  console.log(classValue);
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
//              console.log(value);
//              console.log(classValue);
                $(currentElement).addClass(classValue);

            });
        });



            $('.primary-nav__nav-menu').each(function() {
                // ADDING ID NAVIGATION
                $(this).find('.primary-nav__item-node, span').each(function() {

                    var currentElement = $(this);
                    var value = currentElement.html();
                    var classValue = value.replace(/[^A-Z0-9]/ig, "");
//                  console.log(value);
//                  console.log(classValue);
                    $(currentElement).addClass(classValue);
                });
            });

//
//  },1000);

};

// END UNIQUE CLASSES NAMING FOR CATEGORIES




function bannersMassive(){
    if((window.location.href.indexOf("cyber") > -1) && (window.location.href.indexOf("categories") > -1)){
        //console.log('banner Category');
        $('.banner-content-block__large-image-container').css('background-image','url("https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMTEvMjIvMTQvMjcvMzMvNzA5LzEyV2VlazFfQkJfQ3liZXIuanBnIl1d/12Week1_BB_Cyber.jpg?sha=a6bdf454a6ec6b1c")');
    }
    else{
        return false;
    }
}//bannersMassive();



// VIDEO PLCC JEWELRY
function pdpVideos(){

    var jewelr_Pull_PI = $('.product-details__id span').text();
    //console.log(jewelr_Pull_PI);
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
    //console.log(listVideoJewelry);
//  if(listVideoJewelry.includes(jewelr_Pull_PI)){

    if(listVideoJewelry.indexOf(jewelr_Pull_PI) !== -1){


    //console.log('Video');
    function createVideo(){
        var placeVideoHere = document.getElementsByClassName('product-details__media')[0];
        //console.log(placeVideoHere);
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
$('.hero-content-block, .banner-content-block, .jm-make-ligthbox, .two-column-square-content-block__container').each(function(index){
    thereIsCTAs = $(this).find('a').text();
    //console.log('ctas????' + $(this).find('a').text());
    //console.log(thereIsCTAs);
    if(thereIsCTAs == '') {
        return true;
    }
    //console.log("before multi multi");
    //console.log(this);
    //MULTIPLE CTA HERO
    var hero_number_CTA = $(this).find('.content-block-content__message').children('p').length;
    var initial_CTA_class = $(this).find('.content-block-content__action a').attr('class');
    // var CTAtext = $(this).find('.content-block-content__message > p > a').html().toLowerCase();
    var CTAtext = $(this).find('.content-block-content__message > p > a').html();
    var CTAtext_URL = $(this).find('.content-block-content__message > p > a').attr('href');
    //console.log('URLs' + CTAtext_URL);
    //console.log(hero_number_CTA);
//  console.log(initial_CTA_class);


    // IF THERE IS MULTIPLE CTA
    if (hero_number_CTA > 1){
            $(this).find('.content-block-content__action').fadeIn(100);
            //console.log("multi multi");
            jm_hero_FirstCTA = $(this).find('.content-block-content__action a').eq(0);
            jm_hero_FirstCTA_url = jm_hero_FirstCTA.attr('href');
            // console.log('this url ' + jm_hero_FirstCTA_url);
            jm_hero_FirstCTA_text = jm_hero_FirstCTA.text().toLowerCase();

            if (jm_hero_FirstCTA_url.indexOf("#jmlb") > -1){
                //console.log('first is hidden');
                jm_hero_FirstCTA.addClass('jm_bottom_lightbox').wrapInner( '<div class="jm_lightBox_CTA"></div>');
                jm_hero_FirstCTA.addClass('JM_trigger_ligthBox');
                //console.log ('coming crispy' + $(this));
                        var new_data_lb = $('.jm_bottom_lightbox:first-of-type', this).clone();
                        new_data_lb.attr("id", "jm_img_anchor_LB");
//                      new_data_lb.removeAttr("class");
                        new_data_lb.appendTo(this);
                $(this).find('.JM_trigger_ligthBox').hide(100);
                //console.log(jm_hero_FirstCTA);
            }


            $(this).find('.content-block-content__message p:not(.content-block-content__action)').each(function(index){
            multi_cta_copy = $(this).html();
                    //console.log(multi_cta_copy);

            if (multi_cta_copy.indexOf("*") > -1){
                var multi_CTA_text = $(this).html().split("*")[0];
                var multi_CTA_url = $(this).html().split("*")[1].replace("<br>", "").replace(" ", "");
                var multi_CTA_wrap = $(this).parent();

                    //console.log(multi_CTA_url);

                    $(multi_CTA_wrap).find('.content-block-content__action').addClass("jm-multipleCTA-space").append(
                        '<a class="' + initial_CTA_class +'" href="' + multi_CTA_url + '">' + multi_CTA_text + '</a>'
                    )
                    //console.log(this);
//                   if (multi_CTA_url.indexOf("#jmlb") > -1){
//                         $('a').click( function() { 
//                             if((window.location.href.indexOf("#jmlb") > -1) && ($(this).text() == 'INFO/EXCLUSIONS')) {
//                                 console.log('clicked'); 
//                                 console.log(this);());

//                                 console.log($(this).text//                                 $(this).addClass('JM_trigger_ligthBox');
//                                 $(this).closest('div.hero-content-block').next().fadeIn(1000).addClass("jm_displayflex");
//                                 $(".jm_dark_lightBox, .rich-text-content-block").fadeIn();
//                                 $(".jm_dark_lightBox").click(function(){
//                                     $('.jm_displayflex').stop().fadeOut(300);

//                                 });
//                                 $(".jm_X_Hero_lightBox").click(function(){
//                                     $('.jm_displayflex').stop().fadeOut(300);

//                                 });                                
//                             }
//                         });
// //                      multi_CTA_url.addClass('JM_trigger_ligthBox');
//                   }

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
//          $('.hero-content-block > a').hide();

    }

    // IF THERE IS ONE CTA WITH WORD LIGHTBOX LB
    else if ((hero_number_CTA = 1) && (CTAtext_URL.indexOf("jmlb") > -1)){
        //console.log('unoLightBox!!');
        $(this).find('.content-block-content__action').fadeIn(600);
        $(this).find('a').addClass('JM_trigger_ligthBox').addClass('jm_show_important');
        //$(this).find('a').addClass('JM_trigger_ligthBox').addClass('jm_show_important').addClass('jm_bottom_lightbox').wrapInner( '<div class="jm_lightBox_CTA"></div>');

        // IF THERE IS ONE CTA WITH WORD LIGHTBOX LB and ALSO HIDE
        if ((hero_number_CTA = 1) && ( CTAtext.indexOf("jmhide") > -1)){
            //console.log('unoHidden&LightBox!!');
            $(this).find('.content-block-content__action').hide();
        }
        else if ((hero_number_CTA = 1) && ( CTAtext_URL.indexOf("#jmdetails") > -1)){
            $(this).find('a').addClass('JM_trigger_ligthBox').addClass('jm_show_important').addClass('jm_bottom_lightbox').wrapInner( '<div class="jm_lightBox_CTA"></div>');
            $(this).find('.content-block-content').addClass('jmrv-desktop');
        }

    }

    // IF THERE IS ONE CTA WITH WORD HIDE
    else if ((hero_number_CTA = 1) && ( CTAtext.indexOf("jmhide") > -1)){
        //console.log('unohidden!!');
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
            //console.log(tieredPriceChildren);
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
        //console.log('quickview');
            function quickViewTieredPrice(){

                if((window.location.href.indexOf("categories") > -1) || (window.location.href.indexOf("hearts") > -1)){
                    var tieredPriceChildren = document.getElementsByClassName("product-details__price-row")[0].childElementCount;;
                    //console.log(tieredPriceChildren);
                    if (tieredPriceChildren == 2){
                        //console.log(tieredPriceChildren);
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
                    //console.log('quickview Hearts');
                    var tieredPriceChildren = document.getElementsByClassName("product-details__price-row")[2].childElementCount;;
                    //console.log(tieredPriceChildren);
                    if (tieredPriceChildren == 2){
                        //console.log(tieredPriceChildren);
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
//  console.log(jewelr_Pull_PI);
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
//  console.log(listVideoJewelry);

    if(listWusthofKnives.indexOf(wusthof_knives) !== -1){
//  if(listWusthofKnives.includes(wusthof_knives)){
        //console.log("machete machete machete");
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
    //console.log("YEA YEA" +this);
        var currentImage = $(this);
        currentImage.wrap('<div class="jm_dark_lightBox" id="jm_dark_lightBox" style="display:none;"></div>');
    });

}Lightbox_heroCTA();

function Lightbox_heroCTA_ClickEvent(){
    $(".JM_trigger_ligthBox").click(function(){
        //console.log('muaaaaaniii!!!');
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
            //console.log("TITLE " + asset_title);
            //console.log("ID: " + anchor_id);

            if($(window).width() < 768) {
                //console.log("MOBILE ANCHOR: " + imageornot + asset_anchor);
                $(this).attr('name', "MOBILE-" + imageornot + asset_anchor);
            }
            else if(($(window).width() > 768) && ($(window).width() < 1100)) {
                //console.log("TABLET ANCHOR: " + imageornot + asset_anchor);
                $(this).attr('name', "TABLET-: " + imageornot + asset_anchor);
            }
            else {
                //console.log("DESKTOP ANCHOR: " + imageornot + asset_anchor);
                $(this).attr('name', "DESKTOP-" + imageornot + asset_anchor);
            };

            //console.log("-----------");
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
//function Curalate_PDP(callback){
function Curalate_PDP(){    

    if (window.location.href.indexOf("products") > -1){

        thisproductID = digitalData.product[0].productInfo.productID;
        //  console.log(thisproductID);
        
        //LOADING SCRIPT
        // jQuery.loadScript = function (url, callback) {
        //     jQuery.ajax({
        //         url: url,
        //         dataType: 'script',
        //         success: callback,
        //         async: true
        //     });
        // }


        //Loading Script
        //$.loadScript('//d116tqlcqfmz3v.cloudfront.net/pizza-40/gallery.js', function(){
        //$.loadScript('//d116tqlcqfmz3v.cloudfront.net/century21-1169/carousel.js', function(){
            //Call after script loaded
            //Curalate.FanReels.Gallery.init({ code: "pizza" });
          //  Curalate.FanReels.Carousel.init({ code: "century21",  productId: thisproductID});
        //});

        //NEW FRAMEWORK
        var CRL8_SITENAME = 'century21stores-nzvwxr'; !function(){var e=window.crl8=window.crl8||{},n=!1,i=[];e.ready=function(e){n?e():i.push(e)},e.pixel=e.pixel||function(){e.pixel.q.push(arguments)},e.pixel.q=e.pixel.q||[];var t=window.document,o=t.createElement("script"),c=e.debug||-1!==t.location.search.indexOf("crl8-debug=true")?"js":"min.js";o.src=t.location.protocol+"//cdn.curalate.com/sites/"+CRL8_SITENAME+"/site/latest/site."+c,o.onload=function(){n=!0,i.forEach(function(e){e()})};var r=t.getElementsByTagName("script")[0];r.parentNode.insertBefore(o,r.nextSibling)}();


        $('.page-content__wrapper').after(
            //'<h2 class="jm-curalate-pdp-title">#C21STYLE</h2>'+
            //'<p class="jm-curalate-pdp-sub-copy">Shop our Instagram and show us your latest loves.</p>'+
            '<div data-crl8-container-id="product" data-crl8-filter="productId:thisproductID"></div>'
        );


        //Inject Element
        $('#jm-curalate-fan-reel-wrapper').wrap( "<div class='jm-curalate-container'></div>" );
        //  window.onload = function () { console.log('este es:' + $('.curalate-thumbs').children().length);}
            $(window).load(function() {
                //console.log('# of Instagram posts link to this product: ' + $('.curalate-thumbs').children().length);
                if($('.curalate-thumbs').children().length >= 1){
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
        var URLs = $( this ).attr('src'),
            parts = URLs.split("/"),
            last_part = parts[parts.length-1];
        //console.log( index + ": " + last_part);
        //URLs = $( this ).attr('src').split("/")[6];
        arrayimgsrc.push(URLs);
    });
    //console.log(arrayimgsrc);


    //var sorted_arr = arrayimgsrc.slice().sort();
    var results = [];
    for (var i = 0; i < arrayimgsrc.length - 1; i++) {
        if (arrayimgsrc[i + 1] == arrayimgsrc[i]) {
            results.push(arrayimgsrc[i] + " posicion " +i);
            actual_position = i +1;
            $('.product-details__alternate-image-group > div .slick-track div:nth-of-type('+ actual_position +')').hide().css('height','0');
        }
    }

    for(i=0;i<=results.length;i++){
       //console.log(results[i]);
    };

};

    $(document.body).on('click', '.color-options__color-button' ,function(){
    // $('.product-details--clothing .color-options__color-button').change(function(){
        setTimeout(function(){
            thumbnails_duplicat_fix();
            //console.log('doing doing');
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

        //console.log('VIP CATEGORY NAME: ' + vip_cat_Name_array);
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


        //console.log('VIP NEW NAME: ' + vip_new_name);

        // URL name update
        //console.log("LAST URL ACTUAL : " + lastVipURL);
        //console.log("FAKE LAST URL ACTUAL : " + new_lastVipURL);
        //console.log("FAKE ACTUAL : " + vipURL);


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
    if($('.banner-content-block').length != 0){

        if (window.location.href.indexOf("categories") > -1){
            var Banner_pankeke = $('.banner-content-block__large-image-container').css('background-image');
            if (Banner_pankeke.indexOf("GWPblank") === -1){
                //console.log(Banner_pankeke.indexOf("GWPblank") >= 0);
                $('.banner-content-block').show(100);
            };
        }
     }
};
// END GWP Banners

// SEO COPY AT FOOTER - NYC BEST SECRET
function seoCopyLineFooter(){

    $('.jm_copy_block_clone').prepend("<h3 class='jm_trademark'>NEW YORK'S BEST KEPT SECRET</h3>");
    $('.jm_copy_block_clone').prepend("<h3 class='jm_trademark'>AFFORD TO LOOK GREAT ANYTIME</h3>");
    $('.jm_copy_block_clone').prepend("<h3 class='jm_trademark'>DEAL OF THE CENTURY</h3>");

}
// END SEO COPY AT FOOTER - NYC BEST SECRET

// PROMO CODE HELP MESSAGE
function promo_Code_custom(){
    $(".cart__main div.cart-prices__label, .table__price").each(function(){
        if ($(this).text().indexOf('{') > -1){
            var s = $(this).text();
            s = s.substring(0, s.indexOf('{'));
            $(this).html(s);
            $(this).parent().css('display','table-cell');
            //console.log($(this).text());
            //console.log(s);
        }
    });
    $(".cart__aside div.cart-prices__label, .table__price").each(function(){
        if ($(this).text().indexOf('{') > -1){
            var s = $(this).text();
            s = s.substring(0, s.indexOf('{'));
            $(this).html(s);
            $(this).parent().css('display','table');
            //console.log($(this).text());
            //console.log(s);
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
                //console.log($(this).html(spl));
            }
    });
}
// END PROMO CODE HELP MESSAGE CYBER MONDAY ONLY


// LIVE CHAT CUSTOM MESSAGE
function live_chat_message(){
    setTimeout(function(){
        $('#livechat-full').prepend("<div class='jm-livechat-message'>Our Call Center will be closed on Thursday, 11/22/18 in observance of Thanksgiving Day.</div>");
    }, 1000);
}
// END LIVE CHAT CUSTOM MESSAGE


// HOVER MESSAGE ADD TO BAG BUTTON


function Hover_message_Button(){

        $('.product-details__add-to-cart-form > section').after(
            '<div class="jm_button_message" style="display:none; font-size: 14px; color: #e21f26; padding: 0 0 5%; text-rendering: optimizeLegibility; -webkit-transition: width 2s; transition: width 2s;">' +
            '<b>SHIPPING NOTICE:</b> This Item Will Ship By <b>2/11</b>' +
            '</div>'
        );


if ($(window).width() >= 1000){
    Hover_message_Button_desktop();
}
else{
    Hover_message_Button_mobile();
}
    function Hover_message_Button_desktop(){

        var check_button =  $('.button--with-arrow').attr("value");
        if(check_button == "add_to_cart"){
            $('.button--with-arrow, .jm_button_message').hover(
               function () {
                  $('.jm_button_message').stop().fadeIn();
               },

               function () {
                  $('.jm_button_message').stop().fadeOut();
               }
            );

        }
    };
    function Hover_message_Button_mobile(){
        //console.log('mobile');
        $(window).scroll(function() {
            var $rightPlace_button = $(".product-details__add-to-cart-action");
            var actual_height = $(window).height();


            window_offset_button = $rightPlace_button.offset().top - $(window).scrollTop();

//          console.log(actual_height);
//          console.log(window_offset_button);

            if((window_offset_button < actual_height)){
              $('.jm_button_message').fadeIn(1000);
            }
            else{
              return false;
            }
        });

    };
};
// END HOVER MESSAGE ADD TO BAG BUTTON


// SHIPPING MESSAGE SHOPPING CART

function shipping_Message(){
    var jmprice = $('.cart-prices__group--subtotal > .cart-prices__value').html().replace("$", "");
    //console.log(jmprice);
    // if($('.checkout-step-summary div:nth-of-type(1) > h2').text() == "Shipping Options"){
        if(jmprice >= 500){
            $('#estimate_shipping_form').after(
             '<p class="jm-shipping-message">Signature required to receive orders<br/> of $500 or more.<\/p>'
            );
        }
    // }
}
// END SHIPPING MESSAGE SHOPPING CART



// CONTACT PAGE MESSAGE
// if (window.location.href.indexOf("contact") > -1){
//      $('.page-messages').clone().appendTo('.page-content--contact').addClass('clonemessage');
//      $('.page-messages').addClass('jm-center-my-content');
//      $('.message__type').css('top','19px');
//      $('.page-messages').stop().wrapInner( $( "<div class='jm-message-wrap'></div>" )).delay(3500).fadeOut();
//      $(".message--success > .message__text").html('Thanks! We’ve received your message <br/> and will respond as soon as possible.');
//      $('div.page-content--contact > .jm-center-my-content').css('display','block !important');

// }
// END CONTACT PAGE MESSAGE

// PLCC 20% RED
// console.log($("h2.branded-card-header__heading[2]"));
// setTimeout(function(){ 
//     $("h2.branded-card-header__heading:contains('SAVE 20%')").html(function(_, html) {
//        return  html.replace(/(SAVE 20%)/g, '<span class="smallcaps">$1</span>')
//     });
// }, 3000);
// END PLCC 20% RED

console.log('All running | Not chocarreros');


var t1 = performance.now();
console.log("Amount it took to run additional scripts: " + (t1 - t0) + " milliseconds.")


var timerStart = Date.now();
$(document).ready(function() {
    console.log("Time until DOMready: ", (Date.now()-timerStart)/1000);
});

$(window).load(function() {
    console.log("Time until everything loaded: ", (Date.now()-timerStart)/1000);
});