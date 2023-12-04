import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getLatestGames,
  getPoularGamesForToday,
} from "../redux/actions/gameActions";
import { Link } from "react-router-dom";
import moment from "moment";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import UseEffectOnce from "../hooks/useEffectOnce";

const HomePage = () => {
  const dispatch = useDispatch();

  const pageChangeHandler = (direction) => {
    dispatch(getLatestGames(direction, pageNo));
  };

  const {
    popularToday,
    latestUpdates: { pageNo, games },
  } = useSelector((state) => state.games);

  UseEffectOnce(() => {
    dispatch(getPoularGamesForToday());
    dispatch(getLatestGames("next", pageNo));
  });

  return (
    <>
      <HomeContainer>
        <h3>Poplular Today</h3>
        <StyledContent>
          {popularToday?.map((g) => (
            <Link to={`/game/${g.id}`}>
              <Card>
                <img src={g["background_image"]} alt="game" />
                <h4>{g.name}</h4>
              </Card>
            </Link>
          ))}
        </StyledContent>
      </HomeContainer>
      <HomeContainer>
        <h3>Latest</h3>
        <GameGrid>
          {games?.map((g) => (
            <Link to={`/game/${g.id}`}>
              <GameCard>
                <img src={g["background_image"]} alt="game" />
                <GameCardContent>
                  <h4>{g.name}</h4>
                  <p>Updated:- {moment(g.updated).fromNow()}</p>
                </GameCardContent>
              </GameCard>
            </Link>
          ))}
        </GameGrid>
        <ButtonContainer>
          {pageNo > 1 && (
            <button onClick={() => pageChangeHandler("prev")}>
              <FaChevronLeft /> Previous
            </button>
          )}
          <button onClick={() => pageChangeHandler("next")}>
            Next <FaChevronRight />
          </button>
        </ButtonContainer>
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  background: #222;
  margin-bottom: 1rem;

  h3 {
    border-bottom: 1px solid #312f40;
  }
`;

const StyledContent = styled.div`
  padding: 0.8rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 0.8rem;
  row-gap: 1rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 0.8rem;
  }
`;

const GameGrid = styled(StyledContent)`
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GameCard = styled.div`
  display: flex;
  gap: 0.8rem;
  padding: 0.8rem 0;
  border-bottom: 1px solid #312f40;

  img {
    width: 180px;
    height: 200px;
    object-fit: cover;
  }
`;

const GameCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 150px;
    height: 180px;
    object-fit: cover;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem 0;

  button {
    background: #913fe2;
    padding: 5px 10px;
    font-size: 13px;
    border-radius: 2px;
    outline: none;
    border: none;
    color: #ddd;
    margin-right: 0.5rem;
    cursor: pointer;

    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export default HomePage;
