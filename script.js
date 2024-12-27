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

function page2Animation(){

    let rightElem = document.querySelectorAll(".right-elem");

rightElem.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity: 1,
            scale: 1
        })
    })
        elem.addEventListener("mouseleave",function(){
            gsap.to(elem.childNodes[3],{
                opacity: 0,
                scale: 0
            })
        })
        elem.addEventListener("mousemove",function(dets){
           gsap.to(elem.childNodes[3],{
            x: dets.x - elem.getBoundingClientRect().x - 50,
            y: dets.y - elem.getBoundingClientRect().y - 130
           })
        })
})
}

page2Animation();

function page3VideoAnimation(){
    let page3Center =  document.querySelector(".page3-center");
let video  = document.querySelector(".page3 video");

page3Center.addEventListener("click",function(){
  video.play()
    gsap.to(video,{
     transform: "scaleX(1) ScaleY(1)",
     opacity: 1,
     borderRadius : 0
    })

})
 video.addEventListener("click",function(){
    video.pause()
    gsap.to(video,{
        transform: "scaleX(0.7) scaleY(0)",
        opacity: 0,
        borderRadius: 0
    })
 })
}

page3VideoAnimation();


function page5ani(){
    const section = document.querySelectorAll(".sec-right");

section.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        elem.childNodes[3].style.opacity = 1
        elem.childNodes[3].play()
    })
    elem.addEventListener("mouseleave",function(){
        elem.childNodes[3].style.opacity = 0
        elem.childNodes[3].load()
    })
})

}
page5ani();



gsap.from("#btm8-d1 h4",{
    x:0,
    duration: 1,
    scrollTrigger:{
       trigger : "#btm8-d1" ,
       scroller : "Body",
    //    markers: true,
       start : "top 80%",
       end : "top 10%",
       scrub: true,
    }
})
