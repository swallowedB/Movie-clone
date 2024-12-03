import { useState } from "react";
import serachIcon from "../assets/images/Search.png";

export default function Search() {
  const [placeholder, setPlaceholder] =useState("What are you looking for?")

  const handleFocus = () => {
    setPlaceholder("");
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.value === "") {
      setPlaceholder("What are you looking for?");
    }
  }

  return (
    <>
      <div className="flex justify-center items-center p-6">
        <div className="relative w-[500px] sm:max-w-md md:max-w-lg lg:max-w-3xl">
        
        {/* Search icon */}
        <img 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          src={serachIcon}/>
        {/* Search input */}
          <input
            type="text"
            placeholder={placeholder}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={`
              w-full p-3 pl-10 pr-3 border 
              bg-slate-400/40 rounded-3xl 
              text-sm font-noto text-white
              focus:outline-none
              `}
          />
          
        </div>
      </div>
    </>
  )
}
