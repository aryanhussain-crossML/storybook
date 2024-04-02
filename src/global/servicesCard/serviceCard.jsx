import React from 'react';
import styles from "./serviceCard.module.scss"

const ServiceCard = ({ title, description, imageUrl }) => {
  return (
    <div className={`${styles.servicesCard}`}>
      <div className={`${styles.imgCon}`}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={`${styles.lower}`}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;