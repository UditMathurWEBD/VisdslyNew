import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";

import "./signup.css";

const Signup = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [error, setError] = useState("");

  const isFormValid = () => {
    // Perform basic form validation
    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword
    );
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!isFormValid()) {
      setError("Please fill in all required fields correctly.");
      return;
    }

    // Make the API request
    try {
      const response = await fetch("http://127.0.0.1:8000/api/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: firstName,
          last_name: lastName,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (response.status === 201) {
        // Successful signup, you can perform additional actions here
        console.log("Signup successful");
        setError("");
        navigate("/login"); // Redirect to login page after successful signup
      } else {
        // Handle unsuccessful signup
        setError("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error.message);
      setError("An error occurred during signup");
    }
  };

  return (
    <div>
      <div className="page-content">
        <div className="form-v10-content">
          <form className="form-detail" action="#" method="post" id="myform" onSubmit={handleSignup}>
            <div className="form-left">
              <h2>Signup Form</h2>

              <div className="form-group">
                <div className="form-row form-row-1">
                  <input
                    type="text"
                    name="first_name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    id="first_name"
                    className="input-text"
                    placeholder="First Name"
                    required
                  />
                </div>
                <div className="form-row form-row-2">
                  <input
                    type="text"
                    name="last_name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    id="last_name"
                    className="input-text"
                    placeholder="Last Name"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email"
                  placeholder="Enter Email Id"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="password"
                  placeholder="Enter Password"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="confirmPassword"
                  placeholder="Enter Password Again"
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="referral_code"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="company"
                  placeholder="Enter Referral Code (Optional)"
                />
              </div>
              <div className="register-here">
                <button className="register-button" type="submit" disabled={!isFormValid()}>
                  Register Here
                </button>
              </div>

              <div className="form-checkbox">
                <label className="container">
                  <p className="login-option-here">
                    You already have an account?{" "}
                    <a to="/login" className="text-signup-here">
                      Login Here
                    </a>
                    .
                  </p>
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
