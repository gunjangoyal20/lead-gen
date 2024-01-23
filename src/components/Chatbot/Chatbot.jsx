import React, { useState, useEffect, useRef } from "react";

const Chatbot = () => {
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

  const handleSendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, user: "user" }]);
    setInput("");
    speak(input);

    const botResponse = "I'm a simple chatbot. How can I assist you?";
    setMessages([...messages, { text: botResponse, user: "bot" }]);
    speak(botResponse);
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
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
  );
};

export default Chatbot;