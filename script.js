function navanimation(){
    let nav =  document.querySelector("nav");

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()

    tl.to(".nav-bottom",{
        height: "24vh"
    })
    tl.to(".navprt2 h5 span",{
        display: "block"
    })
    tl.to(".navprt2 h5 span",{
        y:0,
        stagger:{
            amount: 0.8
        }
    })
})

nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    tl.to(".navprt2 h5 span",{
        y:25,
        stagger:{
            amount: 0.3
        }
    })
    tl.to(".navprt2 h5 span",{
        display: "none",
        duration: 0.3
    })
    tl.to(".nav-bottom",{
        height: 0,
        duration: 0.3
    })
})

}

navanimation();