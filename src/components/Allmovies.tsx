interface AllMoviesProps {
  movies: Movie[];
}

interface Movie {
  id: number;
  title: string;
  poster_path: string; 
  overview: string; 
  genres: { id: number; name: string }[];
}

export default function Allmovies({ movies }: AllMoviesProps) {
  return (
    <div className="relative z-20 pt-[200px]">
      <h2 className="text-white text-2xl font-bold mb-5">All Animation Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div key={movie.id} className="bg-[#09132C] rounded-lg overflow-hidden shadow-lg">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[300px] object-cover"
            />
            <div className="p-3">
              <h3 className="text-white text-lg font-semibold truncate">
                {movie.title}
              </h3>
              <p className="text-gray-400 text-sm mt-2 truncate">
                {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
