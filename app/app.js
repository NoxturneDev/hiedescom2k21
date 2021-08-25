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

// INTERSECT OBSERVER TARGET 
const navbar = document.querySelector(".navbar-top")
const navbarIntersectTarget = document.querySelector(".landing-page-content")
const logoNavbar = document.querySelector(".logo-navbar")
const about = document.querySelectorAll(".about")

// INTERSECT OBSERVER OPTIONS FOR EACH TARGET
let navbarObserverOption = {
    root: document.querySelector("navbar"),
    rootMargin: "200px",
}

let aboutObserverOption = {
    root: document.querySelector("navbar"),
    rootMargin: "200px",
    threshold : 0.6
}

// ANIMATE ON SCROLL EVENT
const observerNav = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            navbar.classList.add("navbar-top-scrolled")
            logoNavbar.src = "./assets/icon/logo in navbar v1.svg"
        } else {
            navbar.classList.remove("navbar-top-scrolled")
            logoNavbar.src = "./assets/icon/logo in navbar v2.svg"
        }
    })
}, navbarObserverOption)

const observerAbout = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            if (entry.target.dataset.animation == "fade-left") {
                entry.target.classList.add("wipe-left");
                console.log("invoked")

                entry.target.addEventListener("animationend", () => {
                    entry.target.classList.remove("wipe-left");
                })
            }
            else if (entry.target.dataset.animation == "fade-right") {
                entry.target.classList.add("wipe-right");
                console.log("invoked right")
                entry.target.addEventListener("animationend", () => {
                    entry.target.classList.remove("wipe-right");
                })
            }

            observerAbout.unobserve(entry.target)
        }
    })
}, aboutObserverOption)

about.forEach(abouts => {
    observerAbout.observe(abouts)
})

observerNav.observe(navbarIntersectTarget)


const chatRedirectImg = document.querySelector("#chatRedirect img")


// chatRedirectImg.addEventListener("mouseenter", () => {
//     // chatRedirectImg.setAttribute.src = "../assets/animation/Nau-jump-on-hover.gif"
//     setTimeout(()=> {
//         chatRedirectImg.setAttribute("src", "./assets/animation/Nau-jump-on-hover.gif")
//     }, 250)
//     console.log("mouse enter")
// })

// chatRedirectImg.addEventListener("mouseleave", () => {
//     setTimeout(()=> {
//         chatRedirectImg.setAttribute("src", "./assets/animation/Nau-jump-on-hover-reverse.gif")
//     }, 250)
//     console.log("mouse leave")

// })

