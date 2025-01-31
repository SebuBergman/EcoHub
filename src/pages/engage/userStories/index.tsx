import Footer from "@/features/footer";
import Header from "@/features/header";
import EcoStoryList from "@/features/userStories/components/ecoStoryList";
import { Box } from "@mui/material";

export default function UserStories() {
  return (
    <Box>
      <Header />
      <EcoStoryList />
      <Footer />
    </Box>
  );
}