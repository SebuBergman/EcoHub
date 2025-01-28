import HeroBox from "@features/LandingPage/HeroBox";
import Header from "@features/header";
import Footer from "@features/footer";
import HomePageHeroImage from "./assets/homePage1.webp";
import HomeImage1 from "./assets/homeImage1.webp";
import Carousel from "@features/LandingPage/Carousel";
import ImageBox1 from "./assets/homeImage2.webp";
import ImageBox2 from "./assets/homeImage3.webp";

// import styles
import "./styles.scss";
import { Typography, TextField, Box, Stack } from "@mui/material";
import AppButton from "@/features/ui/AppButton";

export default function HomePage() {
  return (
    <Box className="pageContainer">
      <Header />
      <img alt="coverImage" src={HomePageHeroImage}></img>
      <HeroBox />
      <div className="frontPage_container1">
        <div className="frontPage_container1_boxContainers">
          <div className="frontPage_container1_box">
            <Typography variant="h1">
              Connect with Nature, Connect with EcoHub
            </Typography>
            <Typography variant="body1">
              At EcoHub, we're more than just a website - we're a community
              united by a shared passion for the planet. Whether you're a
              seasoned environmental advocate or just beginning your journey
              towards sustainability, EcoHub is your go-to destination for
              inspiration, education, and action.
            </Typography>
          </div>
          <div className="frontPage_container1_boxes">
            <div className="frontPage_container1_boxes_div">
              <Typography variant="h5" className="forestGreen">
                A Platform for Change
              </Typography>
              <Typography variant="body1">
                EcoHub isn't just about learning - it's about taking action.
                Join us in our mission to create a greener, more sustainable
                world by participating in our interactive challenges, engaging
                in meaningful discussions, and connecting with like-minded
                individuals from around the globe.
              </Typography>
            </div>
            <div className="divider"></div>
            <div className="frontPage_container1_boxes_div">
              <Typography variant="h5" className="forestGreen">
                Discover Endless Possibilities
              </Typography>
              <Typography variant="body1">
                Explore our vast collection of resources designed to inform,
                inspire, and empower you on your sustainability journey. From
                informative articles and thought-provoking documentaries to
                practical tips and tools, there's something for everyone at
                EcoHub.
              </Typography>
            </div>
          </div>
          <div className="frontPage_container1_boxes">
            <div className="frontPage_container1_boxes_div">
              <Typography variant="h5" className="forestGreen">
                Measure Your Impact, Make a Difference
              </Typography>
              <Typography variant="body1">
                Take control of your environmental footprint with our
                easy-to-use calculators and assessment tools. Gain insights into
                your daily habits, identify areas for improvement, and make
                positive changes that benefit both you and the planet.
              </Typography>
            </div>
            <div className="divider"></div>
            <div className="frontPage_container1_boxes_div">
              <Typography variant="h5" className="forestGreen">
                Community, Connection, Collaboration
              </Typography>
              <Typography variant="body1">
                Become part of our vibrant community of changemakers and
                environmental enthusiasts. Share your experiences, celebrate
                your achievements, and inspire others to join the movement
                towards a more sustainable future.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="frontPage_container2">
        <img
          src={HomeImage1}
          alt="Start Your Journey Today"
          className="frontPage_container2_image"
        ></img>
        <Stack className="frontPage_container2_textContainer">
          <Stack gap={1}>
            <Typography variant="h2">Start Your Journey Today</Typography>
            <Typography variant="body1">
              Ready to make a difference? Dive into EcoHub and discover the
              endless possibilities for positive change. Together, we can create
              a world where people and the planet thrive in harmony.
            </Typography>
            <Typography variant="body1">
              Stay in touch with us and be part of the sustainability debate.
              Follow us on social media, subscribe to our newsletter and join
              our community.
            </Typography>
            <Stack pt={4}>
              <Box
                component="form"
                sx={{ "& .MuiTextField-root": { mr: 3, width: "45ch" } }}
                noValidate
                autoComplete="off"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <TextField id="exampleInputEmail1" label="Email" />
                <AppButton color="success" type="submit">
                  Tilaa
                </AppButton>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </div>
      <Carousel />
      <Box>
        <Stack
          sx={{ backgroundColor: "#00381E", minHeight: "400px" }}
          alignItems={"center"}
        >
          <Typography variant="h1" color="white" mt={10}>
            How to get involved
          </Typography>
          <Typography variant="body1" color="white" mt={2}>
            Here's how to get involved with EcoHub and sustainability
          </Typography>
        </Stack>
        <Stack className="frontPage_squares" sx={{ mt: "-160px" }}>
          <Stack className="frontPage_squares_row" flexDirection={"row"}>
            <Stack
              className="frontPage_squares_boxes"
              sx={{ backgroundColor: "#fff" }}
            >
              <Typography variant="h2" className="frontPage_squares_text">
                Join us in building a greener tomorrow
              </Typography>
              <div className="green_divider"></div>
              <Typography variant="body1" className="frontPage_squares_text">
                Together we can make a difference. Join EcoHub and become part
                of the global movement towards a more sustainable and
                environmentally conscious future.
              </Typography>
              <AppButton color="success" sx={{ mt: 2 }}>
                Join
              </AppButton>
            </Stack>
            <Stack className="frontPage_squares_boxesImage">
              <img
                src={ImageBox1}
                alt="A park with a path leading to a round table"
              ></img>
            </Stack>
          </Stack>
          <Stack className="frontPage_squares_row" flexDirection={"row"}>
            <Stack className="frontPage_squares_boxesImage">
              <img src={ImageBox2} alt="A park with a path with trees"></img>
            </Stack>
            <Stack className="frontPage_squares_boxes">
              <Typography variant="h2" className="frontPage_squares_text">
                Get involved and tell your story
              </Typography>
              <div className="green_divider"></div>
              <Typography variant="body1" className="frontPage_squares_text">
                Create a profile, earn badges for your sustainable actions and
                participate in our community by sharing your success stories.
                Whether you're taking small steps or leading major initiatives,
                your journey matters.
              </Typography>
              <AppButton color="success" sx={{ mt: 2 }}>
                Tell Your Story
              </AppButton>
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};
