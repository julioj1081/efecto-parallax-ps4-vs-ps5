window.onload = function(){
    let image = document.querySelector(".image-background");
    let image2 = document.querySelector(".image-background2");
    window.addEventListener('scroll', ()=>{
        //console.log(window.scrollY);
        let scroll = window.scrollY;
        image.style.backgroundPositionY = `-${scroll/2}px`;
    });
}

 //letras ps4 y ps5
 const spans = document.querySelectorAll("h2 span");
 spans.forEach(span => span.addEventListener("mouseover", function(e){
     span.classList.add("animated", "rubberBand");
 }));
 spans.forEach(span => span.addEventListener("mouseout", function(e){
     span.classList.remove("animated", "rubberBand");
}));

  