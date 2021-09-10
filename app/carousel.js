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



