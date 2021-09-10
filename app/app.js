//////////////////////////////////////////////////////////////
// SMOOTH SCROLL EFFECT
//////////////////////////////////////////////////////////////
const navbarLink = document.querySelectorAll(".nav-link a")

function smoothScroll(e) {
    e.preventDefault()
    const targetID = e.currentTarget.getAttribute("href")
    const margin = 200;

    if (targetID === "#mainFeaturePage") {
        window.scrollTo({
            top: document.querySelector(targetID).offsetTop,
            behavior: "smooth"
        })
    } else {
        window.scrollTo({
            top: document.querySelector(targetID).offsetTop - margin,
            behavior: "smooth"
        })
    }

    console.log(navbarLink)
    console.log(targetID)
    console.log(document.querySelector(targetID).offsetTop)
}

//////////////////////////////////////////////////////////////
// ON PHONE NAVBAR
//////////////////////////////////////////////////////////////
const navToggleIcon = document.querySelectorAll(".nav-toggle-icon span")
const navbarContainer = document.querySelector(".nav-list-container")
const closeNavIcon = document.querySelector("#close-nav")

navbarLink.forEach(link => {
    link.addEventListener("click", smoothScroll)


    link.addEventListener("click", () => {
        const mediaQuery = window.matchMedia("(max-width: 768px)")
        mediaQuery.addListener(navViewport)
        navViewport(mediaQuery, link)
    })

})

function navViewport(e, link) {
    if (e.matches) {
        navToggle(link)
    } else {

        // if window is in dekstop, reset to default desktop style
        navbarContainer.style.transform = "translateX(0)"
        navbarContainer.style.transition = "none"
    }
}


navToggleIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        navToggle()
    })
})


function navToggle() {
    let toggleStatus = navbarContainer.dataset.toggle

    // add smooth transition
    navbarContainer.style.transition = "transform 1s ease-in-out"

    if (toggleStatus == "false") {
        navbarContainer.style.transform = "translateX(0)"
        navbarContainer.dataset.toggle = "true"
    } else {
        navbarContainer.dataset.toggle = "false"
        navbarContainer.style.transform = "translateX(-150%)"
    }
}


// SHARE FEATURE
window.addEventListener("load", () => {
    initializeShare()
})
const shareData = {
    title: "Halo, kamu bisa belajar bahasa jawa menggunakan BOT Chat kami lho",
    url: window.location.href,
    text: "Apakah kamu tertarik? kalo kamu tertarik, kamu bisa kunjungi link tersebut"
}

const shareBtn = document.querySelectorAll(".share-icon .share")

// adding link to the share button
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

//////////////////////////////////////////////////////////////
// LOADER 
//////////////////////////////////////////////////////////////

const loader = document.querySelector(".loader-container")

// window.addEventListener("load", ()=> {
//     // disable scroll
//     document.body.style.overflow = "hidden";

//     setTimeout(()=> {
//         loader.classList.add("sliding")
//         loader.style.transform = "translateX(-100%)"
//         document.body.style.overflow = "";
//     }, 3000)

//     // loader.addEventListener("animationend", ()=> {
//     //     loader.classList.remove("wipe-right")
//     // })
//     // DEFAULT SCROLL SO USER ALWAYS ON TOP
// })


//////////////////////////////////////////////////////////////
// FEATURE 3D DIMENSION 
//////////////////////////////////////////////////////////////
const dimensionWrapper = document.querySelector(".dimension-wrapper")
const featureOn3D = Array.from(document.querySelectorAll(".container-dimension"))
const btnRedirect = document.querySelectorAll(".container-dimension .btn-rotate")

featureOn3D.forEach((feature, index) => {
    feature.style.transform = `rotateY(${index * 90}deg) translateZ(${window.innerWidth + 200}px)`
})


console.log(featureOn3D)

btnRedirect.forEach(btn => {
    btn.addEventListener("click", () => {
        btnRotate(btn)
    })
})

