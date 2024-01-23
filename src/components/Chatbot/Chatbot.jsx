import React, { useState, useEffect, useRef } from "react";

function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(
    new (window.SpeechRecognition || window.webkitSpeechRecognition)()
  );

  useEffect(() => {
    const recognitionRef = recognition.current; // Create a local variable

    recognitionRef.onresult = handleSpeechRecognitionResult;
    recognitionRef.onend = () => setIsListening(false);

    return () => {
      // Use the local variable in the cleanup function
      recognitionRef.onresult = null;
      recognitionRef.onend = null;
    };
  }, []); // Empty dependency array to run the effect once on mount

  const handleSpeechRecognitionResult = (event) => {
    const transcript = event.results[0][0].transcript;
    setInput(transcript);
  };

  const startListening = () => {
    setIsListening(true);
    recognition.current.start();
  };



  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the messages array
    setMessages([...messages, { text: input, user: "user" }]);
    setInput("");

    try {
      // Make an API call (replace with your actual API endpoint)
      const response = await fetch(
        "https://ivoz-ai.azurewebsites.net/chat_bot",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message: input }),
        }
      );

      if (response.ok) {
        const data = await response.json();

        // Extract the chatbot's response
        const botResponse = data.message;
        console.log("botResponse-- ", botResponse);
        // Add the chatbot response to the messages array
        setMessages([...messages, { text: botResponse, user: "bot" }]);

        // Speak the chatbot response
        speak(botResponse);
      } else {
        console.error("Failed to fetch chatbot response:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <>
      <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.user}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <input
            type="text"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send</button>
          <button onClick={startListening} disabled={isListening}>
            Speak
          </button>
        </div>
      </div>
    </>
  );
}

export default Chatbot;