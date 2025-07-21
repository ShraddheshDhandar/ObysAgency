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
    delay:2.6,
});

tl.from("#page1",{
    y:1600,
    duration:0.5,
    delay:0.1,
    ease:Power4
})
tl.to("#loader",{
    display:"none"
})
}
loadingAnimation()