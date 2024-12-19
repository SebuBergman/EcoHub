import { RootState } from "@/app/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";
import { UserData } from "../../types";

interface UserDataState {
  userSettings: UserData;
}

const getInitialState = () => ({
  userSettings: {
    displayName: null,
    description: "",
    avatar: null,
    banner: null,
    photos: [],
    notificationsEnabled: true,
  },
});
const initialState: UserDataState = getInitialState();
export const UserSettingsSlice = createSlice({
  name: "userSettings",
  initialState,
  reducers: {
    setAbout: (state, action: PayloadAction<string>) => {
      state.userSettings.description = action.payload;
    },
    setAvatar: (state, action: PayloadAction<string | null>) => {
      state.userSettings.avatar = action.payload;
    },
    setBanner: (state, action: PayloadAction<string | null>) => {
      state.userSettings.banner = action.payload;
    },
    setPhotos: (state, action: PayloadAction<UserData["photos"]>) => {
      state.userSettings.photos = action.payload;
    },
    toggleNotifications: (state) => {
      state.userSettings.notificationsEnabled =
        !state.userSettings.notificationsEnabled;
    },
    resetSettings: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(PURGE, () => initialState);
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