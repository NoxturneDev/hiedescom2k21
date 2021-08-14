// ALL VARIABLES
const submitForm = document.querySelector("form")
const userInputText = document.querySelector(".user-input")
const botsChoice = document.querySelectorAll(".bots")
const chatBox = document.querySelector(".chatbox-window")
const chatHeader = document.querySelector(".chat-name h2")
const botWrapper = document.querySelector(".choose-bot-wrapper")
const botsContainer = document.querySelector(".bots-container")
const yukSinauBtn = document.querySelector(".btn-belajar")
const closeBtn = document.querySelector(".close-btn")
const closeChatBtn = document.querySelector(".close-chat")



botsChoice.forEach(bot => {
    bot.addEventListener("click", () => {
        // !REFACTOR THIS
        if(chatBox.dataset.isActive == "false"){
            botWrapper.classList.add("hidden")
            chatBox.dataset.isActive = "true";
            // chatBox.style.display = "flex";
        }
        
        if (bot.dataset.language == "BHS_JAWA") {
            botBahasaJawa()
        } else if (bot.dataset.language == "BHS_SUNDA") {
            botBahasaSunda()
        }
    })
})


yukSinauBtn.addEventListener("click", () => {
    botsContainer.style.visibility = "visible";
})

closeBtn.addEventListener("click", () => {
    botsContainer.style.visibility = "hidden";
})

closeChatBtn.addEventListener("click", () => {
    chatBox.classList.add("hidden")
    botWrapper.classList.remove("hidden")
    // botWrapper.style.display = "";
    console.log("test")
})
