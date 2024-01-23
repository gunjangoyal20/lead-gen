import React from "react";
import "./Registration.css";
import BackgroundImage from "../Assets/signUp_bg.png";
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
    backgroundPosition: "center",
  };

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setcountryCode] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [organizationname, setOrganization] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://ivoz-ai.azurewebsites.net/demo_form",
        {
          firstname,
          lastname,
          email,
          mobileno,
          organizationname
        }
      );
      // Handle response here (e.g., redirecting the user)
      console.log(response);
      navigate("/Demo");
    } catch (error) {
      // Handle error here
      setErrorMessage(error.response.data.message || "Please Provide Us your work mail");
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
                    placeholder="Organization Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="input-box phoneInput">
                  <select className="countrycode" value={countryCode} 
                  onChange={(e) => setcountryCode(e.target.value)}
                  >
                    <option value="US">(+1)</option>
                    <option value="GB">(+44)</option>
                    <option value="IN">(+91)</option>
                  </select>
                  <input
                    type="number"
                    name="phonenumber"
                    autoComplete="off"
                    placeholder="Mobile Number (Optional)"
                    value={mobileno}
                    onChange={(e) => setMobileno(e.target.value)}
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
                {errorMessage && <p className="errorMessage">{errorMessage}</p>}
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