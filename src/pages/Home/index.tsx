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

export default function LandingPage() {
  return (
    <Box className="pageContainer">
      <Header />
      <img alt="coverImage" src={HomePageHeroImage}></img>
      <HeroBox />
      <Stack>
        <Stack
          sx={{
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
            padding: { xs: "0px", md: "60px 0px 60px 0px" },
            marginTop: { xs: "80px", md: "100px" },
          }}
        >
          <Stack
            sx={{
              width: { md: "380px" },
              padding: { xs: "0px 15px", md: "0px 40px 0px 0px" },
            }}
          >
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
            <Stack
              sx={{
                bgcolor: "#cdcdcd",
                height: { xs: "1px", md: "0px" },
                margin: { xs: "15px 0px 15px 0px" },
              }}
            ></Stack>
          </Stack>
          <Stack
            sx={{
              width: { md: "456px" },
              padding: "0px 15px 0px 15px",
            }}
          >
            <Stack
              sx={{
                minHeight: { md: "190px" },
                marginBottom: { xs: "0px", md: "14px" },
              }}
            >
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
            </Stack>
            <Stack
              sx={{
                bgcolor: "#cdcdcd",
                height: "1px",
                margin: "15px 0px 15px 0px",
              }}
            ></Stack>
            <Stack
              sx={{
                minHeight: { md: "190px" },
                marginBottom: { xs: "0px", md: "14px" },
              }}
            >
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
            </Stack>
            <Stack
              sx={{
                bgcolor: "#cdcdcd",
                height: { xs: "1px", md: "0px" },
                margin: { xs: "15px 0px 15px 0px" },
              }}
            ></Stack>
          </Stack>
          <Stack
            sx={{
              width: { md: "456px" },
              padding: "0px 15px 0px 15px",
            }}
          >
            <Stack
              sx={{
                minHeight: { md: "190px" },
                marginBottom: { xs: "0px", md: "14px" },
              }}
            >
              <Typography variant="h5" className="forestGreen">
                Measure Your Impact, Make a Difference
              </Typography>
              <Typography variant="body1">
                Take control of your environmental footprint with our
                easy-to-use calculators and assessment tools. Gain insights into
                your daily habits, identify areas for improvement, and make
                positive changes that benefit both you and the planet.
              </Typography>
            </Stack>
            <Stack
              sx={{
                bgcolor: "#cdcdcd",
                height: "1px",
                margin: "15px 0px 15px 0px",
              }}
            ></Stack>
            <Stack
              sx={{
                minHeight: { md: "190px" },
                marginBottom: "14px",
              }}
            >
              <Typography variant="h5" className="forestGreen">
                Community, Connection, Collaboration
              </Typography>
              <Typography variant="body1">
                Become part of our vibrant community of changemakers and
                environmental enthusiasts. Share your experiences, celebrate
                your achievements, and inspire others to join the movement
                towards a more sustainable future.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          marginTop: { xs: "80px", md: "50px" },
          marginBottom: { xs: "80px", md: "50px" },
        }}
      >
        <Box
          component="img"
          src={HomeImage1}
          alt="Start Your Journey Today"
          sx={{
            width: { xs: "100%", md: "500px" },
            height: { xs: "500px", md: "600px" },
          }}
        />
        <Stack
          sx={{
            width: { md: "810px" },
            padding: { xs: "0px 15px", md: "0px 100px 0px 100px" },
          }}
        >
          <Stack gap={1} sx={{ pt: { xs: 2, md: 0 } }}>
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
                sx={{
                  display: "flex",
                  "& .MuiTextField-root": {
                    mr: { xs: 1, md: 3 },
                    width: { xs: "100%", md: "45ch" },
                  },
                }}
                noValidate
                autoComplete="off"
                alignItems={"center"}
              >
                <TextField id="exampleInputEmail1" label="Email" fullWidth />
                <AppButton color="success" type="submit">
                  Tilaa
                </AppButton>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Carousel />
      <Box>
        <Stack
          sx={{
            backgroundColor: "#00381E",
            minHeight: { xs: "200px", md: "400px" },
            padding: { xs: "0px 15px" },
          }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography variant="h1" color="white">
            How to get involved
          </Typography>
          <Typography
            variant="body1"
            color="white"
            mt={2}
            sx={{ textAlign: "center" }}
          >
            Here's how to get involved with EcoHub and sustainability
          </Typography>
        </Stack>
        <Stack
          sx={{
            mt: "-160px",
            flexDirection: { xs: "column", md: "column" },
            justifyContent: "center",
            alignItems: "center",
            margin: { xs: "0px 15px", md: "60px 0px 60px 0px" },
          }}
        >
          <Stack
            sx={{
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Stack
              sx={{
                bgcolor: "#fff",
                flexDirection: { xs: "column", md: "column" },
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: { xs: "20px 0px", md: "0px 40px 0px 40px" },
                width: { xs: "100%", md: "690px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  padding: { xs: "10px 0px", md: "0px" },
                }}
              >
                Join us in building a greener tomorrow
              </Typography>
              <Stack
                sx={{
                  bgcolor: "#248823",
                  width: { xs: "100%", md: "50px" },
                  height: { xs: "5px", md: "10px" },
                  margin: { xs: "0px", md: "20px 0 20px 0px" },
                }}
              ></Stack>
              <Typography
                variant="body1"
                sx={{
                  padding: { xs: "10px 0px", md: "0px" },
                }}
              >
                Together we can make a difference. Join EcoHub and become part
                of the global movement towards a more sustainable and
                environmentally conscious future.
              </Typography>
              <AppButton color="success" sx={{ mt: 2 }}>
                Join
              </AppButton>
            </Stack>
            <Stack
              sx={{
                minWidth: { xs: "100%", md: "690px" },
              }}
            >
              <img
                src={ImageBox1}
                alt="A park with a path leading to a round table"
              ></img>
            </Stack>
          </Stack>
          <Stack
            sx={{
              flexDirection: { xs: "column-reverse", md: "row" },
              padding: { xs: "0px 0px" },
            }}
          >
            <Stack
              sx={{
                minWidth: { xs: "100%", md: "690px" },
              }}
            >
              <img src={ImageBox2} alt="A park with a path with trees"></img>
            </Stack>
            <Stack
              sx={{
                bgcolor: "#fff",
                flexDirection: { xs: "column", md: "column" },
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: { xs: "20px 0px", md: "0px 40px 0px 40px" },
                width: { xs: "100%", md: "690px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  padding: { xs: "10px 0px", md: "0px" },
                }}
              >
                Get involved and tell your story
              </Typography>
              <Stack
                sx={{
                  bgcolor: "#248823",
                  width: { xs: "100%", md: "50px" },
                  height: { xs: "5px", md: "10px" },
                  margin: { xs: "0px", md: "20px 0 20px 0px" },
                }}
              ></Stack>
              <Typography
                variant="body1"
                sx={{
                  padding: { xs: "10px 0px", md: "0px" },
                }}
              >
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
}
