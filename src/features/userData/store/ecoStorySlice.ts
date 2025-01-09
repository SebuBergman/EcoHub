// ecoStorySlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the EcoStory interface
export interface EcoStory {
  id: string; // User ID or a unique story ID
  title: string;
  content: string;
  accepted: boolean; // Admin approval status
}

// Initial state
interface EcoStoryState {
  stories: EcoStory[];
}

const initialState: EcoStoryState = {
  stories: [],
};

// Create the slice
const ecoStorySlice = createSlice({
  name: "ecoStory",
  initialState,
  reducers: {
    // Action to add a new story
    submitStory(state, action: PayloadAction<Omit<EcoStory, "accepted">>) {
      state.stories.push({
        ...action.payload,
        accepted: false, // New stories are not accepted by default
      });
    },
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
});

// Export actions
export const { submitStory, approveStory, removeStory } = ecoStorySlice.actions;

// Export reducer
export default ecoStorySlice.reducer;
