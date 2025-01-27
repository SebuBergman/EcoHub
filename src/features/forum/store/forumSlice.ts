import { firestore } from "@/app/services/firebase";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { Post} from "../types";
import { Comment as CommentTypes } from "../types";

interface ForumState {
  posts: Post[];
}

const initialState: ForumState = {
  posts: [],
};

// Define async thunks for Firestore operations
export const addPost = createAsyncThunk(
  "forum/addPost",
  async (post: Omit<Post, "id">, { rejectWithValue }) => {
    try {
      await addDoc(collection(firestore, "posts"), post);
      return post;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const fetchPosts = createAsyncThunk(
  "forum/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(collection(firestore, "posts"));
      const posts: Post[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data() as Post;
        posts.push({ ...data, id: doc.id }); // Ensure each post includes the doc ID
      });
      return posts;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addComment = createAsyncThunk(
  "forum/addComment",
  async (
    { postId, comment }: { postId: string; comment: CommentTypes },
    { rejectWithValue }
  ) => {
    try {
      const postRef = doc(firestore, "posts", postId);
      const postSnap = await getDoc(postRef);
      const postData = postSnap.data();
      if (!postData) return rejectWithValue("Post not found");

      const comments = postData.comments as CommentTypes[];
      const newComments = [...comments, comment];

      await updateDoc(postRef, { comments: newComments });
      return { postId, comment };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const toggleLike = createAsyncThunk(
  "forum/toggleLike",
  async (
    { postId, userId }: { postId: string; userId: string },
    { rejectWithValue }
  ) => {
    try {
      const postRef = doc(firestore, "posts", postId);
      const postSnap = await getDoc(postRef);
      const postData = postSnap.data();
      if (!postData) return rejectWithValue("Post not found");

      const likes = postData.likes as string[];
      let newLikes: string[];

      if (likes.includes(userId)) {
        newLikes = likes.filter((id) => id !== userId);
      } else {
        newLikes = [...likes, userId];
      }

      await updateDoc(postRef, { likes: newLikes });
      return { postId, likes: newLikes };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Create the slice
const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        addPost.fulfilled,
        (state, action: PayloadAction<Omit<Post, "id">>) => {
          state.posts.push({ id: "", ...action.payload });
        }
      )
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
      })
      .addCase(
        addComment.fulfilled,
        (
          state,
          action: PayloadAction<{ postId: string; comment: CommentTypes }>
        ) => {
          const { postId, comment } = action.payload;
          const post = state.posts.find((post) => post.id === postId);
          if (post) {
            post.comments = [...(post.comments || []), comment];
          }
        }
      )
      .addCase(
        toggleLike.fulfilled,
        (
          state,
          action: PayloadAction<{
            postId: string;
            likes: string[];
          }>
        ) => {
          const { postId, likes } = action.payload;
          const post = state.posts.find((post) => post.id === postId);
          if (post) {
            post.likes = likes;
          }
        }
      );
  },
});

export default forumSlice.reducer;
