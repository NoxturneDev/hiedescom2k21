const slideWrapper = document.querySelector(".carousel")
const slides = Array.from(document.querySelectorAll(".slides"))

const nextBtn = document.querySelector("#nextSlide")
const prevBtn = document.querySelector("#prevSlide")


nextBtn.addEventListener("click", ()=> {
    const activeSlide = document.querySelector("[data-slide-active='true']")
    const indexOfActiveSlide = slides.indexOf(activeSlide)

    
})

function nextPrevSlide(){
    const activeSlide = document.querySelector('.slides.active')
    const activeSlideIndex = slides.indexOf(activeSlide)
    let nextSlide, prevSlide

    if(activeSlideIndex === slides.length - 1){
        nextSlide = slides[0];
    } else {
        nextSlide = slides[activeSlideIndex + 1];
    }


    if(activeSlideIndex === 0){
        prevSlide = slides[slides.length - 1]
    } else {
        prevSlide = slides[activeSlideIndex - 1]
    }

    return [nextSlide, prevSlide]
}

function getSlidePosition(){
    const activeSlide = document.querySelector('.slides.active')
    // const activeSlideIndex = slides.indexOf(activeSlide)

    let [next, prev] = nextPrevSlide()

    slides.forEach((slide) => {
        if(slide === activeSlide){
            slide.style.transform = "translateX(0)"
        } else if(slide === next){
            slide.style.transform = "translateX(150%)"
            console.log(2)
        } else if(slide === prev){
            slide.style.transform = "translateX(-150%)"
            console.log(3)
        } else {
            slide.style.transform = "translateX(150%)"
        }

        slide.addEventListener("transitionend", ()=> {
            if(slide.dataset.animation == "sliding"){
                slide.dataset.animation = "none";
            }
        })
    })
}

nextBtn.addEventListener("click", ()=> {
    const activeSlide = document.querySelector('.slides.active')
    const activeSlideIndex = slides.indexOf(activeSlide)

    let [next, prev] = nextPrevSlide();

    // if(activeSlideIndex === slides.length - 1){
    //     slides[slides.length - 1].dataset.animation = "none";
    // } else {
        
    
    // }

    slides[activeSlideIndex].classList.remove("active")
        slides[activeSlideIndex].dataset.animation = "sliding";
        next.dataset.animation = "sliding";
        next.classList.add("active")
        console.log("transiton")
    
    getSlidePosition()
})

prevBtn.addEventListener("click", ()=> {
    const activeSlide = document.querySelector('.slides.active')
    const activeSlideIndex = slides.indexOf(activeSlide)

    let [next, prev] = nextPrevSlide();

    if(activeSlideIndex == 0){
        slides[activeSlideIndex].dataset.animation = "none"; 
        prev.dataset.animation = "none";
        next.dataset.animation = "sliding"
    } else {
        slides[activeSlideIndex].classList.remove("active")
        slides[activeSlideIndex].dataset.animation = "sliding";
        prev.dataset.animation = "sliding";
        prev.classList.add("active")
    }
   
    getSlidePosition()
})
// nextBtn.addEventListener("click", () => {
//     if(slideIndex >= 0){
//         sliderWrapper.style.transform = `translateX(${slideIndex * 100 * -1}%)`

//         prevBtn.style.visibility = "visible";
//         nextBtn.style.visibility = "visible";


//         if (slideIndex === slides.length) {
//             slideIndex = 0;
//             sliderWrapper.style.transform = `translateX(0px)`
//             nextBtn.style.visibility = "hidden";
//         }
        
//     }
//        let cek = slideIndex * 100;
  
//     slideIndex++
//     console.log(slideIndex)
//     console.log(slides.length)
//     console.log(cek + "next")

// })


// prevBtn.addEventListener("click", () => {
//     sliderWrapper.style.transform = `translateX(${slideIndex * 100 * -1}%)`

//     if (slideIndex == 0) {
//         slideIndex = slides.length;
//         prevBtn.style.visibility = "hidden";
//     }

//     let cek = slideIndex * 100;

//     slideIndex--
//     console.log(slideIndex)
//     console.log(slides.length)
//     console.log(cek + "prev")
// })

