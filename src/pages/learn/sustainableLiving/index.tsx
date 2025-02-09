import Header from "@features/header";
import { Box, Stack, Typography } from "@mui/material";
import SustainablePageHeroImage from "@app/assets/images/SustainableHeroImage.jpg";
import Footer from "@features/footer";
import SustainabilityCards from "@features/pageComponents/learn/SustainableLiving/Cards";

export default function sustainableLivingPage() {
  return (
    <Box>
      <Header />
      <Stack sx={{ position: "relative", display: "inline-block" }}>
        <img
          alt="A image with passion led us here writen on the ground and 2 people standing infront of the text"
          src={SustainablePageHeroImage}
          style={{ maxHeight: "832px" }}
        />
        <Stack
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Stack
            sx={{
              backgroundColor: "#384C54A1",
              padding: { xs: 2.5, md: 5 },
              borderRadius: "25px",
              textAlign: "center",
            }}
          >
            <Typography variant="h3" color="white">
              Sustainable living
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          maxWidth: "1370px",
          display: "flex",
          margin: "auto",
        }}
      >
        <Stack sx={{ justifyContent: "center", alignItems: "center", mb: {xs: 2.5, md: 20} }}>
          <Stack
            sx={{
              textAlign: "center",
              padding: {
                xs: "40px 20px",
                md: "80px 64.5px 80px 64.5px",
              },
            }}
          >
            <Typography variant="h2">
              Living sustainably: greener living: tips for a greener lifestyle
            </Typography>
            <Typography variant="body1" sx={{ marginTop: "16px" }}>
              Welcome to the Sustainable Living Tips page, where you will find
              practical advice and actionable tips for reducing your
              environmental impact and living a more sustainable life. These
              tips can help you adopt a greener lifestyle, whether you are just
              starting out or looking for new ways to make a difference:
            </Typography>
          </Stack>
          <SustainabilityCards />
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
