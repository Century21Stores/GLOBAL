/* COPY BLOCK SEO - PUSHED  */
/* ALSO PASSWORD TEXT IN LOGIN PAGE DARKEN  */
/* CSS MASTER STYLE JMRV 05092017 */
@import "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTUvMDkvMTgvMDgvNTYvNTEvNjg4L01hc3RlclN0eWxlM19MYW5kaW5nUGFnZTA3MTUuY3NzIl1d/MasterStyle3_LandingPage0715.css?sha=5a57837dcb4befbf";
@import "https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDEvMTMvMTIvNDQvMTAvODUzL01hc3RlclN0eWxlUmFpbHN2MS5jc3MiXV0/MasterStyleRailsv1.css?sha=f040002bd75aca28";

/* ..................... OVERWRITES .....................*/
/*.branded-card-header{
display:none !important;
}*/

.Clearance, .CLEARANCE{
    color: rgb(234, 44, 59) !important;
}
/* HOVER MESSAGE OVER ADD TO BAG  */
.inline-quickview__content .jm_button_message{
	color: rgb(234, 44, 59) !important;
	font-size: 0.62vw !important;
}
.inline-quickview__container{
    margin: 6% 0 0;
}

/* END HOVER MESSAGE OVER ADD TO BAG  */

/* LOGIN PAGE */

.login-checkout p.login-checkout__forgot-password .text-button{
    color: rgb(0, 0, 0);
    text-rendering: optimizeLegibility;
}
/* END LOGIN PAGE */

/* GRID ADS */
.product-grid__cell--2 .product-grid-content-block{
background-position: 50% 0;
}
/* END GRID ADS */
/* ..................... END OVERWRITES ..................... */

/* PLCC HEADER HIDDEN 
.branded-content-wrapper{
	display: block;
    position: absolute;
    width: 100%;
    z-index: -999;
	
}
.branded-card-header.branded-card-header--active{
    position: absolute;
    z-index: -999;
    bottom:0;
    opacity:0;    
}
*/

/* NEW FONTS */
@font-face{
    font-family: "Jenna-Sue";
    src: url('https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDMvMDMvMDgvNTYvMjEvNzI1L0plbm5hU3VlLnR0ZiJdXQ/JennaSue.ttf?sha=b93911ab19e3b116'),
    url('https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDMvMDMvMDgvNTYvMjEvNzI1L0plbm5hU3VlLnR0ZiJdXQ/JennaSue.ttf?sha=b93911ab19e3b116'); /* IE */
}


/* BIG CONTAINERS */
.jm_lp_women, .jm_lp_shoes, .jm_lp_handbags, .jm_lp_beauty,
.jm_lp_men, .jm_lp_kids, .jm_lp_home, .jm_lp_tech{
	position:relative;
/* 	padding: 0 0 111%;	 */
}
/* END BIG CONTAINERS */


/* LINE THROUGH FOR UNDERLINE */
.content-block-content__message u{
	text-decoration: line-through;
}
/* LIGHT BOXES */
.jm_dark_lightBox{
	display:none;
    position: fixed;
    top: 0;
    z-index: 9999;
    width: 100%;
    background: rgba(0, 0, 0, 0.83);
    left: 0;
    height: 100%;
    display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box-flex;
    align-items: center;
	-webkit-align-items: center;
	-ms-align-items: center;
    justify-content: center;
	-webkit-justify-content: center;
	-ms-justify-content: center;
}
.jm_displayflex{
     display: flex;
     display: -webkit-flex;
     display: -ms-flexbox;
     display: -webkit-box-flex;
}
.jm_dark_lightBox_X{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
/*     background: rgba(0, 128, 0, 0.55); */ /* TESTING AREA */
 	z-index: 2;
	cursor: pointer; 	
}
.jm_lightbox_X{
    z-index: 99;
    position: absolute;
    bottom: 0%;
    width: 100%;
    height: 27%;
    z-index: 1;    
}
#jm_img_anchor_LB{
	display: flex !important;
    display: -webkit-flex !important;
    display: -ms-flexbox !important;
    display: -webkit-box-flex !important;
}
.jm_X_Hero_lightBox{
    position: absolute;
    top: 0%;
    right: 0%;
    padding: 2%;
    cursor: pointer;
}
.jm_bottom_lightbox{
	background: none !important;
	position: absolute !important;
    bottom: -158% !important;
    width: 100% !important;
    height: 95% !important;
    max-width: 100% !important;
    left: 0 !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
	display: flex;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: -webkit-box-flex;
    align-items: center;
	-webkit-align-items: center;
	-ms-align-items: center;
    justify-content: center;
	-webkit-justify-content: center;
	-ms-justify-content: center;
}
.jm_bottom_lightbox:hover{
	background:none !important;
}
.jm_lightBox_CTA{
	border-bottom: solid 2px;
    padding: 0 0 0.5em;
    font-size: 1.14em;
}
#jm_img_anchor_LB{
	bottom: 3% !important;
    height: auto !important;
    text-transform: none;
    font-size: 1em;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
	opacity:1 !important;
}

