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

function smoothScroll(e){  
    e.preventDefault()
    const targetID = e.currentTarget.getAttribute("href")
    const margin = 100;

    if(targetID === "#mainFeaturePage") {
        window.scrollTo({
           top: document.querySelector(targetID).offsetTop + (2* margin),
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
const navToggleIcon = document.querySelectorAll(".hamburger-icon img")
const navbarContainer = document.querySelector(".nav-list-container")
const closeNavIcon = document.querySelector("#close-nav")
navbarLink.forEach(link => {
    link.addEventListener("click", smoothScroll)

   
    link.addEventListener("click", ()=> {
        const mediaQuery = window.matchMedia("(max-width: 768px)")
// ! refactor above so u don't repeat the same funtcion at animateONscrollJS
        mediaQuery.addListener(navViewport)
        navViewport(mediaQuery, link)
    })
    
})

function navViewport(e, link){
    if(e.matches){
        navToggle(link)
        console.log("navphone")
        console.log(link)
    } else {
        navbar.style.transform = "translateX(0)"
    }
}


navToggleIcon.forEach(icon => {
    icon.addEventListener("click", () => {
        navToggle(icon)
    })
})


function navToggle(icon){
    if(icon.getAttribute("id") === "toggle-nav"){
        navbarContainer.style.transform = "translateX(0)"
        closeNavIcon.style.display = "block"
    } else if (icon.getAttribute("id") === "close-nav") {
        navbarContainer.style.transform = "translateX(-150%)"
    } else {
        navbarContainer.style.transform = "translateX(-150%)"
    }

    icon.addEventListener("transitionend", () => {
        closeNavIcon.style.display = ""
    })
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


const featuresImg = document.querySelectorAll(".feature-redirect-img")

// featuresImg.forEach(img => {
//     if(img.classList.contains("chat-redirect")){
//         img.addEventListener("mouseenter", () => {
//             // chatRedirectImg.setAttribute.src = "../assets/animation/Nau-jump-on-hover.gif"
//             // img.style.background = "url("../assets/animation/Nau-jump-on-hover.gif")
//             // setTimeout(()=> {
                
//             // }, 250)
//             console.log("mouse enter")
//             console.log(img)
//         })
//     } else {
//         img.addEventListener("mouseleave", () => {
//             img.setAttribute("src", "../assets/animation/Nau-jump-on-hover-reverse.gif")
//             // setTimeout(()=> {
                
//             // }, 250)
//             console.log("mouse leave")
//         })
//     }
// })

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


        navbar.style.display = "none"; //!animate this
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

        navbar.style.display = ""; //!animate this

        navbar.removeAttribute("data-hidden")
        mascotWrapper.style.transform = "translateX(0)"
        document.body.style.overflow = "";
    })
})


// TODO : fix animation, make it better
// TODO : create an efective function for handling animation end or so 
