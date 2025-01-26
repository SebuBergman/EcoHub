import { useEffect } from "react";
import { RootState, useAppDispatch, useAppSelector } from "@app/store/";
import { fetchPosts, toggleLike } from "./store/forumSlice";
import Post from "./Post";
import { Stack } from "@mui/material";
import NewPost from "./NewPost";

export default function PostList() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state: RootState) => state.forum.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Stack
          sx={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
      <NewPost />
      {posts.map((post) => (
        <Post
          key={post.id}
          post={post}
          onLike={() =>
            dispatch(toggleLike({ postId: post.id, userId: "userId" }))
          }
        />
      ))}
    </Stack>
  );
};