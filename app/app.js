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
const closeOverlayBtn = document.querySelectorAll(".close-overlay")
const mascotWrapper = document.querySelector(".feature-wrapper")
const navbarTop = document.querySelector(".navbar-top")

btnOverlay.forEach(btn => {
        btn.addEventListener("mouseenter", e => {
            btn.classList.add("wipe-up")
        })
    
        btn.addEventListener("mouseleave", e => {
            btn.classList.remove("wipe-up")
            btn.classList.add("wipe-up-reverse")
        })
    
        btn.addEventListener("animationend", () => {
            if(btn.classList.contains("wipe-up-reverse")){
                btn.classList.remove("wipe-up-reverse")
            }
        })
})


buttonRedirect.forEach(btn => {
    btn.addEventListener("click", (e)=> {
        console.log(btn)
        if(btn.id == "redirectBtnChat"){
            chatWindowOverlay.style.transform = "translateX(0)"
            mascotWrapper.style.transform = "translateX(100%)"
            chatWindowOverlay.classList.add("fade-1")
        } else if (btn.id == "redirectBtnQuiz") {
            quizWindowOverlay.style.transform = "translateX(0)"
            mascotWrapper.style.transform = "translateX(-100%)"
            quizWindowOverlay.classList.add("fade-1")
        }

      
        chatWindowOverlay.addEventListener("animationend", ()=>{
            chatWindowOverlay.classList.remove("fade-1")
        })
        quizWindowOverlay.addEventListener("animationend", ()=>{
            quizWindowOverlay.classList.remove("fade-1")
        })


        navbar.style.display = "none";
        mascotWrapper.classList.add("fade-0")


        mascotWrapper.addEventListener("animationend", ()=> {
            mascotWrapper.classList.remove("fade-0")
        })
        document.body.style.overflow = "hidden";
    })
})

closeOverlayBtn.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.target.id == "closeChatOverlay"){
            chatWindowOverlay.style.transform = "translateX(-100%)"
            chatWindowOverlay.classList.add("fade-0")
        } else {
            quizWindowOverlay.style.transform = "translateX(100%)"
            quizWindowOverlay.classList.add("fade-0")
        }

     

        chatWindowOverlay.addEventListener("animationend", ()=>{
            chatWindowOverlay.classList.remove("fade-0")
        })
        quizWindowOverlay.addEventListener("animationend", ()=>{
            quizWindowOverlay.classList.remove("fade-0")
        })

        mascotWrapper.classList.add("fade-1")
        mascotWrapper.addEventListener("animationend", ()=> {
            mascotWrapper.classList.remove("fade-1")
        })

        navbar.style.display = "";

        navbar.removeAttribute("data-hidden")
        mascotWrapper.style.transform = "translateX(0)"
        document.body.style.overflow = "";
    })
})


// TODO : fix animation, make it better