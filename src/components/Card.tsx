type CardProps = {
  movie: {
    id: number;
    poster_path: string;
    title: string;
  };
};


export default function Card({movie}: CardProps) {
  
  return (
    <div
    id={String(movie.id)}
    className={`
      bg-white 
      sm:hidden md:hidden lg:block 
      sm:w-[10%] md:w-[60%] lg:w-[310px] 
      h-[25rem] sm:h-[15rem] md:h-[30rem] lg:h-[30rem]
      rounded-3xl 
      `}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  )
}
