const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.className = 'message ' + sender;
  msg.innerText = (sender === 'user' ? 'Та: ' : 'Oyunsanaa: ') + text;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {
  let response = 'Ойлголоо!';
  const lower = input.toLowerCase();
  if (lower.includes('сайн')) response = 'Сайн байна уу!';
  else if (lower.includes('гутрал')) response = 'Гутрал мэдрэгдэж байна уу? Би тусалж чадна.';
  else if (lower.includes('баяр')) response = 'Баяр хүргэе!';
  appendMessage('bot', response);
}

sendBtn.onclick = () => {
  const text = userInput.value.trim();
  if (text !== '') {
    appendMessage('user', text);
    getBotResponse(text);
    userInput.value = '';
  }
};

userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendBtn.click();
});
