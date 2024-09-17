import React, { useEffect, useState } from "react";

import "../../styles/Hero/Hero.scss";

import Myself from "../../assets/images/myself.png";
import { experienceStartDate } from "../../App";
import CV from "../../assets/Full Stack Developer.pdf"

const Hero = () => {
  const [experience, setExperience] = useState('');
  useEffect(() => {
    const alphbets = document.getElementsByClassName("hero__alphabet");
    for (let i = 0; i <= alphbets.length; i++) {
      alphbets[i]?.addEventListener("animationend", function () {
        alphbets[i].classList.remove("alphabet-animated");
      });

      alphbets[i]?.addEventListener("mouseover", function () {
        alphbets[i].classList.add("alphabet-animated");
      });
    }
  }, []);

  useEffect(() => {
    const calculateExperience = (startDate) => {
      const start = new Date(startDate);
      const now = new Date();
  
      let years = now.getFullYear() - start.getFullYear();
      let months = now.getMonth() - start.getMonth();
  
      if (months < 0) {
        years--;
        months += 12;
      }

      return months > 0 ? `${years} years and ${months} months` : `${years} years`;
    };

    const experienceValue = calculateExperience(experienceStartDate);
    setExperience(experienceValue);
  }, []);

  return (
    <>
      <div className="hero">
        <div className="hero__container">
          <div className="hero__intro-box">
            <p className="hero__intro-title">
              <span className="hero__intro-line" data-aos="fade-down"></span>
              Hello, I am Salman Saleem
            </p>
            <p className="hero__animated-alphabet-box">
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                M
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                E
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                R
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                N
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1000"
              >
                S
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1200"
              >
                t
              </span>
              <span
                className="hero__alphabet"
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                a
              </span>
              <span
                className="hero__alphabet "
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                c
              </span>
              <span
                className="hero__alphabet hero__alphabet--last"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                k
              </span>
              <span
                className="hero__developer-text"
                data-aos="zoom-out-down"
                data-aos-delay="2000"
              >
                <span className="hero__dev-text">Developer</span>
              </span>
            </p>
            <div
              className="hero__description"
              data-aos="fade"
              data-aos-delay="2200"
            >
              <p>
                Highly skilled and motivated <span>MERN Stack Developer</span>{" "}
                with {experience} of experience in both web and native application
                development. Proficient in leveraging the power of MongoDB,
                Express.js, React.js, Next.js, and Node.js to create robust and
                scalable applications. Adept at collaborating with
                cross-functional teams to deliver innovative solutions that meet
                both user needs and business objectives. Seeking to contribute
                my expertise in full-stack development to a dynamic team, where
                I can continue to grow and make meaningful contributions to
                cutting-edge projects.
              </p>
            </div>

            <div className="hero__buttons">
              <a
                className="hero__know-btn"
                href="#about"
                data-aos="fade-up"
                data-aos-delay="1800"
              >
                Know more
              </a>
              <a
                className="hero__contact-btn"
                href="#contact"
                data-aos="fade-up"
                data-aos-delay="2000"
              >
                Contact me
              </a>
            </div>
            <div className="hero__buttons" style={{marginTop:"1em"}}>
              <a
                className="hero__contact-btn"
                href={CV} download
                data-aos="fade-up"
                data-aos-delay="2200"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero__image" data-aos="zoom-in" data-aos-delay="200">
            <img src={Myself} alt="me" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
