import React from "react";
import Navbar from "./Navbar";
import "./header.css";
import beryl from "../../assets/Beryl 1.png";
const Header = () => {
  return (
    <div className="main-header">
      <div className="header-content">
        <div className="header-wrapper">
          <div className="left-section">
            <h2>YES YOU CAN !</h2>
            <p>
              Together, let's empower girls with tech and shape a future where{" "}
              <br />
              gender equality and innovation go hand in hand.
            </p>

            <button>Contact Us</button>
          </div>

          <div className="right-section">
            <img src={beryl} alt="tech girl  photo here" />
            <div className="elipse1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
