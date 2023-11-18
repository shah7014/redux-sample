import { createContext, useReducer } from "react";
import { budgetInitialState, budgetReducer } from "./reducers/budgetReducer";

export const AppContext = createContext({
  budget: 0,
  expenses: [],
  dispatch: () => {},
});

const AppContextProvider = (props) => {
  const [currentState, dispatch] = useReducer(
    budgetReducer,
    budgetInitialState
  );

  return (
    <AppContext.Provider
      value={{
        budget: currentState.budget,
        expenses: currentState.expenses,
        dispatch,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
