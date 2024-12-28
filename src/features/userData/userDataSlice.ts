import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SocialLink, UserData } from "./types";

const initialState: UserData = {
  description: "",
  avatar: [],
  socialLinks: [],
  notifications: null,
};

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    updateDescription(state, action: PayloadAction<string>) {
      state.description = action.payload;
    },
    updateAvatar(state, action: PayloadAction<string>) {
      state.avatar = action.payload;
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
  },
});

export const {
  updateDescription,
  updateAvatar,
  addSocialLink,
  updateSocialLink,
  removeSocialLink,
} = userDataSlice.actions;

export default userDataSlice.reducer;
