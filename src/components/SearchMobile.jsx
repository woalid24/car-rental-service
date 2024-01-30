import React from "react";
import LocationSelection from "./LocationSelection";
import DateSelaction from "./DateSelaction";
import HoursSelection from "./HoursSelection";

const SearchMobile = () => {
  return (
    <div className="xl:hidden font-medium ">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelaction />
          <HoursSelection />
          <div className="flex items-center px-6">
            <button className="btn btn-sm btn-accent w-[164px] mx-auto">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
