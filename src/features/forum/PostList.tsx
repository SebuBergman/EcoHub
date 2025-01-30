import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@app/store/";
import { addComment, fetchPosts, toggleCommentLike, toggleLike, updatePostsLocally } from "./store/forumSlice";
import Post from "./Post";
import { Stack } from "@mui/material";
import NewPost from "./NewPost";
import { Comment as CommentTypes, Post as PostTypes } from "./types";
import { collection, onSnapshot, query } from "firebase/firestore";
import { firestore } from "@/app/services/firebase";

export default function PostList() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.forum.posts);

  useEffect(() => {
    // Fetch posts initially
    dispatch(fetchPosts());

    // Set up a listener for real-time updates
    const q = query(collection(firestore, "posts"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const updatedPosts: PostTypes[] = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        postId: doc.id,
      })) as PostTypes[];

      // Sort posts by timestamp in descending order
      updatedPosts.sort(
        (a, b) =>
          new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
      );
      
      // Dispatch an action to update the posts in local state
      dispatch(updatePostsLocally(updatedPosts));
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
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
        p: {xs: "10px 20px"}
      }}
    >
      <NewPost/>
      {posts.map((post) => (
        <Post
          key={post?.postId}
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