import React from 'react';

// Used 'react-collapsible' package for creating collapsible bars
import Collapsible from 'react-collapsible';

import '../styles/ProjectCard.scss';
const colors = ['#00ffff', '#ffa500', '#5ced73', '#b19cd9', '#ff6347'];
const ProjectCard = (props) => {
  const borderColor = colors[props.index % colors.length]; 
  return (
    <>
      <div
        className="project-card"
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-delay={props.cardContent.animationDelay}
        style={{ borderTopColor: borderColor }}
      >
        <div className="project-card__container">
          <Collapsible trigger={props.cardContent.heading}>
            <div className="project-card__description-content">
              <p>{props.cardContent.description}</p>
              <a
                href={props.cardContent.buttonLink}
                target="_blank"
                rel="noreferrer"
                style={{ backgroundColor: borderColor,display:props.cardContent.buttonLink===""&&"none" }}
              >
                {props.cardContent.buttonText}
              </a>
            </div>
          </Collapsible>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
