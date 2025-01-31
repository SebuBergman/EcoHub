import Footer from "@/features/footer";
import Header from "@/features/header";
import AddEcoStory from "@/features/userStories/components/addEcoStory";
import { Box } from "@mui/material";

export default function SubmitUserStories() {
  return (
    <Box>
      <Header />
      <AddEcoStory />
      <Footer />
    </Box>
  );
}
