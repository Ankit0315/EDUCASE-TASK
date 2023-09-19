import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [isAgency, setIsAgency] = useState("no");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleSignup = () => {
    // Basic validation
    if (!name || !email || !password || !phone) {
      toast.error("Please fill all required fields", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    // Password length validation (at least 6 characters)
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = existingUsers.some((user) => user.email === email);

    if (userExists) {
      toast.error("Email address is already in use", {
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
      });
      return;
    }

    const newUser = {
      name,
      email,
      password,
      phone,
      companyName,
      isAgency,
    };

    // Add the new user data to existing users in localStorage
    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    // Use toast to notify the user that the account was successfully created
    toast.success("Account created!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    // Redirect to the profile page or perform any other necessary actions
    setTimeout(() => {
      history.push("/profile");
    }, 2000);
  };

  const textFieldStyles = {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#CBCBCB", // Outline color
      },
    },
    "& .MuiInputLabel-root": {
      color: "#6C25FF", // Label color
    },
  };

  return (
    <div className="centered-container">
      <h1>Create your PopX account</h1>
      {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}

      <div class="input-wrapper">
        <label for="first">
          Full name<span style={{ color: "red" }}>*</span>
        </label>

        <input
          required
          id="outlined-required"
          className="textFld"
          placeholder="Name"
          label="FULL NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div class="input-wrapper">
        <label for="first">
          Phone number <span style={{ color: "red" }}>*</span>
        </label>
        <input
          required
          id="outlined-required"
          className="textFld"
          label=" Phone Number"
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>

      <div class="input-wrapper">
        <label for="first">
          Email address <span style={{ color: "red" }}>*</span>
        </label>

        <input
          required
          id="outlined-required"
          className="textFld"
          type="email"
          label="Email Address"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div class="input-wrapper">
        <label for="first">
          Password <span style={{ color: "red" }}>*</span>
        </label>

        <input
          required
          id="outlined-required"
          className="textFld"
          label="Password"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div class="input-wrapper">
        <label for="first">Company name</label>

        <input
          className="textFld"
          label="Company"
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </div>

      <div>
        <b>
          Are you an agency?<span style={{ color: "red" }}>*</span>
        </b>

        <br />
        <div className="rdio">
          <input
            type="radio"
            value="yes"
            checked={isAgency === "yes"}
            onChange={() => setIsAgency("yes")}
          />{" "}
          Yes
          <input
            type="radio"
            value="no"
            checked={isAgency === "no"}
            onChange={() => setIsAgency("no")}
          />{" "}
          No
        </div>
      </div>

      <br />
      <button onClick={handleSignup} className="createacc">
        Create Account
      </button>

      <ToastContainer />
    </div>
  );
};

export default SignupPage;
