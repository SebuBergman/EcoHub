import { useState } from "react";
import { Box, TextField, Button, Typography, Stack } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@app/store";
import { EcoStory } from "../types";
import { v4 as uuidv4 } from "uuid";
import dayjs from "dayjs";
import { addUserStory } from "../store/ecoStorySlice";

export default function AddEcoStory() {
  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.uid); // Fetch user ID
  const username = useAppSelector((state) => state.auth.user?.displayName); // Fetch user ID

  // State for form inputs
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      if (userId) {
        // Ensure userId is defined
        const date = dayjs(new Date()).toISOString(); // Get current date and time
        const newStory: EcoStory = {
          userId: userId,
          storyId: uuidv4(),
          username: username,
          title,
          content,
          submissionDate: date,
          accepted: true, // Directly accept the story
        };
        dispatch(addUserStory(newStory));
        setTitle("");
        setContent("");
      } else {
        console.error("User ID is undefined. Cannot submit story.");
      }
    }
  };

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4, py: 4, px: {xs: 2} }}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: "center" }}>
        Share Your Eco Story
      </Typography>
      <Stack spacing={2}>
        <TextField
          label="Title"
          fullWidth
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Content"
          multiline
          rows={4}
          fullWidth
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          disabled={!title || !content}
        >
          Submit Story
        </Button>
      </Stack>
    </Box>
  );
}
