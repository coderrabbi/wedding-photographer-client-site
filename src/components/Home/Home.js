import React from "react";
// import { AuthContext } from "../../context/AuthProvider";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import styles from "../../styles";
import About from "../About/About";
import FAQ from "../FAQ/FAQ";
import Help from "../Help/Help";
import { Link } from "react-router-dom";
import Services from "../../pages/Services/Services";
import useTitle from "../../hooks/useTitle";
const Home = () => {
  useTitle("Home");
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
  // const authInfo = useContext(AuthContext);
  return (
    <div className={`${styles.paddingY} ${styles.paddingX}`}>
      <div className={`flex md:flex-row flex-col-reverse `}>
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6  `}
        >
          <h1 className="font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Capture your <br />
            <span className="text-gradient"> beautiful </span> <br />
            moments with us
          </h1>
          <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
            Everyone wants to keep their memorable day as a photo. If it is a
            wedding and engagement ceremony, then there is no space to talk
            about it. So lets colabrate with me and capture the beautiful
            moments.
          </p>
          <button
            type="button"
            className={`py-4 px-6 outline-none font-poppins bg-blue-gradient ${styles} text-primary rounded-[10px] mt-6`}
          >
            <Link to="services"> Explore Services</Link>
          </button>
        </div>

        <Swiper
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative mySwiper rounded-xl`}
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
          {sliderImg.map((img, index) => (
            <SwiperSlide key={index}>
              {" "}
              <img src={img.imgLink} alt={`slider ${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute z-[0] w-[40%] h-[35%] top-20 pink__gradient" />
        {/* <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" /> */}
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <Services />
      <About />
      <Help />
      <FAQ />
    </div>
  );
};

export default Home;
