import React, { useState } from "react";
import BackgroundImage from "../Assets/zipGif.gif";
import "../ProductSell/productSell.css";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";

function Restaurant() {
  const backgroundImageUrl = `url(${BackgroundImage})`;

  const styles = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  // FIRST START

  const [countValue, setCountValue] = useState(1);

  const [firstValue, setFirstValue] = useState("");
  const firsthandleInputChange = (event) => {
    setFirstValue(event.target.value);
  };
  const firsthandleButtonClick = () => {
    setCountValue(countValue + 1);
    if (firstValue !== "") {
      console.log("input:", firstValue);
      document.querySelector(".form_first").classList.remove("show_form");
      document.querySelector(".form_first").classList.add("hidden_form");
      document.querySelector(".form_second").classList.add("show_form");
      document.querySelector(".form_second").classList.remove("hidden_form");
    } else {
      console.log("empty input");
    }
  };

  const firsthandleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action to avoid form submission
      firsthandleButtonClick();
    }
  };

  // FIRST END

  //SECOND START

  const [secondValue, setSecondValue] = useState("");
  const secondhandleInputChange = (event) => {
    setSecondValue(event.target.value);
  };
  const secondhandleButtonClick = () => {
    setCountValue(countValue + 1);
    if (secondValue !== "") {
      console.log("input:", secondValue);
      document.querySelector(".form_second").classList.remove("show_form");
      document.querySelector(".form_second").classList.add("hidden_form");
      document.querySelector(".form_third").classList.remove("hidden_form");
      document.querySelector(".form_third").classList.add("show_form");
    } else {
      console.log("empty input");
    }
  };

  const secondhandleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action to avoid form submission
      secondhandleButtonClick();
    }
  };

  const firsthandleButtonClick_p = () => {
    if (firstValue !== "") {
      console.log("input:", firstValue);
      document.querySelector(".form_second").classList.remove("show_form");
      document.querySelector(".form_second").classList.add("hidden_form");
      document.querySelector(".form_first").classList.remove("hidden_form");
      document.querySelector(".form_first").classList.add("show_form");
    } else {
      console.log("empty input");
    }
  };

  //SECOND END

  //THIRD START

  const [thirdValue, setThirdValue] = useState("");
  const thirdhandleInputChange = (event) => {
    setThirdValue(event.target.value);
  };
  const thirdhandleButtonClick = () => {
    setCountValue(countValue + 1);
    if (thirdValue !== "") {
      console.log("input:", thirdValue);
      document.querySelector(".form_third").classList.remove("show_form");
      document.querySelector(".form_third").classList.add("hidden_form");
      document.querySelector(".form_four").classList.remove("hidden_form");
      document.querySelector(".form_four").classList.add("show_form");
    } else {
      console.log("empty input");
    }
  };

  const thirdhandleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action to avoid form submission
      thirdhandleButtonClick();
    }
  };

  const secondhandleButtonClick_p = () => {
    if (secondValue !== "") {
      console.log("input:", secondValue);
      document.querySelector(".form_third").classList.remove("show_form");
      document.querySelector(".form_third").classList.add("hidden_form");
      document.querySelector(".form_second").classList.remove("hidden_form");
      document.querySelector(".form_second").classList.add("show_form");
    } else {
      console.log("empty input");
    }
  };

  //THIRD END

  //THIRD START

  const [fourValue, setFourValue] = useState("");
  const [countryCode, setCountryCode] = useState("+1");
  const fourhandleInputChange = (event) => {
    setFourValue(event.target.value);
  };

  const handleCountryCodeChange = (event) => {
    setCountryCode(event.target.value);
  };

  const fourhandleButtonClick = () => {
    if (fourValue !== "") {
      document.querySelector(".form_four").classList.add("hidden_form");
      document.querySelector(".form_four").classList.remove("show_form");
      document.querySelector(".result_sec").classList.add("show_form");
      document.querySelector(".result_sec").classList.remove("hidden_form");
      console.log("input:", fourValue);
    } else {
      console.log("empty input");
    }
  };

  const fourhandleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault(); // Prevent the default action to avoid form submission
      fourhandleButtonClick();
    }
  };

  const thirdhandleButtonClick_p = () => {
    if (secondValue !== "") {
      console.log("input:", secondValue);
      document.querySelector(".form_four").classList.add("hidden_form");
      document.querySelector(".form_four").classList.remove("show_form");
      document.querySelector(".form_third").classList.remove("hidden_form");
      document.querySelector(".form_third").classList.add("show_form");
    } else {
      console.log("empty input");
    }
  };

  //THIRD END

  return (
    <>
      <div className="name_ngo" style={styles}>
        <div className="name_ngo_inner">
          <h1 className="title_head">
            Welcome to our Restaurant Demo!
            <br />
            Please provide the following details
          </h1>
          <div className="name_ngo_sec">
            {/* <h1>
            <span>{countValue}</span>/<span>4</span>
          </h1> */}

            {/* <form> */}

            <div class="form_first show_form">
              <div className="form_sec">
                <label className="que_head">Please enter your Restaurant name below</label>
                <br />
                <input
                  id="input_block2"
                  type="text"
                  placeholder="Restaurant Name"
                  onChange={firsthandleInputChange}
                  onKeyPress={firsthandleKeyPress}
                  value={firstValue}
                  className={firstValue === "" ? "empty" : "notEmpty"}
                ></input>
              </div>
              <div className="form_submit">
                <button
                  className={firstValue === "" ? "empty" : "notEmpty"}
                  onClick={firsthandleButtonClick}
                  disabled={firstValue === ""}
                >
                  <FaLongArrowAltRight />
                </button>
              </div>
            </div>

            <div class="form_second hidden_form">
              <div className="form_sec">
                <label className="que_head">We have special offer for you</label>
                <br />
                <textarea
                  id="input_block1"
                  placeholder="We have too many offers for you. Like 60% off upto shop for $200"
                  onChange={secondhandleInputChange}
                  onKeyPress={secondhandleKeyPress}
                  value={secondValue}
                  className={secondValue === "" ? "empty" : "notEmpty"}
                ></textarea>
              </div>
              <div className="form_submit">
                <button
                  className={`${
                    firstValue === "" ? "empty" : "notEmpty"
                  } previousBtn`}
                  onClick={firsthandleButtonClick_p}
                  disabled={firstValue === ""}
                >
                  <FaLongArrowAltRight />
                </button>
                <button
                  className={secondValue === "" ? "empty" : "notEmpty"}
                  onClick={secondhandleButtonClick}
                  disabled={secondValue === ""}
                >
                  <FaLongArrowAltRight />
                </button>
              </div>
            </div>

            <div class="form_third hidden_form">
              <div className="form_sec">
                <label className="que_head">Menu Items</label>
                <br />
                <textarea
                  id="input_block4"
                  placeholder="
                1. Crispy Calamari Delight - $9.99
                2. Spinach and Artichoke Dip - $7.49
                3. Garlic Parmesan Fries - $5.99"
                  onChange={thirdhandleInputChange}
                  onKeyPress={thirdhandleKeyPress}
                  value={thirdValue}
                  className={thirdValue === "" ? "empty" : "notEmpty"}
                ></textarea>
              </div>
              <div className="form_submit">
                <button
                  className={`${
                    secondValue === "" ? "empty" : "notEmpty"
                  } previousBtn`}
                  onClick={secondhandleButtonClick_p}
                  disabled={secondValue === ""}
                >
                  <FaLongArrowAltRight />
                </button>
                <button
                  className={thirdValue === "" ? "empty" : "notEmpty"}
                  onClick={thirdhandleButtonClick}
                  disabled={thirdValue === ""}
                >
                  <FaLongArrowAltRight />
                </button>
              </div>
            </div>

            <div class="form_four hidden_form">
              <div className="form_sec">
                <label className="que_head">
                  Enter your phone number for dummy payment link
                </label>
                <br />
                <div className="flex_form">
                  <select
                    value={countryCode}
                    onChange={handleCountryCodeChange}
                  >
                    <option value="+1">+1</option> {/* USA */}
                    <option value="+44">+44</option> {/* UK */}
                    <option value="+91">+91</option>
                    <option value="+62">+62</option>
                    <option value="+98">+98</option>
                    <option value="+964">+964</option>
                    <option value="+353">+353</option>
                    <option value="+1">+1</option>
                    <option value="+598">+598</option>
                    <option value="+998">+998</option>
                    <option value="+678">+678</option>
                    <option value="+379">+379</option>
                    <option value="+58">+58</option>
                    <option value="+84">+84</option>
                    <option value="+681">+681</option>
                    <option value="+967">+967</option>
                    <option value="+260">+260</option>
                    <option value="+263">+263</option>
                    {/* Add other countries as needed */}
                  </select>
                  <input
                    id="input_block3"
                    text="tel"
                    placeholder="Enter you phone number"
                    onChange={fourhandleInputChange}
                    onKeyPress={fourhandleKeyPress}
                    value={fourValue}
                    className={fourValue === "" ? "empty" : "notEmpty"}
                  ></input>
                </div>
              </div>
              <div className="form_submit">
                <button
                  className={`${
                    thirdValue === "" ? "empty" : "notEmpty"
                  } previousBtn`}
                  onClick={thirdhandleButtonClick_p}
                  disabled={thirdValue === ""}
                >
                  <FaLongArrowAltRight />
                </button>
                <button
                  className={fourValue === "" ? "empty" : "notEmpty"}
                  onClick={fourhandleButtonClick}
                  disabled={fourValue === ""}
                >
                  Submit
                </button>
              </div>
            </div>

            {/* </form> */}

            <div className="result_sec hidden_form">
              <label className="que_head">Here is Customer insight soptlight</label>
              <div className="results-table">
                <div className="result-inr">
                  <div className="result-inner-box">
                    <div className="result_head">Restaurant name</div>
                    <div className="result_value">{firstValue}</div>
                  </div>
                  <div className="result-inner-box">
                    <div className="result_head">Special Offer</div>
                    <div className="result_value">{secondValue}</div>
                  </div>
                  <div className="result-inner-box">
                    <div className="result_head">Menu Item</div>
                    <div className="result_value">{thirdValue}</div>
                  </div>
                  <div className="result-inner-box">
                    <div className="result_head">Your mobile number</div>
                    <div className="result_value">
                      {countryCode} {fourValue}
                    </div>
                  </div>
                </div>
              </div>

              <h6>
                Want to try another demo!{" "}
                <Link to="/Chatbot" className="chatbotLink">
                  Click here!
                </Link>{" "}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Restaurant;
