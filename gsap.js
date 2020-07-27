const h1 = document.querySelector("#h1");
const h2 = document.querySelector("#h2");
const h3 = document.querySelector("#h3");
const imagen = document.querySelector(".image-background2");
const barra = document.querySelector(".barra");
 //const tl = TweenMax.to(h1, 3, {opacity:1});
 var tl = new TimelineLite();
 tl.fromTo(imagen, 1,{opacity:0, width:"1%"}, {width:"100%",height: "0px", opacity:1, ease: Power4.easeOut})
 .fromTo(imagen, 1, {width:"100%",height: "0px"},{height: "100px"})
 .fromTo(h1, 1,{opacity:0}, {opacity:1, ease: Power4.easeOut})
 .fromTo(barra, 1, {width:"0%"}, {width: "100%", ease: Power4.easeOut})
 .fromTo(h2, 0.8,{opacity:0}, {opacity:1, ease: Power4.easeOut})
.fromTo(h3, 0.8,{opacity:0}, {opacity:1, ease: Power4.easeOut});
 const controller = new ScrollMagic.Controller();
 const scene = new ScrollMagic.Scene({
     triggerElement: ".container2"
 })
 .setTween(tl)
 .addTo(controller);


