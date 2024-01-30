"use client";

import { useContext } from "react";
import { SearchContext } from "@/app/context/search";

import LocationSelection from "./LocationSelection";
import DateSelaction from "./DateSelaction";
import HoursSelection from "./HoursSelection";



const Search = () => {
  const { SearchActive } = useContext(SearchContext);
  return (
    <div
      className={`${
        SearchActive
         ? "bg-white rounded-none xl:h-[80px]" 
         : "bg-white rounded-[20px] py-6 xl:pr-4 xl:h-[98px]"
      } hidden xl:block w-full relative shadow-lg `}
    >
      <div className={`'h-full flex xl:flex' ${SearchActive && 'container mx-auto'}`}>
        <LocationSelection />
        <DateSelaction />
        <HoursSelection/>
        <div className='xl:h-full flex items-center px-6 xl:px-0'>
          <button className={`${ SearchActive ? 'btn btn-sm btn-accent xl:w-[164px]' : 'btn btn-sm btn-accent xl:w-[184px]' }`}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Search;
