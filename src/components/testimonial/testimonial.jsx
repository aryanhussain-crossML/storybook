import React from "react";
import styles from "./testimonial.module.scss";
import Slider from "react-slick";
import userIcon from "../../assets/testimonial/Ellipse.png";
import TestimonialCard from "../../global/testimonialCard/testimonialCard";
import "./testimonial.scss";

const Testimonial = () => {
  const testimonialsData = [
    {
      name: "Lyod Gomez",
      imageSrc: userIcon, // Replace with your actual image URL
      testimonialText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
    {
      name: "Haaland Books",
      imageSrc: userIcon, // Replace with your actual image URL
      testimonialText:
        "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section id={styles.testimonial}>
      <div className="container">
        <div className={`${styles.testimonial} testimonial`}>
          <div className={styles.itsButton}>
            <h2>Happy Customers Says </h2>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  imageSrc={testimonial.imageSrc}
                  testimonialText={testimonial.testimonialText}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
