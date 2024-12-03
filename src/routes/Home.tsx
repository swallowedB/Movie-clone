import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Movie from "../components/Movie";
import bgImg from "../assets/images/bg1.jpg";
import Top5 from "../components/Top5";
import Allmovies from "../components/Allmovies";
import Serach from "../components/Search";

interface Movie {
  id: number;
  title: string;
  poster_path: string; 
  overview: string; 
  genres: { id: number; name: string }[]; 
  rating: number;
  popularity: number;
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);

  const location = useLocation();

  const getMovies = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=cd7aeec7780132cd34e84575873a2f94&with_genres=16&sort_by=popularity.desc&page=${page}`
      );
      const json = await response.json();
      setMovies(json.results);
      setTotalPage(json.total_pages);
      setLoading(false);

    } catch (error) {
      console.error('Error fetching movies:', error);
      setLoading(false);
    }
  };
  useEffect(() => {
    if (location.state && location.state.page){
      setPage(location.state.page);
    }
  }, [location.state]);

  useEffect(() => {
    getMovies();
  }, [page]);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {/* Main */}
          <div className="relative bg-[#0A0D16] min-h-screen pb-[200px]">
            <div
              className={`
              bg-[#09132C] 
              w-full h-screen relative
              
            `}>
              <div className="relative">
                <div className="absolute inset-0 bg-black backdrop-blur-3xl z-20">
                </div>
                <img 
                  src={bgImg} 
                  alt="mainImg" 
                  className="absolute w-full h-auto z-10 object-cover "/>
              </div>

                {/* banner section */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-start mt-[100px]">
                  {/* banner title */}
                  <div className="flex flex-col items-center justify-center">
                    <h1
                      className={`
                        font-title text-white 
                        text-[100px] sm:text-[40px] md:text-[55px] lg:text-[70px] xl:text-[70px]
                        min-[100px]:text-[40px]
                        leading-none
                        `}
                        > WHERE ALL THE</h1>
                    <h3
                      className={
                        `font-title
                      text-white text-[65px] sm:text-[25px] md:text-[40px] lg:text-[50px] xl:text-[50px]
                        min-[320px]:text-[25px]
                      `}>
                        ANIMATIONS ARE</h3>
                  </div>
                  
                  {/* banner serach */}
                    <Serach />
                
                  {/* banner Top5 card */}
                  <div className="absolute top-[35%] left-1/2 transform -translate-x-1/2 z-20">
                    <Top5 movies={movies}/></div>
                  </div> 

                </div>

                {/* all movies */}
                <div className="z-40 absolute grid place-items-center w-full h-full p-20">
                  <div className="bg-slate-400/30 px-32 p-20 rounded-3xl mt-10 border-2">
                    <Allmovies movies={movies}/>
                  </div>
                </div>

          </div>



        </div>
      )}
    </div>
  );
}
