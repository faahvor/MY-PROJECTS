//variables
let thumbnails = document.getElementsByClassName("thumbnails");
let slider = document.getElementById("slider");
let buttonLeft = document.getElementById("slide-left");
let buttonRight = document.getElementById("slide-right");

buttonLeft.addEventListener("click", () =>{
slider.scrollLeft -= 125;
})
buttonRight.addEventListener("click", () =>{
    slider.scrollLeft += 125;
    })
    const maxScrollLeft = slider.scrollWidth - slider.clientWidth;
    //AutoPlay slider
    function autoPlay(){
        if(slider.scrollLeft > (maxScrollLeft - 1)){
            slider.scrollLeft -= maxScrollLeft;
        } else{
            slider.scrollLeft += 1;
        }
    }
    let play = setInterval(autoPlay, 50);
    //pause the slider on hover
    for(let i = 0; i < thumbnails.length; i++){
        thumbnails[i].addEventListener("mouseover",()=>{
            clearInterval(play)
        })
        thumbnails[i].addEventListener("mouseout",()=>{
            return play =setInterval(autoPlay, 50)
        })
    }