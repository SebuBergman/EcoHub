import React, { useState } from "react";
import { Box, Button, Modal, TextField, Typography } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { addPost } from "./store/forumSlice";
import { useAppDispatch, useAppSelector } from "@/app/store";
import dayjs from "dayjs";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useAppDispatch();
  const userId = useAppSelector((state) => state.auth.user?.uid); // Fetch user ID
  const username = useAppSelector((state) => state.auth.user?.displayName); // Fetch user ID

  const handleSubmit = (e: React.FormEvent) => {
    const date = dayjs(new Date()).toISOString();
    e.preventDefault();
    const newPost = {
      postId: uuidv4(),
      userId: userId,
      username: username,
      title,
      content,
      timestamp: date,
      likes: [],
      dislikes: [],
      comments: [],
    };
    dispatch(addPost(newPost));
    setTitle("");
    setContent("");
    setOpen(false);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{display: "flex", justifyContent: "flex-end", margin: "20px 0"}}>
        <Button variant="contained" color="primary" onClick={handleOpen}>
          Create +
        </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="new-post-modal-title"
        aria-describedby="new-post-modal-description"
      >
        <Box className="modalStyle">
          <Typography id="new-post-modal-title" variant="h6" component="h2">
            Create New Post
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              margin="normal"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <TextField
              fullWidth
              margin="normal"
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
              Post
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}
