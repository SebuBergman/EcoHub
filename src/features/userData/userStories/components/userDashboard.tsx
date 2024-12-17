import { useAppSelector } from "@/app/store";
import { selectUser } from "@features/auth/store/authSlice";
import { Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function UserDashboard() {
  const [story, setStory] = useState("");
  const user = useAppSelector(selectUser);
  const userInitial = user?.displayName;

  const handleSubmit = () => {
    console.log("Eco Story Submitted:", story);
    setStory("");
  };
  return (
    <Box sx={{ maxWidth: "600px", mx: "auto", mt: 4 }}>
      <Stack direction="row" gap="5px" alignItems={"center"}>
        <Avatar></Avatar>
        <Typography variant="h4">{userInitial}</Typography>
      </Stack>
      <Stack sx={{mt: 4}}>
        <Typography variant="h4" gutterBottom>
          Share Your Eco Story
        </Typography>
        <TextField
          label="Your Eco Story"
          multiline
          rows={6}
          fullWidth
          value={story}
          onChange={(e) => setStory(e.target.value)}
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Stack>
    </Box>
  );
}
