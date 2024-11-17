import { Swiper, SwiperSlide } from "swiper/react";
import Carousel1 from "./assets/carousel1.webp";
import Carousel2 from "./assets/carousel2.webp";
import Carousel3 from "./assets/carousel3.webp";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//import styles
import "./styles.scss";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Typography } from "@mui/material";

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
            <Typography variant="h2" sx={{ color: "#248823" }}>
              Explore, learn and act
            </Typography>
            <Typography variant="body1">
              Discover a wealth of information on environmental issues from
              climate change to biodiversity. Explore a collection of
              educational videos, success stories and sustainable living tips.
              Take part in interactive quizzes and challenges and join a lively
              discussion forum to exchange ideas with a like-minded community.
            </Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel2} alt="Carousel 2"></img>
          <div className="textContainer">
            <Typography variant="h2" sx={{ color: "#248823" }}>
              Calculate your impact
            </Typography>
            <Typography variant="body1">
              Are you curious about your carbon footprint? With our
              user-friendly tools you can calculate your environmental impact.
              Explore ways to reduce your footprint and make eco-conscious
              choices in your daily life.
            </Typography>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Carousel3} alt="Carousel 3"></img>
          <div className="textContainer">
            <Typography variant="h2" sx={{ color: "#248823" }}>
              Resources for action
            </Typography>
            <Typography variant="body1">
              Access a wealth of downloadable resources and external links to
              reputable sustainability organisations. Stay informed, get
              involved in local initiatives and take meaningful steps towards a
              more sustainable lifestyle.
            </Typography>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
