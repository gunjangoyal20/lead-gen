// import React, { useState, useEffect, useRef } from "react";
// import axios from "axios";
// import BackgroundImage from "../Assets/zipGif.gif";
// import "./Chatbot.css";
// import { FaTelegramPlane } from "react-icons/fa";
// import { FaMicrophone } from "react-icons/fa";

// function Chatbot() {
//   const backgroundImageUrl = `url(${BackgroundImage})`;

//   const styles = {
//     backgroundImage: backgroundImageUrl,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//   };

//   const [messages, setMessages] = useState([]);
//   const [input, setInput] = useState("");
//   const [isListening, setIsListening] = useState(false);
//   const recognition = useRef(
//     new (window.SpeechRecognition || window.webkitSpeechRecognition)()
//   );
 
//   useEffect(() => {
//     const recognitionRef = recognition.current; // Create a local variable

//     recognitionRef.onresult = handleSpeechRecognitionResult;
//     recognitionRef.onend = () => setIsListening(false);

//     return () => {
//       // Use the local variable in the cleanup function
//       recognitionRef.onresult = null;
//       recognitionRef.onend = null;
//     };
//   }, []); // Empty dependency array to run the effect once on mount

//   const handleSpeechRecognitionResult = (event) => {
//     const transcript = event.results[0][0].transcript;
//     setInput(transcript);
//   };

//   const startListening = () => {
//     setIsListening(true);
//     recognition.current.start();
//   };

//   const handleSendMessage = async () => {
//     if (!input.trim()) return;

//     // Add user message to the messages array
//     setMessages([...messages, { text: "", user: input }]);
//     setInput("");

//     try {
//       // Make an API call using Axios
//       const response = await axios.post(
//         "https://ivoz-ai.azurewebsites.net/chat_bot",
//         {
//           text: input,
//           session_id: "101",
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       // Extract the chatbot's response
//       const botResponse = response.data.response;

//       // Add the chatbot response to the messages array
//       setMessages([...messages, { text: botResponse, user: input }]);

//       // Speak the chatbot response
//       speak(botResponse);
//     } catch (error) {
//       console.error("Error fetching chatbot response:", error);
//     }
//   };

//   const speak = (text) => {
//     const utterance = new SpeechSynthesisUtterance(text);
//     window.speechSynthesis.speak(utterance);
//   };

//   const enterPress = (event) => {
//     if (event.key === "Enter") {
//       event.preventDefault(); // Prevent the default action to avoid form submission
//       handleSendMessage();
//     }
//   };

//   return (
//     <>
//     <div className="main_live" style={styles}>
//         <div className="chatbot_container">
//           <div className="top-border">
//             <h3>XYZ Telecom</h3>
//           </div>
//           <div className="chatbot-container">
//         <div className="chatbot-messages">
//           {messages.map((message, index) => (
//             <div key={index} className={`message`}>
//               <div className="response_data response_data_right">
//                 <span>You :- </span> {message.user}
//               </div>
//               <div className="response_data response_data_left">
//                 <span>Bot :- </span> {message.text}
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="inputChatbot">
//         <div className="chatbot-input">
//           <div className="chatbot-input_speek">
//             <input
//               type="text"
//               placeholder="Type a message..."
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyPress={enterPress}
//             />
//             <button
//               className="faMicrophone"
//               onClick={startListening}
//               disabled={isListening}
//             >
//               <FaMicrophone />
//             </button>
//           </div>
//           <button className="form_submit" onClick={handleSendMessage}>
//             <FaTelegramPlane />
//           </button>
//         </div>
//         </div>
//       </div>
//         </div>
//       </div>
      
//     </>
//   );
// }
 
// export default Chatbot;

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import BackgroundImage from "../Assets/zipGif.gif";
import "./Chatbot.css";
import { FaTelegramPlane } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { TbRobot } from "react-icons/tb";
import { FaHeadset } from "react-icons/fa";
import { useLocation } from 'react-router-dom';

