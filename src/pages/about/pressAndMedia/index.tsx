import Footer from "@/features/footer";
import Header from "@/features/header";
import { Box, Typography, Button, Stack } from "@mui/material";

export default function PressAndMedia() {
  return (
    <Box>
      <Header />
      <Box sx={{ maxWidth: "800px", mt: 4, mb: 4}}>
        <Typography variant="h3" sx={{ mb: 4 }}>
          Press & Media
        </Typography>
        <Typography variant="body1" sx={{ mb: 6 }}>
          Contact us for media inquiries or explore our press materials. Whether
          you’re a journalist, content creator, or simply interested in learning
          more about our mission, we’re here to help.
        </Typography>
        <Stack direction="column" spacing={2} alignItems="center">
          <Button
            variant="contained"
            color="primary"
            sx={{ textTransform: "none", px: 4 }}
          >
            Contact Us
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ textTransform: "none", px: 4 }}
          >
            Explore Press Materials
          </Button>
        </Stack>
      </Box>
      <Footer />
    </Box>
  );
};
