import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@app/store/";
import { addComment, fetchPosts, toggleCommentLike, toggleLike } from "./store/forumSlice";
import Post from "./Post";
import { Stack } from "@mui/material";
import NewPost from "./NewPost";
import { Comment as CommentTypes } from "./types";

export default function PostList() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.forum.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleLike = (postId: string, userId: string) => {
    dispatch(toggleLike({ postId, userId }));
  };

  const handleDislike = (postId: string, userId: string) => {
    dispatch(toggleLike({ postId, userId }));
  };

  const handleAddComment = (postId: string, comment: CommentTypes) => {
    dispatch(addComment({ postId, comment }));
  };

  const handleLikeComment = (
    postId: string,
    commentId: number,
    userId: string
  ) => {
    dispatch(toggleCommentLike({ postId, commentId, userId }));
  };

  const handleDislikeComment = (
    postId: string,
    commentId: number,
    userId: string
  ) => {
    dispatch(toggleCommentLike({ postId, commentId, userId }));
  };

  return (
    <Stack
      sx={{
        display: "flex",
        margin: "auto",
        maxWidth: "1366px",
      }}
    >
      <NewPost />
      {posts.map((post) => (
        <Post
          key={post.postId}
          post={post}
          onLike={handleLike}
          onDislike={handleDislike}
          onAddComment={handleAddComment}
          onLikeComment={handleLikeComment}
          onDislikeComment={handleDislikeComment}
        />
      ))}
    </Stack>
  );
}
