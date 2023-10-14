var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(e){
    cursor.style.left = e.x-10+"px";
    cursor.style.top = e.y-10+"px";
    cursorBlur.style.left = e.x-250+"px";
    cursorBlur.style.top = e.y-250+"px";
})

var allh4 = document.querySelectorAll("#nav h4");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.style.scale = 5;
        cursor.style.border = "0.3px solid #fff";
        cursor.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave", function(){
        cursor.style.scale = 1;
        cursor.style.border = "0px";
        cursor.style.backgroundColor = "#95C121";
    })
})



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height:"6.5em",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        start:"top -10%",
        end:"top -11%",
        scrub: 2
    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger:"#main",
        scroller:"body",
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }

})

gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1", {
    y:-50,
    x:-50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})

gsap.from("#colon2", {
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 45%",
        scrub:4
    }
})
gsap.from("#page4 h1", {
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})