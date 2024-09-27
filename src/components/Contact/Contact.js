import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

import "../../styles/Contact/Contact.scss";
const Contact = () => {
  const [fornData, setFornData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATS_ID,
        {
          from_name: fornData.name,
          from_email: fornData.email,
          subject: `Email From Portfolio-${fornData.name}`,
          message: fornData.message,
        },
        process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Email successfully sent!");
          setFornData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          toast.error("Failed to send email, please try again later.");
        }
      );
  };

  const onInputChange = (event) => {
    const { name, value } = event.target;

    setFornData({
      ...fornData,
      [name]: value,
    });
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="contact" id="contact">
        <div className="contact__header">
          <h1>
            <span data-aos="fade-down" data-aos-delay="0" data-aos-offset="200">
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-offset="200"
            >
              O
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-offset="200"
            >
              N
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="600"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="800"
              data-aos-offset="200"
            >
              A
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-offset="200"
            >
              C
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1200"
              data-aos-offset="200"
            >
              T
            </span>
            <span
              data-aos="fade-down"
              data-aos-delay="1400"
              data-aos-offset="200"
            >
              .
            </span>
          </h1>
        </div>
        <div className="contact__container">
          <div className="contact__details">
            <div className="contact__form" data-aos="fade-up">
              <form name="contact" method="post" onSubmit={sendEmail}>
                <input type="hidden" name="form-name" value="contact" />
                <p className="contact__form-group">
                  <label htmlFor="name">Name: </label>
                  <input
                    type="text"
                    name="name"
                    value={fornData.name}
                    autoComplete="off"
                    placeholder="Enter name"
                    required
                    onChange={onInputChange}
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="email">Email: </label>
                  <input
                    type="email"
                    name="email"
                    value={fornData.email}
                    autoComplete="off"
                    placeholder="Enter email"
                    required
                    onChange={onInputChange}
                  />
                </p>
                <p className="contact__form-group">
                  <label htmlFor="message">Concern: </label>
                  <textarea
                    name="message"
                    id="contact__message"
                    value={fornData.message}
                    cols="20"
                    rows="5"
                    placeholder="Type your messsage"
                    onChange={onInputChange}
                  ></textarea>
                </p>
                <button type="submit" className="contact__send-btn">
                  Send
                </button>
              </form>
            </div>
          </div>
          <div className="contact__info" data-aos="fade-up">
            <h3 className="contact__info-title">Let's Connect</h3>
            <div className="contact__info-details">
              <ul>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faLocationDot} size="2x" />
                  <p>
                    <span>Address:&nbsp;&nbsp;</span>Lahore Punjab Pakistan
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faPhone} size="2x" />
                  <p>
                    <span>Phone:</span>&nbsp;&nbsp;
                    <a
                      href="https://api.whatsapp.com/send/?phone=%2B923000071456&text&type=phone_number&app_absent=0"
                      target={"_blank"}
                      rel="noreferrer"
                      style={{
                        color: "white",
                        textDecoration: "none",
                        "&hover": { textDecoration: "underline" },
                      }}
                    >
                      (+92) 3000071456
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                  <p>
                    <span>Email:&nbsp;&nbsp;</span>
                    <a
                      href="mailto:msalman1221998@gmail.com"
                      target={"_blank"}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        "&hover": { textDecoration: "underline" },
                      }}
                      rel="noreferrer"
                    >
                      msalman1221998@gmail.com
                    </a>
                  </p>
                </li>
                <li>
                  {" "}
                  <FontAwesomeIcon icon={faSquareCheck} size="2x" />
                  <span>FREELANCE</span>
                </li>
              </ul>
            </div>
            <div className="contact__social">
              <p className="contact__linkedin">
                <a
                  href="https://www.linkedin.com/in/muhammad-salman-12feb1998"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
              </p>

              <p className="contact__github">
                <a
                  href="https://github.com/muhammad-salman-saleem"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
