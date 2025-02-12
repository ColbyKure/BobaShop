import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage"; // Use localStorage
import { persistReducer, persistStore } from "redux-persist";
import cartReducer from "./slices/cartSlice";
import authReducer from "./slices/authSlice";
import orderReducer from "./slices/orderSlice";

// 🔹 Configure persistence
const persistConfig = {
  key: "root", // Root key for persisted state
  storage, // Use localStorage
  whitelist: ["cart", "auth"], // Only persist cart & auth state
};

const rootReducer = combineReducers({
  cart: cartReducer,
  auth: authReducer,
  order: orderReducer, // Orders will not persist
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// 🔹 Create Redux store with persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Needed for redux-persist
    }),
});

// 🔹 Create persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
