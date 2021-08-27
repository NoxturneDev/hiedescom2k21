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

//////////////////////////////////////////////////////////////
// OVERLAY PAGES EVENT
//////////////////////////////////////////////////////////////


const btnOverlay = document.querySelectorAll(".button-overlay")
const buttonRedirect = document.querySelectorAll(".button-redirect")
const chatWindowOverlay = document.querySelector(".chat-overlay")
const quizWindowOverlay = document.querySelector(".quiz-overlay")
const quitOverlayBtn = document.querySelector("#quitBtn")

btnOverlay.forEach(btn => {
    const redirectBtn = btn.childNodes[1]
    const parentElement = btn.parentElement;

    btn.addEventListener("mouseenter", e => {
        redirectBtn.id = "wipe-up-and-stop"
        
    })

    btn.addEventListener("mouseleave", e => {
        const redirectBtn = e.target.childNodes[1]

        redirectBtn.removeAttribute("id")
        redirectBtn.classList.add("wipe-up-reverse")
    })

    redirectBtn.addEventListener("animationend", () => {
        if(redirectBtn.classList.contains("wipe-up-reverse")){
            redirectBtn.classList.remove("wipe-up-reverse")
        }
    })

    // !REFACTOR DON'T USE ID
})

buttonRedirect.forEach(btn => {
    btn.addEventListener("click", (e)=> {
        if(btn.dataset.btnId = "redirectBtnChat"){
            chatWindowOverlay.style.transform = "translateX(0)"
            document.body.style.overflow = "hidden";
            console.log(btn.dataset.btnId)
        }

        // } else if(btn.dataset.btnId = "redirectBtnQuiz"){
        //     document.body.style.overflow = "hidden";
        //     quizWindowOverlay.style.transform = "translateX(0)"
        //     console.log(btn.dataset.btnId)
        // }
    })
})

quitOverlayBtn.addEventListener("click", ()=> {
    // quizWindowOverlay.style.transform = "translateX(100%)"
    chatWindowOverlay.style.transform = "translateX(-100%)"
    document.body.style.overflow = "";
    console.log("test")
})

// !FIX QUIT BUTTON
// !FIX ID PLACEMENT