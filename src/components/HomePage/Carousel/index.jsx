import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel1 from "assets/images/carousel1.webp";
import Carousel2 from "assets/images/carousel2.webp";
import Carousel3 from "assets/images/carousel3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import styles
import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="CarouselContainer">
      <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={Carousel1} alt="Carousel 1"></img>
          <div className="textContainer">
            <h3>Explore, learn and act</h3>
            <p>
              Discover a wealth of information on environmental issues from
              climate change to biodiversity. Explore a collection of
              educational videos, success stories and sustainable living tips.
              Take part in interactive quizzes and challenges and join a lively
              discussion forum to exchange ideas with a like-minded community.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="Carousel 2"></img>
          <div className="textContainer">
            <h3>Calculate your impact</h3>
            <p>
              Are you curious about your carbon footprint? With our
              user-friendly tools you can calculate your environmental impact.
              Explore ways to reduce your footprint and make eco-conscious
              choices in your daily life.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel3} alt="Carousel 3"></img>
          <div className="textContainer">
            <h3>Resources for action</h3>
            <p>
              Access a wealth of downloadable resources and external links to
              reputable sustainability organisations. Stay informed, get
              involved in local initiatives and take meaningful steps towards a
              more sustainable lifestyle.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
