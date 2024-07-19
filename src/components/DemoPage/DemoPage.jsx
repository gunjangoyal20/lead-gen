import React from "react";
import "./DemoPage.css";
// import { FaLongArrowAltRight } from "react-icons/fa";
import BackgroundImage from "../Assets/zipGif.gif";
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
    {/* <FaLongArrowAltRight /> */}
      <div className="main_wrapper" style={styles}>
        <div className="container">
          <div className="title_heading">
            Welcome to iVoz Ai: Your journey begins here!
          </div>
          <div className="quetionaries">
            <div className="que_icon"></div>
            <div className="ques">
              Choose your Own Path and Discover the wonders of AI technology
            </div>
            <div className="que_options">
              <button>
                <Link to="/ngo"><div className="tag">NGO</div></Link>
              </button>
              <button>
                <Link to="/restaurant"><div className="tag">Restaurant</div></Link>
              </button>
              <button>
                <Link to="/productsell"><div className="tag">Product Sell</div></Link>
              </button>
              <button>
                <Link to="/feedback"><div className="tag">FeedBack</div></Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
