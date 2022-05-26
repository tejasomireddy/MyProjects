let chatbotMsgList = ["Hi", "Hey", "Good Morning", "Good Evening", "How can I help you?", "Thank You"];

let chatContainerEl = document.getElementById("chatContainer");
let userInputEl = document.getElementById("userInput");

let sendMsgBtnEl = document.getElementById("sendMsgBtn");

function sendMsgTochatbot() {
    let userInput = userInputEl.value;

    let msgtoContainerEl = document.createElement("div");
    msgtoContainerEl.classList.add("msg-to-chatbot-container");
    chatContainerEl.appendChild(msgtoContainerEl);

    let msgtochatbot = document.createElement("span");
    msgtochatbot.classList.add("msg-to-chatbot");
    msgtochatbot.textContent = userInput;
    msgtoContainerEl.appendChild(msgtochatbot);

    getMsgfromChatbot();
}

function getMsgfromChatbot() {
    let nochatbotMsgList = chatbotMsgList.length;
    let chatbotmsg = chatbotMsgList[Math.ceil(Math.random() * nochatbotMsgList) - 1];

    let msgfromContainerEl = document.createElement("div");
    msgfromContainerEl.classList.add("msg-from-chatbot-container");
    chatContainerEl.appendChild(msgfromContainerEl);

    let msgfromchatbot = document.createElement("span");
    msgfromchatbot.classList.add("msg-from-chatbot");
    msgfromchatbot.textContent = chatbotmsg;
    msgfromContainerEl.appendChild(msgfromchatbot);
}