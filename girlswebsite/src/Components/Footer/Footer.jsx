import React from "react";
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/nstagram.png";
import "./footer.css";

const Submit = (e) => {};

const Footer = () => {
  return (
    <div className="footer-content">
      <div className="drawline"></div>
      <div className="main-footer-content">
        <div className="left-side">
          <h2>Get in Touch With Us</h2>
          <p>
            We would be delighted to hear from you. <br /> Whether you have a
            question about our <br />
            services, need assistance, or simply want <br /> to share your
            thoughts, we are here to <br /> listen and provide support. <br />{" "}
            We look forward to hearing from you <br />
            and assisting you in any way we can!
          </p>
          <div className="social-icons">
            <img src={facebook} alt="facebook" />
            <img src={instagram} alt="instagram" />
            <img src={youtube} alt="youtube" />
            <div className="h3">@girlsfortech237</div>
          </div>
        </div>
        <div className="right-side">
          <form action="">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea
              name="text"
              id=""
              cols="30"
              rows="10"
              placeholder="Type your message here"
            ></textarea>

            <button type="button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;
