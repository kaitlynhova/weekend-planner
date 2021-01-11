import React from "react";
import { MovieType } from "../types";

// used to get a specific movie's details
export const useGetMovieData = (imdbID: string): { data: MovieType } => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const OMDB_URL = `https://www.omdbapi.com/`;
        const stringifiedQueryParams = new URLSearchParams({
          apikey: `${process.env.REACT_APP_OMDB_KEY}`,
          plot: "short",
          type: "movie",
          i: imdbID,
        }).toString();
        const url = `${OMDB_URL}?${stringifiedQueryParams}`;
        const myHeaders = new Headers();

        const response = await fetch(url, {
          method: "GET",
          mode: "cors",
          headers: myHeaders,
        });

        const fetchData = await response.json();
        setData(fetchData);
      } catch (ex) {
        console.error("fetch fail", ex);
      }
    };

    getData();
  }, [imdbID]);

  return { data };
};
