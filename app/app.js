// ALL VARIABLES
// const submitForm = document.querySelector("form")
// const userInputText = document.querySelector(".user-input")
// const botsChoice = document.querySelectorAll(".bots")
// const chatWindow = document.querySelector(".chatbox-window")
// const chatHeader = document.querySelector(".chat-name h2")
// const botWrapper = document.querySelector(".choose-bot-wrapper")
// const botsContainer = document.querySelector(".bots-container")
// const yukSinauBtn = document.querySelector(".btn-belajar")
// const closeBtn = document.querySelector(".close-btn")
// const closeChatBtn = document.querySelector(".close-chat")
// const botChoiceContainerHeader = document.querySelector(".bots-container .header")
// const loader = document.querySelector(".loader-container")
// const body = document.querySelector("body")

// window.addEventListener("load", () => {
//     body.classList.add("no-scroll")
//     window.scrollTo(0, 0)

//     setTimeout(() => {
//         loader.classList.add("wipe-left")
//         body.classList.remove("no-scroll")
//     }, 4000)
// })

// window.addEventListener("scroll", () => {
//     const aboutHeader = document.querySelector("#aboutPage")

//     const rect = aboutHeader.getBoundingClientRect().top;
//     console.log(rect + window.scrollY)
// })

// botsChoice.forEach(bot => {
//     bot.addEventListener("click", () => {
//         if (chatWindow.dataset.hidden == "true") {
//             chatWindow.dataset.hidden = "false"
//         }

//         if (bot.dataset.language == "BHS_JAWA") {
//             botBahasaJawa()
//         } else if (bot.dataset.language == "BHS_SUNDA") {
//             botBahasaSunda()
//         }
//     })
// })



// yukSinauBtn.addEventListener("click", () => {
//     botsContainer.removeAttribute("data-hidden")

//     if (chatWindow.dataset.isActive == "true") {
//         window.scroll
//     }
// })

// closeBtn.addEventListener("click", () => {
//     botsContainer.dataset.hidden = "true";
// })

// closeChatBtn.addEventListener("click", () => {
//     chatWindow.dataset.hidden = "true"
// })

//////////////////////////////////////////////////////////////
// SMOOTH SCROLL EFFECT
//////////////////////////////////////////////////////////////
const navbarLink = document.querySelectorAll(".nav-link a")

function smoothScroll(e) {
    e.preventDefault()
    const targetID = e.currentTarget.getAttribute("href")
    const margin = 100;

    if (targetID === "#mainFeaturePage") {
        window.scrollTo({
            top: document.querySelector(targetID).offsetTop + (2 * margin),
            behavior: "smooth"
        })
    } else {
        window.scrollTo({
            top: document.querySelector(targetID).offsetTop - margin,
            behavior: "smooth"
        })
    }
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
        // ! refactor above so u don't repeat the same funtcion at animateONscrollJS
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


//////////////////////////////////////////////////////////////
// LOADER 
//////////////////////////////////////////////////////////////

// const loader = document.querySelector(".loader-container")

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

    dimensionWrapper.addEventListener("transitionend", ()=> {
        dimensionWrapper.dataset.animation = "none"
    })
}
// !browser alwasy chache the image so it's okay to use src changing
// !FIX ABOVE


//////////////////////////////////////////////////////////////
// OVERLAY PAGES EVENT
//////////////////////////////////////////////////////////////


const btnOverlay = document.querySelectorAll(".button-overlay")
const buttonRedirect = document.querySelectorAll(".button-redirect")
const chatWindowOverlay = document.querySelector(".chat-overlay")
const quizWindowOverlay = document.querySelector(".quiz-overlay")
const closeOverlayBtn = document.querySelectorAll(".close-overlay")
const mascotWrapper = document.querySelector(".feature-wrapper")

btnOverlay.forEach(btn => {
    btn.addEventListener("mouseenter", e => {
        btn.classList.add("wipe-up")
    })

    btn.addEventListener("mouseleave", e => {
        btn.classList.remove("wipe-up")
        btn.classList.add("wipe-up-reverse")
    })

    btn.addEventListener("animationend", () => {
        if (btn.classList.contains("wipe-up-reverse")) {
            btn.classList.remove("wipe-up-reverse")
        }
    })
})


buttonRedirect.forEach(btn => {
    btn.addEventListener("click", (e) => {
        console.log(btn)
        if (btn.id == "redirectBtnChat") {
            chatWindowOverlay.style.transform = "translateX(0)"
            mascotWrapper.style.transform = "translateX(100%)"
            chatWindowOverlay.classList.add("fade-1")
        } else if (btn.id == "redirectBtnQuiz") {
            quizWindowOverlay.style.transform = "translateX(0)"
            mascotWrapper.style.transform = "translateX(-100%)"
            quizWindowOverlay.classList.add("fade-1")
        }


        chatWindowOverlay.addEventListener("animationend", () => {
            chatWindowOverlay.classList.remove("fade-1")
        })
        quizWindowOverlay.addEventListener("animationend", () => {
            quizWindowOverlay.classList.remove("fade-1")
        })


        navbar.style.display = "none"; //!animate this
        mascotWrapper.classList.add("fade-0")


        mascotWrapper.addEventListener("animationend", () => {
            mascotWrapper.classList.remove("fade-0")
        })
        document.body.style.overflow = "hidden";
    })
})

closeOverlayBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if (e.target.id == "closeChatOverlay") {
            chatWindowOverlay.style.transform = "translateX(-100%)"
            chatWindowOverlay.classList.add("fade-0")
        } else {
            quizWindowOverlay.style.transform = "translateX(100%)"
            quizWindowOverlay.classList.add("fade-0")
        }



        chatWindowOverlay.addEventListener("animationend", () => {
            chatWindowOverlay.classList.remove("fade-0")
        })
        quizWindowOverlay.addEventListener("animationend", () => {
            quizWindowOverlay.classList.remove("fade-0")
        })

        mascotWrapper.classList.add("fade-1")
        mascotWrapper.addEventListener("animationend", () => {
            mascotWrapper.classList.remove("fade-1")
        })

        navbar.style.display = ""; //!animate this

        navbar.removeAttribute("data-hidden")
        mascotWrapper.style.transform = "translateX(0)"
        document.body.style.overflow = "";
    })
})
// !REFACTOR THOSE SHIT

// TODO : fix animation, make it better
// TODO : create an efective function for handling animation end or so 
