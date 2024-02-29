import { createContext, ReactNode, useContext, useState } from "react";

type SetSearchTerm = React.Dispatch<React.SetStateAction<string>>;

interface SearchContextType {
  searchTerm: string;
  setSearchTerm: SetSearchTerm;
}

const SearchContext = createContext<SearchContextType>({
  searchTerm: "",
  setSearchTerm: () => {},
});

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
