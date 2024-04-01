"use client";
import React from "react";
import { Box } from "@mui/material";
import Slider from "react-slick";
import DestinationsCards from "../../global/destinationCards/destinationsCards";
import cycle from "../../assets/explore/cycle.png";
import wine from "../../assets/explore/openGreen.png";
import seaside from "../../assets/explore/seaside.png";
import opengreen from "../../assets/explore/wine.png";
import DestinationsCardsTwo from "../../global/destinationCards/destinationCardTwo";

import styles from "./explore.module.scss";
import './explore.scss'

const Explore = () => {
  const destinationData = [
    {
      image: cycle,
      title: "Lucca Bike Tour",
      price: "34",
      schedule: "EVERY DAY",
      groupSize: "3-10",
      description:
        "A tour of the city and its surroundings led by a professional guide...",
    },
    {
      image: wine,
      title: "Venice Gondola Ride",
      price: "50",
      schedule: "MON-SAT",
      groupSize: "1-4",
      description:
        "Experience the romantic canals of Venice on a classic gondola ride...",
    },
    {
      image: seaside,
      title: "Rome City Tour",
      price: "40",
      schedule: "WEEKENDS",
      groupSize: "2-5",
      description:
        "Explore the ancient streets of Rome with an expert guide...",
    },
    {
      image: opengreen,
      title: "Paris Night Walk",
      price: "45",
      schedule: "FRI & SAT",
      groupSize: "2-6",
      description:
        "Discover the City of Lights under the stars with a nocturnal walking tour...",
    },
    {
      image: cycle,
      title: "Lucca Bike Tour",
      price: "34",
      schedule: "EVERY DAY",
      groupSize: "3-10",
      description:
        "A tour of the city and its surroundings led by a professional guide...",
    },
    {
      image: wine,
      title: "Venice Gondola Ride",
      price: "50",
      schedule: "MON-SAT",
      groupSize: "1-4",
      description:
        "Experience the romantic canals of Venice on a classic gondola ride...",
    },
    {
      image: seaside,
      title: "Rome City Tour",
      price: "40",
      schedule: "WEEKENDS",
      groupSize: "2-5",
      description:
        "Explore the ancient streets of Rome with an expert guide...",
    },
    {
      image: opengreen,
      title: "Paris Night Walk",
      price: "45",
      schedule: "FRI & SAT",
      groupSize: "2-6",
      description:
        "Discover the City of Lights under the stars with a nocturnal walking tour...",
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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
    <section id={styles.explore}>
      <div className={`${styles.container} container`}>
        <div className={`${styles.explore} explore`}>
          <div className={styles.itsButton}>
            <h2>Explore Our Popular Destinantions </h2>
          </div>
          <div className="slider-container">
            <Slider {...settings}>
              {/* {destinationData.map((index, data) => (
              <DestinationsCards
                key={index}
                image={data.image}
                title={data.title}
                price={data.price}
                schedule={data.schedule}
                groupSize={data.groupSize}
                description={data.description}
              />
            ))} */}

              {destinationData.map((data, index) => (
                <div key={index}>
                  <DestinationsCardsTwo
                    key={index}
                    image={data.image}
                    title={data.title}
                    price={data.price}
                    schedule={data.schedule}
                    groupSize={data.groupSize}
                    description={data.description}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