function btnRotate(btn) {
    const btnId = btn.id
    if (btnId == "toChat") {
        console.log("ke kuis")
        dimensionWrapper.style.transform = "rotateY(90deg)"
        dimensionWrapper.dataset.animation = "rotate"

    } else if (btnId == "toQuizWrapper") {
        console.log("ke kuis")
        dimensionWrapper.style.transform = "rotateY(-90deg)"
        dimensionWrapper.dataset.animation = "rotate"
    } else if (btnId == "toQuiz") {
        dimensionWrapper.style.transform = "rotateY(-180deg)"
        dimensionWrapper.dataset.animation = "rotate"
    } else if (btnId == "toChatWrapper") {
        console.log("ke kuis")
        dimensionWrapper.style.transform = "rotateY(0)"
        dimensionWrapper.dataset.animation = "rotate"
    }

    dimensionWrapper.addEventListener("transitionend", () => {
        dimensionWrapper.dataset.animation = "none"
    })
}



//////////////////////////////////////////////////////////////
// OVERLAY MAIN FEATURE PAGES EVENT
//////////////////////////////////////////////////////////////

const btnOverlay = document.querySelector(".button-overlay")
const buttonRedirect = document.querySelector(".button-redirect")
const chatWindowOverlay = document.querySelector(".chat-overlay")
const closeOverlayBtn = document.querySelectorAll(".close-overlay")
const mascotWrapper = document.querySelector(".feature-wrapper")
const closeChat = document.querySelector("#closeChatOverlay")


const cekMediaQuery = () => {
    const mediaQuery = window.matchMedia("(min-width: 768px)")
    if (mediaQuery.matches) {
        btnOverlay.addEventListener("mouseenter", e => {
            btnOverlay.classList.add("wipe-up")
        })

        btnOverlay.addEventListener("mouseleave", e => {
            btnOverlay.classList.remove("wipe-up")
            btnOverlay.classList.add("wipe-up-reverse")
        })

        btnOverlay.addEventListener("animationend", () => {
            if (btnOverlay.classList.contains("wipe-up-reverse")) {
                btnOverlay.classList.remove("wipe-up-reverse")
            }
        })
    }
}

cekMediaQuery()

// EVENT LISTENER
buttonRedirect.addEventListener("click", ()=> {
    btnOverlayEvent(buttonRedirect)
})

closeChat.addEventListener("click", (e) => {
    closeBtn(e.target)
})

function btnOverlayEvent(btn) {
    if (btn.id == "redirectBtnChat") {
        chatWindowOverlay.style.transform = "translateX(0)"
        mascotWrapper.style.transform = "translateX(100%)"
        chatWindowOverlay.classList.add("fade-1")
    } 

    navbar.style.display = "none"; 

    mascotWrapper.classList.add("fade-0")

    // WHEN ANIMATION END
    mascotWrapper.addEventListener("animationend", () => {
        mascotWrapper.classList.remove("fade-0")
    })

    chatWindowOverlay.addEventListener("animationend", () => {
        chatWindowOverlay.classList.remove("fade-1")
    })

    document.body.style.overflow = "hidden";
}

function closeBtn(e) {
    if (e.id == "closeChatOverlay" || "closeChat") {
        chatWindowOverlay.style.transform = "translateX(-100%)"
        chatWindowOverlay.classList.add("fade-0")
    }

    chatWindowOverlay.addEventListener("animationend", () => {
        chatWindowOverlay.classList.remove("fade-0")
    })

    mascotWrapper.classList.add("fade-1")
    mascotWrapper.addEventListener("animationend", () => {
        mascotWrapper.classList.remove("fade-1")
    })

    navbar.style.display = ""; //!animate this

    navbar.removeAttribute("data-hidden")
    mascotWrapper.style.transform = "translateX(0)"
    document.body.style.overflow = "";
}

// TODO : fix animation, make it better
// TODO : create an efective function for handling animation end or so 
