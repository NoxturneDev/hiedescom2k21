// ALL VARIABLES
const submitForm = document.querySelector("form")
const userInputText = document.querySelector(".user-input")
const chatBox = document.querySelector(".chatbox-window")
const chatHeader = document.querySelector(".chat-name h2")
const chatContainer = document.querySelector(".chat-innercontainer")


const redirectToChatBtn = document.querySelector("#redirectBtnChat")

// SESSION STORAGE TO STROE INFORMATION
const CHAT_OPENED_STATUS_KEY = "openedStatus"
const USER_IDENTITY_KEY = "userIdentity" //this is an object

let user = {
    name: "string",
    age: 10,
    favColor: "red",
}

window.addEventListener("load", () => {
    // clear session storage
    const status = sessionStorage.getItem(CHAT_OPENED_STATUS_KEY)

    if (status) {
        clearSessionStorage();
    }
})

redirectToChatBtn.addEventListener("click", () => {
    const status = checkOpenedStatus()

    if (!status) {
        botGreetings();
    }

    setOpenedStatus();
})

function setOpenedStatus() {
    sessionStorage.setItem(CHAT_OPENED_STATUS_KEY, true)
}

function clearSessionStorage() {
    sessionStorage.removeItem(CHAT_OPENED_STATUS_KEY)
}

function checkOpenedStatus() {
    const status = sessionStorage.getItem(CHAT_OPENED_STATUS_KEY)

    return status
}

submitForm.addEventListener("submit", e => {
    const popUp = document.querySelector(".pop-up")
    e.preventDefault();
    let userReply = userInputText.value;

    renderChatBubble(userReply, "user")
    getBotRespond(userReply)

    popUp.style.display = "none"
})


let bot = {
    name: "name",
    codename: "string",
    lang: "string",
    botStatus: true,
    botColor: "green"
}


// FUNCTION TO CREATE THE BOT
function createBot(name, code, lang, status, color) {
    bot.name = name;
    bot.codename = code;
    bot.lang = lang;
    bot.status = status;
    bot.color = color;

    return bot;
}

// BOT BAHASA JAWA CREATION
function botBahasaJawa() {
    const OBJ_BOT_BHS_JAWA = createBot("Paijo", "BHS_JAWA", "jawa", true, "blue")

    // UBAH NAMA BOT SESUAI
    chatHeader.innerText = OBJ_BOT_BHS_JAWA.name;
}

// OBJECT CONTAINING EMOJI'S INTENT CODE
const emojiIntentCode = {
    EMO_YES: "emoji-yes",
    EMO_OKAY: "emoji-okay",
    EMO_NO: "emoji-no",
    EMO_GETIT: "emoji-get-it",
    EMO_NOTGETIT: "emoji-not-get-it",
    EMO_HALO: "emoji-hello",
    EMO_HI: "emoji-hi",
    EMO_ASHIAP: "emoji-ashiap",
    EMO_THANKS: "emoji-thanks",
}

// OBJECT CONTAINING EMOJI SOURCE
const emojiSource = {
    EMO_OKAY: "assets/emoji/okay.png",
    EMO_NO: "assets/emoji/emoji-no.png",
    EMO_GETIT: "assets/emoji/emoji-yes.png",
    EMO_NOTGETIT: "assets/emoji/emoji-yes.png",
    EMO_HALO: "assets/emoji/halo.png",
    EMO_HI: "assets/emoji/halo.png",
    EMO_ASHIAP: "assets/emoji/ashiap.png",
    EMO_THANKS: "assets/emoji/emoji-yes.png"
}


const emoji = document.querySelectorAll(".emoji")
const emojiContainer = document.querySelector(".input-form-emoji")

const emoji1 = document.querySelector(".emoji-1")
const emoji2 = document.querySelector(".emoji-2")


emoji.forEach(emoji => {
    const emojiImage = emoji.querySelector("img")
    emoji.addEventListener("click", (e) => {
        const emojiSource = emojiImage.getAttribute('src')
        const emojiMeaning = e.target.dataset.emojiMeaning

        // depends on the meaning of the emoji, the bot will respond it 
        botRespondEmoji(emojiMeaning)
        // render it on innerchat container
        renderEmoji(emojiSource, "user")
        disableEmoji()
        console.log(emojiMeaning)
    })
})



// FUNCTION TO CREATE THE EMOJI ON CHAT WINDOW
function createEmojiElement(emojiIntent, emoji2Intent, emojiSrc, emoji2Src) {
    emoji1.setAttribute("src", emojiSrc)
    emoji1.dataset.emojiMeaning = emojiIntent

    emoji2.setAttribute("src", emoji2Src)
    emoji2.dataset.emojiMeaning = emoji2Intent

    // datasetnya jangan di image tapi di container
}


