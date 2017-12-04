$(document).ready(function(){
    $('.jm-HomePage5 .jm-cloneIt, .jmrv-hp3 .jm-cloneIt').each(function(){
     var new_data = $(this).find('*').filter('.jm-toClone').clone();
//   var new_data= $('a', this).clone();
console.log(new_data);
       	new_data.attr("id", "jm_img_anchor");
       	new_data.removeAttr("class");
    	new_data.appendTo(this);
    });
});





// SPECIAL HEADER 1
//$('.branded-card-header').after(
//	'<section class="jm-special-header-1">'+
	//'<a href="/pages/shipping-information">'+
//	'<h3>SELECT LOCATIONS CLOSED SUNDAY <b><a href="http://locations.c21stores.com/?" target="_blanck"> FIND A STORE</a></b></h3>'
	//'<p>Ground Shipping: Wednesday, December 14 by 8pm</p>'+
	//'<p>3-day Shipping: Wednesday, December 14</p>'+
	//'<p>Overnight Shipping: Sunday, December 18</p>'+
	//'</a></section>'
//);


// VIDEO TO PLAY ON SCROLL

var jmplayer2;

// API CALL
function onYouTubePlayerAPIReady() {
  jmplayer2 = new YT.Player('jm-video-OnScroll', {
    events: {
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {

  var playButton = document.getElementById("jm-toVideo-play");
  var stopButton = document.getElementById("jm-toVideo-stop");



	$(window).scroll(function() {

		var $message2 = $(".video-content-block");


		window_offset2 = $message2.offset().top - $(window).scrollTop();

			console.log(window_offset2);


			if((window_offset2 > -700) && (window_offset2 < 1040)){
				console.log('arrive2!!');
				$(".video-content-block").addClass('flying_from_left2');
		    	jmplayer2.playVideo();
			}
			else{
				jmplayer2.pauseVideo();
			}

	});

//
//     playButton.addEventListener("click", function() {
//     	jmplayer2.playVideo();
//   	});
//     stopButton.addEventListener("click", function() {
//     	jmplayer2.stopVideo();
//   	});

}