function Chatbot() {

  // For getting organisation name from input
  const location = useLocation();
  console.log("location", location.state);  // added
 


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedVoice, setSelectedVoice] = useState("Gregory");
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleVoiceSelect = (voice) => {
    setSelectedVoice(voice);
    setIsDropdownOpen(false);
  };
  // Voice Control END

  // GET CLIENT ID START
  const clientId = localStorage.getItem("clientId_set");
  // GET CLIENT ID START

  const [chatClass, setChatClass] = useState(true);
  const chatToggle = () => {
    setChatClass(!chatClass);
    setVoiceClass(false);
  };
  const [voiceClass, setVoiceClass] = useState(false);
  const voiceToggle = () => {
    setVoiceClass(!voiceClass);
    setChatClass(false);
  };

  const backgroundImageUrl = `url(${BackgroundImage})`;

  const styles = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
  };

  const [messages, setMessages] = useState([]);
  const [voice, setVoice] = useState([]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [count, setCount] = useState(1);
  const [countVoice, setCountVoice] = useState(1);
  const recognition = useRef(
    new (window.SpeechRecognition || window.webkitSpeechRecognition)()
  );

  useEffect(() => {
    const recognitionRef = recognition.current;

    const handleSpeechRecognitionResult = async (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      console.log("reco");

      if (voiceClass === true) {
        console.log("input", transcript);

        // Add user message to the messages array
        setMessages([...messages, { text: "", user: transcript }]);
        setInput("");

        var textNumber = "";
        const inputValue = transcript;

        // Split the input value into an array of substrings using spaces as the separator
        const numberArray = inputValue.split(" ");

        // Check if each substring is a number
        const isAllNumbers = numberArray.every(
          (substring) => !isNaN(substring)
        );

        if (isAllNumbers) {
          textNumber = inputValue.replace(/ /g, "");
          console.log("All parts are numbers-- ", textNumber);
        } else {
          textNumber = inputValue;
          console.log("Some parts are not numbers");
        }
        // VoiceBot API hit

        setCountVoice(countVoice + 1);
        try {
          // Make an API call using Axios
          const response = await axios.post(
            "https://ivoz-ai.azurewebsites.net/chat_bot",
            {
              text: textNumber,
              session_id: clientId,
              voice: "1",
              bot_voice: selectedVoice,
              api_hit: `"${countVoice}"`,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          let chat_text = response.data.text_msg;
          let voice_url = response.data.url;

          setVoice([
            ...voice,
            { text: voice_url, bot: chat_text, user: transcript },
          ]);
        } catch (error) {
          console.error("Error fetching chatbot response:", error);
        }
      }
    };

    recognitionRef.onresult = handleSpeechRecognitionResult;
    recognitionRef.onend = () => setIsListening(false);

    return () => {
      recognitionRef.onresult = null;
      recognitionRef.onend = null;
    };
  }, [input, voiceClass, messages, clientId, voice, selectedVoice, countVoice]);

  const startListening = () => {
    setIsListening(true);
    recognition.current.start();
  };

  // CHatbot API hit
  const handleSendMessage = async () => {
    if (!input.trim()) return;
    if (chatClass === true) {
      // Add user message to the messages array
      setMessages([...messages, { text: "", user: input }]);
      setInput("");
      setCount(count + 1);
      try {
        // Make an API call using Axios
        const response = await axios.post(
          "https://ivoz-ai.azurewebsites.net/chat_bot",
          {
            text: input,
            session_id: clientId,
            voice: "0",
            bot_voice: "Kimberly",
            api_hit: count,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const botResponse = response.data;

        setMessages([...messages, { text: botResponse, user: input }]);
        // document.querySelector(".loading_chat").classList.add("hidden");
        // document
        //   .querySelector(".response_data_left")
        //   .classList.remove("response_data_left_loading");
        // speak(botResponse);
      } catch (error) {
        console.error("Error fetching chatbot response:", error);
      }
    }
  };

  // Press Enter ON Chat Bot
  const enterPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action to avoid form submission
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Display Chat or Voice ? */}
      <div
        className={`main_live ${chatClass ? "chat_display" : ""} ${
          voiceClass ? "voice_display" : ""
        } `}
        style={styles}
      >
        {/* Toggle Buttons */}
        <div className="button_sec_chat_sec">
          <div className="button_sec">
            <div className="button_flex">
              <button onClick={chatToggle} className="button_style button_chat">
                Chat
              </button>
              <button
                onClick={voiceToggle}
                className="button_style button_voice"
              >
                Voice
              </button>
            </div>
          </div>

          {/* CHatBot COntainer */}
          <div className="main_live_chat">
            <div className="chatbot_container">
              <div className="top-border">
                <h3>Ivoz AI</h3>
              </div>
              <div className="chatbot-container">
                {/* CHAT_BOT START */}
                <div className="chatbot-messages chat_display_box ">
                  {messages.map((message, index) => (
                    <div key={index} className={`message`}>
                      <div className="response_data response_data_right">
                        {/* <span>
                          <FaUserAlt />
                        </span> */}
                        <div className="user_bot_sec">{message.user}</div>
                      </div>
                      <div
                        className={`response_data response_data_left ${
                          message.text ? "" : "response_data_left_loading"
                        }`}
                      >
                        {/* <span>
                          <TbRobot />
                        </span> */}
                        <div className="user_bot_sec">
                          <div
                            className={`loading_chat ${
                              message.text ? "hidden" : ""
                            } `}
                          >
                            <div className="loading__dot"></div>
                            <div className="loading__dot"></div>
                            <div className="loading__dot"></div>
                          </div>
                          {message.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* CHAT_BOT END */}
                {/* Voice_BOT START */}
                <div className="chatbot-messages voice_display_box">
                  {voice.map((voiceAUDIO, index) => (
                    <div key={index} className={`message`}>
                      <div className="response_data response_data_right">
                        <span>
                          <FaUserAlt />
                        </span>
                        <div className="user_bot_sec">{voiceAUDIO.user}</div>
                      </div>
                      <div
                        className={`response_data response_data_left ${
                          voiceAUDIO.text ? "" : "response_data_left_loading"
                        }`}
                      >
                        <span>
                          <TbRobot />
                        </span>
                        <div className="user_bot_sec">
                          <div
                            className={`loading_chat ${
                              voiceAUDIO.text ? "hidden" : ""
                            } `}
                          >
                            <div className="loading__dot"></div>
                            <div className="loading__dot"></div>
                            <div className="loading__dot"></div>
                          </div>
                          {voiceAUDIO.bot}
                          <audio controls autoPlay>
                            <source src={voiceAUDIO.text} type="audio/mp3" />
                          </audio>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Voice_BOT END */}
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
                      className={`faMicrophone ${
                        isListening ? "true" : "false"
                      }`}
                      onClick={startListening}
                      disabled={isListening}
                    >
                      <FaMicrophone />
                    </button>
                  </div>
                  <div className={`voice_select `}>
                    <div
                      className={`voice_select_icon ${
                        isDropdownOpen ? "true" : "false"
                      } `}
                      onClick={toggleDropdown}
                    >
                      <FaHeadset />
                    </div>

                    <div
                      className={`voice_select_dropdown ${
                        isDropdownOpen ? "true" : "false"
                      }`}
                    >
                      <ul>
                        <li
                          className={
                            selectedVoice === "Gregory" ? "selected" : ""
                          }
                          onClick={() => handleVoiceSelect("Gregory")}
                        >
                          Gregory
                        </li>
                        <li
                          className={selectedVoice === "Ruth" ? "selected" : ""}
                          onClick={() => handleVoiceSelect("Ruth")}
                        >
                          Ruth
                        </li>
                        <li
                          className={
                            selectedVoice === "Danielle" ? "selected" : ""
                          }
                          onClick={() => handleVoiceSelect("Danielle")}
                        >
                          Danielle
                        </li>
                        <li
                          className={selectedVoice === "Ivy" ? "selected" : ""}
                          onClick={() => handleVoiceSelect("Ivy")}
                        >
                          Ivy
                        </li>
                        <li
                          className={
                            selectedVoice === "Kimberly" ? "selected" : ""
                          }
                          onClick={() => handleVoiceSelect("Kimberly")}
                        >
                          Kimberly
                        </li>
                        <li
                          className={
                            selectedVoice === "Kendra" ? "selected" : ""
                          }
                          onClick={() => handleVoiceSelect("Kendra")}
                        >
                          Kendra
                        </li>
                        <li
                          className={
                            selectedVoice === "Joanna" ? "selected" : ""
                          }
                          onClick={() => handleVoiceSelect("Joanna")}
                        >
                          Joanna
                        </li>
                        <li
                          className={selectedVoice === "Joey" ? "selected" : ""}
                          onClick={() => handleVoiceSelect("Joey")}
                        >
                          Joey
                        </li>
                      </ul>
                    </div>
                  </div>
                  <button className="form_submit" onClick={handleSendMessage}>
                    <FaTelegramPlane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;