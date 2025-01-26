import React, { useState } from "react";
import { addPost } from "./store/forumSlice";
import { useAppDispatch } from "@/app/store";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      userId: "userId", // Get this from your authentication state
      username: "username", // Get this from your authentication state
      title,
      content,
      timestamp: new Date(),
      likes: [],
      comments: [],
    };
    dispatch(addPost(newPost));
    setTitle("");
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
        required
      />
      <button type="submit">Post</button>
    </form>
  );
};