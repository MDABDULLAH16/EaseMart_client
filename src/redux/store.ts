// import { configureStore } from "@reduxjs/toolkit";
// // import userDetailsReducer from "./features/userDetailsSlice";
// import authSliceReducer from "./features/authSlice";
// import { baseApi } from "./api/baseApi";
// import {
//   FLUSH,
//   PAUSE,
//   PERSIST,
//   persistReducer,
//   persistStore,
//   PURGE,
//   REGISTER,
//   REHYDRATE,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "auth",
//   version: 1,
//   storage,
// };
// const persistedReducer = persistReducer(persistConfig, authSliceReducer);
// export const store = configureStore({
//   reducer: {
//     auth: persistedReducer,
//     userDetails: userDetailsReducer,

//     [baseApi.reducerPath]: baseApi.reducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }).concat(baseApi.middleware),
// });

// // Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export const persistor = persistStore(store);
