import { useParams } from 'react-router-dom';
import { useGetAnimeDetailsQuery } from '../features/api/apiSlice';
import { Spotlight } from "../components/ui/spotlight-new";

const DetailPage = () => {
  const { id } = useParams();
  const { data: animeDetails, isLoading, isError } = useGetAnimeDetailsQuery(id);

    if (isLoading) return <div className="text-center text-white">Loading...</div>;
    if (isError) return <div className="text-center text-red-500">Error fetching anime details</div>;

    // Check if animeDetails and its nested properties exist before rendering
    if (!animeDetails || !animeDetails.data) {
      return <div className="text-center text-white">No anime data available.</div>;
    }


    const anime = animeDetails.data;

    const imageUrl = anime?.images?.jpg?.large_image_url || anime?.images?.jpg?.image_url || 'https://via.placeholder.com/300x450?text=No+Image';

  return (
    <div className="min-h-screen w-full bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
       <Spotlight />
      <div className="p-6 max-w-5xl mx-auto"> {/* Container with max-width */}
        <h1 className="text-3xl font-semibold text-center text-white mb-6">{anime.title}</h1>

        <div className="flex flex-col md:flex-row gap-8">
            {/* Image Section (Left Side) */}
          <div className="md:w-1/3">
              <img
                  src={imageUrl}
                   alt={anime.title}
                  className="w-full h-auto rounded-lg shadow-md object-cover aspect-[3/4] max-h-[500px]"
              />
          </div>

          {/* Text Content (Right Side) */}
          <div className="md:w-2/3 text-white space-y-4">
              {/* Synopsis */}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Synopsis</h2>
                <p className="text-gray-300">{anime?.synopsis || 'No synopsis available'}</p>
              </div>

               {/* Additional Details */}
              <div className="space-y-2">
                <h2 className="text-xl font-semibold">Details</h2>
                <p><span className="font-medium">Rating:</span> {anime?.rating || 'N/A'}</p>
                <p><span className="font-medium">Episodes:</span> {anime?.episodes || 'N/A'}</p>
                <p>
                  <span className="font-medium">Genres:</span>
                   {anime?.genres?.map(genre => genre.name).join(', ') || 'No genres available'}
                </p>
                <p><span className="font-medium">Status:</span> {anime?.status || 'No status available'}</p>
                {/* Add more details here */}
                 <p><span className="font-medium">Score:</span> {anime.score || 'N/A'}</p>
                  <p><span className="font-medium">Rank:</span> {anime.rank || 'N/A'}</p>
                  <p><span className="font-medium">Popularity:</span> {anime.popularity || 'N/A'}</p>
                {/* ... Add more fields as needed from the API response */}
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;