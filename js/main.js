$(document).ready(function(){

	setTimeout(function(){
        $('body').addClass('loaded');
        setTimeout(animatedText, 300);
    }, 1000);

	// Animation Contacts Text with SplitText

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

	// loop through each .project element
	// $('.project').each(function(){
		
	// 	// build a scene
	// 	var ourScene = new ScrollMagic.Scene({
	// 		triggerElement: this.children[0],
	// 		triggerHook: 0.9
	// 	})
	// 	.setClassToggle(this, 'fade-in') // add class to project01
	// 	// .addIndicators({
	// 	// 	name: 'fade scene',
	// 	// 	colorTrigger: 'black',
	// 	// 	colorStart: '#75C695',
	// 	// 	colorEnd: 'pink'
	// 	// }) // this requires a plugin
	// 	.addTo(controller);

	// });

// CAROUSEL ****************
var carouselList = $('#carousel ul');
var interval = null;
var imgWidth;
var widthAllimg;
var amountLi = $('#carousel ul li').length;
responsiveImg();

function responsiveImg(){
	imgWidth = $('.bcg3').outerWidth(true);
	widthAllimg = imgWidth * amountLi;
	$('#carousel ul').css('width', widthAllimg);
	$('#carousel ul li').css('width', imgWidth);
}

interval = setInterval(changeSlides, 6000);

$( window ).resize(function() {
	responsiveImg();
});

function changeSlides(){
	carouselList.animate({"marginLeft": -imgWidth}, 1500, moveFirstSlide);
	
}
function moveFirstSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	lastItem.after(firstItem);
	carouselList.css({marginLeft:0});
}
function moveLastSlide(){
	var firstItem = carouselList.find("li:first");
	var lastItem = carouselList.find("li:last");
	firstItem.after(lastItem);
	carouselList.css({marginLeft:0});
}
  
carouselList.mouseover(function() {
	clearInterval(interval);
})
	.mouseout(function() {
	interval = setInterval(changeSlides, 6000);
	});

$('.left-arr').click(function(){
	var li = carouselList.find("li");
	carouselList.css("margin-left", -imgWidth);
	li.first().before(li.last());
	carouselList.animate({"marginLeft": 0}, 1500, function(){

	});
	clearInterval(interval);
})
$('.right-arr').click(function(){
	var li = carouselList.find("li");
	carouselList.animate({"marginLeft": -imgWidth}, 1500, function(){
	li.last().after(li.first());
	carouselList.css("margin-left", "0");
	});
	clearInterval(interval);
})
// *************************


});




