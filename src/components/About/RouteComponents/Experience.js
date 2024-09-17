import React from "react";

import "../../../styles/About/Route/Experience.scss";
import data from "../../../data";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays,faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Experience = () => {
    const navigate = useNavigate();
  return (
    <>
      <div className="experience">
      <div style={{display:"flex",marginLeft:"50px",marginTop:"30px"}}>
          <h3 style={{color:"#00ffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} style={{color:"#00ffff",height:"30px",width:"30px",}} />
            &nbsp; Back
          </h3>
        </div>
        <div className="experience__container">
          <div className="experience__header">
            <h2 className="experience__number">
              0<span>2</span>
            </h2>
            <h1 data-aos="fade-down" data-aos-offset="0">
              E<span>xperience</span>.
            </h1>
          </div>
          <div className="experience__description">
            <div className="experience__main-box">
              {data.portfolio.experience.experience.map((item,index) => (
                <>
                  <div className="experience__box" key={index}>
                    <h2>{item.compney}</h2>
                    <h3>
                      <FontAwesomeIcon
                        icon={faCalendarDays}
                        className="experience__calendar"
                      />
                      &nbsp; &nbsp;{item.startDate} to {item.endDate}
                    </h3>
                    <ul>
                      <p>Responsible for -</p>
                      {item.keyPoints&&item.keyPoints.map((item,index)=>(
                      <li data-aos="fade-right" data-aos-delay={index*2}>
                        <span>
                          {item.description}
                        </span>
                      </li>
                      ))}
                    </ul>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
