"use client";

import { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

//provider
export const SearchContextProvider = ({ children }) => {
    const [ SearchActive ,setSearchActive] = useState(false);

  return <SearchContext.Provider value={{ SearchActive, setSearchActive}}>{children}</SearchContext.Provider>;
};

export const useSearchContext = () => useContext(SearchContext);
