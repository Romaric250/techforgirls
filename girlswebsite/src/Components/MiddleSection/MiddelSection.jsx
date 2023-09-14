import React from "react";
import opendreams from "../../assets/opendreams.png";
import tic from "../../assets/tic.png";
import skaleway from "../../assets/skaleway.png";
import "./section1.css";
import graphics from "../../assets/graphics.jpeg";
import webdev from "../../assets/webdev.jpeg";
import ux from "../../assets/ux.jpeg";
import author from "../../assets/author.png";
import philemon from "../../assets/philemon 1.png";
import romaric from "../../assets/romaric 1.png";
import elisha from "../../assets/elisha.png";
import beryl from "../../assets/Beryl 1.png";
import zenith from "../../assets/zenith 1.png";
const Modules = ({ image, module, description }) => {
  return (
    <div className="module-wrapper">
      <img src={image} alt={`${module} image here`} />
      <h2>{module}</h2>
      <p>{description}</p>
    </div>
  );
};

const Clients = ({ testimonial, image, name, rating }) => {
  return (
    <div className="client-container">
      <p>{testimonial}</p>
      <div className="rating-wrapper">
        <div className="image-wrapper">
          <img src={image} alt="image here" />
        </div>

        <div className="name-wrapper">
          <h4>{rating}</h4>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
};

const Teams = ({ image, position, name }) => {
  return (
    <div className="team-wrapper">
      <img src={image} alt="image here" />
      <h2>{position}</h2>
      <h2>{name}</h2>
    </div>
  );
};

const MiddelSection = () => {
  return (
    <div className="middle-section-wrapper">
      <div className="partner-wrapper">
        <img src={tic} alt="tic logo here" />
        <img src={opendreams} alt="open dreams logo here" />
        <img src={skaleway} alt="skaleway logo here" />
      </div>
      <div className="main-module-wrapper">
        <h2>Our Training Modules</h2>
        <div className="module-container">
          <Modules
            image={graphics}
            module="Graphics Designing"
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <Modules
            image={ux}
            module="UI/UX Designing"
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
          <Modules
            image={webdev}
            module="Web development"
            description="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
          />
        </div>
        <div className="main-client-container">
          <h2>Students Testimonials</h2>
          <div className="client-wrapper">
            <Clients
              testimonial="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
              image={author}
              name="John Doe"
              rating="4.5/5"
            />
            <Clients
              testimonial="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
              image={author}
              name="John Doe"
              rating="4.5/5"
            />
            <Clients
              testimonial="This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
              image={author}
              name="John Doe"
              rating="4.5/5"
            />
          </div>
        </div>
      </div>

      <div className="main-team-wrapper">
        <h2>Our Team</h2>
        <div className="team-container">
          <Teams
            image={elisha}
            position="Graphics Design facilitator"
            name="Ghany Elisha"
          />

          <Teams
            image={romaric}
            position="Web Developement Facilitator"
            name="Romaric Lonfonyuy"
          />
          <Teams
            image={philemon}
            position="UI/UX Design facilitator"
            name="Philemon Tebo Tebo"
          />
          <Teams image={beryl} position="Project Manager" name="Beryl Efeti" />
          <Teams
            image={zenith}
            position="Web Developement Facilitator"
            name="Etongo Bossadi Zenith"
          />
        </div>
      </div>
    </div>
  );
};

export default MiddelSection;
