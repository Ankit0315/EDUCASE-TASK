import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData) {
      setUserData(storedUserData);
    } else {
      // If user data is not found, redirect to login
      history.push("/login");
    }
  }, [history]);

  const handleLogout = () => {
    // Clear user data from localStorage on logout
    localStorage.removeItem("userData");

    toast.success("Logout successful!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });

    history.push("/login");
  };

  const getFirstTwoLetters = (str) => {
    return str ? str.slice(0, 2).toUpperCase() : "";
  };

  return (
    <div>
      <h2
        style={{
          textAlign: "left",
          height: "50px",
          backgroundColor: "#FFFFFF",
          margin: "0px",
          padding: "0px",
        }}
      >
        Account Settings
      </h2>
      <div className="profile-item">
        <div className="profile-image">
          {userData ? (
            <div className="profile-letters">
              {getFirstTwoLetters(userData.name)}
            </div>
          ) : (
            <div className="profile-placeholder"></div>
          )}
        </div>
        <div className="profile-details">
          <p>
            {userData ? (
              userData.name
            ) : (
              <span className="no-data">No data</span>
            )}
          </p>
          <p>
            {userData ? (
              userData.email
            ) : (
              <span className="no-data">No data</span>
            )}
          </p>
        </div>
      </div>
      <div className="profile-text">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <hr className="dotted-line" />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default ProfilePage;
