import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BackgroundImage from "../Assets/mainPage.png";
import "./Chatbot.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";

function Chatbot() {
  const backgroundImageUrl = `url(${BackgroundImage})`;

  const styles = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

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
    setMessages([...messages, { text: "", user: input }]);
    setInput("");

    try {
      // Make an API call using Axios
      const response = await axios.post(
        "https://ivoz-ai.azurewebsites.net/chat_bot",
        {
          text: input,
          session_id: "101",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Extract the chatbot's response
      const botResponse = response.data.response;

      // Add the chatbot response to the messages array
      setMessages([...messages, { text: botResponse, user: input }]);

      // Speak the chatbot response
      speak(botResponse);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
    }
  };

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  const enterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action to avoid form submission
      handleSendMessage();
    }
  };

  return (
    <>
    <div className="main_live" style={styles}>
        <div className="chatbot_container">
          <div className="top-border">
            <h3>XYZ Telecom</h3>
          </div>
          <div className="chatbot-container">
        <div className="chatbot-messages">
          {messages.map((message, index) => (
            <div key={index} className={`message`}>
              <div className="response_data response_data_right">
                <span>You :- </span> {message.user}
              </div>
              <div className="response_data response_data_left">
                <span>Bot :- </span> {message.text}
              </div>
            </div>
          ))}
        </div>
        <div className="chatbot-input">
          <div className="chatbot-input_speek">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={enterPress}
            />
            <button
              className="faMicrophone"
              onClick={startListening}
              disabled={isListening}
            >
              <FaMicrophone />
            </button>
          </div>
          <button className="form_submit" onClick={handleSendMessage}>
            <FaTelegramPlane />
          </button>
        </div>
      </div>
        </div>
      </div>
      
    </>
  );
}

export default Chatbot;