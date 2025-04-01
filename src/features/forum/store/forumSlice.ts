import { firestore } from "@app/services/firebase";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { Post } from "../types";
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
  async (post: Omit<Post, "postId">, { rejectWithValue }) => {
    try {
      const docRef = await addDoc(collection(firestore, "posts"), post);
      return { ...post, postId: docRef.id };
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
      const posts: Post[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Omit<Post, "postId">;
        return { ...data, postId: doc.id };
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

      const comments = postData.comments || [];
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

export const toggleCommentLike = createAsyncThunk(
  "forum/toggleCommentLike",
  async (
    {
      postId,
      commentId,
      userId,
    }: { postId: string; commentId: string; userId: string },
    { rejectWithValue }
  ) => {
    try {
      const postRef = doc(firestore, "posts", postId);
      const postSnap = await getDoc(postRef);
      const postData = postSnap.data();
      if (!postData) return rejectWithValue("Post not found");

      const comments = postData.comments as CommentTypes[];
      const comment = comments.find((comment) => comment.commentId === commentId);
      if (!comment) return rejectWithValue("Comment not found");

      let newLikes: string[];

      if (comment.likes.includes(userId)) {
        newLikes = comment.likes.filter((id: string) => id !== userId);
      } else {
        newLikes = [...comment.likes, userId];
      }

      const commentIndex = comments.findIndex((comment) => comment.commentId === commentId);
      if (commentIndex !== -1) {
        comments[commentIndex] = { ...comment, likes: newLikes };
      }

      await updateDoc(postRef, { comments });
      return { postId, comments };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Create the slice
const forumSlice = createSlice({
  name: "forum",
  initialState,
  reducers: {
    updatePostsLocally: (state, action: PayloadAction<Post[]>) => {
      state.posts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.fulfilled, (state, action: PayloadAction<Post[]>) => {
        state.posts = action.payload;
      })
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
          const post = state.posts.find((post) => post.postId === postId);
          if (post) {
            post.likes = likes;
          }
        }
      )
      .addCase(
        toggleCommentLike.fulfilled,
        (
          state,
          action: PayloadAction<{ postId: string; comments: CommentTypes[] }>
        ) => {
          const { postId, comments } = action.payload;
          const post = state.posts.find((post) => post.postId === postId);
          if (post) {
            post.comments = comments;
          }
        }
      );
  },
});

export const { updatePostsLocally } = forumSlice.actions;
export default forumSlice.reducer;
