// FAUX API FOR MESSAGES 

const messageDisplayScreen = document.querySelector(".screen-buffer");

const messages = [
    {
        "message" : "Lol I miss you"
    },
    {
        "message" : "When are we getting marriedππ"
    },
    {
        "message" : "Here's your little easter egg"
    },
    {
        "message" : "I wuv you β€οΈβ€οΈβ€οΈπππππ"
    }, 
    {
        "message" : "I rule the world"
    }
]

const displayMessage = () => {
    index = Math.floor(Math.random() * messages.length);
    message = messages[index];
    messageContent = message.message;
    messageDisplayScreen.textContent = messageContent;
    if(!messageDisplayScreen.className.includes("message-display")) {
        messageDisplayScreen.classList.toggle("message-display");
    }
}