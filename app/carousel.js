const slideWrapper = document.querySelector(".carousel")
const slides = Array.from(document.querySelectorAll(".slides"))

const nextBtn = document.querySelector("#nextSlide")
const prevBtn = document.querySelector("#prevSlide")


window.addEventListener("load", () => {
    console.log(slides.length)
    nextPrevSlide()
    getSlidePosition()
})

// DEFINE NEXT AND PREVIOUS SLIDE
function nextPrevSlide() {
    const activeSlide = document.querySelector('.slides.active')
    const activeSlideIndex = slides.indexOf(activeSlide)
    let nextSlide, prevSlide

    // if the slides is in the last index
    if (activeSlideIndex === slides.length - 1) {
        nextSlide = slides[0]; //next slide equal to the first slide
    } else {
        nextSlide = slides[activeSlideIndex + 1];
    }

    // if the slides is in the first index
    if (activeSlideIndex === 0) {
        prevSlide = slides[slides.length - 1] //previous slide queal to the last slide
    } else {
        prevSlide = slides[activeSlideIndex - 1]
    }

    return [nextSlide, prevSlide]
}

function getSlidePosition() {
    const activeSlide = document.querySelector('.slides.active')
    // const activeSlideIndex = slides.indexOf(activeSlide)

    let [next, prev] = nextPrevSlide()

    slides.forEach((slide) => {
        if (slide === activeSlide) {
            slide.style.transform = "translateX(0)"
        } else if (slide === next) {
            slide.style.transform = "translateX(150%)"
        } else if (slide === prev) {
            slide.style.transform = "translateX(-150%)"
        } else {
            slide.style.transform = "translateX(150%)"
        }

    })
}

nextBtn.addEventListener("click", () => {
    const activeSlide = document.querySelector('.slides.active')
    const activeSlideIndex = slides.indexOf(activeSlide)
    const delayBtn = 1500;


    let [next, prev] = nextPrevSlide()

    slides[activeSlideIndex].classList.remove("active")
    next.classList.add("active")

    nextBtn.disabled = true;

    setTimeout(() => {
        nextBtn.disabled = false;
        console.log("enabled")
    }, delayBtn)

    animateTransition("next")
    getSlidePosition()
})

prevBtn.addEventListener("click", () => {
    const activeSlide = document.querySelector('.slides.active')
    const activeSlideIndex = slides.indexOf(activeSlide)
    const delayBtn = 1500;

    let [next, prev] = nextPrevSlide()


    slides[activeSlideIndex].classList.remove("active")
    prev.classList.add("active")

    prevBtn.disabled = true;

    setTimeout(() => {
        prevBtn.disabled = false;
        console.log("enabled")
    }, delayBtn)

    animateTransition("prev")
    getSlidePosition()
})

function animateTransition(btn) {
    const currentSlide = document.querySelector(".slides.active")

    let [next, prev] = nextPrevSlide()


    if (btn == "next") {
        currentSlide.style.transition = "transform 1s ease-in-out"
        prev.style.transition = "transform 1s ease-in-out"
        currentSlide.addEventListener("transitionend", () => {
            prev.style.transition = "none"
        })
    } else if (btn == "prev") {
        currentSlide.style.transition = "transform 1s ease-in-out"
        next.style.transition = "transform 1s ease-in-out"
        currentSlide.addEventListener("transitionend", () => {
            next.style.transition = "none"
        })
    }

    console.log(currentSlide)
}

// SNAPPING CAROUSEL
const container = document.querySelector(".slides-wrapper")
// states
let isDragging = false,
    startPos = 0,
    currentTranslate = 0,
    prevTranslate = 0,
    animationID,
    currentIndex = 0

// add our event listeners

// slides.forEach((slide, index) => {
//     // touch events
//     slide.addEventListener('touchstart', touchStart(index))
//     slide.addEventListener('touchend', touchEnd)
//     slide.addEventListener('touchmove', touchMove)

// })


// prevent popup on long press
// window.oncontextmenu = function (event) {
//     event.preventDefault()
//     event.stopPropagation()
//     return false
// }

// // when the touch is start
// function touchStart(index) {
//     return function (event) {
//         currentIndex = index
//         startPos = getPositionXAxis(event)
//         isDragging = true
//         animationID = requestAnimationFrame(animation)
//     }
// }

// function touchEnd() {
//     isDragging = false
//     cancelAnimationFrame(animationID)
//     const move = currentTranslate - prevTranslate

//     if(move < -100 && currentIndex < slides.length - 1){
//         currentIndex += 1
//     }

//     if(move > 100 && currentIndex > 0){
//         currentIndex -= 1
//     }

//     setPosition()
// }

// function touchMove(event) {
//     if (isDragging) {
//         const currentTargetPosition = getPositionXAxis(event)
//         currentTranslate = prevTranslate + currentTargetPosition - startPos
//     }
// }

// function getPositionXAxis(event){
//     // getting client x position
//     return event.touches[0].clientX
// }

// function animation(){
//     setSliderPosition()
//     if(isDragging){
//         requestAnimationFrame(animation)
//     }
// }

// function setSliderPosition(){
//     container.style.transform = `translateX(${currentTranslate}px)`
// }

// function setPosition(){
//     currentTranslate = currentIndex * -window.innerWidth
//     prevTranslate = currentTranslate

//     setSliderPosition()
// }