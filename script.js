var cursor = document.querySelector("#cursor");
var cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function(e){
    cursor.style.left = e.x-10+"px";
    cursor.style.top = e.y-10+"px";
    cursorBlur.style.left = e.x-250+"px";
    cursorBlur.style.top = e.y-250+"px";
})



gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height:"120px",
    scrollTrigger: {
        trigger:"#nav",
        scroller:"body",
        markers: true,
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
        markers: true,
        start:"top -25%",
        end:"top -70%",
        scrub: 2
    }
})