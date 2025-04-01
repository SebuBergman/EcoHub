import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@app/store/";
import {
  fetchPosts,
  toggleCommentLike,
  toggleLike,
  addComment,
} from "./store/forumSlice";
import { Comment as CommentTypes } from "./types";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import LikesComponent from "./Likes";
import dayjs from "dayjs";
import { timeAgo } from "@app/services/date/formatDate";
import { v4 as uuidv4 } from "uuid";
import Header from "@features/header";
import Footer from "@features/footer";

export default function PostDetail() {
  const { postId } = useParams<{ postId: string }>();
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.forum.posts);
  const post = posts.find((post) => post.postId === postId);
  const user = useAppSelector((state) => state.auth.user);
  const userId = user?.uid;
  const userName = user?.displayName;
  const date = dayjs(new Date()).toISOString();

  const [commentContent, setCommentContent] = useState("");

  useEffect(() => {
    if (!post) {
      dispatch(fetchPosts());
    }
  }, [dispatch, post]);

  const handleUpvote = () => {
    if (userId) {
      if (postId) {
        dispatch(toggleLike({ postId, userId }));
      }
    }
  };

  const handleDownvote = () => {
    if (userId) {
      if (postId) {
        dispatch(toggleLike({ postId, userId }));
      }
    }
  };

  const handleAddComment = () => {
    if (userId && commentContent.trim()) {
      const newComment: CommentTypes = {
        commentId: uuidv4(),
        userId,
        username: userName,
        content: commentContent,
        timestamp: date,
        likes: [],
      };
      if (postId) {
        if (userId) {
          dispatch(addComment({ postId, comment: newComment }));
        }
      }
      setCommentContent("");
    }
  };

  const handleLikeComment = (commentId: string) => {
    if (postId) {
      if (userId) {
        dispatch(toggleCommentLike({ postId, commentId, userId }));
      }
    }
  };

  const handleDislikeComment = (commentId: string) => {
    if (postId) {
      if (userId) {
        dispatch(toggleCommentLike({ postId, commentId, userId }));
      }
    }
  };

  if (!post) {
    return <Typography variant="h5">Loading...</Typography>;
  }

  return (
    <Box>
      <Header />
      <Box sx={{ maxWidth: "800px", mx: "auto", mt: 4 }}>
        <Stack flexDirection={"row"} alignItems={"center"} gap={1}>
          <Typography
            variant="body1"
            sx={{ color: "black", paddingLeft: "8px" }}
          >
            {post.username}
          </Typography>
          <Typography variant="body1" sx={{ color: "black" }}>
            -
          </Typography>
          <Typography variant="body1" sx={{ color: "black" }}>
            {timeAgo(post.timestamp)}
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
        </Stack>
          <Stack spacing={2} sx={{ pt: 2 }}>
            {post.comments?.map((comment, idx) => (
              <Box key={idx}>
                <Stack direction="row" gap={1}>
                  <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                    {comment.username}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    -
                  </Typography>
                  <Typography variant="body1" sx={{ color: "black" }}>
                    {timeAgo(comment.timestamp)}
                  </Typography>
                </Stack>
                <Typography variant="body2">{comment.content}</Typography>
                <LikesComponent
                  initialLikes={comment.likes?.length || 0}
                  initialUserVote={
                    userId && comment.likes?.includes(userId) ? 1 : 0
                  }
                  onUpvote={() => handleLikeComment(comment.commentId)}
                  onDownvote={() => handleDislikeComment(comment.commentId)}
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
      </Box>
      <Footer />
    </Box>
  );
}
