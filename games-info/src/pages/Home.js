import React from "react";
import { useDispatch } from "react-redux";
import useEffectOnce from "../hooks/useEffectOnce";
import { getFetchGamesAction } from "../redux/actions/gameActions";

const Home = () => {
  const disaptch = useDispatch();

  useEffectOnce(() => {
    disaptch(getFetchGamesAction());
  });

  return <div>Home Page</div>;
};

export default Home;
