
const openChat = document.getElementById('openChat');
const chatContainer = document.getElementById('chatContainer');
const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');

openChat.addEventListener('click', () => {
  chatContainer.classList.toggle('hidden');
  userInput.focus();
});

userInput.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const message = userInput.value.trim();
    if (message) {
      appendMessage('user', message);
      userInput.value = '';
      setTimeout(() => appendMessage('bot', 'Сайн уу! Би Oyunsanaa. Чамд туслахад бэлэн байна.'), 600);
    }
  }
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = sender;
  msg.textContent = (sender === 'user' ? 'Та: ' : 'Oyunsanaa: ') + text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}
