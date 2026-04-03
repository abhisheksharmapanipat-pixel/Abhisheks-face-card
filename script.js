let slides = document.querySelectorAll(".slide");
let index = 0;

setInterval(()=>{
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
}, 2500);

window.addEventListener("scroll", function(){
    let scroll = window.scrollY;
    let spidy = document.querySelector(".spidy");

    if(spidy){
        spidy.style.transform = `translateY(${scroll * 0.5}px)`;
    }
});
