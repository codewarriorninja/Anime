import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'; 

export const animeApi = createApi({
  reducerPath: 'animeApi', // 2. Name the API slice section in our store.
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.jikan.moe/v4' }), // 3. Set the base URL for our anime API.
  endpoints: (builder) => ({
    getTopAnime: builder.query({
      query: () => '/top/anime', // 4a. Use the "/top/anime" endpoint to fetch top anime.
    }),
    searchAnime: builder.query({
      query: (searchTerm) => `/anime?q=${encodeURIComponent(searchTerm)}`, // 5a. Build the query URL with the search term.
    }),
    // 6. New endpoint to get details for a specific anime.
    getAnimeDetails: builder.query({
      query: (id) => `/anime/${id}`, // 6a. Fetch detailed data for an anime by ID.
    }),
  }),
});

export const { useGetTopAnimeQuery, useSearchAnimeQuery, useGetAnimeDetailsQuery } = animeApi;
