import React from "react";
import "./index.css";
import bank from "../../assets/bank.svg";
import create from "../../assets/create.svg";
import invest from "../../assets/invest.svg";
import investment from "../../assets/investment.svg";

const Works = () => {
  return (
    <div className="works">
      <div className="works-container">
        <div className="works-header">
          <h2 className="title">Get started in a few steps</h2>
          {/* <p className="description">
          Get started in a few steps
          </p> */}
        </div>
        <div className="works-steps">
          <div className="works-step">
            <div className="img-div orange">
              <img src={create} alt="sign up" className="work-img" />
            </div>
            <div className="work-text">
              <p className="work-desc">Create an account</p>
            </div>
          </div>
          <div className="works-step">
            <div className="img-div blue">
              <img src={bank} alt="sign up" className="work-img" />
            </div>
            <div className="work-text">
              <p className="work-desc">Choose a plan and invest</p>
            </div>
          </div>
          <div className="works-step">
            <div className="img-div green">
              <img src={invest} alt="sign up" className="work-img" />
            </div>
            <div className="work-text">
              <p className="work-desc">Make deposit & start earning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