/* RICH TEXT BOX AS LIGTHBOX */
.rich-text-content-block{
	position:relative;
    padding: 2%;
    z-index: 9;
    width: 50%;
 	background: white;
 	display:none;    
}
.rich-text-content-block h2{
    font-size: 14px;
}
.rich-text-content-block h3{
    font-size: 13px;
}
.rich-text-content-block p{
    font-size: 12.3px;
}

/* MASTERS IMAGES FIX */
.jm-anchor-package{
position: absolute;
    top: 0;
    width: 100%;
    left: 0;
    height: 100%;
}

/* SUCCESS MEESSAGE FIX */
.page-messages{
    opacity:1;   
}
.jm-center-my-content > .jm-message-wrap{
	display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    height: 100%;
    background: none;
    position: absolute;
    top: 0;
    width: 100%;
}
.jm-message-wrap .message--success{
    z-index: 99999;
    text-align: center;    
}
.jm-center-my-content{
    position: absolute;
    width: 100%;
    height: 100%;
}
.clonemessage{
    position: absolute;
    top: 0;
    opacity:1;
}
/* END SUCCESS MEESSAGE FIX */


/* MEGA MENUS FIX */
.primary-nav__nav-content,
.navigation-content-block{
    max-width: 440px;
}
.navigation-content-block__text{
    color: #636467;
    text-rendering: optimizeLegibility;    
}
/* ---------- FIXES ---------- */
.content-block-content__message>h3>u{
   text-decoration: line-through;
}
/* Remove Bullets from All Product Copy Sub-Sections */
.product-details__sub-section li {
  list-style-type: none;
}
/* Suppress Sold Out Swatches from Displaying */
.color-options__color--sold-out {
  display: none;
}
/* Fix Inconsistent Shipping&Returns Copy Styling */
.product-details__shipping_and_returns-body b {
  font-size: 14px;
  color: #000;
  margin: 0 0 1.5em;
}
.page-footer{
    position: relative;
    z-index: 19;
}
i{
   -webkit-font-smoothing: antialiased;    
}

/* TIERED PRICES */

.jm-tieredContainer{
    position: relative;
    width: 50%;
    padding: 2.4em 0;
}
.jm-tieredContainer-row{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
}
.jm-tieredContainer-regular{
	position: absolute;
    top: 31%;
    right: 0;
}
.jm-tieredContainer-sell{
	position: absolute;
    bottom: 0;
    right: 0;
}
.jm-tieredContainer-msrp{
    position: absolute;
    top: 0;
    right: 0.2em;
}
.jm-tieredContainer-percent-saved{
    position: absolute;
    bottom: 0;
    right: 8em;
}
.product-detail-container--package .jm-tieredContainer-percent-saved{
    right: 16em;   
}
.product-detail-container__child-product .jm-tieredContainer-percent-saved{
    right: 8em;   
}


/* END TIERED PRICES */

/* QUICKVIEW CONTAINER FIX */
.inline-quickview__content{
	max-width: 1100px;
}
/* END QUICKVIEW CONTAINER FIX */


/* ---------- END FIXES ---------- */

/* MULTIPLE CTAS */
.content-block-content__message p:not(.content-block-content__action),
.hero-content-block .content-block-content__action{
	display:none;
}
.jm-multipleCTA-space a{
	margin: 0 1% 3%;
}
/* END MULTIPLE CTAS */


/* IMAGE CLICKABLE FIX */
#jm_img_anchor{
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(255, 255, 255, 0);
    width: 100%;
/*     background: rgba(0, 128, 0, 0.09); */
    height: 100%;
    opacity:0;
}
#jm_img_anchor2{
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(255, 255, 255, 0);
    width: 100%;
/*     background: rgba(0, 128, 0, 0.09); */
    height: 50%;
    opacity:0;    
}
.content-block-content__action--button .button{
    position: relative;
    z-index: 3;
}
.button:focus, .drawer .result-filters__toggle--link:focus, .button:hover, .drawer .result-filters__toggle--link:hover{
    border-color: black !important
}

/* ADS BANNERS */
.product-grid__cell--1 .product-grid-content-block{
    background-position: 50% 50%;
}
.product-grid-content-block{
    background-position: 0 0;
}
.product-grid-content-block p.content-block-content__action{
    margin:0 0 13%;
    width:100%;
}
.jmrv-product-grid__cell--2 .product-grid-content-block p.content-block-content__action{
    margin:0%;
}   
.content-block-content__message h3.wysiwyg-font-size-large{
    font-size: 0.56em;
    line-height: 1.3;
}
.product-grid__cell--1 .button,
.product-grid__cell--2 .button{
	z-index:1;
}

