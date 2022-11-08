import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../../styles";
const Home = () => {
  const sliderImg = [
    {
      imgLink:
        "https://i.ibb.co/LYbcfhh/couple-photo-shoot-wedding-day-7502-4935.webp",
    },
    {
      imgLink:
        "https://i.ibb.co/QKMzjf0/couple-dancing-ther-wedding-1157-93.webp",
    },
    {
      imgLink: "https://i.ibb.co/6RpBGvS/wedding-couple-france-1303-5581.webp",
    },
    {
      imgLink:
        "https://i.ibb.co/h1v8DBD/beautiful-caucasian-wedding-couple-is-standing-front-decorated-with-blue-hydrangea-archway-holding-h.webp",
    },
  ];
  const authInfo = useContext(AuthContext);
  return (
    <div
      className={`flex md:flex-row flex-col-reverse ${styles.paddingY}${styles.paddingX}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  `}
      >
        <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Capture your <br />
          <span className="text-gradient"> beautiful </span> <br />
          moments with us
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <Swiper
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mySwiper`}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {sliderImg.map((img) => (
          <SwiperSlide>
            {" "}
            <img src={img.imgLink} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home;
