import ServiceCard from "../../global/servicesCard/serviceCard";
import styles from "./services.module.scss";
import cycles from "../../assets/services/Rectangle 18.png";
import guideTour from "../../assets/services/Rectangle 19.png";
import taxi from "../../assets/services/Rectangle 20.png";
import busPackage from "../../assets/services/busPackage.png";


const Services = () => {
  const servicesData = [
    {
      title: "Bike and rickshaw rental",
      description: "Book your quality vehicle quickly for an hour or all day!",
      imageUrl: cycles, // Replace with your actual image URL
    },
    {
      title: "Car rental",
      description: "Rent a comfortable car for your weekend getaway!",
      imageUrl: guideTour,
    },
    {
      title: "Taxi service",
      description: "Reliable and affordable taxi rides at your fingertips!",
      imageUrl: taxi,
    },
    {
      title: "Scooter rentals",
      description: "Explore the city with ease on a convenient scooter!",
      imageUrl: busPackage,
    },
  ];

  return (
    <section id={styles.services}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.services} d-flex gap-5`}>
          {servicesData.map((item, index) => (
            <ServiceCard
              key={index} // Add a unique key for each card
              title={item.title}
              description={item.description}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
