// HOVER MESSAGE ADD TO BAG BUTTON


function Hover_message_Button(){    

		$('.product-details__add-to-cart-form > section').after(
			'<div class="jm_button_message" style="display:none; font-size: 14px; color: #e21f26; padding: 0 0 5%; text-rendering: optimizeLegibility; -webkit-transition: width 2s; transition: width 2s;">' + 
			'<b>SHIPPING NOTICE:</b> Orders Placed 1/21-1/29 Will Ship Starting <b>1/30</b>' +
			'</div>'			
		);	
		
		
	if ($(window).width() >= 700){ 
		Hover_message_Button_desktop();
	}
	else{
		Hover_message_Button_mobile();
	}
		function Hover_message_Button_desktop(){
			console.log('desktop');

			var check_button =  $('.button--with-arrow').attr("value");
			if(check_button == "add_to_cart"){
			   console.log("winner!");
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
			console.log('mobile');
			$(window).scroll(function() {
				var $rightPlace_button = $(".product-details__add-to-cart-action");
				var actual_height = $(window).height();
	

				window_offset_button = $rightPlace_button.offset().top - $(window).scrollTop();
	
				console.log(actual_height);    
				console.log(window_offset_button);    
	
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