/* RELATED PRODUCTS WIDGET JMRV - Pushed 070516*/
.br-rp-qv-show{
    width: 100%;
    bottom: 30%;
    position: fixed;
    left: 0;
    z-index:99;
}
.br-sf-widget-merchant-popup-maincont{
    width: 100%;
    padding: 0%;
    margin: 0 auto;
    background: white;
    position: relative;
}
.br-sf-widget-merchant-popup-close{
    position: absolute;
    top: 2%;
    right: 1%;
}
.br-sf-widget-merchant-popup-close a{
    content: url(https://c21stores-weblinc.netdna-ssl.com/media/W1siZiIsIjIwMTYvMDUvMDUvMTAvMjAvMDQvNjc0L1NjcmVlbl9TaG90XzIwMTZfMDVfMDVfYXRfMTAuMjAuNDJfQU0ucG5nIl1d/Screen%20Shot%202016-05-05%20at%2010.20.42%20AM.png?sha=cb9d9cdc4ec33360);
}
.br-sf-widget-merchant-popup-img{
    width: 44%;
    display: inline-block;
    float: left;
    margin: 3%;
}
.br-sf-widget-copy{
    width: 42%;
    display: inline-block;
    text-align: center;
    margin: 17% 8% 17% 0%;
}
.br-sf-widget-merchant-popup-details{
    overflow:auto;
}
.br-sf-widget-merchant-popup-brandname,
.br-sf-widget-merchant-popup-title,
.br-sf-widget-merchant-popup-desc,
.br-sf-widget-merchant-popup-view{
    width: 100%;
}
.br-sf-widget-merchant-popup-view a{
    display: inline-block;
    margin: 0;
    padding: 15px 0;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    line-height: 1;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    white-space: nowrap;
    background: #c6c8ca;
    border: 1px solid transparent;
    cursor: pointer;
    -webkit-transition: all 0.25s ease-out;
    transition: all 0.25s ease-out;
    width: 100%;
    box-sizing: border-box;    
}
.br-sf-widget-merchant-popup-view a:hover{
    background:black;
    
}
.br-sf-widget-merchant-popup__sub-section-heading{
    display: block;
    margin: 0;
    padding: 10px;
    font-size: 16px;
    font-style: italic;
    font-family: BauerBodoniBT, Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
    text-transform: capitalize;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;    
}
.br-sf-widget-merchant-popup-desc{
    font-size: 12px;
    width: 100%;
    margin: 0 6% 3% 1%;
    color: #949494;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
}
.br-sf-widget-merchant-popup-title{
    display: block;
    margin-bottom: 1.5em;
    color: #000000;
    font-size: 21px;
    font-family: BauerBodoniBT, Didot, "Didot LT STD", "Hoefler Text", Garamond, "Times New Roman", serif;
    font-style: italic;
    font-weight: normal;
    letter-spacing: 1px;    
}
.br-sf-widget-merchant-popup-title a{
    color: black;
}
.br-sf-widget-merchant-popup-title a:hover{
    text-decoration: none;  
}
.br-sf-widget-merchant-popup-brandname a{
    text-transform: uppercase;
    color: black;
    font-weight: bold;
    font-size: 1.6em;
    letter-spacing: 0.13em;
}
.br-sf-widget-merchant-popup-brandname a:hover{
    text-decoration:none;
}
/* END RELATED PRODUCTS WIDGET */


/* NOT PART OF  FIX */

/* RELEASE BAR */
.admin-toolbar__preview-bar{
    display: block !important;
    position: fixed;
    bottom: 0;
    width: 99%;
    padding: 0.5% 0;
    color: white;
    letter-spacing: 0.2em;
    font-size: 1.2em;
    color: red;
    background: #FFFFB4;
}
.admin-toolbar__preview-bar button{
    cursor: pointer;
    position: relative;
    width: 100%;
    height: 100%;
}
/* END RELEASE BAR */


.jm-guide .button--alt{
    background: #6E6ED4;
    color: white;
    border-color: #6E6ED4;
}
.jm-guide .button--alt:hover{
    background: black;
    border-color: black;
}

.jm-download-button{
    background: #6E6ED4;
    color: white;
    border-color: #6E6ED4;
}
.jm-download-button:hover{
    background: black;
    border-color: black;
}
.jm-green{
    color: #0A9E0A;
}
.jm-red{
    color: red;
}
.jm-orange{
    color: #FF7E1D;
}
/* END NOT PART OF FIX */


/* GENERAL OVERWRITE */

/* ELIMINATING REPEAT BACKGROUND IMAGES */			
.two-column-square-content-block__image{			
	background-repeat: no-repeat;			
}


.jm-mobile section{
  	margin-bottom: 9%;
  	position: relative;
}


/* ELIMINATE SPACES ON MOBILE */
br{
    display:none;
}

.grid__cell,
.grid--2-at-medium>.grid__cell,
.grid--2-at-medium>.grid__cell+.grid__cell{
    margin-bottom: 3%;
}
.page-content__main *{
    background-repeat: no-repeat;
}
.page-content{
    padding: 0;
}

/* SHOP BY CATEGORY */
.jm-byCategory-wrap{
    background: #f6f5f5;
    padding: 3% 0 1%;
}
.jm_lp .five-column-square-content-block{
    background: #f6f5f5;
}

/* ------------------------------  CONTENT BLOCKS CONTAINERS  ------------------------------ */

/*MEGAMENUS*/
.navigation-content-block--2-small-tall .navigation-content-block__item--tall-image{
    margin-right:1%;
}
.navigation-content-block--tall-2-small .navigation-content-block__item--tall-image{
    margin-right:2.3%;
}
.navigation-content-block__item--tall-image{
    max-width: 210px;    
}


/* ALL CONTENT BLOCK MOBILE*/
.content-block-content__container--center,
.content-block-content--top,
.content-block-content--bottom{
    bottom: 0;
}

/* CONTENT BLOCK SPACING MOBILE*/
.hero-content-block,
.two-column-hero-content-block{
    margin-bottom: 3%;
}
.page-content__main .hero-content-block,
.page-content__main .two-column-hero-content-block{
    margin-bottom: 4%;
}

/* ALL COPY DOWN MOBILE*/
.content-block-content__container{
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
}

/* HALF HERO MOBILE */
.two-column-hero-content-block__text .content-block-content__container{
    position: relative;
}
.two-column-hero-content-block{
    background-size:cover;
    background-position: 0; 
}

/* TWO BLOCK SQUARE MOBILE */
.two-column-square-content-block__text{
    padding: 0;
}

/* THREE BLOCK SQUARE MOBILE */
.three-column-square-content-block__dots{
    margin: -5% 0 0;
}

.three-column-square-content-block__text{
    min-height: auto;
    padding: 0; 
}


/* THREE BLOCK SQUARE CTA*/
.three-column-square-content-block .content-block-content__action,
.three-column-square-content-block__container .content-block-content__action{
    margin-top: 4.5%;
}

/* CTA */
.button--wide{
    -webkit-transition: all 0.25s ease-out !important;
    transition: all 0.25s ease-out !important;
}

/* --------------- FONTS MOBILE --------------- */

/* ALIGN */
.content-block-content__container--left,
.content-block-content__container--right,
.two-column-square-content-block__text--left,
.two-column-square-content-block__text--right,
.three-column-square-content-block__text--left,
.three-column-square-content-block__text--right{
    text-align:center;
}
/* SPACING */
.content-block-content__message {
    padding: 5% 0% 3%;
}

/* HEADERS GOTHAM MOBILE */
.content-block-content__message h2.wysiwyg-font-size-large,
.content-block-content__message h2.wysiwyg-font-size-x-large,
.content-block-content__message h2.wysiwyg-font-size-xx-large,
.content-block-content__message h3.wysiwyg-font-size-xx-large{
    letter-spacing: 0em;
/*  font-size: 1.4em; */
    font-size: 7vw;
    margin:0;       
}
/* HEADERS BODONI MOBILE */
.content-block-content__message h2.wysiwyg-font-size-large.wysiwyg-font-family-serif,
.content-block-content__message h2.wysiwyg-font-size-x-large.wysiwyg-font-family-serif,
.content-block-content__message h2.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif,
.content-block-content__message h3.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif{
    letter-spacing: 0.03em;
/*  font-size: 1.5em; */
    font-size: 9.3vw;       
}

/* HEADERS MOBILE */
.content-block-content__message h2{
    margin: 0 0 2.3vw;
}
.content-block-content__message h2.wysiwyg-font-family-serif{
    margin: 0 0 0.6vw;
}
.content-block-content__message h3.wysiwyg-font-family-serif{
    margin: 0 0 0.6vw;
}
.content-block-content__message h2:last-of-type {
    margin-bottom: 0.33rem !important;    
}

/* SUB HEADERS MOBILE */
.content-block-content__message h3.wysiwyg-font-size-large{
    font-size: 3vw;
}


/* CTA */
.content-block-content__action,
.hero-content-block .content-block-content__action,
.two-column-hero-content-block .content-block-content__action,
.two-column-square-content-block .content-block-content__action{
    margin: 4.5% 0 0;
}

.content-block-content__action .button {
    font-size: 0.86em;
    padding: 1em 0.2em;
    width: 100%;
    max-width: 143px;
    border: solid 1px;
}

/*SOLID WHITE CTA*/
.jm-cta-solidWhite a{
    background: white;
    color: black;
    border-color: white !important;
}
.jm-cta-solidWhite a:hover{
    background: black;
    color: white;
    border-color: black !important;
}


/* BODONI LINE HEIGHT*/
.content-block-content__message h2.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif,
.content-block-content__message h2.wysiwyg-font-size-x-large.wysiwyg-font-family-serif,
.content-block-content__message h2.wysiwyg-font-size-large.wysiwyg-font-family-serif{
    line-height: 0.86;
}


/* SPECIAL SPLITTED HEADER */
.jm-special-splitHeader div {
    width: 100%;
    text-align: center;
    background: #f6f5f5;
    padding: 1.3% 0;
    -ms-flex-align: center;
    justify-content: center;
    align-items: center;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
}
.jm-special-splitHeader {
    display: -ms-flexbox;
    width: 100%;
    font-size: 2.3vw;
}
.jm-special-splitHeader br{
	display:block;
}
.jm-special-splitHeader div.jm_left{
    background: #f6f5f5;
    display: block;
}


/* SPECIAL HEADER 1 */
.jm-special-header-1 h3{
    margin: 0;
    font-weight: normal;
    letter-spacing: 0.05em;
    color: #403f3f;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    font-size: 3.1vw;
    width: 82%;
    margin: 0 auto;
}
.jm-special-header-1 a{
    display: block;
    width: 100%;
    height: 100%;
    z-index: 9999;
}
.jm-special-header-1 {
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2.4vw;
    padding: 2% 0;
    background: #f6f5f5;
    text-align: center;
}

/* COPY BLOCKS */	
.jm-copy-block{			
	position: absolute;			
	bottom: 0;			
	margin: 0 8% 11%;			
	font-size: 1.77vw;			
	border-bottom: solid 1px #eaeaea;			
	padding: 0 0 7%;			
}
.view .jm-copy-block{
	display:none;
}
.jm_copy_block_clone{
	position:relative;
}                        					
/* END COPY BLOCKS */	


@media screen and (min-width: 470px){
/* MULTIPLE CTAS */
.jm-multipleCTA-space a{
    margin: 0% 6% 2%;
}
/* END MULTIPLE CTAS */
}

@media screen and (min-width: 670px){
/* MULTIPLE CTAS */
.jm-multipleCTA-space a{
margin: 0 1%;
}
.jm-multipleCTA-space a:first-of-type{
	margin-left: 0;
}
.jm-multipleCTA-space a:last-of-type{
	margin-right: 0;
}
.jm-multipleCTA-space4 a{
    margin: 0% 6%;
}

div.hero-content-block .content-block-content__container--center .jm-multipleCTA-space5 a{
    margin: 0% 4% 2%;
}
.jm-multipleCTA-space5 a:nth-of-type(4),
.jm-multipleCTA-space5 a:nth-of-type(5) {
    margin-bottom: 0%;
}
/* END MULTIPLE CTAS */
}

@media screen and (min-width: 700px){
/* GENERAL OVERWRITE */


/* BRING BACK SPACES TAKEN OUT ON MOBILE */
br{
    display:block;
	display: -moz-box;
}

.page-content{
    padding: 10px 2%;
}

/* SHOP BY CATEGORY */
.jm-byCategory-wrap{
    background: none;
    padding: 0;
}

/* SPECIAL SPLITTED HEADER */
.jm-special-splitHeader{
	display: table;
    width: 100%;
	font-size: 1.1vw;    
}
.jm-special-splitHeader div{
	width: 50%;
    display: table-cell;
    vertical-align: middle;  
}
.jm-special-splitHeader div.jm_left{
    display: table-cell;
}

/* ALL COPY BACK TO INITIAL*/
.content-block-content__container{
    position:relative;
    background:none;
    left: initial;
    bottom: initial;            
}

/* ALL CONTENT BLOCK SPACING */
.page-content__main .hero-content-block,
.page-content__main .two-column-hero-content-block{
    margin-bottom: 1%;
}


/* --------------- FONTS --------------- */

/* ALIGN */
.content-block-content__container--left,
.two-column-square-content-block__text--left,
.three-column-square-content-block__text--left{
    text-align:left;
    white-space: nowrap; /* Watch this */
}
.content-block-content__container--right,
.two-column-square-content-block__text--right,
.three-column-square-content-block__text--right{
    text-align:right;
    white-space: nowrap; /* Watch this */   
}

/* SPACING */
.content-block-content__message {
    padding: 5% 0% 2%;
}

/* SPACE BETWEEN CONTENT BLOCKS */
.hero-content-block,
.two-column-hero-content-block{
    margin-bottom :1%;
}

/* TWO BLOCK SQUARE */
.two-column-square-content-block__text{
    padding: 0 1.4rem;
}

/* THREE BLOCK SQUARE */
.three-column-square-content-block__text{
    padding: 0 1.4rem;
}

/* MESSAGE CONTAINER */
.content-block-content__message{
    padding:0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;    
/* 
    display: table-cell; ENABLES Aligment based on copy not container
    width: auto;
 */
}

.content-block-content--right .content-block-content__message{
/*  float: right; */
}

/* TOP RIGHT BOTTOM LEFT ALIGMENT CONTAINERS */
/* SAFETY AREA, 50% OF THE CONTENT BLOCK WIDTH, IS NOT CHANGE  */
.content-block-content--top{
    padding-top: 5%;
}
.hero-content-block .content-block-content--right,
.content-block-content--right{
    padding-right: 5%;
}

.content-block-content--bottom{
    padding-bottom: 5%;
}
.content-block-content--left{
    padding-left: 5%;    
}
.content-block-content--center{
/*  width: 45%; */
    width: 100%;    
    margin: 0 auto;
}



/* COPY - FONT */

.content-block-content__message p, .content-block-content__message ul, .content-block-content__message ol{
    font-size: 12px;
    margin: 0 0 0.2em;  
}
.content-block-content__message h2:last-of-type {
    margin-bottom: 1.2rem !important;    
}

.content-block-content__message h2.wysiwyg-font-size-xx-large,
.content-block-content__message h2.wysiwyg-font-size-x-large,
.content-block-content__message h2.wysiwyg-font-size-large,
.content-block-content__message h2{
    line-height: 0.78;
    /* line-height: 0.9; */
    letter-spacing: 0.01em;
    margin: 0 -0.1em 0.1em -0.1em; /* line space between headers and left aligment*/
/*     font-size: 1.45em; */
}

.content-block-content__message h2.wysiwyg-font-size-xx-large i, 
.content-block-content__message h2.wysiwyg-font-size-x-large i,
.content-block-content__message h2.wysiwyg-font-size-large i{
    margin-right: 0.15em;
}

/* BODONI */
.content-block-content__message h2.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif,
.content-block-content__message h2.wysiwyg-font-size-x-large.wysiwyg-font-family-serif,
.content-block-content__message h2.wysiwyg-font-size-large.wysiwyg-font-family-serif{
    line-height: 0.7;
    letter-spacing: 0.05em;
/*     margin: 0 -0.1em 0 0; */ /* line space between headers and left aligment*/
    margin: 0.14em -0.1em 0 -0.07em; /* line space between headers and left aligment*/   
/*     font-size: 1.45em; */
}
.content-block-content__message h2.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif i,
.content-block-content__message h2.wysiwyg-font-size-x-large.wysiwyg-font-family-serif i,
.content-block-content__message h2.wysiwyg-font-size-large.wysiwyg-font-family-serif i{
    margin-right: 0em;
}

.content-block-content__message h3.wysiwyg-font-size-xx-large,
.content-block-content__message h3.wysiwyg-font-size-x-large,
.content-block-content__message h3.wysiwyg-font-size-large,
.content-block-content__message h3{
    line-height: 1.23;
    margin: 0 -0.1rem 0.23rem -0.067rem;
    letter-spacing: 0.05em;
/*     font-size: 0.305em; */
/* font-weight: normal; */  /* THIS MAKES SUBCOPY DARKER/ HEAVIER */
}

/* BODONI */
.content-block-content__message h3.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif,
.content-block-content__message h3.wysiwyg-font-size-x-large.wysiwyg-font-family-serif,
.content-block-content__message h3.wysiwyg-font-size-large.wysiwyg-font-family-serif,
.content-block-content__message h3.wysiwyg-font-family-serif{
    line-height: 1.23;
    margin: 0 0 0.23rem -0.03em;
    letter-spacing: 0.05em;
/*     font-size: 0.305em; */

}


/* TWO BLOCK HERO */
.two-column-hero-content-block__text{
/*  max-width: 50%; */
    max-width: 50.5%;   
}
.two-column-hero-content-block .content-block-content{
    margin:5%;
}
.two-column-hero-content-block__text .content-block-content--top,
.two-column-hero-content-block__text .content-block-content--bottom,
.two-column-hero-content-block__text .content-block-content--left,
.two-column-hero-content-block__text .content-block-content--right{
    padding:0;
}
.two-column-hero-content-block .content-block-content__action{
    margin-top: 5%;
}
.two-column-hero-content-block__image-container,
.two-column-hero-content-block__image-container--right{
    width: 49.5%;
}
.page-content .two-column-hero-content-block__text{
    /* width: 49.5%; */
    width: 50.5%;    
}
.page-content .two-column-hero-content-block__image-container--left{
    margin-right:0.5%;
}
.page-content .two-column-hero-content-block__text{
/*  left: 50.5%; */
    left: 49.5%;
}
.two-column-hero-content-block__image-container--right+.two-column-hero-content-block__text{
    right: 49.5%;
    left: auto;
    width: 100%;
    z-index: 2;
}
.page-content .two-column-hero-content-block__image-container--right+.two-column-hero-content-block__text{
    left: initial;
    right: 49.5%;
}

/* TWO BLOCK SQUARE */
.three-column-square-content-block__text{
    min-height: 33.33333%;
}
.two-column-square-content-block .content-block-content__action{
    margin-top: 1.6em;
}
.two-column-square-content-block .content-block-content__message{
    padding: 0;
}
.page-content .two-column-square-content-block .content-block-content__message{
    padding: 0.3em 0 0.43em;
}
/* ONE PLUS ONE */
.large-square-plus-one-content-block .content-block-content{
    padding: 5%;
}
.large-square-plus-one-content-block .content-block-content--center{
    width: 90%;
}
/* 
.large-square-plus-one-content-block .content-block-content__action{
    margin-top: 1.2rem !important;
}
 */
.large-square-plus-one-content-block .content-block-content__action{
    margin-top: 2em;
}

/* ONE PLUS TWO */
.large-square-plus-two-content-block .content-block-content{
    padding: 5%;
}
.large-square-plus-two-content-block .content-block-content--center{
    width: 90%;
}
.large-square-plus-two-content-block .content-block-content__message{
    padding:0;
}
.large-square-plus-two-content-block .content-block-content__action{
    margin-top: 2em !important;
}
.page-content .large-square-plus-two-content-block__container--small-image .content-block-content__action{
    margin-top: 0.66rem !important;
}
.page-content .large-square-plus-two-content-block .content-block-content__message{
    padding: 3% 0% 4%;
}

/* THREE BLOCK SQUARE */
.three-column-square-content-block__text{
    min-height: 23%;
}
.page-content .three-column-square-content-block__text{
/*     padding: 1em 0 0; */
    min-height: 29%;    
}
.page-content .content-block-content__message{
/*     padding: 1% 0% 4%; */
}
.page-content .large-square-plus-one-content-block__image .content-block-content__message,
.page-content .large-square-plus-two-content-block__container .content-block-content__message{
    padding: 0%;
}
/* LARGE SQUARE PLUS 2 */
.large-square-plus-two-content-block__container--large-image .content-block-content__message{
    padding:0;
}

/* FIVE BLOCK SQUARE */
.five-column-square-content-block .content-block-content__action{
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
}

/* H1 - SH1 */

/* GOTHAM */
.content-block-content__message h2.wysiwyg-font-size-xx-large{
    font-size: 1.4em;
}
.content-block-content__message h3.wysiwyg-font-size-xx-large{
    font-size: 0.75em;
}
/* BODONI */
.content-block-content__message h2.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif{
/*     font-size: 1.45em; */
    font-size: 1.6em;    
}
.content-block-content__message h3.wysiwyg-font-size-xx-large.wysiwyg-font-family-serif{
    font-size: 1em;
}

/* H2 - SH2 */

/* GOTHAM */
.content-block-content__message h2.wysiwyg-font-size-x-large{
    font-size: 1.15em;
}
.content-block-content__message h3.wysiwyg-font-size-x-large{
    font-size: 0.55em;
}
/* BODONI */
.content-block-content__message h2.wysiwyg-font-size-x-large.wysiwyg-font-family-serif{
    font-size: 1.33em;
}
.content-block-content__message h3.wysiwyg-font-size-x-large.wysiwyg-font-family-serif{
    font-size: 0.75em;
}

/* H3 - SH3 */

/* GOTHAM */
.content-block-content__message h2.wysiwyg-font-size-large{
    font-size: 0.9em;
}
.content-block-content__message h3.wysiwyg-font-size-large{
/*     font-size: 0.375em; */
    font-size: 0.4em;
    margin-bottom: 0;    
}
/* BODONI */
.content-block-content__message h2.wysiwyg-font-size-large.wysiwyg-font-family-serif{
    font-size: 1.04em;
}
.content-block-content__message h3.wysiwyg-font-size-large.wysiwyg-font-family-serif{
    font-size: 0.5em;
    margin-bottom: 0;  
}

/* 
.content-block-content__action .button{
    font-size: 1em;
}
 */

.content-block-content__action--text a:hover{
    border-color: #C1C1C1;
}
.button--alt-inverse:focus, .button--alt-inverse:hover{
    border-color: white !important;
}
.two-column-square-content-block__text{
    min-height: 20%;
}
/* 
.content-block-content__message {
    font-size: 4vw;
}
 */

#jmaId{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
color:rgba(255, 255, 255, 0);
}


/* 
W03
.hero-content-block .content-block-content--right{
    left: 0%;    
}
*/

/* LARGE PLUS ONE */
.large-square-plus-one-content-block__image{
	background-size:100%;
    background-repeat: no-repeat;	
}

/* FIX */
/* 
W03 
.hero-content-block .content-block-content--left{
	right: 0;
}

*/

/* FIX 1440 vs 1170 */
div.hero-content-block .content-block-content--right {
    left: 50%;
}
div.hero-content-block .content-block-content--left {
    right: 50%;
}
.jm_lp_1170 > div.hero-content-block .content-block-content--right{
    left: 0%;    
}
.jm_lp_1170 > div.hero-content-block .content-block-content--left{
	right: 0;
}



/* MULTIPLE CTAS */
.jm-multipleCTA-space4 a{
    margin: 0% 1% 0%;
}
.jm-multipleCTA-space2 a{
    margin: 0% 1.5% 0%;    
}
.hero-content-block .content-block-content__container--center .jm-multipleCTA-space a{
    margin: 0% 1% 0%;
}
/* END MULTIPLE CTAS */


/* TIERED PRICES QUICKLOOK */
.jm-tieredAttributes-QV{
	padding: 38px 0 0;
    position: relative;
}
.jm-tieredContainer-QV{
    margin: 0;
}
.jm-tieredContainer-QV div.jm-tieredContainer-row-QV:first-of-type{
	position: absolute;
    top: 27%;
    right: -1%;
}
.jm-tieredContainer-regular-QV,
.jm-tieredContainer-sell-QV{
	display:block;
}
.jm-tieredContainer-regular-QV s{
    font-size: 15.5px;
    letter-spacing: 0.2em;
}
.jm-tieredContainer-sell-QV strong{
	letter-spacing: 0.2em;
}
.jm-tieredContainer-msrp-QV{
	display: block;
    position: absolute;
    top: 0;
    right: 0;
}
.jm-tieredContainer-percent-saved-QV{
    display: block;
    position: absolute;
    right: -4%;
    width: 47%;
    text-align: left;
    margin: 0;
    bottom: 5%;
}
.jm-tieredContainer-regular{
    font-size: 1.11em;
}
.jm-product-details__badge-container-QV{
    position: absolute;
    left: 0;
    top: 0;
}
/* END TIERED PRICES QUICKLOOK */

/* SPECIAL HEADER 1 */
.jm-special-header-1 {
font-size: 1em;
    padding: 0.63% 0;
}
.jm-special-header-1 h3{
font-size: 1em;
    width: 100%;
}


/* COPY BLOCK */
.jm-copy-block{
/*     margin: 12% 4%; */
    font-size: 0.8em;
    border-bottom: none;
    padding: 0;    
}
.jm_copy_block_clone{
	margin: 3% 11%;
}
/* END COPY BLOCK */



}

