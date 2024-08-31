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

    setTimeout(() => {
        const aiResponse = getAIResponse(userMessage);
        appendMessage(aiResponse, 'ai');
    }, 1000);
}

function appendMessage(message, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messageDiv.className = sender === 'user' ? 'user-message' : 'ai-message';
    chatbox.appendChild(messageDiv);
    chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
}

function getAIResponse(userMessage) {
    if (userMessage.includes('+') || userMessage.includes('-') || userMessage.includes('*') || userMessage.includes('/')) {
        try {
            const result = eval(userMessage);
            return `The result is: ${result}`;
        } catch (error) {
            return "Sorry, I couldn't evaluate that math expression.";
        }
    }

    const responses = {
        // Sample predefined responses
        "hello": "Hi there! How can I assist you today?",
        "how are you?": "I'm just a program, but thanks for asking!",
        "what is your name?": "I'm a simple AI chatbot.",
        "bye": "Goodbye! Have a great day!",
        "what is the weather like?": "I can't check the weather, but you can look it up online!",
        "tell me a joke": "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "what can you do?": "I can chat with you, answer questions, and do simple math!",
        "who created you?": "I was created by a programmer to assist with questions and information.",
        "what is your favorite color?": "I don't have preferences, but I think blue is nice!",
        "help": "I'm here to help! Ask me anything or type 'bye' to exit.",
        // Additional questions and responses
        "what is your favorite food?": "I don't eat, but pizza seems popular!",
        "do you have pets?": "I don't have pets, but I love hearing about them!",
        // More predefined questions
        "whats your purpose?": "I'm here to assist and provide information.",
        "can you sing?": "I can't sing, but I can tell you about music!",
        "what's your favorite movie?": "I don't watch movies, but I've heard great things about 'Inception'.",
        "tell me about yourself": "I'm an AI created to assist with various questions.",
        "what's your favorite book?": "I don't read books, but I can recommend some!",
        "do you sleep?": "I don't sleep; I'm available 24/7!",
        "what is the capital of France?": "The capital of France is Paris.",
        "who is the president of the United States?": "As of my last update, it's Joe Biden.",
        "how tall is Mount Everest?": "Mount Everest is approximately 8,848 meters tall.",
        "what is the smallest planet in our solar system?": "Mercury is the smallest planet in our solar system.",
        "what is a black hole?": "A black hole is a region in space where gravity is so strong that nothing can escape it.",
        // More questions to be added here...
        "what is photosynthesis?": "Photosynthesis is the process by which plants make food from sunlight.",
        "what is the currency of Japan?": "The currency of Japan is the yen.",
        "how many continents are there?": "There are seven continents on Earth.",
        "what is the main ingredient in guacamole?": "The main ingredient in guacamole is avocado.",
        "who painted the Mona Lisa?": "The Mona Lisa was painted by Leonardo da Vinci.",
        "what is the boiling point of water?": "The boiling point of water is 100°C (212°F) at sea level.",
        "what is the fastest land animal?": "The cheetah is the fastest land animal.",
        "how many bones are in the human body?": "There are 206 bones in the adult human body.",
        "what is the largest ocean?": "The Pacific Ocean is the largest ocean on Earth.",
        "what is the chemical symbol for gold?": "The chemical symbol for gold is Au.",
        "what causes rain?": "Rain is caused by the condensation of water vapor in the atmosphere.",
        // Continue adding more predefined responses...
        // You can add more questions below in a similar format
    };

    return responses[userMessage.toLowerCase()] || "I'm not sure how to respond to that.";
}