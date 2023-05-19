import React from "react";
import "./index.css";

const LoginBanner = () => {
  return (
    <div className="loginbanner">
      <div className="loginbanner-container">
        <div className="loginbanner-header">
          <h1 className="title">
          Referral Commission 5%
          </h1>
          <p className="description">
          Become WealthGo affiliate and enjoy high commissions 
          for lifetime; You’ll earn 5% commission every time if
           your downline made a deposit. There is no limitation
            for the commission.
          </p>
        </div>
        <div className="">
          <button className="loginbanner-btn">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default LoginBanner;
