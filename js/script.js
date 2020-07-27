//usa de una animacion en style
//rubberBand
const spans = document.querySelectorAll("h1 span");
spans.forEach(span => span.addEventListener("mouseover", function(e){
    span.classList.add("animated", "shake")
}));
spans.forEach(span => span.addEventListener("mouseout", function(e){
    span.classList.remove("animated", "shake")
}));

const htmlBar = document.querySelector(".bar-html");
const cssBar = document.querySelector(".bar-css");
const jsBar = document.querySelector(".bar-javascript");
const reactBar = document.querySelector(".bar-react");
const logo = document.querySelector(".logo");
const menu = document.querySelectorAll("nav ul li a");

var tl = new TimelineLite();
tl.fromTo(htmlBar, 1, {width: "calc(0% - 6px)"}, {width: "calc(90% - 6px)", ease: Power4.easeOut})
.fromTo(cssBar, 1, {width: "calc(0% - 6px)"}, {width: "calc(80% - 6px)", ease: Power4.easeOut})
.fromTo(jsBar, 1, {width: "calc(0% - 6px)"}, {width: "calc(60% - 6px)", ease: Power4.easeOut})
.fromTo(reactBar, 1, {width: "calc(0% - 6px)"}, {width: "calc(50% - 6px)", ease: Power4.easeOut});
var tl2 = new TimelineLite();
tl2.fromTo(menu, 1, {opacity:0},{opacity:1, ease: Power4.easeOut}, "+=1")
.fromTo(logo, 1, {opacity:0},{opacity:1, ease: Power4.easeOut}, "-=1");

/*creacion de la scena scrollmagic*/
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    triggerElement: ".skills",
    triggerHook: 0
})
.setTween(tl)
.addTo(controller);


const showRequiredCategory  = event => {
    const getid = event.id;
    const links = document.querySelectorAll(".work-category button");
    for(i = 0; i<links.length; i++){
        if(links[i].hasAttribute("class")){
            links[i].classList.remove("active");
        }
    }
    event.classList.add("active");
    const getCategory = document.querySelector(`.category-${getid}`);
    const categories = document.querySelectorAll("div[class^='category-']");
    for(i = 0; i<categories.length; i++){
        if(categories[i].hasAttribute("class")){
            categories[i].classList.remove("showCategory");
            categories[i].classList.add("hideCategory");
        }
    }
    getCategory.classList.remove("hideCategory");
    getCategory.classList.add("showCategory");
    //console.log(links)
}