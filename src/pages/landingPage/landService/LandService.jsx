import React, { useEffect, useState } from "react";
import { readService } from "../../../api/service/readService";
import styles from "./LandService.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { v4 as uuidv4 } from "uuid";
import { Autoplay } from "swiper";
import { useNavigate } from "react-router-dom";
import "./LandService.css";
import LandText from "../landText/LandText";
export default function LandService() {
  const navegate = useNavigate();
  const [services, setServices] = useState([]);
  useEffect(() => {
    readService(setServices);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        <Swiper
          spaceBetween={50}
          slidesPerView={services.length >= 3 ? 3 : 1}
          modules={[Autoplay]}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          speed={800}
          loop={true}
        >
          {services?.map((service) => (
            <SwiperSlide key={uuidv4()}>
              <div className={styles.sliderContent}>
                <img
                  onClick={() => {
                    navegate(
                      `${process.env.REACT_APP_API_SUB_OPTION_THREE_URL}`
                    );
                  }}
                  className={styles.img}
                  src={`${process.env.REACT_APP_URL_SERVICE}/${service?.ID}/${service?.THUMBNAIL_IMG}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <LandText text={"PACKAGE"} position={-200} />
      <div className={styles.bg}></div>
    </div>
  );
}
