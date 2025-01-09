import { Box, Card, CardContent, Stack, Typography } from "@mui/material";
import { teamMember } from "./data";
import Header from "@features/header";
import PictureSebu from "@assets/images/PictureSebu.jpg";
import Footer from "@features/footer";

export default function MissionAndTeamPage() {
  return (
    <Box sx={{ width: "100%" }}>
      <Header />
      <Box sx={{ maxWidth: "1000px", mx: "auto", mt: 10, mb: 10 }}>
        {/* Mission Section */}
        <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
          Our Mission
        </Typography>
        <Typography variant="body1" sx={{ mb: 6, textAlign: "center" }}>
          At Sustainability Hub, our mission is to be the go-to resource for all
          things sustainability. From innovative practices to community-driven
          initiatives, we strive to empower individuals and organizations to
          create a greener, more sustainable future for generations to come.
        </Typography>

        {/* Team Section */}
        <Typography variant="h3" sx={{ mb: 4, textAlign: "center" }}>
          Meet the Team
        </Typography>
        <Stack direction="column" spacing={4} alignItems="center">
          <Card sx={{ width: "100%", maxWidth: "600px" }}>
            <CardContent>
              <img src={PictureSebu} alt="Carousel 1" />
              <Stack direction="row" spacing={2} alignItems="center">
                <Box sx={{ m: 2 }}>
                  <Typography variant="h5" color="black" sx={{ mt: 2 }}>
                    {teamMember.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    {teamMember.jobTitle}
                  </Typography>
                </Box>
              </Stack>
              <Typography variant="body1" sx={{ mt: 2 }} color="black">
                {teamMember.description}
              </Typography>
            </CardContent>
          </Card>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
}
