import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Stack,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@app/store";
import { approveStory, removeStory, submitStory } from "../store/ecoStorySlice";

export default function EcoStoryPage() {
  const dispatch = useAppDispatch();
  const stories = useAppSelector((state) => state.ecoStory.stories);
  const userId = useAppSelector((state) => state.auth.user?.uid); // Fetch user ID

  console.log(userId);

  // State for form inputs
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // Submit a story
  const handleSubmit = () => {
    if (title.trim() && content.trim()) {
      dispatch(
        submitStory({
          id: userId,
          title,
          content,
        })
      );
      setTitle("");
      setContent("");
    }
  };

  // Admin Actions
  const handleApprove = (id: string) => {
    dispatch(approveStory(id));
  };

  const handleRemove = (id: string) => {
    dispatch(removeStory(id));
  };

  return (
    <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4 }}>
      {/* Story Submission Form */}
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

      {/* Stories List */}
      <Typography variant="h5" sx={{ mt: 6, mb: 2 }}>
        User Stories
      </Typography>
      {stories.map((story) => (
        <Card key={story.id} sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="body1" color="black">
              Title:
            </Typography>
            <Typography variant="body2" color="black" sx={{ mb: 2 }}>
              {story.title}
            </Typography>
            <Typography variant="body1" color="black">
              Content:
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }} color="black">
              {story.content}
            </Typography>
            <Typography
              variant="caption"
              color={story.accepted ? "green" : "orange"}
            >
              {story.accepted ? "Accepted" : "Pending Approval"}
            </Typography>
          </CardContent>
          <CardActions>
            {!story.accepted && (
              <Button
                size="small"
                color="success"
                onClick={() => handleApprove(story.id)}
              >
                Approve
              </Button>
            )}
            <Button
              size="small"
              color="error"
              onClick={() => handleRemove(story.id)}
            >
              Remove
            </Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
}