@media screen and (min-width: 768px){
/* 
.content-block-content__action .button{
    font-size: 0.95em;
    padding: 1em 1.8em;
    width: 100%;
    max-width: 156px; 
    border: solid 2px;      
}
 */
/* POP UP FIX 
.ui-dialog{
    position: absolute;
    z-index: 40;
    padding: 20px 0;
    outline: 0;
    top: 23% !important;
    width: 22% !important;
    left: 40% !important;
}
*/


/* SIZE GUIDE FIX */
.ui-dialog--size-guide{
    width: auto !important;	
}


}



@media screen and (min-width: 768px) and (max-width: 1024px){ 
.large-square-plus-two-content-block__container--small-image .content-block-content__message h2{
	margin-bottom: 0.3rem !important;
}

}



@media screen and (min-width: 1050px){
/* Relative products */
.br-rp-qv-show{
    width: 100%;
    bottom: initial;
    position: absolute;
    left: 0;
    z-index:2;
}
.br-sf-widget-merchant-popup-maincont{
    width: 95%;
    padding:0;    
}
/* End Relative products */

/* MASTER DETAIL PRODUCTS */
.jm-breath-children{
    padding: 5% 0;
}
.jm-breath-children .product-details__item-details{
	border-color:#fdfdfd
}

/* SPECIAL SPLITTED HEADER */
.jm-special-splitHeader{
	font-size: 1em;    
}
/* MULTIPLE CTAs */
div.hero-content-block .content-block-content__container--center .jm-multipleCTA-space5 a{
    margin: 0% 1% 0%;
}

}

