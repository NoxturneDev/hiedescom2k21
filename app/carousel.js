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

    image.addEventListener("click", () => {
        galleryOverlay.style.display = "flex"

        // change the caption depends on which image is clicked
        overlayCaption.innerText = caption
    })
})


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
    title: "Halo, mau belajar bahasa jawa?",
    text : "tertarik untuk belajar bahasa jawa sama BOT? atau pengen tau aja info menarik mengenai kebudayaan jawa tengah? cek kesini",
    url: document.location.href
}

const shareBtn = document.querySelectorAll(".share")

shareBtn.forEach(btn => {
    btn.addEventListener("click", () =>{
        shareMedia(btn)
    })
})

function shareMedia(e){
    if(navigator.share){
        navigator.share(shareData)
    } else {
        console.log("njir gabisa")
    }
}

function shareTwitter() {
    let text = encodeURI(shareData.text)
    let url = encodeURI(shareData.url)

    console.log(shareData.url)
    return `https://twitter.com/share?url=${url}&text=${text}}`
}

function shareFacebook() { 
    let textString = `teman teman twitter ${shareData.text}`
    let url = encodeURI(shareData.url)

    shareData.url = url
    shareData.text = textString

    return shareData
}
function shareWhatsapp() { 
    let textString = `teman teman ${shareData.text}`
    let url = encodeURI(shareData.url)

    shareData.url = url
    shareData.text = textString

  
}
function shareInstagram() {
    let textString = `teman teman instagram ${shareData.text}`
    let url = encodeURI(shareData.url)

    shareData.url = url
    shareData.text = textString

    return shareData
 }


//  WhatsApp:
//  https://wa.me/?text=[post-title] [post-url]
//  Facebook:
//  https://www.facebook.com/sharer.php?u=[post-url]
//  Twitter:
//  https://twitter.com/share?url=[post-url]&text=[post-title]
//  Pinterest:
//  https://pinterest.com/pin/create/bookmarklet/?media=[post-img]&url=[post-url]&is_video=[is_video]&description=[post-title]
//  LinkedIn:
//  https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]


function init() {
    const pinterestImg = document.querySelector(".pinterest-img");
  
    let postUrl = encodeURI(document.location.href);
    let postTitle = encodeURI("Hi everyone, please check this out: ");
    let postImg = encodeURI(pinterestImg.src);
  
    facebookBtn.setAttribute(
      "href",
      `https://www.facebook.com/sharer.php?u=${postUrl}`
    );
  
    twitterBtn.setAttribute(
      "href",
      `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
    );
  
    pinterestBtn.setAttribute(
      "href",
      `https://pinterest.com/pin/create/bookmarklet/?media=${postImg}&url=${postUrl}&description=${postTitle}`
    );
  
    linkedinBtn.setAttribute(
      "href",
      `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
    );
  
    whatsappBtn.setAttribute(
      "href",
      `https://wa.me/?text=${postTitle} ${postUrl}`
    );
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