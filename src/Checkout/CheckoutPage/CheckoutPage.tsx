import React from "react";
import Movie from "../../Movie/Movie";
import confetti from "canvas-confetti";
import { useSelectedMovies } from "../../SelectedMoviesContext";
import { getTotalWatchTime } from "../../utils/utils";
import * as S from "./CheckoutPageStyles";

const CheckoutPage: React.FC = () => {
  const { selectedMovies, selectedMoviesRunTime } = useSelectedMovies();
  const movies = React.useMemo(
    () =>
      selectedMovies.map((movieID: string) => (
        <Movie key={movieID} movieID={movieID} />
      )),
    [selectedMovies]
  );
  const formattedWatchTime = getTotalWatchTime(selectedMoviesRunTime);
  const displayContent = movies.length > 0 ? movies : <p>Nothing, yet...</p>;
  const weekendIsFull: boolean = formattedWatchTime > 48;

  // TODO: add modal or something that says why this happened
  if (weekendIsFull) {
    // light it up
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  }

  return (
    <main>
      <S.ContainerOuter>
        <S.Title>Your Weekend Plans</S.Title>
        <div>
          {displayContent}
          <S.ContainerTotal>
            <S.Title>Total</S.Title>
            <S.Total>
              ~{formattedWatchTime} / 48 hours of your weekend is filled.
            </S.Total>
          </S.ContainerTotal>
        </div>
      </S.ContainerOuter>
    </main>
  );
};

export default CheckoutPage;