@media screen and (min-width: 1200px){
/* 
.content-block-content__message {
    font-size: 3.2vw;
}
 */
.br-sf-widget-merchant-popup-maincont{
    width: 78%;
}


/* COPY BLOCK
.jm-copy-block{
	margin: 0 3%;
}
 END COPY BLOCK */


}

@media screen and (min-width: 1280px){
.content-block-content__message {
    font-size: 3.2vw;
}
.content-block-content__action .button{
    font-size: 0.95em;
    padding: 1em 1.8em;
    width: 100%;
    max-width: 156px; 
    border: solid 2px;      
}
/* Relative products */
.br-sf-widget-merchant-popup-maincont{
    width: 60%;
    margin-top: 4.5em;
}
/* End Relative products */

}

@media screen and (min-width: 1500px){
.content-block-content__message p, .content-block-content__message ul, .content-block-content__message ol{
    font-size: 0.292em;
}
.content-block-content__message p{
    font-size: 0.3em;
    font-weight: lighter;
    letter-spacing: 0.033em;
}
.five-column-square-content-block .content-block-content__message p{
    font-weight: bold;
}
.content-block-content__message {
    font-size: 48px;
}

}
/* MOBILE OVERWRITES ONLY */
@media screen and (max-width: 700px){
.content-block-content__message--light{
    color: black;
}
.button--alt-inverse{
    color: black;
    background: transparent;
    border: 1px solid black;
}
.large-square-plus-two-content-block__container--small-image,
.large-square-plus-one-content-block__container--small-image{
	display:none;
}
.large-square-plus-one-content-block__container--large-image,
.large-square-plus-two-content-block__container--large-image{
    padding-bottom: 35%;
}
.three-column-square-content-block {
    margin: 0 0 7%;
}
.two-column-square-content-block__image{
	background-size: 100%;
}
.two-column-square-content-block{
	padding:1.3% 0;
}
/* SPECIAL SPLITTED HEADER */
.jm-special-splitHeader div.jm_right{
    position: absolute;
    width: 75.4%;
    right: 0;
    top: 1.6%;
    z-index: -1;
}
/* TIGHING UP FONT SIZES */
h3.wysiwyg-font-size-x-large{
    font-size: 4vw !important;
}
.content-block-content__message h3.wysiwyg-font-size-large.wysiwyg-font-family-serif {
    font-size: 4vw;
}

/* XTRA SPACE ON RIGHT FIX */
.complimentary{
margin:0;
}
.product-list__quantity{
    margin: 0 0 6%;
    float: none;
}
/* TIERED PRICES  */
.jm-tieredContainer-sell,
.jm-tieredContainer-percent-saved{
	bottom: 7%;
}
.jm-tieredContainer-regular{
	font-size: 12px;
}
.product-details--package-child .product-details__price{
	font-size: 12px;
}
.product-detail-container__child-product .jm-tieredContainer-percent-saved{
	right: 6em;
    font-size: 11px;
}
.jm-tieredContainer{
    margin: 0 3% 0 0;
}


/* LIGHTBOX HERO - RICH TEXT */
.rich-text-content-block h2{
    font-size: 13px;
}
.rich-text-content-block h2{
    font-size: 12px;
}
.rich-text-content-block p{
    font-size: 11px;
    display: block;
    text-align: justify;
}
.rich-text-content-block {
    position: relative;
    padding: 7%;
    width: 78%;
}
#jm_img_anchor_LB{
    bottom: 33% !important;
    font-size: 2.3vw;
}
#jm_img_anchor{
	height:100% !important;
}

/* OVERWRITES */

/* HOVER MESSAGE OVER ADD TO BAG  */
.jm_button_message{
	width: 64%;
	margin:0 auto;
}
/* END HOVER MESSAGE OVER ADD TO BAG  */

/* END OVERWRITES */

}
