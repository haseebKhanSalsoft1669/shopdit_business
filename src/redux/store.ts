import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { authService } from "./services/authSlice";
import { userSlice } from "./services/userSlice";
import { reportSlice } from "./services/reportSlice";
import authReducer from "./slices/authSlice";

const persistConfig = {
  key: "shopdit_business",
  storage,
  whitelist: ["counter", "userSlice", "auth"],
};

const rootReducer = combineReducers({
  [authService.reducerPath]: authService.reducer,
  [userSlice.reducerPath]: userSlice.reducer,
  [reportSlice.reducerPath]: reportSlice.reducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      authService.middleware,
      userSlice.middleware,
      reportSlice.middleware
    ),
});

setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
