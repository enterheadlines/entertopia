//https://cdnjs.cloudflare.com/ajax/libs/mathjs/10.0.0/math.min.js

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
            try {
                // Evaluate the mathematical expression
                const result = math.evaluate(message);
                appendMessage(`Result: ${result}`, 'ai');
            } catch (error) {
                appendMessage("I couldn't understand that. Please try a different math expression.", 'ai');
            }
        }