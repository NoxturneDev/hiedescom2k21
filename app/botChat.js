// ALL VARIABLES
const submitForm = document.querySelector("form")
const userInputText = document.querySelector(".user-input")
const botsChoice = document.querySelectorAll(".bots")
const chatBox = document.querySelector(".chatbox-window")
const chatHeader = document.querySelector(".chat-name h2")

botsChoice.forEach(bot => {
    bot.addEventListener("click", () => {
        bot.parentElement.style.display = "none";
        chatBox.dataset.isActive = "true";
        chatBox.style.display = "flex"

        console.log(bot.dataset.language)
        if (bot.dataset.language == "BHS_JAWA") {
            botBahasaJawa()
            console.log("paijo")
        } else if (bot.dataset.language == "BHS_SUNDA") {
            botBahasaSunda()
            console.log("sukijan")
        }
    })
})


// OBJECTS
// !what is this for lol
let user = {
    name: "string",
    age: 10,
    userReply: true
}

let bot = {
    name: "name",
    codename: "string",
    lang: "string",
    botStatus: true,
    botColor: "green"
}

function createBot(name, code, lang, status, color) {
    bot.name = name;
    bot.codename = code;
    bot.lang = lang;
    bot.status = status;
    bot.color = color;

    return bot;
}

function botBahasaJawa() {
    createBot("Paijo", "BHS_JAWA", "jawa", true, "blue")

    // UBAH NAMA BOT SESUAI
    chatHeader.innerText = bot.name;

    botGreetings(bot.lang)

    submitForm.addEventListener("submit", e => {
        e.preventDefault();
        let userReply = userInputText.value;

        botResponds(userReply, bot.lang)
    })
}

function botBahasaSunda() {
    createBot("Sukijan", "BHS_SUNDA", "sunda", true, "green")

    // UBAH NAMA BOT SESUAI
    chatHeader.innerText = bot.name;
    botGreetings(bot.lang)

    submitForm.addEventListener("submit", e => {
        e.preventDefault();
        let userReply = userInputText.value;

        botResponds(userReply, bot.lang)
    })
}



// MAIN FUNCTION

function renderChatBubble(text, sender) {
    // chat container to append
    const chatContainer = document.querySelector(".chat-innercontainer")

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
        msgContainer.id = "msg-user"
    } else {
        msgContainer.id = "msg-bot"
    }

    const timestampWrapper = document.createElement("article")
    timestampWrapper.classList.add("timestamp")
    const timestampValue = getTimeStamp();
    timestampWrapper.innerText = timestampValue

    chatBubble.innerText = chatText;
    msgContainer.append(chatBubbleWrapper)
    chatBubbleWrapper.appendChild(chatBubble)
    chatBubbleWrapper.appendChild(timestampWrapper)
    chatContainer.appendChild(msgContainer)

    clearInput()
}

function clearInput() {
    userInputText.value = "";
}

function getTimeStamp() {
    const date = new Date()
    const time = date.getHours() + ":" + date.getMinutes()

    return time
}

// AUTOMATION CHAT
function botAutomationChat(text) {
    if (typeof (text) === 'string') {
        renderChatBubble(text, "bot")
    } else {
        for (let i = 0; i <= text.length - 1; i++) {
            setTimeout(() => {
                renderChatBubble(text[i], "bot")
            }, 700 * i)
        }
    }
}

// ATUO DETECT WICH RESPOND
function botResponds(value, lang) {
    // TODO : Pindahkan ini nanti ke object tersendiri yang menamping reg pattern
    const namaRegPattern = /^[Nn]ama/g
    const regExpNama = new RegExp(namaRegPattern);
    const userNamePattern = /^[Nn]ama\w*[A-Za-z]*/g
    const userNamePattern2 = /\w*/g
    const hiPattern = /^[Hh]/g

    if (value.match(hiPattern)) {
        respondGreetings(value, lang)
    } else if (value.match(userNamePattern2 || userNamePattern)) {
        respondPerkenalan(value, lang)
    } else {
        renderChatBubble(value, "user")
        botAutomationChat("Maaf aku tidak tau apa maksudmu", bot)
    }
}

function cekBahasa(lang) {
    if (lang == "jawa") {
        return
    }
}

// BOT RESPOND FUNCTION
function botGreetings(lang) {
    if (lang == "jawa") {
        botAutomationChat(greetings.jawa)
    } else if(lang == "sunda"){
        botAutomationChat(greetings.sunda)  
    }
    userInputText.setAttribute("placeholder", "Say Hello")
}


function respondGreetings(value, lang) {
    if(lang == "jawa"){
        renderChatBubble(value, "user")
        botAutomationChat(perkenalan.jawa, "bot")
    } else if(lang == "sunda"){
        renderChatBubble(value, "user")
        botAutomationChat(perkenalan.sunda, "bot")
    }
    userInputText.setAttribute("placeholder", "Sebutkan Namamu")
}
function respondPerkenalan(value, lang) {
    user.name = value;

    let respond = [`Halo ${user.name}`, "Senang berkenalan dengan mu :D"]
    renderChatBubble(value, "user")
    botAutomationChat(respond, "bot")
}



// TODO export to real project
// TODO add more language


// !BUG
// whenever user type a word that longer than the witdh of the bubble, it goes straigt horizontally. but if its multiple word, it wont go like that
// User chat bubble have different width with the bot bubble, idk why
// User cannot send more than one message without my dumb bot responding



// DUMP CODE
// function getUserReply(){
//     let userReply = userInputText.value;



//     if(userReply.match(hiPattern)) {
//         respondGreetings(userReply)
//     } else if(userReply.match(/w*/g)){
//         respondPerkenalan(userReply)
//     } else {
//         renderChatBubble(userReply, "user")
//         botAutomationChat("Maaf aku tidak tau apa maksudmu", bot)
//     }
// }
// function greetingsArray(lang) {
//     // determined which object is going to be used as the language
//     let greetingText;

//     if (lang == "bahasa") {
//         greetingText = dataBahasa.greetings

//         console.log(greetingText)
//         return greetingText;
//     } else if (lang == "jawa") {
//         greetingText = dataBahasaJawa.greetings

//         console.log(greetingText)
//         return greetingText;
//     }
// }

// // !REFACTOR
// function botRespond(resp){
//     console.log(resp)
//     let respondNama = resp.match(regNamaPattern);
//     let abc = respondNama.find(elem => elem == "nama")

//     if(abc == "nama"){
//         renderChatBubble("dalam bahasa ibrani nama berarti jawdjaowd")
//     }
//     console.log(respondNama)
// }

// function getUserRespond(){
//     let value = userInputText.value;

//     console.log(value)
//     if(user.userReply){
//         botRespond(value)
//     }
// }
// // !REFACTOR THIS
// function botAutomationChat() {
//     let greet = greetings("bahasa")
//     const greetArr = greet.greetings

//     for(let i = 0; i <= greetArr.length - 1; i++){
//         generateChat(i)
//     }
// }

// // !REFACTOR THIS
// function generateChat(delay){
//     let greet = botLanguage("bahasa")
//     const greetArr = greet.greetings
//     setTimeout( () => {
//         renderChatBubble(greetArr[delay], "bot")
//     }, 1000 * delay)

// }

// function greetings() {
//     let greetArr = greetingsArray("bahasa")

//     for (let i = 0; i <= greetArr.length - 1; i++) {
//         botAutomationChat(i)
//     }
// }
