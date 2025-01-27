import { useState } from "react";
import { Avatar, Box, Button, Stack, TextField, Typography } from "@mui/material";
import { Post as PostTypes } from "./types";
import { Colors } from "@/app/config/styles";
import { useAppSelector } from "@/app/store";
import { selectUser } from "../auth/store/authSlice";
import LikesComponent from "./Likes";
import { Comment as CommentTypes } from "./types";
import { v4 as uuidv4 } from "uuid";
import CommentIconComponent from "../ui/CommentIcon";

interface Props {
  post: PostTypes;
  onLike: (postId: string, userId: string) => void;
  onDislike: (postId: string, userId: string) => void;
  onAddComment: (postId: string, comment: CommentTypes) => void;
  onLikeComment: (postId: string, commentId: number, userId: string) => void;
  onDislikeComment: (postId: string, commentId: number, userId: string) => void;
}

export default function Post({
  post,
  onLike,
  onDislike,
  onAddComment,
  onLikeComment,
  onDislikeComment,
}: Props) {
  const user = useAppSelector(selectUser);
  const userInitial = user?.displayName?.split(" ")[0][0];
  const userName = user?.displayName;
  const userId = user?.uid;

  const [commentContent, setCommentContent] = useState("");
  const [commentsVisible, setCommentsVisible] = useState(false);

  const handleUpvote = () => {
    if (userId) {
      onLike(post.postId, userId);
    }
  };

  const handleDownvote = () => {
    if (userId) {
      onDislike(post.postId, userId);
    }
  };

  const handleAddComment = () => {
    if (userId && commentContent.trim()) {
      const newComment: CommentTypes = {
        commentId: uuidv4(),
        userId,
        username: userName,
        content: commentContent,
        timestamp: new Date().toISOString(),
        likes: [],
      };
      onAddComment(post.postId, newComment);
      setCommentContent("");
    }
  };

  const handleLikeComment = (commentId: number) => {
    if (userId) {
      onLikeComment(post.postId, commentId, userId);
    }
  };

  const handleDislikeComment = (commentId: number) => {
    if (userId) {
      onDislikeComment(post.postId, commentId, userId);
    }
  };

  const toggleCommentsVisibility = () => {
    setCommentsVisible(!commentsVisible);
  };

  return (
    <Box sx={{ mb: 4 }} className="postContainer">
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
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          padding: "10px 0px 10px 0px",
          gap: 5,
        }}
      >
        <LikesComponent
          initialLikes={post.likes?.length || 0}
          initialUserVote={userId && post.likes.includes(userId) ? 1 : 0}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
        <CommentIconComponent
          commentCount={post.comments?.length || 0} // Pass the number of comments
          onClick={toggleCommentsVisibility} // Toggle comments visibility
        />
      </Stack>
      {commentsVisible && ( // Conditional rendering of comments
        <Stack spacing={2} sx={{ pt: 2 }} className="commentsContainer">
          {post.comments?.map((comment, idx) => (
            <Box key={idx}>
              <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                {comment.username}
              </Typography>
              <Typography variant="body2">{comment.content}</Typography>
              <Typography variant="caption" sx={{ color: Colors.disabled }}>
                {new Date(comment.timestamp).toLocaleString()}
              </Typography>
              <LikesComponent
                initialLikes={comment.likes?.length || 0} // Ensure likes is always defined
                initialUserVote={
                  userId && comment.likes?.includes(userId) ? 1 : 0
                }
                onUpvote={() => handleLikeComment(idx)}
                onDownvote={() => handleDislikeComment(idx)}
              />
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
      )}
    </Box>
  );
}
