import Header from "@features/header";
import Footer from "@features/footer";
import ENVPageHeroImage from "@app/assets/images/envIssImage.webp";

import { Box, Stack, Typography } from "@mui/material";
import ENVIssuesCards from "@/features/pageComponents/learn/ENVIssues/Cards";

export default function EnvIssuesPage() {
  return (
    <Box>
      <Header />
      <Stack sx={{ position: "relative", display: "inline-block" }}>
        <img
          alt="A image with Climate Justice Now! writen on a cardboard sign"
          src={ENVPageHeroImage}
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
              What you can do
            </Typography>
            <Typography variant="h1" color="white">
              Addressing environmental issues
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Box
        sx={{
          maxWidth: "1366px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "auto",
        }}
      >
        <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
          <Stack
            sx={{
              textAlign: "center",
              padding: {
                xs: "25px 20px",
                md: "80px 64.5px 80px 64.5px",
              },
            }}
          >
            <Typography variant="h2">
              Understanding Environmental Issues and Taking Action
            </Typography>
            <Typography variant="body1">
              At EcoHub, we're committed to raising awareness about pressing
              environmental issues and empowering individuals to take meaningful
              action in their daily lives. Here are some key environmental
              challenges we face today, along with practical steps you can take
              to make a positive impact:
            </Typography>
          </Stack>
          <Stack>
            <ENVIssuesCards />
          </Stack>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
