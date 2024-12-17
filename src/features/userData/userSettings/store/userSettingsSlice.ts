import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { UserSettings } from "../../types";

interface UserSettingsState {
  userSettings: UserSettings;
}

const getInitialState = () => ({
  userSettings: {
    displayName: null,
    about: "",
    avatar: null,
    banner: null,
    photos: [],
    notificationsEnabled: true,
  }
})
const initialState: UserSettingsState = getInitialState();
export const UserSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setAbout: (state, action: PayloadAction<string>) => {
      state.userSettings.about = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string | null>) => {
      state.userSettings.avatar = action.payload;
    },
    setBanner: (state, action: PayloadAction<string | null>) => {
      state.userSettings.banner = action.payload;
    },
    setPhotos: (state, action: PayloadAction<UserSettings["photos"]>) => {
      state.userSettings.photos = action.payload;
    },
    toggleNotifications: (state) => {
      state.userSettings.notificationsEnabled =
        !state.userSettings.notificationsEnabled;
    },
    resetSettings: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState)
  },
});

export const {
  setAbout,
  setAvatar,
  setBanner,
  toggleNotifications,
  resetSettings,
} = UserSettingsSlice.actions;

export const selectUserSettings = (state: RootState) => state.userSettings;

export default UserSettingsSlice.reducer;