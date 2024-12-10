import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

interface UserSettingsState {
  displayName: string | null | undefined;
  about: string;
  avatar: string | null;
  banner: string | null;
  notificationsEnabled: boolean;
}

const initialState: UserSettingsState = {
  displayName: "",
  about: "",
  avatar: null,
  banner: null,
  notificationsEnabled: true,
}

export const UserSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
    setAbout: (state, action: PayloadAction<string>) => {
      state.about = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string | null>) => {
      state.avatar = action.payload;
    },
    setBanner: (state, action: PayloadAction<string | null>) => {
      state.banner = action.payload;
    },
    toggleNotifications: (state) => {
      state.notificationsEnabled =!state.notificationsEnabled;
    },
    resetSettings: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
});

export const {
  setDisplayName,
  setAbout,
  setAvatar,
  setBanner,
  toggleNotifications,
  resetSettings,
} = UserSettingsSlice.actions;

export const selectUserSettings = (state: RootState) => state.userSettings;

export default UserSettingsSlice.reducer;