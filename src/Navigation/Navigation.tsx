import React from "react";
import { Link } from "react-router-dom";
import { useSelectedMovies } from "../SelectedMoviesContext";
import cart from "../img/cart.svg";
import * as S from "./NavigationStyles";

const Navigation: React.FC<{}> = () => {
  const { selectedMovies } = useSelectedMovies();
  return (
    <S.ContainerOuter>
      <S.Logo>
        <Link to="/">Weekend Planner</Link>
      </S.Logo>
      <S.LinkList>
        <S.Link>
          <S.ContainerSearch>
            <Link to="/">Search</Link>
          </S.ContainerSearch>
        </S.Link>
        <S.Link>
          <S.ContainerCheckout>
            <Link aria-label="checkout link" to="/checkout">
              <p>{selectedMovies.length}</p>
              <img alt="Checkout" src={cart} />
            </Link>
          </S.ContainerCheckout>
        </S.Link>
      </S.LinkList>
    </S.ContainerOuter>
  );
};

export default Navigation;
