import React, { useState } from "react";
import searchImg from "../../img/search.svg";
import * as S from "./SearchBarStyles";

const SearchBar: React.FC<{
  onSearch: (searchTerm: string) => void;
}> = ({ onSearch }) => {
  const [text, setText] = useState<string>("");
  return (
    <S.ContainerOuter>
      <S.Input
        aria-label="Movie search input"
        onChange={(event) => {
          setText(event.target.value);
        }}
        onKeyDown={(event) => {
          // on enterpress, because users be like that sometimes
          if (event.key === "Enter") {
            onSearch(text);
          }
        }}
        placeholder="Search movies"
        value={text}
      />
      <S.Submit
        aria-label="Submit movie search"
        onClick={() => {
          onSearch(text);
        }}
      >
        <img alt="Search Icon" src={searchImg} />
      </S.Submit>
    </S.ContainerOuter>
  );
};

export default SearchBar;
