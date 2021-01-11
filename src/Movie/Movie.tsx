import React from "react";
import * as S from "./MovieStyles";
import { MovieType } from "../types";
import closeImg from "../img/close.svg";
import checkImg from "../img/check.svg";
import { useGetMovieData } from "../hooks/useGetMovieData";

const Movie: React.FC<{
  movieID: string;
}> = ({ movieID }) => {
  const { data: movie } = useGetMovieData(movieID);

  const onClick = (movie: MovieType) => {
    console.log("clicked");
  };

  // bail if no movie data
  if (!movie) {
    return null;
  }

  const { Plot, Poster, Title, Year, Runtime, imdbRating, imdbID } = movie;
  // don't show movies that don't have runTime.
  // normally we would do this upstream but RunTime isn't in the search result data shape
  const hasRunTime = movie.Runtime !== "N/A";
  if (!hasRunTime) {
    return null;
  }
  const hasPoster = Poster !== "N/A";
  const poster = hasPoster ? (
    <a
      aria-label={`${Title} imdb`}
      href={`https://www.imdb.com/title/${imdbID}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.Poster alt={`${Title} Poster`} src={Poster} />
    </a>
  ) : (
    <></>
  );

  return (
    <S.ContainerOuter>
      <S.ContainerInfoOuter>
        {poster}
        <S.ContainerInfo hasPoster={hasPoster}>
          <S.Title>{`${Title} (${Year})`}</S.Title>
          <S.StarsBg>
            <S.StarsFilled width={30} />
          </S.StarsBg>
          <S.Runtime>{Runtime}</S.Runtime>
          <S.Plot>{Plot}</S.Plot>
        </S.ContainerInfo>
      </S.ContainerInfoOuter>
      <S.Button
        aria-label="toggle movie"
        onClick={() => {
          onClick(movie);
        }}
      >
        <img alt="toggle movie" src={true ? checkImg : closeImg} />
      </S.Button>
    </S.ContainerOuter>
  );
};

export default Movie;
