import React, { useEffect, useState } from 'react'

import '../../../styles/About/Route/Intro.scss'
import { experienceStartDate } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
const Intro = () => {
    const navigate = useNavigate();
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
            <div className="about-intro">
            <div style={{display:"flex",marginLeft:"50px",marginTop:"30px"}}>
          <h3 style={{color:"#00ffff",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>navigate(-1)}>
            <FontAwesomeIcon icon={faArrowLeftLong} style={{color:"#00ffff",height:"30px",width:"30px",}} />
            &nbsp; Back
          </h3>
        </div>
                <div className="about-intro__container">
                    <div className="about-intro__header">
                        <h2 className="about-intro__number">0<span>1</span></h2>
                        <h1 data-aos='fade-down' data-aos-offset="0">H<span>ello</span>.</h1>
                    </div>
                    <div className="about-intro__description">
                        <p data-aos='fade-right' >I am <span>Muhammad Salman</span></p>
                        <p data-aos='fade-right' data-aos-delay='200'>Highly skilled and motivated MERN Stack Developer with {experience} of experience in both web and native
                        application development.</p>
                        <p data-aos='fade-right' data-aos-delay='400'>Proficient in leveraging the power of MongoDB, Express.js, React.js, Next.js, and
                        Node.js to create robust and scalable applications.</p>
                        <p data-aos='fade-right' data-aos-delay='600'>Adept at collaborating with cross-functional teams to
                        deliver innovative solutions that meet both user needs and business objectives.</p>
                        <p data-aos='fade-right' data-aos-delay='800'>Seeking to contribute my
expertise in full-stack development to a dynamic team, where I can continue to grow and make
meaningful contributions to cutting-edge projects.</p>

                        <div className="about-intro__emoji">:&nbsp;)</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Intro