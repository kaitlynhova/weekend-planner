import React from "react";

// used to get movie search results
export const useGetSearchData = (searchTerm: string): { data: any } => {
  const [data, setData] = React.useState<any>(null);

  React.useEffect(() => {
    const getData = async () => {
      try {
        const OMDB_URL = `https://www.omdbapi.com/`;
        const stringifiedQueryParams = new URLSearchParams({
          apikey: `${process.env.REACT_APP_OMDB_KEY}`,
          type: "movie",
          s: searchTerm,
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
  }, [searchTerm]);

  return { data };
};
