interface AllMoviesProps {
  movies: Movie[];
}

interface Movie {
  id: number;
  title: string;
  poster_path: string; 
  overview: string; 
  popularity: number;
  genres: { id: number; name: string }[];
}

export default function Allmovies({ movies }: AllMoviesProps) {
  const maxTitleLength = 17; 

  const truncateText = (text: string, maxLength: number): string => {
    if(text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="relative z-20 ">
      <h2 className=" font-noto text-white text-2xl font-bold mb-10">All Animation Movies</h2>
      
      {/* img Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {movies.map((movie) => (
          <div key={movie.id} className="relative bg-opacity-30 rounded-3xl overflow-hidden shadow-custom-heavy">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-full h-[350px] object-cover"
            />
            <div 
              className={`
                absolute inset-x-0 bottom-0 h-[50%] 
                bg-gradient-to-t from-black to-transparent"`}>
            </div>
            
            {/* img Card-text */}    
            <div className={`
                absolute inset-x-0 bottom-0 
                flex flex-col items-start justify-end z-10
                p-5
            `}>
              <div className="bg-slate-400/30 rounded-3xl p-1 px-4 mb-2">
                <p className="text-white font-noto text-xs">↗ {movie.popularity}</p>
              </div>
              <h3 className="text-white font-noto text-xl font-semibold truncate">
                {truncateText(movie.title, maxTitleLength)}
              </h3>
              <p className="text-white font-noto text-[10px] mt-2 line-clamp-2 opacity-80">
              {movie.overview}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
