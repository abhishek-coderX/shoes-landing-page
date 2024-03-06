var tl=gsap.timeline();

gsap.set(".a",{opacity:0, y:15});
gsap.set(".b",{opacity:0, y:5,scale:1.6});


tl.from("#left",{
    width:0,
    duration:1,
    ease:Expo.easeInOut
})


.from("#right",{

    width:0,
    duration: 1,
    ease:Expo.easeInOut

}) 


.to(".a",{
     delay:-2,
    stagger: .1,  //matlab ek jaise jitne bhi elements hai unpar delay
    opacity:1,
    y: 0,
    ease:Expo.easeInOut,
    duration:2

})

.to (".b" ,{
    delay:-2.5,
    opacity:1,
    y:0,
    scale:1,
    ease:Expo.easeInOut,
    duration:1.5

})





