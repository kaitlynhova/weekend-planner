export type MovieType = {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  Director: string;
  DVD: string;
  Error?: string;
  Genre: string;
  imdbID: string;
  imdbRating: string;
  imdbVotes: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Production: string;
  Rated: string;
  Ratings: { Source: string; Value: string }[];
  Released: string;
  Response: string;
  Runtime: string;
  Title: string;
  Type: string;
  Website: string;
  Writer: string;
  Year: string;
};

export type MovieTypeSearchResult = {
  imdbID: string;
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
};
