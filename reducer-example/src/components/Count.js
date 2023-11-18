import React, { useReducer } from "react";
import counterReducer, {
  counterInitialState,
} from "../reducers/counterReducer";
import {
  getIncrementCountAction,
  getDecrementCountAction,
} from "../actions/counterActions";

const Count = () => {
  const [currentState, dispatch] = useReducer(
    counterReducer,
    counterInitialState
  );

  return (
    <>
      <h2>Count Example</h2>
      <p>Count:- {currentState.count}</p>
      <div>
        <button onClick={() => dispatch(getIncrementCountAction())}>
          Increment
        </button>
        <button onClick={() => dispatch(getDecrementCountAction())}>
          Decrement
        </button>
      </div>
    </>
  );
};

export default Count;
