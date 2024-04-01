import { People, calendarIcon } from "../../assets/icons";
import styles from "./destinationCardTwo.module.scss"

const DestinationsCardsTwo = ({
  image,
  title,
  price,
  schedule,
  groupSize,
  description,
}) => {
  return (
    <div className={`${styles.destinationCard}`}>
      <div className={`${styles.image}`}>
        <img src={image} alt="image not found" />
      </div>
      <div className={`${styles.down}`}>
        <h3>{title}</h3>
        <div className={`${styles.price}`}>
          from <span>{price} &#8364;</span>
        </div>
        <div className={`${styles.someDetails} d-flex justify-between align-items-center `}>
          <div className={`${styles.left}`}>{People}{schedule}</div>
          <div className={`${styles.right}`}>{calendarIcon} {groupSize} PP</div>
        </div>
        <div className={`${styles.caption}`}>{description}</div>
      </div>
    </div>
  );
};

export default DestinationsCardsTwo;
