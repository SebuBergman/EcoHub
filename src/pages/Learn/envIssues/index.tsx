import Header from "@features/header";
import Footer from "@features/footer";
import ENVPageHeroImage from "@app/assets/images/envIssImage.webp";

import "./styles.scss";
import { Box, Stack, Typography } from "@mui/material";
import ENVIssuesCards from "@/features/pageComponents/learn/ENVIssues/Cards";

const EnvIssuesPage = () => {
  return (
    <Box className="envissues">
      <Header />
      <img alt="coverImage" src={ENVPageHeroImage}></img>
      <Stack sx={{ justifyContent: "center", alignItems: "center" }}>
        <Typography variant="h3">What you can do</Typography>
        <Typography variant="h1">Addressing environmental issues</Typography>
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
            sx={{ textAlign: "center", padding: "80px 64.5px 80px 64.5px" }}
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
};

export default EnvIssuesPage;
