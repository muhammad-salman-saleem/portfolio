import React from "react";

import "../../../styles/About/Route/Internships.scss";

import Internship from "../../Internship";

import data from "../../../data";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const Internships = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="internships">
        <div style={{ display: "flex", marginLeft: "50px", marginTop: "30px" }}>
          <h3
            style={{
              color: "#00ffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate(-1)}
          >
            <FontAwesomeIcon
              icon={faArrowLeftLong}
              style={{ color: "#00ffff", height: "30px", width: "30px" }}
            />
            &nbsp; Back
          </h3>
        </div>
        <div className="internships__container">
          <div className="internships__header">
            <h2 className="internships__number">
              0<span>3</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              I<span>nternships</span>.
            </h1>
          </div>
          <div className="internships__description">
            <div className="internships__main-box">
              {data.portfolio.internships.internship.map((content,index) => (
                <Internship key={content.companyName} details={content} index={index}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Internships;
