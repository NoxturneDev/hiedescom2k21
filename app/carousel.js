const slideWrapper = document.querySelector(".carousel")
const slides = Array.from(document.querySelectorAll(".slides"))

const nextBtn = document.querySelector("#nextSlide")
const prevBtn = document.querySelector("#prevSlide")


window.addEventListener("load", () => {

    console.log(slides.length)
    nextPrevSlide()
    getSlidePosition()
    initializeShare()
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


// IMAGE OVERLAY ON CLICK
const imagesInGallery = Array.from(document.querySelectorAll(".image-container"))
const galleryOverlay = document.querySelector(".gallery-overlay")


galleryOverlay.addEventListener("click", (e) => {
    if (e.target.classList.contains("gallery-overlay")) {
        galleryOverlay.style.display = "none"
    }
})

imagesInGallery.forEach((image) => {
    const overlayCaption = document.querySelector(".gallery-overlay-text .header")
    const caption = image.dataset.caption
    const mediaQuery = window.matchMedia("(min-width: 768px)")

    const onDekstopClick = () => {
        if (mediaQuery.matches) {
            image.addEventListener("click", () => {
                galleryOverlay.style.display = "flex"

                // change the caption depends on which image is clicked
                overlayCaption.innerText = caption
            })

            image.addEventListener("touchstart", () => {
                galleryOverlay.style.display = "flex"

                // change the caption depends on which image is clicked
                overlayCaption.innerText = caption
            })
        }

    }
    onDekstopClick()
})


// ROTATING EVENT

// ROTATION BUTTON MODE
const rotationWrapper = document.querySelector(".picture-wrapper")
const changeRotationButton = document.querySelectorAll(".rotation-choice")

changeRotationButton.forEach(btn => {
    const buttonId = btn.id
    btn.addEventListener("click", (e) => {
        if (buttonId == "yAxis") {
            rotationWrapper.style.animation = "rotateY 30s linear infinite"
        } else if (buttonId == "xAxis") {
            rotationWrapper.style.animation = "rotateX 30s linear infinite"
        } else if (buttonId == "zAxis") {
            rotationWrapper.style.animation = "rotateDekstop 30s linear infinite"
        }
    })
})


// SHARE FEATURE
const shareData = {
    title: "Halo, kamu bisa belajar bahasa jawa menggunakan BOT Chat kami lho",
    // text : "tertarik untuk belajar bahasa jawa sama BOT? atau pengen tau aja info menarik mengenai kebudayaan jawa tengah? cek kesini",
    url: window.location.href,
    text: "Apakah kamu tertarik? kalo kamu tertarik, kamu bisa kunjungi link tersebut"
}

const shareBtn = document.querySelectorAll(".share")

function initializeShare() {
    let url = shareData.url
    let title = shareData.title
    let text = shareData.text
    shareBtn.forEach(btn => {
        const id = btn.id

        if (id == "shareTwitter") {
            btn.setAttribute(
                "href",
                `https://twitter.com/share?url=${url}&text=${title}`
            )
        } else if (id == "shareFacebook") {
            btn.setAttribute(
                "href",
                `https://www.facebook.com/sharer.php?u=${url}`
            )
        } else if (id == "shareWhatsapp") {
            btn.setAttribute(
                "href",
                `https://wa.me/?text=${title} ${url}`
            )
        } else if (id == "shareTelegram") {
            btn.setAttribute(
                "href",
                `https://t.me/share/url?url=${url}&text=${text}`
            )
        }
    })
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