import React, { useEffect } from "react";
import "./index.css";
import aboutpic from "../../assets/business.jpg";
import mission from "../../assets/mission.png";
import values from "../../assets/values.png";
import avatar from "../../assets/avatar.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
const Aboutpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page">
      <div className="aboutpage-header">
        <h1>
          ABOUT <span style={{ color: "#C48E02" }}>US</span>{" "}
        </h1>
      </div>
      <div className="about-pageContainer">
        <img src={aboutpic} className="abouts-img" alt="" />
        <div className="ourstory">
          <h3>Our Story</h3>
          <p className="our-story">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            recusandae dolores optio tenetur sapiente voluptas dolor incidunt,
            deleniti tempore nam ab saepe voluptatum velit provident ut ullam
            magnam eveniet repudiandae. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Beatae id quo sequi ab voluptas obcaecati
            architecto ea rerum animi! Vel quaerat recusandae soluta doloremque
            temporibus accusamus aliquid quae molestiae nulla. Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Odio vel recusandae quasi,
            tenetur nam a repellat, commodi, tempora iusto voluptatibus eligendi
            repellendus pariatur neque magnam ducimus laudantium veritatis unde
            reprehenderit.
          </p>
        </div>
        <div className="aboutpage-textContainer">
          <div className="about-mission">
            <div className="mission-text">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                omnis laboriosam, deleniti a expedita tenetur natus maxime error
                minus sunt praesentium facilis accusamus velit, architecto dolor
                quisquam rem iste unde!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                omnis laboriosam, deleniti a expedita tenetur natus maxime error
                minus sunt praesentium facilis accusamus velit, architecto dolor
                quisquam rem iste unde!
              </p>
            </div>
            <img src={mission} alt="" className="mission-img" />
          </div>
          <div className="about-values">
            <img src={values} alt="values" className="mission-img" />
            <div className="mission-values">
              <h3>Our Values</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                omnis laboriosam, deleniti a expedita tenetur natus maxime error
                minus sunt praesentium facilis accusamus velit, architecto dolor
                quisquam rem iste unde!
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                omnis laboriosam, deleniti
              </p>
            </div>
          </div>
          <div className="about-team">
            <h2 className="team-header">Meet Our Team</h2>
            <div className="team-container">
              <div className="team-leaders">
                <img src={avatar} alt="" className="team-exec" />
                <div className="leaders-text">
                  <h5>name</h5>
                  <p>Title</p>
                </div>
              </div>
              <div className="team-leaders">
                <img src={avatar2} alt="" className="team-exec" />
                <div className="leaders-text">
                  <h5>name</h5>
                  <p>Title</p>
                </div>
              </div>
              <div className="team-leaders">
                <img src={avatar3} alt="" className="team-exec" />
                <div className="leaders-text">
                  <h5>name</h5>
                  <p>Title</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage;
