import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../../styles/About/About.scss";
import { experienceStartDate } from "../../App";

const About = () => {
  const [experience, setExperience] = useState('');

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

      // Return a string with years and months, if months > 0
      return months > 0 ? `${years} years and ${months} months` : `${years} years`;
    };

    const experienceValue = calculateExperience(experienceStartDate);
    setExperience(experienceValue);
  }, []);

  return (
    <>
      <div className="about" id="about">
        <div className="about__container">
          <div className="about__header" id="about__heading">
            <h1 data-aos="fade-down" data-aos-delay="0" data-aos-offset="20">
              <span
                data-aos="fade-down"
                data-aos-delay="0"
                data-aos-offset="200"
              >
                A
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-offset="200"
              >
                B
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-offset="200"
              >
                O
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="600"
                data-aos-offset="200"
              >
                U
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="800"
                data-aos-offset="200"
              >
                T
              </span>
              <span
                data-aos="fade-down"
                data-aos-delay="1000"
                data-aos-offset="200"
              >
                .
              </span>
            </h1>
            <p></p>
          </div>

          <div className="about__details-container">
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="0"
              data-aos-delay="0"
              data-aos-once="true"
            >
              <Link to="/about/intro">
                <h1>
                  0<span>1</span>
                </h1>
                <h2>
                  H<span>ello,</span>
                </h2>
                <p>
                  I am <span>Muhammad Salman</span> <br /> Highly passoinate
                  MERN Stack Developer with {experience} of experience in both web and native
                  application development.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="200"
              data-aos-once="true"
            >
              <Link to="/about/experience">
                <h1>
                  0<span>2</span>
                </h1>
                <h2>
                  E<span>xperience</span>
                </h2>
                <p>
                  <span>{experience} of experience.</span>
                  <br />Highly skilled and motivated MERN Stack Developer with {experience} of experience in both web and native
application development. Proficient in leveraging the power of MongoDB, Express.js, React.js, Next.js, and
Node.js to create robust and scalable applications.
                </p>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="50"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <Link to="/about/internships">
                <h1>
                  0<span>3</span>
                </h1>
                <h2>
                  I<span>nternships</span>
                </h2>
                <p>
                  <span>Interned at -</span> <br />
                </p>
                <ul>
                  <li>
                    <span>Loop Nixon</span> - Full Stack Developer Developer{" "}
                  </li> 
                </ul>
              </Link>
            </div>
            <div
              className="about__details"
              data-aos="fade-down"
              data-aos-offset="-180"
              data-aos-delay="700"
              data-aos-once="true"
            >
              <Link to="/about/graduation">
                <h1>
                  0<span>4</span>
                </h1>
                <h2>
                  E<span>ngineering</span>
                </h2>
                <p>
                  <span>Univeristy Of Education Lahore</span>
                  <br />
                  Graduated with a Bachelor of Science in Information Technology, achieving a CGPA of 3.01.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