// ENABLING EMOJIS CHOICE
// DISABLING EMOJIS CHOCIE
function enableEmoji() {
    const chatContainer = document.querySelector(".chat-text-container")
    emojiContainer.style.display = "flex"
    chatContainer.scrollTop = chatContainer.scrollHeight;
};


function disableEmoji() {
    emojiContainer.style.display = "none"
}


// FUNCTION FOR BOT TO RESPOND THE EMOJI DEPENS ON THE MEANING
function botRespondEmoji(emojiMeaning) {
    if (emojiIntent.greetingsResp.includes(emojiMeaning)) {
        botIntro()
    } else if (emojiIntent.introResp.includes(emojiMeaning)) {
        askNama()
    } else if (emojiIntent.getIt.includes(emojiMeaning)) {
        explainPerkenalan()
    } else if (emojiIntent.notGetIt.includes(emojiMeaning)) {
        botAutomationChat(dialogFlow.userIntro)
    } else if (emojiIntent.okay.includes(emojiMeaning)) {
        explainPerkenalan()
    } else {
        return 
    }
    // add more emoji
}

// GET BOT RESPOND FOR EACH INTENT
function getBotRespond(txt) {
    const userIntent = getUserIntent(txt)

    console.log(userIntent)
    if (userIntent == "greet") {
        botIntro()
    } else if (userIntent == "respGreet") {
        botIntro()
    } else if (userIntent == "nama") { // dialog flow setelah intent nama adalah umur
        askAge()
    } else if (userIntent == "umur") {
        askColor()
    } else if (userIntent == "warna") {
        preExplain()
    } else {
        botAutomationChat("kulo nda paham maksud e sampean")
    }

    // !create separate function for separate respond
}

// GETTING USER REAL INTENT BASED ON THEIR REPLY
function getUserIntent(userRespond) {
    const inputFold = caseFolding(userRespond)
    const words = [...inputFold]
    let intent // user real intent

    userIntentDefining = words.filter(word => {
        if (userIntent.introductionName.includes(word)) {
            intent = "nama"
            return intent
        } else if (userIntent.introductionAge.includes(word)) {
            intent = "umur"
            return intent
        } else if (userIntent.introductionColor.includes(word)) {
            intent = "warna"
            return intent
        } else if (userIntent.respGreetings.includes(word)) {
            intent = "respGreet"
            return intent
        }

    })
    return intent
}


// BOT DIALOG FLOW FUNCTION (AUTOMATION)
function botGreetings() {
    let automate = botAutomationChat(dialogFlow.greetings)
    setTimeout(() => {
        emojiGreeting()

    }, automate + 700)
}

function botIntro() {
    let automate = botAutomationChat(dialogFlow.botIntro)
    setTimeout(() => {
        emojiIntro()
    }, automate + 700)
}

function askNama() {
    let automate = botAutomationChat(dialogFlow.userName)
    setTimeout(() => {
        popUpGuide("Awali dengan Nama saya/aku")
    }, automate + 500)

}

function askAge(){
    let automate = botAutomationChat(dialogFlow.userAge)
    setTimeout(() => {
        popUpGuide("Cth: 17 Tahun")
    }, automate + 500)
}
function askColor(){
    let automate = botAutomationChat(dialogFlow.userColor)

    setTimeout(() => {
        popUpGuide("Cth: warna merah")
    }, automate + 500)
}

function preExplain(){
    renderEmoji(emojiSource.EMO_ASHIAP, "bot")

    let automate = botAutomationChat(dialogFlow.explain1)  
    setTimeout(() => {
        emojiPreExplain()
    }, automate + 700)
}

function explainPerkenalan(){
    let automate = botAutomationChat(dialogFlow.explain1)  
    setTimeout(() => {
        emojiExplain1()
    }, automate + 700)
}


function explainGreetings(){}
function explainBasicVerbs(){}
function closing(){}

function popUpGuide(txt){
    const popUp = document.querySelector(".input-form .pop-up")
    popUp.innerText = txt;

    popUp.style.display = "block"
    popUp.style.animation = "popUp 4s linear"

    popUp.addEventListener("animationend", () => {
        popUp.style.display = "none"
    })
}

// EMOJI FOR GREETING FLOW
function emojiGreeting() {
    const emojiGreets = createEmojiElement(
        emojiIntentCode.EMO_HALO,
        emojiIntentCode.EMO_HI,
        emojiSource.EMO_HALO,
        emojiSource.EMO_HI)
    enableEmoji()
}

