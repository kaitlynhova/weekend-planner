import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Movie from "../../Movie/Movie";
import { MovieTypeSearchResult } from "../../types";
import { useGetSearchData } from "../../hooks/useGetSearchData";

const SearchPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { data } = useGetSearchData(searchTerm);
  const movieSearchResults: MovieTypeSearchResult[] = data && data.Search;

  const onSearch = (text: string) => {
    setSearchTerm(text);
  };

  const shouldDisplayMovie =
    movieSearchResults && movieSearchResults.length > 0;
  return (
    <main>
      <SearchBar onSearch={onSearch} />
      {shouldDisplayMovie &&
        movieSearchResults.map((movie: MovieTypeSearchResult) => (
          <Movie key={movie.imdbID} movieID={movie.imdbID} />
        ))}
    </main>
  );
};

export default SearchPage;
