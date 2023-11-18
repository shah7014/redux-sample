export const INCREMENT = "INCREMENT_COUNT";
export const DECREMENT = "DECREMENT_COUNT";

export const getIncrementCountAction = () => {
  return {
    type: INCREMENT,
  };
};

export const getDecrementCountAction = () => {
  return {
    type: DECREMENT,
  };
};
