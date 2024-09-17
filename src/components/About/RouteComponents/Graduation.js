import React from "react";

import "../../../styles/About/Route/Graduation.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Graduation = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="graduation">
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
        <div className="graduation__container">
          <div className="graduation__header">
            <h2 className="graduation__number">
              0<span>4</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>ngineering</span>.
            </h1>
          </div>

          <div className="graduation__description">
            <h1>Univeristy Of Education Lahore</h1>
            <h2>
              <FontAwesomeIcon
                icon={faCalendarDays}
                className="internships__calendar"
              /> Session:
              &nbsp;&nbsp;2018-2022
            </h2>
            <h4>Bachelor of Science in Information Technology (Hons) CGPA: 3.01</h4>
            <p>
              Gained a comprehensive understanding of core IT concepts,
              including software development, database management, networking,
              and system analysis. Developed strong analytical and
              problem-solving skills through various academic projects and
              practical experiences. Successfully completed coursework and
              projects that emphasized full-stack development, data structures,
              and algorithm design.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Graduation;
