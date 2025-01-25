import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EcoStory } from "../types";

// Initial state
interface EcoStoryState {
  stories: EcoStory[];
}

const initialState: EcoStoryState = {
  stories: [],
};

const ECO_STORY_COLLECTION = "ecoStories";

// Async thunk to upload a story to Firestore
export const uploadStoryToFirestore = createAsyncThunk(
  "ecoStory/uploadToFirestore",
  async (story: EcoStory) => {
    const db = getFirestore();
    const storyRef = await addDoc(collection(db, ECO_STORY_COLLECTION), story);
    return { ...story, id: storyRef.id }; // Use Firestore's generated ID
  }
);

// Async thunk to update a story's `accepted` status in Firestore
export const updateStoryInFirestore = createAsyncThunk(
  "ecoStory/updateInFirestore",
  async ({ id, accepted }: { id: string; accepted: boolean }) => {
    const db = getFirestore();
    const storyRef = doc(db, ECO_STORY_COLLECTION, id);
    await updateDoc(storyRef, { accepted });
    return { id, accepted };
  }
);

// Create the slice
const ecoStorySlice = createSlice({
  name: "ecoStory",
  initialState,
  reducers: {
    // Action to update the accepted status of a story
    approveStory(state, action: PayloadAction<string>) {
      const story = state.stories.find((s) => s.id === action.payload);
      if (story) {
        story.accepted = true;
      }
    },
    // Optionally, reject or delete a story
    removeStory(state, action: PayloadAction<string>) {
      state.stories = state.stories.filter((s) => s.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadStoryToFirestore.fulfilled, (state, action) => {
        state.stories.push(action.payload);
      })
      .addCase(updateStoryInFirestore.fulfilled, (state, action) => {
        const story = state.stories.find(
          (story) => story.id === action.payload.id
        );
        if (story) {
          story.accepted = action.payload.accepted;
        }
      });
  },
});

// Export actions
export const { approveStory, removeStory } = ecoStorySlice.actions;

// Export reducer
export default ecoStorySlice.reducer;
