import React, { useState } from "react";
import BackgroundImage from "../Assets/mainPage.png";
import "./ngo.css";
import { Link } from "react-router-dom";

function Ngo() {
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
        <h1 className="title_head">
          Welcome to our NGO Fundraising Demo!
          <br />
          Please provide the following details
        </h1>
        <div className="name_ngo_sec">
          <div className="form_first show_form">
            <div className="form_sec">
              <label className="que_head">Enter your organisation Name:</label>
              <br />
              <input
                id="input_block2"
                type="text"
                placeholder="Company Name"
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
                Next
              </button>
            </div>
          </div>
          <div className="form_second hidden_form">
            <div className="form_sec">
              <label className="que_head">Short Message</label>
              <br />
              <textarea
                id="input_block1"
                placeholder="eg: I am passionately raising essential funds to provide life-saving medical aid in impoverished regions. Join me in making a real difference in the lives of those in need. Every contribution is a step towards healing and hope!"
                onChange={secondhandleInputChange}
                onKeyPress={secondhandleKeyPress}
                value={secondValue}
                className={secondValue === "" ? "empty" : "notEmpty"}
              ></textarea>
            </div>
            <div className="form_submit">
              <button
                className={firstValue === "" ? "empty" : "notEmpty"}
                onClick={firsthandleButtonClick_p}
                disabled={firstValue === ""}
              >
                Previous
              </button>
              <button
                className={secondValue === "" ? "empty" : "notEmpty"}
                onClick={secondhandleButtonClick}
                disabled={secondValue === ""}
              >
                Next
              </button>
            </div>
          </div>

          <div className="form_third hidden_form">
            <div className="form_sec">
              <label className="que_head">About payment</label>
              <br />
              <textarea
                id="input_block4"
                placeholder="You can enter any amount, there is no minimum, our ambitious target will help drive positive change!"
                onChange={thirdhandleInputChange}
                onKeyPress={thirdhandleKeyPress}
                value={thirdValue}
                className={thirdValue === "" ? "empty" : "notEmpty"}
              ></textarea>
            </div>
            <div className="form_submit">
              <button
                className={secondValue === "" ? "empty" : "notEmpty"}
                onClick={secondhandleButtonClick_p}
                disabled={secondValue === ""}
              >
                Previous
              </button>
              <button
                className={thirdValue === "" ? "empty" : "notEmpty"}
                onClick={thirdhandleButtonClick}
                disabled={thirdValue === ""}
              >
                Next
              </button>
            </div>
          </div>

          <div className="form_four hidden_form">
            <div className="form_sec">
              <label className="que_head">Phone Number for payment link</label>
              <br />
              <div className="flex_form">
                <select value={countryCode} onChange={handleCountryCodeChange}>
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
                className={thirdValue === "" ? "empty" : "notEmpty"}
                onClick={thirdhandleButtonClick_p}
                disabled={thirdValue === ""}
              >
                Previous
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
            <label className="que_head">Result</label>
            <table className="result_table">
              <thead>
                <tr>
                  <th>Organisation Name</th>
                  <th>Short Message</th>
                  <th>About Payment</th>
                  <th>Phone Number</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{firstValue}</td>
                  <td>{secondValue}</td>
                  <td>{thirdValue}</td>
                  <td>
                    {countryCode} {fourValue}
                  </td>
                </tr>
              </tbody>
            </table>

            <h6>Want to try another demo! CLick here</h6>
            <button className="last">
              <Link to="/LoginForm">Demo</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ngo;