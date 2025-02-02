import { configureStore } from '@reduxjs/toolkit'; // 1. Import the function to set up our store.
import { animeApi } from './features/api/apiSlice'; // 2. Import our API slice for fetching anime data.

export const store = configureStore({
  reducer: {
    [animeApi.reducerPath]: animeApi.reducer, // 3. Register our API reducer under its unique key.
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(animeApi.middleware), // 4. Add extra middleware for RTK Query features.
});
