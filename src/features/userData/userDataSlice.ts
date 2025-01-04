import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SocialLink, UserData } from "./types";

const initialState: UserData = {
  description: "",
  socialLinks: [],
  notifications: false,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    addSocialLink(state, action: PayloadAction<SocialLink>) {
      state.socialLinks.push(action.payload);
    },
    updateSocialLink(state, action: PayloadAction<SocialLink>) {
      const index = state.socialLinks.findIndex(
        (link) => link.id === action.payload.id
      );
      if (index !== -1) {
        state.socialLinks[index] = action.payload;
      }
    },
    removeSocialLink(state, action: PayloadAction<string>) {
      state.socialLinks = state.socialLinks.filter(
        (link) => link.id !== action.payload
      );
    },
    toggleNotifications(state) {
      state.notifications = !state.notifications;
    },
  },
});

export const {
  updateDescription,
  addSocialLink,
  updateSocialLink,
  removeSocialLink,
  toggleNotifications,
} = userDataSlice.actions;

export default userDataSlice.reducer;