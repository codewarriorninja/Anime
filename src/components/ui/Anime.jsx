// src/features/AnimeList.js
import React, { useState, useEffect } from 'react';
import { useGetTopAnimeQuery, useSearchAnimeQuery } from '../../features/api/apiSlice';


const AnimeList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  // Fetch top anime when there is no search term.
  const {
    data: topData,
    error: topError,
    isLoading: topLoading,
  } = useGetTopAnimeQuery(undefined, { skip: searchTerm.trim() !== '' });

  // Fetch search results when a search term is provided.
  const {
    data: searchData,
    error: searchError,
    isLoading: searchLoading,
  } = useSearchAnimeQuery(searchTerm, { skip: searchTerm.trim() === '' });

  // Determine which data to use.
  const loading = searchTerm ? searchLoading : topLoading;
  const error = searchTerm ? searchError : topError;
  const animeList = searchTerm ? (searchData?.data || []) : (topData?.data || []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const renderSkeletons = () => {
    return Array.from({ length: 8 }).map((_, idx) => (
      <div
        key={idx}
        className="bg-white dark:bg-gray-900 rounded-lg shadow-md animate-pulse"
      >
        <div className="bg-gray-300 dark:bg-gray-700 w-full h-52 rounded-t-lg"></div>
        <div className="p-4">
          <div className="h-6 bg-gray-300 dark:bg-gray-700 rounded mb-2"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-1/2"></div>
        </div>
      </div>
    ));
  };

  return (
    <div className="p-6">
      {/* Search Input Field */}
      <div className="mb-6 flex justify-center">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search anime..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-80 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200"
          />
        </div>
      </div>

      {/* Display error messages if any */}
      {error && <div className="text-center text-red-500">Error fetching anime data</div>}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {renderSkeletons()}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {animeList.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-200"
            >
              <img
                src={anime.images.jpg.image_url}
                alt={anime.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 dark:text-white">{anime.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">Score: {anime.score}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeList;
