import { useLocalStorage } from "react-use";
import constate from "constate";

const LOCAL_STORAGE_SELECTED_MOVIES_KEY = "SELECTED_MOVIES";

const useSelectedMoviesHook = () => {
  const [selectedMovies, setSelectedMovies] = useLocalStorage<string[]>(
    LOCAL_STORAGE_SELECTED_MOVIES_KEY,
    []
  );

  return {
    selectedMovies: selectedMovies || [],
    setSelectedMovies,
  };
};

export const [SelectedMoviesProvider, useSelectedMovies] = constate(
  useSelectedMoviesHook
);