function emojiIntro() {
    const emojiIntro = createEmojiElement(
        emojiIntentCode.EMO_ASHIAP,
        emojiIntentCode.EMO_ASHIAP,
        emojiSource.EMO_ASHIAP,
        emojiSource.EMO_OKAY)
    enableEmoji()
}

function emojiPreExplain(){
    const emoji = createEmojiElement(
        emojiIntentCode.EMO_OKAY,
        emojiIntentCode.EMO_OKAY,
        emojiSource.EMO_OKAY,
        emojiSource.EMO_ASHIAP)
    enableEmoji()
}

function emojiExplain1(){
    const emojiExplain1 = createEmojiElement(
        emojiIntentCode.EMO_OKAY,
        emojiIntentCode.EMO_NOTGETIT,
        emojiSource.EMO_OKAY,
        emojiSource.EMO_NOTGETIT)
    enableEmoji()
}
// REG PATTERN FOR MATCHING EACH INTENTION
const regPattern = {
    userNamePattern2: /\w*/g,
    hiPattern: /^[Hh]/g,
    agePattern: /\d+/
}







// FOLDING UNNECESSARY CHARACTER 
function caseFolding(toFold) {
    const caseFoldingPattern = /\w+/g

    const caseFoldPattern = new RegExp(caseFoldingPattern)

    // lower case the input
    const textLowerCase = toFold.toLowerCase()

    // get one by one word of the string and convert to an array
    return textLowerCase.match(caseFoldPattern);
}


function filteringInput(input) {
    const caseFold = caseFolding(input)
    const inputSpread = [...caseFold]
    return inputSpread.filter(inputs => {
        // filter the input so it's only important words left
        return !(stopWordsID.includes(inputs))
    })
}

function userInputFinal(value) {
    // value that already filtered and trimmed 
    let userRealValue = filteringInput(value)

    console.log(userRealValue)
    return userRealValue;
}

// RENDER THE CHAT IN TEXT CONTAINER
function renderChatBubble(text, sender) {
    // chat container to append
    const chatContainer = document.querySelector(".chat-text-container")
    const msgContainer = document.createElement("article")
    msgContainer.classList.add("msg-container")

    // chat bubbles wrapper
    const chatBubbleWrapper = document.createElement("div")
    chatBubbleWrapper.classList.add("msg-bubble")

    // chat bubbles
    const chatBubble = document.createElement("p")
    chatBubble.classList.add("msg-text")
    const chatText = text;

    if (sender == "user") {
        msgContainer.id = "userChat"
    } else {
        msgContainer.id = "botChat"
    }

    const timestampWrapper = document.createElement("article")
    timestampWrapper.classList.add("timestamp")
    const timestampValue = getTimeStamp();
    timestampWrapper.innerText = timestampValue

    chatBubble.innerText = chatText;
    msgContainer.append(chatBubbleWrapper)
    chatBubbleWrapper.appendChild(chatBubble)
    msgContainer.appendChild(timestampWrapper)
    chatContainer.appendChild(msgContainer)

    clearInput()

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

// RENDER EMOJI IN TEXT CONTAINER

function renderEmoji(sourceImage, sender) {
    const chatContainer = document.querySelector(".chat-text-container")

    const msgContainer = document.createElement("article")
    msgContainer.classList.add("msg-container")

    // chat bubbles wrapper
    const chatBubbleWrapper = document.createElement("div")
    chatBubbleWrapper.classList.add("msg-bubble")


    // chat bubbles
    const emojiBubble = document.createElement("img")
    emojiBubble.setAttribute("src", sourceImage)
    emojiBubble.classList.add("emoji-on-chat")

    if (sender == "user") {
        msgContainer.id = "userChat"
    } else {
        msgContainer.id = "userBot"
    }

    const timestampWrapper = document.createElement("article")
    timestampWrapper.classList.add("timestamp")
    const timestampValue = getTimeStamp();
    timestampWrapper.innerText = timestampValue

    msgContainer.append(chatBubbleWrapper)
    msgContainer.appendChild(timestampWrapper)
    chatBubbleWrapper.appendChild(emojiBubble)
    chatContainer.appendChild(msgContainer)

    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function clearInput() {
    userInputText.value = "";
}

function getTimeStamp() {
    const date = new Date()
    const time = date.getHours() + ":" + date.getMinutes()

    return time
}

// AUTOMATICALLY RENDER CHAT FOR BOTS RESPOND
function botAutomationChat(text) {
    let duration = 850
    let totalDuration = 0;
    let index = 0;

    if (typeof (text) === 'string') {
        renderChatBubble(text, "bot")
    } else {
        for (let i = 0; i <= text.length - 1; i++) {
            setTimeout(() => {
                renderChatBubble(text[i], "bot")
            }, duration * i)

            index = i;
        }
    }

    return totalDuration += duration * index
}