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
import userSettingsReducer from "@features/userData/userSettings/store/userSettingsSlice";
import dashboardReducer from "@features/userData/userStories/store/userDashboardSlice";

import { rtkQueryErrorLogger } from "./middleware/errorMiddleware";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  userSettings: userSettingsReducer,
  dashboard: dashboardReducer,
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
    }).concat(rtkQueryErrorLogger),
});

export const persistor = persistStore(store);