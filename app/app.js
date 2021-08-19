// ALL VARIABLES
const submitForm = document.querySelector("form")
const userInputText = document.querySelector(".user-input")
const botsChoice = document.querySelectorAll(".bots")
const chatWindow = document.querySelector(".chatbox-window")
const chatHeader = document.querySelector(".chat-name h2")
const botWrapper = document.querySelector(".choose-bot-wrapper")
const botsContainer = document.querySelector(".bots-container")
const yukSinauBtn = document.querySelector(".btn-belajar")
const closeBtn = document.querySelector(".close-btn")
const closeChatBtn = document.querySelector(".close-chat")
const botChoiceContainerHeader = document.querySelector(".bots-container .header")
const loader = document.querySelector(".loader-container")

window.addEventListener("load", () => {
    setTimeout(()=> {
        loader.classList.add("wipe-left")
        loader.classList.add("hidden")
        console.log("anjay")
    },4000)
})


botsChoice.forEach(bot => {
    bot.addEventListener("click", () => {
        if(chatWindow.dataset.hidden == "true"){
            chatWindow.dataset.hidden = "false"
        }
          
        if (bot.dataset.language == "BHS_JAWA") {
            botBahasaJawa()
        } else if (bot.dataset.language == "BHS_SUNDA") {
            botBahasaSunda()
        }
    })
})



yukSinauBtn.addEventListener("click", () => {
    botsContainer.removeAttribute("data-hidden")

    if(chatWindow.dataset.isActive == "true"){
        window.scroll
    }
})

closeBtn.addEventListener("click", () => {
    botsContainer.dataset.hidden = "true";
})

closeChatBtn.addEventListener("click", () => {
    chatWindow.dataset.hidden = "true"
})
