$(document).ready(function(){

	setTimeout(function(){
        $('body').addClass('loaded');
        setTimeout(animatedText, 300);
    }, 300);

	// Animation .my-name Text with SplitText

	var $quote = $(".my-name"),
	    mySplitText = new SplitText($quote, {type:"words"}),
	    splitTextTimeline = new TimelineLite();

	TweenLite.set($quote, {perspective:400});

	//kill any animations and set text back to its pre-split state
	function kill(){
	  splitTextTimeline.clear().time(0);
	  mySplitText.revert();
	}

	function animatedText(){
	  kill();
	  mySplitText.split({type:"chars, words"}); 
	  splitTextTimeline.staggerFrom(mySplitText.chars, 0.6, {scale:4, autoAlpha:0,  rotationX:-180,  transformOrigin:"100% 50%", ease:Back.easeOut}, 0.05);
	}

	// HIDE EMAIL **************
	var eMail = 'gmail.com';
	eMail = ('genek.klim@'+eMail);
	$('.envelope').attr('href', 'mailto:' + eMail + '?subject=JOB OFFER');
	// HIDE EMAIL END**************

	function parallax(){
		// Init ScrollMagic
			var controller = new ScrollMagic.Controller();

			// pin the intro
			var pinIntroScene = new ScrollMagic.Scene({
				triggerElement: '#intro',
				triggerHook: 0,
				duration: '50%'
			})
			.setPin('#intro', {pushFollowers: false})
			.addTo(controller);

			// pin again
			var pinIntroScene2 = new ScrollMagic.Scene({
				triggerElement: '#first',
				triggerHook: 0.32
			})
			.setPin('#intro', {pushFollowers: false})
			.addTo(controller);

			// loop through each parallax scene
			$('.bcg-parallax').each(function(){

				var parallaxTl = new TimelineMax();

				parallaxTl
					.from(this.children[1], 0.9, {autoAlpha: 0, ease:Power0.easeNone}, 0.1)
					.from(this.children[2], 20, {x:-1100})
					// .from(this.children[0], 2, {y: '-50%', ease:Power0.easeNone}, 0)
					;

				var slideParallaxScene = new ScrollMagic.Scene({
					triggerElement: this,
					triggerHook: 1,
					duration: '50%'
				})
				.setTween(parallaxTl)
				.addTo(controller);
			});
	}

	if ($(window).width() >= 992){
		
		parallax();

	}


// *************************


});




