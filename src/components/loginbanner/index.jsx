import React from "react";
import "./index.css";

const LoginBanner = () => {
  return (
    <div className="loginbanner">
      <div className="loginbanner-container">
        <div className="loginbanner-header">
          <h1 className="title">
            Become part of a community of people who have found their path to
            the crypto world with WealthGO
          </h1>
        </div>
        <div className="">
          <button className="loginbanner-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
