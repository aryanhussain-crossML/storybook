import styles from "./testimonialCard.module.scss"

const TestimonialCard = ({ name, imageSrc, testimonialText }) => {
  return (
    <div className={`${styles.testimonialCard}`}>
      <div className={`${styles.upper} `}>
        <div className={`${styles.imgCon}`}>
          <img src={imageSrc} alt="Testimonial Author" />
        </div>
        <p>{name}</p>
      </div>
      <div className={`${styles.lower}`}>
        <p>{testimonialText}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;