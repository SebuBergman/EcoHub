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
import { Navigation, Pagination, History } from "swiper/modules";
import { Box, Stack, Typography } from "@mui/material";

export default function CarouselComponent() {
  return (
    <Stack
      className="CarouselContainer"
      sx={{ bgcolor: "#f8f8f8", padding: "40px 50px 40px 50px" }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={true}
        pagination={true}
        history={{
          key: "slide",
        }}
        modules={[Navigation, Pagination, History]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box
            component="img"
            src={Carousel1}
            alt="Carousel 1"
            sx={{
              height: { xs: "100%" },
              width: { xs: "100%", md: "680px" },
              borderRadius: "30px",
            }}
          />
          <Stack
            sx={{
              textAlign: { xs: "center", md: "left" },
              padding: { xs: "45px 0px 0px 0px", md: "0px 0px 0px 40px" },
              width: { md: "500px" },
              flexDirection: { xs: "column", md: "column" },
              marginBottom: { xs: "50px" },
            }}
          >
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
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Carousel2}
            alt="Carousel 2"
            sx={{
              height: { xs: "100%" },
              width: { xs: "100%", md: "680px" },
              borderRadius: "30px",
            }}
          />
          <Stack
            sx={{
              textAlign: { xs: "center", md: "left" },
              padding: { xs: "45px 0px 0px 0px", md: "0px 0px 0px 40px" },
              width: { md: "500px" },
              flexDirection: { xs: "column", md: "column" },
              marginBottom: { xs: "50px" },
            }}
          >
            <Typography variant="h2" sx={{ color: "#248823" }}>
              Calculate your impact
            </Typography>
            <Typography variant="body1">
              Are you curious about your carbon footprint? With our
              user-friendly tools you can calculate your environmental impact.
              Explore ways to reduce your footprint and make eco-conscious
              choices in your daily life.
            </Typography>
          </Stack>
        </SwiperSlide>
        <SwiperSlide>
          <Box
            component="img"
            src={Carousel3}
            alt="Carousel 3"
            sx={{
              height: { xs: "100%" },
              width: { xs: "100%", md: "680px" },
              borderRadius: "30px",
            }}
          />
          <Stack
            sx={{
              textAlign: { xs: "center", md: "left" },
              padding: { xs: "45px 0px 0px 0px", md: "0px 0px 0px 40px" },
              width: { md: "500px" },
              flexDirection: { xs: "column", md: "column" },
              marginBottom: { xs: "50px" },
            }}
          >
            <Typography variant="h2" sx={{ color: "#248823" }}>
              Resources for action
            </Typography>
            <Typography variant="body1">
              Access a wealth of downloadable resources and external links to
              reputable sustainability organisations. Stay informed, get
              involved in local initiatives and take meaningful steps towards a
              more sustainable lifestyle.
            </Typography>
          </Stack>
        </SwiperSlide>
      </Swiper>
    </Stack>
  );
}
