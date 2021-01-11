import { useLocalStorage } from "react-use";
import constate from "constate";

const LOCAL_STORAGE_SELECTED_MOVIES_KEY = "SELECTED_MOVIES";
const LOCAL_STORAGE_SELECTED_MOVIES_RUNTIME = "SELECTED_MOVIES_RUNTIME";

const useSelectedMoviesHook = () => {
  const [selectedMovies, setSelectedMovies] = useLocalStorage<string[]>(
    LOCAL_STORAGE_SELECTED_MOVIES_KEY,
    []
  );

  const [
    selectedMoviesRunTime,
    setSelectedMoviesRunTime,
  ] = useLocalStorage<number>(LOCAL_STORAGE_SELECTED_MOVIES_RUNTIME, 0);

  return {
    selectedMovies: selectedMovies || [],
    setSelectedMovies,
    selectedMoviesRunTime: selectedMoviesRunTime || 0,
    setSelectedMoviesRunTime,
  };
};

export const [SelectedMoviesProvider, useSelectedMovies] = constate(
  useSelectedMoviesHook
);
