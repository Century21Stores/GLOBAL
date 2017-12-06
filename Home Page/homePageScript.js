// W45D Home Page Banner

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
$('.branded-card-header').after(
	'<section class="jm-home-page-header">'+
	'<p class="jm-mobile-HPheader-l1">Gift shopping?</p>'+
	'<h3>Get it there in time for the holidays!<span class="jm-asterisk">*</span></h3>'+
	'<p class="content-block-content__action content-block-content__action--dark-text"><a class="text jm-mobile-HPheader-cta" href="https://www.c21stores.com/pages/shipping-information">LEARN MORE</a></p>'+
	'</section>'
);


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
