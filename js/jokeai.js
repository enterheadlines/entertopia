const chatbox = document.getElementById('chatbox');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === "") return;

    appendMessage(userMessage, 'user');
    userInput.value = '';

    if (userMessage.toLowerCase() === 'joke') {
        fetchJoke();
    } else {
        appendMessage("Type 'joke' to get a random joke!", 'ai');
    }
}

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function fetchJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
        .then(response => response.json())
        .then(data => {
            const joke = `${data.setup} - ${data.punchline}`;
            appendMessage(joke, 'ai');
        })
        .catch(error => {
            appendMessage("Sorry, I couldn't fetch a joke at the moment.", 'ai');
        });
}