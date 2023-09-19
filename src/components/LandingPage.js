import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 style={{ fontSize: "28px" }}>
          <b>Welcome to PopX</b>
        </h1>
        <p style={{ fontSize: "21px" }}>
          Lorem ipsum dolor sit amet,
          <br /> consectetur adipiscing elit
        </p>
      </div>
      <br />

      <div className="landing-buttons">
        <Link to="/signup">
          <button className="create">
            <b>Create Account</b>
          </button>
        </Link>
        <Link to="/login">
          <button className="Login">
            <b>Already Registered? Login</b>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
