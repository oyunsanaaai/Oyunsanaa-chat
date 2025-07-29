
const chatToggle = document.getElementById("chat-toggle");
const chatContainer = document.getElementById("chat-container");
const closeChat = document.getElementById("close-chat");
const minimizeChat = document.getElementById("minimize-chat");
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("userInput");
const sendButton = document.getElementById("sendButton");

chatToggle.onclick = () => {
  chatContainer.classList.remove("hidden");
};

closeChat.onclick = () => {
  chatContainer.classList.add("hidden");
};

minimizeChat.onclick = () => {
  chatContainer.classList.add("hidden");
};

sendButton.onclick = sendMessage;
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const text = userInput.value.trim();
  if (text) {
    appendMessage("user", text);
    userInput.value = "";
    setTimeout(() => {
      appendMessage("bot", "...");
    }, 500);
  }
}

function appendMessage(sender, text) {
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", sender);
  messageDiv.textContent = text;
  chatbox.appendChild(messageDiv);
  chatbox.scrollTop = chatbox.scrollHeight;
}
