

let t1 =gsap.timeline()
t1.from(".line h1",{
  y:170,
  stagger:0.2,
  duration:0.6,
  delay:0.4,

})
t1.from("#line1-part1, .line h2",{
  opacity:0,
  onStart:function(){
    let timer =document.querySelector("#line1-part1 h5")
var inc =0
setInterval(function(){
  if(inc<100){
    timer.innerHTML =inc++
  }else{
    inc =100
    timer.innerHTML =inc++
  }
},20)  
  }
})
t1.to("#loader",{
  opacity:0,
  delay:2.5,
  duration:0.4,
})

t1.from("#page1",{
  opacity:0,
  y:1600,
  delay:0.2,
  ease:power4,
  duration:5,
})
t1.to("#loader",{
  display:"none",
})
