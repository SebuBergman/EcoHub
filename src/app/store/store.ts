import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import authReducer from "@features/auth/store/authSlice";
import userDataReducer from "@/features/userData/store/userDataSlice";
import ecoStoryReducer from "@/features/userStories/store/ecoStorySlice";

import storage from "redux-persist/lib/storage";
import forumReducer from "@/features/forum/store/forumSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  userData: userDataReducer,
  ecoStory: ecoStoryReducer,
  forum: forumReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSettings", "dashboard"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(),
});

export const persistor = persistStore(store);