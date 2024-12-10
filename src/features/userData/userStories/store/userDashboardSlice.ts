import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { v4 as uuidv4 } from "uuid";
import { RootState } from "@store/index";

interface EcoStory {
  id: string;
  title: string;
  content: string;
  date: string;
}

interface DashboardState {
  ecoStories: EcoStory[];
}

const initialState: DashboardState = {
  ecoStories: [],
};

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addEcoStory: (state, action: PayloadAction<Omit<EcoStory, "id">>) => {
      state.ecoStories.push({
        id: uuidv4(),
        ...action.payload,
      });
    },
    deleteEcoStory: (state, action: PayloadAction<string>) => {
      state.ecoStories = state.ecoStories.filter(
        (story) => story.id !== action.payload
      );
    },
    resetDashboard: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
  },
});

export const { addEcoStory, deleteEcoStory, resetDashboard } =
  dashboardSlice.actions;

export const selectEcoStories = (state: RootState) =>
  state.dashboard.ecoStories;

export default dashboardSlice.reducer;
