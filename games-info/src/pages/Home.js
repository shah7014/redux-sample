import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useEffectOnce from "../hooks/useEffectOnce";
import { getGames } from "../redux/actions/gameActions";
import styled from "styled-components";
import { motion } from "framer-motion";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";

const Home = () => {
  const disaptch = useDispatch();

  const { popularGames, upcomingGames, newGames } = useSelector(
    (state) => state.games
  );

  const { isLoading } = useSelector((state) => state.app);

  useEffectOnce(() => {
    disaptch(getGames());
  });

  return (
    <div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <>
          <GameDetail />
          <GamesList>
            <h2>Popular Games</h2>
            <Games>
              {popularGames.map((g) => (
                <Game
                  key={g.id}
                  id={g.id}
                  name={g.name}
                  releaseDate={g.released}
                  image={g["background_image"]}
                />
              ))}
            </Games>
          </GamesList>
          <GamesList>
            <h2>Upcoming Games</h2>
            <Games>
              {upcomingGames.map((g) => (
                <Game
                  key={g.id}
                  id={g.id}
                  name={g.name}
                  releaseDate={g.released}
                  image={g["background_image"]}
                />
              ))}
            </Games>
          </GamesList>
          <GamesList>
            <h2>New Games</h2>
            <Games>
              {newGames.map((g) => (
                <Game
                  key={g.id}
                  id={g.id}
                  name={g.name}
                  releaseDate={g.released}
                  image={g["background_image"]}
                />
              ))}
            </Games>
          </GamesList>
        </>
      )}
    </div>
  );
};

const GamesList = styled(motion.div)`
  h2 {
    margin: 5rem 0;
  }
`;

const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  column-gap: 1.5rem;
  row-gap: 2rem;
`;

export default Home;
