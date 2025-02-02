// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; // 1. Import functions to create an API slice.

export const animeApi = createApi({
  reducerPath: 'animeApi', // 2. Name the API slice section in our store.
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }), // 3. Set the base URL for our anime API.
  endpoints: (builder) => ({
    // 4. Endpoint to get the top anime.
    getTopAnime: builder.query({
      query: () => '/top/anime', // 4a. Use the "/top/anime" endpoint to fetch top anime.
    }),
    // 5. Endpoint to search for anime by a term.
    searchAnime: builder.query({
      query: (searchTerm) => `/anime?q=${encodeURIComponent(searchTerm)}`, // 5a. Build the query URL with the search term.
    }),
  }),
});

export const { useGetTopAnimeQuery, useSearchAnimeQuery } = animeApi; // 6. Export hooks to use these endpoints in components.
