import React from "react";
import { useDispatch } from "react-redux";

const useCustomizedDispatch = () => {
  const dispatch = useDispatch();

  const cusomizedDispatch = (action) => {
    if (typeof action === "function") {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };

  return cusomizedDispatch;
};

export default useCustomizedDispatch;
