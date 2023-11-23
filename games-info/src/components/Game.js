import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getGameById } from "../redux/actions/gameActions";

const Game = ({ id, name, releaseDate, image }) => {
  // const gameSelectHandler = () => {
  //   const allGames = [...populargames, ...upcominggames, ...newgames];
  //   console.log(allGames.find((g) => g.id === id));
  // };

  const { selectedgame } = useSelector((state) => state.games);

  const dispatch = useDispatch();

  const gameSelectHandler = () => {
    console.log("ID:- ", id);
    dispatch(getGameById(id));

    // remove main body scrollbar by changing overflow to hidden
    document.body.style.overflow = "hidden";
  };

  return (
    <StyledGame onClick={gameSelectHandler}>
      <h3>{name}</h3>
      <p>{releaseDate}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  text-align: center;
  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Game;
