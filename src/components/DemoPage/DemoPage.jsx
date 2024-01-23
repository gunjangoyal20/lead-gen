import React from "react";
import "./DemoPage.css";
import { FaLongArrowAltRight } from "react-icons/fa";
import BackgroundImage from "../Assets/mainPage.png";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const backgroundImageUrl = `url(${BackgroundImage})`;

  const styles = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <>
      <div className="main_wrapper" style={styles}>
        <div className="container">
          <div className="title_heading">
            "Step into the AI Wonderland: Your Journey Begins Here!"
          </div>
          <div className="quetionaries">
            <div className="que_icon"></div>
            <div className="ques">
              <FaLongArrowAltRight /> What aspect of our conversational voice ai
              demo would you like to see in action?
            </div>
            <div className="que_options">
              <button>
                <Link to="/ngo"><div className="optionNumber">A.</div><div className="tag">NGO</div></Link>
              </button>
              <button>
                <Link to="/restaurant"><div className="optionNumber">B.</div><div className="tag">Restaurant</div></Link>
              </button>
              <button>
                <Link to="/productsell"><div className="optionNumber">C.</div><div className="tag">Product Sell</div></Link>
              </button>
              <button>
                <Link to="/feedback"><div className="optionNumber">D.</div><div className="tag">FeedBack</div></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
