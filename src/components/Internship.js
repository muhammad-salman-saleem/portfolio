import React from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'

const Internship = (props) => {
    return (
        <>
            <div className="internships__box">
                <h2><p>{props.details.compney}</p><p>{props.details.role}</p></h2>
                <h3><FontAwesomeIcon icon={faCalendarDays} className="internships__calendar" />&nbsp; &nbsp;{props.details.startDate} to {props.details.endDate}</h3>
                <ul>
                <p>Responsible for -</p>
                {props.details.keyPoints.map((item,index)=>(
                    <li data-aos='fade-right' data-aos-delay={index*2}>
                        <span>{item.description}</span>
                    </li>
                ))}
                </ul>
            </div>
        </>
    )
}

export default Internship