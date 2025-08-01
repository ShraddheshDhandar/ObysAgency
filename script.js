
function locomotiveAnimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

function loadingAnimation(){
    var tl = gsap.timeline()
tl.from(".line h1, .line h2",{
    y:150,
    stagger:0.2,
    duration:2,
})
// tl.from(".line h2", {
//     y:150,
//     duration:0.5,
// });

tl.from("#line1-part1",{
    opacity:0,
    onStart:function(){
        var h5timer= document.querySelector("#line1-part1 h5")
        var grow=0
        setInterval(function(){
        if(grow<100){
            grow++
            h5timer.innerHTML=grow++
            }else{
            h5timer.innerHTML=grow

            }

        }, 50);
    },
});

    tl.to(".line h2",{
        animationName:"anime",
        opacity:0
    })
    tl.to("#loader",{
        opacity:0,
        duration:0.2,
        delay:0,
    });

    tl.from("#page1",{
        y:1600,
        duration:0.6,
        delay:0.1,
        ease:Power4
    })
    tl.to("#loader",{
        display:"none"
    })
    tl.from("#nav",{
        opacity:0
    })
    tl.from("#hero1 h1, #hero2 h1, #hero3 h2, #hero4 h1",{
        y:120,
        stagger:0.2
    })
    tl.from("#hero1, #page2",{
        opacity:0,
    });

}
function cursorAnimation(){
    document.addEventListener("mousemove",function(dets){
    gsap.to("#cursor",{
        left:dets.x,
        top:dets.y,
        right:dets.x,
        down:dets.y
    })
})

Shery.makeMagnet("#nav-part2 h4" /* Element to target.*/, {});
}

function sheryAnimation(){
Shery.imageEffect(".image-div", {
  style: 2,
  config:{"resolutionXY":{"value":100},"distortion":{"value":true},"mode":{"value":-3},"mousemove":{"value":0},"modeA":{"value":1},"modeN":{"value":0},"speed":{"value":1,"range":[-500,500],"rangep":[-10,10]},"frequency":{"value":50,"range":[-800,800],"rangep":[-50,50]},"angle":{"value":0.5,"range":[0,3.141592653589793]},"waveFactor":{"value":1.4,"range":[-3,3]},"color":{"value":10212607},"pixelStrength":{"value":3,"range":[-20,100],"rangep":[-20,20]},"quality":{"value":5,"range":[0,10]},"contrast":{"value":1,"range":[-25,25]},"brightness":{"value":1,"range":[-1,25]},"colorExposer":{"value":0.18,"range":[-5,5]},"strength":{"value":0.2,"range":[-40,40],"rangep":[-5,5]},"exposer":{"value":8,"range":[-100,100]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.5440626994153817},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.46,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});
}


loadingAnimation()
cursorAnimation()
locomotiveAnimation()
sheryAnimation()
