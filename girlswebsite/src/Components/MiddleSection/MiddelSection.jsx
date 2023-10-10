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
      <div className="main-module-wrapper" id="about">
        <h2>Our Training Modules</h2>
        <div className="module-container">
          <Modules
            image={graphics}
            module="Graphics Designing"
            description=" Whether it's brochures, flyers, social media graphics, or digital banners, we excel at designing eye-catching collateral that communicates your message effectively. Our graphic designers combine creativity and technical expertise to produce high-quality assets that align with your brand and marketing goals"
          />
          <Modules
            image={ux}
            module="UI/UX Designing"
            description="User-Centered Design:At the heart of our UI/UX approach is a deep understanding of your target audience. We employ user-centered design principles to create intuitive interfaces that prioritize usability and enhance the overall user experience. From wireframing and prototyping to user testing, we ensure that every interaction with your website or application is meaningful and delightful. Visual Design:Our UI/UX designers are masters of visual storytelling. We craft visually appealing interfaces that align with your brand identity and captivate your users."
          />
          <Modules
            image={webdev}
            module="Web development"
            description="Our team of skilled web developers is dedicated to crafting exceptional websites that combine stunning design with seamless functionality. From front-end development using HTML, CSS, and JavaScript to back-end programming with languages like Python or PHP, we have the expertise to bring your vision to life. Responsive Design:In today's mobile-centric world, responsive design is crucial. We specialize in creating websites that adapt seamlessly to different screen sizes and devices, providing an optimal user experience across desktops, tablets, and smartphones"
          />
        </div>
        <div className="main-client-container">
          <h2>Students Testimonials</h2>
          <div className="client-wrapper">
            <Clients
              testimonial="The web development module provided by girslfortech were exceptional! They transformed my ideas into a visually stunning and highly functional website. The team paid great attention to detail and ensured that my website was responsive across all devices. I am thrilled with the outcome!"
              image={author}
              name="Precious Ngenwi"
              rating="4.5/5"
            />
            <Clients
              testimonial="The UI/UX services provided by girlsfortech were outstanding. They truly understood the importance of user-centered design and created intuitive interfaces that delighted my clients. The wireframes and prototypes were incredibly helpful in visualizing the final product. I highly recommend their services."
              image={author}
              name="Masha Allah"
              rating="4.5/5"
            />
            <Clients
              testimonial=" I wanted to develop a personal portfolio website to showcase my work, and girlsfortech helped me do that beyond my expectations. The web developers created a visually appealing website that perfectly reflected my style. They incorporated smooth animations and interactive elements that made my portfolio stand out"
              image={author}
              name="Abong Gaelle"
              rating="4.7/5"
            />
          </div>
        </div>
      </div>

      <div className="main-team-wrapper" id="team">
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
