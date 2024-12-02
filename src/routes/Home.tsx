import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import bgImg from "../assets/images/animating Movie.jpg";
import Top5 from "../components/Top5";

interface Movie {
  id: number;
  medium_cover_image: string;
  title: string;
  summary: string;
  genres: string[];
}

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {/* Main */}
          <div className="bg-[#0A0D16] h-screen flex items-center justify-center">
            <div
              id="main" 
              className={`
              bg-[#09132C] 
              w-full h-screen relative
              
            `}>
              <div className="">
                <img 
                  src={bgImg} 
                  alt="mainImg" 
                  className="absolute w-full h-auto z-0"/>
              </div>

                {/* banner section */}
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-start mt-[95px]">
                  {/* banner title */}
                  <div className="flex flex-col items-center justify-center">
                    <h1
                      className={`
                        font-title text-white 
                        text-[100px] sm:text-[40px] md:text-[55px] lg:text-[70px] xl:text-[110px]
                        min-[100px]:text-[40px]
                        leading-none
                        `}
                        > WHERE ALL THE</h1>
                    <h3
                      className={
                        `font-title
                      text-white text-[65px] sm:text-[25px] md:text-[40px] lg:text-[50px] xl:text-[75px]
                        min-[320px]:text-[25px]
                      `}>
                        ANIMATIONS ARE</h3>
                  </div>
                  
                  {/* banner subtitle */}
                  <div className="flex flex-col items-center justify-center">
                    <p
                      className={`
                        font-noto leading-none 
                        text-white text-[23px] sm:text-[13px] md:text-[16px] lg:text-[18px] xl:text-[20px]
                        min-[100px]:text-[12px]
                      `}>
                      Welcome To The Animating</p>
                    <p
                      className={`
                        font-noto text-white 
                        text-[23px] sm:text-[13px] md:text-[18px] lg:text-[16px] xl:text-[20px]
                        min-[100px]:text-[12px]
                      `}>
                      Have a good time</p>
                  </div> 
                
                {/* banner Top5 card */}
                <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 z-20">
                  <Top5 />
                </div>

                </div> 
                

            </div>
          </div>
          {movies.map((movie) => (
            <Movie
              id={movie.id}
              key={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
