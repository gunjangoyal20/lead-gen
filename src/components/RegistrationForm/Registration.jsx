import React from "react";
import "./Registration.css";
import BackgroundImage from "../Assets/registration.jpg";
import SignUpImg from "../Assets/signUp_Img.jpg";
import { FaUser } from "react-icons/fa";
import { IoIosMailOpen } from "react-icons/io";
import { BsFillBuildingsFill } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Registration() {
  const backgroundImageUrl = `url(${BackgroundImage})`;

  const styles = {
    backgroundImage: backgroundImageUrl,
    backgroundSize: "cover",
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setcountryCode] = useState("+1");
  const [mobileno, setMobileno] = useState("");
  const [organizationname, setOrganization] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const formatPhoneNumber = (value) => {
    if (!value) return value;

    // Only allows numbers
    const phoneNumber = value.replace(/[^\d]/g, "");

    // Split the number into parts
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
    }
    return `${phoneNumber.slice(0, 3)}-${phoneNumber.slice(
      3,
      6
    )}-${phoneNumber.slice(6, 10)}`;
  };

  const handleInputChange = (e) => {
    setMobileno(formatPhoneNumber(e.target.value));
  };

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    // const regex = /^\d{3}-\d{3}-\d{4}$/;
    // if (!regex.test(mobileno)) {
    //   alert("Phone number must be in the format: 123-123-1234");
    // } else {
    //   // Submit form or further processing
    //   console.log("Phone number submitted:", mobileno);
    // }
    try {
      const response = await axios.post(
        "https://ivoz-ai.azurewebsites.net/demo_form",
        {
          firstname,
          lastname,
          email,
          mobileno,
          organizationname,
          countryCode
        }
      );
      // Handle response here (e.g., redirecting the user)
      console.log(response);
      navigate("/Demo");
    } catch (error) {
      // Handle error here
      setErrorMessage(
        error.response.data.message || "Please Provide Us your work mail"
      );
    }
  };
  return (
    <>
      <section className="signup" style={styles}>
        <div className="signup-container">
          <div className="signup-content">
            <div className="signup-form wrapper">
              <h2 className="form-title">Register Here</h2>
              <form
                method="post"
                onSubmit={handleSubmit}
                className="registration-form"
                id="registration-form"
              >
                <div className="input-box">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    name="firstname"
                    autoComplete="off"
                    placeholder="First Name"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <FaUser className="icon" />
                  <input
                    type="text"
                    name="lastname"
                    autoComplete="off"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box">
                  <IoIosMailOpen className="icon" />
                  <input
                    type="email"
                    name="email"
                    autoComplete="off"
                    placeholder="name@work-email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
                <div className="input-box phoneInput select_opt">
                  <select
                    className="countrycode"
                    value={countryCode}
                    onChange={(e) => setcountryCode(e.target.value)}
                  >
                    <option value="+1">(+1)</option>
                    <option value="+44">UK (+44)</option>
                    <option value="+91">India (+91)</option>
                    <option value="+61">Australia (+61)</option>
                    <option value="+55">Brazil (+55)</option>
                    <option value="+86">China (+86)</option>
                    <option value="+33">France (+33)</option>
                    <option value="+49">Germany (+49)</option>
                    <option value="+62">Indonesia (+62)</option>
                    <option value="+81">Japan (+81)</option>
                    <option value="+234">Nigeria (+234)</option>
                    <option value="+7">Russia (+7)</option>
                    <option value="+27">South Africa (+27)</option>
                    <option value="+82">South Korea (+82)</option>
                    <option value="+34">Spain (+34)</option>
                    <option value="+46">Sweden (+46)</option>
                    <option value="+41">Switzerland (+41)</option>
                    <option value="+90">Turkey (+90)</option>
                    <option value="+58">Venezuela (+58)</option>
                    <option value="+39">Italy (+39)</option>
                  </select>
                  <input
                    type="tel"
                    name="phonenumber"
                    autoComplete="off"
                    placeholder="123-123-1234 (Optional)"
                    value={mobileno}
                    maxLength={12}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="input-box">
                  <BsFillBuildingsFill className="icon" />
                  <input
                    type="text"
                    name="organization"
                    autoComplete="off"
                    placeholder="Organization Name"
                    value={organizationname}
                    onChange={(e) => setOrganization(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="signup_btn">
                  Submit
                </button>
              </form>
            </div>
            <div className="signup-img">
              <img src={SignUpImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
