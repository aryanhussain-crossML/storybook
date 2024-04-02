import styles from './packageCard.module.scss'; // Assuming styles are in a CSS module named PackageCard.module.css

const PackageCard = ({ image, title, pricing, features, svgIcon }) => {
  return (
    <div className={styles.packageCard}>
      <div className={styles.imgCon}>
        <img src={image} alt="img not found" />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.pricing}>
        <span>{pricing}</span>/day
      </div>
      <div className={styles.features}>
        <ul>
          {features?.map((feature,index) => (
            <li key={index}>
              {/* Assuming svg is a component or JSX for the SVG */}
              {feature.svgIcon} {feature.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.bookNow}>
        <button>Book Now</button>
      </div>
    </div>
  );
};

export default PackageCard;