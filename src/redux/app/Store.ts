import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authApi } from "../service/AuthApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import AuthSlice from "../features/AuthSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

// Redux Persist configuration
const persistConfig = {
  key: "root", // Key for storing the data in localStorage
  storage,
};

const rootReducer = combineReducers({
  [authApi.reducerPath]: authApi.reducer,
  auth: AuthSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

setupListeners(store.dispatch);

// Create a persistor
export const persistor = persistStore(store);

// //sending hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
