var titleText = "Animated SVG Banners";
var subtitleText = "100% scaleable graphics that";
var subtitleText2 = "only animate on scroll";
var buttonText = "READ MORE";
var readMoreURL = ["#", "#"];
//Example: 
//var readMoreURL = ["http://aprendagames.com","http://aprendagames.com"];




//--------------------------NO NEED TO EDIT BELOW THIS LING--------------------------//



var deskIconNames = [
	"desk01", 
	"desk02"
];
//var deskIconNames = ["chrome"];
iconNames = iconNames.concat(deskIconNames);
var easeVar = Circ;
//animate each of the icons
window['desk01'] = function(index, f, thisIcon)
{

	var deskAnimation = new TimelineLite()
		.from(f.select("#desktop1").node, .4, {scaleX:0, transformOrigin:"middle", ease:easeVar.easeOut})
		.to(f.select("#deskshadow").node, .4, {y:6, ease:easeVar.easeOut})
		.from(f.select("#deskright").node, .4, {scaleY:0, transformOrigin:"top", ease:easeVar.easeOut}, "-=0.2")
		.from(f.select("#deskleft").node, .4, {scaleY:0, transformOrigin:"top", ease:easeVar.easeOut}, "-=0.4")

	var lampAnimation = new TimelineLite()
		.from(f.select("#lamp").node, .4, {alpha:0, y:-20, ease:easeVar.easeIn})
		.to(f.select("#lamparm1").node, .1, {rotation:-20, transformOrigin:"bottom middle", ease:Quad.easeOut})
		.to(f.select("#lamparm2").node, .1, {rotation:30, transformOrigin:"bottom left", ease:Quad.easeOut}, "-=.1")
		.to(f.select("#lamparm1").node, .5, {rotation:0, ease:Quad.easeInOut})
		.to(f.select("#lamparm2").node, .5, {rotation:0, ease:Quad.easeInOut}, "-=.5")

	var cupAnimation = new TimelineLite()
		.from(f.select("#pencilholder").node, .1, {alpha:0, ease:easeVar.easeIn})
		.to(f.select("#cup").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#cup").node, .4, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#scissors").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#scissors").node, .7, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#pencilblack").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#pencilblack").node, .55, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#pencilred").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#pencilred").node, .5, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#ruler").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#ruler").node, .5, {y:-18, ease:Bounce.easeOut}, ".2")

	var flowerAnimation = new TimelineLite()
		.from(f.select("#vase").node, .2, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut})
		.from(f.select("#flowerorange").node, .5, {y:25, rotation:30, transformOrigin:"bottom right", ease:easeVar.easeOut})
		.from(f.select("#flowerwhite").node, .5, {y:25, rotation:-30, transformOrigin:"bottom left", ease:easeVar.easeOut})

	var picsAnimation = new TimelineLite()
		.from(f.select("#picture01").node, .4, {scale:0, transformOrigin:"bottom right", ease:easeVar.easeOut})
		.from(f.select("#picture02").node, .2, {scaleY:0, transformOrigin:"bottom left", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#picture03").node, .4, {scaleX:0, scaleY:0, transformOrigin:"bottom left", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#picture05").node, .4, {scale:0, transformOrigin:"top left", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#picture04").node, .4, {scale:0, transformOrigin:"top right", ease:easeVar.easeOut}, "-=.2")
		
	var bookAnimation = new TimelineLite()
		.from(f.select("#bookondesk").node, .2, {y:10, alpha:0, ease:easeVar.easeOut})
		.to(f.select("#bookondesk").node, .2, {y:10, ease:Quad.easeIn})	
		.from(f.select("#bookmark").node, .2, {scaleY:0, transformOrigin:"top", ease:easeVar.easeOut})			


	var bookshelfAnimation = new TimelineLite()
		.from(f.select("#shelftop").node, .4, {scaleX:0, transformOrigin:"middle", ease:easeVar.easeOut})
		.from(f.select("#shelfright").node, .4, {scaleY:0, transformOrigin:"top", ease:easeVar.easeOut}, "-=0.2")
		.from(f.select("#shelfleft").node, .4, {scaleY:0, transformOrigin:"top", ease:easeVar.easeOut}, "-=0.4")
		.from(f.select("#leaningbook").node, .3, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#book1").node, .3, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#book2").node, .3, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#book3").node, .3, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#book4").node, .3, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#book5").node, .3, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#book6").node, .3, {scaleY:0, transformOrigin:"bottom", ease:easeVar.easeOut}, "-=.2")
		.to(f.select("#leaningbook").node, .6, {rotation:37, transformOrigin:"bottom right", ease:Circ.easeIn})

	var coffeeAnimation = new TimelineLite()
		.from(f.select("#coffee01").node, .4, {alpha:0, y:-10, ease:easeVar.easeOut})	
		.from(f.select("#coffeesteam").node, 3, {scale:.3,transformOrigin:"bottom 5%", alpha:0, ease:easeVar.easeOut})	

	var imacAnimation = new TimelineLite()
		.from(f.select("#imac").node, .8, {alpha:0, y:-20, ease:easeVar.easeOut})	



	var textAnimations = new TimelineLite();
	if(f.select("#maintitle")){
		f.select("#maintitle").node.textContent = titleText;
		textAnimations.from(f.select("#maintitle").node, .3, {alpha:0, ease:easeVar.easeOut})	;
	}
	if(f.select("#subtitle")){
		f.select("#subtitle").node.textContent = subtitleText;
		textAnimations.from(f.select("#subtitle").node, .3, {alpha:0, ease:easeVar.easeOut}, "-=.2");
	}

	if(f.select("#subtitle2")){
		f.select("#subtitle2").node.textContent = subtitleText2;
		textAnimations.from(f.select("#subtitle2").node, .3, {alpha:0, ease:easeVar.easeOut}, "-=.2");
	}
	if(f.select("#readmorebutton") && buttonText != ""){

		f.select("#buttontext").node.textContent = buttonText;
		textAnimations.from(f.select("#readmorebutton").node, .3, {alpha:0, y:-5, ease:easeVar.easeOut, onComplete:function(){

			var readMoreLink = f.select("#readmorebutton").node;
			readMoreLink.style.cursor = "pointer";
			readMoreLink.onmouseover = function() {
				TweenMax.to(readMoreLink, 0.2, {opacity:.5});
			}
			readMoreLink.onmouseout = function() {
				TweenMax.to(readMoreLink, 0.2, {opacity:1});
			}
			readMoreLink.addEventListener("click", function(){
				window.location.href = readMoreURL[index];
			}, false);

		}}, "-=.2");
	}else{
		f.select("#readmorebutton").attr({
	        visibility: "hidden"
	    });
	}

	


	//TweenMax.set(video, {opacity:0.2});
	
		
	


	//animate in animation
	var tl = new TimelineLite({
		onStart:animationComplete, 
		onStartParams:[index, true], 
		onReverseComplete:animationComplete, 
		onReverseCompleteParams:[index, false]
	})
		
		.add(deskAnimation)
		.add(textAnimations, .3)
		.add(bookAnimation, .5)
		.add(coffeeAnimation, .6)
		.add(flowerAnimation, .9)
		.add(cupAnimation, .6)
		.add(lampAnimation, .8)
		.add(bookshelfAnimation, .9)
		.add(picsAnimation, 1.1)
		.add(imacAnimation, 1.2)
		.timeScale(speed);
		
	tls[index] = tl;

	

	
	var tlRollover = new TimelineLite();
		
	tlsRollover[index] = tlRollover;
}

window['desk02'] = function(index, f, thisIcon)
{

	var deskAnimation = new TimelineLite()
		.from(f.select("#desktop1").node, .4, {scaleX:0, transformOrigin:"middle", ease:easeVar.easeOut})
		.to(f.select("#deskshadow").node, .4, {y:6, ease:easeVar.easeOut})
		.from(f.select("#deskright").node, .4, {scaleY:0, transformOrigin:"top", ease:easeVar.easeOut}, "-=0.2")
		.from(f.select("#deskleft").node, .4, {scaleY:0, transformOrigin:"top", ease:easeVar.easeOut}, "-=0.4")

	var cupAnimation = new TimelineLite()
		.from(f.select("#pencilholder").node, .1, {alpha:0, ease:easeVar.easeIn})
		.to(f.select("#cup").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#cup").node, .4, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#pen01").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#pen01").node, .7, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#pen02").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#pen02").node, .55, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#pen03").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#pen03").node, .5, {y:-18, ease:Bounce.easeOut}, ".2")
		.to(f.select("#pen04").node, .2, {y:-38, ease:easeVar.easeOut}, "0")
		.to(f.select("#pen04").node, .5, {y:-18, ease:Bounce.easeOut}, ".2")

	var picsAnimation = new TimelineLite()
		.from(f.select("#picture01").node, .4, {scale:0, transformOrigin:"bottom right", ease:easeVar.easeOut})
		.from(f.select("#picture02").node, .2, {scale:0, transformOrigin:"top left", ease:easeVar.easeOut}, "-=.2")

	var clocksAnimation = new TimelineLite()
		.from(f.select("#edge").node, .4, {scale:0, transformOrigin:"50% 50%", ease:Quad.easeOut})
		.from(f.select("#face").node, .4, {scale:0, transformOrigin:"50% 50%", ease:Quad.easeOut}, "-=.2")
		.from(f.select("#mount").node, .4, {scaleY:0, transformOrigin:"bottom", ease:Quad.easeOut}, "-=.2")
		.from(f.select("#hour").node, .4, {scaleY:0, transformOrigin:"bottom", ease:Quad.easeOut}, "-=.2")
		.from(f.select("#second").node, .4, {scaleY:0, transformOrigin:"bottom", ease:Quad.easeOut}, "-=.2")
		.from(f.select("#minute").node, .4, {scaleY:0, transformOrigin:"bottom", ease:Quad.easeOut}, "-=.2")
		.from(f.select("#numbers").node, .3, {alpha:0, ease:easeVar.easeIn}, "-=.2")

	var imacAnimation = new TimelineLite()
		.from(f.select("#laptop").node, .8, {alpha:0, y:-20, ease:easeVar.easeOut})	

	var speaker01Animation = new TimelineLite()
		.from(f.select("#speaker1").node, .3, {alpha:0, y:-20, ease:Quad.easeOut})
		.from(f.select("#topinner").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#topouter").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#bottominner").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#bottomouter").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")

	var speaker02Animation = new TimelineLite()
		.from(f.select("#speaker2").node, .3, {alpha:0, y:-20, ease:Quad.easeOut})
		.from(f.select("#topinner2").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#topouter2").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#bottominner2").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")
		.from(f.select("#bottomouter2").node, .4, {scale:0, transformOrigin:"50% 50%", ease:easeVar.easeOut}, "-=.2")

	var mouseAnimation = new TimelineLite()
		.from(f.select("#mouse").node, .3, {alpha:0, y:10, ease:Quad.easeOut})

	var iPodAnimation = new TimelineLite()
		.from(f.select("#ipod").node, .3, {alpha:0, ease:Quad.easeOut})


	var bookstackAnimation = new TimelineLite()
		.from(f.select("#book1").node, .3, {y:-10, alpha:0, ease:Quad.easeOut})
		.from(f.select("#book2").node, .3, {y:-10, alpha:0, ease:Quad.easeOut}, "-=.2")
		.from(f.select("#book3").node, .3, {y:-10, alpha:0, ease:Quad.easeOut}, "-=.15")
		.from(f.select("#ipad").node, .3, {y:-10, alpha:0, ease:Quad.easeOut}, "-=.1")

	

	var windowAnimation = new TimelineLite()
		//.from(f.select("#sky").node, .3, {alpha:0, ease:Quad.easeOut})
		.from(f.select("#blinds").node, 1, {scaleY:0, transformOrigin:"top", ease:Quad.easeOut}, .2)
		.from(f.select("#windowstring1").node, 1.1, {scaleY:1.5, alpha:0, ease:easeVar.easeOut}, .2)
		.from(f.select("#windowstring2").node, 1.5, {scaleY:1.5, alpha:0, ease:easeVar.easeOut}, .2)
		.from(f.select("#windowframe").node, 1.5, {alpha:0, ease:easeVar.easeOut}, .2)

	// f.select("#windowall").attr({
	//   mask: f.select("#windowmask")
	// });

	var textAnimations = new TimelineLite();
	if(f.select("#maintitle")){
		f.select("#maintitle").node.textContent = titleText;
		textAnimations.from(f.select("#maintitle").node, .3, {alpha:0, ease:easeVar.easeOut})	;
	}
	if(f.select("#subtitle")){
		f.select("#subtitle").node.textContent = subtitleText;
		textAnimations.from(f.select("#subtitle").node, .3, {alpha:0, ease:easeVar.easeOut}, "-=.2");
	}

	if(f.select("#subtitle2")){
		f.select("#subtitle2").node.textContent = subtitleText2;
		textAnimations.from(f.select("#subtitle2").node, .3, {alpha:0, ease:easeVar.easeOut}, "-=.2");
	}
	if(f.select("#readmorebutton") && buttonText != ""){

		f.select("#buttontext").node.textContent = buttonText;
		textAnimations.from(f.select("#readmorebutton").node, .3, {alpha:0, y:-5, ease:easeVar.easeOut, onComplete:function(){

			var readMoreLink = f.select("#readmorebutton").node;
			readMoreLink.style.cursor = "pointer";
			readMoreLink.onmouseover = function() {
				TweenMax.to(readMoreLink, 0.2, {opacity:.5});
			}
			readMoreLink.onmouseout = function() {
				TweenMax.to(readMoreLink, 0.2, {opacity:1});
			}
			readMoreLink.addEventListener("click", function(){
				window.location.href = readMoreURL[index];
			}, false);

		}}, "-=.2");
	}else{
		f.select("#readmorebutton").attr({
	        visibility: "hidden"
	    });
	}


	var tl = new TimelineLite({
		onStart:animationComplete, 
		onStartParams:[index, true], 
		onReverseComplete:animationComplete, 
		onReverseCompleteParams:[index, false]
	})
		.add(deskAnimation)
		.add(textAnimations, .3)
		.add(iPodAnimation, .5)
		.add(bookstackAnimation, .9)
		.add(speaker01Animation, .6)
		.add(speaker02Animation, .6)
		.add(cupAnimation, 1)
		.add(mouseAnimation, .8)
		.add(windowAnimation, 1)
		.add(clocksAnimation, 1.1)
		.add(picsAnimation, 1.1)
		.add(imacAnimation, 1.4)


	tls[index] = tl;

	var tlRollover = new TimelineLite();
	tlsRollover[index] = tlRollover;
}

