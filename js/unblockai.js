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

    // Process the user's message
    processMessage(userMessage);
}

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function processMessage(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes("blocked website")) {
        appendMessage("To access blocked websites at school, you can try using a VPN or a proxy server.", 'ai');
    } else if (lowerCaseMessage.includes("educational resources")) {
        appendMessage("For educational resources, check if your school provides a VPN service or access to certain sites through their portal.", 'ai');
    } else if (lowerCaseMessage.includes("vpn")) {
        appendMessage("Using a VPN can help you bypass restrictions, but ensure you're following your school's policies. Some popular VPNs include NordVPN, ExpressVPN, and ProtonVPN.", 'ai');
    } else if (lowerCaseMessage.includes("ask teacher")) {
        appendMessage("If you're unsure about accessing certain resources, it's best to ask your teacher for guidance. They might provide allowed alternatives.", 'ai');
    } else if (lowerCaseMessage.includes("homework help")) {
        appendMessage("You can use platforms like Khan Academy, Quizlet, or your school's online resources for homework help.", 'ai');
    } else if (lowerCaseMessage.includes("youtube")) {
        appendMessage("If YouTube is blocked, you can try using a VPN or accessing educational videos through platforms like Vimeo or your school's approved resources.", 'ai');
    } else if (lowerCaseMessage.includes("google classroom")) {
        appendMessage("If Google Classroom is blocked, make sure you are using the correct school account. If it's still blocked, consider asking your IT department for access.", 'ai');
    } else if (lowerCaseMessage.includes("social media")) {
        appendMessage("Accessing social media sites is often restricted. If you have an educational reason, discuss it with your teacher or school administrator.", 'ai');
    } else if (lowerCaseMessage.includes("bypass restrictions")) {
        appendMessage("Bypassing restrictions can sometimes violate school policies. Always check with your school’s rules before trying to access blocked content.", 'ai');
    } else if (lowerCaseMessage.includes("troubleshooting")) {
        appendMessage("For troubleshooting access issues, check your internet connection, try a different browser, or restart your device.", 'ai');
    } else {
        appendMessage("I'm not sure about that. Please specify if you need help with unblocking a website, accessing educational resources, or using a VPN.", 'ai');
    }
}