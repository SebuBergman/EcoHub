import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { EcoStory } from "../types";
import { ECO_STORY_COLLECTION } from "../constant";
import { firestore } from "@app/services/firebase";

// Initial state
interface EcoStoryState {
  stories: EcoStory[];
}

const initialState: EcoStoryState = {
  stories: [],
};

// Async thunk to upload a story to Firestore
export const addUserStory = createAsyncThunk(
  "ecoStory/addUserStory",
  async (story: EcoStory) => {
    const docRef = await addDoc(
      collection(firestore, ECO_STORY_COLLECTION),
      story
    );
    return { ...story, storyId: docRef.id }; // Use Firestore's generated ID
  }
);

export const fetchUserStories = createAsyncThunk(
  "ecoStory/fetchStory",
  async (_, { rejectWithValue }) => {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, ECO_STORY_COLLECTION)
      );
      const stories: EcoStory[] = querySnapshot.docs.map((doc) => {
        const data = doc.data() as Omit<EcoStory, "storyId">;
        return { ...data, storyId: doc.id };
      });
      return stories;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Create the slice
const ecoStorySlice = createSlice({
  name: "ecoStory",
  initialState,
  reducers: {
    updateStoriesLocally: (state, action: PayloadAction<EcoStory[]>) => {
      state.stories = action.payload;
    },
    // Remove or replace later
    removeStory(state, action: PayloadAction<string>) {
      state.stories = state.stories.filter((s) => s.storyId !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addUserStory.fulfilled, (state, action) => {
      state.stories.push(action.payload);
    });
  },
});

// Export actions
export const { updateStoriesLocally } = ecoStorySlice.actions;
export const { removeStory } = ecoStorySlice.actions;

// Export reducer
export default ecoStorySlice.reducer;
