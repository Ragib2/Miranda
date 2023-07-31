


var pageUp = gsap.timeline();

pageUp.to(".page1",{
    y: "100vh",
    scale: .5,
    duration: 0,
   
})

pageUp.to(".page1", {
    y : "10vh",
    duration: 1,
    delay:1
  
})
pageUp.to(".page1", {
    y : "0vh",
    rotate : 360,
    scale:1,
    duration: .9,
    delay : .8
})
