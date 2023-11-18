import React, { useCallback, useReducer } from "react";

// this is a wrapper so that we can customize dispatch to handle functions also not just action objects
const useCustomizedReducer = (reducer, initilaState) => {
  const [currentState, dispatch] = useReducer(reducer, initilaState);

  const cutomizedDispatch = useCallback(
    (action) => {
      if (typeof action === "function") {
        action(dispatch);
      } else {
        dispatch(action);
      }
    },
    [dispatch]
  );

  return [currentState, cutomizedDispatch];
};

export default useCustomizedReducer;
