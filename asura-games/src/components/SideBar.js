import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  getGamesForTimePeriod,
  setPopularityPeriod,
} from "../redux/actions/gameActions";
import { Link } from "react-router-dom";

const SideBar = () => {
  const dispatch = useDispatch();

  const { popularityPeriod, popularGames } = useSelector(
    (state) => state.games
  );

  useEffect(() => {
    dispatch(getGamesForTimePeriod("weekly"));
  }, [dispatch]);

  const timePeriodChnageHandler = (newTimePeriod) => {
    dispatch(getGamesForTimePeriod(newTimePeriod));
  };

  return (
    <StyledSideBar>
      <SideBarTitle>
        <h3>Popular</h3>
      </SideBarTitle>
      <SideBarContent>
        <ButtonGroup>
          {[
            { label: "Weekly", value: "weekly" },
            { label: "Monthly", value: "monthly" },
            { label: "All", value: "all" },
          ].map(({ label, value }) => (
            <Button
              isSelected={value === popularityPeriod}
              onClick={() => timePeriodChnageHandler(value)}
            >
              {label}
            </Button>
          ))}
        </ButtonGroup>
        {popularGames.length === 0 ? (
          <></>
        ) : (
          popularGames.map((game, index) => (
            <Card>
              <CardNumber>{index + 1}</CardNumber>
              <CardImage>
                <img src={game["background_image"]} alt={"game"} />
              </CardImage>
              <CardContent>
                <Link to={`/games/${game.name}`}>
                  <h2>{game.name}</h2>
                </Link>
                <p>
                  <span>Genres:- </span>
                  {game.genres.map((genre, i) => (
                    <Link to={`/genres/${genre.name}`}>{`${genre.name}${
                      i !== game.genres.length - 1 ? ", " : ""
                    }`}</Link>
                  ))}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </SideBarContent>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.div`
  background: #222;
  padding-bottom: 0.5rem;
`;

const SideBarTitle = styled.div`
  border-bottom: 1px solid #312f40;
`;

const SideBarContent = styled.div`
  padding: 0.8rem;
`;

const ButtonGroup = styled.div`
  background: #333;
  border-radius: 3px;
  padding: 6px;

  display: flex;
`;

const Button = styled.button`
  padding: 0.25rem 0;
  width: 33%;
  background: ${({ isSelected }) => (isSelected ? "#913fe2" : "#333")};
  border: none;
  outline: none;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: ${({ isSelected }) => (isSelected ? "#fff" : "#913fe2")};
  }
`;

const Card = styled.div`
  padding: 0.8rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const CardNumber = styled.div`
  padding: 0.2rem 0.4rem;
  font-size: 0.7rem;
  color: #888;
  border: 1px solid #888;
  border-radius: 3px;
`;

const CardImage = styled(Link)`
  img {
    width: 72px;
    height: 100px;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  h2 {
    font-size: 0.8rem;
    color: #fff;
  }
  p {
    font-size: 0.6rem;
    span {
      color: #888;
    }

    a {
      font-size: 0.6rem;
    }
  }
`;

export default SideBar;
