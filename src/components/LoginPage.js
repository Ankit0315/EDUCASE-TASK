import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { TextField } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    // Basic validation
    if (!email || !password) {
      toast.error("Please fill in all fields", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    // Retrieve user data from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];
    // console.log(users)
    // Find a user with the entered email
    const curentUser = users.find(
      (newUser) => newUser.email === email && newUser.password === password
    );
    // console.log(curentUser)
    // const user = users.find((user) => user.email === email);
    // let a=localStorage.setItem('usersData',JSON.stringify (curentUser))
    if (!curentUser) {
      toast.error("User not found", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    // Check if the password matches the stored password
    if (curentUser.password === password) {
      toast.success("Login successful!", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });

      //   console.log('Redirecting to /profile');
      localStorage.setItem("userData", JSON.stringify(curentUser));
      setTimeout(() => {
        history.push("/profile");
      }, 2000);
    } else {
      toast.error("Invalid password", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="centered-container">
      <h1 style={{ fontSize: "28px", marginTop: "18px" }}>
        Sign in to your
        <br /> PopX account
      </h1>
      <p style={{ fontSize: "19px", color: "#1D2226", marginTop: "-6px" }}>
        Lorem ipsum dolor sit amet,
        <br /> consectetur adipiscing elit,
      </p>
      <br />

      <ToastContainer />
      <div class="input-wrapper">
        <label for="first">
          Email Address <span style={{ color: "red" }}>*</span>
        </label>
        <input
          className="textFld"
          id="outlined-required"
          type="email"
          label="Email address"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div class="input-wrapper">
        <label for="first">
          Password <span style={{ color: "red" }}>*</span>
        </label>
        <input
          className="textFld"
          id="outlined-required"
          type="password"
          label="Password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={handleLogin} className="Loginp">
        Login
      </button>
    </div>
  );
};

export default LoginPage;
