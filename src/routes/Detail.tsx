import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  popularity: number;
  genres: { id: number; name: string }[];
  release_date: string;
  vote_average: number;
}

const getMovieDetails = async (id: number): Promise<Movie | null> => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=cd7aeec7780132cd34e84575873a2f94`
    );
    const json = await response.json();
    return json;
  } catch(error){
    console.error("Error API details", error);
    return null;
  }
};

export default function Detail() {

  const {id} = useParams<{id:string}>();
  const [movieDetails, setMovieDetails] = useState<Movie | null>(null);
  

  useEffect(()=>{
    const fetchMovieDetails = async () => {

      if(id){
        const movieId = parseInt(id);
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      }
    };
    fetchMovieDetails();
  },[id]);

  if(!movieDetails){
    return <div>Loading...</div>;
  }

  return (
    <div className="relative flex items-center justify-center w-full h-screen">

      <div className="absolute z-10 w-full h-full bg-black/50"></div>
      <div className={`
        absolute z-0
        w-full h-screen bg-cover bg-center
        `}
        style={{
          filter: "blur(6px)",
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetails.poster_path})`,
        }}
        >
      </div>
      
      {/* details */}
      {/* details poster */}
      <div className="absolute z-20 w-full h-full grid grid-cols-1 md:grid-cols-2 items-center text-white px-64 py-8" >
        <div className="flex justify-center">
          <img
            className={`rounded-3xl max-w-sm`}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              />
        </div>

        {/* details info */}
        <div>
          <h1 className={`
            text-white font-title
            text-[100px] sm:text-[40px] md:text-[55px] lg:text-[70px] xl:text-[70px]
            min-[100px]:text-[40px] mb-40
            leading-none`}
            >
              {movieDetails.title}</h1>

          <p className={`
            text-[20px] sm:text-[9px] md:text-[10px] lg:text-[15px] xl:text-[20px]
            mb-5
          `}
          >
            {movieDetails.release_date}  | ⭐ {Math.round(movieDetails.vote_average)} / 10</p>
          
          <p className={`
            text-white font-noto
              w-[450px] max-h-[9em] overflow-y-auto
            `}
            >
              {movieDetails.overview}</p>
          
              <div className="bg-slate-100/10 rounded-3xl pr-2 w-28 h-6 mt-8 flex items-center justify-center ">
                <p className="text-white font-noto text-xs">↗ {movieDetails.popularity}</p>
              </div>
        </div>
      </div>

    </div>
  )
}
