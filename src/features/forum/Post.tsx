import { useState } from "react";
import { Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Post as PostTypes } from "./types";
import { Colors } from "@/app/config/styles";
import { useAppSelector } from "@/app/store";
import { selectUser } from "../auth/store/authSlice";
import LikesComponent from "./Likes";
import { Comment as CommentTypes } from "./types";

interface Props {
  post: PostTypes;
  onLike: (postId: string, userId: string) => void;
  onDislike: (postId: string, userId: string) => void;
  onAddComment: (postId: string, comment: CommentTypes) => void;
}

export default function Post({ post, onLike, onDislike, onAddComment }: Props) {
  const user = useAppSelector(selectUser);
  const userInitial = user?.displayName?.split(" ")[0][0];
  const userName = user?.displayName;
  const userId = user?.uid;

  const [commentContent, setCommentContent] = useState("");

  const handleUpvote = () => {
    if (userId) {
      onLike(post.id, userId);
    }
  };

  const handleDownvote = () => {
    if (userId) {
      onDislike(post.id, userId);
    }
  };

  const handleAddComment = () => {
    if (userId && commentContent.trim()) {
      const newComment: CommentTypes = {
        userId,
        username: userName,
        content: commentContent,
        timestamp: new Date().toISOString(),
        likes: [],
      };
      onAddComment(post.id, newComment);
      setCommentContent("");
    }
  };

  return (
    <Box>
      <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
        <Avatar sx={{ height: 48, width: 48, background: Colors.disabled }}>
          {userInitial}
        </Avatar>
        <Typography variant="body1" sx={{ color: Colors.black }}>
          {userName}
        </Typography>
      </Stack>
      <Typography variant="h1" sx={{ pt: 2 }}>
        {post.title}
      </Typography>
      <Typography sx={{ pt: 1 }}>{post.content}</Typography>
      <LikesComponent
        initialLikes={post.likes.length}
        initialUserVote={userId && post.likes.includes(userId) ? 1 : 0}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
      />
      <Stack spacing={2} sx={{ pt: 2 }}>
        {post.comments.map((comment, idx) => (
          <Box key={idx}>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {comment.username}
            </Typography>
            <Typography variant="body2">{comment.content}</Typography>
            <Typography variant="caption" sx={{ color: Colors.disabled }}>
              {new Date(comment.timestamp).toLocaleString()}
            </Typography>
          </Box>
        ))}
        <TextField
          value={commentContent}
          onChange={(e) => setCommentContent(e.target.value)}
          placeholder="Add a comment..."
          fullWidth
          multiline
          rows={2}
        />
        <Button variant="contained" onClick={handleAddComment}>
          Post Comment
        </Button>
      </Stack>
    </Box>
  );
}
