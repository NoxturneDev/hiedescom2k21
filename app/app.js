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
const navbarTop = document.querySelector(".navbar-top")
const navbarLink = document.querySelectorAll(".nav-link")
const aboutPage = document.querySelector(".about-page")
const landingPage = document.querySelector(".landing-page")
const mainFeaturePage = document.querySelector(".main-feature-page")
const fyiPageRedirect = document.querySelector(".about-four")
// let aboutPageCoord = aboutPage.getBoundingClientRect();
const aboutPageCoord =  getElementCoords(aboutPage);


const elemTargetCoord = {
    landingPage : getElementCoords(landingPage).top - 50,
    aboutPage : getElementCoords(aboutPage).top - 25,
    fyiPage : getElementCoords(fyiPageRedirect).top - 50,
    featurePage : getElementCoords(mainFeaturePage).top - 50
}

navbarLink.forEach(link => {
    link.addEventListener("click", (e)=> {
        if(link.innerText == "Home"){
            window.scrollTo(0, elemTargetCoord.landingPage)
        } else if(link.innerText == "About"){
            window.scrollTo(0, elemTargetCoord.landingPage)
            console.log(elemTargetCoord.aboutPage)
        } else if(link.innerText == "FYI FACTS"){
            window.scrollTo(0, elemTargetCoord.aboutPage)
            console.log(elemTargetCoord.fyiPage)
        }else if(link.classList.contains("btn-redirect-feature")){
            window.scrollTo(0, elemTargetCoord.featurePage)
            console.log(elemTargetCoord.featurePage)

        }
    })
})

function getElementCoords(element){
    const elementBounding = element.getBoundingClientRect();
    const elementCoord = {
        top : elementBounding.height,
        left : elementBounding.left,
        right : elementBounding.right,
        bottom : elementBounding.bottom
    }

    console.log(elementBounding.height)
    return elementCoord;
    // !FIX, THE TOP IS ACTUALLY RELATIVE, jadi kalo user abis klik about sebelumnya, topnya akan 0 dari about. make it alwasy relative to window.top
}

const loader = document.querySelector(".loader-container")

window.addEventListener("load", ()=> {
    // disable scroll
    document.body.style.overflow = "hidden";

    setTimeout(()=> {
        loader.classList.add("sliding")
        loader.style.transform = "translateX(-100%)"
        document.body.style.overflow = "";
    }, 3000)
  
    // loader.addEventListener("animationend", ()=> {
    //     loader.classList.remove("wipe-right")
    // })
    // DEFAULT SCROLL SO USER ALWAYS ON TOP
})


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
