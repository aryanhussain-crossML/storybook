import styles from "./popular.module.scss";
import PackageCard from "../../global/packageCard/packageCard";
import rickshaw from "../../assets/packages/auto.png";
import BikeTours from "../../assets/packages/biketours.png";
import BusTrips from "../../assets/packages/bustrips.png";
import Transfer from "../../assets/packages/transfer.png";
import {
  Layer,
  cityMap,
  iconMap,
  support,
} from "../../assets/packages/packagesIcon";

const PopularPackages = () => {

  const packageData = [
    {
      image: rickshaw,
      title: "Bike/RickShaw",
      pricing: 10,
      features: [
        { svgIcon: iconMap, title: "Comfortable ride" },
        { svgIcon: support, title: "Great for short trips" },
        { svgIcon: cityMap, title: "Helmet included" },
        { svgIcon: Layer, title: "Affordable option" },
      ],
    },
    {
      image: BikeTours,
      title: "Bike Tours",
      pricing: 15,
      features: [
        { svgIcon: iconMap, title: "Easy to maneuver" },
        { svgIcon: support, title: "Faster than bike" },
        { svgIcon: cityMap, title: "Storage compartment" },
        { svgIcon: Layer, title: "Fun and convenient" },
      ],
    },
    {
      image: BusTrips,
      title: "Bus Trips",
      pricing: 50,
      features: [
        { svgIcon: iconMap, title: "Air-conditioned" },
        { svgIcon: support, title: "Accommodates 4 people" },
        { svgIcon: cityMap, title: "Luggage space" },
        { svgIcon: Layer, title: "Ideal for city exploration" },
      ],
    },
    {
      image: Transfer,
      title: "Transfer",
      pricing: 75,
      features: [
        { svgIcon: iconMap, title: "Spacious and comfortable" },
        { svgIcon: support, title: "Accommodates more passengers" },
        { svgIcon: cityMap, title: "Perfect for families or groups" },
        { svgIcon: Layer, title: "Long-distance travel option" },
      ],
    },
  ];

  return (
    <section id={`${styles.popularPackages}`}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.popularPackages}`}>
          <h2>The Most Popular Packages</h2>
          <div className={`${styles.packagesContainer} d-flex gap-5`}>
            {packageData.map((item, index) => (
              <PackageCard
                image={item.image}
                key={index}
                title={item.title}
                pricing={item.pricing}
                features={item.features}
                svg={item.svg}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularPackages;
